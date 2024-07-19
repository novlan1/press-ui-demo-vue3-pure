import{P as C}from"./press-switch-BIgz85kA.js";import{P as d,D as u}from"./handler-DlI7FgMg.js";import{P as k}from"./press-cell-BaY-mjO3.js";import{P as g}from"./press-cell-group-feVgHPwR.js";import{_ as f,o as w,c as S,f as t,l as c,r as m}from"./index-CE2ZXbHd.js";import"./press-loading-plus-Bxq1XSi0.js";import"./utils-RS8Gkmf-.js";import"./add-unit-CWtSK4RX.js";import"./validator-DZhHpK6j.js";import"./style-CpIyAjCl.js";import"./press-component-C_abQ9Ny.js";import"./index-753QpPFu.js";import"./handler-helper-BKr0zvNe.js";import"./index-BUrZMHt3.js";import"./h5-handler-D8SNxyfB.js";import"./component-handler-C9gctCf9.js";import"./press-button-D8xbHllw.js";import"./press-icon-plus-Dyy2g7WH.js";import"./press-info-BxpO04Jl.js";import"./press-loading-M8LeRCva.js";import"./button-DBxD__BH.js";import"./system-mJD_gOJ2.js";import"./press-field-Bd4Z9NJ7.js";import"./event-BGFDB3JP.js";import"./support-passive-CNRHRm4O.js";import"./parent-CQhE6Wqc.js";import"./function-BMSh7xnP.js";import"./dialog-mixin-WX4maxk9.js";import"./link-CTZKeEPU.js";const b={i18n:{"zh-CN":{title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customColor:"自定义颜色",asyncControl:"异步控制"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}},components:{PressSwitch:C,PressDialog:d,PressCell:k,PressCellGroup:g},data(){return{isOpen:!0,checkedMap:{basic:!0,color:!0,size:!0,async:!0,cell:!0}}},methods:{onSwitchChange(){this.isOpen=!this.isOpen},onChange(l,e){if(console.log("[value]",l,e),e==="async"){u.show({context:this,title:this.t("title"),content:this.t("message"),confirmText:this.t("confirm"),cancelText:this.t("cancel")}).then(()=>{this.checkedMap.async=l});return}this.checkedMap[e]=l},onClick(){this.onGTip("[click]")}}},_={class:"demo-wrap"};function M(l,e,P,z,i,n){const r=m("PressSwitch"),s=m("demo-block"),p=m("press-switch"),h=m("press-cell"),a=m("press-cell-group");return w(),S("div",_,[t(s,{title:l.t("basicUsage")},{default:c(()=>[t(r,{checked:i.checkedMap.basic,onChange:e[0]||(e[0]=o=>n.onChange(o,"basic"))},null,8,["checked"])]),_:1},8,["title"]),t(s,{title:l.t("disabled")},{default:c(()=>[t(r,{checked:i.checkedMap.basic,disabled:"",onClick:n.onClick,onChange:e[1]||(e[1]=o=>n.onChange(o,"basic"))},null,8,["checked","onClick"])]),_:1},8,["title"]),t(s,{title:l.t("loadingStatus")},{default:c(()=>[t(r,{checked:i.checkedMap.basic,loading:"",onChange:e[2]||(e[2]=o=>n.onChange(o,"basic"))},null,8,["checked"])]),_:1},8,["title"]),t(s,{title:l.t("customSize")},{default:c(()=>[t(r,{checked:i.checkedMap.size,size:"24px",onChange:e[3]||(e[3]=o=>n.onChange(o,"size"))},null,8,["checked"])]),_:1},8,["title"]),t(s,{title:l.t("customColor")},{default:c(()=>[t(r,{checked:i.checkedMap.color,"active-color":"#07c160","inactive-color":"#ee0a24",onChange:e[4]||(e[4]=o=>n.onChange(o,"color"))},null,8,["checked"])]),_:1},8,["title"]),t(s,{title:l.t("asyncControl")},{default:c(()=>[t(r,{checked:i.checkedMap.async,onChange:e[5]||(e[5]=o=>n.onChange(o,"async"))},null,8,["checked"])]),_:1},8,["title"]),t(s,{title:"E-SPORT"},{default:c(()=>[t(r,{"custom-class":"press-switch--e-sport",open:i.isOpen,onOnSwitchChange:n.onSwitchChange},null,8,["open","onOnSwitchChange"])]),_:1}),t(s,{title:l.t("withCell")},{default:c(()=>[t(a,null,{default:c(()=>[t(h,{title:l.t("title"),clickable:"",onClick:e[7]||(e[7]=o=>n.onChange(!i.checkedMap.cell,"cell"))},{"right-icon":c(()=>[t(p,{size:"22px",checked:i.checkedMap.cell,onChange:e[6]||(e[6]=o=>n.onChange(!i.checkedMap.cell,"cell"))},null,8,["checked"])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"])])}const te=f(b,[["render",M]]);export{te as default};