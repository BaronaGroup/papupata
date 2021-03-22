(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3KYE":function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("q1tI"),l=r.createContext(!1)},Kg6r:function(e,n,t){"use strict";t.d(n,"j",(function(){return m})),t.d(n,"k",(function(){return w})),t.d(n,"i",(function(){return P})),t.d(n,"a",(function(){return g})),t.d(n,"n",(function(){return A})),t.d(n,"h",(function(){return I})),t.d(n,"g",(function(){return E})),t.d(n,"f",(function(){return T})),t.d(n,"b",(function(){return q})),t.d(n,"e",(function(){return K})),t.d(n,"c",(function(){return D})),t.d(n,"d",(function(){return F})),t.d(n,"m",(function(){return M})),t.d(n,"l",(function(){return U}));var r=t("AcpX"),l=(t("nKUr"),t("vOnD")),u=t("q1tI"),a=t.n(u),d=t("P+0o"),c=t("3KYE"),i=t("qKvR");function o(){var e=Object(r.a)([""]);return o=function(){return e},e}function b(){var e=Object(r.a)([""]);return b=function(){return e},e}function s(){var e=Object(r.a)([""]);return s=function(){return e},e}function j(){var e=Object(r.a)([""]);return j=function(){return e},e}function O(){var e=Object(r.a)([""]);return O=function(){return e},e}function p(){var e=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return p=function(){return e},e}function f(){var e=Object(r.a)([""]);return f=function(){return e},e}function v(){var e=Object(r.a)([""]);return v=function(){return e},e}function h(){var e=Object(r.a)([""]);return h=function(){return e},e}var m=l.a.section(h()),w=l.a.h4(v()),y=l.a.h5(f()),x=l.a.section(p()),P=function(e){var n=e.children;return Object(i.d)(m,null,Object(i.d)(w,null,"Purpose"),n)},g=function(e){var n=e.version;return Object(i.d)(m,null,Object(i.d)(w,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},A=function(e){var n=e.children;return Object(i.d)(m,null,Object(i.d)(w,null,"Usage"),n)},I=function(e){var n=e.children,t=e.includeAvailableFrom,r=e.label;return Object(i.d)(m,null,Object(i.d)(c.a.Provider,{value:!!t},Object(i.d)(w,null,"Parameters",r&&": "+r),n?Object(i.d)("table",null,Object(i.d)("thead",null,Object(i.d)("tr",null,Object(i.d)("th",null,"Name"),Object(i.d)("th",null,"Type"),Object(i.d)("th",null,"Description"),t&&Object(i.d)("th",null,"Introduced in"))),Object(i.d)("tbody",null,n)):Object(i.d)("p",null,"There are no parameters.")))},E=function(e){var n=e.children,t=e.name,r=e.dataType,l=e.availableFrom,u=void 0===l?"1.0.0":l,d=a.a.useContext(c.a);return Object(i.d)("tr",null,Object(i.d)("td",null,t),Object(i.d)("td",null,r),Object(i.d)("td",null,n),d&&Object(i.d)("td",null,u))},T=function(e){var n=e.children;return Object(i.d)(m,null,Object(i.d)(w,null,"Returns"),n)},q=function(e){var n=e.children;return Object(i.d)(m,null,Object(i.d)(w,null,"Caveats"),n)},K=function(e){var n=e.children;return Object(i.d)(m,null,Object(i.d)(w,null,"Examples"),n)},D=function(e){var n=e.children,t=e.label;return Object(i.d)(a.a.Fragment,null,t&&Object(i.d)(y,null,t),Object(i.d)(d.a,{language:"typescript"},n))},F=function(e){var n=e.children;return Object(i.d)(x,null,Object(i.d)(y,null,"Common to examples below:"),n)},M=function(e){var n=e.children,t=e.includeAvailableFrom;return Object(i.d)(m,null,Object(i.d)(w,null,"Type parameeters"),Object(i.d)(c.a.Provider,{value:!!t},Object(i.d)(w,null,"Parameters"),n?Object(i.d)("table",null,Object(i.d)("thead",null,Object(i.d)("tr",null,Object(i.d)("th",null,"Name"),Object(i.d)("th",null,"Default value"),Object(i.d)("th",null,"Description"),t?Object(i.d)("th",null,"Introduced in"):"")),Object(i.d)("tbody",null,n)):Object(i.d)("p",null,"There are no parameters.")))},C=l.a.tr(O()),k=l.a.td(j()),B=l.a.td(s()),R=l.a.td(b()),N=l.a.td(o()),U=function(e){var n=e.children,t=e.name,r=e.defaultValue,l=e.availableFrom,u=void 0===l?"none":l,d=a.a.useContext(c.a);return Object(i.d)(C,null,Object(i.d)(k,null,t),Object(i.d)(B,null,r),Object(i.d)(R,null,n),d?Object(i.d)(N,null,u):"")}},qqrx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t("nKUr"),t("q1tI");var r=t("Kg6r"),l=t("TBFr"),u=t("NqE+"),a=t("+ego"),d=t("qKvR");function c(){return Object(d.d)(a.a,null,Object(d.d)(u.a,null,Object(d.d)(l.a,null,Object(d.d)("h1",null,"API Reference"),Object(d.d)("h2",null,"function convertExpressMiddleware")),Object(d.d)(r.i,null,"This function converts express middleware to papupata middleware. While papupata can use express middleware directly on individual APIs, the support is somewhat limited as express middleware is always called before any papupata middleware. By converting the middleware you have more control over the invocation order, and it also allows the use of express middleware as inherent middleware."),Object(d.d)(r.a,{version:"1.5.0"}),Object(d.d)(r.n,null,Object(d.d)("p",null,"Simply call the function and pass express middleware as a parameter to create a papupata middleware out of it. Error handling express middleware is not supported at this time.")),Object(d.d)(r.h,null,Object(d.d)(r.g,{name:"expressMiddleware",dataType:"Express middleware"},"An express middleware function.")),Object(d.d)(r.f,null,"PapupataMiddleware"),Object(d.d)(r.e,null,Object(d.d)(r.c,null,"\n            import bodyParser from 'body-parser'\n            import { APIDeclaration, convertExpressMiddleware } from 'papupata'\n            const ppBodyParser = convertExpressMiddleware(bodyParser)\n\n            const API = new APIDeclaration()\n            API.configure({inherentMiddleware: [ppBodyParser]})\n\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-convert-express-middleware-tsx-67beffe55a1908526351.js.map