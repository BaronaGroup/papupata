(self.webpackChunkpapupata_docs=self.webpackChunkpapupata_docs||[]).push([[2315],{60:function(t,n,e){"use strict";e.d(n,{Z:function(){return m}});var l,r=e(5761),u=(e(7294),e(2386)),a=e(7100),i=e(7614),o=e(832),Z=e(1724),c=e(1683),d=e(5444),s=e(3583),p=e(2512),f=e(5361),h=e(3431),v=s.ZP.h5(l||(l=(0,r.Z)(["\n  font-size: 1rem;\n"])));function m(t){var n=t.method,e=t.availableFrom;return(0,h.tZ)(a.Z,null,(0,h.tZ)(i.Z,null,(0,h.tZ)(o.Z,null,(0,h.tZ)("h1",null,"API Reference"),(0,h.tZ)("h2",null,"class APIDeclaration"),(0,h.tZ)("h3",null,"method declare",(0,u.z)(n),"API")),e&&(0,h.tZ)(Z.cY,{version:e}),(0,h.tZ)(Z.ag,null,"Used for declaring an API using the HTTP ",n.toUpperCase()," method"),(0,h.tZ)(Z.l1,null,"APIs can be declared at any time."),(0,h.tZ)(Z.aE,null,(0,h.tZ)(Z.d2,{name:"path",dataType:"string"},"Path to the API under the base URL of the APIDeclaration.",(0,h.tZ)("p",null,"Version 1.8.0 onwards: If you wish to declare different APIs on the same path but different query parameters, see"," ",(0,h.tZ)(d.rU,{to:"/guides/declaring/query-based-variants"},"Query-based variants")," for more information.")),(0,h.tZ)(Z.d2,{name:"routeOptions",dataType:"varies"},"Options to the route. Type type is specified by the RouteOptions type parameter of the API declaration. They have no inherent meaning in papupata, they are simply stored to be used by the application."),(0,h.tZ)(Z.d2,{name:"papupataOptions",availableFrom:"2.0.0",dataType:(0,h.tZ)("a",{href:"#papupataRouteOptions"},"PapupataRouteOptions")},"Route-specific options papupata is aware of.")),(0,h.tZ)(Z.pR,null,(0,h.tZ)(c.K,null)),(0,h.tZ)(v,{id:"papupataRouteOptions"},"PapupataRouteOptions"),(0,h.tZ)(p.iu,{context:"DeclareAPI"},(0,h.tZ)(p.iq,{name:"disableAutoImplement",dataType:"boolean"},"Prevents automatic implementation of this route (as producing 501) even when the configuration option"," ",(0,h.tZ)(f.If,null,"autoImplementAllAPIs")," is set to true (which is its default value in papupata 2.x). This is can be useful when there are a few routes that must be implemented in other ways for whatever reason."),(0,h.tZ)(p.iq,{name:"validationBehavior",dataType:"ValidationBehavior"},(0,h.tZ)("p",null,"Can be used to override the validation behavior configured to be the default for all APIs. Papupata's own default is to throw upon validation failure, though an API declaration can be configured with a different default as well. A route-specific behavior can be used with this field."),(0,h.tZ)("p",null,"The valid values are ",(0,h.tZ)(f.If,null,"ValidationBehavior.THROW")," (which is the default descibed above) and"," ",(0,h.tZ)(f.If,null,"ValidationBehavior.REROUTE")," which simply ignores the route if the parameters are not valid."),(0,h.tZ)("p",null,"ValidationBehavior can be imported from papupata/config"))),(0,h.tZ)(Z.yV,null,(0,h.tZ)(Z.en,null,"\n            import {APIDeclaration} from 'papupata'\n            const api = new APIDeclaration()\n\n            const MyAPI = api.declare"+(0,u.z)(n)+"API('/api/person')\n              .response<string>()\n          "))))}},1040:function(t,n,e){"use strict";e.d(n,{P:function(){return l}});var l=e(7294).createContext(!1)},1724:function(t,n,e){"use strict";e.d(n,{$0:function(){return P},OT:function(){return y},ag:function(){return g},cY:function(){return T},l1:function(){return w},aE:function(){return A},d2:function(){return C},pR:function(){return x},by:function(){return R},yV:function(){return O},en:function(){return D},iT:function(){return q},Vo:function(){return F},lS:function(){return N}});var l,r,u,a,i,o,Z,c,d,s=e(5761),p=e(3583),f=e(7294),h=e(1808),v=e(1040),m=e(3431),P=p.ZP.section(l||(l=(0,s.Z)([""]))),y=p.ZP.h4(r||(r=(0,s.Z)([""]))),b=p.ZP.h5(u||(u=(0,s.Z)([""]))),I=p.ZP.section(a||(a=(0,s.Z)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),g=function(t){var n=t.children;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Purpose"),n)},T=function(t){var n=t.version;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},w=function(t){var n=t.children;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Usage"),n)},A=function(t){var n=t.children,e=t.includeAvailableFrom,l=t.label;return(0,m.tZ)(P,null,(0,m.tZ)(v.P.Provider,{value:!!e},(0,m.tZ)(y,null,"Parameters",l&&": "+l),n?(0,m.tZ)("table",null,(0,m.tZ)("thead",null,(0,m.tZ)("tr",null,(0,m.tZ)("th",null,"Name"),(0,m.tZ)("th",null,"Type"),(0,m.tZ)("th",null,"Description"),e&&(0,m.tZ)("th",null,"Introduced in"))),(0,m.tZ)("tbody",null,n)):(0,m.tZ)("p",null,"There are no parameters.")))},C=function(t){var n=t.children,e=t.name,l=t.dataType,r=t.availableFrom,u=void 0===r?"1.0.0":r,a=f.useContext(v.P);return(0,m.tZ)("tr",null,(0,m.tZ)("td",null,e),(0,m.tZ)("td",null,l),(0,m.tZ)("td",null,n),a&&(0,m.tZ)("td",null,u))},x=function(t){var n=t.children;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Returns"),n)},R=function(t){var n=t.children;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Caveats"),n)},O=function(t){var n=t.children;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Examples"),n)},D=function(t){var n=t.children,e=t.label;return(0,m.tZ)(f.Fragment,null,e&&(0,m.tZ)(b,null,e),(0,m.tZ)(h.E,{language:"typescript"},n))},q=function(t){var n=t.children;return(0,m.tZ)(I,null,(0,m.tZ)(b,null,"Common to examples below:"),n)},F=function(t){var n=t.children,e=t.includeAvailableFrom;return(0,m.tZ)(P,null,(0,m.tZ)(y,null,"Type parameeters"),(0,m.tZ)(v.P.Provider,{value:!!e},(0,m.tZ)(y,null,"Parameters"),n?(0,m.tZ)("table",null,(0,m.tZ)("thead",null,(0,m.tZ)("tr",null,(0,m.tZ)("th",null,"Name"),(0,m.tZ)("th",null,"Default value"),(0,m.tZ)("th",null,"Description"),e?(0,m.tZ)("th",null,"Introduced in"):"")),(0,m.tZ)("tbody",null,n)):(0,m.tZ)("p",null,"There are no parameters.")))},U=p.ZP.tr(i||(i=(0,s.Z)([""]))),V=p.ZP.td(o||(o=(0,s.Z)([""]))),k=p.ZP.td(Z||(Z=(0,s.Z)([""]))),B=p.ZP.td(c||(c=(0,s.Z)([""]))),E=p.ZP.td(d||(d=(0,s.Z)([""]))),N=function(t){var n=t.children,e=t.name,l=t.defaultValue,r=t.availableFrom,u=void 0===r?"none":r,a=f.useContext(v.P);return(0,m.tZ)(U,null,(0,m.tZ)(V,null,e),(0,m.tZ)(k,null,l),(0,m.tZ)(B,null,n),a?(0,m.tZ)(E,null,u):"")}},5361:function(t,n,e){"use strict";e.d(n,{g2:function(){return c},eC:function(){return p},If:function(){return f}});var l,r,u,a=e(5761),i=(e(7294),e(1724)),o=e(3583),Z=e(3431);function c(t){var n=t.children;return(0,Z.tZ)(i.$0,null,(0,Z.tZ)(i.OT,null,"Overview"),n)}var d=o.ZP.h4(l||(l=(0,a.Z)([""]))),s=o.ZP.h5(r||(r=(0,a.Z)(["\n  font-size: 1.1em;\n"])));function p(t){var n=t.content;return(0,Z.tZ)("div",null,(0,Z.tZ)(i.$0,null,(0,Z.tZ)(i.OT,null,"Table of contents"),(0,Z.tZ)("ul",null,n.map((function(t){return(0,Z.tZ)("li",{style:{marginLeft:18*(t.level||0)},key:t.anchor},(0,Z.tZ)("a",{href:"#"+t.anchor},t.heading))})))),n.map((function(t){var n=t.level?s:d;return(0,Z.tZ)(i.$0,{id:t.anchor,key:t.anchor},(0,Z.tZ)(n,null,t.heading),t.content)})))}var f=o.ZP.span(u||(u=(0,a.Z)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))},1683:function(t,n,e){"use strict";e.d(n,{K:function(){return u},e:function(){return a}});e(7294);var l=e(5444),r=e(3431);function u(){return(0,r.tZ)(l.rU,{to:"/api/PartiallyDeclaredAPI"},"PartiallyDeclaredAPI")}function a(){return(0,r.tZ)(l.rU,{to:"/api/DeclaredAPI"},"DeclaredAPI")}},2512:function(t,n,e){"use strict";e.d(n,{iu:function(){return x},C9:function(){return R},iq:function(){return O},JM:function(){return D}});var l,r,u,a,i,o,Z,c=e(5761),d=e(1724),s=e(7294),p=e(3583),f=e(5444),h=e(1040),v=e(3431),m=p.ZP.tr(l||(l=(0,c.Z)([""]))),P=p.ZP.td(r||(r=(0,c.Z)([""]))),y=p.ZP.td(u||(u=(0,c.Z)([""]))),b=p.ZP.td(a||(a=(0,c.Z)([""]))),I=p.ZP.td(i||(i=(0,c.Z)([""]))),g=p.ZP.td(o||(o=(0,c.Z)([""]))),T=p.ZP.td(Z||(Z=(0,c.Z)([""])));function w(t){var n=t.children,e=(0,s.useContext)(A).includeRequiredColumn;if(!e&&n)throw new Error("Being asked to show required cell, yet it does not exist");return e?(0,v.tZ)(g,null,n):null}var A=(0,s.createContext)({context:"",includeRequiredColumn:!1}),C=function(t){var n=t.name,e=t.children,l=(0,s.useContext)(A).context;return(0,v.tZ)(P,null,(0,v.tZ)(f.rU,{to:"/api/"+l+"/"+n},e||n))},x=function(t){var n=t.children,e=t.context,l=t.includeRequiredColumn,r=t.includeAvailableFrom;return(0,v.tZ)(d.$0,null,(0,v.tZ)(A.Provider,{value:{context:e,includeRequiredColumn:!!l}},(0,v.tZ)(h.P.Provider,{value:!!r},(0,v.tZ)(d.OT,null,"Members"),(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Type"),(0,v.tZ)("th",null,"Data type/return type"),(0,v.tZ)("th",null,"Description"),l&&(0,v.tZ)("th",null,"Required"),r&&(0,v.tZ)("th",null,"Introduced in")),(0,v.tZ)("tbody",null,n)))))},R=function(t){var n=t.children,e=t.name,l=t.dataType,r=t.required,u=t.displayName,a=t.availableFrom,i=s.useContext(h.P);return(0,v.tZ)(m,null,(0,v.tZ)(C,{name:e},u),(0,v.tZ)(y,null,"method"),(0,v.tZ)(b,null,l),(0,v.tZ)(I,null,n),(0,v.tZ)(w,null,!0===r?"Yes":!1===r?"No":r),i?(0,v.tZ)(T,null,a):"")},O=function(t){var n=t.children,e=t.name,l=t.dataType,r=t.required,u=t.availableFrom,a=t.link,i=s.useContext(h.P);return(0,v.tZ)(m,null,a?(0,v.tZ)(C,{name:e},e):(0,v.tZ)(P,null,e),(0,v.tZ)(y,null,"property"),(0,v.tZ)(b,null,l),(0,v.tZ)(I,null,n),(0,v.tZ)(w,null,!0===r?"Yes":!1===r?"No":r),i?(0,v.tZ)(T,null,u):"")},D=function(t){var n=t.children,e=t.name;return(0,v.tZ)(m,null,(0,v.tZ)(P,null,e),(0,v.tZ)(y,null,"property"),(0,v.tZ)(b,null,"n/a"),(0,v.tZ)(I,null,n,". Type type itself must be accessed using the typeof operator."))}},9022:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return u}});e(7294),e(1879);var l=e(60),r=e(3431);function u(){return(0,r.tZ)(l.Z,{method:"post"})}},1879:function(t,n,e){"use strict";e(7614),e(832),e(7100)},2386:function(t,n,e){"use strict";function l(t){return t[0].toUpperCase()+t.substr(1).toLowerCase()}e.d(n,{z:function(){return l}})}}]);
//# sourceMappingURL=component---src-pages-api-api-declaration-declare-post-api-tsx-02dc320974bf2fbd6386.js.map