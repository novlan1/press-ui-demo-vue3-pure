import{_ as n,o as t,c as a,a as o,F as i,i as l,x as d,w as _,t as u}from"./index-DU6LSpJC.js";const p={name:"PressScheduleTab",options:{virtualHost:!0},components:{},props:{current:{type:[Number,String],default:"",required:!1},list:{type:Array,default:()=>[],required:!1}},emits:["change"],data(){return{}},methods:{clickTab(s){this.$emit("change",s.key,s)}}},h={class:"press-sche-tab"},m={class:"press-sche-tab__box"},b=["onClick"];function f(s,k,r,y,v,c){return t(),a("div",h,[o("div",m,[(t(!0),a(i,null,l(r.list,e=>(t(),a("div",{key:e.key,class:d(["press-sche-tab__item",r.current==e.key?"press-sche-tab__item--active":""]),onClick:_(g=>c.clickTab(e),["stop"])},u(e.name),11,b))),128))])])}const S=n(p,[["render",f],["__scopeId","data-v-ad696a63"]]);export{S as P};