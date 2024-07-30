import{P as h}from"./press-icon-plus-UvEd4iQp.js";import{P as g}from"./press-loading-plus-CUHs_PRb.js";import{P as k}from"./press-overlay-Ct_rQihA.js";import{P as w}from"./press-transition-CROU0OyA.js";import{d as _,a as P}from"./press-component-DP30Q1Pq.js";import{g as T}from"./dialog-mixin-JIveDGFs.js";import{i as M}from"./utils-BWNRMl9G.js";import{_ as S,r as n,o as t,c as e,b as r,d as i,f as v,l as C,n as I,w as b,t as d,F as L,i as B}from"./index-C7cPaXoT.js";const p={show:Boolean,mask:Boolean,message:{type:String,default:""},forbidClick:Boolean,zIndex:{type:Number,default:1e3},type:{type:String,default:"text"},loadingType:{type:String,default:"circular"},position:{type:String,default:"middle"},...P},z={name:"PressToast",options:{..._},components:{PressIconPlus:h,PressLoading:g,PressOverlay:k,PressTransition:w},mixins:[T(p)],props:p,emits:[],data(){return{notInUni:M()}},computed:{toastClass(){const{dataType:s,dataPosition:a}=this;return`press-toast press-toast--${s==="text"||s==="html"?"text":"icon"} press-toast--${a}`},transitionStyle(){const{dataZIndex:s}=this;return[`z-index: ${s}`,"left: 50%","max-width: var(--toast-max-width, 70%)","position: fixed","top: 50%","transform: translate(-50%, -50%)","width: -webkit-fit-content","width: fit-content"].join(";")}},watch:{},methods:{noop(){}}},H={class:"press-toast-index"},N={key:0},x=["innerHTML"],F=["innerHTML"],U={key:2,class:"press-toast__text"};function $(s,a,D,O,l,o){const m=n("press-overlay"),u=n("press-loading"),c=n("press-icon-plus"),y=n("press-transition");return t(),e("div",H,[s.mask||s.dataForbidClick?(t(),r(m,{key:0,show:s.dataShow,"z-index":s.dataZIndex,"custom-style":s.dataMask?"":"background-color: transparent;"},null,8,["show","z-index","custom-style"])):i("",!0),v(y,{show:s.dataShow,"custom-style":o.transitionStyle},{default:C(()=>[s.dataShow?(t(),e("div",{key:0,class:I(o.toastClass),onTouchmove:a[0]||(a[0]=b((...f)=>o.noop&&o.noop(...f),["stop","prevent"]))},[s.dataType==="text"?(t(),e("span",N,d(s.dataMessage),1)):l.notInUni&&s.dataType==="html"?(t(),e("span",{key:1,innerHTML:s.dataMessage},null,8,x)):s.dataType==="html"?(t(),e("span",{key:2,innerHTML:s.dataMessage},null,8,F)):(t(),e(L,{key:3},[s.dataType==="loading"?(t(),r(u,{key:0,color:"white",type:s.dataLoadingType,"custom-style":"margin: 10px 0;"},null,8,["type"])):(t(),r(c,{key:1,class:"press-toast__icon",name:s.dataType},null,8,["name"])),s.dataMessage?(t(),e("span",U,d(s.dataMessage),1)):i("",!0)],64)),B(s.$slots,"default",{},void 0,!0)],34)):i("",!0)]),_:3},8,["show","custom-style"])])}const K=S(z,[["render",$],["__scopeId","data-v-5bef4e35"]]);export{K as P};