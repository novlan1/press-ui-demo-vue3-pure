import{v as x,x as H,R as N,_ as $,ag as Y,r as D,o as k,c as C,e as M,ah as T,y as I,ai as _,k as F,a as B,t as E,d as b}from"./index-DccXyPO9.js";import{P as S,p as R}from"./press-picker-plus-nhu-KiEe.js";function A(e){const{year:t,month:n}=v(e);return`${t}/${n}`}const g=(e,t)=>e==="yearMonth"?A(t):t,f="yearMonth-day-hour-minute",P="yearMonth";function v(e){const t=e%12,n=parseInt(`${(e-t)/12}`,10);return t?{year:n,month:t}:{year:n-1,month:12}}const O=new Date().getFullYear();function j(e){return Y(e)&&!isNaN(new Date(e).getTime())}function w(e,t,n){return Math.min(Math.max(e,t),n)}function l(e){return`00${e}`.slice(-2)}function z(e,t){let n=0;const a=Array(e<0?0:e);for(;n<e;)a[n]=t(n),n+=1;return a}function c(e){for(e===void 0&&(e="1");isNaN(parseInt(e,10));)e=e.slice(1);return parseInt(e,10)}function V(e,t){return 32-new Date(e,t-1,32).getDate()}const L={name:"PressDatetimePicker",options:{...x,styleIsolation:"shared"},components:{PressPicker:S},props:Object.assign(Object.assign({},R),{...H,value:{type:null},filter:{type:[Function,null],default:null},type:{type:String,default:"datetime"},showToolbar:{type:Boolean,default:!0},formatter:{type:[Function,null],default:g},minDate:{type:Number,default:new Date(O-10,0,1).getTime()},maxDate:{type:Number,default:new Date(O+10,11,31).getTime()},minHour:{type:Number,default:0},maxHour:{type:Number,default:23},minMinute:{type:Number,default:0},maxMinute:{type:Number,default:59},immediateCheck:{type:Boolean,default:!1},activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}}),emits:["input","input","cancel","confirm","input","change"],data(){return{innerValue:Date.now(),columns:[]}},watch:{value:{handler(){this.updateValue()}},type:{handler(){this.updateValue()}},minDate:{handler(){this.updateValue()}},maxDate:{handler(){this.updateValue()}},minHour:{handler(){this.updateValue()}},maxHour:{handler(){this.updateValue()}},minMinute:{handler(){this.updateValue()}},maxMinute:{handler(){this.updateValue()}}},mounted(){const e=this.correctValue(this.value);this.updateColumnValue(e).then(()=>{this.immediateCheck?this.onChange():this.$emit("input",e)})},methods:{setData(e){Object.keys(e).forEach(t=>{this[t]=e[t]})},set(e){return this.setData(e),new Promise(t=>N(t))},updateValue(){const e=this.correctValue(this.value),t=e===this.innerValue;this.updateColumnValue(e).then(()=>{t||this.$emit("input",e)})},getPicker(){if(this.picker==null){this.picker=this.$refs.pressPicker;const{picker:e}=this,{setColumnValues:t}=e;e.setColumnValues=(...n)=>t.apply(e,[...n,!1])}return this.picker},updateColumns(){const e=this.formatter||g,t=this.getOriginColumns().map(n=>({values:n.values.map(a=>e(n.type,a,this.innerValue))}));return this.set({columns:t})},getOriginColumns(){const{filter:e,innerValue:t}=this;return this.getRanges().map(({type:a,range:i})=>{let s=z(i[1]-i[0]+1,r=>{const o=i[0]+r;return a==="year"||a===P?`${o}`:l(o)});return e&&(s=e(a,s,t)),{type:a,values:s}})},getRanges(){if(this.type==="time")return[{type:"hour",range:[this.minHour,this.maxHour]},{type:"minute",range:[this.minMinute,this.maxMinute]}];const{maxYear:e,maxDate:t,maxMonth:n,maxHour:a,maxMinute:i,maxYearMonth:s}=this.getBoundary("max",this.innerValue),{minYear:r,minDate:o,minMonth:u,minHour:m,minMinute:h,minYearMonth:p}=this.getBoundary("min",this.innerValue),d=[{type:"year",range:[r,e]},{type:"month",range:[u,n]},{type:"day",range:[o,t]},{type:"hour",range:[m,a]},{type:"minute",range:[h,i]}];return this.type==="date"&&d.splice(3,2),this.type==="year-month"&&d.splice(2,3),this.type===f?[{type:P,range:[p,s]},{type:"day",range:[o,t]},{type:"hour",range:[m,a]},{type:"minute",range:[h,i]}]:d},correctValue(e){const t=this.type!=="time";if(t&&!j(e))e=this.minDate;else if(!t&&!e){const{minHour:n}=this;e=`${l(n)}:00`}if(!t){let[n,a]=e.split(":");return n=l(w(n,this.minHour,this.maxHour)),a=l(w(a,this.minMinute,this.maxMinute)),`${n}:${a}`}return e=Math.max(e,this.minDate),e=Math.min(e,this.maxDate),e},getBoundary(e,t){const n=new Date(t),a=new Date(this[`${e}Date`]),i=a.getFullYear();let s=1,r=1,o=0,u=0;e==="max"&&(s=12,r=V(n.getFullYear(),n.getMonth()+1),o=23,u=59),n.getFullYear()===i&&(s=a.getMonth()+1,n.getMonth()+1===s&&(r=a.getDate(),n.getDate()===r&&(o=a.getHours(),n.getHours()===o&&(u=a.getMinutes()))));const m=i*12+s;return{[`${e}Year`]:i,[`${e}Month`]:s,[`${e}Date`]:r,[`${e}Hour`]:o,[`${e}Minute`]:u,[`${e}YearMonth`]:m}},onCancel(){this.$emit("cancel")},onConfirm(){this.$emit("confirm",this.innerValue)},onChange(){let e;const t=this.getPicker(),n=this.getOriginColumns();if(this.type==="time"){const a=t.getIndexes();e=`${+n[0].values[a[0]]}:${+n[1].values[a[1]]}`}else{const i=t.getIndexes().map((p,d)=>n[d].values[p]);let s=c(i[0]),r=c(i[1]);const o=V(s,r);let u=c(i[2]);this.type==="year-month"&&(u=1),u=u>o?o:u;let m=0,h=0;if(this.type==="datetime"&&(m=c(i[3]),h=c(i[4])),this.type===f){const p=v(i[0]);s=p.year,r=p.month,u=c(i[1]),m=c(i[2]),h=c(i[3])}e=new Date(s,r-1,u,m,h)}e=this.correctValue(e),this.updateColumnValue(e).then(()=>{this.$emit("input",e),this.$emit("change",t)})},updateColumnValue(e){let t=[];const{type:n,innerValue:a}=this,i=this.formatter||g,s=this.getPicker();if(n==="time"){const r=e.split(":");t=[i("hour",r[0],a),i("minute",r[1])]}else{const r=new Date(e);t=[i("year",`${r.getFullYear()}`,a),i("month",l(r.getMonth()+1),a)],n==="date"&&t.push(i("day",l(r.getDate()),a)),n==="datetime"&&t.push(i("day",l(r.getDate()),a),i("hour",l(r.getHours()),a),i("minute",l(r.getMinutes()),a)),n===f&&(t=[i(P,r.getFullYear()*12+r.getMonth()+1,a),i("day",l(r.getDate()),a),i("hour",l(r.getHours()),a),i("minute",l(r.getMinutes()),a)])}return this.set({innerValue:e}).then(()=>this.updateColumns()).then(()=>s.setValues(t))}}},q={class:"press-datetime-picker-index"};function U(e,t,n,a,i,s){const r=D("PressPicker");return k(),C("div",q,[M(r,{ref:"pressPicker",class:"press-datetime-picker","active-class":e.activeClass,"toolbar-class":e.toolbarClass,"column-class":e.columnClass,title:e.title,columns:i.columns,"item-height":e.itemHeight,"show-toolbar":e.showToolbar,"visible-item-count":e.visibleItemCount,"confirm-button-text":e.confirmButtonText,"cancel-button-text":e.cancelButtonText,"use-momentum":e.useMomentum,"swipe-duration":e.swipeDuration,onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["active-class","toolbar-class","column-class","title","columns","item-height","show-toolbar","visible-item-count","confirm-button-text","cancel-button-text","use-momentum","swipe-duration","onChange","onConfirm","onCancel"])])}const Z=$(L,[["render",U]]);let y;const G={...T,datetimePicker:{type:Object,default:()=>({})},tip:{type:String,default:""}},J={name:"PressDatetimePickerPopup",options:{virtualHost:!0},components:{PressPopup:I,PressDatetimePicker:Z},mixins:[_(G)],props:{},emits:[],data(){return{currentValue:this.getPropOrData("datetimePicker.value")}},computed:{immediateCheck(){return this.getPropOrData("datetimePicker.immediateCheck")||!0}},watch:{},created(){y=this},mounted(){},methods:{noop(){},emitEvent(e){const t={context:this,value:this.currentValue};this.$emit(e),this.promiseCallback(e,t)},confirm(){this.emitEvent("confirm")},cancel(){this.emitEvent("cancel")},onInput(e){var t;this.currentValue=e,(t=this.getPropOrData("datetimePicker.input"))==null||t(e)},timeFilter(e,t,n){const a=y.getPropOrData("datetimePicker.filter")||null;return a?a(e,t,n):t},timeFormatter(e,t,n){const a=y.getPropOrData("datetimePicker.formatter")||null;return a?a(e,t,n):t}}},K={key:0,class:"press-datetime-picker-popup"},Q={class:"press-datetime-picker-popup__picker"},W={key:0,class:"press-datetime-picker-popup__tip"};function X(e,t,n,a,i,s){const r=D("PressDatetimePicker"),o=D("PressPopup");return e.innerShow?(k(),C("div",K,[M(o,{"show-title":e.getPropOrData("showTitle"),"close-icon":e.getPropOrData("closeIcon"),"arrow-icon":e.getPropOrData("arrowIcon"),title:e.getPropOrData("title"),button:e.getPropOrData("button"),"border-button":e.getPropOrData("borderButton"),"z-index":e.getPropOrData("zIndex"),"popup-class":e.getPropOrData("popupClass"),"close-on-click-overlay":e.getPropOrData("closeOnClickOverlay"),"custom-style":e.getPropOrData("customStyle"),onConfirm:s.confirm,onCancel:s.cancel},{default:F(()=>[B("div",Q,[M(r,{ref:"picker",value:e.getPropOrData("datetimePicker.value"),"show-toolbar":e.getPropOrData("datetimePicker.showToolbar")||!1,"item-height":e.getPropOrData("datetimePicker.itemHeight")||56,type:e.getPropOrData("datetimePicker.type")||"datetime","max-date":e.getPropOrData("datetimePicker.maxDate"),"min-date":e.getPropOrData("datetimePicker.minDate"),"immediate-check":s.immediateCheck,formatter:s.timeFormatter,filter:s.timeFilter,onInput:s.onInput},null,8,["value","show-toolbar","item-height","type","max-date","min-date","immediate-check","formatter","filter","onInput"])]),e.tip?(k(),C("div",W,E(e.tip),1)):b("",!0)]),_:1},8,["show-title","close-icon","arrow-icon","title","button","border-button","z-index","popup-class","close-on-click-overlay","custom-style","onConfirm","onCancel"])])):b("",!0)}const ae=$(J,[["render",X],["__scopeId","data-v-cc309189"]]);export{Z as P,ae as a,g as d,v as g};
