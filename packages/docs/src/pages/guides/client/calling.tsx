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
        <h1>Guide: calling APIs</h1>
        <Overview>
          When you are using someone else's API, this is where the magic happens for you. Making API requests may never have been this
          simple without a fully featured support library.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'Prerequisites',
              anchor: 'prerequisites',
              content: (
                <>
                  <p>
                    Before starting this guide, you need to have an API declaration, with declared APIs. For information on how to get
                    there, see <Link to={'/guides/declaring'}>Declaring APIs</Link>. You also need to have configured the API declaration to
                    be able to make requests. This is covered in <Link to={'/guides/client/setup'}>Setting up papupata</Link>
                  </p>
                  <p>
                    For the examples in the guide, the following code is assumed to be present in the scope, and by this time you should be
                    fully aware of what it all means:
                  </p>{' '}
                  <VersionVariants
                    isRecommendation
                    variants={{
                      '1.x': (
                        <Example>{`
                          const API = new APIDeclaration()
                          const api = API.declarePatchAPI('/update/:id')
                            .params(['id'] as const)
                            .body<{name: string}>()
                            .response<string>()
                        `}</Example>
                      ),
                      '2.x': (
                        <Example>{`
                          const API = new APIDeclaration()
                          const api = API.declarePatchAPI('/update/:id')
                            .params({id: String})
                            .body<{name: string}>()
                            .response<string>()
                        `}</Example>
                      )
                    }}
                  />
                </>
              )
            },
            {
              heading: 'The Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    With properly set up papupata the some complexities of dealing with REST APIs are hidden well under the hood. You have a
                    function, with typed arguments helping you avoid mistakes.
                  </p>
                  <p>
                    Now, if you looked at the API we will be using, you probably noticed that thare are two parameters to the API. A path
                    parameter, id, and a body that is an object with name in it.
                  </p>
                  <p>Now let's call the API:</p>
                  <Example>{`
                    await api({ id: 'alpha', name: 'Kevin'})
                  `}</Example>
                  <p>
                    That's all there is to it. You never had to know the actual URL. As you can see, all parameters go into the same object
                    regardless of where they are meant to end up. Body, query and path parameters, all in one. This does mean that you
                    cannot have different parameters with the same name in different places, but in most cases that sounds like a bad idea
                    to begin with.
                  </p>
                  <p>
                    Things work as you would expect: optional parameters are optional, boolean parameters accept booleans and so on. With a
                    properly declared API you can even pass in dates even though they'll probably becomes strings as they are converted to
                    JSON. It is fully typed as well, so typescript will complain if you try to do something that contradicts the
                    declaration.
                  </p>
                  <p>
                    You can of course receive responses from the API. You probably guessed it already, but the promise returned by the call
                    resolves to that value. The response too, of course, is fully typed.
                  </p>
                  <Example>{`
                    const response = await api({ id: 'alpha', name: 'Kevin'})
                    // the response from the api is now in response. Typescript knows it's a string, as that's
                    // how it was declared to be.
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Non-object bodies',
              anchor: 'bodies',
              content: (
                <>
                  <p>
                    All in one object sounds like a good idea until it is not. What if you are not passing an object? Even things as mundane
                    as arrays and strings won't work in that case.
                  </p>
                  <p>
                    This is something papupata is prepared for. Instead of passing everything as a single parameter, you can pass the body
                    as the first parameter with path and query parameters in another.
                  </p>
                  <Example>{`
                  await api({name: 'Kevin'}, {id: 'alpha'})
                `}</Example>
                  <p>Sometimes you might want to do this for the sake of clarity as well.</p>
                </>
              )
            },
            {
              heading: 'Options',
              anchor: 'options',
              content: (
                <>
                  <p>
                    It is possible to pass options to the code that actually performs the HTTP request for papupata. They are given as an
                    additional final parameter to the API call, whether or not you gave the body as a separate parameter.
                  </p>
                  <p>
                    The build in adapters do not support options, see{' '}
                    <Link to={'/guides/client/customRequestAdapters'}>custom request adapters</Link> for more information on how to utilize
                    the options.
                  </p>
                  <Example>{`
                  await api({name: 'Kevin'}, {id: 'alpha'}, {options: 123})
                  await api({name: 'Kevin', id: 'alpha'}, {options: 123})
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Bypassing papupata',
              anchor: 'bypassing',
              content: (
                <>
                  <p>
                    Sometimes an API can be difficult to call using papupata. A common example would be piping a stream to a request, this
                    is not something papupata can handle at this time. Sometimes you just want to call an API an unconventional fashion,
                    bypassing all of papupata's logic.
                  </p>
                  <p>
                    Even in these case you can still take advantage of the API declarations set up for papupata. You can use the{' '}
                    <FixedFont>getURL</FixedFont> method on an API to get the URL for an API, with its path and possibly query parameters
                    set up.
                  </p>
                  <p>
                    If you want to create an object that matches the declared body, you can get the type of{' '}
                    <FixedFont>RequestBody</FixedFont> for the API, and similarly use <FixedFont>ResponseType</FixedFont> for the response.
                  </p>
                  <Example>{`
                    const body: typeof api.BodyType = { name: 'Kevin' }
                    const url = api.getURL({id: 'alpha'})
                    const response: typeof api.ResponseType = await myInvoke(url, body)
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Conclusion',
              anchor: 'conclusion',
              content: (
                <>
                  <p>
                    Now you know how to call APIs. You might want to know more about how to write tests for client code that utilizes
                    papupata. For that, see <Link to={'/guides/client/testing'}>testing</Link>.
                  </p>
                  <p>
                    If you want to switch to the server side now,
                    <Link to="/guides/server/setup">setting up papupata server</Link> and{' '}
                    <Link to="/guides/server/implementing">implementing APIs</Link> are both fine options.
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
