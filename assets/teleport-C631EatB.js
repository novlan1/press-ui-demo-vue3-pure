import{_ as c,o as h,c as p,i as u,n as _,r as a,b as g,l,a as b,f as d,t as v}from"./index-VLx2MJJu.js";const w={name:"PressTeleportWeb",props:{to:{type:String,required:!0},where:{type:String,default:"after"},disabled:Boolean},data(){return{nodes:[],waiting:!1,observer:null,parent:null}},computed:{classes(){return this.disabled?["teleporter"]:["teleporter","hidden"]}},watch:{to:"maybeMove",where:"maybeMove",disabled(e){e?(this.disable(),this.teardownObserver()):(this.bootObserver(),this.move())}},mounted(){this.nodes=Array.from(this.$el.childNodes),this.disabled||this.bootObserver(),this.maybeMove()},beforeDestroy(){this.disable(),this.teardownObserver()},methods:{maybeMove(){this.disabled||this.move()},move(){if(this.waiting=!1,this.to&&(this.parent=document.querySelector(this.to)),!this.parent){this.disable(),this.waiting=!0;return}this.where==="before"?this.parent.prepend(this.getFragment()):this.parent.appendChild(this.getFragment())},disable(){this.$el.appendChild(this.getFragment()),this.parent=null},getFragment(){const e=document.createDocumentFragment();return this.nodes.forEach(s=>e.appendChild(s)),e},onMutations(e){let s=!1;for(let t=0;t<e.length;t++){const i=e[t],o=Array.from(i.addedNodes).filter(r=>!this.nodes.includes(r));Array.from(i.removedNodes).includes(this.parent)?(this.disable(),this.waiting=!this.disabled):this.waiting&&o.length>0&&(s=!0)}s&&this.move()},bootObserver(){this.observer||(this.observer=new MutationObserver(e=>this.onMutations(e)),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))},teardownObserver(){this.observer&&(this.observer.disconnect(),this.observer=null)}}};function y(e,s,t,i,o,r){return h(),p("div",{class:_(r.classes)},[u(e.$slots,"default",{},void 0,!0)],2)}const T=c(w,[["render",y],["__scopeId","data-v-1965c215"]]),$={name:"PressTeleport",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressTeleportWeb:T},props:{to:{type:String,default:"body"},where:{type:String,default:"after"},disabled:Boolean},data(){return{}},mounted(){},methods:{}};function C(e,s,t,i,o,r){const n=a("PressTeleportWeb");return h(),g(n,{to:t.to,where:t.where,disabled:t.disabled},{default:l(()=>[u(e.$slots,"default")]),_:3},8,["to","where","disabled"])}const k=c($,[["render",C]]),M={i18n:{"zh-CN":{toggle:"切换"},"en-US":{toggle:"Toggle"}},components:{PressTeleport:k},data(){return{disabled:!1}},methods:{onToggle(){this.disabled=!this.disabled}}},P={class:"demo-wrap"},S={class:"demo-inner"},N={class:"demo-text"};function O(e,s,t,i,o,r){const n=a("press-cell"),f=a("demo-block"),m=a("PressTeleport");return h(),p("div",P,[b("div",S,[d(f,{title:e.t("basicUsage")},{default:l(()=>[d(n,{title:e.t("toggle"),"is-link":"",onClick:r.onToggle},null,8,["title","onClick"])]),_:1},8,["title"]),d(m,{to:"body",disabled:o.disabled},{default:l(()=>[b("div",N,v(o.disabled?"不使用 Teleport， 阴影部分在页面":"使用 Teleport，阴影部分在 body 下"),1)]),_:1},8,["disabled"])])])}const F=c(M,[["render",O],["__scopeId","data-v-43b92d17"]]);export{F as default};