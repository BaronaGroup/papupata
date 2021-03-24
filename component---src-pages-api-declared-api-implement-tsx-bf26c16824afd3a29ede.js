(window.webpackJsonp=window.webpackJsonp||[]).push([[24,23],{"0JqC":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return l}));t("nKUr"),t("72eQ");var r=t("0Zg6"),a=t("Kg6r"),u=t("qKvR");function l(){return Object(u.d)(r.default,{fnName:"implement",variantPurpose:null,middlewareParameter:null,examples:Object(u.d)(a.c,{label:"Usage in implementation"},"\nmyAPI.implement((req, res) => {\n  const {q} = req.query,\n    {param} = req.params,\n    {key} = req.body\n  res.set('x-my-header', 'Hello')\n  return [param, q, key].join()\n})\n")})}},"0Zg6":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));t("nKUr"),t("72eQ");var r=t("+ego"),a=t("NqE+"),u=t("TBFr"),l=t("Kg6r"),c=(t("q1tI"),t("MaSA")),i=t("qKvR");function o(e){var n=e.availableFrom,t=e.variantPurpose,o=e.middlewareParameter,d=e.fnName,s=e.examples;return Object(i.d)(r.a,null,Object(i.d)(a.a,null,Object(i.d)(u.a,null,Object(i.d)("h1",null,"API Reference"),Object(i.d)("h2",null,"class DeclaredAPI"),Object(i.d)("h3",null,"method ",d)),n&&Object(i.d)(l.a,{version:n}),Object(i.d)(l.i,null,"Implements an API using express. ",t),Object(i.d)(l.n,null,"Instead of calling the methods on an express app or router yourself, you use this function to have papupata do it for you."),Object(i.d)(l.h,null,o,Object(i.d)(l.g,{name:"implementation",dataType:"Function"},"A function that implements the route. Specified as follows",Object(i.d)(l.h,null,Object(i.d)(l.g,{name:"req",dataType:"Request"},"This is a typed express request -- that is, body, params and query have been replaced with typed versions of themselves."),Object(i.d)(l.g,{name:"res",dataType:"Response"},"Express response corresponding to the request.")),Object(i.d)(l.f,null,"ResponseType, ServerResponseType, or a promise of either"),Object(i.d)("ul",null,Object(i.d)("li",null,'Do note that the "next" parameter typically used in routes is not present'),Object(i.d)("li",null,"Anything thrown (includes returned rejected promises) is given to the usual next function"),Object(i.d)("li",null,"If undefined is returned, nothing is sent automatically. This could at times explain hanging requests. Of course, unless you explicitly declared the API to return undefined, you should see type errors, too.")))),Object(i.d)(l.f,null,"Nothing"),Object(i.d)(l.b,null,Object(i.d)("ul",null,Object(i.d)("li",null,"Either application of router must be configured or the function throws"),Object(i.d)("li",null,"You can implement an API multiple times, but it is unlikely to do you any good."),Object(i.d)("li",null,"There is at this time no way to cleanly implement an API that does not just return its value, and instead, say, streams it."))),Object(i.d)(l.e,null,Object(i.d)(c.a,{isRecommendation:!0,variants:{"1.x":Object(i.d)(l.c,{label:"Declaration"},"\n                    import { APIDeclaration } from 'papupata'\n                    const api = new APIDeclaration()\n                    const myAPI = api.declarePostAPI('/do-stuff/:param')\n                      .params(['param'] as const)\n                      .query(['q'] as const)\n                      .body<{key: string}>()\n                      .response<string>()\n                  "),"2.x":Object(i.d)(l.c,{label:"Declaration"},"\n                  import { APIDeclaration } from 'papupata'\n                  const api = new APIDeclaration()\n                  const myAPI = api.declarePostAPI('/do-stuff/:param')\n                    .params({param: String})\n                    .query({q: String})\n                    .body<{key: string}>()\n                    .response<string>()\n                ")}}),s,Object(i.d)(l.c,{label:"Usage in invocation"},"\n            const response = await myAPI({param: 'abc', q: 'def', key: 'ghi'})\n            // Response in the example will be abc,def,ghi\n          "))))}},"3KYE":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("q1tI"),a=r.createContext(!1)},Kg6r:function(e,n,t){"use strict";t.d(n,"j",(function(){return h})),t.d(n,"k",(function(){return y})),t.d(n,"i",(function(){return P})),t.d(n,"a",(function(){return q})),t.d(n,"n",(function(){return A})),t.d(n,"h",(function(){return I})),t.d(n,"g",(function(){return w})),t.d(n,"f",(function(){return T})),t.d(n,"b",(function(){return k})),t.d(n,"e",(function(){return D})),t.d(n,"c",(function(){return K})),t.d(n,"d",(function(){return R})),t.d(n,"m",(function(){return C})),t.d(n,"l",(function(){return J}));var r=t("AcpX"),a=(t("nKUr"),t("vOnD")),u=t("q1tI"),l=t.n(u),c=t("P+0o"),i=t("3KYE"),o=t("qKvR");function d(){var e=Object(r.a)([""]);return d=function(){return e},e}function s(){var e=Object(r.a)([""]);return s=function(){return e},e}function b(){var e=Object(r.a)([""]);return b=function(){return e},e}function p(){var e=Object(r.a)([""]);return p=function(){return e},e}function j(){var e=Object(r.a)([""]);return j=function(){return e},e}function O(){var e=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return O=function(){return e},e}function f(){var e=Object(r.a)([""]);return f=function(){return e},e}function m(){var e=Object(r.a)([""]);return m=function(){return e},e}function v(){var e=Object(r.a)([""]);return v=function(){return e},e}var h=a.a.section(v()),y=a.a.h4(m()),g=a.a.h5(f()),x=a.a.section(O()),P=function(e){var n=e.children;return Object(o.d)(h,null,Object(o.d)(y,null,"Purpose"),n)},q=function(e){var n=e.version;return Object(o.d)(h,null,Object(o.d)(y,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},A=function(e){var n=e.children;return Object(o.d)(h,null,Object(o.d)(y,null,"Usage"),n)},I=function(e){var n=e.children,t=e.includeAvailableFrom,r=e.label;return Object(o.d)(h,null,Object(o.d)(i.a.Provider,{value:!!t},Object(o.d)(y,null,"Parameters",r&&": "+r),n?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Type"),Object(o.d)("th",null,"Description"),t&&Object(o.d)("th",null,"Introduced in"))),Object(o.d)("tbody",null,n)):Object(o.d)("p",null,"There are no parameters.")))},w=function(e){var n=e.children,t=e.name,r=e.dataType,a=e.availableFrom,u=void 0===a?"1.0.0":a,c=l.a.useContext(i.a);return Object(o.d)("tr",null,Object(o.d)("td",null,t),Object(o.d)("td",null,r),Object(o.d)("td",null,n),c&&Object(o.d)("td",null,u))},T=function(e){var n=e.children;return Object(o.d)(h,null,Object(o.d)(y,null,"Returns"),n)},k=function(e){var n=e.children;return Object(o.d)(h,null,Object(o.d)(y,null,"Caveats"),n)},D=function(e){var n=e.children;return Object(o.d)(h,null,Object(o.d)(y,null,"Examples"),n)},K=function(e){var n=e.children,t=e.label;return Object(o.d)(l.a.Fragment,null,t&&Object(o.d)(g,null,t),Object(o.d)(c.a,{language:"typescript"},n))},R=function(e){var n=e.children;return Object(o.d)(x,null,Object(o.d)(g,null,"Common to examples below:"),n)},C=function(e){var n=e.children,t=e.includeAvailableFrom;return Object(o.d)(h,null,Object(o.d)(y,null,"Type parameeters"),Object(o.d)(i.a.Provider,{value:!!t},Object(o.d)(y,null,"Parameters"),n?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Default value"),Object(o.d)("th",null,"Description"),t?Object(o.d)("th",null,"Introduced in"):"")),Object(o.d)("tbody",null,n)):Object(o.d)("p",null,"There are no parameters.")))},F=a.a.tr(j()),S=a.a.td(p()),U=a.a.td(b()),E=a.a.td(s()),N=a.a.td(d()),J=function(e){var n=e.children,t=e.name,r=e.defaultValue,a=e.availableFrom,u=void 0===a?"none":a,c=l.a.useContext(i.a);return Object(o.d)(F,null,Object(o.d)(S,null,t),Object(o.d)(U,null,r),Object(o.d)(E,null,n),c?Object(o.d)(N,null,u):"")}},MaSA:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("AcpX"),a=(t("nKUr"),t("q1tI")),u=t("vOnD"),l=t("qKvR");function c(){var e=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"]);return c=function(){return e},e}function i(){var e=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]);return i=function(){return e},e}var o=u.a.div(i()),d=u.a.div(c());function s(e){var n=e.variants,t=e.isRecommendation,r=Object(a.useState)("2.x"),u=r[0],c=r[1],i=Object(a.useCallback)((function(e){c(e.target.value)}),[]);return Object(l.d)(o,null,Object(l.d)("select",{value:u,onChange:i},Object(l.d)("option",{value:"1.x"},"Papupata 1.x"),Object(l.d)("option",{value:"2.x"},"Papupata 2.x")),t&&Object(l.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(n).filter((function(e){return function(e,n){return"*"===n||n===e}(u,e)})).map((function(e){return Object(l.d)("div",{key:e},n[e])})))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-implement-tsx-bf26c16824afd3a29ede.js.map