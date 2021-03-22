(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),l=r.createContext(!1)},K64q:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n("72eQ");var r=n("Kg6r"),l=n("TBFr"),a=n("jqoI"),u=n("v7TV"),c=n("NqE+"),d=n("+ego"),o=n("qKvR");function i(){return Object(o.d)(d.a,null,Object(o.d)(c.a,null,Object(o.d)(l.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"class IncompleteAPIDeclaration"),Object(o.d)("h3",null,"method queryBool")),Object(o.d)("h5",null,"Deprecated"),Object(o.d)("p",null,"This method has been deprecated as of 2.0.0. The suggested alternative is to just use ",Object(o.d)(a.a,null,"query")," and declare the type of a parameter to be a boolean."),Object(o.d)(r.i,null,"Declares boolean query parameters for an API"),Object(o.d)(r.n,null,Object(o.d)("p",null,"Path params and other query parameters may be defined before query.")),Object(o.d)(r.h,null,Object(o.d)(r.g,{name:"booleanQueryParams",dataType:"Const string array"},Object(o.d)("p",null,"Names of the query parameters. See the example below for the recommended way to set up the const string array."),Object(o.d)("p",null,"At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct. Unfortunately we have not come up with a way to prevent this kind of usage."))),Object(o.d)(r.f,null,Object(o.d)(u.b,null)),Object(o.d)(r.b,null,'This feature is intented mainly to be used for papupata-to-papupata communications. The string "true" stands for true values on the server, all other values stand for false.'),Object(o.d)(r.e,null,Object(o.d)(r.c,{label:"Declaration"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff')\n              .queryBool(['query1', 'query2'] as const)\n              .response<string>()\n          "),Object(o.d)(r.c,{label:"Usage in invocation"},"\n            await myAPI({query1: true, query2: false})\n            // Invokes URL /do-stuff?query1=true&query2=false\n          "),Object(o.d)(r.c,{label:"Usage in implementation"},"\n            myAPI.implement(req => {\n              const {query1, query2} = req.query\n              return query1 + query2 // would return truefalse in the example. They come in as booleans, not strings.\n            })\n          "))))}},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return P})),n.d(t,"a",(function(){return I})),n.d(t,"n",(function(){return w})),n.d(t,"h",(function(){return A})),n.d(t,"g",(function(){return T})),n.d(t,"f",(function(){return D})),n.d(t,"b",(function(){return k})),n.d(t,"e",(function(){return K})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return C})),n.d(t,"m",(function(){return R})),n.d(t,"l",(function(){return V}));var r,l,a,u,c,d,o,i,b,s=n("AcpX"),j=n("vOnD"),O=n("q1tI"),f=n.n(O),p=n("P+0o"),h=n("3KYE"),v=n("qKvR"),m=j.a.section(r||(r=Object(s.a)([""]))),y=j.a.h4(l||(l=Object(s.a)([""]))),q=j.a.h5(a||(a=Object(s.a)([""]))),g=j.a.section(u||(u=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),P=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(y,null,"Purpose"),t)},I=function(e){var t=e.version;return Object(v.d)(m,null,Object(v.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},w=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(y,null,"Usage"),t)},A=function(e){var t=e.children,n=e.includeAvailableFrom,r=e.label;return Object(v.d)(m,null,Object(v.d)(h.a.Provider,{value:!!n},Object(v.d)(y,null,"Parameters",r&&": "+r),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Type"),Object(v.d)("th",null,"Description"),n&&Object(v.d)("th",null,"Introduced in"))),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},T=function(e){var t=e.children,n=e.name,r=e.dataType,l=e.availableFrom,a=void 0===l?"1.0.0":l,u=f.a.useContext(h.a);return Object(v.d)("tr",null,Object(v.d)("td",null,n),Object(v.d)("td",null,r),Object(v.d)("td",null,t),u&&Object(v.d)("td",null,a))},D=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(y,null,"Returns"),t)},k=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(y,null,"Caveats"),t)},K=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(y,null,"Examples"),t)},x=function(e){var t=e.children,n=e.label;return Object(v.d)(f.a.Fragment,null,n&&Object(v.d)(q,null,n),Object(v.d)(p.a,{language:"typescript"},t))},C=function(e){var t=e.children;return Object(v.d)(g,null,Object(v.d)(q,null,"Common to examples below:"),t)},R=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(v.d)(m,null,Object(v.d)(y,null,"Type parameeters"),Object(v.d)(h.a.Provider,{value:!!n},Object(v.d)(y,null,"Parameters"),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Default value"),Object(v.d)("th",null,"Description"),n?Object(v.d)("th",null,"Introduced in"):"")),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},F=j.a.tr(c||(c=Object(s.a)([""]))),N=j.a.td(d||(d=Object(s.a)([""]))),U=j.a.td(o||(o=Object(s.a)([""]))),B=j.a.td(i||(i=Object(s.a)([""]))),E=j.a.td(b||(b=Object(s.a)([""]))),V=function(e){var t=e.children,n=e.name,r=e.defaultValue,l=e.availableFrom,a=void 0===l?"none":l,u=f.a.useContext(h.a);return Object(v.d)(F,null,Object(v.d)(N,null,n),Object(v.d)(U,null,r),Object(v.d)(B,null,t),u?Object(v.d)(E,null,a):"")}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return O}));var r,l,a,u=n("AcpX"),c=(n("q1tI"),n("Kg6r")),d=n("vOnD"),o=n("qKvR");function i(e){var t=e.children;return Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Overview"),t)}var b=d.a.h4(r||(r=Object(u.a)([""]))),s=d.a.h5(l||(l=Object(u.a)(["\n  font-size: 1.1em;\n"])));function j(e){var t=e.content;return Object(o.d)("div",null,Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Table of contents"),Object(o.d)("ul",null,t.map((function(e){return Object(o.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(o.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?s:b;return Object(o.d)(c.j,{id:e.anchor,key:e.anchor},Object(o.d)(t,null,e.heading),e.content)})))}var O=d.a.span(a||(a=Object(u.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))},v7TV:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u}));n("q1tI");var r=n("Wbzz"),l=n("qKvR");function a(){return Object(l.d)(r.a,{to:"/api/PartiallyDeclaredAPI"},"PartiallyDeclaredAPI")}function u(){return Object(l.d)(r.a,{to:"/api/DeclaredAPI"},"DeclaredAPI")}}}]);
//# sourceMappingURL=component---src-pages-api-partially-declared-api-query-bool-tsx-b81210e4d95e0ea9e311.js.map