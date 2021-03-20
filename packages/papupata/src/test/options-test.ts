import { APIDeclaration } from '../main'
import { Request } from 'express'

describe('options-test', function () {
  describe('route options', function () {
    it('routes can have options', function () {
      interface RouteOptions {
        isCool: boolean
      }
      const apiDeclaration = new APIDeclaration<Request, RouteOptions>()

      const api = apiDeclaration.declareGetAPI('/', { isCool: true }).response<boolean>()

      expect(api.options?.isCool).toBeTruthy()
    })
  })

  describe('request options', function () {
    interface RequestOptions {
      specialValue: string
    }
    const apiDeclaration = new APIDeclaration<Request, void, RequestOptions>()
    apiDeclaration.configure({
      baseURL: '',
      makeRequest: (method, url, query, body, params, _route, requestOpts) =>
        Promise.resolve({
          method,
          url,
          query,
          body,
          params,
          requestOpts,
        }),
    })

    const noParamsAPI = apiDeclaration.declareGetAPI('/noparams').response<any>(),
      bodyAPI = apiDeclaration.declarePostAPI('/body').body<string>().response<any>(),
      traditional = apiDeclaration
        .declarePostAPI('/traditional')
        .query(['q'] as const)
        .body<{ b: string }>()
        .response<any>()

    it('traditional single object requests can have options', async function () {
      const response = await traditional({ q: '1', b: '2' }, { specialValue: '00' })
      expect(response).toEqual({
        body: {
          b: '2',
        },
        method: 'post',
        params: {},
        query: { q: '1' },
        requestOpts: { specialValue: '00' },
        url: '/traditional',
      })
    })

    it('body and others spread supports options', async function () {
      const response = await traditional({ b: '3' }, { q: '4' }, { specialValue: '01' })
      expect(response).toEqual({
        body: {
          b: '3',
        },
        method: 'post',
        params: {},
        query: { q: '4' },
        requestOpts: { specialValue: '01' },
        url: '/traditional',
      })
    })
    it('works with non-object bodies', async function () {
      const response = await bodyAPI('sweet', { specialValue: '03' })
      expect(response).toEqual({
        body: 'sweet',
        method: 'post',
        params: {},
        query: {},
        requestOpts: { specialValue: '03' },
        url: '/body',
      })
    })
    it('works with no parameter requests, albeit requiring a parameter object', async function () {
      const response = await noParamsAPI({}, { specialValue: '04' })
      expect(response).toEqual({
        body: undefined,
        method: 'get',
        params: {},
        query: {},
        requestOpts: { specialValue: '04' },
        url: '/noparams',
      })
    })
  })
})
