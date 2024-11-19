import{P}from"./press-cell-D0hTGeyK.js";import{y as E,v as k,x as N,G as b,_ as v,r as p,o as _,c as S,e as a,k as l,h as f,a as g,n as C,l as B,A as w,H as d,t as c}from"./index-BIszYdsF.js";import{g as I}from"./rect-B0viD194.js";import{C as T,P as $}from"./relation-Ce8eT7mn.js";import{P as u}from"./parent-map-_1jD1UtF.js";import"./link-CGNjbsVw.js";import"./event-BQiVdx1g.js";function h({height:e,duration:n}){return[`height: ${e};`,`transition: height ${n}ms ease-in-out 0ms, top ${n}ms ease-in-out 0ms, -webkit-transform ${n}ms ease-in-out 0ms, transform ${n}ms ease-in-out 0ms;`,"transform-origin: 50% 50% 0px;"].join("")}function O(e,n,t,o){if(n){if(o===0)e.animationStyle=h({height:"auto",duration:0});else{const i=t?300:1;e.animationStyle=h({height:`${o}px`,duration:i}),setTimeout(()=>{e.animationStyle=h({height:"auto",duration:0})},i)}return}const s=1;e.animationStyle=h({height:`${o}px`,duration:s}),E(()=>{e.animationStyle=h({height:0,duration:300})})}function x(e,n,t){I(e,".press-collapse-item__content").then(o=>o.height).then(o=>{O(e,n,t,o)})}const z={name:"PressCollapseItem",options:{...k,styleIsolation:"shared"},components:{PressCell:P},mixins:[T(u)],props:{size:{type:String,default:""},name:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1},border:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0},titleClass:{type:String,default:""},contentClass:{type:String,default:""},...N},emits:[],data(){const{defaultExpandAll:e}=this[u];return{expanded:!!e,animation:{},mounted:!1,animationStyle:e?"height: auto;":"height: 0;"}},computed:{collapseItemClass(){const{disabled:e,expanded:n}=this;return b.bem2("collapse-item__title",{disabled:e,expanded:n})},collapseItemCustomClass(){let e="";return e=this.collapseItemClass,e},wrapperClass(){return b.bem2("collapse-item__wrapper")}},mounted(){this.updateExpanded(),this.mounted=!0},methods:{updateExpanded(){if(!this[u])return;const{value:e,accordion:n}=this[u],{children:t=[]}=this[u],{name:o}=this,s=t.indexOf(this),i=o??s,r=n?e===i:(e||[]).some(m=>m===i);r!==this.expanded&&x(this,r,this.mounted),this.expanded=r},onClick(){if(this.disabled)return;const{name:e,expanded:n}=this,t=this[u].children.indexOf(this),o=e??t;this[u].switch(o,!n)}}};function L(e,n,t,o,s,i){const r=p("press-cell");return _(),S("div",{class:C(e.customClass+" press-collapse-item "+(e.index!==0?"press-hairline--top":""))},[a(r,{size:t.size,title:t.title,"title-class":t.titleClass,icon:t.icon,value:t.value,label:t.label,"is-link":t.isLink,clickable:t.clickable,border:t.border&&s.expanded,"custom-class":i.collapseItemCustomClass,"hover-class":"press-cell--hover",center:"",onClick:i.onClick},{title:l(()=>[f(e.$slots,"title",{},void 0,!0)]),"right-icon":l(()=>[f(e.$slots,"right-icon",{},void 0,!0)]),default:l(()=>[f(e.$slots,"value",{},void 0,!0)]),_:3},8,["size","title","title-class","icon","value","label","is-link","clickable","border","custom-class","onClick"]),g("div",{class:C(i.wrapperClass),style:B(s.animationStyle)},[g("div",{class:C(["press-collapse-item__content",t.contentClass])},[f(e.$slots,"default",{},void 0,!0)],2)],6)],2)}const D=v(z,[["render",L],["__scopeId","data-v-6da9331d"]]),G={name:"PressCollapse",options:{...k},mixins:[$(u)],props:{value:{type:[Array,String],default:()=>[]},accordion:{type:Boolean,default:!1},border:{type:Boolean,default:!0},defaultExpandAll:{type:Boolean,default:!1},...N},watch:{value:{handler(){this.updateExpanded()}},accordion:{handler(){this.updateExpanded()}}},created(){this.children=[]},methods:{updateExpanded(){this.children.forEach(e=>{e.updateExpanded()})},switch(e,n){const{accordion:t,value:o}=this,s=e;t?e=n?e:"":e=n?(o||[]).concat(e):(o||[]).filter(i=>i!==e),n?this.$emit("open",s):this.$emit("close",s),this.$emit("change",e),this.$emit("input",e)}}};function V(e,n,t,o,s,i){return _(),S("div",{class:C(e.customClass+" press-collapse "+(t.border?"press-hairline--top-bottom":""))},[f(e.$slots,"default")],2)}const q=v(G,[["render",V]]),M={i18n:{"zh-CN":{accordion:"手风琴",titleSlot:"自定义标题内容",text:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{accordion:"Accordion",titleSlot:"Custom title",text:"Content"}},components:{PressCollapseItem:D,PressCollapse:q,PressIconPlus:w},data(){return{activeNames:["1"],activeNames2:"1",activeNames3:["1"],activeNamesTitle:["1"],sectionStyle:"margin: 0;",headerStyle:"background: #f7f8fa;"}},methods:{onChange(e){console.log("onChange.value: ",e),this.activeNames=e},onOpen(e){this.onGTip(`open: ${e}`),console.log("onOpen.value: ",e)},onClose(e){this.onGTip(`close: ${e}`),console.log("onClose.value: ",e)},onChangeAccordion(e){this.activeNames2=e},onChangeDisabled(e){this.activeNames3=e},onChangeTitle(e){this.activeNamesTitle=e}}},R={class:"demo-wrap demo-wrap--gray"};function U(e,n,t,o,s,i){const r=p("press-collapse-item"),m=p("press-collapse"),y=p("demo-block"),A=p("press-icon-plus");return _(),S("div",R,[a(y,{title:e.t("basicUsage"),"section-style":s.sectionStyle,"header-style":s.headerStyle},{default:l(()=>[a(m,{value:s.activeNames,onChange:i.onChange,onOpen:i.onOpen,onClose:i.onClose},{default:l(()=>[a(r,{title:`${e.t("title")} 1`,name:"1"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} 2`,name:"2"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} 3`,name:"3"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"])]),_:1},8,["value","onChange","onOpen","onClose"])]),_:1},8,["title","section-style","header-style"]),a(y,{title:e.t("accordion"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:l(()=>[a(m,{value:s.activeNames2,accordion:"",onChange:i.onChangeAccordion},{default:l(()=>[a(r,{title:`${e.t("title")} A`,name:"1"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} B`,name:"2"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} C`,name:"3"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"])]),_:1},8,["value","onChange"])]),_:1},8,["title","header-style","section-style"]),a(y,{title:e.t("disabled"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:l(()=>[a(m,{value:s.activeNames3,accordion:"",onChange:i.onChangeDisabled},{default:l(()=>[a(r,{title:`${e.t("title")} X`,name:"1"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} Y`,disabled:"",name:"2"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"]),a(r,{title:`${e.t("title")} Z`,name:"3",disabled:""},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"])]),_:1},8,["value","onChange"])]),_:1},8,["title","header-style","section-style"]),a(y,{title:e.t("titleSlot"),"section-style":s.sectionStyle,"header-style":s.headerStyle},{default:l(()=>[a(m,{value:s.activeNamesTitle,onChange:i.onChangeTitle},{default:l(()=>[a(r,{name:"1"},{title:l(()=>[g("div",null,[d(c(e.t("title"))+" 1 ",1),a(A,{name:"question-o"})])]),default:l(()=>[d(" "+c(e.t("text")),1)]),_:1}),a(r,{title:`${e.t("title")} 2`,name:"2",icon:"shop-o"},{default:l(()=>[d(c(e.t("text")),1)]),_:1},8,["title"])]),_:1},8,["value","onChange"])]),_:1},8,["title","section-style","header-style"])])}const K=v(M,[["render",U]]);export{K as default};
