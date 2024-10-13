import{E as g,G as l,_ as S,y as C,z as _,o as u,c as d,i as a,n as p,m as f,C as k,I as y,r as v,a as h,F as q,b as x,t as N}from"./index-F6Gg9UHQ.js";import{P,C as z}from"./relation-Ce8eT7mn.js";import{g as c}from"./parent-map-7gZjKT_J.js";import{l as B}from"./link-CpGN79EY.js";function I(e){return g([e.customStyle,{"padding-left":l(e.gutter)}])}const G={rootStyle:I},w={name:"PressGrid",options:{...C,styleIsolation:"shared"},mixins:[P(c)],props:{square:{type:Boolean},gutter:{type:[Number,null],default:0},clickable:{type:Boolean},columnNum:{type:Number,default:4},center:{type:Boolean,default:!0},border:{type:Boolean,default:!0},direction:{type:String,default:""},iconSize:{type:String,default:""},reverse:{type:Boolean,default:!1},customStyle:{type:String,default:""},..._},emits:[],data(){return{computed:G}},watch:{square:{handler(){this.updateChildren()},immediate:!0},gutter:{handler(){this.updateChildren()},immediate:!0},clickable:{handler(){this.updateChildren()},immediate:!0},columnNum:{handler(){this.updateChildren()},immediate:!0},center:{handler(){this.updateChildren()},immediate:!0},border:{handler(){this.updateChildren()},immediate:!0},direction:{handler(){this.updateChildren()},immediate:!0},iconSize:{handler(){this.updateChildren()},immediate:!0},reverse:{handler(){this.updateChildren()},immediate:!0}},created(){this.children=[]},methods:{updateChildren(){this.children&&this.children.forEach(e=>{e.updateStyle()})}}};function E(e,i,t,n,r,s){return u(),d("div",{class:p(`press-grid ${e.customClass} `+(t.border&&!t.gutter?"press-hairline--top":"")),style:f(r.computed.rootStyle({customStyle:t.customStyle,gutter:t.gutter}))},[a(e.$slots,"default",{},void 0,!0)],6)}const J=S(w,[["render",E],["__scopeId","data-v-c3f97dd8"]]);function D(e){const i=`${100/e.columnNum}%`;return g({width:i,"padding-top":e.square?i:null,"padding-right":l(e.gutter),"margin-top":e.index>=e.columnNum&&!e.square?l(e.gutter):null})}function F(e){return e.square?g({right:l(e.gutter),bottom:l(e.gutter),height:"auto",position:"absolute"}):""}const M={wrapperStyle:D,contentStyle:F},R={name:"PressGridItem",options:{...C,styleIsolation:"shared",virtualHost:!0},components:{PressIconPlus:k},mixins:[z(c),B],props:{icon:{type:String,default:""},iconColor:{type:String,default:""},iconPrefix:{type:String,default:"press-icon-plus"},dot:Boolean,info:{type:String,default:""},badge:{type:String,default:""},text:{type:String,default:""},useSlot:Boolean,..._},emits:["click"],data(){return{viewStyle:"",computed:M,utils:y,square:!1,gutter:0,clickable:!1,columnNum:4,center:!0,border:!0,direction:"",iconSize:"",reverse:!1}},computed:{gridContentClass(){const{direction:e,center:i,square:t,reverse:n,clickable:r,border:s,gutter:o}=this;return`${y.bem2("grid-item__content",[e,{center:i,square:t,reverse:n,clickable:r,surround:s&&o}])} ${s?"press-hairline--surround":""}`}},mounted(){this.updateStyle()},methods:{updateStyle(){if(!this[c])return;const{columnNum:e,border:i,square:t,gutter:n,clickable:r,center:s,direction:o,reverse:m,iconSize:b}=this[c];this.center=s,this.border=i,this.square=t,this.gutter=n,this.clickable=r,this.direction=o,this.reverse=m,this.iconSize=b,this.columnNum=e},onClick(){this.$emit("click"),this.jumpLink()}}},j={class:"press-grid-item__icon"},A={class:"press-grid-item__text"},H={key:0};function L(e,i,t,n,r,s){const o=v("press-icon-plus");return u(),d("div",{class:p(`${e.customClass} `+r.utils.bem2("grid-item",{square:r.square})),style:f(r.computed.wrapperStyle({square:r.square,gutter:r.gutter,columnNum:r.columnNum,index:e.index})),onClick:i[0]||(i[0]=(...m)=>s.onClick&&s.onClick(...m))},[h("div",{class:p(s.gridContentClass),style:f(r.computed.contentStyle({square:r.square,gutter:r.gutter}))},[t.useSlot?a(e.$slots,"default",{key:0},void 0,!0):(u(),d(q,{key:1},[h("div",j,[t.icon?(u(),x(o,{key:0,name:t.icon,color:t.iconColor,"class-prefix":t.iconPrefix,dot:t.dot,info:t.badge||t.info,size:r.iconSize},null,8,["name","color","class-prefix","dot","info","size"])):a(e.$slots,"icon",{key:1},void 0,!0)]),h("div",A,[t.text?(u(),d("span",H,N(t.text),1)):a(e.$slots,"text",{key:1},void 0,!0)])],64))],6)],6)}const K=S(R,[["render",L],["__scopeId","data-v-00db835e"]]);export{J as P,K as a};
