import '../../prepare'
import React from 'react'
import { Example, Examples, Purpose, AvailableFrom, Usage } from '../../components/api-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import IndexLayout from '../../layouts'

export default function HandleUndefinedResponsesMiddleware() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>handleUndefinedResponsesMiddleware</h2>
        </Container>
        <Example>{`import {handleUndefinedResponsesMiddleware} from 'papupata'`}</Example>
        <AvailableFrom version="1.5.0" />
        <Purpose>
          Middleware that changes how papupata deals with undefined responses, automatically setting up response code 204 (if not otherwise
          specified) and sending a response.
        </Purpose>
        <Usage>
          <p>
            By default papupata assumes that if your route implementation returns undefined, it takes the responsibilities for sending the
            response.
          </p>
          <p>
            This if often not the case, though. You might have APIs that do things but do not return anything, in which case it makes sense
            for the response to be undefined or void. But what it means by default is that you have either do something like
            <Example>{`res.status(204); res.end()`}</Example>
            or return an empty string.
          </p>
          <p>
            This middleware changes things in two ways; one: if headers have not been sent by the time the route implementation returns
            undefined, an empty response is automatically sent. Also, in that case, if the response status code has not been explicitly set,
            it becomes 204 (no content).
          </p>
          <p>The behaviour of this middleware might become the default mode of operation for papupata 2.0.</p>
        </Usage>
        <Examples>
          <Example label="Enabling middleware for all roues">{`
                const API = new APIDeclaration()
                API.configure({
                  // other options
                  inherentMiddleware: [handleUndefinedResponsesMiddleware]
                })
            `}</Example>
          <Example label="Enabling the middleware for a single route">{`
                const api = API.declareGetAPI('/test').response<string>()
                api.implementWithPapupataMiddleware([handleUndefinedResponsesMiddleware], () => skipHandlingRoute)
            `}</Example>
          <Example label="Expected effect: simple case">{`
            api.implement(async () => {
              await doStuff()
            })
            // Without middleware there is never a response; with the middleware the response is a 204
          `}</Example>
          <Example label="Expected effect: explicit status">{`
            api.implement(async (_req, res) => {
              res.status(500)
              await doStuff()
            })
            // Without middleware there is never a response; with the middleware the response is a 500
          `}</Example>
          <Example label="Expected effect: redirect">{`
            api.implement(async (_req, res) => {
              res.redirect('/')
            })
            // Works with and without middleware
          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
