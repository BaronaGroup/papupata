import {
  Config,
  MakeRequestAdapter as MakeRequestAdapterImpl,
  PapupataMiddleware as PapupataMiddlewareType,
  PapupataRouteOptions,
} from './config'
import { Request, Handler } from 'express'
import { declareAPI } from './declareAPI'
import middleware204 from './middleware204'

export type TypedRequest<RequestBaseType, Params, Query, Body> = Omit<RequestBaseType, 'params' | 'query' | 'body'> & {
  params: Params
  query: Query
  body: Body
}

export type MakeRequestAdapter<RequestOptions = void> = MakeRequestAdapterImpl<RequestOptions>
export type PapupataMiddleware<RequestType = Request, RouteOptions = void> = PapupataMiddlewareType<
  RequestType,
  RouteOptions
>

interface API {
  unmock(): void
  implementation: any
  implementWithMiddleware: any
  implementationMiddleware: any
  implement(implementation: any): any
}

export interface IAPIDeclaration<RequestType, RouteOptions, RequestOptions> {
  getConfig(): Config<RequestType, RouteOptions, RequestOptions> | null
  __apis: Array<API>
}

export class APIDeclaration<RequestType = Request, RouteOptions = void, RequestOptions = void>
  implements IAPIDeclaration<RequestType, RouteOptions, RequestOptions> {
  private config: Config<RequestType, RouteOptions, RequestOptions> | null = null
  public __apis: Array<API> = []

  public configure(config: Config<RequestType, RouteOptions, RequestOptions> | null) {
    if (config && config.router && config.app) throw new Error('Config should only have app or router, not both')
    const needsAutoImplement =
      config &&
      config.autoImplementAllAPIs !== false &&
      (!this.config || config.router !== this.config.router || config.app !== this.config.app) &&
      (config.router || config.app)

    this.config = config
    if (needsAutoImplement) {
      this.implementAllAPIs()
    }
  }

  public updateConfig(config: Config<RequestType, RouteOptions, RequestOptions> | null) {
    this.configure({ ...this.getConfig(), ...config })
  }

  public declareGetAPI(path: string, routeOptions?: RouteOptions, papupataOptions: PapupataRouteOptions = {}) {
    return declareAPI<RequestType, RouteOptions, RequestOptions>(this, 'get', path, routeOptions, papupataOptions)
  }

  public declarePostAPI(path: string, routeOptions?: RouteOptions, papupataOptions: PapupataRouteOptions = {}) {
    return declareAPI<RequestType, RouteOptions, RequestOptions>(this, 'post', path, routeOptions, papupataOptions)
  }

  public declarePutAPI(path: string, routeOptions?: RouteOptions, papupataOptions: PapupataRouteOptions = {}) {
    return declareAPI<RequestType, RouteOptions, RequestOptions>(this, 'put', path, routeOptions, papupataOptions)
  }

  public declarePatchAPI(path: string, routeOptions?: RouteOptions, papupataOptions: PapupataRouteOptions = {}) {
    return declareAPI<RequestType, RouteOptions, RequestOptions>(this, 'patch', path, routeOptions, papupataOptions)
  }

  public declareDeleteAPI(path: string, routeOptions?: RouteOptions, papupataOptions: PapupataRouteOptions = {}) {
    return declareAPI<RequestType, RouteOptions, RequestOptions>(this, 'delete', path, routeOptions, papupataOptions)
  }

  public implementAllAPIs() {
    for (const api of this.__apis) {
      const implementation = api.implementation
      if (implementation) {
        api.implementWithMiddleware(api.implementationMiddleware, api.implementation)
      } else {
        api.implement(null)
      }
    }
  }

  public getConfig() {
    return this.config
  }

  public getDeclaredAPIs() {
    return [...this.__apis]
  }

  public unmockAll() {
    for (const api of this.__apis) {
      api.unmock()
    }
  }
}

export const handleUndefinedResponsesMiddleware = middleware204
export const skipHandlingRoute = 'papupata-skip-1d7eb033-19f8-47f7-a96c-f07d90d849f2' as any

export function convertExpressMiddleware(expressMiddleware: Handler): PapupataMiddleware<any, any> {
  return async (req, res, _route, next) => {
    const error = await new Promise((resolve, reject) =>
      expressMiddleware(req, res, (err: any) => (err ? reject : resolve)(err))
    )
    if (error) throw error
    return await next()
  }
}
