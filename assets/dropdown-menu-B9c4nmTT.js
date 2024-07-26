import{a as k}from"./unit-CwmdrPeK.js";import{a as N,g as B}from"./rect-7HbQQVQ8.js";import{u as _}from"./utils-6Uv3ickc.js";import{d as x,a as D}from"./press-component-Cv9kTz4A.js";import{P as L,C as M}from"./relation-Ce8eT7mn.js";import{a as m}from"./parent-map-_1jD1UtF.js";import{_ as b,o as h,c as f,a as v,F as A,y as E,n as y,m as g,t as S,i as V,r as u,f as s,l as r,b as P,d as O,A as W}from"./index-4prF5mFA.js";import{P as z}from"./press-popup-plus-CQuC1Xe7.js";import{P as I}from"./press-cell-DQI7GKjm.js";import{P as F}from"./press-icon-plus-BKnDNWlW.js";import{n as R}from"./add-unit-CSy-4COV.js";import{P as U}from"./press-switch-Cy8l3HrA.js";import{P as H}from"./press-button-BNvNLjda.js";import"./system-DmiJ0d78.js";import"./press-overlay-BJN1N_oh.js";import"./press-transition-CMc4Nm8g.js";import"./style-CpIyAjCl.js";import"./link-pPHzr9dz.js";import"./event-CZpnkkJH.js";import"./support-passive-CNRHRm4O.js";import"./press-info-zFc1oCW_.js";import"./press-loading-plus-BuhRayzR.js";import"./press-loading-wKaN170k.js";import"./button-Dky8tJDD.js";function Y(t){if(t.title)return t.title;const o=t.options.filter(a=>a.value===t.value);return o.length?o[0].text:""}const j={displayTitle:Y};let w=[];const q={name:"PressDropdownMenu",options:{...x,styleIsolation:"shared"},mixins:[L(m)],props:{activeColor:{type:String,default:""},overlay:{type:Boolean,default:!0},zIndex:{type:Number,default:10},duration:{type:Number,default:200},direction:{type:String,default:"down"},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0},...D},emits:[],data(){return{itemListData:[],utils:_,computed:j}},watch:{activeColor:{handler(){this.updateChildrenData()}},overlay:{handler(){this.updateChildrenData()}},duration:{handler(){this.updateChildrenData()}},direction:{handler(){this.updateChildrenData()}},closeOnClickOverlay:{handler(){this.updateChildrenData()}}},beforeCreate(){w.push(this)},created(){const{windowHeight:t,windowTop:o}=N();this.windowHeight=t,this.windowTop=o||0,this.children=[]},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){w=w.filter(t=>t!==this)},updateItemListData(){this.itemListData=this.children.map(t=>{const{titleClass:o,showPopup:i,disabled:a,innerValue:e,title:n,text:l,options:c}=t;return{titleClass:o,showPopup:i,disabled:a,value:e,title:n,text:l,options:c}})},updateChildrenData(){this.children.forEach(t=>{t.updateDataFromParent()})},toggleItem(t){this.children.forEach((o,i)=>{const{showPopup:a}=o;i===t?o.toggle():a&&o.toggle(!1,{immediate:!0})})},close(){this.children.forEach(t=>{t.toggle(!1,{immediate:!0})})},getChildWrapperStyle(){const{zIndex:t,direction:o}=this;return B(this,".press-dropdown-menu").then(i=>{const{top:a=0,bottom:e=0}=i,n=o==="down"?e:this.windowHeight-a+this.windowTop;let l=`z-index: ${t};`;return o==="down"?l+=`top: ${k(n)};`:l+=`bottom: ${k(n)};`,l})},onTitleTap(t){this.children[t].disabled||(w.forEach(i=>{i&&i.closeOnClickOutside&&i!==this&&i.close()}),this.toggleItem(t))}}},G=["onClick"],J={class:"press-ellipsis"};function K(t,o,i,a,e,n){return h(),f("div",null,[v("div",{class:y(["press-dropdown-menu press-dropdown-menu--top-bottom",t.customClass])},[(h(!0),f(A,null,E(e.itemListData,(l,c)=>(h(),f("div",{key:c,class:y(e.utils.bem2("dropdown-menu__item",{disabled:l.disabled})),onClick:d=>n.onTitleTap(c)},[v("div",{class:y(l.titleClass+" "+e.utils.bem2("dropdown-menu__title",{active:l.showPopup,down:l.showPopup===(i.direction==="down")})),style:g(l.showPopup?"color:"+i.activeColor:"")},[v("div",J,S(e.computed.displayTitle(l)),1)],6)],10,G))),128)),V(t.$slots,"default",{},void 0,!0)],2)])}const Q=b(q,[["render",K],["__scopeId","data-v-03b77c8e"]]),X={name:"PressDropdownItem",options:{...x,styleIsolation:"shared"},components:{PressPopup:z,PressCell:I,PressIconPlus:F},mixins:[M(m)],props:{value:{type:[String,Number],default:""},title:{type:String,default:""},disabled:Boolean,titleClass:{type:String,default:""},options:{type:Array,default:()=>[]},popupStyle:{type:String,default:""},...D},emits:["open","opened","close","closed","change"],data(){return{transition:!0,showPopup:!1,showWrapper:!1,displayTitle:"",utils:_,innerValue:this.value,direction:"down",closeOnClickOverlay:!0,activeColor:"",duration:200,overlay:!0,wrapperStyle:""}},computed:{iconCustomClass(){return""}},watch:{value:{handler(t){this.innerValue=t,this.rerender()}},title:{handler(){this.rerender()}},titleClass:{handler(){this.rerender()}},options:{handler(){this.rerender()}}},mounted(){this.rerender(),this.updateDataFromParent()},methods:{rerender(){R(()=>{var t;(t=this[m])==null||t.updateItemListData()})},updateDataFromParent(){if(this[m]){const{overlay:t,duration:o,activeColor:i,closeOnClickOverlay:a,direction:e}=this[m];this.overlay=t,this.duration=o,this.activeColor=i,this.closeOnClickOverlay=a,this.direction=e}},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed"),this.showWrapper=!1},onOptionTap(t){const{value:o}=t,i=this.innerValue!==o;this.showPopup=!1,this.innerValue=o,this.$emit("close"),this.rerender(),i&&this.$emit("change",o)},toggle(t,o={}){var a;const{showPopup:i}=this;typeof t!="boolean"&&(t=!i),t!==i&&(this.transition=!o.immediate,this.showPopup=t,t?(a=this[m])==null||a.getChildWrapperStyle().then(e=>{this.wrapperStyle=e,this.showWrapper=!0,this.rerender()}):this.rerender())},getCellClass(t){return _.bem2("dropdown-item__option",{active:t.value===this.innerValue})},getCellCustomClass(t){return""}}};function Z(t,o,i,a,e,n){const l=u("press-icon-plus"),c=u("press-cell"),d=u("press-popup");return e.showWrapper?(h(),f("div",{key:0,class:y(e.utils.bem2("dropdown-item",e.direction)),style:g(e.wrapperStyle)},[s(d,{show:e.showPopup,"custom-style":"position: absolute;"+i.popupStyle,"overlay-style":"position: absolute;",overlay:e.overlay,position:e.direction==="down"?"top":"bottom",duration:e.transition?e.duration:0,"close-on-click-overlay":e.closeOnClickOverlay,"safe-area-inset-bottom":e.direction==="down",onEnter:n.onOpen,onLeave:n.onClose,onClose:n.toggle,onAfterEnter:n.onOpened,onAfterLeave:n.onClosed},{default:r(()=>[(h(!0),f(A,null,E(i.options,(p,C)=>(h(),P(c,{key:C,class:y([n.getCellClass(p)]),"custom-class":n.getCellCustomClass(p),clickable:"",icon:p.icon,onClick:T=>n.onOptionTap(p)},{title:r(()=>[v("div",{class:"press-dropdown-item__title",style:g(p.value===e.innerValue?"color:"+e.activeColor:"")},S(p.text),5)]),default:r(()=>[p.value===e.innerValue?(h(),P(l,{key:0,name:"success",class:"press-dropdown-item__icon","custom-class":n.iconCustomClass,color:e.activeColor},null,8,["custom-class","color"])):O("",!0)]),_:2},1032,["class","custom-class","icon","onClick"]))),128)),V(t.$slots,"default",{},void 0,!0)]),_:3},8,["show","custom-style","overlay","position","duration","close-on-click-overlay","safe-area-inset-bottom","onEnter","onLeave","onClose","onAfterEnter","onAfterLeave"])],6)):O("",!0)}const $=b(X,[["render",Z],["__scopeId","data-v-ed38443e"]]),ee={i18n:{"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}},options:{styleIsolation:"shared"},components:{PressDropdownMenu:Q,PressDropdownItem:$,PressSwitch:U,PressCell:I,PressButton:H},data(){return{option1:this.t("option1"),option2:this.t("option2"),value1:0,value2:"a",switchTitle1:this.t("switchTitle1"),switchTitle2:this.t("switchTitle2"),itemTitle:this.t("itemTitle"),switch1:!0,switch2:!0,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;"}},methods:{onConfirm(){this.$refs.item.toggle()},onSwitch1Change(t){console.log("onSwitch1Change.detail",t),this.switch1=t},onSwitch2Change(t){console.log("onSwitch2Change.detail",t),this.switch2=t}}},te={class:"demo-wrap demo-wrap--gray"},oe={style:{padding:"5px 16px"}};function se(t,o,i,a,e,n){const l=u("press-dropdown-item"),c=u("press-dropdown-menu"),d=u("demo-block"),p=u("press-switch"),C=u("press-cell"),T=u("press-button");return h(),f("div",te,[s(d,{title:t.t("basicUsage"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[s(c,null,{default:r(()=>[s(l,{value:e.value1,options:e.option1,"title-class":"demo-title"},null,8,["value","options"]),s(l,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),s(d,{title:t.t("customContent"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[s(c,null,{default:r(()=>[s(l,{value:e.value1,options:e.option1},null,8,["value","options"]),s(l,{id:"item",ref:"item",title:e.itemTitle},{default:r(()=>[s(C,{title:e.switchTitle1},{"right-icon":r(()=>[s(p,{size:"24px",style:{height:"26px"},checked:e.switch1,"active-color":"#ee0a24",onChange:n.onSwitch1Change},null,8,["checked","onChange"])]),_:1},8,["title"]),s(C,{title:e.switchTitle2},{"right-icon":r(()=>[s(p,{size:"24px",style:{height:"26px"},checked:e.switch2,"active-color":"#ee0a24",onChange:n.onSwitch2Change},null,8,["checked","onChange"])]),_:1},8,["title"]),v("div",oe,[s(T,{type:"danger",block:"",round:"",onClick:n.onConfirm},{default:r(()=>[W(S(t.t("confirm")),1)]),_:1},8,["onClick"])])]),_:1},8,["title"])]),_:1})]),_:1},8,["title","header-style","section-style"]),s(d,{title:t.t("customActiveColor"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[s(c,{"active-color":"#1989fa"},{default:r(()=>[s(l,{value:e.value1,options:e.option1},null,8,["value","options"]),s(l,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),s(d,{title:t.t("expandDirection"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[s(c,{direction:"up"},{default:r(()=>[s(l,{value:e.value1,options:e.option1},null,8,["value","options"]),s(l,{value:e.value2,options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"]),s(d,{title:t.t("disableMenu"),"header-style":e.headerStyle,"section-style":e.sectionStyle},{default:r(()=>[s(c,null,{default:r(()=>[s(l,{value:e.value1,disabled:"",options:e.option1},null,8,["value","options"]),s(l,{value:e.value2,disabled:"",options:e.option2},null,8,["value","options"])]),_:1})]),_:1},8,["title","header-style","section-style"])])}const xe=b(ee,[["render",se]]);export{xe as default};
