import{O as P,M as B,aj as F,_ as O,r as g,o as n,c as r,a as u,t as d,b as p,d as l,w as f,F as b,e as _,k as C,G as y,l as V}from"./index-C8vugXWi.js";import{a as D}from"./handler-helper-BKr0zvNe.js";import{s as H,a as T}from"./index-BUh0a6PW.js";import{i as M}from"./h5-handler-B_4118GU.js";import{P as j}from"./press-field-D7bat82l.js";import{g as x}from"./dialog-mixin-BkC47Jc3.js";import{S as N}from"./scroll-view-6X1FI7lO.js";const m={show:{type:Boolean,default:!1},src:{type:String,default:""},dialogType:{type:[Number,String],default:1},title:{type:String,default:P("dialog.title")},content:{type:String,default:""},canTouchRemove:{type:Boolean,default:!0},confirmText:{type:String,default:P("confirm")},cancelText:{type:String,default:""},onClickCancel:{type:[Function,null],default:null},onConfirmClick:{type:[Function,null],default:null},htmlContent:{type:String,default:""},zIndex:{type:[Number,String],default:"99"},useScrollView:{type:Boolean,default:!1},onClickImage:{type:[Function,null],default:null},onLongPressImage:{type:[Function,null],default:null},showField:{type:Boolean,default:!1},fieldPlaceHolder:{type:String,default:""},fieldValue:{type:String,default:""}};function R(){const e=getCurrentPages();return e[e.length-1]}function z({options:e,currentOptions:o,dialogComponent:h,id:k}){e=Object.assign(Object.assign({},o),e);const a=e.context||R();let t=H(a,e.selector);if(delete e.context,delete e.selector,!t&&h&&(t=M(h,k)),t){const c={...e};return T(t,c),T(t,c,"showDialog").then(s=>Promise.resolve(s)).catch(s=>Promise.reject(s))}console.warn(`The ${e.selector} node is not found, please confirm whether the selector and context are correct`)}const q={name:"PressDialog",components:{PressButton:B,PressField:j},mixins:[x(m),N],props:{...m},options:{virtualHost:!0,styleIsolation:"shared"},emits:["confirm","cancel","onLongPressImage","onClickImage"],data(){return{resolve:"",reject:"",promise:"",mShowButtonLoading:!1,inputValue:""}},watch:{dataFieldValue:{handler(e){this.inputValue=e},immediate:!0}},mounted(){},methods:{preventTouchMove(){},confirm(){if(this.dataDialogType===2){if(this.mShowButtonLoading)return;this.mShowButtonLoading=!0}typeof this.dataOnConfirmClick=="function"?F(this.dataOnConfirmClick(this)).then(e=>{e&&this.resolveConfirm()}).catch(()=>{}):this.resolveConfirm()},resolveConfirm(){this.resolve&&this.resolve("confirm"),this.$emit("confirm"),this.remove()},cancel(){typeof this.dataOnClickCancel=="function"&&this.dataOnClickCancel(this),typeof this.reject=="function"&&this.reject("cancel"),this.$emit("cancel"),this.remove()},showDialog(){return this.dataShow=!0,this.promise=new Promise((e,o)=>{this.resolve=e,this.reject=o}),this.promise},touchRemove(){this.dataCanTouchRemove&&this.remove(),this.$emit("cancel")},remove(){this.dataShow=!1,this.mShowButtonLoading=!1},destroy(){},handleLongPressImage(){typeof this.dataOnLongPressImage=="function"&&this.dataOnLongPressImage(),this.$emit("onLongPressImage")},handleClickImage(){typeof this.dataOnClickImage=="function"&&this.dataOnClickImage(),this.$emit("onClickImage")},onChangeField(e){this.inputValue=e}}},E={class:"press-dialog__content-wrap"},G={class:"press-dialog__title"},Q=["innerHTML"],U={key:2,class:"press-dialog__content"},Z={key:4,class:"press-dialog__img-wrap"},A=["src"],J={class:"press-dialog__btn--wrap"},K={class:"press-dialog__btn--spacing"};function W(e,o,h,k,a,t){const c=g("scroll-view"),S=g("PressField"),s=g("PressButton");return e.dataShow?(n(),r("div",{key:0,class:"press-dialog",style:V({zIndex:`${e.dataZIndex}`}),onClick:o[2]||(o[2]=f((...i)=>t.touchRemove&&t.touchRemove(...i),["stop"])),onTouchmove:o[3]||(o[3]=f((...i)=>t.preventTouchMove&&t.preventTouchMove(...i),["stop"]))},[u("div",E,[u("p",G,d(e.dataTitle),1),e.dataUseScrollView&&e.dataHtmlContent?(n(),p(c,{key:0,"scroll-y":"true",class:"press-dialog__content",innerHTML:e.dataHtmlContent},null,8,["innerHTML"])):e.dataHtmlContent?(n(),r("p",{key:1,class:"press-dialog__content",innerHTML:e.dataHtmlContent},null,8,Q)):l("",!0),e.dataHtmlContent?l("",!0):(n(),r("p",U,d(e.dataContent),1)),e.dataShowField?(n(),p(S,{key:3,"custom-class":"press-dialog__field","title-width":"0",placeholder:e.dataFieldPlaceHolder,value:e.dataFieldValue,"model-value":e.dataFieldValue,onChange:t.onChangeField},null,8,["placeholder","value","model-value","onChange"])):l("",!0),e.dataSrc?(n(),r("div",Z,[e.dataSrc?(n(),r("img",{key:0,class:"press-dialog__img","show-menu-by-longpress":!0,src:e.dataSrc,onClick:o[0]||(o[0]=f((...i)=>t.handleClickImage&&t.handleClickImage(...i),["stop"])),onLongpress:o[1]||(o[1]=(...i)=>t.handleLongPressImage&&t.handleLongPressImage(...i))},null,40,A)):l("",!0)])):l("",!0),u("div",J,[e.dataCancelText&&e.dataCancelText.length>0?(n(),r(b,{key:0},[u("div",K,[_(s,{type:"e-sport-secondary","custom-style":"width: 100px;height: 36px;",onClick:t.cancel},{default:C(()=>[y(d(e.dataCancelText),1)]),_:1},8,["onClick"])]),_(s,{type:"e-sport-primary-bg",loading:a.mShowButtonLoading,"custom-style":"width: 100px;height: 36px;",onClick:t.confirm},{default:C(()=>[y(d(a.mShowButtonLoading?"":e.dataConfirmText),1)]),_:1},8,["loading","onClick"])],64)):e.dataConfirmText||a.mShowButtonLoading?(n(),p(s,{key:1,type:"e-sport-primary-bg",loading:a.mShowButtonLoading,"custom-style":"width: 148px;height: 36px;",onClick:t.confirm},{default:C(()=>[y(d(a.mShowButtonLoading?"":e.dataConfirmText),1)]),_:1},8,["loading","onClick"])):l("",!0)])])],36)):l("",!0)}const X=O(q,[["render",W],["__scopeId","data-v-b68fb646"]]);let I=[];const L=Object.keys(m).reduce((e,o)=>(e[o]=m[o].default,e),{selector:"#tip-match-comm-tips-dialog"});let v=Object.assign({},L);const w=e=>z({options:e,currentOptions:v,id:"tip-dialog-showCommTipsDialog",dialogComponent:X});function Y(e){I=e}function $(e){v=e}w.show=e=>w(e);D({Dialog:w,queue:I,currentOptions:v,defaultOptions:L,updateQueue:Y,updateCurrentOptions:$});export{w as D,X as P};