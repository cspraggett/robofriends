(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),o=(n(13),n(2)),a=n(0),i=function(e){var t=e.id,n=e.name,c=e.email;return Object(a.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"Robots"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:n}),Object(a.jsx)("p",{children:c})]})]})},h=function(e){var t=e.robots;return Object(a.jsx)(a.Fragment,{children:t.map((function(e){return Object(a.jsx)(i,{id:e.id,name:e.name,email:e.email},e.id)}))})},l=function(e){e.searchfield;var t=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},u=function(e){return Object(a.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},b=n(5),j=n(6),d=n(8),f=n(7),O=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(b.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(j.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oooops. That is not good"}):this.props.children}}]),n}(c.Component);n(15);var m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),b=i[0],j=i[1],d=Object(c.useState)(0),f=Object(o.a)(d,2),m=f[0],p=f[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){r(e.map((function(e){return{id:e.id,name:e.name,email:e.email}})))})).catch((function(e){return console.error(e)}))}),[]);var g=n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return n.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(a.jsx)("button",{onClick:function(){return p(m+1)},children:"Click Me!"}),Object(a.jsx)(l,{searchChange:function(e){j(e.target.value)}}),Object(a.jsx)(u,{children:Object(a.jsxs)(O,{children:[Object(a.jsx)(h,{robots:g}),";"]})})]}):Object(a.jsx)("h1",{children:"Loading"})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(16);s.a.render(Object(a.jsx)(m,{}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.20cfca5f.chunk.js.map