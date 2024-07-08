import{P as b}from"./press-cell-CpEJn8Fu.js";import{P as I}from"./press-popup-plus-3bdPmkCh.js";import{_ as k,o as C,c as w,f as e,n as r,u as f,t as S,r as m}from"./index-DU6LSpJC.js";import"./press-icon-plus-B9pxPV2T.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-Cexnh41C.js";import"./press-component-BYCAM0Tw.js";import"./validator-CMi1mmGD.js";import"./link-Ds6ljOst.js";import"./event-DUjdombs.js";import"./support-passive-CNRHRm4O.js";import"./press-overlay-D3LjkYjh.js";import"./press-transition-DzNVel1u.js";import"./system-BAdrsxg_.js";const P="center",h="cross",d="top-right",g={i18n:{"zh-CN":{show:"查看",position:"弹出位置",bottom:"底部弹出",top:"顶部弹出",left:"左侧弹出",right:"右侧弹出",closeIcon:"关闭图标",customIcon:"自定义图标",iconPosition:"图标位置",rightCloseIcon:"右侧弹出关闭图标",round:"圆角弹窗"},"en-US":{show:"Show",position:"Position",bottom:"Bottom",top:"Top",left:"Left",right:"Right",closeIcon:"Close Icon",customIcon:"Custom Icon",iconPosition:"Icon Position",rightCloseIcon:"Right with Icon",round:"Round"}},components:{PressCell:b,PressPopupPlus:I},data(){return{show:!1,popupPosition:P,customStyle:"",isRound:!1,isCloseable:!1,closeIcon:h,closeIconPosition:d}},methods:{onClose(){this.show=!1},onShowPopup(t,o={}){this.popupPosition=t||P;let n="";this.isRound=!!o.round,this.isCloseable=!!o.closeable,this.closeIcon=o.closeIcon||h,this.closeIconPosition=o.closeIconPosition||d;const c=`${["width: 30%","height: calc(100% - var(--window-top, 0px))","top: calc(50% + var(--window-top, 0px) / 2)","bottom: 0"].join(";")};`;switch(t){case"top":{n="height: 20%;";break}case"bottom":{n="height: 20%;";break}case"left":{n=c;break}case"right":{n=c;break}case"center":{n="padding: 30px 50px;";break}default:n=""}this.customStyle=n,this.$nextTick(()=>{this.show=!0})}}},v={class:"demo-wrap"};function y(t,o,n,c,p,i){const l=m("press-cell"),u=m("demo-block"),a=m("press-popup-plus");return C(),w("div",v,[e(u,{title:t.t("basicUsage")},{default:r(()=>[e(l,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=s=>i.onShowPopup("center"))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("position")},{default:r(()=>[e(l,{title:t.t("top"),"is-link":"",onClick:o[1]||(o[1]=s=>i.onShowPopup("top"))},null,8,["title"]),e(l,{title:t.t("bottom"),"is-link":"",onClick:o[2]||(o[2]=s=>i.onShowPopup("bottom"))},null,8,["title"]),e(l,{title:t.t("left"),"is-link":"",onClick:o[3]||(o[3]=s=>i.onShowPopup("left"))},null,8,["title"]),e(l,{title:t.t("right"),"is-link":"",onClick:o[4]||(o[4]=s=>i.onShowPopup("right"))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("closeIcon")},{default:r(()=>[e(l,{title:t.t("closeIcon"),"is-link":"",onClick:o[5]||(o[5]=s=>i.onShowPopup("bottom",{closeable:!0}))},null,8,["title"]),e(l,{title:t.t("customIcon"),"is-link":"",onClick:o[6]||(o[6]=s=>i.onShowPopup("bottom",{closeable:!0,closeIcon:"close"}))},null,8,["title"]),e(l,{title:t.t("iconPosition"),"is-link":"",onClick:o[7]||(o[7]=s=>i.onShowPopup("bottom",{closeable:!0,closeIconPosition:"top-left"}))},null,8,["title"]),e(l,{title:t.t("rightCloseIcon"),"is-link":"",onClick:o[8]||(o[8]=s=>i.onShowPopup("right",{closeable:!0}))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("round")},{default:r(()=>[e(l,{title:t.t("round"),"is-link":"",onClick:o[9]||(o[9]=s=>i.onShowPopup("bottom",{round:!0}))},null,8,["title"])]),_:1},8,["title"]),e(a,{show:p.show,position:p.popupPosition,"custom-style":p.customStyle,round:p.isRound,closeable:p.isCloseable,"close-icon":p.closeIcon,"close-icon-position":p.closeIconPosition,onClose:i.onClose},{default:r(()=>[f(S(p.popupPosition==="center"?t.t("content"):""),1)]),_:1},8,["show","position","custom-style","round","closeable","close-icon","close-icon-position","onClose"])])}const G=k(g,[["render",y],["__scopeId","data-v-b3ae9bda"]]);export{G as default};