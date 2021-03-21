import requestPromise from 'request-promise'
import { Integer } from '../../customQueryTypes'
import { APIDeclaration } from '../../main'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/requestPromiseAdapter'
import { expectFailure, prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-queries/integer', function () {
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
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true }).query({ q1: Integer }).response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: 5 })

      // Then
      expect(response).toEqual('Value: 5')
    })

    it('server and client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const response = await api({ q1: 9 })

      // Then
      expect(response).toEqual('Value: 9, number')
    })

    it('server only accepts one if sent many', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await requestPromise.get(api.getURL({}) + '?q1=8&q1=9')

      // Then
      expect(response).toEqual('Value: 8')
    })

    it('server rejects invalid values', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      await expect(requestPromise.get(api.getURL({}) + '?q1=banana')).rejects.toMatchObject({
        message: /banana is not a valid Number for q1/,
      })
    })

    it('infinity', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const err = await expectFailure(api({ q1: Infinity }))

      // Then
      expect(err.message).toMatch('Infinity is not a valid integer for q1')
    })

    it('decimal', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const err = await expectFailure(api({ q1: 1.23 }))

      // Then
      expect(err.message).toMatch('1.23 is not a valid integer for q1')
    })

    it('nan', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}, ${typeof req.query.q1}`)

      // When
      const err = await expectFailure(api({ q1: NaN }))

      // Then
      expect(err.message).toMatch('NaN is not a valid integer for q1')
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Integer }).response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 10 })

      // Then
      expect(response).toEqual('Value: 10')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Integer }).response<string>()
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
        .query({ q1: [Number] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('*')))

      // When
      const response = await api({ q1: [11, 12] })

      // Then
      expect(response).toEqual('Value: 11*12')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [Number] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')} ${req.query.q1.map((q) => typeof q).join('*')}`)

      // When
      const response = await api({ q1: [13, 14] })

      // Then
      expect(response).toEqual('Value: 13*14 number*number')
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Number] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')} ${req.query.q1?.map((q) => typeof q).join('*')}`)

      // When
      const response = await api({ q1: [15, 16] })

      // Then
      expect(response).toEqual('Value: 15*16 number*number')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Number] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: ')
    })
  })
})
