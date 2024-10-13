import{g as S,b as w}from"./rect-B27xLIPj.js";import{_ as P,C,r as m,o as l,c as h,n as d,m as g,a as u,d as b,F as k,v as y,t as v,i as x,f,w as z,l as _,p as T,e as F}from"./index-F6Gg9UHQ.js";import{P as B}from"./press-cell-B51DLGhM.js";import"./link-CpGN79EY.js";import"./event-BwRIw3Q8.js";const M={name:"PressFab",components:{PressIconPlus:C},props:{pattern:{type:Object,default(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0},top:{type:Number,default:0},bottomThreshold:{type:Number,default:20},initX:{type:Number,default:12},initY:{type:Number,default:62}},emits:["fabClick","trigger"],data(){return{fabShow:!1,isShow:!1,isAndroidNVue:"other"==="android",styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff",iconFontSize:32},btnSwitchPos:{x:0,y:0},fabSize:{width:55,height:55},switchPos:{hasMoved:!1,x:0,y:0,startX:0,startY:0,endX:0,endY:0}}},computed:{contentWidth(){return`${(this.content.length+1)*55+15}px`},contentWidthMin(){return"55px"},boxWidth(){return this.getPosition(3,"horizontal")},boxHeight(){return this.getPosition(3,"vertical")},leftBottom(){return this.getPosition(0,"left","bottom")},rightBottom(){return this.getPosition(0,"right","bottom")},leftTop(){return this.getPosition(0,"left","top")},rightTop(){return this.getPosition(0,"right","top")},flexDirectionStart(){return this.getPosition(1,"vertical","top")},flexDirectionEnd(){return this.getPosition(1,"vertical","bottom")},horizontalLeft(){return this.getPosition(2,"horizontal","left")},horizontalRight(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler(t){this.styles=Object.assign({},this.styles,t)},deep:!0}},created(){this.isShow=this.show,this.top===0&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern),this.btnSwitchPos={x:this.initX,y:this.initY},this.switchPos.x=this.btnSwitchPos.x,this.switchPos.y=this.btnSwitchPos.y},mounted(){S(this,".press-fab__plus").then(t=>{this.fabSize.width=t.width,this.fabSize.height=t.height})},methods:{getSwitchButtonSafeAreaXY(t,e){const{fabSize:s,top:r,bottomThreshold:i}=this,{windowWidth:o,windowHeight:a,windowBottom:n}=w(),c=o,p=a-r;return t>c-s.width&&(t=c-s.width),e>p-s.height&&(e=p-s.height),t<0&&(t=0),e<i+n&&(e=i+n),[t,e]},onClick(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open(){this.isShow=!0},close(){this.isShow=!1},onItemClick(t,e){this.isShow&&this.$emit("trigger",{index:t,item:e})},getPosition(t,e,s){return t===0?this.horizontal===e&&this.vertical===s:t===1?this.direction===e&&this.vertical===s:t===2?this.direction===e&&this.horizontal===s:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin},onTouchStart(t){this.switchPos.startX=t.touches[0].pageX,this.switchPos.startY=t.touches[0].pageY},onTouchEnd(){this.switchPos.hasMoved&&(this.switchPos.startX=0,this.switchPos.startY=0,this.switchPos.hasMoved=!1,this.setSwitchPosition(this.switchPos.endX,this.switchPos.endY))},onTouchMove(t){if(t.touches.length<=0)return;const e=t.touches[0].pageX-this.switchPos.startX,s=t.touches[0].pageY-this.switchPos.startY;let r=Math.floor(this.switchPos.x-e),i=Math.floor(this.switchPos.y-s);[r,i]=this.getSwitchButtonSafeAreaXY(r,i),this.btnSwitchPos.x=r,this.btnSwitchPos.y=i,this.switchPos.endX=r,this.switchPos.endY=i,this.switchPos.hasMoved=!0,t.preventDefault(),t.stopPropagation()},setSwitchPosition(t,e){[t,e]=this.getSwitchButtonSafeAreaXY(t,e),this.switchPos.x=t,this.switchPos.y=e,this.btnSwitchPos.x=t,this.btnSwitchPos.y=e}}},D={class:"press-cursor-point"},I={key:0,class:"press-fab__item press-fab__item--first"},X=["onClick"],Y=["src"],N={key:1,class:"press-fab__item press-fab__item--first"};function W(t,e,s,r,i,o){const a=m("press-icon-plus");return l(),h("div",D,[s.popMenu&&(o.leftBottom||o.rightBottom||o.leftTop||o.rightTop)&&s.content.length>0?(l(),h("div",{key:0,class:d(["press-fab",{"press-fab--leftBottom":o.leftBottom,"press-fab--rightBottom":o.rightBottom,"press-fab--leftTop":o.leftTop,"press-fab--rightTop":o.rightTop}]),style:g({right:`${i.btnSwitchPos.x}px`,bottom:`${i.btnSwitchPos.y}px`})},[u("div",{class:d([{"press-fab__content--left":s.horizontal==="left","press-fab__content--right":s.horizontal==="right","press-fab__content--flexDirection":s.direction==="vertical","press-fab__content--flexDirectionStart":o.flexDirectionStart,"press-fab__content--flexDirectionEnd":o.flexDirectionEnd,"press-fab__content--other-platform":!i.isAndroidNVue},"press-fab__content"]),style:g({width:o.boxWidth,height:o.boxHeight,backgroundColor:i.styles.backgroundColor}),elevation:"5"},[o.flexDirectionStart||o.horizontalLeft?(l(),h("div",I)):b("",!0),(l(!0),h(k,null,y(s.content,(n,c)=>(l(),h("div",{key:c,class:d([{"press-fab__item--active":i.isShow},"press-fab__item"]),onClick:p=>o.onItemClick(c,n)},[u("img",{src:n.active?n.selectedIconPath:n.iconPath,class:"press-fab__item-image",mode:"aspectFit"},null,8,Y),u("span",{class:"press-fab__item-text",style:g({color:n.active?i.styles.selectedColor:i.styles.color})},v(n.text),5)],10,X))),128)),o.flexDirectionEnd||o.horizontalRight?(l(),h("div",N)):b("",!0)],6)],6)):b("",!0),u("div",{class:d([{"press-fab__content--other-platform":!i.isAndroidNVue},"press-fab__circle press-fab__plus"]),style:g({"background-color":i.styles.buttonColor,right:`${i.btnSwitchPos.x}px`,bottom:`${i.btnSwitchPos.y}px`}),onClick:e[0]||(e[0]=(...n)=>o.onClick&&o.onClick(...n)),onTouchstart:e[1]||(e[1]=(...n)=>o.onTouchStart&&o.onTouchStart(...n)),onTouchend:e[2]||(e[2]=(...n)=>o.onTouchEnd&&o.onTouchEnd(...n)),onTouchmove:e[3]||(e[3]=z((...n)=>o.onTouchMove&&o.onTouchMove(...n),["stop","prevent"]))},[x(t.$slots,"default",{},()=>[f(a,{name:"cross",color:i.styles.iconColor,size:i.styles.iconFontSize,class:d(["press-fab-circle-icon",{"press-fab__plus--active":i.isShow&&s.content.length>0}])},null,8,["color","size","class"])],!0)],38)])}const A=P(M,[["render",W],["__scopeId","data-v-2cafc2c1"]]),E={i18n:{"zh-CN":{toggleDirection:"切换方向",changeColor:"修改颜色",prompt:"提示",you:"您",image:"相册",home:"首页",star:"收藏",modalContent:(t,e)=>`你${e?"选中了":"取消了"}${t}`},"en-US":{toggleDirection:"Direction",changeColor:"Color",prompt:"Prompt",selected:"selected",cancelled:"cancelled",you:"You",image:"image",home:"home",star:"star",modalContent:(t,e)=>`You ${e?"selected":"cancelled"} ${t}`}},components:{PressFab:A,PressCell:B},data(){var t;return{title:"press-fab",horizontal:"right",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_394e9b73a2b402c417.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ddaf193c855d2d4b93.png",text:this.t("image"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_48f3dce2ae13561480.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_119ad562534f721c7f.png",text:this.t("home"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_069e81d6aae9e308e1.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_eda1e7d95cb62dc6e1.png",text:this.t("star"),active:!1}],slotInitX:Math.max(((t=w())==null?void 0:t.windowWidth)-66,0)}},onBackPress(){return this.$refs.fabRef.isShow?(this.$refs.fabRef.close(),!0):!1},methods:{trigger(t){const e=this,{t:s,content:r}=this;console.log("[trigger] e: ",t),this.content[t.index].active=!t.item.active,uni.showModal({title:s("prompt"),content:this.t("modalContent",t.item.text,r[t.index].active),confirmText:s("confirm"),cancelText:s("cancel"),success(i){i.confirm?e.onGTip("confirm"):i.cancel&&e.onGTip("cancel")}})},fabClick(){console.log("[fabClick]"),this.onGTip("[click]")},fabClickSlot(){console.log("[fabClickSlot]"),this.onGTip("[click]")},switchBtn(t,e){const{onClick:s,isShow:r}=this.$refs.fabRef;r||s==null||s(),t===0?this.direction=this.direction==="horizontal"?"vertical":"horizontal":(this.horizontal=t,this.vertical=e)},switchColor(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}},R=t=>(T("data-v-8db27abe"),t=t(),F(),t),q={class:"demo-wrap"},V=R(()=>u("span",{class:"debug"},"OK",-1));function G(t,e,s,r,i,o){const a=m("press-cell"),n=m("demo-block"),c=m("PressFab");return l(),h("div",q,[f(n,{title:t.t("basicUsage")},{default:_(()=>[f(a,{title:t.t("toggleDirection"),"is-link":"",onClick:e[0]||(e[0]=p=>o.switchBtn(0))},null,8,["title"]),f(a,{title:t.t("changeColor"),"is-link":"",onClick:o.switchColor},null,8,["title","onClick"])]),_:1},8,["title"]),f(c,{ref:"fabRef",pattern:i.pattern,content:i.content,horizontal:i.horizontal,vertical:i.vertical,direction:i.direction,onTrigger:o.trigger,onFabClick:o.fabClick},null,8,["pattern","content","horizontal","vertical","direction","onTrigger","onFabClick"]),f(c,{"init-x":i.slotInitX,onFabClick:o.fabClickSlot},{default:_(()=>[V]),_:1},8,["init-x","onFabClick"])])}const K=P(E,[["render",G],["__scopeId","data-v-8db27abe"]]);export{K as default};
