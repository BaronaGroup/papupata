import React from 'react'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { Example, Examples, Purpose } from '../../components/api-components'
import { ToDo } from '../../components/ToDo'

export default function FetchAdapter() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>fetchAdapter</h2>
        </Container>
        <Example>{`import fetchAdapter from 'papupata/dist/main/fetchAdapter'`}</Example>
        <Purpose>An adapter that utilizes fetch to invoke APIs</Purpose>
        <ToDo>
          <p>
            The adapter is not documented, and is not of all that high quality as it is and it makes various non-general assumptions. It
            should serve to give you some ideas on how a proper fetch adapter might be implemented, though.
          </p>
        </ToDo>
        <Examples>
          <Example>{`
          const API = new APIDeclaration()
          API.configure({
            baseURL: '',
            makeRequest: fetchAdapter
          })
        `}</Example>
        </Examples>

      </Page>
    </IndexLayout>
  )
}
