import{a as i,g as S}from"./add-unit-DeNeB5nf.js";import{s as T}from"./style-CpIyAjCl.js";import"./validator-C_cgqHAw.js";import{P as x}from"./press-icon-plus-zKCOzNHP.js";import{P as v}from"./press-transition-BPTpwSe7.js";import{_ as k,r,o as c,b as _,l as h,c as u,m as C,f as n,t as w,d as B,i as I,a as N,F as z,B as q}from"./index-VLx2MJJu.js";import{P as M}from"./press-checkbox-DlPNf7u9.js";import{P as R}from"./press-notice-bar-Dvir7U3R.js";import"./press-info-DLY6PURR.js";import"./utils-D0lA7q9W.js";import"./press-component-BmHMjgT0.js";import"./system-C5_2TD7H.js";import"./relation-Ce8eT7mn.js";import"./parent-map-CQhFZDpB.js";import"./parent-CQhE6Wqc.js";import"./rect-CXQTALcu.js";import"./event-CFWsryW7.js";import"./support-passive-CNRHRm4O.js";const F={props:{customStyle:{type:String,default:""},mode:{type:String,default:"circle"},icon:{type:String,default:"back-top"},text:{type:String,default:""},duration:{type:[String,Number],default:100},scrollTop:{type:[String,Number],default:0},top:{type:[String,Number],default:400},bottom:{type:[String,Number],default:100},right:{type:[String,Number],default:20},zIndex:{type:[String,Number],default:9},iconStyle:{type:[Object,String],default:""},size:{type:[String,Number],default:40},scrollToTop:{type:[Function,null],default:null}}},L={name:"PressBackTop",options:{styleIsolation:"shared"},components:{PressIconPlus:x,PressTransition:v},mixins:[F],emits:["click"],computed:{backTopStyle(){const o={bottom:i(this.bottom),right:i(this.right),width:i(this.size),height:i(this.size),position:"fixed",zIndex:this.zIndex};return T(o)},show(){return S(this.scrollTop)>S(this.top)},innerIconStyle(){return T([{color:"#909399",fontSize:"19px"},this.iconStyle])},contentStyle(){const o={};let e=0;return this.mode==="circle"?e="100px":e="4px",o.borderTopLeftRadius=e,o.borderTopRightRadius=e,o.borderBottomLeftRadius=e,o.borderBottomRightRadius=e,T([o,this.customStyle])}},methods:{backToTop(){typeof this.scrollToTop=="function"?this.scrollToTop():uni.pageScrollTo({scrollTop:0,duration:this.duration}),this.$emit("click")}}},V={key:0,class:"press-back-top__text"};function j(o,e,m,a,s,t){const d=r("PressIconPlus"),f=r("PressTransition");return c(),_(f,{mode:"fade","custom-style":t.backTopStyle,show:t.show},{default:h(()=>[!o.$slots.default&&!o.$slots.$default?(c(),u("div",{key:0,class:"press-back-top",style:C(t.contentStyle),onClick:e[0]||(e[0]=(...y)=>t.backToTop&&t.backToTop(...y))},[n(d,{name:o.icon,"custom-style":t.innerIconStyle},null,8,["name","custom-style"]),o.text?(c(),u("span",V,w(o.text),1)):B("",!0)],4)):I(o.$slots,"default",{key:1},void 0,!0)]),_:3},8,["custom-style","show"])}const D=k(L,[["render",j],["__scopeId","data-v-c74b008f"]]);let p;const O={i18n:{"zh-CN":{square:"显示方形",icon:"自定义图标",distance:"自定义距离",style:"自定义样式",text:"是否显示文本"},"en-US":{square:"Square",icon:"Custom Icon",distance:"Custom Distance",style:"Custom Style",text:"Custom Text"}},components:{PressBackTop:D,PressCheckbox:M,PressNoticeBar:R},data(){return p=this,{scrollTop:0,newScrollTop:0,valueMap:{square:!1,icon:!1,distance:!1,style:!1,text:!1}}},computed:{backTopProps(){const{square:o,icon:e,distance:m,style:a,text:s}=this.valueMap;return{mode:o?"square":"circle",icon:e?"arrow-up":"back-top",top:m?10:100,iconStyle:a?"color: #fff":"",customStyle:a?"background-color: #2979ff":"",text:s?"顶部":""}}},methods:{onChange(o,e){this.valueMap[e]=o},onScroll(o){this.scrollTop=o.target.scrollTop??o.detail.scrollTop,console.log("[scrollTop]",o,this.scrollTop)},scrollToTop(){p.newScrollTop=p.scrollTop,setTimeout(()=>{p.newScrollTop=0})}}},U={class:"demo-wrap"},E={class:"demo-inner"};function A(o,e,m,a,s,t){const d=r("press-notice-bar"),f=r("PressCheckbox"),y=r("press-cell"),g=r("scroll-view"),P=r("PressBackTop");return c(),u("div",U,[n(d,{text:"向下滑动即可展示组件。"}),n(g,{"scroll-y":"",enhanced:"",class:"demo-scroll-view","scroll-with-animation":"","scroll-top":s.newScrollTop,onScroll:t.onScroll},{default:h(()=>[N("div",E,[(c(!0),u(z,null,q(Object.keys(s.valueMap),l=>(c(),_(y,{key:l,title:o.t(l),clickable:"",onClick:b=>s.valueMap[l]=!s.valueMap[l]},{"right-icon":h(()=>[n(f,{value:s.valueMap[l],shape:"square",onChange:b=>t.onChange(b,l)},null,8,["value","onChange"])]),_:2},1032,["title","onClick"]))),128))])]),_:1},8,["scroll-top","onScroll"]),n(P,{"scroll-top":s.scrollTop,"scroll-to-top":t.scrollToTop,mode:t.backTopProps.mode,top:t.backTopProps.top,icon:t.backTopProps.icon,"icon-style":t.backTopProps.iconStyle,"custom-style":t.backTopProps.customStyle,text:t.backTopProps.text},null,8,["scroll-top","scroll-to-top","mode","top","icon","icon-style","custom-style","text"])])}const ao=k(O,[["render",A],["__scopeId","data-v-0d984fb8"]]);export{ao as default};
