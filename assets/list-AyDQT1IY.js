import{P as I}from"./press-list-CktKjk9k.js";import{P as k}from"./press-popup-cell-BAyvtasA.js";import{P as A}from"./press-picker-39gRzZ_X.js";import{P as T}from"./press-cell-j69wMGN4.js";import{B as w,aa as h,$ as E,_ as M,C as U,o as p,c as m,f as n,n as P,a as d,v as _,F as N,i as z,x,r as c,t as F}from"./index-BZexHo5h.js";import"./press-component-HD2axD72.js";import"./validator-OjQp2SYe.js";import"./press-loading-plus-Df-tLDhD.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./rect-ZZRvyvMD.js";import"./scroll-DZ_Dh06R.js";import"./system-BAdrsxg_.js";import"./bind-event-DndjT7K3.js";import"./event-Dm-SpHU4.js";import"./support-passive-CNRHRm4O.js";import"./press-popup-7HnpDVXn.js";import"./press-button-DeHHH_6o.js";import"./press-icon-plus-5Xj-bw2h.js";import"./press-info-BWsAQQHi.js";import"./press-loading-wkUvB1Ib.js";import"./button-BaKXjqxg.js";import"./function-CHWTa32-.js";import"./press-switch-BgOgGYGX.js";import"./computed-COUhjXwe.js";import"./functional-DDGVd29A.js";import"./index-DfrNFuIM.js";import"./link-Ds6ljOst.js";const s={pageSize:20,total:300,delay:200,vertical:!0,autoCheckScroller:!0},f=Array.from({length:5}).map((e,t)=>10**t).reduce((e,t)=>{for(let l=1;l<10;l++)e.push(t*l);return e},[]).map(e=>({label:e,value:e})),L=f.reduce((e,t)=>(e[t.value]=t.label,e),{}),C=Array.from({length:1e3}).map((e,t)=>({label:`${(t+1)*100}ms`,value:(t+1)*100})),V=C.reduce((e,t)=>(e[t.value]=t.label,e),{});function b({context:e,callback:t}){w({context:e,title:"自定义设置",closeIcon:!0,cellList:[{label:"每次加载数量",value:L[s.pageSize],click:({context:l})=>{l.closeDialog(),h({title:"每次加载数量",closeIcon:!0,list:f,current:{value:s.pageSize}}).then(({item:i})=>{s.pageSize=i.value,e.onGTip("设置成功"),typeof t.changePageSize=="function"&&t.changePageSize.call(e,i.value)}).catch(()=>{})}},{label:"列表总数",value:L[s.total],click:({context:l})=>{l.closeDialog(),h({title:"列表总数",closeIcon:!0,list:f,current:{value:s.total}}).then(({item:i})=>{s.total=i.value,e.onGTip("设置成功"),typeof t.changeTotal=="function"&&t.changeTotal.call(e,i.value)}).catch(()=>{})}},{label:"数据请求时间",value:V[s.delay],click:({context:l})=>{l.closeDialog(),h({title:"数据请求时间",closeIcon:!0,list:C,current:{value:s.delay}}).then(({item:i})=>{s.delay=i.value,e.onGTip("设置成功"),typeof t.changeDelay=="function"&&t.changeDelay.call(e,i.value)}).catch(()=>{})}},{label:"是否竖向滚动",type:"switch",open:s.vertical,click:({context:l})=>{l.closeDialog(),s.vertical=!s.vertical,e.onGTip("设置成功"),typeof t.changeDirection=="function"&&t.changeDirection.call(e,s.vertical)}},{label:"自动检测 Scroller",type:"switch",open:s.autoCheckScroller,click:({context:l})=>{l.closeDialog(),s.autoCheckScroller=!s.autoCheckScroller,typeof t.changeAutoCheckScroller=="function"&&t.changeAutoCheckScroller.call(e,s.autoCheckScroller)}}]})}const g=50,R=500,B=(e=R)=>({data(){return{currentIndex:0,useVirtualList:!0}},computed:{upMissed(){const{currentIndex:t}=this;return Math.max(0,t-e)},showingData(){const{currentIndex:t,upMissed:l,list:i,useVirtualList:o}=this;return o?i.slice(l,t+e).map((a,r)=>({...a,uniqueKey:r+l})):i},hiddenUpPartStyle(){const{upMissed:t,useVirtualList:l}=this;return l?`height: ${t*g}px;`:""},wrapStyle(){const{list:t,useVirtualList:l}=this;return l?`height: ${t.length*g}px;`:""}},methods:{updateCurrentIndex(t,l){const{scrollTop:i,scrollHeight:o}=E(t);if(i<0||l+i>o)return;const a=Math.round(i/g);this.currentIndex=a}}});function O({length:e,delay:t,beforeLength:l}){return new Promise(i=>{setTimeout(()=>{i({data:Array.from({length:e}).map((o,a)=>{let r=a+l+1;return r<10&&(r=`0${r}`),{label:r,value:r}})})},t||0)})}const K={i18n:{"zh-CN":{custom:"自定义"},"en-US":{custom:"Custom"}},components:{PressList:I,PressPopupCell:k,PressPicker:A,PressCell:T},mixins:[B()],data(){const e={...s};return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",loading:!1,finished:!1,immediateCheck:!0,list:[],FUNCTIONAL_ID_MAP:U,listLocal:e,listStyle:""}},computed:{},watch:{listLocal:{handler(e){e.vertical||(this.useVirtualList=!1)},deep:!0}},mounted(){},methods:{load(){console.log("[load]"),this.onFetchData()},scroll(e,t){this.updateCurrentIndex(e,t)},onFetchData(e){var o;const{total:t,pageSize:l,delay:i}=this.listLocal;O({delay:i,length:l,beforeLength:e?0:((o=this.list)==null?void 0:o.length)||0}).then(({data:a})=>{let r=e?a:[...this.list,...a];r.length>t&&(r=r.slice(0,t)),this.list=r,console.log("[current total]",r.length),this.loading=!1,this.finished=this.list.length>=t}).catch(()=>{})},onShowBasicPopupCell(){b({context:this,callback:{changeTotal:this.changeTotal,changePageSize:this.changePageSize,changeDelay:this.changeDelay,changeDirection:this.changeDirection,changeAutoCheckScroller:this.changeAutoCheckScroller}})},changePageSize(e){this.listLocal={...this.listLocal,pageSize:e},this.generateData()},changeTotal(e){this.listLocal={...this.listLocal,total:e},this.generateData()},changeDelay(e){this.listLocal={...this.listLocal,delay:e},this.generateData()},changeDirection(e){this.listLocal={...this.listLocal,vertical:e},this.generateData()},changeAutoCheckScroller(e){this.listLocal={...this.listLocal,autoCheckScroller:e},this.list=[],this.generateData()},generateData(){this.loading=!0,this.onFetchData(!0)}}},G={class:"demo-container"};function H(e,t,l,i,o,a){const r=c("press-cell"),y=c("demo-block"),S=c("PressList"),D=c("PressPopupCell"),v=c("PressPicker");return p(),m("div",{class:x(["demo-wrap demo-wrap--gray demo-wrap--flex",o.listLocal.vertical?"":"demo-wrap--hor"])},[n(y,{title:e.t("basicUsage"),"section-style":o.sectionStyle,"header-style":o.headerStyle},{default:P(()=>[n(r,{title:e.t("custom"),"is-link":"",onClick:a.onShowBasicPopupCell},null,8,["title","onClick"])]),_:1},8,["title","section-style","header-style"]),d("div",G,[n(S,{modelValue:o.loading,"onUpdate:modelValue":t[0]||(t[0]=u=>o.loading=u),finished:o.finished,"immediate-check":o.immediateCheck,vertical:o.listLocal.vertical,"finished-text":"没有更多了","auto-check-scroller":o.listLocal.autoCheckScroller,"custom-style":o.listStyle,onLoad:a.load,onScroll:a.scroll},{default:P(()=>[d("div",{style:_(e.wrapStyle),class:"list__wrap"},[d("div",{style:_(e.hiddenUpPartStyle)},null,4),(p(!0),m(N,null,z(e.showingData,u=>(p(),m("div",{key:u.value,class:"list__item"},F(u.label),1))),128))],4)]),_:1},8,["modelValue","finished","immediate-check","vertical","auto-check-scroller","custom-style","onLoad","onScroll"])]),n(D,{id:o.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:o.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"]),n(v,{id:o.FUNCTIONAL_ID_MAP.PICKER,ref:o.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"},null,8,["id"])],2)}const Le=M(K,[["render",H],["__scopeId","data-v-d2486478"]]);export{Le as default};
