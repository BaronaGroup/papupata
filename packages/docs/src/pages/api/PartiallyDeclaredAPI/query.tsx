import '../../../prepare'
import React from 'react'
import { Caveats, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../../components/api-components'
import Container from '../../../components/Container'
import { IncompleteApiDeclarationLink } from '../../../components/links'
import Page from '../../../components/Page'
import TypeMappingLink from '../../../components/TypeMappingLink'
import VersionVariants from '../../../components/VersionVariants'
import IndexLayout from '../../../layouts'

export default function Query() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method query</h3>
        </Container>
        <Purpose>Declares required string query parameters for an API</Purpose>
        <Usage>
          <p>Only path params may be defined before query.</p>
        </Usage>
        <VersionVariants
          isRecommendation
          variants={{
            '1.x': (
              <>
                <Parameters>
                  <Parameter name="queryParams" dataType="Const string array">
                    <p>Names of the query parameters. See the example below for the recommended way to set up the const string array.</p>
                    <p>
                      At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct.
                      Unfortunately we have not come up with a way to prevent this kind of usage.
                    </p>
                  </Parameter>
                </Parameters>

                <MethodReturnType>
                  <IncompleteApiDeclarationLink />
                </MethodReturnType>
                <Caveats>
                  <ul>
                    <li>
                      With papupata 1.x the server side implementation allows undefined values to go through when the API is invoked using
                      means other than papupata.
                    </li>
                  </ul>
                </Caveats>
                <Examples>
                  <Example label="Declaration">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      const myAPI = api.declarePostAPI('/do-stuff')
                        .query(['query1', 'query2'] as const)
                        .response<string>()
                    `}
                  </Example>
                  <Example label="Usage in invocation">
                    {`
                      await myAPI({query1: 'abc', query2: 'def'})
                      // Invokes URL /do-stuff?query1=abc&query2=def
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {query1, query2} = req.query
                        return query1 + query2 // would return abcdef in the example
                      })
                    `}
                  </Example>
                </Examples>
              </>
            ),
            '2.x': (
              <>
                <Parameters>
                  <Parameter name="queryParams" dataType={<TypeMappingLink />}>
                    Names and types of the query parameters, as an object. See the examples and the TypeMapping itself for more information.
                  </Parameter>
                </Parameters>

                <MethodReturnType>
                  <IncompleteApiDeclarationLink />
                </MethodReturnType>
                <Examples>
                  <Example label="Declaration">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      const myAPI = api.declarePostAPI('/do-stuff')
                        .query({ query1: String, query2: Number })
                        .response<string>()
                    `}
                  </Example>
                  <Example label="Usage in invocation">
                    {`
                      await myAPI({query1: 'abc', query2: 55})
                      // Invokes URL /do-stuff?query1=abc&query2=55
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {query1, query2} = req.query
                        return query1 + query2 // would return abc55 in the example, thought it should be noted that the 55 is actually a number, not a string
                      })
                  `}
                  </Example>
                </Examples>
              </>
            )
          }}
        />
      </Page>
    </IndexLayout>
  )
}
