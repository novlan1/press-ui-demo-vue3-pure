import{P as p}from"./press-loading-plus-CUHs_PRb.js";import{_ as u,o as d,c as m,f as t,l as o,r,a as s,A as a,t as c}from"./index-C7cPaXoT.js";import"./utils-BWNRMl9G.js";import"./add-unit-Ci6RUrQO.js";import"./style-CpIyAjCl.js";import"./press-component-DP30Q1Pq.js";const _={i18n:{"zh-CN":{type:"加载类型",text:"加载文案",size:"自定义大小",color:"自定义颜色",vertical:"垂直排列",textColor:"自定义文本颜色"},"en-US":{type:"Type",text:"Text",size:"Size",color:"Color",vertical:"Vertical",textColor:"Text Color"}},components:{PressLoadingPlus:p},data(){return{isOpen:!1,customStyle:"margin-left: 20px;"}},methods:{onSwitchChange(){this.isOpen=!this.isOpen}}},f={class:"demo-wrap"};function y(l,v,g,h,n,z){const e=r("press-loading-plus"),i=r("demo-block");return d(),m("div",f,[t(i,{title:l.t("type")},{default:o(()=>[s("div",null,[t(e)]),s("div",null,[t(e,{type:"spinner","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),t(i,{title:l.t("color")},{default:o(()=>[s("div",null,[t(e,{color:"#1989fa"})]),s("div",null,[t(e,{type:"spinner",color:"#1989fa","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),t(i,{title:l.t("size")},{default:o(()=>[s("div",null,[t(e,{size:"15"})]),s("div",null,[t(e,{type:"spinner",size:"38","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),t(i,{title:l.t("text")},{default:o(()=>[t(e,{size:"24px"},{default:o(()=>[a(c(l.t("loading")),1)]),_:1})]),_:1},8,["title"]),t(i,{title:l.t("vertical")},{default:o(()=>[t(e,{size:"24px",vertical:""},{default:o(()=>[a(c(l.t("loading")),1)]),_:1})]),_:1},8,["title"])])}const P=u(_,[["render",y],["__scopeId","data-v-ee48b9b8"]]);export{P as default};