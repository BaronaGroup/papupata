import '../../prepare'
import React from 'react'
import IndexLayout from '../../layouts'
import Page from '../../components/Page'
import Container from '../../components/Container'
import { Link } from 'gatsby'
import { Example, Purpose, TypeParameter, TypeParameters, Usage } from '../../components/api-components'
import { MethodMember, Members } from '../../components/members-table'
import { IncompleteApiDeclarationLink } from '../../components/links'
import { ucFirst } from '../../utils'

const DeclareAPI: React.FC<{ method: string; availableFrom?: '1.5.0' }> = ({ method, availableFrom }) => (
  <MethodMember name={`declare${ucFirst(method)}API`} dataType={<IncompleteApiDeclarationLink />} availableFrom={availableFrom}>
    Declares an API using the {method.toUpperCase()} HTTP method.
  </MethodMember>
)

export default function APIDeclaration() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
        </Container>
        <Example>{`import {APIDeclaration} from 'papupata'`}</Example>
        <Purpose>Used for declaring, implementing and calling APIs</Purpose>
        <Usage>
          <p>
            Once created, APIs can be declared using most of the methods. Before implemting or calling the APIs the object must be
            configured using its <Link to="/api/APIDeclaration/configure">configure method.</Link>
          </p>
          <p>
            APIDeclaration has an expicit type parameter, which can be used to override the type of the request used in the API
            implementations. It defaults to express request.
          </p>
        </Usage>
        <TypeParameters>
          <TypeParameter name="RequestType" defaultValue="Request (express)" availableFrom="Always">
            This type parameter is used to set up the type for the request object for implementing the routes with express. The default
            value should be fine for simple cases, but if you have a custom request type you can use it instead.
          </TypeParameter>
          <TypeParameter name="RouteOptions" defaultValue="void" availableFrom="1.3.0">
            If you want to pass options to your route definitions, then this type defines the type for them.
          </TypeParameter>
          <TypeParameter name="RequestOptions" defaultValue="void" availableFrom="1.3.0">
            If you want to pass options when making requests, then this type defines the type for them.
          </TypeParameter>
        </TypeParameters>
        <Members context="APIDeclaration" includeAvailableFrom={true}>
          <MethodMember name="configure" dataType="void">
            Configures papupata to allow implementing and/or calling the declared APIs.
          </MethodMember>
          <MethodMember name={'getConfig'} dataType={'Configuration'}>
            Returns the current configuration
          </MethodMember>
          <MethodMember name={'getDeclaredAPIs'} dataType={'DeclaredAPI[]'} availableFrom={'1.4.0'}>
            Returns an array of all APIs declared on this API declaration.
          </MethodMember>
          <DeclareAPI method="delete" />
          <DeclareAPI method="get" />
          <DeclareAPI method="patch" availableFrom="1.5.0" />
          <DeclareAPI method="post" />
          <DeclareAPI method="put" />
          <MethodMember name={'unmockAll'} dataType={'void'} availableFrom={'1.1.0'}>
            Undoes all mocks on the APIs of this API declaration
          </MethodMember>
          <MethodMember name={'updateConfig'} dataType={'void'} availableFrom="2.0.0">
            Updates parts of the configuration without affecting the rest of it.
          </MethodMember>
        </Members>
      </Page>
    </IndexLayout>
  )
}
