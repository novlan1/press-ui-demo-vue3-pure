import{a0 as E,m as V}from"./index-C8vugXWi.js";let d={};function O(){try{!Object.keys(d).length&&typeof uni<"u"&&(typeof uni.getWindowInfo=="function"?d=uni.getWindowInfo():typeof uni.getSystemInfoSync=="function"&&(d=uni.getSystemInfoSync()))}catch(t){console.log("[getAppBaseInfo] err",t)}return d}const W={"css.var":"--a:0","css.env":"top:env(a)","css.constant":"top:constant(a)"};function R(t){return window.CSS&&CSS.supports&&(CSS.supports(t)||CSS.supports.apply(CSS,t.split(":")))}function $(t){return R(W[t])}const T=["top","left","right","bottom"],m={},y=[];let S,c;function w(){return!("CSS"in window)||typeof CSS.supports!="function"?c="":CSS.supports("top: env(safe-area-inset-top)")?c="env":CSS.supports("top: constant(safe-area-inset-top)")?c="constant":c="",c}function p(t,o){const n=t.style;Object.keys(o).forEach(i=>{const e=o[i];n[i]=e})}const x=[];function P(t){t?x.push(t):x.forEach(o=>{o()})}function B(){if(c=typeof c=="string"?c:w(),!c){T.forEach(n=>{m[n]=0});return}function t(n,i){const e=document.createElement("div"),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),l=100,u=1e4,b={position:"absolute",width:`${l}px`,height:"200px",boxSizing:"border-box",overflow:"hidden",paddingBottom:`${c}(safe-area-inset-${i})`};p(e,b),p(r,b),p(s,{transition:"0s",animation:"none",width:"400px",height:"400px"}),p(a,{transition:"0s",animation:"none",width:"250%",height:"250%"}),e.appendChild(s),r.appendChild(a),n.appendChild(e),n.appendChild(r),P(()=>{r.scrollTop=u,e.scrollTop=u;let v=e.scrollTop,C=r.scrollTop;function I(){this.scrollTop!==(this===e?v:C)&&(r.scrollTop=u,e.scrollTop=u,v=e.scrollTop,C=r.scrollTop,H(i))}e.addEventListener("scroll",I,E),r.addEventListener("scroll",I,E)});const A=getComputedStyle(e);Object.defineProperty(m,i,{configurable:!0,get(){return parseFloat(A.paddingBottom)}})}const o=document.createElement("div");p(o,{position:"absolute",left:"0",top:"0",width:"0",height:"0",zIndex:"-1",overflow:"hidden",visibility:"hidden"}),T.forEach(n=>{t(o,n)}),document.body.appendChild(o),P(),S=!0}function f(t){return S||B(),m[t]}const h=[];function H(t){h.length||setTimeout(()=>{const o={};h.forEach(n=>{o[n]=m[n]}),h.length=0,y.forEach(n=>{n(o)})},0),h.push(t)}function L(t){w()&&(S||B(),typeof t=="function"&&y.push(t))}function j(t){const o=y.indexOf(t);o>=0&&y.splice(o,1)}const g={get support(){return(typeof c=="string"?c:w()).length!=0},get top(){return f("top")},get left(){return f("left")},get right(){return f("right")},get bottom(){return f("bottom")},onChange:L,offChange:j},z=44;function N(){if($("css.var")){const{style:i}=document.documentElement,e=parseInt((i.getPropertyValue("--window-top").match(/\d+/)||["0"])[0],10),r=parseInt((i.getPropertyValue("--window-bottom").match(/\d+/)||["0"])[0],10),s=parseInt((i.getPropertyValue("--window-left").match(/\d+/)||["0"])[0],10),a=parseInt((i.getPropertyValue("--window-right").match(/\d+/)||["0"])[0],10),l=parseInt((i.getPropertyValue("--top-window-height").match(/\d+/)||["0"])[0],10);return{top:(e?e+g.top:0)+(l||0),bottom:r?r+g.bottom:0,left:s?s+g.left:0,right:a?a+g.right:0}}let t=0;const o=0,n=getCurrentPages();if(n.length){const e=n[n.length-1].$parent.$parent.navigationBar.type;t=e==="default"||e==="float"?z:0}return{top:t,bottom:o,left:0,right:0}}function _(){if(V())return 0;const{statusBarHeight:t}=O();return t}function q(t,o,n=!1){return new Promise(i=>{const e=t==null?void 0:t.$el;let r=e==null?void 0:e.querySelector(o);if(!r&&n&&(r=document.querySelector(o)),r){const s=r.getBoundingClientRect()||{},{top:a}=N();let l={left:s.left,right:s.right,width:s.width,height:s.height,x:s.x,y:s.y,top:s.top,bottom:s.bottom};l={...l,top:s.top-a,bottom:s.bottom-a},i(l)}else i({})})}function M(t){return new Promise(function(o,n){var i=document.getElementById("#clipboard");i==null||i.remove();var e=document.createElement("textarea");e.id="#clipboard",e.style.position="fixed",e.style.top="-9999px",e.style.zIndex="-9999",document.body.appendChild(e),e.value="".concat(t),e.select(),e.setSelectionRange(0,e.value.length);var r=document.execCommand("Copy",!1);e.blur(),r?o():n()})}export{_ as a,M as c,q as g};
