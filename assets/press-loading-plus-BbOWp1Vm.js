import{s as u,u as m}from"./utils-Do31p4kb.js";import{a as o}from"./add-unit-Df5pRFBE.js";import{d as f,a as S}from"./press-component-BYCAM0Tw.js";import{_,o as a,c as n,a as i,x as d,v as l,F as g,i as x,d as z,y as h}from"./index-DU6LSpJC.js";function v(e){return u({color:e.color,width:o(e.size),height:o(e.size)})}function P(e){return u({"font-size":o(e.textSize)})}const c={spinnerStyle:v,textStyle:P},C={name:"PressLoadingPlus",options:{...f},props:{...S,customStyle:{type:String,default:""},color:{type:String,default:""},vertical:{type:Boolean,default:!1},type:{type:String,default:"circular"},size:{type:String,default:""},textSize:{type:String,default:""}},emits:[],data(){return{array12:Array.from({length:12})}},computed:{loadingClass(){const{vertical:e,customClass:t}=this;return`${t} ${m.bem2("loading",{vertical:e})}`},spinnerStyle(){const{color:e,size:t}=this;return c.spinnerStyle({color:e,size:t})},textStyle(){const{textSize:e}=this;return c.textStyle({textSize:e})}}},k={class:"press-loading-index"};function B(e,t,s,L,p,r){return a(),n("div",k,[i("div",{class:d(r.loadingClass),style:l(s.customStyle)},[i("div",{class:d("press-loading__spinner press-loading__spinner--"+s.type),style:l(r.spinnerStyle)},[s.type==="spinner"?(a(!0),n(g,{key:0},x(p.array12,(F,y)=>(a(),n("div",{key:y,class:"press-loading__dot"}))),128)):z("",!0)],6),i("div",{class:"press-loading__text",style:l(r.textStyle)},[h(e.$slots,"default",{},void 0,!0)],4)],6)])}const A=_(C,[["render",B],["__scopeId","data-v-2c5a7395"]]);export{A as P};