(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{1:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(4),s=a.n(c),i=(a(14),a(15),a(5)),r=a(6),d=a(9),o=a(8),l=a(1),u=a.n(l),b=a(7),j=a.n(b),h=a(0),f=function(e){var t=e.children;return Object(h.jsx)("div",{className:j.a.container,children:t})},p=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.handleNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.handleBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=Object.values(this.state),t=e[0],a=e[0]+e[1]+e[2],n=Math.round(t/a*100),c=this.state,s=c.good,i=c.neutral,r=c.bad;return Object(h.jsx)("div",{className:"App-main",children:Object(h.jsxs)(f,{children:[Object(h.jsx)("div",{className:u.a.feedbackOptions,children:Object(h.jsxs)("div",{className:u.a.btnList,children:[Object(h.jsx)("button",{type:"button",className:u.a.feedbackBtn,onClick:this.handleGood,children:"Good"}),Object(h.jsx)("button",{type:"button",className:u.a.feedbackBtn,onClick:this.handleNeutral,children:"Neutral"}),Object(h.jsx)("button",{type:"button",className:u.a.feedbackBtn,onClick:this.handleBad,children:"Bad"})]})}),Object(h.jsxs)("div",{className:u.a.statistics,children:[Object(h.jsxs)("p",{className:u.a.feedbackQuantity,children:["Good: ",s]}),Object(h.jsxs)("p",{className:u.a.feedbackQuantity,children:["Neutral: ",i," "]}),Object(h.jsxs)("p",{className:u.a.feedbackQuantity,children:["Bad: ",r]}),Object(h.jsxs)("p",{className:u.a.feedbackQuantity,children:["Total: ",a]}),Object(h.jsxs)("p",{className:u.a.feedbackQuantity,children:["Positive feedback: ",n,"%"]})]})]})})}}]),a}(n.Component);s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))},7:function(e,t,a){e.exports={container:"Container_container__2sQqZ"}}},[[17,1,2]]]);
//# sourceMappingURL=main.da3ced5a.chunk.js.map