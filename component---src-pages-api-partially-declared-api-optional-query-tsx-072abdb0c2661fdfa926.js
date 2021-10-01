(self.webpackChunkpapupata_docs=self.webpackChunkpapupata_docs||[]).push([[3741],{1040:function(n,t,e){"use strict";e.d(t,{P:function(){return r}});var r=e(7294).createContext(!1)},8567:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(5444),l=(e(7294),e(3431));function u(){return(0,l.tZ)(r.rU,{to:"/api/PartiallyDeclaredAPI/TypeMapping"},"TypeMapping")}},2275:function(n,t,e){"use strict";e.d(t,{Z:function(){return s}});var r,l,u=e(5761),a=e(7294),i=e(3583),o=e(3431),c=i.ZP.div(r||(r=(0,u.Z)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),Z=i.ZP.div(l||(l=(0,u.Z)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function s(n){var t=n.variants,e=n.isRecommendation,r=(0,a.useState)("2.x"),l=r[0],u=r[1],i=(0,a.useCallback)((function(n){u(n.target.value)}),[]);return(0,o.tZ)(c,null,(0,o.tZ)("select",{value:l,onChange:i},(0,o.tZ)("option",{value:"1.x"},"Papupata 1.x"),(0,o.tZ)("option",{value:"2.x"},"Papupata 2.x")),e&&(0,o.tZ)(Z,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(n){return function(n,t){return"*"===t||t===n}(l,n)})).map((function(n){return(0,o.tZ)("div",{key:n},t[n])})))}},1724:function(n,t,e){"use strict";e.d(t,{$0:function(){return P},OT:function(){return h},ag:function(){return q},cY:function(){return I},l1:function(){return A},aE:function(){return x},d2:function(){return w},pR:function(){return D},by:function(){return T},yV:function(){return k},en:function(){return U},iT:function(){return C},Vo:function(){return R},lS:function(){return V}});var r,l,u,a,i,o,c,Z,s,p=e(5761),d=e(3583),f=e(7294),m=e(1808),y=e(1040),v=e(3431),P=d.ZP.section(r||(r=(0,p.Z)([""]))),h=d.ZP.h4(l||(l=(0,p.Z)([""]))),b=d.ZP.h5(u||(u=(0,p.Z)([""]))),g=d.ZP.section(a||(a=(0,p.Z)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),q=function(n){var t=n.children;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Purpose"),t)},I=function(n){var t=n.version;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},A=function(n){var t=n.children;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Usage"),t)},x=function(n){var t=n.children,e=n.includeAvailableFrom,r=n.label;return(0,v.tZ)(P,null,(0,v.tZ)(y.P.Provider,{value:!!e},(0,v.tZ)(h,null,"Parameters",r&&": "+r),t?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Type"),(0,v.tZ)("th",null,"Description"),e&&(0,v.tZ)("th",null,"Introduced in"))),(0,v.tZ)("tbody",null,t)):(0,v.tZ)("p",null,"There are no parameters.")))},w=function(n){var t=n.children,e=n.name,r=n.dataType,l=n.availableFrom,u=void 0===l?"1.0.0":l,a=f.useContext(y.P);return(0,v.tZ)("tr",null,(0,v.tZ)("td",null,e),(0,v.tZ)("td",null,r),(0,v.tZ)("td",null,t),a&&(0,v.tZ)("td",null,u))},D=function(n){var t=n.children;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Returns"),t)},T=function(n){var t=n.children;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Caveats"),t)},k=function(n){var t=n.children;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Examples"),t)},U=function(n){var t=n.children,e=n.label;return(0,v.tZ)(f.Fragment,null,e&&(0,v.tZ)(b,null,e),(0,v.tZ)(m.E,{language:"typescript"},t))},C=function(n){var t=n.children;return(0,v.tZ)(g,null,(0,v.tZ)(b,null,"Common to examples below:"),t)},R=function(n){var t=n.children,e=n.includeAvailableFrom;return(0,v.tZ)(P,null,(0,v.tZ)(h,null,"Type parameeters"),(0,v.tZ)(y.P.Provider,{value:!!e},(0,v.tZ)(h,null,"Parameters"),t?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Default value"),(0,v.tZ)("th",null,"Description"),e?(0,v.tZ)("th",null,"Introduced in"):"")),(0,v.tZ)("tbody",null,t)):(0,v.tZ)("p",null,"There are no parameters.")))},F=d.ZP.tr(i||(i=(0,p.Z)([""]))),N=d.ZP.td(o||(o=(0,p.Z)([""]))),E=d.ZP.td(c||(c=(0,p.Z)([""]))),O=d.ZP.td(Z||(Z=(0,p.Z)([""]))),S=d.ZP.td(s||(s=(0,p.Z)([""]))),V=function(n){var t=n.children,e=n.name,r=n.defaultValue,l=n.availableFrom,u=void 0===l?"none":l,a=f.useContext(y.P);return(0,v.tZ)(F,null,(0,v.tZ)(N,null,e),(0,v.tZ)(E,null,r),(0,v.tZ)(O,null,t),a?(0,v.tZ)(S,null,u):"")}},1683:function(n,t,e){"use strict";e.d(t,{K:function(){return u},e:function(){return a}});e(7294);var r=e(5444),l=e(3431);function u(){return(0,l.tZ)(r.rU,{to:"/api/PartiallyDeclaredAPI"},"PartiallyDeclaredAPI")}function a(){return(0,l.tZ)(r.rU,{to:"/api/DeclaredAPI"},"DeclaredAPI")}},9017:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});e(1879);var r=e(7100),l=e(7614),u=e(832),a=e(1724),i=e(1683),o=e(7294),c=e(2275),Z=e(8567),s=e(3431);function p(){return(0,s.tZ)(r.Z,null,(0,s.tZ)(l.Z,null,(0,s.tZ)(u.Z,null,(0,s.tZ)("h1",null,"API Reference"),(0,s.tZ)("h2",null,"class IncompleteAPIDeclaration"),(0,s.tZ)("h3",null,"method optionalQuery")),(0,s.tZ)(a.ag,null,"Declares optional string query parameters for an API"),(0,s.tZ)(a.l1,null,(0,s.tZ)("p",null,"Only path params and required string query parameters may be defined before query.")),(0,s.tZ)(c.Z,{isRecommendation:!0,variants:{"1.x":(0,s.tZ)(o.Fragment,null,(0,s.tZ)(a.aE,null,(0,s.tZ)(a.d2,{name:"optionalQueryParams",dataType:"Const string array"},(0,s.tZ)("p",null,"Names of the query parameters. See the example below for the recommended way to set up the const string array."),(0,s.tZ)("p",null,"At typescript level a regular string array is not treated as an error at declaration time, but using is NOT correct. Unfortunately we have not come up with a way to prevent this kind of usage."))),(0,s.tZ)(a.pR,null,(0,s.tZ)(i.K,null)),(0,s.tZ)(a.yV,null,(0,s.tZ)(a.en,{label:"Declaration"},"\n                      import { APIDeclaration } from 'papupata'\n                      const api = new APIDeclaration()\n                      const myAPI = api.declarePostAPI('/do-stuff')\n                        .optionalQuery(['query1', 'query2'] as const)\n                        .response<string>()\n                    "),(0,s.tZ)(a.en,{label:"Usage in invocation"},"\n                      await myAPI({query1: 'abc'})\n                      // Invokes URL /do-stuff?query1=abc\n                    "),(0,s.tZ)(a.en,{label:"Usage in implementation"},"\n                      myAPI.implement(req => {\n                        const {query1, query2} = req.query\n                        return query1 + query2 // would return abcundefined in the example\n                      })\n                    "))),"2.x":(0,s.tZ)(o.Fragment,null,(0,s.tZ)(a.aE,null,(0,s.tZ)(a.d2,{name:"optionalQueryParams",dataType:(0,s.tZ)(Z.Z,null)},"Names and types of the query parameters, as an object. See the examples and the TypeMapping itself for more information.")),(0,s.tZ)(a.pR,null,(0,s.tZ)(i.K,null)),(0,s.tZ)(a.yV,null,(0,s.tZ)(a.en,{label:"Declaration"},"\n                      import { APIDeclaration } from 'papupata'\n                      const api = new APIDeclaration()\n                      const myAPI = api.declarePostAPI('/do-stuff')\n                        .query({ query1: String, query2: Number })\n                        .response<string>()\n                    "),(0,s.tZ)(a.en,{label:"Usage in invocation"},"\n                      await myAPI({query1: 'abc})\n                      // Invokes URL /do-stuff?query1=abc\n                    "),(0,s.tZ)(a.en,{label:"Usage in implementation"},"\n                      myAPI.implement(req => {\n                        const {query1, query2} = req.query\n                        return query1 + query2 // would return abcundefined\n                      })\n                  ")))}})))}},1879:function(n,t,e){"use strict";e(7614),e(832),e(7100)}}]);
//# sourceMappingURL=component---src-pages-api-partially-declared-api-optional-query-tsx-072abdb0c2661fdfa926.js.map