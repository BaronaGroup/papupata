import '../../prepare'
import React from 'react'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { Purpose, Usage, Examples, Example } from '../../components/api-components'
import { MethodMember, Members, ExposedTypeMember, PropertyMember } from '../../components/members-table'

export default function DeclaredAPI() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>interface DeclaredAPI</h2>
        </Container>
        <Purpose>Represents a declared API and allow interacting with it.</Purpose>
        <Usage>
          <p>
            Technically there is nothing called "DeclaredAPI" in the code base. This is simply a representation of what is returned when an
            API has been declared.
          </p>
          <p>
            Some of the types used for the API are exposed in an unusual fashion. In the future we might look into adding some wrapper types
            that allow for more conventional means for accessing them.
          </p>
        </Usage>
        <Members context="DeclaredAPI">
          <MethodMember name="invoke" displayName="()" dataType={'Promise<ResponseType>'}>
            DeclaredAPI itself is a function, which can be called to call the API itself. The response is returned wrapped in a promise.
            Error handling is dependant on the adapter being used.
          </MethodMember>
          <MethodMember name="getURL" dataType="string">
            Returns URL to the API.
          </MethodMember>
          <MethodMember name="implement" dataType="void">
            Implement an API.
          </MethodMember>
          <MethodMember name="implementWithMiddleware" dataType="void">
            Implement an API, providing additional middleware for it.
          </MethodMember>

          <PropertyMember name="implementation" dataType="Function" availableFrom="1.5.0">
            The current implementation for the API
          </PropertyMember>

          <PropertyMember name="implementationMiddleware" dataType="object" availableFrom="1.5.0">
            Middleware for the current implementation
          </PropertyMember>

          <PropertyMember name="method" dataType="string" availableFrom="1.5.0">
            The method of the api
          </PropertyMember>

          <PropertyMember name="apiDeclaration" dataType="APIDeclaration" availableFrom="1.5.0">
            The API declaration on which this API was declared.
          </PropertyMember>

          <PropertyMember name="implementation" dataType="Function" availableFrom="1.5.0">
            The current implementation for the API
          </PropertyMember>

          <PropertyMember name="apiUrlParameters" dataType="object" availableFrom="1.5.0" link={true}>
            Exposes the path and query parameters of the API.
          </PropertyMember>
          <PropertyMember name="path" dataType={'string'} availableFrom={'1.5.0'}>
            The path of the API, with path parameters left as placeholders. If you want a full URL, use the getURL method.
          </PropertyMember>
          <ExposedTypeMember name="ResponseType">The type of the response.</ExposedTypeMember>
          <ExposedTypeMember name="ServerResponseType">The type of the response as the server returns it.</ExposedTypeMember>
          <ExposedTypeMember name="CallArgsType">The type of the parameter object passed to invoke the API.</ExposedTypeMember>
          <ExposedTypeMember name="RequestType">
            The type of the modified express request passed to the impementing function.
          </ExposedTypeMember>
        </Members>
        <Examples>
          <Example label="Using the exposed types">{`
            import { APIDeclaration } from 'papupata'
            const api = new APIDeclaration()
            const myAPI = api.declarePostAPI('/do-stuff/:pathParam')
              .response<string>()

            type RespType = typeof myAPI['ResponseType']
            // RespType is now string
          `}</Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
