import{P as p}from"./press-cell-Dr4o2Qkj.js";import{P as d}from"./press-toast-D6LilGxp.js";import{T as o}from"./handler-B3AnFZQL.js";import{_ as T,o as u,c as f,e as i,k as r,r as m}from"./index-88cP1sOH.js";import"./link-JqS4mJdw.js";import"./event-CnosvntJ.js";import"./press-overlay-cZvGLKZ5.js";import"./press-transition-C_p2VzW1.js";import"./system-223ZhjOU.js";import"./dialog-mixin-BwBOy7h3.js";import"./component-handler-DOKIj_NN.js";import"./h5-handler-DdwNDl_W.js";const h={i18n:{"zh-CN":{customTip:"自定义提示",text:"文字提示",loading:"加载提示",default:"默认",success:"成功提示",fail:"失败提示",dynamic:"动态更新提示",html:"HTML提示",toastTip:"我是提示文案，建议不超过十五字~",loadingTip:"加载中...",successTip:"成功文案",failTip:"失败文案",htmlTip:'我是提示文案，建议不超过<span style="color: #07A872">十五字</span>~',dynamicTip:t=>`倒计时 ${t} 秒`,noDestroy:"不消失"},"en-US":{customTip:"Custom Tip",text:"Show",loading:"Loading",default:"Default",success:"Success",fail:"Fail",dynamic:"Dynamic",html:"HTML",toastTip:"Some messages",loadingTip:"Loading...",successTip:"Success",failTip:"Fail",htmlTip:'Some <span style="color: #07A872">messages</span>',dynamicTip:t=>`${t} seconds`,noDestroy:"Not Destroy"}},components:{PressCell:p,PressToast:d},data(){return{customStyle:"",timer:null}},methods:{onShowToast(){o(this.t("toastTip"))},onShowToastLoading(t,s=3e3){if(o.clear(),t==="normal"){o.loading({message:this.t("loadingTip"),forbidClick:!!s,duration:s});return}o.loading({message:this.t("loadingTip"),forbidClick:!!s,loadingType:"spinner",duration:s})},onShowToastSuccess(t){if(t==="success"){o.success(this.t("successTip"));return}o.fail(this.t("failTip"))},onShowDynamicToast(){const t=o.loading({duration:0,forbidClick:!0,message:this.t("dynamicTip",3)});let s=3;clearInterval(this.timer),this.timer=setInterval(()=>{s-=1,s?t.set("dataMessage",this.t("dynamicTip",s)):(clearInterval(this.timer),o.clear())},1e3)},onShowHtmlToast(){o({message:this.t("htmlTip"),duration:3e3,type:"html"})}}},k={class:"demo-wrap"};function g(t,s,S,y,C,e){const l=m("press-cell"),a=m("demo-block"),c=m("press-toast");return u(),f("div",k,[i(a,{title:t.t("text")},{default:r(()=>[i(l,{title:t.t("check"),"is-link":"",onClick:e.onShowToast},null,8,["title","onClick"])]),_:1},8,["title"]),i(a,{title:t.t("loading")},{default:r(()=>[i(l,{title:t.t("default"),"is-link":"",onClick:s[0]||(s[0]=n=>e.onShowToastLoading("normal"))},null,8,["title"]),i(l,{title:"Spinner","is-link":"",onClick:s[1]||(s[1]=n=>e.onShowToastLoading("spinner"))}),i(l,{title:t.t("noDestroy"),"is-link":"",onClick:s[2]||(s[2]=n=>e.onShowToastLoading("normal",0))},null,8,["title"])]),_:1},8,["title"]),i(a,{title:t.t("customTip")},{default:r(()=>[i(l,{title:t.t("success"),"is-link":"",onClick:s[3]||(s[3]=n=>e.onShowToastSuccess("success"))},null,8,["title"]),i(l,{title:t.t("fail"),"is-link":"",onClick:s[4]||(s[4]=n=>e.onShowToastSuccess("fail"))},null,8,["title"]),i(l,{title:t.t("dynamic"),"is-link":"",onClick:e.onShowDynamicToast},null,8,["title","onClick"]),i(l,{title:t.t("html"),"is-link":"",onClick:e.onShowHtmlToast},null,8,["title","onClick"])]),_:1},8,["title"]),i(c,{id:"press-toast",ref:"press-toast"},null,512)])}const A=T(h,[["render",g]]);export{A as default};