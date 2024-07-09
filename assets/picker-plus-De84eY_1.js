import{P as h,p as x}from"./press-picker-plus-gxSjo37n.js";import{P as g}from"./press-popup-plus-DuNtFC2D.js";import{_ as p,r as c,o as C,b as k,n as u,f as l,c as _}from"./index-BXJiSO9X.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./number-CU9l-NjU.js";import"./press-component-DoZYj-_b.js";import"./parent-map-BqFbVUej.js";import"./press-loading-plus-DAf2CFYh.js";import"./index-8MGmyJdE.js";import"./press-icon-plus-BVVeYod4.js";import"./press-info-CaSyg39j.js";import"./press-overlay-CF5R9TPs.js";import"./press-transition-Bv_UwlUL.js";import"./system-BAdrsxg_.js";const w={name:"PressPickerPlusPopupPlus",components:{PressPopupPlus:g,PressPickerPlus:h},props:{...x,show:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:0},zIndex:{type:Number,default:100}},data(){return{}},methods:{cancel(...e){this.$emit("cancel",...e)},confirm(...e){this.$emit("confirm",...e)},clickOverlay(){this.$emit("click-overlay")},onChange(...e){this.$emit("change",...e)}}};function b(e,o,t,r,i,n){const a=c("PressPickerPlus"),s=c("PressPopupPlus");return C(),k(s,{show:t.show,position:"bottom","z-index":t.zIndex,"close-on-click-overlay":t.closeOnClickOverlay,onClickOverlay:n.clickOverlay,onClose:n.cancel},{default:u(()=>[l(a,{ref:"picker","show-toolbar":"",columns:t.columns,"default-index":t.defaultIndex,onChange:n.onChange,onCancel:n.cancel,onConfirm:n.confirm},null,8,["columns","default-index","onChange","onCancel","onConfirm"])]),_:1},8,["show","z-index","close-on-click-overlay","onClickOverlay","onClose"])}const y=p(w,[["render",b]]),m={"zh-CN":[{values:["周一","周二","周三","周四","周五"],defaultIndex:2},{values:["上午","下午","晚上"],defaultIndex:1}],"en-US":[{values:["Monday","Tuesday","Wednesday","Thursday","Friday"],defaultIndex:2},{values:["Morning","Afternoon","Evening"],defaultIndex:1}]},d={"zh-CN":[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]},{text:"福建",children:[{text:"福州",children:[{text:"鼓楼区"},{text:"台江区"}]},{text:"厦门",children:[{text:"思明区"},{text:"海沧区"}]}]}],"en-US":[{text:"Zhejiang",children:[{text:"Hangzhou",children:[{text:"Xihu"},{text:"Yuhang"}]},{text:"Wenzhou",children:[{text:"Lucheng"},{text:"Ouhai"}]}]},{text:"Fujian",children:[{text:"Fuzhou",children:[{text:"Gulou"},{text:"Taijiang"}]},{text:"Xiamen",children:[{text:"Siming"},{text:"Haicang"}]}]}]},v={i18n:{"zh-CN":{city:"城市",cascade:"级联选择",withPopup:"搭配弹出层使用",chooseCity:"选择城市",showToolbar:"展示顶部栏",dateColumns:m["zh-CN"],defaultIndex:"默认选中项",disableOption:"禁用选项",cascadeColumns:d["zh-CN"],multipleColumns:"多列联动",setColumnValues:"动态设置选项",textColumns:["杭州","宁波","温州","绍兴","湖州","嘉兴","金华","衢州"],disabledColumns:[{text:"杭州",disabled:!0},{text:"宁波"},{text:"温州"}],column3:{浙江:["杭州","宁波","温州","嘉兴","湖州"],福建:["福州","厦门","莆田","三明","泉州"]},toastContent:(e,o)=>`当前值：${e}, 当前索引：${o}`,withPopupPlus:"结合 PopupPlus"},"en-US":{city:"City",cascade:"Cascade",withPopup:"With Popup",chooseCity:"Choose City",showToolbar:"Show Toolbar",dateColumns:m["en-US"],defaultIndex:"Default Index",disableOption:"Disable Option",cascadeColumns:d["en-US"],multipleColumns:"Multiple Columns",setColumnValues:"Set Column Values",textColumns:["Delaware","Florida","Georqia","Indiana","Maine"],disabledColumns:[{text:"Delaware",disabled:!0},{text:"Florida"},{text:"Georqia"}],column3:{Group1:["Delaware","Florida","Georqia","Indiana","Maine"],Group2:["Alabama","Kansas","Louisiana","Texas"]},toastContent:(e,o)=>`Value: ${e}, Index：${o}`,withPopupPlus:"With PopupPlus"}},components:{PressPickerPlus:h,PressPickerPlusPopupPlus:y},data(){return{showPopupPlus:!1}},computed:{columns(){return this.t("textColumns")},disabledColumns(){return this.t("disabledColumns")},cColumns(){const e=this.t("column3");return[{values:Object.keys(e),className:"column1"},{values:Object.values(e)[0],className:"column2",defaultIndex:2}]}},methods:{onChangePicker(e){const o=this.t("column3"),{value:t}=e;this.$refs.picker.setColumnValues(1,o[t[0]]);const r=this.$refs.picker.getValues(),i=this.$refs.picker.getIndexes();this.onTip({value:r,index:i})},onChange(e){console.log("onChange.val",e),this.onTip(e)},onCancel(e){console.log("onCancel.val",e),this.onTip(e,"[cancel] ")},onConfirm(e){console.log("onConfirm.val",e),this.onTip(e,"[confirm] ")},onTip(e,o=""){const{value:t,index:r}=e,i=`${o}value: ${t.text||t}, index: ${r}`;this.onGTip(i)},onShowPopupPlus(){this.showPopupPlus=!0},confirmPopupPlus(...e){console.log("[confirmPopupPlus]",...e),this.showPopupPlus=!1}}},I={class:"demo-wrap"};function O(e,o,t,r,i,n){const a=c("press-picker-plus"),s=c("demo-block"),P=c("press-cell"),f=c("PressPickerPlusPopupPlus");return C(),_("div",I,[l(s,{title:e.t("basicUsage")},{default:u(()=>[l(a,{columns:n.columns,onChange:n.onChange},null,8,["columns","onChange"])]),_:1},8,["title"]),l(s,{title:e.t("defaultIndex")},{default:u(()=>[l(a,{columns:n.columns,"default-index":2,onChange:n.onChange},null,8,["columns","onChange"])]),_:1},8,["title"]),l(s,{title:e.t("showToolbar")},{default:u(()=>[l(a,{"show-toolbar":"",title:e.t("title"),columns:n.columns,onChange:n.onChange,onCancel:n.onCancel,onConfirm:n.onConfirm},null,8,["title","columns","onChange","onCancel","onConfirm"])]),_:1},8,["title"]),l(s,{title:e.t("multipleColumns")},{default:u(()=>[l(a,{ref:"picker",columns:n.cColumns,onChange:n.onChangePicker},null,8,["columns","onChange"])]),_:1},8,["title"]),l(s,{title:e.t("disableOption")},{default:u(()=>[l(a,{columns:n.disabledColumns,onChange:n.onChange},null,8,["columns","onChange"])]),_:1},8,["title"]),l(s,{title:e.t("loadingStatus")},{default:u(()=>[l(a,{columns:n.disabledColumns,loading:"",onChange:n.onChange},null,8,["columns","onChange"])]),_:1},8,["title"]),l(s,{title:e.t("withPopupPlus")},{default:u(()=>[l(P,{title:e.t("check"),"is-link":"",onClick:n.onShowPopupPlus},null,8,["title","onClick"])]),_:1},8,["title"]),l(f,{show:i.showPopupPlus,columns:n.columns,onChange:n.onChange,onCancel:o[0]||(o[0]=T=>i.showPopupPlus=!1),onConfirm:n.confirmPopupPlus},null,8,["show","columns","onChange","onConfirm"])])}const H=p(v,[["render",O]]);export{H as default};
