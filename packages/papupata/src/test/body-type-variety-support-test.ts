import createRequestAdapter from '../main/requestPromiseAdapter'
import { prepareTestServerFor } from './test-utils'
import { APIDeclaration } from '../main'

describe('body-type-variety-support-test', () => {
  const API = new APIDeclaration()

  prepareTestServerFor(API)
  beforeAll(() => {
    API.configure({ ...API.getConfig(), makeRequest: createRequestAdapter('json') })
  })
  it('the body type can be incorrect if there are implicit transformations for data (such as date to string when converting to json)', async function () {
    const api = API.declarePostAPI('/transform').body<{ today: Date }>().response<string>()

    api.implement((req) => 'Type of today is ' + typeof req.body.today)

    const resp = await api({ today: new Date('2020-01-31T08:54:30.000Z') })
    expect(resp).toBe('Type of today is string')
  })

  it('is possible to specify the body type for the request and how the data observed in the implementation separately', async function () {
    const api = API.declarePostAPI('/transform').body<{ today: string } | { today: Date | string }>().response<string>()

    api.implement((req) => 'Type of today is ' + typeof req.body.today)

    const resp = await api({ today: new Date('2020-01-31T08:54:30.000Z') })
    expect(resp).toBe('Type of today is string')
  })
})
