import requestPromise from 'request-promise'
import { StringEnum } from '../../main/customQueryTypes'
import { APIDeclaration } from '../../main'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/requestPromiseAdapter'
import { expectFailure, prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const options = ['alpha', 'beta', 'gamma'] as const

const API = new APIDeclaration()
describe('typed-queries/string enum', function () {
  const testServer = prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
      inherentMiddleware: [middleware204],
    })
  })

  describe('single', function () {
    it('client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true })
        .query({ q1: StringEnum(options) })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: 'beta' })

      // Then
      expect(response).toEqual('Value: beta')
    })

    it('server and client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 'alpha' })

      // Then
      expect(response).toEqual('Value: alpha')
    })

    it('server only accepts one if sent many', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await requestPromise.get(api.getURL({}) + '?q1=alpha&q1=beta&q1=gamma')

      // Then
      expect(response).toEqual('Value: gamma')
    })

    it('server throws is value is missing', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await expectFailure(requestPromise.get(api.getURL({})) as any)

      // Then
      expect(response.statusCode).toEqual(500)
      expect(response.message).toMatch(/q1 is required/)
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 'alpha' })

      // Then
      expect(response).toEqual('Value: alpha')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: undefined')
    })

    it('invalid value', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringEnum(options) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const err = await expectFailure(api({ q1: 'one' as any }))

      // Then
      expect(err.message).toMatch(/one failed validation for q1/)
    })
  })

  describe('array', function () {
    it('client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true })
        .query({ q1: [StringEnum(options)] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('*')))

      // When
      const response = await api({ q1: ['beta', 'gamma'] })

      // Then
      expect(response).toEqual('Value: beta*gamma')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [StringEnum(options)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const response = await api({ q1: ['beta', 'gamma'] })

      // Then
      expect(response).toEqual('Value: beta*gamma')
    })

    it('invalid value', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [StringEnum(options)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const err = await expectFailure(api({ q1: ['beta', 'zero' as any, 'gamma'] }))

      // Then

      expect(err.message).toMatch(/zero failed validation for q1/)
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [StringEnum(options)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({ q1: ['alpha', 'gamma'] })

      // Then
      expect(response).toEqual('Value: alpha*gamma')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [StringEnum(options)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: ')
    })
  })
})
