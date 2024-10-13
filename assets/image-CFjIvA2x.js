import{P as y}from"./press-image-Bu8jArux.js";import{P as L}from"./press-col-_J9hvG_v.js";import{_ as S,$ as x,o as a,c as u,f as e,l as t,r as d,F as _,v as h,b as f,a as o,n as I,t as c,p as b,e as F}from"./index-F6Gg9UHQ.js";import{P as R}from"./press-row-BzLn8AX_.js";import{I as z,a as D}from"./index-WDKr3zKf.js";import"./press-transition-MQnSZ_jj.js";import"./relation-Ce8eT7mn.js";import"./parent-map-7gZjKT_J.js";import"./index-C6hpkcEb.js";import"./h5-handler-B7rfiamE.js";import"./component-handler-DG932W7Y.js";import"./press-overlay-C5JL8Y2J.js";import"./swiper-C4PkXdGk.js";const E=[[{mode:"aspectFit",titleClass:"image-title--gap",span:8},{mode:"aspectFill",titleClass:"image-title--gap",span:8},{mode:"center",titleClass:"",span:8}],[{mode:"widthFix",titleClass:"image-title--gap",span:8},{mode:"heightFix",titleClass:"image-title--long",span:16}]],B={i18n:{"zh-CN":{error:"加载失败提示",loading:"加载中提示",defaultTip:"默认提示",customTip:"自定义提示",mode:"模式",round:"圆形"},"en-US":{error:"Error",loading:"Loading",defaultTip:"Default",customTip:"Custom",mode:"Mode",round:"Round"}},components:{PressCol:L,PressRow:R,PressImage:y,PressLoadingPlus:x,ImagePreview:z},data(){return{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",MODE_LIST:E}},methods:{click(){console.log("[click]"),D({selector:"#imagePreviewRef",images:[this.src]}).then(()=>{})},getIndex(s,C){return`${s}-${C}`}}},M=s=>(b("data-v-5d693cb8"),s=s(),F(),s),N={class:"demo-wrap"},O={class:"demo-grid"},U={class:"demo-grid"},V={class:"demo-grid"},j={class:"image-title"},q={class:"demo-grid"},H={class:"image-title"},A={class:"demo-grid"},G={class:"image-title"},J={class:"demo-grid"},K=M(()=>o("span",{style:{"font-size":"14px"}},"加载失败",-1)),Q={class:"image-title"};function W(s,C,X,Y,m,l){const r=d("PressImage"),p=d("demo-block"),n=d("PressCol"),g=d("PressRow"),v=d("PressLoadingPlus"),T=d("ImagePreview");return a(),u("div",N,[e(p,{title:s.t("basicUsage")},{default:t(()=>[e(r,{"show-loading":!0,src:m.src,width:"100",height:"100",onClick:l.click},null,8,["src","onClick"])]),_:1},8,["title"]),e(p,{title:s.t("mode")},{default:t(()=>[(a(!0),u(_,null,h(m.MODE_LIST,(w,P)=>(a(),f(g,{key:l.getIndex(P,"row")},{default:t(()=>[(a(!0),u(_,null,h(w,(i,k)=>(a(),f(n,{key:l.getIndex(k,"col"),span:i.span},{default:t(()=>[o("div",O,[e(r,{"show-loading":!0,width:"100",height:"100",src:m.src,mode:i.mode,onClick:l.click},null,8,["src","mode","onClick"]),o("span",{class:I(["image-title",i.titleClass])},c(i.mode),3)])]),_:2},1032,["span"]))),128))]),_:2},1024))),128))]),_:1},8,["title"]),e(p,{title:s.t("round")},{default:t(()=>[(a(!0),u(_,null,h(m.MODE_LIST,(w,P)=>(a(),f(g,{key:l.getIndex(P,"row")},{default:t(()=>[(a(!0),u(_,null,h(w,(i,k)=>(a(),f(n,{key:l.getIndex(k,"col"),span:i.span},{default:t(()=>[o("div",U,[e(r,{"show-loading":!0,width:"100",height:"100",src:m.src,round:"",mode:i.mode,onClick:l.click},null,8,["src","mode","onClick"]),o("span",{class:I(["image-title",i.titleClass])},c(i.mode),3)])]),_:2},1032,["span"]))),128))]),_:2},1024))),128))]),_:1},8,["title"]),e(p,{title:s.t("loading")},{default:t(()=>[e(g,null,{default:t(()=>[e(n,{span:8},{default:t(()=>[o("div",V,[e(r,{"show-loading":!0,width:"100",height:"100"}),o("span",j,c(s.t("defaultTip")),1)])]),_:1}),e(n,{span:8},{default:t(()=>[o("div",q,[e(r,{"show-loading":!0,width:"100",height:"100"},{loading:t(()=>[e(v,{type:"spinner",size:"20"})]),_:1}),o("span",H,c(s.t("customTip")),1)])]),_:1})]),_:1})]),_:1},8,["title"]),e(p,{title:s.t("error")},{default:t(()=>[e(g,null,{default:t(()=>[e(n,{span:8},{default:t(()=>[o("div",A,[e(r,{"show-loading":!0,src:"src",width:"100px",height:"100px"}),o("span",G,c(s.t("defaultTip")),1)])]),_:1}),e(n,{span:8},{default:t(()=>[o("div",J,[e(r,{"show-loading":!0,src:"src",width:"100px",height:"100px"},{error:t(()=>[K]),_:1}),o("span",Q,c(s.t("customTip")),1)])]),_:1})]),_:1})]),_:1},8,["title"]),e(T,{ref:"imagePreviewRef",mode:"functional"},null,512)])}const me=S(B,[["render",W],["__scopeId","data-v-5d693cb8"]]);export{me as default};
