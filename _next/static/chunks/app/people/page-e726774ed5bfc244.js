(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{7718:function(e,l,s){Promise.resolve().then(s.bind(s,1078))},1078:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return m}});var t=s(7437),a=s(7138),c=s(2265);function m(){let e=e=>e.split("-")[2],[l,s]=(0,c.useState)([]),[m,i]=(0,c.useState)([]);return(0,c.useEffect)(()=>{fetch("/data/member.json").then(e=>e.json()).then(e=>s(e))},[]),(0,c.useEffect)(()=>{fetch("/data/alumni.json").then(e=>e.json()).then(e=>i(e))},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex flex-col w-full",children:(0,t.jsx)("div",{className:"flex flex-col w-11/12 md:w-3/4 mx-auto",children:(0,t.jsx)("h1",{className:"text-center mt-8 text-2xl md:text-3xl lg:text-4xl font-bold mb-4",children:"Our Team"})})}),(0,t.jsx)("hr",{className:"border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8"}),l.map((e,s)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex flex-col w-full",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row w-11/12 md:w-3/4 mx-auto",children:[(0,t.jsx)("div",{className:"w-full md:w-1/2 flex flex-col items-center justify-center",children:(0,t.jsx)("img",{src:"/img/member/".concat(e.image),alt:"Mike Morgan",className:"rounded-lg w-56 h-56"})}),(0,t.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col justify-center mt-4 md:mt-0",children:[(0,t.jsx)("p",{className:"text-2xl font-semibold",children:e.name}),(0,t.jsx)("p",{className:"text-lg",children:e.role}),(0,t.jsxs)("div",{className:"flex flex-row mt-2 mb-2",children:[e.email&&(0,t.jsx)(a.default,{href:"mailto:".concat(e.email),children:(0,t.jsx)("img",{src:"/img/social/email.png",alt:"Email",className:"w-6 h-6 mr-2"})}),e.twitter&&(0,t.jsx)(a.default,{href:"https://x.com/".concat(e.twitter),children:(0,t.jsx)("img",{src:"/img/social/twitter.png",alt:"Twitter",className:"w-6 h-6 mr-2"})}),e.website&&(0,t.jsx)(a.default,{href:e.website,children:(0,t.jsx)("img",{src:"/img/social/website.png",alt:"Website",className:"w-6 h-6 mr-2"})}),e.github&&(0,t.jsx)(a.default,{href:"https://github.com/".concat(e.github),children:(0,t.jsx)("img",{src:"/img/social/github.png",alt:"GitHub",className:"w-6 h-6 mr-2"})})]}),e.tag&&e.tag.length>0&&(0,t.jsx)("div",{className:"flex flex-wrap mb-5",children:e.tag.map(e=>(0,t.jsx)("span",{className:"text-xs text-black bg-indigo-200 rounded-full px-2 py-1 mr-2",children:e},e))}),(0,t.jsx)("p",{className:"text-sm",children:e.bio.map(e=>(0,t.jsxs)(t.Fragment,{children:[e,(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]}))})]})]})},s),s!==l.length-1&&(0,t.jsx)("hr",{className:"border-t border-gray-600 w-11/12 md:w-3/4 mx-auto my-8"})]})),(0,t.jsx)("div",{className:"flex flex-col w-full",children:(0,t.jsx)("div",{className:"flex flex-col w-11/12 md:w-3/4 mx-auto",children:(0,t.jsx)("h1",{className:"text-center mt-12 text-2xl md:text-3xl lg:text-4xl font-bold mb-4",children:"Alumni"})})}),(0,t.jsx)("hr",{className:"border-t border-gray-600 w-11/12 md:w-3/4 mx-auto mb-8"}),(0,t.jsx)("div",{className:"flex flex-col w-full",children:(0,t.jsx)("div",{className:"flex flex-col w-11/12 md:w-3/4 mx-auto",children:(0,t.jsx)("ul",{className:"list-disc",children:m.map((l,s)=>(0,t.jsxs)("li",{children:[l.name," (",e(l.join_date),")- (",l.project,")"]},s))})})})]})}}},function(e){e.O(0,[138,971,23,744],function(){return e(e.s=7718)}),_N_E=e.O()}]);