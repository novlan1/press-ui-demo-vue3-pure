import{_ as p,a0 as u,o as d,c as m,e,k as o,r as a,a as s,H as r,t as c}from"./index-BIszYdsF.js";const _={i18n:{"zh-CN":{type:"加载类型",text:"加载文案",size:"自定义大小",color:"自定义颜色",vertical:"垂直排列",textColor:"自定义文本颜色"},"en-US":{type:"Type",text:"Text",size:"Size",color:"Color",vertical:"Vertical",textColor:"Text Color"}},components:{PressLoadingPlus:u},data(){return{isOpen:!1,customStyle:"margin-left: 20px;"}},methods:{onSwitchChange(){this.isOpen=!this.isOpen}}},y={class:"demo-wrap"};function f(l,v,g,h,n,z){const t=a("press-loading-plus"),i=a("demo-block");return d(),m("div",y,[e(i,{title:l.t("type")},{default:o(()=>[s("div",null,[e(t)]),s("div",null,[e(t,{type:"spinner","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),e(i,{title:l.t("color")},{default:o(()=>[s("div",null,[e(t,{color:"#1989fa"})]),s("div",null,[e(t,{type:"spinner",color:"#1989fa","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),e(i,{title:l.t("size")},{default:o(()=>[s("div",null,[e(t,{size:"15"})]),s("div",null,[e(t,{type:"spinner",size:"38","custom-style":n.customStyle},null,8,["custom-style"])])]),_:1},8,["title"]),e(i,{title:l.t("text")},{default:o(()=>[e(t,{size:"24px"},{default:o(()=>[r(c(l.t("loading")),1)]),_:1})]),_:1},8,["title"]),e(i,{title:l.t("vertical")},{default:o(()=>[e(t,{size:"24px",vertical:""},{default:o(()=>[r(c(l.t("loading")),1)]),_:1})]),_:1},8,["title"])])}const C=p(_,[["render",f],["__scopeId","data-v-ee48b9b8"]]);export{C as default};
