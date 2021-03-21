import React from 'react'
import IndexLayout from '../../../layouts'
import Page from '../../../components/Page'
import Container from '../../../components/Container'
import {
  Example,
  ExampleCommon,
  Examples,
  MethodReturnType,
  Parameter,
  Parameters,
  Purpose,
  Usage
} from '../../../components/api-components'
import { Members, PropertyMember } from '../../../components/members-table'
import { Link } from 'gatsby'
import { ToDo } from '../../../components/ToDo'
import styled from 'styled-components'
import VersionVariants from '../../../components/VersionVariants'

const Deprecated = styled.span`
  text-decoration: line-through;
`

export default function Configure() {
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>API Reference</h1>
          <h2>class APIDeclaration</h2>
          <h3>method configure</h3>
        </Container>
        <Purpose>Configures papupata for implementing or calling APIs.</Purpose>
        <Usage>
          This method must be called before any of the declared APIs are implemented or called. Failure to having done so will cause the
          operation to fail.
        </Usage>
        <Parameters>
          <Parameter name="config" dataType={<a href="#config">Config</a>}>
            Configuration. See below. Instead of an actual config null can be provided to unconfigure papupata, which can be useful to reset
            things for tests, for example.
          </Parameter>
        </Parameters>
        <MethodReturnType>Nothing</MethodReturnType>
        <h3 id="config">config object</h3>
        <ConfigObject />
        <Examples>
          <ExampleCommon>
            For all examples below, it is assumed that the API declaration happens in ./api.ts such as this:
            <Example label="api.ts">
              {`
            import {APIDeclaration} from 'papupata'
            export const api = new APIDeclaration()
            `}
            </Example>
          </ExampleCommon>
          <Example label="Simple server configuration">
            {`
            import express from 'express'
            import {api} from './api'
            const app = express()
            api.configure({
              application: app
            })
          `}
          </Example>
          <ToDo>It needs to be verified that the example below works</ToDo>
          <Example label="Server with router">
            {`
            import express, {Router} from 'express'
            import {api} from './api'
            const app = express()
            const router = new Router()
            app.use(router)
            api.configure({
              router
            })
          `}
          </Example>
          <VersionVariants
            variants={{
              '1.x': (
                <Example label="Configuring browser to use fetch from the local host">
                  {`
                    import {api} from './api'
                    import {fetchAdapter} from 'papupata/dist/main/fetch-adapter'
                    api.configure({
                      baseURL: '',
                      
                      makeRequest: fetchAdapter
                    })
                  `}
                </Example>
              ),
              '2.x': (
                <Example label="Configuring browser to use fetch from the local host">
                  {`
                    import {api} from './api'
                    import {fetchAdapter} from 'papupata/adapters/fetch'
                    api.configure({
                      baseURL: '',
                      requestAdapter: fetchAdapter
                    })
                  `}
                </Example>
              )
            }}
          />
        </Examples>
      </Page>
    </IndexLayout>
  )
}

export function ConfigObject() {
  return (
    <>
      <Members includeRequiredColumn={true} context="APIDeclaration/configure" includeAvailableFrom={true}>
        <PropertyMember name="baseURL" dataType="string" required={'Conditionally *1'}>
          Base URL used for all API invocations. This can be an empty string, in which case the calls on the browser are made relative to
          the root of the current host.
        </PropertyMember>
        <PropertyMember
          name={
            <VersionVariants
              variants={{
                '1.x': (
                  'makeRequest'
                ),
                '2.x': (
                  <div>
                    <p>requestAdapter</p>
                    <p>
                      <Deprecated>makeRequest</Deprecated> (deprecated)
                    </p>
                  </div>
                )
              }}
            />
          }
          dataType="Function"
          required={'Conditionally *2'}
        >
          <p>This function is used internally for calling APIs. The function is as follows:</p>
          <Parameters includeAvailableFrom={true}>
            <Parameter name="method" dataType="string" />
            <Parameter name="url" dataType="string" />
            <Parameter name="query" dataType="object" />
            <Parameter name="body" dataType="object" />
            <Parameter name="params" dataType="object" availableFrom="1.2.0">
              Do note that params are already baked into the URL, there is no need for the function to do that.
            </Parameter>
            <Parameter name="route" dataType="object/function">
              This is the object/function for route being invoked. For most uses this should be completely unnecessary, but this can be used
              to allow for special behavior for particular routes. If options have been defined on the route, you can access them from
              route.options.
            </Parameter>
            <Parameter name="requestOptions" dataType="varies">
              If request options are used, then they are passed as this parameter.
            </Parameter>
          </Parameters>
          <MethodReturnType>
            Promise{'<any>'}; the promise, on a successful request, should resolve with the response type of the declared request. Typically
            this means parsing the JSON data.
          </MethodReturnType>
          <p>
            Two adapters are supplied with papupata, <Link to="/api/fetchAdapter">one for fetch</Link> and{' '}
            <Link to="/api/requestPromiseAdapter">one for request-promise</Link>.
          </p>
        </PropertyMember>
        <PropertyMember name="app" dataType="Express application" required={'Conditionally *3'}>
          Express application, on which the declared APIs will be attached. If you make sure all the api declarations are invoked as the
          routing is being set up then using the application is fine, but if there is a chance that routes will be added later then the
          router is the better option.
        </PropertyMember>
        <PropertyMember name="router" dataType="Express router" required={'Conditionally *3'}>
          Express router, on which the declared APIs will be attached. The main advantage of using a router over app is that APIs can be
          added after the whole application has been configured, assuming no middleware is added to the router itself after the routes.
        </PropertyMember>
        <PropertyMember name="routerAt" dataType="string" availableFrom="1.4.0">
          <p>
            It often makes sense to declare APIs on top a common base URL. In practice though you might have a router set up for a specific
            path, for example to add common middleware.
          </p>
          <p>
            By setting routerAt, you explicitly indicate that the provided router will be at the given path. All routes on an API
            declaration with routerAt MUST have the routerAt as the start of their path.
          </p>
        </PropertyMember>
        <PropertyMember name="inherentMiddleware" dataType="Function[]" availableFrom="1.5.0">
          An array of papupata middleware applied to all routes implemented in this API declaration, that is, middleware inherent to all
          routes of this declaration. Only relevant for implementing, not for clients.
        </PropertyMember>
        <PropertyMember name="autoImplementAllAPIs" dataType="boolean" availableFrom="1.5.0">
          <p>
            If set to true, all declared but unimplemented routes are automatically set up to return 501 not implemented as a response to
            requests. If there is an app or router present at the time of declaration, this happens immediately, otherwise it happens as
            soon as an app or router is configured.
          </p>
          <p>
            This two major effect; for one, attempts to call unimplemented papupata APIs do not end up going to other route handlers or
            middleware (although with <Link to="/api/skipHandlingRoute">skipHandlingRoute</Link> this behavior can be restored as needed).
            Also, routes are implemented in the order they were defined in, not in the order they were implemented in. Usually this does not
            make a big difference, but if you have two handlers that can match the same path, say, /api/:var and /api/fixed, the only way
            requests ever reached fixed was if it was implemented first. With this variable set to true, it has to be declared first, but
            the implementation order is irrelevant.
          </p>
          <p>It is likely that from version 2.0 onwards the default value for this setting becomes true.</p>
        </PropertyMember>
      </Members>
      <div>*1: For invoking APIs or calling the getURL method on them</div>
      <div>*2: For invoking APIs</div>
      <div>*3: For implementing APIs exactly one of either app or router must be provided</div>
    </>
  )
}
