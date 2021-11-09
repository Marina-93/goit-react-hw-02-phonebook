(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),s=(n(17),n(12)),o=n(2),l=n(3),u=n(5),b=n(4),m=n(10),d=n.n(m),h=(n(7),n(0));function j(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:"contaner",children:[Object(h.jsx)("h2",{className:"title",children:t}),n]})}var f=n(11),p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=this.handleSubmit,r=this.handleChange;return Object(h.jsxs)("form",{onSubmit:a,className:"form",children:[Object(h.jsxs)("label",{className:"label",children:["\u0418\u043c\u044f",Object(h.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{className:"label",children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u0430",Object(h.jsx)("input",{className:"input",type:"tel",name:"number",value:n,onChange:r,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(h.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})}}]),n}(r.a.Component),O=p,v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.contacts,n=e.onDelete;return Object(h.jsx)("ul",{className:"list",children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsxs)("li",{children:[a,": ",r,Object(h.jsx)("button",{className:"button-list",type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})}}]),n}(r.a.Component),x=v,C=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange;return Object(h.jsxs)("label",{className:"filter-label",children:["Find contacts by name",Object(h.jsx)("input",{className:"filter-input",value:t,onChange:n,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}}]),n}(r.a.Component),g=C,y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmit=function(t){var n=t.name,a=t.number,r=n;if(e.state.contacts.some((function(e){return e.name===r})))alert("".concat(n," is already in contact"));else{var c={id:d.a.generate(),name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[].concat(Object(s.a)(t),[c])}}))}},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.getFilterSearch=function(){var t=e.state,n=t.contacts,a=t.filter.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(a)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getFilterSearch();return Object(h.jsxs)("div",{className:"conteiner",children:[Object(h.jsx)(j,{title:"Phonebook",children:Object(h.jsx)(O,{onSubmit:this.formSubmit})}),Object(h.jsxs)(j,{title:"Contacts",children:[Object(h.jsx)(g,{value:this.state.filter,onChange:this.changeFilter}),Object(h.jsx)(x,{contacts:e,onDelete:this.deleteContact})]})]})}}]),n}(r.a.Component),S=y;i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))},7:function(e,t,n){}},[[27,1,2]]]);
//# sourceMappingURL=main.1efa77a1.chunk.js.map