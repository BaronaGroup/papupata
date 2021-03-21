import { Caveats, Example, Examples, MethodReturnType, Parameter, Parameters, Purpose, Usage } from '../../../components/api-components'
import Container from '../../../components/Container'
import { FixedFont } from '../../../components/guides'
import { IncompleteApiDeclarationLink } from '../../../components/links'
import Page from '../../../components/Page'
import IndexLayout from '../../../layouts'

export default function QueryBool() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class IncompleteAPIDeclaration</h2>
          <h3>method queryBool</h3>
        </Container>

        <h5>Deprecated</h5>
        <p>
          This method has been deprecated as of 2.0.0. The suggested alternative is to just use <FixedFont>query</FixedFont> and declare the
          type of a parameter to be a boolean.
        </p>
        <Purpose>Declares boolean query parameters for an API</Purpose>
        <Usage>
          <p>Path params and other query parameters may be defined before query.</p>
        </Usage>
        <Parameters>
          <Parameter name="booleanQueryParams" dataType="Const string array">
            <p>Names of the query parameters. See the example below for the recommended way to set up the const string array.</p>
            <p>
              At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct.
              Unfortunately we have not come up with a way to prevent this kind of usage.
            </p>
          </Parameter>
        </Parameters>
        <MethodReturnType>
          <IncompleteApiDeclarationLink />
        </MethodReturnType>
        <Caveats>
          This feature is intented mainly to be used for papupata-to-papupata communications. The string "true" stands for true values on
          the server, all other values stand for false.
        </Caveats>
        <Examples>
          <Example label="Declaration">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff')
              .queryBool(['query1', 'query2'] as const)
              .response<string>()
          `}
          </Example>
          <Example label="Usage in invocation">
            {`
            await myAPI({query1: true, query2: false})
            // Invokes URL /do-stuff?query1=true&query2=false
          `}
          </Example>
          <Example label="Usage in implementation">
            {`
            myAPI.implement(req => {
              const {query1, query2} = req.query
              return query1 + query2 // would return truefalse in the example. They come in as booleans, not strings.
            })            
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
