import { APIDeclaration } from '../main'
import express from 'express'
import bodyparser from 'body-parser'
import supertest from 'supertest'
import invokeSupertest from '../main/supertestInvoker'

interface RespType {
  query: any
  params: any
  body: any
}

describe('supertestInvokerTest', function () {
  it('works', async function () {
    const { api, supertestRequest } = prepare('declareGetAPI')
    await invokeSupertest(supertestRequest, api, {
      id: '699',
      qs: '!',
      queryNumber: 5,
      queryArray: [false, true],
    }).expect(200, {
      query: { qs: '!', queryNumber: 5, queryArray: [false, true] },
      body: {},
      params: { id: '699' },
    })
  })

  function prepare<TBody>(
    apiDeclMethod: 'declareGetAPI' | 'declarePutAPI' | 'declarePostAPI' | 'declareDeleteAPI' | 'declarePatchAPI'
  ) {
    const app = express()
    app.use(bodyparser.json())
    const API = new APIDeclaration()
    API.configure({
      baseURL: '',
      app,
    })
    const api = API[apiDeclMethod]('/api1/:id')
      .params(['id'] as const)
      .query({ qs: String, queryNumber: Number, queryArray: [Boolean] })
      .body<TBody>()
      .response<RespType>()

    api.implement(({ query, body, params }) => {
      return { query, body, params }
    })

    return { api, supertestRequest: supertest(app) }
  }
})
