import '../../prepare'
import * as React from 'react'
import { Example } from '../../components/api-components'
import Container from '../../components/Container'
import { FixedFont, GuideContent, Overview } from '../../components/guides'
import Page from '../../components/Page'
import VersionVariants from '../../components/VersionVariants'
import IndexLayout from '../../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: accessing metadata</h1>
        <Overview>
          Papupata allows you to declare, call and implement APIs. Sometimes you need to do something slightly different though and need
          access to information about the API. This guide helps you with that.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'To begin with',
              anchor: 'setup',
              content: (
                <>
                  <p>It might be helpful fairly solid understanding of what papupata API declarations look like.</p>
                  <p>In the examples presented in this guide, the following API declaration is assumed to be in the scope:</p>{' '}
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
              heading: 'URLs and methods',
              anchor: 'endpoints',
              content: (
                <>
                  <p>
                    The most basic things, path and method as specified when declared the API can be accessed directly from the api object.
                  </p>
                  <Example>{`
                  const {method, path} = complexAPI
                  // method: post
                  // path: /update/:id
                `}</Example>
                  <p>
                    The path might not be quite what you need though. Perhaps you want a full URL, with path and possibly query parameters
                    already in place. This can be done with the <FixedFont>getURL</FixedFont> method. Do note that the method requires{' '}
                    <FixedFont>baseURL</FixedFont> to be configured.
                  </p>
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          API.configure({
                            ...api.getConfig(),
                            baseURL: 'https://www.example.com'
                          })
                          console.log(complexAPI.getURL({id: '123'}))
                          // https://www.example.com/update/123

                          console.log(complexAPI.getURL({id: '123', author: 'Bob'}))
                          // https://www.example.com/update/123?author=Bob
                  `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          API.updateConfig({
                            baseURL: 'https://www.example.com'
                          })
                          console.log(complexAPI.getURL({id: '123'}))
                          // https://www.example.com/update/123

                          console.log(complexAPI.getURL({id: '123', author: 'Bob'}))
                          // https://www.example.com/update/123?author=Bob
                  `}</Example>
                      )
                    }}
                  />
                </>
              )
            },
            {
              heading: 'Path and query parameters',
              anchor: 'parameters',
              content: (
                <>
                  <p>
                    The names and types of path and query parameters are accessible from the <FixedFont>apiUrlParameters</FixedFont>{' '}
                    property of the api.
                  </p>
                  <Example>{`
                    const {(params, query, optionalQuery, boolQuery)} = api.apiUrlParameters
                  `}</Example>
                  The are tuples in nature, but can be treated as arrays of strings.
                </>
              )
            },
            {
              heading: 'Types',
              anchor: 'types',
              content: (
                <>
                  <p>
                    This is where things get a little bit more interesting. You can't just export types from and object in typescript, but
                    that's what an API is. Papupata uses a workaround for this problem which looks odd at first, but you get used to it
                    quickly enough. That is, the api exports values that as far as typescript is concerned match the various types used by
                    papupata, allowing the use of <FixedFont>typeof</FixedFont> operator to access the actual type.
                  </p>
                </>
              )
            },
            {
              heading: 'Response',
              anchor: 'types_response',
              level: 1,
              content: (
                <>
                  <p>Let's start with the type of the response.</p>
                  <Example>{`
                    const ApiResponseType = typeof complexApi.ResponseType
                  `}</Example>
                  <p>
                    In situations where the type of the response returned by the implementation is different from the one observed by the
                    client, <FixedFont>ServerResponseType</FixedFont> indicates the type the server is expected to return. If unspecified by
                    the declaration, this is the same as <FixedFont>responseType.</FixedFont>
                  </p>
                  <Example>{`
                    type ApiResponseTypeOnClient = typeof complexApi.ResponseType
                    type ApiResponseTypeOnServer = typeof complexApi.ServerResponseType
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Body',
              anchor: 'types_body',
              level: 1,
              content: (
                <>
                  <p>
                    The body for the request follows the same pattern in the opposite direction, with <FixedFont>BodyType</FixedFont> being
                    the one observed by the server and <FixedFont>CallBodyType</FixedFont> being the one used for API calls.
                  </p>
                  <Example>{`
                    type BodyTypeOnClient = typeof complexApi.CallBodyType
                    type BodyTypeOnServer = typeof complexApi.BodyType
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Request',
              anchor: 'types_requset',
              level: 1,
              content: (
                <>
                  <p>
                    The papupata request is an express request, possibly modified with your own fields as provided on the API declaration,
                    but more importantly it has explicit types for params, query and body. You can access the request type for a specific
                    API using its <FixedFont>RequestType</FixedFont> property.
                  </p>
                  <Example>{`
                    type RequestType = typeof complexApi.RequestType
                  `}</Example>
                  <p>This can be especially useful when you want to use a named function as the implementation for an API.</p>
                </>
              )
            },
            {
              heading: 'Implementation',
              anchor: 'implementation',
              content: (
                <>
                  <p>
                    You can get access to the current implementation and its middleware from the API. The primary use for this is for unit
                    testing, but a clever individual can undoubtedly come up with other uses as well.
                  </p>
                  <Example>{`
                    const {implementation, implementationMiddleware} = complexApi
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
