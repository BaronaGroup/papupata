import { Link } from 'gatsby'
import * as React from 'react'
import { AvailableFrom, Example } from '../../../components/api-components'
import Container from '../../../components/Container'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

const TypeMappingGuide = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: Typed query and path parameters</h1>
        <Overview>
          Query parameters and path parameters are naturally strings. But that doesn't mean that it's all they can be, and the major
          addition to papupata 2.0 is support for types in query and path parameters.
        </Overview>
        <AvailableFrom version={'2.0.0'} />
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
                  <p>For the examples in the guide, the following code is assumed to be present in the scope:</p>
                  <Example>{`
                    import { APIDeclaration } from 'papupata'
                    const API = new APIDeclaration()
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    To begin with, you should know that this guide as well as other documentation for papupata refer to a concept called
                    type mapping. These are javascript objects that are used to map fields to their types. For example
                  </p>
                  <Example>{`
                  const myMapping = {
                    name: String,
                    age: Number
                  }
                `}</Example>
                  <p>is a type mapping that declares name to be a string, and age to be a number.</p>

                  <p>These type mappings are used for setting up the types for query and path parameters, for example</p>
                  <Example>{`
                    const api = API.declareGetAPI('/user/:id')
                      .params({id: Number})
                      .query({token: String})
                      .optionalQuery({includeRelations: Boolean, maxLogEnties: Number})
                      .response<any>()
                  `}</Example>
                  <p>
                    Something that applies to all non-array types is that if a query parameter is specified multiple times, it will be its
                    last instance that is used. This was chosen so that you can override values earlier in the URL just by appending a new
                    value at the end of it.
                  </p>
                </>
              )
            },
            {
              heading: 'Strings',
              anchor: 'string',
              content: (
                <>
                  <p>
                    Strings are just about as simple as it gets. A path or query parameter is a string, and it's passed to the
                    implementation as provided.
                  </p>
                  <Example>{`
                    const api = API.declareGetAPI('/path')
                      .query({param: String})
                      .response<any>()
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Enumerations',
              anchor: 'enum',
              level: 1,
              content: (
                <>
                  <p>
                    Sometimes a string is not just any string. Enumerations are a common thing, and you might want to have your query
                    parameter be one from a specific set of strings. This is something papupata supports, using its StringEnum type.
                  </p>
                  <Example>{`
                    import { StringEnum } from 'papupata/queryTypes'

                    const api = API.declareGetAPI('/path')
                      .query({param: StringEnum(['alpha', 'beta'] as const)})
                      .response<any>()
                  `}</Example>
                  <p>
                    Typescript is fully aware of the enumeration nature of the parameter on both the client and server sides, and the value
                    is validated by papupata before it is passed to the route implementation on the server.
                  </p>
                  <p>
                    Do make sure to include the <FixedFont>as const</FixedFont> after the array declaration; if omitted, the field will be
                    treated by typescript as just a string, so the only benefit you get is the validation done by papupata.
                  </p>
                </>
              )
            },
            {
              heading: 'Regex-constrained',
              anchor: 'regex',
              level: 1,
              content: (
                <>
                  <p>
                    Regular expressions are an effective way to validate strings while providing a reasonable way for clients to figure out
                    if they have something valid or not. Papupata has a support for constraining a string parameter to match a regular
                    expression, though it must be noted that typescript will treat is just as any string, so it is not able to indicate
                    incorrect usage.
                  </p>
                  <Example>{`
              import { StringMatching } from 'papupata/queryTypes'

              const api = API.declareGetAPI('/path')
                .query({param: StringMatching(/^[A-Z]{8}$/)})
                .response<any>()
            `}</Example>
                </>
              )
            },
            {
              heading: 'Numbers',
              anchor: 'numbers',
              content: (
                <>
                  <p>
                    It is very common to include numbers as query parameters, for features such as paging. Numbers are fully supported as
                    query and path parameters in papupata.
                  </p>
                  <Example>{`
                  const api = API.declareGetAPI('/path')
                    .query({param: Number})
                    .response<any>()

                  api({param: 100})

                  api.implement(req => console.log(typeof req.query.param)) // outputs number
                `}</Example>
                  <p>Typescript is also aware of the parameter being a number helping with the correct usage of the API.</p>
                  <p>
                    Do be aware that the two special numbers in javascript, Infinity and NaN are both valid values for a number parameter!
                  </p>
                </>
              )
            },
            {
              heading: 'Integers',
              anchor: 'integers',
              level: 1,
              content: (
                <>
                  <p>
                    Integers as are undoubtedly the most common form of numbers you see in query parameters, so support for them as a
                    special case was added to papupata although typescript will only ever see them as the normal "number" type.
                  </p>
                  <Example>{`
            const api = API.declareGetAPI('/path')
              .query({param: Integer})
              .response<any>()

            api({param: 100})

            api.implement(req => console.log(typeof req.query.param)) // outputs number
          `}</Example>
                  <p>
                    This does mean that the only real effect that something being declared as an integer instead of a number has is papupata
                    validating it differently before passing it to the implementation.
                  </p>
                  <p>Infinity and NaN are not considered to be integers.</p>
                </>
              )
            },
            {
              heading: 'Booleans',
              anchor: 'booleans',
              content: (
                <>
                  <p>
                    Booleans are also fully supported in papupata, and typescript is knows perfectly well when a parameter is meant to be a
                    boolean, too.
                  </p>
                  <Example>{`
            const api = API.declareGetAPI('/path')
              .query({param: Boolean})
              .response<any>()

            api({param: true})

            api.implement(req => console.log(typeof req.query.param)) // outputs boolean
          `}</Example>
                  <p>
                    The server side accepts only the string "true" to indicate the boolean true, whereas false can be indicated both by the
                    string "false" and an empty string. All other values are invalid.
                  </p>
                </>
              )
            },
            {
              heading: 'Dates',
              anchor: 'dates',
              content: (
                <>
                  <p>
                    Dates are not the most common thing you see in query parameters, but they are supported as well. On the client a date
                    must be provided as a Date object, a string will not do. On the server side the input is passed to the date constructor,
                    and if the resulting date is invalid, the parameter is considered to be invalid. For consistent results, ISO 8601 format
                    is recommended.
                  </p>
                  <Example>{`
                    const api = API.declareGetAPI('/path')
                      .query({param: Date})
                      .response<any>()

                    api({param: new Date()})

                    api.implement(req => console.log(req.query.param instanceof Date)) // outputs true
                  `}</Example>
                </>
              )
            },
            {
              heading: 'Arrays',
              anchor: 'arrays',
              content: (
                <>
                  <p>
                    In query parameter context arrays of all of the types above are supported. In the declaration you indicate an array by
                    putting the type inside an array.
                  </p>
                  <Example>{`
                    const api = API.declareGetAPI('/path')
                      .query({param: [Number]})
                      .response<any>()

                    api({param: [1, 2, 3]})

                    api.implement(req => console.log(Array.isArray(req.query.param), req.query.param.length) // outputs true, 3
                  `}</Example>
                  <p>
                    The usage is as one would expect, with arrays being used on the client side and arrays being received at the server
                    side.
                  </p>
                  <p>
                    On HTTP level the arrays are passed as multiple parameters with the same name, and they become array entries in the same
                    order as they are in the URL.
                  </p>
                  <p>
                    One oddity of arrays is that they are always effectively optional as far as the server is concerned, as lack of any
                    values creates an empty array, while the array is required on the browser side. If the array is used in{' '}
                    <FixedFont>optionalQuery</FixedFont>, it is somewhat reversed as there is always an empty array even if the types do not
                    indicate that.
                  </p>
                </>
              )
            },
            {
              heading: 'Validation',
              anchor: 'validation',
              content: (
                <>
                  <p>
                    Query and path parameters are always validated to ensure that they match the expected type and any other constraints
                    there may be. By default validation failure triggers an error, though you can configure papupata or the individual API
                    to do rerouting instead.
                  </p>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'errorhandling',
              level: 1,
              content: (
                <>
                  <p>
                    Upon a validation failure, an error of the type PapupataValidationError (importable from papupata/ValidationError) is
                    thrown. This can be caught and processed in either inherent papupata middleware or in express error handling middleware.
                  </p>
                </>
              )
            },
            {
              heading: 'Routing decisions',
              anchor: 'rerouting',
              level: 1,
              content: (
                <>
                  <p>
                    The other option is to trigger rerouting upon validation failure. This allows you to have multiple APIs that have the
                    same URL, such that routing depends on the values of query and path parameters.
                  </p>
                  <p>
                    What basically happens is that express is told that the route it attempted to use is incorrect and that it should see if
                    there are any other routes that match the request.
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
                    The timing for validating and converting the parameters is very specific: it takes place after inherent middleware and
                    before route-specific middleware.
                  </p>
                  <p>
                    This has been done so that any generic middleware is present even when validation fails, allowing logging, for example
                    to work correctly, but with the assumption that route-specific middleware might expect the types to already have been
                    taken care of (numbers for example being actual numbers and not just strings).
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

export default TypeMappingGuide
