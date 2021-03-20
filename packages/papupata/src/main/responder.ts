import { Application, Request as ExpressRequest, RequestHandler, Response, Router } from 'express'
import fromPairs from 'lodash/fromPairs'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import qs from 'qs'
import handleQueryParameterTypes, { Mode } from '../handleQueryParameterTypes'
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
import { ActualTypeMap, Method, StringTupleElementTypes } from './types'
import {
  extractHardCodedParameters,
  getQueryWithHardCodedParameters,
  matchesHardCodedParameters,
  verifyHardCodedQueryParameterDeclarationLegality,
} from './utils/hardCodedParameterSupport'
import { paramMatchers } from './utils/paramMatchers'
import { runHandlerChain } from './utils/runHandlerChain'

export function responder<
  ParamsType extends readonly string[],
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
  method: Method,
  pathWithHardCodedParameters: string,
  parent: IAPIDeclaration<RequestType, RouteOptions, RequestOptions>,
  routeOptions: RouteOptions
) {
  /*type CallArgsWithoutBody = ActualTypeMap<StringTupleElementTypes<ParamsType>, string> &
    ActualTypeMap<StringTupleElementTypes<QueryType>, string> &
    ActualOptionalTypeMap<StringTupleElementTypes<OptionalQueryType>, string> &
    ActualTypeMap<StringTupleElementTypes<BoolQueryType>, boolean>*/
  //type CallArgs = BodyInputType & CallArgsWithoutBody

  /*type CallArgParam = {} extends CallArgs
    ? [] | [CallArgs] | [CallArgs, RequestOptions]
    :
        | [CallArgs]
        | [CallArgs, RequestOptions]
        | [BodyInputType, CallArgsWithoutBody]
        | [BodyInputType, CallArgsWithoutBody, RequestOptions]*/

  return {
    response<ResponseType, ResponseTypeOnServer = ResponseType>(
      mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
    ): DeclaredAPI<
      ParamsType,
      QueryType,
      OptionalQueryType,
      BoolQueryType,
      BodyType,
      BodyInputType,
      RequestOptions,
      RequestType,
      ResponseType,
      ResponseTypeOnServer,
      RouteOptions
    > {
      type MyMock = Mock<CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>, ResponseType>

      type MockFn = (
        args: CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>,
        body?: BodyType
      ) => ResponseType | Promise<ResponseType>

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

      function call(
        ...argsArr: CallArgParam<
          CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>,
          BodyInputType,
          CallArgsWithoutBody<ParamsType, QueryType, OptionalQueryType, BoolQueryType>,
          RequestOptions
        >
      ): Promise<ResponseType> {
        const separateBody =
          typeof argsArr[0] !== 'object' ||
          argsArr.length > 2 ||
          (argsArr.length === 2 && isValidAsNonBodyRequestData(argsArr[1]))

        const hasOtherArgs = separateBody && isValidAsNonBodyRequestData(argsArr[1]),
          args = hasOtherArgs ? argsArr[1] : separateBody ? {} : (argsArr[0] as any)

        const requestOptions = separateBody && hasOtherArgs ? argsArr[2] : (argsArr[1] as any)

        const reqParams = pick(args, params),
          reqQuery = getQueryWithHardCodedParameters(hardCodedParameters, {
            ...pick(args, Object.keys(query)),
            ...pick(args, Object.keys(optionalQuery)),
            ...fromPairs(Object.keys(boolQuery).map((key) => [key, (!!(args as any)[key]).toString()])),
          }),
          reqBody = separateBody
            ? argsArr[0]
            : makeUndefinedIfEmpty(
                omit(args, [...params, ...Object.keys(query), ...Object.keys(boolQuery), ...Object.keys(optionalQuery)])
              )

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
        if (!config || !config.makeRequest) throw new Error('Request adapter not configured')

        const pathWithParams = getURL(reqParams as any)

        return config.makeRequest(method, pathWithParams, reqQuery, reqBody, reqParams, call, requestOptions)
      }

      function isValidAsNonBodyRequestData(obj: any) {
        if (typeof obj !== 'object') return false
        const validKeys = [...Object.keys(query), ...Object.keys(optionalQuery), ...Object.keys(boolQuery), ...params]
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

      let expressHost: undefined | Application | Router
      const config = parent.getConfig()
      if (config?.autoImplementAllAPIs && (config.router || config.app)) {
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
          if (parent.getConfig()?.autoImplementAllAPIs) {
            res.status(501)
            res.send('Not implemented')
          } else {
            return next()
          }
          return
        }
        try {
          const queryConversion1 = handleQueryParameterTypes(req.query, query, Mode.REQUIRED)
          const queryConversion2 = handleQueryParameterTypes(queryConversion1, boolQuery, Mode.LEGACY_BOOL)
          const convertedQuery = handleQueryParameterTypes(queryConversion2, optionalQuery, Mode.OPTIONAL)

          const originalQuery = req.query
          req.query = convertedQuery
          let value: any
          try {
            value = await runHandlerChain(
              [
                ...(parent.getConfig()?.inherentMiddleware || []),
                ...(call.implementationMiddleware.papupata || []),
                getImplVal,
              ],
              req,
              res,
              call
            )
          } finally {
            req.query = originalQuery
          }
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
          const unmappedValue = await impl(req as any, res)
          return mapper ? await mapper(unmappedValue) : unmappedValue
        }
      }

      function implementWithMiddleware(middleware: RequestHandler[] | MyMiddlewareContainer, impl: MyImplFn | null) {
        call.implementation = impl
        call.implementationMiddleware = Array.isArray(middleware) ? { express: middleware } : middleware
        const config = parent.getConfig()
        if (!config) throw new Error('Papupata not configured')
        const host = config.router || config.app
        if (!host) {
          if (config.autoImplementAllAPIs) return
          throw new Error('Papupata: neither router nor app configured, cannot implement routes')
        }
        if (config.routerAt && !path.startsWith(config.routerAt)) {
          throw new Error('Papupata: when routerAt is provided, all routes must be its children.')
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
          | ActualTypeMap<StringTupleElementTypes<ParamsType>, string>
          | (ActualTypeMap<StringTupleElementTypes<ParamsType>, string> &
              TypedQueryToTypes<QueryType & BoolQueryType> &
              Partial<TypedQueryToTypes<OptionalQueryType>>)
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
      function applyPathParams(reqParams: ActualTypeMap<StringTupleElementTypes<ParamsType>, string>) {
        const pathWithParams = paramMatchers(params).reduce((currPath, { matcher, name }) => {
          return currPath.replace(matcher, (_, before, after) => {
            return `${before}${encodeURIComponent((reqParams as any)[name])}${after}`
          })
        }, path)

        const queryParams = getQueryWithHardCodedParameters(hardCodedParameters, omit(reqParams, [...params]) as any)
        if (Object.keys(queryParams).length) {
          return pathWithParams + '?' + qs.stringify(queryParams)
        } else {
          return pathWithParams
        }
      }
    },
  }
}

function makeUndefinedIfEmpty<T>(input: T): T | undefined {
  if (typeof input === 'object' && input && Object.keys(input).length === 0) return undefined
  return input
}
