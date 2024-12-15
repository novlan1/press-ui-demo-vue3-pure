import{P}from"./press-picker-Cy7T0G5M.js";import{P as d}from"./press-cell-BLTCMYRJ.js";import{b as T}from"./index-BUh0a6PW.js";import{_ as f,o as h,c as C,e as o,k,b,d as v,r as a}from"./index-C8vugXWi.js";import"./rect-Djv_hxPF.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";const m="press-picker-functional",w={i18n:{"zh-CN":{topTip:"顶部提示",longList:"超长列表",functional:"函数式调用",horizontal:"横版",tipContent:"创建比赛后，可按比赛轮次精确设置。",addVirtualTeam:"添加虚拟队伍",addTeam:t=>`添加${t}队`},"en-US":{topTip:"Top Tips",longList:"Super Long List",functional:"Functional Mode",horizontal:"Horizontal",tipContent:"Can be set precisely according to the round of the game",addVirtualTeam:"Add Virtual Team",addTeam:t=>`Add ${t} Teams`}},options:{styleIsolation:"shared"},components:{PressPicker:P,PressCell:d},data(){const t=[{label:this.t("bo1"),value:1},{label:this.t("bo3"),value:3},{label:this.t("bo5"),value:5},{label:this.t("bo7"),value:7},{label:this.t("bo9"),value:9}],e=Array.from({length:8e3}).map((r,i)=>({label:this.t("addTeam",i+1),value:i+1})),s={onClickConfirm:r=>{this.onSuccessTip(r),this.curPicker.show=!1,this.pickerOption[this.curType]&&(this.pickerOption[this.curType].selectItem={value:r.value})},onRemove:()=>{this.onTip("cancel"),this.curPicker.show=!1}};return{customStyle:"padding:0;",PICKER_BO_LIST:t,pickerOption:{normal:{title:this.t("wayToWin"),tip:"",selectList:t,selectItem:{label:t[3].label,value:7},horizontal:!1},tip:{title:this.t("wayToWin"),tip:this.t("tipContent"),selectList:t,selectItem:{label:t[1].label,value:3},horizontal:!1},long:{title:this.t("addVirtualTeam"),tip:"",selectList:e,selectItem:{value:1},horizontal:!1},horizontal:{title:this.t("wayToWin"),tip:"",selectList:t,selectItem:{label:t[3].label,value:7},horizontal:!0}},PRESS_PICKER_ID:m,pressPickerFunctionalData:{},curPicker:{...s},curType:""}},computed:{},methods:{onShowPicker(t){this.onGHideToast(),this.curType=t,this.curPicker={...this.curPicker,...this.pickerOption[t],show:!0}},onConfirm(){},onTip(t){this.onGTip(t)},onSuccessTip(t){const{label:e,value:s}=t;this.curPicker.show=!1,this.onTip(`value: ${s}, label: ${e}`)},onShowFunctionalPicker(){const{PICKER_BO_LIST:t}=this;T.call(this,{context:this,selector:`#${m}`,list:t,arrowIcon:!0,current:{label:t[1].label,value:3},title:this.t("wayToWin"),tip:this.t("tipContent")}).then(({item:e})=>{this.onSuccessTip(e)}).catch(()=>{this.onTip("cancel")})}}},S={class:"demo-wrap"};function I(t,e,s,r,i,l){const n=a("press-cell"),u=a("demo-block"),p=a("press-picker");return h(),C("div",S,[o(u,{title:t.t("basicUsage")},{default:k(()=>[o(n,{title:t.t("basicUsage"),"is-link":"",onClick:e[0]||(e[0]=c=>l.onShowPicker("normal"))},null,8,["title"]),o(n,{title:t.t("topTip"),"is-link":"",onClick:e[1]||(e[1]=c=>l.onShowPicker("tip"))},null,8,["title"]),o(n,{title:t.t("longList"),"is-link":"",onClick:e[2]||(e[2]=c=>l.onShowPicker("long"))},null,8,["title"]),o(n,{title:t.t("horizontal"),"is-link":"",onClick:e[3]||(e[3]=c=>l.onShowPicker("horizontal"))},null,8,["title"])]),_:1},8,["title"]),o(u,{title:t.t("functional")},{default:k(()=>[o(n,{title:t.t("check"),"is-link":"",onClick:l.onShowFunctionalPicker},null,8,["title","onClick"])]),_:1},8,["title"]),i.curPicker.show?(h(),b(p,{key:0,title:i.curPicker.title,"show-back-arrow":i.curPicker.showBackArrow,list:i.curPicker.selectList,tip:i.curPicker.tip,current:i.curPicker.selectItem,horizontal:i.curPicker.horizontal,"virtual-list-threshold":30,onOnClickConfirm:i.curPicker.onClickConfirm,onOnRemove:i.curPicker.onRemove},null,8,["title","show-back-arrow","list","tip","current","horizontal","onOnClickConfirm","onOnRemove"])):v("",!0),o(p,{id:i.PRESS_PICKER_ID,ref:i.PRESS_PICKER_ID,mode:"functional"},null,8,["id"])])}const E=f(w,[["render",I]]);export{E as default};