import{P as f,d as T,a as _}from"./press-datetime-picker-popup-C1PVxPqj.js";import{P as w}from"./press-cell-iwUCYNKV.js";import{P as C}from"./press-popup-plus-DHMzXh0W.js";import{_ as d,r as c,o as y,b as I,l as u,f as r,c as v}from"./index-VLx2MJJu.js";import{t as O}from"./time-DadpJyRx.js";import{b as x}from"./index-BsvToeAb.js";import"./press-popup-9SObBmgO.js";import"./press-button-C4Eyu2_G.js";import"./press-icon-plus-zKCOzNHP.js";import"./style-CpIyAjCl.js";import"./add-unit-DeNeB5nf.js";import"./validator-C_cgqHAw.js";import"./press-info-DLY6PURR.js";import"./utils-D0lA7q9W.js";import"./press-component-BmHMjgT0.js";import"./press-loading-plus-DsguuShn.js";import"./press-loading-AM-uTMBk.js";import"./button-B0PQCQjz.js";import"./system-C5_2TD7H.js";import"./function-C2llw6XQ.js";import"./press-picker-plus-i9MgQ4Xv.js";import"./number-CU9l-NjU.js";import"./parent-map-CQhFZDpB.js";import"./index-8e0EJ1Wh.js";import"./computed-2-dfbS2K.js";import"./functional-C7M1QJkK.js";import"./link-CAqpeIDw.js";import"./event-CFWsryW7.js";import"./support-passive-CNRHRm4O.js";import"./press-overlay-CrlS5sXs.js";import"./press-transition-BPTpwSe7.js";const g={name:"PressDatetimePickerPopupPlus",components:{PressPopupPlus:C,PressDatetimePicker:f},props:{show:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},datetimePicker:{type:Object,default:()=>({})},formatter:{type:[Function,null],default:T},filter:{type:[Function,null],default:null},zIndex:{type:Number,default:100}},data(){return{}},methods:{input(e){this.$emit("input",e)},cancel(...e){this.$emit("cancel",...e)},confirm(...e){this.$emit("confirm",...e)},clickOverlay(){this.$emit("click-overlay")}}};function M(e,i,t,s,o,n){const l=c("PressDatetimePicker"),m=c("PressPopupPlus");return y(),I(m,{show:t.show,"z-index":t.zIndex,position:"bottom","close-on-click-overlay":t.closeOnClickOverlay,onClickOverlay:n.clickOverlay,onClose:n.cancel},{default:u(()=>[r(l,{value:t.datetimePicker.value,"show-toolbar":t.datetimePicker.showToolbar||!1,"item-height":t.datetimePicker.itemHeight||56,type:t.datetimePicker.type||"datetime","max-date":t.datetimePicker.maxDate,"min-date":t.datetimePicker.minDate,"immediate-check":t.datetimePicker.immediateCheck,title:t.datetimePicker.title||"",formatter:t.formatter,filter:t.filter,onInput:n.input,onCancel:n.cancel,onConfirm:n.confirm},null,8,["value","show-toolbar","item-height","type","max-date","min-date","immediate-check","title","formatter","filter","onInput","onCancel","onConfirm"])]),_:1},8,["show","z-index","close-on-click-overlay","onClickOverlay","onClose"])}const b=d(g,[["render",M]]);let a;const P="press-picker-functional",p=1e3*60*60*24*365,E={i18n:{"zh-CN":{day:"日",year:"年",month:"月",hour:"时",minute:"分",timeType:"选择时间",dateType:"选择年月日",datetimeType:"选择完整时间",dateHourType:"选择年月日小时",monthDayType:"选择月日",yearMonthType:"选择年月",optionFilter:"选项过滤器",sortColumns:"自定义列排序",withPopup:"结合Popup",withPopupPlus:"结合 PopupPlus",functional:"函数式调用"},"en-US":{day:" Day",year:" Year",month:" Month",hour:"Hour",minute:"Minute",timeType:"Choose Time",dateType:"Choose Date",datetimeType:"Choose DateTime",dateHourType:"Choose DateHour",monthDayType:"Choose Month-Day",yearMonthType:"Choose Year-Month",optionFilter:"Option Filter",sortColumns:"Columns Order",withPopup:"With Popup",withPopupPlus:"With PopupPlus",functional:"Functional Mode"}},components:{PressDatetimePicker:f,PressDatetimePickerPopup:_,PressCell:w,PressDatetimePickerPopupPlus:b},data(){a=this;const e=new Date().getTime(),i=new Date(2099,10,1).getTime();return{minHour:10,maxHour:20,minDate:e,maxDate:i,currentDate:new Date().getTime(),currentTime:"12:00",filter(t,s){return t==="minute"?s.filter(o=>o%5===0):s},DATE_TIME_PICKER_ID:P,datetimePicker:{value:new Date().getTime(),minDate:new Date().getTime()-p,maxDate:new Date().getTime()+p,input(t){a.onInput(t)}},popupPlus:{show:!1,closeOnClickOverlay:!0,datetimePicker:{showToolbar:!0,minDate:e,maxDate:i,title:"选择时间"}}}},methods:{formatter(e,i){const t=a.t("year"),s=a.t("month"),o=a.t("day"),n=a.t("hour"),l=a.t("minute");if(e==="year")return`${i}${t}`;if(e==="month")return`${i}${s}`;if(e==="day")return`${i}${o}`;if(e==="hour")return`${i}${n}`;if(e==="minute")return`${i}${l}`},onInput(e){this.currentDate=e,this.onTip(`${O(e,"yyyy-MM-dd hh:mm")}`)},onInputTime(e){this.currentTime=e,this.onTip(e)},onShowFunctionalPicker(){let e="";x.call(this,{context:this,selector:`#${P}`,title:this.t("timeType"),button:this.t("confirm"),horizontal:!1,closeIcon:!1,arrowIcon:!1,borderButton:!1,customStyle:"",datetimePicker:{value:new Date().getTime(),minDate:new Date().getTime()-p,maxDate:new Date().getTime()+p,input(i){a.onInput(i),e=i,console.log("inputValue",e)}}}).then((i={})=>{const{context:t}=i;console.log("inputValue",e),this.onTip("confirm"),t.innerShow=!1}).catch((i={})=>{const{context:t}=i;this.onTip("cancel"),t.innerShow=!1})},confirm(){},cancel(){},onTip(e){this.onGTip(`${e}`,1500)},onShowPopupPlus(){this.popupPlus.show=!0},onConfirm(e){this.popupPlus.show=!1,console.log("[confirm]",e),this.onInput(e)}}},F={class:"demo-wrap"};function S(e,i,t,s,o,n){const l=c("press-datetime-picker"),m=c("demo-block"),h=c("press-cell"),k=c("PressDatetimePickerPopup"),D=c("PressDatetimePickerPopupPlus");return y(),v("div",F,[r(m,{title:e.t("datetimeType")},{default:u(()=>[r(l,{type:"datetime",value:o.currentDate,"min-date":o.minDate,"max-date":o.maxDate,onInput:n.onInput},null,8,["value","min-date","max-date","onInput"])]),_:1},8,["title"]),r(m,{title:e.t("dateType")},{default:u(()=>[r(l,{type:"date",value:o.currentDate,"min-date":o.minDate,formatter:n.formatter,onInput:n.onInput},null,8,["value","min-date","formatter","onInput"])]),_:1},8,["title"]),r(m,{title:e.t("yearMonthType")},{default:u(()=>[r(l,{type:"year-month",value:o.currentDate,"min-date":o.minDate,onInput:n.onInput},null,8,["value","min-date","onInput"])]),_:1},8,["title"]),r(m,{title:e.t("timeType")},{default:u(()=>[r(l,{type:"time",value:o.currentTime,"min-hour":o.minHour,"max-hour":o.maxHour,onInput:n.onInputTime},null,8,["value","min-hour","max-hour","onInput"])]),_:1},8,["title"]),r(m,{title:e.t("optionFilter")},{default:u(()=>[r(l,{type:"time",value:o.currentTime,filter:o.filter,onInput:n.onInputTime},null,8,["value","filter","onInput"])]),_:1},8,["title"]),r(m,{title:e.t("withPopupPlus")},{default:u(()=>[r(h,{title:e.t("check"),"is-link":"",onClick:n.onShowPopupPlus},null,8,["title","onClick"])]),_:1},8,["title"]),r(m,{title:e.t("withPopup")},{default:u(()=>[r(h,{title:e.t("functional"),"is-link":"",onClick:n.onShowFunctionalPicker},null,8,["title","onClick"])]),_:1},8,["title"]),r(k,{id:o.DATE_TIME_PICKER_ID,ref:o.DATE_TIME_PICKER_ID,mode:"functional"},null,8,["id"]),r(D,{show:o.popupPlus.show,"datetime-picker":o.popupPlus.datetimePicker,formatter:n.formatter,filter:o.filter,"close-on-click-overlay":o.popupPlus.closeOnClickOverlay,onCancel:i[0]||(i[0]=H=>o.popupPlus.show=!1),onConfirm:n.onConfirm,onInput:n.onInput},null,8,["show","datetime-picker","formatter","filter","close-on-click-overlay","onConfirm","onInput"])])}const pe=d(E,[["render",S]]);export{pe as default};
