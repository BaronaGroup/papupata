import '../../../prepare'
import { Link } from 'gatsby'
import { Purpose } from '../../../components/api-components'
import Container from '../../../components/Container'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

export default function ImplementationMiddleware() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>property implementationMiddleware</h3>
        </Container>
        <Purpose>
          <p>
            Contains the middleware latest implementation for the API. This exists primarily to help with testing the API implementations
            and for internal purposes.
          </p>
          <p>
            The data type matches the first parameter to <Link to="/api/DeclaredAPI/implementWithMiddleware">implementWithMiddleware</Link>
          </p>
        </Purpose>
      </Page>
    </IndexLayout>
  )
}
