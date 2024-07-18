import{d as _,a as b}from"./press-component-BmHMjgT0.js";import{t as D}from"./touch-Djes3Zvx.js";import{r as T}from"./number-CU9l-NjU.js";import{_ as v,o as a,c,a as f,w as h,i as p,d as m,m as M,n as g,f as C,l,t as u,r as w}from"./index-VLx2MJJu.js";import"./validator-C_cgqHAw.js";const k=.3;let r=[];const S={name:"PressSwipeCell",options:{..._},mixins:[D],props:{disabled:{type:Boolean,default:!1},leftWidth:{type:Number,default:0},rightWidth:{type:Number,default:0},asyncClose:{type:Boolean,default:!1},name:{type:[String,null],default:""},...b},emits:["click","open","close"],data(){return{catchMove:!1,wrapperStyle:"",offset:0}},watch:{leftWidth:{handler(e=0){this.offset>0&&this.swipeMove(e)}},rightWidth:{handler(e=0){this.offset<0&&this.swipeMove(-e)}}},created(){this.offset=0,r.push(this)},destroyed(){r=r.filter(e=>e!==this)},methods:{setData(e){Object.keys(e).forEach(t=>{this[t]=e[t]})},open(e){const{leftWidth:t,rightWidth:o}=this,d=e==="left"?t:-o;this.swipeMove(d),this.$emit("open",{position:e,name:this.name})},close(){this.swipeMove(0)},swipeMove(e=0){this.offset=T(e,-this.rightWidth,this.leftWidth);const t=`translate3d(${this.offset}px, 0, 0)`,o=this.dragging?"none":"transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)";this.setData({wrapperStyle:`
        -webkit-transform: ${t};
        -webkit-transition: ${o};
        transform: ${t};
        transition: ${o};
      `})},swipeLeaveTransition(){const{leftWidth:e,rightWidth:t}=this,{offset:o}=this;t>0&&-o>t*k?this.open("right"):e>0&&o>e*k?this.open("left"):this.swipeMove(0),this.setData({catchMove:!1})},startDrag(e){this.disabled||(this.startOffset=this.offset,this.touchStart(e))},noop(){},onDrag(e){this.disabled||(this.touchMove(e),this.direction==="horizontal"&&(this.dragging=!0,r.filter(t=>t!==this&&t.offset!==0).forEach(t=>t.close()),this.setData({catchMove:!0}),this.swipeMove(this.startOffset+this.deltaX)))},endDrag(){this.disabled||(this.dragging=!1,this.swipeLeaveTransition())},onClick(e){const{key:t="outside"}=e.currentTarget.dataset;this.$emit("click",t),this.offset&&(this.asyncClose?this.$emit("close",{position:t,instance:this,name:this.name}):this.swipeMove(0))}}};function W(e,t,o,d,n,s){return a(),c("div",{class:g(["press-swipe-cell",e.customClass]),"data-key":"cell",onClick:t[2]||(t[2]=h((...i)=>s.onClick&&s.onClick(...i),["stop","prevent"])),onTouchstart:t[3]||(t[3]=(...i)=>s.startDrag&&s.startDrag(...i)),onTouchmoveCapture:t[4]||(t[4]=(...i)=>s.onDrag&&s.onDrag(...i)),onTouchend:t[5]||(t[5]=(...i)=>s.endDrag&&s.endDrag(...i)),onTouchcancel:t[6]||(t[6]=(...i)=>s.endDrag&&s.endDrag(...i))},[f("div",{style:M(n.wrapperStyle),class:g(["press-swipe-cell__content",n.offset?"press-swipe-cell__content--moved":""])},[o.leftWidth?(a(),c("div",{key:0,class:"press-swipe-cell__left","data-key":"left",onClick:t[0]||(t[0]=h((...i)=>s.onClick&&s.onClick(...i),["stop","prevent"]))},[p(e.$slots,"left",{},void 0,!0)])):m("",!0),p(e.$slots,"default",{},void 0,!0),o.rightWidth?(a(),c("div",{key:1,class:"press-swipe-cell__right","data-key":"right",onClick:t[1]||(t[1]=h((...i)=>s.onClick&&s.onClick(...i),["stop","prevent"]))},[p(e.$slots,"right",{},void 0,!0)])):m("",!0)],6)],34)}const O=v(S,[["render",W],["__scopeId","data-v-f38725c0"]]),B={i18n:{"zh-CN":{select:"选择",delete:"删除",collect:"收藏",title:"单元格",confirm:"确定删除吗？",cardTitle:"商品标题",beforeClose:"异步关闭",customContent:"自定义内容"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}},components:{PressSwipeCell:O},data(){return{asyncClose:!1}},methods:{onClick(e){console.log("onClick.val",e),this.onGTip(`click ${e}`)},onClose(...e){console.log("onClose.args",e),this.onGTip("close")},onOpen(...e){console.log("onOpen.args",e),this.onGTip("open")}}},N={class:"demo-wrap"},z={class:"left"},E={class:"content"},A={class:"right"};function G(e,t,o,d,n,s){const i=w("press-swipe-cell"),y=w("demo-block");return a(),c("div",N,[C(y,{title:e.t("basicUsage"),"section-style":"margin:0;"},{default:l(()=>[C(i,{"right-width":65,"left-width":65,"async-close":n.asyncClose,onClick:s.onClick,onClose:s.onClose,onOpen:s.onOpen},{left:l(()=>[f("div",z,u(e.t("select")),1)]),right:l(()=>[f("div",A,u(e.t("delete")),1)]),default:l(()=>[f("div",E,u(e.t("content")),1)]),_:1},8,["async-close","onClick","onClose","onOpen"])]),_:1},8,["title"])])}const I=v(B,[["render",G],["__scopeId","data-v-eb12ff4b"]]);export{I as default};