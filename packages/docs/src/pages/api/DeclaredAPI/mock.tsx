import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import {
  Purpose,
  Usage,
  Parameter,
  Parameters,
  MethodReturnType,
  Examples,
  Example,
  AvailableFrom
} from '../../../components/api-components'
import { Link } from 'gatsby'
import * as React from 'react'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>method mock</h3>
        </Container>
        <Purpose>Causes API invocations to be omitted, instead returning a mock value</Purpose>
        <AvailableFrom version={'1.1.0'} />
        <Usage>
          <p>
            This function is meant to help with testing components that use papupata. If you only wish to mock a single invocation, you
            might want to use the <Link to="/api/DeclaredAPI/mockOnce">mockOnce</Link> method instead, as it automatically removes the mock
            implementation as soon as the invocation has been completed.
          </p>
          <p>
            If you wish to restore the API to its normal state after mocking it, use the <Link to="/api/DeclaredAPI/unmock">unmock</Link>{' '}
            method, or the <Link to="/api/APIDeclaration/unmockAll">unmockAll</Link> method of the API declaration
          </p>
        </Usage>
        <Parameters>
          <Parameter name="mockValue" dataType="Function or value">
            <p>
              If a function, that function is invoked when the API is invoked and its return value is returned as the mock response from the
              API.
            </p>
            <p>Otherwise the value given as this parameter is returned as the mock response from the API.</p>
          </Parameter>
        </Parameters>
        <MethodReturnType>nothing</MethodReturnType>
        <Examples>
          <Example label="Value">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:param')
              .response<string>()

            myAPI.mock('test')

            const value = await myAPI() // value is now "test"

            myAPI.unmock()
          `}
          </Example>
          <Example label="Function">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:param')
              .response<string>()

            myAPI.mock(() => 'test')

            const value = await myAPI() // value is now "test"

            myAPI.unmock()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
