import{_ as D,v as x,Z as B,ab as M,x as N,Q as z,r as c,o as g,b as U,k as m,a,h as p,l as u,e as h,G as F,t as v,d as P,n as w,as as R,aw as H,c as S,F as O,q as K}from"./index-C8vugXWi.js";import{f as G,g as y,d as W}from"./rect-Djv_hxPF.js";import{B as q}from"./bind-event-CGPWhxld.js";import{S as Y}from"./scroll-view-6X1FI7lO.js";import{P as j}from"./press-picker-Cy7T0G5M.js";import{P as Q}from"./press-cell-BLTCMYRJ.js";import{s as Z,a as _,F as J}from"./helper-DY3oN9sZ.js";import"./event-msrAv3cV.js";import"./link-BzPJvqKH.js";const T="scrollViewId",k=G(T),X={name:"PressList",options:{...x},components:{PressLoadingPlus:B},mixins:[M,q(function(e){this.autoCheckScroller&&(this.scroller||(this.scroller=W(this.$el)),e(this.scroller,"scroll",this.onScroll,!0),e(this.scroller,"touchmove",this.onScroll,!0),this.onScroll())}),Y],props:{offset:{type:[Number,String],default:50},finished:{type:Boolean,default:!1},finishedText:{type:String,default:""},loadingText:{type:String,default:"加载中..."},immediateCheck:{type:Boolean,default:!0},enableFlex:{type:Boolean,default:!1},enhanced:{type:Boolean,default:!1},scrollWithAnimation:{type:Boolean,default:!1},enablePassive:{type:Boolean,default:!1},scrollAnchoring:{type:Boolean,default:!1},scrollToElementById:{type:String,default:""},vertical:{type:Boolean,default:!0},loadingStyle:{type:String,default:""},loadingSize:{type:String,default:"20px"},finishedStyle:{type:String,default:""},autoCheckScroller:{type:Boolean,default:!1},scrollLeft:{type:[Number,String],default:0},scrollTop:{type:[Number,String],default:0},...N,customStyle:{type:String,default:""}},emits:["scroll","input","load","update:modelValue"],data(){return{innerLoading:this.realModelValue,SCROLL_VIEW_ID:T,scrollerHeight:0}},computed:{scrollViewClass(){return["press-list",this.vertical?"press-list--vertical":"press-list--hor",this.customClass].join(" ")},scrollViewStyle(){return`height: 100%; ${this.customStyle};`}},watch:{realModelValue:{handler(e){this.innerLoading=e,this.check()}},finished:"check"},mounted(){this.immediateCheck&&this.check()},updated(){},methods:{getScrollerHeight(){this.scrollerHeight||y(this,k).then(e=>{this.scrollerHeight=e.height})},scroll(e){this.getScrollerHeight(),this.$emit("scroll",e,this.scrollerHeight),this.check()},scrollToLower(){this.emitInput()},emitInput(){this.innerLoading||this.finished||(this.innerLoading=!0,this.emitModelValue(!0),this.$emit("load"))},check(){z(()=>{this.innerCheck()})},innerCheck(){if(!this.autoCheckScroller){this.commonCheck();return}},commonCheck(e){const{offset:t}=this;this.innerLoading||this.finished||Promise.all([y(this,".press-list__placeholder"),y(this,k)]).then(l=>{const{0:s,1:i}=l;if(e===void 0&&(e=i),this.innerLoading||this.finished||!(e.bottom-e.top))return;let o=s.bottom-e.bottom;this.vertical||(o=s.right-e.right),o<=t&&this.emitInput()}).catch(()=>{}).finally(()=>{})},onScroll(){const{scroller:e,autoCheckScroller:t}=this;if(!t)return;let l;e!=null&&e.getBoundingClientRect&&(l=e.getBoundingClientRect()),this.commonCheck(l)}}},$={class:"press-list__layout"};function ee(e,t,l,s,i,n){const o=c("PressLoadingPlus"),d=c("scroll-view");return g(),U(d,{id:i.SCROLL_VIEW_ID,style:u(n.scrollViewStyle),"scroll-y":l.vertical,"scroll-x":!l.vertical,"scroll-with-animation":l.scrollWithAnimation,"scroll-anchoring":l.scrollAnchoring,enhanced:l.enhanced,"enable-flex":l.enableFlex,"enable-passive":l.enablePassive,"lower-threshold":l.offset,"scroll-into-view":l.scrollToElementById,class:w(n.scrollViewClass),"scroll-top":l.scrollTop,"scroll-left":l.scrollLeft,onScrolltolower:n.scrollToLower,onScroll:n.scroll},{default:m(()=>[a("div",$,[p(e.$slots,"default",{},void 0,!0),i.innerLoading?p(e.$slots,"loading",{key:0},()=>[a("div",{class:"press-list__loading",style:u(l.loadingStyle)},[h(o,{vertical:!l.vertical,size:l.loadingSize},{default:m(()=>[F(v(l.loadingText),1)]),_:1},8,["vertical","size"])],4)],!0):P("",!0),l.finishedText&&l.finished?p(e.$slots,"finished",{key:1},()=>[a("div",{class:"press-list__finished",style:u(l.finishedStyle)},[a("div",null,v(l.finishedText),1)],4)],!0):P("",!0),t[0]||(t[0]=a("div",{class:"press-list__placeholder"},null,-1))])]),_:3},8,["id","style","scroll-y","scroll-x","scroll-with-animation","scroll-anchoring","enhanced","enable-flex","enable-passive","lower-threshold","scroll-into-view","class","scroll-top","scroll-left","onScrolltolower","onScroll"])}const te=D(X,[["render",ee],["__scopeId","data-v-753d1232"]]),r={pageSize:20,total:300,delay:200,vertical:!0,autoCheckScroller:!0},C=Array.from({length:5}).map((e,t)=>10**t).reduce((e,t)=>{for(let l=1;l<10;l++)e.push(t*l);return e},[]).map(e=>({label:e,value:e})),I=C.reduce((e,t)=>(e[t.value]=t.label,e),{}),A=Array.from({length:1e3}).map((e,t)=>({label:`${(t+1)*100}ms`,value:(t+1)*100})),le=A.reduce((e,t)=>(e[t.value]=t.label,e),{});function ie({context:e,callback:t}){Z({context:e,title:"自定义设置",closeIcon:!0,cellList:[{label:"每次加载数量",value:I[r.pageSize],click:({context:l})=>{l.closeDialog(),_({title:"每次加载数量",closeIcon:!0,list:C,current:{value:r.pageSize},context:e}).then(({item:s})=>{r.pageSize=s.value,e.onGTip("设置成功"),typeof t.changePageSize=="function"&&t.changePageSize.call(e,s.value)}).catch(()=>{})}},{label:"列表总数",value:I[r.total],click:({context:l})=>{l.closeDialog(),_({title:"列表总数",closeIcon:!0,list:C,current:{value:r.total},context:e}).then(({item:s})=>{r.total=s.value,e.onGTip("设置成功"),typeof t.changeTotal=="function"&&t.changeTotal.call(e,s.value)}).catch(()=>{})}},{label:"数据请求时间",value:le[r.delay],click:({context:l})=>{l.closeDialog(),_({title:"数据请求时间",closeIcon:!0,list:A,current:{value:r.delay},context:e}).then(({item:s})=>{r.delay=s.value,e.onGTip("设置成功"),typeof t.changeDelay=="function"&&t.changeDelay.call(e,s.value)}).catch(()=>{})}},{label:"是否竖向滚动",type:"switch",open:r.vertical,click:({context:l})=>{l.closeDialog(),r.vertical=!r.vertical,e.onGTip("设置成功"),typeof t.changeDirection=="function"&&t.changeDirection.call(e,r.vertical)}},{label:"自动检测 Scroller",type:"switch",open:r.autoCheckScroller,click:({context:l})=>{l.closeDialog(),r.autoCheckScroller=!r.autoCheckScroller,typeof t.changeAutoCheckScroller=="function"&&t.changeAutoCheckScroller.call(e,r.autoCheckScroller)}}]})}const L=50,se=500,oe=(e=se)=>({data(){return{currentIndex:0,useVirtualList:!0}},computed:{upMissed(){const{currentIndex:t}=this;return Math.max(0,t-e)},showingData(){const{currentIndex:t,upMissed:l,list:s,useVirtualList:i}=this;return i?s.slice(l,t+e).map((n,o)=>({...n,uniqueKey:o+l})):s},hiddenUpPartStyle(){const{upMissed:t,useVirtualList:l}=this;return l?`height: ${t*L}px;`:""},wrapStyle(){const{list:t,useVirtualList:l}=this;return l?`height: ${t.length*L}px;`:""}},methods:{updateCurrentIndex(t,l){const{scrollTop:s,scrollHeight:i}=R(t);if(s<0||l+s>i)return;const n=Math.round(s/L);this.currentIndex=n}}});function ne({length:e,delay:t,beforeLength:l}){return new Promise(s=>{setTimeout(()=>{s({data:Array.from({length:e}).map((i,n)=>{let o=n+l+1;return o<10&&(o=`0${o}`),{label:o,value:o}})})},t||0)})}const re={i18n:{"zh-CN":{custom:"自定义"},"en-US":{custom:"Custom"}},components:{PressList:te,PressPopupCell:H,PressPicker:j,PressCell:Q},mixins:[oe()],data(){const e={...r};return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",loading:!1,finished:!1,immediateCheck:!0,list:[],FUNCTIONAL_ID_MAP:J,listLocal:e,listStyle:""}},computed:{},watch:{listLocal:{handler(e){e.vertical||(this.useVirtualList=!1)},deep:!0}},mounted(){},methods:{load(){console.log("[load]"),this.onFetchData()},scroll(e,t){this.updateCurrentIndex(e,t)},onFetchData(e){var i;const{total:t,pageSize:l,delay:s}=this.listLocal;ne({delay:s,length:l,beforeLength:e?0:((i=this.list)==null?void 0:i.length)||0}).then(({data:n})=>{let o=e?n:[...this.list,...n];o.length>t&&(o=o.slice(0,t)),this.list=o,console.log("[current total]",o.length),this.loading=!1,this.finished=this.list.length>=t}).catch(()=>{})},onShowBasicPopupCell(){ie({context:this,callback:{changeTotal:this.changeTotal,changePageSize:this.changePageSize,changeDelay:this.changeDelay,changeDirection:this.changeDirection,changeAutoCheckScroller:this.changeAutoCheckScroller}})},changePageSize(e){this.listLocal={...this.listLocal,pageSize:e},this.generateData()},changeTotal(e){this.listLocal={...this.listLocal,total:e},this.generateData()},changeDelay(e){this.listLocal={...this.listLocal,delay:e},this.generateData()},changeDirection(e){this.listLocal={...this.listLocal,vertical:e},this.generateData()},changeAutoCheckScroller(e){this.listLocal={...this.listLocal,autoCheckScroller:e},this.list=[],this.generateData()},generateData(){this.loading=!0,this.onFetchData(!0)}}},ae={class:"demo-container"};function ce(e,t,l,s,i,n){const o=c("press-cell"),d=c("demo-block"),E=c("PressList"),V=c("PressPopupCell"),b=c("PressPicker");return g(),S("div",{class:w(["demo-wrap demo-wrap--gray demo-wrap--flex",i.listLocal.vertical?"":"demo-wrap--hor"])},[h(d,{title:e.t("basicUsage"),"section-style":i.sectionStyle,"header-style":i.headerStyle},{default:m(()=>[h(o,{title:e.t("custom"),"is-link":"",onClick:n.onShowBasicPopupCell},null,8,["title","onClick"])]),_:1},8,["title","section-style","header-style"]),a("div",ae,[h(E,{modelValue:i.loading,"onUpdate:modelValue":t[0]||(t[0]=f=>i.loading=f),finished:i.finished,"immediate-check":i.immediateCheck,vertical:i.listLocal.vertical,"finished-text":"没有更多了","auto-check-scroller":i.listLocal.autoCheckScroller,"custom-style":i.listStyle,onLoad:n.load,onScroll:n.scroll},{default:m(()=>[a("div",{style:u(e.wrapStyle),class:"list__wrap"},[a("div",{style:u(e.hiddenUpPartStyle)},null,4),(g(!0),S(O,null,K(e.showingData,f=>(g(),S("div",{key:f.value,class:"list__item"},v(f.label),1))),128))],4)]),_:1},8,["modelValue","finished","immediate-check","vertical","auto-check-scroller","custom-style","onLoad","onScroll"])]),h(V,{id:i.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:i.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"]),h(b,{id:i.FUNCTIONAL_ID_MAP.PICKER,ref:i.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"},null,8,["id"])],2)}const _e=D(re,[["render",ce],["__scopeId","data-v-d2486478"]]);export{_e as default};