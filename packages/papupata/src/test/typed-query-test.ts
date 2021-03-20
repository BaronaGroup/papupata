import requestPromise from 'request-promise'
import { APIDeclaration } from '../main'
import middleware204 from '../main/middleware204'
import createRequestAdapter from '../main/request-promise-adapter'
import { prepareTestServerFor } from './test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-query-test', function () {
  const testServer = prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
      inherentMiddleware: [middleware204],
    })
  })

  describe('strings', function () {
    describe('single', function () {
      it('client', async function () {
        const path = getUniquePath()
        const api = API.declareGetAPI(path).query({ q1: String }).response<string>()
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
      it.todo('optional')
    })
    describe('array', function () {
      it.todo('client')
      it.todo('server')
      it.todo('optional')
    })
  })
})
