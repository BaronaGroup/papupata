import { APIDeclaration } from '../main'
import { prepareTestServerFor } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'

describe('combo-parameters-test', function () {
  const API = new APIDeclaration()

  prepareTestServerFor(API)
  beforeAll(() => {
    API.configure({ ...API.getConfig(), makeRequest: createRequestAdapter('json') })
  })

  it('query parameters', async function () {
    const api = API.declareGetAPI('/query')
      .query(['name', 'job'] as const)
      .response<string>()
    api.implement((req) => `Hello, ${req.query.name}, I see you are a ${req.query.job}`)

    const resp = await api({ name: 'Bob', job: 'Doctor' })
    expect(resp).toBe('Hello, Bob, I see you are a Doctor')
  })

  it('boolean query parameters', async function () {
    const api = API.declareGetAPI('/boolquery')
      .queryBool(['a', 'b'] as const)
      .response<string>()
    api.implement(({ query: { a, b } }) => `Values ${a}, ${b}`)

    const resp = await api({ a: true, b: false })
    expect(resp).toBe('Values true, false')
  })

  it('optional query parameters', async function () {
    const api = API.declareGetAPI('/optquery')
      .optionalQuery(['a', 'b'] as const)
      .response<string>()
    api.implement(({ query: { a, b } }) => `Values ${a}, ${b}`)

    const resp = await api({ a: 'exists' })
    expect(resp).toBe('Values exists, undefined')
  })

  it('path parameters', async function () {
    const api = API.declareGetAPI('/path/:name/is/:job')
      .params(['name', 'job'] as const)
      .response<string>()
    api.implement((req) => `Hello, ${req.params.name}, I see you are a ${req.params.job}`)

    const resp = await api({ name: 'Bob', job: 'Doctor' })
    expect(resp).toBe('Hello, Bob, I see you are a Doctor')
  })

  it('body', async function () {
    const api = API.declarePostAPI('/body').body<{ name: string; age: number }>().response<string>()
    api.implement((req) => `Hello, ${req.body.name}, age ${req.body.age}`)

    const resp = await api({ name: 'Bob', age: 53 })
    expect(resp).toBe('Hello, Bob, age 53')
  })

  it('combination of all', async function () {
    const comboAPI = API.declarePutAPI('/combo/:p1/:p2')
      .params(['p1', 'p2'] as const)
      .query(['q1', 'q2'] as const)
      .optionalQuery(['oq1', 'oq2'] as const)
      .queryBool(['bq1', 'bq2'] as const)
      .body<{ b1: string; b2: boolean }>()
      .response<string>()

    comboAPI.implement(({ query, params, body }) => JSON.stringify({ query, params, body }))

    const resp = await comboAPI({
      p1: 'p1val',
      p2: 'p2val',
      b1: 'b1val',
      b2: true,
      q1: 'q1val',
      q2: 'q2val',
      oq1: 'oq1val',
      bq1: true,
      bq2: false,
    })
    expect(resp).toEqual({
      body: {
        b1: 'b1val',
        b2: true,
      },
      params: {
        p1: 'p1val',
        p2: 'p2val',
      },
      query: {
        bq1: true,
        bq2: false,
        oq1: 'oq1val',
        q1: 'q1val',
        q2: 'q2val',
      },
    })
  })
})
