import{W as z,B as _}from"./color-DciZLlTH.js";import{c as E,g as L}from"./system-DiAbMyT7.js";import{i as N}from"./add-unit-Ci6RUrQO.js";import{i as S,u as g}from"./utils-BWNRMl9G.js";import{_ as b,o as c,c as d,a as n,m as B,i as M,F as x,t as v,f as a,l as m,r as f,A as w}from"./index-C7cPaXoT.js";import{P as T}from"./press-button-BTWDRU7F.js";import"./press-icon-plus-UvEd4iQp.js";import"./style-CpIyAjCl.js";import"./press-info-CCB12gYT.js";import"./press-component-DP30Q1Pq.js";import"./press-loading-plus-CUHs_PRb.js";import"./press-loading-DUkxkACJ.js";import"./button-Bk9AFPgV.js";function k(e){return Object.assign(e,{setStrokeStyle(t){e.strokeStyle=t},setLineWidth(t){e.lineWidth=t},setLineCap(t){e.lineCap=t},setFillStyle(t){e.fillStyle=t},setFontSize(t){e.font=String(t)},setGlobalAlpha(t){e.globalAlpha=t},setLineJoin(t){e.lineJoin=t},setTextAlign(t){e.textAlign=t},setMiterLimit(t){e.miterLimit=t},setShadow(t,r,i,s){e.shadowOffsetX=t,e.shadowOffsetY=r,e.shadowBlur=i,e.shadowColor=s},setTextBaseline(t){e.textBaseline=t},createCircularGradient(){},draw(){}})}let I=0;function W(e){return Math.min(Math.max(e,0),100)}const V=2*Math.PI,y=-Math.PI/2,C=1,U={name:"PressCircle",props:{text:{type:String,default:""},lineCap:{type:String,default:"round"},value:{type:Number,default:0},speed:{type:Number,default:50},size:{type:Number,default:100},fill:{type:String,default:""},layerColor:{type:String,default:z},color:{type:null,default:_},type:{type:String,default:""},strokeWidth:{type:Number,default:4},clockwise:{type:Boolean,default:!0}},emits:[],data(){return{hoverColor:_,id:1,isNotInUni:S()}},computed:{circleStyle(){const{size:e}=this;return`width: ${g.addUnit(e)};height: ${g.addUnit(e)}`},canvasId(){return`press-circle-${this.id}`}},watch:{value:{handler(){this.reRender()}},size:{handler(){this.drawCircle(this.currentValue)}},color:{handler(){this.setHoverColor().then(()=>{this.drawCircle(this.currentValue)})}}},created(){I+=1,this.id=I},mounted(){this.currentValue=this.value,this.setHoverColor().then(()=>{this.drawCircle(this.currentValue)})},destroyed(){this.onDestroyed()},unmounted(){this.onDestroyed()},methods:{onDestroyed(){this.clearMockInterval()},getContext(){const{type:e,size:t}=this;if(S()){const i=window.devicePixelRatio,s=document.getElementById(this.canvasId),o=s.getContext("2d");return this.inited||(this.inited=!0,s.width=t*i,s.height=t*i,o.scale(i,i)),Promise.resolve(k(o))}if(e===""||!E()){const i=uni.createCanvasContext(this.canvasId,this);return Promise.resolve(i)}const r=L().pixelRatio;return new Promise(i=>{uni.createSelectorQuery().in(this).select(`#${this.canvasId}`).node().exec(s=>{const o=s[0].node,l=o.getContext(e);this.inited||(this.inited=!0,o.width=t*r,o.height=t*r,l.scale(r,r)),i(k(l))})})},setHoverColor(){const{color:e,size:t}=this;return N(e)?this.getContext().then(r=>{const i=r.createLinearGradient(t,0,0,0);Object.keys(e).sort((s,o)=>parseFloat(s)-parseFloat(o)).map(s=>i.addColorStop(parseFloat(s)/100,e[s])),this.hoverColor=i}):(this.hoverColor=e,Promise.resolve())},presetCanvas(e,t,r,i,s){const{strokeWidth:o,lineCap:l,clockwise:h,size:p}=this,u=p/2,P=u-o/2;e.setStrokeStyle(t),e.setLineWidth(o),e.setLineCap(l),e.beginPath(),e.arc(u,u,P,r,i,!h),e.stroke(),s&&(e.setFillStyle(s),e.fill())},renderLayerCircle(e){const{layerColor:t,fill:r}=this;this.presetCanvas(e,t,0,V,r)},renderHoverCircle(e,t){const{clockwise:r}=this,i=V*(t/100),s=r?y+i:3*Math.PI-(y+i);this.presetCanvas(e,this.hoverColor,y,s)},drawCircle(e){const{size:t}=this;this.getContext().then(r=>{r.clearRect(0,0,t,t),this.renderLayerCircle(r);const i=W(e);i!==0&&this.renderHoverCircle(r,i),r.draw()})},reRender(){const{value:e,speed:t}=this;if(t<=0||t>1e3){this.drawCircle(e);return}this.clearMockInterval(),this.currentValue=this.currentValue||0;const r=()=>{this.interval=setTimeout(()=>{this.currentValue!==e?(Math.abs(this.currentValue-e)<C?this.currentValue=e:this.currentValue<e?this.currentValue+=C:this.currentValue-=C,this.drawCircle(this.currentValue),r()):this.clearMockInterval()},1e3/t)};r()},clearMockInterval(){this.interval&&(clearTimeout(this.interval),this.interval=null)}}},F={class:"press-circle-index"},A={class:"press-circle"},R=["id","type","canvas-id"],G={key:0,class:"press-circle__text"},H={key:0,class:"press-circle__text"},D={key:1,class:"press-circle__text"};function O(e,t,r,i,s,o){return c(),d("div",F,[n("div",A,[n("canvas",{id:o.canvasId,class:"press-circle__canvas",type:r.type,style:B(o.circleStyle),"canvas-id":o.canvasId},null,12,R),r.text?(c(),d(x,{key:1},[s.isNotInUni?(c(),d("div",H,v(r.text),1)):(c(),d("cover-view",D,v(r.text),1))],64)):(c(),d("div",G,[M(e.$slots,"default",{},void 0,!0)]))])])}const j=b(U,[["render",O],["__scopeId","data-v-ca0b97d2"]]),J={i18n:{"zh-CN":{gradient:"渐变色",customSize:"大小定制",customStyle:"样式定制",customColor:"颜色定制",customWidth:"宽度定制",counterClockwise:"逆时针"},"en-US":{gradient:"Gradient",customSize:"Size",customStyle:"Custom Style",customColor:"Color",customWidth:"Width",counterClockwise:"Direction"}},components:{PressCircle:j,PressButton:T},data(){return{value:20,headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0;padding: 0 12px;",gradientColor:{"0%":"#3fecff","100%":"#6149f6"}}},methods:{onChangeCircleValue(e){if(e==="plus"){if(this.value>=100)return;this.value+=20}else if(e==="minus"){if(this.value<=0)return;this.value-=20}}}},$={class:"demo-wrap demo-wrap--gray"},Q={class:"demo-part"},X={class:"demo-part"},Y={class:"demo-part"},q={class:"demo-part"},K={class:"demo-part"};function Z(e,t,r,i,s,o){const l=f("press-circle"),h=f("demo-block"),p=f("press-button");return c(),d("div",$,[a(h,{title:e.t("basicUsage"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:m(()=>[a(l,{value:s.value,text:`${s.value}%`},null,8,["value","text"])]),_:1},8,["title","header-style","section-style"]),a(h,{title:e.t("customStyle"),"header-style":s.headerStyle,"section-style":s.sectionStyle},{default:m(()=>[n("div",Q,[a(l,{value:s.value,"stroke-width":6,text:e.t("customWidth")},null,8,["value","text"])]),n("div",X,[a(l,{value:s.value,"stroke-width":6,"layer-color":"#eeeeee",color:"#ee0a24",text:e.t("customColor")},null,8,["value","text"])]),n("div",Y,[a(l,{value:s.value,"stroke-width":6,color:s.gradientColor,text:e.t("gradient")},null,8,["value","color","text"])]),n("div",q,[a(l,{value:s.value,"stroke-width":6,color:"#07c160",clockwise:!1,text:e.t("counterClockwise")},null,8,["value","text"])]),n("div",K,[a(l,{value:s.value,size:120,text:e.t("customSize")},null,8,["value","text"])]),n("div",null,[a(p,{type:"e-sport-primary","custom-style":"margin-right:8px;",onClick:t[0]||(t[0]=u=>o.onChangeCircleValue("plus"))},{default:m(()=>[w(v(e.t("add")),1)]),_:1}),a(p,{type:"e-sport-primary",onClick:t[1]||(t[1]=u=>o.onChangeCircleValue("minus"))},{default:m(()=>[w(v(e.t("decrease")),1)]),_:1})])]),_:1},8,["title","header-style","section-style"])])}const pe=b(J,[["render",Z],["__scopeId","data-v-9cde7cae"]]);export{pe as default};