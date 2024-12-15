import{P as Q}from"./press-popup-plus-Bz_RJS7v.js";import{P as X}from"./press-toast-BTkHEBTv.js";import{i as K,r as x}from"./system-Dv-dV8xN.js";import{O as p,_ as T,o as a,c as u,F as I,t as h,h as B,d as y,a as P,q as F,E as q,l as R,n as O,G as W,M as J,r as g,e as f,k as w,b as v,v as Z,x as $,Q as ee}from"./index-C8vugXWi.js";import{S as te}from"./scroll-view-6X1FI7lO.js";import{T as ne}from"./handler-R3VqEg-M.js";import{P as oe}from"./press-cell-BLTCMYRJ.js";import{t as se}from"./time-DadpJyRx.js";import"./press-overlay-CxfxI6bt.js";import"./press-transition-paiHDwmk.js";import"./dialog-mixin-BkC47Jc3.js";import"./component-handler-BsZamlOU.js";import"./h5-handler-B_4118GU.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";const ie=64;function E(e){return e instanceof Date||(e=new Date(e)),p("calendar.monthTitle",e.getFullYear(),e.getMonth()+1)}function M(e,t){e instanceof Date||(e=new Date(e)),t instanceof Date||(t=new Date(t));const n=e.getFullYear(),l=t.getFullYear(),o=e.getMonth(),s=t.getMonth();return n===l?o===s?0:o>s?1:-1:n>l?1:-1}function D(e,t){e instanceof Date||(e=new Date(e)),t instanceof Date||(t=new Date(t));const n=M(e,t);if(n===0){const l=e.getDate(),o=t.getDate();return l===o?0:l>o?1:-1}return n}function H(e,t){return e=new Date(e),e.setDate(e.getDate()+t),e}function L(e){return H(e,-1)}function j(e){return H(e,1)}function N(){const e=new Date;return e.setHours(0,0,0,0),e}function le(e){const t=new Date(e[0]).getTime();return(new Date(e[1]).getTime()-t)/(1e3*60*60*24)+1}function _(e){return Array.isArray(e)?e.map(t=>t===null?t:new Date(t)):new Date(e)}function G(e,t){return 32-new Date(e,t-1,32).getDate()}function re(e,t){const n=[],l=new Date(e);l.setDate(1);do n.push(l.getTime()),l.setMonth(l.getMonth()+1);while(M(l,t)!==1);return n}const z=N().getTime(),U=(()=>{const e=N();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate()).getTime()})(),d={title:{type:String,default:p("calendar.title")},color:{type:String,default:""},formatter:{type:Function,default:null},confirmText:{type:String,default:p("calendar.confirm")},confirmDisabledText:{type:String,default:p("calendar.confirm")},allowSameDay:Boolean,type:{type:String,default:"single",observer:"reset"},minDate:{type:Number,default:z},maxDate:{type:Number,default:U},rowHeight:{type:null,default:ie},showMark:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showSubtitle:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},poppable:{type:Boolean,default:!0},firstDayOfWeek:{type:Number,default:0}},ae={props:{title:d.title,subtitle:{type:String,default:""},showTitle:d.showTitle,showSubtitle:d.showSubtitle,firstDayOfWeek:d.firstDayOfWeek},emits:["click-subtitle"],data(){return{weekdays:[]}},watch:{firstDayOfWeek:{handler(){this.initWeekDay()}}},created(){this.initWeekDay()},methods:{initWeekDay(){const e=p("calendar.weekdays"),t=this.firstDayOfWeek||0;this.weekdays=[...e.slice(t,7),...e.slice(0,t)]},onClickSubtitle(e){this.$emit("click-subtitle",e)}}},ue={class:"press-calendar__header"},ce={key:0,class:"press-calendar__header-title"},me={key:1,class:"press-calendar__header-title"},fe={class:"press-calendar__weekdays"};function de(e,t,n,l,o,s){return a(),u("div",ue,[n.showTitle?(a(),u(I,{key:0},[n.title?(a(),u("div",ce,h(n.title),1)):(a(),u("div",me,[B(e.$slots,"title",{},void 0,!0)]))],64)):y("",!0),n.showSubtitle?(a(),u("div",{key:1,class:"press-calendar__header-subtitle",onClick:t[0]||(t[0]=(...i)=>s.onClickSubtitle&&s.onClickSubtitle(...i))},h(n.subtitle),1)):y("",!0),P("div",fe,[(a(!0),u(I,null,F(o.weekdays,(i,r)=>(a(),u("div",{key:r,class:"press-calendar__weekday"},h(i),1))),128))])])}const he=T(ae,[["render",de],["__scopeId","data-v-b899d723"]]);function S(e){return new Date(e)}function ye(e){return S(e).getMonth()+1}const pe=64;function De(e,t,n,l,o,s){const i=[],r=S(n).getDay()||7,m=r<s?7-s+r:r===7&&s===0?0:r-s;return t===0&&i.push(["margin-left",`${100*m/7}%`]),l!==pe&&i.push(["height",`${l}px`]),o&&(e==="start"||e==="end"||e==="start-end"||e==="multiple-selected"||e==="multiple-middle"?i.push(["background",o]):e==="middle"&&i.push(["color",o])),i.map(c=>c.join(":")).join(";")}function ge(e){return e=S(e),`${e.getFullYear()}年${e.getMonth()+1}月`}function we(e,t,n){if(!e){t=S(t);const l=G(t.getFullYear(),t.getMonth()+1),o=S(t).getDay();return`padding-bottom:${Math.ceil((l+o)/7)*n}px`}}const ke={getMark:ye,getDayStyle:De,formatMonthTitle:ge,getMonthStyle:we},be={props:{date:{type:[String,Number],default:""},type:{type:String,default:""},color:d.color,minDate:d.minDate,maxDate:d.maxDate,showMark:d.showMark,rowHeight:d.rowHeight,formatter:d.formatter,currentDate:{type:[String,Number,Array],default:""},firstDayOfWeek:d.firstDayOfWeek,allowSameDay:d.allowSameDay,showSubtitle:d.showSubtitle,showMonthTitle:Boolean},emits:["click"],data(){return{visible:!0,days:[],computed:ke,utils:q}},watch:{date:{handler(){this.setDays()}},type:{handler(){this.setDays()}},minDate:{handler(){this.setDays()}},maxDate:{handler(){this.setDays()}},formatter:{handler(){this.setDays()}},currentDate:{handler(){this.setDays()}},firstDayOfWeek:{handler(){this.setDays()}}},mounted(){this.setDays()},methods:{onClick(e){const t=this.days[e];t.type!=="disabled"&&this.$emit("click",t,this.days)},setDays(){const e=[],t=new Date(this.date),n=t.getFullYear(),l=t.getMonth(),o=G(t.getFullYear(),t.getMonth()+1);for(let s=1;s<=o;s++){const i=new Date(n,l,s),r=this.getDayType(i);let m={date:i,type:r,text:s,bottomInfo:this.getBottomInfo(r)};this.formatter&&(m=this.formatter(m)),e.push(m)}this.days=e},getMultipleDayType(e){const{currentDate:t}=this;if(!Array.isArray(t))return"";const n=l=>t.some(o=>D(o,l)===0);if(n(e)){const l=L(e),o=j(e),s=n(l),i=n(o);return s&&i?"multiple-middle":s?"end":i?"start":"multiple-selected"}return""},getRangeDayType(e){const{currentDate:t,allowSameDay:n}=this;if(!Array.isArray(t))return"";const[l,o]=t;if(!l)return"";const s=D(e,l);if(!o)return s===0?"start":"";const i=D(e,o);return s===0&&i===0&&n?"start-end":s===0?"start":i===0?"end":s>0&&i<0?"middle":""},getDayType(e){const{type:t,minDate:n,maxDate:l,currentDate:o}=this;return D(e,n)<0||D(e,l)>0?"disabled":t==="single"?D(e,o)===0?"selected":"":t==="multiple"?this.getMultipleDayType(e):t==="range"?this.getRangeDayType(e):""},getBottomInfo(e){if(this.type==="range"){if(e==="start")return p("calendar.start");if(e==="end")return p("calendar.end");if(e==="start-end")return p("calendar.startEnd")}}}},Ce=["data-date"],ve={key:0,class:"press-calendar__month-title"},Se={key:1,class:"press-calendar__days"},Te={key:0,class:"press-calendar__month-mark"},Ie=["data-index","onClick"],Oe={key:0,class:"press-calendar__top-info"},Me={key:1,class:"press-calendar__bottom-info"},Ve={key:1},Re={key:0,class:"press-calendar__top-info"},_e={key:1,class:"press-calendar__bottom-info"};function Ae(e,t,n,l,o,s){return a(),u("div",{class:"press-calendar__month",style:R(o.computed.getMonthStyle(o.visible,n.date,n.rowHeight)),"data-date":n.date},[n.showMonthTitle?(a(),u("div",ve,h(o.computed.formatMonthTitle(n.date)),1)):y("",!0),o.visible?(a(),u("div",Se,[n.showMark?(a(),u("div",Te,h(o.computed.getMark(n.date)),1)):y("",!0),(a(!0),u(I,null,F(o.days,(i,r)=>(a(),u("div",{key:r,style:R(o.computed.getDayStyle(i.type,r,n.date,n.rowHeight,n.color,n.firstDayOfWeek)),class:O(o.utils.bem2("calendar__day",[i.type])+" "+i.className),"data-index":r,onClick:m=>s.onClick(r)},[i.type==="selected"?(a(),u("div",{key:0,class:"press-calendar__selected-day",style:R("width: "+n.rowHeight+"px; height: "+n.rowHeight+"px; background: "+n.color)},[i.topInfo?(a(),u("div",Oe,h(i.topInfo),1)):y("",!0),W(" "+h(i.text)+" ",1),i.bottomInfo?(a(),u("div",Me,h(i.bottomInfo),1)):y("",!0)],4)):(a(),u("div",Ve,[i.topInfo?(a(),u("div",Re,h(i.topInfo),1)):y("",!0),W(" "+h(i.text)+" ",1),i.bottomInfo?(a(),u("div",_e,h(i.bottomInfo),1)):y("",!0)]))],14,Ie))),128))])):y("",!0)],12,Ce)}const Be=T(be,[["render",Ae],["__scopeId","data-v-6f7fb270"]]);function Y(e){return new Date(e)}function Pe(e,t){const n=[],l=Y(e);l.setDate(1);do n.push(l.getTime()),l.setMonth(l.getMonth()+1);while(M(l,Y(t))!==1);return n}function We(e,t){return t==null?!0:e==="range"?!t[0]||!t[1]:e==="multiple"?!t.length:!t}const Fe={getMonths:Pe,getButtonDisabled:We},He={name:"Calendar",options:{styleIsolation:"shared"},components:{CalendarHeader:he,Month:Be,PressButton:J},mixins:[te],props:{...d,scrollIntoViewData:{type:String,default:""},currentDate:{type:[String,Number,Array],default:null}},emits:["onConfirm","onClickSubtitle","scrollIntoView","onClickDay"],data(){return{computed:Fe,utils:q,subtitle:""}},computed:{},mounted(){this.initRect()},methods:{onConfirm(...e){this.$emit("onConfirm",...e)},onClickSubtitle(...e){this.$emit("onClickSubtitle",...e)},scrollIntoView(...e){this.$emit("scrollIntoView",...e)},onClickDay(...e){this.$emit("onClickDay",...e)},initRect(){this.contentObserver!=null&&this.contentObserver.disconnect();const e=".press-calendar__body";let t=".month";const n=[0,.1,.9,1],l=!0;if(K({selector:t,options:{threshold:n,observeAll:l,root:document.querySelector(e)},callback:s=>{for(const i of s)if(i.boundingClientRect.top<=i.rootBounds.top){this.subtitle=E(+i.target.dataset.date);break}}}))return;const o=uni.createIntersectionObserver(this,{thresholds:n,observeAll:l,dataset:!0});this.contentObserver=o,o.relativeTo(e),o.observe(t,s=>{s.boundingClientRect.top<=s.relativeRect.top&&(this.subtitle=E(+s.dataset.date))})}}},Ne={class:"press-calendar"};function Ee(e,t,n,l,o,s){const i=g("CalendarHeader"),r=g("month"),m=g("scroll-view"),c=g("press-button");return a(),u("div",Ne,[f(i,{title:e.title,"show-title":e.showTitle,subtitle:o.subtitle,"show-subtitle":e.showSubtitle,"first-day-of-week":e.firstDayOfWeek,onClickSubtitle:s.onClickSubtitle},{title:w(()=>[B(e.$slots,"title",{},void 0,!0)]),_:3},8,["title","show-title","subtitle","show-subtitle","first-day-of-week","onClickSubtitle"]),f(m,{class:"press-calendar__body","scroll-y":"","scroll-into-view":n.scrollIntoViewData},{default:w(()=>[(a(!0),u(I,null,F(o.computed.getMonths(e.minDate,e.maxDate),(k,V)=>(a(),v(r,{id:"month"+V,key:V,class:"month","data-date":k,date:k,type:e.type,color:e.color,"min-date":e.minDate,"max-date":e.maxDate,"show-mark":e.showMark,formatter:e.formatter,"row-height":e.rowHeight,"current-date":n.currentDate,"show-subtitle":e.showSubtitle,"allow-same-day":e.allowSameDay,"show-month-title":V!==0||!e.showSubtitle,"first-day-of-week":e.firstDayOfWeek,onClick:s.onClickDay},null,8,["id","data-date","date","type","color","min-date","max-date","show-mark","formatter","row-height","current-date","show-subtitle","allow-same-day","show-month-title","first-day-of-week","onClick"]))),128))]),_:1},8,["scroll-into-view"]),P("div",{class:O(o.utils.bem2("calendar__footer",{safeAreaInsetBottom:e.safeAreaInsetBottom}))},[B(e.$slots,"footer",{},void 0,!0)],2),P("div",{class:O(o.utils.bem2("calendar__footer",{safeAreaInsetBottom:e.safeAreaInsetBottom}))},[e.showConfirm?(a(),v(c,{key:0,round:"",block:"",type:"danger",color:e.color,"custom-class":"press-calendar__confirm",disabled:o.computed.getButtonDisabled(e.type,n.currentDate),"native-type":"text",onClick:s.onConfirm},{default:w(()=>[W(h(o.computed.getButtonDisabled(e.type,n.currentDate)?e.confirmDisabledText:e.confirmText),1)]),_:1},8,["color","disabled","onClick"])):y("",!0)],2)])}const Ye=T(He,[["render",Ee],["__scopeId","data-v-ade2f9b3"]]),b=e=>e instanceof Date?e.getTime():e,qe={name:"PressCalendar",options:{...Z,styleIsolation:"shared"},components:{Calendar:Ye,PressPopup:Q,PressToast:X},props:{...d,show:{type:Boolean,default:!1},rangePrompt:{type:String,default:""},showRangePrompt:{type:Boolean,default:!0},defaultDate:{type:[String,Number],default:""},position:{type:String,default:"bottom"},round:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},maxRange:{type:[String,Number],default:null},readonly:Boolean,...$},emits:["open","opened","close","closed","unselect","select","over-range","confirm","click-subtitle"],data(){return{subtitle:"",currentDate:null,scrollIntoViewData:""}},watch:{show:{handler(e){e&&this.scrollIntoView()}},defaultDate:{handler(e){this.currentDate=e,this.scrollIntoView()}},type:{handler(){this.reset()}}},created(){this.currentDate=this.getInitialDate(this.defaultDate)},mounted(){(this.show||!this.poppable)&&this.scrollIntoView()},methods:{reset(){this.currentDate=this.getInitialDate(),this.scrollIntoView()},limitDateRange(e,t=null,n=null){return t=t||this.minDate,n=n||this.maxDate,D(e,t)===-1?t:D(e,n)===1?n:e},getInitialDate(e=null){const{type:t,minDate:n,maxDate:l}=this,o=N().getTime();if(t==="range"){Array.isArray(e)||(e=[]);const[s,i]=e||[],r=this.limitDateRange(s||o,n,L(new Date(l)).getTime()),m=this.limitDateRange(i||o,j(new Date(n)).getTime());return[r,m]}return t==="multiple"?Array.isArray(e)?e.map(s=>this.limitDateRange(s)):[this.limitDateRange(o)]:((!e||Array.isArray(e))&&(e=o),this.limitDateRange(e))},scrollIntoView(){x(()=>{const{currentDate:e,type:t,show:n,poppable:l,minDate:o,maxDate:s}=this,i=t==="single"?e:e[0];if(!i||!(n||!l))return;re(o,s).some((c,k)=>M(c,i)===0?(this.scrollIntoViewData=`month${k}`,!0):!1)})},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")},onClickDay({date:e},t){if(this.readonly)return;const{type:n,currentDate:l,allowSameDay:o}=this;if(n==="range"){const[s,i]=l;if(s&&!i){const r=D(e,s);r===1?(t.some((m,c)=>{const k=m.type==="disabled"&&b(s)<b(m.date)&&b(m.date)<b(e);return k&&({date:e}=t[c-1]),k}),this.select([s,e],!0)):r===-1?this.select([e,null]):o&&this.select([e,e])}else this.select([e,null])}else if(n==="multiple"){let s;if(l.some((r,m)=>{const c=D(r,e)===0;return c&&(s=m),c})){const r=l.splice(s,1);this.currentDate=l,this.unselect(r)}else this.select([...l,e])}else this.select(e,!0)},unselect(e){const t=e[0];t&&this.$emit("unselect",_(t))},select(e,t){if(t&&this.type==="range"&&!this.checkRange(e)){this.showConfirm?this.emit([e[0],H(e[0],this.maxRange-1)]):this.emit(e);return}this.emit(e),t&&!this.showConfirm&&this.onConfirm()},emit(e){this.currentDate=Array.isArray(e)?e.map(b):b(e),this.$emit("select",_(e))},checkRange(e){const{maxRange:t,rangePrompt:n,showRangePrompt:l}=this;return t&&le(e)>t?(l&&ne({context:this,message:n||p("calendar.rangePrompt",t)}),this.$emit("over-range"),!1):!0},onConfirm(){this.type==="range"&&!this.checkRange(this.currentDate)||ee(()=>{this.$emit("confirm",_(this.currentDate))})},onClickSubtitle(e){this.$emit("click-subtitle",e)}}};function Le(e,t,n,l,o,s){const i=g("Calendar"),r=g("press-popup");return a(),u("div",{class:O(["press-calendar-index",e.customClass])},[e.poppable?(a(),v(r,{key:0,"custom-class":"press-calendar__popup--"+n.position,"close-icon-class":"press-calendar__close-icon",show:n.show,round:n.round,position:n.position,closeable:e.showTitle||e.showSubtitle,"close-on-click-overlay":n.closeOnClickOverlay,onEnter:s.onOpen,onClose:s.onClose,onAfterEnter:s.onOpened,onAfterLeave:s.onClosed},{default:w(()=>[f(i,{title:e.title,color:e.color,formatter:e.formatter,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,"allow-same-day":e.allowSameDay,type:e.type,"min-date":e.minDate,"max-date":e.maxDate,"row-height":e.rowHeight,"show-mark":e.showMark,"show-title":e.showTitle,"show-confirm":e.showConfirm,"show-subtitle":e.showSubtitle,"safe-area-inset-bottom":e.safeAreaInsetBottom,"first-day-of-week":e.firstDayOfWeek,"scroll-into-view-data":o.scrollIntoViewData,"current-date":o.currentDate,subtitle:o.subtitle,poppable:e.poppable,onOnConfirm:s.onConfirm,onOnClickSubtitle:s.onClickSubtitle,onScrollIntoView:s.scrollIntoView,onOnClickDay:s.onClickDay},null,8,["title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onOnConfirm","onOnClickSubtitle","onScrollIntoView","onOnClickDay"])]),_:1},8,["custom-class","show","round","position","closeable","close-on-click-overlay","onEnter","onClose","onAfterEnter","onAfterLeave"])):(a(),v(i,{key:1,"max-date":e.maxDate,"row-height":e.rowHeight,"show-mark":e.showMark,"show-title":e.showTitle,"show-confirm":e.showConfirm,"show-subtitle":e.showSubtitle,title:e.title,color:e.color,formatter:e.formatter,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,"allow-same-day":e.allowSameDay,type:e.type,"min-date":e.minDate,"safe-area-inset-bottom":e.safeAreaInsetBottom,"first-day-of-week":e.firstDayOfWeek,"scroll-into-view-data":o.scrollIntoViewData,"current-date":o.currentDate,subtitle:o.subtitle,poppable:e.poppable,onScrollIntoView:s.scrollIntoView,onOnClickDay:s.onClickDay,onOnConfirm:s.onConfirm,onOnClickSubtitle:s.onClickSubtitle},null,8,["max-date","row-height","show-mark","show-title","show-confirm","show-subtitle","title","color","formatter","confirm-text","confirm-disabled-text","allow-same-day","type","min-date","safe-area-inset-bottom","first-day-of-week","scroll-into-view-data","current-date","subtitle","poppable","onScrollIntoView","onOnClickDay","onOnConfirm","onOnClickSubtitle"]))],2)}const je=T(qe,[["render",Le],["__scopeId","data-v-f1fd198e"]]),A={color:"",minDate:z,maxDate:U,confirmText:p("calendar.confirm"),confirmDisabledText:p("calendar.confirm"),useFormatter:!1,position:"bottom",maxRange:null,firstDayOfWeek:0};let C=null;const Ge={i18n:{"zh-CN":{in:"入店",out:"离店",today:"今天",laborDay:"劳动节",youthDay:"青年节",calendar:"日历",maxRange:"日期区间最大范围",selectCount:e=>`选择了 ${e} 个日期`,selectSingle:"选择单个日期",selectMultiple:"选择多个日期",selectRange:"选择日期区间",quickSelect:"快捷选择",confirmText:"完成",customColor:"自定义颜色",customRange:"自定义日期范围",customConfirm:"自定义按钮文字",customDayText:"自定义日期文案",customPosition:"自定义弹出位置",customCalendar:"自定义日历",confirmDisabledText:"请选择结束时间",firstDayOfWeek:"自定义周起始日",tiledDisplay:"平铺展示"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",calendar:"Calendar",maxRange:"Max Range",selectCount:e=>`${e} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time",tiledDisplay:"Tiled display"}},components:{PressCalendar:je,PressCell:oe},data(){return C=this,{show:!1,ifShow:!1,type:"single",singleValue:"",multipleValue:"",rangeValue:"",showConfirm:!0,...A}},methods:{tFormatter(e){const t=e.date.getMonth()+1,n=e.date.getDate();return t===5&&(n===1?e.topInfo=C.t("laborDay"):n===4?e.topInfo=C.t("youthDay"):n===11&&(e.topInfo=C.t("today"))),e.type==="start"?e.bottomInfo=C.t("in"):e.type==="end"&&(e.bottomInfo=C.t("out")),e},onDisplay(e,t=!0,n={}){this.type=e,this.showConfirm=t,Object.keys(A).forEach(l=>{this[l]=n[l]||A[l]}),this.show=!0,this.ifShow=!0},onClose(){this.show=!1,setTimeout(()=>{this.ifShow=!1},500)},formatDate(e){return e=new Date(e),`${e.getMonth()+1}/${e.getDate()}`},onConfirm(e){if(console.log("[onConfirm] result: ",e),this.onClose(),this.type==="range"){const[t,n]=e;this.rangeValue=`${this.formatDate(t)} - ${this.formatDate(n)}`,this.onTip([t,n]," - ")}else this.type==="multiple"?(this.multipleValue=this.t("selectCount",e.length),this.onTip(e)):this.type==="single"&&(this.singleValue=this.formatDate(e),this.onTip([e]))},onTip(e,t=", "){const n=o=>se(o.getTime(),"yyyy-MM-dd"),l=e.map(o=>n(o)).join(t);this.onGTip(l,3e3)}}},ze={class:"demo-wrap"};function Ue(e,t,n,l,o,s){const i=g("press-cell"),r=g("demo-block"),m=g("press-calendar");return a(),u("div",ze,[f(r,{title:e.t("basicUsage")},{default:w(()=>[f(i,{title:e.t("selectSingle"),"is-link":"",value:o.singleValue,onClick:t[0]||(t[0]=c=>s.onDisplay("single"))},null,8,["title","value"]),f(i,{title:e.t("selectMultiple"),"is-link":"",value:o.multipleValue,onClick:t[1]||(t[1]=c=>s.onDisplay("multiple"))},null,8,["title","value"]),f(i,{title:e.t("selectRange"),"is-link":"",value:o.rangeValue,onClick:t[2]||(t[2]=c=>s.onDisplay("range"))},null,8,["title","value"])]),_:1},8,["title"]),f(r,{title:e.t("quickSelect")},{default:w(()=>[f(i,{title:e.t("selectSingle"),"is-link":"",value:o.singleValue,onClick:t[3]||(t[3]=c=>s.onDisplay("single",!1))},null,8,["title","value"]),f(i,{title:e.t("selectRange"),"is-link":"",value:o.rangeValue,onClick:t[4]||(t[4]=c=>s.onDisplay("range",!1))},null,8,["title","value"])]),_:1},8,["title"]),f(r,{title:e.t("customCalendar")},{default:w(()=>[f(i,{title:e.t("customColor"),"is-link":"",value:o.singleValue,onClick:t[5]||(t[5]=c=>s.onDisplay("single",!0,{color:"#07c160"}))},null,8,["title","value"]),f(i,{title:e.t("customRange"),"is-link":"",value:o.singleValue,onClick:t[6]||(t[6]=c=>s.onDisplay("single",!0,{minDate:new Date(2010,0,1).getTime(),maxDate:new Date(2010,0,31).getTime()}))},null,8,["title","value"]),f(i,{title:e.t("customConfirm"),"is-link":"",value:o.rangeValue,onClick:t[7]||(t[7]=c=>s.onDisplay("range",!0,{confirmText:e.t("confirmText"),confirmDisabledText:e.t("confirmDisabledText")}))},null,8,["title","value"]),f(i,{title:e.t("customDayText"),"is-link":"",value:o.rangeValue,onClick:t[8]||(t[8]=c=>s.onDisplay("range",!0,{useFormatter:!0}))},null,8,["title","value"]),f(i,{title:e.t("customPosition"),"is-link":"",value:o.singleValue,onClick:t[9]||(t[9]=c=>s.onDisplay("single",!0,{position:"right"}))},null,8,["title","value"]),f(i,{title:e.t("maxRange"),"is-link":"",value:o.rangeValue,onClick:t[10]||(t[10]=c=>s.onDisplay("range",!0,{maxRange:3}))},null,8,["title","value"]),f(i,{title:e.t("firstDayOfWeek"),"is-link":"",value:o.singleValue,onClick:t[11]||(t[11]=c=>s.onDisplay("single",!0,{firstDayOfWeek:1}))},null,8,["title","value"])]),_:1},8,["title"]),o.ifShow?(a(),v(m,{key:0,show:o.show,type:o.type,"show-confirm":o.showConfirm,color:e.color,"min-date":e.minDate,"max-date":e.maxDate,"confirm-text":e.confirmText,"confirm-disabled-text":e.confirmDisabledText,formatter:e.useFormatter?s.tFormatter:null,position:e.position,"max-range":e.maxRange,"first-day-of-week":e.firstDayOfWeek,onClose:s.onClose,onConfirm:s.onConfirm},null,8,["show","type","show-confirm","color","min-date","max-date","confirm-text","confirm-disabled-text","formatter","position","max-range","first-day-of-week","onClose","onConfirm"])):y("",!0),f(r,{title:e.t("tiledDisplay")},{default:w(()=>[f(m,{poppable:!1,"show-confirm":!1,"custom-class":"calendar"})]),_:1},8,["title"])])}const at=T(Ge,[["render",Ue],["__scopeId","data-v-2a34a585"]]);export{at as default};