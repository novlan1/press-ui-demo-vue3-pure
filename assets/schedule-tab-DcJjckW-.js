import{P as b}from"./press-schedule-tab-BQE_BSLf.js";import{_ as l,o as u,c as i,f as t,n as o,r as c}from"./index-DU6LSpJC.js";const m={components:{PressScheduleTab:b},data(){return{currentTab:1,currentTab3:"B",tabList:[{name:"默认规则",key:1},{name:"自定义规则",key:2}],tabList3:[{name:"Tab A",key:"A"},{name:"Tab B",key:"B"},{name:"Tab C",key:"C"},{name:"Tab D",key:"D"}]}},methods:{onChangeTab(e){this.currentTab=e},onChangeTab3(e){this.currentTab3=e}}},h={class:"demo-wrap"};function T(e,_,d,p,n,a){const r=c("PressScheduleTab"),s=c("demo-block");return u(),i("div",h,[t(s,{title:e.t("basicUsage")},{default:o(()=>[t(r,{current:n.currentTab,list:n.tabList,onChange:a.onChangeTab},null,8,["current","list","onChange"])]),_:1},8,["title"]),t(s,{title:"多项"},{default:o(()=>[t(r,{current:n.currentTab3,list:n.tabList3,onChange:a.onChangeTab3},null,8,["current","list","onChange"])]),_:1})])}const k=l(m,[["render",T]]);export{k as default};