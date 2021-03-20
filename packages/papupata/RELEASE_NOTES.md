2.0.0

Breaking changes:

- The apiUrlParameters field of a declared API is quite different
- Values other than true, false and empty string to a boolean field cause a PapupataValidationError to be thrown on the server
- PapupataValidationError is throw on server if required query parameters are missing
- While arrays were not supported in a reasonable way, the values were not processed in any way and qs has in practice probably added them amongst the query parameters,
  though they could be not accessed with types. Now anything declared to be a string is exactly one string.
- Request adapters receive undefined as the body if there is nothing in the body. This should make it so that GET requests do not accidentally end up with a body.
  This does not apply when a separate body is explicitly requested, in those cases the body will be passed as is.
- `autoImplementAllAPIs` defaults to true now; if you use papupata extensively for declaring APIs implemented without if you'll probably want to set it to false when
  configuring papupata. If there are only a few exceptions, you can now add options to disable auto-implentation for individual APIs
- when `autoImplementAllAPIs` is enabled, middleware will now be applied to the requests as if it was implemented; this middleware that are relevant even in those cases,
  such as those used for logging, to still work even if the API has not been implemented.

  API.declareGetAPI(path, undefined, { disableAutoImplement: true })

- Deep imports have been completely changed; see the mapping below for what needs to be changed and how. If you had something like `import adapter from 'papupata/dist/main/fetchAdapter`
  you'll have to change it to `import adapter from 'papupata/adapters/fetch`

  "exports": {
  ".": "./dist/main/index.js",
  "./queryTypes": "./dist/main/customQueryTypes.js",
  "./adapters/fetch": "./dist/main/fetchAdapter.js",
  "./adapters/invokeImplementation": "./dist/main/invokeImplementationAdapter.js",
  "./adapters/requestPromise": "./dist/main/requestPromiseAdapter.js",
  "./adapters/supertest": "./dist/main/supertestAdapter.js",
  "./invokers/supertest": "./dist/main/supertestInvoker.js",
  "./invokers/test": "./dist/main/testInvoker.js",
  "./ValidationError": "./dist/main/PapupataValidationError"
  },

Bug fixes:

- Query parameters are not affected from one route to another when rerouting takes place

New features:

- Query parameters can now be of more types: string, boolean, number, date, or array of any of them.

Other:

- boolQuery is now deprecated; use query or optionalQuery with the boolean type instead
- query and optionalQuery with string array parameters are now deprecated, though jsdoc does not indicate them as such as we cannot deprecate only some overloads
- the configuration option "makeRequest" has been deprecated in favor of "requestAdapter"; this is just a rename however.

  1.8.1

- Fixed convertExpressMiddleware which treated errors as success and vice versa
- PapupataMiddleware type now has method and path
- PapupataMiddleware type now its options be optional, as that matches reality; breaking change for types, but there are no functional differences

  1.8.0

- Added support for query-based variant routes, see https://baronagroup.github.io/papupata/guides/declaring/query-based-variants for details
- Request promise adapter is ever so slightly better

  1.7.0

- Added explicit types to greatly improve tsc performance on code bases that use papupata

  1.6.0

- Typescript build now targets ES5; it still expected promises at least to be available, so on es5 targets polyfilling will be needed.

  1.5.0

- TODO: document and test express middleware converter, add path and CallBodyType
- Added support for papupata middleware for individual routes
- Added support for papupata middleware shared by all routes of an API declaration (config option inherentMiddleware)
- Added built-in middleware handleUndefinedResponsesMiddleware
- Added skipHandlingRoute
- Added support for automatically implementing all APIs to return 501 Not Implemented, until actually implemented, instead of letting other handlers take over (config option autoImplementAllAPIs)
- Added implementation methods implementWithPapupataMiddleware and implementWithExpressMiddleware
- implementWithMiddleware now accepts an object with papupata and express middleware; providing an array of express middleware is still supported but considered deprecated.
- declared APIs expose all URL-based parameters as apiUrlParameters
- declared APIs expose their method as method
- declared APIs expose their API declaration as apiDeclaration; unfortunately it is typed as "any" because
  typing it properly is extremely difficult, if even possible at all.
- declared APIs now officially expose implementation, and now also implementationMiddleware
- A breaking change in an unlikely use cases: route implementations can be replaced, and that replacement
  happens in all apps/routers that implemented the route. Previously the replacement would only affect
  the current app/router.
- Mock implementations can gain access to non-object bodies
- Added support for patch method
- Added support for variance between body type as seen on the client and as seen on the server (analogous to how response already was)
- Updated to latest version of @types/express, which caused minor changes to typing. Could be a breaking change for users of an older version.

  1.4.0

- Added support for routerAt in configuration
- Added getDeclaredAPIs to API Declaration

  1.3.0

- Support for invoking APIs without parameters without even the empty object
- Support for invoking APIs with non-object bodies
- Support for route options
- Support for request options

  1.2.0

- Added "route" parameter to makeRequest

  1.1.0

- Added mock, mockOnce and unmock

  1.0.1

- Fix path parameters not working for invocations in environments that do not support regexp lookbehind

  1.0.0

- Non-breaking update, bumping to 1.0.0 because we are in production use now
- getURL can now be given query parameters in addition to the path parameters
