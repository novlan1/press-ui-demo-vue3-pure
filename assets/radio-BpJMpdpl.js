import{P as v,a as g}from"./press-radio-group-BRKIzs-h.js";import{P as C}from"./press-cell-Dr4o2Qkj.js";import{P as h}from"./press-cell-group-Dbj5lGmi.js";import{_,o as z,c as S,e,k as a,r as c,G as s,t as u,a as f}from"./index-88cP1sOH.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./parent-CQhE6Wqc.js";import"./link-JqS4mJdw.js";import"./event-CnosvntJ.js";const k={i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",withCell:"与 Cell 组件一起使用",horizontal:"水平排列",customIcon:"自定义图标",customColor:"自定义颜色",customShape:"自定义形状",customIconSize:"自定义大小",disableLabel:"禁用文本点击"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}},components:{PressRadio:v,PressRadioGroup:g,PressCell:C,PressCellGroup:h},data(){return{valueMap:{basic:"a",horizontal:"a",disabled:"a",square:"a",customStyle:"a",customSize:"a",customIcon:"a",labelDisabled:"a",cell:"1"},icon:{normal:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png",active:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png"}}},methods:{onChange(l,o){console.log("onChange.val",l),this.valueMap[o]=l}}},I={class:"demo-wrap"},M=["src"],q=["src"];function y(l,o,D,P,i,r){const n=c("press-radio"),d=c("press-radio-group"),m=c("demo-block"),p=c("press-cell"),b=c("press-cell-group");return z(),S("div",I,[e(m,{title:l.t("basicUsage")},{default:a(()=>[e(d,{value:i.valueMap.basic,onChange:o[0]||(o[0]=t=>r.onChange(t,"basic"))},{default:a(()=>[e(n,{name:"a"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("horizontal")},{default:a(()=>[e(d,{value:i.valueMap.horizontal,direction:"horizontal",onChange:o[1]||(o[1]=t=>r.onChange(t,"horizontal"))},{default:a(()=>[e(n,{name:"a"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("disabled")},{default:a(()=>[e(d,{value:i.valueMap.disabled,disabled:"",onChange:o[2]||(o[2]=t=>r.onChange(t,"disabled"))},{default:a(()=>[e(n,{name:"a"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("customShape")},{default:a(()=>[e(d,{value:i.valueMap.square,onChange:o[3]||(o[3]=t=>r.onChange(t,"square"))},{default:a(()=>[e(n,{name:"a",shape:"square"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b",shape:"square"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("customColor")},{default:a(()=>[e(d,{value:i.valueMap.customStyle,onChange:o[4]||(o[4]=t=>r.onChange(t,"customStyle"))},{default:a(()=>[e(n,{name:"a","checked-color":"#07c160"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b","checked-color":"#07c160"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("customIconSize")},{default:a(()=>[e(d,{value:i.valueMap.customSize,onChange:o[5]||(o[5]=t=>r.onChange(t,"customSize"))},{default:a(()=>[e(n,{name:"a","icon-size":"24px"},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b","icon-size":"24px"},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("customIcon")},{default:a(()=>[e(d,{value:i.valueMap.customIcon,onChange:o[6]||(o[6]=t=>r.onChange(t,"customIcon"))},{default:a(()=>[e(n,{name:"a","use-icon-slot":""},{icon:a(()=>[f("img",{class:"img",src:i.valueMap.customIcon==="a"?i.icon.active:i.icon.normal},null,8,M)]),default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b","use-icon-slot":""},{icon:a(()=>[f("img",{class:"img",src:i.valueMap.customIcon==="b"?i.icon.active:i.icon.normal},null,8,q)]),default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("disableLabel")},{default:a(()=>[e(d,{value:i.valueMap.labelDisabled,onChange:o[7]||(o[7]=t=>r.onChange(t,"labelDisabled"))},{default:a(()=>[e(n,{name:"a","label-disabled":""},{default:a(()=>[s(u(l.t("radio"))+" 1 ",1)]),_:1}),e(n,{name:"b","label-disabled":""},{default:a(()=>[s(u(l.t("radio"))+" 2 ",1)]),_:1})]),_:1},8,["value"])]),_:1},8,["title"]),e(m,{title:l.t("withCell"),"section-style":"margin: 0;"},{default:a(()=>[e(d,{value:i.valueMap.cell,onChange:o[10]||(o[10]=t=>r.onChange(t,"cell"))},{default:a(()=>[e(b,null,{default:a(()=>[e(p,{title:`${l.t("radio")} 1`,clickable:"","data-name":"1",onClick:o[8]||(o[8]=t=>i.valueMap.cell="1")},{"right-icon":a(()=>[e(n,{name:"1"})]),_:1},8,["title"]),e(p,{title:`${l.t("radio")} 2`,clickable:"","data-name":"2",onClick:o[9]||(o[9]=t=>i.valueMap.cell="2")},{"right-icon":a(()=>[e(n,{name:"2"})]),_:1},8,["title"])]),_:1})]),_:1},8,["value"])]),_:1},8,["title"])])}const E=_(k,[["render",y],["__scopeId","data-v-1b9d62fd"]]);export{E as default};