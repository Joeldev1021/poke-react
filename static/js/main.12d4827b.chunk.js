(this["webpackJsonppoke-react"]=this["webpackJsonppoke-react"]||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(19),s=a.n(r),i=(a(28),a(29),a(0)),o=function(){return Object(i.jsx)("footer",{children:"joel-dev"})},l=a(3),j=(a(31),a(2)),d=a(6),b=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(j.f)();return Object(i.jsxs)("header",{children:[Object(i.jsx)("h1",{className:"header__title",children:"Poke-React"}),Object(i.jsx)("div",{className:"container__form",children:Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),r.push("/poke/".concat(a))},children:[Object(i.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{children:Object(i.jsx)("i",{className:"fas fa-search"})})]})}),Object(i.jsxs)("nav",{className:"nav",children:[Object(i.jsxs)(d.b,{to:"/",children:[Object(i.jsx)("i",{className:"fas fa-home"}),"Home"]}),Object(i.jsxs)(d.b,{to:"/type",children:[Object(i.jsx)("i",{className:"fas fa-globe"}),"Type"]}),Object(i.jsxs)(d.b,{to:"/favs",children:[Object(i.jsx)("i",{className:"fas fa-heart"}),"favorite"]})]})]})},m=a(23);function u(){var e=localStorage.getItem("favs"),t=Object(c.useState)(e?e.split(",").map((function(e){return Number(e)})):[]),a=Object(l.a)(t,2),n=a[0],r=a[1];return localStorage.setItem("favs",n),{favs:n,handleFavs:function(e){n.includes(e)?r(n.filter((function(t){return t!==e}))):r((function(t){return[].concat(Object(m.a)(t),[e])}))}}}var p=a(16),g=a.n(p),h=a(22);function O(e){var t=Object(c.useState)([]),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!0),i=Object(l.a)(s,2),o=i[0],j=i[1],d=Object(c.useState)(!1),b=Object(l.a)(d,2),m=b[0],u=b[1];Object(c.useEffect)((function(){j(!0),p(e).then((function(e){return r(e)})).catch((function(){return u(!0)})).finally((function(){return j(!1)}))}),[e]);var p=function(){var e=Object(h.a)(g.a.mark((function e(t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,c=a.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{state:n,isLoading:o,isError:m}}var f={normal:"#a3acb3",fighting:"#e73f7a",flying:"#9ab9eb",poison:"#b773cc",ground:"#e97f46",rock:"#ad9b68",bug:"#9bd821",ghost:"#5f7cbe",steel:"#6ea0b3",fire:"#e6791a",water:"#287dbe",grass:"#2eac41",electric:"#dbb702",psychic:"#f0707d",ice:"#37b6a5",dragon:"#1786e0",dark:"#4e4757",fairy:"#d86cca",shadow:"#4c4444"},x={normal:"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(222,215,215,1) 100%)",fighting:"radial-gradient(circle, rgba(230,224,212,1) 0%, rgba(239,145,145,1) 100%)",flying:"radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(202,232,248,1) 100%)",poison:"radial-gradient(circle, rgba(192,147,206,1) 0%, rgba(147,0,192,1) 100%)",ground:"radial-gradient(circle, rgba(244,231,218,1) 0%, rgba(142,109,76,1) 100%)",rock:"radial-gradient(circle, rgba(213,213,212,1) 0%, rgba(139,139,132,1) 100%)",bug:"radial-gradient(circle, rgba(248,213,163,1) 0%, rgba(164,218,115,1) 100%)",ghost:"radial-gradient(circle, rgba(185,163,208,1) 0%, rgba(119,82,159,1) 100%)",steel:"radial-gradient(circle, rgba(211,211,211,1) 0%, rgba(53,53,53,1) 100%)",fire:"radial-gradient(circle, rgba(253,223,223,1) 0%, rgba(233,127,70,1) 100%)",water:"radial-gradient(circle, rgba(222,243,253,1) 0%, rgba(57,140,180,1) 100%)",grass:"radial-gradient(circle, rgba(222,253,224,1) 0%, rgba(90,181,96,1) 100%)",electric:"radial-gradient(circle, rgba(247,239,200,1) 0%, rgba(251,209,0,1) 100%)",psychic:"radial-gradient(circle, rgba(231,196,239,1) 0%, rgba(101,44,102,1) 100%)",ice:"radial-gradient(circle, rgba(233,246,244,1) 0%, rgba(119,208,196,1) 100%)",dragon:"radial-gradient(circle, rgba(151,179,230,1) 0%, rgba(0,29,82,1) 100%)",dark:"radial-gradient(circle, rgba(124,124,124,1) 0%, rgba(68,63,77,1) 100%)",fairy:"radial-gradient(circle, rgba(252,234,255,1) 0%, rgba(236,178,245,1) 100%)",shadow:"#4c4444"},_=a(17),v=(a(38),function(e){var t=e.poke,a=e.setShowModal;return console.log(t),Object(i.jsxs)("div",{className:"modal__container",style:{backgroundImage:"".concat(x["".concat(t.types[0].type.name)])},children:[Object(i.jsx)("button",{className:"modal__close",onClick:function(){a(!1)},children:"x"}),Object(i.jsx)("img",{className:"modal__img",src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/").concat(t.id,".svg"),alt:t.name}),Object(i.jsx)("h1",{className:"modal__title",children:t.name}),Object(i.jsx)("div",{className:"modal__info",children:t.stats.map((function(e){return Object(i.jsxs)("div",{className:"modal__info--item",children:[Object(i.jsx)("p",{className:"modal__item__name",children:e.stat.name}),Object(i.jsx)("p",{className:"modal__item__num",children:e.base_stat}),Object(i.jsx)("p",{className:"modal__barPower",children:Object(i.jsx)("span",{style:{width:"".concat(e.base_stat,"%")}})})]},e.stat.name)}))}),Object(i.jsxs)("div",{className:"modal__poke__body",children:[Object(i.jsxs)("div",{className:"modal__poke__item",children:[Object(i.jsx)("p",{children:"Height"}),Object(i.jsxs)("p",{children:[t.height/10," mts"]})]}),Object(i.jsxs)("div",{className:"modal__poke__item",children:[Object(i.jsx)("p",{children:"Weight"}),Object(i.jsxs)("p",{children:[t.weight/10," kg"]})]})]})]})}),k=(a(39),function(e){var t=e.poke,a=e.handleFavs,n=e.favs,r=O(t.url?t.url:t).state,s=Object(c.useState)(!1),o=Object(l.a)(s,2),j=o[0],b=o[1],m=function(){console.log("banner"),b(!0)};return Object(i.jsxs)(i.Fragment,{children:[j?Object(i.jsx)(v,{poke:r,setShowModal:b}):null,0!==r.length&&Object(i.jsxs)("div",{className:"card__poke",style:{backgroundImage:"".concat(x["".concat(r.types[0].type.name)])},children:[n.includes(r.id)?Object(i.jsx)(_.b,{onClick:function(){return a(r.id)},className:"fav"}):Object(i.jsx)(_.a,{onClick:function(){return a(r.id)},className:" fav_not"}),Object(i.jsx)("div",{className:"img__container",children:null!==r.sprites.other.dream_world.front_default?Object(i.jsx)("img",{className:"card__img",src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/","/").concat(r.id,".svg"),alt:r.name,onClick:m}):Object(i.jsx)("img",{className:"card__img",src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/","/").concat(r.id,".png"),alt:r.name,onClick:m})}),Object(i.jsx)("p",{className:"card__title",children:r.name}),Object(i.jsx)("div",{className:"poke__type",children:r.types?r.types.map((function(e){return Object(i.jsx)(d.b,{to:"/type/".concat(e.type.url.split("/")[6]),children:Object(i.jsx)("img",{className:"card__logo__type",src:"/type/".concat(e.type.name,".png"),alt:""})},e.type.name)})):Object(i.jsx)("h1",{children:"cargando.."})})]})]})}),y=function(e){return Object(i.jsx)("div",{className:"container__loading",children:Object(i.jsx)("img",{src:"/pikachu.gif",alt:""})})},N=(a(40),function(e){var t=e.handlePages,a=e.cutArrays,n=Object(c.useState)(0),r=Object(l.a)(n,2),s=(r[0],r[1],Object(c.useState)(!1)),o=Object(l.a)(s,2),j=(o[0],o[1],Object(c.useState)([0,1,2,3,4,5,6,7,8,9])),d=Object(l.a)(j,2),b=d[0],m=d[1];Object(c.useEffect)((function(){a&&a.length>0&&m(b.filter((function(e){return e<a.length})))}),[a]);var u=function(e){">"===e?(console.log("next"),m(b.map((function(e){return e+10})))):"<"===e&&b[0]>0&&m(b.map((function(e){return e-10})))};return Object(i.jsxs)("nav",{className:"nav__pages",children:[b[0]>9&&Object(i.jsx)("li",{onClick:function(e){return u("<")},children:"<"}),b.map((function(e,a){return Object(i.jsx)("li",{onClick:function(a){return t(e)},children:e+1},e)})),Object(i.jsx)("li",{onClick:function(e){return u(">")},children:">"})]})}),w=(a(41),function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],r=u(),s=r.favs,o=r.handleFavs,j=O("https://pokeapi.co/api/v2/pokemon?offset=".concat(a,"&limit=25")),d=j.state,b=j.isLoading;return Object(i.jsxs)(i.Fragment,{children:[b?Object(i.jsx)(y,{}):Object(i.jsx)("div",{className:"container",children:d.results.map((function(e){return Object(i.jsx)(k,{poke:e,handleFavs:o,favs:s},e.name)}))}),Object(i.jsx)(N,{handlePages:function(e){n(25*e)}})]})}),S=(a(42),function(){var e=O("https://pokeapi.co/api/v2/type"),t=e.state,a=e.isLoading;return Object(i.jsx)(i.Fragment,{children:a?Object(i.jsx)(y,{}):Object(i.jsx)("div",{className:"container",children:t.results.map((function(e){return Object(i.jsxs)("div",{className:"card__type",style:{background:f["".concat(e.name)]},children:[Object(i.jsx)(d.b,{to:"/type/".concat(e.url.split("/")[6]),children:Object(i.jsx)("img",{className:"card__logo__type",src:"/type/".concat(e.name,".png"),alt:e.name})}),Object(i.jsx)(d.b,{to:"/type/".concat(e.url.split("/")[6]),children:Object(i.jsx)("p",{className:"type_text",children:e.name})})]},e.name)}))})})});var F=function(){var e=Object(j.g)().id,t=Object(c.useState)(0),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)([]),o=Object(l.a)(s,2),d=o[0],b=o[1],m=O("https://pokeapi.co/api/v2/type/".concat(e)),p=m.state,g=(m.isLoading,u()),h=g.favs,f=g.handleFavs;Object(c.useEffect)((function(){r(0)}),[e]);return Object(c.useEffect)((function(){if(0!==p.length){var e=function(e){for(var t=[],a=0;a<e.length;a+=25){var c=e.slice(a,a+25);t.push(c)}return t}(p.pokemon);b(e)}}),[p]),Object(i.jsx)(i.Fragment,{children:d.length>0?Object(i.jsx)("div",{className:"container",children:d[n].map((function(e){return Object(i.jsx)(k,{poke:e.pokemon,handleFavs:f,favs:h},e.pokemon.name)}))}):Object(i.jsx)(y,{})})},P=function(){var e=u(),t=e.favs,a=e.handleFavs;return Object(i.jsx)("div",{className:"container",children:t.map((function(e){return Object(i.jsx)(k,{poke:"".concat("https://pokeapi.co/api/v2/pokemon","/").concat(e),handleFavs:a,favs:t},e)}))})};a(43);var C=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Error"}),Object(i.jsxs)("div",{className:"poke__error",children:[Object(i.jsx)("h1",{children:"4"}),Object(i.jsx)("img",{src:"/pokebola.png",alt:"404"}),Object(i.jsx)("h1",{children:"4"})]})]})},I=(a(44),function(){var e=Object(j.g)().keyword,t=Object(j.f)(),a=O("https://pokeapi.co/api/v2/pokemon/".concat(e)),n=a.state,r=a.isLoading,s=a.isError;return Object(c.useEffect)((function(){s&&t.push("/*")}),[s]),s?Object(i.jsx)(C,{}):!s&&r?Object(i.jsx)(y,{}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container flex",style:{backgroundImage:"".concat(x["".concat(n.types[0].type.name)])},children:[Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("img",{className:"single__img ",src:"".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/").concat(n.id,".svg"),alt:n.name}),Object(i.jsx)("div",{className:"single__img__type",children:n.types?n.types.map((function(e){return Object(i.jsx)(d.b,{to:"/type/".concat(e.type.url.split("/")[6]),children:Object(i.jsx)("img",{className:"card__logo__type",src:"/type/".concat(e.type.name,".png"),alt:""})},e.type.name)})):Object(i.jsx)("h1",{children:"cargando.."})}),Object(i.jsx)("h1",{className:"single__title",children:n.name})]}),Object(i.jsx)("div",{className:"col col__lef",children:Object(i.jsx)("div",{className:"single__info",children:n.stats.map((function(e){return Object(i.jsxs)("div",{className:"modal__info--item",children:[Object(i.jsx)("p",{className:"modal__item__name",children:e.stat.name}),Object(i.jsx)("p",{className:"modal__item__num",children:e.base_stat}),Object(i.jsx)("p",{className:"modal__barPower",children:Object(i.jsx)("span",{style:{width:"".concat(e.base_stat,"%")}})})]},e.stat.name)}))})})]})})});var E=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(d.a,{children:[Object(i.jsx)(b,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{component:w,exact:!0,path:"/"}),Object(i.jsx)(j.a,{component:F,path:"/type/:id"}),Object(i.jsx)(j.a,{component:S,path:"/type"}),Object(i.jsx)(j.a,{component:P,path:"/favs"}),Object(i.jsx)(j.a,{component:I,path:"/poke/:keyword"}),Object(i.jsx)(j.a,{component:C,exact:!0,path:"*"})]}),Object(i.jsx)(o,{})]})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root")),L()}},[[45,1,2]]]);
//# sourceMappingURL=main.12d4827b.chunk.js.map