import{I as h,i as w}from"./index-BzAwmtMg.js";import{P as g}from"./press-cell-BLTCMYRJ.js";import{_ as I,o as f,c as v,e as t,k as r,r as p}from"./index-C8vugXWi.js";import"./index-BUh0a6PW.js";import"./h5-handler-B_4118GU.js";import"./component-handler-BsZamlOU.js";import"./press-overlay-CxfxI6bt.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";import"./swiper-CvHtNh8g.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";const u={IMAGE_PREVIEW:"press-image-preview"},P={i18n:{"zh-CN":{previewImage:"预览图片",customType:"传入配置",startPosition:"指定初始位置",showCloseIcon:"展示关闭按钮",watchCloseEvent:"监听关闭事件",asyncClose:"异步关闭",componentUse:"组件调用",closeTip:"关闭"},"en-US":{previewImage:"Preview Image",customType:"Custom Config",startPosition:"Set Start Position",showCloseIcon:"Show Close Icon",watchCloseEvent:"Watch Close Event",asyncClose:"Async Close",componentUse:"Component Use",closeTip:"Close"}},components:{ImagePreviewComp:h,PressCell:g},data(){return{show:!1,customStyle:"",images:["https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_9f901ce42e18990883.jpeg","https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_8f25b9e2e75f6754ad.jpeg","https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_260c4142c7225b5f73.jpeg"],FUNCTIONAL_ID_MAP:u}},mounted(){},methods:{onShowImagePreview(){w({context:this,selector:`#${u.IMAGE_PREVIEW}`,images:this.images,customStyle:this.customStyle}).then(()=>{})},onShowComponent(){this.show=!0},onShowCustomType(e){let o,a,n;e==="startPosition"?o=1:e==="showCloseIcon"?a=!0:e==="asyncClose"&&(n=!0),w({context:this,selector:`#${u.IMAGE_PREVIEW}`,images:this.images,customStyle:this.customStyle,startPosition:o,closeable:a,asyncClose:n}).then(()=>{e==="watchCloseEvent"&&this.onGTip(this.t("closeTip"))}).catch(({context:s})=>{n&&setTimeout(()=>{s.closeDialog()},2e3)})}}},k={class:"demo-wrap"};function y(e,o,a,n,s,i){const l=p("press-cell"),m=p("demo-block"),C=p("ImagePreviewComp");return f(),v("div",k,[t(m,{title:e.t("basicUsage")},{default:r(()=>[t(l,{title:e.t("previewImage"),"is-link":"",onClick:i.onShowImagePreview},null,8,["title","onClick"])]),_:1},8,["title"]),t(m,{title:e.t("customType")},{default:r(()=>[t(l,{title:e.t("startPosition"),"is-link":"",onClick:o[0]||(o[0]=c=>i.onShowCustomType("startPosition"))},null,8,["title"]),t(l,{title:e.t("showCloseIcon"),"is-link":"",onClick:o[1]||(o[1]=c=>i.onShowCustomType("showCloseIcon"))},null,8,["title"]),t(l,{title:e.t("watchCloseEvent"),"is-link":"",onClick:o[2]||(o[2]=c=>i.onShowCustomType("watchCloseEvent"))},null,8,["title"])]),_:1},8,["title"]),t(m,{title:e.t("asyncClose")},{default:r(()=>[t(l,{title:e.t("asyncClose"),"is-link":"",onClick:o[3]||(o[3]=c=>i.onShowCustomType("asyncClose"))},null,8,["title"])]),_:1},8,["title"]),t(m,{title:e.t("componentUse")},{default:r(()=>[t(l,{title:e.t("componentUse"),"is-link":"",onClick:i.onShowComponent},null,8,["title","onClick"])]),_:1},8,["title"]),t(C,{show:s.show,closeable:"","start-position":1,images:s.images,"custom-style":s.customStyle,onClose:o[4]||(o[4]=c=>s.show=!1)},null,8,["show","images","custom-style"]),t(C,{id:s.FUNCTIONAL_ID_MAP.IMAGE_PREVIEW,ref:s.FUNCTIONAL_ID_MAP.IMAGE_PREVIEW,mode:"functional"},null,8,["id"])])}const W=I(P,[["render",y]]);export{W as default};
