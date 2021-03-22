(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var l=n("q1tI"),a=l.createContext(!1)},I8wp:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var l=n("+ego"),a=n("NqE+"),r=n("TBFr"),c=n("Kg6r"),u=n("v7TV"),d=n("qKvR");function i(){return Object(d.d)(l.a,null,Object(d.d)(a.a,null,Object(d.d)(r.a,null,Object(d.d)("h1",null,"API Reference"),Object(d.d)("h2",null,"class IncompleteAPIDeclaration"),Object(d.d)("h3",null,"method response")),Object(d.d)(c.i,null,"Declares the response type or types for an API and concludes the declaration."),Object(d.d)(c.n,null,Object(d.d)("p",null,"The response type is declared as a type parameter."),Object(d.d)("p",null,"In some cases you might be in a situation where the types returned from the implementation don't quite match what clients receive. An example of this would be with dates -- you could have a Date object on the server, but when it gets to the browser it's just a string. To deal with this another type parameter exists, allowing you to specify another type to be returned from the implementation.")),Object(d.d)(c.h,null,Object(d.d)(c.g,{name:"<ResponseType>",dataType:"Interface"},"The response type as seen on the client side."),Object(d.d)(c.g,{name:"<ServerResponseType>",dataType:"Interface"},"The response type as seen on the server side. Default to the value of ResponseType.")),Object(d.d)(c.f,null,Object(d.d)(u.a,null)),Object(d.d)(c.b,null,Object(d.d)("ul",null,Object(d.d)("li",null,"There is no client side validation for the data types. Only typescript itself validates the response on server side"),Object(d.d)("li",null,"It's up to the developer to ensure that the ResponseType is really resulting from returning a ServerResponseType."))),Object(d.d)(c.e,null,Object(d.d)(c.c,{label:"Example 1 Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .response<string>()\n          "),Object(d.d)(c.c,{label:"Example 1 Usage in implementation"},'\n            myAPI.implement(req => {\n              return "Hello"\n            })            \n          '),Object(d.d)(c.c,{label:"Example 1 Usage in invocation"},'\n            await myAPI({}) // Returns a promise that resolves to "Hello"\n          '),Object(d.d)(c.c,{label:"Example 2, differing types; Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .response<{date: string}, {date: Date}}>()\n          "),Object(d.d)(c.c,{label:"Example 2 Usage in implementation"},"\n            myAPI.implement(req => {\n              return { date: new Date('2019-01-01T12:12:12.000Z') }\n            })            \n          "),Object(d.d)(c.c,{label:"Example 2 Usage in invocation"},"\n            await myAPI({}) // Returns a promise that resolves to '2019-01-01T12:12:12.000Z'\n          "))))}},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return g})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return w})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return D})),n.d(t,"f",(function(){return x})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return q})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return K})),n.d(t,"m",(function(){return F})),n.d(t,"l",(function(){return z}));var l,a,r,c,u,d,i,o,s,b=n("AcpX"),p=n("vOnD"),j=n("q1tI"),O=n.n(j),h=n("P+0o"),f=n("3KYE"),m=n("qKvR"),v=p.a.section(l||(l=Object(b.a)([""]))),y=p.a.h4(a||(a=Object(b.a)([""]))),I=p.a.h5(r||(r=Object(b.a)([""]))),P=p.a.section(c||(c=Object(b.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),g=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(m.d)(v,null,Object(m.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},w=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Usage"),t)},T=function(e){var t=e.children,n=e.includeAvailableFrom,l=e.label;return Object(m.d)(v,null,Object(m.d)(f.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters",l&&": "+l),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Type"),Object(m.d)("th",null,"Description"),n&&Object(m.d)("th",null,"Introduced in"))),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},D=function(e){var t=e.children,n=e.name,l=e.dataType,a=e.availableFrom,r=void 0===a?"1.0.0":a,c=O.a.useContext(f.a);return Object(m.d)("tr",null,Object(m.d)("td",null,n),Object(m.d)("td",null,l),Object(m.d)("td",null,t),c&&Object(m.d)("td",null,r))},x=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Returns"),t)},R=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Caveats"),t)},q=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Examples"),t)},E=function(e){var t=e.children,n=e.label;return Object(m.d)(O.a.Fragment,null,n&&Object(m.d)(I,null,n),Object(m.d)(h.a,{language:"typescript"},t))},K=function(e){var t=e.children;return Object(m.d)(P,null,Object(m.d)(I,null,"Common to examples below:"),t)},F=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(m.d)(v,null,Object(m.d)(y,null,"Type parameeters"),Object(m.d)(f.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters"),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Default value"),Object(m.d)("th",null,"Description"),n?Object(m.d)("th",null,"Introduced in"):"")),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},C=p.a.tr(u||(u=Object(b.a)([""]))),U=p.a.td(d||(d=Object(b.a)([""]))),k=p.a.td(i||(i=Object(b.a)([""]))),N=p.a.td(o||(o=Object(b.a)([""]))),V=p.a.td(s||(s=Object(b.a)([""]))),z=function(e){var t=e.children,n=e.name,l=e.defaultValue,a=e.availableFrom,r=void 0===a?"none":a,c=O.a.useContext(f.a);return Object(m.d)(C,null,Object(m.d)(U,null,n),Object(m.d)(k,null,l),Object(m.d)(N,null,t),c?Object(m.d)(V,null,r):"")}},v7TV:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));n("q1tI");var l=n("Wbzz"),a=n("qKvR");function r(){return Object(a.d)(l.a,{to:"/api/PartiallyDeclaredAPI"},"PartiallyDeclaredAPI")}function c(){return Object(a.d)(l.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}}}]);
//# sourceMappingURL=component---src-pages-api-partially-declared-api-response-tsx-f79e183ae04f26270009.js.map