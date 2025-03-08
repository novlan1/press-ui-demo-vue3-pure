import{B as d,C as c,v as H,a4 as B,x as O,R as A,V as _,_ as V,o,c as l,a,l as m,F as T,q as M,n as S,G as j,t as L,w as D,Q as P,$ as K,a5 as Y,r as C,b as I,d as v,e as U}from"./index-DccXyPO9.js";import{r as x}from"./number-CU9l-NjU.js";import{b as k}from"./parent-map-12wGqNaT.js";import{S as R}from"./scroll-view-IqBhwvIL.js";import{T as z}from"./press-picker-toolbar-D-I1jtxk.js";function E(t){const e=typeof t;return t!==null&&(e==="object"||e==="function")}function F(t,e){return E(t)&&t[e]!=null?t[e]:t}function J(t){return E(t)&&t.html}function q(t){return d({height:c(t.itemHeight*t.visibleItemCount)})}function G(t){const e=c(t.offset+t.itemHeight*(t.visibleItemCount-1)/2);return d({transition:`transform ${t.duration}ms`,"line-height":c(t.itemHeight),transform:`translate3d(0, ${e}, 0)`})}const b={optionText:F,optionTextHtml:J,rootStyle:q,wrapperStyle:G},Q=200,w=300,W=15,X={name:"PressPickerColumn",options:{...H},mixins:[R],...B(k),props:{...O,activeClass:{type:String,default:""},valueKey:{type:String,default:""},className:{type:String,default:""},itemHeight:{type:Number,default:44},visibleItemCount:{type:Number,default:6},initialOptions:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:0},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}},emits:["change"],data(){return{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0,computed:b,touchStartTime:0,momentumOffset:0}},computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return b.rootStyle({itemHeight:t,visibleItemCount:e})},wrapperStyle(){const{offset:t,itemHeight:e,visibleItemCount:s,duration:n}=this;return b.wrapperStyle({offset:t,itemHeight:e,visibleItemCount:s,duration:n})}},watch:{defaultIndex:{handler(t){this.setIndex(t)},immediate:!0},initialOptions:{handler(t){this.options=t,this.setIndex(this.defaultIndex)},deep:!0}},created(){const{defaultIndex:t,initialOptions:e}=this;this.set({currentIndex:t,options:e}).then(()=>{this.setIndex(t)}),this[k].children.push(this)},methods:{setData(t){Object.keys(t).forEach(e=>{this[e]=t[e]})},getCount(){return this.options.length},set(t){return this.setData(t),new Promise(e=>A(e))},onTouchStart(t){this.setData({startY:t.touches[0].clientY,startOffset:this.offset,duration:0,touchStartTime:Date.now(),momentumOffset:this.offset})},onTouchMove(t){if(!t.touches[0])return;const e=t.touches[0].clientY-this.startY,s=x(this.startOffset+e,-(this.getCount()*this.itemHeight),this.itemHeight);this.setData({offset:s});const n=Date.now();n-this.touchStartTime>w&&(this.touchStartTime=n,this.momentumOffset=s)},getIndexByOffset(t){return x(Math.round(-t/this.itemHeight),0,this.getCount()-1)},momentum(t,e){const s=Math.abs(t/e),n=this.offset+s/.003*(t<0?-1:1),u=this.getIndexByOffset(n);this.setData({duration:+this.swipeDuration}),this.setIndex(u,!0)},onTouchEnd(){if(this.offset===this.startOffset)return;const t=this.offset-this.momentumOffset,e=Date.now()-this.touchStartTime;if(e<w&&Math.abs(t)>W&&this.useMomentum){this.momentum(t,e);return}this.setData({duration:Q});const n=this.getIndexByOffset(this.offset);this.setIndex(n,!0)},onClickItem(t){const{index:e}=t.currentTarget.dataset;this.setIndex(e,!0)},adjustIndex(t){const e=this.getCount();t=x(t,0,e);for(let s=t;s<e;s++)if(!this.isDisabled(this.options[s]))return s;for(let s=t-1;s>=0;s--)if(!this.isDisabled(this.options[s]))return s},isDisabled(t){return _(t)&&t.disabled},getOptionText(t){return _(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex(t,e){t=this.adjustIndex(t)||0;const s=-t*this.itemHeight;return t!==this.currentIndex?this.set({offset:s,currentIndex:t}).then(()=>{e&&this.$emit("change",t)}):this.set({offset:s})},setValue(t){const{options:e}=this;for(let s=0;s<e.length;s++)if(this.getOptionText(e[s])===t)return this.setIndex(s);return Promise.resolve()},getValue(){return this.options[this.currentIndex]}}},Z={class:"press-picker-column-index"},$=["data-index"],tt=["innerHTML"];function et(t,e,s,n,u,i){return o(),l("div",Z,[a("div",{class:S(["press-picker-column",t.customClass]),style:m(i.columnStyle),onTouchstart:e[1]||(e[1]=(...r)=>i.onTouchStart&&i.onTouchStart(...r)),onTouchmove:e[2]||(e[2]=D((...r)=>i.onTouchMove&&i.onTouchMove(...r),["stop","prevent"])),onTouchend:e[3]||(e[3]=(...r)=>i.onTouchEnd&&i.onTouchEnd(...r)),onTouchcancel:e[4]||(e[4]=(...r)=>i.onTouchEnd&&i.onTouchEnd(...r))},[a("div",{style:m(i.wrapperStyle),class:"press-picker-column__wrapper"},[(o(!0),l(T,null,M(u.options,(r,h)=>(o(),l("div",{key:r.index,"data-index":h,style:m({height:`${s.itemHeight}px`,lineHeight:`${s.itemHeight}px`}),class:S(["press-ellipsis","press-picker-column__item",{"press-picker-column__item--disabled":r&&r.disabled,"press-picker-column__item--selected":h===u.currentIndex,activeClass:h===u.currentIndex}]),onClick:e[0]||(e[0]=(...g)=>i.onClickItem&&i.onClickItem(...g))},[u.computed.optionTextHtml(r)?(o(),l("div",{key:0,class:"press-picker-column__item-html",innerHTML:u.computed.optionTextHtml(r)},null,8,tt)):(o(),l(T,{key:1},[j(L(u.computed.optionText(r,s.valueKey)),1)],64))],14,$))),128))],4)],38)])}const st=V(X,[["render",et],["__scopeId","data-v-c51a484c"]]),nt={title:{type:String,default:""},showToolbar:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},cancelButtonText:{type:String,default:P("picker.cancel")},confirmButtonText:{type:String,default:P("picker.confirm")},visibleItemCount:{type:Number,default:6},itemHeight:{type:[Number,String],default:44}};function it(t){return d({height:c(t.itemHeight*t.visibleItemCount)})}function rt(t){return d({"background-size":`100% ${c(t.itemHeight*(t.visibleItemCount-1)/2)}`})}function ot(t){return d({height:c(t.itemHeight)})}function ut(t){return Array.isArray(t)?t.length&&!t[0].values?[{values:t}]:t:[]}const p={columnsStyle:it,frameStyle:ot,maskStyle:rt,columns:ut},lt={name:"PressPickerPlus",options:{...H},components:{PickerColumn:st,Loading:K,ToolBar:z},...Y(k),props:{...O,...nt,valueKey:{type:String,default:"text"},toolbarPosition:{type:String,default:"top"},defaultIndex:{type:Number,default:0},columns:{type:Array,default:()=>[]},activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}},emits:["change","confirm","cancel"],data(){return{simple:!0}},computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return p.columnsStyle({itemHeight:t,visibleItemCount:e})},maskStyle(){const{itemHeight:t,visibleItemCount:e}=this;return p.maskStyle({itemHeight:t,visibleItemCount:e})},frameStyle(){const{itemHeight:t}=this;return p.frameStyle({itemHeight:t})},computedColumns(){const{columns:t}=this;return p.columns(t)}},watch:{columns:{handler(t=[]){this.simple=t.length&&!t[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch(()=>{})},immediate:!0}},beforeCreate(){},created(){this.children=[]},mounted(){Array.isArray(this.children)&&this.children.length&&this.setColumns().catch(()=>{})},methods:{noop(){},setColumns(){const e=(this.simple?[{values:this.columns}]:this.columns).map((s,n)=>this.setColumnValues(n,s.values));return Promise.all(e)},emit(t){const{type:e}=t.currentTarget.dataset;this.simple?this.$emit(e,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(e,{value:this.getValues(),index:this.getIndexes()})},onChange(t,e){this.simple?this.$emit("change",{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{value:this.getValues(),index:e})},getColumn(t){return this.children[t]},getColumnValue(t){const e=this.getColumn(t);return e&&e.getValue()},setColumnValue(t,e){const s=this.getColumn(t);return s==null?Promise.reject(new Error("setColumnValue: 对应列不存在")):s.setValue(e)},getColumnIndex(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex(t,e){const s=this.getColumn(t);return s==null?Promise.reject(new Error("setColumnIndex: 对应列不存在")):s.setIndex(e)},getColumnValues(t){return(this.children[t]||{}).options},setColumnValues(t,e,s=!0){const n=this.children[t];return n==null?Promise.reject(new Error("setColumnValues: 对应列不存在")):JSON.stringify(n.options)===JSON.stringify(e)?Promise.resolve():n.set({options:e}).then(()=>{s&&n.setIndex(0)})},getValues(){return this.children.map(t=>t.getValue())},setValues(t){const e=t.map((s,n)=>this.setColumnValue(n,s));return Promise.all(e)},getIndexes(){return this.children.map(t=>t.currentIndex)},setIndexes(t){const e=t.map((s,n)=>this.setColumnIndex(n,s));return Promise.all(e)},resetColumn(t,e=0){const s=this.getColumn(t);if(s==null)return Promise.reject(new Error("setColumnValue: 对应列不存在"));s.setIndex(e)}}},at={class:"press-picker-index"},mt={key:1,class:"press-picker__loading"};function ct(t,e,s,n,u,i){const r=C("ToolBar"),h=C("Loading"),g=C("PickerColumn");return o(),l("div",at,[a("div",{class:S(["press-picker",t.customClass])},[s.toolbarPosition==="top"?(o(),I(r,{key:0,title:t.title,"show-toolbar":t.showToolbar,"cancel-button-text":t.cancelButtonText,"confirm-button-text":t.confirmButtonText,"custom-class":s.toolbarClass,onEmit:i.emit},null,8,["title","show-toolbar","cancel-button-text","confirm-button-text","custom-class","onEmit"])):v("",!0),t.loading?(o(),l("div",mt,[U(h,{color:"#1989fa"})])):v("",!0),a("div",{class:"press-picker__columns",style:m(i.columnStyle),onTouchmove:e[0]||(e[0]=D((...f)=>i.noop&&i.noop(...f),["stop","prevent"]))},[(o(!0),l(T,null,M(i.computedColumns,(f,y)=>(o(),I(g,{ref_for:!0,ref:"pickerColumn",key:y,class:"press-picker__column","data-index":y,"custom-class":s.columnClass,"value-key":s.valueKey,"initial-options":f.values,"default-index":f.defaultIndex||s.defaultIndex,"item-height":t.itemHeight,"visible-item-count":t.visibleItemCount,"active-class":s.activeClass,"use-momentum":s.useMomentum,"swipe-duration":s.swipeDuration,onChange:N=>i.onChange(N,y)},null,8,["data-index","custom-class","value-key","initial-options","default-index","item-height","visible-item-count","active-class","use-momentum","swipe-duration","onChange"]))),128)),a("div",{class:"press-picker__mask",style:m(i.maskStyle)},null,4),a("div",{class:"press-picker__frame press-hairline--top-bottom",style:m(i.frameStyle)},null,4)],36),s.toolbarPosition==="bottom"?(o(),I(r,{key:2,"custom-class":s.toolbarClass},null,8,["custom-class"])):v("",!0)],2)])}const yt=V(lt,[["render",ct],["__scopeId","data-v-836fa3ce"]]);export{yt as P,nt as p};
