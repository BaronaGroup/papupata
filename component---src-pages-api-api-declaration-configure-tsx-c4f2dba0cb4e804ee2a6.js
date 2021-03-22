(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),r=a.createContext(!1)},JjZl:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m})),n.d(t,"ConfigObject",(function(){return v}));var a=n("AcpX"),r=(n("nKUr"),n("q1tI")),i=n.n(r),o=n("+ego"),l=n("NqE+"),u=n("TBFr"),d=n("Kg6r"),c=n("z+su"),s=n("Wbzz"),p=n("b3tI"),b=n("vOnD"),h=n("MaSA"),f=n("qKvR");function j(){var e=Object(a.a)(["\n  text-decoration: line-through;\n"]);return j=function(){return e},e}var O=b.a.span(j());function m(){return Object(f.d)(o.a,null,Object(f.d)(l.a,null,Object(f.d)(u.a,null,Object(f.d)("h1",null,"API Reference"),Object(f.d)("h2",null,"class APIDeclaration"),Object(f.d)("h3",null,"method configure")),Object(f.d)(d.i,null,"Configures papupata for implementing or calling APIs."),Object(f.d)(d.n,null,"This method must be called before any of the declared APIs are implemented or called. Failure to having done so will cause the operation to fail."),Object(f.d)(d.h,null,Object(f.d)(d.g,{name:"config",dataType:Object(f.d)("a",{href:"#config"},"Config")},"Configuration. See below. Instead of an actual config null can be provided to unconfigure papupata, which can be useful to reset things for tests, for example.")),Object(f.d)(d.f,null,"Nothing"),Object(f.d)("h3",{id:"config"},"config object"),Object(f.d)(v,null),Object(f.d)(d.e,null,Object(f.d)(d.d,null,"For all examples below, it is assumed that the API declaration happens in ./api.ts such as this:",Object(f.d)(d.c,{label:"api.ts"},"\n            import {APIDeclaration} from 'papupata'\n            export const api = new APIDeclaration()\n            ")),Object(f.d)(d.c,{label:"Simple server configuration"},"\n            import express from 'express'\n            import {api} from './api'\n            const app = express()\n            api.configure({\n              application: app\n            })\n          "),Object(f.d)(p.a,null,"It needs to be verified that the example below works"),Object(f.d)(d.c,{label:"Server with router"},"\n            import express, {Router} from 'express'\n            import {api} from './api'\n            const app = express()\n            const router = new Router()\n            app.use(router)\n            api.configure({\n              router\n            })\n          "),Object(f.d)(h.a,{variants:{"1.x":Object(f.d)(d.c,{label:"Configuring browser to use fetch from the local host"},"\n                    import {api} from './api'\n                    import {fetchAdapter} from 'papupata/dist/main/fetch-adapter'\n                    api.configure({\n                      baseURL: '',\n                      \n                      makeRequest: fetchAdapter\n                    })\n                  "),"2.x":Object(f.d)(d.c,{label:"Configuring browser to use fetch from the local host"},"\n                    import {api} from './api'\n                    import {fetchAdapter} from 'papupata/adapters/fetch'\n                    api.configure({\n                      baseURL: '',\n                      requestAdapter: fetchAdapter\n                    })\n                  ")}}))))}function v(){return Object(f.d)(i.a.Fragment,null,Object(f.d)(c.b,{includeRequiredColumn:!0,context:"APIDeclaration/configure",includeAvailableFrom:!0},Object(f.d)(c.d,{name:"baseURL",dataType:"string",required:"Conditionally *1"},"Base URL used for all API invocations. This can be an empty string, in which case the calls on the browser are made relative to the root of the current host."),Object(f.d)(c.d,{name:Object(f.d)(h.a,{variants:{"1.x":"makeRequest","2.x":Object(f.d)("div",null,Object(f.d)("p",null,"requestAdapter"),Object(f.d)("p",null,Object(f.d)(O,null,"makeRequest")," (deprecated)"))}}),dataType:"Function",required:"Conditionally *2"},Object(f.d)("p",null,"This function is used internally for calling APIs. The function is as follows:"),Object(f.d)(d.h,{includeAvailableFrom:!0},Object(f.d)(d.g,{name:"method",dataType:"string"}),Object(f.d)(d.g,{name:"url",dataType:"string"}),Object(f.d)(d.g,{name:"query",dataType:"object"}),Object(f.d)(d.g,{name:"body",dataType:"varies"}),Object(f.d)(d.g,{name:"params",dataType:"object",availableFrom:"1.2.0"},"Do note that params are already baked into the URL, there is no need for the function to do that."),Object(f.d)(d.g,{name:"route",dataType:"object/function"},"This is the object/function for route being invoked. For most uses this should be completely unnecessary, but this can be used to allow for special behavior for particular routes. If options have been defined on the route, you can access them from route.options."),Object(f.d)(d.g,{name:"requestOptions",dataType:"varies"},"If request options are used, then they are passed as this parameter.")),Object(f.d)(d.f,null,"Promise","<any>","; the promise, on a successful request, should resolve with the response type of the declared request. Typically this means parsing the JSON data."),Object(f.d)("p",null,"Two adapters are supplied with papupata, ",Object(f.d)(s.a,{to:"/api/fetchAdapter"},"one for fetch")," and"," ",Object(f.d)(s.a,{to:"/api/requestPromiseAdapter"},"one for request-promise"),".")),Object(f.d)(c.d,{name:"app",dataType:"Express application",required:"Conditionally *3"},"Express application, on which the declared APIs will be attached. If you make sure all the api declarations are invoked as the routing is being set up then using the application is fine, but if there is a chance that routes will be added later then the router is the better option."),Object(f.d)(c.d,{name:"router",dataType:"Express router",required:"Conditionally *3"},"Express router, on which the declared APIs will be attached. The main advantage of using a router over app is that APIs can be added after the whole application has been configured, assuming no middleware is added to the router itself after the routes."),Object(f.d)(c.d,{name:"routerAt",dataType:"string",availableFrom:"1.4.0"},Object(f.d)("p",null,"It often makes sense to declare APIs on top a common base URL. In practice though you might have a router set up for a specific path, for example to add common middleware."),Object(f.d)("p",null,"By setting routerAt, you explicitly indicate that the provided router will be at the given path. All routes on an API declaration with routerAt MUST have the routerAt as the start of their path.")),Object(f.d)(c.d,{name:"inherentMiddleware",dataType:"Function[]",availableFrom:"1.5.0"},"An array of papupata middleware applied to all routes implemented in this API declaration, that is, middleware inherent to all routes of this declaration. Only relevant for implementing, not for clients."),Object(f.d)(c.d,{name:"autoImplementAllAPIs",dataType:"boolean",availableFrom:"1.5.0"},Object(f.d)(h.a,{variants:{"1.x":Object(f.d)(i.a.Fragment,null,Object(f.d)("p",null,"If set to true, all declared but unimplemented routes are automatically set up to return 501 not implemented as a response to requests. If there is an app or router present at the time of declaration, this happens immediately, otherwise it happens as soon as an app or router is configured."),Object(f.d)("p",null,"This has two major effects; for one, attempts to call unimplemented papupata APIs do not end up going to other route handlers or middleware (although with ",Object(f.d)(s.a,{to:"/api/skipHandlingRoute"},"skipHandlingRoute")," this behavior can be restored as needed). Also, routes are implemented in the order they were defined in, not in the order they were implemented in. Usually this does not make a big difference, but if you have two handlers that can match the same path, say, /api/:var and /api/fixed, the only way requests ever reached fixed was if it was implemented first. With this variable set to true, it has to be declared first, but the implementation order is irrelevant.")),"2.x":Object(f.d)(i.a.Fragment,null,Object(f.d)("p",null,"Note: the overall effect is the same, as in 1.x, it's just that the default value is true rather than false in 2.x."),Object(f.d)("p",null,"By default, all declared but unimplemented routes are automatically set up to return 501 not implemented as a response to requests. If there is an app or router present at the time of declaration, this happens immediately, otherwise it happens as soon as an app or router is configured. This can be prevented by setting this configuration option to false."),Object(f.d)("p",null,"This two major effect; for one, attempts to call unimplemented papupata APIs end up going to other route handlers or middleware (this can be accomplished for individual routes with either returning"," ",Object(f.d)(s.a,{to:"/api/skipHandlingRoute"},"skipHandlingRoute")," or by disabling auto-implementation just for it). Also, routes end up being implemented not in the order they were implemented in, rather than their declaration order. Usually this does not make a big difference, but if you have two handlers that can match the same path, say, /api/:var and /api/fixed, the only way requests ever reached fixed was if it was implemented first. With this variable set to true, it has to be declared first, but the implementation order is irrelevant."))}})),Object(f.d)(c.d,{name:"validationBehavior",dataType:"ValidationBehavior",availableFrom:"2.0.0"},Object(f.d)("p",null,"Query and path parameter types introduced in 2.0.0 include validations. This option can be used to determine what happens when a validation fails, for example a string that cannot be converted to a number is sent in a context where a number is expected."),Object(f.d)("p",null,"The ValidationBehavior enum can be imported from papupata/config"),Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("th",null,"Value"),Object(f.d)("th",null,"Is default"),Object(f.d)("th",null,"Description")),Object(f.d)("tbody",null,Object(f.d)("tr",null,Object(f.d)("td",null,"ValidationBehavior.THROW"),Object(f.d)("td",null,"Yes"),Object(f.d)("td",null,"A PapupataValidationError is thrown if a validation fails. This can be caught by middleware to add your own error handling to deal with the situation as you prefer.")),Object(f.d)("tr",null,Object(f.d)("td",null,"ValidationBehavior.REROUTE"),Object(f.d)("td",null,"No"),Object(f.d)("td",null,"Has express re-route the request to other routes that match the request. That is, validation problems are considered routing mismatches rather than errors. If there is nothing else responding to the route, this most likely means that the user gets a 404 because of the invalid request.")))),Object(f.d)("p",null,"Individual APIs can override this behavior using their own validationBehavior option."))),Object(f.d)("div",null,"*1: For invoking APIs or calling the getURL method on them"),Object(f.d)("div",null,"*2: For invoking APIs"),Object(f.d)("div",null,"*3: For implementing APIs exactly one of either app or router must be provided"))}},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return x})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return I})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return q})),n.d(t,"f",(function(){return P})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return F})),n.d(t,"m",(function(){return U})),n.d(t,"l",(function(){return S}));var a=n("AcpX"),r=(n("nKUr"),n("vOnD")),i=n("q1tI"),o=n.n(i),l=n("P+0o"),u=n("3KYE"),d=n("qKvR");function c(){var e=Object(a.a)([""]);return c=function(){return e},e}function s(){var e=Object(a.a)([""]);return s=function(){return e},e}function p(){var e=Object(a.a)([""]);return p=function(){return e},e}function b(){var e=Object(a.a)([""]);return b=function(){return e},e}function h(){var e=Object(a.a)([""]);return h=function(){return e},e}function f(){var e=Object(a.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return f=function(){return e},e}function j(){var e=Object(a.a)([""]);return j=function(){return e},e}function O(){var e=Object(a.a)([""]);return O=function(){return e},e}function m(){var e=Object(a.a)([""]);return m=function(){return e},e}var v=r.a.section(m()),g=r.a.h4(O()),y=r.a.h5(j()),w=r.a.section(f()),x=function(e){var t=e.children;return Object(d.d)(v,null,Object(d.d)(g,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(d.d)(v,null,Object(d.d)(g,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},I=function(e){var t=e.children;return Object(d.d)(v,null,Object(d.d)(g,null,"Usage"),t)},T=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(d.d)(v,null,Object(d.d)(u.a.Provider,{value:!!n},Object(d.d)(g,null,"Parameters",a&&": "+a),t?Object(d.d)("table",null,Object(d.d)("thead",null,Object(d.d)("tr",null,Object(d.d)("th",null,"Name"),Object(d.d)("th",null,"Type"),Object(d.d)("th",null,"Description"),n&&Object(d.d)("th",null,"Introduced in"))),Object(d.d)("tbody",null,t)):Object(d.d)("p",null,"There are no parameters.")))},q=function(e){var t=e.children,n=e.name,a=e.dataType,r=e.availableFrom,i=void 0===r?"1.0.0":r,l=o.a.useContext(u.a);return Object(d.d)("tr",null,Object(d.d)("td",null,n),Object(d.d)("td",null,a),Object(d.d)("td",null,t),l&&Object(d.d)("td",null,i))},P=function(e){var t=e.children;return Object(d.d)(v,null,Object(d.d)(g,null,"Returns"),t)},R=function(e){var t=e.children;return Object(d.d)(v,null,Object(d.d)(g,null,"Caveats"),t)},k=function(e){var t=e.children;return Object(d.d)(v,null,Object(d.d)(g,null,"Examples"),t)},C=function(e){var t=e.children,n=e.label;return Object(d.d)(o.a.Fragment,null,n&&Object(d.d)(y,null,n),Object(d.d)(l.a,{language:"typescript"},t))},F=function(e){var t=e.children;return Object(d.d)(w,null,Object(d.d)(y,null,"Common to examples below:"),t)},U=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(d.d)(v,null,Object(d.d)(g,null,"Type parameeters"),Object(d.d)(u.a.Provider,{value:!!n},Object(d.d)(g,null,"Parameters"),t?Object(d.d)("table",null,Object(d.d)("thead",null,Object(d.d)("tr",null,Object(d.d)("th",null,"Name"),Object(d.d)("th",null,"Default value"),Object(d.d)("th",null,"Description"),n?Object(d.d)("th",null,"Introduced in"):"")),Object(d.d)("tbody",null,t)):Object(d.d)("p",null,"There are no parameters.")))},D=r.a.tr(h()),K=r.a.td(b()),E=r.a.td(p()),B=r.a.td(s()),N=r.a.td(c()),S=function(e){var t=e.children,n=e.name,a=e.defaultValue,r=e.availableFrom,i=void 0===r?"none":r,l=o.a.useContext(u.a);return Object(d.d)(D,null,Object(d.d)(K,null,n),Object(d.d)(E,null,a),Object(d.d)(B,null,t),l?Object(d.d)(N,null,i):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("AcpX"),r=(n("nKUr"),n("q1tI")),i=n("vOnD"),o=n("qKvR");function l(){var e=Object(a.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]);return u=function(){return e},e}var d=i.a.div(u()),c=i.a.div(l());function s(e){var t=e.variants,n=e.isRecommendation,a=Object(r.useState)("2.x"),i=a[0],l=a[1],u=Object(r.useCallback)((function(e){l(e.target.value)}),[]);return Object(o.d)(d,null,Object(o.d)("select",{value:i,onChange:u},Object(o.d)("option",{value:"1.x"},"Papupata 1.x"),Object(o.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(o.d)(c,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(i,e)})).map((function(e){return Object(o.d)("div",{key:e},t[e])})))}},b3tI:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("AcpX"),r=(n("nKUr"),n("q1tI"),n("vOnD"));function i(){var e=Object(a.a)(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]);return i=function(){return e},e}var o=r.a.div(i()),l=n("qKvR");function u(){var e=Object(a.a)(["\n  border-color: yellowgreen;\n  background-color: #ffffa7;\n  outline-color: #ffffa7;\n  margin: 20px;\n"]);return u=function(){return e},e}var d=Object(r.a)(o)(u()),c=function(e){var t=e.children;return Object(l.d)(d,null,t||"This section needs more work.")}},"z+su":function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return k})),n.d(t,"a",(function(){return C}));var a=n("AcpX"),r=(n("nKUr"),n("Kg6r")),i=n("q1tI"),o=n.n(i),l=n("vOnD"),u=n("Wbzz"),d=n("3KYE"),c=n("qKvR");function s(){var e=Object(a.a)([""]);return s=function(){return e},e}function p(){var e=Object(a.a)([""]);return p=function(){return e},e}function b(){var e=Object(a.a)([""]);return b=function(){return e},e}function h(){var e=Object(a.a)([""]);return h=function(){return e},e}function f(){var e=Object(a.a)([""]);return f=function(){return e},e}function j(){var e=Object(a.a)([""]);return j=function(){return e},e}function O(){var e=Object(a.a)([""]);return O=function(){return e},e}var m=l.a.tr(O()),v=l.a.td(j()),g=l.a.td(f()),y=l.a.td(h()),w=l.a.td(b()),x=l.a.td(p()),A=l.a.td(s());function I(e){var t=e.children,n=Object(i.useContext)(T).includeRequiredColumn;if(!n&&t)throw new Error("Being asked to show required cell, yet it does not exist");return n?Object(c.d)(x,null,t):null}var T=Object(i.createContext)({context:"",includeRequiredColumn:!1}),q=function(e){var t=e.name,n=e.children,a=Object(i.useContext)(T).context;return Object(c.d)(v,null,Object(c.d)(u.a,{to:"/api/"+a+"/"+t},n||t))},P=function(e){var t=e.children,n=e.context,a=e.includeRequiredColumn,i=e.includeAvailableFrom;return Object(c.d)(r.j,null,Object(c.d)(T.Provider,{value:{context:n,includeRequiredColumn:!!a}},Object(c.d)(d.a.Provider,{value:!!i},Object(c.d)(r.k,null,"Members"),Object(c.d)("table",null,Object(c.d)("thead",null,Object(c.d)("th",null,"Name"),Object(c.d)("th",null,"Type"),Object(c.d)("th",null,"Data type/return type"),Object(c.d)("th",null,"Description"),a&&Object(c.d)("th",null,"Required"),i&&Object(c.d)("th",null,"Introduced in")),Object(c.d)("tbody",null,t)))))},R=function(e){var t=e.children,n=e.name,a=e.dataType,r=e.required,i=e.displayName,l=e.availableFrom,u=o.a.useContext(d.a);return Object(c.d)(m,null,Object(c.d)(q,{name:n},i),Object(c.d)(g,null,"method"),Object(c.d)(y,null,a),Object(c.d)(w,null,t),Object(c.d)(I,null,!0===r?"Yes":!1===r?"No":r),u?Object(c.d)(A,null,l):"")},k=function(e){var t=e.children,n=e.name,a=e.dataType,r=e.required,i=e.availableFrom,l=e.link,u=o.a.useContext(d.a);return Object(c.d)(m,null,l?Object(c.d)(q,{name:n},n):Object(c.d)(v,null,n),Object(c.d)(g,null,"property"),Object(c.d)(y,null,a),Object(c.d)(w,null,t),Object(c.d)(I,null,!0===r?"Yes":!1===r?"No":r),u?Object(c.d)(A,null,i):"")},C=function(e){var t=e.children,n=e.name;return Object(c.d)(m,null,Object(c.d)(v,null,n),Object(c.d)(g,null,"property"),Object(c.d)(y,null,"n/a"),Object(c.d)(w,null,t,". Type type itself must be accessed using the typeof operator."))}}}]);
//# sourceMappingURL=component---src-pages-api-api-declaration-configure-tsx-c4f2dba0cb4e804ee2a6.js.map