import React from 'react'
import '../../../prepare'

import {
  Example,
  Examples,
  MethodReturnType,
  Parameter,
  Parameters,
  Purpose,
  Usage,
  AvailableFrom
} from '../../../components/api-components'
import Container from '../../../components/Container'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'
import { ConfigObject } from './configure'

export default function Configure() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
          <h3>method updateConfig</h3>
        </Container>
        <AvailableFrom version="2.0.0" />
        <Purpose>Updates papupata configuration</Purpose>
        <Usage>This method can be used to update parts of the current papupata configuration without affecting the rest.</Usage>
        <Parameters>
          <Parameter name="config" dataType={<a href="#config">Config</a>}>
            Configuration. See below. All fields not given in the object retain their currenct value.
          </Parameter>
        </Parameters>
        <MethodReturnType>Nothing</MethodReturnType>
        <h3 id="config">config object</h3>
        <ConfigObject />
        <Examples>
          <Example label="Amending a configuration with a base URL">
            {`
            import express from 'express'
            import {api} from './api'
            const app = express()
            api.configure({
              application: app
            })

            // Later on
            api.updateConfig({ baseURL: 'http://localhost:3000' })
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
