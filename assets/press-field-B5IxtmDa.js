import{P as v}from"./press-cell-DldhgUi8.js";import{P}from"./press-icon-plus-UvEd4iQp.js";import{u as j}from"./utils-BWNRMl9G.js";import{s as T}from"./style-CpIyAjCl.js";import{a as p,v as z,n as a,e as H}from"./add-unit-Ci6RUrQO.js";import{d as F,a as L}from"./press-component-DP30Q1Pq.js";import{a as S,g as h}from"./event-BsaNekcD.js";import{f as k}from"./parent-CQhE6Wqc.js";import{_ as M,r as w,o as r,c as u,f as K,l as b,i as d,n as s,t as g,d as f,a as m,m as B,b as I,A as E}from"./index-C7cPaXoT.js";const N={placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},disabled:Boolean,maxlength:{type:Number,default:-1},cursorSpacing:{type:Number,default:50},autoFocus:Boolean,focus:Boolean,cursor:{type:Number,default:-1},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},adjustPosition:{type:Boolean,default:!0},holdKeyboard:Boolean},A={type:{type:String,default:"text"},password:Boolean,confirmType:{type:String,default:""},confirmHold:Boolean,alwaysEmbed:Boolean},D={autoHeight:Boolean,fixed:Boolean,showConfirmBar:{type:Boolean,default:!0},disableDefaultPadding:{type:Boolean,default:!0}};function W(e){return e&&e.constructor==="Object"?T({"min-height":p(e.minHeight),"max-height":p(e.maxHeight)}):""}const O={inputStyle:W};function V(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function q(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function R(e){V(window,e),V(document.body,e)}const U={name:"PressField",options:{...F,styleIsolation:"shared"},field:!0,components:{PressCell:v,PressIconPlus:P},mixins:[z],props:{...N,...A,...D,size:{type:String,default:""},icon:{type:String,default:""},label:{type:String,default:""},error:Boolean,center:Boolean,isLink:Boolean,leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},autosize:{type:[Boolean,Object],default:!1},required:Boolean,iconClass:{type:String,default:""},clickable:Boolean,inputAlign:{type:String,default:""},customStyle:{type:String,default:""},wrapperStyle:{type:String,default:""},errorMessage:{type:String,default:""},arrowDirection:{type:String,default:""},showWordLimit:Boolean,errorMessageAlign:{type:String,default:""},useLabelSlot:Boolean,readonly:{type:Boolean,observer:"setShowClear"},clearable:{type:Boolean,observer:"setShowClear"},clearTrigger:{type:String,default:"focus"},border:{type:Boolean,default:!0},titleWidth:{type:String,default:"6.2em"},clearIcon:{type:String,default:"clear"},inputClass:{type:String,default:""},rightIconClass:{type:String,default:""},labelClass:{type:String,default:""},...L},emits:["focus","blur","click-icon","click-input","clear","confirm","linechange","keyboardheightchange","input","change","update:modelValue","click"],data(){return{focused:!1,innerValue:"",showClear:!1,utils:j,computed:O}},watch:{realModelValue:{handler(e){this.innerValue=e,a(this.adjustSize)}}},created(){this.innerValue=this.realModelValue},mounted(){a(this.adjustSize)},methods:{onInput(e){const t=S(e);this.innerValue=t,this.setShowClear(),this.emitChange(),a(this.adjustSize)},onFocus(e){this.focused=!0,this.setShowClear(),this.$emit("focus",h(e)),a(this.adjustSize)},onBlur(e){this.focused=!1,this.$emit("blur",h(e)),k(this,"blur"),a(this.adjustSize),setTimeout(()=>{this.setShowClear()},200)},onClickIcon(){this.$emit("click-icon")},onClickInput(e){this.$emit("click-input",h(e))},onClear(){this.innerValue="",this.setShowClear(),a(()=>{this.emitChange(),this.$emit("clear","")})},onConfirm(e){const t=S(e);this.innerValue=t,this.setShowClear(),this.$emit("confirm",t)},setValue(e){this.innerValue=e,this.setShowClear(),e===""&&(this.innerValue=""),this.emitChange()},onLineChange(e){this.$emit("linechange",h(e))},onKeyboardHeightChange(e){this.$emit("keyboardheightchange",h(e))},emitChange(){a(()=>{this.emitModelValue(this.innerValue),this.$emit("change",this.innerValue),k(this,"change")})},setShowClear(){const{clearable:e,readonly:t,clearTrigger:l}=this,{focused:c,innerValue:n}=this;let i=!1;e&&!t&&(i=!!n&&(l==="always"||l==="focus"&&c)),this.showClear=i},adjustSize(){let{input:e}=this.$refs;if(!(this.type==="textarea"&&this.autosize)||!e||(e.style||(e=e.$el),!e||!e.style))return;const t=q();e.style.height="auto";let l=e.scrollHeight;if(H(this.autosize)){const{maxHeight:c,minHeight:n}=this.autosize;c&&(l=Math.min(l,c)),n&&(l=Math.max(l,n))}l&&(e.style.height=`${l}px`,R(t))},noop(){},clickWrap(){this.$emit("click")}}},X=["fixed","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","auto-height","cursor-spacing","adjust-position","show-confirm-bar","hold-keyboard","selection-end","selection-start","disable-default-padding"],Y=["type","focus","cursor","value","auto-focus","disabled","maxlength","placeholder","placeholder-style","placeholder-class","confirm-type","confirm-hold","hold-keyboard","cursor-spacing","adjust-position","selection-end","selection-start","always-embed","password"],G={class:"press-field__button"},J={key:0,class:"press-field__word-limit"};function Q(e,t,l,c,n,i){const y=w("press-icon-plus"),C=w("press-cell");return r(),u("div",{class:s(["press-field-index",e.customClass]),style:B(l.wrapperStyle)},[K(C,{size:l.size,icon:l.leftIcon,center:l.center,border:l.border,"is-link":l.isLink,required:l.required,clickable:l.clickable,"title-width":l.titleWidth,"title-style":l.label||l.useLabelSlot?"margin-right: 12px;":"display: none;","use-title-slot":!!(l.useLabelSlot||l.label),"custom-style":l.customStyle,"arrow-direction":l.arrowDirection,"custom-class":"press-field",onClick:i.clickWrap},{icon:b(()=>[d(e.$slots,"left-icon",{},void 0,!0)]),title:b(()=>[l.label?(r(),u("div",{key:0,class:s(l.labelClass+" "+n.utils.bem2("field__label",{disabled:e.disabled}))},g(l.label),3)):l.useLabelSlot?d(e.$slots,"label",{key:1},void 0,!0):f("",!0)]),default:b(()=>[m("div",{class:s([n.utils.bem2("field__body",[e.type])])},[m("div",{class:s([n.utils.bem2("field__control",[l.inputAlign,"custom"])]),onClick:t[0]||(t[0]=(...o)=>i.onClickInput&&i.onClickInput(...o))},[d(e.$slots,"input",{},void 0,!0)],2),e.type==="textarea"?(r(),u("textarea",{key:0,ref:"input",class:s([n.utils.bem2("field__control",[l.inputAlign,e.type,{disabled:e.disabled,error:l.error}]),l.inputClass]),fixed:e.fixed,focus:e.focus,cursor:e.cursor,value:n.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||l.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+n.utils.bem2("field__placeholder",{error:l.error,disabled:e.disabled}),"auto-height":!!l.autosize,style:B(""+n.computed.inputStyle(l.autosize)),"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"show-confirm-bar":e.showConfirmBar,"hold-keyboard":e.holdKeyboard,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"disable-default-padding":e.disableDefaultPadding,onInput:t[1]||(t[1]=(...o)=>i.onInput&&i.onInput(...o)),onClick:t[2]||(t[2]=(...o)=>i.onClickInput&&i.onClickInput(...o)),onBlur:t[3]||(t[3]=(...o)=>i.onBlur&&i.onBlur(...o)),onFocus:t[4]||(t[4]=(...o)=>i.onFocus&&i.onFocus(...o)),onConfirm:t[5]||(t[5]=(...o)=>i.onConfirm&&i.onConfirm(...o)),onLinechange:t[6]||(t[6]=(...o)=>i.onLineChange&&i.onLineChange(...o)),onKeyboardheightchange:t[7]||(t[7]=(...o)=>i.onKeyboardHeightChange&&i.onKeyboardHeightChange(...o))},null,46,X)):(r(),u("input",{key:1,ref:"input",class:s([n.utils.bem2("field__control",[l.inputAlign,{disabled:e.disabled,error:l.error}]),l.inputClass]),type:e.type,focus:e.focus,cursor:e.cursor,value:n.innerValue,"auto-focus":e.autoFocus,disabled:e.disabled||l.readonly,maxlength:e.maxlength,placeholder:e.placeholder,"placeholder-style":e.placeholderStyle,"placeholder-class":""+n.utils.bem2("field__placeholder",{error:l.error}),"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"hold-keyboard":e.holdKeyboard,"cursor-spacing":e.cursorSpacing,"adjust-position":e.adjustPosition,"selection-end":e.selectionEnd,"selection-start":e.selectionStart,"always-embed":e.alwaysEmbed,password:e.password||e.type==="password",onInput:t[8]||(t[8]=(...o)=>i.onInput&&i.onInput(...o)),onClick:t[9]||(t[9]=(...o)=>i.onClickInput&&i.onClickInput(...o)),onBlur:t[10]||(t[10]=(...o)=>i.onBlur&&i.onBlur(...o)),onFocus:t[11]||(t[11]=(...o)=>i.onFocus&&i.onFocus(...o)),onConfirm:t[12]||(t[12]=(...o)=>i.onConfirm&&i.onConfirm(...o)),onKeyboardheightchange:t[13]||(t[13]=(...o)=>i.onKeyboardHeightChange&&i.onKeyboardHeightChange(...o))},null,42,Y)),n.showClear?(r(),I(y,{key:2,name:l.clearIcon,class:"press-field__clear-root press-field__icon-root",onClick:i.onClear},null,8,["name","onClick"])):f("",!0),m("div",{class:"press-field__icon-container",onClick:t[14]||(t[14]=(...o)=>i.onClickIcon&&i.onClickIcon(...o))},[l.rightIcon||l.icon?(r(),I(y,{key:0,name:l.rightIcon||l.icon,class:s("press-field__icon-root "+l.iconClass),"custom-class":l.rightIconClass},null,8,["name","class","custom-class"])):f("",!0),d(e.$slots,"right-icon",{},void 0,!0),d(e.$slots,"icon",{},void 0,!0)]),m("div",G,[d(e.$slots,"button",{},void 0,!0)])],2),l.showWordLimit&&e.maxlength?(r(),u("div",J,[m("div",{class:s([n.utils.bem2("field__word-num",{full:n.innerValue.length>=e.maxlength})])},g(n.innerValue.length>=e.maxlength?e.maxlength:n.innerValue.length),3),E("/"+g(e.maxlength),1)])):f("",!0),l.errorMessage?(r(),u("div",{key:1,class:s([n.utils.bem2("field__error-message",[l.errorMessageAlign,{disabled:e.disabled,error:l.error}])])},g(l.errorMessage),3)):f("",!0)]),_:3},8,["size","icon","center","border","is-link","required","clickable","title-width","title-style","use-title-slot","custom-style","arrow-direction","onClick"])],6)}const ne=M(U,[["render",Q],["__scopeId","data-v-cf35e8d3"]]);export{ne as P};