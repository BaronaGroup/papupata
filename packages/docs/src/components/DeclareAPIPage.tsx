import React from 'react'
import { ucFirst } from '../utils'
import IndexLayout from '../layouts'
import Page from './Page'
import Container from './Container'
import { Purpose, Usage, Parameters, MethodReturnType, Parameter, Examples, Example, AvailableFrom } from './api-components'
import { IncompleteApiDeclarationLink } from './links'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Members, PropertyMember } from './members-table'
import { FixedFont } from './guides'

const NestedTitle = styled.h5`
  font-size: 1rem;
`

type Props = { method: string; availableFrom?: '1.5.0' }
export default function DeclareAPIPage({ method, availableFrom }: Props) {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
          <h3>method declare{ucFirst(method)}API</h3>
        </Container>
        {availableFrom && <AvailableFrom version={availableFrom} />}
        <Purpose>Used for declaring an API using the HTTP {method.toUpperCase()} method</Purpose>
        <Usage>APIs can be declared at any time.</Usage>
        <Parameters>
          <Parameter name="path" dataType="string">
            Path to the API under the base URL of the APIDeclaration.
            <p>
              Version 1.8.0 onwards: If you wish to declare different APIs on the same path but different query parameters, see{' '}
              <Link to="/guides/declaring/query-based-variants">Query-based variants</Link> for more information.
            </p>
          </Parameter>
          <Parameter name="routeOptions" dataType="varies">
            Options to the route. Type type is specified by the RouteOptions type parameter of the API declaration. They have no inherent
            meaning in papupata, they are simply stored to be used by the application.
          </Parameter>
          <Parameter name="papupataOptions" availableFrom="2.0.0" dataType={<a href="#papupataRouteOptions">PapupataRouteOptions</a>}>
            Route-specific options papupata is aware of.
          </Parameter>
        </Parameters>
        <MethodReturnType>
          <IncompleteApiDeclarationLink />
        </MethodReturnType>
        <NestedTitle id="papupataRouteOptions">PapupataRouteOptions</NestedTitle>
        <Members context="DeclareAPI">
          <PropertyMember name="disableAutoImplement" dataType="boolean">
            Prevents automatic implementation of this route (as producing 501) even when the configuration option{' '}
            <FixedFont>autoImplementAllAPIs</FixedFont> is set to true (which is its default value in papupata 2.x). This is can be useful
            when there are a few routes that must be implemented in other ways for whatever reason.
          </PropertyMember>
          <PropertyMember name="validationBehavior" dataType="ValidationBehavior">
            <p>
              Can be used to override the validation behavior configured to be the default for all APIs. Papupata's own default is to throw
              upon validation failure, though an API declaration can be configured with a different default as well. A route-specific
              behavior can be used with this field.
            </p>
            <p>
              The valid values are <FixedFont>ValidationBehavior.THROW</FixedFont> (which is the default descibed above) and{' '}
              <FixedFont>ValidationBehavior.REROUTE</FixedFont> which simply ignores the route if the parameters are not valid.
            </p>
            <p>ValidationBehavior can be imported from papupata/config</p>
          </PropertyMember>
        </Members>
        <Examples>
          <Example>
            {`
            import {APIDeclaration} from 'papupata'
            const api = new APIDeclaration()

            const MyAPI = api.declare${ucFirst(method)}API('/api/person')
              .response<string>()
          `}
          </Example>
        </Examples>
      </Page>
    </IndexLayout>
  )
}
