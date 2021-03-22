import '../../prepare'
import * as React from 'react'
import { AvailableFrom, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../components/api-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import VersionVariants from '../../components/VersionVariants'
import IndexLayout from '../../layouts'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>module supertestInvoker</h2>
          <h3>Default export invokeSupertest</h3>
        </Container>
        <Purpose>
          This module allows you to use supertest to make papupata API requests, while gaining access to the actual supertest request for
          things like setting up headers and making detailed assertions on the response.
        </Purpose>
        <AvailableFrom version={'1.5.0'} />
        <Usage>
          <VersionVariants
            variants={{
              '1.x': <Example>{`import invokeSupertest from 'papupata/dist/main/supertestInvoker'`}</Example>,
              '2.x': <Example>{`import invokeSupertest from 'papupata/invokers/supertest'`}</Example>
            }}
          />
          <p>
            To begin with, you'll want to set up a supertest request for your express application. Once done, you can create a supertest
            papupata adapter to start making API calls.
          </p>
          <p>Do note that you'll almost certainly want to configure papupata with a blank base URL to make things work.</p>
        </Usage>
        <Parameters>
          <Parameter name="supertestRequest" dataType="Supertest request">
            Supertest request
          </Parameter>
          <Parameter name="api" dataType="DeclaredAPI">
            The papupata API you wish to invoke
          </Parameter>
          <Parameter name="args" dataType="Object">
            The arguments to the API call, just as you'd pass to the API call normally.
          </Parameter>
        </Parameters>
        <MethodReturnType>Papupata MakeRequestAdapter</MethodReturnType>
        <Examples>
          <VersionVariants
            variants={{
              '1.x': (
                <Example>{`
                  import { APIDeclaration } from 'papupata'
                  import invokeSupertest from 'papupata/dist/main/supertestInvoker'
                  import express from 'express'
                  import supertest from 'supertest'

                  const app = express()
                  const request = supertest(app)
                  const API = new APIDeclaration()
                  API.configure({
                    app,
                    baseURL: ''
                  })
                  const api = API.declareGetAPI('/:id').params(['id'] as const).response<string>

                  const req = invokeSupertest(request, api, {id: 'foo'})
                  await req.expect(200)
               `}</Example>
              ),
              '2.x': (
                <Example>{`
                  import { APIDeclaration } from 'papupata'
                  import invokeSupertest from 'papupata/invokers/supertest'
                  import express from 'express'
                  import supertest from 'supertest'

                  const app = express()
                  const request = supertest(app)
                  const API = new APIDeclaration()
                  API.configure({
                    app,
                    baseURL: ''
                  })
                  const api = API.declareGetAPI('/:id').params({id: String}).response<string>

                  const req = invokeSupertest(request, api, {id: 'foo'})
                  await req.expect(200)
                `}</Example>
              )
            }}
          />
        </Examples>
      </Page>
    </IndexLayout>
  )
}
