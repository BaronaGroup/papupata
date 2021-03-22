(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"3KYE":function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("q1tI"),u=r.createContext(!1)},Kg6r:function(n,e,t){"use strict";t.d(e,"j",(function(){return m})),t.d(e,"k",(function(){return g})),t.d(e,"i",(function(){return I})),t.d(e,"a",(function(){return k})),t.d(e,"n",(function(){return A})),t.d(e,"h",(function(){return P})),t.d(e,"g",(function(){return K})),t.d(e,"f",(function(){return q})),t.d(e,"b",(function(){return T})),t.d(e,"e",(function(){return x})),t.d(e,"c",(function(){return F})),t.d(e,"d",(function(){return C})),t.d(e,"m",(function(){return D})),t.d(e,"l",(function(){return B}));var r=t("AcpX"),u=(t("nKUr"),t("vOnD")),l=t("q1tI"),c=t.n(l),a=t("P+0o"),i=t("3KYE"),o=t("qKvR");function d(){var n=Object(r.a)([""]);return d=function(){return n},n}function b(){var n=Object(r.a)([""]);return b=function(){return n},n}function s(){var n=Object(r.a)([""]);return s=function(){return n},n}function j(){var n=Object(r.a)([""]);return j=function(){return n},n}function f(){var n=Object(r.a)([""]);return f=function(){return n},n}function O(){var n=Object(r.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]);return O=function(){return n},n}function h(){var n=Object(r.a)([""]);return h=function(){return n},n}function v(){var n=Object(r.a)([""]);return v=function(){return n},n}function p(){var n=Object(r.a)([""]);return p=function(){return n},n}var m=u.a.section(p()),g=u.a.h4(v()),y=u.a.h5(h()),w=u.a.section(O()),I=function(n){var e=n.children;return Object(o.d)(m,null,Object(o.d)(g,null,"Purpose"),e)},k=function(n){var e=n.version;return Object(o.d)(m,null,Object(o.d)(g,null,"Availability"),"This functionality is available from papupata version ",e," onwards.")},A=function(n){var e=n.children;return Object(o.d)(m,null,Object(o.d)(g,null,"Usage"),e)},P=function(n){var e=n.children,t=n.includeAvailableFrom,r=n.label;return Object(o.d)(m,null,Object(o.d)(i.a.Provider,{value:!!t},Object(o.d)(g,null,"Parameters",r&&": "+r),e?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Type"),Object(o.d)("th",null,"Description"),t&&Object(o.d)("th",null,"Introduced in"))),Object(o.d)("tbody",null,e)):Object(o.d)("p",null,"There are no parameters.")))},K=function(n){var e=n.children,t=n.name,r=n.dataType,u=n.availableFrom,l=void 0===u?"1.0.0":u,a=c.a.useContext(i.a);return Object(o.d)("tr",null,Object(o.d)("td",null,t),Object(o.d)("td",null,r),Object(o.d)("td",null,e),a&&Object(o.d)("td",null,l))},q=function(n){var e=n.children;return Object(o.d)(m,null,Object(o.d)(g,null,"Returns"),e)},T=function(n){var e=n.children;return Object(o.d)(m,null,Object(o.d)(g,null,"Caveats"),e)},x=function(n){var e=n.children;return Object(o.d)(m,null,Object(o.d)(g,null,"Examples"),e)},F=function(n){var e=n.children,t=n.label;return Object(o.d)(c.a.Fragment,null,t&&Object(o.d)(y,null,t),Object(o.d)(a.a,{language:"typescript"},e))},C=function(n){var e=n.children;return Object(o.d)(w,null,Object(o.d)(y,null,"Common to examples below:"),e)},D=function(n){var e=n.children,t=n.includeAvailableFrom;return Object(o.d)(m,null,Object(o.d)(g,null,"Type parameeters"),Object(o.d)(i.a.Provider,{value:!!t},Object(o.d)(g,null,"Parameters"),e?Object(o.d)("table",null,Object(o.d)("thead",null,Object(o.d)("tr",null,Object(o.d)("th",null,"Name"),Object(o.d)("th",null,"Default value"),Object(o.d)("th",null,"Description"),t?Object(o.d)("th",null,"Introduced in"):"")),Object(o.d)("tbody",null,e)):Object(o.d)("p",null,"There are no parameters.")))},N=u.a.tr(f()),Y=u.a.td(j()),E=u.a.td(s()),R=u.a.td(b()),U=u.a.td(d()),B=function(n){var e=n.children,t=n.name,r=n.defaultValue,u=n.availableFrom,l=void 0===u?"none":u,a=c.a.useContext(i.a);return Object(o.d)(N,null,Object(o.d)(Y,null,t),Object(o.d)(E,null,r),Object(o.d)(R,null,e),a?Object(o.d)(U,null,l):"")}},adJK:function(n,e,t){"use strict";t.r(e);t("nKUr");var r=t("q1tI"),u=t("TBFr"),l=t("jqoI"),c=t("NqE+"),a=t("+ego"),i=t("qKvR");e.default=function(){return Object(i.d)(a.a,null,Object(i.d)(c.a,null,Object(i.d)(u.a,null,Object(i.d)("h1",null,"Guide: sharing API declarations"),Object(i.d)(l.c,null,"Sharing is caring. You care about the users of your API, right? This guide is very much work in progress."),Object(i.d)(l.b,{content:[{heading:"Basics",anchor:"basics",content:Object(i.d)(r.Fragment,null,Object(i.d)("p",null,"For the time being sharing API declarations is not super convenient. You'll probably want to have your API declarations either in a separate npm package, or maybe as a git submodule."),Object(i.d)("p",null,"Guidelines for generally available API declarations:"),Object(i.d)("ul",null,Object(i.d)("li",null,"Avoid referencing libraries in your API declarations"),Object(i.d)("li",null,"If you must reference libraries, consider making them peer dependencies to avoid type incompatibilities"),Object(i.d)("li",null,"Do not reference your own types elsewhere in the file system")),Object(i.d)("p",null,"You'll want to make sure that the package you create has both typescript d.td definition files as well as the compiled .js files. Alternatively you can manage with just .ts files, but then the consumers have to find a way to get their typescript compilation working with the module, which can be tricky."))},{heading:"The future",anchor:"future",content:Object(i.d)(r.Fragment,null,Object(i.d)("p",null,"Work is being put into creating a tool that extracts the API declarations from your existing code, while rewriting the types in such a way that they do not refer to any libraries or internal components. Not available yet unfortunately. Ideally it will solve all of the problems with the current sharing mechanisms."))}]}))))}},jqoI:function(n,e,t){"use strict";t.d(e,"c",(function(){return d})),t.d(e,"b",(function(){return j})),t.d(e,"a",(function(){return f}));var r=t("AcpX"),u=(t("nKUr"),t("q1tI"),t("Kg6r")),l=t("vOnD"),c=t("qKvR");function a(){var n=Object(r.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"]);return a=function(){return n},n}function i(){var n=Object(r.a)(["\n  font-size: 1.1em;\n"]);return i=function(){return n},n}function o(){var n=Object(r.a)([""]);return o=function(){return n},n}function d(n){var e=n.children;return Object(c.d)(u.j,null,Object(c.d)(u.k,null,"Overview"),e)}var b=l.a.h4(o()),s=l.a.h5(i());function j(n){var e=n.content;return Object(c.d)("div",null,Object(c.d)(u.j,null,Object(c.d)(u.k,null,"Table of contents"),Object(c.d)("ul",null,e.map((function(n){return Object(c.d)("li",{style:{marginLeft:18*(n.level||0)},key:n.anchor},Object(c.d)("a",{href:"#"+n.anchor},n.heading))})))),e.map((function(n){var e=n.level?s:b;return Object(c.d)(u.j,{id:n.anchor,key:n.anchor},Object(c.d)(e,null,n.heading),n.content)})))}var f=l.a.span(a())}}]);
//# sourceMappingURL=component---src-pages-guides-sharing-tsx-f1233b2e1f750d4c9dc7.js.map