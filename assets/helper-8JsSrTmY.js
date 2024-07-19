import{P as M}from"./press-popup-y_CuzBdV.js";import{P as B}from"./press-switch-BIgz85kA.js";import{P as R}from"./computed-tp7Vhbdg.js";import{f as $}from"./functional-C5WoClSN.js";import{x as U,_ as N,r as I,o as a,b as v,l as K,c as p,F as P,B as O,n as E,w as f,t as _,a as L,d as b,C as F,p as H,e as W}from"./index-CE2ZXbHd.js";function X(e,t,s="setData"){var o;if(!e)return;const n=((o=e.$vm)==null?void 0:o[s])||e[s];if(typeof n=="function")return n(t)}const q="showDialog";function Y(){const e=getCurrentPages();return e[e.length-1]}function w(e,t,s){const n=e.$children;if(n){for(const o of n)if(o.$attrs[t]===s)return o;for(const o of n){const i=w(o,t,s);if(i)return i}}}function z(e,t){var n,o,i;if(!t||!e)return;let s=t;if(s.match(/^[^\w]/)&&(s=s.slice(1)),(n=e.$refs)!=null&&n[s])return e.$refs[s];if(U()){const u=t.startsWith("#")?"id":"class",l=w(e,u,s);if(l)return l}return typeof(e==null?void 0:e.$selectComponent)=="function"?(o=e==null?void 0:e.$selectComponent)==null?void 0:o.call(e,t):(i=e==null?void 0:e.selectComponent)==null?void 0:i.call(e,t)}function m(e){return new Promise((t,s)=>{const n=e.context||Y();let{dialog:o}=e;o||(o=z(n,e.selector));const i={callback:(l,c)=>{l==="confirm"?t(c):s(c)},...e};delete i.dialog,delete i.context;const u=e.showFunction||q;X(o,i,u)})}const A={SWITCH:"switch",CHECKBOX:"checkbox",BUTTON:"button",TAB:"tab",CELL:"cell"},V={...R,tip:{type:String,default:""},cellList:{type:Array,default:()=>[]}};let k;const Q={name:"PressPopupCell",options:{virtualHost:!0},components:{PressPopup:M,PressSwitch:B},mixins:[$(V)],props:{},emits:["click","cancel","confirm"],data(){return k=this,{POPUP_CELL_TPE_MAP:A,checkedIndexList:[]}},computed:{computedCellList(){return(this.getPropOrData("cellList")||[]).map((t,s)=>typeof t.description=="string"?{...t,description:[{light:!1,content:t.description,uniqueKey:`${s}-desc-0`}]}:{...t,tabList:(t.tabList||[]).map((n,o)=>({...n,uniqueKey:`${s}-tab-${o}`})),description:(t.description||[]).map((n,o)=>({...n,uniqueKey:`${s}-desc-${o}`}))})}},watch:{cellList:{handler(){this.getCheckedList()},immediate:!0,deep:!0},functionModeData:{handler(){this.getCheckedList()},immediate:!0,deep:!0}},methods:{getCheckedList(){k=this;const t=(this.getPropOrData("cellList")||[]).map((s,n)=>({...s,index:n})).filter(s=>s.checked).map(s=>s.index);this.checkedIndexList=t},emitClick({shouldEmitClick:e=!0,item:t,index:s,options:n={}}){const{click:o}=t,i={item:t,index:s,context:this,...n};typeof o=="function"&&o(i),e&&this.$emit("click",i)},onTabChange(e,t,s,n){this.emitClick({item:e,index:t,options:{tabItem:s,tabIndex:n}})},onClickDescription(e,t){this.emitClick({shouldEmitClick:!1,item:e,index:t,options:{}})},onCheckboxChange(e,t){const s=this.checkedIndexList.indexOf(t)>-1;this.emitClick({item:e,index:t,options:{value:!s}})},onSwitchChange(e,t){this.emitClick({item:this.computedCellList[t],index:t,options:{value:e}})},onClickCell(e,t){const{click:s}=e,{checkedIndexList:n}=this,o={item:e,index:t,context:this};if(e.type===A.CHECKBOX){const i=n.indexOf(t)>-1;o.value=i,i?this.checkedIndexList=n.filter(u=>u!==t):this.checkedIndexList=n.concat([t]).sort()}typeof s=="function"&&s(o),this.$emit("click",o)},onClickBottomButton(){this.$emit("cancel",{context:this}),this.promiseCallback("cancel")},confirm(){this.$emit("confirm",{context:this}),this.promiseCallback("confirm",{checkedIndexList:this.checkedIndexList})},cancel(){this.$emit("cancel",{context:this}),this.promiseCallback("cancel",{checkedIndexList:this.checkedIndexList})},onAsyncConfirm(){const e=k.getPropOrData("asyncConfirm");return e?e({checkedIndexList:k.checkedIndexList,context:k}):!0}}},j=e=>(H("data-v-22a084f6"),e=e(),W(),e),G=["onClick"],J={key:0},Z={class:"press-popup-cell__label"},x={class:"press-popup-cell__title"},ee={key:0,class:"press-popup-cell__description-wrap"},te=["onClick"],se={class:"press-popup-cell__value"},oe={key:1,class:"press-popup-cell__tabs"},ne=["onClick"],ce=["onClick"],ie=j(()=>L("div",{class:"iconfont icon-back"},null,-1)),le={key:0,class:"press-popup-cell__tip"};function re(e,t,s,n,o,i){const u=I("PressSwitch"),l=I("PressPopup");return a(),v(l,{"is-show":e.innerShow,"show-title":e.getPropOrData("showTitle"),"close-icon":e.getPropOrData("closeIcon"),"arrow-icon":e.getPropOrData("arrowIcon"),title:e.getPropOrData("title"),button:e.getPropOrData("button"),"border-button":e.getPropOrData("borderButton"),"z-index":e.getPropOrData("zIndex"),"popup-class":e.getPropOrData("popupClass"),"close-on-click-overlay":e.getPropOrData("closeOnClickOverlay"),"custom-style":e.getPropOrData("customStyle"),"async-confirm":i.onAsyncConfirm,onConfirm:i.confirm,onCancel:i.cancel},{default:K(()=>[(a(!0),p(P,null,O(i.computedCellList,(c,h)=>(a(),p("div",{key:h,class:E(["press-popup-cell__item",{"press-popup-cell__item--switch":c.type===o.POPUP_CELL_TPE_MAP.SWITCH,"press-popup-cell__item--checkbox":c.type===o.POPUP_CELL_TPE_MAP.CHECKBOX,"press-popup-cell__item--button":c.type===o.POPUP_CELL_TPE_MAP.BUTTON}]),onClick:f(r=>i.onClickCell(c,h),["stop"])},[c.type===o.POPUP_CELL_TPE_MAP.BUTTON?(a(),p("div",J,_(c.label),1)):(a(),p(P,{key:1},[L("div",Z,[L("div",x,_(c.label),1),c.description&&c.description.length?(a(),p("div",ee,[(a(!0),p(P,null,O(c.description,(r,d)=>(a(),p("span",{key:r.uniqueKey},[L("span",{class:E({"press-popup-cell__description":!0,"press-popup-cell__description--light":r.light}),onClick:f(C=>i.onClickDescription(r,d,c),["stop"])},_(r.content),11,te)]))),128))])):b("",!0)]),L("div",se,[c.type===o.POPUP_CELL_TPE_MAP.SWITCH?(a(),v(u,{key:0,"custom-class":"press-switch--e-sport",open:c.open,disabled:c.disabled||!1,onChange:r=>i.onSwitchChange(r,h)},null,8,["open","disabled","onChange"])):c.type===o.POPUP_CELL_TPE_MAP.TAB?(a(),p("div",oe,[(a(!0),p(P,null,O(c.tabList,(r,d)=>(a(),p("div",{key:r.uniqueKey,class:E(["press-popup-cell__tab",{"press-popup-cell__tab--active":c.active===r.value}]),onClick:f(C=>i.onTabChange(c,h,r,d),["stop"])},_(r.label),11,ne))),128))])):c.type===o.POPUP_CELL_TPE_MAP.CHECKBOX?(a(),p("div",{key:2,class:E(["press-popup-cell__checkbox",{"press-popup-cell__checkbox--checked":o.checkedIndexList.indexOf(h)>-1}]),onClick:f(r=>i.onCheckboxChange(c,h),["stop"])},null,10,ce)):(a(),p(P,{key:3},[F(_(c.value)+" ",1),ie],64))])],64))],10,G))),128)),e.getPropOrData("tip")?(a(),p("div",le,_(e.getPropOrData("tip")),1)):b("",!0),e.getPropOrData("bottomButton")?(a(),p("div",{key:1,class:"press-popup-cell__bottom-button",onClick:t[0]||(t[0]=f((...c)=>i.onClickBottomButton&&i.onClickBottomButton(...c),["stop"]))},_(e.getPropOrData("bottomButton")),1)):b("",!0)]),_:1},8,["is-show","show-title","close-icon","arrow-icon","title","button","border-button","z-index","popup-class","close-on-click-overlay","custom-style","async-confirm","onConfirm","onCancel"])}const Pe=N(Q,[["render",re],["__scopeId","data-v-22a084f6"]]);function T(e,t,s,n=""){if(!e)return"";const o=new Date;`${e}`.length===10&&(e*=1e3),o.setTime(e);const i={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()};let u=/(y+)/;n&&(u=new RegExp(`(?:^|(?:[^${n}y]))(y+)`));let l=t.match(u);l!=null&&l[1]&&(t=t.replace(l[1],`${o.getFullYear()}`.slice(4-l[1].length)));for(const c in i){let h=new RegExp(`(${c})`);if(n&&(h=new RegExp(`(?:^|(?:[^${n}${c[0]}]))(${c})`)),l=t.match(h),l!=null&&l[1]){const{index:r=0}=l,d=n?r+l[0].length-l[1].length:r,C=`${i[c]}`,D=l[1].length,S=D===1?C:`00${C}`.slice(`${C}`.length);t=t.slice(0,d)+S+t.slice(d+D)}}return n&&(t=t.replace(new RegExp(n,"g"),"")),t}const y=1e3*60*60*24*365,ae=15*60*1e3,g={POPUP_CELL:"press-popup-cell-functional",POPUP_CELL_2:"press-popup-cell-functional-2",PICKER:"press-picker-functional",DATE_TIME_PICKER:"press-datetime-picker-popup-functional"},fe={ON_TIME_START:"ON_TIME_START",LAST_READY_TIME:"LAST_READY_TIME"},ke={ON_TIME_START:{MIN:Date.now(),MAX:Date.now()+y},LATEST_READY:{MIN:Date.now()-y,MAX:Date.now()+y}};function Le(e){return m({selector:`#${g.POPUP_CELL}`,...e})}function me(e){m({selector:`#${g.POPUP_CELL}`,...e}).then(t=>{const{context:s={}}=t||{};s.closeDialog()}).catch(t=>{const{context:s={}}=t||{};s.closeDialog()})}function ge(e){return m({selector:`#${g.POPUP_CELL_2}`,...e})}function Ee(e){return m({selector:`#${g.PICKER}`,...e})}function Te(e){return m({selector:`#${g.DATE_TIME_PICKER}`,...e})}function pe(e){return parseInt(`${e/1e3/60}`,10)}function Oe(){let e=Date.now()+ae;for(;pe(e)%5!==0;)e+=60*1e3;return parseInt(`${e/1e3}`,10)}function be(e,t){let s="";return e==1?s="人满开赛":e==2?s="手动开赛":s=T(t,"M/d hh:mm开赛"),s}function ye(e){let t="";return e?t=T(e,"M/d hh:mm"):t="不启用",t}function De(){return Array.from({length:13}).map((e,t)=>t<2?null:t*5).filter(e=>e).map(e=>({value:e,label:`${e}分钟`}))}const Ie=[{label:"一局胜负",value:1},{label:"三局两胜",value:3},{label:"五局三胜",value:5},{label:"七局四胜",value:7}],ve=["","一局胜负","","三局两胜","","五局三胜","","七局四胜"],Ae=["各禁4英雄","不禁用英雄","","各禁2英雄","各禁3英雄"],we=[{label:"不禁用英雄",value:1},{label:"各禁2英雄",value:3},{label:"各禁3英雄",value:4},{label:"各禁4英雄",value:0}];function Se(e){return e?T(e,"M/d hh:mm 截止上场"):"不启用"}function Me(e){return T(e,"M/d hh:mm")}export{ve as B,ke as D,g as F,Pe as P,we as S,Ee as a,Le as b,ge as c,Te as d,ye as e,Ae as f,be as g,Ie as h,fe as i,De as j,Oe as k,Se as l,Me as o,me as s,T as t};