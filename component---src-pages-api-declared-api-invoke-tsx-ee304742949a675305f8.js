(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"3KYE":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("q1tI"),a=r.createContext(!1)},Kg6r:function(e,n,t){"use strict";t.d(n,"j",(function(){return h})),t.d(n,"k",(function(){return y})),t.d(n,"i",(function(){return P})),t.d(n,"a",(function(){return q})),t.d(n,"n",(function(){return I})),t.d(n,"h",(function(){return x})),t.d(n,"g",(function(){return T})),t.d(n,"f",(function(){return w})),t.d(n,"b",(function(){return k})),t.d(n,"e",(function(){return D})),t.d(n,"c",(function(){return R})),t.d(n,"d",(function(){return K})),t.d(n,"m",(function(){return C})),t.d(n,"l",(function(){return N}));var r=t("AcpX"),a=(t("nKUr"),t("vOnD")),l=t("q1tI"),u=t.n(l),c=t("P+0o"),i=t("3KYE"),d=t("qKvR");function o(){var e=Object(r.a)([""]);return o=function(){return e},e}function b(){var e=Object(r.a)([""]);return b=function(){return e},e}function s(){var e=Object(r.a)([""]);return s=function(){return e},e}function p(){var e=Object(r.a)([""]);return p=function(){return e},e}function O(){var e=Object(r.a)([""]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return j=function(){return e},e}function f(){var e=Object(r.a)([""]);return f=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function v(){var e=Object(r.a)([""]);return v=function(){return e},e}var h=a.a.section(v()),y=a.a.h4(m()),g=a.a.h5(f()),A=a.a.section(j()),P=function(e){var n=e.children;return Object(d.d)(h,null,Object(d.d)(y,null,"Purpose"),n)},q=function(e){var n=e.version;return Object(d.d)(h,null,Object(d.d)(y,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},I=function(e){var n=e.children;return Object(d.d)(h,null,Object(d.d)(y,null,"Usage"),n)},x=function(e){var n=e.children,t=e.includeAvailableFrom,r=e.label;return Object(d.d)(h,null,Object(d.d)(i.a.Provider,{value:!!t},Object(d.d)(y,null,"Parameters",r&&": "+r),n?Object(d.d)("table",null,Object(d.d)("thead",null,Object(d.d)("tr",null,Object(d.d)("th",null,"Name"),Object(d.d)("th",null,"Type"),Object(d.d)("th",null,"Description"),t&&Object(d.d)("th",null,"Introduced in"))),Object(d.d)("tbody",null,n)):Object(d.d)("p",null,"There are no parameters.")))},T=function(e){var n=e.children,t=e.name,r=e.dataType,a=e.availableFrom,l=void 0===a?"1.0.0":a,c=u.a.useContext(i.a);return Object(d.d)("tr",null,Object(d.d)("td",null,t),Object(d.d)("td",null,r),Object(d.d)("td",null,n),c&&Object(d.d)("td",null,l))},w=function(e){var n=e.children;return Object(d.d)(h,null,Object(d.d)(y,null,"Returns"),n)},k=function(e){var n=e.children;return Object(d.d)(h,null,Object(d.d)(y,null,"Caveats"),n)},D=function(e){var n=e.children;return Object(d.d)(h,null,Object(d.d)(y,null,"Examples"),n)},R=function(e){var n=e.children,t=e.label;return Object(d.d)(u.a.Fragment,null,t&&Object(d.d)(g,null,t),Object(d.d)(c.a,{language:"typescript"},n))},K=function(e){var n=e.children;return Object(d.d)(A,null,Object(d.d)(g,null,"Common to examples below:"),n)},C=function(e){var n=e.children,t=e.includeAvailableFrom;return Object(d.d)(h,null,Object(d.d)(y,null,"Type parameeters"),Object(d.d)(i.a.Provider,{value:!!t},Object(d.d)(y,null,"Parameters"),n?Object(d.d)("table",null,Object(d.d)("thead",null,Object(d.d)("tr",null,Object(d.d)("th",null,"Name"),Object(d.d)("th",null,"Default value"),Object(d.d)("th",null,"Description"),t?Object(d.d)("th",null,"Introduced in"):"")),Object(d.d)("tbody",null,n)):Object(d.d)("p",null,"There are no parameters.")))},U=a.a.tr(O()),F=a.a.td(p()),S=a.a.td(s()),E=a.a.td(b()),B=a.a.td(o()),N=function(e){var n=e.children,t=e.name,r=e.defaultValue,a=e.availableFrom,l=void 0===a?"none":a,c=u.a.useContext(i.a);return Object(d.d)(U,null,Object(d.d)(F,null,t),Object(d.d)(S,null,r),Object(d.d)(E,null,n),c?Object(d.d)(B,null,l):"")}},MaSA:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("AcpX"),a=(t("nKUr"),t("q1tI")),l=t("vOnD"),u=t("qKvR");function c(){var e=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"]);return c=function(){return e},e}function i(){var e=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]);return i=function(){return e},e}var d=l.a.div(i()),o=l.a.div(c());function b(e){var n=e.variants,t=e.isRecommendation,r=Object(a.useState)("2.x"),l=r[0],c=r[1],i=Object(a.useCallback)((function(e){c(e.target.value)}),[]);return Object(u.d)(d,null,Object(u.d)("select",{value:l,onChange:i},Object(u.d)("option",{value:"1.x"},"Papupata 1.x"),Object(u.d)("option",{value:"2.x"},"Papupata 2.x")),t&&Object(u.d)(o,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(n).filter((function(e){return function(e,n){return"*"===n||n===e}(l,e)})).map((function(e){return Object(u.d)("div",{key:e},n[e])})))}},eCjl:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));t("nKUr"),t("72eQ");var r=t("+ego"),a=t("NqE+"),l=t("TBFr"),u=t("Kg6r"),c=(t("q1tI"),t("MaSA")),i=t("qKvR"),d="Options passed to the request. These have no inherent meaning in papupata, but can be used by\nthe requestAdapter function defined by the application. The type of this parameter is set by the RequestOptions type parameter\nof the API declaration.\n";function o(){return Object(i.d)(r.a,null,Object(i.d)(a.a,null,Object(i.d)(l.a,null,Object(i.d)("h1",null,"API Reference"),Object(i.d)("h2",null,"class DeclaredAPI"),Object(i.d)("h3",null,"method invoke")),Object(i.d)(u.i,null,"Calls the declared API"),Object(i.d)(u.n,null,"In the simplest for mall query parameters (including body) are passed as a single object. The invocation mechanisms spreads them out to the declared containers automatically. There are overload for different uses, however, listed below."),Object(i.d)(u.h,{label:"All parameters in one"},Object(i.d)(u.g,{name:"params",dataType:"Object"},"All parameters to the API"),Object(i.d)(u.g,{name:"requestOptions",dataType:"varies"},d)),Object(i.d)(u.h,{label:"Separate body"},Object(i.d)(u.g,{name:"body",dataType:"Varies"},"Body to be sent to the API. The data type is specified by the route."),Object(i.d)(u.g,{name:"params",dataType:"Object"},"All parameters to the API, excluding body"),Object(i.d)(u.g,{name:"requestOptions",dataType:"varies"},d)),Object(i.d)(u.f,null,"Promise<ResponseType>"),Object(i.d)(u.b,null,Object(i.d)("ul",null,Object(i.d)("li",null,"Base URL and requestAdapter function must be configured or the function will throw."),Object(i.d)("li",null,"There is no validation for the data returned by the server, it is assumed to be of the correct shape"),Object(i.d)("li",null,"Error handling is adapter-dependant."))),Object(i.d)(u.e,null," ",Object(i.d)(c.a,{isRecommendation:!0,variants:{"1.x":Object(i.d)(u.c,{label:"Declaration"},"\n                    import { APIDeclaration } from 'papupata'\n                    const api = new APIDeclaration()\n                    const myAPI = api.declarePostAPI('/do-stuff/:param')\n                      .params(['param'] as const)\n                      .query(['q'] as const)\n                      .body<{key: string}>()\n                      .response<string>()\n                  "),"2.x":Object(i.d)(u.c,{label:"Declaration"},"\n                    import { APIDeclaration } from 'papupata'\n                    const api = new APIDeclaration()\n                    const myAPI = api.declarePostAPI('/do-stuff/:param')\n                      .params({param: String})\n                      .query({q: String})\n                      .body<{key: string}>()\n                      .response<string>()\n                  ")}}),Object(i.d)(u.c,{label:"Usage in implementation"},"\n            myAPI.implement(req => {\n              const {q} = req.query,\n                {param} = req.params,\n                {key} = req.body\n              return [param, q, key].join()\n            })\n          "),Object(i.d)(u.c,{label:"Usage in invocation"},"\n            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})\n            // Response in the example will be abc,def,ghi\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-invoke-tsx-ee304742949a675305f8.js.map