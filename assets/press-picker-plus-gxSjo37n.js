import{s as f}from"./utils-Do31p4kb.js";import{a as m}from"./add-unit-Df5pRFBE.js";import{r as b}from"./number-CU9l-NjU.js";import{d as H,t as A,a as w,n as D,i as V,b as j}from"./press-component-DoZYj-_b.js";import{d as T}from"./parent-map-BqFbVUej.js";import{_ as P,o,c as l,a as u,v as c,F as B,i as O,x as v,t as y,w as E,d,r as x,b as _,f as K}from"./index-BXJiSO9X.js";import{P as Y}from"./press-loading-plus-DAf2CFYh.js";import{t as C}from"./index-8MGmyJdE.js";function M(t){const e=typeof t;return t!==null&&(e==="object"||e==="function")}function L(t,e){return M(t)&&t[e]!=null?t[e]:t}function z(t){return f({height:m(t.itemHeight*t.visibleItemCount)})}function F(t){const e=m(t.offset+t.itemHeight*(t.visibleItemCount-1)/2);return f({transition:`transform ${t.duration}ms`,"line-height":m(t.itemHeight),transform:`translate3d(0, ${e}, 0)`})}const S={optionText:L,rootStyle:z,wrapperStyle:F},R=200,U={name:"PressPickerColumn",options:{...H},...A(T),props:{...w,activeClass:{type:String,default:""},valueKey:{type:String,default:""},className:{type:String,default:""},itemHeight:{type:Number,default:44},visibleItemCount:{type:Number,default:6},initialOptions:{type:Array,default:()=>[]},defaultIndex:{type:Number,default:0}},emits:["change"],data(){return{startY:0,offset:0,duration:0,startOffset:0,options:[],currentIndex:0,computed:S}},computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return S.rootStyle({itemHeight:t,visibleItemCount:e})},wrapperStyle(){const{offset:t,itemHeight:e,visibleItemCount:s,duration:r}=this;return S.wrapperStyle({offset:t,itemHeight:e,visibleItemCount:s,duration:r})}},watch:{defaultIndex:{handler(t){this.setIndex(t)},immediate:!0},initialOptions:{handler(t){this.options=t,this.setIndex(this.defaultIndex)},deep:!0}},created(){const{defaultIndex:t,initialOptions:e}=this;this.set({currentIndex:t,options:e}).then(()=>{this.setIndex(t)}),this[T].children.push(this)},methods:{setData(t){Object.keys(t).forEach(e=>{this[e]=t[e]})},getCount(){return this.options.length},set(t){return this.setData(t),new Promise(e=>D(e))},onTouchStart(t){this.setData({startY:t.touches[0].clientY,startOffset:this.offset,duration:0})},onTouchMove(t){if(!t.touches[0])return;const e=t.touches[0].clientY-this.startY;this.setData({offset:b(this.startOffset+e,-(this.getCount()*this.itemHeight),this.itemHeight)})},onTouchEnd(){if(this.offset!==this.startOffset){this.setData({duration:R});const t=b(Math.round(-this.offset/this.itemHeight),0,this.getCount()-1);this.setIndex(t,!0)}},onClickItem(t){const{index:e}=t.currentTarget.dataset;this.setIndex(e,!0)},adjustIndex(t){const e=this.getCount();t=b(t,0,e);for(let s=t;s<e;s++)if(!this.isDisabled(this.options[s]))return s;for(let s=t-1;s>=0;s--)if(!this.isDisabled(this.options[s]))return s},isDisabled(t){return V(t)&&t.disabled},getOptionText(t){return V(t)&&this.valueKey in t?t[this.valueKey]:t},setIndex(t,e){t=this.adjustIndex(t)||0;const s=-t*this.itemHeight;return t!==this.currentIndex?this.set({offset:s,currentIndex:t}).then(()=>{e&&this.$emit("change",t)}):this.set({offset:s})},setValue(t){const{options:e}=this;for(let s=0;s<e.length;s++)if(this.getOptionText(e[s])===t)return this.setIndex(s);return Promise.resolve()},getValue(){return this.options[this.currentIndex]}}},J={class:"press-picker-column-index"},q=["data-index"];function G(t,e,s,r,a,n){return o(),l("div",J,[u("div",{class:v(["press-picker-column",t.customClass]),style:c(n.columnStyle),onTouchstart:e[1]||(e[1]=(...i)=>n.onTouchStart&&n.onTouchStart(...i)),onTouchmove:e[2]||(e[2]=E((...i)=>n.onTouchMove&&n.onTouchMove(...i),["stop","prevent"])),onTouchend:e[3]||(e[3]=(...i)=>n.onTouchEnd&&n.onTouchEnd(...i)),onTouchcancel:e[4]||(e[4]=(...i)=>n.onTouchEnd&&n.onTouchEnd(...i))},[u("div",{style:c(n.wrapperStyle)},[(o(!0),l(B,null,O(a.options,(i,h)=>(o(),l("div",{key:i.index,"data-index":h,style:c({height:`${s.itemHeight}px`,lineHeight:`${s.itemHeight}px`}),class:v(["press-ellipsis","press-picker-column__item",{"press-picker-column__item--disabled":i&&i.disabled,"press-picker-column__item--selected":h===a.currentIndex,activeClass:h===a.currentIndex}]),onClick:e[0]||(e[0]=(...k)=>n.onClickItem&&n.onClickItem(...k))},y(a.computed.optionText(i,s.valueKey)),15,q))),128))],4)],38)])}const Q=P(U,[["render",G],["__scopeId","data-v-0b93629e"]]),W={props:{title:{type:String,default:""},showToolbar:Boolean,cancelButtonText:{type:String,default:C("picker.cancel")},confirmButtonText:{type:String,default:C("picker.confirm")},customClass:{type:String,default:""}},methods:{emit(...t){this.$emit("emit",...t)}}},X={key:0,class:"press-picker__toolbar toolbar-class"},Z={key:0,class:"press-picker__title press-ellipsis"};function $(t,e,s,r,a,n){return o(),l("div",{class:v(["press-picker-toolbar",s.customClass])},[s.showToolbar?(o(),l("div",X,[u("div",{class:"press-picker__cancel","hover-class":"press-picker__cancel--hover","hover-stay-time":"70","data-type":"cancel",onClick:e[0]||(e[0]=(...i)=>n.emit&&n.emit(...i))},y(s.cancelButtonText),1),s.title?(o(),l("div",Z,y(s.title),1)):d("",!0),u("div",{class:"press-picker__confirm","hover-class":"press-picker__confirm--hover","hover-stay-time":"70","data-type":"confirm",onClick:e[1]||(e[1]=(...i)=>n.emit&&n.emit(...i))},y(s.confirmButtonText),1)])):d("",!0)],2)}const tt=P(W,[["render",$],["__scopeId","data-v-60141d0d"]]),et={title:{type:String,default:""},showToolbar:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},cancelButtonText:{type:String,default:C("picker.cancel")},confirmButtonText:{type:String,default:C("picker.confirm")},visibleItemCount:{type:Number,default:6},itemHeight:{type:[Number,String],default:44}};function st(t){return f({height:m(t.itemHeight*t.visibleItemCount)})}function nt(t){return f({"background-size":`100% ${m(t.itemHeight*(t.visibleItemCount-1)/2)}`})}function it(t){return f({height:m(t.itemHeight)})}function rt(t){return Array.isArray(t)?t.length&&!t[0].values?[{values:t}]:t:[]}const g={columnsStyle:st,frameStyle:it,maskStyle:nt,columns:rt},ot={name:"PressPickerPlus",options:{...H},components:{PickerColumn:Q,Loading:Y,ToolBar:tt},...j(T),props:{...w,...et,valueKey:{type:String,default:"text"},toolbarPosition:{type:String,default:"top"},defaultIndex:{type:Number,default:0},columns:{type:Array,default:()=>[]},activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""}},emits:["change","confirm","cancel"],data(){return{simple:!0}},computed:{columnStyle(){const{itemHeight:t,visibleItemCount:e}=this;return g.columnsStyle({itemHeight:t,visibleItemCount:e})},maskStyle(){const{itemHeight:t,visibleItemCount:e}=this;return g.maskStyle({itemHeight:t,visibleItemCount:e})},frameStyle(){const{itemHeight:t}=this;return g.frameStyle({itemHeight:t})},computedColumns(){const{columns:t}=this;return g.columns(t)}},watch:{columns:{handler(t=[]){this.simple=t.length&&!t[0].values,Array.isArray(this.children)&&this.children.length&&this.setColumns().catch(()=>{})},immediate:!0}},beforeCreate(){},created(){this.children=[]},mounted(){Array.isArray(this.children)&&this.children.length&&this.setColumns().catch(()=>{})},methods:{noop(){},setColumns(){const e=(this.simple?[{values:this.columns}]:this.columns).map((s,r)=>this.setColumnValues(r,s.values));return Promise.all(e)},emit(t){const{type:e}=t.currentTarget.dataset;this.simple?this.$emit(e,{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit(e,{value:this.getValues(),index:this.getIndexes()})},onChange(t,e){this.simple?this.$emit("change",{value:this.getColumnValue(0),index:this.getColumnIndex(0)}):this.$emit("change",{value:this.getValues(),index:e})},getColumn(t){return this.children[t]},getColumnValue(t){const e=this.getColumn(t);return e&&e.getValue()},setColumnValue(t,e){const s=this.getColumn(t);return s==null?Promise.reject(new Error("setColumnValue: 对应列不存在")):s.setValue(e)},getColumnIndex(t){return(this.getColumn(t)||{}).currentIndex},setColumnIndex(t,e){const s=this.getColumn(t);return s==null?Promise.reject(new Error("setColumnIndex: 对应列不存在")):s.setIndex(e)},getColumnValues(t){return(this.children[t]||{}).options},setColumnValues(t,e,s=!0){const r=this.children[t];return r==null?Promise.reject(new Error("setColumnValues: 对应列不存在")):JSON.stringify(r.options)===JSON.stringify(e)?Promise.resolve():r.set({options:e}).then(()=>{s&&r.setIndex(0)})},getValues(){return this.children.map(t=>t.getValue())},setValues(t){const e=t.map((s,r)=>this.setColumnValue(r,s));return Promise.all(e)},getIndexes(){return this.children.map(t=>t.currentIndex)},setIndexes(t){const e=t.map((s,r)=>this.setColumnIndex(r,s));return Promise.all(e)}}},lt={class:"press-picker-index"},ut={key:1,class:"press-picker__loading"};function at(t,e,s,r,a,n){const i=x("ToolBar"),h=x("loading"),k=x("picker-column");return o(),l("div",lt,[u("div",{class:v(["press-picker",t.customClass])},[s.toolbarPosition==="top"?(o(),_(i,{key:0,title:t.title,"show-toolbar":t.showToolbar,"cancel-button-text":t.cancelButtonText,"confirm-button-text":t.confirmButtonText,"custom-class":s.toolbarClass,onEmit:n.emit},null,8,["title","show-toolbar","cancel-button-text","confirm-button-text","custom-class","onEmit"])):d("",!0),t.loading?(o(),l("div",ut,[K(h,{color:"#1989fa"})])):d("",!0),u("div",{class:"press-picker__columns",style:c(n.columnStyle),onTouchmove:e[0]||(e[0]=E((...p)=>n.noop&&n.noop(...p),["stop","prevent"]))},[(o(!0),l(B,null,O(n.computedColumns,(p,I)=>(o(),_(k,{ref_for:!0,ref:"pickerColumn",key:I,class:"press-picker__column","data-index":I,"custom-class":s.columnClass,"value-key":s.valueKey,"initial-options":p.values,"default-index":p.defaultIndex||s.defaultIndex,"item-height":t.itemHeight,"visible-item-count":t.visibleItemCount,"active-class":s.activeClass,onChange:N=>n.onChange(N,I)},null,8,["data-index","custom-class","value-key","initial-options","default-index","item-height","visible-item-count","active-class","onChange"]))),128)),u("div",{class:"press-picker__mask",style:c(n.maskStyle)},null,4),u("div",{class:"press-picker__frame press-hairline--top-bottom",style:c(n.frameStyle)},null,4)],36),s.toolbarPosition==="bottom"?(o(),_(i,{key:2,"custom-class":s.toolbarClass},null,8,["custom-class"])):d("",!0)],2)])}const vt=P(ot,[["render",at],["__scopeId","data-v-78362788"]]);export{vt as P,et as p};
