import{P as k,a as y}from"./press-tab-Dry5l3wd.js";import{_ as v,o as n,c as b,f as a,n as l,F as m,i as h,b as f,a as r,t as o,d as g,r as p}from"./index-BXJiSO9X.js";import"./press-info-CaSyg39j.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-sticky-Dn0C_uTG.js";import"./rect-CMQ5Gq1K.js";import"./system-BAdrsxg_.js";import"./press-component-DoZYj-_b.js";import"./bind-event-Br1zImLd.js";import"./event-_7uzVFJT.js";import"./support-passive-CNRHRm4O.js";import"./touch-Djes3Zvx.js";import"./relation-Cl7c7lz0.js";import"./parent-map-BqFbVUej.js";const C={i18n:{"zh-CN":{tab:"标签 ",title2:"标签栏滚动",title3:"禁用标签",title4:"样式风格",title5:"点击事件",title6:"粘性布局",title7:"自定义标签",title8:"切换动画",title9:"滑动切换",title10:"滚动导航",horTitle:"HOR",disabled:" 已被禁用",matchByName:"通过名称匹配",beforeChange:"异步切换",lazyTab:"延迟加载"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",horTitle:"HOR",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change",lazyTab:"LAZY TAB"}},components:{PressTabs:k,PressTab:y},data(){return{showLazyTab:!1,active:3,activeName:"c",tabs2:[1,2],tabs4:[1,2,3,4],tabs7:[1,2,3,4,5,6,7],tabsDisabled:[{dot:!0},{},{disabled:!0},{}],tabsWithName:[{name:"a"},{name:"b"},{name:"c"}]}},mounted(){this.$nextTick(()=>{}),setTimeout(()=>{this.tabs4=[1,2,3],this.active=2,setTimeout(()=>{this.showLazyTab=!0},1e3)},2e3)},methods:{onChange(t){console.log("[onChange] val: ",t)},onInput(t){console.log("[onInput] val: ",t)},onClickDisabled(t){console.log("[onClickDisabled] val: ",t)},onClick(t){console.log("[onClick] val: ",t)},onScroll(t){console.log("[onScroll] val: ",t)}}},T={class:"demo-wrap"},S={class:"content"},B={class:"content"},I={class:"content"},N={class:"content"},w={class:"content"},D={class:"content"},z={class:"content"},A={class:"content"},L={class:"content"},$={class:"content"},P={class:"content"},E={class:"content"},O={class:"content"},R={class:"content"};function V(t,F,H,U,i,_){const s=p("press-tab"),d=p("press-tabs"),u=p("demo-block");return n(),b("div",T,[a(u,{title:t.t("basicUsage"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{active:i.active,onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",S,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1},8,["title"]),a(u,{title:t.t("matchByName"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{active:i.activeName},{default:l(()=>[(n(!0),b(m,null,h(i.tabsWithName,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`,name:c.name},{default:l(()=>[r("div",B,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title","name"]))),128))]),_:1},8,["active"])]),_:1},8,["title"]),a(u,{title:t.t("title6"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{sticky:""},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",I,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),a(u,{title:t.t("title2"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{onScroll:_.onScroll},{default:l(()=>[(n(!0),b(m,null,h(i.tabs7,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",N,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["onScroll"])]),_:1},8,["title"]),a(u,{title:t.t("title3"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{onDisabled:_.onClickDisabled},{default:l(()=>[(n(!0),b(m,null,h(i.tabsDisabled,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`,dot:c.dot,disabled:!!c.disabled},{default:l(()=>[r("div",w,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title","dot","disabled"]))),128))]),_:1},8,["onDisabled"])]),_:1},8,["title"]),a(u,{title:t.t("title4"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{type:"card"},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",D,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),a(u,{title:t.t("title5"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{onClick:_.onClick},{default:l(()=>[(n(!0),b(m,null,h(i.tabs2,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",z,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["onClick"])]),_:1},8,["title"]),a(u,{title:t.t("title8"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{animated:""},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",A,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),a(u,{title:t.t("title9"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{swipeable:""},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",L,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),a(u,{title:t.t("lazyTab"),"header-style":"background: #f7f8fa;"},{default:l(()=>[a(d,{swipeable:""},{default:l(()=>[i.showLazyTab?(n(),f(s,{key:"tabA","sort-index":0,title:`${t.t("tab")} A`},{default:l(()=>[r("div",$,o(t.t("content"))+" A ",1)]),_:1},8,["title"])):g("",!0),a(s,{key:"tabB","sort-index":1,title:`${t.t("tab")} B`},{default:l(()=>[r("div",P,o(t.t("content"))+" B ",1)]),_:1},8,["title"]),a(s,{key:"tabC",title:`${t.t("tab")} C`,"sort-index":2},{default:l(()=>[r("div",E,o(t.t("content"))+" C ",1)]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),a(u,{title:t.t("horTitle"),"header-style":"background: #f7f8fa;","section-style":"background: #192841;color: #fff;margin: 0;padding: 10px 0;"},{default:l(()=>[a(d,{active:i.active,mode:"hor",onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,dot:"",title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",O,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1},8,["title"]),a(u,{title:"E-SPORT"},{default:l(()=>[a(d,{active:i.active,mode:"e-sport",onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),b(m,null,h(i.tabs4,(c,e)=>(n(),f(s,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[r("div",R,o(t.t("content"))+" "+o(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1})])}const at=v(C,[["render",V],["__scopeId","data-v-4c978c75"]]);export{at as default};
