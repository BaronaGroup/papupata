(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"3KYE":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),o=a.createContext(!1)},Kg6r:function(e,t,n){"use strict";n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"a",(function(){return I})),n.d(t,"n",(function(){return A})),n.d(t,"h",(function(){return P})),n.d(t,"g",(function(){return x})),n.d(t,"f",(function(){return T})),n.d(t,"b",(function(){return q})),n.d(t,"e",(function(){return F})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return C})),n.d(t,"m",(function(){return D})),n.d(t,"l",(function(){return V}));var a,o,l,c,i,u,r,d,s,b=n("AcpX"),h=n("vOnD"),p=n("q1tI"),j=n.n(p),m=n("P+0o"),O=n("3KYE"),f=n("qKvR"),v=h.a.section(a||(a=Object(b.a)([""]))),g=h.a.h4(o||(o=Object(b.a)([""]))),y=h.a.h5(l||(l=Object(b.a)([""]))),k=h.a.section(c||(c=Object(b.a)(["\n  padding: 15px 30px;\n  background: lightyellow;\n"]))),w=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(g,null,"Purpose"),t)},I=function(e){var t=e.version;return Object(f.d)(v,null,Object(f.d)(g,null,"Availability"),"This functionality is available from papupata version ",t," onwards.")},A=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(g,null,"Usage"),t)},P=function(e){var t=e.children,n=e.includeAvailableFrom,a=e.label;return Object(f.d)(v,null,Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters",a&&": "+a),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Type"),Object(f.d)("th",null,"Description"),n&&Object(f.d)("th",null,"Introduced in"))),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},x=function(e){var t=e.children,n=e.name,a=e.dataType,o=e.availableFrom,l=void 0===o?"1.0.0":o,c=j.a.useContext(O.a);return Object(f.d)("tr",null,Object(f.d)("td",null,n),Object(f.d)("td",null,a),Object(f.d)("td",null,t),c&&Object(f.d)("td",null,l))},T=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(g,null,"Returns"),t)},q=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(g,null,"Caveats"),t)},F=function(e){var t=e.children;return Object(f.d)(v,null,Object(f.d)(g,null,"Examples"),t)},M=function(e){var t=e.children,n=e.label;return Object(f.d)(j.a.Fragment,null,n&&Object(f.d)(y,null,n),Object(f.d)(m.a,{language:"typescript"},t))},C=function(e){var t=e.children;return Object(f.d)(k,null,Object(f.d)(y,null,"Common to examples below:"),t)},D=function(e){var t=e.children,n=e.includeAvailableFrom;return Object(f.d)(v,null,Object(f.d)(g,null,"Type parameeters"),Object(f.d)(O.a.Provider,{value:!!n},Object(f.d)(g,null,"Parameters"),t?Object(f.d)("table",null,Object(f.d)("thead",null,Object(f.d)("tr",null,Object(f.d)("th",null,"Name"),Object(f.d)("th",null,"Default value"),Object(f.d)("th",null,"Description"),n?Object(f.d)("th",null,"Introduced in"):"")),Object(f.d)("tbody",null,t)):Object(f.d)("p",null,"There are no parameters.")))},E=h.a.tr(i||(i=Object(b.a)([""]))),S=h.a.td(u||(u=Object(b.a)([""]))),B=h.a.td(r||(r=Object(b.a)([""]))),K=h.a.td(d||(d=Object(b.a)([""]))),R=h.a.td(s||(s=Object(b.a)([""]))),V=function(e){var t=e.children,n=e.name,a=e.defaultValue,o=e.availableFrom,l=void 0===o?"none":o,c=j.a.useContext(O.a);return Object(f.d)(E,null,Object(f.d)(S,null,n),Object(f.d)(B,null,a),Object(f.d)(K,null,t),c?Object(f.d)(R,null,l):"")}},MaSA:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,o,l=n("AcpX"),c=n("q1tI"),i=n("vOnD"),u=n("qKvR"),r=i.a.div(a||(a=Object(l.a)(["\n  border-left: 4px solid #663399;\n  padding: 5px 0 5px 10px;\n"]))),d=i.a.div(o||(o=Object(l.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n"])));function s(e){var t=e.variants,n=e.isRecommendation,a=Object(c.useState)("2.x"),o=a[0],l=a[1],i=Object(c.useCallback)((function(e){l(e.target.value)}),[]);return Object(u.d)(r,null,Object(u.d)("select",{value:o,onChange:i},Object(u.d)("option",{value:"1.x"},"Papupata 1.x"),Object(u.d)("option",{value:"2.x"},"Papupata 2.x")),n&&Object(u.d)(d,null,"Older styles are still supported in later versions, just not preferred."),Object.keys(t).filter((function(e){return function(e,t){return"*"===t||t===e}(o,e)})).map((function(e){return Object(u.d)("div",{key:e},t[e])})))}},NrVq:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n("NqE+"),l=n("TBFr"),c=n("+ego"),i=n("jqoI"),u=n("Kg6r"),r=n("Wbzz"),d=n("MaSA"),s=n("qKvR");t.default=function(){return Object(s.d)(c.a,null,Object(s.d)(o.a,null,Object(s.d)(l.a,null,Object(s.d)("h1",null,"Guide: testing APIs"),Object(s.d)(i.c,null,"Testing and mocking are often tricky things. Papupata offers its own mocking functionality to make it easier."),Object(s.d)(i.b,{content:[{heading:"Prerequisites",anchor:"prerequisites",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"Before starting this guide, you need to have an API declaration, with declared APIs. For information on how to get there, see ",Object(s.d)(r.a,{to:"/guides/declaring"},"Declaring APIs"),". You also need to have configured the API declaration to be able to make requests. This is covered in ",Object(s.d)(r.a,{to:"/guides/client/setup"},"Setting up papupata")),Object(s.d)("p",null,"For the examples in the guide, the following code is assumed to be present in the scope, and by this time you should be fully aware of what it all means:")," ",Object(s.d)(d.a,{isRecommendation:!0,variants:{"1.x":Object(s.d)(u.c,null,"\n                          const API = new APIDeclaration()\n                          const api = API.declarePatchAPI('/update/:id')\n                            .params(['id'] as const)\n                            .body<{name: string}>()\n                            .response<string>()\n                        "),"2.x":Object(s.d)(u.c,null,"\n                          const API = new APIDeclaration()\n                          const api = API.declarePatchAPI('/update/:id')\n                            .params({id: String})\n                            .body<{name: string}>()\n                            .response<string>()\n                        ")}}))},{heading:"Foreword",anchor:"foreword",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"To begin with, you absolutely can the functionality provided by various testing libraries with papupata. You can just jest mocks to mock the calls to APIs, you can do the same with sinon. Or you can nock to intercept the requests that papupata makes."),Object(s.d)("p",null,"These are all fine options, and if you are comfortable using them, by all means do. Just be aware that this guide mostly just covers the built-in mocking functionality of papupata."))},{heading:"The Basics",anchor:"basics",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"All APIs declared with papupata expose three methods to help with testing: ",Object(s.d)(i.a,null,"mock"),","," ",Object(s.d)(i.a,null,"mockOnce")," and ",Object(s.d)(i.a,null,"unmock"),". Their purpose is simple: to help you temporarily have the API call do something other than an actual API call."),Object(s.d)("p",null,"The ",Object(s.d)(i.a,null,"mock")," and ",Object(s.d)(i.a,null,"mockOnce")," functions do exactly that."," ",Object(s.d)(i.a,null,"mock")," changes the behavior until it is undone, whereas ",Object(s.d)(i.a,null,"mockOnce")," ","automatically undoes itself after the first call. Everything from now on applies to both of the functions."),Object(s.d)("p",null,"The simplest mock is one that returns a fixed value. Making that happen is simple, too:"),Object(s.d)(u.c,null,"\n                    api.mock('mockValue')\n                    const value = await api({id: '1', name: 'Maija'})\n                    // value === mockValue\n                  "),Object(s.d)("p",null,"Sometimes you might need more control, and for that purpose the mock functions also accept functions as their parameters. The function should return a value that is either of the type returned by the API, or a promise of one, or they should throw. The function is given the arguments to the API call as the sole parameter."),Object(s.d)(u.c,null,"\n                    api.mock(args => args.name + args.id)\n                    const value = await api({id: '1', name: 'Maija'})\n                    // value === 'Maija1'\n                  "),Object(s.d)(u.c,null,"\n                    api.mock(() => {throw new Error()})\n                    await api({id: '1', name: 'Maija'})\n                    // simulating failure\n                  "),Object(s.d)("p",null,"It is generally recommended to have an ",Object(s.d)(i.a,null,"afterEach")," to undo all the mocks for any tests that utilize papupata mocking. Even though you can use ",Object(s.d)(i.a,null,"mockOnce")," to only mock an API for a single invocation, if a test fail in such a way that the invocation never happens you might have a hard-to-track bug in your hands."),Object(s.d)(u.c,null,"\n                    afterEach(() => API.unmockAll())\n                  "),Object(s.d)("p",null,"You can also unmock individual APIs, though that tends to be less useful in practice."),Object(s.d)(u.c,null,"\n                    api.unmock()\n                  "))},{heading:"Using sinon or jest mocks",anchor:"sinonjest",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"If you are familiar with sinon stubs and jest.fn, you might already have started considering the potential given by passing in any function as a mock. You absolutely can and should pass functions from these libraries as the mocks whenever it suits your needs, for example to verify that the mock was called with the arguments that you expected."),Object(s.d)(u.c,null,"\n                    const stub = sinon.stub().resolves('test')\n                    api.mock(stub)\n                    await api({id: '1', name: 'Maija'})\n                    sinon.assert.calledWithExactly(stub, {id: '1', name: 'Maija'})\n                  "),Object(s.d)(u.c,null,"\n                    const mock = jest.fn().mockResolvedValue('test')\n                    api.mock(mock)\n                    await api({id: '1', name: 'Maija'})\n                    expect(mock).toHaveBeenCalledWith({id: '1', name: 'Maija'})\n                  "),Object(s.d)("p",null,"Sinon in particular can be handy if you need to mock multiple invocations to the API, with different responses."))},{heading:"Dealing with separate bodies",anchor:"separateBodies",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"As you might recall, it is possible to pass the body as a separate parameter to the API invocation. And in many cases it is impossible to combine it with the other parameters, for example if the body is a string. This does have an effect on the mocks as well."),Object(s.d)("p",null,"If you want to mock a call like this in such a way that you gain access to the body, you have to pass options to the"," ",Object(s.d)(i.a,null,"mock")," or ",Object(s.d)(i.a,null,"mockOnce")," functions. If you pass"," ",Object(s.d)(i.a,null,"{includeBodySeparately: true}")," as a second parameter to the mock function, the mock function passed to be the mock is always given a second parameter, which is the body. If the body is an object, its fields are incorporated into the first parameter as well."),Object(s.d)(u.c,null,"\n                    const mock = jest.fn().mockResolvedValue('test')\n                    api.mock(mock, {includeBodySeparately: true})\n                    await api({id: '1', name: 'Maija'})\n                    expect(mock).toHaveBeenCalledWith({id: '1', name: 'Maija'}, {name: 'Maija'})\n                  "))},{heading:"Conclusion",anchor:"conclusion",content:Object(s.d)(a.Fragment,null,Object(s.d)("p",null,"Now you know how to test API calls made using papupata and should by now have pretty much mastered how to use papupata as a client."),Object(s.d)("p",null,"If you want to switch to the server side now,",Object(s.d)(r.a,{to:"/guides/server/setup"},"setting up papupata server")," and"," ",Object(s.d)(r.a,{to:"/guides/server/implementing"},"implementing APIs")," are both fine options."))}]}))))}},jqoI:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return p}));var a,o,l,c=n("AcpX"),i=(n("+ego"),n("q1tI"),n("Kg6r")),u=n("vOnD"),r=n("qKvR");function d(e){var t=e.children;return Object(r.d)(i.j,null,Object(r.d)(i.k,null,"Overview"),t)}var s=u.a.h4(a||(a=Object(c.a)([""]))),b=u.a.h5(o||(o=Object(c.a)(["\n  font-size: 1.1em;\n"])));function h(e){var t=e.content;return Object(r.d)("div",null,Object(r.d)(i.j,null,Object(r.d)(i.k,null,"Table of contents"),Object(r.d)("ul",null,t.map((function(e){return Object(r.d)("li",{style:{marginLeft:18*(e.level||0)},key:e.anchor},Object(r.d)("a",{href:"#"+e.anchor},e.heading))})))),t.map((function(e){var t=e.level?b:s;return Object(r.d)(i.j,{id:e.anchor,key:e.anchor},Object(r.d)(t,null,e.heading),e.content)})))}var p=u.a.span(l||(l=Object(c.a)(["\n  font-family: 'Consolas', 'Bitstream Vera Sans Mono', 'Courier New', Courier, monospace;\n"])))}}]);
//# sourceMappingURL=component---src-pages-guides-client-testing-tsx-292f836c83f86f749b03.js.map