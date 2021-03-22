import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Examples, Example } from '../../../components/api-components'

export default function Method() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>property method</h3>
        </Container>
        <Purpose>The HTTP method of the API.</Purpose>
        <Examples>
          <Example>
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declareGetAPI('/get-stuff')
              .response<string>()

            // myAPI.method === 'get'

          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
