(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),i=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return A})),n.d(t,"a",(function(){return y})),n.d(t,"n",(function(){return P})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return k})),n.d(t,"f",(function(){return R})),n.d(t,"b",(function(){return q})),n.d(t,"e",(function(){return C})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return M})),n.d(t,"m",(function(){return F})),n.d(t,"l",(function(){return N}));var a,i,r,l,o,s,u,d,c,p=n("AcpX"),b=n("vOnD"),h=n("q1tI"),m=n.n(h),j=n("P+0o"),O=n("3KYE"),f=n("qKvR"),g=b.a.section(a||(a=Object(p.a)([""]))),v=b.a.h4(i||(i=Object(p.a)([""]))),w=b.a.h5(r||(r=Object(p.a)([""]))),I=b.a.section(l||(l=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),A=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Purpose"),t)},y=function(e){var t=e.version;return Object(f.d)(g,null,Object(f.d)(v,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},P=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Usage"),t)},x=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(g,null,Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(v,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},k=function(e){var t=e.children,n=e.name,a=e.dataType,i=e.availableFrom,r=void 0===i?"1.0.0":i,l=m.a.useContext(O.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),l&&Object(f.d)("td",null,r))},R=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Returns"),t)},q=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Caveats"),t)},C=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Examples"),t)},T=function(e){var t=e.children,n=e.label;return Object(f.d)(m.a.Fragment,null,n&&Object(f.d)(w,null,n),Object(f.d)(j.a,{language:"typescript"},t))},M=function(e){var t=e.children;return Object(f.d)(I,null,Object(f.d)(w,null,"Common to examples below:"),t)},F=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(g,null,Object(f.d)(v,null,"Type parameeters"),Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(v,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},U=b.a.tr(o||(o=Object(p.a)([""]))),D=b.a.td(s||(s=Object(p.a)([""]))),K=b.a.td(u||(u=Object(p.a)([""]))),S=b.a.td(d||(d=Object(p.a)([""]))),G=b.a.td(c||(c=Object(p.a)([""]))),N=function(e){var t=e.children,n=e.name,a=e.defaultValue,i=e.availableFrom,r=void 0===i?"none":i,l=m.a.useContext(O.a);return Object(f.d)(U,null,Object(f.d)(D,null,n),Object(f.d)(K,null,a),Object(f.d)(S,null,t),l?Object(f.d)(G,null,r):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,i,r=n("AcpX"),l=n("q1tI"),o=n("vOnD"),s=n("qKvR"),u=o.a.div(a||(a=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),d=o.a.div(i||(i=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function c(e){var t=e.variants,n=e.isRecommendation,a=Object(l.useState)("2.x"),i=a[0],r=a[1],o=Object(l.useCallback)((function(e){r(e.target.value)}),[]);return Object(s.d)(u,null,Object(s.d)("select",{value:i,onChange:o},Object(s.d)("option",{value:"1.x"},"Papupata 1.x"),Object(s.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(s.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(i,e)})).map((function(e){return Object(s.d)("div",{key:e},t[e])})))}},R9EA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n("NqE+"),r=n("TBFr"),l=n("+ego"),o=n("jqoI"),s=n("Kg6r"),u=n("Wbzz"),d=n("MaSA"),c=n("qKvR");t.default=function(){return Object(c.d)(l.a,null,Object(c.d)(i.a,null,Object(c.d)(r.a,null,Object(c.d)("h1",null,"Guide: setting up papupata for servers"),Object(c.d)(o.c,null,"In order to start implementing APIs on the server you need to configure papupata to let it know about its environment. This guide covers the most common cases and gives pointer for less common ones."),Object(c.d)(o.b,{content:[{heading:"Prerequisites",anchor:"prerequisites",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Before starting this guide, should know a little bit about API declarations. See"," ",Object(c.d)(u.a,{to:"/guides/declaring"},"Declaring APIs")," for more details."))},{heading:"The Basics",anchor:"basics",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"The one thing that is absolutely essential for implementing APIs, is providing papupata with either an express application or router, which it will declare its routes on."),Object(c.d)("p",null,"The configuration itself takes place using the ",Object(c.d)(o.a,null,"configure")," method of an API declaration."),Object(c.d)(s.c,null,"\n                    import express, {Router} from 'express'\n                    const app = express()\n                    const API = new APIDeclaration()\n                    API.configure({\n                      app\n                    })\n                  "),Object(c.d)(s.c,null,"\n                    const router = Router()\n                    app.use(router)\n                    API.configure({\n                      router\n                    })\n                  "))},{heading:"Automatic route implementation",anchor:"automatic",content:Object(c.d)(a.Fragment,null,Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                            API.configure({\n                              ...API.getConfig(),\n                              autoImplementAllAPIs: true\n                            })"),"2.x":Object(c.d)("p",null,"There is not configuration as this is enabled by default.")}}),Object(c.d)("p",null,"If you are going to implement all, or at least the vast majority of the APIs that have been declared using papupata with papupata, it makes sense to have papupata automatically set up all routes to return 501 Not Implemented until the routes are actually implemented."),Object(c.d)("p",null,"This is the default in papupata 2.x and can be turned off by explicitly setting the option to false."),Object(c.d)(s.c,null,"\n                    API.updateConfig({                              \n                      autoImplementAllAPIs: false\n                    })"),Object(c.d)("p",null,"Having the setting enabled it obvious what is wrong if you try to invoke an API that lacks implementation. There is a more important effect to this as well, as it means that routes are implemented in the order they were declared in, rather than the order they are implemented in. Usually this does not make a difference, but sometimes the routing can be ambiguous, with the order being the deciding factor. Consider this example:")," ",Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                          const api1 = API.declareGetAPI('/entries/all').response<any>()\n                          const api2 = API.declareGetAPI('/entries/:id').params(['id'] as const).response<any>()\n                        "),"2.x":Object(c.d)(s.c,null,"\n                          const api1 = API.declareGetAPI('/entries/all').response<any>()\n                          const api2 = API.declareGetAPI('/entries/:id').params({id: String}}).response<any>()\n                        ")}}),Object(c.d)("p",null,"It's quite obvious reading it that the intent is that /entries/all goes to api1, and, say, /entries/123 goes to api2. There is however nothing that inherently says that /entries/all shouldn't be handled by api2. Unless the"," ",Object(c.d)(o.a,null,"autoImplementAllAPIs")," setting is set to true, then you'd have to make sure that implementing api1 takes place before api2 is implemented. With the setting set to true though, it is enough for api1 to be declared before api2, as is the case in the example."),Object(c.d)("p",null,"With this setting enabled it is still possible for individual routes to fall back to regular express routing, allowing the implementation to be done in other ways. This is done by having the implementation or a middleware leading to it return ",Object(c.d)(o.a,null,"papupata.skipHandlingRoute")),Object(c.d)(s.c,null,"\n                    import {skipHandlingRoute} from 'papupata'\n                    api1.implement(() => skipHandlingRoute)\n                  "),Object(c.d)("p",null,"Papupata 2.x also allows you to declare your desire not to have a route be implemented using papupata in the declarations itself."),Object(c.d)(s.c,null,"\n                    const api3 = API.declareGetAPI('/another', {}, { disableAutoImplement: true})\n                  "))},{heading:"Base URL",anchor:"baseURL",content:Object(c.d)(a.Fragment,null,Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                            API.configure({\n                              ...API.getConfig(),\n                              baseURL: 'https://www.example.com'\n                            })"),"2.x":Object(c.d)(s.c,null,"\n                            API.updateConfig({\n                              baseURL: 'https://www.example.com'\n                            })")}}),Object(c.d)("p",null,"Setting up the base url is essential for clients, but it can be useful for servers as well. With a base url set up, you can call the ",Object(c.d)(o.a,null,"getURL")," method on the declarations, which can be useful for redirections, callback urls etc."),Object(c.d)("p",null,"Just for the purpose of implementing routes it is unnecessary."))},{heading:"Non-root routers",anchor:"nonroot",content:Object(c.d)(a.Fragment,null,Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                          API.configure({\n                            ...API.getConfig(),\n                            routerAt: '/api'\n                          })\n                          "),"2.x":Object(c.d)(s.c,null,"\n                            API.updateConfig({                              \n                              routerAt: '/api'\n                            })\n                            ")}}),Object(c.d)("p",null,"You might find it convenient to set up papupata implementation on an express router that is not at the root of the server. As a common example, you might want to set up the router to be under /api so that its middleware is only applied to API calls."),Object(c.d)("p",null,"This is a supported scenario -- all you have to do is add the ",Object(c.d)(o.a,null,"routerAt")," option to the configuration to tell papupata where the router is mounted at."),Object(c.d)("p",null,"All of the APIs in the declaration to be within the router path -- you cannot have routes at paths where they cannot be implemented"),Object(c.d)(s.c,null,"\n                  import express, {Router} from 'express'\n                  import {APIDeclaration} from 'papupata'\n\n                  const API = new APIDeclaration()\n                  const getOne = API.declareGetAPI('/api/getOne').response<any>()\n                  const app = express()\n                  const router = Router()\n                  router.use(authenticationMiddleware)\n                  app.use('/api', router)\n\n                  API.configure({\n                    router,\n                    routerAt: '/api'\n                  })\n                  "))},{heading:"Middleware",anchor:"middleware",content:Object(c.d)(a.Fragment,null,Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                          API.configure({\n                            ...API.getConfig(),\n                            inherentMiddleware: [myMiddleware1, myMiddleware2]\n                          })\n                          "),"2.x":Object(c.d)(s.c,null,"\n                          API.updateConfig({\n                            inherentMiddleware: [myMiddleware1, myMiddleware2]\n                          })\n                          ")}}),Object(c.d)("p",null,"Papupata supports middleware, which can be used on the server to process both requests and responses. For more details see ",Object(c.d)(u.a,{to:"/guides/server/middleware"},"the middleware guide"),"."),Object(c.d)("p",null,"Papupata comes with one built-in middleware that changes how undefined responses are handled. Currently an implementation returning undefined is taken as an indication that it takes full responsibility for handling the response."),Object(c.d)("p",null,"In practice though, a more likely scenario is that the API has nothing to return, and having returning undefined result in HTTP 204 (no content) would be better. And that is exactly what the middleware does."),Object(c.d)("p",null,"Here's an overview of what it actually does:"),Object(c.d)("ul",null,Object(c.d)("li",null,"If headers have already been sent, it does nothing (this still lets you have APIs that take care of the whole response on their own)"),Object(c.d)("li",null,"If status was not explicitly set, it sets it to 204"),Object(c.d)("li",null,"It sends a response to the client with no data")),Object(c.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(s.c,null,"\n                            import {handleUndefinedResponsesMiddleware} from 'papupata'\n                            API.configure({\n                              ...API.getConfig(),\n                              inherentMiddleware: [handleUndefinedResponsesMiddleware]\n                            })\n\n                            api1.implement(() => {}) // results in a 204 response\n                            api2.implement((_req, res) => {res.redirect('/')}) // the redirection works as expected\n                            api3.implement((_req, res) => {res.status(400)}) // status 400, response is sent with no data\n                            api4.implement((_req, res) => {res.send('done')}) // nothing special happens\n                          "),"2.x":Object(c.d)(s.c,null,"\n                            import {handleUndefinedResponsesMiddleware} from 'papupata'\n                            API.updateConfig({\n                              inherentMiddleware: [handleUndefinedResponsesMiddleware]\n                            })\n\n                            api1.implement(() => {}) // results in a 204 response\n                            api2.implement((_req, res) => {res.redirect('/')}) // the redirection works as expected\n                            api3.implement((_req, res) => {res.status(400)}) // status 400, response is sent with no data\n                            api4.implement((_req, res) => {res.send('done')}) // nothing special happens\n                          ")}}))},{heading:"Conclusion",anchor:"conclusion",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Now that papupata is set up to respond to requests, the next step should be actually implementing the APIs."),Object(c.d)("p",null,"See ",Object(c.d)(u.a,{to:"/guides/server/implementing"},"implementing APIs")," for how to do exactly that."),Object(c.d)("p",null,"If you are concerned with how papupata interacts with your existing express APIs and middleware, you could also take a look at ",Object(c.d)(u.a,{to:"/guides/server/interactingWithExpress"},"Interacting with express"),"."))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var a,i,r,l=n("AcpX"),o=(n("q1tI"),n("Kg6r")),s=n("vOnD"),u=n("qKvR");function d(e){var t=e.children;return Object(u.d)(o.j,null,Object(u.d)(o.k,null,"Overview"),t)}var c=s.a.h4(a||(a=Object(l.a)([""]))),p=s.a.h5(i||(i=Object(l.a)(["\n  font-size: 1.1em;\n"])));function b(e){var t=e.content;return Object(u.d)("div",null,Object(u.d)(o.j,null,Object(u.d)(o.k,null,"Table of contents"),Object(u.d)("ul",null,t.map((function(e){return Object(u.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(u.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:c;return Object(u.d)(o.j,{id:e.anchor,key:e.anchor},Object(u.d)(t,null,e.heading),e.content)})))}var h=s.a.span(r||(r=Object(l.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-server-setup-tsx-09561374c42cc8f1ed2d.js.map