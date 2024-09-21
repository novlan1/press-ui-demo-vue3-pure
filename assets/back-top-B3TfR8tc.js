import{a as i,g as b}from"./add-unit-B8Dm0KXN.js";import{s as T}from"./style-CpIyAjCl.js";import{P as x}from"./press-icon-plus-B5CFdVb5.js";import{P as v}from"./press-transition-a1ccgsmG.js";import{_ as k,r,o as c,b as _,l as h,c as u,f as n,t as C,d as w,m as I,i as N,a as B,F as z,y as M}from"./index-DfxNb_pP.js";import{P as q}from"./press-checkbox-CYobuh-r.js";import{P as R}from"./press-notice-bar-D4fUK8_R.js";import{S as V}from"./scroll-view-gEPpO0v9.js";import"./press-info-BsYXiOQL.js";import"./utils-C2tViYFs.js";import"./press-component-D9D_j5DA.js";import"./system-BWskc-Wq.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./parent-CQhE6Wqc.js";import"./adapter-BgGMvpFJ.js";import"./rect-OZQe9sas.js";import"./event-CpAS7Alu.js";import"./support-passive-CNRHRm4O.js";const F={props:{customStyle:{type:String,default:""},mode:{type:String,default:"circle"},icon:{type:String,default:"back-top"},text:{type:String,default:""},duration:{type:[String,Number],default:100},scrollTop:{type:[String,Number],default:0},top:{type:[String,Number],default:400},bottom:{type:[String,Number],default:100},right:{type:[String,Number],default:20},zIndex:{type:[String,Number],default:9},iconStyle:{type:[Object,String],default:""},size:{type:[String,Number],default:40},scrollToTop:{type:[Function,null],default:null}}},L={name:"PressBackTop",options:{styleIsolation:"shared"},components:{PressIconPlus:x,PressTransition:v},mixins:[F],emits:["click"],computed:{backTopStyle(){const o={bottom:i(this.bottom),right:i(this.right),width:i(this.size),height:i(this.size),position:"fixed",zIndex:this.zIndex};return T(o)},show(){return b(this.scrollTop)>b(this.top)},innerIconStyle(){return T([{color:"#909399",fontSize:"19px"},this.iconStyle])},contentStyle(){const o={};let t=0;return this.mode==="circle"?t="100px":t="4px",o.borderTopLeftRadius=t,o.borderTopRightRadius=t,o.borderBottomLeftRadius=t,o.borderBottomRightRadius=t,T([o,this.customStyle])}},methods:{backToTop(){typeof this.scrollToTop=="function"?this.scrollToTop():uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("click")}}},j={key:0,class:"press-back-top__text"};function D(o,t,m,a,s,e){const d=r("PressIconPlus"),f=r("PressTransition");return c(),_(f,{mode:"fade","custom-style":e.backTopStyle,show:e.show},{default:h(()=>[!o.$slots.default&&!o.$slots.$default?(c(),u("div",{key:0,class:"press-back-top",style:I(e.contentStyle),onClick:t[0]||(t[0]=(...y)=>e.backToTop&&e.backToTop(...y))},[n(d,{name:o.icon,"custom-style":e.innerIconStyle},null,8,["name","custom-style"]),o.text?(c(),u("span",j,C(o.text),1)):w("",!0)],4)):N(o.$slots,"default",{key:1},void 0,!0)]),_:3},8,["custom-style","show"])}const O=k(L,[["render",D],["__scopeId","data-v-c74b008f"]]);let p;const U={i18n:{"zh-CN":{square:"显示方形",icon:"自定义图标",distance:"自定义距离",style:"自定义样式",text:"是否显示文本"},"en-US":{square:"Square",icon:"Custom Icon",distance:"Custom Distance",style:"Custom Style",text:"Custom Text"}},components:{PressBackTop:O,PressCheckbox:q,PressNoticeBar:R},mixins:[V],data(){return p=this,{scrollTop:0,newScrollTop:0,valueMap:{square:!1,icon:!1,distance:!1,style:!1,text:!1}}},computed:{backTopProps(){const{square:o,icon:t,distance:m,style:a,text:s}=this.valueMap;return{mode:o?"square":"circle",icon:t?"arrow-up":"back-top",top:m?10:100,iconStyle:a?"color: #fff":"",customStyle:a?"background-color: #2979ff":"",text:s?"顶部":""}}},methods:{onChange(o,t){this.valueMap[t]=o},onScroll(o){var t;this.scrollTop=o.target.scrollTop||((t=o.detail)==null?void 0:t.scrollTop)||0,console.log("[scrollTop]",o,this.scrollTop)},scrollToTop(){p.newScrollTop=p.scrollTop,setTimeout(()=>{p.newScrollTop=0})}}},E={class:"demo-wrap"},A={class:"demo-inner"};function G(o,t,m,a,s,e){const d=r("press-notice-bar"),f=r("PressCheckbox"),y=r("press-cell"),g=r("scroll-view"),P=r("PressBackTop");return c(),u("div",E,[n(d,{text:"向下滑动即可展示组件。"}),n(g,{"scroll-y":"",enhanced:"",class:"demo-scroll-view","scroll-with-animation":"","scroll-top":s.newScrollTop,onScroll:e.onScroll},{default:h(()=>[B("div",A,[(c(!0),u(z,null,M(Object.keys(s.valueMap),l=>(c(),_(y,{key:l,title:o.t(l),clickable:"",onClick:S=>s.valueMap[l]=!s.valueMap[l]},{"right-icon":h(()=>[n(f,{value:s.valueMap[l],shape:"square",onChange:S=>e.onChange(S,l)},null,8,["value","onChange"])]),_:2},1032,["title","onClick"]))),128))])]),_:1},8,["scroll-top","onScroll"]),n(P,{"scroll-top":s.scrollTop,"scroll-to-top":e.scrollToTop,mode:e.backTopProps.mode,top:e.backTopProps.top,icon:e.backTopProps.icon,"icon-style":e.backTopProps.iconStyle,"custom-style":e.backTopProps.customStyle,text:e.backTopProps.text},null,8,["scroll-top","scroll-to-top","mode","top","icon","icon-style","custom-style","text"])])}const po=k(U,[["render",G],["__scopeId","data-v-239e334a"]]);export{po as default};