import{P}from"./press-button-BNvNLjda.js";import{P as b}from"./press-field-DfyCNmue.js";import{_ as y,o as l,c as m,a as s,n as f,i as c,m as o,t as S,d as z,r as d,b as k,l as u,f as p,A as g}from"./index-4prF5mFA.js";const B={name:"PressSection",props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1},headerStyle:{type:String,default:""},active:{type:Boolean,default:!0},clickable:{type:Boolean,default:!1}},emits:["click"],computed:{innerPadding(){return typeof this.padding=="string"?this.padding:this.padding?"10px":""}},methods:{onClick(){this.$emit("click")}}},V={class:"press-section-header__content"},D={class:"press-section-header__slot-right"};function I(t,i,e,_,r,n){return l(),m("div",{class:f(["press-section",[{"press-section--active":e.active},{"press-section--clickable":e.clickable}]])},[s("div",{class:"press-section-header",style:o(e.headerStyle),onClick:i[0]||(i[0]=(...a)=>n.onClick&&n.onClick(...a))},[e.type?(l(),m("div",{key:0,class:f(["press-section-header__decoration",[e.type,{"press-section-header__decoration--active":e.active}]])},null,2)):c(t.$slots,"decoration",{key:1}),s("div",V,[s("span",{style:o({"font-size":e.titleFontSize,color:e.titleColor}),class:f(["press-section__content-title",{distraction:!e.subTitle}])},S(e.title),7),e.subTitle?(l(),m("span",{key:0,style:o({"font-size":e.subTitleFontSize,color:e.subTitleColor}),class:"press-section-header__content-sub"},S(e.subTitle),5)):z("",!0)]),s("div",D,[c(t.$slots,"right")])],4),s("div",{class:"press-section-content",style:o({padding:n.innerPadding})},[c(t.$slots,"default")],4)],2)}const T=y(B,[["render",I]]),x={name:"PressDemoBlock",options:{styleIsolation:"shared"},components:{PressSection:T},props:{title:{type:String,default:""},sectionStyle:{type:String,default:""},headerStyle:{type:String,default:""}}};function F(t,i,e,_,r,n){const a=d("PressSection");return l(),k(a,{title:e.title,"header-style":e.headerStyle,type:"line"},{default:u(()=>[s("div",{class:"section-content",style:o(e.sectionStyle)},[c(t.$slots,"default",{},void 0,!0)],4)]),_:3},8,["title","header-style"])}const N=y(x,[["render",F],["__scopeId","data-v-09d77794"]]),w={name:"PressDemoInput",i18n:{"zh-CN":{custom:"自定义",mockData:"自定义数据"},"en-US":{custom:"Custom",mockData:"Custom Data"}},components:{PressField:b,PressButton:P,PressDemoBlock:N},props:{value:{type:String,default:""},sectionStyle:{type:String,default:"margin: 0;background: #f7f8fa;"},headerStyle:{type:String,default:"background: #f7f8fa;"},autosize:{type:[Boolean,Object],default:()=>({maxHeight:600,minHeight:50})}},data(){return{inputValue:this.value}},watch:{value:{handler(t){this.inputValue=t}}},mounted(){},methods:{onClearInput(){this.inputValue=""},onConfirmInput(){this.$emit("confirm",this.inputValue)}}},H={class:"input__wrap"},U={class:"input__buttons"};function j(t,i,e,_,r,n){const a=d("PressField"),h=d("PressButton"),C=d("PressDemoBlock");return l(),k(C,{title:t.t("mockData"),"section-style":e.sectionStyle,"header-style":e.headerStyle},{default:u(()=>[s("div",H,[p(a,{modelValue:r.inputValue,"onUpdate:modelValue":i[0]||(i[0]=v=>r.inputValue=v),type:"textarea",autosize:e.autosize,placeholder:"请输入数据"},null,8,["modelValue","autosize"]),s("div",U,[p(h,{size:"small","custom-style":"margin-left: 0; margin-right: 8px",onClick:n.onClearInput},{default:u(()=>[g(" 清空 ")]),_:1},8,["onClick"]),p(h,{type:"primary","custom-style":"margin: 0;",size:"small",onClick:n.onConfirmInput},{default:u(()=>[g(" 确定 ")]),_:1},8,["onClick"])])])]),_:1},8,["title","section-style","header-style"])}const O=y(w,[["render",j],["__scopeId","data-v-278aeffb"]]);export{O as D};
