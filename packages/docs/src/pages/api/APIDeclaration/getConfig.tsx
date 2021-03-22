import '../../../prepare'
import { Link } from 'gatsby'
import React from 'react'
import { MethodReturnType, Purpose, Usage } from '../../../components/api-components'
import Container from '../../../components/Container'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

export default function Configure() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
          <h3>method getConfig</h3>
        </Container>
        <Purpose>Retrieves current papupata configuration</Purpose>
        <Usage>
          This method can be used to figure out what the current configuration is, typically so that is can be restored after modifying it
          for tests.
        </Usage>
        <MethodReturnType>
          Configuration as set in the <Link to="/api/APIDeclaration/configure">configure</Link> and{' '}
          <Link to="/api/APIDeclaration/updateConfig">updateConfig</Link> methods of the API configuration.
        </MethodReturnType>
      </Page>
    </IndexLayout>
  )
}
