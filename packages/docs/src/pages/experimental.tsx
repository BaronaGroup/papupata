import '../prepare'
import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Link } from 'gatsby'

const ExperimentalPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Experimental functionality</h1>
        <h3>{<Link to={'/experimental/papupata-from-openapi'}>Conversion from OpenAPI</Link>}</h3>
        <p>An experimental tool exists for generating papupata API declarations from an OpenAPI document.</p>
      </Container>
    </Page>
  </IndexLayout>
)

export default ExperimentalPage
