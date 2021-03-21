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
        <h1>Guide: interacting with express</h1>
        <Overview>
          It is not uncommon to want to integrate papupata into an existing express application, whether it is to use the middleware or just
          using papupata to model the APIs implemented with express.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'The basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    Papupata connects itself straight to the express app, or you can provide it an express router that you can embed
                    anywhere you wish in your express application. The timing of things depends on the configuration setting{' '}
                    <FixedFont>autoImplementAllAPIs</FixedFont>: if it is enabled (default in papupata 2.x), the APIs are added to the app
                    or router when the configuration happens, if disabled, they are added when they are implemented.
                  </p>
                  <p>
                    Any middleware before and after the attachment point are used as normal -- whether they are on the router or the app.
                  </p>
                  <p>
                    Below are examples that hopefully clarify how the different variants work; before and routerBefore are run before the
                    implementation for api, after and routerAfter after.
                  </p>
                  <p>App, no autoImplementAllAPIs:</p>
                  <Example>{`
                    const app = express()
                    API.configure({app, autoImplementAllAPIs: false})                    
                    app.use(before)
                    api.implement(implementation)
                    app.use(after)
                  `}</Example>
                  <p>Router, no autoImplementAllAPIs:</p>
                  <Example>{`
                    import express, {Router} from 'express'
                    const router = Router()
                    API.configure({router, autoImplementAllAPIs: false})  

                    router.use(routerBefore)
                    api.implement(implementation)
                    router.use(routerAfter)

                    const app = express()
                    app.use(before)
                    app.use(router)
                    app.use(after)
                  `}</Example>
                  <p>App, using autoImplementAllAPIs:</p>
                  <Example>{`
                    const app = express()
                    app.use(before)
                    API.configure({app, autoImplementAllAPIs: true})                    
                    app.use(after)
                    api.implement(implementation)                    
                  `}</Example>
                  <p>Router, using autoImplementAllAPIs:</p>
                  <Example>{`
                    import express, {Router} from 'express'
                    const router = Router()
                    
                    router.use(routerBefore)
                    API.configure({router, autoImplementAllAPIs: true})  
                    router.use(routerAfter)

                    const app = express()
                    app.use(before)
                    app.use(router)
                    app.use(after)

                    api.implement(implementation)                    
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Where on the app should papupata implementation be?',
              anchor: 'where',
              content: (
                <>
                  <p>
                    In an app with both papupata and non-papupata routes it should usually be the case that papupata route implementations
                    take place before express routes. This helps ensure that the APIs are implemented according to the API declarations,
                    without a plain express implementation taking over.
                  </p>
                  <p>
                    Things aren't always quite that simple though, since ambiguous routing rules and complicated middleware interactions can
                    add difficult dependencies on implementation order. See{' '}
                    <a href="#declOnly">Implementing APIs declared with just express</a> for some ideas on what could be done in this case.
                  </p>
                  <p>
                    How about timing with middleware? If you have middleware that is common with the rest of you application then it makes
                    sense to just set it all up for all of the routes. Middleware exclusive to papupata routes could be included on its
                    router, or as papupata middleware. The advantage of using papupata middleware is that it is only used whenever an actual
                    papupata API is called, not just for being at a specific path. Express-only middleware you'll probably want to add after
                    the papupata routes so it ends up being bypassed outside of error cases.
                  </p>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'errorHandling',
              content: (
                <>
                  Any exceptions thrown in papupata implementations and middleware (unless handled otherwise) are passed as normal to
                  express error handling middleware.
                  <Example>{`
                  api.implement(() => { throw new Error('Oops') })

                  app.use(papupataRouter)
                  app.use((err, req, res, next) => {
                    res.status(500)
                    log.error(err)
                    res.send('An error happened')
                  })
                `}</Example>
                </>
              )
            },
            {
              heading: 'Route-specific middleware',
              anchor: 'routeSpecific',
              content: (
                <>
                  <p>
                    You can apply route-specific middleware using the <FixedFont>implementWithExpressMiddleware</FixedFont> method.
                  </p>
                  <Example>{`
                    api.implementWithExpressMiddleware([myExpressMiddleware], implementation)
                  `}</Example>
                  <p>
                    If you need to combine express middleware with papupata middleware (which can manipulate the response after the route
                    implementation), you can convert express middleware to papupata middleware using the{' '}
                    <FixedFont>convertExpressMiddleware</FixedFont> function.
                  </p>
                  <Example>{`
                    import {convertExpressMiddleware} from 'papupata'
                    api.implementWithExpressMiddleware(
                      [myPapupataMiddleware, convertExpressMiddleware(myExpressMiddleware)], 
                      implementation
                    )
                  `}</Example>
                  <p>
                    See <Link to="/guides/server/middleware">the middleware guide</Link> for more information
                  </p>
                </>
              )
            },
            {
              heading: 'Implementing APIs declared with just express',
              anchor: 'declonly',
              content: (
                <>
                  <p>
                    While much of the benefit to using papupata comes from using it to implement APIs, sometimes with existing applications
                    it can be difficult to convert existing APIs to use it because of complicated middleware or routing considerations.
                  </p>
                  <p>
                    In these situations you can still use papupata to declare the API, and then use your old implementation. At its simplest
                    you just implement the API you have declared and that is it. If you want to utilize the typescript types, it is also
                    possible to an extent.
                  </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          const api = API.declareGetAPI('/path/:id')
                            .params(['id'] as const)
                            .query(['search'] as const)
                            .body<string>()
                            .response<string>()
      
                          app[api.method](api.path, (req, res, next) => {
                            const typedRequest = req as typeof api.RequestType
                            const response: typeof api.ResponseType = await calculateResponse()
                            res.send(response)
                          })
                        `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          const api = API.declareGetAPI('/path/:id')
                            .params({id: String}})
                            .query({search: String})
                            .body<string>()
                            .response<string>()
      
                          app[api.method](api.path, (req, res, next) => {
                            const typedRequest = req as typeof api.RequestType
                            const response: typeof api.ResponseType = await calculateResponse()
                            res.send(response)
                          })
                    `}</Example>
                      )
                    }}
                  />
                  <p>
                    The main caveat is that boolean query parameters are typed as booleans when they are just strings in express. If this is
                    a problem, you can use a helper type to convert the request to express style using a helper type such as the following:
                  </p>
                  <Example>{`
                    type PapupataToExpressRequest<T> = T extends { query: infer U }
                      ? Omit<T, 'query'> & { query: { [t in keyof U]: string } }
                      : T
                  
                    type ExpressRequest = PapupataToExpressRequest<typeof api.RequestType>
                  `}</Example>
                  <p>
                    If you've opted to use the <FixedFont>autoImplementAllAPIs</FixedFont> setting (enabled by default in papupata 2.x), any
                    routes declared in papupata are set up to return HTTP 501 not implemented, assuming you configure papupata to your
                    express application. This of course is undesirable when you actually want papupata to ignore the request. If you want
                    the benefits of the setting anyway, there is a way around it; individual route implementations can return a special
                    token value <FixedFont>papupata.skipHandlingRoute</FixedFont> to indicate that routing is to continue onwards.
                  </p>
                  <Example>{`
                    import {skipHandlingRoute} from 'papupata'

                    api.implement(() => skipHandlingRoute)
                    app[api.method](api.path, (req, res, next) => {
                      // this is where calls to api end up
                    })
                    `}</Example>
                  <p>In papupata 2.x, you can also disable the auto-implementation for specific APIs within their declaration.</p>
                  <Example>{`
                    const api = API.declareGetAPI('/path', {}, { disableAutoImplement: true })
                  `}</Example>
                  <p>
                    As another alternative you could implement your express routes before papupata routes, but that could end up with
                    mismatched API declarations and implementations so doing so is not without issues, either.
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
