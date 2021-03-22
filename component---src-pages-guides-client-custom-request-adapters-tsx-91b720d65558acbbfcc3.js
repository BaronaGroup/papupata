(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return v})),n.d(t,"i",(function(){return w})),n.d(t,"a",(function(){return T})),n.d(t,"n",(function(){return k})),n.d(t,"h",(function(){return I})),n.d(t,"g",(function(){return P})),n.d(t,"f",(function(){return A})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return R})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return N})),n.d(t,"m",(function(){return C})),n.d(t,"l",(function(){return Y}));var a,l,r,u,o,i,d,c,s,b=n("AcpX"),h=n("vOnD"),j=n("q1tI"),O=n.n(j),p=n("P+0o"),f=n("3KYE"),y=n("qKvR"),m=h.a.section(a||(a=Object(b.a)([""]))),v=h.a.h4(l||(l=Object(b.a)([""]))),g=h.a.h5(r||(r=Object(b.a)([""]))),q=h.a.section(u||(u=Object(b.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),w=function(e){var t=e.children;return Object(y.d)(m,null,Object(y.d)(v,null,"Purpose"),t)},T=function(e){var t=e.version;return Object(y.d)(m,null,Object(y.d)(v,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},k=function(e){var t=e.children;return Object(y.d)(m,null,Object(y.d)(v,null,"Usage"),t)},I=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(y.d)(m,null,Object(y.d)(f.a.Provider,{value:!!n},Object(y.d)(v,null,"Parameters",a&&": "+a),t?Object(y.d)("table",null,Object(y.d)("thead",null,Object(y.d)("tr",null,Object(y.d)("th",null,"Name"),Object(y.d)("th",null,"Type"),Object(y.d)("th",null,"Description"),n&&Object(y.d)("th",null,"Introduced in"))),Object(y.d)("tbody",null,t)):Object(y.d)("p",null,"There are no parameters.")))},P=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,u=O.a.useContext(f.a);return Object(y.d)("tr",null,Object(y.d)("td",null,n),Object(y.d)("td",null,a),Object(y.d)("td",null,t),u&&Object(y.d)("td",null,r))},A=function(e){var t=e.children;return Object(y.d)(m,null,Object(y.d)(v,null,"Returns"),t)},x=function(e){var t=e.children;return Object(y.d)(m,null,Object(y.d)(v,null,"Caveats"),t)},R=function(e){var t=e.children;return Object(y.d)(m,null,Object(y.d)(v,null,"Examples"),t)},F=function(e){var t=e.children,n=e.label;return Object(y.d)(O.a.Fragment,null,n&&Object(y.d)(g,null,n),Object(y.d)(p.a,{language:"typescript"},t))},N=function(e){var t=e.children;return Object(y.d)(q,null,Object(y.d)(g,null,"Common to examples below:"),t)},C=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(y.d)(m,null,Object(y.d)(v,null,"Type parameeters"),Object(y.d)(f.a.Provider,{value:!!n},Object(y.d)(v,null,"Parameters"),t?Object(y.d)("table",null,Object(y.d)("thead",null,Object(y.d)("tr",null,Object(y.d)("th",null,"Name"),Object(y.d)("th",null,"Default value"),Object(y.d)("th",null,"Description"),n?Object(y.d)("th",null,"Introduced in"):"")),Object(y.d)("tbody",null,t)):Object(y.d)("p",null,"There are no parameters.")))},K=h.a.tr(o||(o=Object(b.a)([""]))),E=h.a.td(i||(i=Object(b.a)([""]))),D=h.a.td(d||(d=Object(b.a)([""]))),L=h.a.td(c||(c=Object(b.a)([""]))),U=h.a.td(s||(s=Object(b.a)([""]))),Y=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,u=O.a.useContext(f.a);return Object(y.d)(K,null,Object(y.d)(E,null,n),Object(y.d)(D,null,a),Object(y.d)(L,null,t),u?Object(y.d)(U,null,r):"")}},Y4vq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n("Kg6r"),r=n("TBFr"),u=n("jqoI"),o=n("NqE+"),i=n("+ego"),d=n("qKvR");t.default=function(){return Object(d.d)(i.a,null,Object(d.d)(o.a,null,Object(d.d)(r.a,null,Object(d.d)("h1",null,"Guide: custom request adapters"),Object(d.d)(u.c,null,"Making API calls with papupata happens using request adapters. The built-in ones are naive and limited, so you probably want to create one that fits whatever requirements you have."),Object(d.d)(u.b,{content:[{heading:"The basics",anchor:"basics",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"A request adapter is a function, which receives a bunch of parameters and is expected to return a promise that resolves with the value returned by the API. Now, let's start with the type declaration."),Object(d.d)(l.c,null,"\n                    export type MakeRequestAdapter<RequestOptions = void> = (\n                      method: string,\n                      url: string,\n                      query: any,\n                      body: any,\n                      params: any,\n                      api: any,\n                      requestOptions?: RequestOptions\n                    ) => Promise<any>                    \n                    "),Object(d.d)("p",null,"In the table below you'll find listed typical uses for each of the parameters, from the point of view of making typical HTTP requests."),Object(d.d)("table",null,Object(d.d)("thead",null,Object(d.d)("th",null,"Name"),Object(d.d)("th",null,"Typical uses")),Object(d.d)("tbody",null,Object(d.d)("tr",null,Object(d.d)("td",null,"method"),Object(d.d)("td",null,"This is the HTTP method the request is meant to be made with, in lowercase letters. You'll want to supply it to the library you use for actually making the requests. It can also be useful for determining if you should include the body or not.")),Object(d.d)("tr",null,Object(d.d)("td",null,"url"),Object(d.d)("td",null,Object(d.d)("p",null,"This is the URL to the API, with path parameters already baked in, but without query parameters. Depending on your library you might want to add the query parameters to it before passing it along to your request library, or perhaps you can use the URL as is."),Object(d.d)("p",null,"If you do want to add the parameters, the ",Object(d.d)(u.a,null,"qs")," library is a useful library for getting that done."),Object(d.d)(l.c,null,"\n                            import qs from 'qs'\n\n                            const finalURL = url + '?' + qs.stringify(query)\n                          "))),Object(d.d)("tr",null,Object(d.d)("td",null,"query"),Object(d.d)("td",null,"This is a javascript object that has keys for query parameter names and values are the query parameter values. You'll want to pass this data along with the request, either baking it into the URL or passing the data to your library in some other way, such as the ",Object(d.d)(u.a,null,"qs")," option of ",Object(d.d)(u.a,null,"request"),".")),Object(d.d)("tr",null,Object(d.d)("td",null,"body"),Object(d.d)("td",null,"This is the body that is to be sent with the request. No serialization or other manipulation has been done before it arrives to this function, so if your library requires, say, you to do ",Object(d.d)(u.a,null,"JSON.stringify")," on objects then you'll want to do that before passing it along. Typically this will be an object, or undefined if there is no data for the body, though as papupata supports other types of bodies as well it can end up being pretty much any type.")),Object(d.d)("tr",null,Object(d.d)("td",null,"params"),Object(d.d)("td",null,"Typically you won't need to use this parameter, as all of the path parameters have already been baked in to URL. On rare occasions you might want to make some decisions based on the path parameter values, so it is provided for completeness. The format is a javascript object that has keys for path parameter names and values their values.")),Object(d.d)("tr",null,Object(d.d)("td",null,"api"),Object(d.d)("td",null,"This is the API being invoked. This is especially useful if you have route options and wish to access them for making the request, for, say, determining if authentication needs to be performed.")),Object(d.d)("tr",null,Object(d.d)("td",null,"requestOptions"),Object(d.d)("td",null,"If you have specified options to be passed for making requests, this is where you'll find them.")))))},{heading:"Error handling",anchor:"errors",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"At this time papupata does no take error handling into account. Any exceptions thrown in the adapter will be catchable wherever the call to the API was made."))},{heading:"Examples",anchor:"examples",content:Object(d.d)(a.Fragment,null,Object(d.d)("p",null,"WIP"))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return j}));var a,l,r,u=n("AcpX"),o=(n("+ego"),n("NqE+"),n("q1tI"),n("Kg6r")),i=n("vOnD"),d=n("qKvR");function c(e){var t=e.children;return Object(d.d)(o.j,null,Object(d.d)(o.k,null,"Overview"),t)}var s=i.a.h4(a||(a=Object(u.a)([""]))),b=i.a.h5(l||(l=Object(u.a)(["\n  font-size: 1.1em;\n"])));function h(e){var t=e.content;return Object(d.d)("div",null,Object(d.d)(o.j,null,Object(d.d)(o.k,null,"Table of contents"),Object(d.d)("ul",null,t.map((function(e){return Object(d.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(d.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?b:s;return Object(d.d)(o.j,{id:e.anchor,key:e.anchor},Object(d.d)(t,null,e.heading),e.content)})))}var j=i.a.span(r||(r=Object(u.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-client-custom-request-adapters-tsx-91b720d65558acbbfcc3.js.map