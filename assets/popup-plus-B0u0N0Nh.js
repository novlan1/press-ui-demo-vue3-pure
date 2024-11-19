import{P as k}from"./press-cell-D0hTGeyK.js";import{P as I}from"./press-popup-plus-DOKlUIW1.js";import{_ as C,S as b,o as w,c as f,e,k as c,r as m,H as S,t as g}from"./index-BIszYdsF.js";import"./link-CGNjbsVw.js";import"./event-BQiVdx1g.js";import"./press-overlay-Dz_LdZy7.js";import"./press-transition-BwTmNQD4.js";const P="center",h="cross",d="top-right",v={i18n:{"zh-CN":{show:"查看",position:"弹出位置",bottom:"底部弹出",top:"顶部弹出",left:"左侧弹出",right:"右侧弹出",closeIcon:"关闭图标",customIcon:"自定义图标",iconPosition:"图标位置",rightCloseIcon:"右侧弹出关闭图标",round:"圆角弹窗"},"en-US":{show:"Show",position:"Position",bottom:"Bottom",top:"Top",left:"Left",right:"Right",closeIcon:"Close Icon",customIcon:"Custom Icon",iconPosition:"Icon Position",rightCloseIcon:"Right with Icon",round:"Round"}},components:{PressCell:k,PressPopupPlus:I},data(){return{show:!1,popupPosition:P,customStyle:"",isRound:!1,isCloseable:!1,closeIcon:h,closeIconPosition:d}},methods:{onClose(){this.show=!1},onShowPopup(t,o={}){this.popupPosition=t||P;let n="";this.isRound=!!o.round,this.isCloseable=!!o.closeable,this.closeIcon=o.closeIcon||h,this.closeIconPosition=o.closeIconPosition||d;const r=`${["width: 30%","height: calc(100% - var(--window-top, 0px))","top: calc(50% + var(--window-top, 0px) / 2)","bottom: 0"].join(";")};`;switch(t){case"top":{n="height: 20%;";break}case"bottom":{n="height: 20%;";break}case"left":{n=r;break}case"right":{n=r;break}case"center":{n="padding: 30px 50px;";break}default:n=""}this.customStyle=n,b(()=>{this.show=!0})}}},y={class:"demo-wrap"};function O(t,o,n,r,p,l){const s=m("press-cell"),u=m("demo-block"),a=m("press-popup-plus");return w(),f("div",y,[e(u,{title:t.t("basicUsage")},{default:c(()=>[e(s,{title:t.t("basicUsage"),"is-link":"",onClick:o[0]||(o[0]=i=>l.onShowPopup("center"))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("position")},{default:c(()=>[e(s,{title:t.t("top"),"is-link":"",onClick:o[1]||(o[1]=i=>l.onShowPopup("top"))},null,8,["title"]),e(s,{title:t.t("bottom"),"is-link":"",onClick:o[2]||(o[2]=i=>l.onShowPopup("bottom"))},null,8,["title"]),e(s,{title:t.t("left"),"is-link":"",onClick:o[3]||(o[3]=i=>l.onShowPopup("left"))},null,8,["title"]),e(s,{title:t.t("right"),"is-link":"",onClick:o[4]||(o[4]=i=>l.onShowPopup("right"))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("closeIcon")},{default:c(()=>[e(s,{title:t.t("closeIcon"),"is-link":"",onClick:o[5]||(o[5]=i=>l.onShowPopup("bottom",{closeable:!0}))},null,8,["title"]),e(s,{title:t.t("customIcon"),"is-link":"",onClick:o[6]||(o[6]=i=>l.onShowPopup("bottom",{closeable:!0,closeIcon:"close"}))},null,8,["title"]),e(s,{title:t.t("iconPosition"),"is-link":"",onClick:o[7]||(o[7]=i=>l.onShowPopup("bottom",{closeable:!0,closeIconPosition:"top-left"}))},null,8,["title"]),e(s,{title:t.t("rightCloseIcon"),"is-link":"",onClick:o[8]||(o[8]=i=>l.onShowPopup("right",{closeable:!0}))},null,8,["title"])]),_:1},8,["title"]),e(u,{title:t.t("round")},{default:c(()=>[e(s,{title:t.t("round"),"is-link":"",onClick:o[9]||(o[9]=i=>l.onShowPopup("bottom",{round:!0}))},null,8,["title"])]),_:1},8,["title"]),e(a,{show:p.show,position:p.popupPosition,"custom-style":p.customStyle,round:p.isRound,closeable:p.isCloseable,"close-icon":p.closeIcon,"close-icon-position":p.closeIconPosition,onClose:l.onClose},{default:c(()=>[S(g(p.popupPosition==="center"?t.t("content"):""),1)]),_:1},8,["show","position","custom-style","round","closeable","close-icon","close-icon-position","onClose"])])}const A=C(v,[["render",O],["__scopeId","data-v-0ad242de"]]);export{A as default};
