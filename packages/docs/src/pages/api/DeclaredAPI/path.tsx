import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Examples, Example, Usage } from '../../../components/api-components'

export default function Path() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>property path</h3>
        </Container>
        <Purpose>The path to the API.</Purpose>
        <Usage>
          You can use this property if you want to access the path to the API as provided when declaring the API. Path parameters retain
          their placeholder values.
        </Usage>
        <Examples>
          <Example>
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declareGetAPI('/get-stuff/:id')
              .response<string>()

            // myAPI.path === '/get-stuff/:id'
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
