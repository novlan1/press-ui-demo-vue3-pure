import{_ as c,o as h,c as p,y as b,x as _,r as i,b as g,n as l,a as u,f as d,p as v,e as w}from"./index-BZexHo5h.js";const y={name:"PressTeleportWeb",props:{to:{type:String,required:!0},where:{type:String,default:"after"},disabled:Boolean},data(){return{nodes:[],waiting:!1,observer:null,parent:null}},computed:{classes(){return this.disabled?["teleporter"]:["teleporter","hidden"]}},watch:{to:"maybeMove",where:"maybeMove",disabled(e){e?(this.disable(),this.teardownObserver()):(this.bootObserver(),this.move())}},mounted(){this.nodes=Array.from(this.$el.childNodes),this.disabled||this.bootObserver(),this.maybeMove()},beforeDestroy(){this.disable(),this.teardownObserver()},methods:{maybeMove(){this.disabled||this.move()},move(){if(this.waiting=!1,this.to&&(this.parent=document.querySelector(this.to)),!this.parent){this.disable(),this.waiting=!0;return}this.where==="before"?this.parent.prepend(this.getFragment()):this.parent.appendChild(this.getFragment())},disable(){this.$el.appendChild(this.getFragment()),this.parent=null},getFragment(){const e=document.createDocumentFragment();return this.nodes.forEach(s=>e.appendChild(s)),e},onMutations(e){let s=!1;for(let t=0;t<e.length;t++){const r=e[t],a=Array.from(r.addedNodes).filter(o=>!this.nodes.includes(o));Array.from(r.removedNodes).includes(this.parent)?(this.disable(),this.waiting=!this.disabled):this.waiting&&a.length>0&&(s=!0)}s&&this.move()},bootObserver(){this.observer||(this.observer=new MutationObserver(e=>this.onMutations(e)),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))},teardownObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}}};function $(e,s,t,r,a,o){return h(),p("div",{class:_(o.classes)},[b(e.$slots,"default",{},void 0,!0)],2)}const T=c(y,[["render",$],["__scopeId","data-v-1965c215"]]),S={name:"PressTeleport",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressTeleportWeb:T},props:{to:{type:String,default:"body"},where:{type:String,default:"after"},disabled:Boolean},data(){return{}},mounted(){},methods:{}};function C(e,s,t,r,a,o){const n=i("PressTeleportWeb");return h(),g(n,{to:t.to,where:t.where,disabled:t.disabled},{default:l(()=>[b(e.$slots,"default")]),_:3},8,["to","where","disabled"])}const k=c(S,[["render",C]]),M={i18n:{"zh-CN":{toggle:"切换"},"en-US":{toggle:"Toggle"}},components:{PressTeleport:k},data(){return{disabled:!1}},methods:{onToggle(){this.disabled=!this.disabled}}},P=e=>(v("data-v-d57aeaed"),e=e(),w(),e),N={class:"demo-wrap"},O={class:"demo-inner"},B=P(()=>u("div",{class:"demo-text"}," test ",-1));function I(e,s,t,r,a,o){const n=i("press-cell"),f=i("demo-block"),m=i("PressTeleport");return h(),p("div",N,[u("div",O,[d(f,{title:e.t("basicUsage")},{default:l(()=>[d(n,{title:e.t("toggle"),"is-link":"",onClick:o.onToggle},null,8,["title","onClick"])]),_:1},8,["title"]),d(m,{to:"body",disabled:a.disabled},{default:l(()=>[B]),_:1},8,["disabled"])])])}const x=c(M,[["render",I],["__scopeId","data-v-d57aeaed"]]);export{x as default};
