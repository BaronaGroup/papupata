(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),o=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return I})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return P})),n.d(t,"h",(function(){return k})),n.d(t,"g",(function(){return q})),n.d(t,"f",(function(){return T})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return R})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return K})),n.d(t,"m",(function(){return C})),n.d(t,"l",(function(){return E}));var a,o,l,r,i,c,u,s,d,p=n("AcpX"),b=n("vOnD"),h=n("q1tI"),j=n.n(h),O=n("P+0o"),m=n("3KYE"),f=n("qKvR"),g=b.a.section(a||(a=Object(p.a)([""]))),v=b.a.h4(o||(o=Object(p.a)([""]))),y=b.a.h5(l||(l=Object(p.a)([""]))),w=b.a.section(r||(r=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),I=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(f.d)(g,null,Object(f.d)(v,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},P=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Usage"),t)},k=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(g,null,Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(v,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},q=function(e){var t=e.children,n=e.name,a=e.dataType,o=e.availableFrom,l=void 0===o?"1.0.0":o,r=j.a.useContext(m.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),r&&Object(f.d)("td",null,l))},T=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Returns"),t)},x=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Caveats"),t)},R=function(e){var t=e.children;return Object(f.d)(g,null,Object(f.d)(v,null,"Examples"),t)},F=function(e){var t=e.children,n=e.label;return Object(f.d)(j.a.Fragment,null,n&&Object(f.d)(y,null,n),Object(f.d)(O.a,{language:"typescript"},t))},K=function(e){var t=e.children;return Object(f.d)(w,null,Object(f.d)(y,null,"Common to examples below:"),t)},C=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(g,null,Object(f.d)(v,null,"Type parameeters"),Object(f.d)(m.a.Provider,{value:!!n},Object(f.d)(v,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},S=b.a.tr(i||(i=Object(p.a)([""]))),N=b.a.td(c||(c=Object(p.a)([""]))),D=b.a.td(u||(u=Object(p.a)([""]))),Y=b.a.td(s||(s=Object(p.a)([""]))),B=b.a.td(d||(d=Object(p.a)([""]))),E=function(e){var t=e.children,n=e.name,a=e.defaultValue,o=e.availableFrom,l=void 0===o?"none":o,r=j.a.useContext(m.a);return Object(f.d)(S,null,Object(f.d)(N,null,n),Object(f.d)(D,null,a),Object(f.d)(Y,null,t),r?Object(f.d)(B,null,l):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,o,l=n("AcpX"),r=n("q1tI"),i=n("vOnD"),c=n("qKvR"),u=i.a.div(a||(a=Object(l.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),s=i.a.div(o||(o=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function d(e){var t=e.variants,n=e.isRecommendation,a=Object(r.useState)("2.x"),o=a[0],l=a[1],i=Object(r.useCallback)((function(e){l(e.target.value)}),[]);return Object(c.d)(u,null,Object(c.d)("select",{value:o,onChange:i},Object(c.d)("option",{value:"1.x"},"Papupata 1.x"),Object(c.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(c.d)(s,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(o,e)})).map((function(e){return Object(c.d)("div",{key:e},t[e])})))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var a,o,l,r=n("AcpX"),i=(n("+ego"),n("NqE+"),n("q1tI"),n("Kg6r")),c=n("vOnD"),u=n("qKvR");function s(e){var t=e.children;return Object(u.d)(i.j,null,Object(u.d)(i.k,null,"Overview"),t)}var d=c.a.h4(a||(a=Object(r.a)([""]))),p=c.a.h5(o||(o=Object(r.a)(["\n  font-size: 1.1em;\n"])));function b(e){var t=e.content;return Object(u.d)("div",null,Object(u.d)(i.j,null,Object(u.d)(i.k,null,"Table of contents"),Object(u.d)("ul",null,t.map((function(e){return Object(u.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(u.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:d;return Object(u.d)(i.j,{id:e.anchor,key:e.anchor},Object(u.d)(t,null,e.heading),e.content)})))}var h=c.a.span(l||(l=Object(r.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))},zCll:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n("NqE+"),l=n("TBFr"),r=n("+ego"),i=n("jqoI"),c=n("Kg6r"),u=n("Wbzz"),s=n("MaSA"),d=n("qKvR");t.default=function(){return Object(d.d)(r.a,null,Object(d.d)(o.a,null,Object(d.d)(l.a,null,Object(d.d)("h1",null,"Guide: calling APIs"),Object(d.d)(i.c,null,"When you are using someone else's API, this is where the magic happens for you. Making API requests may never have been this simple without a fully featured support library."),Object(d.d)(i.b,{content:[{heading:"Prerequisites",anchor:"prerequisites",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"Before starting this guide, you need to have an API declaration, with declared APIs. For information on how to get there, see ",Object(d.d)(u.a,{to:"/guides/declaring"},"Declaring APIs"),". You also need to have configured the API declaration to be able to make requests. This is covered in ",Object(d.d)(u.a,{to:"/guides/client/setup"},"Setting up papupata")),Object(d.d)("p",null,"For the examples in the guide, the following code is assumed to be present in the scope, and by this time you should be fully aware of what it all means:")," ",Object(d.d)(s.a,{isRecommendation:!0,variants:{"1.x":Object(d.d)(c.c,null,"\n                          const API = new APIDeclaration()\n                          const api = API.declarePatchAPI('/update/:id')\n                            .params(['id'] as const)\n                            .body<{name: string}>()\n                            .response<string>()\n                        "),"2.x":Object(d.d)(c.c,null,"\n                          const API = new APIDeclaration()\n                          const api = API.declarePatchAPI('/update/:id')\n                            .params({id: String})\n                            .body<{name: string}>()\n                            .response<string>()\n                        ")}}))},{heading:"The Basics",anchor:"basics",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"With properly set up papupata the some complexities of dealing with REST APIs are hidden well under the hood. You have a function, with typed arguments helping you avoid mistakes."),Object(d.d)("p",null,"Now, if you looked at the API we will be using, you probably noticed that thare are two parameters to the API. A path parameter, id, and a body that is an object with name in it."),Object(d.d)("p",null,"Now let's call the API:"),Object(d.d)(c.c,null,"\n                    await api({ id: 'alpha', name: 'Kevin'})\n                  "),Object(d.d)("p",null,"That's all there is to it. You never had to know the actual URL. As you can see, all parameters go into the same object regardless of where they are meant to end up. Body, query and path parameters, all in one. This does mean that you cannot have different parameters with the same name in different places, but in most cases that sounds like a bad idea to begin with."),Object(d.d)("p",null,"Things work as you would expect: optional parameters are optional, boolean parameters accept booleans and so on. With a properly declared API you can even pass in dates even though they'll probably becomes strings as they are converted to JSON. It is fully typed as well, so typescript will complain if you try to do something that contradicts the declaration."),Object(d.d)("p",null,"You can of course receive responses from the API. You probably guessed it already, but the promise returned by the call resolves to that value. The response too, of course, is fully typed."),Object(d.d)(c.c,null,"\n                    const response = await api({ id: 'alpha', name: 'Kevin'})\n                    // the response from the api is now in response. Typescript knows it's a string, as that's\n                    // how it was declared to be.\n                  "))},{heading:"Non-object bodies",anchor:"bodies",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"All in one object sounds like a good idea until it is not. What if you are not passing an object? Even things as mundane as arrays and strings won't work in that case."),Object(d.d)("p",null,"This is something papupata is prepared for. Instead of passing everything as a single parameter, you can pass the body as the first parameter with path and query parameters in another."),Object(d.d)(c.c,null,"\n                  await api({name: 'Kevin'}, {id: 'alpha'})\n                "),Object(d.d)("p",null,"Sometimes you might want to do this for the sake of clarity as well."))},{heading:"Options",anchor:"options",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"It is possible to pass options to the code that actually performs the HTTP request for papupata. They are given as an additional final parameter to the API call, whether or not you gave the body as a separate parameter."),Object(d.d)("p",null,"The build in adapters do not support options, see"," ",Object(d.d)(u.a,{to:"/guides/client/customRequestAdapters"},"custom request adapters")," for more information on how to utilize the options."),Object(d.d)(c.c,null,"\n                  await api({name: 'Kevin'}, {id: 'alpha'}, {options: 123})\n                  await api({name: 'Kevin', id: 'alpha'}, {options: 123})\n                  "))},{heading:"Bypassing papupata",anchor:"bypassing",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"Sometimes an API can be difficult to call using papupata. A common example would be piping a stream to a request, this is not something papupata can handle at this time. Sometimes you just want to call an API an unconventional fashion, bypassing all of papupata's logic."),Object(d.d)("p",null,"Even in these case you can still take advantage of the API declarations set up for papupata. You can use the"," ",Object(d.d)(i.a,null,"getURL")," method on an API to get the URL for an API, with its path and possibly query parameters set up."),Object(d.d)("p",null,"If you want to create an object that matches the declared body, you can get the type of"," ",Object(d.d)(i.a,null,"RequestBody")," for the API, and similarly use ",Object(d.d)(i.a,null,"ResponseType")," for the response."),Object(d.d)(c.c,null,"\n                    const body: typeof api.BodyType = { name: 'Kevin' }\n                    const url = api.getURL({id: 'alpha'})\n                    const response: typeof api.ResponseType = await myInvoke(url, body)\n                  "))},{heading:"Conclusion",anchor:"conclusion",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"Now you know how to call APIs. You might want to know more about how to write tests for client code that utilizes papupata. For that, see ",Object(d.d)(u.a,{to:"/guides/client/testing"},"testing"),"."),Object(d.d)("p",null,"If you want to switch to the server side now,",Object(d.d)(u.a,{to:"/guides/server/setup"},"setting up papupata server")," and"," ",Object(d.d)(u.a,{to:"/guides/server/implementing"},"implementing APIs")," are both fine options."))}]}))))}}}]);
//# sourceMappingURL=component---src-pages-guides-client-calling-tsx-45431d48b40d3fe18a2c.js.map