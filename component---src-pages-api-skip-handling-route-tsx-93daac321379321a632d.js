(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return A})),n.d(t,"a",(function(){return x})),n.d(t,"n",(function(){return I})),n.d(t,"h",(function(){return k})),n.d(t,"g",(function(){return q})),n.d(t,"f",(function(){return P})),n.d(t,"b",(function(){return R})),n.d(t,"e",(function(){return C})),n.d(t,"c",(function(){return K})),n.d(t,"d",(function(){return T})),n.d(t,"m",(function(){return D})),n.d(t,"l",(function(){return S}));var a,l,r,u,c,i,o,d,b,s=n("AcpX"),p=n("vOnD"),O=n("q1tI"),j=n.n(O),h=n("P+0o"),f=n("3KYE"),m=n("qKvR"),v=p.a.section(a||(a=Object(s.a)([""]))),y=p.a.h4(l||(l=Object(s.a)([""]))),g=p.a.h5(r||(r=Object(s.a)([""]))),w=p.a.section(u||(u=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),A=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Purpose"),t)},x=function(e){var t=e.version;return Object(m.d)(v,null,Object(m.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},I=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Usage"),t)},k=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(m.d)(v,null,Object(m.d)(f.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters",a&&": "+a),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Type"),Object(m.d)("th",null,"Description"),n&&Object(m.d)("th",null,"Introduced in"))),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},q=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,u=j.a.useContext(f.a);return Object(m.d)("tr",null,Object(m.d)("td",null,n),Object(m.d)("td",null,a),Object(m.d)("td",null,t),u&&Object(m.d)("td",null,r))},P=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Returns"),t)},R=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Caveats"),t)},C=function(e){var t=e.children;return Object(m.d)(v,null,Object(m.d)(y,null,"Examples"),t)},K=function(e){var t=e.children,n=e.label;return Object(m.d)(j.a.Fragment,null,n&&Object(m.d)(g,null,n),Object(m.d)(h.a,{language:"typescript"},t))},T=function(e){var t=e.children;return Object(m.d)(w,null,Object(m.d)(g,null,"Common to examples below:"),t)},D=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(m.d)(v,null,Object(m.d)(y,null,"Type parameeters"),Object(m.d)(f.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters"),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Default value"),Object(m.d)("th",null,"Description"),n?Object(m.d)("th",null,"Introduced in"):"")),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},F=p.a.tr(c||(c=Object(s.a)([""]))),H=p.a.td(i||(i=Object(s.a)([""]))),N=p.a.td(o||(o=Object(s.a)([""]))),E=p.a.td(d||(d=Object(s.a)([""]))),M=p.a.td(b||(b=Object(s.a)([""]))),S=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,u=j.a.useContext(f.a);return Object(m.d)(F,null,Object(m.d)(H,null,n),Object(m.d)(N,null,a),Object(m.d)(E,null,t),u?Object(m.d)(M,null,r):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a,l,r=n("AcpX"),u=n("q1tI"),c=n("vOnD"),i=n("qKvR"),o=c.a.div(a||(a=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),d=c.a.div(l||(l=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function b(e){var t=e.variants,n=e.isRecommendation,a=Object(u.useState)("2.x"),l=a[0],r=a[1],c=Object(u.useCallback)((function(e){r(e.target.value)}),[]);return Object(i.d)(o,null,Object(i.d)("select",{value:l,onChange:c},Object(i.d)("option",{value:"1.x"},"Papupata 1.x"),Object(i.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(i.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(l,e)})).map((function(e){return Object(i.d)("div",{key:e},t[e])})))}},c39s:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n("q1tI");var a=n("Kg6r"),l=n("TBFr"),r=n("jqoI"),u=n("NqE+"),c=n("MaSA"),i=n("+ego"),o=n("qKvR");function d(){return Object(o.d)(i.a,null,Object(o.d)(u.a,null,Object(o.d)(l.a,null,Object(o.d)("h1",null,"API Reference"),Object(o.d)("h2",null,"skipHandlingRoute")),Object(o.d)(a.c,null,"import {skipHandlingRoute} from 'papupata'"),Object(o.d)(a.a,{version:"1.5.0"}),Object(o.d)(a.i,null,"A token value a route implementation or papupata middleware can return to have express move on to the other route handlers and middleware."),Object(o.d)(a.n,null,Object(o.d)("p",null,"Most people will no need this, but there are a few use cases where this functionality can be useful."),Object(o.d)("p",null,"If routing needs are such, that there can be false positives for the route implementation, then this value can be used to defer the execution to other handlers. A common case would be serving HTML if the client expects it, and only running the API call itself for calls that have, say, Accept header requesting JSON."),Object(o.d)(c.a,{variants:{"1.x":Object(o.d)("p",null,"Another case would be when autoImplementAllAPIs is enabled, but you cannot actually implement all the APIs with papupata. Perhaps you need a pecualiar combination of middleware that make it more difficult, maybe you even want to defer to another papupata router. Or perhaps the route is implemented by a library. In these cases you can implement the route as one that always returns skipHandlingRoute to indicate that other code is responsible for it."),"2.x":Object(o.d)("p",null,"Another case would be when autoImplementAllAPIs is enabled (which it is by default), but you cannot actually implement all the APIs with papupata. Perhaps you need a pecualiar combination of middleware that make it more difficult, maybe you even want to defer to another papupata router. Or perhaps the route is implemented by a library. In these cases you can implement the route as one that always returns skipHandlingRoute to indicate that other code is responsible for it. Alternatively you can declare the API with the ",Object(o.d)(r.a,null,"disableAutoImplement")," option set to true, but that does leak an implementation detail to the declarations.")}})),Object(o.d)(a.e,null,Object(o.d)(a.c,{label:"Conditional skip"},"\n                api.implement(req => {\n                    if (req.headers.accept.includes('text/html')) return skipHandlingRoute\n                    return processRequest(req)\n                })\n            "),Object(o.d)(a.c,{label:"Defer execution to non-papupata implementation"},"\n                const api = API.declareGetAPI('/test').response<string>()\n                api.implement(() => skipHandlingRoute)\n                app.get('/test', (_req, res) => res.send('OK!'))\n            "))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return O}));var a,l,r,u=n("AcpX"),c=(n("NqE+"),n("TBFr"),n("+ego"),n("q1tI"),n("Kg6r")),i=n("vOnD"),o=n("qKvR");function d(e){var t=e.children;return Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Overview"),t)}var b=i.a.h4(a||(a=Object(u.a)([""]))),s=i.a.h5(l||(l=Object(u.a)(["\n  font-size: 1.1em;\n"])));function p(e){var t=e.content;return Object(o.d)("div",null,Object(o.d)(c.j,null,Object(o.d)(c.k,null,"Table of contents"),Object(o.d)("ul",null,t.map((function(e){return Object(o.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(o.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?s:b;return Object(o.d)(c.j,{id:e.anchor,key:e.anchor},Object(o.d)(t,null,e.heading),e.content)})))}var O=i.a.span(r||(r=Object(u.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-api-skip-handling-route-tsx-93daac321379321a632d.js.map