import { Router } from 'express'
import { APIDeclaration } from '../main'
import createRequestAdapter from '../main/requestPromiseAdapter'
import { runTestServer } from './test-utils'

describe('router-test', function () {
  let testServer: ReturnType<typeof runTestServer>

  beforeAll(() => {
    testServer = runTestServer()
  })

  afterAll(() => {
    testServer.stop()
  })

  it('routes can be implemented and called via routers', async function () {
    const router = Router()
    testServer.app.use(router)
    const API = new APIDeclaration()
    API.configure({
      baseURL: `http://localhost:${testServer.port}`,
      makeRequest: createRequestAdapter('json'),
      router,
    })
    const testAPI = API.declareGetAPI('/test').response<string>()

    testAPI.implement(() => 'hello')

    const resp = await testAPI()
    expect(resp).toEqual('hello')
  })

  it('routes can be implemented and called via routers in paths', async function () {
    const routerPath = '/subdir'
    const router = Router()
    testServer.app.use(routerPath, router)
    const API = new APIDeclaration()
    API.configure({
      baseURL: `http://localhost:${testServer.port}`,
      makeRequest: createRequestAdapter('json'),
      router,
      routerAt: routerPath,
    })
    const testAPI = API.declareGetAPI('/subdir/updog').response<string>()

    testAPI.implement(() => 'hello')

    const resp = await testAPI()
    expect(resp).toEqual('hello')
  })

  it('when routerAt is used, routes being implemented must be within its context', function () {
    const routerPath = '/another'
    const router = Router()
    testServer.app.use(routerPath, router)
    const API = new APIDeclaration()
    API.configure({
      baseURL: `http://localhost:${testServer.port}`,
      makeRequest: createRequestAdapter('json'),
      router,
      routerAt: routerPath,
      autoImplementAllAPIs: false,
    })
    const testAPI = API.declareGetAPI('/notcorrect/updog').response<string>()

    expect(() => testAPI.implement(() => 'hello')).toThrow(
      /Papupata: when routerAt is provided, all routes must be its children./
    )
  })
})
