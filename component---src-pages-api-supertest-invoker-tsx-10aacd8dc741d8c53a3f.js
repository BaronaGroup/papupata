(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"3KYE":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),u=r.createContext(!1)},Kg6r:function(t,e,n){"use strict";n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return g})),n.d(e,"i",(function(){return I})),n.d(e,"a",(function(){return P})),n.d(e,"n",(function(){return A})),n.d(e,"h",(function(){return y})),n.d(e,"g",(function(){return q})),n.d(e,"f",(function(){return w})),n.d(e,"b",(function(){return T})),n.d(e,"e",(function(){return D})),n.d(e,"c",(function(){return S})),n.d(e,"d",(function(){return R})),n.d(e,"m",(function(){return K})),n.d(e,"l",(function(){return L}));var r=n("AcpX"),u=(n("nKUr"),n("vOnD")),a=n("q1tI"),l=n.n(a),c=n("P+0o"),o=n("3KYE"),i=n("qKvR");function d(){var t=Object(r.a)([""]);return d=function(){return t},t}function s(){var t=Object(r.a)([""]);return s=function(){return t},t}function p(){var t=Object(r.a)([""]);return p=function(){return t},t}function b(){var t=Object(r.a)([""]);return b=function(){return t},t}function O(){var t=Object(r.a)([""]);return O=function(){return t},t}function j(){var t=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return j=function(){return t},t}function f(){var t=Object(r.a)([""]);return f=function(){return t},t}function v(){var t=Object(r.a)([""]);return v=function(){return t},t}function m(){var t=Object(r.a)([""]);return m=function(){return t},t}var h=u.a.section(m()),g=u.a.h4(v()),x=u.a.h5(f()),k=u.a.section(j()),I=function(t){var e=t.children;return Object(i.d)(h,null,Object(i.d)(g,null,"Purpose"),e)},P=function(t){var e=t.version;return Object(i.d)(h,null,Object(i.d)(g,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},A=function(t){var e=t.children;return Object(i.d)(h,null,Object(i.d)(g,null,"Usage"),e)},y=function(t){var e=t.children,n=t.includeAvailableFrom,r=t.label;return Object(i.d)(h,null,Object(i.d)(o.a.Provider,{value:!!n},Object(i.d)(g,null,"Parameters",r&&": "+r),e?Object(i.d)("table",null,Object(i.d)("thead",null,Object(i.d)("tr",null,Object(i.d)("th",null,"Name"),Object(i.d)("th",null,"Type"),Object(i.d)("th",null,"Description"),n&&Object(i.d)("th",null,"Introduced in"))),Object(i.d)("tbody",null,e)):Object(i.d)("p",null,"There are no parameters.")))},q=function(t){var e=t.children,n=t.name,r=t.dataType,u=t.availableFrom,a=void 0===u?"1.0.0":u,c=l.a.useContext(o.a);return Object(i.d)("tr",null,Object(i.d)("td",null,n),Object(i.d)("td",null,r),Object(i.d)("td",null,e),c&&Object(i.d)("td",null,a))},w=function(t){var e=t.children;return Object(i.d)(h,null,Object(i.d)(g,null,"Returns"),e)},T=function(t){var e=t.children;return Object(i.d)(h,null,Object(i.d)(g,null,"Caveats"),e)},D=function(t){var e=t.children;return Object(i.d)(h,null,Object(i.d)(g,null,"Examples"),e)},S=function(t){var e=t.children,n=t.label;return Object(i.d)(l.a.Fragment,null,n&&Object(i.d)(x,null,n),Object(i.d)(c.a,{language:"typescript"},e))},R=function(t){var e=t.children;return Object(i.d)(k,null,Object(i.d)(x,null,"Common to examples below:"),e)},K=function(t){var e=t.children,n=t.includeAvailableFrom;return Object(i.d)(h,null,Object(i.d)(g,null,"Type parameeters"),Object(i.d)(o.a.Provider,{value:!!n},Object(i.d)(g,null,"Parameters"),e?Object(i.d)("table",null,Object(i.d)("thead",null,Object(i.d)("tr",null,Object(i.d)("th",null,"Name"),Object(i.d)("th",null,"Default value"),Object(i.d)("th",null,"Description"),n?Object(i.d)("th",null,"Introduced in"):"")),Object(i.d)("tbody",null,e)):Object(i.d)("p",null,"There are no parameters.")))},C=u.a.tr(O()),U=u.a.td(b()),F=u.a.td(p()),E=u.a.td(s()),M=u.a.td(d()),L=function(t){var e=t.children,n=t.name,r=t.defaultValue,u=t.availableFrom,a=void 0===u?"none":u,c=l.a.useContext(o.a);return Object(i.d)(C,null,Object(i.d)(U,null,n),Object(i.d)(F,null,r),Object(i.d)(E,null,e),c?Object(i.d)(M,null,a):"")}},MaSA:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("AcpX"),u=(n("nKUr"),n("q1tI")),a=n("vOnD"),l=n("qKvR");function c(){var t=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"]);return c=function(){return t},t}function o(){var t=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]);return o=function(){return t},t}var i=a.a.div(o()),d=a.a.div(c());function s(t){var e=t.variants,n=t.isRecommendation,r=Object(u.useState)("2.x"),a=r[0],c=r[1],o=Object(u.useCallback)((function(t){c(t.target.value)}),[]);return Object(l.d)(i,null,Object(l.d)("select",{value:a,onChange:o},Object(l.d)("option",{value:"1.x"},"Papupata 1.x"),Object(l.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(l.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(e).filter((function(t){return function(t,e){return"*"===e||e===t}(a,t)})).map((function(t){return Object(l.d)("div",{key:t},e[t])})))}},MpDW:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return i}));n("nKUr"),n("q1tI");var r=n("Kg6r"),u=n("TBFr"),a=n("NqE+"),l=n("MaSA"),c=n("+ego"),o=n("qKvR");function i(){return Object(o.d)(c.a,null,Object(o.d)(a.a,null,Object(o.d)(u.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"module supertestInvoker"),Object(o.d)("h3",null,"Default export invokeSupertest")),Object(o.d)(r.i,null,"This module allows you to use supertest to make papupata API requests, while gaining access to the actual supertest request for things like setting up headers and making detailed assertions on the response."),Object(o.d)(r.a,{version:"1.5.0"}),Object(o.d)(r.n,null,Object(o.d)(l.a,{variants:{"1.x":Object(o.d)(r.c,null,"import invokeSupertest from 'papupata/dist/main/supertestInvoker'"),"2.x":Object(o.d)(r.c,null,"import invokeSupertest from 'papupata/invokers/supertest'")}}),Object(o.d)("p",null,"To begin with, you'll want to set up a supertest request for your express application. Once done, you can create a supertest papupata adapter to start making API calls."),Object(o.d)("p",null,"Do note that you'll almost certainly want to configure papupata with a blank base URL to make things work.")),Object(o.d)(r.h,null,Object(o.d)(r.g,{name:"supertestRequest",dataType:"Supertest request"},"Supertest request"),Object(o.d)(r.g,{name:"api",dataType:"DeclaredAPI"},"The papupata API you wish to invoke"),Object(o.d)(r.g,{name:"args",dataType:"Object"},"The arguments to the API call, just as you'd pass to the API call normally.")),Object(o.d)(r.f,null,"Papupata MakeRequestAdapter"),Object(o.d)(r.e,null,Object(o.d)(l.a,{variants:{"1.x":Object(o.d)(r.c,null,"\n                  import { APIDeclaration } from 'papupata'\n                  import invokeSupertest from 'papupata/dist/main/supertestInvoker'\n                  import express from 'express'\n                  import supertest from 'supertest'\n                  \n                  const app = express()\n                  const request = supertest(app)\n                  const API = new APIDeclaration()\n                  API.configure({\n                    app,\n                    baseURL: ''\n                  })\n                  const api = API.declareGetAPI('/:id').params(['id'] as const).response<string>\n\n                  const req = invokeSupertest(request, api, {id: 'foo'})\n                  await req.expect(200)\n               "),"2.x":Object(o.d)(r.c,null,"\n                  import { APIDeclaration } from 'papupata'\n                  import invokeSupertest from 'papupata/invokers/supertest'\n                  import express from 'express'\n                  import supertest from 'supertest'\n                  \n                  const app = express()\n                  const request = supertest(app)\n                  const API = new APIDeclaration()\n                  API.configure({\n                    app,\n                    baseURL: ''\n                  })\n                  const api = API.declareGetAPI('/:id').params({id: String}).response<string>\n\n                  const req = invokeSupertest(request, api, {id: 'foo'})\n                  await req.expect(200)\n                ")}}))))}}}]);
//# sourceMappingURL=component---src-pages-api-supertest-invoker-tsx-10aacd8dc741d8c53a3f.js.map