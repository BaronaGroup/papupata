(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"3KYE":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t("q1tI"),r=a.createContext(!1)},Kg6r:function(e,n,t){"use strict";t.d(n,"j",(function(){return f})),t.d(n,"k",(function(){return g})),t.d(n,"i",(function(){return x})),t.d(n,"a",(function(){return q})),t.d(n,"n",(function(){return I})),t.d(n,"h",(function(){return M})),t.d(n,"g",(function(){return P})),t.d(n,"f",(function(){return A})),t.d(n,"b",(function(){return R})),t.d(n,"e",(function(){return k})),t.d(n,"c",(function(){return T})),t.d(n,"d",(function(){return F})),t.d(n,"m",(function(){return E})),t.d(n,"l",(function(){return B}));var a,r,l,d,i,o,u,c,s,p=t("AcpX"),b=t("vOnD"),h=t("q1tI"),m=t.n(h),j=t("P+0o"),O=t("3KYE"),w=t("qKvR"),f=b.a.section(a||(a=Object(p.a)([""]))),g=b.a.h4(r||(r=Object(p.a)([""]))),y=b.a.h5(l||(l=Object(p.a)([""]))),v=b.a.section(d||(d=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),x=function(e){var n=e.children;return Object(w.d)(f,null,Object(w.d)(g,null,"Purpose"),n)},q=function(e){var n=e.version;return Object(w.d)(f,null,Object(w.d)(g,null,"Availability"),"This functionality is available from papupata version ",n," onwards.")},I=function(e){var n=e.children;return Object(w.d)(f,null,Object(w.d)(g,null,"Usage"),n)},M=function(e){var n=e.children,t=e.includeAvailableFrom,a=e.label;return Object(w.d)(f,null,Object(w.d)(O.a.Provider,{value:!!t},Object(w.d)(g,null,"Parameters",a&&": "+a),n?Object(w.d)("table",null,Object(w.d)("thead",null,Object(w.d)("tr",null,Object(w.d)("th",null,"Name"),Object(w.d)("th",null,"Type"),Object(w.d)("th",null,"Description"),t&&Object(w.d)("th",null,"Introduced in"))),Object(w.d)("tbody",null,n)):Object(w.d)("p",null,"There are no parameters.")))},P=function(e){var n=e.children,t=e.name,a=e.dataType,r=e.availableFrom,l=void 0===r?"1.0.0":r,d=m.a.useContext(O.a);return Object(w.d)("tr",null,Object(w.d)("td",null,t),Object(w.d)("td",null,a),Object(w.d)("td",null,n),d&&Object(w.d)("td",null,l))},A=function(e){var n=e.children;return Object(w.d)(f,null,Object(w.d)(g,null,"Returns"),n)},R=function(e){var n=e.children;return Object(w.d)(f,null,Object(w.d)(g,null,"Caveats"),n)},k=function(e){var n=e.children;return Object(w.d)(f,null,Object(w.d)(g,null,"Examples"),n)},T=function(e){var n=e.children,t=e.label;return Object(w.d)(m.a.Fragment,null,t&&Object(w.d)(y,null,t),Object(w.d)(j.a,{language:"typescript"},n))},F=function(e){var n=e.children;return Object(w.d)(v,null,Object(w.d)(y,null,"Common to examples below:"),n)},E=function(e){var n=e.children,t=e.includeAvailableFrom;return Object(w.d)(f,null,Object(w.d)(g,null,"Type parameeters"),Object(w.d)(O.a.Provider,{value:!!t},Object(w.d)(g,null,"Parameters"),n?Object(w.d)("table",null,Object(w.d)("thead",null,Object(w.d)("tr",null,Object(w.d)("th",null,"Name"),Object(w.d)("th",null,"Default value"),Object(w.d)("th",null,"Description"),t?Object(w.d)("th",null,"Introduced in"):"")),Object(w.d)("tbody",null,n)):Object(w.d)("p",null,"There are no parameters.")))},C=b.a.tr(i||(i=Object(p.a)([""]))),D=b.a.td(o||(o=Object(p.a)([""]))),K=b.a.td(u||(u=Object(p.a)([""]))),S=b.a.td(c||(c=Object(p.a)([""]))),N=b.a.td(s||(s=Object(p.a)([""]))),B=function(e){var n=e.children,t=e.name,a=e.defaultValue,r=e.availableFrom,l=void 0===r?"none":r,d=m.a.useContext(O.a);return Object(w.d)(C,null,Object(w.d)(D,null,t),Object(w.d)(K,null,a),Object(w.d)(S,null,n),d?Object(w.d)(N,null,l):"")}},MaSA:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a,r,l=t("AcpX"),d=t("q1tI"),i=t("vOnD"),o=t("qKvR"),u=i.a.div(a||(a=Object(l.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),c=i.a.div(r||(r=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function s(e){var n=e.variants,t=e.isRecommendation,a=Object(d.useState)("2.x"),r=a[0],l=a[1],i=Object(d.useCallback)((function(e){l(e.target.value)}),[]);return Object(o.d)(u,null,Object(o.d)("select",{value:r,onChange:i},Object(o.d)("option",{value:"1.x"},"Papupata 1.x"),Object(o.d)("option",{value:"2.x"},"Papupata 2.x")),t&&Object(o.d)(c,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(n).filter((function(e){return function(e,n){return"*"===n||n===e}(r,e)})).map((function(e){return Object(o.d)("div",{key:e},n[e])})))}},UVjL:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t("NqE+"),l=t("TBFr"),d=t("+ego"),i=t("jqoI"),o=t("Kg6r"),u=t("MaSA"),c=t("qKvR");n.default=function(){return Object(c.d)(d.a,null,Object(c.d)(r.a,null,Object(c.d)(l.a,null,Object(c.d)("h1",null,"Guide: middleware"),Object(c.d)(i.c,null,"Middleware provides powerful additional functionality to how APIs behave. This guide goes through how middleware is used and created."),Object(c.d)(i.b,{content:[{heading:"What is middleware?",anchor:"whatis",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Much like express middleware, papupata middleware exists to separate common functionality needed by APIs from the actual API implementations."),Object(c.d)("p",null,"There are two types of middleware:"),Object(c.d)("ul",null,Object(c.d)("li",null,"Middleware inherent to an API declaration, which is applied to all of the declared APIs. This could be called global middleware, but since it only applies to a single API declaration it could be misleading."),Object(c.d)("li",null,"API-specific middleware, which is only applied when explicitly requested.")),Object(c.d)("p",null,"The middleware generally speaking do one or all of the following things:"),Object(c.d)("ul",null,Object(c.d)("li",null,"Manipulate the request before passing it along to the API implementation"),Object(c.d)("li",null,"Preventing the API from being called under specific circumstances"),Object(c.d)("li",null,"Manipulate the output of an API"),Object(c.d)("li",null,"Add a side-effect to an API being invoked")))},{heading:"Using middleware",anchor:"using",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Both inherent and route-specific middleware is given in an array. The order of the elements matters: inherent middleware is always processed before route-specific middleware, and within the array all middleware are processed in the same order as they exist in the array. This can be important if, say, one middleware adds data to request another middleware depends on, or if you want to block the execution of the middleware as well based on a condition."),Object(c.d)("p",null,"Configuring inherent middleware: "),Object(c.d)(u.a,{isRecommendation:!0,variants:{"1.x":Object(c.d)(o.c,null,"\n                          API.configure({\n                            ...API.getConfig(),\n                            inherentMiddleware: [myMiddleware1, myMiddleware1]\n                          })"),"2.x":Object(c.d)(o.c,null,"\n                          API.updateConfig({                            \n                            inherentMiddleware: [myMiddleware1, myMiddleware1]\n                          })")}}),Object(c.d)("p",null,"Configuring middleware for a single route: "),Object(c.d)(o.c,null,"\n                    const myAPI = API.declareGetAPI('/test').response<string>()\n\n                    myAPI.implementWithPapupataMiddleware([myMiddleware1, myMiddleware1], implementation)\n                  "),Object(c.d)("p",null,"You can use express middleware with papupata, see more in the ",Object(c.d)("a",{href:"#express"},"express section of this guide"),"."))},{heading:"The most basic middleware",anchor:"basic",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Let's start by creating a middleware that simply logs the URLs being invoked."),Object(c.d)(o.c,null,"\n                import {PapupataMiddleware} from 'papupata'\n                import {Request} from 'express'\n                const myMiddleware: PapupataMiddleware<Request, void> = (req, res, api, next) => {\n                    console.log('Handling', req.url)\n                    return next()\n                }\n                "),Object(c.d)("p",null,"The main difference between express and papupata middleware is that while express middleware forms a list, papupata middleware are more like koa middleware in that there is a call stack, or a pyramid where each middleware can be a part of both the request and the response. The important thing for most middleware is to return the value returned by calling"," ",Object(c.d)(i.a,null,"next()")," instead ignoring it."),Object(c.d)("p",null,"Errors are handled by throwing exceptions."))},{heading:"Manipulating request",anchor:"request",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"In theory manipulating the request is just changing data in it."),Object(c.d)(o.c,null,"\n                const myMiddleware: PapupataMiddleware<Request, void> = (req, res, api, next) => {\n                    if (req.body?.userId === 'self') {\n                        req.body.userId = req.session.userId\n                    }\n                    return next()\n                }\n                "),Object(c.d)("p",null,"Typescript does make some kinds of changes more difficult. If you want to add custom fields, you probably want to extend the ",Object(c.d)(i.a,null,"request")," interface to contain whatever you are adding."),Object(c.d)("p",null,"Sometimes though these modifications might only be relevant for single papupata API declarations and you don't want to change the global request interface. For this reason papupata supports changing the request type to something other than the default."),Object(c.d)(o.c,null,"\n                  interface MyRequest extends Request {\n                    myField: string\n                  }\n\n                  const API = new APIDeclaration<MyRequest>()\n\n                   const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {\n                    if (req.body?.userId === 'self') {\n                        req.body.userId = req.session.userId\n                    }\n                    return next()\n                }\n                  "),Object(c.d)("p",null,"In the example both the implementations and middleware on API use the MyRequest instead of the normal Request type for the request parameter."))},{heading:"Abandoning the request",anchor:"abandoning",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Sometimes middleware needs to prevent the actual implemementation from being called. There are multiple way to do this depending on what your goal is. There is always one thing in common though: you don'd call next."),Object(c.d)("ul",null,Object(c.d)("li",null,"Return a value. It then becomes the response instead of what the implementation would have provided",Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {\n                      if (!req.headers.accept?.includes('application/json')) {\n                          res.status(400)\n                          return 'Bad headers'\n                      }\n                      return next()\n                    }\n                    ")),Object(c.d)("li",null,"Throw an error to do normal error handling",Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {\n                      if (!req.headers.accept?.includes('application/json')) {\n                          throw new Error('Bad headers')\n                      }\n                      return next()\n                    }\n                    ")),Object(c.d)("li",null,"Explicitly send a response using the methods on ",Object(c.d)(i.a,null,"res"),". This prevents other middleware from being able to affect the response.",Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {\n                      if (!req.headers.accept?.includes('application/json')) {\n                          res.status(400)\n                          res.send('Bad request: Invalid headers')\n                          return\n                      }\n                      return next()\n                    }\n                    ")),Object(c.d)("li",null,"Return ",Object(c.d)(i.a,null,"skipHandlingRoute")," to have express resume routing and middleware processing with other APIs.",Object(c.d)(o.c,null,"\n                    import {skipHandlingRoute} from 'papupata'\n                    const myMiddleware: PapupataMiddleware<MyRequest, void> = (req, res, api, next) => {\n                      if (!req.headers.accept?.includes('application/json')) {\n                          return skipHandlingRoute\n                      }\n                      return next()\n                    }\n                    "))))},{heading:"Manipulating response",anchor:"response",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Normally a middleware gets the response data by doing ",Object(c.d)(i.a,null,"await next()"),", and it can then do whatever manipulation it desires. Some APIs can send the response directly though, in which case this is not true, so you should try and be prepared for it."),Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<MyRequest, void> = async (req, res, api, next) => {\n                      const value = await next()\n                      if (!res.headersSent) {\n                        res.status(204)\n                        return value ?? 'No data'\n                      }\n                      return value\n                    }\n                  "))},{heading:"Route options",anchor:"options",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"It'd be really convenient to give middleware some metadata about a route. Is unauthenticated access permitted? Does it handle unusual payloads? Papupata allows exactly that."),Object(c.d)("p",null,"When you create an API declaration you can provide an interface that provides options to routes, and provide a value of that type to the APIs."),Object(c.d)(o.c,null,"\n                  import {Request} from 'express'\n                  interface Options { publicAccess: boolean }\n                  const API = new APIDeclaration<Request, Options>()\n                  const myAPI = API.declareGetAPI('/api/ping', {publicAccess: true}).response<string>()\n                "),Object(c.d)("p",null,"This value can then be accessed by middleware."),Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<Request, Options> = async (req, res, api, next) => {\n                      if (!api.options?.publicAccess && !req.session.isValid) {\n                        throw new Error('Authentication required')\n                      }\n                      return next()\n                    }\n                "))},{heading:"Error handling",anchor:"errors",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"You can use middleware to add custom error handling."),Object(c.d)(o.c,null,"\n                    const myMiddleware: PapupataMiddleware<Request, Options> = async (req, res, api, next) => {\n                      try {\n                        return await next()\n                      } catch(err) {\n                        res.status(err.status || 400)\n                        return err.message\n                      }\n                    }\n                "))},{heading:"Express middleware",anchor:"express",content:Object(c.d)(a.Fragment,null,Object(c.d)("p",null,"Individual routes can be given express middleware in addition to papupata middleware. If you do that, the express middleware is run before the papupata middleware is -- even the inherent middleware."),Object(c.d)(o.c,null,"\n                myAPI.implementWithExpressMiddleware([expressMiddleware], implement)\n                myAPI.implementWithMiddleware({express: [expressMiddleware]}, implement)\n                "),Object(c.d)("p",null,"A generally preferable option is to convert express middleware into papupata middleware;"," ",Object(c.d)(i.a,null,"convertExpressMiddleware")," is exported by papupata to do that. At this time it does not handle express middleware that handle errors, but other middleware should be convertable."),Object(c.d)(o.c,null,"\n                  import {convertExpressMiddleware} from 'papupata'\n                  myAPI.implementWithPapupataMiddleware([convertExpressMiddleware(expressMiddleware)], implement)\n                  "))}]}))))}},jqoI:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"b",(function(){return b})),t.d(n,"a",(function(){return h}));var a,r,l,d=t("AcpX"),i=(t("+ego"),t("NqE+"),t("q1tI"),t("Kg6r")),o=t("vOnD"),u=t("qKvR");function c(e){var n=e.children;return Object(u.d)(i.j,null,Object(u.d)(i.k,null,"Overview"),n)}var s=o.a.h4(a||(a=Object(d.a)([""]))),p=o.a.h5(r||(r=Object(d.a)(["\n  font-size: 1.1em;\n"])));function b(e){var n=e.content;return Object(u.d)("div",null,Object(u.d)(i.j,null,Object(u.d)(i.k,null,"Table of contents"),Object(u.d)("ul",null,n.map((function(e){return Object(u.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(u.d)("a",{href:"#"+e.anchor},e.heading))})))),n.map((function(e){var n=e.level?p:s;return Object(u.d)(i.j,{id:e.anchor,key:e.anchor},Object(u.d)(n,null,e.heading),e.content)})))}var h=o.a.span(l||(l=Object(d.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-server-middleware-tsx-3a2a574448652290a11f.js.map