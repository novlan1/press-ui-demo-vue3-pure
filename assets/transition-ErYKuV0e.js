import{P as w}from"./press-cell-BLTCMYRJ.js";import{P as y}from"./press-transition-paiHDwmk.js";import{_ as C,o as n,c as a,F as u,q as d,b as r,r as c,k as F}from"./index-C8vugXWi.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";import"./system-Dv-dV8xN.js";let _=null;const h=s=>s.toLowerCase().replace(/\s+/,"-"),S={components:{PressCell:w,PressTransition:y},data(){const s=[{title:"Fade",list:["Fade","Fade Up","Fade Down","Fade Left","Fade Right"]},{title:"Slide",list:["Slide Up","Slide Down","Slide Left","Slide Right"]},{title:"Custom",list:["Custom"]}],o=s.reduce((e,i)=>e.concat(i.list),[]);return{customStyle:"",curTransitionType:"fade",transitionDemoList:s,options:o.reduce((e,i)=>{const t=h(i);return e[t]=!1,e},{}),showCustom:!1}},methods:{onShowTransition(s){const o=h(s);this.curTransitionType=o,Object.keys(this.options).forEach(e=>{this.options[e]=!1}),setTimeout(()=>{this.options[o]=!0,clearTimeout(_),_=setTimeout(()=>{this.options[o]=!1},o==="custom"?2e3:1e3)})}}},L={class:"demo-wrap"};function b(s,o,e,i,t,f){const T=c("press-cell"),k=c("demo-block"),m=c("press-transition");return n(),a("div",L,[(n(!0),a(u,null,d(t.transitionDemoList,(p,v)=>(n(),r(k,{key:v,title:p.title},{default:F(()=>[(n(!0),a(u,null,d(p.list,l=>(n(),r(T,{key:l,title:l,"is-link":"",onClick:x=>f.onShowTransition(l)},null,8,["title","onClick"]))),128))]),_:2},1032,["title"]))),128)),t.curTransitionType!=="custom"?(n(),r(m,{key:0,name:t.curTransitionType,show:t.options[t.curTransitionType]||!1,duration:300,"custom-class":"block"},null,8,["name","show"])):(n(),r(m,{key:1,show:t.options.custom||!1,duration:{enter:1e3,leave:1e3},"custom-class":"block",name:"","enter-class":"press-enter-class","enter-active-class":"press-enter-active-class","leave-active-class":"press-leave-active-class","leave-to-class":"press-leave-to-class"},null,8,["show"]))])}const R=C(S,[["render",b]]);export{R as default};
