import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameters, MethodReturnType, Examples, Example, AvailableFrom } from '../../../components/api-components'
import { Link } from 'gatsby'
import * as React from 'react'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>method unmock</h3>
        </Container>
        <Purpose>Undoes API mocking</Purpose>
        <AvailableFrom version={'1.1.0'} />
        <Usage>
          <p>
            This function undoes the mocking done by the <Link to="/api/DeclaredAPI/mock">mock</Link> and{' '}
            <Link to="/api/DeclaredAPI/mockOnce">mockOnce</Link> methods. The latter calls unmock automatically upon the first invocation,
            but if it did not happen then you might want to call it yourself to do cleanup. might want to use the method instead, as it
            automatically removes the mock implementation as soon as the invocation has been completed.
          </p>
          <p>
            You can alternatively call the <Link to="/api/APIDeclaration/unmockAll">unmockAll</Link> method of the API declaration to undo
            all mocks on that declaration.
          </p>
        </Usage>
        <Parameters />
        <MethodReturnType>nothing</MethodReturnType>
        <Examples>
          <Example>
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:param')
              .response<string>()

            myAPI.mock('test')

            myAPI.unmock()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
