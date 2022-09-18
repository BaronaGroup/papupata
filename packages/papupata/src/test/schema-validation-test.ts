import { z } from 'zod'
import { APIDeclaration, skipHandlingRoute } from '../main'
import { expectFailure, prepareTestServerFor } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'
import requestPromise from 'request-promise'

describe('schema validation test', () => {
  const bodySchema = z.object({
    field: z.number().max(100),
  })

  const responseSchema = z.object({ message: z.string().regex(/handled/) })

  const API = new APIDeclaration()
  const testServer = prepareTestServerFor(API)
  const validResponseTriggeringValue = 0,
    invalidResponseTriggeringValue = 1

  beforeAll(() => {
    API.configure({ ...API.getConfig(), requestAdapter: createRequestAdapter('json'), autoImplementAllAPIs: false })
    testServer.getApp().post('/test2', (req, res) => {
      res.send({
        message: req.body.field === invalidResponseTriggeringValue ? 'invalid response' : 'handled/' + req.body.field,
      })
    })
  })

  beforeEach(() => {
    API.configure({ ...API.getConfig(), onValidationFailure: undefined })
  })

  const route = API.declarePostAPI('/test').body(bodySchema).response(responseSchema)
  const manuallyImplementedRoute = API.declarePostAPI('/test2').body(bodySchema).response(responseSchema)

  describe('body', () => {
    describe('client', () => {
      beforeAll(() => {
        route.implement((req) => ({ message: 'handled/' + req.body.field }))
      })

      it('validation can fail', async () => {
        const err = await expectFailure(route({ field: 10000 }))
        expect(err.message).toContain(`Number must be less than or equal to 100`)
      })

      it('validation can pass', async () => {
        const response = await route({ field: 10 })

        expect(response.message).toEqual('handled/10')
      })

      describe('validation failure behavior can be overridden', () => {
        it('in general', async () => {
          const fn = jest.fn().mockResolvedValue({})
          API.configure({ ...API.getConfig(), onValidationFailure: fn })
          const response = await route({ field: 10000 })

          expect(response.message).toEqual('handled/undefined')
          expect(fn).toHaveBeenCalled()
          expect(fn.mock.calls[0][0].message).toContain(`Number must be less than or equal to 100`)
        })

        it('to use the data despite the validation failure', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockImplementation((_error, data) => data),
          })
          const response = await route({ field: 10000 })

          expect(response.message).toEqual('handled/10000')
        })

        it('to override data', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue({ field: 1 }),
          })
          const response = await route({ field: 10000 })

          expect(response.message).toEqual('handled/1')
        })

        it('to throw another error', async () => {
          const myError = new Error('Oopsies')
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockRejectedValue(myError),
          })
          const err = await expectFailure(route({ field: 10000 }))

          expect(err).toEqual(myError)
        })

        it('not to reroute', async () => {
          const fn = jest.fn().mockResolvedValue(skipHandlingRoute)
          API.configure({ ...API.getConfig(), onValidationFailure: fn })
          const err = await expectFailure(route({ field: 10000 }))

          expect(err.message).toEqual('Cannot reroute on client')
        })
      })
    })

    describe('server', () => {
      beforeAll(() => {
        route.implement((req) => ({ message: 'handled/' + req.body.field }))
      })

      it('validation can fail', async () => {
        const err = await expectFailure(
          Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: 10000 } }))
        )

        expect(err.statusCode).toEqual(500)
        expect(err.message).toContain('Number must be less than or equal to 100')
      })

      it('validation can pass', async () => {
        const response = await requestPromise.post(route.getURL({}), { json: { field: 50 } })

        expect(response.message).toEqual('handled/50')
      })

      describe('validation failure behavior can be overridden', () => {
        it('in general', async () => {
          const fn = jest.fn().mockResolvedValue({})
          API.configure({ ...API.getConfig(), onValidationFailure: fn })
          const response = await requestPromise.post(route.getURL({}), { json: { field: 10000 } })

          expect(response.message).toEqual('handled/undefined')
          expect(fn).toHaveBeenCalled()
          expect(fn.mock.calls[0][0].message).toContain(`Number must be less than or equal to 100`)
        })

        it('to use the data despite the validation failure', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockImplementation((_error, data) => data),
          })
          const response = await requestPromise.post(route.getURL({}), { json: { field: 10000 } })

          expect(response.message).toEqual('handled/10000')
        })

        it('to override data', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue({ field: 1 }),
          })
          const response = await requestPromise.post(route.getURL({}), { json: { field: 10000 } })

          expect(response.message).toEqual('handled/1')
        })

        it('to reroute', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue(skipHandlingRoute),
          })
          const err = await expectFailure(
            Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: 10000 } }))
          )

          expect(err.statusCode).toEqual(404) // as there is no other route that matches
        })

        it('to throw another error', async () => {
          const myError = new Error('Oopsies')
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockRejectedValue(myError),
          })
          const err = await expectFailure(
            Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: 10000 } }))
          )

          expect(err.statusCode).toEqual(500)
          expect(err.message).toContain('Error: Oopsies')
        })
      })
    })
  })

  describe('response', () => {
    describe('client', () => {
      it('validation can fail', async () => {
        const err = await expectFailure(manuallyImplementedRoute({ field: invalidResponseTriggeringValue }))
        expect(err.message).toContain(`invalid_string`)
      })

      it('validation can pass', async () => {
        const response = await manuallyImplementedRoute({ field: validResponseTriggeringValue })

        expect(response.message).toEqual(`handled/${validResponseTriggeringValue}`)
      })

      describe('validation failure behavior can be overridden', () => {
        it('in general', async () => {
          const fn = jest.fn().mockResolvedValue({})
          API.configure({ ...API.getConfig(), onValidationFailure: fn })
          const response = await manuallyImplementedRoute({ field: invalidResponseTriggeringValue })

          expect(response.message).toEqual(undefined)
          expect(fn).toHaveBeenCalled()
          expect(fn.mock.calls[0][0].message).toContain(`invalid_string`)
        })

        it('to use the data despite the validation failure', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockImplementation((_error, data) => data),
          })
          const response = await manuallyImplementedRoute({ field: invalidResponseTriggeringValue })

          expect(response.message).toEqual('invalid response')
        })

        it('to override data', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue({ message: 'overridden' }),
          })
          const response = await manuallyImplementedRoute({ field: invalidResponseTriggeringValue })

          expect(response.message).toEqual('overridden')
        })

        it('to throw another error', async () => {
          const myError = new Error('Oopsies')
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockRejectedValue(myError),
          })
          const err = await expectFailure(manuallyImplementedRoute({ field: invalidResponseTriggeringValue }))

          expect(err).toEqual(myError)
        })

        it('not to reroute', async () => {
          const fn = jest.fn().mockResolvedValue(skipHandlingRoute)
          API.configure({ ...API.getConfig(), onValidationFailure: fn })

          const err = await expectFailure(manuallyImplementedRoute({ field: invalidResponseTriggeringValue }))

          expect(err.message).toEqual('Cannot reroute on client')
        })
      })
    })

    describe('server', () => {
      beforeAll(() => {
        route.implement((req) => ({
          message: req.body.field === invalidResponseTriggeringValue ? 'invalid response' : 'handled/' + req.body.field,
        }))
      })

      it('validation can fail', async () => {
        const err = await expectFailure(
          Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: invalidResponseTriggeringValue } }))
        )

        expect(err.statusCode).toEqual(500)
        expect(err.message).toContain('invalid_string')
      })

      it('validation can pass', async () => {
        const response = await requestPromise.post(route.getURL({}), { json: { field: validResponseTriggeringValue } })

        expect(response.message).toEqual('handled/' + validResponseTriggeringValue)
      })

      it('validation takes place after mapping', async () => {
        const testRoute = API.declarePostAPI('/server-response-mapping-test').response({
          schema: z.object({ field: z.string() }),
          mapper: (input) => JSON.parse(JSON.stringify(input)),
        })

        testRoute.implement(() => ({ field: new Date() as any }))

        // When
        const response = await testRoute()

        // Then
        expect(response).toEqual({ field: expect.any(String) })
      })

      describe('validation failure behavior can be overridden', () => {
        it('in general', async () => {
          const fn = jest.fn().mockResolvedValue({})
          API.configure({ ...API.getConfig(), onValidationFailure: fn })
          const response = await requestPromise.post(route.getURL({}), {
            json: { field: invalidResponseTriggeringValue },
          })

          expect(response.message).toBeUndefined()
          expect(fn).toHaveBeenCalled()
          expect(fn.mock.calls[0][0].message).toContain(`invalid_string`)
        })

        it('to use the data despite the validation failure', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockImplementation((_error, data) => data),
          })
          const response = await requestPromise.post(route.getURL({}), {
            json: { field: invalidResponseTriggeringValue },
          })

          expect(response.message).toEqual('invalid response')
        })

        it('to override data', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue({ message: 'handled overridden' }),
          })
          const response = await requestPromise.post(route.getURL({}), {
            json: { field: invalidResponseTriggeringValue },
          })

          expect(response.message).toEqual('handled overridden')
        })

        it('not to reroute', async () => {
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockReturnValue(skipHandlingRoute),
          })
          const err = await expectFailure(
            Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: invalidResponseTriggeringValue } }))
          )

          expect(err.statusCode).toEqual(500)
          expect(err.message).toContain('Cannot reroute during response')
        })

        it('to throw another error', async () => {
          const myError = new Error('Oopsies')
          API.configure({
            ...API.getConfig(),
            onValidationFailure: jest.fn().mockRejectedValue(myError),
          })
          const err = await expectFailure(
            Promise.resolve(requestPromise.post(route.getURL({}), { json: { field: invalidResponseTriggeringValue } }))
          )

          expect(err.statusCode).toEqual(500)
          expect(err.message).toContain('Error: Oopsies')
        })
      })
    })
  })
})
