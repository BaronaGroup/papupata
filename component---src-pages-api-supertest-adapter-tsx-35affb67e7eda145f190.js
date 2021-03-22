(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"3KYE":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),u=r.createContext(!1)},JLuA:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("nKUr"),n("q1tI");var r=n("Kg6r"),u=n("TBFr"),a=n("NqE+"),c=n("MaSA"),l=n("+ego"),d=n("qKvR");function o(){return Object(d.d)(l.a,null,Object(d.d)(a.a,null,Object(d.d)(u.a,null,Object(d.d)("h1",null,"API Reference"),Object(d.d)("h2",null,"module supertestAdapter"),Object(d.d)("h3",null,"Default export createSupertestAdapter")),Object(d.d)(r.i,null,"This module allows you to use supertest to make papupata API requests."),Object(d.d)(r.a,{version:"1.5.0"}),Object(d.d)(r.n,null,Object(d.d)(c.a,{variants:{"1.x":Object(d.d)(r.c,null,"import createSupertestAdapter from 'papupata/dist/main/supertestAdapter'"),"2.x":Object(d.d)(r.c,null,"import createSupertestAdapter from 'papupata/adapters/supertest'")}}),Object(d.d)("p",null,"To begin with, you'll want to set up a supertest request for your express application. Once done, you can create a supertest papupata adapter to start making API calls."),Object(d.d)("p",null,"Do note that you'll almost certainly want to configure papupata with a blank base URL to make things work.")),Object(d.d)(r.h,null,Object(d.d)(r.g,{name:"supertestRequest",dataType:"Supertest request"},"Supertest request")),Object(d.d)(r.f,null,"Papupata MakeRequestAdapter"),Object(d.d)(r.e,null,Object(d.d)(c.a,{variants:{"1.x":Object(d.d)(r.c,null,"\n                    import { APIDeclaration } from 'papupata'\n                    import createSupertestAdapter from 'papupata/dist/main/supertestAdapter' \n                    import express from 'express'\n                    import supertest from 'supertest'\n                    \n                    const app = express()\n                    const request = supertest(app)\n                    const API = new APIDeclaration()\n                    API.configure({\n                      app,\n                      baseURL: '',\n                      makeRequest: createSupertestAdapter(request)\n                    })\n\n                  "),"2.x":Object(d.d)(r.c,null,"\n                    import { APIDeclaration } from 'papupata'\n                    import createSupertestAdapter from 'papupata/adapters/supertest' \n                    import express from 'express'\n                    import supertest from 'supertest'\n                    \n                    const app = express()\n                    const request = supertest(app)\n                    const API = new APIDeclaration()\n                    API.configure({\n                      app,\n                      baseURL: '',\n                      requestAdapter: createSupertestAdapter(request)\n                    })\n\n                  ")}}))))}},Kg6r:function(t,e,n){"use strict";n.d(e,"j",(function(){return h})),n.d(e,"k",(function(){return A})),n.d(e,"i",(function(){return q})),n.d(e,"a",(function(){return y})),n.d(e,"n",(function(){return P})),n.d(e,"h",(function(){return w})),n.d(e,"g",(function(){return I})),n.d(e,"f",(function(){return k})),n.d(e,"b",(function(){return R})),n.d(e,"e",(function(){return S})),n.d(e,"c",(function(){return D})),n.d(e,"d",(function(){return K})),n.d(e,"m",(function(){return T})),n.d(e,"l",(function(){return J}));var r=n("AcpX"),u=(n("nKUr"),n("vOnD")),a=n("q1tI"),c=n.n(a),l=n("P+0o"),d=n("3KYE"),o=n("qKvR");function i(){var t=Object(r.a)([""]);return i=function(){return t},t}function p(){var t=Object(r.a)([""]);return p=function(){return t},t}function s(){var t=Object(r.a)([""]);return s=function(){return t},t}function b(){var t=Object(r.a)([""]);return b=function(){return t},t}function O(){var t=Object(r.a)([""]);return O=function(){return t},t}function j(){var t=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return j=function(){return t},t}function f(){var t=Object(r.a)([""]);return f=function(){return t},t}function v(){var t=Object(r.a)([""]);return v=function(){return t},t}function m(){var t=Object(r.a)([""]);return m=function(){return t},t}var h=u.a.section(m()),A=u.a.h4(v()),x=u.a.h5(f()),g=u.a.section(j()),q=function(t){var e=t.children;return Object(o.d)(h,null,Object(o.d)(A,null,"Purpose"),e)},y=function(t){var e=t.version;return Object(o.d)(h,null,Object(o.d)(A,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},P=function(t){var e=t.children;return Object(o.d)(h,null,Object(o.d)(A,null,"Usage"),e)},w=function(t){var e=t.children,n=t.includeAvailableFrom,r=t.label;return Object(o.d)(h,null,Object(o.d)(d.a.Provider,{value:!!n},Object(o.d)(A,null,"Parameters",r&&": "+r),e?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Type"),Object(o.d)("th",null,"Description"),n&&Object(o.d)("th",null,"Introduced in"))),Object(o.d)("tbody",null,e)):Object(o.d)("p",null,"There are no parameters.")))},I=function(t){var e=t.children,n=t.name,r=t.dataType,u=t.availableFrom,a=void 0===u?"1.0.0":u,l=c.a.useContext(d.a);return Object(o.d)("tr",null,Object(o.d)("td",null,n),Object(o.d)("td",null,r),Object(o.d)("td",null,e),l&&Object(o.d)("td",null,a))},k=function(t){var e=t.children;return Object(o.d)(h,null,Object(o.d)(A,null,"Returns"),e)},R=function(t){var e=t.children;return Object(o.d)(h,null,Object(o.d)(A,null,"Caveats"),e)},S=function(t){var e=t.children;return Object(o.d)(h,null,Object(o.d)(A,null,"Examples"),e)},D=function(t){var e=t.children,n=t.label;return Object(o.d)(c.a.Fragment,null,n&&Object(o.d)(x,null,n),Object(o.d)(l.a,{language:"typescript"},e))},K=function(t){var e=t.children;return Object(o.d)(g,null,Object(o.d)(x,null,"Common to examples below:"),e)},T=function(t){var e=t.children,n=t.includeAvailableFrom;return Object(o.d)(h,null,Object(o.d)(A,null,"Type parameeters"),Object(o.d)(d.a.Provider,{value:!!n},Object(o.d)(A,null,"Parameters"),e?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Default value"),Object(o.d)("th",null,"Description"),n?Object(o.d)("th",null,"Introduced in"):"")),Object(o.d)("tbody",null,e)):Object(o.d)("p",null,"There are no parameters.")))},C=u.a.tr(O()),U=u.a.td(b()),F=u.a.td(s()),E=u.a.td(p()),L=u.a.td(i()),J=function(t){var e=t.children,n=t.name,r=t.defaultValue,u=t.availableFrom,a=void 0===u?"none":u,l=c.a.useContext(d.a);return Object(o.d)(C,null,Object(o.d)(U,null,n),Object(o.d)(F,null,r),Object(o.d)(E,null,e),l?Object(o.d)(L,null,a):"")}},MaSA:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("AcpX"),u=(n("nKUr"),n("q1tI")),a=n("vOnD"),c=n("qKvR");function l(){var t=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"]);return l=function(){return t},t}function d(){var t=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]);return d=function(){return t},t}var o=a.a.div(d()),i=a.a.div(l());function p(t){var e=t.variants,n=t.isRecommendation,r=Object(u.useState)("2.x"),a=r[0],l=r[1],d=Object(u.useCallback)((function(t){l(t.target.value)}),[]);return Object(c.d)(o,null,Object(c.d)("select",{value:a,onChange:d},Object(c.d)("option",{value:"1.x"},"Papupata 1.x"),Object(c.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(c.d)(i,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(e).filter((function(t){return function(t,e){return"*"===e||e===t}(a,t)})).map((function(t){return Object(c.d)("div",{key:t},e[t])})))}}}]);
//# sourceMappingURL=component---src-pages-api-supertest-adapter-tsx-35affb67e7eda145f190.js.map