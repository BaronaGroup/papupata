import requestPromise from 'request-promise'
import { v4 as uuid } from 'uuid'
import { APIDeclaration } from '../main'
import middleware204 from '../main/middleware204'
import createRequestAdapter from '../main/requestPromiseAdapter'
import { expectFailure, prepareTestServerFor } from './test-utils'

const API = new APIDeclaration()

describe('hard-coded-query-parameters-test', function () {
  const testServer = prepareTestServerFor(API)

  beforeAll(() => {
    API.configure({
      ...API.getConfig(),
      makeRequest: createRequestAdapter('json'),
      inherentMiddleware: [middleware204],
      autoImplementAllAPIs: false,
    })
  })

  describe('declarations', function () {
    it('one cannot declare a hard-coded value for an API and declare it as a non-optional query parameter for the call', async function () {
      // TODO: support these as a special variant in the upcoming query parameter declarations
      const path = uniquePath()

      // When/then
      expect(() =>
        API.declareGetAPI(path + '?hardCoded=hcValue')
          .query(['hardCoded'] as const)
          .response<any>()
      ).toThrowError(/Parameter hardCoded has a specific value/)
    })

    it('one cannot declare a hard-coded value for an API and declare it as a boolean query parameter for the call', async function () {
      // TODO: support these as a special variant in the upcoming query parameter declarations
      const path = uniquePath()

      // When/then
      expect(() =>
        API.declareGetAPI(path + '?hardCoded=hcValue')
          .queryBool(['hardCoded'] as const)
          .response<any>()
      ).toThrowError(/Parameter hardCoded has a specific value/)
    })

    it('one can declare hard coded parameters as an optional query parameter', async function () {
      // TODO: support these as a special variant in the upcoming query parameter declarations
      const path = uniquePath()

      API.declareGetAPI(path + '?hardCoded=hcValue')
        .optionalQuery(['hardCoded'] as const)
        .response<any>()

      // Then
      // did not throw
    })

    describe('one cannot declare forbidden query parameters', function () {
      it('as optional', async function () {
        const path = uniquePath()

        // When/then
        expect(() =>
          API.declareGetAPI(path + '?!hardCoded')
            .optionalQuery(['hardCoded'] as const)
            .response<any>()
        ).toThrowError(/Parameter hardCoded is forbidden/)
      })
      it('as regular', async function () {
        const path = uniquePath()

        // When/then
        expect(() =>
          API.declareGetAPI(path + '?!hardCoded')
            .query(['hardCoded'] as const)
            .response<any>()
        ).toThrowError(/Parameter hardCoded is forbidden/)
      })

      it('as bool', async function () {
        const path = uniquePath()

        // When/then
        expect(() =>
          API.declareGetAPI(path + '?!hardCoded')
            .queryBool(['hardCoded'] as const)
            .response<any>()
        ).toThrowError(/Parameter hardCoded is forbidden/)
      })
    })

    describe('required routing parameters must be declared as non-optional parameters', function () {
      it('total lack is insufficient', async function () {
        const path = uniquePath()

        // When/then
        expect(() => API.declareGetAPI(path + '?routing').response<any>()).toThrowError(/Parameter routing is required/)
      })

      it('optional is insufficient', async function () {
        const path = uniquePath()

        // When/then
        expect(() =>
          API.declareGetAPI(path + '?routing')
            .optionalQuery(['routing'] as const)
            .response<any>()
        ).toThrowError(/Parameter routing is required/)
      })

      it('regular is fine', async function () {
        const path = uniquePath()

        // When

        API.declareGetAPI(path + '?routing')
          .query(['routing'] as const)
          .response<any>()
        // Then: did not throw
      })
      it('bool is fine', async function () {
        const path = uniquePath()

        // When

        API.declareGetAPI(path + '?routing')
          .queryBool(['routing'] as const)
          .response<any>()
        // Then: did not throw
      })
    })
  })

  describe('client', function () {
    describe('fully hard coded parameters', function () {
      it('are sent to the server', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded=hcValue').response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api()

        // Then
        expect(actualQuery).toEqual({ hardCoded: 'hcValue' })
      })
      it('hard coding a blank value is fine', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded=').response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api()

        // Then
        expect(actualQuery).toEqual({ hardCoded: '' })
      })

      it('cannot be overridden', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded=hcValue')
          .optionalQuery(['hardCoded'] as const)
          .response<any>()

        // When/then
        const error = await expectFailure(api({ hardCoded: 'somethingElse' }))
        expect(error.message).toEqual(
          `The parameter hardCoded, if present, is required to have the value "hcValue" (given: "somethingElse").`
        )
      })

      it('multiple causes one to be picked', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded=val1&hardCoded=val2&hardCoded=val3').response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const response = await api()

        // Then
        expect(response).toEqual({ hardCoded: 'val3' }) // always the last one with the current implementation
      })
    })
    describe('any but required value parameters', function () {
      it('are sent to the server as usual', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?somethingRequired')
          .query(['somethingRequired'] as const)
          .response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api({ somethingRequired: 'deepskyblue' })

        // Then
        expect(actualQuery).toEqual({ somethingRequired: 'deepskyblue' })
      })
    })

    describe('forbidden parameters', function () {
      it('are not sent at all to the server', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?!hardCoded').response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api()

        // Then
        expect(actualQuery).toEqual({})
      })
    })

    describe('non-matching value parameters', function () {
      it('are not sent at all to the server when not explicitly given', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded!=green').response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api()

        // Then
        expect(actualQuery).toEqual({})
      })

      it('are sent at to the server when explicitly given', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded!=green')
          .query(['hardCoded'] as const)
          .response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When
        const actualQuery = await api({ hardCoded: 'yellow' })

        // Then
        expect(actualQuery).toEqual({ hardCoded: 'yellow' })
      })

      it('explicitly setting a forbidden value throws', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded!=green')
          .query(['hardCoded'] as const)
          .response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When/then
        const err = await expectFailure(api({ hardCoded: 'green' }))
        expect(err.message).toMatch(/The parameter hardCoded is not allowed to have the value green/)
      })

      it('explicitly setting any forbidden value throws', async function () {
        const path = uniquePath()
        const api = API.declareGetAPI(path + '?hardCoded!=red&hardCoded!=green&hardCoded!=blue')
          .query(['hardCoded'] as const)
          .response<any>()
        testServer.getApp().get(path, (req, res) => {
          res.send(req.query)
        })

        // When/then
        const err = await expectFailure(api({ hardCoded: 'green' }))
        expect(err.message).toMatch(/The parameter hardCoded is not allowed to have the value green/)
      })
    })
  })

  describe('server', function () {
    // Using the client code in these tests as it has been independently tested above
    describe('invocation is possible for', function () {
      it('APIs with hard coded query parameters', async function () {
        const api = API.declareGetAPI(uniquePath() + '?code=123').response<void>()
        const implementation = jest.fn()
        api.implement(implementation)

        // When
        await api()

        // Then
        expect(implementation).toHaveBeenCalled()
      })

      it('APIs with forbidden parameters', async function () {
        const api = API.declareGetAPI(uniquePath() + '?!code').response<void>()
        const implementation = jest.fn()
        api.implement(implementation)

        // When
        await api()

        // Then
        expect(implementation).toHaveBeenCalled()
      })

      it('APIs with non-matching parameters', async function () {
        const api = API.declareGetAPI(uniquePath() + '?code!=404').response<void>()
        const implementation = jest.fn()
        api.implement(implementation)

        // When
        await api()

        // Then
        expect(implementation).toHaveBeenCalled()
      })
      it('APIs with any value parameters', async function () {
        const api = API.declareGetAPI(uniquePath() + '?code')
          .query(['code'] as const)
          .response<void>()
        const implementation = jest.fn()
        api.implement(implementation)

        // When
        await api({ code: 'abc' })

        // Then
        expect(implementation).toHaveBeenCalled()
      })
    })
    it('hard coded query parameters are present in the request, even if untyped (for use in middleware etc)', async function () {
      const api = API.declareGetAPI(uniquePath() + '?code=123').response<void>()
      api.implement((req: any) => {
        expect(req.query.code).toEqual('123')
      })

      // When
      await api()

      // Then
      // Did not throw
    })

    describe('routing', function () {
      describe('hard coded', function () {
        it('picks the correct route based on the hard coded parameter', async function () {
          const path = uniquePath()
          const nonMatch1 = API.declareGetAPI(path + '?hc=a').response<void>()
          const match = API.declareGetAPI(path + '?hc=b').response<void>()
          const nonMatch2 = API.declareGetAPI(path + '?hc=c').response<void>()

          const nonMatch1Impl = jest.fn(),
            nonMatch2Impl = jest.fn(),
            matchImpl = jest.fn()

          nonMatch1.implement(nonMatch1Impl)
          match.implement(matchImpl)
          nonMatch2.implement(nonMatch2Impl)

          // When
          await match()

          // Then
          expect(nonMatch1Impl).not.toHaveBeenCalled()
          expect(matchImpl).toHaveBeenCalled()
          expect(nonMatch2Impl).not.toHaveBeenCalled()
        })

        it('explicit lack of parameter works fine, too', async function () {
          const path = uniquePath()
          const nonMatch1 = API.declareGetAPI(path + '?hc=a').response<void>()
          const match = API.declareGetAPI(path + '?hc=').response<void>()
          const nonMatch2 = API.declareGetAPI(path + '?hc=c').response<void>()

          const nonMatch1Impl = jest.fn(),
            nonMatch2Impl = jest.fn(),
            matchImpl = jest.fn()

          nonMatch1.implement(nonMatch1Impl)
          match.implement(matchImpl)
          nonMatch2.implement(nonMatch2Impl)

          // When
          await match()

          // Then
          expect(nonMatch1Impl).not.toHaveBeenCalled()
          expect(matchImpl).toHaveBeenCalled()
          expect(nonMatch2Impl).not.toHaveBeenCalled()
        })

        it('multiple', async function () {
          const path = uniquePath()
          const api = API.declareGetAPI(path + '?hc=a&hc=b&hc=c').response<void>()

          const impl = jest.fn()
          api.implement(impl)

          await requestPromise(api.getURL({}).split('?')[0] + '?hc=a')
          await requestPromise(api.getURL({}).split('?')[0] + '?hc=b')
          await requestPromise(api.getURL({}).split('?')[0] + '?hc=c')
          await expect(() => requestPromise(api.getURL({}).split('?')[0] + '?hc=d')).rejects.toBeDefined()
        })
      })

      describe('forbidden', function () {
        it('positive: lack of presence allows routing to the API', async function () {
          const path = uniquePath()
          const forbiddenAPI = API.declareGetAPI(path + '?!param').response<void>()
          const impl = jest.fn()
          forbiddenAPI.implement(impl)

          // When
          await forbiddenAPI()

          // Then
          expect(impl).toHaveBeenCalled()
        })
        it('negative: presence prevents routing to the API', async function () {
          const path = uniquePath()
          const forbiddenAPI = API.declareGetAPI(path + '?!param').response<void>()
          const withParamAPI = API.declareGetAPI(path)
            .query(['param'] as const)
            .response<void>()
          const forbiddenImpl = jest.fn()
          const withParamImpl = jest.fn()
          forbiddenAPI.implement(forbiddenImpl)
          withParamAPI.implement(withParamImpl)

          // When
          await withParamAPI({ param: 'abc' })

          // Then
          expect(forbiddenImpl).not.toHaveBeenCalled()
          expect(withParamImpl).toHaveBeenCalled()
        })

        it('negative: presence as empty string prevents routing to the API', async function () {
          const path = uniquePath()
          const forbiddenAPI = API.declareGetAPI(path + '?!param').response<void>()
          const withParamAPI = API.declareGetAPI(path)
            .query(['param'] as const)
            .response<void>()
          const forbiddenImpl = jest.fn()
          const withParamImpl = jest.fn()
          forbiddenAPI.implement(forbiddenImpl)
          withParamAPI.implement(withParamImpl)

          // When
          await withParamAPI({ param: '' })

          // Then
          expect(forbiddenImpl).not.toHaveBeenCalled()
          expect(withParamImpl).toHaveBeenCalled()
        })

        it('negative: presence as valueless prevents routing to the API', async function () {
          const path = uniquePath()
          const forbiddenAPI = API.declareGetAPI(path + '?!param').response<void>()
          const withParamAPI = API.declareGetAPI(path)
            .query(['param'] as const)
            .response<void>()
          const forbiddenImpl = jest.fn()
          const withParamImpl = jest.fn()
          forbiddenAPI.implement(forbiddenImpl)
          withParamAPI.implement(withParamImpl)
          const url = forbiddenAPI.getURL({})
          // When
          await requestPromise.get(url + '?param') // there is no way to have papupata invoke it like this

          // Then
          expect(forbiddenImpl).not.toHaveBeenCalled()
          expect(withParamImpl).toHaveBeenCalled()
        })
      })

      describe('any value', function () {
        it('positive: presence allows routing to the API', async function () {
          const path = uniquePath()
          const anyValueAPI = API.declareGetAPI(path + '?param')
            .query(['param'] as const)
            .response<void>()
          const impl = jest.fn()
          anyValueAPI.implement(impl)

          // When
          await anyValueAPI({ param: 'abc' })

          // Then
          expect(impl).toHaveBeenCalled()
        })

        it('positive: works with empty string as the value', async function () {
          const path = uniquePath()
          const anyValueAPI = API.declareGetAPI(path + '?param')
            .query(['param'] as const)
            .response<void>()
          const impl = jest.fn()
          anyValueAPI.implement(impl)

          // When
          await anyValueAPI({ param: '' })

          // Then
          expect(impl).toHaveBeenCalled()
        })
        it('positive: works with valueless', async function () {
          const path = uniquePath()
          const anyValueAPI = API.declareGetAPI(path + '?param')
            .query(['param'] as const)
            .response<void>()
          const impl = jest.fn()
          anyValueAPI.implement(impl)
          const url = anyValueAPI.getURL({})

          // When
          await requestPromise.get(url + '?param') // papupata cannot make calls like this at this time

          // Then
          expect(impl).toHaveBeenCalled()
        })

        it('negative: lack of prevents routing to the API', async function () {
          const path = uniquePath()

          const anyValueAPI = API.declareGetAPI(path + '?param')
            .query(['param'] as const)
            .response<void>()
          const fallbackAPI = API.declareGetAPI(path).response<void>()

          const anyValueImpl = jest.fn(),
            fallbackImpl = jest.fn()
          anyValueAPI.implement(anyValueImpl)
          fallbackAPI.implement(fallbackImpl)

          // When
          await fallbackAPI()

          // Then
          expect(anyValueImpl).not.toHaveBeenCalled()
          expect(fallbackImpl).toHaveBeenCalled()
        })
      })

      describe('non-match', function () {
        it('positive: non-matching value allows routing to the API', async function () {
          const path = uniquePath()
          const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha')
            .query(['param'] as const)
            .response<void>()
          const impl = jest.fn()
          nonMatchAPI.implement(impl)

          // When
          await nonMatchAPI({ param: 'beta' })

          // Then
          expect(impl).toHaveBeenCalled()
        })

        it('positive: lack of value allows routing to the API', async function () {
          const path = uniquePath()
          const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha').response<void>()
          const impl = jest.fn()
          nonMatchAPI.implement(impl)

          // When
          await nonMatchAPI()

          // Then
          expect(impl).toHaveBeenCalled()
        })
        it('negative: matching value prevents routing to the API', async function () {
          const path = uniquePath()
          const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha').response<void>()
          const hardCodedAPI = API.declareGetAPI(path + '?param=alpha').response<void>()
          const nonMatchImpl = jest.fn(),
            hardCodedImpl = jest.fn()
          nonMatchAPI.implement(nonMatchImpl)
          hardCodedAPI.implement(hardCodedImpl)

          // When
          await hardCodedAPI()

          // Then
          expect(nonMatchImpl).not.toHaveBeenCalled()
          expect(hardCodedImpl).toHaveBeenCalled()
        })

        it('works with multiple values', async function () {
          const path = uniquePath()
          const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha&param!=beta&param!=').response<string>()
          // It really doesn't make much sense to have "any value" API for the same query parameter, but it does make testing easier here.
          const badlyDesignedAPI = API.declareGetAPI(path)
            .query(['param'] as const)
            .response<string>()
          const nonMatchImpl = jest.fn().mockResolvedValue('nonMatchAPI'),
            hardCodedImpl = jest.fn().mockResolvedValue('badlyDesignedAPI')
          nonMatchAPI.implement(nonMatchImpl)
          badlyDesignedAPI.implement(hardCodedImpl)

          // Because of the bad API design, some of the calls to badlyDesignedAPI end up in nonMatchAPI instead!
          expect(await badlyDesignedAPI({ param: 'alpha' })).toEqual('badlyDesignedAPI')
          expect(await badlyDesignedAPI({ param: 'beta' })).toEqual('badlyDesignedAPI')
          expect(await badlyDesignedAPI({ param: 'gamma' })).toEqual('nonMatchAPI')
          expect(await badlyDesignedAPI({ param: '' })).toEqual('badlyDesignedAPI')
        })
      })

      describe('mixed', function () {
        describe('any value and non-match', function () {
          it('positive: non-matching value allows routing to the API', async function () {
            const path = uniquePath()
            const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha&param')
              .query(['param'] as const)
              .response<void>()
            const impl = jest.fn()
            nonMatchAPI.implement(impl)

            // When
            await nonMatchAPI({ param: 'beta' })

            // Then
            expect(impl).toHaveBeenCalled()
          })
          it('negative: lack of value prevents routing to the API', async function () {
            const path = uniquePath()
            const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha&param')
              .query(['param'] as const)
              .response<void>()

            const noParamAPI = API.declareGetAPI(path + '?!param').response<void>()

            const nonMatchImpl = jest.fn(),
              noParamImpl = jest.fn()
            nonMatchAPI.implement(nonMatchImpl)
            noParamAPI.implement(noParamImpl)

            // When
            await noParamAPI()

            // Then
            expect(nonMatchImpl).not.toHaveBeenCalled()
            expect(noParamImpl).toHaveBeenCalled()
          })
          it('negative: matching value prevents routing to the API', async function () {
            const path = uniquePath()
            const nonMatchAPI = API.declareGetAPI(path + '?param!=alpha&param')
              .query(['param'] as const)
              .response<void>()

            const hardCodedAPI = API.declareGetAPI(path + '?param=alpha').response<void>()

            const nonMatchImpl = jest.fn(),
              hardCodedImpl = jest.fn()
            nonMatchAPI.implement(nonMatchImpl)
            hardCodedAPI.implement(hardCodedImpl)

            // When
            await hardCodedAPI()

            // Then
            expect(nonMatchImpl).not.toHaveBeenCalled()
            expect(hardCodedImpl).toHaveBeenCalled()
          })
        })

        describe('forbidden and hard coded', function () {
          it('positive: matches non-present', async function () {
            const path = uniquePath()
            const comboAPI = API.declareGetAPI(path + '?!param&param=a').response<void>()
            const impl = jest.fn()
            comboAPI.implement(impl)

            // When
            await comboAPI({ param: 'beta' })

            // Then
            expect(impl).toHaveBeenCalled()
          })

          it('positive: matches hard-coded value', async function () {
            const path = uniquePath()
            const comboAPI = API.declareGetAPI(path + '?!param&param=a')
              .optionalQuery(['param'] as const)
              .response<void>()
            const impl = jest.fn()
            comboAPI.implement(impl)

            // When
            await comboAPI({ param: 'a' })

            // Then
            expect(impl).toHaveBeenCalled()
          })

          it('negative: does not match other values', async function () {
            const path = uniquePath()
            const comboAPI = API.declareGetAPI(path + '?!param&param=a')
              .optionalQuery(['param'] as const)
              .response<void>()
            const fallbackAPI = API.declareGetAPI(path).response<void>()
            const comboImpl = jest.fn(),
              fallbackImpl = jest.fn()
            comboAPI.implement(comboImpl)
            fallbackAPI.implement(fallbackImpl)

            // When
            await requestPromise.get(comboAPI.getURL({}).split('?')[0] + '?param=c')

            // Then
            expect(comboImpl).not.toHaveBeenCalled()
            expect(fallbackImpl).toHaveBeenCalled()
          })
        })

        describe('any and excluded', function () {
          it('allows any non-excluded values', async function () {
            const path = uniquePath()
            const comboAPI = API.declareGetAPI(path + '?param&param!=alpha&param!=beta')
              .query(['param'] as const)
              .response<void>()
            comboAPI.implement(jest.fn())

            await requestPromise.get(comboAPI.getURL({}).split('?')[0] + '?param=abc')
            await requestPromise.get(comboAPI.getURL({}).split('?')[0] + '?param=def')
          })
          it('disallow the excluded values', async function () {
            const path = uniquePath()
            const comboAPI = API.declareGetAPI(path + '?param&param!=alpha&param!=beta')
              .query(['param'] as const)
              .response<void>()
            comboAPI.implement(jest.fn())

            await expect(() =>
              requestPromise.get(comboAPI.getURL({}).split('?')[0] + '?param=alpha')
            ).rejects.toBeDefined()
            await expect(() =>
              requestPromise.get(comboAPI.getURL({}).split('?')[0] + '?param=beta')
            ).rejects.toBeDefined()
          })
        })
      })
    })
  })

  describe('getURL', function () {
    it('includes query parameters with hard coded values', function () {
      const api = API.declareGetAPI(uniquePath() + '/api?specific=abc&!excluded&omnipresent&nomatch!=abc')
        .query(['omnipresent', 'nomatch'] as const)
        .response<void>()

      // When
      const url = api.getURL({})

      // Then
      expect(url).toMatch(/\/api\?specific=abc$/)
    })
  })
})

function uniquePath() {
  return '/' + uuid()
}
