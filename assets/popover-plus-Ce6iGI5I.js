import{P as lt}from"./press-popup-plus-CJ8zzkJc.js";import{_ as ct,C as Et,af as Tt,I as Qe,r as R,o as oe,c as ue,f as x,l as k,a as fe,n as ee,i as Ke,F as pt,v as ut,w as Ze,b as Dt,d as Bt,t as te,m as Lt,Q as Vt,V as jt,J as ce,p as Rt,e as It}from"./index-BDdv8HSf.js";import{t as Mt}from"./press-transition-CO_3M3TL.js";import{P as Wt}from"./press-picker-plus-Dd740NJU.js";import{P as Ht}from"./press-cell-CtWA6KMv.js";import{a as Nt,P as _t}from"./press-grid-item-BkcnPRf7.js";import"./press-overlay-Dc8iNreK.js";import"./number-CU9l-NjU.js";import"./parent-map-_1jD1UtF.js";import"./scroll-view-BOY_Gb3V.js";import"./toolbar-N4JCKc8j.js";import"./link-DSy0TEsA.js";import"./event-DUfG_Jon.js";import"./relation-Ce8eT7mn.js";const zt=e=>({props:{closeOnClickOutside:{type:Boolean,default:!0}},data(){return{clickOutsideHandler:o=>{this.closeOnClickOutside&&!this.$el.contains(o.target)&&this[e.method]()}}},mounted(){document.addEventListener(e.event,this.clickOutsideHandler)},beforeDestroy(){document.removeEventListener(e.event,this.clickOutsideHandler)}});var B="top",M="bottom",W="right",L="left",je="auto",ge=[B,M,W,L],re="start",me="end",Ut="clippingParents",ft="viewport",pe="popper",Ft="reference",$e=ge.reduce(function(e,t){return e.concat([t+"-"+re,t+"-"+me])},[]),dt=[].concat(ge,[je]).reduce(function(e,t){return e.concat([t,t+"-"+re,t+"-"+me])},[]),Gt="beforeRead",qt="read",Xt="afterRead",Yt="beforeMain",Jt="main",Qt="afterMain",Kt="beforeWrite",Zt="write",$t="afterWrite",eo=[Gt,qt,Xt,Yt,Jt,Qt,Kt,Zt,$t];function z(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function I(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Re(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function to(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},i=t.elements[o];!I(i)||!z(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(c){var s=r[c];s===!1?i.removeAttribute(c):i.setAttribute(c,s===!0?"":s)}))})}function oo(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],i=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),s=c.reduce(function(a,p){return a[p]="",a},{});!I(r)||!z(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(a){r.removeAttribute(a)}))})}}const ro={name:"applyStyles",enabled:!0,phase:"write",fn:to,effect:oo,requires:["computeStyles"]};function _(e){return e.split("-")[0]}var K=Math.max,Se=Math.min,ne=Math.round;function Le(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function vt(){return!/^((?!chrome|android).)*safari/i.test(Le())}function ie(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&I(e)&&(r=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var c=Z(e)?j(e):window,s=c.visualViewport,a=!vt()&&o,p=(n.left+(a&&s?s.offsetLeft:0))/r,l=(n.top+(a&&s?s.offsetTop:0))/i,m=n.width/r,h=n.height/i;return{width:m,height:h,top:l,right:p+m,bottom:l+h,left:p,x:p,y:l}}function Ie(e){var t=ie(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function mt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Re(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function U(e){return j(e).getComputedStyle(e)}function no(e){return["table","td","th"].indexOf(z(e))>=0}function G(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return z(e)==="html"?e:e.assignedSlot||e.parentNode||(Re(e)?e.host:null)||G(e)}function et(e){return!I(e)||U(e).position==="fixed"?null:e.offsetParent}function io(e){var t=/firefox/i.test(Le()),o=/Trident/i.test(Le());if(o&&I(e)){var n=U(e);if(n.position==="fixed")return null}var r=Ae(e);for(Re(r)&&(r=r.host);I(r)&&["html","body"].indexOf(z(r))<0;){var i=U(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ye(e){for(var t=j(e),o=et(e);o&&no(o)&&U(o).position==="static";)o=et(o);return o&&(z(o)==="html"||z(o)==="body"&&U(o).position==="static")?t:o||io(e)||t}function Me(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function de(e,t,o){return K(e,Se(t,o))}function ao(e,t,o){var n=de(e,t,o);return n>o?o:n}function ht(){return{top:0,right:0,bottom:0,left:0}}function gt(e){return Object.assign({},ht(),e)}function yt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var so=function(t,o){return t=typeof t=="function"?t(Object.assign({},o.rects,{placement:o.placement})):t,gt(typeof t!="number"?t:yt(t,ge))};function lo(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,c=o.modifiersData.popperOffsets,s=_(o.placement),a=Me(s),p=[L,W].indexOf(s)>=0,l=p?"height":"width";if(!(!i||!c)){var m=so(r.padding,o),h=Ie(i),f=a==="y"?B:L,b=a==="y"?M:W,v=o.rects.reference[l]+o.rects.reference[a]-c[a]-o.rects.popper[l],u=c[a]-o.rects.reference[a],w=ye(i),C=w?a==="y"?w.clientHeight||0:w.clientWidth||0:0,P=v/2-u/2,d=m[f],g=C-h[l]-m[b],y=C/2-h[l]/2+P,O=de(d,y,g),E=a;o.modifiersData[n]=(t={},t[E]=O,t.centerOffset=O-y,t)}}function co(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||mt(t.elements.popper,r)&&(t.elements.arrow=r))}const po={name:"arrow",enabled:!0,phase:"main",fn:lo,effect:co,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var uo={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fo(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:ne(o*r)/r||0,y:ne(n*r)/r||0}}function tt(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,c=e.offsets,s=e.position,a=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,m=e.isFixed,h=c.x,f=h===void 0?0:h,b=c.y,v=b===void 0?0:b,u=typeof l=="function"?l({x:f,y:v}):{x:f,y:v};f=u.x,v=u.y;var w=c.hasOwnProperty("x"),C=c.hasOwnProperty("y"),P=L,d=B,g=window;if(p){var y=ye(o),O="clientHeight",E="clientWidth";if(y===j(o)&&(y=G(o),U(y).position!=="static"&&s==="absolute"&&(O="scrollHeight",E="scrollWidth")),y=y,r===B||(r===L||r===W)&&i===me){d=M;var A=m&&y===g&&g.visualViewport?g.visualViewport.height:y[O];v-=A-n.height,v*=a?1:-1}if(r===L||(r===B||r===M)&&i===me){P=W;var S=m&&y===g&&g.visualViewport?g.visualViewport.width:y[E];f-=S-n.width,f*=a?1:-1}}var T=Object.assign({position:s},p&&uo),H=l===!0?fo({x:f,y:v},j(o)):{x:f,y:v};if(f=H.x,v=H.y,a){var D;return Object.assign({},T,(D={},D[d]=C?"0":"",D[P]=w?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+f+"px, "+v+"px)":"translate3d("+f+"px, "+v+"px, 0)",D))}return Object.assign({},T,(t={},t[d]=C?v+"px":"",t[P]=w?f+"px":"",t.transform="",t))}function vo(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,c=i===void 0?!0:i,s=o.roundOffsets,a=s===void 0?!0:s,p={placement:_(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,tt(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,tt(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const mo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vo,data:{}};var Pe={passive:!0};function ho(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=r===void 0?!0:r,c=n.resize,s=c===void 0?!0:c,a=j(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(l){l.addEventListener("scroll",o.update,Pe)}),s&&a.addEventListener("resize",o.update,Pe),function(){i&&p.forEach(function(l){l.removeEventListener("scroll",o.update,Pe)}),s&&a.removeEventListener("resize",o.update,Pe)}}const go={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ho,data:{}};var yo={left:"right",right:"left",bottom:"top",top:"bottom"};function ke(e){return e.replace(/left|right|bottom|top/g,function(t){return yo[t]})}var wo={start:"end",end:"start"};function ot(e){return e.replace(/start|end/g,function(t){return wo[t]})}function We(e){var t=j(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function He(e){return ie(G(e)).left+We(e).scrollLeft}function bo(e,t){var o=j(e),n=G(e),r=o.visualViewport,i=n.clientWidth,c=n.clientHeight,s=0,a=0;if(r){i=r.width,c=r.height;var p=vt();(p||!p&&t==="fixed")&&(s=r.offsetLeft,a=r.offsetTop)}return{width:i,height:c,x:s+He(e),y:a}}function xo(e){var t,o=G(e),n=We(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=K(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=K(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+He(e),a=-n.scrollTop;return U(r||o).direction==="rtl"&&(s+=K(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:c,x:s,y:a}}function Ne(e){var t=U(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function wt(e){return["html","body","#document"].indexOf(z(e))>=0?e.ownerDocument.body:I(e)&&Ne(e)?e:wt(Ae(e))}function ve(e,t){var o;t===void 0&&(t=[]);var n=wt(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),i=j(n),c=r?[i].concat(i.visualViewport||[],Ne(n)?n:[]):n,s=t.concat(c);return r?s:s.concat(ve(Ae(c)))}function Ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oo(e,t){var o=ie(e,!1,t==="fixed");return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}function rt(e,t,o){return t===ft?Ve(bo(e,o)):Z(t)?Oo(t,o):Ve(xo(G(e)))}function Co(e){var t=ve(Ae(e)),o=["absolute","fixed"].indexOf(U(e).position)>=0,n=o&&I(e)?ye(e):e;return Z(n)?t.filter(function(r){return Z(r)&&mt(r,n)&&z(r)!=="body"}):[]}function Po(e,t,o,n){var r=t==="clippingParents"?Co(e):[].concat(t),i=[].concat(r,[o]),c=i[0],s=i.reduce(function(a,p){var l=rt(e,p,n);return a.top=K(l.top,a.top),a.right=Se(l.right,a.right),a.bottom=Se(l.bottom,a.bottom),a.left=K(l.left,a.left),a},rt(e,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function bt(e){var t=e.reference,o=e.element,n=e.placement,r=n?_(n):null,i=n?ae(n):null,c=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,a;switch(r){case B:a={x:c,y:t.y-o.height};break;case M:a={x:c,y:t.y+t.height};break;case W:a={x:t.x+t.width,y:s};break;case L:a={x:t.x-o.width,y:s};break;default:a={x:t.x,y:t.y}}var p=r?Me(r):null;if(p!=null){var l=p==="y"?"height":"width";switch(i){case re:a[p]=a[p]-(t[l]/2-o[l]/2);break;case me:a[p]=a[p]+(t[l]/2-o[l]/2);break}}return a}function he(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,i=o.strategy,c=i===void 0?e.strategy:i,s=o.boundary,a=s===void 0?Ut:s,p=o.rootBoundary,l=p===void 0?ft:p,m=o.elementContext,h=m===void 0?pe:m,f=o.altBoundary,b=f===void 0?!1:f,v=o.padding,u=v===void 0?0:v,w=gt(typeof u!="number"?u:yt(u,ge)),C=h===pe?Ft:pe,P=e.rects.popper,d=e.elements[b?C:h],g=Po(Z(d)?d:d.contextElement||G(e.elements.popper),a,l,c),y=ie(e.elements.reference),O=bt({reference:y,element:P,strategy:"absolute",placement:r}),E=Ve(Object.assign({},P,O)),A=h===pe?E:y,S={top:g.top-A.top+w.top,bottom:A.bottom-g.bottom+w.bottom,left:g.left-A.left+w.left,right:A.right-g.right+w.right},T=e.modifiersData.offset;if(h===pe&&T){var H=T[r];Object.keys(S).forEach(function(D){var q=[W,M].indexOf(D)>=0?1:-1,X=[B,M].indexOf(D)>=0?"y":"x";S[D]+=H[X]*q})}return S}function ko(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,c=o.padding,s=o.flipVariations,a=o.allowedAutoPlacements,p=a===void 0?dt:a,l=ae(n),m=l?s?$e:$e.filter(function(b){return ae(b)===l}):ge,h=m.filter(function(b){return p.indexOf(b)>=0});h.length===0&&(h=m);var f=h.reduce(function(b,v){return b[v]=he(e,{placement:v,boundary:r,rootBoundary:i,padding:c})[_(v)],b},{});return Object.keys(f).sort(function(b,v){return f[b]-f[v]})}function So(e){if(_(e)===je)return[];var t=ke(e);return[ot(e),t,ot(t)]}function Ao(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=r===void 0?!0:r,c=o.altAxis,s=c===void 0?!0:c,a=o.fallbackPlacements,p=o.padding,l=o.boundary,m=o.rootBoundary,h=o.altBoundary,f=o.flipVariations,b=f===void 0?!0:f,v=o.allowedAutoPlacements,u=t.options.placement,w=_(u),C=w===u,P=a||(C||!b?[ke(u)]:So(u)),d=[u].concat(P).reduce(function($,F){return $.concat(_(F)===je?ko(t,{placement:F,boundary:l,rootBoundary:m,padding:p,flipVariations:b,allowedAutoPlacements:v}):F)},[]),g=t.rects.reference,y=t.rects.popper,O=new Map,E=!0,A=d[0],S=0;S<d.length;S++){var T=d[S],H=_(T),D=ae(T)===re,q=[B,M].indexOf(H)>=0,X=q?"width":"height",V=he(t,{placement:T,boundary:l,rootBoundary:m,altBoundary:h,padding:p}),N=q?D?W:L:D?M:B;g[X]>y[X]&&(N=ke(N));var we=ke(N),Y=[];if(i&&Y.push(V[H]<=0),s&&Y.push(V[N]<=0,V[we]<=0),Y.every(function($){return $})){A=T,E=!1;break}O.set(T,Y)}if(E)for(var be=b?3:1,Ee=function(F){var le=d.find(function(Oe){var J=O.get(Oe);if(J)return J.slice(0,F).every(function(Te){return Te})});if(le)return A=le,"break"},se=be;se>0;se--){var xe=Ee(se);if(xe==="break")break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}const Eo={name:"flip",enabled:!0,phase:"main",fn:Ao,requiresIfExists:["offset"],data:{_skip:!1}};function nt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function it(e){return[B,W,M,L].some(function(t){return e[t]>=0})}function To(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,c=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),a=nt(c,n),p=nt(s,r,i),l=it(a),m=it(p);t.modifiersData[o]={referenceClippingOffsets:a,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const Do={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:To};function Bo(e,t,o){var n=_(e),r=[L,B].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,c=i[0],s=i[1];return c=c||0,s=(s||0)*r,[L,W].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function Lo(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=r===void 0?[0,0]:r,c=dt.reduce(function(l,m){return l[m]=Bo(m,t.rects,i),l},{}),s=c[t.placement],a=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=c}const xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Lo};function Vo(e){var t=e.state,o=e.name;t.modifiersData[o]=bt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const jo={name:"popperOffsets",enabled:!0,phase:"read",fn:Vo,data:{}};function Ro(e){return e==="x"?"y":"x"}function Io(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=r===void 0?!0:r,c=o.altAxis,s=c===void 0?!1:c,a=o.boundary,p=o.rootBoundary,l=o.altBoundary,m=o.padding,h=o.tether,f=h===void 0?!0:h,b=o.tetherOffset,v=b===void 0?0:b,u=he(t,{boundary:a,rootBoundary:p,padding:m,altBoundary:l}),w=_(t.placement),C=ae(t.placement),P=!C,d=Me(w),g=Ro(d),y=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,A=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,S=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(y){if(i){var D,q=d==="y"?B:L,X=d==="y"?M:W,V=d==="y"?"height":"width",N=y[d],we=N+u[q],Y=N-u[X],be=f?-E[V]/2:0,Ee=C===re?O[V]:E[V],se=C===re?-E[V]:-O[V],xe=t.elements.arrow,$=f&&xe?Ie(xe):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),le=F[q],Oe=F[X],J=de(0,O[V],$[V]),Te=P?O[V]/2-be-J-le-S.mainAxis:Ee-J-le-S.mainAxis,Ot=P?-O[V]/2+be+J+Oe+S.mainAxis:se+J+Oe+S.mainAxis,De=t.elements.arrow&&ye(t.elements.arrow),Ct=De?d==="y"?De.clientTop||0:De.clientLeft||0:0,_e=(D=T==null?void 0:T[d])!=null?D:0,Pt=N+Te-_e-Ct,kt=N+Ot-_e,ze=de(f?Se(we,Pt):we,N,f?K(Y,kt):Y);y[d]=ze,H[d]=ze-N}if(s){var Ue,St=d==="x"?B:L,At=d==="x"?M:W,Q=y[g],Ce=g==="y"?"height":"width",Fe=Q+u[St],Ge=Q-u[At],Be=[B,L].indexOf(w)!==-1,qe=(Ue=T==null?void 0:T[g])!=null?Ue:0,Xe=Be?Fe:Q-O[Ce]-E[Ce]-qe+S.altAxis,Ye=Be?Q+O[Ce]+E[Ce]-qe-S.altAxis:Ge,Je=f&&Be?ao(Xe,Q,Ye):de(f?Xe:Fe,Q,f?Ye:Ge);y[g]=Je,H[g]=Je-Q}t.modifiersData[n]=H}}const Mo={name:"preventOverflow",enabled:!0,phase:"main",fn:Io,requiresIfExists:["offset"]};function Wo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ho(e){return e===j(e)||!I(e)?We(e):Wo(e)}function No(e){var t=e.getBoundingClientRect(),o=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return o!==1||n!==1}function _o(e,t,o){o===void 0&&(o=!1);var n=I(t),r=I(t)&&No(t),i=G(t),c=ie(e,r,o),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!o)&&((z(t)!=="body"||Ne(i))&&(s=Ho(t)),I(t)?(a=ie(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=He(i))),{x:c.left+s.scrollLeft-a.x,y:c.top+s.scrollTop-a.y,width:c.width,height:c.height}}function zo(e){var t=new Map,o=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function r(i){o.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(s){if(!o.has(s)){var a=t.get(s);a&&r(a)}}),n.push(i)}return e.forEach(function(i){o.has(i.name)||r(i)}),n}function Uo(e){var t=zo(e);return eo.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Fo(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Go(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var at={placement:"bottom",modifiers:[],strategy:"absolute"};function st(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function qo(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,i=r===void 0?at:r;return function(s,a,p){p===void 0&&(p=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},at,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],h=!1,f={state:l,setOptions:function(w){var C=typeof w=="function"?w(l.options):w;v(),l.options=Object.assign({},i,l.options,C),l.scrollParents={reference:Z(s)?ve(s):s.contextElement?ve(s.contextElement):[],popper:ve(a)};var P=Uo(Go([].concat(n,l.options.modifiers)));return l.orderedModifiers=P.filter(function(d){return d.enabled}),b(),f.update()},forceUpdate:function(){if(!h){var w=l.elements,C=w.reference,P=w.popper;if(st(C,P)){l.rects={reference:_o(C,ye(P),l.options.strategy==="fixed"),popper:Ie(P)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(S){return l.modifiersData[S.name]=Object.assign({},S.data)});for(var d=0;d<l.orderedModifiers.length;d++){if(l.reset===!0){l.reset=!1,d=-1;continue}var g=l.orderedModifiers[d],y=g.fn,O=g.options,E=O===void 0?{}:O,A=g.name;typeof y=="function"&&(l=y({state:l,options:E,name:A,instance:f})||l)}}}},update:Fo(function(){return new Promise(function(u){f.forceUpdate(),u(l)})}),destroy:function(){v(),h=!0}};if(!st(s,a))return f;f.setOptions(p).then(function(u){!h&&p.onFirstUpdate&&p.onFirstUpdate(u)});function b(){l.orderedModifiers.forEach(function(u){var w=u.name,C=u.options,P=C===void 0?{}:C,d=u.effect;if(typeof d=="function"){var g=d({state:l,name:w,instance:f,options:P}),y=function(){};m.push(g||y)}})}function v(){m.forEach(function(u){return u()}),m=[]}return f}}var Xo=[go,jo,mo,ro,xt,Eo,Mo,po,Do],Yo=qo({defaultModifiers:Xo});const Jo={watch:{value:"updateLocation",modelValue:"updateLocation",placement:"updateLocation",getContainer:"updateLocation"},mounted(){this.updateLocation()},beforeDestroy(){this.destroyPopper()},methods:{createPopper(){const{wrapper:e}=this.$refs,t=this.$refs.popover.$el,o=Yo(e,t,{placement:this.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{...xt,options:{offset:this.offset}}]});return window.addEventListener("animationend",this.updateLocation),window.addEventListener("transitionend",this.updateLocation),o},destroyPopper(){this.popper&&(window.removeEventListener("animationend",this.updateLocation),window.removeEventListener("transitionend",this.updateLocation),this.popper.destroy(),this.popper=null)},updateLocation(){if(!this.getContainer){this.destroyPopper();return}setTimeout(()=>{!this.value&&!this.modelValue||(this.popper?this.popper.setOptions({placement:this.placement}):this.popper=this.createPopper())},50)}}},Qo={name:"PressPopoverPlus",options:{styleIsolation:"shared"},components:{PressPopup:lt,PressIconPlus:Et},mixins:[Tt,Mt(!1),zt({event:"touchstart",method:"onClickOutside"}),Jo],props:{overlay:{type:Boolean,default:!1},trigger:{type:String,default:""},offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},getContainer:{type:[String,Function],default:""},closeOnClickAction:{type:Boolean,default:!0},zIndex:{type:Number,default:1},customStyle:{type:String,default:""},duration:{type:Number,default:200}},emits:["close","closed","input","open","opened","select","touchstart","update:modelValue"],data(){return{utils:Qe}},computed:{popoverStyle(){const{zIndex:e}=this;return`z-index: ${e}`},wrapperStyle(){const{customStyle:e}=this;return e},popupClass(){const{theme:e,placement:t,getContainer:o}=this;return Qe.bem2("popover",[e,t,{"custom-container":!!o}])},popupCustomClass(){return""}},mounted(){},methods:{setData(e){Object.keys(e).forEach(t=>{this[t]=e[t]})},onClickWrapper(){this.trigger==="click"&&this.emitModelValue(!this.realModelValue)},onTouchstart(e){e.stopPropagation(),this.$emit("touchstart",e)},onClickAction(e,t){e.disabled||(this.$emit("select",e,t),this.closeOnClickAction&&(this.$emit("input",!1),this.$emit("update:modelValue",!1)))},onClickOutside(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")}}},Ko=["onClick"];function Zo(e,t,o,n,r,i){const c=R("PressIconPlus"),s=R("PressPopup");return oe(),ue("div",{ref:"wrapper",class:ee([r.utils.bem2("popover__wrapper")]),style:Lt(i.wrapperStyle),onClick:t[0]||(t[0]=Ze((...a)=>i.onClickWrapper&&i.onClickWrapper(...a),["stop"]))},[x(s,{ref:"popover",show:e.realModelValue,class:ee([i.popupClass]),"wrap-class":i.popupCustomClass,overlay:o.overlay,position:"null",transition:"popover-zoom","lock-scroll":!1,duration:o.duration,"get-container":o.getContainer,"custom-style":i.popoverStyle,onBeforeLeave:i.onClose,onAfterLeave:i.onClosed,onBeforeEnter:i.onOpen,onAfterEnter:i.onOpened},{default:k(()=>[fe("div",{class:ee([r.utils.bem2("popover__arrow")])},null,2),fe("div",{class:ee([r.utils.bem2("popover__content")]),role:"menu"},[Ke(e.$slots,"default",{},()=>[(oe(!0),ue(pt,null,ut(o.actions,(a,p)=>(oe(),ue("div",{key:p,class:ee([r.utils.bem2("popover__action",{disabled:a.disabled,"with-icon":a.icon}),a.className]),onClick:Ze(l=>i.onClickAction(a,p),["stop"])},[a.icon?(oe(),Dt(c,{key:0,name:a.icon,"custom-class":"press-popover-action-icon"},null,8,["name"])):Bt("",!0),fe("div",{class:ee([r.utils.bem2("popover__action-text"),"press-hairline--bottom"])},te(a.text),3)],10,Ko))),128))],!0)],2)]),_:3},8,["show","class","wrap-class","overlay","duration","get-container","custom-style","onBeforeLeave","onAfterLeave","onBeforeEnter","onAfterEnter"]),Ke(e.$slots,"reference",{},void 0,!0)],6)}const $o=ct(Qo,[["render",Zo],["__scopeId","data-v-fd35d822"]]),er={i18n:{"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置",useGetContainer:"是否使用 getContainer"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement",useGetContainer:"Use GetContainer"}},components:{PressPopoverPlus:$o,PressButton:Vt,PressPickerPlus:Wt,PressPopupPlus:lt,PressCell:Ht,PressGridItem:Nt,PressGrid:_t,PressSwitch:jt},data(){return{show:{showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1},showPicker:!1,currentPlacement:"top",placements:["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;",useGetContainer:!1}},computed:{getContainer(){return this.useGetContainer?"body":""}},methods:{onPickerChange({value:e,index:t}){console.log("[onPickerChange]",e,t),setTimeout(()=>{this.show.placement=!0,this.currentPlacement=e})},onSelect(e){console.log("[onSelect]",e),this.onGTip(e.text)},onOpen(){console.log("onOpen")},onClose(){console.log("onClose")},onOpened(){console.log("onOpened")},onClosed(){console.log("onClosed")}}},tr=e=>(Rt("data-v-f6bd85ae"),e=e(),It(),e),or={class:"demo-wrap demo-wrap--gray"},rr={class:"demo-popover-box"},nr=tr(()=>fe("div",{class:"demo-popover-refer"},null,-1));function ir(e,t,o,n,r,i){const c=R("press-switch"),s=R("press-cell"),a=R("PressButton"),p=R("PressPopoverPlus"),l=R("demo-block"),m=R("PressCell"),h=R("PressPickerPlus"),f=R("PressPopupPlus"),b=R("press-grid-item"),v=R("press-grid");return oe(),ue("div",or,[x(s,{title:e.t("useGetContainer"),clickable:"",onClick:t[1]||(t[1]=()=>r.useGetContainer=!r.useGetContainer)},{"right-icon":k(()=>[x(c,{size:"22px",checked:r.useGetContainer,onChange:t[0]||(t[0]=()=>r.useGetContainer=!r.useGetContainer)},null,8,["checked"])]),_:1},8,["title"]),x(l,{title:e.t("basicUsage"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.lightTheme,"onUpdate:modelValue":t[3]||(t[3]=u=>r.show.lightTheme=u),trigger:"click",actions:e.t("actions"),placement:"bottom-start","custom-style":"margin-left: 16px;","get-container":i.getContainer,onSelect:i.onSelect,onOpen:i.onOpen,onOpened:i.onOpened,onClose:i.onClose,onClosed:i.onClosed},{reference:k(()=>[x(a,{type:"primary",onClick:t[2]||(t[2]=u=>r.show.lightTheme=!r.show.lightTheme)},{default:k(()=>[ce(te(e.t("lightTheme")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect","onOpen","onOpened","onClose","onClosed"]),x(p,{modelValue:r.show.darkTheme,"onUpdate:modelValue":t[5]||(t[5]=u=>r.show.darkTheme=u),trigger:"click",theme:"dark",actions:e.t("actions"),"get-container":i.getContainer,placement:"bottom","custom-style":"z-index: 1;margin-left: 16px;",onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[4]||(t[4]=u=>r.show.darkTheme=!r.show.darkTheme)},{default:k(()=>[ce(te(e.t("darkTheme")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("placement"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(m,{"is-link":"",title:e.t("choosePlacement"),onClick:t[6]||(t[6]=u=>{r.showPicker=!0})},null,8,["title"]),x(f,{show:r.showPicker,round:"",position:"bottom","get-container":"body","close-on-click-overlay":!0,onClose:t[8]||(t[8]=u=>r.showPicker=!1)},{default:k(()=>[fe("div",rr,[x(p,{modelValue:r.show.placement,"onUpdate:modelValue":t[7]||(t[7]=u=>r.show.placement=u),theme:"dark",trigger:"click","z-index":1e3,"get-container":i.getContainer,actions:e.t("shortActions"),placement:r.currentPlacement,onSelect:i.onSelect},{reference:k(()=>[nr]),_:1},8,["modelValue","get-container","actions","placement","onSelect"])]),x(h,{columns:r.placements,onChange:i.onPickerChange},null,8,["columns","onChange"])]),_:1},8,["show"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("actionOptions"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.showIcon,"onUpdate:modelValue":t[10]||(t[10]=u=>r.show.showIcon=u),trigger:"click",actions:e.t("actionsWithIcon"),"get-container":i.getContainer,placement:"bottom-start","custom-style":"z-index: 2;margin-left: 16px;","z-index":1e3,onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[9]||(t[9]=u=>r.show.showIcon=!r.show.showIcon)},{default:k(()=>[ce(te(e.t("showIcon")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect"]),x(p,{modelValue:r.show.disableAction,"onUpdate:modelValue":t[12]||(t[12]=u=>r.show.disableAction=u),trigger:"click","get-container":i.getContainer,actions:e.t("actionsDisabled"),"custom-style":"z-index: 2;margin-left: 16px;",onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[11]||(t[11]=u=>r.show.disableAction=!r.show.disableAction)},{default:k(()=>[ce(te(e.t("disableAction")),1)]),_:1})]),_:1},8,["modelValue","get-container","actions","onSelect"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("customContent"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.customContent,"onUpdate:modelValue":t[14]||(t[14]=u=>r.show.customContent=u),trigger:"click",placement:"bottom-start","get-container":i.getContainer,"custom-style":"z-index: 1;margin-left: 16px;",onSelect:i.onSelect},{default:k(()=>[x(v,{"column-num":3,"custom-style":"width: 240px;"},{default:k(()=>[(oe(),ue(pt,null,ut(6,(u,w)=>x(b,{key:w,icon:"photo-o",text:e.t("option")},null,8,["text"])),64))]),_:1})]),reference:k(()=>[x(a,{type:"primary",onClick:t[13]||(t[13]=u=>r.show.customContent=!r.show.customContent)},{default:k(()=>[ce(te(e.t("customContent")),1)]),_:1})]),_:1},8,["modelValue","get-container","onSelect"])]),_:1},8,["title","header-style","section-style"])])}const br=ct(er,[["render",ir],["__scopeId","data-v-f6bd85ae"]]);export{br as default};
