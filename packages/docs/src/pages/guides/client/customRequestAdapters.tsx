import * as React from 'react'
import { Example } from '../../../components/api-components'
import Container from '../../../components/Container'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: custom request adapters</h1>
        <Overview>
          Making API calls with papupata happens using request adapters. The built-in ones are naive and limited, so you probably want to
          create one that fits whatever requirements you have.
        </Overview>
        <GuideContent
          content={[
            {
              heading: 'The basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    A request adapter is a function, which receives a bunch of parameters and is expected to return a promise that resolves
                    with the value returned by the API. Now, let's start with the type declaration.
                  </p>
                  <Example>{`
                    export type MakeRequestAdapter<RequestOptions = void> = (
                      method: string,
                      url: string,
                      query: any,
                      body: any,
                      params: any,
                      api: any,
                      requestOptions?: RequestOptions
                    ) => Promise<any>                    
                    `}</Example>
                  <p>
                    In the table below you'll find listed typical uses for each of the parameters, from the point of view of making typical
                    HTTP requests.
                  </p>
                  <table>
                    <thead>
                      <th>Name</th>
                      <th>Typical uses</th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>method</td>
                        <td>
                          This is the HTTP method the request is meant to be made with, in lowercase letters. You'll want to supply it to
                          the library you use for actually making the requests. It can also be useful for determining if you should include
                          the body or not.
                        </td>
                      </tr>
                      <tr>
                        <td>url</td>
                        <td>
                          <p>
                            This is the URL to the API, with path parameters already baked in, but without query parameters. Depending on
                            your library you might want to add the query parameters to it before passing it along to your request library,
                            or perhaps you can use the URL as is.
                          </p>
                          <p>
                            If you do want to add the parameters, the <FixedFont>qs</FixedFont> library is a useful library for getting that
                            done.
                          </p>
                          <Example>{`
                            import qs from 'qs'

                            const finalURL = url + '?' + qs.stringify(query)
                          `}</Example>
                        </td>
                      </tr>
                      <tr>
                        <td>query</td>
                        <td>
                          This is a javascript object that has keys for query parameter names and values are the query parameter values.
                          You'll want to pass this data along with the request, either baking it into the URL or passing the data to your
                          library in some other way, such as the <FixedFont>qs</FixedFont> option of <FixedFont>request</FixedFont>.
                        </td>
                      </tr>
                      <tr>
                        <td>body</td>
                        <td>
                          This is the body that is to be sent with the request. No serialization or other manipulation has been done before
                          it arrives to this function, so if your library requires, say, you to do <FixedFont>JSON.stringify</FixedFont> on
                          objects then you'll want to do that before passing it along. Typically this will be an object, or undefined if
                          there is no data for the body, though as papupata supports other types of bodies as well it can end up being
                          pretty much any type.
                        </td>
                      </tr>
                      <tr>
                        <td>params</td>
                        <td>
                          Typically you won't need to use this parameter, as all of the path parameters have already been baked in to URL.
                          On rare occasions you might want to make some decisions based on the path parameter values, so it is provided for
                          completeness. The format is a javascript object that has keys for path parameter names and values their values.
                        </td>
                      </tr>
                      <tr>
                        <td>api</td>
                        <td>
                          This is the API being invoked. This is especially useful if you have route options and wish to access them for
                          making the request, for, say, determining if authentication needs to be performed.
                        </td>
                      </tr>
                      <tr>
                        <td>requestOptions</td>
                        <td>If you have specified options to be passed for making requests, this is where you'll find them.</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )
            },
            {
              heading: 'Error handling',
              anchor: 'errors',
              content: (
                <>
                  <p>
                    At this time papupata does no take error handling into account. Any exceptions thrown in the adapter will be catchable
                    wherever the call to the API was made.
                  </p>
                </>
              )
            },
            {
              heading: 'Examples',
              anchor: 'examples',
              content: (
                <>
                  <p>WIP</p>
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
