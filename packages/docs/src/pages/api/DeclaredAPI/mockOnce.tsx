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
          <h3>method mockOnce</h3>
        </Container>
        <Purpose>Causes an API invocation to be omitted, instead returning a mock value</Purpose>
        <AvailableFrom version={'1.1.0'} />
        <Usage>
          <p>
            This function is meant to help with testing components that use papupata. When using this function instead of{' '}
            <Link to="/api/DeclaredAPI/mock">mock</Link> you do not need to call <Link to="/api/DeclaredAPI/unmock">unmock</Link>{' '}
            afterwards, assuming the API was invoked, as it is automatically called upon the invocation.
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

            myAPI.mockOnce('test')

            const value1 = await myAPI() // value1 is now "test"
            const value2 = await myAPI() // value is now obtained by invoking the actual API

          `}
          </Example>
          <Example label="Function">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:param')
              .response<string>()

            myAPI.mock(() => 'test')

            const value1 = await myAPI() // value1 is now "test"
            const value2 = await myAPI() // value is now obtained by invoking the actual API

            myAPI.unmock()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
