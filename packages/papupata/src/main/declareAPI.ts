import { ConvertLegacyQuery, Method } from './types'
import { responder } from './responder'
import { IAPIDeclaration } from './index'
import { PartiallyDeclaredAPIAtEndpoint } from './partiallyDeclaredTypes'
import { TypedQueryType } from './responderTypes'
import fromPairs from 'lodash/fromPairs'
import { PapupataRouteOptions } from './config'

type ConvertIfArray<T, U> = T extends readonly string[] ? ConvertLegacyQuery<T, U> : T

export function declareAPI<RequestType, RouteOptions, RequestOptions>(
  parent: IAPIDeclaration<RequestType, RouteOptions, RequestOptions>,
  method: Method,
  path: string,
  routeOptions: RouteOptions | undefined,
  papupataOptions: PapupataRouteOptions
): PartiallyDeclaredAPIAtEndpoint<RequestOptions, RequestType, RouteOptions> {
  function params() {
    return <PT extends readonly string[]>(params: PT) => {
      const q = query(params)
      return {
        query: q,
        ...q([] as const),
      }
    }
  }
  function query<PT extends readonly string[]>(params: PT) {
    return <QT extends readonly string[] | TypedQueryType>(query: QT) => {
      const convertedQuery: ConvertIfArray<QT, typeof String> = Array.isArray(query)
        ? (fromPairs(query.map((name) => [name, String])) as any)
        : query
      const oq = optionalQuery(params, convertedQuery)
      return {
        optionalQuery: oq,
        ...oq([] as const),
      }
    }
  }
  function optionalQuery<PT extends readonly string[], QT extends TypedQueryType>(params: PT, query: QT) {
    return <OQT extends readonly string[] | TypedQueryType>(optionalQuery: OQT) => {
      const convertedOptionalQuery: ConvertIfArray<OQT, typeof String> = Array.isArray(optionalQuery)
        ? (fromPairs(optionalQuery.map((name) => [name, String])) as any)
        : optionalQuery
      const qb = queryBool(params, query, convertedOptionalQuery)
      return {
        queryBool: qb,
        ...qb([] as const),
      }
    }
  }
  function queryBool<PT extends readonly string[], QT extends TypedQueryType, OQT extends TypedQueryType>(
    params: PT,
    query: QT,
    optionalQuery: OQT
  ) {
    return <BQT extends readonly string[]>(queryBool: BQT) => {
      const convertedQueryBool: ConvertLegacyQuery<BQT, typeof Boolean> = fromPairs(
        queryBool.map((name) => [name, Boolean])
      ) as any
      const b = body(params, query, optionalQuery, convertedQueryBool)
      return {
        body: b,
        ...b<{}>(),
      }
    }
  }

  function body<
    PT extends readonly string[],
    QT extends TypedQueryType,
    OQT extends TypedQueryType,
    BQT extends TypedQueryType
  >(params: PT, query: QT, optionalQuery: OQT, boolQuery: BQT) {
    return <BT, BTInput = BT>() => {
      return responder(
        params,
        query,
        optionalQuery,
        boolQuery,
        (null as any) as BT,
        (null as any) as BTInput,
        method,
        path,
        parent,
        routeOptions,
        papupataOptions
      )
    }
  }

  return {
    params: params(),
    ...params()([] as const),
  }
}
