(this.webpackJsonpatm=this.webpackJsonpatm||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),c=(a(23),a(3)),m=(a(24),a(17)),u=a(16),i=a.n(u);var s=function(){var e=Object(n.useState)({data:"",message:""}),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(m.a)(),u=l.register,s=l.handleSubmit,p=[];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:s((function(e){var t={userName:e.userName,cardNUmber:parseInt(e.cardNumber),cvv:parseInt(e.cvv),pin:parseInt(e.pin),amount:parseInt(e.amount),denomination:e.denomination};i.a.post("https://basic-atm-api-gagan.herokuapp.com/",t).then((function(e){o((function(t){return{message:e.data.message,data:e.data.data}}))})).catch((function(e){console.log(e)}))}))},r.a.createElement("h1",null,"ATM MACHINE BY GAGAN"),r.a.createElement("p",null,"demo user: gagan, CN: 999999999999, CVV: 123, PIN: 1234"),r.a.createElement("input",{type:"text",placeholder:"Card Holder Name.....",name:"userName",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Card Number.....",name:"cardNumber",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"CVV....",name:"cvv",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"4-digit PIN....",name:"pin",ref:u}),r.a.createElement("br",null),r.a.createElement("input",{type:"text",placeholder:"Enter Amount....",name:"amount",ref:u}),r.a.createElement("br",null),r.a.createElement("h3",null,"Choose preferred denomination :"),r.a.createElement("select",{name:"denomination",ref:u,defaultValue:"None"},r.a.createElement("option",{value:"10"},"Rs.10"),r.a.createElement("option",{value:"20"},"Rs.20"),r.a.createElement("option",{value:"50"},"Rs.50"),r.a.createElement("option",{value:"100"},"Rs.100"),r.a.createElement("option",{value:"200"},"Rs.200"),r.a.createElement("option",{value:"500"},"Rs.500"),r.a.createElement("option",{value:"1000"},"Rs.1000"),r.a.createElement("option",{value:"None"},"None")),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"}),r.a.createElement("h4",null,"Wait 10-15 sec for response",r.a.createElement("br",null),a.message),Object.keys(a.data).forEach((function(e){p.push([e,a.data[e]])})),p.map((function(e){return r.a.createElement("li",{key:e[0]},"Rs.",e[0]," x ",e[1])}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.91e298bd.chunk.js.map