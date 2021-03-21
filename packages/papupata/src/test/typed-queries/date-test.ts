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
describe('typed-queries/date', function () {
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
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true }).query({ q1: Date }).response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: new Date('2021-03-20T18:42:00.000+0200') })

      // Then
      expect(response).toEqual('Value: 2021-03-20T16:42:00.000Z')
    })

    it('server and client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Date }).response<string>()
      api.implement((req) => `Value: ${req.query.q1.toISOString()}`)

      // When
      const response = await api({ q1: new Date('2018-03-20T18:42:00.000+0200') })

      // Then
      expect(response).toEqual('Value: 2018-03-20T16:42:00.000Z')
    })

    it('server only accepts one if sent many', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Date }).response<string>()
      api.implement((req) => `Value: ${req.query.q1.toISOString()}`)

      // When
      const response = await requestPromise.get(
        api.getURL({}) + '?q1=1995-01-01T00:00:00.000Z&q1=1996-01-01T00:00:00.000Z'
      )

      // Then
      expect(response).toEqual('Value: 1996-01-01T00:00:00.000Z')
    })

    it('server rejects invalid values', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).query({ q1: Date }).response<string>()
      api.implement((req) => `Value: ${req.query.q1.toISOString()}`)

      await expect(requestPromise.get(api.getURL({}) + '?q1=banana')).rejects.toMatchObject({
        message: /banana is not a valid Date for q1/,
      })
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Date }).response<string>()
      api.implement((req) => `Value: ${req.query.q1?.toISOString()}`)

      // When
      const response = await api({ q1: new Date('1990-01-01T00:00:00.000Z') })

      // Then
      expect(response).toEqual('Value: 1990-01-01T00:00:00.000Z')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path).optionalQuery({ q1: Date }).response<string>()
      api.implement((req) => `Value: ${req.query.q1?.toISOString()}`)

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
        .query({ q1: [Date] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('..')))

      // When
      const response = await api({ q1: [new Date('1991-01-01T00:00:00.000Z'), new Date('1992-01-01T00:00:00.000Z')] })

      // Then
      expect(response).toEqual('Value: 1991-01-01T00:00:00.000Z..1992-01-01T00:00:00.000Z')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [Date] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.map((d) => d.toISOString()).join('..')}`)

      // When
      const response = await api({ q1: [new Date('2021-03-01T00:00:00.000Z'), new Date('2021-05-01T00:00:00.000Z')] })

      // Then
      expect(response).toEqual('Value: 2021-03-01T00:00:00.000Z..2021-05-01T00:00:00.000Z')
    })

    it('optional (value present)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Date] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.map((d) => d.toISOString()).join('..')}`)

      // When
      const response = await api({
        q1: [new Date('2021-03-01T00:00:00.000+0200'), new Date('2021-03-02T00:00:00.000+0200')],
      })

      // Then
      expect(response).toEqual('Value: 2021-02-28T22:00:00.000Z..2021-03-01T22:00:00.000Z')
    })

    it('optional (value missing)', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .optionalQuery({ q1: [Date] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1?.join('*')}`)

      // When
      const response = await api({})

      // Then
      expect(response).toEqual('Value: ')
    })
  })
})
