import '../../../prepare'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import {
  Purpose,
  Usage,
  Parameter,
  Parameters,
  MethodReturnType,
  Examples,
  Example,
  Caveats,
  AvailableFrom
} from '../../../components/api-components'
import React, { ReactNode } from 'react'
import VersionVariants from '../../../components/VersionVariants'

interface Params {
  fnName: string
  variantPurpose: ReactNode
  middlewareParameter: ReactNode
  examples: ReactNode
  availableFrom?: '1.5.0'
}

export default function ImplementBase({ availableFrom, variantPurpose, middlewareParameter, fnName, examples }: Params) {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>method {fnName}</h3>
        </Container>
        {availableFrom && <AvailableFrom version={availableFrom} />}
        <Purpose>Implements an API using express. {variantPurpose}</Purpose>
        <Usage>
          Instead of calling the methods on an express app or router yourself, you use this function to have papupata do it for you.
        </Usage>
        <Parameters>
          {middlewareParameter}
          <Parameter name="implementation" dataType="Function">
            A function that implements the route. Specified as follows
            <Parameters>
              <Parameter name="req" dataType="Request">
                This is a typed express request -- that is, body, params and query have been replaced with typed versions of themselves.
              </Parameter>
              <Parameter name="res" dataType="Response">
                Express response corresponding to the request.
              </Parameter>
            </Parameters>
            <MethodReturnType>ResponseType, ServerResponseType, or a promise of either</MethodReturnType>
            <ul>
              <li>Do note that the "next" parameter typically used in routes is not present</li>
              <li>Anything thrown (includes returned rejected promises) is given to the usual next function</li>
              <li>
                If undefined is returned, nothing is sent automatically. This could at times explain hanging requests. Of course, unless you
                explicitly declared the API to return undefined, you should see type errors, too.
              </li>
            </ul>
          </Parameter>
        </Parameters>
        <MethodReturnType>Nothing</MethodReturnType>
        <Caveats>
          <ul>
            <li>Either application of router must be configured or the function throws</li>
            <li>You can implement an API multiple times, but it is unlikely to do you any good.</li>
            <li>
              There is at this time no way to cleanly implement an API that does not just return its value, and instead, say, streams it.
            </li>
          </ul>
        </Caveats>
        <Examples>
          <VersionVariants
            isRecommendation
            variants={{
              '1.x': (
                <Example label="Declaration">
                  {`
                    import { APIDeclaration } from 'papupata'
                    const api = new APIDeclaration()
                    const myAPI = api.declarePostAPI('/do-stuff/:param')
                      .params(['param'] as const)
                      .query(['q'] as const)
                      .body<{key: string}>()
                      .response<string>()
                  `}
                </Example>
              ),
              '2.x': (
                <Example label="Declaration">
                  {`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  const myAPI = api.declarePostAPI('/do-stuff/:param')
                    .params({param: String})
                    .query({q: String})
                    .body<{key: string}>()
                    .response<string>()
                `}
                </Example>
              )
            }}
          />

          {examples}
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
