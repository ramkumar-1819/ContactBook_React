(this["webpackJsonpproject-react"]=this["webpackJsonpproject-react"]||[]).push([[0],{37:function(e,t,A){},38:function(e,t,A){},39:function(e,t,A){},64:function(e,t,A){},65:function(e,t,A){},66:function(e,t,A){},67:function(e,t,A){},68:function(e,t,A){},69:function(e,t,A){},70:function(e,t,A){},71:function(e,t,A){},72:function(e,t,A){"use strict";A.r(t);var n=A(1),c=A(16),a=A.n(c),s=(A(37),A(38),A(5)),l=A(12),i=(A(39),A(2)),o=A(10),r=A.n(o),d=function(){return function(e){r.a.get("https://60850e379b2bed001704180e.mockapi.io/Ram").then((function(t){e({type:"Success",data:t.data})})).catch((function(t){e({type:"Failure"})}))}},u=function(e){return function(t){t({type:"Fetched",value:e})}},m=function(){return function(e){r.a.get("https://60850e379b2bed001704180e.mockapi.io/Ram/".concat(sessionStorage.getItem("id"))).then((function(t){var A=[];t.data.datas.forEach((function(e){A.push(e)})),e({type:"InitialDatas",datas:A}),e({type:"Contact",values:t.data.datas})})).catch((function(e){console.log(e)}))}},h=A(0);function b(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.datas}));return Object(h.jsxs)("div",{className:"login",children:[Object(h.jsx)("div",{className:"login-name",children:"LOGIN"}),Object(h.jsxs)("form",{className:"form",onSubmit:function(A){return function(A){if(A.preventDefault(),""===document.getElementById("usrname").value)return alert("Username Shouldn't Empty"),void document.getElementById("usrname").focus();if(""===document.getElementById("pass").value)return alert("Password Shouldn't Empty"),void document.getElementById("pass").focus();if("Failure"===t.type)alert("Problem in API please try after sometimes");else{var n,c=Object(s.a)(t.datas);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(a.name===document.getElementById("usrname").value){if(a.password===document.getElementById("pass").value){e(u(a.id)),document.getElementsByClassName("blurSignin")[0].style.display="block",document.getElementsByClassName("popupSignin")[0].style.display="flex";break}if(a.password!==document.getElementById("usrname").value){alert("Password Missmatching"),document.getElementById("pass").focus();break}alert("Username Not Exist"),document.getElementById("usrname").focus();break}}}catch(l){c.e(l)}finally{c.f()}}}(A)},children:[Object(h.jsx)("input",{id:"usrname",type:"text",placeholder:"Enter UserName"}),Object(h.jsx)("input",{id:"pass",type:"password",placeholder:"Enter Password"}),Object(h.jsx)("button",{type:"submit",className:"login-button",children:"Login"}),Object(h.jsxs)("div",{children:["Not a Member?",Object(h.jsx)(l.b,{to:"/signup",children:"SignUp"})]})]}),Object(h.jsx)("div",{className:"blurSignin"}),Object(h.jsxs)("div",{className:"popupSignin",children:[Object(h.jsx)("div",{children:"Login Successfull"}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:"/contact",children:Object(h.jsx)("button",{children:"OK"})})})]})]})}A(64);function j(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.datas})).datas;return Object(h.jsxs)("div",{className:"Signup",children:[Object(h.jsx)("div",{className:"Signup-name",children:"SIGN-UP"}),Object(h.jsxs)("form",{className:"forms",onSubmit:function(A){return function(A){if(A.preventDefault(),!/[\w\W]{5,}/g.test(document.getElementById("newusr").value))return alert("Username must be minimum of 5 characters length"),document.getElementById("newusr").focus(),!1;if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/g.test(document.getElementById("newpass").value))return alert("Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character and no space and length must br 8-15"),document.getElementById("newpass").focus(),!1;if(document.getElementById("newpass").value!==document.getElementById("repass").value)return alert("Password is Not matching"),document.getElementById("repass").focus(),!1;var n,c=Object(s.a)(t);try{for(c.s();!(n=c.n()).done;){var a=n.value;if(a.name===document.getElementById("newusr").value&&a.password===document.getElementById("newpass").value)return void alert("Usename and Password already exist kindly Login to continue")}}catch(l){c.e(l)}finally{c.f()}r.a.post("https://60850e379b2bed001704180e.mockapi.io/Ram",{name:document.getElementById("newusr").value,password:document.getElementById("newpass").value,datas:[]}).then((function(t){e(d()),document.getElementsByClassName("blur")[0].style.display="block",document.getElementsByClassName("popup")[0].style.display="flex"})).catch((function(e){return console.log(e)}))}(A)},children:[Object(h.jsx)("input",{id:"newusr",type:"text",placeholder:"Create UserName"}),Object(h.jsx)("input",{id:"newpass",type:"password",placeholder:"Create Password"}),Object(h.jsx)("input",{id:"repass",type:"password",placeholder:"ReType-Password"}),Object(h.jsx)("button",{type:"submit",className:"signup-button",children:"SignUp"}),Object(h.jsxs)("div",{children:["Already a member?",Object(h.jsx)(l.b,{to:"/signin",children:"Login"})]})]}),Object(h.jsx)("div",{className:"blur"}),Object(h.jsxs)("div",{className:"popup",children:[Object(h.jsx)("div",{children:"Account Creation Successfull"}),Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:"/signin",children:Object(h.jsx)("button",{children:"OK"})})})]})]})}A(65);var p=A.p+"static/media/contact-book-2415199-2031455.9a135919.png";A(66);function y(){var e=Object(i.c)((function(e){return e.contact})),t=Object(i.b)(),A=Object(i.c)((function(e){return e.initialData}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"contact",onSubmit:function(n){return function(n){n.preventDefault();var c=document.getElementById("name").value,a=document.getElementById("phone").value,s=document.getElementById("email").value;if(""!==c&&""!==a&&""!==s)if(/^[A-Z]/g.test(c))if(/^[789]\d{9}$/g.test(a)){var l=!1;if(A.forEach((function(e){e.phone===a&&(alert("Number already exist in List"),l=!0)})),!0!==l)if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g.test(s)){var i=e;i.push({name:c,phone:a,email:s}),r.a.put("https://60850e379b2bed001704180e.mockapi.io/Ram/".concat(sessionStorage.getItem("id")),{datas:i}).then((function(e){t(m())})),document.getElementsByClassName("bluring")[0].style.display="none",document.getElementsByClassName("contact")[0].style.display="none"}else alert("Enter a valid email id")}else alert("Phone Number start with [789] and total of 10 digits");else alert("Name start with Capital Letter");else alert("Fill All the Given Fields")}(n)},children:[Object(h.jsxs)("b",{children:["Fill the Given Details",Object(h.jsx)("button",{id:"close",type:"button",onClick:function(){document.getElementsByClassName("bluring")[0].style.display="none",document.getElementsByClassName("contact")[0].style.display="none"},children:"X"})]}),Object(h.jsx)("input",{placeholder:"Enter the Name",id:"name"}),Object(h.jsx)("input",{placeholder:"Enter the PhoneNumber",id:"phone"}),Object(h.jsx)("input",{placeholder:"Enter the Email-Id",id:"email"}),Object(h.jsx)("button",{id:"save",type:"submit",children:"Save"})]})})}A(67);function f(){var e,t=document.querySelectorAll(".chkbox"),A=Object(s.a)(t);try{for(A.s();!(e=A.n()).done;){e.value.checked=!1}}catch(l){A.e(l)}finally{A.f()}var n,c=document.getElementsByName("sortby"),a=Object(s.a)(c);try{for(a.s();!(n=a.n()).done;){n.value.checked=!1}}catch(l){a.e(l)}finally{a.f()}document.getElementsByClassName("delete")[0].style.display="none"}function g(){var e=Object(i.c)((function(e){return e.initialData})),t=Object(i.b)(),A=[];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{id:"searchbar",children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter Name or PhoneNumber or Email to search",id:"searchedValue",onChange:function(n){return function(n){if(""===n.target.value)A=e,t({type:"Option",option:""}),t({type:"Contact",values:e}),f(),document.getElementsByClassName("popupSection")[0].style.display="none",document.getElementsByClassName("delete")[0].style.display="none";else{A=[];var c,a=new RegExp("".concat(n.target.value),"gi"),l=Object(s.a)(e);try{for(l.s();!(c=l.n()).done;){var i=c.value;(a.test(i.name)||a.test(i.phone)||a.test(i.email))&&A.push(i)}}catch(o){l.e(o)}finally{l.f()}}}(n)}}),Object(h.jsx)("button",{type:"button",onClick:function(){f(),0===A.length?document.getElementsByClassName("popupSection")[0].style.display="flex":document.getElementsByClassName("popupSection")[0].style.display="none",t({type:"Contact",values:A}),t({type:"Option",option:""})},children:"SEARCH"})]}),Object(h.jsx)("div",{className:"popupSection",children:Object(h.jsx)("div",{children:"No Match Found"})})]})}var O=A(23);A(68),A(69);function x(e){var t=Object(i.c)((function(e){return e.initialData})),A=Object(i.b)(),c=[];Object(n.useEffect)((function(){document.getElementById("namefield").value=s.name,document.getElementById("phonefield").value=s.phone,document.getElementById("emailfield").value=s.email}));var a=Object(i.c)((function(e){return e.contact})),s=e.datas,l=e.index,o=a,d=function(){r.a.put("https://60850e379b2bed001704180e.mockapi.io/Ram/".concat(sessionStorage.getItem("id")),{datas:c}).then((function(e){A(m()),document.getElementsByClassName("bluring")[0].style.display="none",document.getElementsByClassName("edit")[0].style.display="none"}))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"edit",onSubmit:function(e){return function(e){e.preventDefault();var n=document.getElementById("namefield").value,a=document.getElementById("phonefield").value,l=document.getElementById("emailfield").value;if(""!==n&&""!==a&&""!==l){var i=s.phone;t.forEach((function(e,A){i===e.phone&&(t[A]={name:n,phone:a,email:l})})),c=t,f(),document.getElementById("searchedValue").value="",A({type:"Option",option:""}),d()}else alert("Fill out All the Given Fields")}(e)},children:[Object(h.jsxs)("b",{children:["Edit Contact",Object(h.jsx)("button",{id:"closebutton",type:"button",onClick:function(){document.getElementsByClassName("edit")[0].style.display="none",document.getElementsByClassName("bluring")[0].style.display="none"},children:"X"})]}),Object(h.jsx)("input",{placeholder:"Enter the Name",id:"namefield",defaultValue:s.name}),Object(h.jsx)("input",{placeholder:"Enter the PhoneNumber",id:"phonefield",defaultValue:s.phone}),Object(h.jsx)("input",{placeholder:"Enter the Email-Id",id:"emailfield",defaultValue:s.email}),Object(h.jsx)("button",{id:"save-edited",type:"submit",children:"Update"}),Object(h.jsx)("b",{children:"OR"}),Object(h.jsx)("button",{id:"remove",type:"button",onClick:function(){f();var e=o[l].phone;t.forEach((function(A,n){A.phone===e&&(t[n]=void 0),c=t.filter((function(e){return void 0!==e}))})),document.getElementById("searchedValue").value="",A({type:"Option",option:""}),d()},children:"Remove Contact"})]})})}A(70);function v(){var e,t=Object(i.b)(),A=Object(i.c)((function(e){return e.contact})),n=Object(i.c)((function(e){return e.initialData})),c=Object(i.c)((function(e){return e.lastApplied}));return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{className:"sort",children:[Object(h.jsxs)("h3",{children:["Sort",Object(h.jsx)("button",{id:"exit",type:"button",onClick:function(){if(""===c){var e,t=document.getElementsByName("sortby"),A=Object(s.a)(t);try{for(A.s();!(e=A.n()).done;){e.value.checked=!1}}catch(n){A.e(n)}finally{A.f()}}else"a-z"===c?document.getElementsByName("sortby")[0].checked=!0:"z-a"===c?document.getElementsByName("sortby")[1].checked=!0:"recently"===c?document.getElementsByName("sortby")[2].checked=!0:"default"===c&&(document.getElementsByName("sortby")[3].checked=!0);document.getElementsByClassName("sort")[0].style.display="none",document.getElementsByClassName("bluring")[0].style.display="none"},children:"X"})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"sortby",value:"a-z"})," By Name (A-Z)"]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"sortby",value:"z-a"})," By Name(Z-A)"]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"sortby",value:"recently"})," By Date(Recently Added)"]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("input",{type:"radio",name:"sortby",value:"default"})," By Date(Added First/Default)"]}),Object(h.jsx)("button",{type:"button",onClick:function(){var c,a=document.getElementsByName("sortby"),l=Object(s.a)(a);try{for(l.s();!(c=l.n()).done;){var i=c.value;!0===i.checked&&(e=i)}}catch(b){l.e(b)}finally{l.f()}if(void 0===e)alert("Select any one option");else{if("recently"===e.value){var o=[],r=[];A.forEach((function(e,t){n.forEach((function(t,A){t.phone===e.phone&&o.push(A)}))})),o.sort((function(e,t){return e-t})),o.forEach((function(e){r.push(n[e])})),r.reverse(),t({type:"Option",option:"recently"}),t({type:"Contact",values:r})}else if("default"===e.value){var d=[],u=[];A.forEach((function(e,t){n.forEach((function(t,A){t.phone===e.phone&&d.push(A)}))})),d.sort((function(e,t){return e-t})),d.forEach((function(e){u.push(n[e])})),t({type:"Option",option:"default"}),t({type:"Contact",values:u})}else if("a-z"===e.value){var m=[];A.sort((function(e,t){return e.name>t.name?1:-1})),A.forEach((function(e){m.push(e)})),t({type:"Option",option:"a-z"}),t({type:"Contact",values:m})}else if("z-a"===e.value){var h=[];A.sort((function(e,t){return e.name>t.name?-1:1})),A.forEach((function(e){h.push(e)})),t({type:"Option",option:"z-a"}),t({type:"Contact",values:h})}document.getElementsByClassName("bluring")[0].style.display="none",document.getElementsByClassName("sort")[0].style.display="none"}},children:"Apply"})]})})}function E(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.contact})),A=Object(i.c)((function(e){return e.initialData})),c=Object(n.useState)(""),a=Object(O.a)(c,2),l=a[0],o=a[1],d=Object(n.useState)({name:"",phone:"",email:""}),u=Object(O.a)(d,2),b=u[0],j=u[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"filter-delete",children:[Object(h.jsx)("button",{className:"filters",onClick:function(){document.getElementsByClassName("bluring")[0].style.display="block",document.getElementsByClassName("sort")[0].style.display="flex"},children:"SORTBY"}),Object(h.jsx)("button",{className:"delete",onClick:function(){var n=[];document.querySelectorAll(".checkboxes").forEach((function(e,t){!0===e.checked&&n.push(t)}));var c=[];n.forEach((function(e){c.push(t[e])})),A.forEach((function(e,t){c.forEach((function(n,c){n.phone===e.phone&&(A[t]=void 0)}))}));var a=A.filter((function(e){return void 0!==e}));r.a.put("https://60850e379b2bed001704180e.mockapi.io/Ram/".concat(sessionStorage.getItem("id")),{datas:a}).then((function(t){e(m());var A,n=document.querySelectorAll(".chkbox"),c=Object(s.a)(n);try{for(c.s();!(A=c.n()).done;){A.value.checked=!1}}catch(a){c.e(a)}finally{c.f()}document.getElementById("searchedValue").value="",document.getElementsByClassName("delete")[0].style.display="none",e({type:"Option",option:""})}))},children:"DELETE"})]}),Object(h.jsx)(v,{}),Object(h.jsxs)("div",{className:"mainPage",children:[Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("input",{type:"checkbox",className:"chkbox",onClick:function(e){return function(e){!0===e.target.checked?document.getElementsByClassName("delete")[0].style.display="inline":document.getElementsByClassName("delete")[0].style.display="none";var t,A=document.querySelectorAll(".chkbox"),n=Object(s.a)(A);try{for(n.s();!(t=n.n()).done;)t.value.checked=e.target.checked}catch(c){n.e(c)}finally{n.f()}}(e)}})}),Object(h.jsx)("th",{children:"Name"}),Object(h.jsx)("th",{children:"PhoneNumber"}),Object(h.jsx)("th",{children:"Email-Id"}),Object(h.jsx)("th",{children:"Edit"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,A){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"checkbox",className:"chkbox checkboxes",onClick:function(e){return function(e){var t,A=!1,n=document.querySelectorAll(".checkboxes"),c=Object(s.a)(n);try{for(c.s();!(t=c.n()).done;)if(!0===t.value.checked){A=!0;break}}catch(a){c.e(a)}finally{c.f()}document.getElementsByClassName("delete")[0].style.display=!0===A?"inline":"none"}()}})}),Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.phone}),Object(h.jsx)("td",{children:e.email}),Object(h.jsx)("td",{children:Object(h.jsx)("div",{className:"minus",onClick:function(){return function(e){document.getElementsByClassName("bluring")[0].style.display="block",document.getElementsByClassName("edit")[0].style.display="flex",j(t[e]),o(e)}(A)},children:"-"})})]},A)}))})]}),Object(h.jsx)(x,{datas:b,index:l})]})]})}function B(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userdata}));Object(n.useEffect)((function(){""!==t&&sessionStorage.setItem("id",t.datas),e(m())}),[]);var A=function(){document.getElementsByClassName("bluring")[0].style.display="none",document.getElementsByClassName("shutdown")[0].style.display="none"};return Object(h.jsxs)("div",{className:"contactPage",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"logos",children:[Object(h.jsx)("img",{src:p,alt:"logo"}),Object(h.jsx)("div",{children:"ContactBook"})]}),Object(h.jsxs)("div",{className:"logout",children:[Object(h.jsx)("button",{type:"button",onClick:function(){document.getElementById("name").value="",document.getElementById("phone").value="",document.getElementById("email").value="",e(m()),f(),document.getElementById("searchedValue").value="",e({type:"Option",option:""}),document.getElementsByClassName("bluring")[0].style.display="block",document.getElementsByClassName("contact")[0].style.display="flex",document.getElementsByClassName("popupSection")[0].style.display="none"},children:"Create Contact"}),Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"powerimg",onClick:function(){document.getElementsByClassName("bluring")[0].style.display="block",document.getElementsByClassName("shutdown")[0].style.display="flex"}})]})]}),Object(h.jsx)(g,{}),Object(h.jsx)(y,{}),Object(h.jsx)(E,{}),Object(h.jsx)("div",{className:"bluring"}),Object(h.jsxs)("div",{className:"shutdown",children:[Object(h.jsx)("h3",{children:"Are you want to logout ?"}),Object(h.jsxs)("div",{className:"yes_no",children:[Object(h.jsx)("div",{children:Object(h.jsx)(l.b,{to:"/signin",children:Object(h.jsx)("button",{onClick:A,children:"Yes"})})}),Object(h.jsx)("button",{onClick:A,children:"No"})]})]})]})}var I=A(4);function k(){return Object(h.jsxs)("div",{className:"n",children:[Object(h.jsx)("div",{className:"logo"}),Object(h.jsxs)("div",{className:"auth",children:[Object(h.jsx)("div",{children:"WELCOME TO CONTACT BOOK"}),Object(h.jsx)(b,{})]})]})}function C(){return Object(h.jsxs)("div",{className:"n",children:[Object(h.jsx)("div",{className:"logo"}),Object(h.jsxs)("div",{className:"auth",children:[Object(h.jsx)("div",{children:"WELCOME TO CONTACT BOOK"}),Object(h.jsx)(j,{})]})]})}function N(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(I.c,{children:[Object(h.jsx)(I.a,{exact:!0,path:"/ContactBook_React",children:Object(h.jsx)(k,{})}),Object(h.jsx)(I.a,{path:"/signup",children:Object(h.jsx)(C,{})}),Object(h.jsx)(I.a,{path:"/signin",children:Object(h.jsx)(k,{})}),Object(h.jsx)(I.a,{path:"/contact",children:Object(h.jsx)(B,{})})]})})})}A(71);var w=function(){var e=Object(i.b)();return Object(n.useEffect)((function(){e(d())}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(N,{})})},S=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,73)).then((function(t){var A=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;A(e),n(e),c(e),a(e),s(e)}))},D=A(15),R=A(32),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Success":return{type:!0,datas:t.data};case"Failure":return{type:!1};default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Fetched":return{datas:t.value};default:return e}};var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Option":return t.option;default:return e}};var U=Object(D.b)({datas:T,userdata:z,contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Contact":return t.values;default:return e}},lastApplied:Q,initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"InitialDatas":return t.datas;default:return e}}}),F=Object(D.c)(U,Object(D.a)(R.a));a.a.render(Object(h.jsx)(i.a,{store:F,children:Object(h.jsx)(w,{})}),document.getElementById("root")),S()}},[[72,1,2]]]);
//# sourceMappingURL=main.88af83c3.chunk.js.map