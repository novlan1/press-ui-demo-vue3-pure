import{P as d,a as c}from"./press-sidebar-item-BG-kUMRi.js";import{P as m}from"./press-toast-CjXYLF1H.js";import{_ as p,o as u,c as h,e,k as i,r as n}from"./index-DccXyPO9.js";import"./relation-Ce8eT7mn.js";import"./parent-map-12wGqNaT.js";import"./press-overlay-Bf23QqgS.js";import"./press-transition-JizE2nFH.js";import"./system-Dmmn2gy0.js";import"./dialog-mixin-C3e4Y-Q2.js";import"./component-handler-xgBZ0Q_z.js";const v={i18n:{"zh-CN":{title:"标签名",showBadge:"徽标提示",disabled:"禁用选项",changeEvent:"监听切换事件",selectTip:"你切换到了"},"en-US":{showBadge:"Show Badge",disabled:"Disabled",changeEvent:"Change Event",selectTip:"You select "}},components:{PressSidebar:d,PressSidebarItem:c,PressToast:m},data(){return{activeKey:0}},methods:{onChange(t){console.log("[onChange] val: ",t),this.onGTip(`${this.t("selectTip")}${t+1}`)}}},b={class:"demo-wrap"};function g(t,f,k,y,a,r){const l=n("PressSidebarItem"),o=n("PressSidebar"),s=n("demo-block");return u(),h("div",b,[e(s,{title:t.t("basicUsage")},{default:i(()=>[e(o,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(s,{title:t.t("showBadge")},{default:i(()=>[e(o,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title"),dot:""},null,8,["title"]),e(l,{title:t.t("title"),badge:"5"},null,8,["title"]),e(l,{title:t.t("title"),badge:"99+"},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(s,{title:t.t("disabled")},{default:i(()=>[e(o,{"active-key":a.activeKey},{default:i(()=>[e(l,{title:t.t("title")},null,8,["title"]),e(l,{title:t.t("title"),disabled:""},null,8,["title"]),e(l,{title:t.t("title")},null,8,["title"])]),_:1},8,["active-key"])]),_:1},8,["title"]),e(s,{title:t.t("changeEvent")},{default:i(()=>[e(o,{"active-key":a.activeKey,onChange:r.onChange},{default:i(()=>[e(l,{title:`${t.t("title")} 1`},null,8,["title"]),e(l,{title:`${t.t("title")} 2`},null,8,["title"]),e(l,{title:`${t.t("title")} 3`},null,8,["title"])]),_:1},8,["active-key","onChange"])]),_:1},8,["title"])])}const I=p(v,[["render",g]]);export{I as default};
