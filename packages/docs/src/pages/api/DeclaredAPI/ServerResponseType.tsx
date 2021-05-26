import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Examples, Example } from '../../../components/api-components'

export default function ServerResponseType() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>exposed type ServerResponseType</h3>
        </Container>
        <Purpose>Represents the type returned from the API implementation.</Purpose>
        <Usage>
          <p>The exposed types are used with the typeof operator. See the example below for details.</p>
          <p>Although the types are presented as fields on the API, they have no runtime value.</p>
        </Usage>
        <Examples>
          <Example label="Implicit, same type">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .response<string>()

            type ServerResponseType = typeof myAPI['ServerResponseType']
            // ServerResponseType is now string
          `}
          </Example>
          <Example label="Explicit differing type">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .response<string, Date>()

            type ServerResponseType = typeof myAPI['ServerResponseType']
            // ServerResponseType is now Date
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
