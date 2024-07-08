import{P as b}from"./press-icon-plus-5Xj-bw2h.js";import{r as d}from"./system-BAdrsxg_.js";import{g as h}from"./rect-ZZRvyvMD.js";import{s as _,i as w,u as I}from"./utils-Do31p4kb.js";import{d as S,a as B}from"./press-component-HD2axD72.js";import{g as P}from"./event-Dm-SpHU4.js";import{_ as v,r as f,o as r,c as u,x as n,v as y,b as l,y as m,a as g,u as N,t as x,d as C,F as D,n as T,f as W}from"./index-BZexHo5h.js";function X(t){return _({color:t.color,"background-color":t.backgroundColor,background:t.background})}const V={rootStyle:X},F={name:"PressNoticeBar",options:{...S,styleIsolation:"shared"},components:{PressIconPlus:b},props:{text:{type:String,default:""},mode:{type:String,default:""},url:{type:String,default:""},openType:{type:String,default:"navigate"},delay:{type:Number,default:1},speed:{type:Number,default:60},scrollable:{type:Boolean,default:!1},leftIcon:{type:String,default:""},color:{type:String,default:""},backgroundColor:{type:String,default:""},background:{type:String,default:""},wrapable:Boolean,...B},emits:["close","click"],data(){return{show:!0,duration:0,animationDuration:0,contentWidth:0,translateX:0,isNotInUni:w()}},computed:{noticeBarClass(){const{mode:t,wrapable:o,customClass:e}=this;return`${e} ${I.bem2("notice-bar",{withicon:t,wrapable:o})}`},noticeBarStyle(){const{color:t,backgroundColor:o,background:e}=this;return V.rootStyle({color:t,backgroundColor:o,background:e})},animationStyle(){const{animationDuration:t,delay:o,translateX:e}=this;return[`transform: translateX(${e}px);`,`transition: -webkit-transform ${t}ms linear ${o}ms, transform ${t}ms linear ${o}ms;`,"transform-origin: 50% 50% 0px;"].join(" ")},leftIconClass(){return"press-notice-bar__left-icon"},leftIconCustomClass(){return""},rightIconClass(){return"press-notice-bar__right-icon"},rightIconCustomClass(){return""}},watch:{text:{handler(){this.init()}},speed:{handler(){this.init()}}},created(){},mounted(){this.init()},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){this.timer&&clearTimeout(this.timer)},init(){d(()=>{Promise.all([h(this,".press-notice-bar__content"),h(this,".press-notice-bar__wrap")]).then(t=>{const[o,e]=t,{speed:c,scrollable:a}=this;if(!(o==null||e==null||!o.width||!e.width||a===!1)&&(a||e.width<o.width)){const s=(e.width+o.width)/c*1e3;this.wrapWidth=e.width,this.contentWidth=o.width,this.duration=s,this.scroll(!0)}})})},scroll(t=!1){this.timer&&clearTimeout(this.timer),this.timer=null,this.translateX=t?0:this.wrapWidth,this.animationDuration=0,d(()=>{this.translateX=-this.contentWidth,this.animationDuration=this.duration}),this.timer=setTimeout(()=>{this.scroll()},this.duration)},onClickIcon(t){this.mode==="closeable"&&(this.timer&&clearTimeout(this.timer),this.timer=null,this.show=!1,this.$emit("close",P(t)))},onClick(t){this.$emit("click",t)}}},R={class:"press-notice-bar-index"},U={class:"press-notice-bar__wrap"};function z(t,o,e,c,a,s){const i=f("PressIconPlus"),p=f("navigator");return r(),u("div",R,[a.show?(r(),u("div",{key:0,class:n(s.noticeBarClass),style:y(s.noticeBarStyle),onClick:o[0]||(o[0]=(...k)=>s.onClick&&s.onClick(...k))},[e.leftIcon?(r(),l(i,{key:0,name:e.leftIcon,class:n([s.leftIconClass]),"custom-class":s.leftIconCustomClass},null,8,["name","class","custom-class"])):m(t.$slots,"left-icon",{key:1},void 0,!0),g("div",U,[g("div",{class:n("press-notice-bar__content "+(e.scrollable===!1&&!e.wrapable?"press-ellipsis":"")),style:y(s.animationStyle)},[N(x(e.text)+" ",1),e.text?C("",!0):m(t.$slots,"default",{key:0},void 0,!0)],6)]),e.mode==="closeable"?(r(),l(i,{key:2,class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"cross",onClick:s.onClickIcon},null,8,["class","custom-class","onClick"])):e.mode==="link"?(r(),u(D,{key:3},[a.isNotInUni?(r(),l(i,{key:0,class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])):(r(),l(p,{key:1,url:e.url,"open-type":e.openType},{default:T(()=>[W(i,{class:n([s.rightIconClass]),"custom-class":s.rightIconCustomClass,name:"arrow"},null,8,["class","custom-class"])]),_:1},8,["url","open-type"]))],64)):m(t.$slots,"right-icon",{key:4},void 0,!0)],6)):C("",!0)])}const J=v(F,[["render",z],["__scopeId","data-v-0c427ffd"]]);export{J as P};
