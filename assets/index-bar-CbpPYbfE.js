import{P as f}from"./press-cell-CpEJn8Fu.js";import{a as u,P as x}from"./press-index-bar-BK1orPi9.js";import{_,o as n,c as i,f as o,n as h,F as S,i as y,v as C,r as l}from"./index-DU6LSpJC.js";import"./press-icon-plus-B9pxPV2T.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-Cexnh41C.js";import"./press-component-BYCAM0Tw.js";import"./validator-CMi1mmGD.js";import"./link-Ds6ljOst.js";import"./event-DUjdombs.js";import"./support-passive-CNRHRm4O.js";import"./rect-ZZRvyvMD.js";import"./scroll-DZ_Dh06R.js";import"./system-BAdrsxg_.js";import"./relation-Cl7c7lz0.js";import"./parent-map-CSroF5oj.js";import"./color-DciZLlTH.js";function k(){const t=[];for(let e=65;e<91;e++)t.push(String.fromCharCode(e));return t}const L=k(),w={i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},components:{PressCell:f,PressIndexBar:u,PressIndexAnchor:x},data(){let t="",e=0;return e=44,{anchorList:L,wrapStyle:t,stickyOffsetTop:e}},mounted(){},methods:{onSelect(t){console.log("[onSelect]: ",t)}}};function I(t,e,P,g,r,p){const c=l("press-index-anchor"),s=l("press-cell"),m=l("press-index-bar");return n(),i("div",{class:"demo-wrap",style:C(r.wrapStyle)},[o(m,{"sticky-offset-top":r.stickyOffsetTop,"window-top":44,onSelect:p.onSelect},{default:h(()=>[(n(!0),i(S,null,y(r.anchorList,(a,d)=>(n(),i("div",{key:d},[o(c,{index:a},null,8,["index"]),o(s,{title:t.t("text")},null,8,["title"]),o(s,{title:t.t("text")},null,8,["title"]),o(s,{title:t.t("text")},null,8,["title"])]))),128))]),_:1},8,["sticky-offset-top","onSelect"])],4)}const J=_(w,[["render",I]]);export{J as default};