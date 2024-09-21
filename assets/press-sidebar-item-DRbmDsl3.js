import{d as m,a as u}from"./press-component-D9D_j5DA.js";import{P as v,C}from"./relation-Ce8eT7mn.js";import{i as o}from"./parent-map-_1jD1UtF.js";import{_ as f,o as r,c as d,a as l,i as h,n as b,r as g,b as k,d as y,t as P}from"./index-DfxNb_pP.js";import{P as A}from"./press-info-BsYXiOQL.js";import{u as c}from"./utils-C2tViYFs.js";const S={name:"PressSidebar",options:{...m,styleIsolation:"shared"},mixins:[v(o)],props:{activeKey:{type:Number,default:0},...u},watch:{activeKey:{handler(e){this.setActive(e)}}},beforeCreate(){this.currentActive=-1},created(){this.children=[]},mounted(){this.setActive(this.activeKey)},methods:{setActive(e){const{children:t,currentActive:s}=this;if(!t.length)return Promise.resolve();this.currentActive=e;const i=[];return s!==e&&t[s]&&i.push(t[s].setActive(!1)),t[e]&&i.push(t[e].setActive(!0)),Promise.all(i)}}},x={class:"press-sidebar-index"};function I(e,t,s,i,n,a){return r(),d("div",x,[l("div",{class:b(["press-sidebar",e.customClass])},[h(e.$slots,"default",{},void 0,!0)],2)])}const T=f(S,[["render",I],["__scopeId","data-v-e3a62581"]]),B={name:"PressSidebarItem",options:{...m,styleIsolation:"shared"},components:{PressInfo:A},mixins:[C(o)],props:{dot:Boolean,badge:{type:[String,Number],default:""},info:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,...u,activeClass:{type:String,default:""},disabledClass:{type:String,default:""}},emits:["click","change"],data(){return{utils:c,selected:!1}},computed:{sidebarItemClass(){const{selected:e,disabled:t,customClass:s,activeClass:i,disabledClass:n}=this;return`${c.bem2("sidebar-item",{selected:e,disabled:t})} ${e?i:""} ${t?n:""} ${s}`}},mounted(){},methods:{onClick(){const e=this[o];if(!e||this.disabled)return;const t=e.children.indexOf(this);e.setActive(t).then(()=>{this.$emit("click",t),e.$emit("change",t)})},setActive(e){this.selected=e}}},$={class:"press-sidebar-item-index"},N={class:"press-sidebar-item__text"},E={key:1};function D(e,t,s,i,n,a){const _=g("press-info");return r(),d("div",$,[l("div",{class:b(a.sidebarItemClass),"hover-class":"press-sidebar-item--hover","hover-stay-time":"70",onClick:t[0]||(t[0]=(...p)=>a.onClick&&a.onClick(...p))},[l("div",N,[s.badge!=null||s.info!==null||s.dot?(r(),k(_,{key:0,dot:s.dot,info:s.badge!=null?s.badge:s.info},null,8,["dot","info"])):y("",!0),s.title?(r(),d("div",E,P(s.title),1)):h(e.$slots,"title",{key:2},void 0,!0)])],2)])}const j=f(B,[["render",D],["__scopeId","data-v-08558cdb"]]);export{T as P,j as a};