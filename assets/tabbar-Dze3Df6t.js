import{u as y}from"./utils-D0lA7q9W.js";import{g as P}from"./rect-CXQTALcu.js";import{d as k,a as B}from"./press-component-BmHMjgT0.js";import{P as S,C as I}from"./relation-Ce8eT7mn.js";import{j as v}from"./parent-map-CQhFZDpB.js";import{_ as C,o as f,c as p,a as h,i as _,n as N,m as b,d as x,r as g,b as F,F as T,f as i,l as t,C as n,t as c}from"./index-VLx2MJJu.js";import{P as z}from"./press-icon-plus-zKCOzNHP.js";import{P as w}from"./press-info-DLY6PURR.js";import"./add-unit-DeNeB5nf.js";import"./validator-C_cgqHAw.js";import"./system-C5_2TD7H.js";import"./style-CpIyAjCl.js";const A={name:"PressTabbar",options:{...k,styleIsolation:"shared"},mixins:[S(v)],props:{active:{type:[String,Number],default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},fixed:{type:Boolean,default:!0},placeholder:{type:Boolean},border:{type:Boolean,default:!0},zIndex:{type:Number,default:1},safeAreaInsetBottom:{type:Boolean,default:!0},...B},emits:["change"],data(){return{height:50,utils:y}},watch:{active:{handler(){this.updateChildren()}},activeColor:{handler(){this.updateChildren()}},inactiveColor:{handler(){this.updateChildren()}},fixed:{handler(){this.setHeight()}},placeholder:{handler(){this.setHeight()}}},created(){this.children=[]},methods:{updateChildren(){const{children:e}=this;!Array.isArray(e)||!e.length||e.forEach(r=>r.updateFromParent())},setHeight(){!this.fixed||!this.placeholder||this.$nextTick(()=>{P(this,".press-tabbar").then(e=>{this.height=e.height})})}}};function E(e,r,a,u,o,l){return f(),p("div",null,[h("div",{class:N([a.border?"press-hairline--top-bottom":"",o.utils.bem2("tabbar",{fixed:a.fixed,safe:a.safeAreaInsetBottom}),e.customClass]),style:b(a.zIndex?"z-index: "+a.zIndex:"")},[_(e.$slots,"default",{},void 0,!0)],6),a.fixed&&a.placeholder?(f(),p("div",{key:0,style:b("height: "+o.height+"px;")},null,4)):x("",!0)])}const D=C(A,[["render",E],["__scopeId","data-v-37ba9455"]]),O={name:"PressTabbarItem",options:{...k,styleIsolation:"shared"},components:{PressIconPlus:z,PressInfo:w},mixins:[I(v)],props:{info:{type:[String,Number],default:""},name:{type:[String,Number],default:""},icon:{type:String,default:""},dot:Boolean,iconPrefix:{type:String,default:"press-icon-plus"},...B},emits:["click"],data(){return{utils:y,active:!1,activeColor:"",inactiveColor:""}},mounted(){this.updateFromParent()},methods:{setData(e){Object.keys(e).forEach(r=>{this[r]=e[r]})},onClick(){const e=this[v];if(e){const r=e.children.indexOf(this),a=this.name||r;a!==this.active&&e.$emit("change",a)}this.$emit("click")},updateFromParent(){const e=this[v];if(!e)return;const r=e.children.indexOf(this),a=e,u=(this.name||r)===a.active,o={};u!==this.active&&(o.active=u),a.activeColor!==this.activeColor&&(o.activeColor=a.activeColor),a.inactiveColor!==this.inactiveColor&&(o.inactiveColor=a.inactiveColor),Object.keys(o).length>0&&this.setData(o)}}},V={class:"press-tabbar-item-index"},j={class:"press-tabbar-item__icon"},H={class:"press-tabbar-item__text"};function M(e,r,a,u,o,l){const s=g("press-icon-plus"),d=g("press-info");return f(),p("div",V,[h("div",{class:N([o.utils.bem2("tabbar-item",{active:o.active}),e.customClass]),style:b("color: "+(o.active?o.activeColor:o.inactiveColor)),onClick:r[0]||(r[0]=(...m)=>l.onClick&&l.onClick(...m))},[h("div",j,[a.icon?(f(),F(s,{key:0,name:a.icon,"class-prefix":a.iconPrefix,"custom-class":"press-tabbar-item__icon__inner"},null,8,["name","class-prefix"])):(f(),p(T,{key:1},[o.active?_(e.$slots,"icon-active",{key:0},void 0,!0):_(e.$slots,"icon",{key:1},void 0,!0)],64)),i(d,{dot:a.dot,info:a.info,"custom-class":"press-tabbar-item__info"},null,8,["dot","info"])]),h("div",H,[_(e.$slots,"default",{},void 0,!0)])],6)])}const R=C(O,[["render",M],["__scopeId","data-v-cf58760b"]]),q={i18n:{"zh-CN":{badge:"徽标提示",customIcon:"自定义图标",customColor:"自定义颜色",matchByName:"通过名称匹配",switchEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event",selectTip:"You select "}},components:{PressTabbar:D,PressTabbarItem:R},data(){return{active:0,activeName:"home",sectionStyle:"margin: 0;",icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}},methods:{onChange(e){console.log("val",e),this.active=e},onChangeName(e){console.log("val",e),this.activeName=e}}},U={class:"demo-wrap"},Y=["src"],G=["src"];function J(e,r,a,u,o,l){const s=g("press-tabbar-item"),d=g("press-tabbar"),m=g("demo-block");return f(),p("div",U,[i(m,{title:e.t("basicUsage"),"section-style":o.sectionStyle},{default:t(()=>[i(d,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:t(()=>[i(s,{icon:"home-o"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"search"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"friends-o"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"setting-o"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1})]),_:1},8,["active","onChange"])]),_:1},8,["title","section-style"]),i(m,{title:e.t("matchByName"),"section-style":o.sectionStyle},{default:t(()=>[i(d,{active:o.activeName,fixed:!1,"safe-area-inset-bottom":!1,onChange:l.onChangeName},{default:t(()=>[i(s,{icon:"home-o",name:"home"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"search",name:"search"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"friends-o",name:"friends"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"setting-o",name:"setting"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1})]),_:1},8,["active","onChange"])]),_:1},8,["title","section-style"]),i(m,{title:e.t("badge"),"section-style":o.sectionStyle},{default:t(()=>[i(d,{active:o.active,fixed:!1,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:t(()=>[i(s,{icon:"home-o"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"search",dot:""},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"friends-o",info:"5"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"setting-o",info:"20"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1})]),_:1},8,["active","onChange"])]),_:1},8,["title","section-style"]),i(m,{title:e.t("customIcon"),"section-style":o.sectionStyle},{default:t(()=>[i(d,{fixed:!1,active:o.active,"safe-area-inset-bottom":!1,onChange:l.onChange},{default:t(()=>[i(s,{info:"3"},{icon:t(()=>[h("img",{src:o.icon.normal,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,Y)]),"icon-active":t(()=>[h("img",{src:o.icon.active,mode:"aspectFit",style:{width:"23px",height:"18px"}},null,8,G)]),default:t(()=>[n(" "+c(e.t("custom")),1)]),_:1}),i(s,{icon:"search"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1}),i(s,{icon:"setting-o"},{default:t(()=>[n(c(e.t("tag")),1)]),_:1})]),_:1},8,["active","onChange"])]),_:1},8,["title","section-style"]),i(m,{title:e.t("customColor"),"section-style":o.sectionStyle},{default:t(()=>[i(d,{active:o.active,fixed:!1,"active-color":"#07c160","inactive-color":"#000","safe-area-inset-bottom":!1,onChange:l.onChange},{default:t(()=>[i(s,{icon:"home-o"},{default:t(()=>[n(c(e.t("tag"))+"A ",1)]),_:1}),i(s,{icon:"search"},{default:t(()=>[n(c(e.t("tag"))+"B ",1)]),_:1}),i(s,{icon:"friends-o"},{default:t(()=>[n(c(e.t("tag"))+"C ",1)]),_:1}),i(s,{icon:"setting-o"},{default:t(()=>[n(c(e.t("tag"))+"D ",1)]),_:1})]),_:1},8,["active","onChange"])]),_:1},8,["title","section-style"])])}const se=C(q,[["render",J]]);export{se as default};
