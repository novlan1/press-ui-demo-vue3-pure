import{P as B}from"./press-cell-B51DLGhM.js";import{_ as T,B as v,C as A,o as h,c as I,a as u,f as e,l as r,b as _,d as N,r as a,t as p,J as O}from"./index-F6Gg9UHQ.js";import{b as F}from"./index-C6hpkcEb.js";import{S as E}from"./scroll-view-UNHMkMyI.js";import"./link-CpGN79EY.js";import"./event-BwRIw3Q8.js";const w="press-picker-functional",C={ASYNC_NORMAL:"async-normal",ASYNC_PROMISE:"async-promise"};function y({t:o,type:n,onTip:S,onGShowLoading:d}){return new Promise(t=>{d(o("asyncConfirm"),{mask:!0,duration:3e3}),setTimeout(()=>{n==="confirm"?(S(o("asyncConfirmSuccess")),t(!0)):(t(!1),S(o("asyncConfirmFail")))},500)})}let s;const R={i18n:{"zh-CN":{wayToWin:"决胜方式",SomeContent:"一些内容",SomeScrollContent:"一些可以滚动的内容",controlledPopup:"受控组件",functional:"函数式调用",check:"查看",closeIcon:"关闭图标",customStyle:"自定义样式",buttonSlot:"使用插槽",cancelIcon:"取消图标",noCloseOrCancel:"没有关闭/取消",plainButtonConfirm:"线框按钮",disabledButton:"禁用状态",horizontal:"横版",asyncClose:"异步关闭",asyncConfirm:"异步确认中...",asyncConfirmSuccess:"异步确认后可以关闭",asyncConfirmFail:"异步确认后禁止关闭",useWay:"使用方式",notPromiseFunction:"Not Promise",promiseFunction:"Promise"},"en-US":{wayToWin:"Bo Number",SomeContent:"Some Content",controlledPopup:"Controlled Popup",functional:"Functional Mode",check:"Check",customStyle:"Custom Style",buttonSlot:"Use Slot",closeIcon:"Close Ion",cancelIcon:"Cancel Icon",noCloseOrCancel:"No Close Or Cancel",plainButtonConfirm:"Plain Button",disabledButton:"Disabled Button",horizontal:"Horizontal Version",asyncClose:"Async Close",asyncConfirm:"Async Confirm ...",asyncConfirmSuccess:"Async Confirm Success",asyncConfirmFail:"Async Confirm Fail",useWay:"Use Way",notPromiseFunction:"Not Promise",promiseFunction:"Promise"}},components:{PressCell:B,PressPopup:v,PressIconPlus:A},mixins:[E],data(){s=this;const o={title:this.t("wayToWin"),popupTitleBtn:this.t("confirm"),isCrossSlab:!1,isShowpopuoClose:!1,showBackArrow:!1,isBorderBtn:!1,disabledButton:!1,customStyle:"",onConfirm:()=>{this.curPicker.show=!1},onCancel:()=>{this.curPicker.show=!1}};return{type:"",customStyle:"",popupOptions:{normal:{isShowpopuoClose:!0},cancel:{showBackArrow:!0},noClose:{},hor:{popupTitleBtn:"",isCrossSlab:!0,isShowpopuoClose:!0,customStyle:""},borderBtn:{isShowpopuoClose:!0,isBorderBtn:!0},disabledButton:{isShowpopuoClose:!0,disabledButton:!0}},commonOptions:o,curPicker:{...o},pressPickerFunctionalData:{},PRESS_PICKER_ID:w,showControlledPopup:!1,showSlotPopup:!1,TYPE_MAP:C}},computed:{},methods:{onShowPopup(o){this.onGHideToast(),this.type=o,o==="disabledButton"&&setTimeout(()=>{this.curPicker.disabledButton=!1},3e3),this.curPicker={...this.commonOptions,...this.popupOptions[o],show:!0}},onTip(o){this.onGTip(o)},onShowFunctionalPicker(){F.call(this,{context:this,selector:`#${w}`,title:this.t("wayToWin"),button:this.t("confirm"),horizontal:!1,closeIcon:!1,arrowIcon:!0,borderButton:!1,customStyle:""}).then(()=>{this.onTip("confirm")}).catch(()=>{this.onTip("cancel")})},onConfirm(){this.onTip("confirm")},onCancel(){this.onTip("cancel")},onShowControlledPopup(){this.showControlledPopup=!0},onShowAsyncClosePopup(o){this.type=o,this.curPicker={...this.commonOptions,isShowpopuoClose:!0,show:!0}},asyncConfirm(){return s.type===C.ASYNC_PROMISE?y({t:s.t,type:"confirm",onTip:s.onTip,onGShowLoading:s.onGShowLoading}):(s.type===C.ASYNC_NORMAL&&s.onTip("Can Close"),!0)},asyncCancel(){return s.type===C.ASYNC_PROMISE?y({t:s.t,type:"cancel",onTip:s.onTip,onGShowLoading:s.onGShowLoading}):s.type===C.ASYNC_NORMAL?(s.onTip("Can not close"),!1):!0}}},M={class:"demo-wrap"},Y={class:"content"},g={class:"content"},z={class:"content"},W={class:"content__inner"},L={class:"content__inner"},D={class:"content__inner"};function G(o,n,S,d,t,l){const c=a("press-cell"),m=a("demo-block"),P=a("PressPopup"),f=a("PressIconPlus"),k=a("scroll-view"),b=a("press-popup");return h(),I("div",M,[u("div",null,[e(m,{title:o.t("basicUsage")},{default:r(()=>[e(c,{title:o.t("closeIcon"),"is-link":"",onClick:n[0]||(n[0]=i=>l.onShowPopup("normal"))},null,8,["title"]),e(c,{title:o.t("cancelIcon"),"is-link":"",onClick:n[1]||(n[1]=i=>l.onShowPopup("cancel"))},null,8,["title"]),e(c,{title:o.t("noCloseOrCancel"),"is-link":"",onClick:n[2]||(n[2]=i=>l.onShowPopup("noClose"))},null,8,["title"])]),_:1},8,["title"]),e(m,{title:o.t("customStyle")},{default:r(()=>[e(c,{title:o.t("plainButtonConfirm"),"is-link":"",onClick:n[3]||(n[3]=i=>l.onShowPopup("borderBtn"))},null,8,["title"]),e(c,{title:o.t("disabledButton"),"is-link":"",onClick:n[4]||(n[4]=i=>l.onShowPopup("disabledButton"))},null,8,["title"]),e(c,{title:o.t("horizontal"),"is-link":"",onClick:n[5]||(n[5]=i=>l.onShowPopup("hor"))},null,8,["title"]),e(c,{title:o.t("buttonSlot"),"is-link":"",onClick:n[6]||(n[6]=i=>t.showSlotPopup=!0)},null,8,["title"])]),_:1},8,["title"]),e(m,{title:o.t("asyncClose")},{default:r(()=>[e(c,{title:o.t("notPromiseFunction"),"is-link":"",onClick:n[7]||(n[7]=i=>l.onShowAsyncClosePopup(t.TYPE_MAP.ASYNC_NORMAL))},null,8,["title"]),e(c,{title:o.t("promiseFunction"),"is-link":"",onClick:n[8]||(n[8]=i=>l.onShowAsyncClosePopup(t.TYPE_MAP.ASYNC_PROMISE))},null,8,["title"])]),_:1},8,["title"]),e(m,{title:o.t("useWay")},{default:r(()=>[e(c,{title:o.t("controlledPopup"),"is-link":"",onClick:l.onShowControlledPopup},null,8,["title","onClick"]),e(c,{title:o.t("functional"),"is-link":"",onClick:l.onShowFunctionalPicker},null,8,["title","onClick"])]),_:1},8,["title"])]),t.curPicker.show?(h(),_(P,{key:0,"is-showpopup-close":t.curPicker.isShowpopuoClose,"show-back-arrow":t.curPicker.showBackArrow,"is-cross-slab":t.curPicker.isCrossSlab,"is-border-btn":t.curPicker.isBorderBtn,"disabled-button":t.curPicker.disabledButton,"width-number":54,"custom-style":t.curPicker.customStyle,"popup-title":t.curPicker.title,"popup-title-btn":t.curPicker.popupTitleBtn,"async-confirm":l.asyncConfirm,"async-close":l.asyncCancel,onOnConfirm:t.curPicker.onConfirm,onOnCancel:t.curPicker.onCancel},{default:r(()=>[u("div",Y,p(o.t("SomeContent")),1)]),_:1},8,["is-showpopup-close","show-back-arrow","is-cross-slab","is-border-btn","disabled-button","custom-style","popup-title","popup-title-btn","async-confirm","async-close","onOnConfirm","onOnCancel"])):N("",!0),e(P,{"is-show":t.showSlotPopup,onConfirm:n[9]||(n[9]=i=>t.showSlotPopup=!1),onCancel:n[10]||(n[10]=i=>t.showSlotPopup=!1)},{icon:r(()=>[e(f,{name:"gem-o",size:"22px"})]),title:r(()=>[u("div",null,[O(p(o.t("wayToWin"))+" ",1),e(f,{name:"like-o",size:"16"})])]),button:r(()=>[e(f,{name:"setting-o",size:"22px"})]),default:r(()=>[u("div",g,p(o.t("SomeContent")),1)]),_:1},8,["is-show"]),e(P,{"is-show":t.showControlledPopup,button:o.t("confirm"),title:o.t("controlledPopup"),onConfirm:n[11]||(n[11]=i=>t.showControlledPopup=!1),onCancel:n[12]||(n[12]=i=>t.showControlledPopup=!1)},{default:r(()=>[u("div",z,p(o.t("SomeContent")),1)]),_:1},8,["is-show","button","title"]),e(b,{id:t.PRESS_PICKER_ID,ref:t.PRESS_PICKER_ID,mode:"functional"},{default:r(()=>[e(k,{"scroll-y":"",style:{maxHeight:"200px",padding:"0 20px"}},{default:r(()=>[u("div",W,p(o.t("SomeScrollContent")),1),u("div",L,p(o.t("SomeScrollContent")),1),u("div",D,p(o.t("SomeScrollContent")),1)]),_:1})]),_:1},8,["id"])])}const q=T(R,[["render",G],["__scopeId","data-v-2ad8a642"]]);export{q as default};
