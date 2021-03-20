import { Request as ExpressRequest, RequestHandler, Response } from 'express'
import { PapupataMiddleware, TypedRequest } from '.'
import { TypedQueryToTypes } from './TypedQueryToTypes'
import { ActualTypeMap, Method, StringTupleElementTypes } from './types'

type TypedQueryFieldType = typeof String | typeof Number | typeof Boolean | typeof Date

export type TypedQueryType = {
  [key: string]: TypedQueryFieldType | [TypedQueryFieldType]
}

export type CallArgParam<CallArgs, BodyInputType, CallArgsWithoutBody, RequestOptions> = {} extends CallArgs
  ? [] | [CallArgs] | [CallArgs, RequestOptions]
  :
      | [CallArgs]
      | [CallArgs, RequestOptions]
      | [BodyInputType, CallArgsWithoutBody]
      | [BodyInputType, CallArgsWithoutBody, RequestOptions]

export type CallArgsWithoutBody<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType
> = ActualTypeMap<StringTupleElementTypes<ParamsType>, string> &
  TypedQueryToTypes<QueryType & BoolQueryType> &
  Partial<TypedQueryToTypes<OptionalQueryType & BoolQueryType>>

type ActualRequestType<
  RequestType,
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyType
> = TypedRequest<
  RequestType,
  ActualTypeMap<StringTupleElementTypes<ParamsType>, string>,
  TypedQueryToTypes<QueryType & BoolQueryType> & Partial<TypedQueryToTypes<OptionalQueryType & BoolQueryType>>,
  BodyType
>

export type ImplFn<
  RequestType,
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyType,
  ResponseTypeOnServer
> = (
  req: ActualRequestType<RequestType, ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyType>,
  res: Response
) => Promise<ResponseTypeOnServer> | ResponseTypeOnServer

export type MiddlewareContainer<RequestType, RouteOptions> = {
  express?: RequestHandler[]
  papupata?: Array<PapupataMiddleware<RequestType, RouteOptions>>
}

export type Mock<CallArgs, ResponseType> = ResponseType | ((args: CallArgs) => ResponseType | Promise<ResponseType>)

export type CallArgs<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyInputType
> = BodyInputType & CallArgsWithoutBody<ParamsType, QueryType, OptionalQueryType, BoolQueryType>

export interface MockOptions {
  includeBodySeparately?: boolean
}

export interface DeclaredAPI<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyType,
  BodyInputType,
  RequestOptions,
  RequestType,
  ResponseType,
  ResponseTypeOnServer,
  RouteOptions
> {
  (
    ...argsArr: CallArgParam<
      CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>,
      BodyInputType,
      CallArgsWithoutBody<ParamsType, QueryType, OptionalQueryType, BoolQueryType>,
      RequestOptions
    >
  ): Promise<ResponseType>
  implement: (
    impl: ImplFn<
      RequestType,
      ParamsType,
      QueryType,
      OptionalQueryType,
      BoolQueryType,
      BodyType,
      ResponseTypeOnServer
    > | null
  ) => void
  implementation?: ImplFn<
    RequestType,
    ParamsType,
    QueryType,
    OptionalQueryType,
    BoolQueryType,
    BodyType,
    ResponseTypeOnServer
  >
  implementationMiddleware?: MiddlewareContainer<RequestType, RouteOptions>
  /** @deprecated */
  implementWithMiddleware: (
    middleware:
      | RequestHandler[]
      | { express: RequestHandler[]; papupata?: Array<PapupataMiddleware<RequestType, RouteOptions>> },
    impl: ImplFn<RequestType, ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyType, ResponseTypeOnServer>
  ) => void
  implementWithExpressMiddleware: (
    middleware: RequestHandler[],
    impl: ImplFn<RequestType, ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyType, ResponseTypeOnServer>
  ) => void
  implementWithPapupataMiddleware: (
    middleware: Array<PapupataMiddleware<RequestType, RouteOptions>>,
    impl: ImplFn<RequestType, ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyType, ResponseTypeOnServer>
  ) => void
  getURL: (
    pathParams:
      | ActualTypeMap<StringTupleElementTypes<ParamsType>, string>
      | (ActualTypeMap<StringTupleElementTypes<ParamsType>, string> &
          TypedQueryToTypes<QueryType & BoolQueryType> &
          Partial<TypedQueryToTypes<OptionalQueryType & BoolQueryType>>)
  ) => string
  ResponseType: ResponseType
  ServerResponseType: ResponseTypeOnServer
  BodyType: BodyType
  CallArgsType: CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>
  RequestType: ActualRequestType<RequestType, ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyType>
  mockOnce: (
    fn: Mock<CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>, ResponseType>,
    options?: MockOptions
  ) => void
  mock: (
    fn: Mock<CallArgs<ParamsType, QueryType, OptionalQueryType, BoolQueryType, BodyInputType>, ResponseType>,
    options?: MockOptions
  ) => void
  unmock: () => void
  options?: RouteOptions
  apiUrlParameters: {
    params: ParamsType
    query: QueryType
    optionalQuery: OptionalQueryType
    boolQuery: BoolQueryType
  }
  method: Method
  apiDeclaration: any
  expressImplementation(req: ExpressRequest, res: Response, next: any): Promise<void>
  path: string
}
