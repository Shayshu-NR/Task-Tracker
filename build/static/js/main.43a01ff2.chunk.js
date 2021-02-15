(this.webpackJsonptutorial=this.webpackJsonptutorial||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),s=n(21),o=n.n(s),u=(n(30),n(14)),i=n(24),l=n(6),j=n.n(l),d=n(11),b=n(10),h=n(8),f=n(2),p=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:c,children:n})};p.defaultProps={color:"steelblue",text:"Add"};var O=p,x=function(e){var t=e.title,n=e.onAdd,c=e.showAddTask,a=Object(f.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===a.pathname&&Object(r.jsx)(O,{color:"".concat(c?"red":"green"),text:"".concat(c?"Close":"Add"),onClick:n})]})};x.defaultProps={title:"Task tracker"};var m=x,v=n(23),k=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text,Object(r.jsx)(v.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(r.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)(r.Fragment,{children:t.map((function(e){return Object(r.jsx)(k,{task:e,onDelete:n,onToggle:c},e.id)}))})};var y=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(b.a)(n,2),s=a[0],o=a[1],u=Object(c.useState)(""),i=Object(b.a)(u,2),l=i[0],j=i[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),f=h[0],p=h[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),s?(t({text:s,day:l,reminder:f}),o(""),j(""),p(!1)):alert("Please add a task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"Add",value:s,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Day & time"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Day & time",value:l,onChange:function(e){return j(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",value:f,onChange:function(e){return p(e.currentTarget.checked)},checked:f})]}),Object(r.jsx)("input",{className:"btn btn-block",type:"submit",value:"Save Task"})]})},w=function(){var e=Object(f.e)();return Object(r.jsxs)("footer",{children:[Object(r.jsx)("p",{children:"Shayshu NR"}),"/"===e.pathname&&Object(r.jsx)(h.b,{to:"/About",children:"About"})]})},C=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Version 1.0"}),Object(r.jsx)(h.b,{to:"/",children:" Back "})]})};var T=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,console.log(r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=Object(c.useState)(!1),p=Object(b.a)(l,2),O=p[0],x=p[1],v=function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return r=e.sent,e.next=5,r.json();case 5:c=e.sent,a([].concat(Object(i.a)(n),[c]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:a(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:return r=e.sent,c=Object(u.a)(Object(u.a)({},r),{},{reminder:!r.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(c)});case 6:return s=e.sent,e.next=9,s.json();case 9:i=e.sent,a(n.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{reminder:i.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(h.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{onAdd:function(){return x(!O)},showAddTask:O}),Object(r.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(r.jsxs)(r.Fragment,{children:[O&&Object(r.jsx)(y,{onAdd:v}),n.length>0?Object(r.jsx)(g,{tasks:n,onDelete:k,onToggle:T}):"No tasks"]})}}),Object(r.jsx)(f.a,{path:"/About",component:C}),Object(r.jsx)(w,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.43a01ff2.chunk.js.map