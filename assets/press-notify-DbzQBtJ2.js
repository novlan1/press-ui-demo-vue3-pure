import{P as c}from"./press-transition-DzNVel1u.js";import{W as u}from"./color-DciZLlTH.js";import{c as m}from"./rect-ZZRvyvMD.js";import{d as f,a as y}from"./press-component-BYCAM0Tw.js";import{s as l}from"./utils-Do31p4kb.js";import{a as g}from"./add-unit-Df5pRFBE.js";import{g as h}from"./event-DUjdombs.js";import{g as S}from"./dialog-mixin-CfZcTFQu.js";import{_ as k,r as B,o as s,c as a,f as C,n as _,a as n,x as I,v as r,d as T,t as v}from"./index-DU6LSpJC.js";function w(t){return l({"z-index":t.zIndex,top:g(t.top)})}function N(t){return l({background:t.background,color:t.color})}const b={rootStyle:w,notifyStyle:N},i={show:{type:Boolean,default:!1},message:{type:String,default:""},background:{type:String,default:""},type:{type:String,default:"danger"},color:{type:String,default:u},zIndex:{type:Number,default:110},safeAreaInsetTop:{type:Boolean,default:!1},top:{type:[null,String,Number],default:null},...y},z={name:"PressNotify",options:{...f,styleIsolation:"shared"},components:{PressTransition:c},mixins:[S(i)],props:i,emits:[],data(){return{onOpened:null,onClose:null,onClick:null,computed:b}},watch:{},created(){const t=m();this.statusBarHeight=t},methods:{onTap(t){const{onClick:e}=this;e&&e(h(t))}}},P={class:"press-notify-index"};function x(t,e,H,D,o,p){const d=B("press-transition");return s(),a("div",P,[C(d,{name:"slide-down",show:t.dataShow,"custom-class":"press-notify__container","custom-style":o.computed.rootStyle({zIndex:t.dataZIndex,top:t.dataTop}),onClick:p.onTap},{default:_(()=>[n("div",{class:I("press-notify press-notify--"+t.dataType),style:r(o.computed.notifyStyle({background:t.dataBackground,color:t.dataColor}))},[t.dataSafeAreaInsetTop?(s(),a("div",{key:0,style:r("height: "+t.statusBarHeight+"px")},null,4)):T("",!0),n("span",null,v(t.dataMessage),1)],6)]),_:1},8,["show","custom-style","onClick"])])}const j=k(z,[["render",x],["__scopeId","data-v-da263dce"]]);export{j as P};