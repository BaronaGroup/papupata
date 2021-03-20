import { Integer, StringEnum, StringMatching } from '../customQueryTypes'
import { APIDeclaration } from '../main'
import { ValidationBehavior } from '../main/config'
import middleware204 from '../main/middleware204'
import createRequestAdapter from '../main/request-promise-adapter'
import { expectFailure, prepareTestServerFor } from './test-utils'

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

  describe('string', function () {
    it('basic case', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: String }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 'alpha' })

      // Then
      expect(response).toEqual('alpha / string')
    })
  })

  describe('string enum', function () {
    it('basic case', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringEnum(['a', 'b'] as const) })
        .response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 'b' })

      // Then
      expect(response).toEqual('b / string')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringEnum(['a', 'b'] as const) })
        .response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const err = await expectFailure(api({ param: 'q' as any }))

      // Then
      expect(err.message).toMatch(/q failed validation for param/)
    })
  })

  describe('string regex', function () {
    it('basic case', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringMatching(/^abc/) })
        .response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 'abc' })

      // Then
      expect(response).toEqual('abc / string')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringMatching(/^abc/) })
        .response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const err = await expectFailure(api({ param: 'q' }))

      // Then
      expect(err.message).toMatch(/q failed validation for param/)
    })
  })

  describe('number', function () {
    it('basic case', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Number }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 99 })

      // Then
      expect(response).toEqual('99 / number')
    })

    it('negative', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Number }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: -99 })

      // Then
      expect(response).toEqual('-99 / number')
    })

    it('decimal', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Number }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 99.99 })

      // Then
      expect(response).toEqual('99.99 / number')
    })

    it('infinity', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Number }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: Infinity })

      // Then
      expect(response).toEqual('Infinity / number')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Number }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const err = await expectFailure(api({ param: 'test' as any }))

      // Then
      expect(err.message).toMatch(/test is not a valid number for param/)
    })
  })

  describe('integer', function () {
    it('basic case', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Integer }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: 99 })

      // Then
      expect(response).toEqual('99 / number')
    })

    it('negative', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Integer }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: -99 })

      // Then
      expect(response).toEqual('-99 / number')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Integer }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      expect((await expectFailure(api({ param: 'test' as any }))).message).toMatch(
        /test is not a valid integer for param/
      )
      expect((await expectFailure(api({ param: NaN }))).message).toMatch(/NaN is not a valid integer for param/)
      expect((await expectFailure(api({ param: Infinity }))).message).toMatch(
        /Infinity is not a valid integer for param/
      )
    })
  })

  describe('boolean', function () {
    it('true', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Boolean }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: true })

      // Then
      expect(response).toEqual('true / boolean')
    })

    it('false', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Boolean }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: false })

      // Then
      expect(response).toEqual('false / boolean')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Boolean }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      expect((await expectFailure(api({ param: 'test' as any }))).message).toMatch(
        /test is not a valid boolean for param/
      )
    })
  })

  describe('date', function () {
    it('a valid date', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Date }).response<string>()

      api.implement((req) => `${req.params.param.toISOString()} / ${typeof req.params.param}`)

      // When
      const response = await api({ param: new Date('2020-02-14T12:00:00.000Z') })

      // Then
      expect(response).toEqual('2020-02-14T12:00:00.000Z / object')
    })

    it('invalid', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path).params({ param: Date }).response<string>()

      api.implement((req) => `${req.params.param} / ${typeof req.params.param}`)

      expect((await expectFailure(api({ param: 'test' as any }))).message).toMatch(/test is not a valid date for param/)
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
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringMatching(/^ok$/) })
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
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path)
        .params({ param: StringMatching(/^ok$/) })
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
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path, void 0, { validationBehavior: ValidationBehavior.THROW })
        .params({ param: StringMatching(/^ok$/) })
        .response<string>()

      api.implement(() => `entered handler, this should not happen`)

      // When
      const err = await expectFailure(api({ param: 'bad' }))

      // Then
      expect(err.statusCode).toEqual(500)
    })

    it('API itself can override (to reroute)', async function () {
      const path = getUniquePath() + '/:param'
      const api = API.declareGetAPI(path, void 0, { validationBehavior: ValidationBehavior.REROUTE })
        .params({ param: StringMatching(/^ok$/) })
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
