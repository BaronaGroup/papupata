import '../../../prepare'
import { Link } from 'gatsby'
import * as React from 'react'
import { AvailableFrom, Example } from '../../../components/api-components'
import Container from '../../../components/Container'
import { GuideContent, Overview } from '../../../components/guides'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

const TypeMappingGuide = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: Body and response validation</h1>
        <Overview>Papupata 2.2.0 adds support for Zod schemas, allowing validation of request bodies and responses.</Overview>
        <AvailableFrom version={'2.2.0'} />
        <GuideContent
          content={[
            {
              heading: 'Prerequisites',
              anchor: 'prerequisites',
              content: (
                <>
                  <p>
                    Before starting this guide, you need to have an API declaration, with declared APIs. For information on how to get
                    there, see <Link to={'/guides/declaring'}>Declaring APIs</Link>.
                  </p>
                  <p>
                    Also, you need to have zod installed. While zod is installed as a dependency of papupata itself, depending on your
                    package manager it may or may not be available to be used directly, so installing it explicitly is recommended.
                  </p>
                  <Example>npm install zod</Example>
                  <p>For the examples in the guide, the following code is assumed to be present in the scope:</p>
                  <Example>{`
                    import { APIDeclaration } from 'papupata'
                    import { z } from 'zod'

                    const API = new APIDeclaration()
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Setting up validation',
              anchor: 'setup',
              content: (
                <>
                  <p>
                    Both the body and response sections of an API declaration allow specifying a zod schema to be used for parsing and
                    validation. Not only that, but type inference allows this to work without duplicate work: there is no need to explicitly
                    declare the typescript types when zod does it for you.
                  </p>
                  <p>Let us start with a simple API declaration.</p>
                  <Example>
                    {`
                      const myAPI = API.declarePostAPI('/submit-comment')
                        .body<{
                          message: string
                        }>()
                        .response<{
                          messageId: string,
                          timestamp: number
                        }>()
                    `}
                  </Example>
                  <p>The upside to this is simplicity. The downside is that it is quite reliant on one of:</p>
                  <ul>
                    <li>validation taking place elsewhere</li>
                    <li>no one trying to send in bad data</li>
                  </ul>
                  <p>For a small amount of extra effort we can have papupata take care of the validation for us.</p>

                  <Example>
                    {`
                      const myAPI = API.declarePostAPI('/submit-comment')
                        .body(z.object({
                          message: z.string()
                        })
                        .response(z.object({
                          messageId: z.string(),
                          timestamp: z.number()
                        })
                    `}
                  </Example>

                  <p>While there isn't a great difference in how this is defined, the difference in behavior is staggering:</p>
                  <ul>
                    <li>The client validates the data it sends</li>
                    <li>The server validates the incoming body</li>
                    <li>The server validates its own response</li>
                    <li>Client validates the response it receives</li>
                  </ul>
                  <p>
                    With all four interactions covered, it does not matter if you use papupata only one end of the chain or another, you get
                    the benefits wherever you do.
                  </p>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'error-handling',
              content: (
                <>
                  <p>So, what happens when validation fails? There are a few possibilities.</p>
                </>
              )
            },
            {
              heading: 'By default',
              level: 1,
              anchor: 'error-handling-default',
              content: (
                <>
                  <p>So, what happens when validation fails? There are a few possibilities.</p>
                  <p>By default, an error is thrown. What kind of an error? The kind you get by doing</p>
                  <Example>{`
                    import PapupataValidationError from 'papupata/ValidationError'
                  `}</Example>
                  <p>
                    This can be caught in papupata or express middleware and handled. The error itself extends ZodError, so everything that
                    applies to one of those also applies here, though it should be noted that paths start with the context, "body",
                    "params", "query" or "response" to make it easier to identify what exactly is being referenced.
                  </p>
                </>
              )
            },
            {
              heading: 'Throwing a custom error',
              level: 1,
              anchor: 'error-handling-throw',
              content: (
                <>
                  <p>By customizing the error handling logic, you can throw a different error instead.</p>
                  <Example>{`
                    API.configure({
                      ...API.getConfig(),
                      onValidationFailure(error) {
                        throw new MyValidationError(error)
                      }
                    })
                  `}</Example>
                  <p>
                    The first parameter to this custom error handling function is the PapupataValidationError that would be thrown by
                    default.
                  </p>
                  <p>In fact, the default value for onValidationFailure is simply</p>
                  <Example>{`(error) => { throw error }`}</Example>
                </>
              )
            },
            {
              heading: 'Reroute',
              level: 1,
              anchor: 'error-handling-reroute',
              content: (
                <>
                  <p>
                    You can also trigger rerouting, if it turns out that the validation error happened because the request was not meant for
                    the endpoint in the first place. This could be the case with, say, a new version of an endpoint accepting slightly
                    different parameters.
                  </p>
                  <p>
                    It is not the nicest thing, but routing often has its own oddities so at least it is possible. In this example, if
                    validation fails because the body is a string, it attempts rerouting in the hope that it finds a better endpoint, in
                    this case v1.
                  </p>
                  <Example>{`
                    import { skipHandlingRoute } from 'papupata'

                    const v2Endpoint = API.declarePostAPI('/greeting')
                      .body(z.object({message: z.string()}))
                      .response<unknown>()

                    const v1Endpoint = API.declarePostAPI('/greeting')
                      .body(z.string())
                      .response<unknown>()


                    API.configure({
                      ...API.getConfig(),
                      onValidationFailure(error, value) {
                          // Should probably inspect the other parameters more carefully before making this decision
                        if (typeof value === 'string') return skipHandlingRoute
                        throw error
                      }
                    })
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Ignore',
              level: 1,
              anchor: 'error-handling-ignore',
              content: (
                <>
                  <p>You can opt out of validation by having the handler return the value it was given as its 2nd parameter.</p>
                  <Example>{`
                    API.configure({
                      ...API.getConfig(),
                      onValidationFailure(error, value) {
                        return value
                      }
                    })
                  `}</Example>
                  <p>Doing it as presented is, well, dumb, but slightly altered versions can be useful:</p>
                  <ul>
                    <li>
                      You could log the error; this can be useful when converting javascript code and do not know all of the possible data
                      types ahead of time.
                    </li>
                    <li>
                      You could disable response validation on the client, if you might believe the server isn't very consistent with its
                      responses and doing something on the client is preferred over a total failure.
                    </li>
                  </ul>
                </>
              )
            },
            {
              heading: 'Caveats and such',
              anchor: 'caveats',
              content: (
                <p>
                  <ul>
                    <li>
                      Use of transforms that affect types is inadvisable; as the schemas are applied on both the client and the server, it
                      essentially uses the output of the schema as the input for it itself, the schema output and input must be compatible
                      with each other.
                    </li>
                  </ul>
                </p>
              )
            },
            {
              heading: 'More information',
              anchor: 'moreinfo',
              content: (
                <>
                  For more information on how to declare zod schemas, take a look at their documentation at
                  <a href={'https://zod.dev/'}>https://zod.dev/</a>
                </>
              )
            }
          ]}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default TypeMappingGuide
