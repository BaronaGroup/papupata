import requestPromise from 'request-promise'
import { APIDeclaration } from '../../main'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/request-promise-adapter'
import { expectFailure, prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-queries/string', function () {
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
        .query({ q1: String })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: 'hello' })

      // Then
      expect(response).toEqual('Value: hello')
    })

    it('server and client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: String }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 'hello' })

      // Then
      expect(response).toEqual('Value: hello')
    })

    it('server only accepts one if sent many', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: String }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await requestPromise.get(api.getURL({}) + '?q1=alpha&q1=beta&q1=gamma')

      // Then
      expect(response).toEqual('Value: alpha')
    })

    it('server throws is value is missing', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: String }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await expectFailure(requestPromise.get(api.getURL({})) as any)

      // Then
      expect(response.statusCode).toEqual(500)
      expect(response.message).toMatch(/q1 is required/)
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: String }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 'hello' })

      // Then
      expect(response).toEqual('Value: hello')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: String }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: undefined')
    })
  })

  describe('array', function () {
    it('client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true })
        .query({ q1: [String] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('*')))

      // When
      const response = await api({ q1: ['hello', 'user'] })

      // Then
      expect(response).toEqual('Value: hello*user')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [String] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const response = await api({ q1: ['hello', 'user'] })

      // Then
      expect(response).toEqual('Value: hello*user')
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [String] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({ q1: ['hello', 'user'] })

      // Then
      expect(response).toEqual('Value: hello*user')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [String] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: undefined')
    })
  })
})
