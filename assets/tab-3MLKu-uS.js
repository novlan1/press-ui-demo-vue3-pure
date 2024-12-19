import{a as C,P as T}from"./press-tabs-DRdD7vo5.js";import{_ as S,z as I,o as n,c as d,e as s,k as l,r as k,F as h,q as b,b as f,a as o,t as a,am as B,d as w}from"./index-88cP1sOH.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./system-223ZhjOU.js";import"./press-sticky-DUwRu4q_.js";import"./rect-CHEJpnv9.js";import"./bind-event-vE3ga2SM.js";import"./event-CnosvntJ.js";import"./touch-Djes3Zvx.js";import"./scroll-view-CDE4THAs.js";const N={i18n:{"zh-CN":{tab:"标签 ",title2:"标签栏滚动",title3:"禁用标签",title4:"样式风格",title5:"点击事件",title6:"粘性布局",title7:"自定义标签",title8:"切换动画",title9:"滑动切换",title10:"滚动导航",horTitle:"HOR",disabled:" 已被禁用",matchByName:"通过名称匹配",beforeChange:"异步切换",lazyTab:"延迟加载",slot:"插槽"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",horTitle:"HOR",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change",lazyTab:"LAZY TAB",slot:"Slot"}},components:{PressTabs:C,PressTab:T,pressIconPlus:I},data(){return{showLazyTab:!1,active:3,activeName:"c",tabs2:[1,2],tabs4:[1,2,3,4],tabs7:[1,2,3,4,5,6,7],tabsDisabled:[{dot:!0},{},{disabled:!0},{}],tabsWithName:[{name:"a"},{name:"b"},{name:"c"}]}},mounted(){setTimeout(()=>{this.tabs4=[1,2,3],this.active=2,setTimeout(()=>{this.showLazyTab=!0},1e3)},2e3)},methods:{onChange(t){console.log("[onChange] val: ",t)},onInput(t){console.log("[onInput] val: ",t)},onClickDisabled(t){console.log("[onClickDisabled] val: ",t)},onClick(t){console.log("[onClick] val: ",t);const{index:p,name:v,title:g}=t;this.onGTip(`index: ${p}, name: ${v}, tile: ${g}`)},onScroll(t){console.log("[onScroll] val: ",t)}}},$={class:"demo-wrap"},D={class:"content"},z={class:"content"},A={class:"content"},P={class:"content"},L={class:"content"},E={class:"content"},O={class:"content"},R={class:"content"},V={class:"content"},F={class:"title"},H={class:"title"},U={class:"title"},W={class:"content"},q={class:"title"},G={class:"content"},M={class:"content"},Y={class:"content"},Z={class:"content"},j={class:"content"},J={class:"content"};function K(t,p,v,g,i,_){const r=k("press-tab"),c=k("press-tabs"),m=k("demo-block"),y=k("press-icon-plus");return n(),d("div",$,[s(m,{title:t.t("basicUsage"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{active:i.active,onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",D,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1},8,["title"]),s(m,{title:t.t("matchByName"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{active:i.activeName},{default:l(()=>[(n(!0),d(h,null,b(i.tabsWithName,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`,name:u.name},{default:l(()=>[o("div",z,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title","name"]))),128))]),_:1},8,["active"])]),_:1},8,["title"]),s(m,{title:t.t("title6"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{sticky:""},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",A,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),s(m,{title:t.t("title2"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{onScroll:_.onScroll},{default:l(()=>[(n(!0),d(h,null,b(i.tabs7,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",P,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["onScroll"])]),_:1},8,["title"]),s(m,{title:t.t("title3"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{onDisabled:_.onClickDisabled},{default:l(()=>[(n(!0),d(h,null,b(i.tabsDisabled,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`,dot:u.dot,disabled:!!u.disabled},{default:l(()=>[o("div",L,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title","dot","disabled"]))),128))]),_:1},8,["onDisabled"])]),_:1},8,["title"]),s(m,{title:t.t("title4"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{type:"card"},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",E,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),s(m,{title:t.t("title5"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{onClick:_.onClick},{default:l(()=>[(n(!0),d(h,null,b(i.tabs2,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",O,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["onClick"])]),_:1},8,["title"]),s(m,{title:t.t("title8"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{animated:""},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",R,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),s(m,{title:t.t("title9"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{swipeable:""},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",V,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1})]),_:1},8,["title"]),s(m,{title:t.t("slot"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{swipeable:"","use-title-slot":""},{"title-0":l(()=>[o("span",F,a(t.t("tab")),1),s(y,{name:"like-o"})]),"title-1":l(()=>[o("span",H,a(t.t("tab"))+" 1",1),s(y,{name:"friends-o"})]),"title-2":l(()=>[o("span",U,a(t.t("tab"))+" 2",1)]),"title-3":l(()=>p[0]||(p[0]=[o("span",{class:"title"},"Custom Title",-1)])),default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",W,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1}),s(c,{swipeable:"","use-title-slot":""},B({default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",G,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:2},[b(Array(4),(u,e)=>({name:`title-${e}`,fn:l(()=>[o("div",null,[o("span",q,a(t.t("tab"))+" "+a(e),1),s(y,{name:"like-o"})])])}))]),1024)]),_:1},8,["title"]),s(m,{title:t.t("lazyTab"),"header-style":"background: #f7f8fa;"},{default:l(()=>[s(c,{swipeable:""},{default:l(()=>[i.showLazyTab?(n(),f(r,{key:"tabA","sort-index":0,title:`${t.t("tab")} A`},{default:l(()=>[o("div",M,a(t.t("content"))+" A ",1)]),_:1},8,["title"])):w("",!0),s(r,{key:"tabB","sort-index":1,title:`${t.t("tab")} B`},{default:l(()=>[o("div",Y,a(t.t("content"))+" B ",1)]),_:1},8,["title"]),s(r,{key:"tabC",title:`${t.t("tab")} C`,"sort-index":2},{default:l(()=>[o("div",Z,a(t.t("content"))+" C ",1)]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),s(m,{title:t.t("horTitle"),"header-style":"background: #f7f8fa;","section-style":"background: #192841;color: #fff;margin: 0;padding: 10px 0;"},{default:l(()=>[s(c,{active:i.active,mode:"hor",onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,dot:"",title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",j,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1},8,["title"]),s(m,{title:"E-SPORT"},{default:l(()=>[s(c,{active:i.active,mode:"e-sport",onChange:_.onChange,onInput:_.onInput},{default:l(()=>[(n(!0),d(h,null,b(i.tabs4,(u,e)=>(n(),f(r,{key:e,title:`${t.t("tab")} ${e+1}`},{default:l(()=>[o("div",J,a(t.t("content"))+" "+a(e+1),1)]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange","onInput"])]),_:1})])}const rt=S(N,[["render",K],["__scopeId","data-v-838e4774"]]);export{rt as default};