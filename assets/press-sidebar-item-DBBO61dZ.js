import{_ as m,v as u,x as f,o as n,c as d,a as o,h,n as b,af as p,E as c,r as C,b as g,d as k,t as y}from"./index-C8vugXWi.js";import{P as A,C as P}from"./relation-Ce8eT7mn.js";import{i as l}from"./parent-map-_1jD1UtF.js";const S={name:"PressSidebar",options:{...u,styleIsolation:"shared"},mixins:[A(l)],props:{activeKey:{type:Number,default:0},...f},watch:{activeKey:{handler(e){this.setActive(e)}}},beforeCreate(){this.currentActive=-1},created(){this.children=[]},mounted(){this.setActive(this.activeKey)},methods:{setActive(e){const{children:s,currentActive:t}=this;if(!s.length)return Promise.resolve();this.currentActive=e;const i=[];return t!==e&&s[t]&&i.push(s[t].setActive(!1)),s[e]&&i.push(s[e].setActive(!0)),Promise.all(i)}}},x={class:"press-sidebar-index"};function I(e,s,t,i,r,a){return n(),d("div",x,[o("div",{class:b(["press-sidebar",e.customClass])},[h(e.$slots,"default",{},void 0,!0)],2)])}const V=m(S,[["render",I],["__scopeId","data-v-e3a62581"]]),B={name:"PressSidebarItem",options:{...u,styleIsolation:"shared"},components:{PressInfo:p},mixins:[P(l)],props:{dot:Boolean,badge:{type:[String,Number],default:""},info:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,...f,activeClass:{type:String,default:""},disabledClass:{type:String,default:""}},emits:["click","change"],data(){return{utils:c,selected:!1}},computed:{sidebarItemClass(){const{selected:e,disabled:s,customClass:t,activeClass:i,disabledClass:r}=this;return`${c.bem2("sidebar-item",{selected:e,disabled:s})} ${e?i:""} ${s?r:""} ${t}`}},mounted(){},methods:{onClick(){const e=this[l];if(!e||this.disabled)return;const s=e.children.indexOf(this);e.setActive(s).then(()=>{this.$emit("click",s),e.$emit("change",s)})},setActive(e){this.selected=e}}},$={class:"press-sidebar-item-index"},N={class:"press-sidebar-item__text"},E={key:1};function D(e,s,t,i,r,a){const _=C("press-info");return n(),d("div",$,[o("div",{class:b(a.sidebarItemClass),"hover-class":"press-sidebar-item--hover","hover-stay-time":"70",onClick:s[0]||(s[0]=(...v)=>a.onClick&&a.onClick(...v))},[o("div",N,[t.badge!=null||t.info!==null||t.dot?(n(),g(_,{key:0,dot:t.dot,info:t.badge!=null?t.badge:t.info},null,8,["dot","info"])):k("",!0),t.title?(n(),d("div",E,y(t.title),1)):h(e.$slots,"title",{key:2},void 0,!0)])],2)])}const w=m(B,[["render",D],["__scopeId","data-v-08558cdb"]]);export{V as P,w as a};