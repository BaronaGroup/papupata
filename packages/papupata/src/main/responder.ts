import { Application, Request as ExpressRequest, RequestHandler, Response, Router } from 'express'
import fromPairs from 'lodash/fromPairs'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import qs from 'qs'
import { Mode, parametersToZodFields } from './parametersToZodFields'
import PapupataValidationError from './PapupataValidationError'
import { PapupataRouteOptions, ValidationBehavior, ValidationFailureHandler } from './config'
import { IAPIDeclaration, skipHandlingRoute } from './index'
import {
  CallArgParam,
  CallArgs,
  CallArgsWithoutBody,
  DeclaredAPI,
  ImplFn,
  MiddlewareContainer,
  Mock,
  MockOptions,
  TypedQueryType,
} from './responderTypes'
import runExpressMiddleware from './runExpressMiddleware'
import { TypedQueryToTypes } from './TypedQueryToTypes'
import { Method } from './types'
import {
  extractHardCodedParameters,
  getQueryWithHardCodedParameters,
  matchesHardCodedParameters,
  verifyHardCodedQueryParameterDeclarationLegality,
} from './utils/hardCodedParameterSupport'
import { paramMatchers } from './utils/paramMatchers'
import { runHandlerChain } from './utils/runHandlerChain'
import { ResponseOptionsType } from './partiallyDeclaredTypes'
import { z, ZodTypeAny } from 'zod'

const defaultOnValidationFailure: ValidationFailureHandler<any, any> = (error) => {
  throw error
}

export function responder<
  ParamsType extends TypedQueryType,
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyType,
  BodyInputType,
  RequestOptions,
  RequestType,
  RouteOptions
