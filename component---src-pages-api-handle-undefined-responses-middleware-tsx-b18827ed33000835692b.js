(self.webpackChunkpapupata_docs=self.webpackChunkpapupata_docs||[]).push([[6018],{1040:function(e,n,t){"use strict";t.d(n,{P:function(){return l}});var l=t(7294).createContext(!1)},1724:function(e,n,t){"use strict";t.d(n,{$0:function(){return w},OT:function(){return b},ag:function(){return P},cY:function(){return x},l1:function(){return A},aE:function(){return T},d2:function(){return k},pR:function(){return I},by:function(){return E},yV:function(){return R},en:function(){return C},iT:function(){return M},Vo:function(){return F},lS:function(){return S}});var l,r,a,u,i,o,s,d,c,Z=t(5761),h=t(3583),p=t(7294),f=t(1808),m=t(1040),v=t(3431),w=h.ZP.section(l||(l=(0,Z.Z)([""]))),b=h.ZP.h4(r||(r=(0,Z.Z)([""]))),g=h.ZP.h5(a||(a=(0,Z.Z)([""]))),y=h.ZP.section(u||(u=(0,Z.Z)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),P=function(e){var n=e.children;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Purpose"),n)},x=function(e){var n=e.version;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},A=function(e){var n=e.children;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Usage"),n)},T=function(e){var n=e.children,t=e.includeAvailableFrom,l=e.label;return(0,v.tZ)(w,null,(0,v.tZ)(m.P.Provider,{value:!!t},(0,v.tZ)(b,null,"Parameters",l&&": "+l),n?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Type"),(0,v.tZ)("th",null,"Description"),t&&(0,v.tZ)("th",null,"Introduced in"))),(0,v.tZ)("tbody",null,n)):(0,v.tZ)("p",null,"There are no parameters.")))},k=function(e){var n=e.children,t=e.name,l=e.dataType,r=e.availableFrom,a=void 0===r?"1.0.0":r,u=p.useContext(m.P);return(0,v.tZ)("tr",null,(0,v.tZ)("td",null,t),(0,v.tZ)("td",null,l),(0,v.tZ)("td",null,n),u&&(0,v.tZ)("td",null,a))},I=function(e){var n=e.children;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Returns"),n)},E=function(e){var n=e.children;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Caveats"),n)},R=function(e){var n=e.children;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Examples"),n)},C=function(e){var n=e.children,t=e.label;return(0,v.tZ)(p.Fragment,null,t&&(0,v.tZ)(g,null,t),(0,v.tZ)(f.E,{language:"typescript"},n))},M=function(e){var n=e.children;return(0,v.tZ)(y,null,(0,v.tZ)(g,null,"Common to examples below:"),n)},F=function(e){var n=e.children,t=e.includeAvailableFrom;return(0,v.tZ)(w,null,(0,v.tZ)(b,null,"Type parameeters"),(0,v.tZ)(m.P.Provider,{value:!!t},(0,v.tZ)(b,null,"Parameters"),n?(0,v.tZ)("table",null,(0,v.tZ)("thead",null,(0,v.tZ)("tr",null,(0,v.tZ)("th",null,"Name"),(0,v.tZ)("th",null,"Default value"),(0,v.tZ)("th",null,"Description"),t?(0,v.tZ)("th",null,"Introduced in"):"")),(0,v.tZ)("tbody",null,n)):(0,v.tZ)("p",null,"There are no parameters.")))},U=h.ZP.tr(i||(i=(0,Z.Z)([""]))),D=h.ZP.td(o||(o=(0,Z.Z)([""]))),V=h.ZP.td(s||(s=(0,Z.Z)([""]))),W=h.ZP.td(d||(d=(0,Z.Z)([""]))),_=h.ZP.td(c||(c=(0,Z.Z)([""]))),S=function(e){var n=e.children,t=e.name,l=e.defaultValue,r=e.availableFrom,a=void 0===r?"none":r,u=p.useContext(m.P);return(0,v.tZ)(U,null,(0,v.tZ)(D,null,t),(0,v.tZ)(V,null,l),(0,v.tZ)(W,null,n),u?(0,v.tZ)(_,null,a):"")}},3040:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});t(1879),t(7294);var l=t(1724),r=t(832),a=t(7614),u=t(7100),i=t(3431);function o(){return(0,i.tZ)(u.Z,null,(0,i.tZ)(a.Z,null,(0,i.tZ)(r.Z,null,(0,i.tZ)("h1",null,"API Reference"),(0,i.tZ)("h2",null,"handleUndefinedResponsesMiddleware")),(0,i.tZ)(l.en,null,"import {handleUndefinedResponsesMiddleware} from 'papupata'"),(0,i.tZ)(l.cY,{version:"1.5.0"}),(0,i.tZ)(l.ag,null,"Middleware that changes how papupata deals with undefined responses, automatically setting up response code 204 (if not otherwise specified) and sending a response."),(0,i.tZ)(l.l1,null,(0,i.tZ)("p",null,"By default papupata assumes that if your route implementation returns undefined, it takes the responsibilities for sending the response."),(0,i.tZ)("p",null,"This if often not the case, though. You might have APIs that do things but do not return anything, in which case it makes sense for the response to be undefined or void. But what it means by default is that you have either do something like",(0,i.tZ)(l.en,null,"res.status(204); res.end()"),"or return an empty string."),(0,i.tZ)("p",null,"This middleware changes things in two ways; one: if headers have not been sent by the time the route implementation returns undefined, an empty response is automatically sent. Also, in that case, if the response status code has not been explicitly set, it becomes 204 (no content)."),(0,i.tZ)("p",null,"The behaviour of this middleware might become the default mode of operation for papupata 2.0.")),(0,i.tZ)(l.yV,null,(0,i.tZ)(l.en,{label:"Enabling middleware for all roues"},"\n                const API = new APIDeclaration()\n                API.configure({\n                  // other options\n                  inherentMiddleware: [handleUndefinedResponsesMiddleware]\n                })\n            "),(0,i.tZ)(l.en,{label:"Enabling the middleware for a single route"},"\n                const api = API.declareGetAPI('/test').response<string>()\n                api.implementWithPapupataMiddleware([handleUndefinedResponsesMiddleware], () => skipHandlingRoute)\n            "),(0,i.tZ)(l.en,{label:"Expected effect: simple case"},"\n            api.implement(async () => {\n              await doStuff()\n            })\n            // Without middleware there is never a response; with the middleware the response is a 204\n          "),(0,i.tZ)(l.en,{label:"Expected effect: explicit status"},"\n            api.implement(async (_req, res) => {\n              res.status(500)\n              await doStuff()\n            })\n            // Without middleware there is never a response; with the middleware the response is a 500\n          "),(0,i.tZ)(l.en,{label:"Expected effect: redirect"},"\n            api.implement(async (_req, res) => {\n              res.redirect('/')\n            })\n            // Works with and without middleware\n          "))))}},1879:function(e,n,t){"use strict";t(7614),t(832),t(7100)}}]);
//# sourceMappingURL=component---src-pages-api-handle-undefined-responses-middleware-tsx-b18827ed33000835692b.js.map