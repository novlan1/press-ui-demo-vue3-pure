import{P as d,a as c}from"./press-sidebar-item-DBBO61dZ.js";import{P as p}from"./press-toast-BTkHEBTv.js";import{_ as m,o as u,c as h,e,k as i,r as n}from"./index-C8vugXWi.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./press-overlay-CxfxI6bt.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";import"./dialog-mixin-BkC47Jc3.js";import"./component-handler-BsZamlOU.js";const v={i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:d,PressSidebarItem:c,PressToast:p},data(){return{activeKey:0}},methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("selectTip")}${t+1}`)}}},b={class:"demo-wrap"};function g(t,f,k,y,a,r){const l=n("press-sidebar-item"),s=n("press-sidebar"),o=n("demo-block");return u(),h("div",b,[e(o,{title:t.t("basicUsage")},{default:i(()=>[e(s,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(o,{title:t.t("showBadge")},{default:i(()=>[e(s,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title"),dot:""},null,8,["title"]),e(l,{title:t.t("title"),badge:"5"},null,8,["title"]),e(l,{title:t.t("title"),badge:"99+"},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(o,{title:t.t("disabled")},{default:i(()=>[e(s,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title"),disabled:""},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(o,{title:t.t("changeEvent")},{default:i(()=>[e(s,{"active-key":a.activeKey,onChange:r.onChange},{default:i(()=>[e(l,{title:`${t.t("title")} 1`},null,8,["title"]),e(l,{title:`${t.t("title")} 2`},null,8,["title"]),e(l,{title:`${t.t("title")} 3`},null,8,["title"])]),_:1},8,["active-key","onChange"])]),_:1},8,["title"])])}const N=m(v,[["render",g]]);export{N as default};