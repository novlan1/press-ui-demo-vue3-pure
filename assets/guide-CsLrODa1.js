import{P as L}from"./press-overlay-CxfxI6bt.js";import{P as R}from"./press-popup-plus-Bz_RJS7v.js";import{_ as T,M as A,r as v,o as h,c as w,h as c,a as m,n as B,t as C,F as O,b as g,k as u,G as y,Q as W,B as M,l as I,e as p,am as D,d as V,D as N,an as F,z as q}from"./index-C8vugXWi.js";import{b as z,g as j}from"./rect-Djv_hxPF.js";import{P as H}from"./press-field-D7bat82l.js";import{P as U}from"./press-image-DmlLxFso.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";import"./press-cell-BLTCMYRJ.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";import"./parent-CQhE6Wqc.js";const Q={components:{PressButton:A},options:{styleIsolation:"shared"},props:{title:{type:String,default:""},body:{type:String,default:""},classPrefix:{type:String,default:""},steps:{type:Array,default:()=>[]},skipButton:{type:Object,default:()=>({})},backButton:{type:Object,default:()=>({})},nextButton:{type:Object,default:()=>({})},finishButton:{type:Object,default:()=>({})},current:{type:Number,default:-1},modeType:{type:String,default:""}},methods:{clickButton(...t){this.$emit("clickButton",...t)}}},J={key:0},K={key:1};function X(t,n,o,a,e,s){const i=v("PressButton");return!o.title&&!o.body?(h(),w("div",J,[c(t.$slots,"content-0",{},void 0,!0),c(t.$slots,"content-1",{},void 0,!0),c(t.$slots,"content-2",{},void 0,!0),c(t.$slots,"content-3",{},void 0,!0),c(t.$slots,"content-4",{},void 0,!0),c(t.$slots,"content-5",{},void 0,!0),c(t.$slots,"content-6",{},void 0,!0)])):(h(),w("div",K,[m("div",null,[o.title?(h(),w("div",{key:0,class:B([`${o.classPrefix}__title--${o.modeType}`])},C(o.title),3)):(h(),w(O,{key:1},[c(t.$slots,"content-0",{},void 0,!0),c(t.$slots,"content-1",{},void 0,!0),c(t.$slots,"content-2",{},void 0,!0),c(t.$slots,"content-3",{},void 0,!0),c(t.$slots,"content-4",{},void 0,!0),c(t.$slots,"content-5",{},void 0,!0),c(t.$slots,"content-6",{},void 0,!0)],64)),o.body?(h(),w("div",{key:2,class:B([`${o.classPrefix}__body--${o.modeType}`])},C(o.body),3)):(h(),w(O,{key:3},[c(t.$slots,"content-0",{},void 0,!0),c(t.$slots,"content-1",{},void 0,!0),c(t.$slots,"content-2",{},void 0,!0),c(t.$slots,"content-3",{},void 0,!0),c(t.$slots,"content-4",{},void 0,!0),c(t.$slots,"content-5",{},void 0,!0),c(t.$slots,"content-6",{},void 0,!0)],64))]),m("div",{class:B([`${o.classPrefix}__footer ${o.classPrefix}__footer--${o.modeType}`])},[o.current<o.steps.length-1?(h(),g(i,{key:0,type:o.skipButton.type,size:o.skipButton.size,"custom-class":o.skipButton.class,onClick:n[0]||(n[0]=()=>s.clickButton(o.skipButton.iType))},{default:u(()=>[y(C(o.skipButton.content),1)]),_:1},8,["type","size","custom-class"])):(h(),g(i,{key:1,type:o.backButton.type,size:o.backButton.size,"custom-class":o.backButton.class,onClick:n[1]||(n[1]=()=>s.clickButton(o.backButton.iType))},{default:u(()=>[y(C(o.backButton.content),1)]),_:1},8,["type","size","custom-class"])),o.current<o.steps.length-1?(h(),g(i,{key:2,type:o.nextButton.type,size:o.nextButton.size,"custom-class":o.nextButton.class,onClick:n[2]||(n[2]=()=>s.clickButton(o.nextButton.iType))},{default:u(()=>[y(C(o.nextButton.content),1)]),_:1},8,["type","size","custom-class"])):(h(),g(i,{key:3,type:o.finishButton.type,size:o.finishButton.size,"custom-class":o.finishButton.class,onClick:n[3]||(n[3]=()=>s.clickButton(o.finishButton.iType))},{default:u(()=>[y(C(o.finishButton.content),1)]),_:1},8,["type","size","custom-class"]))],2)]))}const Y=T(Q,[["render",X],["__scopeId","data-v-e579cf3e"]]),Z={backButtonProps:{type:Object,default:()=>({})},current:{type:Number,default:-1},finishButtonProps:{type:Object,default:()=>({})},hideCounter:{type:Boolean,default:!1},hideSkip:{type:Boolean,default:!1},highlightPadding:{type:Number,default:16},mode:{type:String,default:"popover"},nextButtonProps:{type:Object,default:()=>({})},showOverlay:{type:Boolean,default:!0},skipButtonProps:{type:Object,default:()=>({})},steps:{type:Array,default:()=>[]},usingCustomNavbar:{type:Boolean,default:!1},zIndex:{type:Number,default:999999}},$=z(),E=t=>Math.floor($.windowWidth*t/750),x="press-guide",S="press";let _;const ee={name:"PressGuide",components:{PressOverlay:L,PressPopup:R,GuideContent:Y},options:{styleIsolation:"shared"},props:Z,data(){return _=this,{prefix:S,classPrefix:x,innerCurrent:-1,innerSteps:[],referenceStyle:"",referenceRawStyle:{},popoverStyle:"opacity: 0",title:"",body:"",nonOverlay:!1,iButtonProps:{},entered:!1}},computed:{currentStep(){const{steps:t,innerCurrent:n}=this;return t[n]},modeType(){var n;return(((n=this.currentStep)==null?void 0:n.mode)??this.mode)==="dialog"?"dialog":"popover"},visible(){return!!this.currentStep}},watch:{steps(){this.init()},current:{handler(t){this.innerCurrent=t,this.init()},immediate:!0},showOverlay(){this.init()}},created(){this.iGetPlacement=this.getPlacement()},mounted(){this.init()},methods:{async callback(){W(async()=>{const t=await _.placementOffset(_.currentStep,_.referenceRawStyle);_.setData({popoverStyle:t})})},afterEnter(){this.entered=!0},afterLeave(){this.entered=!1},setData(t,n){Object.keys(t).forEach(o=>{this[o]=t[o]}),typeof n=="function"&&setTimeout(()=>{n()})},async init(){const{currentStep:t,modeType:n}=this,{windowHeight:o,windowWidth:a}=z();if(!t)return;const e=t.showOverlay??this.showOverlay;if(this.setData({nonOverlay:!e}),n==="popover"){const s=await j(null,t.element,!0);if(!s)return;const i=E(t.highlightPadding??this.highlightPadding),f=s.top-i,k=a-s.right-i,b=o-s.bottom-i,P=s.left-i,l={top:`${f}px`,right:`${k}px`,bottom:`${b}px`,left:`${P}px`};this.setData({innerSteps:this.steps,referenceStyle:M(l),referenceRawStyle:l,title:t.title??"",body:t.body??"",iButtonProps:this.buttonProps(t,"popover")}),this.entered&&this.callback()}else this.setData({innerSteps:this.steps,title:t.title??"",body:t.body??"",iButtonProps:this.buttonProps(t,"dialog")})},async placementOffset({placement:t,offset:n},o){var s,i;const a=await j(this,`.${x}__container`,!0),e=(i=(s=this.iGetPlacement)[t])==null?void 0:i.call(s,a,o,n);return M({position:"absolute",...e})},buttonProps(t,n){let o=t.skipButtonProps??this.skipButtonProps;const a=n==="popover"?"small":"normal";o={type:"default",content:"跳过",size:a,...o,class:`${S}-class-skip ${x}__button ${t.hideSkip?`${x}__button--hidden`:""} ${(o==null?void 0:o.class)||""}`,iType:"skip"};let e=t.nextButtonProps??this.nextButtonProps;e={type:"primary",content:"下一步",size:a,...e,class:`${S}-class-next ${x}__button ${(e==null?void 0:e.class)||""}`,iType:"next"},e={...e,content:this.buttonContent(e)};let s=t.backButtonProps??this.backButtonProps;s={type:"default",content:"返回",size:a,...s,class:`${S}-class-back ${x}__button ${(s==null?void 0:s.class)||""}`,iType:"back"};let i=t.finishButtonProps??this.finishButtonProps;return i={type:"primary",content:"完成",size:a,...i,class:`${S}-class-finish ${x}__button ${(i==null?void 0:i.class)||""}`,iType:"finish"},i={...i,content:this.buttonContent(i)},{skipButton:o,nextButton:e,backButton:s,finishButton:i}},buttonContent(t){const{steps:n,innerCurrent:o,hideCounter:a}=this;return`${t.content.replace(/ \(.*?\)/,"")}${a?"":` (${o+1}/${n.length})`}`},onTplButtonTap(t){const n={current:this.innerCurrent,total:this.steps.length};switch(t){case"next":this.$emit("next-step-click",{next:this.innerCurrent+1,...n}),this.setData({innerCurrent:this.innerCurrent+1});break;case"skip":this.$emit("skip",n),this.setData({innerCurrent:-1});break;case"back":this.$emit("back",n),this.setData({innerCurrent:0});break;case"finish":this.$emit("finish",n),this.setData({innerCurrent:99999999});break}this.init(),this.$emit("change",{current:this.innerCurrent})},getPlacement(){const{windowHeight:t,windowWidth:n}=z(),o=E(32),a=l=>N(F(l==null?void 0:l[0])?`${l==null?void 0:l[0]}rpx`:(l==null?void 0:l[0])||0),e=l=>N(F(l==null?void 0:l[1])?`${l==null?void 0:l[1]}rpx`:(l==null?void 0:l[1])||0),s=l=>parseFloat(l.bottom),i=l=>parseFloat(l.left),f=l=>parseFloat(l.right),k=l=>parseFloat(l.top),b=l=>t-s(l)-k(l),P=l=>n-i(l)-f(l);return{center:(l,r,d)=>({top:`${Math.max(b(r)+k(r)+o+e(d),1)}px`,left:`${Math.max(P(r)/2+i(r)-l.width/2+a(d),1)}px`}),bottom:(l,r,d)=>({top:`${Math.max(b(r)+k(r)+o+e(d),1)}px`,left:`${Math.max(P(r)/2+i(r)-l.width/2+a(d),1)}px`}),"bottom-left":(l,r,d)=>({top:`${Math.max(b(r)+k(r)+o+e(d),1)}px`,left:`${Math.max(i(r)+a(d),1)}px`}),"bottom-right":(l,r,d)=>({top:`${Math.max(b(r)+k(r)+o+e(d),1)}px`,right:`${Math.max(f(r)-a(d),1)}px`}),left:(l,r,d)=>({top:`${Math.max(b(r)/2+k(r)-l.height/2+e(d),1)}px`,right:`${Math.max(P(r)+f(r)+o-a(d),1)}px`}),"left-top":(l,r,d)=>({top:`${Math.max(k(r)+e(d),1)}px`,right:`${Math.max(P(r)+f(r)+o-a(d),1)}px`}),"left-bottom":(l,r,d)=>({bottom:`${Math.max(s(r)-e(d),1)}px`,right:`${Math.max(P(r)+f(r)+o-a(d),1)}px`}),right:(l,r,d)=>({top:`${Math.max(b(r)/2+k(r)-l.height/2+e(d),1)}px`,left:`${Math.max(i(r)+P(r)+o+a(d),1)}px`}),"right-top":(l,r,d)=>({top:`${Math.max(k(r)+e(d),1)}px`,left:`${Math.max(i(r)+P(r)+o+a(d),1)}px`}),"right-bottom":(l,r,d)=>({bottom:`${Math.max(s(r)-e(d),1)}px`,left:`${Math.max(i(r)+P(r)+o+a(d),1)}px`}),top:(l,r,d)=>({bottom:`${Math.max(b(r)+s(r)+o-e(d),1)}px`,left:`${Math.max(P(r)/2+i(r)-l.width/2+a(d),1)}px`}),"top-left":(l,r,d)=>({bottom:`${Math.max(b(r)+s(r)+o-e(d),1)}px`,left:`${Math.max(i(r)+a(d),1)}px`}),"top-right":(l,r,d)=>({bottom:`${Math.max(b(r)+s(r)+o-e(d),1)}px`,right:`${Math.max(f(r)-a(d),1)}px`})}}}};function te(t,n,o,a,e,s){const i=v("GuideContent"),f=v("PressOverlay"),k=v("PressPopup");return h(),w("div",null,[s.modeType==="popover"?(h(),g(f,{key:0,show:s.visible,"using-custom-navbar":t.usingCustomNavbar,"background-color":"transparent","custom-class":"press-guide___overlay","z-index":t.zIndex,"enter-callback":s.callback,onAfterEnter:s.afterEnter,onAfterLeave:s.afterLeave},{default:u(()=>[m("div",{class:B(e.classPrefix)},[m("div",{class:B([`${e.classPrefix}__reference`,`${e.nonOverlay?e.classPrefix+"__reference--nonoverlay":""}`]),style:I(e.referenceStyle)},null,6),m("div",{class:B([`${e.classPrefix}__container`,`${e.title||e.body?e.classPrefix+"__container--"+s.modeType:""}`]),style:I(e.popoverStyle)},[p(i,{"class-prefix":e.classPrefix,title:e.title,body:e.body,steps:t.steps,current:e.innerCurrent,"mode-type":s.modeType,"skip-button":e.iButtonProps.skipButton,"back-button":e.iButtonProps.backButton,"next-button":e.iButtonProps.nextButton,"finish-button":e.iButtonProps.finishButton,onClickButton:s.onTplButtonTap},D({_:2},[e.innerCurrent===0?{name:"content-0",fn:u(()=>[c(t.$slots,"content-0",{},void 0,!0)]),key:"0"}:void 0,e.innerCurrent===1?{name:"content-1",fn:u(()=>[c(t.$slots,"content-1",{},void 0,!0)]),key:"1"}:void 0,e.innerCurrent===2?{name:"content-2",fn:u(()=>[c(t.$slots,"content-2",{},void 0,!0)]),key:"2"}:void 0,e.innerCurrent===3?{name:"content-3",fn:u(()=>[c(t.$slots,"content-3",{},void 0,!0)]),key:"3"}:void 0,e.innerCurrent===4?{name:"content-4",fn:u(()=>[c(t.$slots,"content-4",{},void 0,!0)]),key:"4"}:void 0,e.innerCurrent===5?{name:"content-5",fn:u(()=>[c(t.$slots,"content-5",{},void 0,!0)]),key:"5"}:void 0,e.innerCurrent===6?{name:"content-6",fn:u(()=>[c(t.$slots,"content-6",{},void 0,!0)]),key:"6"}:void 0]),1032,["class-prefix","title","body","steps","current","mode-type","skip-button","back-button","next-button","finish-button","onClickButton"])],6)],2)]),_:3},8,["show","using-custom-navbar","z-index","enter-callback","onAfterEnter","onAfterLeave"])):s.modeType==="dialog"?(h(),g(k,{key:1,show:s.visible,"show-overlay":!e.nonOverlay,"using-custom-navbar":t.usingCustomNavbar,"z-index":t.zIndex,placement:"center"},{default:u(()=>[m("div",{class:B(e.classPrefix)},[m("div",{class:B([`${e.classPrefix}__container`,`${e.title||e.body?e.classPrefix+"__container--"+s.modeType:""}`])},[p(i,{"class-prefix":e.classPrefix,title:e.title,body:e.body,steps:t.steps,current:e.innerCurrent,"mode-type":s.modeType,"button-props":e.iButtonProps,"skip-button":e.iButtonProps.skipButton,"back-button":e.iButtonProps.backButton,"next-button":e.iButtonProps.nextButton,"finish-button":e.iButtonProps.finishButton,onClickButton:s.onTplButtonTap},D({_:2},[e.innerCurrent===0?{name:"content-0",fn:u(()=>[c(t.$slots,"content-0",{},void 0,!0)]),key:"0"}:void 0,e.innerCurrent===1?{name:"content-1",fn:u(()=>[c(t.$slots,"content-1",{},void 0,!0)]),key:"1"}:void 0,e.innerCurrent===2?{name:"content-2",fn:u(()=>[c(t.$slots,"content-2",{},void 0,!0)]),key:"2"}:void 0,e.innerCurrent===3?{name:"content-3",fn:u(()=>[c(t.$slots,"content-3",{},void 0,!0)]),key:"3"}:void 0,e.innerCurrent===4?{name:"content-4",fn:u(()=>[c(t.$slots,"content-4",{},void 0,!0)]),key:"4"}:void 0,e.innerCurrent===5?{name:"content-5",fn:u(()=>[c(t.$slots,"content-5",{},void 0,!0)]),key:"5"}:void 0,e.innerCurrent===6?{name:"content-6",fn:u(()=>[c(t.$slots,"content-6",{},void 0,!0)]),key:"6"}:void 0]),1032,["class-prefix","title","body","steps","current","mode-type","button-props","skip-button","back-button","next-button","finish-button","onClickButton"])],2)],2)]),_:3},8,["show","show-overlay","using-custom-navbar","z-index"])):V("",!0)])}const ne=T(ee,[["render",te],["__scopeId","data-v-2ffce066"]]),se={i18n:{"zh-CN":{guide:"用户引导",noMask:"不带遮罩的引导",dialog:"弹窗形式的引导",multiple:"气泡与弹窗混合的引导",customPopover:"自定义气泡"},"en-US":{guide:"Guide",noMask:"No Mask",dialog:"Dialog",multiple:"Popover And Dialog",customPopover:"Custom Popover"}},components:{PressGuide:ne,PressButton:A,PressField:H,PressImage:U,PressPopupPlus:R,PressIconPlus:q},data(){return{current:-1,steps:[],showGuide:!1,showOverlay:!0,showDialogGuide:!1,showCustomGuide:!1,ORIGIN_STEPS:[{element:".main-title",title:"用户引导标题",body:"用户引导的说明文案",placement:"center"},{element:".label-field",title:"用户引导标题",body:"用户引导的说明文案",placement:"bottom",highlightPadding:0},{element:".action",title:"用户引导标题",body:"用户引导的说明文案",placement:"bottom-right"}],popupStyle:""}},mounted(){const{windowTop:t=0}=z();this.popupStyle=`height: calc(100vh - ${t}px)`},methods:{close(){console.log(">>> close"),this.showGuide=!1},async onShowGuide(t){const{showOverlay:n=!0,showDialogGuide:o=!1,multiple:a=!1,showCustomGuide:e=!1}=t||{};this.current=-1,this.showGuide=!0,await new Promise(s=>setTimeout(s,800)),this.current=0,this.showOverlay=n,this.showDialogGuide=o,this.showCustomGuide=e,this.showDialogGuide?a?this.steps=this.ORIGIN_STEPS.map((s,i)=>{const{element:f,title:k,body:b,placement:P,highlightPadding:l}=s,r=a&&i==1;let d,G;return r?(d="dialog",G=void 0):(d="popover",G=b),{element:f,title:k,placement:P,highlightPadding:l,mode:d,body:G}}):this.steps=this.ORIGIN_STEPS.map(s=>{const{element:i,title:f,placement:k,highlightPadding:b}=s;return{element:i,title:f,placement:k,highlightPadding:b,mode:"dialog"}}):this.showCustomGuide?this.steps=this.ORIGIN_STEPS.map(s=>{const{element:i,placement:f,highlightPadding:k}=s;return{element:i,placement:f,highlightPadding:k}}):this.steps=this.ORIGIN_STEPS.map(s=>s),console.log(">>> steps",this.steps)},skip(){this.close()},back(){this.current-=1},next(){this.current+=1},finish(){this.close()}}},oe={class:"demo-wrap"},ie={class:"field label-field"},le={class:"field"},re={class:"action"},ue={class:"dialog-slot-body"},de={class:"dialog-slot-body"},ce={class:"dialog-slot-body"},ae={class:"content"},me={class:"footer"},he={class:"content"},pe={class:"footer"},ye={class:"content"},fe={class:"footer"};function ke(t,n,o,a,e,s){const i=v("PressButton"),f=v("demo-block"),k=v("PressField"),b=v("PressImage"),P=v("PressGuide"),l=v("PressIconPlus"),r=v("PressPopupPlus");return h(),w("div",oe,[p(f,{title:t.t("basicUsage")},{default:u(()=>[p(i,{onClick:s.onShowGuide},{default:u(()=>[y(C(t.t("guide")),1)]),_:1},8,["onClick"])]),_:1},8,["title"]),p(f,{title:t.t("noMask")},{default:u(()=>[p(i,{onClick:n[0]||(n[0]=()=>s.onShowGuide({showOverlay:!1}))},{default:u(()=>[y(C(t.t("guide")),1)]),_:1})]),_:1},8,["title"]),p(f,{title:t.t("dialog")},{default:u(()=>[p(i,{onClick:n[1]||(n[1]=()=>s.onShowGuide({showDialogGuide:!0}))},{default:u(()=>[y(C(t.t("guide")),1)]),_:1})]),_:1},8,["title"]),p(f,{title:t.t("multiple")},{default:u(()=>[p(i,{onClick:n[2]||(n[2]=()=>s.onShowGuide({showDialogGuide:!0,multiple:!0}))},{default:u(()=>[y(C(t.t("guide")),1)]),_:1})]),_:1},8,["title"]),p(f,{title:t.t("customPopover")},{default:u(()=>[p(i,{onClick:n[3]||(n[3]=()=>s.onShowGuide({showCustomGuide:!0}))},{default:u(()=>[y(C(t.t("guide")),1)]),_:1})]),_:1},8,["title"]),p(r,{show:e.showGuide,position:"bottom",overlay:!1,"custom-style":e.popupStyle},{default:u(()=>[m("div",null,[n[6]||(n[6]=m("div",{class:"main-title"},[m("div",{class:"title-major"}," 用户引导标题 "),m("div",{class:"title-sub"}," 按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。 ")],-1)),m("div",ie,[p(k,{label:"标签文字",layout:"vertical",placeholder:"请输入文字"})]),m("div",le,[p(k,{label:"标签文字",layout:"vertical",placeholder:"请输入文字"})]),m("div",re,[p(i,{block:"",theme:"light",size:"large"},{default:u(()=>n[4]||(n[4]=[y(" 重置 ")])),_:1}),p(i,{block:"",theme:"primary",size:"large"},{default:u(()=>n[5]||(n[5]=[y(" 确定 ")])),_:1})])]),e.showDialogGuide?(h(),g(P,{key:0,current:e.current,steps:e.steps,"show-overlay":e.showOverlay,mode:"dialog",onSkip:s.close,onFinish:s.close},{"content-0":u(()=>[m("div",ue,[n[7]||(n[7]=m("p",null,"用户引导的说明文案 1",-1)),p(b,{class:"guide-demo-image",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_9f901ce42e18990883.jpeg"})])]),"content-1":u(()=>[m("div",de,[n[8]||(n[8]=m("p",null,"用户引导的说明文案 2",-1)),p(b,{class:"guide-demo-image",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_9f901ce42e18990883.jpeg"})])]),"content-2":u(()=>[m("div",ce,[n[9]||(n[9]=m("p",null,"用户引导的说明文案 3",-1)),p(b,{class:"guide-demo-image",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_9f901ce42e18990883.jpeg"})])]),_:1},8,["current","steps","show-overlay","onSkip","onFinish"])):e.showCustomGuide?(h(),g(P,{key:1,current:e.current,steps:e.steps,"show-overlay":e.showOverlay,onSkip:s.close,onFinish:s.close},{"content-0":u(()=>[m("div",ae,[p(l,{name:"arrow-up",size:"32px",color:"#fff",class:"icon"}),n[14]||(n[14]=m("p",{class:"text"}," 1、自定义的图形或说明文案，用来解释或指导该功能使用。 ",-1)),m("div",me,[e.current<e.steps.length-1?(h(),g(i,{key:0,theme:"light",size:"small",class:"guide-demo-button",onClick:s.skip},{default:u(()=>n[10]||(n[10]=[y(" 跳过 ")])),_:1},8,["onClick"])):(h(),g(i,{key:1,class:"guide-demo-button",theme:"light",size:"small",onClick:s.back},{default:u(()=>n[11]||(n[11]=[y(" 返回 ")])),_:1},8,["onClick"])),e.current<e.steps.length-1?(h(),g(i,{key:2,theme:"primary",content:"下一步",size:"small",class:"guide-demo-button",onClick:s.next},{default:u(()=>n[12]||(n[12]=[y(" 下一步 ")])),_:1},8,["onClick"])):(h(),g(i,{key:3,class:"guide-demo-button",theme:"primary",content:"完成",size:"small",onClick:s.finish},{default:u(()=>n[13]||(n[13]=[y(" 完成 ")])),_:1},8,["onClick"]))])])]),"content-1":u(()=>[m("div",he,[p(l,{name:"arrow-up",size:"32px",color:"#fff",class:"icon"}),n[19]||(n[19]=m("p",{class:"text"}," 2、自定义的图形或说明文案，用来解释或指导该功能使用。 ",-1)),m("div",pe,[e.current<e.steps.length-1?(h(),g(i,{key:0,theme:"light",content:"跳过",size:"small",class:"guide-demo-button",onClick:s.skip},{default:u(()=>n[15]||(n[15]=[y(" 跳过 ")])),_:1},8,["onClick"])):(h(),g(i,{key:1,class:"guide-demo-button",theme:"light",content:"返回",size:"small",onClick:s.back},{default:u(()=>n[16]||(n[16]=[y(" 返回 ")])),_:1},8,["onClick"])),e.current<e.steps.length-1?(h(),g(i,{key:2,theme:"primary",content:"下一步",size:"small",class:"guide-demo-button",onClick:s.next},{default:u(()=>n[17]||(n[17]=[y(" 下一步 ")])),_:1},8,["onClick"])):(h(),g(i,{key:3,class:"guide-demo-button",theme:"primary",content:"完成",size:"small",onClick:s.finish},{default:u(()=>n[18]||(n[18]=[y(" 完成 ")])),_:1},8,["onClick"]))])])]),"content-2":u(()=>[m("div",ye,[p(l,{name:"arrow-up",size:"32px",color:"#fff",class:"icon"}),n[24]||(n[24]=m("p",{class:"text"}," 3、自定义的图形或说明文案，用来解释或指导该功能使用。 ",-1)),m("div",fe,[e.current<e.steps.length-1?(h(),g(i,{key:0,theme:"light",content:"跳过",size:"small",class:"guide-demo-button",onClick:s.skip},{default:u(()=>n[20]||(n[20]=[y(" 跳过 ")])),_:1},8,["onClick"])):(h(),g(i,{key:1,class:"guide-demo-button",theme:"light",content:"返回",size:"small",onClick:s.back},{default:u(()=>n[21]||(n[21]=[y(" 返回 ")])),_:1},8,["onClick"])),e.current<e.steps.length-1?(h(),g(i,{key:2,theme:"primary",content:"下一步",size:"small",class:"guide-demo-button",onClick:s.next},{default:u(()=>n[22]||(n[22]=[y(" 下一步 ")])),_:1},8,["onClick"])):(h(),g(i,{key:3,class:"guide-demo-button",theme:"primary",content:"完成",size:"small",onClick:s.finish},{default:u(()=>n[23]||(n[23]=[y(" 完成 ")])),_:1},8,["onClick"]))])])]),_:1},8,["current","steps","show-overlay","onSkip","onFinish"])):(h(),g(P,{key:2,current:e.current,steps:e.steps,"show-overlay":e.showOverlay,onSkip:s.close,onFinish:s.close},null,8,["current","steps","show-overlay","onSkip","onFinish"]))]),_:1},8,["show","custom-style"])])}const Te=T(se,[["render",ke],["__scopeId","data-v-13ce5078"]]);export{Te as default};
