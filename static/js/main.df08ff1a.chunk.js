(this["webpackJsonpemployee-record"]=this["webpackJsonpemployee-record"]||[]).push([[0],{11:function(e,a,t){e.exports={container:"Layout_container__1nNA4",wrapper:"Layout_wrapper__267cj",nav:"Layout_nav__e7Z21"}},28:function(e,a,t){e.exports={nav:"Nav_nav__-9LnW"}},30:function(e,a,t){e.exports={listWrap:"EmployeeList_listWrap__18rov"}},31:function(e,a,t){e.exports={search:"Search_search__3UD3z"}},32:function(e,a,t){e.exports=t(74)},37:function(e,a,t){},38:function(e,a,t){},5:function(e,a,t){e.exports={card:"Employee_card__3U2AR",userInfo:"Employee_userInfo__2eYwo",map:"Employee_map__2smgo",handler:"Employee_handler__2IGKl"}},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),o=(t(37),t(7)),m=t(8),s=t(10),i=t(9),u=(t(38),t(11)),p=t.n(u),d=t(28),E=t.n(d),h=function(e){return r.a.createElement("nav",{className:E.a.nav},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Add New"))))},f=t(18),v=t(29),_=t.n(v),g=t(5),y=t.n(g),b=t(15),w=t(17),N=t(12),j=function(e){return e.children},k=Object(N.GoogleApiWrapper)({apiKey:"AIzaSyDFZIT6v7Zhc1gDaselOkkKv72umRfe6p4"})((function(e){return r.a.createElement(j,null,r.a.createElement(N.Map,{google:e.google,zoom:2,style:{width:"100%",height:"100%"},initialCenter:e.coords,disableDefaultUI:!0,draggable:!1},r.a.createElement(N.Marker,{position:e.coords})))})),O=function(e){return r.a.createElement("li",{className:y.a.card},r.a.createElement("div",{className:y.a.userInfo},r.a.createElement("p",null,r.a.createElement("strong",null,"Name:")," ",e.emp.name),r.a.createElement("p",null,r.a.createElement("strong",null,"Username:")," ",e.emp.username),r.a.createElement("p",null,r.a.createElement("strong",null,"Email:")," ",e.emp.email),r.a.createElement("address",null,r.a.createElement("strong",null,"Address: "),e.emp.address.street,",",e.emp.address.suite,",",e.emp.address.city,",",e.emp.address.zipcode),r.a.createElement("p",null,r.a.createElement("strong",null,"Phone:")," ",e.emp.phone),r.a.createElement("p",null,r.a.createElement("strong",null,"Website:")," ",r.a.createElement("a",{href:e.emp.email},e.emp.email)),r.a.createElement("p",null,r.a.createElement("strong",null,"Company:")," ",e.emp.company.name)),r.a.createElement("div",{className:y.a.map},r.a.createElement(k,{coords:e.emp.address.geo})),r.a.createElement("div",{className:y.a.handler},r.a.createElement("span",null,r.a.createElement(b.a,{icon:w.a})),r.a.createElement("span",null,r.a.createElement(b.a,{onClick:e.delete,icon:w.b}))))},D=t(30),x=t.n(D),I=t(31),W=t.n(I),S=function(e){return r.a.createElement("div",{className:W.a.search},r.a.createElement("input",{type:"text",onChange:e.search,placeholder:"Search record"}))},A=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).deleteHandler=function(e){var a=Object(f.a)(n.state.empData);a.splice(e,1),n.setState({empData:a})},n.searchHandler=function(e){var a=Object(f.a)(n.state.initEmpEdata),t=new RegExp(e.target.value,"gi"),r=a.filter((function(e){return e.name.match(t)||e.username.match(t)}));n.setState({empData:r})},n.state={empData:[],initEmpEdata:[]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.get("https://jsonplaceholder.typicode.com/users").then((function(a){e.setState({empData:a.data,initEmpEdata:a.data})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(j,null,r.a.createElement(S,{search:function(a){return e.searchHandler(a)}}),r.a.createElement("ul",{className:x.a.listWrap},this.state.empData.map((function(a,t){return r.a.createElement(O,{key:a.id,emp:a,delete:function(){return e.deleteHandler(t)}})}))))}}]),t}(n.Component),C=function(){return r.a.createElement("div",{className:p.a.container},r.a.createElement("header",{className:p.a.nav},r.a.createElement(h,null)),r.a.createElement("main",{className:p.a.wrapper},r.a.createElement(A,null)))},H=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.df08ff1a.chunk.js.map