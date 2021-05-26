import React from 'react'
import '../../../prepare'

import { AvailableFrom, Purpose } from '../../../components/api-components'
import Container from '../../../components/Container'
import { Members, PropertyMember } from '../../../components/members-table'
import Page from '../../../components/Page'
import TypeMappingLink from '../../../components/TypeMappingLink'
import VersionVariants from '../../../components/VersionVariants'
import IndexLayout from '../../../layouts'

export default function ApiUrlParameters() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class DeclaredAPI</h2>
          <h3>property apiUrlParameters</h3>
        </Container>
        <AvailableFrom version="1.5.0" />
        <Purpose>Exposes the path and query parameters of the api</Purpose>
        <VersionVariants
          variants={{
            '1.x': (
              <Members context="DeclaredAPI/apiUrlParameters" includeRequiredColumn={true}>
                <PropertyMember dataType={'string[]'} name="params" required="false">
                  Path parameters of the API
                </PropertyMember>
                <PropertyMember dataType={'string[]'} name="query" required="false">
                  Regular query parameters of the API
                </PropertyMember>
                <PropertyMember dataType={'string[]'} name="optionalQuery" required="false">
                  Optional query parameters of the API
                </PropertyMember>
                <PropertyMember dataType={'string[]'} name="boolQuery" required="false">
                  Boolean query parameters of the API
                </PropertyMember>
              </Members>
            ),
            '2.x': (
              <>
                <Members context="DeclaredAPI/apiUrlParameters" includeRequiredColumn={true}>
                  <PropertyMember dataType={<TypeMappingLink />} name="params" required="false">
                    Path parameters of the API
                  </PropertyMember>
                  <PropertyMember dataType={<TypeMappingLink />} name="query" required="false">
                    Regular query parameters of the API
                  </PropertyMember>
                  <PropertyMember dataType={<TypeMappingLink />} name="optionalQuery" required="false">
                    Optional query parameters of the API
                  </PropertyMember>
                  <PropertyMember dataType={<TypeMappingLink />} name="boolQuery" required="false">
                    Boolean query parameters of the API
                  </PropertyMember>
                </Members>
                <p>
                  To get a list of fields similar to papupata 1.x you can use Object.keys on the TypeMappings, though do note that boolQuery
                  is only populated if it is used explicitly, boolean values specified in normal query will be in query instead.
                </p>
              </>
            )
          }}
        />
      </Page>
    </IndexLayout>
  )
}
