import '../../../prepare'
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
        <h1>Guide: implementing APIs</h1>
        <Overview>
          When creating a server with papupata, the one thing you want is to be able to do is implementing the APIs. This guide help you
          understand how that is done.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'Prerequisites',
              anchor: 'prerequisites',
              content: (
                <>
                  <p>
                    Before starting this guide, should have an API declaration set up to serve requests. This is covered in{' '}
                    <Link to={'/guides/server/setup'}>the setup guide</Link>. You should also know how APIs are declared, see{' '}
                    <Link to={'/guides/declaring'}>Declaring APIs</Link> for more details.
                  </p>
                  <p>Examples in this guide will use routes declared like this:</p>{' '}
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)
                            .params(['id'] as const)
                            .query(['author'] as const)
                            .optionalQuery(['timestamp'] as const)
                            .queryBool(['notifyWatchers'] as const)
                            .body<{ name: string}>()
                            .response<{status: string }>()
                          `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)
                            .params({id: String})
                            .query({author: String, notifyWatchers: Boolean}})
                            .optionalQuery({timestamp: String})
                            .body<{ name: string}>()
                            .response<{status: string }>()
                          `}</Example>
                      )
                    }}
                  />
                </>
              )
            },

            {
              heading: 'The basics',
              anchor: 'basics',
              content: (
                <>
                  <p>When it comes to just implementing APIs, it is quite simple:</p>
                  <Example>{`
                  complexAPI.implement(() => ({ status: 'hello' })
                `}</Example>
                  <p>
                    Of course, in practice you'll want to utilize the parameters sent to the API, and possibly do asynchronous things.
                    Luckily things like that are still quite easy.
                  </p>
                  <Example>{`
                  complexAPI.implement(async req => ({
                    await doSomethingComplex(req.params.id)
                    return {status: 'ok!'}
                  })
                `}</Example>
                  <p>
                    So what exactly makes this interesting? Types! While you still access <FixedFont>params</FixedFont>,{' '}
                    <FixedFont>query</FixedFont> and <FixedFont>body</FixedFont> from the request as you would with express, everything is
                    typed. You cannot access query and path parameters that do not exist, the body has an explicit type, and even the value
                    you return as the response is typed to ensure that whatever you return matches the declaration.
                  </p>
                  <p>
                    The implementation is given three parameters: the express request modified for types, express response and the
                    declaration for the route that is being implemented. The declaration is more useful in middleware, but sometimes you can
                    re-use implementations for multiple routes in which case it can be useful to be able to access the route options and to
                    construct an URL to the same API, with different parameters.
                  </p>
                </>
              )
            },
            {
              heading: 'Passing the input data to other functions',
              anchor: 'passingdata',
              content: (
                <>
                  <p>It is often beneficial to split an implementation into multiple functions. But that can cause tricky type issues.</p>
                  <Example>{`
                complexAPI.implement(myImplementation)

                function myImplementation(req: ??): ?? {
                  // What are the types here meant to be?
                }
                `}</Example>
                  <p>
                    A simple but somewhat naive way to solve this problem would be to copy the types from the API declaration. If things
                    don't match, typescript compiler will give you error messages and that'll work. But doing so can cause a bunch of extra
                    work whenever things change, since there can be many types that need to be changed.
                  </p>
                  <p>
                    The smart way in most cases is to use types provided by papupata. Since objects cannot export types the syntax is a bit
                    odd as <FixedFont>typeof</FixedFont> is needed, but there does not seem to be a cleaner way to handle this.
                  </p>
                  <Example>{`
                complexAPI.implement(myImplementation)

                function myImplementation(req: typeof complexAPI.RequestType): typeof complexAPI.ResponseType {
                  // Now we have explicit types!
                }
                `}</Example>
                  <p>
                    For more information about accessing data about the APIs, see <Link to={'/guides/metadata'}>the metadata guide</Link>
                  </p>
                </>
              )
            },
            {
              heading: 'Middleware',
              anchor: 'middleware',
              content: (
                <>
                  <p>
                    You can not only configure an API declaration to include middleware that is applied to all APIs within it, but
                    individual APIs can have their own middleware as well. Both express and papupata middleware are supported; when both are
                    present, express middleware is always run first. If this is a problem, it is easy to create a wrapper that runs express
                    middeware as papupata middleware.
                  </p>
                  <Example>{`
                  complexAPI.implementWithExpressMiddleware([handleAuthentication], implementation)
                  complexAPI.implementWithPapupataMiddleware([logRequests], implementation)
                  complexAPI.implementWithMiddleware({
                    express: [handleAuthentication],
                    papupata: [logRequests]
                  }, implementation)
                  `}</Example>
                  <p>
                    See <Link to="/guides/server/middleware">the middleware guide</Link> for more information about middleware.
                  </p>
                </>
              )
            },
            {
              heading: 'Not actually implementing routes',
              anchor: 'notimplementing',
              content: (
                <>
                  <p>
                    Sometimes routing can work in ways where there are false positives. You might for example only want to run API actions
                    with certain headers present, such as
                  </p>
                  <Example>{`
                  Accept: application/json
                `}</Example>
                  <p>
                    Usually you'd want to do this kind of filtering with a middleware, but perhaps you have an API with unique behavior. You
                    can have the implementation indicate that routing should be restarted past the API you are in, accomplishing what you
                    can with express by calling <FixedFont>next</FixedFont> in the implementation.
                  </p>
                  <Example>{`
                    import {skipHandlingRoute} from 'papupata'
                    complexAPI.implement(req => {
                      if (!req.headers['accept']?.includes('application/json')) {
                        return skipHandlingRoute
                      }
                      // actual implementation here
                    }
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'errorhandling',
              content: (
                <>
                  <p>
                    Papupata does not do much in terms of error handling. Any exceptions thrown in the implementations can be caught
                    middleware, but that not happen, the error is passed to express.
                  </p>
                  <p>
                    In other words, you'll want to have either express or papupata middleware to deal with the errors. There is no type
                    information for errors at this time.
                  </p>
                  <Example>{`
                  function errorMiddleware(req, res, _route, next) {
                    try {
                      await next()
                    } catch(err) {
                      console.error(err.stack || err.message || err)
                      res.status(500)
                      return 'Something went boom'
                    }
                  }

                  complexAPI.implementWithPapupataMiddleware([errorMiddleware], () => { throw new Error() })
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Conclusion',
              anchor: 'conclusion',
              content: (
                <>
                  <p>You now know enough to implement all kinds of APIs with papupata, at least for simple use cases.</p>
                  <p>
                    <Link to={'/guides/server/middleware'}>Understanding middleware</Link> can be quite helpful for dealing with more
                    complex cases, or if you already have an application using express, you might want to learn more about{' '}
                    <Link to={'/guides/server/interactingWithExpress'}>how express and papupata interact</Link>.
                  </p>
                  <p>
                    Tests are an essential part of any serious code base, so learning about{' '}
                    <Link to="/guides/server/testing">testing papupata APIs</Link> is sure to be useful, too.
                  </p>
                  <p>
                    On the other hand, since you now know how to implement the APIs, maybe this would be a good moment to learn about how to
                    call them? <Link to={'guides/client/setup'}>Setting up papupata client</Link> and{' '}
                    <Link to={'guides/client/calling'}>calling APIs with papupata</Link> lead towards that direction.
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
