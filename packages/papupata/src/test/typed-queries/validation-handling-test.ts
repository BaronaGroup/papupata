import { Integer, StringMatching } from '../../main/common-types'
import { APIDeclaration } from '../../main'
import { ValidationBehavior } from '../../main/config'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/requestPromiseAdapter'
import PapupataValidationError from '../../main/PapupataValidationError'
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
        inherentMiddleware: [],
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

      const fallbackAPI = API.declareGetAPI(path).query({ param: String }).response<string>()

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

      const fallbackAPI = API.declareGetAPI(path).query({ param: String }).response<string>()

      api.implement(() => `entered handler, this should not happen`)
      fallbackAPI.implement(() => `rerouted, nice!`)

      // When
      const response = await api({ param: 'bad' })

      // Then
      expect(response).toEqual('rerouted, nice!')
    })

    describe('middleware timing', function () {
      function createMiddleware(valueContainer: { value: any }) {
        return (req: any, _res: any, _opt: any, next: any) => {
          valueContainer.value = req.query.param
          return next()
        }
      }

      it('the validation and conversion take place between inherent and route-specific middleware (validation passes)', async function () {
        const observedInInherentMiddleware = { value: null as any }
        const observedInRouteMiddleware = { value: null as any }
        API.updateConfig({
          inherentMiddleware: [createMiddleware(observedInInherentMiddleware)],
        })
        const path = getUniquePath()
        const api = API.declareGetAPI(path).query({ param: Integer }).response<string>()

        api.implementWithPapupataMiddleware([createMiddleware(observedInRouteMiddleware)], () => 'ok')

        // When
        await api({ param: 99 })

        // Then
        expect(observedInInherentMiddleware.value).toEqual('99')
        expect(observedInRouteMiddleware.value).toEqual(99)
      })

      it('the validation and conversion take place between inherent and route-specific middleware (validation fails)', async function () {
        const observedInInherentMiddleware = { value: null as any }
        const observedInRouteMiddleware = { value: null as any }
        API.updateConfig({
          inherentMiddleware: [createMiddleware(observedInInherentMiddleware)],
        })
        const path = getUniquePath()
        const api = API.declareGetAPI(path).query({ param: Integer }).response<string>()

        api.implementWithPapupataMiddleware([createMiddleware(observedInRouteMiddleware)], () => 'ok')

        // When
        await expectFailure(api({ param: 1.5 }))

        // Then
        expect(observedInInherentMiddleware.value).toEqual('1.5')
        expect(observedInRouteMiddleware.value).toEqual(null)
      })

      it('inherent middleware can catch PapupataValidationError', async function () {
        let caught: any
        API.updateConfig({
          inherentMiddleware: [
            async (_req, _res, _opt, next) => {
              try {
                return await next()
              } catch (err) {
                caught = err
                return 'ok'
              }
            },
          ],
        })
        const path = getUniquePath()
        const api = API.declareGetAPI(path).query({ param: Integer }).response<string>()

        api.implement(() => 'ok')

        // When
        await api({ param: 1.5 })

        // Then
        expect(caught).toBeInstanceOf(PapupataValidationError)
      })
    })
  })
})
