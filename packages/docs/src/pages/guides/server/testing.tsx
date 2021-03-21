import * as React from 'react'
import { Example } from '../../../components/api-components'
import Container from '../../../components/Container'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import Page from '../../../components/Page'
import VersionVariants from '../../../components/VersionVariants'
import IndexLayout from '../../../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: testing APIs</h1>
        <Overview>Testing can be tricky. This guide provides some ideas on how you could test APIs implemented using papupata.</Overview>
        <GuideContent
          content={[
            {
              heading: 'Before starting',
              anchor: 'before',
              content: (
                <div>
                  <p>The following is assumed to be present for the examples in this guide:</p>
                  <Example>{`
                  import {APIDeclaration} from 'papupata'
                  const API = new APIDeclaration()

                  const complexAPI = API.declarePostAPI('/update/:id', routeOptions)
                    .params(['id'] as const)
                    .query(['author'] as const)
                    .optionalQuery(['timestamp'] as const)
                    .queryBool(['notifyWatchers'] as const)
                    .body<{ name: string}>()
                    .response<{status: string }>()
                `}</Example>
                </div>
              )
            },

            {
              heading: 'The Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    As papupata is typically used as a part of an express application you always have the option of using whatever tools you
                    use to test the rest of your express application.
                  </p>
                  <p>
                    The key to doing this is setting up a base URL on the papupata APIDeclaration and then using the getURL method of the
                    individual APIs to figure out what to call.
                  </p>
                  <Example>{`
                    API.configure({baseURL: 'http://localhost:3000'})

                    const response = await request.post(api.getURL({}))
                    expect(request).toEqual({ok: true})
                  `}</Example>
                  <p>
                    There are a few downsides to doing this, though. For one, you are not taking advantage of types present in the APIs, so
                    typescript will not be able to warn you if you are sending invalid data to the API. Second, by having the whole express
                    application present you are testing the whole server implementation, including middleware, even if you wanted to do unit
                    testing.
                  </p>
                  <p>Let's look into some other options</p>
                </>
              )
            },
            {
              heading: 'Just testing the implementation',
              anchor: 'implementation',
              content: (
                <>
                  <p>
                    For the purpose of unit testing, you'll probably want to test just the implementation of the API. Once implemented, the
                    actual implementation can be accessed as <FixedFont>api.implementation</FixedFont>. You can call it directly from your
                    tests, although you might find it inconvenient because you have to supply request and response to the function.
                  </p>
                  <Example>{`
                    const response = await api.implementation(request, response)
                  `}</Example>
                  <p>In practice, you'll want a helper of some kind to deal with setting up the objects.</p>
                </>
              )
            },
            {
              heading: 'Having papupata call the implementation',
              anchor: 'directRequestAdapter',
              level: 1,
              content: (
                <>
                  <p>
                    You can configure your tests to act as the papupata client, allowing you to use the normal papupata calls to test your
                    API. The big advantage is having the syntax be exactly what the real client would use. There is a potential downside for
                    clarity though: as this approach is focused on unit testing, you might want to reserve this syntax for making API calls
                    that go through the full middleware stack. If that is the case, consider other options.
                  </p>
                  <p>
                    So, let's configure a client. We are using an experimental adapter for the job; it provides only a very minimal request
                    and response as well as error handling. If it is too limited for your needs, feel free to use the code for the adapter
                    to build your own.
                  </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            import createAdapter from 'papupata/dist/main/invokeImplementationAdapter'
                            API.configure({
                              ...API.getConfig(),
                              baseURL: '', // the value is not relevant, but must be a string
                              makeRequest: createAdapter()
                            })
                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                          import createAdapter from 'papupata/dist/main/invokeImplementationAdapter'
                          API.updateConfig({
                            baseURL: '', // the value is not relevant, but must be a string
                            requestAdapter: createAdapter()
                          })
                          const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                        `}
                        </Example>
                      )
                    }}
                  />

                  <p>The adapters supports a few options that make your life easier:</p>
                  <ul>
                    <li>
                      <FixedFont>createRequest</FixedFont> for setting up the request as you need (with, say, headers, session etc)
                      <Example>{`
                        const requestAdapter = createAdapter({
                          createRequest: () => ({ headers: { 'authorization': 'bearer 123'}}) 
                        })
                      `}</Example>
                    </li>
                    <li>
                      <FixedFont>assertResponse</FixedFont> for making assertions about the response beyond just the data
                      <Example>{`
                        const requestAdapter = createAdapter({
                          assertResponse: res => expect(res.statusCode).toEqual(400) 
                        })
                      `}</Example>
                    </li>
                    <li>
                      <FixedFont>withMiddleware</FixedFont>, which enables the use of middleware for the request
                      <Example>{`
                        const requestAdapter = createAdapter({
                          withMiddleware: true
                        })
                      `}</Example>
                    </li>
                  </ul>
                </>
              )
            },
            {
              heading: 'Call the implementation with a helper function',
              anchor: 'directWithHelper',
              level: 1,
              content: (
                <>
                  <p>
                    With properly designed helper function you can call the implementation indirectly with full type safety. Papupata comes
                    with an experimental function that might or might not be good enough for your use case. If you need additional features,
                    feel free to use the provided function as a template to work on.
                  </p>
                  <Example>{`
                    import testInvoke from 'papupata/dist/main/testInvoker'
                    const response = await invoker(api, {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                  `}</Example>
                  <p>The test invoker supports the same options as invokeImplementationAdapter described above.</p>
                  <Example>{`
                    const response = await invoker(api, data, { withMiddleware: true })
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Full stack tests',
              anchor: ' fullStack',
              content: (
                <>
                  <p>For full stack tests you'd be best off setting up papupata to make the calls as if it's the real client.</p>
                  <p>
                    If you are setting up the express server with your own code for your tests, you might want to use the request-promise
                    adapter or write your own if you use something else.
                  </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            import createRequestAdapter from 'papupata/dist/main/requestPromiseAdapter'
                            API.configure({
                              ...API.getConfig(),
                              baseURL: \`http://localhost:\${port}\`
                              makeRequest: createRequestAdapter('json')
                            })
                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            import createRequestAdapter from 'papupata/dist/main/requestPromiseAdapter'
                            API.updateConfig({                              
                              baseURL: \`http://localhost:\${port}\`
                              requestAdapter: createRequestAdapter('json')
                            })
                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                          `}
                        </Example>
                      )
                    }}
                  />

                  <p>If you are using supertest, you can use adapter specifically made for it instead.</p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'

                            const supertestRequest = supertest(app) // express app
                            API.configure({                      
                              ...API.getConfig(),
                              baseURL: '', // The value must be an empty string
                              makeRequest: createSupertestAdapter(supertestRequest)
                            })
                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'

                            const supertestRequest = supertest(app) // express app
                            API.updateConfig({
                              baseURL: '', // The value must be an empty string
                              requestAdapter: createSupertestAdapter(supertestRequest)
                            })
                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})
                          `}
                        </Example>
                      )
                    }}
                  />

                  <p>If you wish to access the actual supertest request for your assertions, you can instead use supertest invoker.</p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            import supertestInvoker from 'papupata/dist/main/supertestInvoker'

                            API.configure({                      
                              ...API.getConfig(),
                              baseURL: '', // The value must be an empty string
                            })
                            
                            const supertestRequest = supertest(app) // express app
                            const data = {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'}

                            await invokeSupertest(supertestRequest, api, data)
                              .expect(200)                    
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            import supertestInvoker from 'papupata/dist/main/supertestInvoker'

                            API.updateConfig({
                              baseURL: '', // The value must be an empty string
                            })
                            
                            const supertestRequest = supertest(app) // express app
                            const data = {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'}

                            await invokeSupertest(supertestRequest, api, data)
                              .expect(200)                    
                          `}
                        </Example>
                      )
                    }}
                  />
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
