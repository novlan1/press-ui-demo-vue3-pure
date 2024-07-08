import{a as P}from"./unit-BWZd4xK-.js";import{a as N,g as B}from"./rect-ZZRvyvMD.js";import{u as w}from"./utils-Do31p4kb.js";import{d as O,a as D}from"./press-component-BYCAM0Tw.js";import{P as L,C as M}from"./relation-Cl7c7lz0.js";import{b as m}from"./parent-map-CSroF5oj.js";import{_ as b,o as h,c as v,a as f,F as A,i as E,x as y,v as g,t as S,y as V,r as u,f as o,n as r,b as T,d as x,u as W}from"./index-DU6LSpJC.js";import{P as z}from"./press-popup-plus-3bdPmkCh.js";import{P as I}from"./press-cell-CpEJn8Fu.js";import{P as F}from"./press-icon-plus-B9pxPV2T.js";import{P as R}from"./press-switch-O4hJM1tR.js";import{P as U}from"./press-button-CU9PqmxY.js";import"./validator-CMi1mmGD.js";import"./scroll-DZ_Dh06R.js";import"./system-BAdrsxg_.js";import"./add-unit-Df5pRFBE.js";import"./press-overlay-D3LjkYjh.js";import"./press-transition-DzNVel1u.js";import"./link-Ds6ljOst.js";import"./event-DUjdombs.js";import"./support-passive-CNRHRm4O.js";import"./press-info-Cexnh41C.js";import"./press-loading-plus-BbOWp1Vm.js";import"./press-loading-Cmnq0S8a.js";import"./button-BaKXjqxg.js";function H(t){if(t.title)return t.title;const l=t.options.filter(a=>a.value===t.value);return l.length?l[0].text:""}const Y={displayTitle:H};let _=[];const j={name:"PressDropdownMenu",options:{...O,styleIsolation:"shared"},mixins:[L(m)],props:{activeColor:{type:String,default:""},overlay:{type:Boolean,default:!0},zIndex:{type:Number,default:10},duration:{type:Number,default:200},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},...D},emits:[],data(){return{itemListData:[],utils:w,computed:Y}},watch:{activeColor:{handler(){this.updateChildrenData()}},overlay:{handler(){this.updateChildrenData()}},duration:{handler(){this.updateChildrenData()}},direction:{handler(){this.updateChildrenData()}},closeOnClickOverlay:{handler(){this.updateChildrenData()}}},beforeCreate(){_.push(this)},created(){const{windowHeight:t}=N();this.windowHeight=t,this.children=[]},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){_=_.filter(t=>t!==this)},updateItemListData(){this.itemListData=this.children.map(t=>{const{titleClass:l,showPopup:s,disabled:a,innerValue:e,title:n,text:i,options:c}=t;return{titleClass:l,showPopup:s,disabled:a,value:e,title:n,text:i,options:c}})},updateChildrenData(){this.children.forEach(t=>{t.updateDataFromParent()})},toggleItem(t){this.children.forEach((l,s)=>{const{showPopup:a}=l;s===t?l.toggle():a&&l.toggle(!1,{immediate:!0})})},close(){this.children.forEach(t=>{t.toggle(!1,{immediate:!0})})},getChildWrapperStyle(){const{zIndex:t,direction:l}=this;return B(this,".press-dropdown-menu").then(s=>{const{top:a=0,bottom:e=0}=s,n=l==="down"?e:this.windowHeight-a;let i=`z-index: ${t};`;return l==="down"?i+=`top: ${P(n)};`:i+=`bottom: ${P(n)};`,i})},onTitleTap(t){this.children[t].disabled||(_.forEach(s=>{s&&s.closeOnClickOutside&&s!==this&&s.close()}),this.toggleItem(t))}}},q=["onClick"],G={class:"press-ellipsis"};function J(t,l,s,a,e,n){return h(),v("div",null,[f("div",{class:y(["press-dropdown-menu press-dropdown-menu--top-bottom",t.customClass])},[(h(!0),v(A,null,E(e.itemListData,(i,c)=>(h(),v("div",{key:c,class:y(e.utils.bem2("dropdown-menu__item",{disabled:i.disabled})),onClick:d=>n.onTitleTap(c)},[f("div",{class:y(i.titleClass+" "+e.utils.bem2("dropdown-menu__title",{active:i.showPopup,down:i.showPopup===(s.direction==="down")})),style:g(i.showPopup?"color:"+s.activeColor:"")},[f("div",G,S(e.computed.displayTitle(i)),1)],6)],10,q))),128)),V(t.$slots,"default",{},void 0,!0)],2)])}const K=b(j,[["render",J],["__scopeId","data-v-89442578"]]),Q={name:"PressDropdownItem",options:{...O,styleIsolation:"shared"},components:{PressPopup:z,PressCell:I,PressIconPlus:F},mixins:[M(m)],props:{value:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,titleClass:{type:String,default:""},options:{type:Array,default:()=>[]},popupStyle:{type:String,default:""},...D},emits:["open","opened","close","closed","change"],data(){return{transition:!0,showPopup:!1,showWrapper:!1,displayTitle:"",utils:w,innerValue:this.value,direction:"down",closeOnClickOverlay:!0,activeColor:"",duration:200,overlay:!0,wrapperStyle:""}},computed:{iconCustomClass(){return""}},watch:{value:{handler(t){this.innerValue=t,this.rerender()}},title:{handler(){this.rerender()}},titleClass:{handler(){this.rerender()}},options:{handler(){this.rerender()}}},mounted(){this.rerender(),this.updateDataFromParent()},methods:{rerender(){this.$nextTick(()=>{var t;(t=this[m])==null||t.updateItemListData()})},updateDataFromParent(){if(this[m]){const{overlay:t,duration:l,activeColor:s,closeOnClickOverlay:a,direction:e}=this[m];this.overlay=t,this.duration=l,this.activeColor=s,this.closeOnClickOverlay=a,this.direction=e}},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed"),this.showWrapper=!1},onOptionTap(t){const{value:l}=t,s=this.innerValue!==l;this.showPopup=!1,this.innerValue=l,this.$emit("close"),this.rerender(),s&&this.$emit("change",l)},toggle(t,l={}){var a;const{showPopup:s}=this;typeof t!="boolean"&&(t=!s),t!==s&&(this.transition=!l.immediate,this.showPopup=t,t?(a=this[m])==null||a.getChildWrapperStyle().then(e=>{this.wrapperStyle=e,this.showWrapper=!0,this.rerender()}):this.rerender())},getCellClass(t){return w.bem2("dropdown-item__option",{active:t.value===this.innerValue})},getCellCustomClass(t){return""}}};function X(t,l,s,a,e,n){const i=u("press-icon-plus"),c=u("press-cell"),d=u("press-popup");return e.showWrapper?(h(),v("div",{key:0,class:y(e.utils.bem2("dropdown-item",e.direction)),style:g(e.wrapperStyle)},[o(d,{show:e.showPopup,"custom-style":"position: absolute;"+s.popupStyle,"overlay-style":"position: absolute;",overlay:e.overlay,position:e.direction==="down"?"top":"bottom",duration:e.transition?e.duration:0,"close-on-click-overlay":e.closeOnClickOverlay,onEnter:n.onOpen,onLeave:n.onClose,onClose:n.toggle,onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:r(()=>[(h(!0),v(A,null,E(s.options,(p,C)=>(h(),T(c,{key:C,class:y([n.getCellClass(p)]),"custom-class":n.getCellCustomClass(p),clickable:"",icon:p.icon,onClick:k=>n.onOptionTap(p)},{title:r(()=>[f("div",{class:"press-dropdown-item__title",style:g(p.value===e.innerValue?"color:"+e.activeColor:"")},S(p.text),5)]),default:r(()=>[p.value===e.innerValue?(h(),T(i,{key:0,name:"success",class:"press-dropdown-item__icon","custom-class":n.iconCustomClass,color:e.activeColor},null,8,["custom-class","color"])):x("",!0)]),_:2},1032,["class","custom-class","icon","onClick"]))),128)),V(t.$slots,"default",{},void 0,!0)]),_:3},8,["show","custom-style","overlay","position","duration","close-on-click-overlay","onEnter","onLeave","onClose","onAfterEnter","onAfterLeave"])],6)):x("",!0)}const Z=b(Q,[["render",X],["__scopeId","data-v-6fa43186"]]),$={i18n:{"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}},options:{styleIsolation:"shared"},components:{PressDropdownMenu:K,PressDropdownItem:Z,PressSwitch:R,PressCell:I,PressButton:U},data(){return{option1:this.t("option1"),option2:this.t("option2"),value1:0,value2:"a",switchTitle1:this.t("switchTitle1"),switchTitle2:this.t("switchTitle2"),itemTitle:this.t("itemTitle"),switch1:!0,switch2:!0,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;"}},methods:{onConfirm(){this.$refs.item.toggle()},onSwitch1Change(t){console.log("onSwitch1Change.detail",t),this.switch1=t},onSwitch2Change(t){console.log("onSwitch2Change.detail",t),this.switch2=t}}},ee={class:"demo-wrap demo-wrap--gray"},te={style:{padding:"5px 16px"}};function oe(t,l,s,a,e,n){const i=u("press-dropdown-item"),c=u("press-dropdown-menu"),d=u("demo-block"),p=u("press-switch"),C=u("press-cell"),k=u("press-button");return h(),v("div",ee,[o(d,{title:t.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[o(c,null,{default:r(()=>[o(i,{value:e.value1,options:e.option1,"title-class":"demo-title"},null,8,["value","options"]),o(i,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),o(d,{title:t.t("customContent"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[o(c,null,{default:r(()=>[o(i,{value:e.value1,options:e.option1},null,8,["value","options"]),o(i,{id:"item",ref:"item",title:e.itemTitle},{default:r(()=>[o(C,{title:e.switchTitle1},{"right-icon":r(()=>[o(p,{size:"24px",style:{height:"26px"},checked:e.switch1,"active-color":"#ee0a24",onChange:n.onSwitch1Change},null,8,["checked","onChange"])]),_:1},8,["title"]),o(C,{title:e.switchTitle2},{"right-icon":r(()=>[o(p,{size:"24px",style:{height:"26px"},checked:e.switch2,"active-color":"#ee0a24",onChange:n.onSwitch2Change},null,8,["checked","onChange"])]),_:1},8,["title"]),f("div",te,[o(k,{type:"danger",block:"",round:"",onClick:n.onConfirm},{default:r(()=>[W(S(t.t("confirm")),1)]),_:1},8,["onClick"])])]),_:1},8,["title"])]),_:1})]),_:1},8,["title","header-style","section-style"]),o(d,{title:t.t("customActiveColor"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[o(c,{"active-color":"#1989fa"},{default:r(()=>[o(i,{value:e.value1,options:e.option1},null,8,["value","options"]),o(i,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),o(d,{title:t.t("expandDirection"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[o(c,{direction:"up"},{default:r(()=>[o(i,{value:e.value1,options:e.option1},null,8,["value","options"]),o(i,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),o(d,{title:t.t("disableMenu"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[o(c,null,{default:r(()=>[o(i,{value:e.value1,disabled:"",options:e.option1},null,8,["value","options"]),o(i,{value:e.value2,disabled:"",options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"])])}const Oe=b($,[["render",oe]]);export{Oe as default};