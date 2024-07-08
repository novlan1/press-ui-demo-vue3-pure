import{a as p}from"./add-unit-Df5pRFBE.js";import{n as b}from"./test-CXO-MJ-T.js";import{_ as g,o as r,c as d,F as v,i as V,v as m,t as S,d as h,a as x,f as o,n as a,r as f}from"./index-BZexHo5h.js";const L={props:{adjustPosition:{type:Boolean,default:!0},maxLength:{type:[String,Number],default:6},dot:{type:Boolean,default:!1},mode:{type:String,default:"box"},hairline:{type:Boolean,default:!1},space:{type:[String,Number],default:10},value:{type:[String,Number],default:""},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},color:{type:String,default:"#606266"},fontSize:{type:[String,Number],default:18},size:{type:[String,Number],default:35},disabledKeyboard:{type:Boolean,default:!1},borderColor:{type:String,default:"#c9cacc"},disabledDot:{type:Boolean,default:!0}}};function C(e,t=!1){return b(`${e}`)?t?`${e}px`:Number(e):/(rpx|upx)$/.test(`${e}`)?t?`${uni.upx2px(parseInt(`${e}`))}px`:Number(uni.upx2px(parseInt(`${e}`))):t?`${parseInt(`${e}`)}px`:parseInt(`${e}`)}const F={name:"PressCodeInput",mixins:[L],emits:["change","finish","input"],data(){return{inputValue:"",isFocus:this.focus}},computed:{codeLength(){return new Array(Number(this.maxLength))},itemStyle(){return e=>{const t={width:p(this.size),height:p(this.size)};return this.mode==="box"&&(t.border=`${this.hairline?.5:1}px solid ${this.borderColor}`,C(this.space)===0&&(e===0&&(t.borderTopLeftRadius="3px",t.borderBottomLeftRadius="3px"),e===this.codeLength.length-1&&(t.borderTopRightRadius="3px",t.borderBottomRightRadius="3px"),e!==this.codeLength.length-1&&(t.borderRight="none"))),e!==this.codeLength.length-1?t.marginRight=p(this.space):t.marginRight=0,t}},codeArray(){return String(this.inputValue).split("")},lineStyle(){const e={};return e.height=this.hairline?"2px":"4px",e.width=p(this.size),e.backgroundColor=this.borderColor,e}},watch:{value:{immediate:!0,handler(e){this.inputValue=String(e).substring(0,this.maxLength)||""}}},methods:{addUnit:p,inputHandler(e){const{value:t}=e.detail||e.target;this.inputValue=t,this.disabledDot&&this.$nextTick(()=>{this.inputValue=t.replace(".","")}),this.$emit("change",t),this.$emit("input",t),String(t).length>=Number(this.maxLength)&&this.$emit("finish",t)}}},_={class:"press-code-input"},B={key:0,class:"press-code-input__item__dot"},N=["disabled","focus","value","maxlength","adjustPosition"];function U(e,t,c,y,l,i){return r(),d("div",_,[(r(!0),d(v,null,V(i.codeLength,(u,s)=>(r(),d("div",{key:s,class:"press-code-input__item",style:m([i.itemStyle(s)])},[e.dot&&i.codeArray.length>s?(r(),d("div",B)):(r(),d("span",{key:1,style:m({fontSize:i.addUnit(e.fontSize),fontWeight:e.bold?"bold":"normal",color:e.color})},S(i.codeArray[s]||""),5)),e.mode==="line"?(r(),d("div",{key:2,class:"press-code-input__item__line",style:m([i.lineStyle])},null,4)):h("",!0),l.isFocus&&i.codeArray.length===s?(r(),d("div",{key:3,style:m({backgroundColor:e.color}),class:"press-code-input__item__cursor"},null,4)):h("",!0)],4))),128)),x("input",{disabled:e.disabledKeyboard,type:"number",focus:e.focus,value:l.inputValue,maxlength:e.maxLength,adjustPosition:e.adjustPosition,class:"press-code-input__input",style:m({height:i.addUnit(e.size)}),onInput:t[0]||(t[0]=(...u)=>i.inputHandler&&i.inputHandler(...u)),onFocus:t[1]||(t[1]=u=>l.isFocus=!0),onBlur:t[2]||(t[2]=u=>l.isFocus=!1)},null,44,N)])}const k=g(F,[["render",U],["__scopeId","data-v-42e8dcd3"]]),I={i18n:{"zh-CN":{mode:"模式",maxLength:"自定义长度",space:"自定义间距",hairline:"细边框",style:"自定义样式",dot:"隐藏输入内容",autoFocus:"自动获取焦点"},"en-US":{mode:"Mode",maxLength:"Max Length",space:"Space",hairline:"Hairline",style:"Custom Style",dot:"Dot",autoFocus:"Auto Focus"}},components:{PressCodeInput:k},data(){return{value:"",valueMode:"",valueSpace:"",valueMaxLength:"",valueHairline:"",valueHairline2:"",valueStyle:"",valueDot:"",valueFocus:""}},methods:{change(e){console.log(`内容改变，当前值为：${e}`)},finish(e){console.log(`输入结束，当前值为：${e}`)}}},z={class:"demo-wrap"};function P(e,t,c,y,l,i){const u=f("PressCodeInput"),s=f("demo-block");return r(),d("div",z,[o(s,{title:e.t("basicUsage")},{default:a(()=>[o(u,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=n=>l.value=n),onChange:i.change,onFinish:i.finish},null,8,["modelValue","onChange","onFinish"])]),_:1},8,["title"]),o(s,{title:e.t("mode")},{default:a(()=>[o(u,{modelValue:l.valueMode,"onUpdate:modelValue":t[1]||(t[1]=n=>l.valueMode=n),mode:"line"},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("maxLength")},{default:a(()=>[o(u,{modelValue:l.valueMaxLength,"onUpdate:modelValue":t[2]||(t[2]=n=>l.valueMaxLength=n),"max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("space")},{default:a(()=>[o(u,{modelValue:l.valueSpace,"onUpdate:modelValue":t[3]||(t[3]=n=>l.valueSpace=n),space:0,"max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("hairline")},{default:a(()=>[o(u,{modelValue:l.valueHairline,"onUpdate:modelValue":t[4]||(t[4]=n=>l.valueHairline=n),hairline:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("style")},{default:a(()=>[o(u,{modelValue:l.valueStyle,"onUpdate:modelValue":t[5]||(t[5]=n=>l.valueStyle=n),color:"#f56c6c","border-color":"#f56c6c","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("dot")},{default:a(()=>[o(u,{modelValue:l.valueDot,"onUpdate:modelValue":t[6]||(t[6]=n=>l.valueDot=n),dot:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(s,{title:e.t("autoFocus")},{default:a(()=>[o(u,{modelValue:l.valueFocus,"onUpdate:modelValue":t[7]||(t[7]=n=>l.valueFocus=n),focus:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"])])}const D=g(I,[["render",P],["__scopeId","data-v-a024b35f"]]);export{D as default};
