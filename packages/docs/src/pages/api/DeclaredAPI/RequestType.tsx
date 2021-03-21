import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Examples, Example, Caveats } from '../../../components/api-components'
import React from 'react'
import VersionVariants from '../../../components/VersionVariants'

export default function RequestType() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>exposed type RequestType</h3>
        </Container>
        <Purpose>
          Represents the type of express request that has been modified to be typed according to the declaration. This makes it easier to
          have functions that take the request and do things with it.
        </Purpose>
        <Usage>
          <p>The exposed types are used with the typeof operator. See the example below for details.</p>
          <p>Although the types are presented as fields on the API, they have no runtime value.</p>
        </Usage>
        <Caveats>
          There is at this time no way to create partial typed requests objects, which should be helpful for the same purposes.
        </Caveats>
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
                      .query(['collection'] as const)
                      .response<string>()
        
                    type RequestType = typeof myAPI['RequestType']
                    // RequestType is now the type of a modified express request    
                  `}
                </Example>
              ),
              '2.x': (
                <Example label="Basic usage">
                  {`
                import { APIDeclaration } from 'papupata'
                const api = new APIDeclaration()
                const myAPI = api.declarePostAPI('/do-stuff')
                  .query({collection: String})
                  .response<string>()
    
                type RequestType = typeof myAPI['RequestType']
                // RequestType is now the type of a modified express request    
              `}
                </Example>
              )
            }}
          />
          <Example label="Practical usage">{`
            myAPI.implement(req => {
              return getCollection(req)
            })

            function getCollection(req: typeof myAPI['RequestType']) {
              // This function has access to the typed request
              return collections.get(req.query.collection)
            }
          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
