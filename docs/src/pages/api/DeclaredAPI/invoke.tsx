import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import { Purpose, Usage, Parameter, Parameters, MethodReturnType, Examples, Example, Caveats } from '../../../components/api-components'

export default function Invoke() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>method invoke</h3>
        </Container>
        <Purpose>Calls the declared API</Purpose>
        <Usage>
          All query parameters (including body) are passed as a single object. The invocation mechanisms spreads them out to the declared
          containers automatically.
        </Usage>
        <Parameters>
          <Parameter name="params" dataType="Object">
            All parameters to the API
          </Parameter>
        </Parameters>
        <MethodReturnType>{'Promise<ResponseType>'}</MethodReturnType>
        <Caveats>
          <ul>
            <li>Base URL and makeRequest function must be configured or the function will throw.</li>
            <li>There is no validation for the data returned by the server, it is assumed to be of the correct shape</li>
            <li>Error handling is adapter-dependant.</li>
          </ul>
        </Caveats>
        <Examples>
          <Example label="Declaration">
            {`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:param')
              .params(['param'] as const)
              .query(['q'] as const)
              .body({key: string})
              .response<string>()
          `}
          </Example>
          <Example label="Usage in implementation">
            {`
            await myAPI.implement(req => {
              const {q} = req.query,
                {param} = req.params,
                {key} = req.body
              return [param, q, key].join()
            })            
          `}
          </Example>
          <Example label="Usage in invocation">
            {`
            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})            
            // Response in the example will be abc,def,ghi
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}