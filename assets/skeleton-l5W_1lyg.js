import{u as g}from"./utils-Do31p4kb.js";import{d as S,a as k}from"./press-component-HD2axD72.js";import{_ as y,o as a,c as o,x as r,v as u,d as _,a as n,F as C,i as b,y as A,f as i,n as c,t as p,r as m,p as I,e as P}from"./index-BZexHo5h.js";import{P as z}from"./press-switch-BgOgGYGX.js";import"./add-unit-Df5pRFBE.js";import"./validator-OjQp2SYe.js";import"./press-loading-plus-Df-tLDhD.js";const B={name:"PressSkeleton",options:{defaultOptions:S},props:{row:{type:Number,default:0},title:Boolean,avatar:Boolean,loading:{type:Boolean,default:!0},animate:{type:Boolean,default:!0},avatarSize:{type:String,default:"32px"},avatarShape:{type:String,default:"round"},titleWidth:{type:String,default:"40%"},rowWidth:{type:null,default:"100%"},avatarClass:{type:String,default:""},titleClass:{type:String,default:""},rowClass:{type:String,default:""},...k},emits:[],data(){return{utils:g,isArray:!1,rowArray:[]}},computed:{},watch:{row:{handler(e){this.rowArray=Array.from({length:e})},immediate:!0},rowWidth:{handler(e){this.isArray=e instanceof Array},immediate:!0}}};function U(e,w,t,f,s,h){return a(),o("div",null,[t.loading?(a(),o("div",{key:0,class:r(`${e.customClass} `+s.utils.bem2("skeleton",[{animate:t.animate}]))},[t.avatar?(a(),o("div",{key:0,class:r(`${t.avatarClass} `+s.utils.bem2("skeleton__avatar",[t.avatarShape])),style:u("width:"+t.avatarSize+";height:"+t.avatarSize)},null,6)):_("",!0),n("div",{class:r(s.utils.bem2("skeleton__content"))},[t.title?(a(),o("div",{key:0,class:r(`${t.titleClass} `+s.utils.bem2("skeleton__title")),style:u("width:"+t.titleWidth)},null,6)):_("",!0),(a(!0),o(C,null,b(s.rowArray,(d,l)=>(a(),o("div",{key:l,class:r(`${t.rowClass} `+s.utils.bem2("skeleton__row")),style:u("width:"+(s.isArray?t.rowWidth[l]:t.rowWidth))},null,6))),128))],2)],2)):(a(),o("div",{key:1,class:r(s.utils.bem2("skeleton__content"))},[A(e.$slots,"default",{},void 0,!0)],2))])}const W=y(B,[["render",U],["__scopeId","data-v-138588d7"]]),N={i18n:{"zh-CN":{showAvatar:"显示头像",showChildren:"显示子组件",title:"关于 Press UI",desc:"Press UI 是基于 uni-app 的易用、灵活的组件库，也可用于普通 H5 项目。"},"en-US":{showAvatar:"Show Avatar",showChildren:"Show Children",title:"About Press UI",desc:"Press UI is an easy-to-use and flexible component library based on uni-app, which can also be used in ordinary H5 projects."}},components:{PressSkeleton:W,PressSwitch:z},data(){return{loading:!0,sectionStyle:"margin: 0;"}},methods:{onChange(e){this.loading=!e}}},F=e=>(I("data-v-7fa96b9d"),e=e(),P(),e),V={class:"demo-wrap"},H={class:"demo-switch-wrap"},j={class:"demo-preview"},q=F(()=>n("img",{class:"demo-preview-img",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent-2.png"},null,-1)),x={class:"demo-content"},D={class:"demo-content-h3"},E={class:"demo-content-p"};function L(e,w,t,f,s,h){const d=m("press-skeleton"),l=m("demo-block"),v=m("press-switch");return a(),o("div",V,[i(l,{title:e.t("basicUsage"),"section-style":s.sectionStyle},{default:c(()=>[i(d,{title:"",row:3})]),_:1},8,["title","section-style"]),i(l,{title:e.t("showAvatar"),"section-style":s.sectionStyle},{default:c(()=>[i(d,{title:"",avatar:"",row:3})]),_:1},8,["title","section-style"]),i(l,{title:e.t("showChildren"),"section-style":s.sectionStyle},{default:c(()=>[n("div",H,[i(v,{size:"24px",checked:!s.loading,onChange:h.onChange},null,8,["checked","onChange"])]),i(d,{title:"",avatar:"",row:3,loading:s.loading},{default:c(()=>[n("div",j,[q,n("div",x,[n("div",D,p(e.t("title")),1),n("div",E,p(e.t("desc")),1)])])]),_:1},8,["loading"])]),_:1},8,["title","section-style"])])}const T=y(N,[["render",L],["__scopeId","data-v-7fa96b9d"]]);export{T as default};
