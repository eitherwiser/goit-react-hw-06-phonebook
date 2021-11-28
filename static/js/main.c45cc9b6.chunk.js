(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={input:"Filter_input__3TRym"}},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),o=n(2),i=n(3),l=n(13),u=n(15),b="contact/addContact",m="contact/deleteContact",d="contacts/filter",j=[{id:"3145q6",name:"Bill Gatesevich",number:"044242424600"},{id:"4531q6",name:"Mark Zuckerman",number:"062746004242"},{id:"3131q6",name:"Linus Torvaldsiuk",number:"057242424600"},{id:"q53143",name:"Jeff Bezenko",number:"064723004242"}],h=function(){return window.localStorage.getItem("contacts")||window.localStorage.setItem("contacts",JSON.stringify(j)),JSON.parse(window.localStorage.getItem("contacts"))},p=Object(i.combineReducers)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h(),e=arguments.length>1?arguments[1]:void 0,n=[],a=function(){return window.localStorage.setItem("contacts",JSON.stringify(n))};switch(e.type){case b:return n=[].concat(Object(u.a)(t),[e.payload]),a(),n;case m:return n=t.filter((function(t){return t.id!==e.payload})),a(),console.log(n),n;default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=e.type,a=e.payload;return n===d?a:t}}),f=p,O=Object(i.combineReducers)({contacts:f}),_=Object(i.createStore)(O,Object(l.composeWithDevTools)()),x=n(11),g=n(31),y=n(4),v=n.n(y),C=function(t){return{type:d,payload:t}},N=n(1),w={addContact:function(t){return{type:b,payload:t}}},k=Object(o.b)((function(t){return{contacts:t.contacts.items}}),w)((function(t){var e=t.addContact,n=t.contacts,c=Object(a.useState)(""),r=Object(x.a)(c,2),s=r[0],o=r[1],i=Object(a.useState)(""),l=Object(x.a)(i,2),u=l[0],b=l[1],m=function(t){var e=t.target,n=e.type,a=e.value;switch(n){case"text":o(a);break;case"tel":b(a)}};return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{onSubmit:function(t){var a=Object(g.a)();n.some((function(t){return t.name===s}))?alert("".concat(s," is already in your phonebook.")):n.some((function(t){return t.number===u}))?alert("Person with number ".concat(u," is already in your phonebook.")):(e({id:a,name:s,number:u}),o(""),b(""),t.preventDefault())},className:v.a.form,children:[Object(N.jsxs)("label",{className:v.a.label,children:["Name \xa0\xa0\xa0\xa0",Object(N.jsx)("input",{className:v.a.input,type:"text",onChange:m,value:s,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{className:v.a.label,children:["Number \xa0",Object(N.jsx)("input",{className:v.a.input,type:"tel",onChange:m,name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(N.jsx)("button",{className:v.a.btn,type:"onSubmit",children:"Add contact"})]})})})),S=n(14),F=n.n(S),L={changeFilter:C},A=Object(o.b)((function(t){return{value:t.contacts.filter}}),L)((function(t){var e=t.value,n=t.changeFilter;return Object(N.jsxs)("label",{children:["Find contacts by name \xa0",Object(N.jsx)("input",{className:F.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}})]})})),J=n(5),q=n.n(J),Z=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},z={deleteContact:function(t){return{type:m,payload:t}},changeFilter:C},B=Object(o.b)((function(t){return{contacts:Z(t.contacts.items,t.contacts.filter)}}),z)((function(t){var e=t.contacts,n=t.deleteContact;return Object(N.jsxs)(N.Fragment,{children:[!e.length&&Object(N.jsx)("h4",{children:"Contacts list is empty."}),!!e.length&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h4",{className:q.a.list_title,children:"Contacts list:"}),Object(N.jsx)("ul",{className:q.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(N.jsxs)("li",{className:q.a.list_item,children:[Object(N.jsxs)("a",{href:"tel:"+{number:c},children:[Object(N.jsxs)("span",{className:q.a.name,children:[a,"\xa0:"]}),Object(N.jsx)("span",{className:q.a.number,children:c})]}),Object(N.jsx)("button",{type:"button",className:q.a.btn,onClick:function(){return n(e)},children:Object(N.jsx)("span",{className:"material-icons",children:"delete"})})]},e)}))})]})]})}));n(27);function I(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{children:"Phonebook"}),Object(N.jsx)(A,{}),Object(N.jsx)(k,{}),Object(N.jsx)(B,{})]})}n(28);s.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(o.a,{store:_,children:Object(N.jsx)(I,{})})}),document.getElementById("root"))},4:function(t,e,n){t.exports={form:"Form_form__ZnlK-",label:"Form_label__1_Dc5",input:"Form_input__3uH4w",btn:"Form_btn__3cWUP"}},5:function(t,e,n){t.exports={list:"ContactsList_list__1B49m",list_title:"ContactsList_list_title__5-4ZP",list_item:"ContactsList_list_item__4W8Kl",name:"ContactsList_name__2Uahx",number:"ContactsList_number__3tOHt",btn:"ContactsList_btn__2sbAe"}}},[[29,1,2]]]);
//# sourceMappingURL=main.c45cc9b6.chunk.js.map