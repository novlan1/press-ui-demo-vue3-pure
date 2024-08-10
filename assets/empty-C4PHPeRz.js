import{a as v,P as w}from"./press-tabs-0Uyphaoj.js";import{d as I,a as O}from"./press-component-D9D_j5DA.js";import{P as R}from"./press-icon-D1gQRHbV.js";import{_ as f,r as m,o as n,c,b as h,F as S,a,i as u,m as _,d as z,t as b,n as B,f as e,l as s,y as F,A as H}from"./index-BOnk8Yuo.js";import{P as N}from"./press-button-LyBgRGzR.js";import"./utils-C2tViYFs.js";import"./add-unit-B8Dm0KXN.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./system-BWskc-Wq.js";import"./adapter-CjQLvGzT.js";import"./press-info-C1OldtTD.js";import"./press-sticky-C1pOzlRn.js";import"./style-CpIyAjCl.js";import"./rect-OZQe9sas.js";import"./bind-event-Cy4SDMoC.js";import"./event-CpAS7Alu.js";import"./support-passive-CNRHRm4O.js";import"./touch-Djes3Zvx.js";import"./scroll-view-EcWlqEmG.js";import"./press-icon-plus-C7Qb4xCs.js";import"./press-loading-plus-Ckw1pTMZ.js";import"./press-loading-Cr8EnK_G.js";import"./button-ge1sxQBA.js";const U=["error","search","default","network"];function V(t){return U.indexOf(t)!==-1?`https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fempty-image-${t}.png`:t}const A={imageUrl:V},g={E_SPORT:"e-sport",HOR:"hor"},L={name:"PressEmpty",components:{PressIcon:R},options:{...I,styleIsolation:"shared"},props:{description:{type:String,default:""},type:{type:String,default:""},image:{type:String,default:"default"},imageCustomStyle:{type:String,default:""},customStyle:{type:String,default:""},...O},emits:[],data(){return{computed:A}},computed:{isESportType(){return this.type===g.E_SPORT},isHor(){return this.type===g.HOR},emptyClass(){const{isESportType:t,customClass:d,isHor:o}=this;return[t?"press-empty--e-sport":"",o?"press-empty--hor":"",d].join(" ")}},mounted(){},methods:{}},q={key:1,class:"press-empty__icon--hor"},D={class:"press-empty__image"},j={class:"press-empty__image"},M=["src"],X={class:"press-empty__description"},Y={class:"press-empty__description"},G={class:"press-empty__bottom"};function J(t,d,o,k,i,l){const r=m("press-icon");return n(),c("div",{class:B(["press-empty",l.emptyClass]),style:_(o.customStyle)},[l.isESportType?(n(),h(r,{key:0,type:"empty",size:"10.66667vmin","custom-class":"press-icon--e-sport"})):l.isHor?(n(),c("div",q)):(n(),c(S,{key:2},[a("div",D,[u(t.$slots,"image",{},void 0,!0)]),a("div",j,[o.image?(n(),c("img",{key:0,class:"press-empty__image__img",src:i.computed.imageUrl(o.image),style:_(o.imageCustomStyle)},null,12,M)):z("",!0)])],64)),a("div",X,[u(t.$slots,"description",{},void 0,!0)]),a("div",Y,b(o.description),1),a("div",G,[u(t.$slots,"default",{},void 0,!0)])],6)}const K=f(L,[["render",J],["__scopeId","data-v-316c3791"]]),Q={i18n:{"zh-CN":{error:"通用错误",search:"搜索提示",network:"网络错误",imageType:"图片类型",description:"描述文字",customImage:"自定义图片",bottomContent:"底部内容"},"en-US":{error:"Error",search:"Search",network:"Network",imageType:"Image Type",description:"Description",customImage:"Custom Image",bottomContent:"Bottom Content"}},components:{PressTabs:v,PressTab:w,PressEmpty:K,PressButton:N},data(){return{sectionStyle:"",imgTypeList:[{name:"error",title:this.t("error")},{name:"network",title:this.t("network")},{name:"search",title:this.t("search")}]}},methods:{}},W={class:"demo-wrap"};function Z(t,d,o,k,i,l){const r=m("press-empty"),p=m("demo-block"),T=m("press-tab"),P=m("press-tabs"),C=m("press-button");return n(),c("div",W,[e(p,{title:t.t("basicUsage"),"section-style":i.sectionStyle},{default:s(()=>[e(r,{description:t.t("description")},null,8,["description"])]),_:1},8,["title","section-style"]),e(p,{title:t.t("imageType"),"section-style":i.sectionStyle},{default:s(()=>[e(P,null,{default:s(()=>[(n(!0),c(S,null,F(i.imgTypeList,(y,E)=>(n(),h(T,{key:E,title:y.title},{default:s(()=>[e(r,{image:y.name,description:t.t("description")},null,8,["image","description"])]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title","section-style"]),e(p,{title:t.t("customImage"),"section-style":i.sectionStyle},{default:s(()=>[e(r,{"custom-class":"custom-image",image:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fcustom-empty-image.png","image-custom-style":"width:90px;height:90px",description:t.t("description")},null,8,["description"])]),_:1},8,["title","section-style"]),e(p,{title:t.t("bottomContent"),"section-style":i.sectionStyle},{default:s(()=>[e(r,{description:t.t("description")},{default:s(()=>[e(C,{round:"",type:"danger","custom-class":"bottom-button"},{default:s(()=>[H(b(t.t("button")),1)]),_:1})]),_:1},8,["description"])]),_:1},8,["title","section-style"]),e(p,{title:"E-SPORT","section-style":i.sectionStyle},{default:s(()=>[e(r,{type:"e-sport",description:t.t("description"),"custom-style":"height: 300px;"},null,8,["description"])]),_:1},8,["section-style"]),e(p,{title:"HOR","header-style":"background: #f7f8fa;","section-style":"background: #192841;color: #fff;margin: 0;padding: 10px 0;"},{default:s(()=>[e(r,{type:"hor",description:t.t("description")},null,8,["description"])]),_:1})])}const Tt=f(Q,[["render",Z]]);export{Tt as default};
