import { StringMatching } from '../../customQueryTypes'
import { APIDeclaration } from '../../main'
import middleware204 from '../../main/middleware204'
import createRequestAdapter from '../../main/requestPromiseAdapter'
import { expectFailure, prepareTestServerFor } from '../test-utils'

const getUniquePath = (function () {
  let index = 0
  return () => `/${index++}`
})()

const API = new APIDeclaration()
describe('typed-queries/regex-string', function () {
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
        .query({ q1: StringMatching(/hello/) })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1))

      // When
      const response = await api({ q1: 'hello' })

      // Then
      expect(response).toEqual('Value: hello')
    })

    it('server and client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringMatching(/hello/) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const response = await api({ q1: 'hello' })

      // Then
      expect(response).toEqual('Value: hello')
    })

    it('failure', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: StringMatching(/hello/) })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1}`)

      // When
      const err = await expectFailure(api({ q1: 'howdy' }))

      // Then
      expect(err.message).toMatch(/howdy failed validation for q1/)
    })
  })

  describe('array', function () {
    it('client', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path, undefined, { disableAutoImplement: true })
        .query({ q1: [StringMatching(/hello/)] })
        .response<string>()
      testServer.getApp().get(path, (req, res) => res.send('Value: ' + req.query.q1.join('*')))

      // When
      const response = await api({ q1: ['hello world', 'oh hello'] })

      // Then
      expect(response).toEqual('Value: hello world*oh hello')
    })

    it('server', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [StringMatching(/hello/)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const response = await api({ q1: ['oh hello', 'hello world'] })

      // Then
      expect(response).toEqual('Value: oh hello*hello world')
    })

    it('failure', async function () {
      const path = getUniquePath()
      const api = API.declareGetAPI(path)
        .query({ q1: [StringMatching(/hello/)] })
        .response<string>()
      api.implement((req) => `Value: ${req.query.q1.join('*')}`)

      // When
      const err = await expectFailure(api({ q1: ['oh hello', 'hello world', 'who are you again?'] }))

      // Then
      expect(err.message).toMatch(/who are you again\? failed validation for q1/)
    })
  })
})
