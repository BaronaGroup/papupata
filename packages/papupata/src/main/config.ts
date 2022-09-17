import { Application, Router, Response } from 'express'
import { Method } from './types'
import PapupataValidationError from './PapupataValidationError'

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

export type ValidationFailureHandler<TRequest, TResponse> = (
  error: PapupataValidationError,
  value: unknown,
  context: {
    dataContext: 'body' | 'response'
    callContext: 'client' | 'server'
    request?: TRequest
    response?: TResponse
  }
) => Promise<unknown | 'REROUTE'> | unknown | 'REROUTE' | never

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
  /**
   * @deprecated Provide onValidationFailure function instead; it can return REROUTE or promise of one to prompt rerouting, throw its parameter (or something else) or simply return nothing to ignore the failure.
   */
  validationBehavior?: ValidationBehavior
  onValidationFailure?: ValidationFailureHandler<RequestType, Response>
}

export interface PapupataRouteOptions {
  disableAutoImplement?: boolean
  validationBehavior?: ValidationBehavior
}
