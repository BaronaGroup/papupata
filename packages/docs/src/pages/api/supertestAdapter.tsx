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
          <h2>module supertestAdapter</h2>
          <h3>Default export createSupertestAdapter</h3>
        </Container>
        <Purpose>This module allows you to use supertest to make papupata API requests.</Purpose>
        <AvailableFrom version={'1.5.0'} />
        <Usage>
          <VersionVariants
            variants={{
              '1.x': <Example>{`import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'`}</Example>,
              '2.x': <Example>{`import createSupertestAdapter from 'papupata/adapters/supertest'`}</Example>
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
        </Parameters>
        <MethodReturnType>Papupata MakeRequestAdapter</MethodReturnType>
        <Examples>
          <VersionVariants
            variants={{
              '1.x': (
                <Example>
                  {`
                    import { APIDeclaration } from 'papupata'
                    import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'
                    import express from 'express'
                    import supertest from 'supertest'

                    const app = express()
                    const request = supertest(app)
                    const API = new APIDeclaration()
                    API.configure({
                      app,
                      baseURL: '',
                      makeRequest: createSupertestAdapter(request)
                    })

                  `}
                </Example>
              ),
              '2.x': (
                <Example>
                  {`
                    import { APIDeclaration } from 'papupata'
                    import createSupertestAdapter from 'papupata/adapters/supertest'
                    import express from 'express'
                    import supertest from 'supertest'

                    const app = express()
                    const request = supertest(app)
                    const API = new APIDeclaration()
                    API.configure({
                      app,
                      baseURL: '',
                      requestAdapter: createSupertestAdapter(request)
                    })

                  `}
                </Example>
              )
            }}
          />
        </Examples>
      </Page>
    </IndexLayout>
  )
}
