import{P as B}from"./press-cell-DSELpy-m.js";import{P as A}from"./press-popup-Cn_u2cxO.js";import{b as T}from"./index-CtSWKnZF.js";import{P as v}from"./press-icon-plus-B5CFdVb5.js";import{S as I}from"./scroll-view-gEPpO0v9.js";import{_,o as h,c as N,a as u,f as e,l as r,b as O,d as F,r as m,t as p,A as E}from"./index-DfxNb_pP.js";import"./link-BfUqlCTp.js";import"./utils-C2tViYFs.js";import"./add-unit-B8Dm0KXN.js";import"./style-CpIyAjCl.js";import"./press-component-D9D_j5DA.js";import"./event-CpAS7Alu.js";import"./support-passive-CNRHRm4O.js";import"./press-button-BXeVA5Ku.js";import"./press-loading-plus-bw9xFZF2.js";import"./press-loading-ByYuoW3c.js";import"./button-ge1sxQBA.js";import"./system-BWskc-Wq.js";import"./function-C6V8280e.js";import"./press-info-BsYXiOQL.js";import"./adapter-BgGMvpFJ.js";const w="press-picker-functional",a={ASYNC_NORMAL:"async-normal",ASYNC_PROMISE:"async-promise"};function y({t:o,type:n,onTip:P,onGShowLoading:d}){return new Promise(t=>{d(o("asyncConfirm"),{mask:!0,duration:3e3}),setTimeout(()=>{n==="confirm"?(P(o("asyncConfirmSuccess")),t(!0)):(t(!1),P(o("asyncConfirmFail")))},500)})}let s;const R={i18n:{"zh-CN":{wayToWin:"决胜方式",SomeContent:"一些内容",SomeScrollContent:"一些可以滚动的内容",controlledPopup:"受控组件",functional:"函数式调用",check:"查看",closeIcon:"关闭图标",customStyle:"自定义样式",buttonSlot:"使用插槽",cancelIcon:"取消图标",noCloseOrCancel:"没有关闭/取消",plainButtonConfirm:"线框按钮",disabledButton:"禁用状态",horizontal:"横版",asyncClose:"异步关闭",asyncConfirm:"异步确认中...",asyncConfirmSuccess:"异步确认后可以关闭",asyncConfirmFail:"异步确认后禁止关闭",useWay:"使用方式",notPromiseFunction:"Not Promise",promiseFunction:"Promise"},"en-US":{wayToWin:"Bo Number",SomeContent:"Some Content",controlledPopup:"Controlled Popup",functional:"Functional Mode",check:"Check",customStyle:"Custom Style",buttonSlot:"Use Slot",closeIcon:"Close Ion",cancelIcon:"Cancel Icon",noCloseOrCancel:"No Close Or Cancel",plainButtonConfirm:"Plain Button",disabledButton:"Disabled Button",horizontal:"Horizontal Version",asyncClose:"Async Close",asyncConfirm:"Async Confirm ...",asyncConfirmSuccess:"Async Confirm Success",asyncConfirmFail:"Async Confirm Fail",useWay:"Use Way",notPromiseFunction:"Not Promise",promiseFunction:"Promise"}},components:{PressCell:B,PressPopup:A,PressIconPlus:v},mixins:[I],data(){s=this;const o={title:this.t("wayToWin"),popupTitleBtn:this.t("confirm"),isCrossSlab:!1,isShowpopuoClose:!1,showBackArrow:!1,isBorderBtn:!1,disabledButton:!1,customStyle:"",onConfirm:()=>{this.curPicker.show=!1},onCancel:()=>{this.curPicker.show=!1}};return{type:"",customStyle:"",popupOptions:{normal:{isShowpopuoClose:!0},cancel:{showBackArrow:!0},noClose:{},hor:{popupTitleBtn:"",isCrossSlab:!0,isShowpopuoClose:!0,customStyle:""},borderBtn:{isShowpopuoClose:!0,isBorderBtn:!0},disabledButton:{isShowpopuoClose:!0,disabledButton:!0}},commonOptions:o,curPicker:{...o},pressPickerFunctionalData:{},PRESS_PICKER_ID:w,showControlledPopup:!1,showSlotPopup:!1,TYPE_MAP:a}},computed:{},methods:{onShowPopup(o){this.onGHideToast(),this.type=o,o==="disabledButton"&&setTimeout(()=>{this.curPicker.disabledButton=!1},3e3),this.curPicker={...this.commonOptions,...this.popupOptions[o],show:!0}},onTip(o){this.onGTip(o)},onShowFunctionalPicker(){T.call(this,{context:this,selector:`#${w}`,title:this.t("wayToWin"),button:this.t("confirm"),horizontal:!1,closeIcon:!1,arrowIcon:!0,borderButton:!1,customStyle:""}).then(()=>{this.onTip("confirm")}).catch(()=>{this.onTip("cancel")})},onConfirm(){this.onTip("confirm")},onCancel(){this.onTip("cancel")},onShowControlledPopup(){this.showControlledPopup=!0},onShowAsyncClosePopup(o){this.type=o,this.curPicker={...this.commonOptions,isShowpopuoClose:!0,show:!0}},asyncConfirm(){return s.type===a.ASYNC_PROMISE?y({t:s.t,type:"confirm",onTip:s.onTip,onGShowLoading:s.onGShowLoading}):(s.type===a.ASYNC_NORMAL&&s.onTip("Can Close"),!0)},asyncCancel(){return s.type===a.ASYNC_PROMISE?y({t:s.t,type:"cancel",onTip:s.onTip,onGShowLoading:s.onGShowLoading}):s.type===a.ASYNC_NORMAL?(s.onTip("Can not close"),!1):!0}}},M={class:"demo-wrap"},Y={class:"content"},g={class:"content"},z={class:"content"},W={class:"content__inner"},L={class:"content__inner"},D={class:"content__inner"};function G(o,n,P,d,t,i){const c=m("press-cell"),C=m("demo-block"),S=m("PressPopup"),f=m("PressIconPlus"),k=m("scroll-view"),b=m("press-popup");return h(),N("div",M,[u("div",null,[e(C,{title:o.t("basicUsage")},{default:r(()=>[e(c,{title:o.t("closeIcon"),"is-link":"",onClick:n[0]||(n[0]=l=>i.onShowPopup("normal"))},null,8,["title"]),e(c,{title:o.t("cancelIcon"),"is-link":"",onClick:n[1]||(n[1]=l=>i.onShowPopup("cancel"))},null,8,["title"]),e(c,{title:o.t("noCloseOrCancel"),"is-link":"",onClick:n[2]||(n[2]=l=>i.onShowPopup("noClose"))},null,8,["title"])]),_:1},8,["title"]),e(C,{title:o.t("customStyle")},{default:r(()=>[e(c,{title:o.t("plainButtonConfirm"),"is-link":"",onClick:n[3]||(n[3]=l=>i.onShowPopup("borderBtn"))},null,8,["title"]),e(c,{title:o.t("disabledButton"),"is-link":"",onClick:n[4]||(n[4]=l=>i.onShowPopup("disabledButton"))},null,8,["title"]),e(c,{title:o.t("horizontal"),"is-link":"",onClick:n[5]||(n[5]=l=>i.onShowPopup("hor"))},null,8,["title"]),e(c,{title:o.t("buttonSlot"),"is-link":"",onClick:n[6]||(n[6]=l=>t.showSlotPopup=!0)},null,8,["title"])]),_:1},8,["title"]),e(C,{title:o.t("asyncClose")},{default:r(()=>[e(c,{title:o.t("notPromiseFunction"),"is-link":"",onClick:n[7]||(n[7]=l=>i.onShowAsyncClosePopup(t.TYPE_MAP.ASYNC_NORMAL))},null,8,["title"]),e(c,{title:o.t("promiseFunction"),"is-link":"",onClick:n[8]||(n[8]=l=>i.onShowAsyncClosePopup(t.TYPE_MAP.ASYNC_PROMISE))},null,8,["title"])]),_:1},8,["title"]),e(C,{title:o.t("useWay")},{default:r(()=>[e(c,{title:o.t("controlledPopup"),"is-link":"",onClick:i.onShowControlledPopup},null,8,["title","onClick"]),e(c,{title:o.t("functional"),"is-link":"",onClick:i.onShowFunctionalPicker},null,8,["title","onClick"])]),_:1},8,["title"])]),t.curPicker.show?(h(),O(S,{key:0,"is-showpopup-close":t.curPicker.isShowpopuoClose,"show-back-arrow":t.curPicker.showBackArrow,"is-cross-slab":t.curPicker.isCrossSlab,"is-border-btn":t.curPicker.isBorderBtn,"disabled-button":t.curPicker.disabledButton,"width-number":54,"custom-style":t.curPicker.customStyle,"popup-title":t.curPicker.title,"popup-title-btn":t.curPicker.popupTitleBtn,"async-confirm":i.asyncConfirm,"async-close":i.asyncCancel,onOnConfirm:t.curPicker.onConfirm,onOnCancel:t.curPicker.onCancel},{default:r(()=>[u("div",Y,p(o.t("SomeContent")),1)]),_:1},8,["is-showpopup-close","show-back-arrow","is-cross-slab","is-border-btn","disabled-button","custom-style","popup-title","popup-title-btn","async-confirm","async-close","onOnConfirm","onOnCancel"])):F("",!0),e(S,{"is-show":t.showSlotPopup,onConfirm:n[9]||(n[9]=l=>t.showSlotPopup=!1),onCancel:n[10]||(n[10]=l=>t.showSlotPopup=!1)},{icon:r(()=>[e(f,{name:"gem-o",size:"22px"})]),title:r(()=>[u("div",null,[E(p(o.t("wayToWin"))+" ",1),e(f,{name:"like-o",size:"16"})])]),button:r(()=>[e(f,{name:"setting-o",size:"22px"})]),default:r(()=>[u("div",g,p(o.t("SomeContent")),1)]),_:1},8,["is-show"]),e(S,{"is-show":t.showControlledPopup,button:o.t("confirm"),title:o.t("controlledPopup"),onConfirm:n[11]||(n[11]=l=>t.showControlledPopup=!1),onCancel:n[12]||(n[12]=l=>t.showControlledPopup=!1)},{default:r(()=>[u("div",z,p(o.t("SomeContent")),1)]),_:1},8,["is-show","button","title"]),e(b,{id:t.PRESS_PICKER_ID,ref:t.PRESS_PICKER_ID,mode:"functional"},{default:r(()=>[e(k,{"scroll-y":"",style:{maxHeight:"200px",padding:"0 20px"}},{default:r(()=>[u("div",W,p(o.t("SomeScrollContent")),1),u("div",L,p(o.t("SomeScrollContent")),1),u("div",D,p(o.t("SomeScrollContent")),1)]),_:1})]),_:1},8,["id"])])}const uo=_(R,[["render",G],["__scopeId","data-v-2ad8a642"]]);export{uo as default};