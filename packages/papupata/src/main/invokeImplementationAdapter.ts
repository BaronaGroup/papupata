import { MakeRequestAdapter } from './config'
import { Response } from 'express'
import createMockResponse from './utils/mockResponse'
import handleQueryParameterTypes, { Mode } from '../handleQueryParameterTypes'

export type AssertResponseFn = (res: Response) => void

export interface InvokerImplementationOptions<T> {
  createRequest?(requestProps: { method: string; url: string }): T
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
      query,
      body,
      params,
    }

    const res = createMockResponse()

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
      req.query = handleQueryParameterTypes(
        handleQueryParameterTypes(
          handleQueryParameterTypes(req.query, api.apiUrlParameters.query, Mode.REQUIRED),
          api.apiUrlParameters.boolQuery,
          Mode.LEGACY_BOOL
        ),
        api.apiUrlParameters.optionalQuery,
        Mode.OPTIONAL
      )

      console.log('RQ', req.query, api.apiUrlParameters)

      resp = await api.implementation(req, res)
    }

    options.assertResponse?.(res as any)

    if (res.sentData) return res.sentData
    return resp
  }
}
