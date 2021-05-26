import '../prepare'

import * as React from 'react'
import { Example, Section, SectionHeading } from '../components/api-components'
import Container from '../components/Container'
import { FixedFont } from '../components/guides'
import Page from '../components/Page'
import IndexLayout from '../layouts'

const Concept: React.FC<{ children: React.ReactNode; label: React.ReactNode }> = ({ children, label }) => {
  return (
    <Section>
      <SectionHeading>{label}</SectionHeading>
      <div>{children}</div>
    </Section>
  )
}

const ConceptsPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Concepts and terms</h1>
        <p>This document covers terminology used throughout the rest of the documentation.</p>
        <Concept label="API">An HTTP endpoint.</Concept>
        <Concept label="API Declaration">
          <p>An API declaration describes an HTTP endpoint, along with its payload and expected response.</p>
          <p>
            The <FixedFont>APIDeclaration</FixedFont> class in papupata allows for declaring APIs on the same host so that they share
            configuration.
          </p>
        </Concept>
        <Concept label="Middleware">
          One or more layers of code between and HTTP server and the business logic. Typically used for things like authentication,
          authorization, logging and error handling.
        </Concept>
        <Concept label="Calling/invoking APIs">The act of making an HTTP request, sending a payload and receiving response.</Concept>
        <Concept label="Implementing APIs">
          The act of providing business logic connected to an HTTP server to process the inputs of an API to produce any necessary side
          effects and a response.
        </Concept>
        <Concept label="Client">
          Any party that uses papupata to make HTTP requests. It is not necessarily a browser -- it is not uncommon for node processes to
          make requests to external systems, in which case they are clients as well.
        </Concept>
        <Concept label="Server">A HTTP (or HTTPs) server that forwards requests for papupata to handle.</Concept>
        <Concept label="Request">A call to an API. Initialized from the client and processed on the server.</Concept>

        <Concept label="Mocking">
          Substituting production code and logic with another, typically simpler one for the purpose of testing.
        </Concept>
        <Concept label="express">
          A node.js library for implementing http server. See <a href="https://expressjs.com/">https://expressjs.com/</a>. At this time
          papupata natively supports only express as the http server for implementing APIs.
        </Concept>
        <Concept label="body, query parameter">
          Parts of an HTTP request. They along with path parameters are the payload for a request.
        </Concept>
        <Concept label="path parameter">
          <p>A parametrized part of the path in URLs. For example, in</p>
          <Example>{`
            API.declareGetAPI('/get/document/:id')/*...*/
          `}</Example>
          <p>
            the <FixedFont>:id</FixedFont> signifies a path parameter, and is replaced with the value for the parameter when invoking the
            API.
          </p>
        </Concept>
      </Container>
    </Page>
  </IndexLayout>
)

export default ConceptsPage
