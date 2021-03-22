(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"3KYE":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var l=n("q1tI"),a=l.createContext(!1)},Kg6r:function(t,e,n){"use strict";n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return I})),n.d(e,"i",(function(){return k})),n.d(e,"a",(function(){return y})),n.d(e,"n",(function(){return w})),n.d(e,"h",(function(){return g})),n.d(e,"g",(function(){return D})),n.d(e,"f",(function(){return T})),n.d(e,"b",(function(){return F})),n.d(e,"e",(function(){return x})),n.d(e,"c",(function(){return q})),n.d(e,"d",(function(){return C})),n.d(e,"m",(function(){return K})),n.d(e,"l",(function(){return J}));var l,a,c,u,r,o,d,i,b,s=n("AcpX"),O=n("vOnD"),j=n("q1tI"),m=n.n(j),h=n("P+0o"),p=n("3KYE"),f=n("qKvR"),v=O.a.section(l||(l=Object(s.a)([""]))),I=O.a.h4(a||(a=Object(s.a)([""]))),P=O.a.h5(c||(c=Object(s.a)([""]))),A=O.a.section(u||(u=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),k=function(t){var e=t.children;return Object(f.d)(v,null,Object(f.d)(I,null,"Purpose"),e)},y=function(t){var e=t.version;return Object(f.d)(v,null,Object(f.d)(I,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},w=function(t){var e=t.children;return Object(f.d)(v,null,Object(f.d)(I,null,"Usage"),e)},g=function(t){var e=t.children,n=t.includeAvailableFrom,l=t.label;return Object(f.d)(v,null,Object(f.d)(p.a.Provider,{value:!!n},Object(f.d)(I,null,"Parameters",l&&": "+l),e?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,e)):Object(f.d)("p",null,"There are no parameters.")))},D=function(t){var e=t.children,n=t.name,l=t.dataType,a=t.availableFrom,c=void 0===a?"1.0.0":a,u=m.a.useContext(p.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,l),Object(f.d)("td",null,e),u&&Object(f.d)("td",null,c))},T=function(t){var e=t.children;return Object(f.d)(v,null,Object(f.d)(I,null,"Returns"),e)},F=function(t){var e=t.children;return Object(f.d)(v,null,Object(f.d)(I,null,"Caveats"),e)},x=function(t){var e=t.children;return Object(f.d)(v,null,Object(f.d)(I,null,"Examples"),e)},q=function(t){var e=t.children,n=t.label;return Object(f.d)(m.a.Fragment,null,n&&Object(f.d)(P,null,n),Object(f.d)(h.a,{language:"typescript"},e))},C=function(t){var e=t.children;return Object(f.d)(A,null,Object(f.d)(P,null,"Common to examples below:"),e)},K=function(t){var e=t.children,n=t.includeAvailableFrom;return Object(f.d)(v,null,Object(f.d)(I,null,"Type parameeters"),Object(f.d)(p.a.Provider,{value:!!n},Object(f.d)(I,null,"Parameters"),e?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,e)):Object(f.d)("p",null,"There are no parameters.")))},E=O.a.tr(r||(r=Object(s.a)([""]))),R=O.a.td(o||(o=Object(s.a)([""]))),N=O.a.td(d||(d=Object(s.a)([""]))),V=O.a.td(i||(i=Object(s.a)([""]))),z=O.a.td(b||(b=Object(s.a)([""]))),J=function(t){var e=t.children,n=t.name,l=t.defaultValue,a=t.availableFrom,c=void 0===a?"none":a,u=m.a.useContext(p.a);return Object(f.d)(E,null,Object(f.d)(R,null,n),Object(f.d)(N,null,l),Object(f.d)(V,null,e),u?Object(f.d)(z,null,c):"")}},bwO0:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));var l=n("+ego"),a=n("NqE+"),c=n("TBFr"),u=n("Kg6r"),r=n("Wbzz"),o=(n("q1tI"),n("qKvR"));function d(){return Object(o.d)(l.a,null,Object(o.d)(a.a,null,Object(o.d)(c.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"class DeclaredAPI"),Object(o.d)("h3",null,"method mock")),Object(o.d)(u.i,null,"Causes API invocations to be omitted, instead returning a mock value"),Object(o.d)(u.a,{version:"1.1.0"}),Object(o.d)(u.n,null,Object(o.d)("p",null,"This function is meant to help with testing components that use papupata. If you only wish to mock a single invocation, you might want to use the ",Object(o.d)(r.a,{to:"/api/DeclaredAPI/mockOnce"},"mockOnce")," method instead, as it automatically removes the mock implementation as soon as the invocation has been completed."),Object(o.d)("p",null,"If you wish to restore the API to its normal state after mocking it, use the ",Object(o.d)(r.a,{to:"/api/DeclaredAPI/unmock"},"unmock")," ","method, or the ",Object(o.d)(r.a,{to:"/api/APIDeclaration/unmockAll"},"unmockAll")," method of the API declaration")),Object(o.d)(u.h,null,Object(o.d)(u.g,{name:"mockValue",dataType:"Function or value"},Object(o.d)("p",null,"If a function, that function is invoked when the API is invoked and its return value is returned as the mock response from the API."),Object(o.d)("p",null,"Otherwise the value given as this parameter is returned as the mock response from the API."))),Object(o.d)(u.f,null,"nothing"),Object(o.d)(u.e,null,Object(o.d)(u.c,{label:"Value"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock('test')\n            \n            const value = await myAPI() // value is now \"test\"\n            \n            myAPI.unmock()\n          "),Object(o.d)(u.c,{label:"Function"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock(() => 'test')\n            \n            const value = await myAPI() // value is now \"test\"\n            \n            myAPI.unmock()\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-mock-tsx-96dc3b8cf1b2df619bd5.js.map