>(
  params: ParamsType,
  query: QueryType,
  optionalQuery: OptionalQueryType,
  boolQuery: BoolQueryType,
  _bodyPlaceholder: BodyType,
  _bodyPlaceholder2: BodyInputType,
  bodySchema: ZodTypeAny | undefined,
  method: Method,
  pathWithHardCodedParameters: string,
  parent: IAPIDeclaration<RequestType, RouteOptions, RequestOptions>,
  routeOptions: RouteOptions,
  papupataOptions: PapupataRouteOptions
) {
  return {
    response<ResponseType, ResponseTypeOnServer = ResponseType>(
      responseOptions?: ResponseOptionsType<
        ResponseType,
        ResponseTypeOnServer,
        ResponseType extends ZodTypeAny ? ResponseType : undefined
      >
    ): DeclaredAPI<
      ParamsType,
      QueryType,
      OptionalQueryType,
      BoolQueryType,
      BodyType,
      BodyInputType,
      RequestOptions,
      RequestType,
      ResponseType extends z.ZodTypeAny ? z.infer<ResponseType> : ResponseType,
      ResponseTypeOnServer extends z.ZodTypeAny ? z.infer<ResponseTypeOnServer> : ResponseTypeOnServer,
      RouteOptions
    > {
      type MyMock = Mock<CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>, ResponseType>
      type ActualBodyType = BodyType extends z.ZodTypeAny ? z.infer<BodyType> : BodyType
      type ActualResponseType = ResponseType extends z.ZodTypeAny ? z.infer<ResponseType> : ResponseType

      type MockFn = (
        args: CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>,
        body?: BodyType
      ) => ActualResponseType | Promise<ActualResponseType>

      interface ActiveMock extends MockOptions {
        mockFn: MockFn
      }

      const { path, hardCodedParameters } = extractHardCodedParameters(pathWithHardCodedParameters)
      verifyHardCodedQueryParameterDeclarationLegality(
        hardCodedParameters,
        [...Object.keys(query), ...Object.keys(boolQuery)],
        Object.keys(optionalQuery)
      )

      let mockImpl: ActiveMock | null = null

      const requestSchema = z.object({
        body: bodySchema ?? z.unknown(),
        params: z.object(parametersToZodFields(params, Mode.REQUIRED)),
        query: z.object({
          ...parametersToZodFields(query, Mode.REQUIRED),
          ...parametersToZodFields(boolQuery, Mode.LEGACY_BOOL),
          ...parametersToZodFields(optionalQuery, Mode.OPTIONAL),
        }),
      })

      async function call(
        ...argsArr: CallArgParam<
          CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>,
          BodyInputType,
          CallArgsWithoutBody<ParamsType, QueryType, OptionalQueryType, BoolQueryType>,
          RequestOptions
        >
      ): Promise<ActualResponseType> {
        const separateBody =
          typeof argsArr[0] !== 'object' ||
          argsArr.length > 2 ||
          (argsArr.length === 2 && isValidAsNonBodyRequestData(argsArr[1]))

        const hasOtherArgs = separateBody && isValidAsNonBodyRequestData(argsArr[1]),
          args = hasOtherArgs ? argsArr[1] : separateBody ? {} : (argsArr[0] as any)

        const requestOptions = separateBody && hasOtherArgs ? argsArr[2] : (argsArr[1] as any)

        const reqParams = pick(args, Object.keys(params)),
          reqQuery = getQueryWithHardCodedParameters(hardCodedParameters, {
            ...pick(args, Object.keys(query)),
            ...pick(args, Object.keys(optionalQuery)),
            ...fromPairs(Object.keys(boolQuery).map((key) => [key, (!!(args as any)[key]).toString()])),
          }),
          unparsedBody = separateBody
            ? argsArr[0]
            : makeUndefinedIfEmpty(
                omit(args, [
                  ...Object.keys(params),
                  ...Object.keys(query),
                  ...Object.keys(boolQuery),
                  ...Object.keys(optionalQuery),
                ])
              )

        let reqBody: ActualBodyType
        if (bodySchema) {
          const result = bodySchema.safeParse(unparsedBody)
          if (result.success) {
            reqBody = result.data
          } else {
            const validationError = PapupataValidationError.fromZodError(result.error)
            const handledValidationFailure = await (
              parent.getConfig()?.onValidationFailure ?? defaultOnValidationFailure
            )(validationError, { body: unparsedBody }, { dataContext: 'request', callContext: 'client' })
            if (handledValidationFailure === skipHandlingRoute) throw new Error('Cannot reroute on client')
            reqBody = handledValidationFailure.body as any
          }
        } else {
          reqBody = unparsedBody as any
        }

        if (mockImpl) {
          if (!mockImpl.includeBodySeparately) {
            return Promise.resolve(
              separateBody ? mockImpl.mockFn({ ...args, ...(reqBody || {}) }) : mockImpl.mockFn(args)
            )
          }
          if (separateBody) {
            if (typeof reqBody === 'object') {
              return Promise.resolve(mockImpl.mockFn({ ...args, ...reqBody }, reqBody as any))
            } else {
              return Promise.resolve(mockImpl.mockFn(args, reqBody as any))
            }
          } else {
            return Promise.resolve(mockImpl.mockFn(args, reqBody as any))
          }
        }

        const config = parent.getConfig()
        const requestAdapter = config?.requestAdapter ?? config?.makeRequest
        if (!requestAdapter) throw new Error('Request adapter not configured')
        if (config?.requestAdapter && config.makeRequest)
          throw new Error('Cannot have makeRequest and requestAdapter configured at the same time.')

        const pathWithParams = getURL(reqParams as any)

        const response = await requestAdapter(
          method,
          pathWithParams,
          reqQuery,
          reqBody,
          reqParams,
          call,
          requestOptions
        )

        const responseSchema = getResponseSchema()

        if (!responseSchema) {
          return response
        }
        const validatedResponse = responseSchema.safeParse(response)
        if (validatedResponse.success) return validatedResponse.data

        const handledError = await (parent.getConfig()?.onValidationFailure ?? defaultOnValidationFailure)(
          validatedResponse.error,
          { response },
          {
            callContext: 'client',
            dataContext: 'response',
          }
        )
        if (handledError === skipHandlingRoute) throw new Error('Cannot reroute on client')
        return handledError.response as any
      }

      function isValidAsNonBodyRequestData(obj: any) {
        if (typeof obj !== 'object') return false
        const validKeys = [
          ...Object.keys(query),
          ...Object.keys(optionalQuery),
          ...Object.keys(boolQuery),
          ...Object.keys(params),
        ]
        return Object.keys(obj).every((key) => validKeys.includes(key))
      }

      function unmock() {
        mockImpl = null
      }

      function mock(mockFnOrValue: MyMock, options: MockOptions = {}) {
        mockImpl = {
          ...options,
          mockFn: typeof mockFnOrValue === 'function' ? (mockFnOrValue as any) : () => mockFnOrValue,
        }
      }

      function mockOnce(mockFnOrValue: MyMock, options: MockOptions = {}) {
        mockImpl = {
          ...options,
          mockFn: (args) => {
            unmock()
            return typeof mockFnOrValue === 'function' ? (mockFnOrValue as any)(args) : mockFnOrValue
          },
        }
      }

      call.implement = implement
      call.implementWithMiddleware = implementWithMiddleware
      call.implementWithExpressMiddleware = implementWithMiddleware
      call.implementWithPapupataMiddleware = implementWithPapupataMiddleware
      call.getURL = getURL
      call.unmock = unmock
      call.mock = mock
      call.mockOnce = mockOnce
      call.options = routeOptions
      call.apiDeclaration = parent
      call.method = method
      call.path = path
      call.apiUrlParameters = {
        params,
        query,
        optionalQuery,
        boolQuery,
      }
      type MyMiddlewareContainer = MiddlewareContainer<RequestType, RouteOptions>
      call.implementation = undefined as any
      call.implementationMiddleware = {} as MyMiddlewareContainer
      call.expressImplementation = expressImplementation
      call.requestSchema = requestSchema
      call.bodySchema = bodySchema
      call.responseSchema = getResponseSchema() ?? undefined

      let expressHost: undefined | Application | Router
      const config = parent.getConfig()
      if (config && config.autoImplementAllAPIs !== false && (config.router || config.app)) {
        implement(null)
      }

      type MyImplFn = ImplFn<
        RequestType,
        ParamsType,
        QueryType,
        OptionalQueryType,
        BoolQueryType,
        BodyType,
        ResponseTypeOnServer
      >

      function implement(impl: MyImplFn | null) {
        return implementWithMiddleware({}, impl)
      }

      function implementWithPapupataMiddleware(
        middleware: NonNullable<MyMiddlewareContainer['papupata']>,
        impl: MyImplFn | null
      ) {
        return implementWithMiddleware({ papupata: middleware }, impl)
      }

      async function expressImplementation(req: ExpressRequest, res: Response, next: any) {
        if (!matchesHardCodedParameters(req, hardCodedParameters)) {
          return next()
        }

        const impl = call.implementation

        try {
          const { express: expressMiddleware } = call.implementationMiddleware
          if (expressMiddleware) {
            await runExpressMiddleware(expressMiddleware, req, res)
          }
        } catch (error) {
          return next(error)
        }

        if (!impl) {
          if (parent.getConfig()?.autoImplementAllAPIs === false || papupataOptions.disableAutoImplement) {
            return next()
          }
        }
        try {
          const value = await runHandlerChain(
            [
              ...(parent.getConfig()?.inherentMiddleware || []),
              parameterConverterMiddleware,
              ...(call.implementationMiddleware.papupata || []),
              getImplVal,
            ],
            req,
            res,
            call
          )

          if (value === skipHandlingRoute) {
            return next()
          }
          if (value !== undefined) {
            res.send(value)
          }
        } catch (err) {
          next(err)
        }

        async function getImplVal() {
          if (!impl) {
            res.status(501)
            res.send('Not implemented')
          } else {
            const unmappedValue = await impl(req as any, res)
            const mappedValue = await mapResponseValue(unmappedValue)
            const validatedValue = await validateResponse(mappedValue)
            return validatedValue
          }
        }

        async function mapResponseValue(value: any) {
          if (!responseOptions) return value
          const mapper =
            typeof responseOptions === 'function'
              ? responseOptions
              : // @ts-ignore TS2638 -- seems to be a false positive
              typeof responseOptions === 'object' && responseOptions && 'mapper' in responseOptions
              ? responseOptions.mapper
              : undefined

          if (!mapper) return value

          return await mapper(value)
        }

        async function validateResponse(value: any) {
          const schema = getResponseSchema()
          if (!schema) return value

          const result = schema.safeParse(value)

          if (result.success) {
            return result.data
          }

          const error = PapupataValidationError.fromZodError(result.error)
          const errorHandlingResult = await (parent.getConfig()?.onValidationFailure ?? defaultOnValidationFailure)(
            error,
            { response: value },
            {
              dataContext: 'response',
              callContext: 'server',
              request: req,
              response: res,
            }
          )
          if (errorHandlingResult === skipHandlingRoute) throw new Error('Cannot reroute during response')
          return errorHandlingResult.response
        }
      }

      function implementWithMiddleware(middleware: RequestHandler[] | MyMiddlewareContainer, impl: MyImplFn | null) {
        call.implementation = impl
        call.implementationMiddleware = Array.isArray(middleware) ? { express: middleware } : middleware
        const config = parent.getConfig()
        if (!config) throw new Error('Papupata not configured')
        const host = config.router || config.app
        if (!host) {
          if (config.autoImplementAllAPIs !== false) return
          throw new Error('Papupata: neither router nor app configured, cannot implement routes')
        }
        if (config.routerAt && !path.startsWith(config.routerAt)) {
          throw new Error(
            `Papupata: when routerAt is provided, all routes must be its children; attempted to declare ${path} when routerAt is ${config.routerAt}`
          )
        }
        if (expressHost === host) {
          return
        }
        const strippedPath = config.routerAt ? path.substring(config.routerAt.length) : path

        host[method](strippedPath, expressImplementation)
        expressHost = host
      }

      function getURL(
        pathParamsAndQueryParams:
          | TypedQueryToTypes<ParamsType>
          | (TypedQueryToTypes<QueryType & BoolQueryType & ParamsType> & Partial<TypedQueryToTypes<OptionalQueryType>>)
      ) {
        const config = parent.getConfig()
        if (!config) throw new Error('Papupata not configured')
        if (config.baseURL === undefined) throw new Error('Cannot get URL of a route with base URL not set up')
        return config.baseURL + applyPathParams(pathParamsAndQueryParams)
      }

      parent.__apis.push(call)

      call.BodyType = null as any
      call.RequestType = null as any
      call.ResponseType = null as any
      call.ServerResponseType = null as any
      call.CallArgsType = null as any

      return call
      function applyPathParams(reqParams: TypedQueryToTypes<ParamsType>) {
        const pathWithParams = paramMatchers(params).reduce((currPath, { matcher, name }) => {
          return currPath.replace(matcher, (_, before, after) => {
            return `${before}${encodeURIComponent((reqParams as any)[name])}${after}`
          })
        }, path)

        const queryParams = getQueryWithHardCodedParameters(
          hardCodedParameters,
          omit(reqParams, [...Object.keys(params)]) as any
        )
        if (Object.keys(queryParams).length) {
          return pathWithParams + '?' + qs.stringify(queryParams)
        } else {
          return pathWithParams
        }
      }

      async function parameterConverterMiddleware(req: any, res: any, _options: any, next: any) {
        const originalQuery = req.query,
          originalParams = req.params,
          originalBody = req.body
        const validationBehavior =
          papupataOptions.validationBehavior ?? parent.getConfig()?.validationBehavior ?? ValidationBehavior.THROW
        try {
          const validationInput = { params: req.params, query: req.query, body: req.body }

          const validationResult = requestSchema.safeParse(validationInput)
          let stringParams = parent.getConfig()?.strictPathAndQueryParams

          if (validationResult.success) {
            req.params = { ...(stringParams ? {} : req.params), ...validationResult.data.params }
            req.query = { ...(stringParams ? {} : req.query), ...validationResult.data.query }
            req.body = validationResult.data.body
          } else {
            const errorHandlingResult = await (parent.getConfig()?.onValidationFailure ?? defaultOnValidationFailure)(
              PapupataValidationError.fromZodError(validationResult.error),
              validationInput,
              { dataContext: 'request', callContext: 'server', request: req, response: res }
            )
            if (errorHandlingResult === skipHandlingRoute) return skipHandlingRoute
            req.params = { ...(stringParams ? {} : req.params), ...errorHandlingResult.params }
            req.query = { ...(stringParams ? {} : req.query), ...errorHandlingResult.query }
            req.body = errorHandlingResult.body
          }

          const resp = await next()
          return resp
        } catch (err) {
          if (validationBehavior === ValidationBehavior.REROUTE && err instanceof PapupataValidationError) {
            return skipHandlingRoute
          } else {
            throw err
          }
        } finally {
          req.query = originalQuery
          req.params = originalParams
          req.body = originalBody
        }
      }

      function getResponseSchema() {
        if (!responseOptions || typeof responseOptions !== 'object') return null
        if (typeof responseOptions === 'function') return null

        // @ts-ignore TS2638 -- seems to be a false positive
        if ('safeParse' in responseOptions) return responseOptions as ZodTypeAny
        if ('schema' in responseOptions && responseOptions.schema) return responseOptions.schema as ZodTypeAny

        return null
      }
    },
  }
}

function makeUndefinedIfEmpty<T>(input: T): T | undefined {
  if (typeof input === 'object' && input && Object.keys(input).length === 0) return undefined
  return input
}
