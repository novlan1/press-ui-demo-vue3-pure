import{P as d,a as p}from"./press-sidebar-item-DPxXdg7n.js";import{P as m}from"./press-toast-tDsxRmLB.js";import{_ as c,o as u,c as h,f as t,l,r as n}from"./index-VLx2MJJu.js";import"./press-component-BmHMjgT0.js";import"./validator-C_cgqHAw.js";import"./relation-Ce8eT7mn.js";import"./parent-map-CQhFZDpB.js";import"./press-info-DLY6PURR.js";import"./utils-D0lA7q9W.js";import"./add-unit-DeNeB5nf.js";import"./press-icon-plus-zKCOzNHP.js";import"./style-CpIyAjCl.js";import"./press-loading-plus-DsguuShn.js";import"./press-overlay-CrlS5sXs.js";import"./press-transition-BPTpwSe7.js";import"./system-C5_2TD7H.js";import"./dialog-mixin-D_1GERbA.js";import"./component-handler-uXrzc3ZG.js";const v={i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:d,PressSidebarItem:p,PressToast:m},data(){return{activeKey:0}},methods:{onChange(e){console.log("[onChange] val: ",e),this.onGTip(`${this.t("selectTip")}${e+1}`)}}},b={class:"demo-wrap"};function f(e,g,y,_,o,r){const i=n("press-sidebar-item"),a=n("press-sidebar"),s=n("demo-block");return u(),h("div",b,[t(s,{title:e.t("basicUsage")},{default:l(()=>[t(a,{"active-key":o.activeKey},{default:l(()=>[t(i,{title:e.t("title")},null,8,["title"]),t(i,{title:e.t("title")},null,8,["title"]),t(i,{title:e.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),t(s,{title:e.t("showBadge")},{default:l(()=>[t(a,{"active-key":o.activeKey},{default:l(()=>[t(i,{title:e.t("title"),dot:""},null,8,["title"]),t(i,{title:e.t("title"),badge:"5"},null,8,["title"]),t(i,{title:e.t("title"),badge:"99+"},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),t(s,{title:e.t("disabled")},{default:l(()=>[t(a,{"active-key":o.activeKey},{default:l(()=>[t(i,{title:e.t("title")},null,8,["title"]),t(i,{title:e.t("title"),disabled:""},null,8,["title"]),t(i,{title:e.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),t(s,{title:e.t("changeEvent")},{default:l(()=>[t(a,{"active-key":o.activeKey,onChange:r.onChange},{default:l(()=>[t(i,{title:`${e.t("title")} 1`},null,8,["title"]),t(i,{title:`${e.t("title")} 2`},null,8,["title"]),t(i,{title:`${e.t("title")} 3`},null,8,["title"])]),_:1},8,["active-key","onChange"])]),_:1},8,["title"])])}const j=c(v,[["render",f]]);export{j as default};