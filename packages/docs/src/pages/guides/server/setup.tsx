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
        <h1>Guide: setting up papupata for servers</h1>
        <Overview>
          In order to start implementing APIs on the server you need to configure papupata to let it know about its environment. This guide
          covers the most common cases and gives pointer for less common ones.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'Prerequisites',
              anchor: 'prerequisites',
              content: (
                <>
                  <p>
                    Before starting this guide, should know a little bit about API declarations. See{' '}
                    <Link to={'/guides/declaring'}>Declaring APIs</Link> for more details.
                  </p>
                </>
              )
            },
            {
              heading: 'The Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    The one thing that is absolutely essential for implementing APIs, is providing papupata with either an express
                    application or router, which it will declare its routes on.
                  </p>
                  <p>
                    The configuration itself takes place using the <FixedFont>configure</FixedFont> method of an API declaration.
                  </p>
                  <Example>{`
                    import express, {Router} from 'express'
                    const app = express()
                    const API = new APIDeclaration()
                    API.configure({
                      app
                    })
                  `}</Example>
                  <Example>{`
                    const router = Router()
                    app.use(router)
                    API.configure({
                      router
                    })
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Automatic route implementation',
              anchor: 'automatic',
              content: (
                <>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            API.configure({
                              ...API.getConfig(),
                              autoImplementAllAPIs: true
                            })`}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            API.updateConfig({
                              autoImplementAllAPIs: true
                            })`}
                        </Example>
                      )
                    }}
                  />

                  <p>
                    If you are going to implement all, or at least the vast majority of the APIs that have been declared using papupata with
                    papupata, it makes sense to have papupata automatically set up all routes to return 501 Not Implemented until the routes
                    are actually implemented.
                  </p>
                  <p>
                    This makes it obvious what is wrong if you try to invoke such an API. There is a more important effect to this as well,
                    as it means that routes are implemented in the order they were declared in, rather than the order they are implemented
                    in. Usually this does not make a difference, but sometimes the routing can be ambiguous, with the order being the
                    deciding factor. Consider this example:
                  </p>
                  <Example>{`
                    const api1 = API.declareGetAPI('/entries/all').response<any>()
                    const api2 = API.declareGetAPI('/entries/:id').params(['id'] as const).response<any>()
                  `}</Example>
                  <p>
                    It's quite obvious reading it that the intent is that /entries/all goes to api1, and, say, /entries/123 goes to api2.
                    There is however nothing that inherently says that /entries/all shouldn't be handled by api2. Unless the{' '}
                    <FixedFont>autoImplementAllAPIs</FixedFont> setting is set to true, then you'd have to make sure that implementing api1
                    takes place before api2 is implemented. With the setting set to true though, it is enough for api1 to be declared before
                    api2, as is the case in the example.
                  </p>
                  <p>
                    With this setting enabled it is still possible for individual routes to fall back to regular express routing, allowing
                    the implementation to be done in other ways. This is done by having the implementation or a middleware leading to it
                    return <FixedFont>papupata.skipHandlingRoute</FixedFont>
                  </p>
                  <Example>{`
                    import {skipHandlingRoute} from 'papupata'
                    api1.implement(() => skipHandlingRoute)
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Base URL',
              anchor: 'baseURL',
              content: (
                <>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            API.configure({
                              ...API.getConfig(),
                              baseURL: 'https://www.example.com'
                            })`}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            API.updateConfig({
                              baseURL: 'https://www.example.com'
                            })`}
                        </Example>
                      )
                    }}
                  />

                  <p>
                    Setting up the base url is essential for clients, but it can be useful for servers as well. With a base url set up, you
                    can call the <FixedFont>getURL</FixedFont> method on the declarations, which can be useful for redirections, callback
                    urls etc.
                  </p>
                  <p>Just for the purpose of implementing routes it is unnecessary.</p>
                </>
              )
            },
            {
              heading: 'Non-root routers',
              anchor: 'nonroot',
              content: (
                <>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                          API.configure({
                            ...API.getConfig(),
                            routerAt: '/api'
                          })
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            API.updateConfig({                              
                              routerAt: '/api'
                            })
                            `}
                        </Example>
                      )
                    }}
                  />

                  <p>
                    You might find it convenient to set up papupata implementation on an express router that is not at the root of the
                    server. As a common example, you might want to set up the router to be under /api so that its middleware is only applied
                    to API calls.
                  </p>
                  <p>
                    This is a supported scenario -- all you have to do is add the <FixedFont>routerAt</FixedFont> option to the
                    configuration to tell papupata where the router is mounted at.
                  </p>
                  <p>
                    All of the APIs in the declaration to be within the router path -- you cannot have routes at paths where they cannot be
                    implemented
                  </p>
                  <Example>{`
                  import express, {Router} from 'express'
                  import {APIDeclaration} from 'papupata'

                  const API = new APIDeclaration()
                  const getOne = API.declareGetAPI('/api/getOne').response<any>()
                  const app = express()
                  const router = Router()
                  router.use(authenticationMiddleware)
                  app.use('/api', router)

                  API.configure({
                    router,
                    routerAt: '/api'
                  })
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Middleware',
              anchor: 'middleware',
              content: (
                <>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                          API.configure({
                            ...API.getConfig(),
                            inherentMiddleware: [myMiddleware1, myMiddleware2]
                          })
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                          API.updateConfig({
                            inherentMiddleware: [myMiddleware1, myMiddleware2]
                          })
                          `}
                        </Example>
                      )
                    }}
                  />

                  <p>
                    Papupata supports middleware, which can be used on the server to process both requests and responses. For more details
                    see <Link to="/guides/server/middleware">the middleware guide</Link>.
                  </p>
                  <p>
                    Papupata comes with one built-in middleware that changes how undefined responses are handled. Currently an
                    implementation returning undefined is taken as an indication that it takes full responsibility for handling the
                    response.
                  </p>
                  <p>
                    In practice though, a more likely scenario is that the API has nothing to return, and having returning undefined result
                    in HTTP 204 (no content) would be better. And that is exactly what the middleware does.
                  </p>
                  <p>Here's an overview of what it actually does:</p>
                  <ul>
                    <li>
                      If headers have already been sent, it does nothing (this still lets you have APIs that take care of the whole response
                      on their own)
                    </li>
                    <li>If status was not explicitly set, it sets it to 204</li>
                    <li>It sends a response to the client with no data</li>
                  </ul>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                            import {handleUndefinedResponsesMiddleware} from 'papupata'
                            API.configure({
                              ...API.getConfig(),
                              inherentMiddleware: [handleUndefinedResponsesMiddleware]
                            })

                            api1.implement(() => {}) // results in a 204 response
                            api2.implement((_req, res) => {res.redirect('/')}) // the redirection works as expected
                            api3.implement((_req, res) => {res.status(400)}) // status 400, response is sent with no data
                            api4.implement((_req, res) => {res.send('done')}) // nothing special happens
                          `}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                            import {handleUndefinedResponsesMiddleware} from 'papupata'
                            API.updateConfig({
                              inherentMiddleware: [handleUndefinedResponsesMiddleware]
                            })

                            api1.implement(() => {}) // results in a 204 response
                            api2.implement((_req, res) => {res.redirect('/')}) // the redirection works as expected
                            api3.implement((_req, res) => {res.status(400)}) // status 400, response is sent with no data
                            api4.implement((_req, res) => {res.send('done')}) // nothing special happens
                          `}
                        </Example>
                      )
                    }}
                  />
                </>
              )
            },
            {
              heading: 'Conclusion',
              anchor: 'conclusion',
              content: (
                <>
                  <p>Now that papupata is set up to respond to requests, the next step should be actually implementing the APIs.</p>
                  <p>
                    See <Link to="/guides/server/implementing">implementing APIs</Link> for how to do exactly that.
                  </p>
                  <p>
                    If you are concerned with how papupata interacts with your existing express APIs and middleware, you could also take a
                    look at <Link to="/guides/server/interactingWithExpress">Interacting with express</Link>.
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
