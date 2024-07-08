import{g as _}from"./act-bem-hi9TDZSH.js";import{P as w}from"./press-q-r-code-JFZohY6q.js";import{_ as C,r,o as m,c as f,a as c,x as l,w as p,t as u,d as h,f as d,n as A,b as P}from"./index-DU6LSpJC.js";const v={popup:"tip-match-bottom-popup-wrap",mask:"tip-match-mask","mask--fade-in":"tip-match-fade-in","mask--fade-out":"tip-match-fade-out",content:"tip-match-popup-content","content--bottom-enter":"tip-match-bottom-enter","content--bottom-leave":"tip-match-bottom-leave","title-wrap":"tip-match-popup-title-wrap","title-line":"tip-match-popup-title-line",back:"tip-match-popup-back",title:"tip-match-popup-title",close:"tip-match-popup-close","qr-code":"tip-match-wx-code",save:"tip-match-code-save",tip:"tip-match-code-tip"};function y(s,e){return _(s,v,e)}const b={name:"PressQRCodePopup",components:{PressQRCode:w},props:{qrCodeUrl:{type:String,default:"",require:!0},type:{type:Number,default:2,require:!1},title:{type:String,default:""},description:{type:String,default:"截图或长按保存图片"},tip:{type:String,default:""},useTipClass:{type:Boolean,default:!1}},emits:["onCancel"],data(){return{isShowPopup:!0}},computed:{typeName(){return this.type===1?"QQ":"微信"},innerTitle(){const{typeName:s,title:e}=this;return e||`请使用${s}扫码打开活动`},innerTip(){const{typeName:s,tip:e}=this;return e||`使用${s}扫码打开访问页面`}},methods:{clickCancel(){this.isShowPopup=!1,this.timer=setTimeout(()=>{this.$emit("onCancel")},400)},getActClass(...s){return y(this.useTipClass,s)}}};function S(s,e,n,k,a,t){const i=r("PressQRCode");return m(),f("div",{class:l([t.getActClass("popup")])},[c("div",{class:l([t.getActClass("mask"),a.isShowPopup?t.getActClass("mask--fade-in"):t.getActClass("mask--fade-out")]),onClick:e[0]||(e[0]=p((...o)=>t.clickCancel&&t.clickCancel(...o),["stop"]))},null,2),c("div",{class:l([t.getActClass("content"),a.isShowPopup?t.getActClass("content--bottom-enter"):t.getActClass("content--bottom-leave")])},[c("div",{class:l([t.getActClass("title-wrap")])},[c("div",{class:l([t.getActClass("title-line")]),onClick:e[1]||(e[1]=p((...o)=>t.clickCancel&&t.clickCancel(...o),["stop"]))},null,2),c("div",{class:l([t.getActClass("back")]),onClick:e[2]||(e[2]=p((...o)=>t.clickCancel&&t.clickCancel(...o),["stop"]))},null,2),c("p",{class:l([t.getActClass("title")])},u(t.innerTitle),3),h("",!0)],2),d(i,{value:n.qrCodeUrl,size:120,class:l([t.getActClass("qr-code")])},null,8,["value","class"]),c("p",{class:l([t.getActClass("save")])},u(n.description),3),c("p",{class:l([t.getActClass("tip")])},u(t.innerTip),3)],2)],2)}const q=C(b,[["render",S],["__scopeId","data-v-50af5632"]]),Q={components:{PressQRCodePopup:q},data(){let s="https://baidu.com",e=!1;return s=document.location.href,e=!0,{currentUrl:s,show:e,type:1}},methods:{showDialog(){this.show=!0}}},R={class:"demo-wrap"};function T(s,e,n,k,a,t){const i=r("press-cell"),o=r("demo-block"),g=r("PressQRCodePopup");return m(),f("div",R,[d(o,{title:s.t("basicUsage")},{default:A(()=>[d(i,{title:"展示","is-link":"",onClick:t.showDialog},null,8,["onClick"])]),_:1},8,["title"]),a.show?(m(),P(g,{key:0,"qr-code-url":a.currentUrl,type:a.type,onOnCancel:e[0]||(e[0]=N=>a.show=!1)},null,8,["qr-code-url","type"])):h("",!0)])}const D=C(Q,[["render",T]]);export{D as default};