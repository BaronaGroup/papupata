(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3KYE":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var l=t("q1tI"),r=l.createContext(!1)},Kg6r:function(e,n,t){"use strict";t.d(n,"j",(function(){return v})),t.d(n,"k",(function(){return w})),t.d(n,"i",(function(){return P})),t.d(n,"a",(function(){return g})),t.d(n,"n",(function(){return A})),t.d(n,"h",(function(){return I})),t.d(n,"g",(function(){return E})),t.d(n,"f",(function(){return T})),t.d(n,"b",(function(){return q})),t.d(n,"e",(function(){return D})),t.d(n,"c",(function(){return F})),t.d(n,"d",(function(){return K})),t.d(n,"m",(function(){return M})),t.d(n,"l",(function(){return J}));var l,r,a,d,u,c,i,o,b,s=t("AcpX"),j=t("vOnD"),O=t("q1tI"),p=t.n(O),f=t("P+0o"),h=t("3KYE"),m=t("qKvR"),v=j.a.section(l||(l=Object(s.a)([""]))),w=j.a.h4(r||(r=Object(s.a)([""]))),y=j.a.h5(a||(a=Object(s.a)([""]))),x=j.a.section(d||(d=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),P=function(e){var n=e.children;return Object(m.d)(v,null,Object(m.d)(w,null,"Purpose"),n)},g=function(e){var n=e.version;return Object(m.d)(v,null,Object(m.d)(w,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},A=function(e){var n=e.children;return Object(m.d)(v,null,Object(m.d)(w,null,"Usage"),n)},I=function(e){var n=e.children,t=e.includeAvailableFrom,l=e.label;return Object(m.d)(v,null,Object(m.d)(h.a.Provider,{value:!!t},Object(m.d)(w,null,"Parameters",l&&": "+l),n?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Type"),Object(m.d)("th",null,"Description"),t&&Object(m.d)("th",null,"Introduced in"))),Object(m.d)("tbody",null,n)):Object(m.d)("p",null,"There are no parameters.")))},E=function(e){var n=e.children,t=e.name,l=e.dataType,r=e.availableFrom,a=void 0===r?"1.0.0":r,d=p.a.useContext(h.a);return Object(m.d)("tr",null,Object(m.d)("td",null,t),Object(m.d)("td",null,l),Object(m.d)("td",null,n),d&&Object(m.d)("td",null,a))},T=function(e){var n=e.children;return Object(m.d)(v,null,Object(m.d)(w,null,"Returns"),n)},q=function(e){var n=e.children;return Object(m.d)(v,null,Object(m.d)(w,null,"Caveats"),n)},D=function(e){var n=e.children;return Object(m.d)(v,null,Object(m.d)(w,null,"Examples"),n)},F=function(e){var n=e.children,t=e.label;return Object(m.d)(p.a.Fragment,null,t&&Object(m.d)(y,null,t),Object(m.d)(f.a,{language:"typescript"},n))},K=function(e){var n=e.children;return Object(m.d)(x,null,Object(m.d)(y,null,"Common to examples below:"),n)},M=function(e){var n=e.children,t=e.includeAvailableFrom;return Object(m.d)(v,null,Object(m.d)(w,null,"Type parameeters"),Object(m.d)(h.a.Provider,{value:!!t},Object(m.d)(w,null,"Parameters"),n?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Default value"),Object(m.d)("th",null,"Description"),t?Object(m.d)("th",null,"Introduced in"):"")),Object(m.d)("tbody",null,n)):Object(m.d)("p",null,"There are no parameters.")))},C=j.a.tr(u||(u=Object(s.a)([""]))),k=j.a.td(c||(c=Object(s.a)([""]))),B=j.a.td(i||(i=Object(s.a)([""]))),R=j.a.td(o||(o=Object(s.a)([""]))),N=j.a.td(b||(b=Object(s.a)([""]))),J=function(e){var n=e.children,t=e.name,l=e.defaultValue,r=e.availableFrom,a=void 0===r?"none":r,d=p.a.useContext(h.a);return Object(m.d)(C,null,Object(m.d)(k,null,t),Object(m.d)(B,null,l),Object(m.d)(R,null,n),d?Object(m.d)(N,null,a):"")}},qqrx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));t("q1tI");var l=t("Kg6r"),r=t("TBFr"),a=t("NqE+"),d=t("+ego"),u=t("qKvR");function c(){return Object(u.d)(d.a,null,Object(u.d)(a.a,null,Object(u.d)(r.a,null,Object(u.d)("h1",null,"API Reference"),Object(u.d)("h2",null,"function convertExpressMiddleware")),Object(u.d)(l.i,null,"This function converts express middleware to papupata middleware. While papupata can use express middleware directly on individual APIs, the support is somewhat limited as express middleware is always called before any papupata middleware. By converting the middleware you have more control over the invocation order, and it also allows the use of express middleware as inherent middleware."),Object(u.d)(l.a,{version:"1.5.0"}),Object(u.d)(l.n,null,Object(u.d)("p",null,"Simply call the function and pass express middleware as a parameter to create a papupata middleware out of it. Error handling express middleware is not supported at this time.")),Object(u.d)(l.h,null,Object(u.d)(l.g,{name:"expressMiddleware",dataType:"Express middleware"},"An express middleware function.")),Object(u.d)(l.f,null,"PapupataMiddleware"),Object(u.d)(l.e,null,Object(u.d)(l.c,null,"\n            import bodyParser from 'body-parser'\n            import { APIDeclaration, convertExpressMiddleware } from 'papupata'\n            const ppBodyParser = convertExpressMiddleware(bodyParser)\n\n            const API = new APIDeclaration()\n            API.configure({inherentMiddleware: [ppBodyParser]})\n\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-convert-express-middleware-tsx-ecfc63fb48082480d24a.js.map