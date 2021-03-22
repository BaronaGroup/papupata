(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return q})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return k})),n.d(t,"h",(function(){return g})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return P})),n.d(t,"b",(function(){return T})),n.d(t,"e",(function(){return R})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return D})),n.d(t,"m",(function(){return K})),n.d(t,"l",(function(){return M}));var a,l,r,u,c,d,o,i,s,b=n("AcpX"),p=n("vOnD"),j=n("q1tI"),O=n.n(j),m=n("P+0o"),f=n("3KYE"),v=n("qKvR"),h=p.a.section(a||(a=Object(b.a)([""]))),y=p.a.h4(l||(l=Object(b.a)([""]))),x=p.a.h5(r||(r=Object(b.a)([""]))),I=p.a.section(u||(u=Object(b.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),q=function(e){var t=e.children;return Object(v.d)(h,null,Object(v.d)(y,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(v.d)(h,null,Object(v.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},k=function(e){var t=e.children;return Object(v.d)(h,null,Object(v.d)(y,null,"Usage"),t)},g=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(v.d)(h,null,Object(v.d)(f.a.Provider,{value:!!n},Object(v.d)(y,null,"Parameters",a&&": "+a),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Type"),Object(v.d)("th",null,"Description"),n&&Object(v.d)("th",null,"Introduced in"))),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},w=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,u=O.a.useContext(f.a);return Object(v.d)("tr",null,Object(v.d)("td",null,n),Object(v.d)("td",null,a),Object(v.d)("td",null,t),u&&Object(v.d)("td",null,r))},P=function(e){var t=e.children;return Object(v.d)(h,null,Object(v.d)(y,null,"Returns"),t)},T=function(e){var t=e.children;return Object(v.d)(h,null,Object(v.d)(y,null,"Caveats"),t)},R=function(e){var t=e.children;return Object(v.d)(h,null,Object(v.d)(y,null,"Examples"),t)},C=function(e){var t=e.children,n=e.label;return Object(v.d)(O.a.Fragment,null,n&&Object(v.d)(x,null,n),Object(v.d)(m.a,{language:"typescript"},t))},D=function(e){var t=e.children;return Object(v.d)(I,null,Object(v.d)(x,null,"Common to examples below:"),t)},K=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(v.d)(h,null,Object(v.d)(y,null,"Type parameeters"),Object(v.d)(f.a.Provider,{value:!!n},Object(v.d)(y,null,"Parameters"),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Default value"),Object(v.d)("th",null,"Description"),n?Object(v.d)("th",null,"Introduced in"):"")),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},F=p.a.tr(c||(c=Object(b.a)([""]))),N=p.a.td(d||(d=Object(b.a)([""]))),E=p.a.td(o||(o=Object(b.a)([""]))),z=p.a.td(i||(i=Object(b.a)([""]))),B=p.a.td(s||(s=Object(b.a)([""]))),M=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,u=O.a.useContext(f.a);return Object(v.d)(F,null,Object(v.d)(N,null,n),Object(v.d)(E,null,a),Object(v.d)(z,null,t),u?Object(v.d)(B,null,r):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,l,r=n("AcpX"),u=n("q1tI"),c=n("vOnD"),d=n("qKvR"),o=c.a.div(a||(a=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),i=c.a.div(l||(l=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function s(e){var t=e.variants,n=e.isRecommendation,a=Object(u.useState)("2.x"),l=a[0],r=a[1],c=Object(u.useCallback)((function(e){r(e.target.value)}),[]);return Object(d.d)(o,null,Object(d.d)("select",{value:l,onChange:c},Object(d.d)("option",{value:"1.x"},"Papupata 1.x"),Object(d.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(d.d)(i,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(l,e)})).map((function(e){return Object(d.d)("div",{key:e},t[e])})))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j}));var a,l,r,u=n("AcpX"),c=(n("NqE+"),n("TBFr"),n("+ego"),n("q1tI"),n("Kg6r")),d=n("vOnD"),o=n("qKvR");function i(e){var t=e.children;return Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Overview"),t)}var s=d.a.h4(a||(a=Object(u.a)([""]))),b=d.a.h5(l||(l=Object(u.a)(["\n  font-size: 1.1em;\n"])));function p(e){var t=e.content;return Object(o.d)("div",null,Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Table of contents"),Object(o.d)("ul",null,t.map((function(e){return Object(o.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(o.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?b:s;return Object(o.d)(c.j,{id:e.anchor,key:e.anchor},Object(o.d)(t,null,e.heading),e.content)})))}var j=d.a.span(r||(r=Object(u.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))},q5lT:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s})),n.d(t,"OptionsTable",(function(){return b}));n("q1tI");var a=n("Kg6r"),l=n("TBFr"),r=n("jqoI"),u=n("z+su"),c=n("NqE+"),d=n("MaSA"),o=n("+ego"),i=n("qKvR");function s(){return Object(i.d)(o.a,null,Object(i.d)(c.a,null,Object(i.d)(l.a,null,Object(i.d)("h1",null,"API Reference"),Object(i.d)("h2",null,"module invokeImplementationAdapter"),Object(i.d)("h3",null,"Default export createInvokeImplementationAdapter")),Object(i.d)(a.i,null,"This module allows you to use invoke implemented APIs with no express server. This is primarily used for testing."),Object(i.d)(a.a,{version:"1.5.0"}),Object(i.d)(a.n,null,Object(i.d)(d.a,{variants:{"1.x":Object(i.d)(a.c,null,"\n                  import createInvokeImplementationAdapter from 'papupata/dist/main/invokeImplementationAdapter'\n                "),"2.x":Object(i.d)(a.c,null,"\n                  import createInvokeImplementationAdapter from 'papupata/adapters/invokeImplementation'\n                ")}}),Object(i.d)("p",null,"Call the function with any options you wish and use the returned value as the ",Object(i.d)(r.a,null,"requestAdapter")," of the APIDeclaration. As always, a base url needs to be set up to make calls, but its value is ultimately irrelevant when using this adapter.")),Object(i.d)(a.h,null,Object(i.d)(a.g,{name:"options",dataType:"Object?"},Object(i.d)(b,null))),Object(i.d)(a.f,null,"Papupata MakeRequestAdapter"),Object(i.d)(a.e,null,Object(i.d)(d.a,{variants:{"1.x":Object(i.d)(a.c,null,"\n                    import { APIDeclaration } from 'papupata'\n                    import createInvokeImplementationAdapter from 'papupata/dist/main/invokeImplementationAdapter'\n                    import express from 'express'\n                    \n                    const app = express()\n                    const request = supertest(app)\n                    const API = new APIDeclaration()\n                    API.configure({\n                      app,\n                      baseURL: '',\n                      makeRequest: createInvokeImplementationAdapter()\n                    })\n                  "),"2.x":Object(i.d)(a.c,null,"\n                    import { APIDeclaration } from 'papupata'\n                    import createInvokeImplementationAdapter from 'papupata/adapters/invokeImplementation'\n                    import express from 'express'\n                    \n                    const app = express()\n                    const request = supertest(app)\n                    const API = new APIDeclaration()\n                    API.configure({\n                      app,\n                      baseURL: '',\n                      requestAdapter: createInvokeImplementationAdapter()\n                    })\n                  ")}}))))}function b(){return Object(i.d)(u.b,{context:"options",includeRequiredColumn:!0},Object(i.d)(u.c,{name:"createRequest",dataType:"(requestBase) => Request",required:!1},Object(i.d)("p",null,"This function is used to create the request passed to the API as if it was the express request. Its sole parameter is a very minimal version of the request, which you may use as a template."),Object(i.d)("p",null,"This method can be used to add any necessary fields to the request."),Object(i.d)(a.c,null,"\n           const createRequest = base => ({...base, headers: { 'content-type': 'text/html' }})\n       ")),Object(i.d)(u.c,{name:"assertResponse",dataType:"(response) => void",required:!1},Object(i.d)("p",null,"This function is called once the response is complete. It is passed a mock express response, allowing for making assertions to whatever it may contain."),Object(i.d)(a.c,null,"\n           const assertResponse = res => expect(res.statusCode).toEqual(400)\n       ")),Object(i.d)(u.d,{name:"withMiddleware",dataType:"boolean",required:!1},Object(i.d)("p",null,"By default, and if explicitly set to false only the API implementation is called and all middleware is ignored."),Object(i.d)("p",null,"If set to true, any express and papupata middleware on the route is run as normal for the requests.")))}},"z+su":function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return R})),n.d(t,"a",(function(){return C}));var a,l,r,u,c,d,o,i=n("AcpX"),s=n("Kg6r"),b=n("q1tI"),p=n.n(b),j=n("vOnD"),O=n("Wbzz"),m=n("3KYE"),f=n("qKvR"),v=j.a.tr(a||(a=Object(i.a)([""]))),h=j.a.td(l||(l=Object(i.a)([""]))),y=j.a.td(r||(r=Object(i.a)([""]))),x=j.a.td(u||(u=Object(i.a)([""]))),I=j.a.td(c||(c=Object(i.a)([""]))),q=j.a.td(d||(d=Object(i.a)([""]))),A=j.a.td(o||(o=Object(i.a)([""])));function k(e){var t=e.children,n=Object(b.useContext)(g).includeRequiredColumn;if(!n&&t)throw new Error("Being asked to show required cell, yet it does not exist");return n?Object(f.d)(q,null,t):null}var g=Object(b.createContext)({context:"",includeRequiredColumn:!1}),w=function(e){var t=e.name,n=e.children,a=Object(b.useContext)(g).context;return Object(f.d)(h,null,Object(f.d)(O.a,{to:"/api/"+a+"/"+t},n||t))},P=function(e){var t=e.children,n=e.context,a=e.includeRequiredColumn,l=e.includeAvailableFrom;return Object(f.d)(s.j,null,Object(f.d)(g.Provider,{value:{context:n,includeRequiredColumn:!!a}},Object(f.d)(m.a.Provider,{value:!!l},Object(f.d)(s.k,null,"Members"),Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Data type/return type"),Object(f.d)("th",null,"Description"),a&&Object(f.d)("th",null,"Required"),l&&Object(f.d)("th",null,"Introduced in")),Object(f.d)("tbody",null,t)))))},T=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.required,r=e.displayName,u=e.availableFrom,c=p.a.useContext(m.a);return Object(f.d)(v,null,Object(f.d)(w,{name:n},r),Object(f.d)(y,null,"method"),Object(f.d)(x,null,a),Object(f.d)(I,null,t),Object(f.d)(k,null,!0===l?"Yes":!1===l?"No":l),c?Object(f.d)(A,null,u):"")},R=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.required,r=e.availableFrom,u=e.link,c=p.a.useContext(m.a);return Object(f.d)(v,null,u?Object(f.d)(w,{name:n},n):Object(f.d)(h,null,n),Object(f.d)(y,null,"property"),Object(f.d)(x,null,a),Object(f.d)(I,null,t),Object(f.d)(k,null,!0===l?"Yes":!1===l?"No":l),c?Object(f.d)(A,null,r):"")},C=function(e){var t=e.children,n=e.name;return Object(f.d)(v,null,Object(f.d)(h,null,n),Object(f.d)(y,null,"property"),Object(f.d)(x,null,"n/a"),Object(f.d)(I,null,t,". Type type itself must be accessed using the typeof operator."))}}}]);
//# sourceMappingURL=component---src-pages-api-invoke-implementation-adapter-tsx-b759878f6f41789073e0.js.map