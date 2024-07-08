import{P as x}from"./press-image-DPM1izwy.js";import{P as y}from"./press-col-D4zjxST1.js";import{P as L}from"./press-loading-plus-BbOWp1Vm.js";import{P as S}from"./press-row-DbJm68am.js";import{I as F,i as R}from"./index-Qp0VI2p-.js";import{_ as z,o as a,c as u,f as e,n as t,F as _,i as h,a as o,t as d,r as c,b as f,x as I,p as D,e as E}from"./index-DU6LSpJC.js";import"./add-unit-Df5pRFBE.js";import"./utils-Do31p4kb.js";import"./press-icon-plus-B9pxPV2T.js";import"./press-info-Cexnh41C.js";import"./press-component-BYCAM0Tw.js";import"./validator-CMi1mmGD.js";import"./press-transition-DzNVel1u.js";import"./system-BAdrsxg_.js";import"./relation-Cl7c7lz0.js";import"./parent-map-CSroF5oj.js";import"./index-CEKdTDmb.js";import"./h5-handler-Bvh5SLr0.js";import"./component-handler-BybOX7us.js";import"./press-overlay-D3LjkYjh.js";import"./functional-CczSRz4G.js";const b=[[{mode:"aspectFit",titleClass:"image-title--gap",span:8},{mode:"aspectFill",titleClass:"image-title--gap",span:8},{mode:"center",titleClass:"",span:8}],[{mode:"widthFix",titleClass:"image-title--gap",span:8},{mode:"heightFix",titleClass:"image-title--long",span:16}]],B={i18n:{"zh-CN":{error:"加载失败提示",loading:"加载中提示",defaultTip:"默认提示",customTip:"自定义提示",mode:"模式",round:"圆形"},"en-US":{error:"Error",loading:"Loading",defaultTip:"Default",customTip:"Custom",mode:"Mode",round:"Round"}},components:{PressCol:y,PressRow:S,PressImage:x,PressLoadingPlus:L,ImagePreview:F},data(){return{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",MODE_LIST:b}},methods:{click(){console.log("[click]"),R({selector:"#imagePreviewRef",images:[this.src]}).then(()=>{})},getIndex(s,C){return`${s}-${C}`}}},M=s=>(D("data-v-e9e61ced"),s=s(),E(),s),N={class:"demo-wrap"},O={class:"demo-grid"},U={class:"demo-grid"},V={class:"demo-grid"},j={class:"image-title"},q={class:"demo-grid"},A={class:"image-title"},G={class:"demo-grid"},H={class:"image-title"},J={class:"demo-grid"},K=M(()=>o("span",{style:{"font-size":"14px"}},"加载失败",-1)),Q={class:"image-title"};function W(s,C,X,Y,m,r){const l=c("PressImage"),p=c("demo-block"),n=c("PressCol"),g=c("PressRow"),v=c("PressLoadingPlus"),T=c("ImagePreview");return a(),u("div",N,[e(p,{title:s.t("basicUsage")},{default:t(()=>[e(l,{"show-loading":!0,src:m.src,width:"100",height:"100",onClick:r.click},null,8,["src","onClick"])]),_:1},8,["title"]),e(p,{title:s.t("mode")},{default:t(()=>[(a(!0),u(_,null,h(m.MODE_LIST,(w,P)=>(a(),f(g,{key:r.getIndex(P,"row")},{default:t(()=>[(a(!0),u(_,null,h(w,(i,k)=>(a(),f(n,{key:r.getIndex(k,"col"),span:i.span},{default:t(()=>[o("div",O,[e(l,{"show-loading":!0,width:"100",height:"100",src:m.src,mode:i.mode,onClick:r.click},null,8,["src","mode","onClick"]),o("span",{class:I(["image-title",i.titleClass])},d(i.mode),3)])]),_:2},1032,["span"]))),128))]),_:2},1024))),128))]),_:1},8,["title"]),e(p,{title:s.t("round")},{default:t(()=>[(a(!0),u(_,null,h(m.MODE_LIST,(w,P)=>(a(),f(g,{key:r.getIndex(P,"row")},{default:t(()=>[(a(!0),u(_,null,h(w,(i,k)=>(a(),f(n,{key:r.getIndex(k,"col"),span:i.span},{default:t(()=>[o("div",U,[e(l,{"show-loading":!0,width:"100",height:"100",src:m.src,round:"",mode:i.mode,onClick:r.click},null,8,["src","mode","onClick"]),o("span",{class:I(["image-title",i.titleClass])},d(i.mode),3)])]),_:2},1032,["span"]))),128))]),_:2},1024))),128))]),_:1},8,["title"]),e(p,{title:s.t("loading")},{default:t(()=>[e(g,null,{default:t(()=>[e(n,{span:8},{default:t(()=>[o("div",V,[e(l,{"show-loading":!0,width:"100",height:"100"}),o("span",j,d(s.t("defaultTip")),1)])]),_:1}),e(n,{span:8},{default:t(()=>[o("div",q,[e(l,{"show-loading":!0,width:"100",height:"100"},{loading:t(()=>[e(v,{type:"spinner",size:"20"})]),_:1}),o("span",A,d(s.t("customTip")),1)])]),_:1})]),_:1})]),_:1},8,["title"]),e(p,{title:s.t("error")},{default:t(()=>[e(g,null,{default:t(()=>[e(n,{span:8},{default:t(()=>[o("div",G,[e(l,{"show-loading":!0,src:"src",width:"100px",height:"100px"}),o("span",H,d(s.t("defaultTip")),1)])]),_:1}),e(n,{span:8},{default:t(()=>[o("div",J,[e(l,{"show-loading":!0,src:"src",width:"100px",height:"100px"},{error:t(()=>[K]),_:1}),o("span",Q,d(s.t("customTip")),1)])]),_:1})]),_:1})]),_:1},8,["title"]),e(T,{ref:"imagePreviewRef",mode:"functional"},null,512)])}const Pe=z(B,[["render",W],["__scopeId","data-v-e9e61ced"]]);export{Pe as default};