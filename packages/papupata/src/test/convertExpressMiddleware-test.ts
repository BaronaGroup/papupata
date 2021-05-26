import { APIDeclaration, convertExpressMiddleware } from '../main'
import { expectFailure, prepareTestServerFor } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'

describe('convertExpressMiddleware', function () {
  const API = new APIDeclaration()

  prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({ ...API.getConfig(), makeRequest: createRequestAdapter('json') })
  })

  it('is run before a route', async function () {
    const api = API.declareGetAPI('/a1').response<string>()
    const events: string[] = []

    // When
    api.implementWithPapupataMiddleware(
      [
        convertExpressMiddleware((_req, _res, next) => {
          events.push('middleware')
          next()
        }),
      ],
      () => {
        events.push('route')
        return '1'
      }
    )
    await api()
    // Then
    expect(events).toEqual(['middleware', 'route'])
  })

  it('can fail', async function () {
    const api = API.declareGetAPI('/a2').response<string>()
    const events: string[] = []

    // When
    api.implementWithPapupataMiddleware(
      [
        convertExpressMiddleware((_req, _res, next) => {
          events.push('middleware')
          next(new Error('This failed'))
        }),
      ],
      () => {
        events.push('route')
        return '1'
      }
    )
    await expectFailure(api())
    // Then
    expect(events).toEqual(['middleware'])
  })

  it('can be async', async function () {
    const api = API.declareGetAPI('/a3').response<string>()
    const events: string[] = []

    // When
    api.implementWithPapupataMiddleware(
      [
        convertExpressMiddleware((_req, _res, next) => {
          events.push('middleware initial')
          setTimeout(function () {
            events.push('middleware later')
            next()
          }, 100)
        }),
      ],
      () => {
        events.push('route')
        return '1'
      }
    )
    await api()
    // Then
    expect(events).toEqual(['middleware initial', 'middleware later', 'route'])
  })
})
