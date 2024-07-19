import{P as _}from"./press-q-r-code-B7B4SHnz.js";import{_ as h,r as i,o as C,c as g,a as o,n as r,w as d,t as m,d as k,f,l as A,b as y}from"./index-CE2ZXbHd.js";const P="press__";function w(l){return l.reduce((a,s)=>(Array.isArray(s)?a.push(...s):a.push(s),a),[]).reduce((a,s)=>(typeof s=="string"?a.push(s):typeof s=="object"&&Object.keys(s).map(t=>{s[t]&&a.push(t)}),a),[])}function b(l,e,n){return v(l,e,P,n)}function v(l,e,n,a){const s=w(a),t=s.map(c=>c&&e[c]||""),p=s.map(c=>{const u=new RegExp(`^${n}`);return c?u.test(c)?c:`${n}${c}`:""});return l?[...p,...t].join(" "):p.join(" ")}const S={popup:"tip-match-bottom-popup-wrap",mask:"tip-match-mask","mask--fade-in":"tip-match-fade-in","mask--fade-out":"tip-match-fade-out",content:"tip-match-popup-content","content--bottom-enter":"tip-match-bottom-enter","content--bottom-leave":"tip-match-bottom-leave","title-wrap":"tip-match-popup-title-wrap","title-line":"tip-match-popup-title-line",back:"tip-match-popup-back",title:"tip-match-popup-title",close:"tip-match-popup-close","qr-code":"tip-match-wx-code",save:"tip-match-code-save",tip:"tip-match-code-tip"};function R(l,e){return b(l,S,e)}const q={name:"PressQRCodePopup",components:{PressQRCode:_},props:{qrCodeUrl:{type:String,default:"",require:!0},type:{type:Number,default:2,require:!1},title:{type:String,default:""},description:{type:String,default:"截图或长按保存图片"},tip:{type:String,default:""},useTipClass:{type:Boolean,default:!1}},emits:["onCancel"],data(){return{isShowPopup:!0}},computed:{typeName(){return this.type===1?"QQ":"微信"},innerTitle(){const{typeName:l,title:e}=this;return e||`请使用${l}扫码打开活动`},innerTip(){const{typeName:l,tip:e}=this;return e||`使用${l}扫码打开访问页面`}},methods:{clickCancel(){this.isShowPopup=!1,this.timer=setTimeout(()=>{this.$emit("onCancel")},400)},getActClass(...l){return R(this.useTipClass,l)}}};function Q(l,e,n,a,s,t){const p=i("PressQRCode");return C(),g("div",{class:r([t.getActClass("popup")])},[o("div",{class:r([t.getActClass("mask"),s.isShowPopup?t.getActClass("mask--fade-in"):t.getActClass("mask--fade-out")]),onClick:e[0]||(e[0]=d((...c)=>t.clickCancel&&t.clickCancel(...c),["stop"]))},null,2),o("div",{class:r([t.getActClass("content"),s.isShowPopup?t.getActClass("content--bottom-enter"):t.getActClass("content--bottom-leave")])},[o("div",{class:r([t.getActClass("title-wrap")])},[o("div",{class:r([t.getActClass("title-line")]),onClick:e[1]||(e[1]=d((...c)=>t.clickCancel&&t.clickCancel(...c),["stop"]))},null,2),o("div",{class:r([t.getActClass("back")]),onClick:e[2]||(e[2]=d((...c)=>t.clickCancel&&t.clickCancel(...c),["stop"]))},null,2),o("p",{class:r([t.getActClass("title")])},m(t.innerTitle),3),k("",!0)],2),f(p,{value:n.qrCodeUrl,size:120,class:r([t.getActClass("qr-code")])},null,8,["value","class"]),o("p",{class:r([t.getActClass("save")])},m(n.description),3),o("p",{class:r([t.getActClass("tip")])},m(t.innerTip),3)],2)],2)}const T=h(q,[["render",Q],["__scopeId","data-v-50af5632"]]),N={components:{PressQRCodePopup:T},data(){let l="https://baidu.com",e=!1;return l=document.location.href,e=!0,{currentUrl:l,show:e,type:1}},methods:{showDialog(){this.show=!0}}},x={class:"demo-wrap"};function B(l,e,n,a,s,t){const p=i("press-cell"),c=i("demo-block"),u=i("PressQRCodePopup");return C(),g("div",x,[f(c,{title:l.t("basicUsage")},{default:A(()=>[f(p,{title:"展示","is-link":"",onClick:t.showDialog},null,8,["onClick"])]),_:1},8,["title"]),s.show?(C(),y(u,{key:0,"qr-code-url":s.currentUrl,type:s.type,onOnCancel:e[0]||(e[0]=U=>s.show=!1)},null,8,["qr-code-url","type"])):k("",!0)])}const E=h(N,[["render",B]]);export{E as default};
