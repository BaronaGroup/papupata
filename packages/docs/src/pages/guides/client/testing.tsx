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
        <h1>Guide: testing APIs</h1>
        <Overview>Testing and mocking are often tricky things. Papupata offers its own mocking functionality to make it easier.</Overview>
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
              heading: 'Foreword',
              anchor: 'foreword',
              content: (
                <>
                  <p>
                    To begin with, you absolutely can the functionality provided by various testing libraries with papupata. You can just
                    jest mocks to mock the calls to APIs, you can do the same with sinon. Or you can nock to intercept the requests that
                    papupata makes.
                  </p>
                  <p>
                    These are all fine options, and if you are comfortable using them, by all means do. Just be aware that this guide mostly
                    just covers the built-in mocking functionality of papupata.
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
                    All APIs declared with papupata expose three methods to help with testing: <FixedFont>mock</FixedFont>,{' '}
                    <FixedFont>mockOnce</FixedFont> and <FixedFont>unmock</FixedFont>. Their purpose is simple: to help you temporarily have
                    the API call do something other than an actual API call.
                  </p>
                  <p>
                    The <FixedFont>mock</FixedFont> and <FixedFont>mockOnce</FixedFont> functions do exactly that.{' '}
                    <FixedFont>mock</FixedFont> changes the behavior until it is undone, whereas <FixedFont>mockOnce</FixedFont>{' '}
                    automatically undoes itself after the first call. Everything from now on applies to both of the functions.
                  </p>
                  <p>The simplest mock is one that returns a fixed value. Making that happen is simple, too:</p>
                  <Example>{`
                    api.mock('mockValue')
                    const value = await api({id: '1', name: 'Maija'})
                    // value === mockValue
                  `}</Example>
                  <p>
                    Sometimes you might need more control, and for that purpose the mock functions also accept functions as their
                    parameters. The function should return a value that is either of the type returned by the API, or a promise of one, or
                    they should throw. The function is given the arguments to the API call as the sole parameter.
                  </p>
                  <Example>{`
                    api.mock(args => args.name + args.id)
                    const value = await api({id: '1', name: 'Maija'})
                    // value === 'Maija1'
                  `}</Example>
                  <Example>{`
                    api.mock(() => {throw new Error()})
                    await api({id: '1', name: 'Maija'})
                    // simulating failure
                  `}</Example>
                  <p>
                    It is generally recommended to have an <FixedFont>afterEach</FixedFont> to undo all the mocks for any tests that utilize
                    papupata mocking. Even though you can use <FixedFont>mockOnce</FixedFont> to only mock an API for a single invocation,
                    if a test fail in such a way that the invocation never happens you might have a hard-to-track bug in your hands.
                  </p>
                  <Example>{`
                    afterEach(() => API.unmockAll())
                  `}</Example>
                  <p>You can also unmock individual APIs, though that tends to be less useful in practice.</p>
                  <Example>{`
                    api.unmock()
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Using sinon or jest mocks',
              anchor: 'sinonjest',
              content: (
                <>
                  <p>
                    If you are familiar with sinon stubs and jest.fn, you might already have started considering the potential given by
                    passing in any function as a mock. You absolutely can and should pass functions from these libraries as the mocks
                    whenever it suits your needs, for example to verify that the mock was called with the arguments that you expected.
                  </p>
                  <Example>{`
                    const stub = sinon.stub().resolves('test')
                    api.mock(stub)
                    await api({id: '1', name: 'Maija'})
                    sinon.assert.calledWithExactly(stub, {id: '1', name: 'Maija'})
                  `}</Example>
                  <Example>{`
                    const mock = jest.fn().mockResolvedValue('test')
                    api.mock(mock)
                    await api({id: '1', name: 'Maija'})
                    expect(mock).toHaveBeenCalledWith({id: '1', name: 'Maija'})
                  `}</Example>
                  <p>Sinon in particular can be handy if you need to mock multiple invocations to the API, with different responses.</p>
                </>
              )
            },
            {
              heading: 'Dealing with separate bodies',
              anchor: 'separateBodies',
              content: (
                <>
                  <p>
                    As you might recall, it is possible to pass the body as a separate parameter to the API invocation. And in many cases it
                    is impossible to combine it with the other parameters, for example if the body is a string. This does have an effect on
                    the mocks as well.
                  </p>
                  <p>
                    If you want to mock a call like this in such a way that you gain access to the body, you have to pass options to the{' '}
                    <FixedFont>mock</FixedFont> or <FixedFont>mockOnce</FixedFont> functions. If you pass{' '}
                    <FixedFont>{`{includeBodySeparately: true}`}</FixedFont> as a second parameter to the mock function, the mock function
                    passed to be the mock is always given a second parameter, which is the body. If the body is an object, its fields are
                    incorporated into the first parameter as well.
                  </p>
                  <Example>{`
                    const mock = jest.fn().mockResolvedValue('test')
                    api.mock(mock, {includeBodySeparately: true})
                    await api({id: '1', name: 'Maija'})
                    expect(mock).toHaveBeenCalledWith({id: '1', name: 'Maija'}, {name: 'Maija'})
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
                    Now you know how to test API calls made using papupata and should by now have pretty much mastered how to use papupata
                    as a client.
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
