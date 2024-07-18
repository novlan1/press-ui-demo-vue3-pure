import{P as I}from"./press-cell-iwUCYNKV.js";import{P as b}from"./press-popover-DMlhn9x_.js";import{g,f as k}from"./rect-CXQTALcu.js";import{i as w}from"./utils-D0lA7q9W.js";import{_ as x,r as l,o as h,c as u,f as c,l as P,F as B,B as L,n as d,a as T,t as y,d as N}from"./index-VLx2MJJu.js";import{s as A,a as v,P as E,F as D}from"./helper-DVCXOBjJ.js";import{P as z}from"./press-picker-xb-Wwt4-.js";import"./press-icon-plus-zKCOzNHP.js";import"./style-CpIyAjCl.js";import"./add-unit-DeNeB5nf.js";import"./validator-C_cgqHAw.js";import"./press-info-DLY6PURR.js";import"./press-component-BmHMjgT0.js";import"./link-CAqpeIDw.js";import"./event-CFWsryW7.js";import"./support-passive-CNRHRm4O.js";import"./system-C5_2TD7H.js";import"./press-popup-9SObBmgO.js";import"./press-button-C4Eyu2_G.js";import"./press-loading-plus-DsguuShn.js";import"./press-loading-AM-uTMBk.js";import"./button-B0PQCQjz.js";import"./function-C2llw6XQ.js";import"./press-switch-Dl5S1bB6.js";import"./computed-2-dfbS2K.js";import"./functional-C7M1QJkK.js";import"./index-8e0EJ1Wh.js";let i=null;const O={name:"PressPagination",components:{PressPopover:b},props:{total:{type:Number,default:0},current:{type:Number,default:0},expand:{type:Boolean,default:!1},tipTemplate:{type:String,default:"第{{0}}页"},autoScroll:{type:Number,default:1},safeAreaInsetBottom:{type:Boolean,default:!0},customClass:{type:String,default:""},mode:{type:String,default:""}},options:{virtualHost:!0,styleIsolation:"shared"},emits:["change"],data(){return{innerCurrent:0,scrollToView:"",tipOffset:0,selectedEvent:!1,zonesBox:{},scrollTop:0,old:{scrollTop:0}}},computed:{pageList(){return Array.from({length:this.total}).map((e,o)=>o+1)},tipStyle(){return`top: ${this.tipOffset}px;bottom: unset;right: 50px;width: max-content;left: auto;transform: translateY(-50%);line-height: 16px;min-width: 42px;`},pageTip(){return this.tipTemplate.replace("{{0}}",this.innerCurrent)}},watch:{current:{handler(e){const o=this.pageList.findIndex(t=>t===e);this.innerCurrent=o>-1?this.pageList[o]:this.pageList[0],this.$nextTick(()=>{this.scrollTo()})},immediate:!0},total:{handler(){this.$nextTick(()=>{this.getScrollBarSize()})}},mode:{handler(){this.$nextTick(()=>{this.getScrollBarSize()})}}},mounted(){this.selectedEvent=!1,this.getScrollBarSize()},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},updated(){this.$nextTick().then(()=>{this.updatePopoverTipPosition()})},methods:{onDestroyed(){this.selectedEvent=!1,i&&(clearTimeout(i),i=null)},getScrollBarSize(){g(this,".press-scrollbar").then(e=>{e&&(this.zonesBox={top:e.top,bottom:e.bottom,height:e.height})})},updatePopoverTipPosition(){g(this,`#seq-${this.innerCurrent}`).then(e=>{e&&(this.tipOffset=e.top-this.zonesBox.top+e.height/2)})},scroll(e){w()?this.old.scrollTop=e.target.scrollTop:this.old.scrollTop=e.detail.scrollTop,this.updatePopoverTipPosition()},scrollTo(){const{autoScroll:e}=this;this.scrollToView=`seq-${this.innerCurrent}`,this.scrollTop=this.old.scrollTop,Promise.all([k(this,"#zoneBox"),g(this,`#seq-${this.innerCurrent}`)]).then(([o,t])=>{if(!t)return;const{top:a,bottom:n,height:s=0}=this.zonesBox;if(s>0){if(t.top-a<e*t.height)this.scrollTop=Math.max(1,(this.innerCurrent-1-e)*t.height);else if(n-t.bottom<e*t.height){const r=(this.innerCurrent+e)*t.height-s;this.scrollTop=Math.min(r,o.scrollHeight-s)}this.updatePopoverTipPosition()}})},handleSelect(e){i&&(clearTimeout(i),i=null),this.selectedEvent=!0,this.innerCurrent!==e&&(this.innerCurrent=e,this.$emit("change",e)),this.scrollTo(),i=setTimeout(()=>{this.selectedEvent=!1},500)}}},H={key:0,class:"press-pagination__wrap"},U=["id","onClick"];function F(e,o,t,a,n,s){const r=l("scroll-view"),f=l("PressPopover");return h(),u("div",{class:d(["press-pagination",[t.customClass,{"press-pagination--safe":t.safeAreaInsetBottom},{"press-pagination--hor":t.mode==="hor"}]])},[s.pageList.length>1?(h(),u("div",H,[c(r,{id:"zoneBox",class:d(["press-scrollbar","press-scrollbar--active"]),"scroll-y":"true","scroll-with-animation":"","enable-flex":!0,"scroll-top":n.scrollTop,onScroll:s.scroll},{default:P(()=>[(h(!0),u(B,null,L(s.pageList,(p,m)=>(h(),u("div",{id:"seq-"+p,key:m,class:d(["press-scrollbar__scale",[{"press-scrollbar__scale--selected":n.innerCurrent===p},`press-scrollbar__scale--total-${t.total}`]]),onClick:C=>s.handleSelect(p,m)},[T("span",null,y(p),1)],10,U))),128))]),_:1},8,["scroll-top","onScroll"]),c(f,{show:n.selectedEvent,placement:"left","custom-style":s.tipStyle},{default:P(()=>[T("p",null,y(s.pageTip),1)]),_:1},8,["show","custom-style"])])):N("",!0)],2)}const M=x(O,[["render",F],["__scopeId","data-v-07205c3d"]]),_={pageTotal:30,current:2,expand:!1},S=Array.from({length:4}).map((e,o)=>10**o).reduce((e,o)=>{for(let t=1;t<10;t++)e.push(o*t);return e},[]).map(e=>({label:e,value:e}));function V({context:e,callback:o,pageTotal:t,current:a,isHor:n}){A({context:e,title:"自定义设置",closeIcon:!0,cellList:[{label:"页面数",value:t,click:({context:s})=>{s.closeDialog(),v({title:"页面数",closeIcon:!0,list:S,current:{value:t},context:e}).then(({item:r})=>{_.pageTotal=r.value,e.onGTip("设置成功"),typeof o.changePageTotal=="function"&&o.changePageTotal.call(e,r.value)}).catch(()=>{})}},{label:"当前页",value:a,click:({context:s})=>{s.closeDialog(),v({title:"当前页",closeIcon:!0,list:S.filter(r=>r.value<=t),current:{value:a},context:e}).then(({item:r})=>{_.current=r.value,e.onGTip("设置成功"),typeof o.changeCurrent=="function"&&o.changeCurrent.call(e,r.value)}).catch(()=>{})}},{label:"是否为Hor模式",type:"switch",open:n,click:({context:s})=>{s.closeDialog(),e.onGTip("设置成功"),typeof o.changeHor=="function"&&o.changeHor.call(e,!n)}}]})}const q={components:{PressPagination:M,PressPopupCell:E,PressPicker:z,PressCell:I},data(){const e={..._};return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",FUNCTIONAL_ID_MAP:D,mode:"",componentConfig:e}},methods:{onShowBasicPopupCell(){const{pageTotal:e,current:o}=this.componentConfig;V({context:this,callback:{changePageTotal:this.changePageTotal,changeCurrent:this.changeCurrent,changeHor:this.changeHor},pageTotal:e,current:o,isHor:this.mode==="hor"})},changeExpand(e){this.componentConfig={...this.componentConfig,expand:e}},changePageTotal(e){this.componentConfig={...this.componentConfig,pageTotal:e},this.componentConfig.current>e&&(this.componentConfig.current=e)},changeCurrent(e){this.componentConfig={...this.componentConfig,current:e}},changeHor(e){this.mode=e?"hor":""},onChange(e){console.log("[onChange]",e),this.componentConfig.current=e}}},G={class:"demo-wrap demo-wrap--gray"};function R(e,o,t,a,n,s){const r=l("press-cell"),f=l("demo-block"),p=l("PressPopupCell"),m=l("PressPicker"),C=l("PressPagination");return h(),u("div",G,[c(f,{title:e.t("basicUsage"),"section-style":n.sectionStyle,"header-style":n.headerStyle},{default:P(()=>[c(r,{title:e.t("custom"),"is-link":"",onClick:s.onShowBasicPopupCell},null,8,["title","onClick"])]),_:1},8,["title","section-style","header-style"]),c(p,{id:n.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:n.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"]),c(m,{id:n.FUNCTIONAL_ID_MAP.PICKER,ref:n.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"},null,8,["id"]),c(C,{total:n.componentConfig.pageTotal,current:n.componentConfig.current,expand:n.componentConfig.expand,mode:n.mode,onChange:s.onChange},null,8,["total","current","expand","mode","onChange"])])}const _e=x(q,[["render",R]]);export{_e as default};