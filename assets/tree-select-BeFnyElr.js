import{P as g}from"./press-icon-plus-zKCOzNHP.js";import{P as k,a as A}from"./press-sidebar-item-DPxXdg7n.js";import{d as N,a as w}from"./press-component-BmHMjgT0.js";import{u as h}from"./utils-D0lA7q9W.js";import{_ as y,r as c,o as l,c as r,f as o,l as m,F as I,B as b,b as C,i as P,n as f,C as D,t as M,d as B,m as G}from"./index-VLx2MJJu.js";import"./style-CpIyAjCl.js";import"./add-unit-DeNeB5nf.js";import"./validator-C_cgqHAw.js";import"./press-info-DLY6PURR.js";import"./relation-Ce8eT7mn.js";import"./parent-map-CQhFZDpB.js";function _(e,t){return Array.isArray(e)?e.indexOf(t)>-1:e===t}const z={name:"PressTreeSelect",options:{...N,styleIsolation:"shared"},components:{PressIconPlus:g,PressSidebar:k,PressSidebarItem:A},props:{items:{type:Array,default:()=>[]},activeId:{type:[Number,String,null,Array],default:""},mainActiveIndex:{type:[Number,String,Array,null],default:0},height:{type:[Number,String],default:300},max:{type:Number,default:1/0},selectedIcon:{type:String,default:"success"},mainItemClass:{type:String,default:""},mainActiveClass:{type:String,default:""},mainDisabledClass:{type:String,default:""},contentItemClass:{type:String,default:""},contentActiveClass:{type:String,default:""},contentDisabledClass:{type:String,default:""},...w},emits:["click-item","click-nav"],data(){return{subItems:[],utils:h,isActive:_}},computed:{selectedIconClass(){return"press-tree-select__selected"},selectedIconCustomClass(){return""}},watch:{items:{handler(){this.updateSubItems()}},mainActiveIndex:{handler(){this.updateSubItems()}}},mounted(){this.updateSubItems()},methods:{treeSelectItemClass(e){const{activeId:t,contentItemClass:s,contentActiveClass:d,contentDisabledClass:a}=this;return`press-ellipsis ${s} ${h.bem2("tree-select__item",{active:_(t,e.id),disabled:e.disabled})} ${_(t,e.id)?d:""} ${e.disabled?a:""}`},onSelectItem(e){const t=Array.isArray(this.activeId),s=t&&this.activeId.length>=this.max,d=t?this.activeId.indexOf(e.id)>-1:this.activeId===e.id;!e.disabled&&(!s||d)&&this.$emit("click-item",e)},onClickNav(e){this.items[e].disabled||this.$emit("click-nav",+e)},updateSubItems(){const{items:e,mainActiveIndex:t}=this,{children:s=[]}=e[t]||{};this.subItems=s}}},O=["onClick"];function T(e,t,s,d,a,n){const u=c("press-sidebar-item"),p=c("press-sidebar"),v=c("scroll-view"),S=c("press-icon-plus");return l(),r("div",{class:"press-tree-select",style:G("height: "+a.utils.addUnit(s.height))},[o(v,{"scroll-y":"",class:"press-tree-select__nav"},{default:m(()=>[o(p,{"active-key":s.mainActiveIndex,"custom-class":"press-tree-select__nav__inner",onChange:n.onClickNav},{default:m(()=>[(l(!0),r(I,null,b(s.items,(i,x)=>(l(),C(u,{key:x,"custom-class":s.mainItemClass,"active-class":s.mainActiveClass,"disabled-class":s.mainDisabledClass,badge:i.badge,dot:i.dot,title:i.text,disabled:i.disabled},null,8,["custom-class","active-class","disabled-class","badge","dot","title","disabled"]))),128))]),_:1},8,["active-key","onChange"])]),_:1}),o(v,{"scroll-y":"",class:"press-tree-select__content"},{default:m(()=>[P(e.$slots,"content",{},void 0,!0),(l(!0),r(I,null,b(a.subItems,i=>(l(),r("div",{key:i.id,class:f([n.treeSelectItemClass(i)]),onClick:x=>n.onSelectItem(i)},[D(M(i.text)+" ",1),a.isActive(s.activeId,i.id)?(l(),C(S,{key:0,name:s.selectedIcon,size:"16px",class:f([n.selectedIconClass]),"custom-class":n.selectedIconCustomClass},null,8,["name","class","custom-class"])):B("",!0)],10,O))),128))]),_:3})],4)}const U=y(z,[["render",T],["__scopeId","data-v-822904a7"]]),F=[{text:"浙江",children:[{text:"杭州",id:1},{text:"温州",id:2},{text:"宁波",id:3,disabled:!0},{text:"义乌",id:4}]},{text:"江苏",children:[{text:"南京",id:5},{text:"无锡",id:6},{text:"徐州",id:7},{text:"苏州",id:8}]},{text:"福建",disabled:!0,children:[{text:"泉州",id:9},{text:"厦门",id:10}]}],V=[{text:"Group 1",children:[{text:"Delaware",id:1},{text:"Florida",id:2},{text:"Georqia",id:3,disabled:!0},{text:"Indiana",id:4}]},{text:"Group 2",children:[{text:"Alabama",id:5},{text:"Kansas",id:6},{text:"Louisiana",id:7},{text:"Texas",id:8}]},{text:"Group 3",disabled:!0,children:[{text:"Alabama",id:9},{text:"Kansas",id:10}]}],K={i18n:{"zh-CN":{showBadge:"徽标提示",radioMode:"单选模式",multipleMode:"多选模式",customContent:"自定义内容",data:F,dataSimple:[{text:"分组 1"},{text:"分组 2"}]},"en-US":{showBadge:"Show Badge",radioMode:"Radio Mode",multipleMode:"Multiple Mode",customContent:"Custom Content",data:V,dataSimple:[{text:"Group 1"},{text:"Group 2"}]}},components:{PressTreeSelect:U},data(){return{mainActiveIndex:1,activeId:null,sectionStyle:"margin: 0;"}},computed:{items(){return this.t("data")}},methods:{onClickNav(e){this.mainActiveIndex=e||0},onClickItem(e){console.log("[detail]",e);const t=this.activeId===e.id?null:e.id;this.activeId=t}}},q={class:"demo-wrap"};function E(e,t,s,d,a,n){const u=c("press-tree-select"),p=c("demo-block");return l(),r("div",q,[o(p,{title:e.t("basicUsage"),"section-style":a.sectionStyle},{default:m(()=>[o(u,{items:n.items,"main-active-index":a.mainActiveIndex,"active-id":a.activeId,onClickNav:n.onClickNav,onClickItem:n.onClickItem},null,8,["items","main-active-index","active-id","onClickNav","onClickItem"])]),_:1},8,["title","section-style"])])}const ee=y(K,[["render",E]]);export{ee as default};