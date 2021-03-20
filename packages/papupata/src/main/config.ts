import { Application, Router, Response } from 'express'
import { Method } from './types'

export type PapupataMiddleware<RequestType, RouteOptions> = (
  req: RequestType,
  res: Response,
  route: { options?: RouteOptions; method: Method; path: string },
  next: () => Promise<any>
) => Promise<any>

export type MakeRequestAdapter<RequestOptions = void> = (
  method: string,
  url: string,
  query: any,
  body: any,
  params: any,
  route: any,
  requestOptions?: RequestOptions
) => Promise<any>

export interface Config<RequestType = void, RouteOptions = void, RequestOptions = void> {
  baseURL?: string
  makeRequest?: MakeRequestAdapter<RequestOptions>
  router?: Router
  routerAt?: string
  app?: Application
  inherentMiddleware?: Array<PapupataMiddleware<RequestType, RouteOptions>>
  autoImplementAllAPIs?: boolean
}

export interface PapupataRouteOptions {
  disableAutoImplement?: boolean
}
