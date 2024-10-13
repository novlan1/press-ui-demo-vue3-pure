import{aG as D,R as P,_ as A,C as M,$ as B,G as V,r as w,o as u,c,a as x,F as L,v as N,m as k,f as d,t as I,b as S,d as f,w as z,i as T,n as E,l as p}from"./index-F6Gg9UHQ.js";import{i as j,v as G,f as q,p as H}from"./test-CXO-MJ-T.js";import{P as W}from"./press-image-Bu8jArux.js";import"./press-transition-MQnSZ_jj.js";const X={image:{jpg:"jpeg",jpe:"jpeg",pbm:"x-portable-bitmap",pgm:"x-portable-graymap",pnm:"x-portable-anymap",ppm:"x-portable-pixmap",psd:"vnd.adobe.photoshop",pic:"x-pict",rgb:"x-rgb",svg:"svg+xml",svgz:"svg+xml",tif:"tiff",xif:"vnd.xiff",wbmp:"vnd.wap.wbmp",wdp:"vnd.ms-photo",xbm:"x-xbitmap",ico:"x-icon"},video:{"3g2":"3gpp2","3gp":"3gpp",avi:"x-msvideo",f4v:"x-f4v",flv:"x-flv",jpgm:"jpm",jpgv:"jpeg",m1v:"mpeg",m2v:"mpeg",mpe:"mpeg",mpg:"mpeg",mpg4:"mpeg",m4v:"x-m4v",mkv:"x-matroska",mov:"quicktime",qt:"quicktime",movie:"x-sgi-movie",mp4v:"mp4",ogv:"ogg",smv:"x-smv",wm:"x-ms-wm",wmv:"x-ms-wmv",wmx:"x-ms-wmx",wvx:"x-ms-wvx"}},K="*";function J(){const e=window.navigator.userAgent.toLowerCase();return!!(e.match(/MicroMessenger/i)&&e.match(/MicroMessenger/i)[0]==="micromessenger")}function F({count:e,sourceType:s,type:a,extension:l=["*"]}){const i=document.createElement("input");return i.type="file",D(i,{position:"absolute",visibility:"hidden","z-index":-999,width:0,height:0,top:0,left:0}),i.accept=l.map(t=>{if(a!==K){const n=t.replace(".","");return`${a}/${X[a][n]||n}`}return J()?".":t.indexOf(".")===0?t:`.${t}`}).join(","),e>1&&(i.multiple="multiple"),s.length===1&&s[0]==="camera"&&(i.capture="camera"),i}const{hasOwnProperty:Q}=Object.prototype;function Y(e,s){return Q.call(e,s)}const y={};function C(e){for(const a in y)if(Y(y,a)&&y[a]===e)return a;const s=(window.URL||window.webkitURL).createObjectURL(e);return y[s]=e,s}function O(e){(window.URL||window.webkitURL).revokeObjectURL(e),delete y[e]}function U(e,s){const a=[],l=e.target.files.length;for(let i=0;i<l;i++){const t=e.target.files[i];let n;Object.defineProperty(t,"path",{get(){return n=n||C(t),n}}),i<s&&a.push(t)}return a}let h=null;function Z({count:e,sourceType:s,type:a,extension:l,success:i}){h&&(document.body.removeChild(h),h=null),h=F({count:e,sourceType:s,type:a,extension:l}),document.body.appendChild(h),h.addEventListener("change",t=>{const n=U(t,e);i({errMsg:"chooseFile:ok",get tempFilePaths(){return n.map(({path:o})=>o)},tempFiles:n})}),h.click()}let g=null;function $({count:e,sourceType:s,extension:a,success:l}){g&&(document.body.removeChild(g),g=null),g=F({count:e,sourceType:s,extension:a,type:"image"}),document.body.appendChild(g),g.addEventListener("change",i=>{const t=U(i,e);l({errMsg:"chooseImage:ok",get tempFilePaths(){return t.map(({path:r})=>r)},tempFiles:t})}),g.click()}let _=null;function ee({sourceType:e,extension:s,success:a}){_&&(document.body.removeChild(_),_=null),_=F({sourceType:e,extension:s,type:"video"}),document.body.appendChild(_),_.addEventListener("change",l=>{const i=l.target.files[0],t={errMsg:"chooseVideo:ok",tempFile:i,size:i.size,duration:0,width:0,height:0,name:i.name};let n;Object.defineProperty(t,"tempFilePath",{get(){return n=n||C(this.tempFile),n}});const r=document.createElement("video");if(r.onloadedmetadata!==void 0){const o=C(i);r.onloadedmetadata=function(){O(o),a(Object.assign(t,{duration:r.duration||0,width:r.videoWidth||0,height:r.videoHeight||0}))},setTimeout(()=>{r.onloadedmetadata=null,O(o),a(t)},300),r.src=o}else a(t)}),_.click()}function te({count:e,success:s,fail:a,type:l}){if(P())return Z({count:e,sourceType:[],type:l,extension:["*"],success:s});uni.chooseFile({count:e,type:l,success:s,fail:a})}function se({count:e,sourceType:s,sizeType:a,success:l,fail:i}){if(P())return $({count:e,sourceType:s,extension:["*"],success:l});uni.chooseImage({count:e,sourceType:s,sizeType:a,success:l,fail:i})}function ie({sourceType:e,success:s,fail:a,compressed:l,maxDuration:i,camera:t}){if(P())return ee({sourceType:e,extension:["*"],success:s});uni.chooseVideo({sourceType:e,success:s,fail:a,compressed:l,maxDuration:i,camera:t})}function ae(e){return e.tempFiles}function le(e){return e.tempFiles}function oe({accept:e,multiple:s,capture:a,compressed:l,maxDuration:i,sizeType:t,camera:n,maxCount:r}){return new Promise((o,v)=>{switch(e){case"image":se({count:s?Math.min(r,9):1,sourceType:a,sizeType:t,success:m=>o(ae(m)),fail:v});break;case"video":ie({sourceType:a,compressed:l,maxDuration:i,camera:n,success:m=>o(m),fail:v});break;default:te({count:s?r:1,type:"all",success:m=>o(le(m)),fail:v})}})}const ne={watch:{accept:{immediate:!0,handler(e){(e==="all"||e==="media")&&console.warn("只有微信小程序才支持把 accept 配置为 all、media 之一")}}}},re={props:{accept:{type:String,default:"image"},capture:{type:[String,Array],default:()=>["album","camera"]},compressed:{type:Boolean,default:!0},camera:{type:String,default:"back"},maxDuration:{type:Number,default:60},uploadIcon:{type:String,default:"photograph"},uploadIconColor:{type:String,default:"#D3D4D6"},useBeforeRead:{type:Boolean,default:!1},afterRead:{type:Function,default:null},beforeRead:{type:Function,default:null},previewFullImage:{type:Boolean,default:!0},maxCount:{type:[String,Number],default:52},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},name:{type:String,default:"file"},sizeType:{type:Array,default:()=>["original","compressed"]},multiple:{type:Boolean,default:!1},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:()=>[]},uploadText:{type:String,default:""},width:{type:[String,Number],default:80},height:{type:[String,Number],default:80},previewImage:{type:Boolean,default:!0},customStyle:{type:String,default:""}}},de={name:"PressUploader",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressIconPlus:M,PressLoadingPlus:B},mixins:[ne,re],emits:["afterRead","error","oversize"],data(){return{lists:[],isInCount:!0,isNotInUni:P()}},watch:{fileList:{immediate:!0,handler(){this.formatFileList()}}},methods:{addUnit:V,formatFileList(){const{fileList:e=[],maxCount:s}=this,a=e.map(l=>Object.assign(Object.assign({},l),{isImage:this.accept==="image"||j(l.url||l.thumb),isVideo:this.accept==="video"||G(l.url||l.thumb),deletable:typeof l.deletable=="boolean"?l.deletable:this.deletable}));this.lists=a,this.isInCount=a.length<s},chooseFile(){const{maxCount:e,multiple:s,lists:a,disabled:l}=this;if(console.log("[chooseFile]"),l)return;let i;try{i=Array.isArray(this.capture)?this.capture:this.capture.split(",")}catch{i=[]}oe(Object.assign({accept:this.accept,multiple:this.multiple,capture:i,compressed:this.compressed,maxDuration:this.maxDuration,sizeType:this.sizeType,camera:this.camera},{maxCount:e-a.length})).then(t=>{this.onBeforeRead(s?t:t[0])}).catch(t=>{this.$emit("error",t)})},onBeforeRead(e){const{beforeRead:s,useBeforeRead:a}=this;let l=!0;q(s)&&(l=s(e,this.getDetail())),a&&(l=new Promise((i,t)=>{this.$emit("beforeRead",Object.assign(Object.assign({file:e},this.getDetail()),{callback:n=>{n?i():t()}}))})),l&&(H(l)?l.then(i=>this.onAfterRead(i||e)):this.onAfterRead(e))},getDetail(e){return{name:this.name,index:e??this.fileList.length}},onAfterRead(e){const{maxSize:s,afterRead:a}=this;if(Array.isArray(e)?e.some(i=>i.size>s):e.size>s){this.$emit("oversize",Object.assign({file:e},this.getDetail()));return}typeof a=="function"&&a(e,this.getDetail()),this.$emit("afterRead",Object.assign({file:e},this.getDetail()))},deleteItem(e){this.$emit("delete",Object.assign(Object.assign({},this.getDetail(e)),{file:this.fileList[e]}))},onPreviewImage(e){!e.isImage||!this.previewFullImage||uni.previewImage({urls:this.lists.filter(s=>this.accept==="image"||j(s.url||s.thumb)).map(s=>s.url||s.thumb),current:e.url||e.thumb,fail(){}})},onPreviewVideo(e){if(!this.data.previewFullImage)return;const{index:s}=e.currentTarget.dataset,{lists:a}=this.data;wx.previewMedia({sources:a.map(l=>Object.assign(Object.assign({},l),{type:"video"})),current:s,fail(){}})},onClickPreview(e){const{index:s}=e.currentTarget.dataset,a=this.data.lists[s];this.$emit("clickPreview",Object.assign(Object.assign({},a),this.getDetail(s)))}}},ue={class:"press-upload__wrap"},ce=["src","mode","onClick"],pe=["src","mode","onClick"],me={key:1,class:"press-upload__wrap__preview__other"},fe={class:"press-upload__wrap__preview__other__text"},he={key:2,class:"press-upload__status"},ge={class:"press-upload__status__icon"},_e={key:0,class:"press-upload__status__message"},ve=["onClick"];const be=["hover-class"],ye={key:0,class:"press-upload__button__text"};function we(e,s,a,l,i,t){const n=w("PressIconPlus"),r=w("PressLoadingPlus");return u(),c("div",{class:"press-upload",style:k(e.customStyle)},[x("div",ue,[e.previewImage?(u(!0),c(L,{key:0},N(i.lists,(o,v)=>(u(),c("div",{key:v,class:"press-upload__wrap__preview"},[o.isImage||o.type&&o.type==="image"?(u(),c(L,{key:0},[i.isNotInUni?(u(),c("img",{key:0,src:o.thumb||o.url,mode:e.imageMode,class:"press-upload__wrap__preview__image",style:k([{width:t.addUnit(e.width),height:t.addUnit(e.height)}]),onClick:m=>t.onPreviewImage(o)},null,12,ce)):(u(),c("image",{key:1,src:o.thumb||o.url,mode:e.imageMode,class:"press-upload__wrap__preview__image",style:k([{width:t.addUnit(e.width),height:t.addUnit(e.height)}]),onClick:m=>t.onPreviewImage(o)},null,12,pe))],64)):(u(),c("div",me,[d(n,{color:"#80CBF9",size:"26",name:o.isVideo||o.type&&o.type==="video"?"movie":"folder"},null,8,["name"]),x("span",fe,I(o.isVideo||o.type&&o.type==="video"?"视频":"文件"),1)])),o.status==="uploading"||o.status==="failed"?(u(),c("div",he,[x("div",ge,[o.status==="failed"?(u(),S(n,{key:0,name:"close",color:"#ffffff",size:"22"})):(u(),S(r,{key:1,size:"22",mode:"circle",color:"#ffffff"}))]),o.message?(u(),c("span",_e,I(o.message),1)):f("",!0)])):f("",!0),o.status!=="uploading"&&(e.deletable||o.deletable)?(u(),c("div",{key:3,class:"press-upload__deletable",onClick:z(m=>t.deleteItem(v),["stop"])},[d(n,{name:"cross",color:"#ffffff",size:"16","custom-class":"press-upload__deletable__icon"})],8,ve)):f("",!0),(o.status,f("",!0))]))),128)):f("",!0),i.isInCount?(u(),c(L,{key:1},[e.$slots.default||e.$slots.$default?(u(),c("div",{key:0,onClick:s[0]||(s[0]=(...o)=>t.chooseFile&&t.chooseFile(...o))},[T(e.$slots,"default",{},void 0,!0)])):(u(),c("div",{key:1,class:E(["press-upload__button",[e.disabled&&"press-upload__button--disabled"]]),"hover-class":e.disabled?"":"press-upload__button--hover","hover-stay-time":"150",style:k([{width:t.addUnit(e.width),height:t.addUnit(e.height)}]),onClick:s[1]||(s[1]=z((...o)=>t.chooseFile&&t.chooseFile(...o),["stop"]))},[d(n,{name:e.uploadIcon,size:"26",color:e.uploadIconColor,onClick:t.chooseFile},null,8,["name","color","onClick"]),e.uploadText?(u(),c("span",ye,I(e.uploadText),1)):f("",!0)],14,be))],64)):f("",!0)])],4)}const ke=A(de,[["render",we],["__scopeId","data-v-9e4a56da"]]),b="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg";let R;const Re={i18n:{"zh-CN":{uploadVideo:"上传视频",uploadStatus:"上传状态",preview:"文件预览",maxCount:"限制上传数量",maxSize:"限制上传大小",customStyle:"自定义上传样式",beforeRead:"上传前置处理"},"en-US":{uploadVideo:"Upload Video",uploadStatus:"Upload Status",preview:"Preview",maxCount:"Max Count",maxSize:"Max Size",customStyle:"Custom Style",beforeRead:"Before Read"}},components:{PressUploader:ke,PressImage:W},data(){return{fileList1:[],fileListMaxSize:[],fileList2:[],fileList3:[{url:b}],fileList4:[{url:b},{url:b}],fileList6:[],fileListStatus:[{url:b,status:"uploading",message:"上传中..."},{url:b,status:"failed",message:"上传失败"}]}},mounted(){R=this},methods:{deletePic(e){console.log("[deletePic] event",e),this[`fileList${e.name}`].splice(e.index,1)},async afterRead(e){console.log("[afterRead] event",e);const s=[].concat(e.file);let a=this[`fileList${e.name}`].length;s.map(l=>{this[`fileList${e.name}`].push({...l,status:"uploading",message:"上传中"})});for(let l=0;l<s.length;l++){const i=await this.uploadFilePromise(s[l].path),t=this[`fileList${e.name}`][a];this[`fileList${e.name}`].splice(a,1,Object.assign(t,{message:"",...i})),a+=1}},uploadFilePromise(e){return console.log("[uploadFilePromise] url",e),new Promise(s=>{setTimeout(()=>s({url:e,status:"success",message:"上传失败"}),1e3)})},onOversize(e){console.log("[onOversize] file",e),R.onGTip("文件大小不能超过 500kb")},beforeRead(e){return console.log("[beforeRead] file",e),e.type!=="image/jpeg"?(R.onGTip("请上传 jpg 格式图片"),!1):!0},asyncBeforeRead(e){return console.log("[asyncBeforeRead] file",e),new Promise((s,a)=>{if(e.type!=="image/jpeg")R.onGTip("请上传 jpg 格式图片"),a();else{const l=new File(["foo"],"bar.jpg",{type:"image/jpeg"});s(l)}})}}},Pe={class:"demo-wrap"};function xe(e,s,a,l,i,t){const n=w("PressUploader"),r=w("demo-block"),o=w("PressImage");return u(),c("div",Pe,[d(r,{title:e.t("basicUsage")},{default:p(()=>[d(n,{"file-list":i.fileList1,name:"1",multiple:"","max-count":10,onAfterRead:t.afterRead,onDelete:t.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("uploadVideo")},{default:p(()=>[d(n,{"file-list":i.fileList2,name:"2",multiple:"","max-count":10,accept:"video",onAfterRead:t.afterRead,onDelete:t.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("uploadStatus")},{default:p(()=>[d(n,{"file-list":i.fileListStatus,name:"Status",multiple:"","max-count":10,accept:"video",onAfterRead:t.afterRead,onDelete:t.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("preview")},{default:p(()=>[d(n,{"file-list":i.fileList3,name:"3",multiple:"","max-count":10,"preview-full-image":!0,onAfterRead:t.afterRead,onDelete:t.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("maxCount")},{default:p(()=>[d(n,{"file-list":i.fileList4,name:"4",multiple:"","max-count":2,onAfterRead:t.afterRead,onDelete:t.deletePic},null,8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("maxSize")},{default:p(()=>[d(n,{"file-list":i.fileListMaxSize,name:"MaxSize",multiple:"","max-size":500*1024,onAfterRead:t.afterRead,onOversize:t.onOversize},null,8,["file-list","onAfterRead","onOversize"])]),_:1},8,["title"]),d(r,{title:e.t("customStyle")},{default:p(()=>[d(n,{"file-list":i.fileList6,name:"6",multiple:"","max-count":1,width:"250",height:"150",onAfterRead:t.afterRead,onDelete:t.deletePic},{default:p(()=>[d(o,{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_799718017ac81b11c0.png",mode:"widthFix",style:{width:"250px",height:"150px"},width:"250px",height:"150px"})]),_:1},8,["file-list","onAfterRead","onDelete"])]),_:1},8,["title"]),d(r,{title:e.t("beforeRead")},{default:p(()=>[d(n,{"before-read":t.beforeRead},null,8,["before-read"])]),_:1},8,["title"]),d(r,{title:e.t("disabled")},{default:p(()=>[d(n,{disabled:""})]),_:1},8,["title"])])}const Se=A(Re,[["render",xe]]);export{Se as default};
