import{ag as g,a3 as $}from"./index-F6Gg9UHQ.js";import{p as v}from"./component-handler-DG932W7Y.js";function y(r){return document.body.contains(r)}function b({defaultOptions:r,component:d}){var p;let u={},n=[],l=!1,i={...r};const m=((p=r.selector)==null?void 0:p.slice(1))||"component-default-id";function C({multiple:e,component:t,dialogId:a}){var h;if($)return{};if(n=n.filter(o=>!o.$el.parentNode||y(o.$el)),!n.length||e){const o=document.getElementById(a);o!=null&&o.parentElement&&o.parentElement.removeChild(o);const f=document.createElement("div");f.id=a,document.body.appendChild(f);const s=g(f,t);(h=s==null?void 0:s.$on)==null||h.call(s,"input",E=>{s.value=E}),n.push(s)}return n[n.length-1]}function c(e={duration:0}){const t=C({multiple:l,component:d,dialogId:m});return e=v(e),e={...i,...u[e.type||i.type],...e},c.getOptions=()=>e,t.clear=()=>{t.setData({show:!1}),e.onClose&&e.onClose(),n=n.filter(a=>a!==t),setTimeout(()=>{document.body.contains(t.$el)&&t.$el&&t.$el.parentNode.removeChild(t.$el)},e.animationDuration||0)},t.set=(...a)=>{typeof t.$set=="function"?t.$set(t,...a):t[a[0]]=a[1]},t.setData(e),clearTimeout(t.timer),t.setData({show:!0}),e.duration>0&&(t.timer=setTimeout(()=>{t.clear()},e.duration)),t}return c.clear=e=>{n.length&&(e?(n.forEach(t=>{t.clear()}),n=[]):l?n.shift().clear():n[0].clear())},c.setDefaultOptions=(e,t)=>{typeof e=="string"?u[e]=t:Object.assign(i,e)},c.resetDefaultOptions=e=>{typeof e=="string"?u[e]=null:(i={...r},u={})},c.allowMultiple=(e=!0)=>{l=e},c.install=()=>{},c}function O(r,d,u={}){const n=d,l=document.getElementById(n);l!=null&&l.parentNode&&l.parentNode.removeChild(l);const i=document.createElement("div");return i.id=n,document.body.appendChild(i),g(i,r,u)}export{b as g,O as i};