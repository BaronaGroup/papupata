import { APIDeclaration } from '../main'
import { runTestServer } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'

describe('mapper-test', function () {
  const API = new APIDeclaration()
  const responseMapperAPI = API.declareGetAPI('/rm').response((input: { value: number }) => ({
    value: (input.value * 2).toString(),
  }))
  const asyncResponseMapperAPI = API.declareGetAPI('/rm-async').response(async (input: { value: number }) => ({
    value: input.value * 3,
  }))

  let testServer: ReturnType<typeof runTestServer>

  beforeAll(() => {
    testServer = runTestServer()
    API.configure({
      baseURL: `http://localhost:${testServer.port}`,
      makeRequest: createRequestAdapter('json'),
      app: testServer.app,
    })
  })

  afterAll(() => {
    testServer.stop()
  })

  describe('response mapper', function () {
    it('allows mapping responses', async function () {
      responseMapperAPI.implement(() => ({ value: 100 }))

      const response = await responseMapperAPI()

      expect(response.value).toBe('200')
    })

    it('mapper can be async', async function () {
      asyncResponseMapperAPI.implement(() => ({ value: 100 }))

      const response = await asyncResponseMapperAPI()

      expect(response.value).toBe(300)
    })
  })
})
