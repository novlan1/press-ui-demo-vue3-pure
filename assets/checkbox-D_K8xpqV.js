import{P as p}from"./press-checkbox-CCXpFjwA.js";import{P as b}from"./press-checkbox-group-vUxDRQWN.js";import{_ as y,o as k,c as d,f as o,l,r,A as i,t as u}from"./index-BOnk8Yuo.js";import"./utils-C2tViYFs.js";import"./add-unit-B8Dm0KXN.js";import"./press-icon-plus-C7Qb4xCs.js";import"./style-CpIyAjCl.js";import"./press-info-C1OldtTD.js";import"./press-component-D9D_j5DA.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./parent-CQhE6Wqc.js";import"./adapter-CjQLvGzT.js";const g={i18n:{"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}},components:{PressCheckbox:p,PressCheckboxGroup:b},data(){return{checkedMap:{basic:!0,shape:!0,size:!0,color:!0,noLabel:!0,disabled:!0,group:["a","b"],groupMax:[]},sectionStyle:"margin: 1px 18px;",customStyle:"margin-bottom: 8px;"}},methods:{onChange(e,s){console.log("[onChange.val]",e,s),this.checkedMap[s]=e}}},C={class:"demo-wrap"};function f(e,s,S,v,t,a){const n=r("press-checkbox"),m=r("demo-block"),h=r("press-checkbox-group");return k(),d("div",C,[o(m,{title:e.t("basicUsage"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{value:t.checkedMap.basic,onChange:s[0]||(s[0]=c=>a.onChange(c,"basic"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("disabled"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{value:t.checkedMap.disabled,disabled:"",onChange:s[1]||(s[1]=c=>a.onChange(c,"disabled"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("customShape"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{shape:"square",value:t.checkedMap.shape,onChange:s[2]||(s[2]=c=>a.onChange(c,"shape"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("customColor"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{value:t.checkedMap.color,"checked-color":"#07c160",onChange:s[3]||(s[3]=c=>a.onChange(c,"color"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("customIconSize"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{value:t.checkedMap.size,"icon-size":25,onChange:s[4]||(s[4]=c=>a.onChange(c,"size"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("disableLabel"),"section-style":t.sectionStyle},{default:l(()=>[o(n,{value:t.checkedMap.noLabel,"label-disabled":"",onChange:s[5]||(s[5]=c=>a.onChange(c,"noLabel"))},{default:l(()=>[i(u(e.t("checkbox")),1)]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("title3"),"section-style":t.sectionStyle},{default:l(()=>[o(h,{value:t.checkedMap.group,onChange:s[6]||(s[6]=c=>a.onChange(c,"group"))},{default:l(()=>[o(n,{name:"a","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" a ",1)]),_:1},8,["custom-style"]),o(n,{name:"b","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" b ",1)]),_:1},8,["custom-style"]),o(n,{name:"c","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" c ",1)]),_:1},8,["custom-style"])]),_:1},8,["value"])]),_:1},8,["title","section-style"]),o(m,{title:e.t("title4"),"section-style":t.sectionStyle},{default:l(()=>[o(h,{value:t.checkedMap.groupMax,max:2,onChange:s[7]||(s[7]=c=>a.onChange(c,"groupMax"))},{default:l(()=>[o(n,{name:"a","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" A ",1)]),_:1},8,["custom-style"]),o(n,{name:"b","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" B ",1)]),_:1},8,["custom-style"]),o(n,{name:"c","custom-style":t.customStyle},{default:l(()=>[i(u(e.t("checkbox"))+" C ",1)]),_:1},8,["custom-style"])]),_:1},8,["value"])]),_:1},8,["title","section-style"])])}const T=y(g,[["render",f]]);export{T as default};
