import{a as h}from"./add-unit-Df5pRFBE.js";import{i as I,s as v}from"./utils-Do31p4kb.js";import{P as _}from"./press-icon-plus-5Xj-bw2h.js";import{P as E}from"./press-transition-DnFvQ8Gf.js";import{_ as b,o as s,c as l,a as k,v as a,d,R as P,r as u,b as f,n as z,w as B,y,f as p}from"./index-BZexHo5h.js";const H={props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},width:{type:[String,Number],default:300},height:{type:[String,Number],default:225},round:{type:Boolean,default:!1},radius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"photo-fail"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},backgroundColor:{type:String,default:"#f3f4f6"},customStyle:{type:String,default:""}}};function w(e){return navigator.vendor==="Google Inc."&&e>10&&(e=Math.round(e/2)*2),e}const L={name:"Image",props:{src:{type:String,default:""},mode:{type:String,default:"scaleToFill"},lazyLoad:{type:[Boolean,String],default:!1},draggable:{type:Boolean,default:!1}},data(){return{originalWidth:0,originalHeight:0,originalStyle:{width:"",height:""},contentPath:""}},computed:{ratio(){return this.originalWidth&&this.originalHeight?this.originalWidth/this.originalHeight:0},style(){let e="auto",t="";const o="no-repeat";switch(this.mode){case"aspectFit":e="contain",t="center center";break;case"aspectFill":e="cover",t="center center";break;case"widthFix":case"heightFix":e="100% 100%";break;case"top":t="center top";break;case"bottom":t="center bottom";break;case"center":t="center center";break;case"left":t="left center";break;case"right":t="right center";break;case"top left":t="left top";break;case"top right":t="right top";break;case"bottom left":t="left bottom";break;case"bottom right":t="right bottom";break;default:e="100% 100%",t="0% 0%";break}return{"background-image":this.contentPath?`url("${this.contentPath}")`:"none","background-position":t,"background-size":e,"background-repeat":o}}},watch:{src(){this._loadImage()},mode(e,t){(t==="widthFix"||t==="heightFix")&&this._resetSize(),(e==="widthFix"||e==="heightFix")&&this._fixSize()},contentPath(e){!e&&this.__img&&(this.__img.remove(),delete this.__img)}},mounted(){this.originalStyle.width=this.$el.style.width||"",this.originalStyle.height=this.$el.style.height||"",this._loadImage()},beforeDestroy(){this._clearImage()},methods:{_fixSize(){if(this.ratio){const{$el:e}=this;if(this.mode==="widthFix"){const t=e.offsetWidth;t&&(e.style.height=`${w(t/this.ratio)}px`)}else if(this.mode==="heightFix"){const t=e.offsetHeight;t&&(e.style.width=`${w(t*this.ratio)}px`)}}window.dispatchEvent(new CustomEvent("updateview"))},_resetSize(){this.$el.style.width=this.originalStyle.width,this.$el.style.height=this.originalStyle.height},_resetData(){this.originalWidth=0,this.originalHeight=0,this.contentPath=""},_loadImage(){const e=this.src;if(e){this._img=this._img||new Image;const t=this._img;t.onload=o=>{this._img=null,this.originalWidth=t.width;const g=this.originalWidth;this.originalHeight=t.height;const r=this.originalHeight;this._fixSize(),this.contentPath=e,t.draggable=this.draggable,this.__img&&this.__img.remove(),this.__img=t,this.$el.appendChild(t),this.$emit("load",o,{width:g,height:r})},t.onerror=o=>{this._img=null,this._resetData(),this.$emit("error",o,{errMsg:`GET ${this.src} 404 (Not Found)`})},t.src=e}else this._clearImage(),this._resetData()},_clearImage(){const e=this._img;e&&(e.onload=null,e.onerror=null,this._img=null)}}};function U(e,t,o,g,r,i){return s(),l("uni-image",P(e.$listeners,!0),[k("div",{ref:"content",style:a(i.style)},null,4),o.mode==="widthFix"||o.mode==="heightFix"?(s(),l("div",{key:0,ref:"sensor",onResize:t[0]||(t[0]=m=>i._fixSize())},null,544)):d("",!0)],16)}const C=b(L,[["render",U]]),F={name:"PressImage",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:_,PressTransition:E,InnerImage:C},mixins:[H],emits:["click","error","load"],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1,isNotInUni:I()}},computed:{wrapStyle(){const e={};return e.width=h(this.width),e.height=h(this.height),e.borderRadius=this.round?"10000px":h(this.radius),e.overflow=this.borderRadius>0?"hidden":"visible",v([{...e,...this.backgroundStyle},this.customStyle])}},watch:{src:{immediate:!0,handler(e){e?(this.isError=!1,this.loading=!0):this.isError=!0}}},mounted(){this.show=!0},methods:{addUnit:h,onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(e){this.loading=!1,this.isError=!1,this.$emit("load",e),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},N=["src","mode","show-menu-by-longpress","lazy-load"];function R(e,t,o,g,r,i){const m=u("InnerImage"),c=u("PressIconPlus"),S=u("PressTransition");return s(),f(S,{mode:"fade",show:r.show,duration:e.fade?r.durationTime:0,"custom-style":"display: inline-block;"},{default:z(()=>[k("div",{class:"press-image",style:a(i.wrapStyle),onClick:t[2]||(t[2]=B((...n)=>i.onClick&&i.onClick(...n),["stop"]))},[!r.isError&&r.isNotInUni?(s(),f(m,{key:0,src:e.src,mode:e.mode,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"press-image__image",style:a({borderRadius:e.round?"10000px":i.addUnit(e.radius),width:i.addUnit(e.width),height:i.addUnit(e.height)}),onError:i.onErrorHandler,onLoad:i.onLoadHandler},null,8,["src","mode","show-menu-by-longpress","lazy-load","style","onError","onLoad"])):d("",!0),r.isError?d("",!0):(s(),l("image",{key:1,src:e.src,mode:e.mode,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"press-image__image",style:a({borderRadius:e.round?"10000px":i.addUnit(e.radius),width:i.addUnit(e.width),height:i.addUnit(e.height)}),onError:t[0]||(t[0]=(...n)=>i.onErrorHandler&&i.onErrorHandler(...n)),onLoad:t[1]||(t[1]=(...n)=>i.onLoadHandler&&i.onLoadHandler(...n))},null,44,N)),e.showLoading&&r.loading?(s(),l("div",{key:2,class:"press-image__loading",style:a({borderRadius:e.round?"50%":i.addUnit(e.radius),backgroundColor:e.backgroundColor,width:i.addUnit(e.width),height:i.addUnit(e.height)})},[y(e.$slots,"loading",{},()=>[p(c,{name:e.loadingIcon,width:e.width,height:e.height},null,8,["name","width","height"])],!0)],4)):d("",!0),e.showError&&r.isError&&!r.loading?(s(),l("div",{key:3,class:"press-image__error",style:a({borderRadius:e.round?"50%":i.addUnit(e.radius),width:i.addUnit(e.width),height:i.addUnit(e.height)})},[y(e.$slots,"error",{},()=>[p(c,{name:e.errorIcon,width:e.width,height:e.height},null,8,["name","width","height"])],!0)],4)):d("",!0)],4)]),_:3},8,["show","duration"])}const V=b(F,[["render",R],["__scopeId","data-v-b8ea8ad7"]]);export{V as P};
