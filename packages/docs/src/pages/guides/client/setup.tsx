import * as React from 'react'

import Page from '../../../components/Page'
import Container from '../../../components/Container'
import IndexLayout from '../../../layouts'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import { Example } from '../../../components/api-components'
import { Link } from 'gatsby'
import VersionVariants from '../../../components/VersionVariants'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: setting up papupata for clients</h1>
        <Overview>
          When you want to use papupata to make API calls, you first need to set it up. This guide covers the most common cases and gives
          pointer for less common ones.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'Prerequisites',
              anchor: 'prerequisites',
              content: (
                <>
                  <p>
                    Before starting this guide, you need to have an API declaration. For information on how to get there, see{' '}
                    <Link to={'/guides/declaring'}>Declaring APIs</Link>.
                  </p>
                </>
              )
            },
            {
              heading: 'The Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>There are a few things that always need to be set up when you want to make requests with papupata:</p>
                  <ul>
                    <li>Base URL, that is, where to connect to</li>
                    <li>A mechanism for actually making requests</li>
                  </ul>
                  <p>As this time there are no other settings.</p>
                  <p>
                    The configuration happens using the <FixedFont>configure</FixedFont>
                  </p>{' '}
                  method on an API declaration.
                  <Example>{`
                    const API = new APIDeclaration()
                    API.configure({
                      baseUrl: 'https://example.com',
                    })
                  `}</Example>
                  <p>
                    If you want to only update some of the settings, you can get the existing configure and reconfigure the api declaration
                    based on it.
                  </p>
                  <Example>
                    {`
                            const API = new APIDeclaration()
                            API.configure({
                              ...api.getConfig(),
                              baseUrl: 'https://example.com',
                            })
                          `}
                  </Example>
                  <p>Alternatively, from version 2.0.0 onwards you can use the updateConfig function to do the same.</p>
                  <Example>
                    {`
                            const API = new APIDeclaration()
                            API.updateConfig({
                              baseUrl: 'https://example.com',
                            })
                          `}
                  </Example>
                </>
              )
            },
            {
              heading: 'Base URL',
              anchor: 'baseurl',
              content: (
                <>
                  <p>
                    The base URL is an URL where the declared APIs can be found. Typically it is either a blank string or combination of
                    protocol and a hostname, but it is possible to include a path as well.
                  </p>
                  <p>
                    In browser world APIs are commonly hosted from the same server that also hosts the client. In these situations you
                    generally want the URLs to be relative to the root of the current host. This can be accomplished by passing in an empty
                    string as the base URL.
                  </p>
                  <Example>{`
                  const api = API.declareGetAPI('/hello').response<string>()
                  API.configure({baseURL: ''})
                  await api() // invokes /hello
                  `}</Example>
                  <p>
                    Sometimes the APIs are served by other servers, and if your client is a node.js application you are always going to have
                    to provide an actual URL.
                  </p>
                  <Example>{`
                  const api = API.declareGetAPI('/hello').response<string>()
                  API.configure({baseURL: 'https://www.example.com'})
                  await api() // invokes https://www.example.com/hello
                  `}</Example>
                  <p>
                    At times it might be beneficial to implement the APIs somewhere other than the root of the server. Typically it'd be
                    better to include the path in the actual API paths, but the clients can also include it in the base URL.
                  </p>
                  <Example>{`
                  const api = API.declareGetAPI('/hello').response<string>()
                  API.configure({baseURL: 'https://www.example.com/api'})
                  await api() // invokes https://www.example.com/api/hello
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Mechanism for making requests',
              anchor: 'requestAdapter',
              content: (
                <>
                  <p>
                    Making HTTP requests in typescript can be tricky because of varying capabilities of execution environments. Different
                    browsers and node.js have different options available, some of which might or might not suit all your needs.
                  </p>
                  <p>
                    Papupata makes no assumptions about the mechanism used to make the requests, instead one must be provided to it. This is
                    done using the <FixedFont>requestAdapter</FixedFont> configuration option.
                  </p>
                  <p>
                    In many cases you might want to build your implementation, but there are two simple implementations provided with
                    papupata, which can also serve as examples for your own implementations.
                  </p>
                </>
              )
            },
            {
              heading: 'fetchAdapter',
              anchor: 'fetchAdapter',
              level: 1,
              content: (
                <>
                  <p>
                    This utilizes global fetch, and as such is mostly suited for browsers. It only supports JSON bodies, responses can be
                    either JSON or plain text. Any response codes above and including 400 cause a generic error to be thrown.
                  </p>
                  <p>Simply put, in its current state the adapter is only really suitable for extremely simple use cases.</p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          import fetchAdapter from 'papupata/dist/main/fetch-adapter'
                          API.configure({
                            ...API.getConfig(),
                            makeRequest: fetchAdapter
                          })
                  `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          import fetchAdapter from 'papupata/dist/main/fetch-adapter'
                          API.updateConfig({
                            requestAdapter: fetchAdapter
                          })
                `}</Example>
                      )
                    }}
                  />

                  <p>Having said that, it should be fairly straightforward to expand the implementation to suit your needs.</p>
                </>
              )
            },
            {
              heading: 'requestPromiseAdapter',
              anchor: 'requestPromiseAdapter',
              level: 1,
              content: (
                <>
                  <p>
                    This adapter utilizes request-promise and while certainly simple it is much better suited for many purposes. It should
                    be usable on both node.js and browser environments, supports json and form data as well as non-object bodies.
                  </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          import createRequestPromiseAdapter from 'papupata/dist/main/request-promise-adapter'
                          API.configure({
                            ...API.getConfig(),
                            makeRequest: createRequestPromiseAdapter('json') // could pass 'form' for form data payloads
                          })
                  `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          import createRequestPromiseAdapter from 'papupata/dist/main/request-promise-adapter'
                          API.updateConfig({
                            requestAdapter: createRequestPromiseAdapter('json') // could pass 'form' for form data payloads
                          })
                `}</Example>
                      )
                    }}
                  />

                  <p>
                    Regardless, it is quite likely that you'll want to create your own version to add some little things you need, such as
                    headers.
                  </p>
                </>
              )
            },
            {
              heading: 'Custom adapters',
              anchor: 'customAdapter',
              level: 1,
              content: (
                <>
                  <p>
                    As has probably become evident, you'll likely want to create a custom adapter of your own. The easiest option is
                    probably to take one of the existing adapters to use it as a template.
                  </p>
                  <p>
                    See <Link to={'/guides/client/customRequestAdapters'}>custom request adapters</Link> for more information.
                  </p>
                </>
              )
            },
            {
              heading: 'Conclusion',
              anchor: 'conclusion',
              content: (
                <>
                  <p>Now that papupata is set up to make requests, it should be a good time to make that happen!</p>
                  <p>
                    See <Link to="/guides/client/calling">calling APIs</Link> for how to do exactly that.
                  </p>
                </>
              )
            }
          ]}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
