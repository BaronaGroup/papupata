import '../../prepare'
import { Link } from 'gatsby'
import * as React from 'react'
import { Example } from '../../components/api-components'
import Container from '../../components/Container'
import { FixedFont, GuideContent, Overview } from '../../components/guides'
import Page from '../../components/Page'
import TypeMappingLink from '../../components/TypeMappingLink'
import VersionVariants from '../../components/VersionVariants'
import IndexLayout from '../../layouts'

export default function MigrationToV2() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>Guide: Migrating to papupata 2.x</h1>
          <Overview>
            There are no major incompatibilities from 1.x to 2.x, but there may well be a few things you'll have to change as you upgrade.
            This guide covers those, as well as giving a brief overview of the new additions.
          </Overview>
          <GuideContent
            content={[
              {
                heading: 'Breaking changes',
                anchor: 'breaking',
                content: <p>As this is a major version upgrade, there are some breaking changes.</p>
              },
              {
                heading: 'autoImplementAllAPIs default to true',
                anchor: 'autoImplementAllAPIs',
                level: 1,
                content: (
                  <>
                    <p>
                      The default value for the configuration option <FixedFont>autoImplementAllAPIs</FixedFont> is now true. This change
                      will affect you if you have not used the setting, use papupata on the server and have routes declared with papupata
                      but not implemented with it.
                    </p>
                    <p>
                      The result is that such APIs will start returning 501, unless express (or something else) handles them before papupata
                      gets to.
                    </p>
                    <p>For a workaround, the easiest solution is to explcitly set the setting to false.</p>
                    <Example>{`
                      API.configure({
                        ...otherOptions,
                        autoImplementAllAPIs: false,
                      })
                      `}</Example>
                    <p>
                      You could also update your APIs to either work with this setting, or set the{' '}
                      <FixedFont>disableAutoImplement</FixedFont> option to true on the affected routes.
                    </p>
                  </>
                )
              },
              {
                heading: 'Imports from withing papupata package have been restructured',
                anchor: 'deepImports',
                level: 1,
                content: (
                  <>
                    <p>
                      In papupata 1.x there were files that were imported from <FixedFont>papupata/dist</FixedFont>; that is no longer
                      supported and such imports must be updated according as follows.
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Old import</th>
                          <th>New import</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>papupata/dist/main/fetchAdapter</td>
                          <td>papupata/adapters/fetch</td>
                        </tr>
                        <tr>
                          <td>papupata/dist/main/invokeImplementationAdapter</td>
                          <td>papupata/adapters/invokeImplementation</td>
                        </tr>
                        <tr>
                          <td>papupata/dist/main/request-promise-adapter</td>
                          <td>papupata/adapters/requestPromise</td>
                        </tr>
                        <tr>
                          <td>papupata/dist/main/supertestAdapter</td>
                          <td>papupata/adapters/supertest</td>
                        </tr>
                        <tr>
                          <td>papupata/dist/main/supertestInvoker</td>
                          <td>papupata/invokers/supertest</td>
                        </tr>
                        <tr>
                          <td>papupata/dist/main/testInvoker</td>
                          <td>papupata/invokers/test</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )
              },
              {
                heading: 'ES6 support is now required',
                anchor: 'es6',
                level: 1,
                content: (
                  <>
                    <p>
                      Typescript is now configured to use ES6 as its compilation target, as that is required for Error to be subclassed
                      properly with ES classes.
                    </p>
                    <p>
                      If this turns out to be a problem for you, please submit an issue and we can look in to creating a browser build that
                      still compiles to ES5.
                    </p>
                  </>
                )
              },
              {
                heading: 'apiUrlParameters on a declared API has had its type changed',
                anchor: 'apiUrlParameters',
                level: 1,
                content: (
                  <>
                    <p>
                      The <Link to="/api/DeclaredAPI/apiUrlParameters">apiUrlParameters property</Link> has had its type changed. It used to
                      contain arrays of strings, but now it contains <TypeMappingLink /> objects instead. It is not very likely that you've
                      used this field, and if you have it's most likely in middleware.
                    </p>
                    <p>For existing APIs you can get the old format with:</p>
                    <Example>{`
                      const oldStyleParameters = {
                        params: Object.keys(api.apiUrlParameters.params),
                        query: Object.keys(api.apiUrlParameters.query),
                        optionalQuery: Object.keys(api.apiUrlParameters.optionalQuery),
                        boolQuery: Object.keys(api.apiUrlParameters.boolQuery),
                      }
                    `}</Example>
                    <p>
                      Do note that for APIs that use the new style typed query parameters there will be nothing in boolQuery even if there
                      are boolean parameters.
                    </p>
                  </>
                )
              },
              {
                heading: 'Presence of required query parameters is verified',
                anchor: 'requiredQueryParams',
                level: 1,
                content: (
                  <>
                    <p>
                      Papupata 1.x allowed you to declare required query parameters, and while the types indicated they were required, no
                      effort was made to ensure they were actually present. This is no longer the case, and missing required query
                      parameters are considered a validation error.
                    </p>
                    <p>
                      By default this means that papupata will throw a PapupataValidationError, which can be handle by express middleware,
                      but there is no way get to the actual route implementation or any middleware with missing query parameters.
                    </p>
                    <p>
                      The only fix is to move all of the optional query parameters from <FixedFont>query</FixedFont> to{' '}
                      <FixedFont>optionalQuery</FixedFont>, where they should've been all along.
                    </p>
                  </>
                )
              },
              {
                heading: 'Features supported by qs but not by papupata',
                anchor: 'qsFeatures',
                level: 1,
                content: (
                  <>
                    <p>
                      Requests typically have their query parameters parsed by qs, and papupata has just taken whatever values qs has
                      produced and assumed it's all good. This is no longer the case, and papupata ensures that everything in the request
                      query conforms to what has been declared in the API declaration (albeit additional fields can still exist).
                    </p>
                    <p>
                      For the most part this should not be a problem, but if you have done some interesting things like passing arrays with
                      "as any" you'll probably have to make some changes.
                    </p>
                  </>
                )
              },
              {
                heading: 'Request adapters can receive undefined as the body',
                anchor: 'requestAdapterUndefinedBody',
                level: 1,
                content: (
                  <>
                    <p>
                      In papupata 1.x request adapters always got a body, which normally was an object. The only situation where it might
                      not be an object was if you specifically invoked an API that had a non-object body that was passed to papupata.
                    </p>
                    <p>
                      Now, if the body would be an empty object, undefined is passed to request adapters instead. This makes it easier not
                      to accidentally send empty bodies with GET requests, for example, while still allowing them to be present for DELETE
                      requests, if required. (while DELETE is not meant to have a body, it is not entirely unknown for it to be used with
                      one)
                    </p>
                    <p>
                      You might have to update your custom request adapters to deal with the undefined body, with something along the lines
                      of
                    </p>
                    <Example>{`const actualBody = body ?? {}`}</Example>
                  </>
                )
              },
              {
                heading: 'Middleware is applied to automatically implemented routes',
                anchor: '501middleware',
                level: 1,
                content: (
                  <>
                    <p>
                      Routes that are are automatically implemented (to return a 501) thanks to <FixedFont>autoImplementAllAPIs</FixedFont>{' '}
                      being set to true (which is now the default) are subject to any middeware set up on the papupata API declaration
                      itself.
                    </p>
                    <p>
                      This allows logging middleware etc. to work properly even when the APIs are not implemented, but it does mean that the
                      middleware is called in situations where it was not before.
                    </p>
                  </>
                )
              },
              {
                heading: 'Deprecated functionality',
                anchor: 'deprecations',
                content: <p>Some old features are still supported, but considered deprecated and should be avoided.</p>
              },
              {
                heading: 'Arrays for declaring query and path parameters',
                anchor: 'arrays',
                level: 1,
                content: (
                  <>
                    <p>
                      In papupata 1.x all path and query parameters were declared as const arrays. In 2.x it is now possible, and
                      recommended that you instead use <TypeMappingLink /> objects to declare the parameters. The main advantages are never
                      again forgetting the <FixedFont>as const</FixedFont> and being able to use a variety of types for the parameters
                      instead of just strings.
                    </p>
                    <VersionVariants
                      variants={{
                        '1.x': (
                          <Example>
                            {`
                            const api = API.declareGetAPI('/path/:id')
                              .params(['id'] as const)
                              .query(['query'] as const)
                              .optionalQuery(['limit', 'startFrom'] as const)
                              .response<any>()
                           `}
                          </Example>
                        ),
                        '2.x': (
                          <Example>
                            {`
                            const api = API.declareGetAPI('/path/:id')
                              .params({ id: Number })
                              .query({ query: String })
                              .optionalQuery({ limit: Number, startFrom: Date}})
                              .response<any>()
                          `}
                          </Example>
                        )
                      }}
                    />
                  </>
                )
              },
              {
                heading: 'queryBool',
                anchor: 'queryBool',
                level: 1,
                content: (
                  <>
                    <p>
                      Declaring boolean query parameters with queryBool is no longer recommended, instead they should be declared as normal
                      or optional query parameters with boolean type.
                    </p>
                    <VersionVariants
                      variants={{
                        '1.x': (
                          <Example>
                            {`
                          const api = API.declareGetAPI('/path')
                            .queryBool(['myParam'] as const)
                            .response<any>()
                           `}
                          </Example>
                        ),
                        '2.x': (
                          <Example>
                            {`
                              const api = API.declareGetAPI('/path')
                                .query({ myParam: Boolean }})
                                .response<any>()
                          `}
                          </Example>
                        )
                      }}
                    />
                    <p>
                      Do however not that this it not a perfect match for the old behavior; in 1.x any values other than the string "true"
                      were treated as false, whereas in 2.x the only permitted values are the string "true", "false" and an empty string
                      (which also stands for false). If the parameters is optional, undefined is also valid value but remains undefined
                      instead of becoming false.
                    </p>
                  </>
                )
              },
              {
                heading: 'Configuration option makeRequest is now requestAdapter',
                anchor: 'requestAdapter',
                level: 1,
                content: (
                  <p>
                    In order to be more consistent with the documentation, the configuration option <FixedFont>makeRequest</FixedFont> is
                    now instead <FixedFont>requestAdapter</FixedFont>. The old name can still be used, however.
                  </p>
                )
              }
            ]}
          />
        </Container>
      </Page>
    </IndexLayout>
  )
}
