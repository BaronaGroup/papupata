import '../../prepare'
import * as React from 'react'
import { AvailableFrom, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../components/api-components'
import Container from '../../components/Container'
import Page from '../../components/Page'
import IndexLayout from '../../layouts'

export default function Mock() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>function convertExpressMiddleware</h2>
        </Container>
        <Purpose>
          This function converts express middleware to papupata middleware. While papupata can use express middleware directly on individual
          APIs, the support is somewhat limited as express middleware is always called before any papupata middleware. By converting the
          middleware you have more control over the invocation order, and it also allows the use of express middleware as inherent
          middleware.
        </Purpose>
        <AvailableFrom version={'1.5.0'} />
        <Usage>
          <p>
            Simply call the function and pass express middleware as a parameter to create a papupata middleware out of it. Error handling
            express middleware is not supported at this time.
          </p>
        </Usage>
        <Parameters>
          <Parameter name="expressMiddleware" dataType="Express middleware">
            An express middleware function.
          </Parameter>
        </Parameters>
        <MethodReturnType>PapupataMiddleware</MethodReturnType>
        <Examples>
          <Example>{`
            import bodyParser from 'body-parser'
            import { APIDeclaration, convertExpressMiddleware } from 'papupata'
            const ppBodyParser = convertExpressMiddleware(bodyParser)

            const API = new APIDeclaration()
            API.configure({inherentMiddleware: [ppBodyParser]})

          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
