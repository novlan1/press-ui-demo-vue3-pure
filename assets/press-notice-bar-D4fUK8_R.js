import{P as p}from"./press-icon-plus-B5CFdVb5.js";import{r as d}from"./system-BWskc-Wq.js";import{g as h}from"./rect-OZQe9sas.js";import{i as k,u as b}from"./utils-C2tViYFs.js";import{s as _}from"./style-CpIyAjCl.js";import{d as I,a as w}from"./press-component-D9D_j5DA.js";import{g as S}from"./event-CpAS7Alu.js";import{_ as B,r as P,o as r,c as l,n,m as f,b as u,i as m,a as y,A as N,t as v,d as g,F as D,f as x}from"./index-DfxNb_pP.js";function T(t){return _({color:t.color,"background-color":t.backgroundColor,background:t.background})}const W={rootStyle:T},X={name:"PressNoticeBar",options:{...I,styleIsolation:"shared"},components:{PressIconPlus:p},props:{text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean,...w},emits:["close","click"],data(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:k()}},computed:{noticeBarClass(){const{mode:t,wrapable:o,customClass:e}=this;return`${e} ${b.bem2("notice-bar",{withicon:t,wrapable:o})}`},noticeBarStyle(){const{color:t,backgroundColor:o,background:e}=this;return W.rootStyle({color:t,backgroundColor:o,background:e})},animationStyle(){const{animationDuration:t,delay:o,translateX:e}=this;return[`transform: translateX(${e}px);`,`transition: -webkit-transform ${t}ms linear ${o}ms, transform ${t}ms linear ${o}ms;`,"transform-origin: 50% 50% 0px;"].join(" ")},leftIconClass(){return"press-notice-bar__left-icon"},leftIconCustomClass(){return""},rightIconClass(){return"press-notice-bar__right-icon"},rightIconCustomClass(){return""}},watch:{text:{handler(){this.init()}},speed:{handler(){this.init()}}},created(){},mounted(){this.init()},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){this.timer&&clearTimeout(this.timer)},init(){d(()=>{Promise.all([h(this,".press-notice-bar__content"),h(this,".press-notice-bar__wrap")]).then(t=>{const[o,e]=t,{speed:c,scrollable:a}=this;if(!(o==null||e==null||!o.width||!e.width||a===!1)&&(a||e.width<o.width)){const s=(e.width+o.width)/c*1e3;this.wrapWidth=e.width,this.contentWidth=o.width,this.duration=s,this.scroll(!0)}})})},scroll(t=!1){this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=t?0:this.wrapWidth,this.animationDuration=0,d(()=>{this.translateX=-this.contentWidth,this.animationDuration=this.duration}),this.timer=setTimeout(()=>{this.scroll()},this.duration)},onClickIcon(t){this.mode==="closeable"&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",S(t)))},onClick(t){this.$emit("click",t)}}},V={class:"press-notice-bar-index"},F={class:"press-notice-bar__wrap"},R=["url","open-type"];function U(t,o,e,c,a,s){const i=P("PressIconPlus");return r(),l("div",V,[a.show?(r(),l("div",{key:0,class:n(s.noticeBarClass),style:f(s.noticeBarStyle),onClick:o[0]||(o[0]=(...C)=>s.onClick&&s.onClick(...C))},[e.leftIcon?(r(),u(i,{key:0,name:e.leftIcon,class:n([s.leftIconClass]),"custom-class":s.leftIconCustomClass},null,8,["name","class","custom-class"])):m(t.$slots,"left-icon",{key:1},void 0,!0),y("div",F,[y("div",{class:n("press-notice-bar__content "+(e.scrollable===!1&&!e.wrapable?"press-ellipsis":"")),style:f(s.animationStyle)},[N(v(e.text)+" ",1),e.text?g("",!0):m(t.$slots,"default",{key:0},void 0,!0)],6)]),e.mode==="closeable"?(r(),u(i,{key:2,class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"cross",onClick:s.onClickIcon},null,8,["class","custom-class","onClick"])):e.mode==="link"?(r(),l(D,{key:3},[a.isNotInUni?(r(),u(i,{key:0,class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])):(r(),l("navigator",{key:1,url:e.url,"open-type":e.openType},[x(i,{class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])],8,R))],64)):m(t.$slots,"right-icon",{key:4},void 0,!0)],6)):g("",!0)])}const J=B(X,[["render",U],["__scopeId","data-v-c9005027"]]);export{J as P};