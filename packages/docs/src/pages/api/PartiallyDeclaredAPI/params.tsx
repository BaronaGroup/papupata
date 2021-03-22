import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example } from '../../../components/api-components'
import { IncompleteApiDeclarationLink } from '../../../components/links'
import React from 'react'
import VersionVariants from '../../../components/VersionVariants'
import TypeMappingLink from '../../../components/TypeMappingLink'

export default function Params() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method params</h3>
        </Container>
        <Purpose>Declares url/path parameters for an API</Purpose>
        <Usage>
          <p>If used, params must be declared before anything else.</p>
          <p>
            The corresponding parameters have to defined in the API path, with express you'd use :varName syntax for it. Optional path
            parameters are not supported at this time.
          </p>
        </Usage>
        <VersionVariants
          isRecommendation
          variants={{
            '1.x': (
              <>
                <Parameters>
                  <Parameter name="params" dataType="Const string array">
                    <p>Names of the path parameters. See the example below for the recommended way to set up the const string array.</p>
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
                      const myAPI = api.declarePostAPI('/do-stuff/:param1/:param2')
                        .params(['param1', 'param2'] as const)
                    `}
                  </Example>
                  <Example label="Usage in invocation">
                    {`
                      await myAPI({param1: 'abc', param2: 'def'})
                      // Invokes URL /do-stuff/abc/def
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {param1, param1} = req.params
                        return param1 + param1 // would return abcdef in the example
                      })
                    `}
                  </Example>
                </Examples>
              </>
            ),
            '2.x': (
              <>
                <Parameters>
                  <Parameter name="params" dataType={<TypeMappingLink />}>
                    Names and types of the path parameters, as an object. See the examples and the TypeMapping itself for more information.
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
                      const myAPI = api.declarePostAPI('/do-stuff/:param1/:param2')
                        .params({param1: String, param2: Number})
                    `}
                  </Example>
                  <Example label="Usage in invocation">
                    {`
                      await myAPI({param1: 'abc', param2: 100})
                      // Invokes URL /do-stuff/abc/100
                    `}
                  </Example>
                  <Example label="Usage in implementation">
                    {`
                      myAPI.implement(req => {
                        const {param1, param2} = req.params
                        return param1 + param2 // would return abc100 in the example, with param2 actually being a number
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
