(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),l=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return y})),n.d(t,"i",(function(){return I})),n.d(t,"a",(function(){return A})),n.d(t,"n",(function(){return w})),n.d(t,"h",(function(){return q})),n.d(t,"g",(function(){return x})),n.d(t,"f",(function(){return k})),n.d(t,"b",(function(){return S})),n.d(t,"e",(function(){return T})),n.d(t,"c",(function(){return F})),n.d(t,"d",(function(){return R})),n.d(t,"m",(function(){return D})),n.d(t,"l",(function(){return N}));var a,l,r,i,o,c,u,s,d,p=n("AcpX"),b=n("vOnD"),h=n("q1tI"),v=n.n(h),j=n("P+0o"),O=n("3KYE"),m=n("qKvR"),f=b.a.section(a||(a=Object(p.a)([""]))),y=b.a.h4(l||(l=Object(p.a)([""]))),g=b.a.h5(r||(r=Object(p.a)([""]))),P=b.a.section(i||(i=Object(p.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),I=function(e){var t=e.children;return Object(m.d)(f,null,Object(m.d)(y,null,"Purpose"),t)},A=function(e){var t=e.version;return Object(m.d)(f,null,Object(m.d)(y,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},w=function(e){var t=e.children;return Object(m.d)(f,null,Object(m.d)(y,null,"Usage"),t)},q=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(m.d)(f,null,Object(m.d)(O.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters",a&&": "+a),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Type"),Object(m.d)("th",null,"Description"),n&&Object(m.d)("th",null,"Introduced in"))),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},x=function(e){var t=e.children,n=e.name,a=e.dataType,l=e.availableFrom,r=void 0===l?"1.0.0":l,i=v.a.useContext(O.a);return Object(m.d)("tr",null,Object(m.d)("td",null,n),Object(m.d)("td",null,a),Object(m.d)("td",null,t),i&&Object(m.d)("td",null,r))},k=function(e){var t=e.children;return Object(m.d)(f,null,Object(m.d)(y,null,"Returns"),t)},S=function(e){var t=e.children;return Object(m.d)(f,null,Object(m.d)(y,null,"Caveats"),t)},T=function(e){var t=e.children;return Object(m.d)(f,null,Object(m.d)(y,null,"Examples"),t)},F=function(e){var t=e.children,n=e.label;return Object(m.d)(v.a.Fragment,null,n&&Object(m.d)(g,null,n),Object(m.d)(j.a,{language:"typescript"},t))},R=function(e){var t=e.children;return Object(m.d)(P,null,Object(m.d)(g,null,"Common to examples below:"),t)},D=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(m.d)(f,null,Object(m.d)(y,null,"Type parameeters"),Object(m.d)(O.a.Provider,{value:!!n},Object(m.d)(y,null,"Parameters"),t?Object(m.d)("table",null,Object(m.d)("thead",null,Object(m.d)("tr",null,Object(m.d)("th",null,"Name"),Object(m.d)("th",null,"Default value"),Object(m.d)("th",null,"Description"),n?Object(m.d)("th",null,"Introduced in"):"")),Object(m.d)("tbody",null,t)):Object(m.d)("p",null,"There are no parameters.")))},G=b.a.tr(o||(o=Object(p.a)([""]))),C=b.a.td(c||(c=Object(p.a)([""]))),Y=b.a.td(u||(u=Object(p.a)([""]))),K=b.a.td(s||(s=Object(p.a)([""]))),E=b.a.td(d||(d=Object(p.a)([""]))),N=function(e){var t=e.children,n=e.name,a=e.defaultValue,l=e.availableFrom,r=void 0===l?"none":l,i=v.a.useContext(O.a);return Object(m.d)(G,null,Object(m.d)(C,null,n),Object(m.d)(Y,null,a),Object(m.d)(K,null,t),i?Object(m.d)(E,null,r):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,l,r=n("AcpX"),i=n("q1tI"),o=n("vOnD"),c=n("qKvR"),u=o.a.div(a||(a=Object(r.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),s=o.a.div(l||(l=Object(r.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function d(e){var t=e.variants,n=e.isRecommendation,a=Object(i.useState)("2.x"),l=a[0],r=a[1],o=Object(i.useCallback)((function(e){r(e.target.value)}),[]);return Object(c.d)(u,null,Object(c.d)("select",{value:l,onChange:o},Object(c.d)("option",{value:"1.x"},"Papupata 1.x"),Object(c.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(c.d)(s,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(l,e)})).map((function(e){return Object(c.d)("div",{key:e},t[e])})))}},NpMY:function(e,t,n){"use strict";n.r(t);var a,l=n("AcpX"),r=n("q1tI"),i=n("NqE+"),o=n("TBFr"),c=n("+ego"),u=n("jqoI"),s=n("Kg6r"),d=n("vOnD"),p=n("Wbzz"),b=n("MaSA"),h=n("qKvR"),v=d.a.div(a||(a=Object(l.a)(["\n  border-left: 3px solid #eee;\n  padding-left: 30px;\n  margin-bottom: 30px;\n"]))),j=function(e){var t=e.label,n=e.variants;return Object(h.d)(v,null,Object(h.d)("p",null,t),Object(h.d)(s.c,null,n.map((function(e){return"API.declareGetAPI('/api?"+e+"')"})).join("\n")))};t.default=function(){return Object(h.d)(c.a,null,Object(h.d)(i.a,null,Object(h.d)(o.a,null,Object(h.d)("h1",null,"Guide: Query-based variants"),Object(h.d)(u.c,null,"Sometimes you have APIs that only differ from each other based on their query parameters. For example, the response could be of a different type based on value of one. Papupata offers a way to deal with this."),Object(h.d)(s.a,{version:"1.8.0"}),Object(h.d)(u.b,{content:[{heading:"Prerequisites",anchor:"prerequisites",content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"Before starting this guide, you need to have an API declaration, with declared APIs. For information on how to get there, see ",Object(h.d)(p.a,{to:"/guides/declaring"},"Declaring APIs"),"."),Object(h.d)("p",null,"For the examples in the guide, the following code is assumed to be present in the scope:"),Object(h.d)(s.c,null,"\n                    import { APIDeclaration } from 'papupata'\n                    const API = new APIDeclaration()\n                  "))},{heading:"The Basics",anchor:"basics",content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"Query parameter based API selection is embedded into the path portion of an API declaration. This is because it, like everything else in the path, affects the routing that connects the request to the correct handler."),Object(h.d)("p",null,"The query parameter routing information is presented in a fashion not unlike regular query parameters, but there are extensions to the syntax."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant=orange').response<void>()\n                    "),Object(h.d)("p",null,"There can be any number of query parameter based constraints on an API, even multiple ones for the same parameter when it makes sense."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant=orange&travel=underwater&liquid=water').response<void>()\n                    "))},{heading:"The Specifics",anchor:"specifics",content:Object(h.d)(r.Fragment,null)},{heading:"Specific (hard-coded) values",anchor:"hardcoded",level:2,content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"Requiring a query parameter to have a specific value is done with the regular query string syntax, such as"),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant=orange').response<void>()\n                    "),Object(h.d)("p",null,"requires all invocations of the API to have the query parameter ",Object(h.d)(u.a,null,"variant")," set to"," ",Object(h.d)(u.a,null,"orange"),". When using papupata to call the API, it automatically sets up the variable, and in fact you generally speaking cannot set it manually. That is, making the call:"),Object(h.d)(s.c,null,"\n                    await api()\n                    "),Object(h.d)("p",null,"You are not expected to include ",Object(h.d)(u.a,null,"{variant: 'orange'}")," in the call, although it will be included in the actual REST call."),Object(h.d)("p",null,"On the server, according to type information that parameter is not available, but it is in fact there in case, say, a middleware needs access to it. If you ",Object(h.d)("strong",null,"really")," need it in the types, you can add the parameter into the"," ",Object(h.d)(u.a,null,"optionalQuery")," portion of the declaration, even though it is not actually optional. This is done to ensure that the invocation does not require the user to enter it."),Object(h.d)("p",null,"You can have multiple possible values for the parameter. Of course the parameter cannot be all of them at once (as arrays are not supported), so this just means that any of the values will do. Note that this creates an"," ",Object(h.d)("a",{href:"#ambiguous"},"ambiguous call"),"."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant=orange&variant=red&variant=yellow').response<void>()\n                    "))},{heading:"Non-matching value",anchor:"non-matching",level:2,content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"You can have an API that only applies when a parameter has a value that is not one of the ones you've specified. Instead of the usual name=value notation, you instead use value!=value."),Object(h.d)(b.a,{isRecommendation:!0,variants:{"1.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant!=orange')\n                              .query(['variant'] as const)\n                              .response<void>()\n                            "),"2.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant!=orange')\n                              .query({variant: String})\n                              .response<void>()\n                            ")}}),Object(h.d)("p",null,"requires all invocations of the API to have the query parameter ",Object(h.d)(u.a,null,"variant")," not to be set to"," ",Object(h.d)(u.a,null,"orange")),Object(h.d)(s.c,null,"\n                    await api({variant: 'purple'})\n                    "),Object(h.d)("p",null,"If you attempt to supply one of the forbidden values for a client invocation, it will throw an exception. On the server, this is just a regular query parameter."),Object(h.d)("p",null,"Do note that the lack of a value is considered to pass this check, so the following is fine as well:"),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant!=orange').response<void>()\n                    await api()\n                    "),Object(h.d)("p",null,'While it is a bit odd, this way the non-matching value is the exact opposite of the specific value routing, covering all cases. If you specifically want there to be a value which is not one of the ones you\'ve provided, you can combine this with "any value" routing rule.')," ",Object(h.d)(b.a,{isRecommendation:!0,variants:{"1.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant!=orange&variant')\n                              .query(['variant'] as const)\n                              .response<void>()\n                            "),"2.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant!=orange&variant')\n                              .query({variant: String})\n                              .response<void>()\n                            ")}}))},{heading:"Lack of query parameter",anchor:"lacking",level:2,content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"You can indicate that the API variant is only to be called when a query parameter is not present by prepending an exclamation mark to the name of the parameter."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?!variant')\n                      .response<void>()\n                    "),Object(h.d)("p",null,"Do note that an empty value (calling the REST API with something like ",Object(h.d)(u.a,null,"/myAPI?variant=")," or"," ",Object(h.d)(u.a,null,"/myAPI?variant"),") ",Object(h.d)("strong",null,"is")," considered to be a call with the parameter present, and as such will not match the API as declared. You can declare an API that accepts both by combining it with specific value routing."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?!variant&variant=')\n                      .response<void>()\n                    "),Object(h.d)("p",null,"This creates an ",Object(h.d)("a",{href:"#ambiguous"},"ambiguous call"),"."))},{heading:"Presence of query parameter",anchor:"presence",level:2,content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"You can indicate that the API variant is only to be called when a query parameter is present by simply having its name, with no equality or value in the query string part.")," ",Object(h.d)(b.a,{isRecommendation:!0,variants:{"1.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant')\n                              .query(['variant'] as const)\n                              .response<void>()\n                            "),"2.x":Object(h.d)(s.c,null,"\n                            const api = API.declareGetAPI('/myAPI?variant')\n                              .query({variant: String})\n                              .response<void>()\n                            ")}}),Object(h.d)("p",null,"Do note that an empty value (calling the REST API with something like ",Object(h.d)(u.a,null,"/myAPI?variant=")," or"," ",Object(h.d)(u.a,null,"/myAPI?variant"),") ",Object(h.d)("strong",null,"is")," considered to be a call with the parameter present and is match for this rule. You can specifically exclude empty values by using the non-matching value routing as well."),Object(h.d)(s.c,null,"\n                    const api = API.declareGetAPI('/myAPI?variant&variant!=')\n                      .response<void>()\n                    "))},{heading:"Ambiguous calls",anchor:"ambiguous",content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"By combining routing rules you can end up in a situation where there are multiple possible values for a query parameter. In these cases, when invoking the API using papupata, the client is guaranteed to choose valid parameters, but it may choose any valid combination in a potentially unpredictable fashion."))},{heading:"The big gotcha",anchor:"gotcha",content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"Unless you really know what you're doing, having overlapping API declarations is a good way to cause issues for yourself down the line. That is, overlapping in the sense that as far as routing is concerned, multiple APIs could be valid for a single call."),Object(h.d)("p",null,'To avoid doing this when using query-based API variants, instead of going with a default "anything not handled goes here" route, ensure your APIs use negations of the rules of the other routes to allow non-ambiguous routing.'),Object(h.d)("p",null,"A few examples:"),Object(h.d)(j,{label:"Specific value and non-specific value",variants:["variant=alpha","variant!=alpha"]}),Object(h.d)(j,{label:"Multiple specific values",variants:["variant=alpha","variant=beta","variant!=alpha&variant!=beta"]}),Object(h.d)(j,{label:"Presence and non-presence",variants:["variant","!variant"]}),Object(h.d)(j,{label:"Presence of non-empty and non-present/empty",variants:["variant&variant!=","!variant&variant="]}),Object(h.d)("p",null,"If this seems impractical because of, say, complexity, you can have overlap as long as you consider its implications, specifically how routing considers routes:"),Object(h.d)("ul",null,Object(h.d)("li",null,"if ",Object(h.d)(u.a,null,"autoImplementAllAPIs")," is set to false (default in papupata 1.x), the variants are checked in their implementation order"),Object(h.d)("li",null,"if ",Object(h.d)(u.a,null,"autoImplementAllAPIs")," is set to true (default in papupata 2.x), the variants are checked in their declaration order"),Object(h.d)("li",null,"If you encounter misrouting (whether in the route implementation or a middleware leading there), you can import"," ",Object(h.d)(u.a,null,"skipHandlingRoute"),"from papupata and return it to resume routing from later variants.")))},{heading:"Use cases",anchor:"useCases",content:Object(h.d)(r.Fragment,null,Object(h.d)("p",null,"Probably the most likely use case are APIs that either accept differents sets of parameters based on other parameters, or ones that return different data based on the query parameters."),Object(h.d)("p",null,"So let's have an example of an API with different sets of inputs:"),Object(h.d)(v,null," ",Object(h.d)(b.a,{isRecommendation:!0,variants:{"1.x":Object(h.d)(s.c,null,"\n                              const simpleSearch = API.declarePostAPI('/search?advanced!=true')\n                                .query(['queryString'] as const)\n                                .response<any>()\n          \n                              const advancedSearch = API.declarePostAPI('/search?advanced=true')\n                                .query(['name', 'address', 'phone', 'email'] as const)\n                                .response<any>()\n                              "),"2.x":Object(h.d)(s.c,null,"\n                              const simpleSearch = API.declarePostAPI('/search?advanced!=true')\n                                .query({queryString: String})\n                                .response<any>()\n          \n                              const advancedSearch = API.declarePostAPI('/search?advanced=true')\n                                .query({name: String, address: String, phone: String, email: String}})\n                                .response<any>()\n                              ")}}),Object(h.d)("p",null,"So basically a single endpoint serves two types of search functionality, but using the query-based API variants we can have both of them work perfectly in a typed fashion.")),Object(h.d)("p",null,"And for different responses, perhaps something like this:"),Object(h.d)(v,null,Object(h.d)(s.c,null,"\n                    const myDetailsAPI = API.declarePostAPI('/my-details?includeRelations=false')\n                      .response<UserDetails>()\n                 \n                    const myDetailsWithRelationsAPI = API.declarePostAPI('/my-details?includeRelations=true')\n                      .response<UserDetails & RelationInfo>()\n                    "),Object(h.d)("p",null,"Again, a single API and two types of output, fully typed.")))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));var a,l,r,i=n("AcpX"),o=(n("NqE+"),n("TBFr"),n("+ego"),n("q1tI"),n("Kg6r")),c=n("vOnD"),u=n("qKvR");function s(e){var t=e.children;return Object(u.d)(o.j,null,Object(u.d)(o.k,null,"Overview"),t)}var d=c.a.h4(a||(a=Object(i.a)([""]))),p=c.a.h5(l||(l=Object(i.a)(["\n  font-size: 1.1em;\n"])));function b(e){var t=e.content;return Object(u.d)("div",null,Object(u.d)(o.j,null,Object(u.d)(o.k,null,"Table of contents"),Object(u.d)("ul",null,t.map((function(e){return Object(u.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(u.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?p:d;return Object(u.d)(o.j,{id:e.anchor,key:e.anchor},Object(u.d)(t,null,e.heading),e.content)})))}var h=c.a.span(r||(r=Object(i.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-declaring-query-based-variants-tsx-e1f9fffd82aeb021a605.js.map