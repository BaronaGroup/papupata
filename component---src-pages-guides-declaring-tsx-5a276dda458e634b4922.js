(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},E9QF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Wbzz"),l=(n("q1tI"),n("qKvR"));function r(){return Object(l.d)(a.a,{to:"/api/PartiallyDeclaredAPI/TypeMapping"},"TypeMapping")}},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return I})),n.d(t,"a",(function(){return P})),n.d(t,"n",(function(){return w})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return q})),n.d(t,"f",(function(){return T})),n.d(t,"b",(function(){return k})),n.d(t,"e",(function(){return F})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return S})),n.d(t,"m",(function(){return R})),n.d(t,"l",(function(){return L}));var a,l,r,o,i,s,c,d,u,p=n("AcpX"),h=n("vOnD"),b=n("q1tI"),m=n.n(b),j=n("P+0o"),O=n("3KYE"),f=n("qKvR"),y=h.a.section(a||(a=Object(p.a)([""]))),g=h.a.h4(l||(l=Object(p.a)([""]))),v=h.a.h5(r||(r=Object(p.a)([""]))),A=h.a.section(o||(o=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),I=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Purpose"),t)},P=function(e){var t=e.version;return Object(f.d)(y,null,Object(f.d)(g,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},w=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Usage"),t)},x=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(y,null,Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},q=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,o=m.a.useContext(O.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),o&&Object(f.d)("td",null,r))},T=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Returns"),t)},k=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Caveats"),t)},F=function(e){var t=e.children;return Object(f.d)(y,null,Object(f.d)(g,null,"Examples"),t)},D=function(e){var t=e.children,n=e.label;return Object(f.d)(m.a.Fragment,null,n&&Object(f.d)(v,null,n),Object(f.d)(j.a,{language:"typescript"},t))},S=function(e){var t=e.children;return Object(f.d)(A,null,Object(f.d)(v,null,"Common to examples below:"),t)},R=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(y,null,Object(f.d)(g,null,"Type parameeters"),Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},C=h.a.tr(i||(i=Object(p.a)([""]))),G=h.a.td(s||(s=Object(p.a)([""]))),K=h.a.td(c||(c=Object(p.a)([""]))),W=h.a.td(d||(d=Object(p.a)([""]))),E=h.a.td(u||(u=Object(p.a)([""]))),L=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,o=m.a.useContext(O.a);return Object(f.d)(C,null,Object(f.d)(G,null,n),Object(f.d)(K,null,a),Object(f.d)(W,null,t),o?Object(f.d)(E,null,r):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a,l,r=n("AcpX"),o=n("q1tI"),i=n("vOnD"),s=n("qKvR"),c=i.a.div(a||(a=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),d=i.a.div(l||(l=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function u(e){var t=e.variants,n=e.isRecommendation,a=Object(o.useState)("2.x"),l=a[0],r=a[1],i=Object(o.useCallback)((function(e){r(e.target.value)}),[]);return Object(s.d)(c,null,Object(s.d)("select",{value:l,onChange:i},Object(s.d)("option",{value:"1.x"},"Papupata 1.x"),Object(s.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(s.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(l,e)})).map((function(e){return Object(s.d)("div",{key:e},t[e])})))}},ZdCH:function(e,t,n){"use strict";n.r(t);var a,l=n("AcpX"),r=n("q1tI"),o=n("NqE+"),i=n("TBFr"),s=n("+ego"),c=n("jqoI"),d=n("Kg6r"),u=n("vOnD"),p=n("Wbzz"),h=n("MaSA"),b=n("E9QF"),m=n("qKvR"),j=u.a.div(a||(a=Object(l.a)(["\n  border-left: 3px solid #eee;\n  padding-left: 30px;\n  margin-bottom: 30px;\n"])));t.default=function(){return Object(m.d)(s.a,null,Object(m.d)(o.a,null,Object(m.d)(i.a,null,Object(m.d)("h1",null,"Guide: declaring APIs"),Object(m.d)(c.c,null,"Papupata is all about implementing and invoking APIs. In order for any of that to happen, the APIs must first be declared, or modeled using the tools provided by papupata. This guide covers how the declarations are made."),Object(m.d)(c.b,{content:[{heading:"Setting up an API declaration",anchor:"setup",content:Object(m.d)(r.Fragment,null,Object(m.d)("p",null,"The first thing you'll need is an API declaration. Simply put, it typically represents a set of APIs accessible from a single host. It could be all of the APIs of an application, or just one of them."),Object(m.d)("p",null,"In order to actually use the declared APIs, it is necessary to set up configuration, but just for the purposes of declaring APIs we do not have to worry about that."),Object(m.d)(d.c,null,"\n              import {APIDeclaration} from 'papupata'\n              const API = new APIDeclaration()\n              "),Object(m.d)("p",null,"All of the examples in the sections below will expect this API declaration to exist in their scope."))},{heading:"Your first declaration",anchor:"first",content:Object(m.d)(r.Fragment,null,Object(m.d)("p",null,"Let's start with a really simple API. An API found at ",Object(m.d)(c.a,null,"/hello"),", invoked with the HTTP method"," ",Object(m.d)(c.a,null,"GET"),", which a string as its response."),Object(m.d)(d.c,null,"\n                    const helloAPI = API\n                      .declareGetAPI('/hello')\n                      .response<string>()\n                  "),Object(m.d)("p",null,"Seems simple, enough, right? We specify the method and the path by invoking the ",Object(m.d)(c.a,null,"declareGetAPI")," ","function on the API declaration, and then we declare the response type with the ",Object(m.d)(c.a,null,"response")," method."),Object(m.d)("p",null,"Bodies and responses are often complicated objects, and as such they are represented using typescript types. As we see in the example, the type of the response is passed to the ",Object(m.d)(c.a,null,"response")," function as an explicit type parameter."))},{heading:"The anatomy of a declaration",anchor:"anatomy",content:Object(m.d)(r.Fragment,null,Object(m.d)("p",null,"API declarations often contain many things, and many of those can be modeled using papupata."),Object(m.d)("p",null,"Let's start by looking at an API declaration which utilizes all of the possibilities provided by papupata")," ",Object(m.d)(h.a,{isRecommendation:!0,variants:{"1.x":Object(m.d)(d.c,null,"\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params(['id'] as const)\n                            .query(['author'] as const)\n                            .optionalQuery(['timestamp'] as const)\n                            .queryBool(['notifyWatchers'] as const)\n                            .body<string, Date>()\n                            .response<string, Date>()\n                          "),"2.x":Object(m.d)(d.c,null,"\n                          const complexAPI = API.declarePostAPI('/update/:id', routeOptions)\n                            .params({id: String})\n                            .query({author: String, notifyWatchers: Boolean}})\n                            .optionalQuery({timestamp: String})\n                            .body<string, Date>()\n                            .response<string, Date>()\n                          ")}}),Object(m.d)("p",null,"Having easy-to-read API declarations was one of the main goals of papupata, and hopefully we've been reasonably successful. It is rare to see everything present in the example in real APIs, so it is something of an abomination."),Object(m.d)("p",null,"Anyway, let's briefly go through each part"),Object(m.d)(j,null,Object(m.d)(d.c,null,"const complexAPI"),Object(m.d)("p",null,"You need to store APIs somewhere. Although you declare them on the API declaration object, you can not access them from there -- and you'd never be able to get the type safety if you could."),Object(m.d)("p",null,"For simple cases you can store the APIs in simple variables, but if you are modeling a collection of APIs, it probably makes sense to store the APIs in an object:"),Object(m.d)(d.c,null,"\n                      const apis = {\n                        getOne: API.declareGetAPI(...),\n                        updateOne: API.declareGetAPI(...),\n                        deleteOne: API.declareGetAPI(...),\n                        find: API.declareGetAPI(...),\n                      }\n                    "),Object(m.d)("p",null,"You can even nest objects to make a logical hierarchy out of them.")),Object(m.d)(j,null,Object(m.d)(d.c,null,".declarePostAPI("),Object(m.d)("p",null,"All APIs are declared using one of the methods on an API declaration instance. The naming pattern is always the same, so you can expect to find declareGetAPI, declarePutAPI and so on to be available."),Object(m.d)("p",null,"At this time there is no way to define an API to support multiple methods -- you have do declare it separately for each method.")),Object(m.d)(j,null,Object(m.d)(d.c,null,"'/update/:id'"),Object(m.d)("p",null,"All APIs are declared using relative paths. The base URL is set up before calls can be made, and it can even include paths as well."),Object(m.d)("p",null,"Path parameters must be present in the url passed to the declaration function; they are indicated by a colon before the parameter name."),Object(m.d)("p",null,"Query parameters are generally speaking NOT included in the url, however you can include query-based rules in the path when APIs only differ from each other by their query parameters. See"," ",Object(m.d)(p.a,{to:"/guides/declaring/query-based-variants"},"Query-based variants")," for more information.")),Object(m.d)(j,null,Object(m.d)(d.c,null,", routeOptions)"),Object(m.d)("p",null,"Sometimes you need to add metadata to the routes. It could be relevant for the client, server, or both."),Object(m.d)("p",null,"The API declaration has a number of type parameters, one of which is used to define the type of the route options."),Object(m.d)("p",null,"These parameters are typically accessed either from the middleware or the function that actually makes HTTP requests."),Object(m.d)("p",null,"A common use case would be to indicate the need for authentication. This allows the server to verify authentication as needed, while the client can skip obtaining the credentials."),Object(m.d)("p",null,"As the example API declaration does not include options, here is another small example:"),Object(m.d)(d.c,null,"\n                      import {Request} from 'express'\n                      const API = new APIDeclaration<Request, {requiresAuthentication: boolean}>\n                      const api = API.declareGetAPI('/', {requiresAuthentication: false})\n                    ")),Object(m.d)(j,null,Object(m.d)(h.a,{isRecommendation:!0,variants:{"1.x":Object(m.d)(r.Fragment,null,Object(m.d)(d.c,null,".params(['id'] as const)"),Object(m.d)("p",null,"In addition to being declared in the URL, path parameters need to be declared in a way that lets typescript know they exist. This call to params serves that purpose."),Object(m.d)("p",null,"Just add all the parameters into an array (omitting the leading colon used in the URL), and add"," ",Object(m.d)(c.a,null,"as const")," after the array."),Object(m.d)("p",null,"At this time path parameters cannot be optional; if you need to support that case, you have to declare multiple APIs that match the different cases."),Object(m.d)("p",null,"Knowing or understanding ",Object(m.d)(c.a,null,"as const")," is not necessary to use papupata, but in case you are interested, causes the array not to be just an array of strings. In the example case, it is a tuple where the first element is ",Object(m.d)(c.a,null,"id"),". From this it is possible to extract the type needed both for implementing and calling the API.")),"2.x":Object(m.d)(r.Fragment,null,Object(m.d)(d.c,null,".params({id: String})"),Object(m.d)("p",null,"In addition to being declared in the URL, path parameters need to be declared in a way that lets typescript know they exist. This call to params serves that purpose."),Object(m.d)("p",null,"Just create an object where the keys are the names of the path parameters and the values represent their types. See ",Object(m.d)(b.a,null)," for more information on the types."),Object(m.d)("p",null,"At this time path parameters cannot be optional; if you need to support that case, you have to declare multiple APIs that match the different cases."))}})," "),Object(m.d)(j,null," ",Object(m.d)(h.a,{isRecommendation:!0,variants:{"1.x":Object(m.d)(r.Fragment,null,Object(m.d)(d.c,null,"\n                              .query(['author'] as const)\n                              .optionalQuery(['timestamp'] as const)\n                              .queryBool(['notifyWatchers'] as const)\n                              "),Object(m.d)("p",null,"The format for entering query parameters is the same as with path parameters. There are, however, 3 different types of query parameters; normal, optional and boolean."),Object(m.d)("p",null,"You can have any combination of the 3 in any given API, but they must always be declared in that order."),Object(m.d)("p",null,Object(m.d)(c.a,null,"query")," and ",Object(m.d)(c.a,null,"optionalQuery")," should hopefully be obvious,"," ",Object(m.d)(c.a,null,"queryBool")," is a convenience option; when calling it expects a boolean value instead of a string. On the implementation side, the value ",Object(m.d)(c.a,null,"true")," becomes the boolean true, any other value becomes false.")),"2.x":Object(m.d)(r.Fragment,null,Object(m.d)(d.c,null,"\n                              .query({author: String, notifyWatchers: Boolean}})\n                              .optionalQuery({timestamp: String})\n                            "),Object(m.d)("p",null,"The format for entering query parameters is the same as with path parameters. Optional parameters are supported for queries, though they have to be separated from the required ones. While you can have both required and optional parameters in any given API, the required parameters must be declared first."),Object(m.d)("p",null,"Again, see ",Object(m.d)(b.a,null)," for more information on the supported types. The only difference to path parameters in this regard is that for query parameters arrays are supported."))}})),Object(m.d)(j,null,Object(m.d)(d.c,null,".body<string, Date>()"),Object(m.d)("p",null,"Oh boy. Let's start with something a little simpler: ",Object(m.d)(c.a,null,".body<string>()"),". That is what you'll usually see, and should be quite straightforward. The body for the request must be a string."),Object(m.d)("p",null,"I can be any type, but in practice the transport medium (commonly json) does tend to put limitations to what can really be transferred. Functions, for example, you probably can't just pass along over APIs."),Object(m.d)("p",null,"Sometimes there are types which are transformed automatically. When using JSON, dates for example are commonly just stored as a string, even if you original payload had it as a date. This creates a typing conundrum: surely you should be able to pass in a date, even if the other side will see it as a string. This is where the second type parameter comes in. The first parameter is the type of the body, as it will be seen by the server, and the second one is the type of the body the way the client application can pass it. The conversion between the two should be transparent to the user. If you only pass one type parameter, it is used for both cases.")),Object(m.d)(j,null,Object(m.d)(d.c,null,".response<string, Date>()"),Object(m.d)("p",null,"Response work just like body does, except from the opposite point of view."),Object(m.d)("p",null,"You can pass a single type argument and it'll be the type of there response everywhere. If you pass another one though, that is what the implementation is expected to return. Again, the conversion to the type seen by the client should be implicit, either built into the serialization process or maybe in the form of a middleware."),Object(m.d)("p",null,"All declarations must end with a response. The type can be void or undefined if the API returns nothing, but the call to ",Object(m.d)(c.a,null,"response")," must be there regardless.")))},{heading:"Error handling",anchor:"errors",content:Object(m.d)(r.Fragment,null,Object(m.d)("p",null,"At this time papupata does not have particular support for managing errors."),Object(m.d)("p",null,"You could type the response to be either the actual response or an error response, but that's essentially the extent of it."),Object(m.d)(d.c,null,"\n                const api = API.declareGetAPI('/path')\n                  .response<Data | {errorMessage: string}>()\n                "),Object(m.d)("p",null,"Even so, there are certainly limitations to this. If the client request library rejects the failed requests, the type information will be lost anyway and even in success cases you have to ensure you got the data object even if it should be obvious."),Object(m.d)("p",null,"This is certainly something that will be developed further in upcoming releases."))},{heading:"Conclusion",anchor:"conclusion",content:Object(m.d)(r.Fragment,null,Object(m.d)("p",null,"What we've covered includes essentially everything papupata has for declaring the APIs."),Object(m.d)("p",null,"The logical next steps would be about how to actually use the declarations. If you want to call the declared APIs, head on over to ",Object(m.d)(p.a,{to:"/guides/client/setup"},"setting up papupata client"),", or perhaps straight to"," ",Object(m.d)(p.a,{to:"/guides/client/calling"},"calling APIs")," if someone else has set things up for you already."),Object(m.d)("p",null,"On the other hand, if you want to implement APIs that have been declared,"," ",Object(m.d)(p.a,{to:"/guides/server/setup"},"setting up papupata server")," and"," ",Object(m.d)(p.a,{to:"/guides/server/implementing"},"implementing APIs")," are good next guides."),Object(m.d)("p",null,"Lastly, if you want to know about how to extract metadata from the declared APIs, there is a guide about"," ",Object(m.d)(p.a,{to:"/guides/metadata"},"metadata"),", too."))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return b}));var a,l,r,o=n("AcpX"),i=(n("q1tI"),n("Kg6r")),s=n("vOnD"),c=n("qKvR");function d(e){var t=e.children;return Object(c.d)(i.j,null,Object(c.d)(i.k,null,"Overview"),t)}var u=s.a.h4(a||(a=Object(o.a)([""]))),p=s.a.h5(l||(l=Object(o.a)(["\n  font-size: 1.1em;\n"])));function h(e){var t=e.content;return Object(c.d)("div",null,Object(c.d)(i.j,null,Object(c.d)(i.k,null,"Table of contents"),Object(c.d)("ul",null,t.map((function(e){return Object(c.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(c.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:u;return Object(c.d)(i.j,{id:e.anchor,key:e.anchor},Object(c.d)(t,null,e.heading),e.content)})))}var b=s.a.span(r||(r=Object(o.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-declaring-tsx-5a276dda458e634b4922.js.map