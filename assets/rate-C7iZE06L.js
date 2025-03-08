import{_ as y,z as b,E as m,B as v,R as S,r as f,o as i,c as C,a as I,F as k,q as B,n as h,l as g,e as a,b as V,d as P,k as r}from"./index-DccXyPO9.js";import{c as w}from"./rect-o8Jq-PR4.js";const z={name:"PressRate",components:{PressIconPlus:b},field:!0,props:{value:{type:Number,default:0},readonly:Boolean,disabled:Boolean,allowHalf:Boolean,size:{type:[String,Number],default:""},icon:{type:String,default:"star"},voidIcon:{type:String,default:"star-o"},color:{type:String,default:""},voidColor:{type:String,default:""},disabledColor:{type:String,default:""},count:{type:Number,default:5},gutter:{type:[Number,String],default:""},touchable:{type:Boolean,default:!0},customClass:{type:String,default:""},iconClass:{type:String,default:""}},emits:["input","change"],data(){return{innerValue:0,innerCountArray:Array.from({length:5}),utils:m,style:v}},computed:{iconStyle(){return v({fontSize:m.addUnit(this.size)})},iconCustomStyle(){return""}},watch:{value:{handler(e){e!==this.innerValue&&(this.innerValue=e)},immediate:!0},count:{handler(e){this.innerCountArray=Array.from({length:e})},immediate:!0}},methods:{onSelect(e){!this.disabled&&!this.readonly&&(this.innerValue=e+1,S(()=>{this.$emit("input",e+1),this.$emit("change",e+1)}))},onTouchMove(e){const{touchable:c}=this;if(!c)return;const{clientX:t}=e.touches[0];w(this,".press-rate__icon").then(d=>{const n=d.sort((o,u)=>o.x-u.x).find(o=>t>=o.left&&t<=o.right),l=d.indexOf(n);n!=null&&this.onSelect(l)})},getIconBaseClass(e){const{disabled:c,innerValue:t}=this;return m.bem2("rate__icon",[{disabled:c,full:e+1<=t}])},getIconHalfClass(e){const{disabled:c,innerValue:t}=this;return m.bem2("rate__icon",["half",{disabled:c,full:e+.5<=t}])},getIconBaseCustomClass(e){return this.iconClass},getIconHalfCustomClass(e){return this.iconClass}}},N={class:"press-rate-index"};function R(e,c,t,d,n,l){const o=f("PressIconPlus");return i(),C("div",N,[I("div",{class:h([n.utils.bem2("rate"),t.customClass]),onTouchmove:c[0]||(c[0]=(...u)=>l.onTouchMove&&l.onTouchMove(...u))},[(i(!0),C(k,null,B(n.innerCountArray,(u,s)=>(i(),C("div",{key:s,class:h([n.utils.bem2("rate__item")]),style:g(""+n.style({paddingRight:s!==t.count-1?n.utils.addUnit(t.gutter):null}))},[a(o,{name:s+1<=n.innerValue?t.icon:t.voidIcon,class:h([l.getIconBaseClass(s)]),style:g(""+l.iconStyle),"custom-class":l.getIconBaseCustomClass(s),"custom-style":l.iconCustomStyle,"data-score":s,color:t.disabled?t.disabledColor:s+1<=n.innerValue?t.color:t.voidColor,onClick:_=>l.onSelect(s)},null,8,["name","class","style","custom-class","custom-style","data-score","color","onClick"]),t.allowHalf?(i(),V(o,{key:0,name:s+.5<=n.innerValue?t.icon:t.voidIcon,class:h([l.getIconHalfClass(s)]),style:g(""+l.iconStyle),"custom-class":l.getIconHalfCustomClass(s),"custom-style":l.iconCustomStyle,"data-score":s-.5,color:t.disabled?t.disabledColor:s+.5<=n.innerValue?t.color:t.voidColor,onClick:_=>l.onSelect(s-.5)},null,8,["name","class","style","custom-class","custom-style","data-score","color","onClick"])):P("",!0)],6))),128))],34)])}const E=y(z,[["render",R],["__scopeId","data-v-d5c58575"]]),H={i18n:{"zh-CN":{halfStar:"半星",disabled:"禁用状态",customIcon:"自定义图标",customImage:"自定义图片",customStyle:"自定义样式",customCount:"自定义数量",readonly:"只读状态",changeEvent:"监听 change 事件",toastContent:e=>`当前值：${e}`},"en-US":{halfStar:"Half Star",disabled:"Disabled",customImage:"Custom Image",customIcon:"Custom Icon",customStyle:"Custom Style",customCount:"Custom Count",readonly:"Readonly",changeEvent:"Change Event",toastContent:e=>`current value：${e}`}},components:{PressRate:E},data(){return{value:3,half:2.5}},methods:{onChange(e){this.onGTip(`value: ${e}`)}}},A={class:"wrap"};function T(e,c,t,d,n,l){const o=f("PressRate"),u=f("demo-block");return i(),C("div",A,[a(u,{title:e.t("basicUsage")},{default:r(()=>[a(o,{value:3,"custom-class":"press-rate--demo-class",onChange:l.onChange},null,8,["onChange"])]),_:1},8,["title"]),a(u,{title:e.t("customIcon")},{default:r(()=>[a(o,{value:n.value,icon:"like","void-icon":"like-o",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("customImage")},{default:r(()=>[a(o,{value:n.value,"void-icon":"https://image-1251917893.file.myqcloud.com/Esports/new/user/star.png",icon:"https://image-1251917893.file.myqcloud.com/Esports/new/user/sel-star.png",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("customStyle")},{default:r(()=>[a(o,{value:n.value,size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("halfStar")},{default:r(()=>[a(o,{value:n.half,"allow-half":"","void-icon":"star","void-color":"#eee",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("customCount")},{default:r(()=>[a(o,{value:n.value,count:6,onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("disabled")},{default:r(()=>[a(o,{value:n.value,disabled:"",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"]),a(u,{title:e.t("readonly")},{default:r(()=>[a(o,{value:n.value,readonly:"",onChange:l.onChange},null,8,["value","onChange"])]),_:1},8,["title"])])}const M=y(H,[["render",T],["__scopeId","data-v-b82b1f1d"]]);export{M as default};
