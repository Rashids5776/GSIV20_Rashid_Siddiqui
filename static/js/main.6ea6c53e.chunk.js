(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{40:function(e,t,n){},59:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(24),a=n.n(s),o=n(17),r=(n(59),n(42)),j=n(43),l=n(25),u=n(48),d=n(47),h=n(26),b=(n(40),n(4)),p=n(2),m=function(e){var t=Object(b.f)();return Object(p.jsx)("div",{className:"movie",children:Object(p.jsxs)("figure",{onClick:function(){console.log("Clicked Page"),t.push("/details/"+e.id)},children:[Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(e.poster_path),className:"mov_img",alt:e.title}),Object(p.jsxs)("figcaption",{children:[Object(p.jsx)("div",{className:"movt",children:Object(p.jsx)("span",{className:"movie__title",children:e.title})}),Object(p.jsx)("div",{className:"movr",children:Object(p.jsx)("span",{className:"movie_rating",children:e.vote_average})}),Object(p.jsx)("p",{className:"movie_desc",children:e.overview})]})]})})},v=function(e){return Object(p.jsx)("ul",{className:"movies",children:e.movies.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,Object(h.a)({},e))},e.id)}))})},f=n(15),O=n(92),g=n(89),x=n(91),w=n(45),k=n.n(w),y=n(29),_=n.n(y),N=n(87),I=n(33),C=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.a)(e.palette.common.white,.25)},marginLeft:0,width:"50vw"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1)}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"50vw"},e.breakpoints.up("sm"),{"&:focus":{}}),homeIcon:{width:"50vw",textAlign:"end"}}})),L=function(e){var t=e.onInput,n=e.query,c=C();return Object(p.jsx)("div",{className:"Appbarr",children:Object(p.jsx)(O.a,{position:"static",children:Object(p.jsxs)(g.a,{children:[Object(p.jsxs)("div",{className:c.search,children:[Object(p.jsx)("div",{className:c.searchIcon,children:Object(p.jsx)(k.a,{})}),Object(p.jsx)(x.a,{placeholder:"Search\u2026",query:n,classes:{root:c.inputRoot,input:c.inputInput},inputProps:{"aria-label":"search"},onInput:t})]}),Object(p.jsx)("div",{className:c.homeIcon,children:Object(p.jsx)(_.a,{})})]})})})},M=(n(67),n(31)),R=(n(68),n(46)),q=n.n(R),S=Object(N.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",display:"inline",borderRadius:e.shape.borderRadius,marginLeft:0,width:"50vw"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1)}),homeIcon:{width:"50vw",textAlign:"end"}}})),A=function(e){e.onInput,e.query;var t=Object(b.f)(),n=S();return Object(p.jsx)("div",{className:"Appbarr",children:Object(p.jsx)(O.a,{position:"static",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(q.a,{onClick:function(){t.goBack()}}),Object(p.jsx)("div",{className:n.search,children:Object(p.jsx)("h3",{children:"Movie Details"})}),Object(p.jsx)("div",{className:n.homeIcon,children:Object(p.jsx)(_.a,{onClick:function(){t.push("/")}})})]})})})},D=(n(69),n(90)),B=function(e){var t=e.id,n=Object(c.useState)({}),i=Object(M.a)(n,2),s=i[0],a=i[1];Object(c.useEffect)((function(){var e="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=494719e581ff21674c6ec386bc636b04");fetch(e).then((function(e){return e.json()})).then((function(e){a(e)}))}),[e.id]);var o=Math.floor(e.runtime/60),r=e.runtime%60;return Object(p.jsx)("div",{className:"movDetails",children:Object(p.jsxs)(D.a,{container:!0,spacing:3,children:[Object(p.jsx)(D.a,{item:!0,children:Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),className:"movd_img",alt:e.title})}),Object(p.jsxs)(D.a,{item:!0,xs:8,children:[Object(p.jsx)("div",{className:"movdt",children:Object(p.jsx)("h3",{children:e.title})}),Object(p.jsx)("div",{className:"movdr",children:Object(p.jsxs)("span",{className:"movied_rating",children:[" (",e.vote_average,")"]})}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{children:[e.release_date," | ",o,":",r," | ",s.cast&&s.crew.filter((function(e){return"Directing"==e.known_for_department})).map((function(e){return e.name})).join()]}),Object(p.jsxs)("p",{children:["Cast: ",s.cast&&s.cast.filter((function(e){return"Acting"==e.known_for_department})).map((function(e){return e.original_name})).join()]}),Object(p.jsxs)("p",{className:"movied_desc",children:["Description: ",e.overview]})]})]})})},E=function(){var e=Object(b.g)().id,t=Object(c.useState)([]),n=Object(M.a)(t,2),i=n[0],s=n[1];return Object(c.useEffect)((function(){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=494719e581ff21674c6ec386bc636b04");fetch(t).then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(p.jsxs)("div",{className:"details",children:[Object(p.jsx)(A,{}),Object(p.jsx)(B,Object(h.a)({},i))]})},F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={movies:[],query:""},c.onInput=c.onInput.bind(Object(l.a)(c)),c}return Object(j.a)(n,[{key:"onInput",value:function(e){""!==e.target.value?(this.setState({query:e}),this.searchMovie(e.target.value)):this.getUpcomingMovies()}},{key:"getUpcomingMovies",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=494719e581ff21674c6ec386bc636b04").then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))}},{key:"searchMovie",value:function(e){var t=this,n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=494719e581ff21674c6ec386bc636b04");fetch(n).then((function(e){return e.json()})).then((function(e){t.setState({movies:e.results})}))}},{key:"componentDidMount",value:function(){this.getUpcomingMovies()}},{key:"render",value:function(){var e=this.state,t=e.movies,n=e.query;if(t.length>0){return Object(p.jsx)(o.a,{children:Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/",children:Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(L,{onInput:this.onInput}),Object(p.jsx)("div",{className:"list",children:Object(p.jsx)(v,{movies:t.filter(function(e){return function(t){return!e||t.title.toLowerCase().includes(e.target.value.toLowerCase())}}(n))})})]})}),Object(p.jsx)(b.a,{path:"/details/:id",component:E})]})})}return Object(p.jsx)("div",{})}}]),n}(i.a.Component),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})}),document.getElementById("root")),G()}},[[71,1,2]]]);
//# sourceMappingURL=main.6ea6c53e.chunk.js.map