import { Application, Router, Response } from 'express'
import { Method } from './types'

export enum ValidationBehavior {
  THROW = 'THROW',
  REROUTE = 'REROUTE',
}

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
  requestAdapter?: MakeRequestAdapter<RequestOptions>
  /** @deprecated Use the field requestAdapter instead */
  makeRequest?: MakeRequestAdapter<RequestOptions>
  router?: Router
  routerAt?: string
  app?: Application
  inherentMiddleware?: Array<PapupataMiddleware<RequestType, RouteOptions>>
  autoImplementAllAPIs?: boolean
  validationBehavior?: ValidationBehavior
}

export interface PapupataRouteOptions {
  disableAutoImplement?: boolean
  validationBehavior?: ValidationBehavior
}
