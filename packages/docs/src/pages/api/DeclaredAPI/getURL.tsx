import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example } from '../../../components/api-components'
import React from 'react'
import VersionVariants from '../../../components/VersionVariants'

export default function GetURL() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>method getURL</h3>
        </Container>
        <Purpose>Get the URL for the API</Purpose>
        <Usage>
          <p>This function requires base URL to be configured in order to work.</p>

          <p>
            As path parameters are considered to be a part of the URL, their values must be provided to the getAPI call and they are
            injected in to the URL.
          </p>
          <p>Query parameters are optionally included, too.</p>
        </Usage>
        <Parameters>
          <Parameter name="pathAndQueryParams" dataType="Object">
            Path parameters value for the API, or combination of path and query parameter values.
          </Parameter>
        </Parameters>
        <MethodReturnType>string</MethodReturnType>
        <Examples>
          <VersionVariants
            isRecommendation
            variants={{
              '1.x': (
                <>
                  <Example label="Path only">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      api.configure({baseURL: 'https://example.com'})
                      const myAPI = api.declarePostAPI('/do-stuff/:param')
                        .params(['param'] as const)
                        .response<string>()

                      const URL = myAPI.getURL({param: 'value'})
                      // URL is now https://example.com/do-stuff/value
                    `}
                  </Example>
                  <Example label="Path and query (query omitted)">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      api.configure({baseURL: 'https://example.com'})
                      const myAPI = api.declarePostAPI('/do-stuff/:param')
                        .params(['param'] as const)
                        .query(['qval'] as const)
                        .response<string>()

                      const URL = myAPI.getURL({param: 'value'})
                      // URL is now https://example.com/do-stuff/value
                    `}
                  </Example>{' '}
                  <Example label="Path and query (query present)">
                    {`
                      import { APIDeclaration } from 'papupata'
                      const api = new APIDeclaration()
                      api.configure({baseURL: 'https://example.com'})
                      const myAPI = api.declarePostAPI('/do-stuff/:param')
                        .params(['param'] as const)
                        .query(['qval'] as const)
                        .response<string>()

                      const URL = myAPI.getURL({param: 'value', qval: 'hello'})
                      // URL is now https://example.com/do-stuff/value?qval=hello
                    `}
                  </Example>
                </>
              ),
              '2.x': (
                <>
                  <Example label="Path only">
                    {`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  api.configure({baseURL: 'https://example.com'})
                  const myAPI = api.declarePostAPI('/do-stuff/:param')
                    .params({param: String})
                    .response<string>()

                  const URL = myAPI.getURL({param: 'value'})
                  // URL is now https://example.com/do-stuff/value
                `}
                  </Example>
                  <Example label="Path and query (query omitted)">
                    {`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  api.configure({baseURL: 'https://example.com'})
                  const myAPI = api.declarePostAPI('/do-stuff/:param')
                    .params({param: String})
                    .query({qval: String})
                    .response<string>()

                  const URL = myAPI.getURL({param: 'value'})
                  // URL is now https://example.com/do-stuff/value
                `}
                  </Example>{' '}
                  <Example label="Path and query (query present)">
                    {`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  api.configure({baseURL: 'https://example.com'})
                  const myAPI = api.declarePostAPI('/do-stuff/:param')
                    .params({param: String})
                    .query({qval: String})
                    .response<string>()

                  const URL = myAPI.getURL({param: 'value', qval: 'hello'})
                  // URL is now https://example.com/do-stuff/value?qval=hello
                `}
                  </Example>
                </>
              )
            }}
          />
        </Examples>
      </Page>
    </IndexLayout>
  )
}
