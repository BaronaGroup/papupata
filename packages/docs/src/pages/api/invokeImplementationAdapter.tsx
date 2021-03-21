import * as React from 'react'
import { AvailableFrom, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../components/api-components'
import Container from '../../components/Container'
import { FixedFont } from '../../components/guides'
import { Members, MethodMember, PropertyMember } from '../../components/members-table'
import Page from '../../components/Page'
import VersionVariants from '../../components/VersionVariants'
import IndexLayout from '../../layouts'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>module invokeImplementationAdapter</h2>
          <h3>Default export createInvokeImplementationAdapter</h3>
        </Container>
        <Purpose>This module allows you to use invoke implemented APIs with no express server. This is primarily used for testing.</Purpose>
        <AvailableFrom version={'1.5.0'} />
        <Usage>
          <Example>{`
            import createInvokeImplementationAdapter from 'papupata/dist/main/invokeImplementationAdapter'
          `}</Example>
          <p>
            Call the function with any options you wish and use the returned value as the <FixedFont>requestAdapter</FixedFont> of the
            APIDeclaration. As always, a base url needs to be set up to make calls, but its value is ultimately irrelevant when using this
            adapter.
          </p>
        </Usage>
        <Parameters>
          <Parameter name="options" dataType="Object?">
            <OptionsTable />
          </Parameter>
        </Parameters>
        <MethodReturnType>Papupata MakeRequestAdapter</MethodReturnType>
        <Examples>
          <VersionVariants
            isRecommendation
            variants={{
              '1.x': (
                <Example>
                  {`
                    import { APIDeclaration } from 'papupata'
                    import createInvokeImplementationAdapter from 'papupata/dist/main/invokeImplementationAdapter'
                    import express from 'express'
                    
                    const app = express()
                    const request = supertest(app)
                    const API = new APIDeclaration()
                    API.configure({
                      app,
                      baseURL: '',
                      makeRequest: createInvokeImplementationAdapter()
                    })
                  `}
                </Example>
              ),
              '2.x': (
                <Example>
                  {`
                    import { APIDeclaration } from 'papupata'
                    import createInvokeImplementationAdapter from 'papupata/dist/main/invokeImplementationAdapter'
                    import express from 'express'
                    
                    const app = express()
                    const request = supertest(app)
                    const API = new APIDeclaration()
                    API.configure({
                      app,
                      baseURL: '',
                      requestAdapter: createInvokeImplementationAdapter()
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

export function OptionsTable() {
  return (
    <Members context="options" includeRequiredColumn={true}>
      <MethodMember name="createRequest" dataType="(requestBase) => Request" required={false}>
        <p>
          This function is used to create the request passed to the API as if it was the express request. Its sole parameter is a very
          minimal version of the request, which you may use as a template.
        </p>
        <p>This method can be used to add any necessary fields to the request.</p>
        <Example>{`
           const createRequest = base => ({...base, headers: { 'content-type': 'text/html' }})
       `}</Example>
      </MethodMember>
      <MethodMember name="assertResponse" dataType="(response) => void" required={false}>
        <p>
          This function is called once the response is complete. It is passed a mock express response, allowing for making assertions to
          whatever it may contain.
        </p>
        <Example>{`
           const assertResponse = res => expect(res.statusCode).toEqual(400)
       `}</Example>
      </MethodMember>
      <PropertyMember name="withMiddleware" dataType="boolean" required={false}>
        <p>By default, and if explicitly set to false only the API implementation is called and all middleware is ignored.</p>
        <p>If set to true, any express and papupata middleware on the route is run as normal for the requests.</p>
      </PropertyMember>
    </Members>
  )
}
