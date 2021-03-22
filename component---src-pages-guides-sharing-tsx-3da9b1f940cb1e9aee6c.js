(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var l=n("q1tI"),r=l.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return m})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return I})),n.d(t,"a",(function(){return k})),n.d(t,"n",(function(){return A})),n.d(t,"h",(function(){return P})),n.d(t,"g",(function(){return q})),n.d(t,"f",(function(){return T})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return F})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return K})),n.d(t,"m",(function(){return D})),n.d(t,"l",(function(){return J}));var l,r,a,c,u,i,d,o,b,s=n("AcpX"),j=n("vOnD"),O=n("q1tI"),h=n.n(O),f=n("P+0o"),p=n("3KYE"),v=n("qKvR"),m=j.a.section(l||(l=Object(s.a)([""]))),g=j.a.h4(r||(r=Object(s.a)([""]))),y=j.a.h5(a||(a=Object(s.a)([""]))),w=j.a.section(c||(c=Object(s.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),I=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(g,null,"Purpose"),t)},k=function(e){var t=e.version;return Object(v.d)(m,null,Object(v.d)(g,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},A=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(g,null,"Usage"),t)},P=function(e){var t=e.children,n=e.includeAvailableFrom,l=e.label;return Object(v.d)(m,null,Object(v.d)(p.a.Provider,{value:!!n},Object(v.d)(g,null,"Parameters",l&&": "+l),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Type"),Object(v.d)("th",null,"Description"),n&&Object(v.d)("th",null,"Introduced in"))),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},q=function(e){var t=e.children,n=e.name,l=e.dataType,r=e.availableFrom,a=void 0===r?"1.0.0":r,c=h.a.useContext(p.a);return Object(v.d)("tr",null,Object(v.d)("td",null,n),Object(v.d)("td",null,l),Object(v.d)("td",null,t),c&&Object(v.d)("td",null,a))},T=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(g,null,"Returns"),t)},x=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(g,null,"Caveats"),t)},F=function(e){var t=e.children;return Object(v.d)(m,null,Object(v.d)(g,null,"Examples"),t)},C=function(e){var t=e.children,n=e.label;return Object(v.d)(h.a.Fragment,null,n&&Object(v.d)(y,null,n),Object(v.d)(f.a,{language:"typescript"},t))},K=function(e){var t=e.children;return Object(v.d)(w,null,Object(v.d)(y,null,"Common to examples below:"),t)},D=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(v.d)(m,null,Object(v.d)(g,null,"Type parameeters"),Object(v.d)(p.a.Provider,{value:!!n},Object(v.d)(g,null,"Parameters"),t?Object(v.d)("table",null,Object(v.d)("thead",null,Object(v.d)("tr",null,Object(v.d)("th",null,"Name"),Object(v.d)("th",null,"Default value"),Object(v.d)("th",null,"Description"),n?Object(v.d)("th",null,"Introduced in"):"")),Object(v.d)("tbody",null,t)):Object(v.d)("p",null,"There are no parameters.")))},N=j.a.tr(u||(u=Object(s.a)([""]))),Y=j.a.td(i||(i=Object(s.a)([""]))),E=j.a.td(d||(d=Object(s.a)([""]))),R=j.a.td(o||(o=Object(s.a)([""]))),B=j.a.td(b||(b=Object(s.a)([""]))),J=function(e){var t=e.children,n=e.name,l=e.defaultValue,r=e.availableFrom,a=void 0===r?"none":r,c=h.a.useContext(p.a);return Object(v.d)(N,null,Object(v.d)(Y,null,n),Object(v.d)(E,null,l),Object(v.d)(R,null,t),c?Object(v.d)(B,null,a):"")}},adJK:function(e,t,n){"use strict";n.r(t);n("72eQ");var l=n("q1tI"),r=n("TBFr"),a=n("jqoI"),c=n("NqE+"),u=n("+ego"),i=n("qKvR");t.default=function(){return Object(i.d)(u.a,null,Object(i.d)(c.a,null,Object(i.d)(r.a,null,Object(i.d)("h1",null,"Guide: sharing API declarations"),Object(i.d)(a.c,null,"Sharing is caring. You care about the users of your API, right? This guide is very much work in progress."),Object(i.d)(a.b,{content:[{heading:"Basics",anchor:"basics",content:Object(i.d)(l.Fragment,null,Object(i.d)("p",null,"For the time being sharing API declarations is not super convenient. You'll probably want to have your API declarations either in a separate npm package, or maybe as a git submodule."),Object(i.d)("p",null,"Guidelines for generally available API declarations:"),Object(i.d)("ul",null,Object(i.d)("li",null,"Avoid referencing libraries in your API declarations"),Object(i.d)("li",null,"If you must reference libraries, consider making them peer dependencies to avoid type incompatibilities"),Object(i.d)("li",null,"Do not reference your own types elsewhere in the file system")),Object(i.d)("p",null,"You'll want to make sure that the package you create has both typescript d.td definition files as well as the compiled .js files. Alternatively you can manage with just .ts files, but then the consumers have to find a way to get their typescript compilation working with the module, which can be tricky."))},{heading:"The future",anchor:"future",content:Object(i.d)(l.Fragment,null,Object(i.d)("p",null,"Work is being put into creating a tool that extracts the API declarations from your existing code, while rewriting the types in such a way that they do not refer to any libraries or internal components. Not available yet unfortunately. Ideally it will solve all of the problems with the current sharing mechanisms."))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return O}));var l,r,a,c=n("AcpX"),u=(n("q1tI"),n("Kg6r")),i=n("vOnD"),d=n("qKvR");function o(e){var t=e.children;return Object(d.d)(u.j,null,Object(d.d)(u.k,null,"Overview"),t)}var b=i.a.h4(l||(l=Object(c.a)([""]))),s=i.a.h5(r||(r=Object(c.a)(["\n  font-size: 1.1em;\n"])));function j(e){var t=e.content;return Object(d.d)("div",null,Object(d.d)(u.j,null,Object(d.d)(u.k,null,"Table of contents"),Object(d.d)("ul",null,t.map((function(e){return Object(d.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(d.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?s:b;return Object(d.d)(u.j,{id:e.anchor,key:e.anchor},Object(d.d)(t,null,e.heading),e.content)})))}var O=i.a.span(a||(a=Object(c.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-sharing-tsx-3da9b1f940cb1e9aee6c.js.map