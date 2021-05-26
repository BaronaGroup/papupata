import '../../prepare'
import React from 'react'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { Example, Examples, Purpose, Usage } from '../../components/api-components'
import { Members, MethodMember } from '../../components/members-table'
import { DeclaredAPILink, IncompleteApiDeclarationLink } from '../../components/links'
import VersionVariants from '../../components/VersionVariants'

export default function IncompleteApiDeclaration() {
  return (
    <IndexLayout>
      <Page>
        Ø
        <Container>
          <h1>API Reference</h1>
          <h2>interface IncompleteApiDeclaration</h2>
        </Container>
        <Purpose>Used for defining the parameters and response types of an API.</Purpose>
        <Usage>
          <p>
            Technically there is nothing called "IncompleteApiDeclaration" in the code base. This is simply a representation of what is
            returned when declaring the API.
          </p>
          <p>
            There is, out of necessity, a somewhat odd restriction. Although you can skip any parts you do not need, the method calls have
            to take place in a specific order. This is necessary to avoid a combinatorial expolosion of types as the API is being declared.
            Luckily Typescript is perfectly aware of which methods are available and when. In brief, the order of declarations must be
            params, query, optional query, bool query, body and finally response.
          </p>
          <p>
            The API declaration is done by invoking the methods exposed here in chain-like fashion. Once response is declared, you have a
            fully declared API which can then be implemented or called.
          </p>
        </Usage>
        <Members context="PartiallyDeclaredAPI">
          <MethodMember name="params" dataType={<IncompleteApiDeclarationLink />}>
            Declare URL/path parameters for the API.
          </MethodMember>
          <MethodMember name="query" dataType={<IncompleteApiDeclarationLink />}>
            Declare URL/path required string query parameters for the API.
          </MethodMember>
          <MethodMember name="optionalQuery" dataType={<IncompleteApiDeclarationLink />}>
            Declare URL/path optional query parameters for the API.
          </MethodMember>
          <MethodMember name="queryBool" dataType={<IncompleteApiDeclarationLink />}>
            Declare URL/path optional query parameters for the API. Deprecated since 2.0.0.
          </MethodMember>
          <MethodMember name="body" dataType={<IncompleteApiDeclarationLink />}>
            Declare body type. At this time the body must be an object.
          </MethodMember>
          <MethodMember name="response" dataType={<DeclaredAPILink />}>
            Declare response type and conclude the declaration of an API.
          </MethodMember>
        </Members>
        <Examples>
          <VersionVariants
            isRecommendation
            variants={{
              '1.x': (
                <Example>{`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  const myAPI = api.declarePostAPI('/do-stuff/:pathParam')
                    .params(['pathParam'] as const)
                    .query(['queryParam'] as const)
                    .optionalQuery(['opt'] as const)
                    .queryBool(['boolValue'] as const)
                    .body<{name: string}>()
                    .response<string>()
                `}</Example>
              ),
              '2.x': (
                <Example>{`
                  import { APIDeclaration } from 'papupata'
                  const api = new APIDeclaration()
                  const myAPI = api.declarePostAPI('/do-stuff/:pathParam')
                    .params({pathParam: String})
                    .query({queryParam: String})
                    .optionalQuery({opt: String})
                    .body<{name: string}>()
                    .response<string>()
                `}</Example>
              )
            }}
          />
        </Examples>
      </Page>
    </IndexLayout>
  )
}
