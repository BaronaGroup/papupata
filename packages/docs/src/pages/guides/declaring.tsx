import * as React from 'react'

import Page from '../../components/Page'
import Container from '../../components/Container'
import IndexLayout from '../../layouts'
import { FixedFont, GuideContent, Overview } from '../../components/guides'
import { Example } from '../../components/api-components'
import styled from 'styled-components'
import { Link } from 'gatsby'
import VersionVariants from '../../components/VersionVariants'
import TypeMappingLink from '../../components/TypeMappingLink'

const LineIndent = styled.div`
  border-left: 3px solid #eee;
  padding-left: 30px;
  margin-bottom: 30px;
`

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: declaring APIs</h1>
        <Overview>
          Papupata is all about implementing and invoking APIs. In order for any of that to happen, the APIs must first be declared, or
          modeled using the tools provided by papupata. This guide covers how the declarations are made.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'Setting up an API declaration',
              anchor: 'setup',
              content: (
                <>
                  <p>
                    The first thing you'll need is an API declaration. Simply put, it typically represents a set of APIs accessible from a
                    single host. It could be all of the APIs of an application, or just one of them.
                  </p>
                  <p>
                    In order to actually use the declared APIs, it is necessary to set up configuration, but just for the purposes of
                    declaring APIs we do not have to worry about that.
                  </p>
                  <Example>
                    {`
              import {APIDeclaration} from 'papupata'
              const API = new APIDeclaration()
              `}
                  </Example>
                  <p>All of the examples in the sections below will expect this API declaration to exist in their scope.</p>
                </>
              )
            },
            {
              heading: 'Your first declaration',
              anchor: 'first',
              content: (
                <>
                  <p>
                    Let's start with a really simple API. An API found at <FixedFont>/hello</FixedFont>, invoked with the HTTP method{' '}
                    <FixedFont>GET</FixedFont>, which a string as its response.
                  </p>
                  <Example>{`
                    const helloAPI = API
                      .declareGetAPI('/hello')
                      .response<string>()
                  `}</Example>
                  <p>
                    Seems simple, enough, right? We specify the method and the path by invoking the <FixedFont>declareGetAPI</FixedFont>{' '}
                    function on the API declaration, and then we declare the response type with the <FixedFont>response</FixedFont> method.
                  </p>
                  <p>
                    Bodies and responses are often complicated objects, and as such they are represented using typescript types. As we see
                    in the example, the type of the response is passed to the <FixedFont>response</FixedFont> function as an explicit type
                    parameter.
                  </p>
                </>
              )
            },
            {
              heading: 'The anatomy of a declaration',
              anchor: 'anatomy',
              content: (
                <>
                  <p>API declarations often contain many things, and many of those can be modeled using papupata.</p>
                  <p>Let's start by looking at an API declaration which utilizes all of the possibilities provided by papupata</p>{' '}
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
                            .body<string, Date>()
                            .response<string, Date>()
                          `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)
                            .params({id: String})
                            .query({author: String, notifyWatchers: Boolean}})
                            .optionalQuery({timestamp: String})
                            .body<string, Date>()
                            .response<string, Date>()
                          `}</Example>
                      )
                    }}
                  />
                  <p>
                    Having easy-to-read API declarations was one of the main goals of papupata, and hopefully we've been reasonably
                    successful. It is rare to see everything present in the example in real APIs, so it is something of an abomination.
                  </p>
                  <p>Anyway, let's briefly go through each part</p>
                  <LineIndent>
                    <Example>const complexAPI</Example>
                    <p>
                      You need to store APIs somewhere. Although you declare them on the API declaration object, you can not access them
                      from there -- and you'd never be able to get the type safety if you could.
                    </p>
                    <p>
                      For simple cases you can store the APIs in simple variables, but if you are modeling a collection of APIs, it probably
                      makes sense to store the APIs in an object:
                    </p>
                    <Example>
                      {`
                      const apis = {
                        getOne: API.declareGetAPI(...),
                        updateOne: API.declareGetAPI(...),
                        deleteOne: API.declareGetAPI(...),
                        find: API.declareGetAPI(...),
                      }
                    `}
                    </Example>
                    <p>You can even nest objects to make a logical hierarchy out of them.</p>
                  </LineIndent>
                  <LineIndent>
                    <Example>.declarePostAPI(</Example>
                    <p>
                      All APIs are declared using one of the methods on an API declaration instance. The naming pattern is always the same,
                      so you can expect to find declareGetAPI, declarePutAPI and so on to be available.
                    </p>
                    <p>
                      At this time there is no way to define an API to support multiple methods -- you have do declare it separately for
                      each method.
                    </p>
                  </LineIndent>
                  <LineIndent>
                    <Example>'/update/:id'</Example>
                    <p>
                      All APIs are declared using relative paths. The base URL is set up before calls can be made, and it can even include
                      paths as well.
                    </p>
                    <p>
                      Path parameters must be present in the url passed to the declaration function; they are indicated by a colon before
                      the parameter name.
                    </p>
                    <p>
                      Query parameters are generally speaking NOT included in the url, however you can include query-based rules in the path
                      when APIs only differ from each other by their query parameters. See{' '}
                      <Link to="/guides/declaring/query-based-variants">Query-based variants</Link> for more information.
                    </p>
                  </LineIndent>
                  <LineIndent>
                    <Example>, routeOptions)</Example>
                    <p>Sometimes you need to add metadata to the routes. It could be relevant for the client, server, or both.</p>
                    <p>
                      The API declaration has a number of type parameters, one of which is used to define the type of the route options.
                    </p>
                    <p>
                      These parameters are typically accessed either from the middleware or the function that actually makes HTTP requests.
                    </p>
                    <p>
                      A common use case would be to indicate the need for authentication. This allows the server to verify authentication as
                      needed, while the client can skip obtaining the credentials.
                    </p>
                    <p>As the example API declaration does not include options, here is another small example:</p>
                    <Example>{`
                      import {Request} from 'express'
                      const API = new APIDeclaration<Request, {requiresAuthentication: boolean}>
                      const api = API.declareGetAPI('/', {requiresAuthentication: false})
                    `}</Example>
                  </LineIndent>
                  <LineIndent>
                    <VersionVariants
                      isRecommendation
                      variants={{
                        '1.x': (
                          <>
                            <Example>{`.params(['id'] as const)`}</Example>
                            <p>
                              In addition to being declared in the URL, path parameters need to be declared in a way that lets typescript
                              know they exist. This call to params serves that purpose.
                            </p>
                            <p>
                              Just add all the parameters into an array (omitting the leading colon used in the URL), and add{' '}
                              <FixedFont>as const</FixedFont> after the array.
                            </p>
                            <p>
                              At this time path parameters cannot be optional; if you need to support that case, you have to declare
                              multiple APIs that match the different cases.
                            </p>
                            <p>
                              Knowing or understanding <FixedFont>as const</FixedFont> is not necessary to use papupata, but in case you are
                              interested, causes the array not to be just an array of strings. In the example case, it is a tuple where the
                              first element is <FixedFont>id</FixedFont>. From this it is possible to extract the type needed both for
                              implementing and calling the API.
                            </p>
                          </>
                        ),
                        '2.x': (
                          <>
                            <Example>{`.params({id: String})`}</Example>
                            <p>
                              In addition to being declared in the URL, path parameters need to be declared in a way that lets typescript
                              know they exist. This call to params serves that purpose.
                            </p>
                            <p>
                              Just create an object where the keys are the names of the path parameters and the values represent their
                              types. See <TypeMappingLink /> for more information on the types.
                            </p>
                            <p>
                              At this time path parameters cannot be optional; if you need to support that case, you have to declare
                              multiple APIs that match the different cases.
                            </p>
                          </>
                        )
                      }}
                    />{' '}
                  </LineIndent>
                  <LineIndent>
                    {' '}
                    <VersionVariants
                      isRecommendation
                      variants={{
                        '1.x': (
                          <>
                            <Example>{`
                              .query(['author'] as const)
                              .optionalQuery(['timestamp'] as const)
                              .queryBool(['notifyWatchers'] as const)
                              `}</Example>
                            <p>
                              The format for entering query parameters is the same as with path parameters. There are, however, 3 different
                              types of query parameters; normal, optional and boolean.
                            </p>
                            <p>You can have any combination of the 3 in any given API, but they must always be declared in that order.</p>
                            <p>
                              <FixedFont>query</FixedFont> and <FixedFont>optionalQuery</FixedFont> should hopefully be obvious,{' '}
                              <FixedFont>queryBool</FixedFont> is a convenience option; when calling it expects a boolean value instead of a
                              string. On the implementation side, the value <FixedFont>true</FixedFont> becomes the boolean true, any other
                              value becomes false.
                            </p>
                          </>
                        ),
                        '2.x': (
                          <>
                            <Example>{`
                              .query({author: String, notifyWatchers: Boolean}})
                              .optionalQuery({timestamp: String})
                            `}</Example>
                            <p>
                              The format for entering query parameters is the same as with path parameters. Optional parameters are
                              supported for queries, though they have to be separated from the required ones. While you can have both
                              required and optional parameters in any given API, the required parameters must be declared first.
                            </p>
                            <p>
                              Again, see <TypeMappingLink /> for more information on the supported types. The only difference to path
                              parameters in this regard is that for query parameters arrays are supported.
                            </p>
                          </>
                        )
                      }}
                    />
                  </LineIndent>
                  <LineIndent>
                    <Example>{`.body<string, Date>()`}</Example>
                    <p>
                      Oh boy. Let's start with something a little simpler: <FixedFont>{`.body<string>()`}</FixedFont>. That is what you'll
                      usually see, and should be quite straightforward. The body for the request must be a string.
                    </p>
                    <p>
                      I can be any type, but in practice the transport medium (commonly json) does tend to put limitations to what can
                      really be transferred. Functions, for example, you probably can't just pass along over APIs.
                    </p>
                    <p>
                      Sometimes there are types which are transformed automatically. When using JSON, dates for example are commonly just
                      stored as a string, even if you original payload had it as a date. This creates a typing conundrum: surely you should
                      be able to pass in a date, even if the other side will see it as a string. This is where the second type parameter
                      comes in. The first parameter is the type of the body, as it will be seen by the server, and the second one is the
                      type of the body the way the client application can pass it. The conversion between the two should be transparent to
                      the user. If you only pass one type parameter, it is used for both cases.
                    </p>
                  </LineIndent>
                  <LineIndent>
                    <Example>{`.response<string, Date>()`}</Example>
                    <p>Response work just like body does, except from the opposite point of view.</p>
                    <p>
                      You can pass a single type argument and it'll be the type of there response everywhere. If you pass another one
                      though, that is what the implementation is expected to return. Again, the conversion to the type seen by the client
                      should be implicit, either built into the serialization process or maybe in the form of a middleware.
                    </p>
                    <p>
                      All declarations must end with a response. The type can be void or undefined if the API returns nothing, but the call
                      to <FixedFont>response</FixedFont> must be there regardless.
                    </p>
                  </LineIndent>
                </>
              )
            },

            {
              heading: 'Error handling',
              anchor: 'errors',
              content: (
                <>
                  <p>At this time papupata does not have particular support for managing errors.</p>
                  <p>
                    You could type the response to be either the actual response or an error response, but that's essentially the extent of
                    it.
                  </p>
                  <Example>{`
                const api = API.declareGetAPI('/path')
                  .response<Data | {errorMessage: string}>()
                `}</Example>
                  <p>
                    Even so, there are certainly limitations to this. If the client request library rejects the failed requests, the type
                    information will be lost anyway and even in success cases you have to ensure you got the data object even if it should
                    be obvious.
                  </p>
                  <p>This is certainly something that will be developed further in upcoming releases.</p>
                </>
              )
            },
            {
              heading: 'Conclusion',
              anchor: 'conclusion',
              content: (
                <>
                  <p>What we've covered includes essentially everything papupata has for declaring the APIs.</p>
                  <p>
                    The logical next steps would be about how to actually use the declarations. If you want to call the declared APIs, head
                    on over to <Link to="/guides/client/setup">setting up papupata client</Link>, or perhaps straight to{' '}
                    <Link to="/guides/client/calling">calling APIs</Link> if someone else has set things up for you already.
                  </p>
                  <p>
                    On the other hand, if you want to implement APIs that have been declared,{' '}
                    <Link to="/guides/server/setup">setting up papupata server</Link> and{' '}
                    <Link to="/guides/server/implementing">implementing APIs</Link> are good next guides.
                  </p>
                  <p>
                    Lastly, if you want to know about how to extract metadata from the declared APIs, there is a guide about{' '}
                    <Link to="/guides/metadata">metadata</Link>, too.
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
