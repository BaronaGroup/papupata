import { DeclaredAPI, TypedQueryType } from './responderTypes'
import { ConvertLegacyQuery } from './types'

export interface PartiallyDeclaredAPIAtEndpoint<RequestOptions, RequestType, RouteOptions> {
  params: <ParamsType extends readonly string[]>(
    params: ParamsType
  ) => PartiallyDeclaredAPIAtParams<ParamsType, RequestOptions, RequestType, RouteOptions>
  query<QueryType extends TypedQueryType>(
    query: QueryType
  ): PartiallyDeclaredAPIAtQuery<readonly [], QueryType, RequestOptions, RequestType, RouteOptions>
  /** @deprecated */
  query<QueryType extends readonly string[]>(
    query: QueryType
  ): PartiallyDeclaredAPIAtQuery<
    readonly [],
    ConvertLegacyQuery<QueryType, typeof String>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  optionalQuery<OptionalQueryType extends TypedQueryType>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<readonly [], {}, OptionalQueryType, RequestOptions, RequestType, RouteOptions>

  /** @x-deprecated */
  optionalQuery<OptionalQueryType extends readonly string[]>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<
    readonly [],
    {},
    ConvertLegacyQuery<OptionalQueryType, typeof String>,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  /** @deprecated */
  queryBool: <BooleanQueryType extends readonly string[]>(
    boolQuery: BooleanQueryType
  ) => PartiallyDeclaredAPIAtBoolQuery<
    readonly [],
    {},
    {},
    ConvertLegacyQuery<BooleanQueryType, typeof Boolean>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  body: <BodyType, BodyTypeOnServer = BodyType>() => PartiallyDeclaredAPIAtBody<
    readonly [],
    {},
    {},
    {},
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    readonly [],
    {},
    {},
    {},
    {},
    {},
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}

export interface PartiallyDeclaredAPIAtParams<
  ParamsType extends readonly string[],
  RequestOptions,
  RequestType,
  RouteOptions
> {
  query<QueryType extends TypedQueryType>(
    query: QueryType
  ): PartiallyDeclaredAPIAtQuery<ParamsType, QueryType, RequestOptions, RequestType, RouteOptions>

  /** @x-deprecated */
  query<QueryType extends readonly string[]>(
    query: QueryType
  ): PartiallyDeclaredAPIAtQuery<
    ParamsType,
    ConvertLegacyQuery<QueryType, typeof String>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  optionalQuery<OptionalQueryType extends TypedQueryType>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<ParamsType, {}, OptionalQueryType, RequestOptions, RequestType, RouteOptions>

  /** @x-deprecated */
  optionalQuery<OptionalQueryType extends readonly string[]>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<
    ParamsType,
    {},
    ConvertLegacyQuery<OptionalQueryType, typeof String>,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  /** @deprecated */
  queryBool: <BooleanQueryType extends readonly string[]>(
    boolQuery: BooleanQueryType
  ) => PartiallyDeclaredAPIAtBoolQuery<
    ParamsType,
    {},
    {},
    ConvertLegacyQuery<BooleanQueryType, typeof Boolean>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  body: <BodyType, BodyTypeOnServer = BodyType>() => PartiallyDeclaredAPIAtBody<
    ParamsType,
    {},
    {},
    {},
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    ParamsType,
    {},
    {},
    {},
    {},
    {},
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}

export interface PartiallyDeclaredAPIAtQuery<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  RequestOptions,
  RequestType,
  RouteOptions
> {
  optionalQuery<OptionalQueryType extends TypedQueryType>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<
    ParamsType,
    QueryType,
    OptionalQueryType,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  /** @x-deprecated */
  optionalQuery<OptionalQueryType extends readonly string[]>(
    optionalQuery: OptionalQueryType
  ): PartiallyDeclaredAPIAtOptionalQuery<
    ParamsType,
    QueryType,
    ConvertLegacyQuery<OptionalQueryType, typeof String>,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  /** @deprecated */
  queryBool: <BooleanQueryType extends readonly string[]>(
    boolQuery: BooleanQueryType
  ) => PartiallyDeclaredAPIAtBoolQuery<
    ParamsType,
    QueryType,
    {},
    ConvertLegacyQuery<BooleanQueryType, typeof Boolean>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  body: <BodyType, BodyTypeOnServer = BodyType>() => PartiallyDeclaredAPIAtBody<
    ParamsType,
    QueryType,
    {},
    {},
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    ParamsType,
    QueryType,
    {},
    {},
    {},
    {},
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}

export interface PartiallyDeclaredAPIAtOptionalQuery<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  RequestOptions,
  RequestType,
  RouteOptions
> {
  /** @deprecated */
  queryBool: <BooleanQueryType extends readonly string[]>(
    boolQuery: BooleanQueryType
  ) => PartiallyDeclaredAPIAtBoolQuery<
    ParamsType,
    QueryType,
    OptionalQueryType,
    ConvertLegacyQuery<BooleanQueryType, typeof Boolean>,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  body: <BodyType, BodyTypeOnServer = BodyType>() => PartiallyDeclaredAPIAtBody<
    ParamsType,
    QueryType,
    OptionalQueryType,
    {},
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    RouteOptions
  >
  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    ParamsType,
    QueryType,
    OptionalQueryType,
    {},
    {},
    {},
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}

export interface PartiallyDeclaredAPIAtBoolQuery<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  RequestOptions,
  RequestType,
  RouteOptions
> {
  body: <BodyType, BodyTypeOnServer = BodyType>() => PartiallyDeclaredAPIAtBody<
    ParamsType,
    QueryType,
    OptionalQueryType,
    BoolQueryType,
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    RouteOptions
  >

  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    ParamsType,
    QueryType,
    OptionalQueryType,
    BoolQueryType,
    {},
    {},
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}

export interface PartiallyDeclaredAPIAtBody<
  ParamsType extends readonly string[],
  QueryType extends TypedQueryType,
  OptionalQueryType extends TypedQueryType,
  BoolQueryType extends TypedQueryType,
  BodyType,
  BodyTypeOnServer,
  RequestOptions,
  RequestType,
  RouteOptions
> {
  response: <ResponseType, ResponseTypeOnServer = ResponseType>(
    mapper?: (payload: ResponseTypeOnServer) => ResponseType | Promise<ResponseType>
  ) => DeclaredAPI<
    ParamsType,
    QueryType,
    OptionalQueryType,
    BoolQueryType,
    BodyType,
    BodyTypeOnServer,
    RequestOptions,
    RequestType,
    ResponseType,
    ResponseTypeOnServer,
    RouteOptions
  >
}
