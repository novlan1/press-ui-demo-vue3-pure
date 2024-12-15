import{B as P,C as c,_,E as V,ag as f,o as d,c as m,a as p,l as g,n as h,h as C,d as b,e as a,k as r,r as y}from"./index-C8vugXWi.js";import{g as S,a as v}from"./event-msrAv3cV.js";import{P as L}from"./press-toast-BTkHEBTv.js";import{P as z}from"./press-cell-BLTCMYRJ.js";import"./press-overlay-CxfxI6bt.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";import"./dialog-mixin-BkC47Jc3.js";import"./component-handler-BsZamlOU.js";import"./link-BzPJvqKH.js";function B(e){return P({width:c(e.buttonSize),height:c(e.buttonSize)})}function E(e){return P({width:c(e.inputWidth),height:c(e.buttonSize)})}const I={buttonStyle:B,inputStyle:E},N=600,w=200;function k(e,t){const n=Math.pow(10,10);return Math.round((e+t)*n)/n}function T(e,t){return String(e)===String(t)}const M={name:"PressStepper",field:!0,props:{value:{type:[Number,String],default:0},integer:{type:Boolean},disabled:Boolean,inputWidth:{type:String,default:""},buttonSize:{type:String,default:""},asyncChange:Boolean,disableInput:Boolean,decimalLength:{type:Number,default:0},min:{type:Number,default:1},max:{type:Number,default:Number.MAX_SAFE_INTEGER},step:{type:Number,default:1},showPlus:{type:Boolean,default:!0},showMinus:{type:Boolean,default:!0},disablePlus:Boolean,disableMinus:Boolean,longPress:{type:Boolean,default:!0},theme:{type:String,default:""},alwaysEmbed:Boolean,customClass:{type:String,default:""},inputClass:{type:String,default:""},minusClass:{type:String,default:""},plusClass:{type:String,default:""}},emits:["focus","blur","change","overlimit","minus","plus"],data(){return{currentValue:"",focus:!1,utils:V,computed:I}},watch:{value:{handler(){this.observeValue()}},integer:{handler(){this.check()}},decimalLength:{handler(){this.check()}},min:{handler(){this.check()}},max:{handler(){this.check()}}},created(){this.currentValue=this.format(this.value)},methods:{observeValue(){const{value:e,currentValue:t}=this;T(e,t)||(this.currentValue=this.format(e))},check(){const e=this.format(this.currentValue);T(e,this.currentValue)||(this.currentValue=e)},isDisabled(e){const{disabled:t,disablePlus:n,disableMinus:o,currentValue:i,max:s,min:l}=this;return e==="plus"?t||n||i>=s:t||o||i<=l},onFocus(e){this.$emit("focus",S(e))},onBlur(e){const t=this.format(v(e));this.emitChange(t),this.$emit("blur",Object.assign(Object.assign({},S(e)),{value:t}))},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&e.indexOf(".")!==-1&&(e=e.split(".")[0]),e},format(e){return e=this.filter(e),e=e===""?0:+e,e=Math.max(Math.min(this.max,e),this.min),f(this.decimalLength)&&(e=e.toFixed(this.decimalLength)),e},onInput(e){const t=v(e);if(t==="")return;let n=this.filter(t);if(f(this.decimalLength)&&n.indexOf(".")!==-1){const o=n.split(".");n=`${o[0]}.${o[1].slice(0,this.decimalLength)}`}this.emitChange(n)},emitChange(e){this.asyncChange||(this.currentValue=e),this.$emit("change",e)},onChange(){const{type:e}=this;if(this.isDisabled(e)){this.$emit("overlimit",e);return}const t=e==="minus"?-this.step:+this.step,n=this.format(k(+this.currentValue,t));this.emitChange(n),this.$emit(e)},longPressStep(){this.longPressTimer=setTimeout(()=>{this.onChange(),this.longPressStep()},w)},onTap(e){const{type:t}=e.currentTarget.dataset;this.type=t,this.onChange()},onTouchStart(e){if(!this.longPress)return;clearTimeout(this.longPressTimer);const{type:t}=e.currentTarget.dataset;this.type=t,this.isLongPress=!1,this.longPressTimer=setTimeout(()=>{this.isLongPress=!0,this.onChange(),this.longPressStep()},N)},onTouchEnd(){this.longPress&&clearTimeout(this.longPressTimer)}}},x={class:"press-stepper-index"},R=["type","value","focus","disabled"];function D(e,t,n,o,i,s){return d(),m("div",x,[p("div",{class:h([i.utils.bem2("stepper",[n.theme]),n.customClass])},[n.showMinus?(d(),m("div",{key:0,"data-type":"minus",style:g(""+i.computed.buttonStyle({buttonSize:n.buttonSize})),class:h([n.minusClass,i.utils.bem2("stepper__minus",{disabled:n.disabled||n.disableMinus||i.currentValue<=n.min})]),"hover-class":"press-stepper__minus--hover","hover-stay-time":"70",onClick:t[0]||(t[0]=(...l)=>s.onTap&&s.onTap(...l)),onTouchstart:t[1]||(t[1]=(...l)=>s.onTouchStart&&s.onTouchStart(...l)),onTouchend:t[2]||(t[2]=(...l)=>s.onTouchEnd&&s.onTouchEnd(...l))},[C(e.$slots,"minus",{},void 0,!0)],38)):b("",!0),p("input",{"always-embed":!1,type:n.integer?"number":"digit",class:h(n.inputClass+" "+i.utils.bem2("stepper__input",{disabled:n.disabled||n.disableInput})),style:g(""+i.computed.inputStyle({buttonSize:n.buttonSize,inputWidth:n.inputWidth})),value:i.currentValue,focus:i.focus,disabled:n.disabled||n.disableInput,onInput:t[3]||(t[3]=(...l)=>s.onInput&&s.onInput(...l)),onFocus:t[4]||(t[4]=(...l)=>s.onFocus&&s.onFocus(...l)),onBlur:t[5]||(t[5]=(...l)=>s.onBlur&&s.onBlur(...l))},null,46,R),n.showPlus?(d(),m("div",{key:1,"data-type":"plus",style:g(""+i.computed.buttonStyle({buttonSize:n.buttonSize})),class:h(n.plusClass+" "+i.utils.bem2("stepper__plus",{disabled:n.disabled||n.disablePlus||i.currentValue>=n.max})),"hover-class":"press-stepper__plus--hover","hover-stay-time":"70",onClick:t[6]||(t[6]=(...l)=>s.onTap&&s.onTap(...l)),onTouchstart:t[7]||(t[7]=(...l)=>s.onTouchStart&&s.onTouchStart(...l)),onTouchend:t[8]||(t[8]=(...l)=>s.onTouchEnd&&s.onTouchEnd(...l))},[C(e.$slots,"plus",{},void 0,!0)],38)):b("",!0)],2)])}const F=_(M,[["render",D],["__scopeId","data-v-81a59b37"]]),O={i18n:{"zh-CN":{step:"步长设置",range:"限制输入范围",integer:"限制输入整数",roundTheme:"圆角风格",asyncChange:"异步变更",customSize:"自定义大小",disableInput:"禁用输入框",decimalLength:"固定小数位数",closeLongPress:"关闭长按"},"en-US":{step:"Step",range:"Range",integer:"Integer",roundTheme:"Round Theme",asyncChange:"Async Change",customSize:"Custom Size",disableInput:"Disable Input",decimalLength:"Decimal Length",closeLongPress:"Close Long Press"}},components:{PressStepper:F,PressToast:L,PressCell:z},data(){return{value:1,asyncValue:1}},methods:{onChange(e){console.log("onChange.val",e)},onSyncChange(e){this.$toast.loading({duration:1e3}),setTimeout(()=>{console.log("onSyncChange.val",e),this.asyncValue=e},1e3)}}},A={class:"demo-wrap"};function W(e,t,n,o,i,s){const l=y("press-stepper"),u=y("press-cell");return d(),m("div",A,[a(u,{title:e.t("basicUsage")},{default:r(()=>[a(l,{value:i.value,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("step")},{default:r(()=>[a(l,{value:i.value,step:2,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("range")},{default:r(()=>[a(l,{value:i.value,min:5,max:8,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("integer")},{default:r(()=>[a(l,{value:i.value,integer:"",onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("disabled")},{default:r(()=>[a(l,{disabled:"",value:i.value,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("closeLongPress")},{default:r(()=>[a(l,{"long-press":!1,value:i.value,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("decimalLength")},{default:r(()=>[a(l,{step:.2,"decimal-length":1,value:i.value,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("asyncChange")},{default:r(()=>[a(l,{"async-change":"",value:i.asyncValue,onChange:s.onSyncChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("customSize")},{default:r(()=>[a(l,{"input-width":"40px","button-size":"32px",value:i.value,onChange:s.onChange},null,8,["value","onChange"])]),_:1},8,["title"])])}const Z=_(O,[["render",W]]);export{Z as default};
