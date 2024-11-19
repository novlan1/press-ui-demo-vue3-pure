import{Q as c,x as T,v as P,N,a1 as A,G as D,S as w,am as G,_ as I,r as C,o as a,c as l,e as M,k as p,n as S,h as B,F as z,H as g,t as u,d as r,a as F,b as k}from"./index-BIszYdsF.js";import{a as L}from"./handler-helper-BKr0zvNe.js";import{s as U,a as v}from"./index-DGqvfnw9.js";import{i as E}from"./h5-handler-BT3pLE7_.js";import{P as V}from"./press-popup-plus-DOKlUIW1.js";import{R as j,G as R}from"./color-DciZLlTH.js";import{g as $}from"./dialog-mixin-UoyuQObn.js";const b={show:{type:Boolean,default:!1},title:{type:String,default:""},message:{type:String,default:""},theme:{type:String,default:"default"},useSlot:Boolean,className:{type:String,default:""},customStyle:{type:String,default:""},asyncClose:Boolean,messageAlign:{type:String,default:""},beforeClose:{type:[null,Function],default:null},overlayStyle:{type:String,default:""},useTitleSlot:Boolean,showCancelButton:Boolean,closeOnClickOverlay:Boolean,confirmButtonOpenType:{type:String,default:""},width:{type:[String,Number],default:""},zIndex:{type:Number,default:2e3},confirmButtonText:{type:String,default:c("confirm")},cancelButtonText:{type:String,default:c("cancel")},confirmButtonColor:{type:String,default:j},cancelButtonColor:{type:String,default:R},showConfirmButton:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},transition:{type:String,default:"scale"},...T},H={name:"PressDialogPlus",options:{...P,styleIsolation:"shared"},components:{PressPopup:V,PressButton:N},mixins:[A,$(b)],props:b,emits:["close","confirm","cancel"],data(){return{utils:D,loading:{confirm:!1,cancel:!1},callback:()=>{}}},watch:{dataShow:{handler(e){e||this.stopLoading()}}},methods:{onConfirm(){this.handleAction("confirm")},onCancel(){this.handleAction("cancel")},onClickOverlay(){this.close("overlay")},close(e){this.dataShow=!1,w(()=>{this.$emit("close",e);const{callback:s}=this;s&&s(e,this)})},stopLoading(){this.loading.confirm=!1,this.loading.cancel=!1},handleAction(e){this.$emit(e,{dialog:this});const{dataAsyncClose:s,dataBeforeClose:o}=this;if(!s&&!o){this.close(e);return}this.loading[e]=!0,o&&G(o(e)).then(i=>{i?this.close(e):this.stopLoading()})}}},Q={class:"press-dialog-index"},q={class:"press-dialog__message-text"},W={key:3,class:"press-hairline--top press-dialog__footer"};function Y(e,s,o,i,t,n){const d=C("press-button"),m=C("press-popup");return a(),l("div",Q,[M(m,{show:e.dataShow,"z-index":e.dataZIndex,overlay:e.dataOverlay,transition:e.dataTransition,"custom-class":"press-dialog press-dialog--"+e.dataTheme+" "+e.dataClassName,"custom-style":"width: "+t.utils.addUnit(e.dataWidth)+";"+e.dataCustomStyle,"overlay-style":e.dataOverlayStyle,"close-on-click-overlay":e.dataCloseOnClickOverlay,onClose:n.onClickOverlay},{default:p(()=>[e.dataTitle||e.dataUseTitleSlot?(a(),l("div",{key:0,class:S(t.utils.bem2("dialog__header",{isolated:!(e.dataMessage||e.dataUseSlot)}))},[e.dataUseTitleSlot?B(e.$slots,"title",{key:0},void 0,!0):e.dataTitle?(a(),l(z,{key:1},[g(u(e.dataTitle),1)],64)):r("",!0)],2)):r("",!0),e.dataUseSlot?B(e.$slots,"default",{key:1},void 0,!0):e.dataMessage?(a(),l("div",{key:2,class:S(t.utils.bem2("dialog__message",[e.dataTheme,e.dataMessageAlign,{hasTitle:e.dataTitle}]))},[F("span",q,u(e.dataMessage),1)],2)):r("",!0),(a(),l("div",W,[e.dataShowCancelButton?(a(),k(d,{key:0,size:"large",loading:t.loading.cancel,class:"press-dialog__button press-hairline--right","custom-class":"press-dialog__cancel","custom-style":"color: "+e.dataCancelButtonColor,onClick:n.onCancel},{default:p(()=>[g(u(e.dataCancelButtonText),1)]),_:1},8,["loading","custom-style","onClick"])):r("",!0),e.dataShowConfirmButton?(a(),k(d,{key:1,size:"large",class:"press-dialog__button",loading:t.loading.confirm,"custom-class":"press-dialog__confirm","custom-style":"color: "+e.dataConfirmButtonColor,"open-type":e.dataConfirmButtonOpenType,lang:e.lang,"business-id":e.businessId,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter,onClick:n.onConfirm,onGetuserinfo:e.onGetUserInfo,onContact:e.onContact,onGetphonenumber:e.onGetPhoneNumber,onError:e.onError,onLaunchapp:e.onLaunchApp,onOpensetting:e.onOpenSetting},{default:p(()=>[g(u(e.dataConfirmButtonText),1)]),_:1},8,["loading","custom-style","open-type","lang","business-id","session-from","send-message-title","send-message-path","send-message-img","show-message-card","app-parameter","onClick","onGetuserinfo","onContact","onGetphonenumber","onError","onLaunchapp","onOpensetting"])):r("",!0)]))]),_:3},8,["show","z-index","overlay","transition","custom-class","custom-style","overlay-style","close-on-click-overlay","onClose"])])}const Z=I(H,[["render",Y],["__scopeId","data-v-5242f5aa"]]);let f=[];const O={show:!1,title:"",width:null,theme:"default",message:"",zIndex:100,overlay:!0,selector:"#press-dialog",className:"",asyncClose:!1,beforeClose:null,transition:"scale",customStyle:"",messageAlign:"",overlayStyle:"",confirmButtonText:c("confirm"),cancelButtonText:c("cancel"),showConfirmButton:!0,showCancelButton:!1,closeOnClickOverlay:!1,confirmButtonOpenType:""};let h=Object.assign({},O);function J(){const e=getCurrentPages();return e[e.length-1]}const K=e=>(e=Object.assign(Object.assign({},h),e),new Promise((s,o)=>{const i=e.context||J();let t=U(i,e.selector);if(delete e.context,delete e.selector,t||(t=E(Z,"press-dialog")),t){const n=(m,y)=>{m==="confirm"?s(y):o(y)},d={...e};v(t,d),t.callback=n,t.$vm&&(t.$vm.callback=n),w(()=>{v(t,{show:!0})}),f.push(t)}else console.warn("The press-dialog node is not found, please confirm whether the selector and context are correct")}));function X(e){f=e}function _(e){h=e}L({Dialog:K,queue:f,currentOptions:h,defaultOptions:O,updateQueue:X,updateCurrentOptions:_});export{K as D,Z as P};
