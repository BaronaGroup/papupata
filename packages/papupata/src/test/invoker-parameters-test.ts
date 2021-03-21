import { APIDeclaration } from '../main'
import { runTestServer } from './test-utils'
import createRequestAdapter from '../main/requestPromiseAdapter'

describe('invoker-parameters-test', function () {
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

  it('no parameters -- can be called with no args', async function () {
    const api = API.declareGetAPI('/void').response<string>()

    testServer.app.get('/void', (_req, res) => res.send('Test'))
    const resp = await api()
    expect(resp).toBe('Test')
  })

  it('no parameters -- can be called with empty object', async function () {
    const api = API.declareGetAPI('/void').response<string>()

    testServer.app.get('/void', (req, res) => res.send('Test' + req.body.abc))
    const resp = await api({})
    expect(resp).toBe('Test')
  })
  it('query parameters', async function () {
    const api = API.declareGetAPI('/query')
      .query(['name', 'job'] as const)
      .response<string>()

    testServer.app.get('/query', (req, res) => res.send(`Hello, ${req.query.name}, I see you are a ${req.query.job}`))
    const resp = await api({ name: 'Bob', job: 'Doctor' })
    expect(resp).toBe('Hello, Bob, I see you are a Doctor')
  })

  it('boolean query parameters (will be just strings without the server side code)', async function () {
    const api = API.declareGetAPI('/boolquery')
      .queryBool(['a', 'b'] as const)
      .response<string>()

    testServer.app.get('/boolquery', (req, res) => res.send(`Values ${req.query.a}, ${req.query.b}`))

    const resp = await api({ a: true, b: false })
    expect(resp).toBe('Values true, false')
  })

  it('optional query parameters', async function () {
    const api = API.declareGetAPI('/optquery')
      .optionalQuery(['a', 'b'] as const)
      .response<string>()
    testServer.app.get('/optquery', ({ query: { a, b } }, res) => res.send(`Values ${a}, ${b}`))

    const url = api.getURL({})
    expect(url).toMatch(/http:\/\/localhost:\d+\/optquery/)
    const resp = await api({ a: 'exists' })
    expect(resp).toBe('Values exists, undefined')
  })

  it('path parameters', async function () {
    const api = API.declareGetAPI('/path/:name/is/:job')
      .params(['name', 'job'] as const)
      .response<string>()
    testServer.app.get('/path/:name/is/:job', (req, res) =>
      res.send(`Hello, ${req.params.name}, I see you are a ${req.params.job}`)
    )

    const resp = await api({ name: 'Bob', job: 'Doctor' })
    expect(resp).toBe('Hello, Bob, I see you are a Doctor')
  })

  it('body', async function () {
    const api = API.declarePostAPI('/body').body<{ name: string; age: number }>().response<string>()

    testServer.app.post('/body', (req, res) => res.send(`Hello, ${req.body.name}, age ${req.body.age}`))

    const resp = await api({ name: 'Bob', age: 53 })
    expect(resp).toBe('Hello, Bob, age 53')
  })

  it('non-object body, sole arg', async function () {
    const api = API.declarePostAPI('/nonobjbody').body<string>().response<string>()

    testServer.app.post('/nonobjbody', (req, res) => {
      res.send(`Hello, ${req.body}`)
    })

    const resp = await api('my love!')
    expect(resp).toBe('Hello, my love!')
  })

  it('non-object body, other args', async function () {
    const api = API.declarePostAPI('/nonobjbody2')
      .query(['q'] as const)
      .body<string>()
      .response<string>()

    testServer.app.post('/nonobjbody2', (req, res) => {
      res.send(`Hello, ${req.body} ${req.query.q}`)
    })

    const resp = await api('my', { q: 'love!' })
    expect(resp).toBe('Hello, my love!')
  })

  it('combination of all', async function () {
    const comboAPI = API.declarePutAPI('/combo/:p1/:p2')
      .params(['p1', 'p2'] as const)
      .query(['q1', 'q2'] as const)
      .optionalQuery(['oq1', 'oq2'] as const)
      .queryBool(['bq1', 'bq2'] as const)
      .body<{ b1: string; b2: boolean }>()
      .response<string>()

    testServer.app.put('/combo/:p1/:p2', ({ query, params, body }, res) =>
      res.send(JSON.stringify({ query, params, body }))
    )

    const resp = await comboAPI({
      b1: 'b1val',
      b2: true,
      q1: 'q1val',
      q2: 'q2val',
      oq1: 'oq1val',
      bq1: true,
      bq2: false,
      p1: 'p1val',
      p2: 'p2val',
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
        bq1: 'true',
        bq2: 'false',
        oq1: 'oq1val',
        q1: 'q1val',
        q2: 'q2val',
      },
    })
  })
})
