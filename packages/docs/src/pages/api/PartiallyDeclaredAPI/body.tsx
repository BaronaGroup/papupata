import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example, Caveats } from '../../../components/api-components'
import { IncompleteApiDeclarationLink } from '../../../components/links'

export default function Body() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method body</h3>
        </Container>
        <Purpose>Declares body type for an API.</Purpose>
        <Usage>
          <p>Path params and query parameters must be defined before query.</p>
        </Usage>
        <Parameters>
          <Parameter name="<BodyType>" dataType="Type">
            The body type is declared as a type parameter.
          </Parameter>
          <Parameter name="<BodyInputType>" dataType="Type">
            <p>The type of the body as seen when making a request. Defaults to BodyType.</p>
            <p>
              This allows for setting up things like dates to be provided as date objects when there is an implicit conversion to strings
              when sending them as json. Using this parameter makes sense when there is a built-in conversion like with json, or if the
              function for making requests is meant to do other kind of transformation as well.
            </p>
          </Parameter>
        </Parameters>
        <MethodReturnType>
          <IncompleteApiDeclarationLink />
        </MethodReturnType>
        <Caveats>
          <ul>
            <li>There is no validation for the shape of the body on the server</li>
            <li>This option is presented for methods without body, even if it is does nothing useful in those cases.</li>
          </ul>
        </Caveats>
        <Examples>
          <Example label="Declaration">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .body<{value: number}>()
              .response<string>()
          `}
          </Example>
          <Example label="Usage in invocation">
            {`
            await myAPI({value: 123})
          `}
          </Example>
          <Example label="Usage in implementation">
            {`
            myAPI.implement(req => {
              const {value} = req.body
              return value.toString() // 123 in the example
            })
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
