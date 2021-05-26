import { APIDeclaration } from '../main'
import { prepareTestServerFor } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'
import { Request, Response } from 'express'

// As new papupata implements express middleware running on its own, it needs to be tested
let apiId = 1000
describe('express-middleware-test', function () {
  const API = new APIDeclaration()

  const callsNext: MWHandler = (_req, _res, next) => next()
  const rejects: MWHandler = (_req, _res, next) => next(new Error('something went wrong'))
  const respondsWithAborted: MWHandler = (_req, res) => res.send('aborted')

  prepareTestServerFor(API)
  const events: string[] = []

  beforeEach(() => {
    events.splice(0, events.length)
  })

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
    })
  })

  it('having no middleware is fine', async function () {
    const api = declareUniqueAPI()
    api.implementWithMiddleware([], () => 'token1')
    const resp = await api()
    expect(resp).toEqual('token1')
  })
  it('having a single middleware that passes is fine', async function () {
    const api = declareUniqueAPI()
    const mw = createMiddleware('mw1', callsNext)
    api.implementWithMiddleware([mw], createImplementation('token'))
    const resp = await api()
    expect(resp).toEqual('token')

    expect(events).toEqual(['mw11', 'mw12', 'token'])
  })
  it('having many middleware that pass is fine', async function () {
    const api = declareUniqueAPI()
    const mws = [
      createMiddleware('mw1', callsNext),
      createMiddleware('mw2', callsNext),
      createMiddleware('mw3', callsNext),
    ]
    api.implementWithMiddleware(mws, createImplementation('token'))
    const resp = await api()
    expect(resp).toEqual('token')
    expect(events).toEqual(['mw11', 'mw12', 'mw21', 'mw22', 'mw31', 'mw32', 'token'])
  })
  describe('having middleware that interrupts the chain by responding is fine ', function () {
    it('as sole middleware', async function () {
      const api = declareUniqueAPI()
      const mws = [createMiddleware('mw1', respondsWithAborted)]
      api.implementWithMiddleware(mws, createImplementation('token'))
      const resp = await api()
      expect(resp).toEqual('aborted')
      expect(events).toEqual(['mw11', 'mw12'])
    })
    it('having middleware that interrupts the chain by responding is fine as the 1st middleware', async function () {
      const api = declareUniqueAPI()
      const mws = [createMiddleware('mw1', respondsWithAborted), createMiddleware('irrelevant', callsNext)]
      api.implementWithMiddleware(mws, createImplementation('token'))
      const resp = await api()
      expect(resp).toEqual('aborted')
      expect(events).toEqual(['mw11', 'mw12'])
    })
    it('having middleware that interrupts the chain by responding is fine in the middle', async function () {
      const api = declareUniqueAPI()
      const mws = [
        createMiddleware('mw1', callsNext),
        createMiddleware('mw2', respondsWithAborted),
        createMiddleware('irrelevant', callsNext),
      ]
      api.implementWithMiddleware(mws, createImplementation('token'))
      const resp = await api()
      expect(resp).toEqual('aborted')
      expect(events).toEqual(['mw11', 'mw12', 'mw21', 'mw22'])
    })
    it('having middleware that interrupts the chain by responding is fine as the last middleware', async function () {
      const api = declareUniqueAPI()
      const mws = [createMiddleware('mw1', callsNext), createMiddleware('mw2', respondsWithAborted)]
      api.implementWithMiddleware(mws, createImplementation('token'))
      const resp = await api()
      expect(resp).toEqual('aborted')
      expect(events).toEqual(['mw11', 'mw12', 'mw21', 'mw22'])
    })
  })

  it('having middleware that rejects skips the rest of the chain', async function () {
    const api = declareUniqueAPI()
    const mws = [
      createMiddleware('mw1', callsNext),
      createMiddleware('mw2', rejects),
      createMiddleware('irrelevant', callsNext),
    ]
    api.implementWithMiddleware(mws, createImplementation('token'))
    await expect(api()).rejects.toThrow('something went wrong')
    expect(events).toEqual(['mw11', 'mw12', 'mw21', 'mw22'])
  })

  function declareUniqueAPI() {
    const path = '/' + ++apiId
    return API.declareGetAPI(path).response<string>()
  }

  type MWHandler = (req: Request, res: Response, next: any, error?: any) => void

  function createMiddleware(token: string, handler: MWHandler) {
    return (req: Request, res: Response, next: any) => {
      events.push(token + '1')
      setTimeout(function () {
        events.push(token + '2')
        handler(req, res, next)
      }, 100)
    }
  }

  function createImplementation(token: string) {
    return () => {
      events.push(token)
      return token
    }
  }
})
