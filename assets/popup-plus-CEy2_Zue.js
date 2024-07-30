import{P as I}from"./press-cell-DldhgUi8.js";import{P as k}from"./press-popup-plus-BrtiBFAX.js";import{n as C}from"./add-unit-Ci6RUrQO.js";import{_ as b,o as w,c as f,f as e,l as r,r as m,A as S,t as g}from"./index-C7cPaXoT.js";import"./press-icon-plus-UvEd4iQp.js";import"./style-CpIyAjCl.js";import"./press-info-CCB12gYT.js";import"./utils-BWNRMl9G.js";import"./press-component-DP30Q1Pq.js";import"./link-BvyWW8_h.js";import"./event-BsaNekcD.js";import"./support-passive-CNRHRm4O.js";import"./press-overlay-Ct_rQihA.js";import"./press-transition-CROU0OyA.js";import"./system-DiAbMyT7.js";const P="center",h="cross",d="top-right",v={i18n:{"zh-CN":{show:"查看",position:"弹出位置",bottom:"底部弹出",top:"顶部弹出",left:"左侧弹出",right:"右侧弹出",closeIcon:"关闭图标",customIcon:"自定义图标",iconPosition:"图标位置",rightCloseIcon:"右侧弹出关闭图标",round:"圆角弹窗"},"en-US":{show:"Show",position:"Position",bottom:"Bottom",top:"Top",left:"Left",right:"Right",closeIcon:"Close Icon",customIcon:"Custom Icon",iconPosition:"Icon Position",rightCloseIcon:"Right with Icon",round:"Round"}},components:{PressCell:I,PressPopupPlus:k},data(){return{show:!1,popupPosition:P,customStyle:"",isRound:!1,isCloseable:!1,closeIcon:h,closeIconPosition:d}},methods:{onClose(){this.show=!1},onShowPopup(t,o={}){this.popupPosition=t||P;let n="";this.isRound=!!o.round,this.isCloseable=!!o.closeable,this.closeIcon=o.closeIcon||h,this.closeIconPosition=o.closeIconPosition||d;const u=`${["width: 30%","height: calc(100% - var(--window-top, 0px))","top: calc(50% + var(--window-top, 0px) / 2)","bottom: 0"].join(";")};`;switch(t){case"top":{n="height: 20%;";break}case"bottom":{n="height: 20%;";break}case"left":{n=u;break}case"right":{n=u;break}case"center":{n="padding: 30px 50px;";break}default:n=""}this.customStyle=n,C(()=>{this.show=!0})}}},y={class:"demo-wrap"};function O(t,o,n,u,p,l){const i=m("press-cell"),c=m("demo-block"),a=m("press-popup-plus");return w(),f("div",y,[e(c,{title:t.t("basicUsage")},{default:r(()=>[e(i,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=s=>l.onShowPopup("center"))},null,8,["title"])]),_:1},8,["title"]),e(c,{title:t.t("position")},{default:r(()=>[e(i,{title:t.t("top"),"is-link":"",onClick:o[1]||(o[1]=s=>l.onShowPopup("top"))},null,8,["title"]),e(i,{title:t.t("bottom"),"is-link":"",onClick:o[2]||(o[2]=s=>l.onShowPopup("bottom"))},null,8,["title"]),e(i,{title:t.t("left"),"is-link":"",onClick:o[3]||(o[3]=s=>l.onShowPopup("left"))},null,8,["title"]),e(i,{title:t.t("right"),"is-link":"",onClick:o[4]||(o[4]=s=>l.onShowPopup("right"))},null,8,["title"])]),_:1},8,["title"]),e(c,{title:t.t("closeIcon")},{default:r(()=>[e(i,{title:t.t("closeIcon"),"is-link":"",onClick:o[5]||(o[5]=s=>l.onShowPopup("bottom",{closeable:!0}))},null,8,["title"]),e(i,{title:t.t("customIcon"),"is-link":"",onClick:o[6]||(o[6]=s=>l.onShowPopup("bottom",{closeable:!0,closeIcon:"close"}))},null,8,["title"]),e(i,{title:t.t("iconPosition"),"is-link":"",onClick:o[7]||(o[7]=s=>l.onShowPopup("bottom",{closeable:!0,closeIconPosition:"top-left"}))},null,8,["title"]),e(i,{title:t.t("rightCloseIcon"),"is-link":"",onClick:o[8]||(o[8]=s=>l.onShowPopup("right",{closeable:!0}))},null,8,["title"])]),_:1},8,["title"]),e(c,{title:t.t("round")},{default:r(()=>[e(i,{title:t.t("round"),"is-link":"",onClick:o[9]||(o[9]=s=>l.onShowPopup("bottom",{round:!0}))},null,8,["title"])]),_:1},8,["title"]),e(a,{show:p.show,position:p.popupPosition,"custom-style":p.customStyle,round:p.isRound,closeable:p.isCloseable,"close-icon":p.closeIcon,"close-icon-position":p.closeIconPosition,onClose:l.onClose},{default:r(()=>[S(g(p.popupPosition==="center"?t.t("content"):""),1)]),_:1},8,["show","position","custom-style","round","closeable","close-icon","close-icon-position","onClose"])])}const H=b(v,[["render",O],["__scopeId","data-v-0ad242de"]]);export{H as default};