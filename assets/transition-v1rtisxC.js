import{P as w}from"./press-cell-j69wMGN4.js";import{P as y}from"./press-transition-DnFvQ8Gf.js";import{_ as C,o as i,c as a,F as u,i as d,b as r,r as c,n as F}from"./index-BZexHo5h.js";import"./press-icon-plus-5Xj-bw2h.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-BWsAQQHi.js";import"./press-component-HD2axD72.js";import"./validator-OjQp2SYe.js";import"./link-Ds6ljOst.js";import"./event-Dm-SpHU4.js";import"./support-passive-CNRHRm4O.js";import"./system-BAdrsxg_.js";let _=null;const h=s=>s.toLowerCase().replace(/\s+/,"-"),S={components:{PressCell:w,PressTransition:y},data(){const s=[{title:"Fade",list:["Fade","Fade Up","Fade Down","Fade Left","Fade Right"]},{title:"Slide",list:["Slide Up","Slide Down","Slide Left","Slide Right"]},{title:"Custom",list:["Custom"]}],o=s.reduce((t,n)=>t.concat(n.list),[]);return{customStyle:"",curTransitionType:"fade",transitionDemoList:s,options:o.reduce((t,n)=>{const e=h(n);return t[e]=!1,t},{}),showCustom:!1}},methods:{onShowTransition(s){const o=h(s);this.curTransitionType=o,Object.keys(this.options).forEach(t=>{this.options[t]=!1}),setTimeout(()=>{this.options[o]=!0,clearTimeout(_),_=setTimeout(()=>{this.options[o]=!1},o==="custom"?2e3:1e3)})}}},L={class:"demo-wrap"};function b(s,o,t,n,e,f){const T=c("press-cell"),k=c("demo-block"),m=c("press-transition");return i(),a("div",L,[(i(!0),a(u,null,d(e.transitionDemoList,(p,v)=>(i(),r(k,{key:v,title:p.title},{default:F(()=>[(i(!0),a(u,null,d(p.list,l=>(i(),r(T,{key:l,title:l,"is-link":"",onClick:x=>f.onShowTransition(l)},null,8,["title","onClick"]))),128))]),_:2},1032,["title"]))),128)),e.curTransitionType!=="custom"?(i(),r(m,{key:0,name:e.curTransitionType,show:e.options[e.curTransitionType]||!1,duration:300,"custom-class":"block"},null,8,["name","show"])):(i(),r(m,{key:1,show:e.options.custom||!1,duration:{enter:1e3,leave:1e3},"custom-class":"block",name:"","enter-class":"press-enter-class","enter-active-class":"press-enter-active-class","leave-active-class":"press-leave-active-class","leave-to-class":"press-leave-to-class"},null,8,["show"]))])}const G=C(S,[["render",b]]);export{G as default};
