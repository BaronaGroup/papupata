import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example, AvailableFrom } from '../../components/api-components'
import { Link } from 'gatsby'
import * as React from 'react'
import { FixedFont } from '../../components/guides'

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
          <Example>{`
            import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'
          `}</Example>
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
          <Example>{`
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

          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
