import{R as u,ac as d,X as g}from"./index-CYG7WvnB.js";const a=()=>{let t=!1;return t=!0,t},f=/scroll|auto|overlay/i;function m(t,e){e===void 0&&(e=window);let n=t;for(;n&&n.tagName!=="HTML"&&n.tagName!=="BODY"&&n.nodeType===1&&n!==e;){const{overflowY:r}=window.getComputedStyle(n);if(f.test(r))return n;n=n.parentNode}return e}function p(t){const e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}function h(t){let e=t;return t.startsWith("#")||(e=`#${t}`),e=`${e} > .uni-scroll-view > .uni-scroll-view`,e}function S(t){const{top:e=0}=d();return u()||a()?t-e:t}function y(){if(u()){const c=Math.min(window.innerWidth,document.documentElement.clientWidth,screen.width);let o=Math.min(window.innerHeight,document.documentElement.clientHeight,screen.height);const{top:i,bottom:l}=d();return o-=i,o-=l,{windowWidth:c,windowHeight:o,windowTop:i,windowBottom:l}}const{windowWidth:t,windowHeight:e,windowTop:n,windowBottom:r}=uni.getSystemInfoSync();return{windowWidth:t,windowHeight:e,windowTop:n,windowBottom:r}}function H(){if(u())return 0;const{statusBarHeight:t}=g();return t}function T(t,e){return new Promise(n=>{const r=h(e),c=t.$el;if(c){const o=c.querySelector(r);o||n({}),n({scrollHeight:o.scrollHeight,scrollTop:o.scrollTop});return}uni.createSelectorQuery().in(t).select(r).fields({scrollOffset:!0},o=>{n(o)}).exec()})}function R(t,e,n=!1){return new Promise(r=>{const c=t==null?void 0:t.$el;let o=c==null?void 0:c.querySelector(e);if(!o&&n&&(o=document.querySelector(e)),o){const i=o.getBoundingClientRect()||{},{top:l}=d();let s={left:i.left,right:i.right,width:i.width,height:i.height,x:i.x,y:i.y,top:i.top,bottom:i.bottom};s={...s,top:i.top-l,bottom:i.bottom-l},r(s)}else r({})})}function W(t,e){return new Promise(n=>{const r=t.$el;if(r){const o=[...r.querySelectorAll(e)].map(i=>i.getBoundingClientRect());n(o);return}uni.createSelectorQuery().in(t).selectAll(e).boundingClientRect().exec((c=[])=>{n(c[0])})})}export{S as a,y as b,W as c,m as d,H as e,h as f,R as g,T as h,p as i};
