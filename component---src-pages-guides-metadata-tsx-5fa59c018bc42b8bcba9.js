(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return x})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return P})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return I})),n.d(t,"f",(function(){return q})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return C})),n.d(t,"m",(function(){return F})),n.d(t,"l",(function(){return Y}));var a,l,o,r,c,u,i,d,s,p=n("AcpX"),b=n("vOnD"),h=n("q1tI"),O=n.n(h),j=n("P+0o"),m=n("3KYE"),f=n("qKvR"),y=b.a.section(a||(a=Object(p.a)([""]))),g=b.a.h4(l||(l=Object(p.a)([""]))),v=b.a.h5(o||(o=Object(p.a)([""]))),w=b.a.section(r||(r=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),x=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(f.d)(y,null,Object(f.d)(g,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},P=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Usage"),t)},T=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(y,null,Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},I=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,o=void 0===l?"1.0.0":l,r=O.a.useContext(m.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),r&&Object(f.d)("td",null,o))},q=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Returns"),t)},R=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Caveats"),t)},k=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Examples"),t)},B=function(e){var t=e.children,n=e.label;return Object(f.d)(O.a.Fragment,null,n&&Object(f.d)(v,null,n),Object(f.d)(j.a,{language:"typescript"},t))},C=function(e){var t=e.children;return Object(f.d)(w,null,Object(f.d)(v,null,"Common to examples below:"),t)},F=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(y,null,Object(f.d)(g,null,"Type parameeters"),Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},U=b.a.tr(c||(c=Object(p.a)([""]))),L=b.a.td(u||(u=Object(p.a)([""]))),S=b.a.td(i||(i=Object(p.a)([""]))),K=b.a.td(d||(d=Object(p.a)([""]))),D=b.a.td(s||(s=Object(p.a)([""]))),Y=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,o=void 0===l?"none":l,r=O.a.useContext(m.a);return Object(f.d)(U,null,Object(f.d)(L,null,n),Object(f.d)(S,null,a),Object(f.d)(K,null,t),r?Object(f.d)(D,null,o):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,l,o=n("AcpX"),r=n("q1tI"),c=n("vOnD"),u=n("qKvR"),i=c.a.div(a||(a=Object(o.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),d=c.a.div(l||(l=Object(o.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function s(e){var t=e.variants,n=e.isRecommendation,a=Object(r.useState)("2.x"),l=a[0],o=a[1],c=Object(r.useCallback)((function(e){o(e.target.value)}),[]);return Object(u.d)(i,null,Object(u.d)("select",{value:l,onChange:c},Object(u.d)("option",{value:"1.x"},"Papupata 1.x"),Object(u.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(u.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(l,e)})).map((function(e){return Object(u.d)("div",{key:e},t[e])})))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var a,l,o,r=n("AcpX"),c=(n("q1tI"),n("Kg6r")),u=n("vOnD"),i=n("qKvR");function d(e){var t=e.children;return Object(i.d)(c.j,null,Object(i.d)(c.k,null,"Overview"),t)}var s=u.a.h4(a||(a=Object(r.a)([""]))),p=u.a.h5(l||(l=Object(r.a)(["\n  font-size: 1.1em;\n"])));function b(e){var t=e.content;return Object(i.d)("div",null,Object(i.d)(c.j,null,Object(i.d)(c.k,null,"Table of contents"),Object(i.d)("ul",null,t.map((function(e){return Object(i.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(i.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:s;return Object(i.d)(c.j,{id:e.anchor,key:e.anchor},Object(i.d)(t,null,e.heading),e.content)})))}var h=u.a.span(o||(o=Object(r.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))},mvB3:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n("Kg6r"),o=n("TBFr"),r=n("jqoI"),c=n("NqE+"),u=n("MaSA"),i=n("+ego"),d=n("qKvR");t.default=function(){return Object(d.d)(i.a,null,Object(d.d)(c.a,null,Object(d.d)(o.a,null,Object(d.d)("h1",null,"Guide: accessing metadata"),Object(d.d)(r.c,null,"Papupata allows you to declare, call and implement APIs. Sometimes you need to do something slightly different though and need access to information about the API. This guide helps you with that."),Object(d.d)(r.b,{content:[{heading:"To begin with",anchor:"setup",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"It might be helpful fairly solid understanding of what papupata API declarations look like."),Object(d.d)("p",null,"In the examples presented in this guide, the following API declaration is assumed to be in the scope:")," ",Object(d.d)(u.a,{isRecommendation:!0,variants:{"1.x":Object(d.d)(l.c,null,"\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params(['id'] as const)\n                            .query(['author'] as const)\n                            .optionalQuery(['timestamp'] as const)\n                            .queryBool(['notifyWatchers'] as const)\n                            .body<{ name: string}>()\n                            .response<{status: string }>()\n                       "),"2.x":Object(d.d)(l.c,null,"\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params({id: String})\n                            .query({author: String, notifyWatchers: Boolean}})\n                            .optionalQuery({timestamp: String})\n                            .body<{ name: string}>()\n                            .response<{status: string }>()\n                       ")}}))},{heading:"URLs and methods",anchor:"endpoints",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"The most basic things, path and method as specified when declared the API can be accessed directly from the api object."),Object(d.d)(l.c,null,"\n                  const {method, path} = complexAPI\n                  // method: post\n                  // path: /update/:id\n                "),Object(d.d)("p",null,"The path might not be quite what you need though. Perhaps you want a full URL, with path and possibly query parameters already in place. This can be done with the ",Object(d.d)(r.a,null,"getURL")," method. Do note that the method requires"," ",Object(d.d)(r.a,null,"baseURL")," to be configured."),Object(d.d)(u.a,{isRecommendation:!0,variants:{"1.x":Object(d.d)(l.c,null,"\n                          API.configure({\n                            ...api.getConfig(),\n                            baseURL: 'https://www.example.com'\n                          })\n                          console.log(complexAPI.getURL({id: '123'})) \n                          // https://www.example.com/update/123\n\n                          console.log(complexAPI.getURL({id: '123', author: 'Bob'})) \n                          // https://www.example.com/update/123?author=Bob\n                  "),"2.x":Object(d.d)(l.c,null,"\n                          API.updateConfig({\n                            baseURL: 'https://www.example.com'\n                          })\n                          console.log(complexAPI.getURL({id: '123'})) \n                          // https://www.example.com/update/123\n\n                          console.log(complexAPI.getURL({id: '123', author: 'Bob'})) \n                          // https://www.example.com/update/123?author=Bob\n                  ")}}))},{heading:"Path and query parameters",anchor:"parameters",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"The names and types of path and query parameters are accessible from the ",Object(d.d)(r.a,null,"apiUrlParameters")," ","property of the api."),Object(d.d)(l.c,null,"\n                    const {(params, query, optionalQuery, boolQuery)} = api.apiUrlParameters\n                  "),"The are tuples in nature, but can be treated as arrays of strings.")},{heading:"Types",anchor:"types",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"This is where things get a little bit more interesting. You can't just export types from and object in typescript, but that's what an API is. Papupata uses a workaround for this problem which looks odd at first, but you get used to it quickly enough. That is, the api exports values that as far as typescript is concerned match the various types used by papupata, allowing the use of ",Object(d.d)(r.a,null,"typeof")," operator to access the actual type."))},{heading:"Response",anchor:"types_response",level:1,content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"Let's start with the type of the response."),Object(d.d)(l.c,null,"\n                    const ApiResponseType = typeof complexApi.ResponseType\n                  "),Object(d.d)("p",null,"In situations where the type of the response returned by the implementation is different from the one observed by the client, ",Object(d.d)(r.a,null,"ServerResponseType")," indicates the type the server is expected to return. If unspecified by the declaration, this is the same as ",Object(d.d)(r.a,null,"responseType.")),Object(d.d)(l.c,null,"\n                    type ApiResponseTypeOnClient = typeof complexApi.ResponseType\n                    type ApiResponseTypeOnServer = typeof complexApi.ServerResponseType\n                  "))},{heading:"Body",anchor:"types_body",level:1,content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"The body for the request follows the same pattern in the opposite direction, with ",Object(d.d)(r.a,null,"BodyType")," being the one observed by the server and ",Object(d.d)(r.a,null,"CallBodyType")," being the one used for API calls."),Object(d.d)(l.c,null,"\n                    type BodyTypeOnClient = typeof complexApi.CallBodyType\n                    type BodyTypeOnServer = typeof complexApi.BodyType\n                  "))},{heading:"Request",anchor:"types_requset",level:1,content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"The papupata request is an express request, possibly modified with your own fields as provided on the API declaration, but more importantly it has explicit types for params, query and body. You can access the request type for a specific API using its ",Object(d.d)(r.a,null,"RequestType")," property."),Object(d.d)(l.c,null,"\n                    type RequestType = typeof complexApi.RequestType\n                  "),Object(d.d)("p",null,"This can be especially useful when you want to use a named function as the implementation for an API."))},{heading:"Implementation",anchor:"implementation",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"You can get access to the current implementation and its middleware from the API. The primary use for this is for unit testing, but a clever individual can undoubtedly come up with other uses as well."),Object(d.d)(l.c,null,"\n                    const {implementation, implementationMiddleware} = complexApi\n                  "))}]}))))}}}]);
//# sourceMappingURL=component---src-pages-guides-metadata-tsx-5fa59c018bc42b8bcba9.js.map