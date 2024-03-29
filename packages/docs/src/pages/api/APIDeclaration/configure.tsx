import React from 'react'
import '../../../prepare'
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
                '1.x': 'makeRequest',
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
            <Parameter name="body" dataType="varies" />
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
          <VersionVariants
            variants={{
              '1.x': (
                <>
                  <p>
                    If set to true, all declared but unimplemented routes are automatically set up to return 501 not implemented as a
                    response to requests. If there is an app or router present at the time of declaration, this happens immediately,
                    otherwise it happens as soon as an app or router is configured.
                  </p>
                  <p>
                    This has two major effects; for one, attempts to call unimplemented papupata APIs do not end up going to other route
                    handlers or middleware (although with <Link to="/api/skipHandlingRoute">skipHandlingRoute</Link> this behavior can be
                    restored as needed). Also, routes are implemented in the order they were defined in, not in the order they were
                    implemented in. Usually this does not make a big difference, but if you have two handlers that can match the same path,
                    say, /api/:var and /api/fixed, the only way requests ever reached fixed was if it was implemented first. With this
                    variable set to true, it has to be declared first, but the implementation order is irrelevant.
                  </p>
                </>
              ),
              '2.x': (
                <>
                  <p>Note: the overall effect is the same, as in 1.x, it's just that the default value is true rather than false in 2.x.</p>
                  <p>
                    By default, all declared but unimplemented routes are automatically set up to return 501 not implemented as a response
                    to requests. If there is an app or router present at the time of declaration, this happens immediately, otherwise it
                    happens as soon as an app or router is configured. This can be prevented by setting this configuration option to false.
                  </p>
                  <p>
                    This two major effect; for one, attempts to call unimplemented papupata APIs end up going to other route handlers or
                    middleware (this can be accomplished for individual routes with either returning{' '}
                    <Link to="/api/skipHandlingRoute">skipHandlingRoute</Link> or by disabling auto-implementation just for it). Also,
                    routes end up being implemented not in the order they were implemented in, rather than their declaration order. Usually
                    this does not make a big difference, but if you have two handlers that can match the same path, say, /api/:var and
                    /api/fixed, the only way requests ever reached fixed was if it was implemented first. With this variable set to true, it
                    has to be declared first, but the implementation order is irrelevant.
                  </p>
                </>
              )
            }}
          />
        </PropertyMember>
        <PropertyMember
          name={
            <div>
              <Deprecated>validationBehavior</Deprecated> (deprecated)
            </div>
          }
          dataType="ValidationBehavior"
          availableFrom="2.0.0"
        >
          <p>
            Query and path parameter types introduced in 2.0.0 include validations. This option can be used to determine what happens when a
            validation fails, for example a string that cannot be converted to a number is sent in a context where a number is expected.
          </p>
          <p>The ValidationBehavior enum can be imported from papupata/config</p>
          <table>
            <thead>
              <th>Value</th>
              <th>Is default</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr>
                <td>ValidationBehavior.THROW</td>
                <td>Yes</td>
                <td>
                  A PapupataValidationError is thrown if a path or query parameter validation fails. This can be caught by middleware to add
                  your own error handling to deal with the situation as you prefer.
                </td>
              </tr>
              <tr>
                <td>ValidationBehavior.REROUTE</td>
                <td>No</td>
                <td>
                  Has express re-route the request to other routes that match the request. That is, validation problems are considered
                  routing mismatches rather than errors. If there is nothing else responding to the route, this most likely means that the
                  user gets a 404 because of the invalid request.
                </td>
              </tr>
            </tbody>
          </table>
          <p>Individual APIs can override this behavior using their own validationBehavior option.</p>
          <p>Deprecated in favor of onValidationFailure, which is more flexible.</p>
        </PropertyMember>
        <PropertyMember name={'onValidationFailure'} dataType={'Function'} availableFrom={'2.2.0'}>
          <p>
            If given, this function is called when any validation fails within papupata, whether it has to do with path or query parameters,
            body or response.
          </p>
          <p>If not given, the default implementation is to throw a PapupataValidationError, which extends ZodError.</p>
          <Parameters>
            <Parameter name={'error'} dataType={'PapupataValidationError'}>
              An error from the validation; this extends ZodError. Much of the time the right thing to do would be to throw this and let
              handling defer to typical error handling, but you can of course inspect the error in more detail to figure out what to do.
            </Parameter>
            <Parameter name={'value'} dataType={'Object'}>
              The object being validated. Depending on the exact type of validation taking place, it takes one of the following forms:
              <Example>{`{body: unknown}`}</Example>
              <Example>{`{response: unknown}`}</Example>
              <Example>{`{body: unknown, params: unknown, query: unknown}`}</Example>
            </Parameter>
            <Parameter name={'context'} dataType={'Object'}>
              <p>Additional information about the validation taking place.</p>
              <Members context={'onValidationFailure'} includeRequiredColumn>
                <PropertyMember name={'callContext'} dataType={'client | server'} required>
                  Indicates whether the validation is taking place on the papupata client or server. Can be useful if you use the same
                  handler function in both domains.
                </PropertyMember>
                <PropertyMember name={'dataContext'} dataType={'request | response'} required>
                  Indicates whether the data being validates is in request or response. It should be noted that if a schema is defined,
                  validation takes place on both the client and the server, in both directions -- that is, even the server validates its
                  response.
                </PropertyMember>
                <PropertyMember name={'request'} dataType={'Express request'}>
                  Only available on the server; the express request being served.
                </PropertyMember>
                <PropertyMember name={'response'} dataType={'Express response'}>
                  Only available on the server; the response for the express request being served.
                </PropertyMember>
              </Members>
            </Parameter>
          </Parameters>
          <MethodReturnType>
            <p>There are a few possibilities for what to return:</p>
            <ul>
              <li>
                nothing; an error could be thrown to prevent the request processing from proceeding; this might be the error given in the
                first parameter
              </li>
              <li>skipHandlingRoute (imported from papupata); ignores the request, attempts rerouting to another handler</li>
              <li>
                replacement for value; should be in the exact same form as the value given in the parameter. This is used to override the
                value as needed after validation. If you simply return value, then validation is effectively optional, but you can still for
                example log validation errors.
              </li>
            </ul>
          </MethodReturnType>
        </PropertyMember>
      </Members>
      <div>*1: For invoking APIs or calling the getURL method on them</div>
      <div>*2: For invoking APIs</div>
      <div>*3: For implementing APIs exactly one of either app or router must be provided</div>
    </>
  )
}
/*export type ValidationFailureHandler<TRequest, TResponse> = <
  TType extends
    | {
        body: unknown
        query: unknown
        params: unknown
      }
    | { body: unknown }
    | { response: unknown }
>(
  error: PapupataValidationError,
  value: TType,
  context: {
    dataContext: 'body' | 'response'
    callContext: 'client' | 'server'
    request?: TRequest
    response?: TResponse
  }
) => Promise<TType | typeof skipHandlingRoute> | TType | typeof skipHandlingRoute
*/
