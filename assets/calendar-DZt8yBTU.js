import{P as X}from"./press-popup-plus-hfe8ow73.js";import{P as K}from"./press-toast-B4l-HTPu.js";import{i as Q,r as J}from"./system-mJD_gOJ2.js";import{t as p}from"./index-753QpPFu.js";import{_ as T,o as a,c as u,F as I,t as d,i as B,d as y,a as P,B as F,m as V,n as O,C as W,r as g,f,l as w,b as v}from"./index-CE2ZXbHd.js";import{u as L}from"./utils-RS8Gkmf-.js";import{P as Z}from"./press-button-D8xbHllw.js";import{T as x}from"./handler-CzQbPlyI.js";import{d as $,a as ee}from"./press-component-C_abQ9Ny.js";import{P as te}from"./press-cell-BaY-mjO3.js";import{t as oe}from"./time-DadpJyRx.js";import"./press-icon-plus-Dyy2g7WH.js";import"./style-CpIyAjCl.js";import"./add-unit-CWtSK4RX.js";import"./validator-DZhHpK6j.js";import"./press-info-BxpO04Jl.js";import"./press-overlay-UyxBI9rE.js";import"./press-transition-pMcJ7yvf.js";import"./press-loading-plus-Bxq1XSi0.js";import"./dialog-mixin-WX4maxk9.js";import"./component-handler-C9gctCf9.js";import"./press-loading-M8LeRCva.js";import"./button-DBxD__BH.js";import"./h5-handler-D8SNxyfB.js";import"./link-CTZKeEPU.js";import"./event-BGFDB3JP.js";import"./support-passive-CNRHRm4O.js";const ne=64;function E(e){return e instanceof Date||(e=new Date(e)),p("calendar.monthTitle",e.getFullYear(),e.getMonth()+1)}function M(e,t){e instanceof Date||(e=new Date(e)),t instanceof Date||(t=new Date(t));const o=e.getFullYear(),l=t.getFullYear(),n=e.getMonth(),i=t.getMonth();return o===l?n===i?0:n>i?1:-1:o>l?1:-1}function D(e,t){e instanceof Date||(e=new Date(e)),t instanceof Date||(t=new Date(t));const o=M(e,t);if(o===0){const l=e.getDate(),n=t.getDate();return l===n?0:l>n?1:-1}return o}function H(e,t){return e=new Date(e),e.setDate(e.getDate()+t),e}function q(e){return H(e,-1)}function j(e){return H(e,1)}function N(){const e=new Date;return e.setHours(0,0,0,0),e}function ie(e){const t=new Date(e[0]).getTime();return(new Date(e[1]).getTime()-t)/(1e3*60*60*24)+1}function _(e){return Array.isArray(e)?e.map(t=>t===null?t:new Date(t)):new Date(e)}function z(e,t){return 32-new Date(e,t-1,32).getDate()}function se(e,t){const o=[],l=new Date(e);l.setDate(1);do o.push(l.getTime()),l.setMonth(l.getMonth()+1);while(M(l,t)!==1);return o}const G=N().getTime(),U=(()=>{const e=N();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate()).getTime()})(),h={title:{type:String,default:p("calendar.title")},color:{type:String,default:""},formatter:{type:Function,default:null},confirmText:{type:String,default:p("calendar.confirm")},confirmDisabledText:{type:String,default:p("calendar.confirm")},allowSameDay:Boolean,type:{type:String,default:"single",observer:"reset"},minDate:{type:Number,default:G},maxDate:{type:Number,default:U},rowHeight:{type:null,default:ne},showMark:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showSubtitle:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},poppable:{type:Boolean,default:!0},firstDayOfWeek:{type:Number,default:0}},le={props:{title:h.title,subtitle:{type:String,default:""},showTitle:h.showTitle,showSubtitle:h.showSubtitle,firstDayOfWeek:h.firstDayOfWeek},emits:["click-subtitle"],data(){return{weekdays:[]}},watch:{firstDayOfWeek:{handler(){this.initWeekDay()}}},created(){this.initWeekDay()},methods:{initWeekDay(){const e=p("calendar.weekdays"),t=this.firstDayOfWeek||0;this.weekdays=[...e.slice(t,7),...e.slice(0,t)]},onClickSubtitle(e){this.$emit("click-subtitle",e)}}},re={class:"press-calendar__header"},ae={key:0,class:"press-calendar__header-title"},ue={key:1,class:"press-calendar__header-title"},ce={class:"press-calendar__weekdays"};function me(e,t,o,l,n,i){return a(),u("div",re,[o.showTitle?(a(),u(I,{key:0},[o.title?(a(),u("div",ae,d(o.title),1)):(a(),u("div",ue,[B(e.$slots,"title",{},void 0,!0)]))],64)):y("",!0),o.showSubtitle?(a(),u("div",{key:1,class:"press-calendar__header-subtitle",onClick:t[0]||(t[0]=(...s)=>i.onClickSubtitle&&i.onClickSubtitle(...s))},d(o.subtitle),1)):y("",!0),P("div",ce,[(a(!0),u(I,null,F(n.weekdays,(s,r)=>(a(),u("div",{key:r,class:"press-calendar__weekday"},d(s),1))),128))])])}const fe=T(le,[["render",me],["__scopeId","data-v-b899d723"]]);function S(e){return new Date(e)}function he(e){return S(e).getMonth()+1}const de=64;function ye(e,t,o,l,n,i){const s=[],r=S(o).getDay()||7,m=r<i?7-i+r:r===7&&i===0?0:r-i;return t===0&&s.push(["margin-left",`${100*m/7}%`]),l!==de&&s.push(["height",`${l}px`]),n&&(e==="start"||e==="end"||e==="start-end"||e==="multiple-selected"||e==="multiple-middle"?s.push(["background",n]):e==="middle"&&s.push(["color",n])),s.map(c=>c.join(":")).join(";")}function pe(e){return e=S(e),`${e.getFullYear()}年${e.getMonth()+1}月`}function De(e,t,o){if(!e){t=S(t);const l=z(t.getFullYear(),t.getMonth()+1),n=S(t).getDay();return`padding-bottom:${Math.ceil((l+n)/7)*o}px`}}const ge={getMark:he,getDayStyle:ye,formatMonthTitle:pe,getMonthStyle:De},we={props:{date:{type:[String,Number],default:""},type:{type:String,default:""},color:h.color,minDate:h.minDate,maxDate:h.maxDate,showMark:h.showMark,rowHeight:h.rowHeight,formatter:h.formatter,currentDate:{type:[String,Number,Array],default:""},firstDayOfWeek:h.firstDayOfWeek,allowSameDay:h.allowSameDay,showSubtitle:h.showSubtitle,showMonthTitle:Boolean},emits:["click"],data(){return{visible:!0,days:[],computed:ge,utils:L}},watch:{date:{handler(){this.setDays()}},type:{handler(){this.setDays()}},minDate:{handler(){this.setDays()}},maxDate:{handler(){this.setDays()}},formatter:{handler(){this.setDays()}},currentDate:{handler(){this.setDays()}},firstDayOfWeek:{handler(){this.setDays()}}},mounted(){this.setDays()},methods:{onClick(e){const t=this.days[e];t.type!=="disabled"&&this.$emit("click",t,this.days)},setDays(){const e=[],t=new Date(this.date),o=t.getFullYear(),l=t.getMonth(),n=z(t.getFullYear(),t.getMonth()+1);for(let i=1;i<=n;i++){const s=new Date(o,l,i),r=this.getDayType(s);let m={date:s,type:r,text:i,bottomInfo:this.getBottomInfo(r)};this.formatter&&(m=this.formatter(m)),e.push(m)}this.days=e},getMultipleDayType(e){const{currentDate:t}=this;if(!Array.isArray(t))return"";const o=l=>t.some(n=>D(n,l)===0);if(o(e)){const l=q(e),n=j(e),i=o(l),s=o(n);return i&&s?"multiple-middle":i?"end":s?"start":"multiple-selected"}return""},getRangeDayType(e){const{currentDate:t,allowSameDay:o}=this;if(!Array.isArray(t))return"";const[l,n]=t;if(!l)return"";const i=D(e,l);if(!n)return i===0?"start":"";const s=D(e,n);return i===0&&s===0&&o?"start-end":i===0?"start":s===0?"end":i>0&&s<0?"middle":""},getDayType(e){const{type:t,minDate:o,maxDate:l,currentDate:n}=this;return D(e,o)<0||D(e,l)>0?"disabled":t==="single"?D(e,n)===0?"selected":"":t==="multiple"?this.getMultipleDayType(e):t==="range"?this.getRangeDayType(e):""},getBottomInfo(e){if(this.type==="range"){if(e==="start")return p("calendar.start");if(e==="end")return p("calendar.end");if(e==="start-end")return p("calendar.startEnd")}}}},ke=["data-date"],be={key:0,class:"press-calendar__month-title"},Ce={key:1,class:"press-calendar__days"},ve={key:0,class:"press-calendar__month-mark"},Se=["data-index","onClick"],Te={key:0,class:"press-calendar__top-info"},Ie={key:1,class:"press-calendar__bottom-info"},Oe={key:1},Me={key:0,class:"press-calendar__top-info"},Re={key:1,class:"press-calendar__bottom-info"};function Ve(e,t,o,l,n,i){return a(),u("div",{class:"press-calendar__month",style:V(n.computed.getMonthStyle(n.visible,o.date,o.rowHeight)),"data-date":o.date},[o.showMonthTitle?(a(),u("div",be,d(n.computed.formatMonthTitle(o.date)),1)):y("",!0),n.visible?(a(),u("div",Ce,[o.showMark?(a(),u("div",ve,d(n.computed.getMark(o.date)),1)):y("",!0),(a(!0),u(I,null,F(n.days,(s,r)=>(a(),u("div",{key:r,style:V(n.computed.getDayStyle(s.type,r,o.date,o.rowHeight,o.color,o.firstDayOfWeek)),class:O(n.utils.bem2("calendar__day",[s.type])+" "+s.className),"data-index":r,onClick:m=>i.onClick(r)},[s.type==="selected"?(a(),u("div",{key:0,class:"press-calendar__selected-day",style:V("width: "+o.rowHeight+"px; height: "+o.rowHeight+"px; background: "+o.color)},[s.topInfo?(a(),u("div",Te,d(s.topInfo),1)):y("",!0),W(" "+d(s.text)+" ",1),s.bottomInfo?(a(),u("div",Ie,d(s.bottomInfo),1)):y("",!0)],4)):(a(),u("div",Oe,[s.topInfo?(a(),u("div",Me,d(s.topInfo),1)):y("",!0),W(" "+d(s.text)+" ",1),s.bottomInfo?(a(),u("div",Re,d(s.bottomInfo),1)):y("",!0)]))],14,Se))),128))])):y("",!0)],12,ke)}const _e=T(we,[["render",Ve],["__scopeId","data-v-6f7fb270"]]);function Y(e){return new Date(e)}function Ae(e,t){const o=[],l=Y(e);l.setDate(1);do o.push(l.getTime()),l.setMonth(l.getMonth()+1);while(M(l,Y(t))!==1);return o}function Be(e,t){return t==null?!0:e==="range"?!t[0]||!t[1]:e==="multiple"?!t.length:!t}const Pe={getMonths:Ae,getButtonDisabled:Be},We={options:{styleIsolation:"shared"},components:{CalendarHeader:fe,Month:_e,PressButton:Z},props:{...h,scrollIntoViewData:{type:String,default:""},currentDate:{type:[String,Number,Array],default:null}},emits:["onConfirm","onClickSubtitle","scrollIntoView","onClickDay"],data(){return{computed:Pe,utils:L,subtitle:""}},computed:{},mounted(){this.initRect()},methods:{onConfirm(...e){this.$emit("onConfirm",...e)},onClickSubtitle(...e){this.$emit("onClickSubtitle",...e)},scrollIntoView(...e){this.$emit("scrollIntoView",...e)},onClickDay(...e){this.$emit("onClickDay",...e)},initRect(){this.contentObserver!=null&&this.contentObserver.disconnect();const e=".press-calendar__body";let t=".month";const o=[0,.1,.9,1],l=!0;if(Q({selector:t,options:{threshold:o,observeAll:l,root:document.querySelector(e)},callback:i=>{for(const s of i)if(s.boundingClientRect.top<=s.rootBounds.top){this.subtitle=E(+s.target.dataset.date);break}}}))return;const n=uni.createIntersectionObserver(this,{thresholds:o,observeAll:l,dataset:!0});this.contentObserver=n,n.relativeTo(e),n.observe(t,i=>{i.boundingClientRect.top<=i.relativeRect.top&&(this.subtitle=E(+i.dataset.date))})}}},Fe={class:"press-calendar"};function He(e,t,o,l,n,i){const s=g("CalendarHeader"),r=g("month"),m=g("scroll-view"),c=g("press-button");return a(),u("div",Fe,[f(s,{title:e.title,"show-title":e.showTitle,subtitle:n.subtitle,"show-subtitle":e.showSubtitle,"first-day-of-week":e.firstDayOfWeek,onClickSubtitle:i.onClickSubtitle},{title:w(()=>[B(e.$slots,"title",{},void 0,!0)]),_:3},8,["title","show-title","subtitle","show-subtitle","first-day-of-week","onClickSubtitle"]),f(m,{class:"press-calendar__body","scroll-y":"","scroll-into-view":o.scrollIntoViewData},{default:w(()=>[(a(!0),u(I,null,F(n.computed.getMonths(e.minDate,e.maxDate),(k,R)=>(a(),v(r,{id:"month"+R,key:R,class:"month","data-date":k,date:k,type:e.type,color:e.color,"min-date":e.minDate,"max-date":e.maxDate,"show-mark":e.showMark,formatter:e.formatter,"row-height":e.rowHeight,"current-date":o.currentDate,"show-subtitle":e.showSubtitle,"allow-same-day":e.allowSameDay,"show-month-title":R!==0||!e.showSubtitle,"first-day-of-week":e.firstDayOfWeek,onClick:i.onClickDay},null,8,["id","data-date","date","type","color","min-date","max-date","show-mark","formatter","row-height","current-date","show-subtitle","allow-same-day","show-month-title","first-day-of-week","onClick"]))),128))]),_:1},8,["scroll-into-view"]),P("div",{class:O(n.utils.bem2("calendar__footer",{safeAreaInsetBottom:e.safeAreaInsetBottom}))},[B(e.$slots,"footer",{},void 0,!0)],2),P("div",{class:O(n.utils.bem2("calendar__footer",{safeAreaInsetBottom:e.safeAreaInsetBottom}))},[e.showConfirm?(a(),v(c,{key:0,round:"",block:"",type:"danger",color:e.color,"custom-class":"press-calendar__confirm",disabled:n.computed.getButtonDisabled(e.type,o.currentDate),"native-type":"text",onClick:i.onConfirm},{default:w(()=>[W(d(n.computed.getButtonDisabled(e.type,o.currentDate)?e.confirmDisabledText:e.confirmText),1)]),_:1},8,["color","disabled","onClick"])):y("",!0)],2)])}const Ne=T(We,[["render",He],["__scopeId","data-v-8288ece6"]]),b=e=>e instanceof Date?e.getTime():e,Ee={name:"PressCalendar",options:{...$,styleIsolation:"shared"},components:{Calendar:Ne,PressPopup:X,PressToast:K},props:{...h,show:{type:Boolean,default:!1},rangePrompt:{type:String,default:""},showRangePrompt:{type:Boolean,default:!0},defaultDate:{type:[String,Number],default:""},position:{type:String,default:"bottom"},round:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},maxRange:{type:[String,Number],default:null},readonly:Boolean,...ee},emits:["open","opened","close","closed","unselect","select","over-range","confirm","click-subtitle"],data(){return{subtitle:"",currentDate:null,scrollIntoViewData:""}},watch:{show:{handler(e){e&&this.scrollIntoView()}},defaultDate:{handler(e){this.currentDate=e,this.scrollIntoView()}},type:{handler(){this.reset()}}},created(){this.currentDate=this.getInitialDate(this.defaultDate)},mounted(){(this.show||!this.poppable)&&this.scrollIntoView()},methods:{reset(){this.currentDate=this.getInitialDate(),this.scrollIntoView()},limitDateRange(e,t=null,o=null){return t=t||this.minDate,o=o||this.maxDate,D(e,t)===-1?t:D(e,o)===1?o:e},getInitialDate(e=null){const{type:t,minDate:o,maxDate:l}=this,n=N().getTime();if(t==="range"){Array.isArray(e)||(e=[]);const[i,s]=e||[],r=this.limitDateRange(i||n,o,q(new Date(l)).getTime()),m=this.limitDateRange(s||n,j(new Date(o)).getTime());return[r,m]}return t==="multiple"?Array.isArray(e)?e.map(i=>this.limitDateRange(i)):[this.limitDateRange(n)]:((!e||Array.isArray(e))&&(e=n),this.limitDateRange(e))},scrollIntoView(){J(()=>{const{currentDate:e,type:t,show:o,poppable:l,minDate:n,maxDate:i}=this,s=t==="single"?e:e[0];if(!s||!(o||!l))return;se(n,i).some((c,k)=>M(c,s)===0?(this.scrollIntoViewData=`month${k}`,!0):!1)})},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")},onClickDay({date:e},t){if(this.readonly)return;const{type:o,currentDate:l,allowSameDay:n}=this;if(o==="range"){const[i,s]=l;if(i&&!s){const r=D(e,i);r===1?(t.some((m,c)=>{const k=m.type==="disabled"&&b(i)<b(m.date)&&b(m.date)<b(e);return k&&({date:e}=t[c-1]),k}),this.select([i,e],!0)):r===-1?this.select([e,null]):n&&this.select([e,e])}else this.select([e,null])}else if(o==="multiple"){let i;if(l.some((r,m)=>{const c=D(r,e)===0;return c&&(i=m),c})){const r=l.splice(i,1);this.currentDate=l,this.unselect(r)}else this.select([...l,e])}else this.select(e,!0)},unselect(e){const t=e[0];t&&this.$emit("unselect",_(t))},select(e,t){if(t&&this.type==="range"&&!this.checkRange(e)){this.showConfirm?this.emit([e[0],H(e[0],this.maxRange-1)]):this.emit(e);return}this.emit(e),t&&!this.showConfirm&&this.onConfirm()},emit(e){this.currentDate=Array.isArray(e)?e.map(b):b(e),this.$emit("select",_(e))},checkRange(e){const{maxRange:t,rangePrompt:o,showRangePrompt:l}=this;return t&&ie(e)>t?(l&&x({context:this,message:o||p("calendar.rangePrompt",t)}),this.$emit("over-range"),!1):!0},onConfirm(){this.type==="range"&&!this.checkRange(this.currentDate)||this.$nextTick(()=>{this.$emit("confirm",_(this.currentDate))})},onClickSubtitle(e){this.$emit("click-subtitle",e)}}};function Ye(e,t,o,l,n,i){const s=g("Calendar"),r=g("press-popup");return a(),u("div",{class:O(["press-calendar-index",e.customClass])},[e.poppable?(a(),v(r,{key:0,"custom-class":"press-calendar__popup--"+o.position,"close-icon-class":"press-calendar__close-icon",show:o.show,round:o.round,position:o.position,closeable:e.showTitle||e.showSubtitle,"close-on-click-overlay":o.closeOnClickOverlay,onEnter:i.onOpen,onClose:i.onClose,onAfterEnter:i.onOpened,onAfterLeave:i.onClosed},{default:w(()=>[f(s,{title:e.title,color:e.color,formatter:e.formatter,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,"allow-same-day":e.allowSameDay,type:e.type,"min-date":e.minDate,"max-date":e.maxDate,"row-height":e.rowHeight,"show-mark":e.showMark,"show-title":e.showTitle,"show-confirm":e.showConfirm,"show-subtitle":e.showSubtitle,"safe-area-inset-bottom":e.safeAreaInsetBottom,"first-day-of-week":e.firstDayOfWeek,"scroll-into-view-data":n.scrollIntoViewData,"current-date":n.currentDate,subtitle:n.subtitle,poppable:e.poppable,onOnConfirm:i.onConfirm,onOnClickSubtitle:i.onClickSubtitle,onScrollIntoView:i.scrollIntoView,onOnClickDay:i.onClickDay},null,8,["title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onOnConfirm","onOnClickSubtitle","onScrollIntoView","onOnClickDay"])]),_:1},8,["custom-class","show","round","position","closeable","close-on-click-overlay","onEnter","onClose","onAfterEnter","onAfterLeave"])):(a(),v(s,{key:1,"max-date":e.maxDate,"row-height":e.rowHeight,"show-mark":e.showMark,"show-title":e.showTitle,"show-confirm":e.showConfirm,"show-subtitle":e.showSubtitle,title:e.title,color:e.color,formatter:e.formatter,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,"allow-same-day":e.allowSameDay,type:e.type,"min-date":e.minDate,"safe-area-inset-bottom":e.safeAreaInsetBottom,"first-day-of-week":e.firstDayOfWeek,"scroll-into-view-data":n.scrollIntoViewData,"current-date":n.currentDate,subtitle:n.subtitle,poppable:e.poppable,onScrollIntoView:i.scrollIntoView,onOnClickDay:i.onClickDay,onOnConfirm:i.onConfirm,onOnClickSubtitle:i.onClickSubtitle},null,8,["max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onScrollIntoView","onOnClickDay","onOnConfirm","onOnClickSubtitle"]))],2)}const Le=T(Ee,[["render",Ye],["__scopeId","data-v-b7cd8a27"]]),A={color:"",minDate:G,maxDate:U,confirmText:p("calendar.confirm"),confirmDisabledText:p("calendar.confirm"),useFormatter:!1,position:"bottom",maxRange:null,firstDayOfWeek:0};let C=null;const qe={i18n:{"zh-CN":{in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",calendar:"日历",maxRange:"日期区间最大范围",selectCount:e=>`选择了 ${e} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",quickSelect:"快捷选择",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",tiledDisplay:"平铺展示"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",calendar:"Calendar",maxRange:"Max Range",selectCount:e=>`${e} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",tiledDisplay:"Tiled display"}},components:{PressCalendar:Le,PressCell:te},data(){return C=this,{show:!1,ifShow:!1,type:"single",singleValue:"",multipleValue:"",rangeValue:"",showConfirm:!0,...A}},methods:{tFormatter(e){const t=e.date.getMonth()+1,o=e.date.getDate();return t===5&&(o===1?e.topInfo=C.t("laborDay"):o===4?e.topInfo=C.t("youthDay"):o===11&&(e.topInfo=C.t("today"))),e.type==="start"?e.bottomInfo=C.t("in"):e.type==="end"&&(e.bottomInfo=C.t("out")),e},onDisplay(e,t=!0,o={}){this.type=e,this.showConfirm=t,Object.keys(A).forEach(l=>{this[l]=o[l]||A[l]}),this.show=!0,this.ifShow=!0},onClose(){this.show=!1,setTimeout(()=>{this.ifShow=!1},500)},formatDate(e){return e=new Date(e),`${e.getMonth()+1}/${e.getDate()}`},onConfirm(e){if(console.log("[onConfirm] result: ",e),this.onClose(),this.type==="range"){const[t,o]=e;this.rangeValue=`${this.formatDate(t)} - ${this.formatDate(o)}`,this.onTip([t,o]," - ")}else this.type==="multiple"?(this.multipleValue=this.t("selectCount",e.length),this.onTip(e)):this.type==="single"&&(this.singleValue=this.formatDate(e),this.onTip([e]))},onTip(e,t=", "){const o=n=>oe(n.getTime(),"yyyy-MM-dd"),l=e.map(n=>o(n)).join(t);this.onGTip(l,3e3)}}},je={class:"demo-wrap"};function ze(e,t,o,l,n,i){const s=g("press-cell"),r=g("demo-block"),m=g("press-calendar");return a(),u("div",je,[f(r,{title:e.t("basicUsage")},{default:w(()=>[f(s,{title:e.t("selectSingle"),"is-link":"",value:n.singleValue,onClick:t[0]||(t[0]=c=>i.onDisplay("single"))},null,8,["title","value"]),f(s,{title:e.t("selectMultiple"),"is-link":"",value:n.multipleValue,onClick:t[1]||(t[1]=c=>i.onDisplay("multiple"))},null,8,["title","value"]),f(s,{title:e.t("selectRange"),"is-link":"",value:n.rangeValue,onClick:t[2]||(t[2]=c=>i.onDisplay("range"))},null,8,["title","value"])]),_:1},8,["title"]),f(r,{title:e.t("quickSelect")},{default:w(()=>[f(s,{title:e.t("selectSingle"),"is-link":"",value:n.singleValue,onClick:t[3]||(t[3]=c=>i.onDisplay("single",!1))},null,8,["title","value"]),f(s,{title:e.t("selectRange"),"is-link":"",value:n.rangeValue,onClick:t[4]||(t[4]=c=>i.onDisplay("range",!1))},null,8,["title","value"])]),_:1},8,["title"]),f(r,{title:e.t("customCalendar")},{default:w(()=>[f(s,{title:e.t("customColor"),"is-link":"",value:n.singleValue,onClick:t[5]||(t[5]=c=>i.onDisplay("single",!0,{color:"#07c160"}))},null,8,["title","value"]),f(s,{title:e.t("customRange"),"is-link":"",value:n.singleValue,onClick:t[6]||(t[6]=c=>i.onDisplay("single",!0,{minDate:new Date(2010,0,1).getTime(),maxDate:new Date(2010,0,31).getTime()}))},null,8,["title","value"]),f(s,{title:e.t("customConfirm"),"is-link":"",value:n.rangeValue,onClick:t[7]||(t[7]=c=>i.onDisplay("range",!0,{confirmText:e.t("confirmText"),confirmDisabledText:e.t("confirmDisabledText")}))},null,8,["title","value"]),f(s,{title:e.t("customDayText"),"is-link":"",value:n.rangeValue,onClick:t[8]||(t[8]=c=>i.onDisplay("range",!0,{useFormatter:!0}))},null,8,["title","value"]),f(s,{title:e.t("customPosition"),"is-link":"",value:n.singleValue,onClick:t[9]||(t[9]=c=>i.onDisplay("single",!0,{position:"right"}))},null,8,["title","value"]),f(s,{title:e.t("maxRange"),"is-link":"",value:n.rangeValue,onClick:t[10]||(t[10]=c=>i.onDisplay("range",!0,{maxRange:3}))},null,8,["title","value"]),f(s,{title:e.t("firstDayOfWeek"),"is-link":"",value:n.singleValue,onClick:t[11]||(t[11]=c=>i.onDisplay("single",!0,{firstDayOfWeek:1}))},null,8,["title","value"])]),_:1},8,["title"]),n.ifShow?(a(),v(m,{key:0,show:n.show,type:n.type,"show-confirm":n.showConfirm,color:e.color,"min-date":e.minDate,"max-date":e.maxDate,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,formatter:e.useFormatter?i.tFormatter:null,position:e.position,"max-range":e.maxRange,"first-day-of-week":e.firstDayOfWeek,onClose:i.onClose,onConfirm:i.onConfirm},null,8,["show","type","show-confirm","color","min-date","max-date","confirm-text","confirm-disabled-text","formatter","position","max-range","first-day-of-week","onClose","onConfirm"])):y("",!0),f(r,{title:e.t("tiledDisplay")},{default:w(()=>[f(m,{poppable:!1,"show-confirm":!1,"custom-class":"calendar"})]),_:1},8,["title"])])}const gt=T(qe,[["render",ze],["__scopeId","data-v-2a34a585"]]);export{gt as default};