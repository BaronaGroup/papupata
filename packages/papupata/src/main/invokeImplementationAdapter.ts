import { MakeRequestAdapter } from './config'
import { Response } from 'express'
import createMockResponse from './utils/mockResponse'
import qs from 'qs'

export type AssertResponseFn = (res: Response) => void

export interface InvokerImplementationOptions<T> {
  createRequest?(requestProps: { method: string; url: string }): T
  createResponse?(responseProps: any): any
  assertResponse?: AssertResponseFn
  withMiddleware?: boolean
}
type Options<T> = InvokerImplementationOptions<T>

export default function createInvokeImplementationAdapter<T = any>(options: Options<T>): MakeRequestAdapter<any> {
  return async (method, path, query, body, params, api) => {
    if (!api.implementation) {
      throw new Error('API not implemented')
    }

    const requestProps = { method, url: path }
    const requestBase = options?.createRequest?.({ method, url: path }) || requestProps

    const req = {
      ...requestBase,
      query: qs.parse(qs.stringify(query)),
      body: body ?? {},
      params: qs.parse(qs.stringify(params)),
    }

    const mockResponse = createMockResponse()
    const res = options?.createResponse?.(mockResponse) ?? mockResponse

    let resp: any
    if (options.withMiddleware) {
      let nextCalled = false
      let error: any = null
      let resolveNextCalled: () => void
      const nextCalledPromise = new Promise<void>((resolve) => {
        resolveNextCalled = resolve
      })

      api.expressImplementation(req, res, (err: any) => {
        nextCalled = true
        error = err
        resolveNextCalled()
      })
      await Promise.race([res.sentPromise, nextCalledPromise])

      if (error) throw error
      if (nextCalled) return
    } else {
      // The middleware path takes care of this in the express request implementation
      const parseResult = api.requestSchema.parse(req)
      Object.assign(req, parseResult)

      resp = await api.implementation(req, res)
    }

    options.assertResponse?.(res as any)

    if (res.sentData) return res.sentData
    return resp
  }
}
