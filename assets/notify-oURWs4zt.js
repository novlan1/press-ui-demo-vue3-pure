import{P as a}from"./press-notify-B5OQw27W.js";import{W as u}from"./color-DciZLlTH.js";import{g as f}from"./h5-handler-DRb7fUrS.js";import"./validator-C_cgqHAw.js";import{P as y}from"./press-cell-iwUCYNKV.js";import{_ as c,o as d,c as g,f as e,l,r as m}from"./index-VLx2MJJu.js";import"./press-transition-BPTpwSe7.js";import"./style-CpIyAjCl.js";import"./system-C5_2TD7H.js";import"./utils-D0lA7q9W.js";import"./add-unit-DeNeB5nf.js";import"./press-component-BmHMjgT0.js";import"./rect-CXQTALcu.js";import"./event-CFWsryW7.js";import"./support-passive-CNRHRm4O.js";import"./dialog-mixin-D_1GERbA.js";import"./component-handler-uXrzc3ZG.js";import"./press-icon-plus-zKCOzNHP.js";import"./press-info-DLY6PURR.js";import"./link-CAqpeIDw.js";const C={selector:"#press-notify",type:"danger",message:"",background:"",duration:3e3,show:!0,zIndex:110,top:0,color:u,safeAreaInsetTop:!1,onClick:()=>{},onOpened:()=>{},onClose:()=>{},animationDuration:300},k=f({defaultOptions:C,component:a});let p;p=k;const N=p,w={i18n:{"zh-CN":{primary:"主要通知",success:"成功通知",danger:"危险通知",warning:"警告通知",content:"通知内容",notifyType:"通知类型",customColor:"自定义颜色",customNotify:"自定义配置",componentCall:"组件调用",customDuration:"自定义时长"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration"}},components:{PressNotify:a,PressCell:y},data(){return{}},mounted(){},methods:{showNotify(t){let o=t;typeof t!="object"&&(o={message:t}),N({...o,top:44})}}},v={class:"demo-wrap"};function D(t,o,T,b,P,n){const i=m("press-cell"),r=m("demo-block");return d(),g("div",v,[e(r,{title:t.t("basicUsage")},{default:l(()=>[e(i,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=s=>n.showNotify(t.t("content")))},null,8,["title"])]),_:1},8,["title"]),e(r,{title:t.t("notifyType")},{default:l(()=>[e(i,{title:t.t("primary"),"is-link":"",onClick:o[1]||(o[1]=s=>n.showNotify({type:"primary",message:t.t("content")}))},null,8,["title"]),e(i,{title:t.t("success"),"is-link":"",onClick:o[2]||(o[2]=s=>n.showNotify({type:"success",message:t.t("content")}))},null,8,["title"]),e(i,{title:t.t("danger"),"is-link":"",onClick:o[3]||(o[3]=s=>n.showNotify({type:"danger",message:t.t("content")}))},null,8,["title"]),e(i,{title:t.t("warning"),"is-link":"",onClick:o[4]||(o[4]=s=>n.showNotify({type:"warning",message:t.t("content")}))},null,8,["title"])]),_:1},8,["title"]),e(r,{title:t.t("customNotify")},{default:l(()=>[e(i,{title:t.t("customColor"),"is-link":"",onClick:o[5]||(o[5]=s=>n.showNotify({message:t.t("customColor"),color:"#ad0000",background:"#ffe1e1"}))},null,8,["title"]),e(i,{title:t.t("customDuration"),"is-link":"",onClick:o[6]||(o[6]=s=>n.showNotify({message:t.t("customDuration"),duration:1e3}))},null,8,["title"])]),_:1},8,["title"])])}const K=c(w,[["render",D]]);export{K as default};
