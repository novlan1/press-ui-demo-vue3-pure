import{P as r}from"./press-slider-CIUsuJOD.js";import{P as g}from"./press-toast-CZvJ-vHJ.js";import{_ as h,o as m,c as v,f as t,l as o,r as i,a as c,t as C}from"./index-F6Gg9UHQ.js";import"./touch-Djes3Zvx.js";import"./rect-B27xLIPj.js";import"./unit-DNAv_vHq.js";import"./press-overlay-C5JL8Y2J.js";import"./press-transition-MQnSZ_jj.js";import"./dialog-mixin-DuaD0RSI.js";import"./component-handler-DG932W7Y.js";const p={i18n:{"zh-CN":{title1:"基础用法",title2:"双滑块",title3:"指定选择范围",title4:"禁用",title5:"指定步长",customStyle:"自定义样式",customButton:"自定义按钮",text:"当前值：",vertical:"垂直方向"},"en-US":{title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",customStyle:"Custom Style",customButton:"Custom Button",text:"Current value: ",vertical:"Vertical"}},components:{PressSlider:r,PressToast:g},data(){return{sectionStyle:"margin: 12px 16px",valueMap:{basic:"50",range:[10,50],maxAndMin:50,customStyle:50,customButton:30},dragValue:50}},methods:{onChange(l){console.log("[onChange] val: ",l),this.onGTip(`${this.t("text")}${l.toString()}`)},onDrag(l){console.log("[onDrag] val: ",l),this.onGTip(`drag: ${l}`),this.dragValue=l}}},y={class:"demo-wrap"},d={class:"custom-button"},_={style:{height:"150px"}};function S(l,f,b,M,e,n){const a=i("PressSlider"),s=i("demo-block"),u=i("press-slider");return m(),v("div",y,[t(s,{title:l.t("basicUsage"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{value:e.valueMap.basic,onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("title2"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{value:e.valueMap.range,range:"",onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("title3"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{min:-50,max:50,value:e.valueMap.maxAndMin,onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("title4"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{disabled:"",value:e.valueMap.basic,onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("title5"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{step:10,value:e.valueMap.basic,onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("customStyle"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{"bar-height":"4px","active-color":"#ee0a24",value:e.valueMap.customStyle,onChange:n.onChange},null,8,["value","onChange"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("customButton"),"section-style":e.sectionStyle},{default:o(()=>[t(a,{"use-button-slot":"",value:e.dragValue,onChange:n.onChange,onDrag:n.onDrag},{button:o(()=>[c("div",d,C(e.dragValue),1)]),_:1},8,["value","onChange","onDrag"])]),_:1},8,["title","section-style"]),t(s,{title:l.t("vertical"),"section-style":e.sectionStyle},{default:o(()=>[c("div",_,[t(u,{value:"50",vertical:"",onChange:n.onChange},null,8,["onChange"]),t(u,{value:e.valueMap.range,range:"",vertical:"","custom-style":"margin-left: 100px;",onChange:n.onChange},null,8,["value","onChange"])])]),_:1},8,["title","section-style"])])}const z=h(p,[["render",S],["__scopeId","data-v-eff8390e"]]);export{z as default};