(this["webpackJsonpomdb-movie-search"]=this["webpackJsonpomdb-movie-search"]||[]).push([[0],{52:function(n,e,t){n.exports=t.p+"static/media/search-bg.43ac756b.jpg"},56:function(n,e,t){n.exports=t.p+"static/media/movie-background.7c4c06c1.jpg"},61:function(n,e,t){n.exports=t(96)},96:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),o=t(27),i=t.n(o),u=t(2),l=t(18),s=t(8),d=t(52),m=t.n(d);function f(){var n=Object(r.a)(["\n  width: 100vw;\n  height: ",";\n  background-image: ",";\n  background-color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  transition: all 0.75s ease-out;\n  position: fixed;\n  top: 0;\n  left: 0;\n"]);return f=function(){return n},n}var p=u.c.div(f(),(function(n){return n.collapsed?"15vh":"100vh"}),(function(n){return n.collapsed?"none":"url(".concat(m.a,")")}),"#111");function b(){var n=Object(r.a)(["\n  padding: 0.75rem 0.25rem;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  border: none;\n  width: 16rem;\n"]);return b=function(){return n},n}var h=u.c.input(b());function g(){var n=Object(r.a)(["\n  padding: 0.75rem 1.25rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  border: none;\n  background-color: ",";\n  cursor: pointer;\n"]);return g=function(){return n},n}var v=u.c.button(g(),(function(n){return n.theme.colors.primary})),j=t(4),O=t.n(j),E=t(10),x=t(60),w=t(13),y=t(31),k=t(24),_=t(6),P=t(32),S=t.n(P),C=function(){var n=Object(s.g)(),e=n.search,t=n.pathname,r=Object(s.f)(),c=Object(a.useMemo)((function(){return S.a.parse(e.slice(1))}),[e]);return{navigateWithSearchQuery:function(n,e){r.push("".concat(e||t,"?").concat(S.a.stringify(Object(_.a)(Object(_.a)({},c),n))))},filters:c,compileUrlWithQuery:function(n){return"".concat(n,"?").concat(S.a.stringify(c))}}};function A(){var n=Object(r.a)(["\n  box-shadow: 0 0 5px 1px ",";\n  border-radius: 3px;\n"]);return A=function(){return n},n}var L=u.c.div(A(),"#aaa");function T(){var n=Object(r.a)(["\n  color: ",";\n"]);return T=function(){return n},n}var R=u.c.p(T(),(function(n){return n.theme.colors.danger})),W=t(7),I=t(22),V=t(55),M=t.n(V),D=Object({NODE_ENV:"production",PUBLIC_URL:"/omdb-movie-search",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://www.omdbapi.com/",REACT_APP_API_KEY:"157f34ed"}),z=D.REACT_APP_API_URL,F=D.REACT_APP_API_KEY,U=function(){var n=Object(E.a)(O.a.mark((function n(e){var t,r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get(z,{params:Object(_.a)({apikey:F},e)});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),K=function(){var n=Object(E.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",U({i:e,plot:"full"}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Q=function(n){return new Promise((function(e){return setTimeout(e,n)}))},Y=Object(I.b)("GET_MOVIE_LIST",function(){var n=Object(E.a)(O.a.mark((function n(e,t){var r,a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.next=3,U(e);case 3:return a=n.sent,n.next=6,Q(3e3);case 6:if("False"!==a.Response){n.next=8;break}return n.abrupt("return",r(a.Error));case 8:return n.abrupt("return",{records:a.Search,count:a.totalResults});case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),B=Object(I.b)("GET_MOVIE_BY_ID",function(){var n=Object(E.a)(O.a.mark((function n(e,t){var r,a;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.rejectWithValue,n.next=3,K(e);case 3:return a=n.sent,n.next=6,Q(3e3);case 6:if("False"!==a.Response){n.next=8;break}return n.abrupt("return",r(a.Error));case 8:return n.abrupt("return",{record:a});case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),G=Object(I.a)("CLEAR_MOVIES"),H={isLoading:!1,records:[],record:{},error:null,count:0},J=Object(I.c)(H,(function(n){return n.addCase(Y.pending,(function(n){return Object(_.a)(Object(_.a)({},n),{},{isLoading:!0,error:null,count:0})})).addCase(Y.fulfilled,(function(n,e){return Object(_.a)(Object(_.a)({},n),{},{records:[].concat(Object(W.a)(n.records),Object(W.a)(e.payload.records)),isLoading:!1,error:null,count:e.payload.count})})).addCase(Y.rejected,(function(n,e){return Object(_.a)(Object(_.a)({},n),{},{isLoading:!1,records:[],error:e.payload,count:0})})).addCase(B.pending,(function(n){return Object(_.a)(Object(_.a)({},n),{},{isLoading:!0,record:{},error:null})})).addCase(B.fulfilled,(function(n,e){return Object(_.a)(Object(_.a)({},n),{},{record:e.payload.record,isLoading:!1,error:null})})).addCase(B.rejected,(function(n,e){return Object(_.a)(Object(_.a)({},n),{},{isLoading:!1,record:{},error:e.payload})})).addCase(G.type,(function(n){return Object(_.a)(Object(_.a)({},n),{},{records:[]})}))})),N=function(n){return n.movies||H},$=function(n){return N(n).records},q=function(n){return N(n).isLoading},X=function(n){return N(n).count},Z=function(n){return N(n).error},nn=function(n){return N(n).record},en=function(n){var e=n.defaultValues,t=Object(x.a)({defaultValues:e}),r=t.register,a=t.handleSubmit,o=t.errors,i=Object(w.c)(Z),u=C().navigateWithSearchQuery,l=function(){var n=Object(E.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(e,"/");case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return c.a.createElement("form",{onSubmit:a(l),"data-testid":"search-form"},c.a.createElement(L,null,c.a.createElement(h,{type:"text",ref:r({minLength:2}),name:"s",placeholder:"Search..."}),c.a.createElement(v,{type:"submit"},c.a.createElement(y.a,{icon:k.b,color:"white"}))),c.a.createElement(R,null,o.s?"Query should be at least 2 characters long":i))};en.defaultProps={defaultValues:{}};var tn=en;function rn(){var n=Object(r.a)(["\n  margin-top: 0.25rem;\n  margin-bottom: 0.5rem;\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  margin-top: 0.75rem;\n  margin-bottom: 0.25rem;\n"]);return an=function(){return n},n}function cn(){var n=Object(r.a)(["\n  width: 100%;\n  height: auto;\n"]);return cn=function(){return n},n}function on(){var n=Object(r.a)(["\n  margin: 4px 8px 16px 8px;\n  width: 248px;\n  padding: 4px;\n  border-radius: 3px;\n  background-color: ",";\n  color: white;\n  box-shadow: 0 0 5px 1px ",";\n  transition: all 0.25s;\n  text-decoration: none;\n\n  &:hover {\n    box-shadow: 0 0 7px 2px ",";\n    padding: 8px;\n    margin: 0px 4px 12px 4px;\n  }\n"]);return on=function(){return n},n}var un=Object(u.c)(l.b)(on(),"#111","#aaa","#aaa"),ln=u.c.img(cn()),sn=u.c.h4(an()),dn=u.c.h5(rn()),mn=function(n){var e=n.imgSrc,t=n.title,r=n.year,a=n.to;return c.a.createElement(un,{to:a},c.a.createElement(ln,{src:e,alt:t}),c.a.createElement(sn,null,t),c.a.createElement(dn,null,r))};function fn(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  \n  width: 100%;\n  height: 100%;\n"]);return fn=function(){return n},n}var pn=u.c.div(fn());function bn(){var n=Object(r.a)(["\n  position: fixed;\n  left: 2rem;\n  top: 1.75rem;\n  cursor: pointer;\n"]);return bn=function(){return n},n}var hn=Object(u.c)(l.b)(bn()),gn=function(){return c.a.createElement(hn,{to:"/"},c.a.createElement(y.a,{icon:k.a,size:"4x",color:"white"}))},vn=t(56),jn=t.n(vn);function On(){var n=Object(r.a)(["\n  padding: 20vh 0px;\n  width: 100vw;\n  min-height: 100vh;\n  box-sizing: border-box;\n  background-image: url(",");\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return On=function(){return n},n}var En=u.c.div(On(),jn.a);function xn(){var n=Object(r.a)(["\n  overflow: hidden; \n  border-right: 0.15rem solid rgba(255,255,255,.75); \n  white-space: nowrap; \n  margin: 0 auto;\n  letter-spacing: 0.15rem;\n  color: white;\n  position: absolute;\n  top: 13rem;\n\n  animation: "," 2s steps(30) 1s 1 normal both,\n  "," 500ms steps(30) infinite normal;\n"]);return xn=function(){return n},n}function wn(){var n=Object(r.a)(["\n  from{\n    border-right-color: rgba(255,255,255,.75);\n  }\n  to{\n    border-right-color: transparent;\n  }\n"]);return wn=function(){return n},n}function yn(){var n=Object(r.a)(["\n  from { \n    width: 0;\n  }\n  to { \n    width: 26rem ;\n  }\n"]);return yn=function(){return n},n}var kn=Object(u.d)(yn()),_n=Object(u.d)(wn()),Pn=u.c.h1(xn(),kn,_n),Sn=function(n){var e=n.children,t=C().filters,r=t.s;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{collapsed:r},c.a.createElement(gn,null),!r&&c.a.createElement(Pn,null,"Find your favorite movie!"),c.a.createElement(tn,{defaultValues:t})),c.a.createElement(En,null,e))};function Cn(){var n=Object(r.a)(["\n  color: white;\n  font-size: 1.25rem;\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 0;\n"]);return Cn=function(){return n},n}var An=u.c.p(Cn()),Ln=function(n){var e=n.count;return c.a.createElement(An,null,"Found ".concat(e," movies."))};Ln.defaultProps={count:0};var Tn=Ln,Rn=t(36),Wn=t(58),In=t.n(Wn);function Vn(){var n=Object(r.a)(["\n  margin-top: 150px;\n"]);return Vn=function(){return n},n}var Mn=Object(Rn.css)(Vn()),Dn=function(n){var e=n.isLoading;return c.a.createElement(In.a,{color:"white",size:50,loading:e,css:Mn})};function zn(){var n=Object(r.a)(["\n  color: white;\n  font-size: 1.1rem;\n  border: none;\n  background-color: ",";\n  cursor: pointer;\n  padding: 0.75rem 1.5rem;\n  box-shadow: 0 0 5px 1px ",";\n  transition: all 0.25s;\n  margin-top: 1.5rem;\n\n  &:hover {\n    box-shadow: 0 0 7px 2px ",";\n  }\n"]);return zn=function(){return n},n}var Fn=u.c.button.attrs((function(){return{type:"button"}}))(zn(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.shadow}),(function(n){return n.theme.colors.shadow}));function Un(){var n=Object(r.a)(["\n  font-weight: 600;\n  font-size: 0.9rem;\n"]);return Un=function(){return n},n}var Kn=u.c.span(Un());function Qn(){var n=Object(r.a)(["\n  margin-bottom: 0.25rem;\n"]);return Qn=function(){return n},n}function Yn(){var n=Object(r.a)(["\n  margin-bottom: 0.5rem;\n"]);return Yn=function(){return n},n}function Bn(){var n=Object(r.a)(["\n  list-style: none;\n  padding-inline-start: 0;\n  margin-top: 0;\n"]);return Bn=function(){return n},n}var Gn=u.c.ul(Bn()),Hn=u.c.h4(Yn()),Jn=u.c.li(Qn()),Nn=function(n){var e=n.ratings;return c.a.createElement("div",null,c.a.createElement(Hn,null," Ratings: "),c.a.createElement(Gn,null,e&&e.map((function(n){return c.a.createElement(Jn,null," ",c.a.createElement(Kn,null," ",n.Source,":"," ")," ",n.Value)}))))},$n=function(n){var e=n.label,t=n.children;return c.a.createElement("p",null,c.a.createElement(Kn,null,e),t)},qn=function(){var n=C(),e=n.filters,t=n.compileUrlWithQuery,r=e.s,o=Object(w.b)(),i=Object(w.c)($),u=Object(w.c)(q),l=Object(w.c)(X);Object(a.useEffect)((function(){r&&(o(G()),o(Y(e)))}),[e]);var s=i.length<l;return c.a.createElement(c.a.Fragment,null,!u&&c.a.createElement(Tn,{count:l}),c.a.createElement(pn,null,i.map((function(n){var e,r=n.Poster,a=n.Title,o=n.Year,i=n.imdbID;return c.a.createElement(mn,{imgSrc:r,title:a,year:o,key:i,to:(e=i,t("/movie/:id".replace(":id",e)))})}))),c.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},c.a.createElement(Dn,{isLoading:u}),s&&c.a.createElement(Fn,{type:"button",onClick:function(){o(Y(Object(_.a)(Object(_.a)({},e),{},{page:Math.floor(i.length/10)+1})))}},"Load More")))};function Xn(){var n=Object(r.a)(["\n  margin-top: 0;\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Zn=function(){return n},n}function ne(){var n=Object(r.a)(["\n  width: 248px;\n  height: auto;\n  margin-right: 1rem;\n"]);return ne=function(){return n},n}function ee(){var n=Object(r.a)(["\n  background-color: ",";\n  box-shadow: ",";\n  color: white;\n  padding: 1rem;\n  width: 70%;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 3px;\n"]);return ee=function(){return n},n}var te=u.c.div(ee(),(function(n){return n.theme.colors.background}),(function(n){return n.theme.shadow.small})),re=u.c.img(ne()),ae=u.c.div(Zn()),ce=u.c.h2(Xn()),oe=function(){var n=Object(s.h)().id,e=Object(w.b)(),t=Object(w.c)(nn),r=Object(w.c)(q);return Object(a.useEffect)((function(){e(B(n))}),[n]),r?c.a.createElement(ae,null,c.a.createElement(Dn,null)):c.a.createElement(te,null,c.a.createElement("div",null,c.a.createElement(re,{src:t.Poster,alt:t.Title}),c.a.createElement(Nn,{ratings:t.Ratings||[]})),c.a.createElement("div",null,c.a.createElement(ce,null,"".concat(t.Title," (").concat(t.Year,")")),c.a.createElement("h4",null,"".concat(t.Released,", ").concat(t.Runtime,", ").concat(t.Genre,", ").concat(t.Country)),c.a.createElement("p",null,t.Plot),c.a.createElement($n,{label:"Director: "},t.Director),c.a.createElement($n,{label:"Writer: "},t.Writer),c.a.createElement($n,{label:"Actors: "},t.Actors),c.a.createElement($n,{label:"Awards: "},t.Awards)))},ie=function(){return c.a.createElement(l.a,null,c.a.createElement(Sn,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/movie/:id",component:oe}),c.a.createElement(s.a,{path:"/",component:qn}))))},ue=t(9),le=t(26),se=t(59),de=Object(ue.combineReducers)({movies:J}),me=Object(ue.createStore)(de,Object(se.composeWithDevTools)(Object(ue.applyMiddleware)(le.a))),fe={colors:{primary:"#0b3849",danger:"#bf2b17",background:"#111",shadow:"#aaa"},shadow:{small:"0 0 5px 1px ".concat("#aaa"),large:"0 0 7px 2px ".concat("#aaa")}},pe=function(n){var e=n.children;return c.a.createElement(w.a,{store:me},c.a.createElement(u.a,{theme:fe},e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(){var n=Object(r.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600&display=swap');\n\n  body {\n    margin: 0;\n    padding: 0;\n  }\n\n  * {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 400;\n  }\n"]);return be=function(){return n},n}var he=Object(u.b)(be());i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(he,null),c.a.createElement(pe,null,c.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.86cfedff.chunk.js.map