(this["webpackJsonpdate-timer"]=this["webpackJsonpdate-timer"]||[]).push([[0],{102:function(e,a,t){e.exports=t(252)},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},252:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(18),r=t.n(l),m=(t(107),t(108),t(109),t(6)),i=t(91),s=t(92),o=t(93),u=t(100),f=t(99),E=t(7),d=function(e){Object(u.a)(t,e);var a=Object(f.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).FormChange=function(e){n.setState(Object(i.a)({},e.target.name,e.target.value))},n.handleSumbit=function(e){e.preventDefault(),n.props.Date(n.state.date)},n.state={date:""},n}return Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"form-inline",onSubmit:this.handleSumbit},c.a.createElement("input",{className:"item",name:"date",onChange:this.FormChange,type:"date"}),c.a.createElement("button",{className:"form-button flex fa-secondary",type:"submit"},c.a.createElement(E.a,{icon:"calendar-day"})))}}]),t}(n.Component),p=t(253);function v(e){var a=[];return Object.keys(e.timeLeft).forEach((function(t){e.timeLeft[t]&&a.push(c.a.createElement("span",null,e.timeLeft[t]," ",t," "))})),c.a.createElement(p.a,{in:0!=e.timeLeft,timeout:1e3,classNames:"item"},c.a.createElement("div",{className:"row"},c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.days),c.a.createElement("span",null,"days")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.hours),c.a.createElement("span",null,"hours")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.minutes),c.a.createElement("span",null,"minutes")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.seconds),c.a.createElement("span",null,"seconds"))))}t(115);function h(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],l=a[1],r=function(){var e=new Date(t)-new Date,a={};return e>0&&(a={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),a},i=Object(n.useState)(r()),s=Object(m.a)(i,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){u(r())}),1e3);return function(){return clearTimeout(e)}})),c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"overlay",style:{height:"100vh"}},c.a.createElement(d,{Date:l}),c.a.createElement(v,{ShowTime:t,timeLeft:o})))}var b=t(20),N=t(4),g=t(59);function y(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),l=t[0],r=t[1];return c.a.createElement("form",{autoComplete:"off",className:"form-inline",onSubmit:function(a){a.preventDefault(),e.AddItem(l)}},c.a.createElement("input",{className:"item",onChange:function(e){var a=e.target.value;r(a)},name:"text",type:"text"}),c.a.createElement("button",{className:"form-button flex fa-secondary",type:"submit"},c.a.createElement(E.a,{icon:"plus-circle"})))}function j(e){return c.a.createElement("div",{className:"form-inline"},c.a.createElement("div",{className:"item"},e.item),c.a.createElement("button",{onClick:e.completeItem,className:"form-button flex "},c.a.createElement(E.a,{className:"fa-secondary icon",icon:"check-circle"})),c.a.createElement("button",{onClick:e.deleteItem,className:"form-button sec flex "},c.a.createElement(E.a,{className:"fa-third icon",icon:"minus-circle"})))}t(116);var k=t(254);function O(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)("done-items done-items-close"),i=Object(m.a)(r,2),s=i[0],o=i[1],u=Object(n.useState)([]),f=Object(m.a)(u,2),d=f[0],v=f[1],h=function(e){l(t.filter((function(a){return a!==e})))};return c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:s},c.a.createElement(E.a,{onClick:function(){console.log("hej"),o("done-items done-items-close"===s?"done-items done-items-open":"done-items done-items-close")},className:"fa-secondary icon span-svg",icon:"check-circle"}),c.a.createElement("span",null,d.length),c.a.createElement(k.a,{className:"flex"},d.map((function(e,a){return c.a.createElement(p.a,{key:a,timeout:1e3,classNames:"item"},c.a.createElement("div",{className:"done-item",key:a},e))})))),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",null,c.a.createElement("h3",null,"To Do List"),c.a.createElement(y,{AddItem:function(e){l((function(a){return[].concat(Object(g.a)(a),[e])}))}})),c.a.createElement(k.a,{component:null},t.map((function(e,a){return c.a.createElement(p.a,{key:a,timeout:1e3,classNames:"item"},c.a.createElement(j,{name:e,item:e,completeItem:function(){return function(e){h(e),v((function(a){return[].concat(Object(g.a)(a),[e])}))}(e)},deleteItem:function(){return h(e)}}))})))))}function x(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"logo"},c.a.createElement("a",{href:"#",className:"nav-link"},c.a.createElement("span",{className:"link-text logo-text"},"Small Projects"),c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"},c.a.createElement("g",{className:"fa-group"},c.a.createElement("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),c.a.createElement("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"}))))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/timer"},c.a.createElement(E.a,{size:"2x",className:"fa-primary svg-inline--fa fa-clock fa-w-16",icon:"clock"}),c.a.createElement("span",{className:"link-text"},"Timer"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/todo"},c.a.createElement(E.a,{size:"2x",className:"svg-inline--fa fa- fa-th-list w-16 fa-primary",icon:"th-list"}),c.a.createElement("span",{className:"link-text"},"To Do"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/api"},c.a.createElement(E.a,{size:"2x",className:"svg-inline--fa fa- fa-th-list w-16 fa-primary",icon:"globe-africa"}),c.a.createElement("span",{className:"link-text"},"API Nationality")))))}var w=t(26),L=t(14),S=t(58),C=t.n(S),I=t(95),D=(t(96),t(97)),z=t(98);t(90);function M(e){var a=Object(n.useState)(e.img),t=Object(m.a)(a,2),l=t[0],r=t[1],i=Object(z.usePalette)(e.img),s=i.data;i.loading,i.error;return Object(n.useEffect)((function(){r(e.img)})),c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:l}),c.a.createElement("div",{className:"card-overlay"},c.a.createElement("div",{className:"circle",style:{background:s.vibrant}}),c.a.createElement("div",{className:"card-container"},c.a.createElement("h2",null,e.name),c.a.createElement("div",{className:"color-flex"},c.a.createElement("h2",null,e.number," %")))))}function A(){var e=Object(n.useState)({name:"",country:[]}),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),i=Object(m.a)(r,2),s=i[0],o=i[1];function u(){return(u=Object(I.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nationalize.io?name=".concat(a)).then((function(e){return e.json()})).then((function(e){return l(e)}));case 3:e.sent,o(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return console.log(t),c.a.createElement("div",{className:"overlay"},c.a.createElement("h3",null,"Name Nationalize"),c.a.createElement(y,{AddItem:function(e){return u.apply(this,arguments)}}),c.a.createElement("div",null,c.a.createElement(p.a,{in:s,timeout:{appear:1e3,enter:1e3,exit:300},classNames:"item"},c.a.createElement("h3",{className:"name-style"},t.name)),c.a.createElement(k.a,{style:{marginBottom:"100px"},className:"flex"},t.country.map((function(e,a){return c.a.createElement(p.a,{key:a,timeout:{enter:500,exit:300},classNames:"item"},c.a.createElement(M,{number:Math.ceil(100*e.probability),name:D.countries[e.country_id].name,img:"http://catamphetamine.gitlab.io/country-flag-icons/3x2/".concat(e.country_id,".svg")}))})))))}w.b.add(L.g,L.c,L.f,L.b,L.e,L.d,L.a);var T=function(){return c.a.createElement(b.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(x,null),c.a.createElement("header",{className:"App-header"},c.a.createElement(N.a,{path:"/timer",component:h}),c.a.createElement(N.a,{path:"/todo",component:O}),c.a.createElement(N.a,{path:"/api",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.c8f12193.chunk.js.map