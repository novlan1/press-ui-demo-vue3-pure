import{P as i}from"./press-code-input-Cuf_WNtQ.js";import{_ as r,o as p,c as v,f as o,l as d,r as s}from"./index-BxhWvFY9.js";import"./add-unit-BnQ5fsFt.js";import"./test-CXO-MJ-T.js";const V={i18n:{"zh-CN":{mode:"模式",maxLength:"自定义长度",space:"自定义间距",hairline:"细边框",style:"自定义样式",dot:"隐藏输入内容",autoFocus:"自动获取焦点"},"en-US":{mode:"Mode",maxLength:"Max Length",space:"Space",hairline:"Hairline",style:"Custom Style",dot:"Dot",autoFocus:"Auto Focus"}},components:{PressCodeInput:i},data(){return{value:"",valueMode:"",valueSpace:"",valueMaxLength:"",valueHairline:"",valueHairline2:"",valueStyle:"",valueDot:"",valueFocus:""}},methods:{change(u){console.log(`内容改变，当前值为：${u}`)},finish(u){console.log(`输入结束，当前值为：${u}`)}}},f={class:"demo-wrap"};function g(u,e,h,c,l,m){const n=s("PressCodeInput"),a=s("demo-block");return p(),v("div",f,[o(a,{title:u.t("basicUsage")},{default:d(()=>[o(n,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),onChange:m.change,onFinish:m.finish},null,8,["modelValue","onChange","onFinish"])]),_:1},8,["title"]),o(a,{title:u.t("mode")},{default:d(()=>[o(n,{modelValue:l.valueMode,"onUpdate:modelValue":e[1]||(e[1]=t=>l.valueMode=t),mode:"line"},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("maxLength")},{default:d(()=>[o(n,{modelValue:l.valueMaxLength,"onUpdate:modelValue":e[2]||(e[2]=t=>l.valueMaxLength=t),"max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("space")},{default:d(()=>[o(n,{modelValue:l.valueSpace,"onUpdate:modelValue":e[3]||(e[3]=t=>l.valueSpace=t),space:0,"max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("hairline")},{default:d(()=>[o(n,{modelValue:l.valueHairline,"onUpdate:modelValue":e[4]||(e[4]=t=>l.valueHairline=t),hairline:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("style")},{default:d(()=>[o(n,{modelValue:l.valueStyle,"onUpdate:modelValue":e[5]||(e[5]=t=>l.valueStyle=t),color:"#f56c6c","border-color":"#f56c6c","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("dot")},{default:d(()=>[o(n,{modelValue:l.valueDot,"onUpdate:modelValue":e[6]||(e[6]=t=>l.valueDot=t),dot:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"]),o(a,{title:u.t("autoFocus")},{default:d(()=>[o(n,{modelValue:l.valueFocus,"onUpdate:modelValue":e[7]||(e[7]=t=>l.valueFocus=t),focus:"","max-length":4},null,8,["modelValue"])]),_:1},8,["title"])])}const S=r(V,[["render",g],["__scopeId","data-v-a024b35f"]]);export{S as default};
