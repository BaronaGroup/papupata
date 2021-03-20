import { APIDeclaration, skipHandlingRoute } from '../main'
import { expectFailure, prepareTestServerFor } from './test-utils'
import createRequestAdapter from '../main/request-promise-adapter'

describe('auto-implement-all-apis-test', function () {
  describe('autoImplementAllAPIs enabled', function () {
    const API = new APIDeclaration()

    prepareTestServerFor(API)
    beforeAll(() => {
      API.configure({ ...API.getConfig(), makeRequest: createRequestAdapter('json'), autoImplementAllAPIs: true })
    })

    describe('app/router present to begin with', function () {
      it('implements immediately', async function () {
        const api = API.declarePostAPI('/case1').body().response<string>()

        const resp = await expectFailure(api({ today: new Date('2020-01-31T08:54:30.000Z') }))
        expect(resp.message).toBe('501 - "Not implemented"')
      })

      it('implementing works', async function () {
        const api = API.declarePostAPI('/case1b').response<string>()

        api.implement(() => 'hello')
        const resp = await api()
        expect(resp).toBe('hello')
      })
    })

    describe('app/router not initially present', function () {
      it('implements asap', async function () {
        const baseConfig = API.getConfig()
        API.configure({ ...baseConfig, app: undefined, router: undefined })
        const api = API.declarePostAPI('/case2').body().response<string>()

        API.configure(baseConfig)
        const resp = await expectFailure(api({ today: new Date('2020-01-31T08:54:30.000Z') }))
        expect(resp.message).toBe('501 - "Not implemented"')
      })

      it('implementing works before presenting router/app', async function () {
        const baseConfig = API.getConfig()
        API.configure({ ...baseConfig, app: undefined, router: undefined })
        const api = API.declarePostAPI('/case2b').response<string>()
        api.implement(() => 'hello')

        API.configure(baseConfig)

        const resp = await api()
        expect(resp).toBe('hello')
      })
      it('implementing works before after router/app', async function () {
        const baseConfig = API.getConfig()
        API.configure({ ...baseConfig, app: undefined, router: undefined })
        const api = API.declarePostAPI('/case2c').response<string>()

        API.configure(baseConfig)
        api.implement(() => 'hello')

        const resp = await api()
        expect(resp).toBe('hello')
      })
    })

    it('declaration order overrides implementation order', async function () {
      // This test demonstrates what is typically unwanted behavior
      const specificAPI = API.declareGetAPI('/order/specific').response<string>()
      const parametrizedAPI = API.declareGetAPI('/order/:var')
        .params(['var'] as const)
        .response<string>()

      parametrizedAPI.implement((req) => req.params.var)
      specificAPI.implement(() => 'token value')

      const resp = await specificAPI()
      expect(resp).toEqual('token value') // specific was declared before parametrized
    })

    it('it is possible for an implementation to indicate that it is uninterested in the request', async function () {
      // This test demonstrates what is typically unwanted behavior
      const specificAPI = API.declareGetAPI('/specific-skip/specific').response<string>()
      const parametrizedAPI = API.declareGetAPI('/specific-skip/:var')
        .params(['var'] as const)
        .response<string>()

      specificAPI.implement(() => skipHandlingRoute)
      parametrizedAPI.implement((req) => req.params.var)

      const resp = await specificAPI()
      expect(resp).toEqual('specific') // specific opted to let parametrized handle the request
    })
  })

  describe('autoImplementAllAPIs disabled', function () {
    const API = new APIDeclaration()

    prepareTestServerFor(API)
    beforeAll(() => {
      API.configure({ ...API.getConfig(), makeRequest: createRequestAdapter('json'), autoImplementAllAPIs: false })
    })

    it('does not do automatic implementation', async function () {
      const api = API.declarePostAPI('/case1').body().response<string>()

      const resp = await expectFailure(api({ today: new Date('2020-01-31T08:54:30.000Z') }))
      expect(resp.statusCode).toBe(404)
    })

    it('does not implement asap if app/router was not present', async function () {
      const baseConfig = API.getConfig()
      API.configure({ ...baseConfig, app: undefined, router: undefined })
      const api = API.declarePostAPI('/case2').body().response<string>()

      API.configure(baseConfig)
      const resp = await expectFailure(api({ today: new Date('2020-01-31T08:54:30.000Z') }))
      expect(resp.statusCode).toBe(404)
    })

    it('implementation order overrides declaration order', async function () {
      // This test demonstrates what is typically unwanted behavior
      const specificAPI = API.declareGetAPI('/order/specific').response<string>()
      const parametrizedAPI = API.declareGetAPI('/order/:var')
        .params(['var'] as const)
        .response<string>()

      parametrizedAPI.implement((req) => req.params.var)
      specificAPI.implement(() => 'token value')

      const resp = await specificAPI()
      expect(resp).toEqual('specific') // Oops!
    })
  })
})
