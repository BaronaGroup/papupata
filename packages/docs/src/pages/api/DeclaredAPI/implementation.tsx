import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Examples, Example } from '../../../components/api-components'

export default function Implementation() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>property implementation</h3>
        </Container>
        <Purpose>
          Contains the latest implementation for the API. This exists primarily to help with testing the API implementations by providing
          direct access to them.
        </Purpose>
        <Examples>
          <Example>
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declareGetAPI('/get-stuff')
              .response<string>()

            const implFn = () => Promise.resolve('test')
            myAPI.implement(implFn)

            // myAPI.implementation === implFn

          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
