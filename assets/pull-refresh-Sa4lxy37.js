import{s as g}from"./style-CpIyAjCl.js";import{c as P,h as D}from"./rect-BiPyIr-j.js";import{P as x}from"./press-loading-plus-CUHs_PRb.js";import{t as R}from"./index-JObRowtI.js";import{v as V,n as E}from"./add-unit-Ci6RUrQO.js";import{_ as S,r as m,o as y,c as _,a as u,m as p,i as c,A as f,t as h,f as r,l,d as Y,p as C,e as L}from"./index-C7cPaXoT.js";import{P as M,a as X}from"./press-tabs-Db5k5K-M.js";import"./utils-BWNRMl9G.js";import"./system-DiAbMyT7.js";import"./press-component-DP30Q1Pq.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./press-info-CCB12gYT.js";import"./press-sticky-DUXZZDhG.js";import"./bind-event-CR3VwPNe.js";import"./event-BsaNekcD.js";import"./support-passive-CNRHRm4O.js";import"./touch-Djes3Zvx.js";import"./scroll-view-BdkOo_al.js";function N(t,s){return t>s?"horizontal":s>t?"vertical":""}const w={data(){return{direction:""}},methods:{touchStart(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove(t){const s=t.touches[0];this.deltaX=s.clientX<0?0:s.clientX-this.startX,this.deltaY=s.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY);const i=10;(!this.direction||this.offsetX<i&&this.offsetY<i)&&(this.direction=N(this.offsetX,this.offsetY))},resetTouchStatus(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0}}};function H(t){(typeof t.cancelable!="boolean"||t.cancelable)&&t.preventDefault()}const T=50,I=["pulling","loosing","success"],z={name:"PressPullRefresh",options:{styleIsolation:"shared"},components:{PressLoadingPlus:x},mixins:[w,V],props:{disabled:Boolean,successText:{type:String,default:""},pullingText:{type:String,default:""},loosingText:{type:String,default:""},loadingText:{type:String,default:""},pullDistance:{type:[Number,String],default:""},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:T},trackStyle:{type:String,default:""},customStyle:{type:String,default:""}},emits:["change","update:modelValue","refresh"],data(){return{status:"normal",distance:0,duration:0,TEXT_STATUS:I}},computed:{statusText(){const{status:t}=this;return this[`${t}Text`]||R(t)},touchable(){return this.status!=="loading"&&this.status!=="success"&&!this.disabled},innerTrackStyle(){return g([{transitionDuration:`${this.duration}ms`,transform:this.distance?`translate3d(0,${this.distance}px, 0)`:""},this.trackStyle])},headStyle(){return this.headHeight!==T?g({height:`${this.headHeight}px`}):""}},watch:{realModelValue(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted(){this.scrollEl=P(this.$el)},methods:{checkPullStart(t){this.ceiling=!0,this.ceiling=D(this.scrollEl)===0,this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart(t){this.touchable&&this.checkPullStart(t)},onTouchMove(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&this.direction==="vertical"&&(H(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd(){this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,this.status==="loosing"?(this.setStatus(+this.headHeight,!0),this.emitModelValue(!0),this.$emit("change",!0),E(()=>{this.$emit("refresh")})):this.setStatus(0))},ease(t){const s=+(this.pullDistance||this.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},setStatus(t,s){let i;s?i="loading":t===0?i="normal":i=t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,i!==this.status&&(this.status=i)},showSuccessTip(){this.status="success",setTimeout(()=>{this.setStatus(0)},this.successDuration)}}};function U(t,s,i,k,o,e){const d=m("PressLoadingPlus");return y(),_("div",{class:"press-pull-refresh",style:p(i.customStyle)},[u("div",{ref:"track",class:"press-pull-refresh__track",style:p(e.innerTrackStyle),onTouchstart:s[0]||(s[0]=(...a)=>e.onTouchStart&&e.onTouchStart(...a)),onTouchmove:s[1]||(s[1]=(...a)=>e.onTouchMove&&e.onTouchMove(...a)),onTouchend:s[2]||(s[2]=(...a)=>e.onTouchEnd&&e.onTouchEnd(...a)),onTouchcancel:s[3]||(s[3]=(...a)=>e.onTouchEnd&&e.onTouchEnd(...a))},[u("div",{class:"press-pull-refresh__head",style:p(e.headStyle)},[o.status==="pulling"?c(t.$slots,"pulling",{key:0,distance:o.distance},()=>[f(h(i.pullingText),1)],!0):o.status==="loosing"?c(t.$slots,"loosing",{key:1},()=>[f(h(i.loosingText),1)],!0):o.status==="success"?c(t.$slots,"success",{key:2},()=>[f(h(i.successText),1)],!0):o.status==="normal"?c(t.$slots,"normal",{key:3},void 0,!0):o.status==="loading"?c(t.$slots,"loading",{key:4},()=>[r(d,{size:"16"},{default:l(()=>[f(h(e.statusText),1)]),_:1})],!0):Y("",!0)],4),c(t.$slots,"default",{},void 0,!0)],36)],4)}const A=S(z,[["render",U],["__scopeId","data-v-f8d4acbc"]]),B={i18n:{"zh-CN":{try:"下拉试试",text:"刷新次数",success:"刷新成功",successTip:"成功提示",customTips:"自定义提示"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}},components:{PressPullRefresh:A,PressTab:M,PressTabs:X},data(){return{count:0,isLoading:!1,active:0}},computed:{tips(){return this.count?`${this.t("text")}: ${this.count}`:this.t("try")}},methods:{onRefresh(){setTimeout(()=>{this.onGTip("刷新成功"),this.isLoading=!1,this.count+=1},1e3)},onChange(t){console.log("value",t)}}},b=t=>(C("data-v-21aa0e87"),t=t(),L(),t),q={class:"demo-wrap demo-pull-refresh"},G={class:"demo-button"},O={class:"demo-button"},j=b(()=>u("img",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png",class:"doge"},null,-1)),F=b(()=>u("img",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_aecbd81ffaca64b6f4.jpg",class:"doge"},null,-1)),K={class:"demo-button"};function J(t,s,i,k,o,e){const d=m("PressPullRefresh"),a=m("press-tab"),v=m("press-tabs");return y(),_("div",q,[r(v,{active:o.active,onChange:e.onChange},{default:l(()=>[r(a,{title:t.t("basicUsage")},{default:l(()=>[r(d,{modelValue:o.isLoading,"onUpdate:modelValue":s[0]||(s[0]=n=>o.isLoading=n),onRefresh:e.onRefresh},{default:l(()=>[u("p",G,h(e.tips),1)]),_:1},8,["modelValue","onRefresh"])]),_:1},8,["title"]),r(a,{title:t.t("successTip")},{default:l(()=>[r(d,{modelValue:o.isLoading,"onUpdate:modelValue":s[1]||(s[1]=n=>o.isLoading=n),"success-text":t.t("success"),onRefresh:s[2]||(s[2]=n=>e.onRefresh(!1))},{default:l(()=>[u("p",O,h(e.tips),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),r(a,{title:t.t("customTips")},{default:l(()=>[r(d,{modelValue:o.isLoading,"onUpdate:modelValue":s[3]||(s[3]=n=>o.isLoading=n),"head-height":"80",onRefresh:s[4]||(s[4]=n=>e.onRefresh(!0))},{pulling:l(({distance:n})=>[u("img",{class:"doge",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2024/7/own_mike_9ebf38f1fc4354df84.png",style:p({transform:`scale(${n/80})`})},null,4)]),loosing:l(()=>[j]),loading:l(()=>[F]),default:l(()=>[u("p",K,h(e.tips),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["active","onChange"])])}const pt=S(B,[["render",J],["__scopeId","data-v-21aa0e87"]]);export{pt as default};