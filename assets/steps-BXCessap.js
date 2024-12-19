import{v as x,z as b,x as N,E as S,_ as k,r as _,o,c as p,a as u,F as y,q as P,n as m,l as d,t as C,b as f,d as B,M as z,e as a,k as v,G as V}from"./index-88cP1sOH.js";import{a as E,b as w}from"./color-DciZLlTH.js";function h(e,c){return e<c?"finish":e===c?"process":"inactive"}const A={name:"PressSteps",options:{...x,styleIsolation:"shared"},components:{PressIconPlus:b},props:{icon:{type:String,default:""},steps:{type:Array,default:()=>[]},active:{type:Number,default:-1},direction:{type:String,default:"horizontal"},activeColor:{type:String,default:E},inactiveColor:{type:String,default:w},activeIcon:{type:String,default:"checked"},inactiveIcon:{type:String,default:""},descClass:{type:String,default:""},...N},emits:["click-step"],data(){return{status:h}},computed:{stepsClass(){const{direction:e,customClass:c}=this;return`${c} ${S.bem2("steps",[e])}`}},methods:{onClick(e){const{index:c}=e.currentTarget.dataset;this.$emit("click-step",c)},getStepClass(e){const{direction:c,active:t}=this;return`${S.bem2("step",[c,h(e,t)])} press-hairline`},getStepStyle(e){const{active:c,inactiveColor:t}=this;return h(e,c)==="inactive"?`color: ${t}`:""}}},D={class:"press-steps-index"},G={class:"press-step__wrapper"},R=["data-index"],F={class:"press-step__circle-container"};function T(e,c,t,I,i,n){const l=_("press-icon-plus");return o(),p("div",D,[u("div",{class:m(n.stepsClass)},[u("div",G,[(o(!0),p(y,null,P(t.steps,(r,s)=>(o(),p("div",{key:s,"data-index":s,class:m(n.getStepClass(s)),style:d(n.getStepStyle(s)),onClick:c[0]||(c[0]=(...g)=>n.onClick&&n.onClick(...g))},[u("div",{class:"press-step__title",style:d(s===t.active?"color: "+t.activeColor:"")},[u("div",null,C(r.text),1),u("div",{class:m(["press-step__desc",t.descClass])},C(r.desc),3)],4),u("div",F,[s!==t.active?(o(),p(y,{key:0},[r.inactiveIcon||t.inactiveIcon?(o(),f(l,{key:0,color:i.status(s,t.active)==="inactive"?t.inactiveColor:t.activeColor,name:r.inactiveIcon||t.inactiveIcon,"custom-class":"press-step__icon"},null,8,["color","name"])):(o(),p("div",{key:1,class:"press-step__circle",style:d("background-color: "+(s<t.active?t.activeColor:t.inactiveColor))},null,4))],64)):(o(),f(l,{key:1,name:r.activeIcon||t.activeIcon,color:t.activeColor,"custom-class":"press-step__icon"},null,8,["name","color"]))]),s!==t.steps.length-1?(o(),p("div",{key:0,class:"press-step__line",style:d("background-color: "+(s<t.active?t.activeColor:t.inactiveColor))},null,4)):B("",!0)],14,R))),128))])],2)])}const U=k(A,[["render",T],["__scopeId","data-v-df3dcc18"]]),q={i18n:{"zh-CN":{nextStep:"下一步",step1:"买家下单",step2:"商家接单",step3:"买家提货",step4:"交易完成",title2:"描述信息",title3:"竖向步骤条",status1:"【城市】物流状态1",status2:"【城市】物流状态",status3:"快件已发货",customStyle:"自定义样式",customIcon:"自定义图标"},"en-US":{nextStep:"Next Step",step1:"Step1",step2:"Step2",step3:"Step3",step4:"Step4",title2:"Description",title3:"Vertical Steps",status1:"【City】Status1",status2:"【City】Status2",status3:"【City】Status3",customStyle:"Custom Style",customIcon:"Custom Icon"}},components:{PressSteps:U,PressButton:z},data(){return{steps:[{text:this.t("step1"),desc:this.t("title2")},{text:this.t("step2"),desc:this.t("title2")},{text:this.t("step3"),desc:this.t("title2")},{text:this.t("step4"),desc:this.t("title2")}],stepsCustom:[{text:this.t("step1"),desc:this.t("title2"),inactiveIcon:"location-o",activeIcon:"success"},{text:this.t("step2"),desc:this.t("title2"),inactiveIcon:"like-o",activeIcon:"plus"},{text:this.t("step3"),desc:this.t("title2"),inactiveIcon:"star-o",activeIcon:"cross"},{text:this.t("step4"),desc:this.t("title2"),inactiveIcon:"phone-o",activeIcon:"fail"}],active:1}},methods:{onNextStep(){if(this.active===this.steps.length-1){this.active=0;return}this.active+=1}}},K={class:"demo-wrap"};function L(e,c,t,I,i,n){const l=_("press-steps"),r=_("PressButton"),s=_("demo-block");return o(),p("div",K,[a(s,{title:e.t("basicUsage")},{default:v(()=>[a(l,{steps:i.steps,active:i.active},null,8,["steps","active"]),a(r,{type:"e-sport-primary","custom-style":"margin: 8px 0 8px 0;",onClick:n.onNextStep},{default:v(()=>[V(C(e.t("nextStep")),1)]),_:1},8,["onClick"])]),_:1},8,["title"]),a(s,{title:e.t("customStyle")},{default:v(()=>[a(l,{steps:i.steps,active:i.active,"active-icon":"success","active-color":"#38f"},null,8,["steps","active"])]),_:1},8,["title"]),a(s,{title:e.t("customIcon")},{default:v(()=>[a(l,{steps:i.stepsCustom,active:i.active},null,8,["steps","active"])]),_:1},8,["title"]),a(s,{title:e.t("title3")},{default:v(()=>[a(l,{steps:i.steps,active:i.active,direction:"vertical","active-color":"#ee0a24"},null,8,["steps","active"])]),_:1},8,["title"])])}const Y=k(q,[["render",L]]);export{Y as default};