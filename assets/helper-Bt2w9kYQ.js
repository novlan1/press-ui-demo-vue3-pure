import{m as A}from"./index-88cP1sOH.js";function D(e,n,t="setData"){var s;if(!e)return;const r=((s=e.$vm)==null?void 0:s[t])||e[t];if(typeof r=="function")return r(n)}const M="showDialog";function P(){const e=getCurrentPages();return e[e.length-1]}function C(e,n,t){const r=e.$children;if(r){for(const s of r)if(s.$attrs[n]===t)return s;for(const s of r){const o=C(s,n,t);if(o)return o}}}function $(e,n){var r,s,o;if(!n||!e)return;if(typeof n=="function")return n(e);let t=n;if(t.match(/^[^\w]/)&&(t=t.slice(1)),(r=e.$refs)!=null&&r[t])return e.$refs[t];if(A()){const a=n.startsWith("#")?"id":"class",l=C(e,a,t);if(l)return l}return typeof(e==null?void 0:e.$selectComponent)=="function"?(s=e==null?void 0:e.$selectComponent)==null?void 0:s.call(e,n):(o=e==null?void 0:e.selectComponent)==null?void 0:o.call(e,n)}function i(e){return new Promise((n,t)=>{const r=e.context||P();let{dialog:s}=e;s||(s=$(r,e.selector));const o={callback:(l,u)=>{l==="confirm"?n(u):t(u)},...e};delete o.dialog,delete o.context;const a=e.showFunction||M;D(s,o,a)})}function f(e,n,t,r=""){if(!e)return"";const s=new Date;`${e}`.length===10&&(e*=1e3),s.setTime(e);const o={"M+":s.getMonth()+1,"d+":s.getDate(),"h+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};let a=/(y+)/;r&&(a=new RegExp(`(?:^|(?:[^${r}y]))(y+)`));let l=n.match(a);l!=null&&l[1]&&(n=n.replace(l[1],`${s.getFullYear()}`.slice(4-l[1].length)));for(const u in o){let E=new RegExp(`(${u})`);if(r&&(E=new RegExp(`(?:^|(?:[^${r}${u[0]}]))(${u})`)),l=n.match(E),l!=null&&l[1]){const{index:T=0}=l,g=r?T+l[0].length-l[1].length:T,_=`${o[u]}`,h=l[1].length,I=h===1?_:`00${_}`.slice(`${_}`.length);n=n.slice(0,g)+I+n.slice(g+h)}}return r&&(n=n.replace(new RegExp(r,"g"),"")),n}const p=1e3*60*60*24*365,L=15*60*1e3,c={POPUP_CELL:"press-popup-cell-functional",POPUP_CELL_2:"press-popup-cell-functional-2",PICKER:"press-picker-functional",DATE_TIME_PICKER:"press-datetime-picker-popup-functional"},S={ON_TIME_START:"ON_TIME_START",LAST_READY_TIME:"LAST_READY_TIME"},m={ON_TIME_START:{MIN:Date.now(),MAX:Date.now()+p},LATEST_READY:{MIN:Date.now()-p,MAX:Date.now()+p}};function w(e){return i({selector:`#${c.POPUP_CELL}`,...e})}function O(e){i({selector:`#${c.POPUP_CELL}`,...e}).then(n=>{const{context:t={}}=n||{};t.closeDialog()}).catch(n=>{const{context:t={}}=n||{};t.closeDialog()})}function N(e){return i({selector:`#${c.POPUP_CELL_2}`,...e})}function F(e){return i({selector:`#${c.PICKER}`,...e})}function b(e){return i({selector:`#${c.DATE_TIME_PICKER}`,...e})}function R(e){return parseInt(`${e/1e3/60}`,10)}function v(){let e=Date.now()+L;for(;R(e)%5!==0;)e+=60*1e3;return parseInt(`${e/1e3}`,10)}function U(e,n){let t="";return e==1?t="人满开赛":e==2?t="手动开赛":t=f(n,"M/d hh:mm开赛"),t}function y(e){let n="";return e?n=f(e,"M/d hh:mm"):n="不启用",n}function k(){return Array.from({length:13}).map((e,n)=>n<2?null:n*5).filter(e=>e).map(e=>({value:e,label:`${e}分钟`}))}const K=[{label:"一局胜负",value:1},{label:"三局两胜",value:3},{label:"五局三胜",value:5},{label:"七局四胜",value:7}],B=["","一局胜负","","三局两胜","","五局三胜","","七局四胜"],Y=["各禁4英雄","不禁用英雄","","各禁2英雄","各禁3英雄"],W=[{label:"不禁用英雄",value:1},{label:"各禁2英雄",value:3},{label:"各禁3英雄",value:4},{label:"各禁4英雄",value:0}];function H(e){return e?f(e,"M/d hh:mm 截止上场"):"不启用"}function X(e){return f(e,"M/d hh:mm")}export{B,m as D,c as F,Y as P,W as S,F as a,w as b,N as c,b as d,y as e,K as f,U as g,S as h,k as i,v as j,H as l,X as o,O as s,f as t};