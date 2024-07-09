import{P}from"./press-picker-BMo1tnA7.js";import{P as d}from"./press-cell-CXncsEZw.js";import{b as f}from"./index-D-cODh84.js";import{_ as T,o as m,c as C,f as o,n as h,b,d as v,r as a}from"./index-BXJiSO9X.js";import"./press-popup-U5kgsY5O.js";import"./press-button-D_1IeF99.js";import"./press-icon-plus-BVVeYod4.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-CaSyg39j.js";import"./press-component-DoZYj-_b.js";import"./press-loading-plus-DAf2CFYh.js";import"./press-loading-CjS78Ikv.js";import"./button-BaKXjqxg.js";import"./system-BAdrsxg_.js";import"./function-fz9MreJ2.js";import"./rect-CMQ5Gq1K.js";import"./index-8MGmyJdE.js";import"./functional-fJ438JPk.js";import"./link-Ds6ljOst.js";import"./event-_7uzVFJT.js";import"./support-passive-CNRHRm4O.js";const k="press-picker-functional",w={i18n:{"zh-CN":{topTip:"顶部提示",longList:"超长列表",functional:"函数式调用",horizontal:"横版",tipContent:"创建比赛后，可按比赛轮次精确设置。",addVirtualTeam:"添加虚拟队伍",addTeam:t=>`添加${t}队`},"en-US":{topTip:"Top Tips",longList:"Super Long List",functional:"Functional Mode",horizontal:"Horizontal",tipContent:"Can be set precisely according to the round of the game",addVirtualTeam:"Add Virtual Team",addTeam:t=>`Add ${t} Teams`}},options:{styleIsolation:"shared"},components:{PressPicker:P,PressCell:d},data(){const t=[{label:this.t("bo1"),value:1},{label:this.t("bo3"),value:3},{label:this.t("bo5"),value:5},{label:this.t("bo7"),value:7},{label:this.t("bo9"),value:9}],e=Array.from({length:8e3}).map((s,i)=>({label:this.t("addTeam",i+1),value:i+1})),r={onClickConfirm:s=>{this.onSuccessTip(s),this.curPicker.show=!1,this.pickerOption[this.curType]&&(this.pickerOption[this.curType].selectItem={value:s.value})},onRemove:()=>{this.onTip("cancel"),this.curPicker.show=!1}};return{customStyle:"padding:0;",PICKER_BO_LIST:t,pickerOption:{normal:{title:this.t("wayToWin"),tip:"",selectList:t,selectItem:{label:t[3].label,value:7},horizontal:!1},tip:{title:this.t("wayToWin"),tip:this.t("tipContent"),selectList:t,selectItem:{label:t[1].label,value:3},horizontal:!1},long:{title:this.t("addVirtualTeam"),tip:"",selectList:e,selectItem:{value:1},horizontal:!1},horizontal:{title:this.t("wayToWin"),tip:"",selectList:t,selectItem:{label:t[3].label,value:7},horizontal:!0}},PRESS_PICKER_ID:k,pressPickerFunctionalData:{},curPicker:{...r},curType:""}},computed:{},methods:{onShowPicker(t){this.onGHideToast(),this.curType=t,this.curPicker={...this.curPicker,...this.pickerOption[t],show:!0}},onConfirm(){},onTip(t){this.onGTip(t)},onSuccessTip(t){const{label:e,value:r}=t;this.curPicker.show=!1,this.onTip(`value: ${r}, label: ${e}`)},onShowFunctionalPicker(){const{PICKER_BO_LIST:t}=this;f.call(this,{context:this,selector:`#${k}`,list:t,arrowIcon:!0,current:{label:t[1].label,value:3},title:this.t("wayToWin"),tip:this.t("tipContent")}).then(({item:e})=>{this.onSuccessTip(e)}).catch(()=>{this.onTip("cancel")})}}},S={class:"demo-wrap"};function I(t,e,r,s,i,l){const n=a("press-cell"),p=a("demo-block"),u=a("press-picker");return m(),C("div",S,[o(p,{title:t.t("basicUsage")},{default:h(()=>[o(n,{title:t.t("basicUsage"),"is-link":"",onClick:e[0]||(e[0]=c=>l.onShowPicker("normal"))},null,8,["title"]),o(n,{title:t.t("topTip"),"is-link":"",onClick:e[1]||(e[1]=c=>l.onShowPicker("tip"))},null,8,["title"]),o(n,{title:t.t("longList"),"is-link":"",onClick:e[2]||(e[2]=c=>l.onShowPicker("long"))},null,8,["title"]),o(n,{title:t.t("horizontal"),"is-link":"",onClick:e[3]||(e[3]=c=>l.onShowPicker("horizontal"))},null,8,["title"])]),_:1},8,["title"]),o(p,{title:t.t("functional")},{default:h(()=>[o(n,{title:t.t("check"),"is-link":"",onClick:l.onShowFunctionalPicker},null,8,["title","onClick"])]),_:1},8,["title"]),i.curPicker.show?(m(),b(u,{key:0,title:i.curPicker.title,"show-back-arrow":i.curPicker.showBackArrow,list:i.curPicker.selectList,tip:i.curPicker.tip,current:i.curPicker.selectItem,horizontal:i.curPicker.horizontal,"virtual-list-threshold":30,onOnClickConfirm:i.curPicker.onClickConfirm,onOnRemove:i.curPicker.onRemove},null,8,["title","show-back-arrow","list","tip","current","horizontal","onOnClickConfirm","onOnRemove"])):v("",!0),o(u,{id:i.PRESS_PICKER_ID,ref:i.PRESS_PICKER_ID,mode:"functional"},null,8,["id"])])}const J=T(w,[["render",I]]);export{J as default};
