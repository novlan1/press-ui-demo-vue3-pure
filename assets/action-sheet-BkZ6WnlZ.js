import{P as b}from"./press-action-sheet-BfY5RyOT.js";import{P as f}from"./press-cell-Dr4o2Qkj.js";import{_ as k,o as s,c as l,F as m,q as d,e as w,k as C,r as a,b as O,a as A,t as x}from"./index-88cP1sOH.js";import"./press-popup-plus-D8KsREvU.js";import"./press-overlay-cZvGLKZ5.js";import"./press-transition-C_p2VzW1.js";import"./system-223ZhjOU.js";import"./link-JqS4mJdw.js";import"./event-CnosvntJ.js";const y={i18n:{"zh-CN":{custom:"自定义",option1:"选项一",option2:"选项二",option3:"选项三",subname:"描述信息",showCancel:"展示取消按钮",buttonText:"弹出菜单",customPanel:"自定义面板",description:"这是一段描述信息",optionStatus:"选项状态",coloredOption:"着色选项",disabledOption:"禁用选项",showDescription:"展示描述信息",wxOpen:"微信开放能力",qqOpen:"QQ开放能力",alipayOpen:"支付宝开放能力",mpOpen:"小程序开放能力",getUserInfo:"获取用户信息"},"en-US":{custom:"Custom",option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description",wxOpen:"Wechat Open API",qqOpen:"QQ Open API",alipayOpen:"Alipay Open API",mpOpen:"Mini Program Open API",getUserInfo:"Get User Info"}},components:{PressActionSheet:b,PressCell:f},data(){return{demoList:[{title:this.t("basicUsage"),list:[{title:this.t("check"),type:"basic"}]},{title:this.t("custom"),list:[{title:this.t("optionStatus"),type:"status"},{title:this.t("showCancel"),type:"cancel"},{title:this.t("showDescription"),type:"description"},{title:this.t("customPanel"),type:"title"}]}],show:!1,showCustom:!1,cancelText:"",description:"",title:"",curActions:[]}},computed:{actions(){return[{name:this.t("option1")},{name:this.t("option2")},{name:this.t("option3"),subname:this.t("subname"),openType:"share"}]}},mounted(){this.curActions=this.actions},methods:{onShowActionSheet(o){const r=[{name:this.t("coloredOption"),color:"#ee0a24"},{loading:!0},{name:this.t("disabledOption"),disabled:!0}],p=[{name:this.t("getUserInfo"),color:"#07c160",openType:"getUserInfo"}];let i="",e="",t=[],n="";switch(o){case"title":{this.showCustom=!0;return}case"basic":{t=this.actions;break}case"wxOpen":{t=p,n=this.t("title");break}case"status":{t=r;break}case"cancel":{t=this.actions,i=this.t("cancel");break}case"description":{t=this.actions,e=this.t("description");break}}this.show=!0,this.cancelText=i,this.description=e,this.curActions=t,this.title=n},onClose(){this.show=!1,this.showCustom=!1},onSelect(o){console.log("onSelect.e",o)},onGetUserInfo(o){console.log("onGetUserInfo.e",o)}}},P={class:"demo-wrap"},g={style:{padding:"16px"}};function I(o,r,p,i,e,t){const n=a("press-cell"),S=a("demo-block"),h=a("press-action-sheet");return s(),l("div",P,[(s(!0),l(m,null,d(e.demoList,(u,_)=>(s(),O(S,{key:_,title:u.title},{default:C(()=>[(s(!0),l(m,null,d(u.list,c=>(s(),O(n,{key:c.title,title:c.title,"is-link":"",onClick:U=>t.onShowActionSheet(c.type)},null,8,["title","onClick"]))),128))]),_:2},1032,["title"]))),128)),w(h,{show:e.show,actions:e.curActions,"cancel-text":e.cancelText,description:e.description,title:e.title,onClose:t.onClose,onSelect:t.onSelect,onGetuserinfo:t.onGetUserInfo,onCancel:t.onClose},null,8,["show","actions","cancel-text","description","title","onClose","onSelect","onGetuserinfo","onCancel"]),w(h,{show:e.showCustom,title:o.t("title"),onClose:t.onClose,onSelect:t.onSelect,onCancel:t.onClose},{default:C(()=>[A("div",g,x(o.t("content")),1)]),_:1},8,["show","title","onClose","onSelect","onCancel"])])}const F=k(y,[["render",I]]);export{F as default};