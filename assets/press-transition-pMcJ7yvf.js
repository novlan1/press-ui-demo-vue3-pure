import{s as c}from"./style-CpIyAjCl.js";import{r as o}from"./system-mJD_gOJ2.js";import{i as l}from"./validator-DZhHpK6j.js";import{a as h,d as m}from"./press-component-C_abQ9Ny.js";import{_ as f,o as v,c as p,i as y,n as $,m as C,d as S}from"./index-CE2ZXbHd.js";function T(t){return c([{"-webkit-transition-duration":`${t.currentDuration}ms`,"transition-duration":`${t.currentDuration}ms`},t.display?null:"display: none",t.customStyle])}const b={rootStyle:T},u=(t,e)=>{const{enterClass:s,enterActiveClass:a,enterToClass:i,leaveClass:r,leaveActiveClass:n,leaveToClass:d}=e;return{enter:`press-${t}-enter press-${t}-enter-active ${s} ${a}`,"enter-to":`press-${t}-enter-to press-${t}-enter-active ${i} ${a}`,leave:`press-${t}-leave press-${t}-leave-active ${r} ${n}`,"leave-to":`press-${t}-leave-to press-${t}-leave-active ${d} ${n}`}};function D(t){return{props:{customStyle:String,show:{type:Boolean,default:t},duration:{type:[Number,Object,null],default:300},name:{type:String,default:"fade"}},data(){return{type:"",inited:!1,display:!1,dataName:this.name}},watch:{show:{handler(...e){this.observeShow(...e)}},name:{handler(e){this.dataName=e}}},mounted(){this.show===!0&&this.observeShow(!0,!1)},methods:{observeShow(e,s){e!==s&&(e?this.enter():this.leave())},enter(){const{duration:e,dataName:s}=this,a=u(s,this),i=l(e)?e.enter:e;this.status="enter",this.$emit("before-enter"),o(()=>{this.status==="enter"&&(this.$emit("enter"),this.setData({inited:!0,display:!0,classes:a.enter,currentDuration:i}),o(()=>{this.status==="enter"&&(this.transitionEnded=!1,this.setData({classes:a["enter-to"]}))}))})},leave(){if(!this.display)return;const{duration:e,dataName:s}=this,a=u(s,this),i=l(e)?e.leave:e;this.status="leave",this.$emit("before-leave"),o(()=>{this.status==="leave"&&(this.$emit("leave"),this.setData({classes:a.leave,currentDuration:i}),o(()=>{this.status==="leave"&&(this.transitionEnded=!1,setTimeout(()=>this.onTransitionEnd(),i),this.setData({classes:a["leave-to"]}))}))})},onTransitionEnd(){if(this.transitionEnded)return;this.transitionEnded=!0,this.$emit(`after-${this.status}`);const{show:e,display:s}=this;!e&&s&&this.setData({display:!1})}}}}const k={name:"PressTransition",mixins:[D(!0)],props:{overlay:{type:Boolean,default:!1},enterClass:{type:String,default:""},enterActiveClass:{type:String,default:""},enterToClass:{type:String,default:""},leaveClass:{type:String,default:""},leaveActiveClass:{type:String,default:""},leaveToClass:{type:String,default:""},...h},emits:["click","touchmove","before-enter","enter","after-enter","before-leave","leave","after-leave"],data(){return{classes:""}},options:{...m,styleIsolation:"shared"},computed:{rootStyle(){const{currentDuration:t,display:e,customStyle:s}=this;return b.rootStyle({currentDuration:t,display:e,customStyle:s})},transitionClass(){const{customClass:t,overlay:e,classes:s}=this;return`press-transition ${s} ${t} ${e?"press-overlay":""}`}},methods:{setData(t){Object.keys(t).forEach(e=>{this[e]=t[e]})},onClick(){this.$emit("click")},onTouchmove(t){this.$emit("touchmove",t)}}};function E(t,e,s,a,i,r){return t.inited?(v(),p("div",{key:0,class:$(r.transitionClass),style:C(r.rootStyle),onTransitionend:e[0]||(e[0]=(...n)=>t.onTransitionEnd&&t.onTransitionEnd(...n)),onClick:e[1]||(e[1]=(...n)=>r.onClick&&r.onClick(...n)),onTouchmove:e[2]||(e[2]=(...n)=>r.onTouchmove&&r.onTouchmove(...n))},[y(t.$slots,"default",{},void 0,!0)],38)):S("",!0)}const O=f(k,[["render",E],["__scopeId","data-v-ad951878"]]);export{O as P,D as t};