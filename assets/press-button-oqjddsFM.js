import{P as T}from"./press-icon-plus-hPxG3yOg.js";import{P as z}from"./press-loading-plus-CHJlaqPO.js";import{P as I}from"./press-loading-D8D32VFD.js";import{b as v}from"./button-BNDddhNF.js";import{b as L}from"./system-D8APUHdN.js";import{u as U}from"./utils-D4SHz1Xc.js";import{s as y}from"./style-CpIyAjCl.js";import{d as w,a as O}from"./press-component-B_qTMwPt.js";import{_ as F,r as f,o as i,c as u,b,F as h,f as E,t as G,d as S,a as M,i as A,n as N,m as j,w as D}from"./index-EgE5uNPY.js";const C=["normal","large","small","mini"];function V(e){const o={},{size:s}=e;return s&&(s==="string"&&C.indexOf(s)<=-1?(o.height=s,o.width=s):typeof s=="object"&&(s.height&&(o.height=s.height),s.width&&(o.width=s.width))),o}function q(e){const o=V(e);if(!e.color)return y([o,e.customStyle]);const s={color:e.plain?e.color:"#fff",background:e.plain?null:e.color,...o};return e.color.indexOf("gradient")!==-1?s.border=0:s["border-color"]=e.color,y([s,e.customStyle])}function H(e){return e.plain?e.color?e.color:"#c9c9c9":e.type==="default"?"#c9c9c9":"#fff"}const m={"e-sport-primary":["e-sport-primary"],"e-sport-primary-bg":["e-sport-primary","e-sport-bg"],"e-sport-primary-bg-lg":["e-sport-primary","e-sport-bg","e-sport-bg-lg"],"e-sport-primary-bg-xl":["e-sport-primary","e-sport-bg","e-sport-bg-xl"],"e-sport-secondary":["e-sport-secondary"],"e-sport-border":["e-sport-border"]},P=[v];L()&&P.push("wx://form-field-button");const Z={name:"PressButton",options:{virtualHost:!0,...w,styleIsolation:"shared"},components:{PressIconPlus:T,PressLoadingPlus:z,PressLoading:I},mixins:P,props:{formType:{type:String,default:""},icon:{type:String,default:""},classPrefix:{type:String,default:"press-icon-plus"},plain:Boolean,block:Boolean,round:Boolean,square:Boolean,loading:{type:Boolean,default:!1},hairline:Boolean,disabled:Boolean,loadingText:{type:String,default:""},customStyle:{type:String,default:""},loadingType:{type:String,default:"circular"},type:{type:String,default:"default"},dataset:{type:[Object,null],default:null},size:{type:[String,Object],default:"normal"},loadingSize:{type:String,default:"20px"},color:{type:String,default:""},...O},emits:["click","getuserinfo"],data(){return{baseStyle:""}},computed:{isESportLoading(){return this.loading&&m[this.type]},buttonClass(){const{type:e,size:o,block:s,round:r,plain:l,square:n,loading:a,disabled:p,hairline:d,customClass:t}=this,k=C.indexOf(o)>-1?o:"";let g=[],c=e;if(m[e]&&(g=m[e],c=""),e.indexOf("-disabled")>-1){const B=e.replace("-disabled","");g=[...m[B],"e-sport-disabled"]}return`${t} ${U.bem2("button",[c,k,...g,{block:s,round:r,plain:l,square:n,loading:a,disabled:p,hairline:d,unclickable:p||a}])} ${d?"press-hairline--surround":""}`},buttonStyle(){const{plain:e,color:o,customStyle:s,size:r}=this;return q({plain:e,color:o,customStyle:s,size:r})},loadingColor(){const{type:e,color:o,plain:s}=this;return H({type:e,color:o,plain:s})}},methods:{onFakeClick(e){const{disabled:o,loading:s}=this;o||s||this.onClick(e)},onClick(e){this.$emit("click",e);const{canIUseGetUserProfile:o,openType:s,getUserProfileDesc:r,lang:l}=this;s==="getUserInfo"&&o&&uni.getUserProfile({desc:r||"  ",lang:l||"en",complete:n=>{this.$emit("getuserinfo",n)}})}}},J=["id","data-detail","hover-class","lang","form-type","open-type","business-id","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","aria-label"],K={key:0,class:"press-button__loading-text"},Q={class:"press-button__text"};function R(e,o,s,r,l,n){const a=f("PressLoading"),p=f("press-loading-plus"),d=f("press-icon-plus");return i(),u("Button",{id:e.id,"data-detail":s.dataset,class:N(n.buttonClass),"hover-class":["press-button--active",e.hoverClass],lang:e.lang,"form-type":s.formType,style:j(n.buttonStyle),"open-type":s.disabled||s.loading||e.canIUseGetUserProfile&&e.openType==="getUserInfo"?"":e.openType,"business-id":e.businessId,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,"aria-label":e.ariaLabel,onClick:o[0]||(o[0]=D((...t)=>n.onFakeClick&&n.onFakeClick(...t),["stop"])),onGetuserinfo:o[1]||(o[1]=(...t)=>e.onGetUserInfo&&e.onGetUserInfo(...t)),onContact:o[2]||(o[2]=(...t)=>e.onContact&&e.onContact(...t)),onGetphonenumber:o[3]||(o[3]=(...t)=>e.onGetPhoneNumber&&e.onGetPhoneNumber(...t)),onError:o[4]||(o[4]=(...t)=>e.onError&&e.onError(...t)),onLaunchapp:o[5]||(o[5]=(...t)=>e.onLaunchApp&&e.onLaunchApp(...t)),onOpensetting:o[6]||(o[6]=(...t)=>e.onOpenSetting&&e.onOpenSetting(...t)),onChooseavatar:o[7]||(o[7]=(...t)=>e.onChooseAvatar&&e.onChooseAvatar(...t))},[n.isESportLoading?(i(),b(a,{key:0,"loading-scenes":"btn"})):s.loading?(i(),u(h,{key:1},[E(p,{"custom-class":e.loadingClass,size:s.loadingSize,type:s.loadingType,color:n.loadingColor},null,8,["custom-class","size","type","color"]),s.loadingText?(i(),u("div",K,G(s.loadingText),1)):S("",!0)],64)):(i(),u(h,{key:2},[s.icon?(i(),b(d,{key:0,size:"1.2em",name:s.icon,"class-prefix":s.classPrefix,class:"press-button__icon","custom-style":"line-height: inherit;"},null,8,["name","class-prefix"])):S("",!0),M("div",Q,[A(e.$slots,"default",{},void 0,!0)])],64))],46,J)}const te=F(Z,[["render",R],["__scopeId","data-v-c3e1c563"]]);export{te as P};
