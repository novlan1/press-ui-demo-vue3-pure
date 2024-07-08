import{a as U,i as C}from"./utils-Do31p4kb.js";import{h as M}from"./press-component-HD2axD72.js";import{a as B}from"./add-unit-Df5pRFBE.js";import{P as V}from"./press-icon-plus-5Xj-bw2h.js";import{P as T}from"./press-loading-plus-Df-tLDhD.js";import{i as S,v as E,f as N,p as q}from"./test-CXO-MJ-T.js";import{_ as D,r as R,o as u,c,a as k,F as z,i as G,v as x,f as d,t as P,b as I,d as f,w as j,y as H,x as W,n as p}from"./index-BZexHo5h.js";import"./validator-OjQp2SYe.js";import"./press-info-BWsAQQHi.js";const X={image:{jpg:"jpeg",jpe:"jpeg",pbm:"x-portable-bitmap",pgm:"x-portable-graymap",pnm:"x-portable-anymap",ppm:"x-portable-pixmap",psd:"vnd.adobe.photoshop",pic:"x-pict",rgb:"x-rgb",svg:"svg+xml",svgz:"svg+xml",tif:"tiff",xif:"vnd.xiff",wbmp:"vnd.wap.wbmp",wdp:"vnd.ms-photo",xbm:"x-xbitmap",ico:"x-icon"},video:{"3g2":"3gpp2","3gp":"3gpp",avi:"x-msvideo",f4v:"x-f4v",flv:"x-flv",jpgm:"jpm",jpgv:"jpeg",m1v:"mpeg",m2v:"mpeg",mpe:"mpeg",mpg:"mpeg",mpg4:"mpeg",m4v:"x-m4v",mkv:"x-matroska",mov:"quicktime",qt:"quicktime",movie:"x-sgi-movie",mp4v:"mp4",ogv:"ogg",smv:"x-smv",wm:"x-ms-wm",wmv:"x-ms-wmv",wmx:"x-ms-wmx",wvx:"x-ms-wvx"}},K="*";function J(){const e=window.navigator.userAgent.toLowerCase();return!!(e.match(/MicroMessenger/i)&&e.match(/MicroMessenger/i)[0]==="micromessenger")}function F({count:e,sourceType:t,type:s,extension:a=["*"]}){const o=document.createElement("input");return o.type="file",U(o,{position:"absolute",visibility:"hidden","z-index":-999,width:0,height:0,top:0,left:0}),o.accept=a.map(i=>{if(s!==K){const n=i.replace(".","");return`${s}/${X[s][n]||n}`}return J()?".":i.indexOf(".")===0?i:`.${i}`}).join(","),e>1&&(o.multiple="multiple"),t.length===1&&t[0]==="camera"&&(o.capture="camera"),o}const y={};function L(e){for(const s in y)if(M(y,s)&&y[s]===e)return s;const t=(window.URL||window.webkitURL).createObjectURL(e);return y[t]=e,t}function A(e){(window.URL||window.webkitURL).revokeObjectURL(e),delete y[e]}function O(e,t){const s=[],a=e.target.files.length;for(let o=0;o<a;o++){const i=e.target.files[o];let n;Object.defineProperty(i,"path",{get(){return n=n||L(i),n}}),o<t&&s.push(i)}return s}let h=null;function Q({count:e,sourceType:t,type:s,extension:a,success:o}){h&&(document.body.removeChild(h),h=null),h=F({count:e,sourceType:t,type:s,extension:a}),document.body.appendChild(h),h.addEventListener("change",i=>{const n=O(i,e);o({errMsg:"chooseFile:ok",get tempFilePaths(){return n.map(({path:l})=>l)},tempFiles:n})}),h.click()}let g=null;function Y({count:e,sourceType:t,extension:s,success:a}){g&&(document.body.removeChild(g),g=null),g=F({count:e,sourceType:t,extension:s,type:"image"}),document.body.appendChild(g),g.addEventListener("change",o=>{const i=O(o,e);a({errMsg:"chooseImage:ok",get tempFilePaths(){return i.map(({path:r})=>r)},tempFiles:i})}),g.click()}let _=null;function Z({sourceType:e,extension:t,success:s}){_&&(document.body.removeChild(_),_=null),_=F({sourceType:e,extension:t,type:"video"}),document.body.appendChild(_),_.addEventListener("change",a=>{const o=a.target.files[0],i={errMsg:"chooseVideo:ok",tempFile:o,size:o.size,duration:0,width:0,height:0,name:o.name};let n;Object.defineProperty(i,"tempFilePath",{get(){return n=n||L(this.tempFile),n}});const r=document.createElement("video");if(r.onloadedmetadata!==void 0){const l=L(o);r.onloadedmetadata=function(){A(l),s(Object.assign(i,{duration:r.duration||0,width:r.videoWidth||0,height:r.videoHeight||0}))},setTimeout(()=>{r.onloadedmetadata=null,A(l),s(i)},300),r.src=l}else s(i)}),_.click()}function $({count:e,success:t,fail:s,type:a}){if(C())return Q({count:e,sourceType:[],type:a,extension:["*"],success:t});uni.chooseFile({count:e,type:a,success:t,fail:s})}function ee({count:e,sourceType:t,sizeType:s,success:a,fail:o}){if(C())return Y({count:e,sourceType:t,extension:["*"],success:a});uni.chooseImage({count:e,sourceType:t,sizeType:s,success:a,fail:o})}function te({sourceType:e,success:t,fail:s,compressed:a,maxDuration:o,camera:i}){if(C())return Z({sourceType:e,extension:["*"],success:t});uni.chooseVideo({sourceType:e,success:t,fail:s,compressed:a,maxDuration:o,camera:i})}function ie(e){return e.tempFiles}function se(e){return e.tempFiles}function ae({accept:e,multiple:t,capture:s,compressed:a,maxDuration:o,sizeType:i,camera:n,maxCount:r}){return new Promise((l,v)=>{switch(e){case"image":ee({count:t?Math.min(r,9):1,sourceType:s,sizeType:i,success:m=>l(ie(m)),fail:v});break;case"video":te({sourceType:s,compressed:a,maxDuration:o,camera:n,success:m=>l(m),fail:v});break;default:$({count:t?r:1,type:"all",success:m=>l(se(m)),fail:v})}})}const oe={watch:{accept:{immediate:!0,handler(e){(e==="all"||e==="media")&&console.warn("只有微信小程序才支持把 accept 配置为 all、media 之一")}}}},le={props:{accept:{type:String,default:"image"},capture:{type:[String,Array],default:()=>["album","camera"]},compressed:{type:Boolean,default:!0},camera:{type:String,default:"back"},maxDuration:{type:Number,default:60},uploadIcon:{type:String,default:"photograph"},uploadIconColor:{type:String,default:"#D3D4D6"},useBeforeRead:{type:Boolean,default:!1},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:!0},maxCount:{type:[String,Number],default:52},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},name:{type:String,default:"file"},sizeType:{type:Array,default:()=>["original","compressed"]},multiple:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:()=>[]},uploadText:{type:String,default:""},width:{type:[String,Number],default:80},height:{type:[String,Number],default:80},previewImage:{type:Boolean,default:!0},customStyle:{type:String,default:""}}},ne={name:"PressUploader",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:V,PressLoadingPlus:T},mixins:[oe,le],emits:["afterRead","error","oversize"],data(){return{lists:[],isInCount:!0}},watch:{fileList:{immediate:!0,handler(){this.formatFileList()}}},methods:{addUnit:B,formatFileList(){const{fileList:e=[],maxCount:t}=this,s=e.map(a=>Object.assign(Object.assign({},a),{isImage:this.accept==="image"||S(a.url||a.thumb),isVideo:this.accept==="video"||E(a.url||a.thumb),deletable:typeof a.deletable=="boolean"?a.deletable:this.deletable}));this.lists=s,this.isInCount=s.length<t},chooseFile(){const{maxCount:e,multiple:t,lists:s,disabled:a}=this;if(console.log("[chooseFile]"),a)return;let o;try{o=Array.isArray(this.capture)?this.capture:this.capture.split(",")}catch{o=[]}ae(Object.assign({accept:this.accept,multiple:this.multiple,capture:o,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-s.length})).then(i=>{this.onBeforeRead(t?i:i[0])}).catch(i=>{this.$emit("error",i)})},onBeforeRead(e){const{beforeRead:t,useBeforeRead:s}=this;let a=!0;N(t)&&(a=t(e,this.getDetail())),s&&(a=new Promise((o,i)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:n=>{n?o():i()}}))})),a&&(q(a)?a.then(o=>this.onAfterRead(o||e)):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:e??this.fileList.length}},onAfterRead(e){const{maxSize:t,afterRead:s}=this;if(Array.isArray(e)?e.some(o=>o.size>t):e.size>t){this.$emit("oversize",Object.assign({file:e},this.getDetail()));return}typeof s=="function"&&s(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail()))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e){!e.isImage||!this.previewFullImage||uni.previewImage({urls:this.lists.filter(t=>this.accept==="image"||S(t.url||t.thumb)).map(t=>t.url||t.thumb),current:e.url||e.thumb,fail(){}})},onPreviewVideo(e){if(!this.data.previewFullImage)return;const{index:t}=e.currentTarget.dataset,{lists:s}=this.data;wx.previewMedia({sources:s.map(a=>Object.assign(Object.assign({},a),{type:"video"})),current:t,fail(){}})},onClickPreview(e){const{index:t}=e.currentTarget.dataset,s=this.data.lists[t];this.$emit("clickPreview",Object.assign(Object.assign({},s),this.getDetail(t)))}}},re={class:"press-upload__wrap"},de=["src","mode","onClick"],ue={key:1,class:"press-upload__wrap__preview__other"},ce={class:"press-upload__wrap__preview__other__text"},pe={key:2,class:"press-upload__status"},me={class:"press-upload__status__icon"},fe={key:0,class:"press-upload__status__message"},he=["onClick"];const ge=["hover-class"],_e={key:0,class:"press-upload__button__text"};function ve(e,t,s,a,o,i){const n=R("PressIconPlus"),r=R("PressLoadingPlus");return u(),c("div",{class:"press-upload",style:x(e.customStyle)},[k("div",re,[e.previewImage?(u(!0),c(z,{key:0},G(o.lists,(l,v)=>(u(),c("div",{key:v,class:"press-upload__wrap__preview"},[l.isImage||l.type&&l.type==="image"?(u(),c("image",{key:0,src:l.thumb||l.url,mode:e.imageMode,class:"press-upload__wrap__preview__image",style:x([{width:i.addUnit(e.width),height:i.addUnit(e.height)}]),onClick:m=>i.onPreviewImage(l)},null,12,de)):(u(),c("div",ue,[d(n,{color:"#80CBF9",size:"26",name:l.isVideo||l.type&&l.type==="video"?"movie":"folder"},null,8,["name"]),k("span",ce,P(l.isVideo||l.type&&l.type==="video"?"视频":"文件"),1)])),l.status==="uploading"||l.status==="failed"?(u(),c("div",pe,[k("div",me,[l.status==="failed"?(u(),I(n,{key:0,name:"close",color:"#ffffff",size:"22"})):(u(),I(r,{key:1,size:"22",mode:"circle",color:"#ffffff"}))]),l.message?(u(),c("span",fe,P(l.message),1)):f("",!0)])):f("",!0),l.status!=="uploading"&&(e.deletable||l.deletable)?(u(),c("div",{key:3,class:"press-upload__deletable",onClick:j(m=>i.deleteItem(v),["stop"])},[d(n,{name:"cross",color:"#ffffff",size:"16","custom-class":"press-upload__deletable__icon"})],8,he)):f("",!0),(l.status,f("",!0))]))),128)):f("",!0),o.isInCount?(u(),c(z,{key:1},[e.$slots.default||e.$slots.$default?(u(),c("div",{key:0,onClick:t[0]||(t[0]=(...l)=>i.chooseFile&&i.chooseFile(...l))},[H(e.$slots,"default",{},void 0,!0)])):(u(),c("div",{key:1,class:W(["press-upload__button",[e.disabled&&"press-upload__button--disabled"]]),"hover-class":e.disabled?"":"press-upload__button--hover","hover-stay-time":"150",style:x([{width:i.addUnit(e.width),height:i.addUnit(e.height)}]),onClick:t[1]||(t[1]=j((...l)=>i.chooseFile&&i.chooseFile(...l),["stop"]))},[d(n,{name:e.uploadIcon,size:"26",color:e.uploadIconColor,onClick:i.chooseFile},null,8,["name","color","onClick"]),e.uploadText?(u(),c("span",_e,P(e.uploadText),1)):f("",!0)],14,ge))],64)):f("",!0)])],4)}const be=D(ne,[["render",ve],["__scopeId","data-v-d051f729"]]),b="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg";let w;const ye={i18n:{"zh-CN":{uploadVideo:"上传视频",uploadStatus:"上传状态",preview:"文件预览",maxCount:"限制上传数量",maxSize:"限制上传大小",customStyle:"自定义上传样式",beforeRead:"上传前置处理"},"en-US":{uploadVideo:"Upload Video",uploadStatus:"Upload Status",preview:"Preview",maxCount:"Max Count",maxSize:"Max Size",customStyle:"Custom Style",beforeRead:"Before Read"}},components:{PressUploader:be},data(){return{fileList1:[],fileListMaxSize:[],fileList2:[],fileList3:[{url:b}],fileList4:[{url:b},{url:b}],fileList6:[],fileListStatus:[{url:b,status:"uploading",message:"上传中..."},{url:b,status:"failed",message:"上传失败"}]}},mounted(){w=this},methods:{deletePic(e){console.log("[deletePic] event",e),this[`fileList${e.name}`].splice(e.index,1)},async afterRead(e){console.log("[afterRead] event",e);const t=[].concat(e.file);let s=this[`fileList${e.name}`].length;t.map(a=>{this[`fileList${e.name}`].push({...a,status:"uploading",message:"上传中"})});for(let a=0;a<t.length;a++){const o=await this.uploadFilePromise(t[a].path),i=this[`fileList${e.name}`][s];this[`fileList${e.name}`].splice(s,1,Object.assign(i,{message:"",...o})),s+=1}},uploadFilePromise(e){return console.log("[uploadFilePromise] url",e),new Promise(t=>{setTimeout(()=>t({url:e,status:"success",message:"上传失败"}),1e3)})},onOversize(e){console.log("[onOversize] file",e),w.onGTip("文件大小不能超过 500kb")},beforeRead(e){return console.log("[beforeRead] file",e),e.type!=="image/jpeg"?(w.onGTip("请上传 jpg 格式图片"),!1):!0},asyncBeforeRead(e){return console.log("[asyncBeforeRead] file",e),new Promise((t,s)=>{if(e.type!=="image/jpeg")w.onGTip("请上传 jpg 格式图片"),s();else{const a=new File(["foo"],"bar.jpg",{type:"image/jpeg"});t(a)}})}}},we={class:"demo-wrap"},ke=k("image",{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_799718017ac81b11c0.png",mode:"widthFix",style:{width:"250px",height:"150px"}},null,-1);function Re(e,t,s,a,o,i){const n=R("PressUploader"),r=R("demo-block");return u(),c("div",we,[d(r,{title:e.t("basicUsage")},{default:p(()=>[d(n,{"file-list":o.fileList1,name:"1",multiple:"","max-count":10,onAfterRead:i.afterRead,onDelete:i.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("uploadVideo")},{default:p(()=>[d(n,{"file-list":o.fileList2,name:"2",multiple:"","max-count":10,accept:"video",onAfterRead:i.afterRead,onDelete:i.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("uploadStatus")},{default:p(()=>[d(n,{"file-list":o.fileListStatus,name:"Status",multiple:"","max-count":10,accept:"video",onAfterRead:i.afterRead,onDelete:i.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("preview")},{default:p(()=>[d(n,{"file-list":o.fileList3,name:"3",multiple:"","max-count":10,"preview-full-image":!0,onAfterRead:i.afterRead,onDelete:i.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("maxCount")},{default:p(()=>[d(n,{"file-list":o.fileList4,name:"4",multiple:"","max-count":2,onAfterRead:i.afterRead,onDelete:i.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("maxSize")},{default:p(()=>[d(n,{"file-list":o.fileListMaxSize,name:"MaxSize",multiple:"","max-size":500*1024,onAfterRead:i.afterRead,onOversize:i.onOversize},null,8,["file-list","onAfterRead","onOversize"])]),_:1},8,["title"]),d(r,{title:e.t("customStyle")},{default:p(()=>[d(n,{"file-list":o.fileList6,name:"6",multiple:"","max-count":1,width:"250",height:"150",onAfterRead:i.afterRead,onDelete:i.deletePic},{default:p(()=>[ke]),_:1},8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("beforeRead")},{default:p(()=>[d(n,{"before-read":i.beforeRead},null,8,["before-read"])]),_:1},8,["title"]),d(r,{title:e.t("disabled")},{default:p(()=>[d(n,{disabled:""})]),_:1},8,["title"])])}const Ae=D(ye,[["render",Re]]);export{Ae as default};
