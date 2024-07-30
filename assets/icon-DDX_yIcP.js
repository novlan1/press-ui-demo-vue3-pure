import{P as S}from"./press-card-CoKw-1FT.js";import{P as x}from"./press-icon-Cb4ERLnf.js";import{s as C}from"./style-CpIyAjCl.js";import{_ as g,o as p,c as a,F as k,y as w,m as y,n as M,f as o,l as h,r as u,a as n,t as P,w as _,p as $,e as L}from"./index-C7cPaXoT.js";import{P as N}from"./press-notify-FYwKdbiM.js";import{C as z}from"./clipboard-mixin-Dmkscl4E.js";import"./press-transition-CROU0OyA.js";import"./system-DiAbMyT7.js";import"./utils-BWNRMl9G.js";import"./add-unit-Ci6RUrQO.js";import"./press-component-DP30Q1Pq.js";import"./color-DciZLlTH.js";import"./rect-BiPyIr-j.js";import"./event-BsaNekcD.js";import"./support-passive-CNRHRm4O.js";import"./dialog-mixin-JIveDGFs.js";import"./component-handler-DHpbld7F.js";import"./rect-BbLYeJEM.js";import"./index-B17f7L1L.js";const A={name:"empty",unicode:"\\e03f"},b={empty:A},B={name:"PressIconMusic",props:{width:{type:String,default:"40px"},height:{type:String,default:"50px"},number:{type:Number,default:3},color:{type:String,default:"#2979ff"}},emits:[],data(){return{}},computed:{barList(){return Array.from({length:this.number})},rootStyle(){return C([{width:this.width,height:this.height}])},barStyle(){const{width:e,number:s,color:c}=this;return C([{backgroundColor:c,width:`calc(${e} / ${+s+1})`}])}},methods:{}};function j(e,s,c,f,i,t){return p(),a("div",{class:"press-icon-music",style:y(t.rootStyle)},[(p(!0),a(k,null,w(t.barList,(I,m)=>(p(),a("div",{key:m,style:y(t.barStyle),class:M(["press-icon-music__bar",`press-icon-music__bar-${m}`])},null,6))),128))],4)}const D=g(B,[["render",j],["__scopeId","data-v-dc05e165"]]),F={i18n:{"zh-CN":{copied:"复制成功"},"en-US":{copied:"Copied"}},components:{PressCard:S,PressIconMusic:D,PressIcon:x,PressNotify:N},mixins:[z],data(){return{pressIconList:Object.keys(b).map(s=>({name:s,unicode:b[s].unicode})),activeIndex:-1,checked:!1}},mounted(){},methods:{switchActive(e,s){const c=`<press-icon name="${s.name}" />`;this.copyIconTag(c)},onCopyIconMusic(...e){const c=`<press-icon-music ${e.map(f=>{const{0:i,1:t}=f;return`${i}="${t}"`}).join(" ")}/>`;this.copyIconTag(c)}}},O=e=>($("data-v-3021fe85"),e=e(),L(),e),T={class:"demo-wrap"},V=O(()=>n("span",{class:"uni-h6"}," 仅保留 empty 图标，其他图标请使用 press-icon-plus。 ",-1)),E={class:"icon-content"},R=["onClick"],U={class:"icon-content flex-end"};function X(e,s,c,f,i,t){const I=u("press-card"),m=u("press-icon"),v=u("demo-block"),l=u("PressIconMusic");return p(),a("div",T,[o(I,{"is-shadow":!1,"is-full":""},{default:h(()=>[V]),_:1}),o(v,{title:"图标"},{default:h(()=>[n("div",E,[(p(!0),a(k,null,w(i.pressIconList,(r,d)=>(p(),a("div",{key:d,class:"icon-item",onClick:q=>t.switchActive(d,r)},[o(m,{type:r.name,color:i.activeIndex===d?"#007aff":"#5e6d82",size:"30"},null,8,["type","color"]),n("span",{style:y({color:i.activeIndex===d?"#007aff":"#5e6d82"}),class:"uni-mt-5 uni-subtitle"},P(i.checked?r.unicode:r.name),5)],8,R))),128))])]),_:1}),o(v,{title:"icon-music"},{default:h(()=>[n("div",U,[n("div",{class:"icon-item",onClick:s[0]||(s[0]=_(r=>t.onCopyIconMusic(),["stop"]))},[o(l)]),n("div",{class:"icon-item",onClick:s[1]||(s[1]=_(()=>t.onCopyIconMusic(["color","rgb(94, 109, 130)"]),["stop"]))},[o(l,{color:"rgb(94, 109, 130)"})]),n("div",{class:"icon-item",onClick:s[2]||(s[2]=_(r=>t.onCopyIconMusic(["number","5"]),["stop"]))},[o(l,{number:5})]),n("div",{class:"icon-item",onClick:s[3]||(s[3]=_(r=>t.onCopyIconMusic(["width","60px"],["height","60px"]),["stop"]))},[o(l,{width:"60px",height:"60px"})])])]),_:1})])}const ls=g(F,[["render",X],["__scopeId","data-v-3021fe85"]]);export{ls as default};