(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),r=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return P})),n.d(t,"a",(function(){return q})),n.d(t,"n",(function(){return I})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return T})),n.d(t,"f",(function(){return w})),n.d(t,"b",(function(){return k})),n.d(t,"e",(function(){return D})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return C})),n.d(t,"m",(function(){return K})),n.d(t,"l",(function(){return N}));var a,r,l,c,d,u,i,o,b,s=n("AcpX"),p=n("vOnD"),O=n("q1tI"),j=n.n(O),f=n("P+0o"),m=n("3KYE"),h=n("qKvR"),v=p.a.section(a||(a=Object(s.a)([""]))),y=p.a.h4(r||(r=Object(s.a)([""]))),g=p.a.h5(l||(l=Object(s.a)([""]))),A=p.a.section(c||(c=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),P=function(e){var t=e.children;return Object(h.d)(v,null,Object(h.d)(y,null,"Purpose"),t)},q=function(e){var t=e.version;return Object(h.d)(v,null,Object(h.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},I=function(e){var t=e.children;return Object(h.d)(v,null,Object(h.d)(y,null,"Usage"),t)},x=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(h.d)(v,null,Object(h.d)(m.a.Provider,{value:!!n},Object(h.d)(y,null,"Parameters",a&&": "+a),t?Object(h.d)("table",null,Object(h.d)("thead",null,Object(h.d)("tr",null,Object(h.d)("th",null,"Name"),Object(h.d)("th",null,"Type"),Object(h.d)("th",null,"Description"),n&&Object(h.d)("th",null,"Introduced in"))),Object(h.d)("tbody",null,t)):Object(h.d)("p",null,"There are no parameters.")))},T=function(e){var t=e.children,n=e.name,a=e.dataType,r=e.availableFrom,l=void 0===r?"1.0.0":r,c=j.a.useContext(m.a);return Object(h.d)("tr",null,Object(h.d)("td",null,n),Object(h.d)("td",null,a),Object(h.d)("td",null,t),c&&Object(h.d)("td",null,l))},w=function(e){var t=e.children;return Object(h.d)(v,null,Object(h.d)(y,null,"Returns"),t)},k=function(e){var t=e.children;return Object(h.d)(v,null,Object(h.d)(y,null,"Caveats"),t)},D=function(e){var t=e.children;return Object(h.d)(v,null,Object(h.d)(y,null,"Examples"),t)},R=function(e){var t=e.children,n=e.label;return Object(h.d)(j.a.Fragment,null,n&&Object(h.d)(g,null,n),Object(h.d)(f.a,{language:"typescript"},t))},C=function(e){var t=e.children;return Object(h.d)(A,null,Object(h.d)(g,null,"Common to examples below:"),t)},K=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(h.d)(v,null,Object(h.d)(y,null,"Type parameeters"),Object(h.d)(m.a.Provider,{value:!!n},Object(h.d)(y,null,"Parameters"),t?Object(h.d)("table",null,Object(h.d)("thead",null,Object(h.d)("tr",null,Object(h.d)("th",null,"Name"),Object(h.d)("th",null,"Default value"),Object(h.d)("th",null,"Description"),n?Object(h.d)("th",null,"Introduced in"):"")),Object(h.d)("tbody",null,t)):Object(h.d)("p",null,"There are no parameters.")))},F=p.a.tr(d||(d=Object(s.a)([""]))),S=p.a.td(u||(u=Object(s.a)([""]))),E=p.a.td(i||(i=Object(s.a)([""]))),U=p.a.td(o||(o=Object(s.a)([""]))),B=p.a.td(b||(b=Object(s.a)([""]))),N=function(e){var t=e.children,n=e.name,a=e.defaultValue,r=e.availableFrom,l=void 0===r?"none":r,c=j.a.useContext(m.a);return Object(h.d)(F,null,Object(h.d)(S,null,n),Object(h.d)(E,null,a),Object(h.d)(U,null,t),c?Object(h.d)(B,null,l):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a,r,l=n("AcpX"),c=n("q1tI"),d=n("vOnD"),u=n("qKvR"),i=d.a.div(a||(a=Object(l.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),o=d.a.div(r||(r=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function b(e){var t=e.variants,n=e.isRecommendation,a=Object(c.useState)("2.x"),r=a[0],l=a[1],d=Object(c.useCallback)((function(e){l(e.target.value)}),[]);return Object(u.d)(i,null,Object(u.d)("select",{value:r,onChange:d},Object(u.d)("option",{value:"1.x"},"Papupata 1.x"),Object(u.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(u.d)(o,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(r,e)})).map((function(e){return Object(u.d)("div",{key:e},t[e])})))}},eCjl:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o}));var a=n("+ego"),r=n("NqE+"),l=n("TBFr"),c=n("Kg6r"),d=(n("q1tI"),n("MaSA")),u=n("qKvR"),i="Options passed to the request. These have no inherent meaning in papupata, but can be used by\nthe requestAdapter function defined by the application. The type of this parameter is set by the RequestOptions type parameter\nof the API declaration.\n";function o(){return Object(u.d)(a.a,null,Object(u.d)(r.a,null,Object(u.d)(l.a,null,Object(u.d)("h1",null,"API Reference"),Object(u.d)("h2",null,"class DeclaredAPI"),Object(u.d)("h3",null,"method invoke")),Object(u.d)(c.i,null,"Calls the declared API"),Object(u.d)(c.n,null,"In the simplest for mall query parameters (including body) are passed as a single object. The invocation mechanisms spreads them out to the declared containers automatically. There are overload for different uses, however, listed below."),Object(u.d)(c.h,{label:"All parameters in one"},Object(u.d)(c.g,{name:"params",dataType:"Object"},"All parameters to the API"),Object(u.d)(c.g,{name:"requestOptions",dataType:"varies"},i)),Object(u.d)(c.h,{label:"Separate body"},Object(u.d)(c.g,{name:"body",dataType:"Varies"},"Body to be sent to the API. The data type is specified by the route."),Object(u.d)(c.g,{name:"params",dataType:"Object"},"All parameters to the API, excluding body"),Object(u.d)(c.g,{name:"requestOptions",dataType:"varies"},i)),Object(u.d)(c.f,null,"Promise<ResponseType>"),Object(u.d)(c.b,null,Object(u.d)("ul",null,Object(u.d)("li",null,"Base URL and requestAdapter function must be configured or the function will throw."),Object(u.d)("li",null,"There is no validation for the data returned by the server, it is assumed to be of the correct shape"),Object(u.d)("li",null,"Error handling is adapter-dependant."))),Object(u.d)(c.e,null," ",Object(u.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(u.d)(c.c,{label:"Declaration"},"\n                    import { APIDeclaration } from 'papupata'\n                    const api = new APIDeclaration()\n                    const myAPI = api.declarePostAPI('/do-stuff/:param')\n                      .params(['param'] as const)\n                      .query(['q'] as const)\n                      .body<{key: string}>()\n                      .response<string>()\n                  "),"2.x":Object(u.d)(c.c,{label:"Declaration"},"\n                    import { APIDeclaration } from 'papupata'\n                    const api = new APIDeclaration()\n                    const myAPI = api.declarePostAPI('/do-stuff/:param')\n                      .params({param: String})\n                      .query({q: String})\n                      .body<{key: string}>()\n                      .response<string>()\n                  ")}}),Object(u.d)(c.c,{label:"Usage in implementation"},"\n            myAPI.implement(req => {\n              const {q} = req.query,\n                {param} = req.params,\n                {key} = req.body\n              return [param, q, key].join()\n            })\n          "),Object(u.d)(c.c,{label:"Usage in invocation"},"\n            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})\n            // Response in the example will be abc,def,ghi\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-invoke-tsx-0edab5a1a12eb7304b74.js.map