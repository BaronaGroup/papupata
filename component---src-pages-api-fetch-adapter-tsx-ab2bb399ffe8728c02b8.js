(self.webpackChunkpapupata_docs=self.webpackChunkpapupata_docs||[]).push([[6363],{1040:function(n,t,e){"use strict";e.d(t,{P:function(){return l}});var l=e(7294).createContext(!1)},9829:function(n,t,e){"use strict";e.d(t,{m:function(){return c}});var l,r,u=e(6848),a=(e(7294),e(366)),i=a.ZP.div(l||(l=(0,u.Z)(["\n  border: 2px dotted transparent;\n  padding: 10px;\n  outline: 5px solid transparent;\n"]))),o=e(3431),Z=(0,a.ZP)(i)(r||(r=(0,u.Z)(["\n  border-color: yellowgreen;\n  background-color: #ffffa7;\n  outline-color: #ffffa7;\n  margin: 20px;\n"]))),c=function(n){var t=n.children;return(0,o.tZ)(Z,null,t||"This section needs more work.")}},2275:function(n,t,e){"use strict";e.d(t,{Z:function(){return d}});var l,r,u=e(6848),a=e(7294),i=e(366),o=e(3431),Z=i.ZP.div(l||(l=(0,u.Z)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),c=i.ZP.div(r||(r=(0,u.Z)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function d(n){var t=n.variants,e=n.isRecommendation,l=(0,a.useState)("2.x"),r=l[0],u=l[1],i=(0,a.useCallback)((function(n){u(n.target.value)}),[]);return(0,o.tZ)(Z,null,(0,o.tZ)("select",{value:r,onChange:i},(0,o.tZ)("option",{value:"1.x"},"Papupata 1.x"),(0,o.tZ)("option",{value:"2.x"},"Papupata 2.x")),e&&(0,o.tZ)(c,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(n){return function(n,t){return"*"===t||t===n}(r,n)})).map((function(n){return(0,o.tZ)("div",{key:n},t[n])})))}},1724:function(n,t,e){"use strict";e.d(t,{$0:function(){return P},OT:function(){return b},ag:function(){return y},cY:function(){return A},l1:function(){return k},aE:function(){return I},d2:function(){return w},pR:function(){return T},by:function(){return C},yV:function(){return R},en:function(){return D},iT:function(){return F},Vo:function(){return V},lS:function(){return z}});var l,r,u,a,i,o,Z,c,d,s=e(6848),p=e(366),f=e(7294),h=e(1808),v=e(1040),m=e(3431),P=p.ZP.section(l||(l=(0,s.Z)([""]))),b=p.ZP.h4(r||(r=(0,s.Z)([""]))),x=p.ZP.h5(u||(u=(0,s.Z)([""]))),g=p.ZP.section(a||(a=(0,s.Z)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),y=function(n){var t=n.children;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Purpose"),t)},A=function(n){var t=n.version;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},k=function(n){var t=n.children;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Usage"),t)},I=function(n){var t=n.children,e=n.includeAvailableFrom,l=n.label;return(0,m.tZ)(P,null,(0,m.tZ)(v.P.Provider,{value:!!e},(0,m.tZ)(b,null,"Parameters",l&&": "+l),t?(0,m.tZ)("table",null,(0,m.tZ)("thead",null,(0,m.tZ)("tr",null,(0,m.tZ)("th",null,"Name"),(0,m.tZ)("th",null,"Type"),(0,m.tZ)("th",null,"Description"),e&&(0,m.tZ)("th",null,"Introduced in"))),(0,m.tZ)("tbody",null,t)):(0,m.tZ)("p",null,"There are no parameters.")))},w=function(n){var t=n.children,e=n.name,l=n.dataType,r=n.availableFrom,u=void 0===r?"1.0.0":r,a=f.useContext(v.P);return(0,m.tZ)("tr",null,(0,m.tZ)("td",null,e),(0,m.tZ)("td",null,l),(0,m.tZ)("td",null,t),a&&(0,m.tZ)("td",null,u))},T=function(n){var t=n.children;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Returns"),t)},C=function(n){var t=n.children;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Caveats"),t)},R=function(n){var t=n.children;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Examples"),t)},D=function(n){var t=n.children,e=n.label;return(0,m.tZ)(f.Fragment,null,e&&(0,m.tZ)(x,null,e),(0,m.tZ)(h.E,{language:"typescript"},t))},F=function(n){var t=n.children;return(0,m.tZ)(g,null,(0,m.tZ)(x,null,"Common to examples below:"),t)},V=function(n){var t=n.children,e=n.includeAvailableFrom;return(0,m.tZ)(P,null,(0,m.tZ)(b,null,"Type parameeters"),(0,m.tZ)(v.P.Provider,{value:!!e},(0,m.tZ)(b,null,"Parameters"),t?(0,m.tZ)("table",null,(0,m.tZ)("thead",null,(0,m.tZ)("tr",null,(0,m.tZ)("th",null,"Name"),(0,m.tZ)("th",null,"Default value"),(0,m.tZ)("th",null,"Description"),e?(0,m.tZ)("th",null,"Introduced in"):"")),(0,m.tZ)("tbody",null,t)):(0,m.tZ)("p",null,"There are no parameters.")))},q=p.ZP.tr(i||(i=(0,s.Z)([""]))),E=p.ZP.td(o||(o=(0,s.Z)([""]))),O=p.ZP.td(Z||(Z=(0,s.Z)([""]))),U=p.ZP.td(c||(c=(0,s.Z)([""]))),j=p.ZP.td(d||(d=(0,s.Z)([""]))),z=function(n){var t=n.children,e=n.name,l=n.defaultValue,r=n.availableFrom,u=void 0===r?"none":r,a=f.useContext(v.P);return(0,m.tZ)(q,null,(0,m.tZ)(E,null,e),(0,m.tZ)(O,null,l),(0,m.tZ)(U,null,t),a?(0,m.tZ)(j,null,u):"")}},334:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return c}});e(1879),e(7294);var l=e(387),r=e(7614),u=e(832),a=e(1724),i=e(9829),o=e(2275),Z=e(3431);function c(){return(0,Z.tZ)(l.Z,null,(0,Z.tZ)(r.Z,null,(0,Z.tZ)(u.Z,null,(0,Z.tZ)("h1",null,"API Reference"),(0,Z.tZ)("h2",null,"fetchAdapter")),(0,Z.tZ)(o.Z,{variants:{"1.x":(0,Z.tZ)(a.en,null,"import fetchAdapter from 'papupata/dist/main/fetchAdapter'"),"2.x":(0,Z.tZ)(a.en,null,"import fetchAdapter from 'papupata/adapters/fetch")}}),(0,Z.tZ)(a.ag,null,"An adapter that utilizes fetch to invoke APIs"),(0,Z.tZ)(i.m,null,(0,Z.tZ)("p",null,"The adapter is not documented, and is not of all that high quality as it is and it makes various non-general assumptions. It should serve to give you some ideas on how a proper fetch adapter might be implemented, though.")),(0,Z.tZ)(a.yV,null,(0,Z.tZ)(o.Z,{isRecommendation:!0,variants:{"1.x":(0,Z.tZ)(a.en,null,"\n                    const API = new APIDeclaration()\n                    API.configure({\n                      baseURL: '',\n                      makeRequest: fetchAdapter\n                    })\n                  "),"2.x":(0,Z.tZ)(a.en,null,"\n                    const API = new APIDeclaration()\n                    API.configure({\n                      baseURL: '',\n                      requestAdapter: fetchAdapter\n                    })\n                  ")}}))))}}}]);
//# sourceMappingURL=component---src-pages-api-fetch-adapter-tsx-ab2bb399ffe8728c02b8.js.map