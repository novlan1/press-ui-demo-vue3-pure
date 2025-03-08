import{P as lt}from"./press-popup-plus-77ilEc8K.js";import{_ as ct,z as Et,ab as Tt,E as Ke,r as N,o as oe,c as ue,e as x,k,a as fe,n as ee,h as Qe,F as pt,q as ut,w as Ze,b as Dt,d as Bt,t as te,l as Lt,N as Vt,S as jt,G as ce}from"./index-DccXyPO9.js";import{t as Rt}from"./press-transition-JizE2nFH.js";import{P as Mt}from"./press-picker-plus-nhu-KiEe.js";import{P as It}from"./press-cell-X7kLsl_B.js";import{a as Wt,P as Ht}from"./press-grid-item-CglkbqeU.js";import"./press-overlay-Bf23QqgS.js";import"./system-Dmmn2gy0.js";import"./number-CU9l-NjU.js";import"./parent-map-12wGqNaT.js";import"./scroll-view-IqBhwvIL.js";import"./press-picker-toolbar-D-I1jtxk.js";import"./link-CZOkAvc-.js";import"./event-B_wIAy-T.js";import"./relation-Ce8eT7mn.js";const Nt=e=>({props:{closeOnClickOutside:{type:Boolean,default:!0}},data(){return{clickOutsideHandler:o=>{this.closeOnClickOutside&&!this.$el.contains(o.target)&&this[e.method]()}}},mounted(){document.addEventListener(e.event,this.clickOutsideHandler)},beforeDestroy(){document.removeEventListener(e.event,this.clickOutsideHandler)}});var B="top",M="bottom",I="right",L="left",je="auto",ge=[B,M,I,L],re="start",me="end",zt="clippingParents",ft="viewport",pe="popper",Gt="reference",$e=ge.reduce(function(e,t){return e.concat([t+"-"+re,t+"-"+me])},[]),dt=[].concat(ge,[je]).reduce(function(e,t){return e.concat([t,t+"-"+re,t+"-"+me])},[]),Ut="beforeRead",Ft="read",qt="afterRead",Xt="beforeMain",_t="main",Yt="afterMain",Jt="beforeWrite",Kt="write",Qt="afterWrite",Zt=[Ut,Ft,qt,Xt,_t,Yt,Jt,Kt,Qt];function G(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Re(e){if(typeof ShadowRoot>"u")return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function $t(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},i=t.elements[o];!R(i)||!G(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(c){var s=r[c];s===!1?i.removeAttribute(c):i.setAttribute(c,s===!0?"":s)}))})}function eo(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],i=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),s=c.reduce(function(a,p){return a[p]="",a},{});!R(r)||!G(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(a){r.removeAttribute(a)}))})}}const to={name:"applyStyles",enabled:!0,phase:"write",fn:$t,effect:eo,requires:["computeStyles"]};function z(e){return e.split("-")[0]}var Q=Math.max,Se=Math.min,ne=Math.round;function Le(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function vt(){return!/^((?!chrome|android).)*safari/i.test(Le())}function ie(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&R(e)&&(r=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var c=Z(e)?j(e):window,s=c.visualViewport,a=!vt()&&o,p=(n.left+(a&&s?s.offsetLeft:0))/r,l=(n.top+(a&&s?s.offsetTop:0))/i,m=n.width/r,h=n.height/i;return{width:m,height:h,top:l,right:p+m,bottom:l+h,left:p,x:p,y:l}}function Me(e){var t=ie(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function mt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Re(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function U(e){return j(e).getComputedStyle(e)}function oo(e){return["table","td","th"].indexOf(G(e))>=0}function q(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(Re(e)?e.host:null)||q(e)}function et(e){return!R(e)||U(e).position==="fixed"?null:e.offsetParent}function ro(e){var t=/firefox/i.test(Le()),o=/Trident/i.test(Le());if(o&&R(e)){var n=U(e);if(n.position==="fixed")return null}var r=Ae(e);for(Re(r)&&(r=r.host);R(r)&&["html","body"].indexOf(G(r))<0;){var i=U(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function ye(e){for(var t=j(e),o=et(e);o&&oo(o)&&U(o).position==="static";)o=et(o);return o&&(G(o)==="html"||G(o)==="body"&&U(o).position==="static")?t:o||ro(e)||t}function Ie(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function de(e,t,o){return Q(e,Se(t,o))}function no(e,t,o){var n=de(e,t,o);return n>o?o:n}function ht(){return{top:0,right:0,bottom:0,left:0}}function gt(e){return Object.assign({},ht(),e)}function yt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var io=function(t,o){return t=typeof t=="function"?t(Object.assign({},o.rects,{placement:o.placement})):t,gt(typeof t!="number"?t:yt(t,ge))};function ao(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,c=o.modifiersData.popperOffsets,s=z(o.placement),a=Ie(s),p=[L,I].indexOf(s)>=0,l=p?"height":"width";if(!(!i||!c)){var m=io(r.padding,o),h=Me(i),f=a==="y"?B:L,w=a==="y"?M:I,u=o.rects.reference[l]+o.rects.reference[a]-c[a]-o.rects.popper[l],v=c[a]-o.rects.reference[a],b=ye(i),P=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,C=u/2-v/2,d=m[f],g=P-h[l]-m[w],y=P/2-h[l]/2+C,O=de(d,y,g),E=a;o.modifiersData[n]=(t={},t[E]=O,t.centerOffset=O-y,t)}}function so(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||mt(t.elements.popper,r)&&(t.elements.arrow=r))}const lo={name:"arrow",enabled:!0,phase:"main",fn:ao,effect:so,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var co={top:"auto",right:"auto",bottom:"auto",left:"auto"};function po(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:ne(o*r)/r||0,y:ne(n*r)/r||0}}function tt(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,c=e.offsets,s=e.position,a=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,m=e.isFixed,h=c.x,f=h===void 0?0:h,w=c.y,u=w===void 0?0:w,v=typeof l=="function"?l({x:f,y:u}):{x:f,y:u};f=v.x,u=v.y;var b=c.hasOwnProperty("x"),P=c.hasOwnProperty("y"),C=L,d=B,g=window;if(p){var y=ye(o),O="clientHeight",E="clientWidth";if(y===j(o)&&(y=q(o),U(y).position!=="static"&&s==="absolute"&&(O="scrollHeight",E="scrollWidth")),y=y,r===B||(r===L||r===I)&&i===me){d=M;var A=m&&y===g&&g.visualViewport?g.visualViewport.height:y[O];u-=A-n.height,u*=a?1:-1}if(r===L||(r===B||r===M)&&i===me){C=I;var S=m&&y===g&&g.visualViewport?g.visualViewport.width:y[E];f-=S-n.width,f*=a?1:-1}}var T=Object.assign({position:s},p&&co),W=l===!0?po({x:f,y:u},j(o)):{x:f,y:u};if(f=W.x,u=W.y,a){var D;return Object.assign({},T,(D={},D[d]=P?"0":"",D[C]=b?"0":"",D.transform=(g.devicePixelRatio||1)<=1?"translate("+f+"px, "+u+"px)":"translate3d("+f+"px, "+u+"px, 0)",D))}return Object.assign({},T,(t={},t[d]=P?u+"px":"",t[C]=b?f+"px":"",t.transform="",t))}function uo(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,c=i===void 0?!0:i,s=o.roundOffsets,a=s===void 0?!0:s,p={placement:z(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,tt(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,tt(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const fo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:uo,data:{}};var Ce={passive:!0};function vo(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=r===void 0?!0:r,c=n.resize,s=c===void 0?!0:c,a=j(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(l){l.addEventListener("scroll",o.update,Ce)}),s&&a.addEventListener("resize",o.update,Ce),function(){i&&p.forEach(function(l){l.removeEventListener("scroll",o.update,Ce)}),s&&a.removeEventListener("resize",o.update,Ce)}}const mo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vo,data:{}};var ho={left:"right",right:"left",bottom:"top",top:"bottom"};function ke(e){return e.replace(/left|right|bottom|top/g,function(t){return ho[t]})}var go={start:"end",end:"start"};function ot(e){return e.replace(/start|end/g,function(t){return go[t]})}function We(e){var t=j(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function He(e){return ie(q(e)).left+We(e).scrollLeft}function yo(e,t){var o=j(e),n=q(e),r=o.visualViewport,i=n.clientWidth,c=n.clientHeight,s=0,a=0;if(r){i=r.width,c=r.height;var p=vt();(p||!p&&t==="fixed")&&(s=r.offsetLeft,a=r.offsetTop)}return{width:i,height:c,x:s+He(e),y:a}}function wo(e){var t,o=q(e),n=We(e),r=(t=e.ownerDocument)==null?void 0:t.body,i=Q(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=Q(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+He(e),a=-n.scrollTop;return U(r||o).direction==="rtl"&&(s+=Q(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:c,x:s,y:a}}function Ne(e){var t=U(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function wt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:R(e)&&Ne(e)?e:wt(Ae(e))}function ve(e,t){var o;t===void 0&&(t=[]);var n=wt(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),i=j(n),c=r?[i].concat(i.visualViewport||[],Ne(n)?n:[]):n,s=t.concat(c);return r?s:s.concat(ve(Ae(c)))}function Ve(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function bo(e,t){var o=ie(e,!1,t==="fixed");return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}function rt(e,t,o){return t===ft?Ve(yo(e,o)):Z(t)?bo(t,o):Ve(wo(q(e)))}function xo(e){var t=ve(Ae(e)),o=["absolute","fixed"].indexOf(U(e).position)>=0,n=o&&R(e)?ye(e):e;return Z(n)?t.filter(function(r){return Z(r)&&mt(r,n)&&G(r)!=="body"}):[]}function Oo(e,t,o,n){var r=t==="clippingParents"?xo(e):[].concat(t),i=[].concat(r,[o]),c=i[0],s=i.reduce(function(a,p){var l=rt(e,p,n);return a.top=Q(l.top,a.top),a.right=Se(l.right,a.right),a.bottom=Se(l.bottom,a.bottom),a.left=Q(l.left,a.left),a},rt(e,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function bt(e){var t=e.reference,o=e.element,n=e.placement,r=n?z(n):null,i=n?ae(n):null,c=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,a;switch(r){case B:a={x:c,y:t.y-o.height};break;case M:a={x:c,y:t.y+t.height};break;case I:a={x:t.x+t.width,y:s};break;case L:a={x:t.x-o.width,y:s};break;default:a={x:t.x,y:t.y}}var p=r?Ie(r):null;if(p!=null){var l=p==="y"?"height":"width";switch(i){case re:a[p]=a[p]-(t[l]/2-o[l]/2);break;case me:a[p]=a[p]+(t[l]/2-o[l]/2);break}}return a}function he(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,i=o.strategy,c=i===void 0?e.strategy:i,s=o.boundary,a=s===void 0?zt:s,p=o.rootBoundary,l=p===void 0?ft:p,m=o.elementContext,h=m===void 0?pe:m,f=o.altBoundary,w=f===void 0?!1:f,u=o.padding,v=u===void 0?0:u,b=gt(typeof v!="number"?v:yt(v,ge)),P=h===pe?Gt:pe,C=e.rects.popper,d=e.elements[w?P:h],g=Oo(Z(d)?d:d.contextElement||q(e.elements.popper),a,l,c),y=ie(e.elements.reference),O=bt({reference:y,element:C,strategy:"absolute",placement:r}),E=Ve(Object.assign({},C,O)),A=h===pe?E:y,S={top:g.top-A.top+b.top,bottom:A.bottom-g.bottom+b.bottom,left:g.left-A.left+b.left,right:A.right-g.right+b.right},T=e.modifiersData.offset;if(h===pe&&T){var W=T[r];Object.keys(S).forEach(function(D){var X=[I,M].indexOf(D)>=0?1:-1,_=[B,M].indexOf(D)>=0?"y":"x";S[D]+=W[_]*X})}return S}function Po(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,c=o.padding,s=o.flipVariations,a=o.allowedAutoPlacements,p=a===void 0?dt:a,l=ae(n),m=l?s?$e:$e.filter(function(w){return ae(w)===l}):ge,h=m.filter(function(w){return p.indexOf(w)>=0});h.length===0&&(h=m);var f=h.reduce(function(w,u){return w[u]=he(e,{placement:u,boundary:r,rootBoundary:i,padding:c})[z(u)],w},{});return Object.keys(f).sort(function(w,u){return f[w]-f[u]})}function Co(e){if(z(e)===je)return[];var t=ke(e);return[ot(e),t,ot(t)]}function ko(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=r===void 0?!0:r,c=o.altAxis,s=c===void 0?!0:c,a=o.fallbackPlacements,p=o.padding,l=o.boundary,m=o.rootBoundary,h=o.altBoundary,f=o.flipVariations,w=f===void 0?!0:f,u=o.allowedAutoPlacements,v=t.options.placement,b=z(v),P=b===v,C=a||(P||!w?[ke(v)]:Co(v)),d=[v].concat(C).reduce(function($,F){return $.concat(z(F)===je?Po(t,{placement:F,boundary:l,rootBoundary:m,padding:p,flipVariations:w,allowedAutoPlacements:u}):F)},[]),g=t.rects.reference,y=t.rects.popper,O=new Map,E=!0,A=d[0],S=0;S<d.length;S++){var T=d[S],W=z(T),D=ae(T)===re,X=[B,M].indexOf(W)>=0,_=X?"width":"height",V=he(t,{placement:T,boundary:l,rootBoundary:m,altBoundary:h,padding:p}),H=X?D?I:L:D?M:B;g[_]>y[_]&&(H=ke(H));var we=ke(H),Y=[];if(i&&Y.push(V[W]<=0),s&&Y.push(V[H]<=0,V[we]<=0),Y.every(function($){return $})){A=T,E=!1;break}O.set(T,Y)}if(E)for(var be=w?3:1,Ee=function(F){var le=d.find(function(Oe){var J=O.get(Oe);if(J)return J.slice(0,F).every(function(Te){return Te})});if(le)return A=le,"break"},se=be;se>0;se--){var xe=Ee(se);if(xe==="break")break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}const So={name:"flip",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"],data:{_skip:!1}};function nt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function it(e){return[B,I,M,L].some(function(t){return e[t]>=0})}function Ao(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,c=he(t,{elementContext:"reference"}),s=he(t,{altBoundary:!0}),a=nt(c,n),p=nt(s,r,i),l=it(a),m=it(p);t.modifiersData[o]={referenceClippingOffsets:a,popperEscapeOffsets:p,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const Eo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ao};function To(e,t,o){var n=z(e),r=[L,B].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,c=i[0],s=i[1];return c=c||0,s=(s||0)*r,[L,I].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function Do(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=r===void 0?[0,0]:r,c=dt.reduce(function(l,m){return l[m]=To(m,t.rects,i),l},{}),s=c[t.placement],a=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=c}const xt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Do};function Bo(e){var t=e.state,o=e.name;t.modifiersData[o]=bt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Lo={name:"popperOffsets",enabled:!0,phase:"read",fn:Bo,data:{}};function Vo(e){return e==="x"?"y":"x"}function jo(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=r===void 0?!0:r,c=o.altAxis,s=c===void 0?!1:c,a=o.boundary,p=o.rootBoundary,l=o.altBoundary,m=o.padding,h=o.tether,f=h===void 0?!0:h,w=o.tetherOffset,u=w===void 0?0:w,v=he(t,{boundary:a,rootBoundary:p,padding:m,altBoundary:l}),b=z(t.placement),P=ae(t.placement),C=!P,d=Ie(b),g=Vo(d),y=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,A=typeof u=="function"?u(Object.assign({},t.rects,{placement:t.placement})):u,S=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(y){if(i){var D,X=d==="y"?B:L,_=d==="y"?M:I,V=d==="y"?"height":"width",H=y[d],we=H+v[X],Y=H-v[_],be=f?-E[V]/2:0,Ee=P===re?O[V]:E[V],se=P===re?-E[V]:-O[V],xe=t.elements.arrow,$=f&&xe?Me(xe):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),le=F[X],Oe=F[_],J=de(0,O[V],$[V]),Te=C?O[V]/2-be-J-le-S.mainAxis:Ee-J-le-S.mainAxis,Ot=C?-O[V]/2+be+J+Oe+S.mainAxis:se+J+Oe+S.mainAxis,De=t.elements.arrow&&ye(t.elements.arrow),Pt=De?d==="y"?De.clientTop||0:De.clientLeft||0:0,ze=(D=T==null?void 0:T[d])!=null?D:0,Ct=H+Te-ze-Pt,kt=H+Ot-ze,Ge=de(f?Se(we,Ct):we,H,f?Q(Y,kt):Y);y[d]=Ge,W[d]=Ge-H}if(s){var Ue,St=d==="x"?B:L,At=d==="x"?M:I,K=y[g],Pe=g==="y"?"height":"width",Fe=K+v[St],qe=K-v[At],Be=[B,L].indexOf(b)!==-1,Xe=(Ue=T==null?void 0:T[g])!=null?Ue:0,_e=Be?Fe:K-O[Pe]-E[Pe]-Xe+S.altAxis,Ye=Be?K+O[Pe]+E[Pe]-Xe-S.altAxis:qe,Je=f&&Be?no(_e,K,Ye):de(f?_e:Fe,K,f?Ye:qe);y[g]=Je,W[g]=Je-K}t.modifiersData[n]=W}}const Ro={name:"preventOverflow",enabled:!0,phase:"main",fn:jo,requiresIfExists:["offset"]};function Mo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Io(e){return e===j(e)||!R(e)?We(e):Mo(e)}function Wo(e){var t=e.getBoundingClientRect(),o=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return o!==1||n!==1}function Ho(e,t,o){o===void 0&&(o=!1);var n=R(t),r=R(t)&&Wo(t),i=q(t),c=ie(e,r,o),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!o)&&((G(t)!=="body"||Ne(i))&&(s=Io(t)),R(t)?(a=ie(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=He(i))),{x:c.left+s.scrollLeft-a.x,y:c.top+s.scrollTop-a.y,width:c.width,height:c.height}}function No(e){var t=new Map,o=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function r(i){o.add(i.name);var c=[].concat(i.requires||[],i.requiresIfExists||[]);c.forEach(function(s){if(!o.has(s)){var a=t.get(s);a&&r(a)}}),n.push(i)}return e.forEach(function(i){o.has(i.name)||r(i)}),n}function zo(e){var t=No(e);return Zt.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function Go(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Uo(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var at={placement:"bottom",modifiers:[],strategy:"absolute"};function st(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Fo(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,i=r===void 0?at:r;return function(s,a,p){p===void 0&&(p=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},at,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],h=!1,f={state:l,setOptions:function(b){var P=typeof b=="function"?b(l.options):b;u(),l.options=Object.assign({},i,l.options,P),l.scrollParents={reference:Z(s)?ve(s):s.contextElement?ve(s.contextElement):[],popper:ve(a)};var C=zo(Uo([].concat(n,l.options.modifiers)));return l.orderedModifiers=C.filter(function(d){return d.enabled}),w(),f.update()},forceUpdate:function(){if(!h){var b=l.elements,P=b.reference,C=b.popper;if(st(P,C)){l.rects={reference:Ho(P,ye(C),l.options.strategy==="fixed"),popper:Me(C)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(S){return l.modifiersData[S.name]=Object.assign({},S.data)});for(var d=0;d<l.orderedModifiers.length;d++){if(l.reset===!0){l.reset=!1,d=-1;continue}var g=l.orderedModifiers[d],y=g.fn,O=g.options,E=O===void 0?{}:O,A=g.name;typeof y=="function"&&(l=y({state:l,options:E,name:A,instance:f})||l)}}}},update:Go(function(){return new Promise(function(v){f.forceUpdate(),v(l)})}),destroy:function(){u(),h=!0}};if(!st(s,a))return f;f.setOptions(p).then(function(v){!h&&p.onFirstUpdate&&p.onFirstUpdate(v)});function w(){l.orderedModifiers.forEach(function(v){var b=v.name,P=v.options,C=P===void 0?{}:P,d=v.effect;if(typeof d=="function"){var g=d({state:l,name:b,instance:f,options:C}),y=function(){};m.push(g||y)}})}function u(){m.forEach(function(v){return v()}),m=[]}return f}}var qo=[mo,Lo,fo,to,xt,So,Ro,lo,Eo],Xo=Fo({defaultModifiers:qo});const _o={watch:{value:"updateLocation",modelValue:"updateLocation",placement:"updateLocation",getContainer:"updateLocation"},mounted(){this.updateLocation()},beforeDestroy(){this.destroyPopper()},methods:{createPopper(){const{wrapper:e}=this.$refs,t=this.$refs.popover.$el,o=Xo(e,t,{placement:this.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{...xt,options:{offset:this.offset}}]});return window.addEventListener("animationend",this.updateLocation),window.addEventListener("transitionend",this.updateLocation),o},destroyPopper(){this.popper&&(window.removeEventListener("animationend",this.updateLocation),window.removeEventListener("transitionend",this.updateLocation),this.popper.destroy(),this.popper=null)},updateLocation(){if(!this.getContainer){this.destroyPopper();return}setTimeout(()=>{!this.value&&!this.modelValue||(this.popper?this.popper.setOptions({placement:this.placement}):this.popper=this.createPopper())},50)}}},Yo={name:"PressPopoverPlus",options:{styleIsolation:"shared"},components:{PressPopup:lt,PressIconPlus:Et},mixins:[Tt,Rt(!1),Nt({event:"touchstart",method:"onClickOutside"}),_o],props:{overlay:{type:Boolean,default:!1},trigger:{type:String,default:""},offset:{type:Array,default:()=>[0,8]},theme:{type:String,default:"light"},actions:{type:Array,default:()=>[]},placement:{type:String,default:"bottom"},getContainer:{type:[String,Function],default:""},closeOnClickAction:{type:Boolean,default:!0},zIndex:{type:Number,default:1},customStyle:{type:String,default:""},duration:{type:Number,default:200}},emits:["close","closed","input","open","opened","select","touchstart","update:modelValue"],data(){return{utils:Ke}},computed:{popoverStyle(){const{zIndex:e}=this;return`z-index: ${e}`},wrapperStyle(){const{customStyle:e}=this;return e},popupClass(){const{theme:e,placement:t,getContainer:o}=this;return Ke.bem2("popover",[e,t,{"custom-container":!!o}])},popupCustomClass(){return""}},mounted(){},methods:{setData(e){Object.keys(e).forEach(t=>{this[t]=e[t]})},onClickWrapper(){this.trigger==="click"&&this.emitModelValue(!this.realModelValue)},onTouchstart(e){e.stopPropagation(),this.$emit("touchstart",e)},onClickAction(e,t){e.disabled||(this.$emit("select",e,t),this.closeOnClickAction&&(this.$emit("input",!1),this.$emit("update:modelValue",!1)))},onClickOutside(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},onOpen(){this.$emit("open")},onOpened(){this.$emit("opened")},onClose(){this.$emit("close")},onClosed(){this.$emit("closed")}}},Jo=["onClick"];function Ko(e,t,o,n,r,i){const c=N("PressIconPlus"),s=N("PressPopup");return oe(),ue("div",{ref:"wrapper",class:ee([r.utils.bem2("popover__wrapper")]),style:Lt(i.wrapperStyle),onClick:t[0]||(t[0]=Ze((...a)=>i.onClickWrapper&&i.onClickWrapper(...a),["stop"]))},[x(s,{ref:"popover",show:e.realModelValue,class:ee([i.popupClass]),"wrap-class":i.popupCustomClass,overlay:o.overlay,position:"null",transition:"popover-zoom","lock-scroll":!1,duration:o.duration,"get-container":o.getContainer,"custom-style":i.popoverStyle,onBeforeLeave:i.onClose,onAfterLeave:i.onClosed,onBeforeEnter:i.onOpen,onAfterEnter:i.onOpened},{default:k(()=>[fe("div",{class:ee([r.utils.bem2("popover__arrow")])},null,2),fe("div",{class:ee([r.utils.bem2("popover__content")]),role:"menu"},[Qe(e.$slots,"default",{},()=>[(oe(!0),ue(pt,null,ut(o.actions,(a,p)=>(oe(),ue("div",{key:p,class:ee([r.utils.bem2("popover__action",{disabled:a.disabled,"with-icon":a.icon}),a.className]),onClick:Ze(l=>i.onClickAction(a,p),["stop"])},[a.icon?(oe(),Dt(c,{key:0,name:a.icon,"custom-class":"press-popover-action-icon"},null,8,["name"])):Bt("",!0),fe("div",{class:ee([r.utils.bem2("popover__action-text"),"press-hairline--bottom"])},te(a.text),3)],10,Jo))),128))],!0)],2)]),_:3},8,["show","class","wrap-class","overlay","duration","get-container","custom-style","onBeforeLeave","onAfterLeave","onBeforeEnter","onAfterEnter"]),Qe(e.$slots,"reference",{},void 0,!0)],6)}const Qo=ct(Yo,[["render",Ko],["__scopeId","data-v-738f0a40"]]),Zo={i18n:{"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置",useGetContainer:"是否使用 getContainer"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement",useGetContainer:"Use GetContainer"}},components:{PressPopoverPlus:Qo,PressButton:Vt,PressPickerPlus:Mt,PressPopupPlus:lt,PressCell:It,PressGridItem:Wt,PressGrid:Ht,PressSwitch:jt},data(){return{show:{showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1},showPicker:!1,currentPlacement:"top",placements:["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],headerStyle:"background: #f7f8fa;",sectionStyle:"background: #f7f8fa;margin: 0 0 6px;padding: 0;",useGetContainer:!1}},computed:{getContainer(){return this.useGetContainer?"body":""}},methods:{onPickerChange({value:e,index:t}){console.log("[onPickerChange]",e,t),setTimeout(()=>{this.show.placement=!0,this.currentPlacement=e})},onSelect(e){console.log("[onSelect]",e),this.onGTip(e.text)},onOpen(){console.log("onOpen")},onClose(){console.log("onClose")},onOpened(){console.log("onOpened")},onClosed(){console.log("onClosed")}}},$o={class:"demo-wrap demo-wrap--gray"},er={class:"demo-popover-box"};function tr(e,t,o,n,r,i){const c=N("PressSwitch"),s=N("PressCell"),a=N("PressButton"),p=N("PressPopoverPlus"),l=N("demo-block"),m=N("PressPickerPlus"),h=N("PressPopupPlus"),f=N("PressGridItem"),w=N("PressGrid");return oe(),ue("div",$o,[x(s,{title:e.t("useGetContainer"),clickable:"",onClick:t[1]||(t[1]=()=>r.useGetContainer=!r.useGetContainer)},{"right-icon":k(()=>[x(c,{size:"22px",checked:r.useGetContainer,onChange:t[0]||(t[0]=()=>r.useGetContainer=!r.useGetContainer)},null,8,["checked"])]),_:1},8,["title"]),x(l,{title:e.t("basicUsage"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.lightTheme,"onUpdate:modelValue":t[3]||(t[3]=u=>r.show.lightTheme=u),trigger:"click",actions:e.t("actions"),placement:"bottom-start","custom-style":"margin-left: 16px;","get-container":i.getContainer,onSelect:i.onSelect,onOpen:i.onOpen,onOpened:i.onOpened,onClose:i.onClose,onClosed:i.onClosed},{reference:k(()=>[x(a,{type:"primary",onClick:t[2]||(t[2]=u=>r.show.lightTheme=!r.show.lightTheme)},{default:k(()=>[ce(te(e.t("lightTheme")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect","onOpen","onOpened","onClose","onClosed"]),x(p,{modelValue:r.show.darkTheme,"onUpdate:modelValue":t[5]||(t[5]=u=>r.show.darkTheme=u),trigger:"click",theme:"dark",actions:e.t("actions"),"get-container":i.getContainer,placement:"bottom","custom-style":"z-index: 1;margin-left: 16px;",onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[4]||(t[4]=u=>r.show.darkTheme=!r.show.darkTheme)},{default:k(()=>[ce(te(e.t("darkTheme")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("placement"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(s,{"is-link":"",title:e.t("choosePlacement"),onClick:t[6]||(t[6]=u=>{r.showPicker=!0})},null,8,["title"]),x(h,{show:r.showPicker,round:"",position:"bottom","get-container":"body","close-on-click-overlay":!0,onClose:t[8]||(t[8]=u=>r.showPicker=!1)},{default:k(()=>[fe("div",er,[x(p,{modelValue:r.show.placement,"onUpdate:modelValue":t[7]||(t[7]=u=>r.show.placement=u),theme:"dark",trigger:"click","z-index":1e3,"get-container":i.getContainer,actions:e.t("shortActions"),placement:r.currentPlacement,onSelect:i.onSelect},{reference:k(()=>t[15]||(t[15]=[fe("div",{class:"demo-popover-refer"},null,-1)])),_:1},8,["modelValue","get-container","actions","placement","onSelect"])]),x(m,{columns:r.placements,onChange:i.onPickerChange},null,8,["columns","onChange"])]),_:1},8,["show"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("actionOptions"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.showIcon,"onUpdate:modelValue":t[10]||(t[10]=u=>r.show.showIcon=u),trigger:"click",actions:e.t("actionsWithIcon"),"get-container":i.getContainer,placement:"bottom-start","custom-style":"z-index: 2;margin-left: 16px;","z-index":1e3,onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[9]||(t[9]=u=>r.show.showIcon=!r.show.showIcon)},{default:k(()=>[ce(te(e.t("showIcon")),1)]),_:1})]),_:1},8,["modelValue","actions","get-container","onSelect"]),x(p,{modelValue:r.show.disableAction,"onUpdate:modelValue":t[12]||(t[12]=u=>r.show.disableAction=u),trigger:"click","get-container":i.getContainer,actions:e.t("actionsDisabled"),"custom-style":"z-index: 2;margin-left: 16px;",onSelect:i.onSelect},{reference:k(()=>[x(a,{type:"primary",onClick:t[11]||(t[11]=u=>r.show.disableAction=!r.show.disableAction)},{default:k(()=>[ce(te(e.t("disableAction")),1)]),_:1})]),_:1},8,["modelValue","get-container","actions","onSelect"])]),_:1},8,["title","header-style","section-style"]),x(l,{title:e.t("customContent"),"header-style":r.headerStyle,"section-style":r.sectionStyle},{default:k(()=>[x(p,{modelValue:r.show.customContent,"onUpdate:modelValue":t[14]||(t[14]=u=>r.show.customContent=u),trigger:"click",placement:"bottom-start","get-container":i.getContainer,"custom-style":"z-index: 1;margin-left: 16px;",onSelect:i.onSelect},{default:k(()=>[x(w,{"column-num":3,"custom-style":"width: 240px;"},{default:k(()=>[(oe(),ue(pt,null,ut(6,(u,v)=>x(f,{key:v,icon:"photo-o",text:e.t("option")},null,8,["text"])),64))]),_:1})]),reference:k(()=>[x(a,{type:"primary",onClick:t[13]||(t[13]=u=>r.show.customContent=!r.show.customContent)},{default:k(()=>[ce(te(e.t("customContent")),1)]),_:1})]),_:1},8,["modelValue","get-container","onSelect"])]),_:1},8,["title","header-style","section-style"])])}const gr=ct(Zo,[["render",tr],["__scopeId","data-v-23f7d596"]]);export{gr as default};
