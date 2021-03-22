(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"2ZtW":function(e,t,n){"use strict";n.r(t);n("72eQ");var a=n("q1tI"),r=n("Kg6r"),o=n("TBFr"),s=n("jqoI"),i=n("NqE+"),u=n("MaSA"),l=n("+ego"),c=n("qKvR");t.default=function(){return Object(c.d)(l.a,null,Object(c.d)(i.a,null,Object(c.d)(o.a,null,Object(c.d)("h1",null,"Guide: testing APIs"),Object(c.d)(s.c,null,"Testing can be tricky. This guide provides some ideas on how you could test APIs implemented using papupata."),Object(c.d)(s.b,{content:[{heading:"Before starting",anchor:"before",content:Object(c.d)("div",null,Object(c.d)("p",null,"The following is assumed to be present for the examples in this guide:")," ",Object(c.d)(u.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(r.c,null,"\n                          import {APIDeclaration} from 'papupata'\n                          const API = new APIDeclaration()\n\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params(['id'] as const)\n                            .query(['author'] as const)\n                            .optionalQuery(['timestamp'] as const)\n                            .queryBool(['notifyWatchers'] as const)\n                            .body<{ name: string}>()\n                            .response<{status: string }>()\n                        "),"2.x":Object(c.d)(r.c,null,"\n                          import {APIDeclaration} from 'papupata'\n                          const API = new APIDeclaration()\n\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params({id: String})\n                            .query({author: String, notifyWatchers: Boolean}})\n                            .optionalQuery({timestamp: String})\n                            .body<{ name: string}>()\n                            .response<{status: string }>()\n                        ")}}))},{heading:"The Basics",anchor:"basics",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"As papupata is typically used as a part of an express application you always have the option of using whatever tools you use to test the rest of your express application."),Object(c.d)("p",null,"The key to doing this is setting up a base URL on the papupata APIDeclaration and then using the getURL method of the individual APIs to figure out what to call."),Object(c.d)(r.c,null,"\n                    API.configure({baseURL: 'http://localhost:3000'})\n\n                    const response = await request.post(api.getURL({}))\n                    expect(request).toEqual({ok: true})\n                  "),Object(c.d)("p",null,"There are a few downsides to doing this, though. For one, you are not taking advantage of types present in the APIs, so typescript will not be able to warn you if you are sending invalid data to the API. Second, by having the whole express application present you are testing the whole server implementation, including middleware, even if you wanted to do unit testing."),Object(c.d)("p",null,"Let's look into some other options"))},{heading:"Just testing the implementation",anchor:"implementation",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"For the purpose of unit testing, you'll probably want to test just the implementation of the API. Once implemented, the actual implementation can be accessed as ",Object(c.d)(s.a,null,"api.implementation"),". You can call it directly from your tests, although you might find it inconvenient because you have to supply request and response to the function."),Object(c.d)(r.c,null,"\n                    const response = await api.implementation(request, response)\n                  "),Object(c.d)("p",null,"In practice, you'll want a helper of some kind to deal with setting up the objects."))},{heading:"Having papupata call the implementation",anchor:"directRequestAdapter",level:1,content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"You can configure your tests to act as the papupata client, allowing you to use the normal papupata calls to test your API. The big advantage is having the syntax be exactly what the real client would use. There is a potential downside for clarity though: as this approach is focused on unit testing, you might want to reserve this syntax for making API calls that go through the full middleware stack. If that is the case, consider other options."),Object(c.d)("p",null,"So, let's configure a client. We are using an experimental adapter for the job; it provides only a very minimal request and response as well as error handling. If it is too limited for your needs, feel free to use the code for the adapter to build your own."),Object(c.d)(u.a,{variants:{"1.x":Object(c.d)(r.c,null,"\n                            import createAdapter from 'papupata/dist/main/invokeImplementationAdapter'\n                            API.configure({\n                              ...API.getConfig(),\n                              baseURL: '', // the value is not relevant, but must be a string\n                              makeRequest: createAdapter()\n                            })\n                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                          "),"2.x":Object(c.d)(r.c,null,"\n                          import createAdapter from 'papupata/adapters/invokeImplementation'\n                          API.updateConfig({\n                            baseURL: '', // the value is not relevant, but must be a string\n                            requestAdapter: createAdapter()\n                          })\n                          const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                        ")}}),Object(c.d)("p",null,"The adapters supports a few options that make your life easier:"),Object(c.d)("ul",null,Object(c.d)("li",null,Object(c.d)(s.a,null,"createRequest")," for setting up the request as you need (with, say, headers, session etc)",Object(c.d)(r.c,null,"\n                        const requestAdapter = createAdapter({\n                          createRequest: () => ({ headers: { 'authorization': 'bearer 123'}})\n                        })\n                      ")),Object(c.d)("li",null,Object(c.d)(s.a,null,"assertResponse")," for making assertions about the response beyond just the data",Object(c.d)(r.c,null,"\n                        const requestAdapter = createAdapter({\n                          assertResponse: res => expect(res.statusCode).toEqual(400)\n                        })\n                      ")),Object(c.d)("li",null,Object(c.d)(s.a,null,"withMiddleware"),", which enables the use of middleware for the request",Object(c.d)(r.c,null,"\n                        const requestAdapter = createAdapter({\n                          withMiddleware: true\n                        })\n                      "))))},{heading:"Call the implementation with a helper function",anchor:"directWithHelper",level:1,content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"With properly designed helper function you can call the implementation indirectly with full type safety. Papupata comes with an experimental function that might or might not be good enough for your use case. If you need additional features, feel free to use the provided function as a template to work on."),Object(c.d)(u.a,{variants:{"1.x":Object(c.d)(r.c,null,"\n                          import testInvoke from 'papupata/dist/main/testInvoker'\n                          const response = await invoker(api, {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                        "),"2.x":Object(c.d)(r.c,null,"\n                          import testInvoke from 'papupata/invokers/test'\n                          const response = await invoker(api, {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                        ")}}),Object(c.d)("p",null,"The test invoker supports the same options as invokeImplementationAdapter described above."),Object(c.d)(r.c,null,"\n                    const response = await invoker(api, data, { withMiddleware: true })\n                  "))},{heading:"Full stack tests",anchor:" fullStack",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"For full stack tests you'd be best off setting up papupata to make the calls as if it's the real client."),Object(c.d)("p",null,"If you are setting up the express server with your own code for your tests, you might want to use the request-promise adapter or write your own if you use something else."),Object(c.d)(u.a,{variants:{"1.x":Object(c.d)(r.c,null,"\n                            import createRequestAdapter from 'papupata/dist/main/request-promise-adapter'\n                            API.configure({\n                              ...API.getConfig(),\n                              baseURL: `http://localhost:${port}`\n                              makeRequest: createRequestAdapter('json')\n                            })\n                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                          "),"2.x":Object(c.d)(r.c,null,"\n                            import createRequestAdapter from 'papupata/adapters/requestPromise'\n                            API.updateConfig({\n                              baseURL: `http://localhost:${port}`\n                              requestAdapter: createRequestAdapter('json')\n                            })\n                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                          ")}}),Object(c.d)("p",null,"If you are using supertest, you can use adapter specifically made for it instead."),Object(c.d)(u.a,{variants:{"1.x":Object(c.d)(r.c,null,"\n                            import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'\n\n                            const supertestRequest = supertest(app) // express app\n                            API.configure({\n                              ...API.getConfig(),\n                              baseURL: '', // The value must be an empty string\n                              makeRequest: createSupertestAdapter(supertestRequest)\n                            })\n                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                          "),"2.x":Object(c.d)(r.c,null,"\n                            import createSupertestAdapter from 'papupata/adapters/supertest'\n\n                            const supertestRequest = supertest(app) // express app\n                            API.updateConfig({\n                              baseURL: '', // The value must be an empty string\n                              requestAdapter: createSupertestAdapter(supertestRequest)\n                            })\n                            const response = await api({id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'})\n                          ")}}),Object(c.d)("p",null,"If you wish to access the actual supertest request for your assertions, you can instead use supertest invoker."),Object(c.d)(u.a,{variants:{"1.x":Object(c.d)(r.c,null,"\n                            import supertestInvoker from 'papupata/dist/main/supertestInvoker'\n\n                            API.configure({\n                              ...API.getConfig(),\n                              baseURL: '', // The value must be an empty string\n                            })\n\n                            const supertestRequest = supertest(app) // express app\n                            const data = {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'}\n\n                            await invokeSupertest(supertestRequest, api, data)\n                              .expect(200)\n                          "),"2.x":Object(c.d)(r.c,null,"\n                            import supertestInvoker from 'papupata/invokers/supertest'\n\n                            API.updateConfig({\n                              baseURL: '', // The value must be an empty string\n                            })\n\n                            const supertestRequest = supertest(app) // express app\n                            const data = {id: '1', author: 'Sinead', notifyWatchers: false, name: 'Ulrich'}\n\n                            await invokeSupertest(supertestRequest, api, data)\n                              .expect(200)\n                          ")}}))}]}))))}},"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),r=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return A})),n.d(t,"a",(function(){return I})),n.d(t,"n",(function(){return q})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return k})),n.d(t,"f",(function(){return P})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return S})),n.d(t,"c",(function(){return U})),n.d(t,"d",(function(){return T})),n.d(t,"m",(function(){return C})),n.d(t,"l",(function(){return B}));var a,r,o,s,i,u,l,c,d,p=n("AcpX"),b=n("vOnD"),h=n("q1tI"),f=n.n(h),m=n("P+0o"),j=n("3KYE"),O=n("qKvR"),g=b.a.section(a||(a=Object(p.a)([""]))),v=b.a.h4(r||(r=Object(p.a)([""]))),y=b.a.h5(o||(o=Object(p.a)([""]))),w=b.a.section(s||(s=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),A=function(e){var t=e.children;return Object(O.d)(g,null,Object(O.d)(v,null,"Purpose"),t)},I=function(e){var t=e.version;return Object(O.d)(g,null,Object(O.d)(v,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},q=function(e){var t=e.children;return Object(O.d)(g,null,Object(O.d)(v,null,"Usage"),t)},x=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(O.d)(g,null,Object(O.d)(j.a.Provider,{value:!!n},Object(O.d)(v,null,"Parameters",a&&": "+a),t?Object(O.d)("table",null,Object(O.d)("thead",null,Object(O.d)("tr",null,Object(O.d)("th",null,"Name"),Object(O.d)("th",null,"Type"),Object(O.d)("th",null,"Description"),n&&Object(O.d)("th",null,"Introduced in"))),Object(O.d)("tbody",null,t)):Object(O.d)("p",null,"There are no parameters.")))},k=function(e){var t=e.children,n=e.name,a=e.dataType,r=e.availableFrom,o=void 0===r?"1.0.0":r,s=f.a.useContext(j.a);return Object(O.d)("tr",null,Object(O.d)("td",null,n),Object(O.d)("td",null,a),Object(O.d)("td",null,t),s&&Object(O.d)("td",null,o))},P=function(e){var t=e.children;return Object(O.d)(g,null,Object(O.d)(v,null,"Returns"),t)},R=function(e){var t=e.children;return Object(O.d)(g,null,Object(O.d)(v,null,"Caveats"),t)},S=function(e){var t=e.children;return Object(O.d)(g,null,Object(O.d)(v,null,"Examples"),t)},U=function(e){var t=e.children,n=e.label;return Object(O.d)(f.a.Fragment,null,n&&Object(O.d)(y,null,n),Object(O.d)(m.a,{language:"typescript"},t))},T=function(e){var t=e.children;return Object(O.d)(w,null,Object(O.d)(y,null,"Common to examples below:"),t)},C=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(O.d)(g,null,Object(O.d)(v,null,"Type parameeters"),Object(O.d)(j.a.Provider,{value:!!n},Object(O.d)(v,null,"Parameters"),t?Object(O.d)("table",null,Object(O.d)("thead",null,Object(O.d)("tr",null,Object(O.d)("th",null,"Name"),Object(O.d)("th",null,"Default value"),Object(O.d)("th",null,"Description"),n?Object(O.d)("th",null,"Introduced in"):"")),Object(O.d)("tbody",null,t)):Object(O.d)("p",null,"There are no parameters.")))},W=b.a.tr(i||(i=Object(p.a)([""]))),F=b.a.td(u||(u=Object(p.a)([""]))),L=b.a.td(l||(l=Object(p.a)([""]))),D=b.a.td(c||(c=Object(p.a)([""]))),K=b.a.td(d||(d=Object(p.a)([""]))),B=function(e){var t=e.children,n=e.name,a=e.defaultValue,r=e.availableFrom,o=void 0===r?"none":r,s=f.a.useContext(j.a);return Object(O.d)(W,null,Object(O.d)(F,null,n),Object(O.d)(L,null,a),Object(O.d)(D,null,t),s?Object(O.d)(K,null,o):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r,o=n("AcpX"),s=n("q1tI"),i=n("vOnD"),u=n("qKvR"),l=i.a.div(a||(a=Object(o.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),c=i.a.div(r||(r=Object(o.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function d(e){var t=e.variants,n=e.isRecommendation,a=Object(s.useState)("2.x"),r=a[0],o=a[1],i=Object(s.useCallback)((function(e){o(e.target.value)}),[]);return Object(u.d)(l,null,Object(u.d)("select",{value:r,onChange:i},Object(u.d)("option",{value:"1.x"},"Papupata 1.x"),Object(u.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(u.d)(c,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(r,e)})).map((function(e){return Object(u.d)("div",{key:e},t[e])})))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var a,r,o,s=n("AcpX"),i=(n("q1tI"),n("Kg6r")),u=n("vOnD"),l=n("qKvR");function c(e){var t=e.children;return Object(l.d)(i.j,null,Object(l.d)(i.k,null,"Overview"),t)}var d=u.a.h4(a||(a=Object(s.a)([""]))),p=u.a.h5(r||(r=Object(s.a)(["\n  font-size: 1.1em;\n"])));function b(e){var t=e.content;return Object(l.d)("div",null,Object(l.d)(i.j,null,Object(l.d)(i.k,null,"Table of contents"),Object(l.d)("ul",null,t.map((function(e){return Object(l.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(l.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:d;return Object(l.d)(i.j,{id:e.anchor,key:e.anchor},Object(l.d)(t,null,e.heading),e.content)})))}var h=u.a.span(o||(o=Object(s.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-server-testing-tsx-5f12acf5999a8ae80f36.js.map