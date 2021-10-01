(self.webpackChunkpapupata_docs=self.webpackChunkpapupata_docs||[]).push([[5381],{1040:function(t,n,e){"use strict";e.d(n,{P:function(){return l}});var l=e(7294).createContext(!1)},1724:function(t,n,e){"use strict";e.d(n,{$0:function(){return P},OT:function(){return A},ag:function(){return k},cY:function(){return b},l1:function(){return g},aE:function(){return w},d2:function(){return D},pR:function(){return T},by:function(){return C},yV:function(){return x},en:function(){return F},iT:function(){return V},Vo:function(){return E},lS:function(){return _}});var l,u,a,r,o,i,c,s,Z,d=e(6848),m=e(366),p=e(7294),h=e(1808),f=e(1040),v=e(3431),P=m.ZP.section(l||(l=(0,d.Z)([""]))),A=m.ZP.h4(u||(u=(0,d.Z)([""]))),I=m.ZP.h5(a||(a=(0,d.Z)([""]))),y=m.ZP.section(r||(r=(0,d.Z)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),k=function(t){var n=t.children;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Purpose"),n)},b=function(t){var n=t.version;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},g=function(t){var n=t.children;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Usage"),n)},w=function(t){var n=t.children,e=t.includeAvailableFrom,l=t.label;return(0,v.tZ)(P,null,(0,v.tZ)(f.P.Provider,{value:!!e},(0,v.tZ)(A,null,"Parameters",l&&": "+l),n?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Type"),(0,v.tZ)("th",null,"Description"),e&&(0,v.tZ)("th",null,"Introduced in"))),(0,v.tZ)("tbody",null,n)):(0,v.tZ)("p",null,"There are no parameters.")))},D=function(t){var n=t.children,e=t.name,l=t.dataType,u=t.availableFrom,a=void 0===u?"1.0.0":u,r=p.useContext(f.P);return(0,v.tZ)("tr",null,(0,v.tZ)("td",null,e),(0,v.tZ)("td",null,l),(0,v.tZ)("td",null,n),r&&(0,v.tZ)("td",null,a))},T=function(t){var n=t.children;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Returns"),n)},C=function(t){var n=t.children;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Caveats"),n)},x=function(t){var n=t.children;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Examples"),n)},F=function(t){var n=t.children,e=t.label;return(0,v.tZ)(p.Fragment,null,e&&(0,v.tZ)(I,null,e),(0,v.tZ)(h.E,{language:"typescript"},n))},V=function(t){var n=t.children;return(0,v.tZ)(y,null,(0,v.tZ)(I,null,"Common to examples below:"),n)},E=function(t){var n=t.children,e=t.includeAvailableFrom;return(0,v.tZ)(P,null,(0,v.tZ)(A,null,"Type parameeters"),(0,v.tZ)(f.P.Provider,{value:!!e},(0,v.tZ)(A,null,"Parameters"),n?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Default value"),(0,v.tZ)("th",null,"Description"),e?(0,v.tZ)("th",null,"Introduced in"):"")),(0,v.tZ)("tbody",null,n)):(0,v.tZ)("p",null,"There are no parameters.")))},O=m.ZP.tr(o||(o=(0,d.Z)([""]))),R=m.ZP.td(i||(i=(0,d.Z)([""]))),U=m.ZP.td(c||(c=(0,d.Z)([""]))),N=m.ZP.td(s||(s=(0,d.Z)([""]))),Y=m.ZP.td(Z||(Z=(0,d.Z)([""]))),_=function(t){var n=t.children,e=t.name,l=t.defaultValue,u=t.availableFrom,a=void 0===u?"none":u,r=p.useContext(f.P);return(0,v.tZ)(O,null,(0,v.tZ)(R,null,e),(0,v.tZ)(U,null,l),(0,v.tZ)(N,null,n),r?(0,v.tZ)(Y,null,a):"")}},4383:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});e(1879);var l=e(387),u=e(7614),a=e(832),r=e(1724),o=e(5444),i=(e(7294),e(3431));function c(){return(0,i.tZ)(l.Z,null,(0,i.tZ)(u.Z,null,(0,i.tZ)(a.Z,null,(0,i.tZ)("h1",null,"API Reference"),(0,i.tZ)("h2",null,"class DeclaredAPI"),(0,i.tZ)("h3",null,"method mock")),(0,i.tZ)(r.ag,null,"Causes API invocations to be omitted, instead returning a mock value"),(0,i.tZ)(r.cY,{version:"1.1.0"}),(0,i.tZ)(r.l1,null,(0,i.tZ)("p",null,"This function is meant to help with testing components that use papupata. If you only wish to mock a single invocation, you might want to use the ",(0,i.tZ)(o.rU,{to:"/api/DeclaredAPI/mockOnce"},"mockOnce")," method instead, as it automatically removes the mock implementation as soon as the invocation has been completed."),(0,i.tZ)("p",null,"If you wish to restore the API to its normal state after mocking it, use the ",(0,i.tZ)(o.rU,{to:"/api/DeclaredAPI/unmock"},"unmock")," ","method, or the ",(0,i.tZ)(o.rU,{to:"/api/APIDeclaration/unmockAll"},"unmockAll")," method of the API declaration")),(0,i.tZ)(r.aE,null,(0,i.tZ)(r.d2,{name:"mockValue",dataType:"Function or value"},(0,i.tZ)("p",null,"If a function, that function is invoked when the API is invoked and its return value is returned as the mock response from the API."),(0,i.tZ)("p",null,"Otherwise the value given as this parameter is returned as the mock response from the API."))),(0,i.tZ)(r.pR,null,"nothing"),(0,i.tZ)(r.yV,null,(0,i.tZ)(r.en,{label:"Value"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock('test')\n\n            const value = await myAPI() // value is now \"test\"\n\n            myAPI.unmock()\n          "),(0,i.tZ)(r.en,{label:"Function"},"\n            import { APIDeclaration } from 'papupata'\n            const api = new APIDeclaration()\n            const myAPI = api.declarePostAPI('/do-stuff/:param')\n              .response<string>()\n\n            myAPI.mock(() => 'test')\n\n            const value = await myAPI() // value is now \"test\"\n\n            myAPI.unmock()\n          "))))}}}]);
//# sourceMappingURL=component---src-pages-api-declared-api-mock-tsx-38d988db753530a2fb6e.js.map