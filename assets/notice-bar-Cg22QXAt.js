import{P as r}from"./press-notice-bar-CCQ1QEtE.js";import{_ as a,o as m,c as p,f as t,n,r as c}from"./index-BXJiSO9X.js";import"./press-icon-plus-BVVeYod4.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-CaSyg39j.js";import"./press-component-DoZYj-_b.js";import"./system-BAdrsxg_.js";import"./rect-CMQ5Gq1K.js";import"./event-_7uzVFJT.js";import"./support-passive-CNRHRm4O.js";const u={i18n:{"zh-CN":{text:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",mode:"通知栏模式",content:"内容",wrapable:"多行展示",shortText:"技术是开发它的人的共同灵魂。",scrollable:"滚动播放",customStyle:"自定义样式",verticalScroll:"垂直滚动",customSpeed:"自定义滚动速率"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll",customSpeed:"Speed"}},components:{PressNoticeBar:r},data(){return{sectionStyle:"margin:0;"}},methods:{onClose(e){console.log("[onClose] val",e)}}},d={class:"demo-wrap"};function f(e,y,b,S,l,i){const o=c("press-notice-bar"),s=c("demo-block");return m(),p("div",d,[t(s,{title:e.t("basicUsage"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{scrollable:"","left-icon":"volume-o",text:e.t("text")},null,8,["text"])]),_:1},8,["title","section-style"]),t(s,{title:e.t("scrollable"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{scrollable:"",text:e.t("shortText")},null,8,["text"]),t(o,{scrollable:!1,text:e.t("text")},null,8,["text"])]),_:1},8,["title","section-style"]),t(s,{title:e.t("wrapable"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{wrapable:"",scrollable:!1,text:e.t("text")},null,8,["text"])]),_:1},8,["title","section-style"]),t(s,{title:e.t("mode"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{mode:"closeable",text:e.t("shortText"),onClose:i.onClose},null,8,["text","onClose"]),t(o,{mode:"link",text:e.t("shortText")},null,8,["text"])]),_:1},8,["title","section-style"]),t(s,{title:e.t("customStyle"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{color:"#1989fa",background:"#ecf9ff","left-icon":"info-o",text:e.t("shortText")},null,8,["text"])]),_:1},8,["title","section-style"]),t(s,{title:e.t("customSpeed"),"section-style":l.sectionStyle},{default:n(()=>[t(o,{text:e.t("shortText"),speed:100,scrollable:"","left-icon":"https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"},null,8,["text"])]),_:1},8,["title","section-style"])])}const z=a(u,[["render",f]]);export{z as default};
