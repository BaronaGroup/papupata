(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"3KYE":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("q1tI"),a=r.createContext(!1)},Kg6r:function(t,e,n){"use strict";n.d(e,"j",(function(){return v})),n.d(e,"k",(function(){return m})),n.d(e,"i",(function(){return w})),n.d(e,"a",(function(){return T})),n.d(e,"n",(function(){return k})),n.d(e,"h",(function(){return I})),n.d(e,"g",(function(){return P})),n.d(e,"f",(function(){return A})),n.d(e,"b",(function(){return x})),n.d(e,"e",(function(){return R})),n.d(e,"c",(function(){return K})),n.d(e,"d",(function(){return F})),n.d(e,"m",(function(){return U})),n.d(e,"l",(function(){return Y}));var r=n("AcpX"),a=(n("nKUr"),n("vOnD")),u=n("q1tI"),l=n.n(u),o=n("P+0o"),i=n("3KYE"),c=n("qKvR");function d(){var t=Object(r.a)([""]);return d=function(){return t},t}function s(){var t=Object(r.a)([""]);return s=function(){return t},t}function b(){var t=Object(r.a)([""]);return b=function(){return t},t}function h(){var t=Object(r.a)([""]);return h=function(){return t},t}function j(){var t=Object(r.a)([""]);return j=function(){return t},t}function O(){var t=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return O=function(){return t},t}function p(){var t=Object(r.a)([""]);return p=function(){return t},t}function f(){var t=Object(r.a)([""]);return f=function(){return t},t}function y(){var t=Object(r.a)([""]);return y=function(){return t},t}var v=a.a.section(y()),m=a.a.h4(f()),g=a.a.h5(p()),q=a.a.section(O()),w=function(t){var e=t.children;return Object(c.d)(v,null,Object(c.d)(m,null,"Purpose"),e)},T=function(t){var e=t.version;return Object(c.d)(v,null,Object(c.d)(m,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},k=function(t){var e=t.children;return Object(c.d)(v,null,Object(c.d)(m,null,"Usage"),e)},I=function(t){var e=t.children,n=t.includeAvailableFrom,r=t.label;return Object(c.d)(v,null,Object(c.d)(i.a.Provider,{value:!!n},Object(c.d)(m,null,"Parameters",r&&": "+r),e?Object(c.d)("table",null,Object(c.d)("thead",null,Object(c.d)("tr",null,Object(c.d)("th",null,"Name"),Object(c.d)("th",null,"Type"),Object(c.d)("th",null,"Description"),n&&Object(c.d)("th",null,"Introduced in"))),Object(c.d)("tbody",null,e)):Object(c.d)("p",null,"There are no parameters.")))},P=function(t){var e=t.children,n=t.name,r=t.dataType,a=t.availableFrom,u=void 0===a?"1.0.0":a,o=l.a.useContext(i.a);return Object(c.d)("tr",null,Object(c.d)("td",null,n),Object(c.d)("td",null,r),Object(c.d)("td",null,e),o&&Object(c.d)("td",null,u))},A=function(t){var e=t.children;return Object(c.d)(v,null,Object(c.d)(m,null,"Returns"),e)},x=function(t){var e=t.children;return Object(c.d)(v,null,Object(c.d)(m,null,"Caveats"),e)},R=function(t){var e=t.children;return Object(c.d)(v,null,Object(c.d)(m,null,"Examples"),e)},K=function(t){var e=t.children,n=t.label;return Object(c.d)(l.a.Fragment,null,n&&Object(c.d)(g,null,n),Object(c.d)(o.a,{language:"typescript"},e))},F=function(t){var e=t.children;return Object(c.d)(q,null,Object(c.d)(g,null,"Common to examples below:"),e)},U=function(t){var e=t.children,n=t.includeAvailableFrom;return Object(c.d)(v,null,Object(c.d)(m,null,"Type parameeters"),Object(c.d)(i.a.Provider,{value:!!n},Object(c.d)(m,null,"Parameters"),e?Object(c.d)("table",null,Object(c.d)("thead",null,Object(c.d)("tr",null,Object(c.d)("th",null,"Name"),Object(c.d)("th",null,"Default value"),Object(c.d)("th",null,"Description"),n?Object(c.d)("th",null,"Introduced in"):"")),Object(c.d)("tbody",null,e)):Object(c.d)("p",null,"There are no parameters.")))},C=a.a.tr(j()),N=a.a.td(h()),D=a.a.td(b()),E=a.a.td(s()),L=a.a.td(d()),Y=function(t){var e=t.children,n=t.name,r=t.defaultValue,a=t.availableFrom,u=void 0===a?"none":a,o=l.a.useContext(i.a);return Object(c.d)(C,null,Object(c.d)(N,null,n),Object(c.d)(D,null,r),Object(c.d)(E,null,e),o?Object(c.d)(L,null,u):"")}},Y4vq:function(t,e,n){"use strict";n.r(e);n("nKUr");var r=n("q1tI"),a=n("Kg6r"),u=n("TBFr"),l=n("jqoI"),o=n("NqE+"),i=n("+ego"),c=n("qKvR");e.default=function(){return Object(c.d)(i.a,null,Object(c.d)(o.a,null,Object(c.d)(u.a,null,Object(c.d)("h1",null,"Guide: custom request adapters"),Object(c.d)(l.c,null,"Making API calls with papupata happens using request adapters. The built-in ones are naive and limited, so you probably want to create one that fits whatever requirements you have."),Object(c.d)(l.b,{content:[{heading:"The basics",anchor:"basics",content:Object(c.d)(r.Fragment,null,Object(c.d)("p",null,"A request adapter is a function, which receives a bunch of parameters and is expected to return a promise that resolves with the value returned by the API. Now, let's start with the type declaration."),Object(c.d)(a.c,null,"\n                    export type MakeRequestAdapter<RequestOptions = void> = (\n                      method: string,\n                      url: string,\n                      query: any,\n                      body: any,\n                      params: any,\n                      api: any,\n                      requestOptions?: RequestOptions\n                    ) => Promise<any>                    \n                    "),Object(c.d)("p",null,"In the table below you'll find listed typical uses for each of the parameters, from the point of view of making typical HTTP requests."),Object(c.d)("table",null,Object(c.d)("thead",null,Object(c.d)("th",null,"Name"),Object(c.d)("th",null,"Typical uses")),Object(c.d)("tbody",null,Object(c.d)("tr",null,Object(c.d)("td",null,"method"),Object(c.d)("td",null,"This is the HTTP method the request is meant to be made with, in lowercase letters. You'll want to supply it to the library you use for actually making the requests. It can also be useful for determining if you should include the body or not.")),Object(c.d)("tr",null,Object(c.d)("td",null,"url"),Object(c.d)("td",null,Object(c.d)("p",null,"This is the URL to the API, with path parameters already baked in, but without query parameters. Depending on your library you might want to add the query parameters to it before passing it along to your request library, or perhaps you can use the URL as is."),Object(c.d)("p",null,"If you do want to add the parameters, the ",Object(c.d)(l.a,null,"qs")," library is a useful library for getting that done."),Object(c.d)(a.c,null,"\n                            import qs from 'qs'\n\n                            const finalURL = url + '?' + qs.stringify(query)\n                          "))),Object(c.d)("tr",null,Object(c.d)("td",null,"query"),Object(c.d)("td",null,"This is a javascript object that has keys for query parameter names and values are the query parameter values. You'll want to pass this data along with the request, either baking it into the URL or passing the data to your library in some other way, such as the ",Object(c.d)(l.a,null,"qs")," option of ",Object(c.d)(l.a,null,"request"),".")),Object(c.d)("tr",null,Object(c.d)("td",null,"body"),Object(c.d)("td",null,"This is the body that is to be sent with the request. No serialization or other manipulation has been done before it arrives to this function, so if your library requires, say, you to do ",Object(c.d)(l.a,null,"JSON.stringify")," on objects then you'll want to do that before passing it along. Typically this will be an object, or undefined if there is no data for the body, though as papupata supports other types of bodies as well it can end up being pretty much any type.")),Object(c.d)("tr",null,Object(c.d)("td",null,"params"),Object(c.d)("td",null,"Typically you won't need to use this parameter, as all of the path parameters have already been baked in to URL. On rare occasions you might want to make some decisions based on the path parameter values, so it is provided for completeness. The format is a javascript object that has keys for path parameter names and values their values.")),Object(c.d)("tr",null,Object(c.d)("td",null,"api"),Object(c.d)("td",null,"This is the API being invoked. This is especially useful if you have route options and wish to access them for making the request, for, say, determining if authentication needs to be performed.")),Object(c.d)("tr",null,Object(c.d)("td",null,"requestOptions"),Object(c.d)("td",null,"If you have specified options to be passed for making requests, this is where you'll find them.")))))},{heading:"Error handling",anchor:"errors",content:Object(c.d)(r.Fragment,null,Object(c.d)("p",null,"At this time papupata does no take error handling into account. Any exceptions thrown in the adapter will be catchable wherever the call to the API was made."))},{heading:"Examples",anchor:"examples",content:Object(c.d)(r.Fragment,null,Object(c.d)("p",null,"WIP"))}]}))))}},jqoI:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return j}));var r=n("AcpX"),a=(n("nKUr"),n("q1tI"),n("Kg6r")),u=n("vOnD"),l=n("qKvR");function o(){var t=Object(r.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"]);return o=function(){return t},t}function i(){var t=Object(r.a)(["\n  font-size: 1.1em;\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)([""]);return c=function(){return t},t}function d(t){var e=t.children;return Object(l.d)(a.j,null,Object(l.d)(a.k,null,"Overview"),e)}var s=u.a.h4(c()),b=u.a.h5(i());function h(t){var e=t.content;return Object(l.d)("div",null,Object(l.d)(a.j,null,Object(l.d)(a.k,null,"Table of contents"),Object(l.d)("ul",null,e.map((function(t){return Object(l.d)("li",{style:{marginLeft:18*(t.level||0)},key:t.anchor},Object(l.d)("a",{href:"#"+t.anchor},t.heading))})))),e.map((function(t){var e=t.level?b:s;return Object(l.d)(a.j,{id:t.anchor,key:t.anchor},Object(l.d)(e,null,t.heading),t.content)})))}var j=u.a.span(o())}}]);
//# sourceMappingURL=component---src-pages-guides-client-custom-request-adapters-tsx-30b0956acfbe973e3eae.js.map