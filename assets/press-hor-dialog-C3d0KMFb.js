import{g as n}from"./act-bem-hi9TDZSH.js";import{_ as d,o as r,c as o,a as s,x as e,t as m,d as u,y as g,v as h}from"./index-DU6LSpJC.js";const p={"hor-dialog":"tip-match-container",mask:"tip-match-mask",border:"tip-match-border",content:"tip-match-content",header:"tip-match-header",title:"tip-match-title",close:"tip-match-close"};function C(a,l){return n(a,p,l)}const f={name:"PressHorDialog",components:{},props:{popupWith:{type:String,default:"5.6"},title:{type:String,default:""},isShowClose:{type:Boolean,default:!0}},options:{virtualHost:!0},emits:["close"],data(){return{}},methods:{close(){this.$emit("close")},getActClass(...a){return C(!1,a)}}};function A(a,l,c,v,_,t){return r(),o("div",{class:e([t.getActClass("hor-dialog")])},[s("div",{class:e([t.getActClass("mask")])},null,2),s("div",{class:e([t.getActClass("border")]),style:h({width:`${c.popupWith}rem`})},[s("div",{class:e([t.getActClass("content")])},[s("div",{class:e([t.getActClass("header")])},[s("div",{class:e([t.getActClass("title")])},[s("p",null,m(c.title),1)],2),c.isShowClose?(r(),o("div",{key:0,class:e([t.getActClass("close")]),onClick:l[0]||(l[0]=(...i)=>t.close&&t.close(...i))},null,2)):u("",!0)],2),g(a.$slots,"default",{},void 0,!0)],2)],6)],2)}const k=d(f,[["render",A],["__scopeId","data-v-89bb8120"]]);export{k as P};