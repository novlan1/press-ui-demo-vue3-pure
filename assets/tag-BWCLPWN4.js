import{P as S}from"./press-tag-0t-j1TDy.js";import{_ as z,o as d,c as n,F as y,i as _,f as o,n as t,a as r,u as a,t as l,d as g,b as f,r as C}from"./index-BZexHo5h.js";import"./press-icon-plus-5Xj-bw2h.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-BWsAQQHi.js";import"./press-component-HD2axD72.js";import"./validator-OjQp2SYe.js";const v={i18n:{"zh-CN":{type:"类型",mark:"标记样式",plain:"空心样式",round:"圆角样式",tagStyle:"样式风格",closeable:"可关闭标签",smallSize:"小号标签",largeSize:"大号标签",mediumSize:"中号标签",customSize:"标签大小",customColor:"自定义颜色",customBgColor:"背景颜色",customTextColor:"文字颜色",customPlainColor:"空心颜色"},"en-US":{mark:"Mark style",plain:"Plain style",round:"Round style",tagStyle:"Tag Style",closeable:"Closeable",smallSize:"Small Size",largeSize:"Large Size",mediumSize:"Medium Size",customColor:"Custom Color",customSize:"Custom Size",customBgColor:"Background Color",customTextColor:"Text Color",customPlainColor:"Plain Color"}},components:{PressTag:S},data(){return{list:[{type:"primary"},{type:"success"},{type:"danger"},{type:"warning"}],demoList:[{key:"basic",title:this.t("basicUsage")},{key:"plain",title:this.t("plain"),plain:!0},{key:"round",title:this.t("round"),round:!0},{key:"mark",title:this.t("mark"),mark:!0}],show:{primary:!0,success:!0}}},methods:{onClose(e){console.log("type",e),this.show[e]=!1}}},b={class:"demo-wrap"},w={class:"demo-part"},B={class:"demo-part"},P={class:"demo-part"},T={class:"demo-part"},N={class:"demo-part"},L={class:"demo-part"},V={class:"demo-part"},F={key:0,class:"demo-part"},M={class:"demo-part"};function U(e,m,D,E,u,p){const s=C("press-tag"),c=C("demo-block");return d(),n("div",b,[(d(!0),n(y,null,_(u.demoList,i=>(d(),f(c,{key:i.key,title:i.title},{default:t(()=>[(d(!0),n(y,null,_(u.list,(k,h)=>(d(),n("div",{key:h,class:"demo-part"},[o(s,{type:k.type,plain:i.plain||!1,round:i.round||!1,mark:i.mark||!1},{default:t(()=>[a(l(e.t("tag")),1)]),_:2},1032,["type","plain","round","mark"])]))),128))]),_:2},1032,["title"]))),128)),o(c,{title:e.t("customColor")},{default:t(()=>[r("div",w,[o(s,{color:"#f2826a"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})]),r("div",B,[o(s,{color:"#7232dd"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})]),r("div",P,[o(s,{color:"#7232dd",plain:""},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})]),r("div",T,[o(s,{color:"#ffe1e1","text-color":"#ad0000"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})])]),_:1},8,["title"]),o(c,{title:e.t("customSize")},{default:t(()=>[r("div",N,[o(s,{type:"danger"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})]),r("div",L,[o(s,{type:"danger",size:"medium"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})]),r("div",V,[o(s,{type:"danger",size:"large"},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})])]),_:1},8,["title"]),o(c,{title:e.t("closeable")},{default:t(()=>[u.show.primary?(d(),n("div",F,[o(s,{type:"primary",closeable:"",onClose:m[0]||(m[0]=i=>p.onClose("primary"))},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})])):g("",!0),r("div",M,[u.show.success?(d(),f(s,{key:0,type:"success",closeable:"",onClose:m[1]||(m[1]=i=>p.onClose("success"))},{default:t(()=>[a(l(e.t("tag")),1)]),_:1})):g("",!0)])]),_:1},8,["title"])])}const K=z(v,[["render",U],["__scopeId","data-v-334858eb"]]);export{K as default};
