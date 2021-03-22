import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example, Caveats } from '../../../components/api-components'
import { DeclaredAPILink } from '../../../components/links'

export default function Response() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method response</h3>
        </Container>
        <Purpose>Declares the response type or types for an API and concludes the declaration.</Purpose>
        <Usage>
          <p>The response type is declared as a type parameter.</p>
          <p>
            In some cases you might be in a situation where the types returned from the implementation don't quite match what clients
            receive. An example of this would be with dates -- you could have a Date object on the server, but when it gets to the browser
            it's just a string. To deal with this another type parameter exists, allowing you to specify another type to be returned from
            the implementation.
          </p>
        </Usage>
        <Parameters>
          <Parameter name="<ResponseType>" dataType="Interface">
            The response type as seen on the client side.
          </Parameter>
          <Parameter name="<ServerResponseType>" dataType="Interface">
            The response type as seen on the server side. Default to the value of ResponseType.
          </Parameter>
        </Parameters>
        <MethodReturnType>
          <DeclaredAPILink />
        </MethodReturnType>
        <Caveats>
          <ul>
            <li>There is no client side validation for the data types. Only typescript itself validates the response on server side</li>
            <li>It's up to the developer to ensure that the ResponseType is really resulting from returning a ServerResponseType.</li>
          </ul>
        </Caveats>
        <Examples>
          <Example label="Example 1 Declaration">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .response<string>()
          `}
          </Example>
          <Example label="Example 1 Usage in implementation">
            {`
            myAPI.implement(req => {
              return "Hello"
            })
          `}
          </Example>
          <Example label="Example 1 Usage in invocation">
            {`
            await myAPI({}) // Returns a promise that resolves to "Hello"
          `}
          </Example>

          <Example label="Example 2, differing types; Declaration">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .response<{date: string}, {date: Date}}>()
          `}
          </Example>
          <Example label="Example 2 Usage in implementation">
            {`
            myAPI.implement(req => {
              return { date: new Date('2019-01-01T12:12:12.000Z') }
            })
          `}
          </Example>
          <Example label="Example 2 Usage in invocation">
            {`
            await myAPI({}) // Returns a promise that resolves to '2019-01-01T12:12:12.000Z'
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
