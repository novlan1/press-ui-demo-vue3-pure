import{P as b}from"./press-icon-plus-zKCOzNHP.js";import{l as v}from"./link-CAqpeIDw.js";import{u as _}from"./utils-D0lA7q9W.js";import{s as B}from"./style-CpIyAjCl.js";import{a as C}from"./add-unit-DeNeB5nf.js";import{d as I,a as P}from"./press-component-BmHMjgT0.js";import{g as w}from"./event-CFWsryW7.js";import{_ as p,r as L,o as s,c as n,b as S,n as i,i as r,a as h,F as u,C as d,t as m,d as k,m as g,w as D}from"./index-VLx2MJJu.js";function z(t){return B([{"max-width":C(t.titleWidth),"min-width":C(t.titleWidth)},t.titleStyle])}const T={titleStyle:z},W={name:"PressCell",components:{PressIconPlus:b},options:{...I,styleIsolation:"shared"},mixins:[v],props:{titleClass:{type:String,default:""},labelClass:{type:String,default:""},valueClass:{type:String,default:""},rightIconClass:{type:String,default:""},hoverClass:{type:String,default:""},title:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:""},label:{type:String,default:""},center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleWidth:{type:String,default:""},customStyle:{type:String,default:""},arrowDirection:{type:String,default:""},useTitleSlot:Boolean,useLabelSlot:Boolean,border:{type:Boolean,default:!0},type:{type:String,default:""},titleStyle:{type:String,default:""},...P},emits:["click"],computed:{cellClass(){const{size:t,center:a,required:e,border:f,isLink:y,clickable:l,customClass:o,type:c}=this;return`${o} ${_.bem2("cell",[t,{center:a,required:e,borderless:!f,clickable:y||l,"e-sport":c==="e-sport"}])}`},cTitleStyle(){const{titleWidth:t,titleStyle:a}=this;return T.titleStyle({titleWidth:t,titleStyle:a})},leftIconBaseClass(){return"press-cell__left-icon"},leftIconCustomClass(){return""},rightIconBaseClass(){return"press-cell__right-icon"},rightIconCustomClass(){return this.rightIconClass}},mounted(){},methods:{onClick(t){this.$emit("click",w(t)),this.jumpLink()}}},N=["hover-class"];function V(t,a,e,f,y,l){const o=L("PressIconPlus");return s(),n("div",{class:i(l.cellClass),"hover-class":["press-cell--hover",e.hoverClass],"hover-stay-time":"70",style:g(e.customStyle),onClick:a[0]||(a[0]=D((...c)=>l.onClick&&l.onClick(...c),["stop"]))},[e.icon?(s(),S(o,{key:0,name:e.icon,class:i([l.leftIconBaseClass]),"custom-class":l.leftIconCustomClass},null,8,["name","class","custom-class"])):r(t.$slots,"icon",{key:1},void 0,!0),h("div",{style:g(l.cTitleStyle),class:i(["press-cell__title",e.titleClass])},[e.title?(s(),n(u,{key:0},[d(m(e.title),1)],64)):r(t.$slots,"title",{key:1},void 0,!0),e.label||e.useLabelSlot?(s(),n("div",{key:2,class:i(["press-cell__label",e.labelClass])},[e.useLabelSlot?r(t.$slots,"label",{key:0},void 0,!0):e.label?(s(),n(u,{key:1},[d(m(e.label),1)],64)):k("",!0)],2)):k("",!0)],6),h("div",{class:i(["press-cell__value",e.valueClass])},[e.value||e.value===0?(s(),n(u,{key:0},[d(m(e.value),1)],64)):r(t.$slots,"default",{key:1},void 0,!0)],2),e.isLink?(s(),S(o,{key:2,name:e.arrowDirection?"arrow-"+e.arrowDirection:"arrow",class:i([l.rightIconBaseClass]),"custom-class":l.rightIconCustomClass},null,8,["name","class","custom-class"])):r(t.$slots,"right-icon",{key:3},void 0,!0),r(t.$slots,"extra",{},void 0,!0)],14,N)}const A=p(W,[["render",V],["__scopeId","data-v-d28fb302"]]);export{A as P};
