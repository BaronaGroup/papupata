import { StringMatching } from '../../customQueryTypes'
import { APIDeclaration } from '../../main'
import { ValidationBehavior } from '../../main/config'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/request-promise-adapter'
import { expectFailure, prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-path-params', function () {
  prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
      inherentMiddleware: [middleware204],
    })
  })

  describe('validation behavior', function () {
    // using StringMatching here is kind nice here as there are no type errors from invalid values
    beforeEach(() => {
      API.updateConfig({
        validationBehavior: undefined,
      })
    })

    it('throws by default', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ param: StringMatching(/^ok$/) })
        .response<string>()

      api.implement(() => `entered handler, this should not happen`)

      // When
      const err = await expectFailure(api({ param: 'bad' }))

      // Then
      expect(err.statusCode).toEqual(500)
    })

    it('rerouting is possible', async function () {
      API.updateConfig({
        validationBehavior: ValidationBehavior.REROUTE,
      })
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ param: StringMatching(/^ok$/) })
        .response<string>()

      const fallbackAPI = API.declareGetAPI(path).params({ param: String }).response<string>()

      api.implement(() => `entered handler, this should not happen`)
      fallbackAPI.implement(() => `rerouted, nice!`)

      // When
      const response = await api({ param: 'bad' })

      // Then
      expect(response).toEqual('rerouted, nice!')
    })

    it('API itself can override (to throw)', async function () {
      API.updateConfig({
        validationBehavior: ValidationBehavior.REROUTE,
      })
      const path = getUniquePath()
      const api = API.declareGetAPI(path, void 0, { validationBehavior: ValidationBehavior.THROW })
        .query({ param: StringMatching(/^ok$/) })
        .response<string>()

      api.implement(() => `entered handler, this should not happen`)

      // When
      const err = await expectFailure(api({ param: 'bad' }))

      // Then
      expect(err.statusCode).toEqual(500)
    })

    it('API itself can override (to reroute)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, void 0, { validationBehavior: ValidationBehavior.REROUTE })
        .query({ param: StringMatching(/^ok$/) })
        .response<string>()

      const fallbackAPI = API.declareGetAPI(path).params({ param: String }).response<string>()

      api.implement(() => `entered handler, this should not happen`)
      fallbackAPI.implement(() => `rerouted, nice!`)

      // When
      const response = await api({ param: 'bad' })

      // Then
      expect(response).toEqual('rerouted, nice!')
    })
  })
})
