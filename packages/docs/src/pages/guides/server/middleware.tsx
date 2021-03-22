import '../../../prepare'
import * as React from 'react'

import Page from '../../../components/Page'
import Container from '../../../components/Container'
import IndexLayout from '../../../layouts'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import { Example } from '../../../components/api-components'
import VersionVariants from '../../../components/VersionVariants'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: middleware</h1>
        <Overview>
          Middleware provides powerful additional functionality to how APIs behave. This guide goes through how middleware is used and
          created.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'What is middleware?',
              anchor: 'whatis',
              content: (
                <>
                  <p>
                    Much like express middleware, papupata middleware exists to separate common functionality needed by APIs from the actual
                    API implementations.
                  </p>
                  <p>There are two types of middleware:</p>
                  <ul>
                    <li>
                      Middleware inherent to an API declaration, which is applied to all of the declared APIs. This could be called global
                      middleware, but since it only applies to a single API declaration it could be misleading.
                    </li>
                    <li>API-specific middleware, which is only applied when explicitly requested.</li>
                  </ul>
                  <p>The middleware generally speaking do one or all of the following things:</p>
                  <ul>
                    <li>Manipulate the request before passing it along to the API implementation</li>
                    <li>Preventing the API from being called under specific circumstances</li>
                    <li>Manipulate the output of an API</li>
                    <li>Add a side-effect to an API being invoked</li>
                  </ul>
                </>
              )
            },
            {
              heading: 'Using middleware',
              anchor: 'using',
              content: (
                <>
                  <p>
                    Both inherent and route-specific middleware is given in an array. The order of the elements matters: inherent middleware
                    is always processed before route-specific middleware, and within the array all middleware are processed in the same
                    order as they exist in the array. This can be important if, say, one middleware adds data to request another middleware
                    depends on, or if you want to block the execution of the middleware as well based on a condition.
                  </p>
                  <p>Configuring inherent middleware: </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>
                          {`
                          API.configure({
                            ...API.getConfig(),
                            inherentMiddleware: [myMiddleware1, myMiddleware1]
                          })`}
                        </Example>
                      ),
                      '2.x': (
                        <Example>
                          {`
                          API.updateConfig({
                            inherentMiddleware: [myMiddleware1, myMiddleware1]
                          })`}
                        </Example>
                      )
                    }}
                  />

                  <p>Configuring middleware for a single route: </p>
                  <Example>{`
                    const myAPI = API.declareGetAPI('/test').response<string>()

                    myAPI.implementWithPapupataMiddleware([myMiddleware1, myMiddleware1], implementation)
                  `}</Example>
                  <p>
                    You can use express middleware with papupata, see more in the <a href="#express">express section of this guide</a>.
                  </p>
                </>
              )
            },
            {
              heading: 'The most basic middleware',
              anchor: 'basic',
              content: (
                <>
                  <p>Let's start by creating a middleware that simply logs the URLs being invoked.</p>
                  <Example>{`
                import {PapupataMiddleware} from 'papupata'
                import {Request} from 'express'
                const myMiddleware: PapupataMiddleware<Request, void> = (req, res, api, next) => {
                    console.log('Handling', req.url)
                    return next()
                }
                `}</Example>
                  <p>
                    The main difference between express and papupata middleware is that while express middleware forms a list, papupata
                    middleware are more like koa middleware in that there is a call stack, or a pyramid where each middleware can be a part
                    of both the request and the response. The important thing for most middleware is to return the value returned by calling{' '}
                    <FixedFont>next()</FixedFont> instead ignoring it.
                  </p>
                  <p>Errors are handled by throwing exceptions.</p>
                </>
              )
            },
            {
              heading: 'Manipulating request',
              anchor: 'request',
              content: (
                <>
                  <p>In theory manipulating the request is just changing data in it.</p>
                  <Example>{`
                const myMiddleware: PapupataMiddleware<Request, void> = (req, res, api, next) => {
                    if (req.body?.userId === 'self') {
                        req.body.userId = req.session.userId
                    }
                    return next()
                }
                `}</Example>
                  <p>
                    Typescript does make some kinds of changes more difficult. If you want to add custom fields, you probably want to extend
                    the <FixedFont>request</FixedFont> interface to contain whatever you are adding.
                  </p>
                  <p>
                    Sometimes though these modifications might only be relevant for single papupata API declarations and you don't want to
                    change the global request interface. For this reason papupata supports changing the request type to something other than
                    the default.
                  </p>
                  <Example>{`
                  interface MyRequest extends Request {
                    myField: string
                  }

                  const API = new APIDeclaration<MyRequest>()

                   const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {
                    if (req.body?.userId === 'self') {
                        req.body.userId = req.session.userId
                    }
                    return next()
                }
                  `}</Example>
                  <p>
                    In the example both the implementations and middleware on API use the MyRequest instead of the normal Request type for
                    the request parameter.
                  </p>
                </>
              )
            },
            {
              heading: 'Abandoning the request',
              anchor: 'abandoning',
              content: (
                <>
                  <p>
                    Sometimes middleware needs to prevent the actual implemementation from being called. There are multiple way to do this
                    depending on what your goal is. There is always one thing in common though: you don'd call next.
                  </p>
                  <ul>
                    <li>
                      Return a value. It then becomes the response instead of what the implementation would have provided
                      <Example>{`
                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {
                      if (!req.headers.accept?.includes('application/json')) {
                          res.status(400)
                          return 'Bad headers'
                      }
                      return next()
                    }
                    `}</Example>
                    </li>
                    <li>
                      Throw an error to do normal error handling
                      <Example>{`
                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {
                      if (!req.headers.accept?.includes('application/json')) {
                          throw new Error('Bad headers')
                      }
                      return next()
                    }
                    `}</Example>
                    </li>
                    <li>
                      Explicitly send a response using the methods on <FixedFont>res</FixedFont>. This prevents other middleware from being
                      able to affect the response.
                      <Example>{`
                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {
                      if (!req.headers.accept?.includes('application/json')) {
                          res.status(400)
                          res.send('Bad request: Invalid headers')
                          return
                      }
                      return next()
                    }
                    `}</Example>
                    </li>
                    <li>
                      Return <FixedFont>skipHandlingRoute</FixedFont> to have express resume routing and middleware processing with other
                      APIs.
                      <Example>{`
                    import {skipHandlingRoute} from 'papupata'
                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {
                      if (!req.headers.accept?.includes('application/json')) {
                          return skipHandlingRoute
                      }
                      return next()
                    }
                    `}</Example>
                    </li>
                  </ul>
                </>
              )
            },
            {
              heading: 'Manipulating response',
              anchor: 'response',
              content: (
                <>
                  <p>
                    Normally a middleware gets the response data by doing <FixedFont>await next()</FixedFont>, and it can then do whatever
                    manipulation it desires. Some APIs can send the response directly though, in which case this is not true, so you should
                    try and be prepared for it.
                  </p>
                  <Example>{`
                    const myMiddleware: PapupataMiddleware<MyRequest, void> = async (req, res, api, next) => {
                      const value = await next()
                      if (!res.headersSent) {
                        res.status(204)
                        return value ?? 'No data'
                      }
                      return value
                    }
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Route options',
              anchor: 'options',
              content: (
                <>
                  <p>
                    It'd be really convenient to give middleware some metadata about a route. Is unauthenticated access permitted? Does it
                    handle unusual payloads? Papupata allows exactly that.
                  </p>
                  <p>
                    When you create an API declaration you can provide an interface that provides options to routes, and provide a value of
                    that type to the APIs.
                  </p>
                  <Example>{`
                  import {Request} from 'express'
                  interface Options { publicAccess: boolean }
                  const API = new APIDeclaration<Request, Options>()
                  const myAPI = API.declareGetAPI('/api/ping', {publicAccess: true}).response<string>()
                `}</Example>
                  <p>This value can then be accessed by middleware.</p>
                  <Example>{`
                    const myMiddleware: PapupataMiddleware<Request, Options> = async (req, res, api, next) => {
                      if (!api.options?.publicAccess && !req.session.isValid) {
                        throw new Error('Authentication required')
                      }
                      return next()
                    }
                `}</Example>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'errors',
              content: (
                <>
                  <p>You can use middleware to add custom error handling.</p>
                  <Example>{`
                    const myMiddleware: PapupataMiddleware<Request, Options> = async (req, res, api, next) => {
                      try {
                        return await next()
                      } catch(err) {
                        res.status(err.status || 400)
                        return err.message
                      }
                    }
                `}</Example>
                </>
              )
            },
            {
              heading: 'Express middleware',
              anchor: 'express',
              content: (
                <>
                  <p>
                    Individual routes can be given express middleware in addition to papupata middleware. If you do that, the express
                    middleware is run before the papupata middleware is -- even the inherent middleware.
                  </p>
                  <Example>{`
                myAPI.implementWithExpressMiddleware([expressMiddleware], implement)
                myAPI.implementWithMiddleware({express: [expressMiddleware]}, implement)
                `}</Example>
                  <p>
                    A generally preferable option is to convert express middleware into papupata middleware;{' '}
                    <FixedFont>convertExpressMiddleware</FixedFont> is exported by papupata to do that. At this time it does not handle
                    express middleware that handle errors, but other middleware should be convertable.
                  </p>
                  <Example>{`
                  import {convertExpressMiddleware} from 'papupata'
                  myAPI.implementWithPapupataMiddleware([convertExpressMiddleware(expressMiddleware)], implement)
                  `}</Example>
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
