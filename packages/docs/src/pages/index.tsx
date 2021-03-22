import '../prepare'
import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hello!</h1>
        <p>This is the documentation for the papupata typescript library.</p>
        <p>Pick a place to go to from the menu on the left.</p>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
