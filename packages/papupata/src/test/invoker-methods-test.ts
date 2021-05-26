import { APIDeclaration } from '../main'
import { runTestServer } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'

describe('invoker-methods-test', function () {
  const API = new APIDeclaration()

  let testServer: ReturnType<typeof runTestServer>

  beforeAll(() => {
    testServer = runTestServer()
    API.configure({
      baseURL: `http://localhost:${testServer.port}`,
      makeRequest: createRequestAdapter('json'),
    })
  })

  afterAll(() => {
    testServer.stop()
  })

  it('get', async function () {
    testServer.app.get('/get', (_req, res) => res.send('Hello from get'))
    const api = API.declareGetAPI('/get').response<string>()
    expect(await api({})).toBe('Hello from get')
  })

  it('put', async function () {
    testServer.app.put('/put', (_req, res) => res.send('Hello from put'))
    const api = API.declarePutAPI('/put').response<string>()
    expect(await api({})).toBe('Hello from put')
  })

  it('post', async function () {
    testServer.app.post('/post', (_req, res) => res.send('Hello from post'))
    const api = API.declarePostAPI('/post').response<string>()
    expect(await api({})).toBe('Hello from post')
  })

  it('patch', async function () {
    testServer.app.patch('/patch', (_req, res) => res.send('Hello from patch'))
    const api = API.declarePatchAPI('/patch').response<string>()
    expect(await api({})).toBe('Hello from patch')
  })

  it('delete', async function () {
    testServer.app.delete('/delete', (_req, res) => res.send('Hello from delete'))
    const api = API.declareDeleteAPI('/delete').response<string>()
    expect(await api({})).toBe('Hello from delete')
  })
})
