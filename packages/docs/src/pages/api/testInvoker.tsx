import * as React from 'react'
import { AvailableFrom, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../components/api-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import VersionVariants from '../../components/VersionVariants'
import IndexLayout from '../../layouts'
import { OptionsTable } from './invokeImplementationAdapter'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>module testInvoker</h2>
          <h3>Default export testInvoke</h3>
        </Container>
        <Purpose>This module allows you to use invoke implemented APIs with no express server. This is primarily used for testing.</Purpose>
        <AvailableFrom version={'1.5.0'} />
        <Usage>
          <VersionVariants
            variants={{
              '1.x': <Example>{`import testInvoke from 'papupata/dist/main/testInvoker'`}</Example>,
              '2.x': <Example>{`import testInvoke from 'papupata/invokers/test'`}</Example>
            }}
          />

          <p>
            Call the function with the DeclaredAPI you wish to invoke and any parameters you wish to pass to it, as if you were calling it
            normally.
          </p>
        </Usage>
        <Parameters>
          <Parameter name="api" dataType="DeclaredAPI">
            The API you wish to invoke
          </Parameter>
          <Parameter name="args" dataType="Object">
            Arguments to the API. Non-object bodies are not supported.
          </Parameter>
          <Parameter name="options" dataType="Object?">
            <OptionsTable />
          </Parameter>
        </Parameters>
        <MethodReturnType>Papupata MakeRequestAdapter</MethodReturnType>
        <Examples>
          <VersionVariants
            variants={{
              '1.x': (
                <Example label={'Basic case'}>{`
                  import { APIDeclaration } from 'papupata'
                  import testInvoke from 'papupata/dist/main/testInvoker'
                  import express from 'express'
                  
                  const app = express()
                  const request = supertest(app)
                  const API = new APIDeclaration()
                  const api = API.declareGetAPI('/').query(['id'] as const).response<string>()

                  testInvoke(api, {id: '123'})
                `}</Example>
              ),
              '2.x': (
                <Example label={'Basic case'}>{`
                  import { APIDeclaration } from 'papupata'
                  import testInvoke from 'papupata/invokers/test'
                  import express from 'express'
                  
                  const app = express()
                  const request = supertest(app)
                  const API = new APIDeclaration()
                  const api = API.declareGetAPI('/').query({id: String}).response<string>()

                  testInvoke(api, {id: '123'})
                `}</Example>
              )
            }}
          />

          <Example label="With options">{`
            testInvoke(api, {id: '123'}, {withMiddleware: true})
          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
