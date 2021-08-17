(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{135:function(e,t,n){},136:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(17),s=n.n(a),o=(n(135),n(131)),i=n(46),u=n(9),l=n.n(u),d=n(28),j=n(27),p=(n(136),n.p+"static/media/logo.6ce24c58.svg"),h=n(1),b=function(e){var t=e.text,n=e.onClick;return Object(h.jsx)("button",{onClick:n,className:"btn",children:t})},f=function(e){return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:p,alt:"logo",className:"App-logo"})," ",Object(h.jsx)("span",{children:e.title})]}),Object(h.jsx)(b,{text:e.showAdd?"Close":"Add",onClick:e.onAdd})]})};f.defaultProps={title:"Task Tracker"};var x=n(130),O=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text,Object(h.jsx)(x.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(h.jsx)("p",{children:t.day})]})},m=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(O,{task:e,onDelete:n,onToggle:r},e.id)}))})},v=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(j.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(j.a)(o,2),u=i[0],l=i[1],d=Object(r.useState)(!1),p=Object(j.a)(d,2),b=p[0],f=p[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:b}),s(""),l(""),f(!1)):alert("Please add task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add task...",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Date & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:b,value:b,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",className:"btn2 btn-block",value:"Save Task"})]})};n(138);var k=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(o.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{onAdd:function(){return c(!n)},showAdd:n}),n&&Object(h.jsx)(v,{onAdd:g}),u.length>0?Object(h.jsx)(m,{tasks:u,onDelete:O,onToggle:k}):Object(h.jsx)("p",{style:{textAlign:"center",color:"red"},children:"Nothing to show"})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,436)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),g()}},[[435,1,2]]]);
//# sourceMappingURL=main.d88009b3.chunk.js.map