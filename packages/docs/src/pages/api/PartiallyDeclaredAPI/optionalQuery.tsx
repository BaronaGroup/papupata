import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example } from '../../../components/api-components'
import { IncompleteApiDeclarationLink } from '../../../components/links'
import React from 'react'
import VersionVariants from '../../../components/VersionVariants'
import TypeMappingLink from '../../../components/TypeMappingLink'

export default function OptionalQuery() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method optionalQuery</h3>
        </Container>
        <Purpose>Declares optional string query parameters for an API</Purpose>
        <Usage>
          <p>Only path params and required string query parameters may be defined before query.</p>
        </Usage>
        <VersionVariants
          isRecommendation
          variants={{
            '1.x': (
              <>
                <Parameters>
                  <Parameter name="optionalQueryParams" dataType="Const string array">
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
                <Examples>
                  <Example label="Declaration">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      const myAPI = api.declarePostAPI('/do-stuff')
                        .optionalQuery(['query1', 'query2'] as const)
                        .response<string>()
                    `}
                  </Example>
                  <Example label="Usage in invocation">
                    {`
                      await myAPI({query1: 'abc'})
                      // Invokes URL /do-stuff?query1=abc
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {query1, query2} = req.query
                        return query1 + query2 // would return abcundefined in the example
                      })
                    `}
                  </Example>
                </Examples>
              </>
            ),
            '2.x': (
              <>
                <Parameters>
                  <Parameter name="optionalQueryParams" dataType={<TypeMappingLink />}>
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
                      await myAPI({query1: 'abc})
                      // Invokes URL /do-stuff?query1=abc
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {query1, query2} = req.query
                        return query1 + query2 // would return abcundefined
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
