import{P as q}from"./press-popup-plus-CQuC1Xe7.js";import{d as C,a as v}from"./press-component-Cv9kTz4A.js";import{u as I}from"./utils-6Uv3ickc.js";import{_ as S,o as s,c,a as l,F as _,y,t as d,d as w,n as L,r as u,b as m,l as g,i as b,f as B}from"./index-4prF5mFA.js";import{P as x}from"./press-cell-DQI7GKjm.js";import"./press-icon-plus-BKnDNWlW.js";import"./style-CpIyAjCl.js";import"./add-unit-CSy-4COV.js";import"./press-info-zFc1oCW_.js";import"./press-overlay-BJN1N_oh.js";import"./press-transition-CMc4Nm8g.js";import"./system-DmiJ0d78.js";import"./link-pPHzr9dz.js";import"./event-CZpnkkJH.js";import"./support-passive-CNRHRm4O.js";const z=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"];function F(e){return z.indexOf(e)!==-1?`https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fshare-sheet-${e}.png`:e}const P={getIconURL:F},A={options:{...C},components:{},props:{options:{type:Array,default:()=>[]},showBorder:Boolean,...v},emits:["select"],data(){return{computed:P}},computed:{optionsClass(){const{showBorder:e}=this;return I.bem2("share-sheet__options",{border:e})}},methods:{onSelect(e){const{index:n}=e.currentTarget.dataset,t=this.options[n];this.$emit("select",Object.assign(Object.assign({},t),{index:n}))}}},N={class:"press-share-sheet-options"},Q=["data-index"],D=["open-type"],M=["src"],T={key:0,class:"press-share-sheet__name"},U={key:1,class:"press-share-sheet__option-description"};function W(e,n,t,k,r,o){return s(),c("div",N,[l("div",{class:L(o.optionsClass)},[(s(!0),c(_,null,y(t.options,(i,h)=>(s(),c("div",{key:h,class:"press-share-sheet__option","data-index":h,onClick:n[0]||(n[0]=(...a)=>o.onSelect&&o.onSelect(...a))},[l("button",{class:"press-share-sheet__button","open-type":i.openType},[l("img",{src:r.computed.getIconURL(i.icon),class:"press-share-sheet__icon"},null,8,M),i.name?(s(),c("div",T,d(i.name),1)):w("",!0),i.description?(s(),c("div",U,d(i.description),1)):w("",!0)],8,D)],8,Q))),128))],2)])}const E=S(A,[["render",W],["__scopeId","data-v-f8bfb751"]]);function R(e){return e==null||e[0]==null?!1:Array.isArray(e)&&Array.isArray(e[0])}const V={isMulti:R},j={name:"PressShareSheet",options:{...C},components:{PressPopup:q,Options:E},props:{show:Boolean,overlayStyle:{type:String,default:""},zIndex:{type:Number,default:100},title:{type:String,default:""},cancelText:{type:String,default:"取消"},description:{type:String,default:""},options:{type:Array,default:()=>[]},overlay:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},duration:{type:Number,default:300},...v},emits:["click-overlay","cancel","select","close"],data(){return{computed:V}},methods:{onClickOverlay(){this.$emit("click-overlay")},onCancel(){this.onClose(),this.$emit("cancel")},onSelect(e){this.$emit("select",e)},onClose(){this.$emit("close")}}},G={class:"press-share-sheet__header"},H={class:"press-share-sheet__title"},J={key:0,class:"press-share-sheet__title"},K={class:"press-share-sheet__description"},X={key:1,class:"press-share-sheet__description"};function Y(e,n,t,k,r,o){const i=u("options"),h=u("press-popup");return s(),m(h,{round:"",class:"press-share-sheet",show:t.show,position:"bottom",overlay:t.overlay,duration:t.duration,"z-index":t.zIndex,"overlay-style":t.overlayStyle,"close-on-click-overlay":t.closeOnClickOverlay,"safe-area-inset-bottom":t.safeAreaInsetBottom,onClose:o.onClose,onClickOverlay:o.onClickOverlay},{default:g(()=>[l("div",G,[l("div",H,[b(e.$slots,"title",{},void 0,!0)]),t.title?(s(),c("div",J,d(t.title),1)):w("",!0),l("div",K,[b(e.$slots,"description",{},void 0,!0)]),t.description?(s(),c("div",X,d(t.description),1)):w("",!0)]),r.computed.isMulti(t.options)?(s(!0),c(_,{key:0},y(t.options,(a,p)=>(s(),m(i,{key:p,"show-border":p!==0,options:a,onSelect:o.onSelect},null,8,["show-border","options","onSelect"]))),128)):(s(),m(i,{key:1,options:t.options,onSelect:o.onSelect},null,8,["options","onSelect"])),l("button",{type:"button",class:"press-share-sheet__cancel",onClick:n[0]||(n[0]=(...a)=>o.onCancel&&o.onCancel(...a))},d(t.cancelText),1)]),_:3},8,["show","overlay","duration","z-index","overlay-style","close-on-click-overlay","safe-area-inset-bottom","onClose","onClickOverlay"])}const Z=S(j,[["render",Y],["__scopeId","data-v-82f94a9c"]]),$={i18n:{"zh-CN":{Custom:"自定义",qq:"QQ",name:"名称",link:"复制链接",title:"立即分享给好友",weibo:"微博",wechat:"微信",poster:"分享海报",qrcode:"二维码",multiLine:"展示多行选项",showSheet:"显示分享面板",withDesc:"展示描述信息",customIcon:"自定义图标",description:"描述信息",weappQrcode:"小程序码",wechatMoments:"朋友圈"},"en-US":{Custom:"Custom",qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}},components:{PressShareSheet:Z,PressCell:x},data(){return{demoList:[{title:this.t("basicUsage"),list:[{title:this.t("basicUsage"),type:"basic"}]},{title:this.t("Custom"),list:[{title:this.t("multiLine"),type:"multiLine"},{title:this.t("customIcon"),type:"customIcon"},{title:this.t("withDesc"),type:"description"}]}],showShare:!1,description:"",curOptions:[]}},computed:{options(){return[{name:this.t("wechat"),icon:"wechat",openType:"share"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("link"),icon:"link"},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]},multiLineOptions(){return[[{name:this.t("wechat"),icon:"wechat"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("qq"),icon:"qq"}],[{name:this.t("link"),icon:"link"},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]]},customIconOptions(){return[{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-fire.png"},{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-light.png"},{name:this.t("name"),icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-icon-water.png"}]},descriptionOptions(){return[{name:this.t("wechat"),icon:"wechat"},{name:this.t("weibo"),icon:"weibo"},{name:this.t("link"),icon:"link",description:this.t("description")},{name:this.t("poster"),icon:"poster"},{name:this.t("qrcode"),icon:"qrcode"}]}},mounted(){this.curOptions=this.options},methods:{onShowShareSheet(e){let n="";switch(e){case"basic":{this.curOptions=this.options;break}case"multiLine":{this.curOptions=this.multiLineOptions;break}case"customIcon":{this.curOptions=this.customIconOptions;break}case"description":{this.curOptions=this.descriptionOptions,n=this.t("description");break}}this.showShare=!0,this.description=n},onSelect(e){console.log("[onSelect] val",e),this.showShare=!1},onClose(){this.showShare=!1}}},ee={class:"demo-wrap"};function te(e,n,t,k,r,o){const i=u("press-cell"),h=u("demo-block"),a=u("press-share-sheet");return s(),c("div",ee,[(s(!0),c(_,null,y(r.demoList,(p,O)=>(s(),m(h,{key:O,title:p.title},{default:g(()=>[(s(!0),c(_,null,y(p.list,f=>(s(),m(i,{key:f.title,title:f.title,"is-link":"",onClick:se=>o.onShowShareSheet(f.type)},null,8,["title","onClick"]))),128))]),_:2},1032,["title"]))),128)),B(a,{show:r.showShare,title:e.t("title"),description:r.description,options:r.curOptions,onSelect:o.onSelect,onClose:o.onClose},null,8,["show","title","description","options","onSelect","onClose"])])}const fe=S($,[["render",te]]);export{fe as default};
