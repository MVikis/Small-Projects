(this["webpackJsonpdate-timer"]=this["webpackJsonpdate-timer"]||[]).push([[0],{103:function(e,t,a){e.exports=a(253)},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=(a(108),a(109),a(110),a(7)),m=a(91),o=a(92),s=a(93),u=a(101),f=a(100),d=a(6),E=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).FormChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSumbit=function(e){e.preventDefault(),n.props.Date(n.state.date)},n.state={date:""},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{className:"form-inline",onSubmit:this.handleSumbit},c.a.createElement("input",{className:"item",name:"date",onChange:this.FormChange,type:"date"}),c.a.createElement("button",{className:"form-button flex fa-secondary",type:"submit"},c.a.createElement(d.a,{icon:"calendar-day"})))}}]),a}(n.Component),h=a(254);function p(e){var t=[];return Object.keys(e.timeLeft).forEach((function(a){e.timeLeft[a]&&t.push(c.a.createElement("span",null,e.timeLeft[a]," ",a," "))})),c.a.createElement(h.a,{in:0!=e.timeLeft,timeout:1e3,classNames:"item"},c.a.createElement("div",{className:"row"},c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.days),c.a.createElement("span",null,"days")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.hours),c.a.createElement("span",null,"hours")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.minutes),c.a.createElement("span",null,"minutes")),c.a.createElement("div",null,c.a.createElement("p",null,e.timeLeft.seconds),c.a.createElement("span",null,"seconds"))))}a(116);function v(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],r=function(){var e=new Date(a)-new Date,t={};return e>0&&(t={days:Math.floor(e/864e5),hours:Math.floor(e/36e5%24),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}),t},m=Object(n.useState)(r()),o=Object(i.a)(m,2),s=o[0],u=o[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){u(r())}),1e3);return function(){return clearTimeout(e)}})),c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:"overlay",style:{height:"100vh"}},c.a.createElement(E,{Date:l}),c.a.createElement(p,{ShowTime:a,timeLeft:s})))}var b=a(18),N=a(4),g=a(60);function y(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],r=a[1];return c.a.createElement("form",{autoComplete:"off",className:"form-inline",onSubmit:function(t){t.preventDefault(),e.AddItem(l)}},c.a.createElement("input",{className:"item",onChange:function(e){var t=e.target.value;r(t)},name:"text",type:"text"}),c.a.createElement("button",{className:"form-button flex fa-secondary",type:"submit"},c.a.createElement(d.a,{icon:"plus-circle"})))}function j(e){return c.a.createElement("div",{className:"form-inline"},c.a.createElement("div",{className:"item"},e.item),c.a.createElement("button",{onClick:e.completeItem,className:"form-button flex "},c.a.createElement(d.a,{className:"fa-secondary icon",icon:"check-circle"})),c.a.createElement("button",{onClick:e.deleteItem,className:"form-button sec flex "},c.a.createElement(d.a,{className:"fa-third icon",icon:"minus-circle"})))}a(117);var x=a(255);function k(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)("done-items done-items-close"),m=Object(i.a)(r,2),o=m[0],s=m[1],u=Object(n.useState)([]),f=Object(i.a)(u,2),E=f[0],p=f[1],v=function(e){l(a.filter((function(t){return t!==e})))};return c.a.createElement("div",{className:"background"},c.a.createElement("div",{className:o},c.a.createElement(d.a,{onClick:function(){console.log("hej"),s("done-items done-items-close"===o?"done-items done-items-open":"done-items done-items-close")},className:"fa-secondary icon span-svg",icon:"check-circle"}),c.a.createElement("span",null,E.length),c.a.createElement(x.a,{className:"flex"},E.map((function(e,t){return c.a.createElement(h.a,{key:t,timeout:1e3,classNames:"item"},c.a.createElement("div",{className:"done-item",key:t},e))})))),c.a.createElement("div",{className:"overlay"},c.a.createElement("div",null,c.a.createElement("h3",null,"To Do List"),c.a.createElement(y,{AddItem:function(e){l((function(t){return[].concat(Object(g.a)(t),[e])}))}})),c.a.createElement(x.a,{component:null},a.map((function(e,t){return c.a.createElement(h.a,{key:t,timeout:1e3,classNames:"item"},c.a.createElement(j,{name:e,item:e,completeItem:function(){return function(e){v(e),p((function(t){return[].concat(Object(g.a)(t),[e])}))}(e)},deleteItem:function(){return v(e)}}))})))))}function O(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"logo"},c.a.createElement(b.b,{className:"nav-link",to:"/"},c.a.createElement("span",{className:"link-text logo-text"},"Small Projects"),c.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fad","data-icon":"angle-double-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"},c.a.createElement("g",{className:"fa-group"},c.a.createElement("path",{fill:"currentColor",d:"M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z",className:"fa-secondary"}),c.a.createElement("path",{fill:"currentColor",d:"M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z",className:"fa-primary"}))))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/timer"},c.a.createElement(d.a,{size:"2x",className:"fa-primary svg-inline--fa fa-clock fa-w-16",icon:"clock"}),c.a.createElement("span",{className:"link-text"},"Timer"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/todo"},c.a.createElement(d.a,{size:"2x",className:"svg-inline--fa fa- fa-th-list w-16 fa-primary",icon:"th-list"}),c.a.createElement("span",{className:"link-text"},"To Do"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(b.b,{className:"nav-link",to:"/api"},c.a.createElement(d.a,{size:"2x",className:"svg-inline--fa fa- fa-th-list w-16 fa-primary",icon:"globe-africa"}),c.a.createElement("span",{className:"link-text"},"API Nationality")))))}var w=a(95),S=a.n(w);function L(){return c.a.createElement("div",{style:{height:"100vh",justifyContent:"center",flexDirection:"row"},className:"overlay flex"},c.a.createElement("h3",{className:"home-title fa-primary"},"Small Projects"),c.a.createElement("img",{className:"home-icon",src:S.a}),c.a.createElement("div",{className:"home-circle"}))}var C=a(26),I=a(14),z=a(59),D=a.n(z),T=a(96),A=(a(97),a(98)),M=a(99);a(90);function P(e){var t=Object(n.useState)(e.img),a=Object(i.a)(t,2),l=a[0],r=a[1],m=Object(M.usePalette)(e.img),o=m.data;m.loading,m.error;return Object(n.useEffect)((function(){r(e.img)})),c.a.createElement("div",{className:"card"},c.a.createElement("img",{src:l}),c.a.createElement("div",{className:"card-overlay"},c.a.createElement("div",{className:"circle",style:{background:o.vibrant}}),c.a.createElement("div",{className:"card-container"},c.a.createElement("h2",null,e.name),c.a.createElement("div",{className:"color-flex"},c.a.createElement("h2",null,e.number," %")))))}function B(){var e=Object(n.useState)({name:"",country:[]}),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),m=Object(i.a)(r,2),o=m[0],s=m[1];function u(){return(u=Object(T.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nationalize.io?name=".concat(t)).then((function(e){return e.json()})).then((function(e){return l(e)}));case 3:e.sent,s(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return console.log(a),c.a.createElement("div",{id:"api",className:"overlay"},c.a.createElement("h3",null,"Name Nationalize"),c.a.createElement(y,{AddItem:function(e){return u.apply(this,arguments)}}),c.a.createElement("div",null,c.a.createElement(h.a,{in:o,timeout:{appear:1e3,enter:1e3,exit:300},classNames:"item"},c.a.createElement("h3",{className:"name-style"},a.name)),c.a.createElement(x.a,{style:{marginBottom:"100px"},className:"flex"},a.country.map((function(e,t){return c.a.createElement(h.a,{key:t,timeout:{enter:500,exit:300},classNames:"item"},c.a.createElement(P,{number:Math.ceil(100*e.probability),name:A.countries[e.country_id].name,img:"http://catamphetamine.gitlab.io/country-flag-icons/3x2/".concat(e.country_id,".svg")}))})))))}function F(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!1),m=Object(i.a)(r,2),o=m[0],s=m[1];return c.a.createElement("div",{className:"info"},c.a.createElement(h.a,{timeout:{enter:1e3,exit:300},in:a,classNames:"right-fade"},c.a.createElement("div",{className:"done-item",onClick:function(){return s(!0)}},"Info")),c.a.createElement(h.a,{unmountOnExit:!0,onEnter:function(){return l(!1)},onExited:function(){return l(!0)},timeout:{enter:1e3,exit:300},in:o,classNames:"right-fade"},c.a.createElement("span",{onClick:function(){return s(!1)}},c.a.createElement("h3",null,c.a.createElement(d.a,{icon:"clock"})," Timer"),"The timer application does what you think it would, it takes a date from the user and gives the countdown to that date in real time.",c.a.createElement("h3",null,c.a.createElement(d.a,{icon:"th-list"})," To-do list"),"A to-do list where you can add items the list, delete them, or add them do your done-items list.",c.a.createElement("h3",null,c.a.createElement(d.a,{icon:"globe-africa"})," nationalize.io"),"Nationalize.io predicts the nationality of a person given their name.")))}C.b.add(I.g,I.c,I.f,I.b,I.e,I.d,I.a);var J=function(){return c.a.createElement(b.a,{basename:"/"},c.a.createElement("div",{className:"App"},c.a.createElement(O,null),c.a.createElement("header",{className:"App-header"},c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",exact:!0,component:L}),c.a.createElement(N.a,{path:"/timer",component:v}),c.a.createElement(N.a,{path:"/todo",component:k}),c.a.createElement(N.a,{path:"/api",component:B})),c.a.createElement(F,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.Fragment,null,c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){},95:function(e,t,a){e.exports=a.p+"static/media/Small-Projects.8dbdeaa0.svg"}},[[103,1,2]]]);
//# sourceMappingURL=main.3ce1dc57.chunk.js.map