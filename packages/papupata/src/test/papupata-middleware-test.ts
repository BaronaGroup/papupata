import { APIDeclaration } from '../main'
import createRequestAdapter from '../main/requestPromiseAdapter'
import { PapupataMiddleware } from '../main/config'
import { delay, prepareTestServerFor } from './test-utils'
import { Request } from 'express'

let routeId = 2000
describe('papupata-middleware-test', function () {
  const API = new APIDeclaration()
  prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
    })
  })

  beforeEach(() => {
    API.configure({
      ...API.getConfig(),
      inherentMiddleware: [],
    })
  })

  describe('applying', function () {
    it('route-specific middleware is applied (one)', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([addToBody('mw')], (req) => req.body)

      expect(await api('input')).toEqual('input[mw1][mw2]')
    })
    it('route-specific middleware is applied (many)', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([addToBody('mwa'), addToBody('mwb')], (req) => req.body)

      expect(await api('input')).toEqual('input[mwa1][mwa2][mwb1][mwb2]')
    })
    it('global/inherent middleware is applied (one)', async function () {
      API.configure({
        ...API.getConfig(),
        inherentMiddleware: [addToBody('mwa')],
      })
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([], (req) => req.body)

      expect(await api('input')).toEqual('input[mwa1][mwa2]')
    })
    it('global/inherent middleware is applied (many)', async function () {
      API.configure({
        ...API.getConfig(),
        inherentMiddleware: [addToBody('mwa'), addToBody('mwb')],
      })
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([], (req) => req.body)

      expect(await api('input')).toEqual('input[mwa1][mwa2][mwb1][mwb2]')
    })

    it('both inherent and route specific middleware is applied', async function () {
      API.configure({
        ...API.getConfig(),
        inherentMiddleware: [addToBody('mwa'), addToBody('mwb')],
      })
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([addToBody('mwc'), addToBody('mwd')], (req) => req.body)

      expect(await api('input')).toEqual('input[mwa1][mwa2][mwb1][mwb2][mwc1][mwc2][mwd1][mwd2]')
    })
  })

  describe('behavior', function () {
    it('a middleware can opt to take over the entire request', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware([() => Promise.resolve('overridden!')], (req) => req.body)

      expect(await api('input')).toEqual('overridden!')
    })
    it('a middleware can modify the request', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware(
        [
          (req, _res, _route, next) => {
            req.body = 'overridden!'
            return next()
          },
        ],
        (req) => req.body
      )

      expect(await api('input')).toEqual('overridden!')
    })
    it('a middleware can modify the response', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware(
        [
          async (_req, _res, _route, next) => {
            const resp = await next()
            return '[' + resp + ']'
          },
        ],
        (req) => req.body
      )

      expect(await api('input')).toEqual('[input]')
    })
    it('an exception in a middleware stops the processing', async function () {
      const api = API.declareGetAPI(getUniquePath()).body<string>().response()
      api.implementWithPapupataMiddleware(
        [
          () => {
            throw new Error('Oops')
          },
        ],
        (req) => req.body
      )
      await expect(api('input')).rejects.toThrow('Oops')
    })
  })

  function addToBody(toAdd: string) {
    const mw: PapupataMiddleware<Request, void> = async (req, _res, _route, next) => {
      req.body += `[${toAdd}1]`
      await delay(100)
      req.body += `[${toAdd}2]`
      return next()
    }
    return mw
  }
})

function getUniquePath() {
  return '/test-' + ++routeId
}
