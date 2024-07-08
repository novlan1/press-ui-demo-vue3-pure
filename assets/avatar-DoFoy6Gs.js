import{a as d}from"./add-unit-Df5pRFBE.js";import{r as B,s as y}from"./utils-Do31p4kb.js";import{P as R}from"./press-image-BY7VJhfA.js";import{P as G}from"./press-icon-plus-5Xj-bw2h.js";import{_ as h,r as p,o as n,c as u,y as I,F as b,b as v,v as g,t as w,x as S,w as N,i as x,f as t,a as z,d as H,n as m}from"./index-BZexHo5h.js";import"./press-transition-DnFvQ8Gf.js";import"./system-BAdrsxg_.js";import"./validator-OjQp2SYe.js";import"./press-component-HD2axD72.js";import"./press-info-BWsAQQHi.js";const D={props:{src:{type:String,default:""},round:{type:Boolean,default:!0},size:{type:[String,Number],default:"40"},mode:{type:String,default:"scaleToFill"},text:{type:String,default:""},backgroundColor:{type:String,default:"#c0c4cc"},color:{type:String,default:"#fff"},fontSize:{type:[String,Number],default:18},icon:{type:String,default:""},mpAvatar:{type:Boolean,default:!1},randomBackgroundColor:{type:Boolean,default:!1},defaultUrl:{type:String,default:""},colorIndex:{type:[String,Number],validator(A){return A<=19},default:-1},name:{type:String,default:"level"},customStyle:{type:String,default:""}}},E=["#ffb34b","#f2bba9","#f7a196","#f18080","#88a867","#bfbf39","#89c152","#94d554","#f19ec2","#afaae4","#e1b0df","#c38cc1","#72dcdc","#9acdcb","#77b1cc","#448aca","#86cefa","#98d1ee","#73d1f1","#80a7dc"],U="data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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",O={name:"PressAvatar",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressImage:R,PressIconPlus:G},mixins:[D],emits:["click"],data(){return{colors:E,avatarUrl:this.src,allowMp:!1}},computed:{shape(){return this.round?"circle":"square"},imageStyle(){return{}},avatarStyle(){const{text:A,icon:o,colorIndex:a,backgroundColor:i,size:e,colors:r,randomBackgroundColor:s}=this;let l="transparent";return(A||o)&&(s?(console.log("colorIndex",a),l=r[a>-1?a:B(0,19)]):l=i),y([{width:d(e),height:d(e),background:l},this.customStyle])},textStyle(){const{fontSize:A,color:o}=this;return y({fontSize:A,color:o,textAlign:"center"})}},watch:{src:{immediate:!0,handler(A){this.avatarUrl=A,A||this.errorHandler()}}},created(){this.init()},methods:{addUnit:d,init(){},isImg(){return this.src.indexOf("/")!==-1},errorHandler(){this.avatarUrl=this.defaultUrl||U},clickHandler(){this.$emit("click",this.name)}}};function P(A,o,a,i,e,r){const s=p("PressIconPlus"),l=p("PressImage");return n(),u("div",{class:S(["press-avatar",[`press-avatar--${r.shape}`]]),style:g(r.avatarStyle),onClick:o[0]||(o[0]=N((...c)=>r.clickHandler&&r.clickHandler(...c),["stop"]))},[I(A.$slots,"default",{},()=>[A.mpAvatar&&e.allowMp?(n(),u(b,{key:0},[],64)):A.icon?(n(),v(s,{key:1,name:A.icon,size:A.fontSize,color:A.color},null,8,["name","size","color"])):A.text?(n(),u("span",{key:2,style:g(r.textStyle)},w(A.text),5)):(n(),v(l,{key:3,class:S(["press-avatar__image",[`press-avatar__image--${r.shape}`]]),round:!!A.round,src:e.avatarUrl||A.defaultUrl,width:A.size,radius:4,height:A.size,mode:A.mode,onError:r.errorHandler},null,8,["class","round","src","width","height","mode","onError"]))],!0)],6)}const M=h(O,[["render",P],["__scopeId","data-v-e68cc546"]]),Y={props:{urls:{type:Array,default:()=>[]},maxCount:{type:[String,Number],default:5},round:{type:Boolean,default:!0},mode:{type:String,default:"scaleToFill"},showMore:{type:Boolean,default:!0},size:{type:[String,Number],default:40},keyName:{type:String,default:""},gap:{type:[String,Number],validator(A){return A>=0&&A<=1},default:"0.5"},extraValue:{type:[Number,String],default:""},customStyle:{type:String,default:""}}},C={name:"PressAvatarGroup",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressAvatar:M},mixins:[Y],emits:["showMore"],data(){return{}},computed:{showUrl(){return this.urls.slice(0,this.maxCount)},extraText(){const{extraValue:A,urls:o,showUrl:a}=this;return A||o.length-a.length},textStyle(){return y({color:"#fff",fontSize:this.size*.4,textAlign:"center"})}},methods:{addUnit:d,getAvatarUrl(A){return typeof A=="object"?A[this.keyName||"url"]:A},clickHandler(){this.$emit("showMore")},getItemStyle(A){const{size:o,gap:a}=this,i=y({marginLeft:A===0?0:d(-o*a),width:d(o),height:d(o)});return console.log("res",i),i}}};function Q(A,o,a,i,e,r){const s=p("PressAvatar");return n(),u("div",{class:"press-avatar-group",style:g(A.customStyle)},[(n(!0),u(b,null,x(r.showUrl,(l,c)=>(n(),u("div",{key:c,class:"press-avatar-group__item",style:g(r.getItemStyle(c))},[t(s,{size:A.size,round:"",mode:A.mode,src:r.getAvatarUrl(l)},null,8,["size","mode","src"]),A.showMore&&c===r.showUrl.length-1&&(A.urls.length>A.maxCount||A.extraValue>0)?(n(),u("div",{key:0,class:"press-avatar-group__item__show-more",onClick:o[0]||(o[0]=(...k)=>r.clickHandler&&r.clickHandler(...k))},[z("span",{style:g(r.textStyle)},w(r.extraText),5)])):H("",!0)],4))),128))],4)}const F=h(C,[["render",Q],["__scopeId","data-v-1e50c382"]]),f="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_0ab8e66284a3617ed9.jpeg",j={i18n:{"zh-CN":{shape:"头像形状",size:"头像尺寸",icon:"图标头像",text:"文字头像",error:"加载失败",avatarGroup:"头像组"},"en-US":{shape:"Shape",size:"Size",icon:"Icon",text:"Text",error:"Error",avatarGroup:"Avatar Group"}},components:{PressAvatar:M,PressAvatarGroup:F},data(){return{src:f,customStyle:"margin-right: 20px",urls:[f,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_ef8e6956717db34745.jpg",f,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_7157200e469d0468b3.jpg",f,"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_a17f94292a34e9f644.jpeg",f]}},methods:{showMore(){this.onGTip("[showMore]")}}},L={class:"demo-wrap"};function V(A,o,a,i,e,r){const s=p("PressAvatar"),l=p("demo-block"),c=p("PressAvatarGroup");return n(),u("div",L,[t(l,{title:A.t("basicUsage")},{default:m(()=>[t(s,{src:e.src},null,8,["src"])]),_:1},8,["title"]),t(l,{title:A.t("shape")},{default:m(()=>[t(s,{src:e.src,round:"","custom-style":e.customStyle},null,8,["src","custom-style"]),t(s,{src:e.src,round:!1},null,8,["src"])]),_:1},8,["title"]),t(l,{title:A.t("size")},{default:m(()=>[t(s,{src:e.src,size:"30","custom-style":e.customStyle},null,8,["src","custom-style"]),t(s,{src:e.src,size:"40","custom-style":e.customStyle},null,8,["src","custom-style"]),t(s,{src:e.src,size:"50"},null,8,["src"])]),_:1},8,["title"]),t(l,{title:A.t("icon")},{default:m(()=>[t(s,{src:e.src,icon:"star-o","custom-style":e.customStyle},null,8,["src","custom-style"]),t(s,{src:e.src,icon:"like-o"},null,8,["src"])]),_:1},8,["title"]),t(l,{title:A.t("text")},{default:m(()=>[t(s,{text:"Y","custom-style":e.customStyle},null,8,["custom-style"]),t(s,{text:"G","random-background-color":"","custom-style":e.customStyle},null,8,["custom-style"]),t(s,{text:"杨","random-background-color":""})]),_:1},8,["title"]),t(l,{title:A.t("error")},{default:m(()=>[t(s)]),_:1},8,["title"]),t(l,{title:A.t("avatarGroup")},{default:m(()=>[t(c,{urls:e.urls,"custom-style":"margin-bottom: 16px",onShowMore:r.showMore},null,8,["urls","onShowMore"]),t(c,{urls:e.urls,gap:"0.6","custom-style":"margin-bottom: 16px",onShowMore:r.showMore},null,8,["urls","onShowMore"]),t(c,{urls:e.urls,size:"50","custom-style":"margin-bottom: 16px",onShowMore:r.showMore},null,8,["urls","onShowMore"])]),_:1},8,["title"])])}const eA=h(j,[["render",V]]);export{eA as default};
