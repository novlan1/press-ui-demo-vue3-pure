import{P as m}from"./press-notify-DDyrv1kT.js";import{W as f}from"./color-DciZLlTH.js";import{g as p}from"./h5-handler-DdwNDl_W.js";import{P as y}from"./press-cell-Dr4o2Qkj.js";import{_ as c,o as d,c as g,e,k as r,r as a}from"./index-88cP1sOH.js";import"./press-transition-C_p2VzW1.js";import"./system-223ZhjOU.js";import"./rect-CHEJpnv9.js";import"./event-CnosvntJ.js";import"./dialog-mixin-BwBOy7h3.js";import"./component-handler-DOKIj_NN.js";import"./link-JqS4mJdw.js";const C={selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:f,safeAreaInsetTop:!1,onClick:()=>{},onOpened:()=>{},onClose:()=>{},animationDuration:300},k=p({defaultOptions:C,component:m});let u;u=k;const N=u,w={i18n:{"zh-CN":{primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",componentCall:"组件调用",customDuration:"自定义时长"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}},components:{PressNotify:m,PressCell:y},data(){return{}},mounted(){},methods:{showNotify(t){let o=t;typeof t!="object"&&(o={message:t}),N({...o,top:44})}}},v={class:"demo-wrap"};function D(t,o,T,b,P,n){const s=a("press-cell"),l=a("demo-block");return d(),g("div",v,[e(l,{title:t.t("basicUsage")},{default:r(()=>[e(s,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=i=>n.showNotify(t.t("content")))},null,8,["title"])]),_:1},8,["title"]),e(l,{title:t.t("notifyType")},{default:r(()=>[e(s,{title:t.t("primary"),"is-link":"",onClick:o[1]||(o[1]=i=>n.showNotify({type:"primary",message:t.t("content")}))},null,8,["title"]),e(s,{title:t.t("success"),"is-link":"",onClick:o[2]||(o[2]=i=>n.showNotify({type:"success",message:t.t("content")}))},null,8,["title"]),e(s,{title:t.t("danger"),"is-link":"",onClick:o[3]||(o[3]=i=>n.showNotify({type:"danger",message:t.t("content")}))},null,8,["title"]),e(s,{title:t.t("warning"),"is-link":"",onClick:o[4]||(o[4]=i=>n.showNotify({type:"warning",message:t.t("content")}))},null,8,["title"])]),_:1},8,["title"]),e(l,{title:t.t("customNotify")},{default:r(()=>[e(s,{title:t.t("customColor"),"is-link":"",onClick:o[5]||(o[5]=i=>n.showNotify({message:t.t("customColor"),color:"#ad0000",background:"#ffe1e1"}))},null,8,["title"]),e(s,{title:t.t("customDuration"),"is-link":"",onClick:o[6]||(o[6]=i=>n.showNotify({message:t.t("customDuration"),duration:1e3}))},null,8,["title"])]),_:1},8,["title"])])}const F=c(w,[["render",D]]);export{F as default};