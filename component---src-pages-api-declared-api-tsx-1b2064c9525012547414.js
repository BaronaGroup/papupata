(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},JEDe:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n("q1tI");var a=n("+ego"),l=n("NqE+"),r=n("TBFr"),d=n("Kg6r"),c=n("z+su"),u=n("qKvR");function i(){return Object(u.d)(a.a,null,Object(u.d)(l.a,null,Object(u.d)(r.a,null,Object(u.d)("h1",null,"API Reference"),Object(u.d)("h2",null,"interface DeclaredAPI")),Object(u.d)(d.i,null,"Represents a declared API and allow interacting with it."),Object(u.d)(d.n,null,Object(u.d)("p",null,'Technically there is nothing called "DeclaredAPI" in the code base. This is simply a representation of what is returned when an API has been declared.'),Object(u.d)("p",null,"Some of the types used for the API are exposed in an unusual fashion. In the future we might look into adding some wrapper types that allow for more conventional means for accessing them.")),Object(u.d)(c.b,{context:"DeclaredAPI"},Object(u.d)(c.c,{name:"invoke",displayName:"()",dataType:"Promise<ResponseType>"},"DeclaredAPI itself is a function, which can be called to call the API itself. The response is returned wrapped in a promise. Error handling is dependant on the adapter being used."),Object(u.d)(c.c,{name:"getURL",dataType:"string"},"Returns URL to the API."),Object(u.d)(c.c,{name:"implement",dataType:"void"},"Implement an API."),Object(u.d)(c.c,{name:"implementWithMiddleware",dataType:"void"},"Implement an API, providing additional middleware for it."),Object(u.d)(c.d,{name:"implementation",dataType:"Function",availableFrom:"1.5.0"},"The current implementation for the API"),Object(u.d)(c.d,{name:"implementationMiddleware",dataType:"object",availableFrom:"1.5.0"},"Middleware for the current implementation"),Object(u.d)(c.d,{name:"method",dataType:"string",availableFrom:"1.5.0"},"The method of the api"),Object(u.d)(c.d,{name:"apiDeclaration",dataType:"APIDeclaration",availableFrom:"1.5.0"},"The API declaration on which this API was declared."),Object(u.d)(c.d,{name:"implementation",dataType:"Function",availableFrom:"1.5.0"},"The current implementation for the API"),Object(u.d)(c.d,{name:"apiUrlParameters",dataType:"object",availableFrom:"1.5.0",link:!0},"Exposes the path and query parameters of the API."),Object(u.d)(c.d,{name:"path",dataType:"string",availableFrom:"1.5.0"},"The path of the API, with path parameters left as placeholders. If you want a full URL, use the getURL method."),Object(u.d)(c.a,{name:"ResponseType"},"The type of the response."),Object(u.d)(c.a,{name:"ServerResponseType"},"The type of the response as the server returns it."),Object(u.d)(c.a,{name:"CallArgsType"},"The type of the parameter object passed to invoke the API."),Object(u.d)(c.a,{name:"RequestType"},"The type of the modified express request passed to the impementing function.")),Object(u.d)(d.e,null,Object(u.d)(d.c,{label:"Using the exposed types"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:pathParam')\n              .response<string>()\n\n            type RespType = typeof myAPI['ResponseType']\n            // RespType is now string\n          "))))}},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return I})),n.d(t,"a",(function(){return g})),n.d(t,"n",(function(){return A})),n.d(t,"h",(function(){return w})),n.d(t,"g",(function(){return R})),n.d(t,"f",(function(){return x})),n.d(t,"b",(function(){return q})),n.d(t,"e",(function(){return F})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return C})),n.d(t,"m",(function(){return k})),n.d(t,"l",(function(){return z}));var a,l,r,d,c,u,i,o,b,j=n("AcpX"),s=n("vOnD"),O=n("q1tI"),p=n.n(O),h=n("P+0o"),m=n("3KYE"),f=n("qKvR"),v=s.a.section(a||(a=Object(j.a)([""]))),y=s.a.h4(l||(l=Object(j.a)([""]))),T=s.a.h5(r||(r=Object(j.a)([""]))),P=s.a.section(d||(d=Object(j.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),I=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(y,null,"Purpose"),t)},g=function(e){var t=e.version;return Object(f.d)(v,null,Object(f.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},A=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(y,null,"Usage"),t)},w=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(v,null,Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(y,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},R=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,d=p.a.useContext(m.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),d&&Object(f.d)("td",null,r))},x=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(y,null,"Returns"),t)},q=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(y,null,"Caveats"),t)},F=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(y,null,"Examples"),t)},D=function(e){var t=e.children,n=e.label;return Object(f.d)(p.a.Fragment,null,n&&Object(f.d)(T,null,n),Object(f.d)(h.a,{language:"typescript"},t))},C=function(e){var t=e.children;return Object(f.d)(P,null,Object(f.d)(T,null,"Common to examples below:"),t)},k=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(v,null,Object(f.d)(y,null,"Type parameeters"),Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(y,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},E=s.a.tr(c||(c=Object(j.a)([""]))),K=s.a.td(u||(u=Object(j.a)([""]))),N=s.a.td(i||(i=Object(j.a)([""]))),U=s.a.td(o||(o=Object(j.a)([""]))),Y=s.a.td(b||(b=Object(j.a)([""]))),z=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,d=p.a.useContext(m.a);return Object(f.d)(E,null,Object(f.d)(K,null,n),Object(f.d)(N,null,a),Object(f.d)(U,null,t),d?Object(f.d)(Y,null,r):"")}},"z+su":function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return q})),n.d(t,"d",(function(){return F})),n.d(t,"a",(function(){return D}));var a,l,r,d,c,u,i,o=n("AcpX"),b=n("Kg6r"),j=n("q1tI"),s=n.n(j),O=n("vOnD"),p=n("Wbzz"),h=n("3KYE"),m=n("qKvR"),f=O.a.tr(a||(a=Object(o.a)([""]))),v=O.a.td(l||(l=Object(o.a)([""]))),y=O.a.td(r||(r=Object(o.a)([""]))),T=O.a.td(d||(d=Object(o.a)([""]))),P=O.a.td(c||(c=Object(o.a)([""]))),I=O.a.td(u||(u=Object(o.a)([""]))),g=O.a.td(i||(i=Object(o.a)([""])));function A(e){var t=e.children,n=Object(j.useContext)(w).includeRequiredColumn;if(!n&&t)throw new Error("Being asked to show required cell, yet it does not exist");return n?Object(m.d)(I,null,t):null}var w=Object(j.createContext)({context:"",includeRequiredColumn:!1}),R=function(e){var t=e.name,n=e.children,a=Object(j.useContext)(w).context;return Object(m.d)(v,null,Object(m.d)(p.a,{to:"/api/"+a+"/"+t},n||t))},x=function(e){var t=e.children,n=e.context,a=e.includeRequiredColumn,l=e.includeAvailableFrom;return Object(m.d)(b.j,null,Object(m.d)(w.Provider,{value:{context:n,includeRequiredColumn:!!a}},Object(m.d)(h.a.Provider,{value:!!l},Object(m.d)(b.k,null,"Members"),Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Type"),Object(m.d)("th",null,"Data type/return type"),Object(m.d)("th",null,"Description"),a&&Object(m.d)("th",null,"Required"),l&&Object(m.d)("th",null,"Introduced in")),Object(m.d)("tbody",null,t)))))},q=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.required,r=e.displayName,d=e.availableFrom,c=s.a.useContext(h.a);return Object(m.d)(f,null,Object(m.d)(R,{name:n},r),Object(m.d)(y,null,"method"),Object(m.d)(T,null,a),Object(m.d)(P,null,t),Object(m.d)(A,null,!0===l?"Yes":!1===l?"No":l),c?Object(m.d)(g,null,d):"")},F=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.required,r=e.availableFrom,d=e.link,c=s.a.useContext(h.a);return Object(m.d)(f,null,d?Object(m.d)(R,{name:n},n):Object(m.d)(v,null,n),Object(m.d)(y,null,"property"),Object(m.d)(T,null,a),Object(m.d)(P,null,t),Object(m.d)(A,null,!0===l?"Yes":!1===l?"No":l),c?Object(m.d)(g,null,r):"")},D=function(e){var t=e.children,n=e.name;return Object(m.d)(f,null,Object(m.d)(v,null,n),Object(m.d)(y,null,"property"),Object(m.d)(T,null,"n/a"),Object(m.d)(P,null,t,". Type type itself must be accessed using the typeof operator."))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-tsx-1b2064c9525012547414.js.map