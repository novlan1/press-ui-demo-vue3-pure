import{_ as y,o,c as m,a as n,n as f,h as c,l,t as S,d as b,r as d,b as k,k as u,M as P,e as p,G as g}from"./index-C8vugXWi.js";import{P as z}from"./press-field-D7bat82l.js";const B={name:"PressSection",props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1},headerStyle:{type:String,default:""},active:{type:Boolean,default:!0},clickable:{type:Boolean,default:!1}},emits:["click"],computed:{innerPadding(){return typeof this.padding=="string"?this.padding:this.padding?"10px":""}},methods:{onClick(){this.$emit("click")}}},V={class:"press-section-header__content"},D={class:"press-section-header__slot-right"};function I(s,t,e,_,r,i){return o(),m("div",{class:f(["press-section",[{"press-section--active":e.active},{"press-section--clickable":e.clickable}]])},[n("div",{class:"press-section-header",style:l(e.headerStyle),onClick:t[0]||(t[0]=(...a)=>i.onClick&&i.onClick(...a))},[e.type?(o(),m("div",{key:0,class:f(["press-section-header__decoration",[e.type,{"press-section-header__decoration--active":e.active}]])},null,2)):c(s.$slots,"decoration",{key:1}),n("div",V,[n("span",{style:l({"font-size":e.titleFontSize,color:e.titleColor}),class:f(["press-section__content-title",{distraction:!e.subTitle}])},S(e.title),7),e.subTitle?(o(),m("span",{key:0,style:l({"font-size":e.subTitleFontSize,color:e.subTitleColor}),class:"press-section-header__content-sub"},S(e.subTitle),5)):b("",!0)]),n("div",D,[c(s.$slots,"right")])],4),n("div",{class:"press-section-content",style:l({padding:i.innerPadding})},[c(s.$slots,"default")],4)],2)}const T=y(B,[["render",I]]),x={name:"PressDemoBlock",options:{styleIsolation:"shared"},components:{PressSection:T},props:{title:{type:String,default:""},sectionStyle:{type:String,default:""},headerStyle:{type:String,default:""}}};function F(s,t,e,_,r,i){const a=d("PressSection");return o(),k(a,{title:e.title,"header-style":e.headerStyle,type:"line"},{default:u(()=>[n("div",{class:"section-content",style:l(e.sectionStyle)},[c(s.$slots,"default",{},void 0,!0)],4)]),_:3},8,["title","header-style"])}const N=y(x,[["render",F],["__scopeId","data-v-09d77794"]]),w={name:"PressDemoInput",i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:z,PressButton:P,PressDemoBlock:N},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:()=>({maxHeight:600,minHeight:50})}},data(){return{inputValue:this.value}},watch:{value:{handler(s){this.inputValue=s}}},mounted(){},methods:{onClearInput(){this.inputValue=""},onConfirmInput(){this.$emit("confirm",this.inputValue)}}},H={class:"input__wrap"},U={class:"input__buttons"};function j(s,t,e,_,r,i){const a=d("PressField"),h=d("PressButton"),C=d("PressDemoBlock");return o(),k(C,{title:s.t("mockData"),"section-style":e.sectionStyle,"header-style":e.headerStyle},{default:u(()=>[n("div",H,[p(a,{modelValue:r.inputValue,"onUpdate:modelValue":t[0]||(t[0]=v=>r.inputValue=v),type:"textarea",autosize:e.autosize,placeholder:"请输入数据"},null,8,["modelValue","autosize"]),n("div",U,[p(h,{size:"small","custom-style":"margin-left: 0; margin-right: 8px",onClick:i.onClearInput},{default:u(()=>t[1]||(t[1]=[g(" 清空 ")])),_:1},8,["onClick"]),p(h,{type:"primary","custom-style":"margin: 0;",size:"small",onClick:i.onConfirmInput},{default:u(()=>t[2]||(t[2]=[g(" 确定 ")])),_:1},8,["onClick"])])])]),_:1},8,["title","section-style","header-style"])}const G=y(w,[["render",j],["__scopeId","data-v-278aeffb"]]);export{G as D};