import { APIDeclaration } from '../main'
import testInvoke from '../main/testInvoker'
import { AssertResponseFn } from '../main/invokeImplementationAdapter'
import { Handler } from 'express'
import { PapupataMiddleware } from '../main/config'
import middleware204 from '../main/middleware204'

describe('testInvoker-test', function () {
  const API = new APIDeclaration()
  API.configure({
    autoImplementAllAPIs: true,
  })
  const api = declareAPI()

  const defaultArgs = {
    bodyValue: 'this is body',
    query: 'this is query',
    optionalQuery: 'this is optional query',
    queryBool: true,
    queryBool2: false,
    id: 'theId',
  }

  const defaultResponse = {
    body: { bodyValue: defaultArgs.bodyValue },
    query: {
      query: defaultArgs.query,
      optionalQuery: defaultArgs.optionalQuery,
      queryBool: defaultArgs.queryBool,
      queryBool2: defaultArgs.queryBool2,
      array: [],
    },
    params: {
      id: defaultArgs.id,
    },
  }

  const defaultResponder = ({ headers, body, params, query }: typeof api.RequestType) => {
    return {
      headers,
      body,
      params,
      query,
    }
  }

  api.implement(defaultResponder)

  it('works for a basic case', async function () {
    const resp = await testInvoke(api, defaultArgs)
    expect(resp).toEqual(defaultResponse)
  })

  it('allows customizing request', async function () {
    const resp = await testInvoke(api, defaultArgs, {
      createRequest: (req) => ({ ...req, headers: { 'Content-Type': 'application/json' } }),
    })
    expect(resp).toEqual({
      ...defaultResponse,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })

  it('does not invoke papupata middleware', async function () {
    const myAPI = declareAPI()
    const mock = jest.fn()
    myAPI.implementWithPapupataMiddleware([mock], () => null as any)
    await testInvoke(myAPI, defaultArgs)
    expect(mock).not.toHaveBeenCalled()
  })

  it('does not invoke express middleware', async function () {
    const myAPI = declareAPI()
    const mock = jest.fn()
    myAPI.implementWithExpressMiddleware([mock], () => null as any)
    await testInvoke(myAPI, defaultArgs)
    expect(mock).not.toHaveBeenCalled()
  })

  it('works with APIs that use res.send', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.send('this is cool')
      return undefined as any
    })
    const res = await testInvoke(myAPI, defaultArgs)
    expect(res).toEqual('this is cool')
  })

  it('res.set is fine', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.set('x-implemented-by', 'papupata')
      return {
        ...defaultResponse,
        headers: undefined,
      }
    })
    await testInvoke(
      myAPI,
      defaultArgs,
      responseChecker((res) => expect(res.get('x-implemented-by')).toEqual('papupata'))
    )
  })

  it('res.status is fine', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.status(400)
      return {
        ...defaultResponse,
        headers: undefined,
      }
    })
    await testInvoke(
      myAPI,
      defaultArgs,
      responseChecker((res) => expect(res.statusCode).toEqual(400))
    )
  })

  it('works with APIs that use res.end', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.end('this is cool')
      return undefined as any
    })
    const res = await testInvoke(myAPI, defaultArgs)
    expect(res).toEqual('this is cool')
  })

  it('works with APIs that use res.redirect', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.redirect('https://www.example.com')
      return undefined as any
    })
    await testInvoke(
      myAPI,
      defaultArgs,
      responseChecker((res) => expect(res.statusCode).toEqual(301))
    )
  })

  it('works with APIs that use res.redirect with explicit code', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.redirect(309, 'https://www.example.com')
      return undefined as any
    })
    await testInvoke(
      myAPI,
      defaultArgs,
      responseChecker((res) => expect(res.statusCode).toEqual(309))
    )
  })

  it('res.sendStatus is fine', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.sendStatus(400)
      return undefined as any
    })
    await testInvoke(
      myAPI,
      defaultArgs,
      responseChecker((res) => expect(res.statusCode).toEqual(400))
    )
  })

  it('works with APIs that use res.json', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.json('this is cool')
      return undefined as any
    })
    const res = await testInvoke(myAPI, defaultArgs)
    expect(res).toEqual('this is cool')
  })

  it('works with APIs that use res.jsonp', async function () {
    const myAPI = declareAPI()
    myAPI.implement((_req, res) => {
      res.jsonp('this is cool')
      return undefined as any
    })
    const res = await testInvoke(myAPI, defaultArgs)
    expect(res).toEqual('this is cool')
  })

  describe('withMiddleware', function () {
    const expressMiddleware: Handler = (req, _res, next) => {
      req.params.express = 'express'
      next()
    }

    const papupataMiddleware: PapupataMiddleware<any, any> = (req, _res, _api, next) => {
      req.params.papupata = 'papupata'
      return next()
    }

    it('works even if there is no middleware', async function () {
      const myAPI = declareAPI()
      myAPI.implement(defaultResponder)
      const res = await testInvoke(myAPI, defaultArgs, { withMiddleware: true })
      expect(res).toEqual({ ...defaultResponse, headers: undefined })
    })

    it('works with express middleware', async function () {
      const myAPI = declareAPI()
      myAPI.implementWithExpressMiddleware([expressMiddleware], defaultResponder)
      const res = await testInvoke(myAPI, defaultArgs, { withMiddleware: true })
      expect(res).toEqual({
        ...defaultResponse,
        headers: undefined,
        params: { ...defaultResponse.params, express: 'express' },
      })
    })

    it('works with inherent papupata middleware', async function () {
      const myAPI = declareAPI()
      const initialConfig = API.getConfig()
      API.configure({
        ...initialConfig,
        inherentMiddleware: [papupataMiddleware],
      })
      try {
        myAPI.implement(defaultResponder)
        const res = await testInvoke(myAPI, defaultArgs, { withMiddleware: true })
        expect(res).toEqual({
          ...defaultResponse,
          headers: undefined,
          params: { ...defaultResponse.params, papupata: 'papupata' },
        })
      } finally {
        API.configure(initialConfig)
      }
    })

    it('works with papupata middleware', async function () {
      const myAPI = declareAPI()
      myAPI.implementWithPapupataMiddleware([papupataMiddleware], defaultResponder)
      const res = await testInvoke(myAPI, defaultArgs, { withMiddleware: true })
      expect(res).toEqual({
        ...defaultResponse,
        headers: undefined,
        params: { ...defaultResponse.params, papupata: 'papupata' },
      })
    })

    it('is compatible with 204 middleware (normal response)', async function () {
      const myAPI = declareAPI()
      myAPI.implementWithPapupataMiddleware([middleware204], defaultResponder)
      const res = await testInvoke(myAPI, defaultArgs, {
        withMiddleware: true,
        ...responseChecker((res) => {
          return expect(res.statusCode).toEqual(200)
        }),
      })
      expect(res).toEqual({
        ...defaultResponse,
        headers: undefined,
      })
    })

    it('is compatible with 204 middleware (no response)', async function () {
      const myAPI = declareAPI()
      myAPI.implementWithPapupataMiddleware([middleware204], () => undefined as any)
      const res = await testInvoke(myAPI, defaultArgs, {
        withMiddleware: true,
        ...responseChecker((res) => expect(res.statusCode).toEqual(204)),
      })
      expect(res).toEqual(undefined)
    })
  })

  describe('types', function () {
    it('works with numbers', async function () {
      const resp = await testInvoke(
        api,
        { ...defaultArgs, optionalQueryNumber: 10 },
        {
          createRequest: (req) => ({ ...req, headers: { 'Content-Type': 'application/json' } }),
        }
      )
      expect(resp).toMatchObject({
        query: {
          optionalQueryNumber: 10,
        },
      })
    })
    it('works with arrays', async function () {
      const resp = await testInvoke(
        api,
        { ...defaultArgs, array: [100, 200, 300] },
        {
          createRequest: (req) => ({ ...req, headers: { 'Content-Type': 'application/json' } }),
        }
      )
      expect(resp).toMatchObject({
        query: {
          array: [100, 200, 300],
        },
      })
    })
  })

  function responseChecker(checkFn: AssertResponseFn) {
    return {
      assertResponse: checkFn,
    }
  }

  function declareAPI() {
    // since we never have an express server overlapping paths are not an issue
    return API.declarePostAPI('/test/:id')
      .params(['id'] as const)
      .query({ query: String, queryBool: Boolean, queryBool2: Boolean })
      .optionalQuery({
        optionalQuery: String,
        optionalQuery2: String,
        optionalQueryNumber: Number,
        array: [Number],
      })
      .body<{ bodyValue: string }>()
      .response<{ headers: any; body: any; params: any; query: any }>()
  }
})
