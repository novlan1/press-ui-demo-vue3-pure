import{P as f,D as d}from"./handler-BQXOAFY9.js";import{P as g}from"./press-cell-B51DLGhM.js";import{_ as C,o as h,c as w,f as o,l as r,r as c,a as k}from"./index-F6Gg9UHQ.js";import"./handler-helper-BKr0zvNe.js";import"./index-C6hpkcEb.js";import"./h5-handler-B7rfiamE.js";import"./component-handler-DG932W7Y.js";import"./press-popup-plus-BykNx8tI.js";import"./press-overlay-C5JL8Y2J.js";import"./press-transition-MQnSZ_jj.js";import"./color-DciZLlTH.js";import"./dialog-mixin-DuaD0RSI.js";import"./link-CpGN79EY.js";import"./event-BwRIw3Q8.js";const _=t=>new Promise(e=>{t==="confirm"?setTimeout(()=>{e(!0)},1e3):e(!0)}),D={i18n:{"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",asyncClose:"异步关闭",roundButton:"圆角按钮样式",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",asyncClose:"Async Close",roundButton:"Round Button Style",componentCall:"Component Call"}},components:{PressDialogPlus:f,PressCell:g},data(){return{show:!1}},methods:{onShowDialog(t){if(t==="component"){this.show=!0;return}let e=this.t("title"),s=!1,a=null;t==="noTitle"?e="":t==="cancel"?s=!0:t==="async"&&(s=!0,a=_),d.alert({context:this,title:e,showCancelButton:s,message:this.t("content"),beforeClose:a}).then(()=>{console.log("dialog resolve")}).catch(()=>{console.log("dialog reject")})},getUserInfo(t){console.log("getUserInfo.res",t)},onClose(){this.show=!1}}},y={class:"demo-wrap"},B=k("img",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_260c4142c7225b5f73.jpeg",style:{width:"100%","margin-top":"16px"},mode:"aspectFit"},null,-1);function S(t,e,s,a,u,l){const n=c("press-cell"),m=c("demo-block"),p=c("press-dialog-plus");return h(),w("div",y,[o(m,{title:t.t("basicUsage")},{default:r(()=>[o(n,{title:t.t("alert1"),"is-link":"",onClick:e[0]||(e[0]=i=>l.onShowDialog("normal"))},null,8,["title"]),o(n,{title:t.t("alert2"),"is-link":"",onClick:e[1]||(e[1]=i=>l.onShowDialog("noTitle"))},null,8,["title"]),o(n,{title:t.t("confirm"),"is-link":"",onClick:e[2]||(e[2]=i=>l.onShowDialog("cancel"))},null,8,["title"])]),_:1},8,["title"]),o(m,{title:t.t("asyncClose")},{default:r(()=>[o(n,{title:t.t("asyncClose"),"is-link":"",onClick:e[3]||(e[3]=i=>l.onShowDialog("async"))},null,8,["title"])]),_:1},8,["title"]),o(m,{title:t.t("componentCall")},{default:r(()=>[o(n,{title:t.t("componentCall"),"is-link":"",onClick:e[4]||(e[4]=i=>l.onShowDialog("component"))},null,8,["title"])]),_:1},8,["title"]),o(p,{"use-slot":"",title:t.t("title"),show:u.show,"show-cancel-button":"","confirm-button-open-type":"getUserInfo",onClose:l.onClose,onGetuserinfo:l.getUserInfo},{default:r(()=>[B]),_:1},8,["title","show","onClose","onGetuserinfo"])])}const F=C(D,[["render",S]]);export{F as default};