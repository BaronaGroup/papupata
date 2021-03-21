import * as React from 'react'

import Page from '../../../components/Page'
import Container from '../../../components/Container'
import IndexLayout from '../../../layouts'
import { FixedFont, GuideContent, Overview } from '../../../components/guides'
import { AvailableFrom, Example } from '../../../components/api-components'
import styled from 'styled-components'
import { Link } from 'gatsby'

const LineIndent = styled.div`
  border-left: 3px solid #eee;
  padding-left: 30px;
  margin-bottom: 30px;
`

interface GEProps {
  label: string
  variants: string[]
}

const GotchaExample = ({ label, variants }: GEProps) => {
  return (
    <LineIndent>
      <p>{label}</p>
      <Example>{variants.map((routing) => `API.declareGetAPI('/api?${routing}')`).join('\n')}</Example>
    </LineIndent>
  )
}

const QBVPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Guide: Query-based variants</h1>
        <Overview>
          Sometimes you have APIs that only differ from each other based on their query parameters. For example, the response could be of a
          different type based on value of one. Papupata offers a way to deal with this.
        </Overview>
        <AvailableFrom version={'1.8.0'} />
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
              heading: 'The Basics',
              anchor: 'basics',
              content: (
                <>
                  <p>
                    Query parameter based API selection is embedded into the path portion of an API declaration. This is because it, like
                    everything else in the path, affects the routing that connects the request to the correct handler.
                  </p>
                  <p>
                    The query parameter routing information is presented in a fashion not unlike regular query parameters, but there are
                    extensions to the syntax.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant=orange').response<void>()
                    `}
                  </Example>
                  <p>
                    There can be any number of query parameter based constraints on an API, even multiple ones for the same parameter when
                    it makes sense.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant=orange&travel=underwater&liquid=water').response<void>()
                    `}
                  </Example>
                </>
              )
            },
            {
              heading: 'The Specifics',
              anchor: 'specifics',
              content: <></>
            },
            {
              heading: 'Specific (hard-coded) values',
              anchor: 'hardcoded',
              level: 2,
              content: (
                <>
                  <p>Requiring a query parameter to have a specific value is done with the regular query string syntax, such as</p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant=orange').response<void>()
                    `}
                  </Example>
                  <p>
                    requires all invocations of the API to have the query parameter <FixedFont>variant</FixedFont> set to{' '}
                    <FixedFont>orange</FixedFont>. When using papupata to call the API, it automatically sets up the variable, and in fact
                    you generally speaking cannot set it manually. That is, making the call:
                  </p>
                  <Example>
                    {`
                    await api()
                    `}
                  </Example>
                  <p>
                    You are not expected to include <FixedFont>{`{variant: 'orange'}`}</FixedFont> in the call, although it will be included
                    in the actual REST call.
                  </p>
                  <p>
                    On the server, according to type information that parameter is not available, but it is in fact there in case, say, a
                    middleware needs access to it. If you <strong>really</strong> need it in the types, you can add the parameter into the{' '}
                    <FixedFont>optionalQuery</FixedFont> portion of the declaration, even though it is not actually optional. This is done
                    to ensure that the invocation does not require the user to enter it.
                  </p>
                  <p>
                    You can have multiple possible values for the parameter. Of course the parameter cannot be all of them at once (as
                    arrays are not supported), so this just means that any of the values will do. Note that this creates an{' '}
                    <a href="#ambiguous">ambiguous call</a>.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant=orange&variant=red&variant=yellow').response<void>()
                    `}
                  </Example>
                </>
              )
            },
            {
              heading: 'Non-matching value',
              anchor: 'non-matching',
              level: 2,
              content: (
                <>
                  <p>
                    You can have an API that only applies when a parameter has a value that is not one of the ones you've specified. Instead
                    of the usual name=value notation, you instead use value!=value.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant!=orange').query(['variant'] as const).response<void>()
                    `}
                  </Example>
                  <p>
                    requires all invocations of the API to have the query parameter <FixedFont>variant</FixedFont> not to be set to{' '}
                    <FixedFont>orange</FixedFont>
                  </p>
                  <Example>
                    {`
                    await api({variant: 'purple'})
                    `}
                  </Example>
                  <p>
                    If you attempt to supply one of the forbidden values for a client invocation, it will throw an exception. On the server,
                    this is just a regular query parameter.
                  </p>
                  <p>Do note that the lack of a value is considered to pass this check, so the following is fine as well:</p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant!=orange').response<void>()
                    await api()
                    `}
                  </Example>
                  <p>
                    While it is a bit odd, this way the non-matching value is the exact opposite of the specific value routing, covering all
                    cases. If you specifically want there to be a value which is not one of the ones you've provided, you can combine this
                    with "any value" routing rule.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant!=orange&variant')
                      .query(['variant'] as const)
                      .response<void>()
                    `}
                  </Example>
                </>
              )
            },
            {
              heading: 'Lack of query parameter',
              anchor: 'lacking',
              level: 2,
              content: (
                <>
                  <p>
                    You can indicate that the API variant is only to be called when a query parameter is not present by prepending an
                    exclamation mark to the name of the parameter.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?!variant')
                      .response<void>()
                    `}
                  </Example>
                  <p>
                    Do note that an empty value (calling the REST API with something like <FixedFont>/myAPI?variant=</FixedFont> or{' '}
                    <FixedFont>/myAPI?variant</FixedFont>) <strong>is</strong> considered to be a call with the parameter present, and as
                    such will not match the API as declared. You can declare an API that accepts both by combining it with specific value
                    routing.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?!variant&variant=')
                      .response<void>()
                    `}
                  </Example>
                  <p>
                    This creates an <a href="#ambiguous">ambiguous call</a>.
                  </p>
                </>
              )
            },
            {
              heading: 'Presence of query parameter',
              anchor: 'presence',
              level: 2,
              content: (
                <>
                  <p>
                    You can indicate that the API variant is only to be called when a query parameter is present by simply having its name,
                    with no equality or value in the query string part.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant')
                      .query(['variant'] as const)
                      .response<void>()
                    `}
                  </Example>
                  <p>
                    Do note that an empty value (calling the REST API with something like <FixedFont>/myAPI?variant=</FixedFont> or{' '}
                    <FixedFont>/myAPI?variant</FixedFont>) <strong>is</strong> considered to be a call with the parameter present and is
                    match for this rule. You can specifically exclude empty values by using the non-matching value routing as well.
                  </p>
                  <Example>
                    {`
                    const api = API.declareGetAPI('/myAPI?variant&variant!=')
                      .response<void>()
                    `}
                  </Example>
                </>
              )
            },
            {
              heading: 'Ambiguous calls',
              anchor: 'ambiguous',
              content: (
                <>
                  <p>
                    By combining routing rules you can end up in a situation where there are multiple possible values for a query parameter.
                    In these cases, when invoking the API using papupata, the client is guaranteed to choose valid parameters, but it may
                    choose any valid combination in a potentially unpredictable fashion.
                  </p>
                </>
              )
            },

            {
              heading: 'The big gotcha',
              anchor: 'gotcha',
              content: (
                <>
                  <p>
                    Unless you really know what you're doing, having overlapping API declarations is a good way to cause issues for yourself
                    down the line. That is, overlapping in the sense that as far as routing is concerned, multiple APIs could be valid for a
                    single call.
                  </p>
                  <p>
                    To avoid doing this when using query-based API variants, instead of going with a default "anything not handled goes
                    here" route, ensure your APIs use negations of the rules of the other routes to allow non-ambiguous routing.
                  </p>
                  <p>A few examples:</p>
                  <GotchaExample label="Specific value and non-specific value" variants={['variant=alpha', 'variant!=alpha']} />
                  <GotchaExample
                    label="Multiple specific values"
                    variants={['variant=alpha', 'variant=beta', 'variant!=alpha&variant!=beta']}
                  />
                  <GotchaExample label="Presence and non-presence" variants={['variant', '!variant']} />
                  <GotchaExample
                    label="Presence of non-empty and non-present/empty"
                    variants={['variant&variant!=', '!variant&variant=']}
                  />
                  <p>
                    If this seems impractical because of, say, complexity, you can have overlap as long as you consider its implications,
                    specifically how routing considers routes:
                  </p>
                  <ul>
                    <li>
                      if <FixedFont>autoImplementAllAPIs</FixedFont> is set to false (default in papupata 1.x), the variants are checked in
                      their implementation order
                    </li>
                    <li>
                      if <FixedFont>autoImplementAllAPIs</FixedFont> is set to true (default in papupata 2.x), the variants are checked in
                      their declaration order
                    </li>
                    <li>
                      If you encounter misrouting (whether in the route implementation or a middleware leading there), you can import{' '}
                      <FixedFont>skipHandlingRoute</FixedFont>
                      from papupata and return it to resume routing from later variants.
                    </li>
                  </ul>
                </>
              )
            },
            {
              heading: 'Use cases',
              anchor: 'useCases',
              content: (
                <>
                  <p>
                    Probably the most likely use case are APIs that either accept differents sets of parameters based on other parameters,
                    or ones that return different data based on the query parameters.
                  </p>
                  <p>So let's have an example of an API with different sets of inputs:</p>
                  <LineIndent>
                    <Example>
                      {`
                    const simpleSearch = API.declarePostAPI('/search?advanced!=true')
                      .query(['queryString'] as const)
                      .response<any>()

                    const advancedSearch = API.declarePostAPI('/search?advanced=true')
                      .query(['name', 'address', 'phone', 'email'] as const)
                      .response<any>()
                    `}
                    </Example>
                    <p>
                      So basically a single endpoint serves two types of search functionality, but using the query-based API variants we can
                      have both of them work perfectly in a typed fashion.
                    </p>
                  </LineIndent>
                  <p>And for different responses, perhaps something like this:</p>
                  <LineIndent>
                    <Example>
                      {`
                    const myDetailsAPI = API.declarePostAPI('/my-details?includeRelations=false')
                      .response<UserDetails>()
                 
                    const myDetailsWithRelationsAPI = API.declarePostAPI('/my-details?includeRelations=true')
                      .response<UserDetails & RelationInfo>()
                    `}
                    </Example>
                    <p>Again, a single API and two types of output, fully typed.</p>
                  </LineIndent>
                </>
              )
            }
          ]}
        />
      </Container>
    </Page>
  </IndexLayout>
)

export default QBVPage
