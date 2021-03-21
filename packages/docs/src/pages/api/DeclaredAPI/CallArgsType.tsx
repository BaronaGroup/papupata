import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Examples, Example } from '../../../components/api-components'
import React from 'react'
import VersionVariants from '../../../components/VersionVariants'

export default function CallArgsType() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>exposed type CallArgsType</h3>
        </Container>
        <Purpose>
          Represents the type of arguments to API invocation. This exists to help you create functions that return parts or all of a
          requests's parameters.
        </Purpose>
        <Usage>
          <p>The exposed types are used with the typeof operator. See the example below for details.</p>
          <p>Although the types are presented as fields on the API, they have no runtime value.</p>
        </Usage>
        <Examples>
          <VersionVariants
            isRecommendation
            variants={{
              '1.x': (
                <Example label="Basic usage">
                  {`
                    import { APIDeclaration } from 'papupata'
                    const api = new APIDeclaration()
                    const myAPI = api.declarePostAPI('/do-stuff')
                      .query(['q'] as const)
                      .body<{key: string}>
                      .response<string>()
        
                    type CallArgsType = typeof myAPI['CallArgsType']
                    // CallArgsType is now {key: string, q: string}            
                  `}
                </Example>
              ),
              '2.x': (
                <Example label="Basic usage">
                  {`
                    import { APIDeclaration } from 'papupata'
                    const api = new APIDeclaration()
                    const myAPI = api.declarePostAPI('/do-stuff')
                      .query({q: String}})
                      .body<{key: string}>
                      .response<string>()
        
                    type CallArgsType = typeof myAPI['CallArgsType']
                    // CallArgsType is now {key: string, q: string}            
                  `}
                </Example>
              )
            }}
          />

          <Example label="Practical usage">{`
            await myAPI(getRequestParams())

            function getRequestParams(): typeof myAPI['CallArgsType']  {
              // Now typescript will complain because we do not return everything it needs
            }
          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
