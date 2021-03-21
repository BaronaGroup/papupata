import requestPromise from 'request-promise'
import { APIDeclaration } from '../../main'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/requestPromiseAdapter'
import { prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-queries/boolean', function () {
  const testServer = prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
      inherentMiddleware: [middleware204],
    })
  })

  describe('single', function () {
    it('client, value true', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true }).query({ q1: Boolean }).response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: true })

      // Then
      expect(response).toEqual('Value: true')
    })

    it('client, value false', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true }).query({ q1: Boolean }).response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: false })

      // Then
      expect(response).toEqual('Value: false')
    })

    it('server and client (true)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Boolean }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const response = await api({ q1: true })

      // Then
      expect(response).toEqual('Value: true, boolean')
    })

    it('server and client (false)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Boolean }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const response = await api({ q1: false })

      // Then
      expect(response).toEqual('Value: false, boolean')
    })

    it('server only accepts one if sent many', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Boolean }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await requestPromise.get(api.getURL({}) + '?q1=true&q1=false')

      // Then
      expect(response).toEqual('Value: true')
    })

    it('server rejects invalid values', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Boolean }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      await expect(requestPromise.get(api.getURL({}) + '?q1=banana')).rejects.toMatchObject({
        message: /banana is not a valid boolean for q1/,
      })
    })
    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Boolean }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: false })

      // Then
      expect(response).toEqual('Value: false')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Boolean }).response<string>()
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
        .query({ q1: [Boolean] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('*')))

      // When
      const response = await api({ q1: [false, true] })

      // Then
      expect(response).toEqual('Value: false*true')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [Boolean] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')} ${req.query.q1.map((q) => typeof q).join('*')}`)

      // When
      const response = await api({ q1: [false, true, false] })

      // Then
      expect(response).toEqual('Value: false*true*false boolean*boolean*boolean')
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Boolean] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')} ${req.query.q1?.map((q) => typeof q).join('*')}`)

      // When
      const response = await api({ q1: [false, true, false] })

      // Then
      expect(response).toEqual('Value: false*true*false boolean*boolean*boolean')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Boolean] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: undefined')
    })
  })
})
