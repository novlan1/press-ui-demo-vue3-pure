import{P as N}from"./press-cell-BaYHUDhK.js";import{a as P}from"./color-DciZLlTH.js";import{g as x,e as B}from"./rect-DxgHpUcC.js";import{n as b,j as I}from"./add-unit-DtbDjKpw.js";import{d as w,a as A}from"./press-component-B_qTMwPt.js";import{h as y}from"./parent-map-_1jD1UtF.js";import{P as E,C as M}from"./relation-Ce8eT7mn.js";import{S as z}from"./scroll-view-BfGQU6ug.js";import{_ as v,r as T,o as l,c,f,l as C,a as _,i as k,w as m,F as O,y as D,m as S,t as L,d as j,n as V}from"./index-EgE5uNPY.js";import"./press-icon-plus-hPxG3yOg.js";import"./style-CpIyAjCl.js";import"./press-info-BmvbeesZ.js";import"./utils-D4SHz1Xc.js";import"./link-Ol_HDPvL.js";import"./event-16l6qHb5.js";import"./support-passive-CNRHRm4O.js";import"./system-D8APUHdN.js";const H=()=>{const t=[];for(let o=0;o<26;o++)t.push(String.fromCharCode(65+o));return t},W={name:"PressIndexBar",options:{...w,styleIsolation:"shared"},mixins:[E(y),z],props:{sticky:{type:Boolean,default:!0},zIndex:{type:Number,default:1},highlightColor:{type:String,default:P},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:()=>H()},windowTop:{type:Number,default:0},...A},emits:["select"],data(){return{activeAnchorIndex:null,showSidebar:!1,sidebar:{},curScrollTop:0}},created(){this.scrollTop=0,this.children=[]},mounted(){this.updateData()},methods:{setData(t){Object.keys(t).forEach(e=>{this[e]=t[e]})},updateData(){b(()=>{this.timer!=null&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.showSidebar=!!this.children.length,b(()=>{this.setRect().then(()=>{this.onScroll()})})},0)})},setRect(){return Promise.all([this.setAnchorsRect(),this.setListRect(),this.setSiderbarRect()])},setAnchorsRect(){return Promise.all(this.children.map(t=>x(t,".press-index-anchor-wrapper").then(e=>(Object.assign(t,{height:e.height,top:e.top+this.scrollTop}),t))))},setListRect(){return x(this,".press-index-bar").then(t=>{I(t)&&Object.assign(this,{height:t.height,top:t.top+this.scrollTop})})},setSiderbarRect(){return x(this,".press-index-bar__sidebar").then(t=>{I(t)&&(this.sidebar={height:t.height,top:t.top})})},setDiffData({target:t,data:e}){const o={};Object.keys(e).forEach(i=>{t[i]!==e[i]&&(o[i]=e[i])}),Object.keys(o).length&&t.setData(o)},getAnchorRect(t){return x(t,".press-index-anchor-wrapper").then(e=>({height:e.height,top:e.top}))},getActiveAnchorIndex(){const{children:t,scrollTop:e}=this,{sticky:o,stickyOffsetTop:i}=this;for(let s=this.children.length-1;s>=0;s--){const r=s>0?t[s-1].height:0;if((o?r+i:this.stickyOffsetTop)+e>=t[s].top)return s}return-1},onScroll(t){t&&(t.target||t.detail)&&(this.scrollTop=t.target.scrollTop||t.detail.scrollTop);const{children:e=[],scrollTop:o}=this;if(!e.length)return;const{sticky:i,stickyOffsetTop:s,zIndex:r,highlightColor:a}=this,n=this.getActiveAnchorIndex();if(this.setDiffData({target:this,data:{activeAnchorIndex:n}}),i){let h=!1;n!==-1&&(h=e[n].top<=s+o),e.forEach((d,p)=>{if(p===n){let u="",g=`
              color: ${a};
            `;h&&(u=`
                height: ${e[p].height}px;
              `,g=`
                position: fixed;
                top: ${s}px;
                z-index: ${r};
                color: ${a};
              `),this.setDiffData({target:d,data:{active:!0,anchorStyle:g,wrapperStyle:u}})}else if(p===n-1){const u=e[p],g=u.top,R=`
              position: relative;
              transform: translate3d(0, ${(p===e.length-1?this.top:e[p+1].top)-g-u.height}px, 0);
              z-index: ${r};
              color: ${a};
            `;this.setDiffData({target:d,data:{active:!0,anchorStyle:R}})}else this.setDiffData({target:d,data:{active:!1,anchorStyle:"",wrapperStyle:""}})})}},onClick(){},onTouchMove(t){const e=this.children.length,o=t.touches[0],i=this.sidebar.height/e;let s;console.log("[onTouchMove]",o.clientY,this.sidebar.top,this.top),s=Math.floor((o.clientY+this.windowTop-this.sidebar.top)/i),console.log("[onTouchMove]",s),s<0?s=0:s>e-1&&(s=e-1),this.scrollToAnchor(s)},onTouchStop(){this.scrollToAnchorIndex=null},scrollToAnchor(t){if(typeof t!="number"||this.scrollToAnchorIndex===t)return;this.scrollToAnchorIndex=t;const e=this.children.find(o=>o.index===this.indexList[t]);e!==void 0&&(console.log("[scrollTop]",this.scrollTop),e.scrollIntoView(this.scrollTop,this.changeScrollerTop),this.$emit("select",e.index))},onClickInner(t){var o,i;const e=(i=(o=t.currentTarget)==null?void 0:o.dataset)==null?void 0:i.index;e!==void 0&&(console.log("[index]",e,this.indexList),this.scrollToAnchor(+e))},onWatchScroll(t){this.onScroll(t)},changeScrollerTop(t){const e=B("pressIndexBarWrapper");console.log("[changeScrollerTop] top",t);const o=document==null?void 0:document.querySelector(e);o&&(o.scrollTop=t)}}},Y={class:"press-index-bar-container"},F={class:"press-index-bar"},$=["data-index"];function q(t,e,o,i,s,r){const a=T("scroll-view");return l(),c("div",Y,[f(a,{id:"pressIndexBarWrapper",class:"press-index-bar-wrapper",enhanced:"","scroll-with-animation":!1,"scroll-y":"","scroll-top":s.curScrollTop,onScroll:r.onWatchScroll},{default:C(()=>[_("div",F,[k(t.$slots,"default",{},void 0,!0)])]),_:3},8,["scroll-top","onScroll"]),s.showSidebar?(l(),c("div",{key:0,class:"press-index-bar__sidebar",onClick:e[1]||(e[1]=m((...n)=>r.onClick&&r.onClick(...n),["stop","prevent"])),onTouchmove:e[2]||(e[2]=m((...n)=>r.onTouchMove&&r.onTouchMove(...n),["stop","prevent"])),onTouchend:e[3]||(e[3]=m((...n)=>r.onTouchStop&&r.onTouchStop(...n),["stop"])),onTouchcancel:e[4]||(e[4]=m((...n)=>r.onTouchStop&&r.onTouchStop(...n),["stop","prevent"]))},[(l(!0),c(O,null,D(o.indexList,(n,h)=>(l(),c("div",{key:h,class:"press-index-bar__index",style:S("z-index: "+(o.zIndex+1)+"; color: "+(s.activeAnchorIndex===h?o.highlightColor:"")),"data-index":h,onClick:e[0]||(e[0]=m((...d)=>r.onClickInner&&r.onClickInner(...d),["stop"]))},L(n),13,$))),128))],32)):j("",!0)])}const G=v(W,[["render",q],["__scopeId","data-v-b50a9833"]]),K={name:"PressIndexAnchor",options:{...w,styleIsolation:"shared"},mixins:[M(y,{indexKey:"tIndex"})],props:{useSlot:Boolean,index:{type:[Number,String],default:""},...A},emits:[],data(){return{active:!1,wrapperStyle:"",anchorStyle:""}},methods:{setData(t){Object.keys(t).forEach(e=>{this[e]=t[e]})},scrollIntoView(t,e){x(this,".press-index-anchor-wrapper").then(o=>{const i=t+o.top-this[y].stickyOffsetTop;e==null||e(i)})}}},U={key:1};function X(t,e,o,i,s,r){return l(),c("div",null,[_("div",{class:"press-index-anchor-wrapper",style:S(s.wrapperStyle)},[_("div",{class:V("press-index-anchor "+(s.active?"press-index-anchor--active press-hairline--bottom":"")),style:S(s.anchorStyle)},[o.useSlot?k(t.$slots,"default",{key:0},void 0,!0):(l(),c("span",U,L(o.index),1))],6)],4)])}const J=v(K,[["render",X],["__scopeId","data-v-618ba8a7"]]);function Q(){const t=[];for(let e=65;e<91;e++)t.push(String.fromCharCode(e));return t}const Z=Q(),tt={i18n:{"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},components:{PressCell:N,PressIndexBar:G,PressIndexAnchor:J},data(){let t="",e=0;return e=44,{anchorList:Z,wrapStyle:t,stickyOffsetTop:e}},mounted(){},methods:{onSelect(t){console.log("[onSelect]: ",t)}}};function et(t,e,o,i,s,r){const a=T("press-index-anchor"),n=T("press-cell"),h=T("press-index-bar");return l(),c("div",{class:"demo-wrap",style:S(s.wrapStyle)},[f(h,{"sticky-offset-top":s.stickyOffsetTop,"window-top":44,onSelect:r.onSelect},{default:C(()=>[(l(!0),c(O,null,D(s.anchorList,(d,p)=>(l(),c("div",{key:p},[f(a,{index:d},null,8,["index"]),f(n,{title:t.t("text")},null,8,["title"]),f(n,{title:t.t("text")},null,8,["title"]),f(n,{title:t.t("text")},null,8,["title"])]))),128))]),_:1},8,["sticky-offset-top","onSelect"])],4)}const vt=v(tt,[["render",et]]);export{vt as default};
