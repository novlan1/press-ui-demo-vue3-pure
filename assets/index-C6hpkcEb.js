import{R as o}from"./index-F6Gg9UHQ.js";function h(r,i,n="setData"){var s;if(!r)return;const e=((s=r.$vm)==null?void 0:s[n])||r[n];if(typeof e=="function")return e(i)}const m="showDialog";function c(){const r=getCurrentPages();return r[r.length-1]}function l(r,i,n){const e=r.$children;if(e){for(const s of e)if(s.$attrs[i]===n)return s;for(const s of e){const f=l(s,i,n);if(f)return f}}}function C(r,i){var e,s,f;if(!i||!r)return;let n=i;if(n.match(/^[^\w]/)&&(n=n.slice(1)),(e=r.$refs)!=null&&e[n])return r.$refs[n];if(o()){const u=i.startsWith("#")?"id":"class",t=l(r,u,n);if(t)return t}return typeof(r==null?void 0:r.$selectComponent)=="function"?(s=r==null?void 0:r.$selectComponent)==null?void 0:s.call(r,i):(f=r==null?void 0:r.selectComponent)==null?void 0:f.call(r,i)}function p(r){return new Promise((i,n)=>{const e=r.context||c();let{dialog:s}=r;s||(s=C(e,r.selector));const f={callback:(t,a)=>{t==="confirm"?i(a):n(a)},...r};delete f.dialog,delete f.context;const u=r.showFunction||m;h(s,f,u)})}export{h as a,p as b,C as s};