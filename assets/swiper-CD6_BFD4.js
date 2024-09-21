import{S as f}from"./swiper-D5Mq5YPL.js";import{_ as d,r as s,o as c,b as _,l,i as S,c as w,a as t,f as o,t as v,p as I,e as C}from"./index-DfxNb_pP.js";import{P}from"./press-switch-DSoRdIWX.js";import{P as b}from"./press-slider-Dx3GXigG.js";import"./utils-C2tViYFs.js";import"./add-unit-B8Dm0KXN.js";import"./press-loading-plus-bw9xFZF2.js";import"./style-CpIyAjCl.js";import"./press-component-D9D_j5DA.js";import"./touch-Djes3Zvx.js";import"./system-BWskc-Wq.js";import"./rect-OZQe9sas.js";import"./unit-B3pvn0qy.js";const k={indicatorDots:{type:[Boolean,String],default:!1},vertical:{type:[Boolean,String],default:!1},autoplay:{type:[Boolean,String],default:!1},circular:{type:[Boolean,String],default:!1},interval:{type:[Number,String],default:5e3},duration:{type:[Number,String],default:500},current:{type:[Number,String],default:0},indicatorColor:{type:String,default:""},indicatorActiveColor:{type:String,default:""},previousMargin:{type:String,default:""},nextMargin:{type:String,default:""},currentItemId:{type:String,default:""},skipHiddenItemLayout:{type:[Boolean,String],default:!1},displayMultipleItems:{type:[Number,String],default:1},disableTouch:{type:[Boolean,String],default:!1},navigation:{type:[Boolean,String],default:!1},navigationColor:{type:String,default:"#fff"},navigationActiveColor:{type:String,default:"rgba(53, 53, 53, 0.6)"}},B={name:"PressSwiper",components:{},mixins:[f],props:{...k},methods:{updateCurrent(...e){this.$emit("updateCurrent",...e)},updateCurrentItemId(...e){this.$emit("updateCurrentItemId",...e)},change(...e){this.$emit("change",...e)},animationfinish(...e){this.$emit("animationfinish",...e)},transition(...e){this.$emit("transition",...e)}}};function D(e,p,u,m,i,n){const a=s("swiper");return c(),_(a,{"indicator-dots":e.indicatorDots,vertical:e.vertical,autoplay:e.autoplay,circular:e.circular,interval:e.interval,duration:e.duration,current:e.current,"indicator-color":e.indicatorColor,"indicator-active-color":e.indicatorActiveColor,"previous-margin":e.previousMargin,"next-margin":e.nextMargin,"current-item-id":e.currentItemId,"skip-hidden-item-layout":e.skipHiddenItemLayout,"display-multiple-items":e.displayMultipleItems,"disable-touch":e.disableTouch,navigation:e.navigation,"navigation-color":e.navigationColor,"navigation-active-color":e.navigationActiveColor,"onUpdate:current":n.updateCurrent,"onUpdate:currentItemId":n.updateCurrentItemId,onChange:n.change,onAnimationfinish:n.animationfinish,onTransition:n.transition},{default:l(()=>[S(e.$slots,"default")]),_:3},8,["indicator-dots","vertical","autoplay","circular","interval","duration","current","indicator-color","indicator-active-color","previous-margin","next-margin","current-item-id","skip-hidden-item-layout","display-multiple-items","disable-touch","navigation","navigation-color","navigation-active-color","onUpdate:current","onUpdate:currentItemId","onChange","onAnimationfinish","onTransition"])}const A=d(B,[["render",D]]),M={itemId:{type:String,default:""}},N={name:"PressSwiperItem",components:{},mixins:[f],props:{...M},data(){return{}}};function T(e,p,u,m,i,n){const a=s("swiper-item");return c(),_(a,{"item-id":e.itemId},{default:l(()=>[S(e.$slots,"default")]),_:3},8,["item-id"])}const E=d(N,[["render",T]]),R={components:{Swiper:A,SwiperItem:E,PressSwitch:P,PressSlider:b},data(){return{background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots(){this.indicatorDots=!this.indicatorDots},changeAutoplay(){this.autoplay=!this.autoplay},intervalChange(e){console.log("e",e),this.interval=e},durationChange(e){console.log("e",e),this.duration=e}}},r=e=>(I("data-v-eedd013d"),e=e(),C(),e),U={class:"demo-wrap"},$={class:"swiper-wrap"},z=r(()=>t("div",{class:"swiper-item swiper-item--big-red"}," A ",-1)),H=r(()=>t("div",{class:"swiper-item swiper-item--big-green"}," B ",-1)),L=r(()=>t("div",{class:"swiper-item swiper-item--big-blue"}," C ",-1)),O={class:"swiper-list"},V={class:"swiper-list-cell swiper-list-cell--pd"},W=r(()=>t("div",{class:"uni-list-cell-db"}," 指示点 ",-1)),j={class:"swiper-list-cell swiper-list-cell--pd"},q=r(()=>t("div",{class:"uni-list-cell-db"}," 自动播放 ",-1)),F={class:"slider-wrap"},G={class:"slider-item"},J=r(()=>t("span",null,"幻灯片切换时长(ms)",-1)),K={class:"info"},Q={class:"slider-item"},X=r(()=>t("span",null,"自动播放间隔时长(ms)",-1)),Y={class:"info"};function Z(e,p,u,m,i,n){const a=s("swiper-item"),y=s("swiper",!0),h=s("PressSwitch"),g=s("PressSlider");return c(),w("div",U,[t("div",$,[o(y,{class:"swiper",circular:"","indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration},{default:l(()=>[o(a,null,{default:l(()=>[z]),_:1}),o(a,null,{default:l(()=>[H]),_:1}),o(a,null,{default:l(()=>[L]),_:1})]),_:1},8,["indicator-dots","autoplay","interval","duration"])]),t("div",O,[t("div",V,[W,o(h,{checked:i.indicatorDots,size:"20px",onChange:n.changeIndicatorDots},null,8,["checked","onChange"])]),t("div",j,[q,o(h,{checked:i.autoplay,size:"20px",onChange:n.changeAutoplay},null,8,["checked","onChange"])])]),t("div",F,[t("div",G,[J,t("span",K,v(i.duration),1)]),o(g,{value:i.duration,min:500,max:2e3,onChange:n.durationChange},null,8,["value","onChange"]),t("div",Q,[X,t("span",Y,v(i.interval),1)]),o(g,{value:i.interval,min:2e3,max:1e4,onChange:n.intervalChange},null,8,["value","onChange"])])])}const ue=d(R,[["render",Z],["__scopeId","data-v-eedd013d"]]);export{ue as default};