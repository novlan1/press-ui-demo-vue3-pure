import{K as O,O as S,L as T,aE as W,M as J,_ as Z,r as $,o as z,c as L,b as H,a0 as x,d as b,F as j,m as ee}from"./index-BDdv8HSf.js";/*!
 * qrcode.vue v3.4.1
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var y=function(){return y=Object.assign||function(h){for(var l,u=1,c=arguments.length;u<c;u++){l=arguments[u];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(h[d]=l[d])}return h},y.apply(this,arguments)};var I;(function(s){var h=function(){function n(e,t,r,a){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var o=[],i=0;i<this.size;i++)o.push(!1);for(var i=0;i<this.size;i++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var f=this.addEccAndInterleave(r);if(this.drawCodewords(f),a==-1)for(var v=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var C=this.getPenaltyScore();C<v&&(a=i,v=C),this.applyMask(i)}c(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return n.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,a,o,i){if(r===void 0&&(r=1),a===void 0&&(a=40),o===void 0&&(o=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=a&&a<=n.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");var f,v;for(f=r;;f++){var C=n.getNumDataCodewords(f,t)*8,E=d.getTotalBits(e,f);if(E<=C){v=E;break}if(f>=a)throw new RangeError("Data too long")}for(var m=0,p=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];m<p.length;m++){var w=p[m];i&&v<=n.getNumDataCodewords(f,w)*8&&(t=w)}for(var g=[],M=0,P=e;M<P.length;M++){var R=P[M];l(R.mode.modeBits,4,g),l(R.numChars,R.mode.numCharCountBits(f),g);for(var N=0,_=R.getData();N<_.length;N++){var V=_[N];g.push(V)}}c(g.length==v);var B=n.getNumDataCodewords(f,t)*8;c(g.length<=B),l(0,Math.min(4,B-g.length),g),l(0,(8-g.length%8)%8,g),c(g.length%8==0);for(var k=236;g.length<B;k^=253)l(k,8,g);for(var Q=[];Q.length*8<g.length;)Q.push(0);return g.forEach(function(X,U){return Q[U>>>3]|=X<<7-(U&7)}),new n(f,t,Q,o)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var a=0;a<r;a++)e==0&&a==0||e==0&&a==r-1||e==r-1&&a==0||this.drawAlignmentPattern(t[e],t[a]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,a=0;a<10;a++)r=r<<1^(r>>>9)*1335;var o=(t<<10|r)^21522;c(o>>>15==0);for(var a=0;a<=5;a++)this.setFunctionModule(8,a,u(o,a));this.setFunctionModule(8,7,u(o,6)),this.setFunctionModule(8,8,u(o,7)),this.setFunctionModule(7,8,u(o,8));for(var a=9;a<15;a++)this.setFunctionModule(14-a,8,u(o,a));for(var a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,u(o,a));for(var a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,u(o,a));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;c(r>>>18==0);for(var t=0;t<18;t++){var a=u(r,t),o=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(o,i,a),this.setFunctionModule(i,o,a)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var a=-4;a<=4;a++){var o=Math.max(Math.abs(a),Math.abs(r)),i=e+a,f=t+r;0<=i&&i<this.size&&0<=f&&f<this.size&&this.setFunctionModule(i,f,o!=2&&o!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var a=-2;a<=2;a++)this.setFunctionModule(e+a,t+r,Math.max(Math.abs(a),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var a=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),f=a-i%a,v=Math.floor(i/a),C=[],E=n.reedSolomonComputeDivisor(o),m=0,p=0;m<a;m++){var w=e.slice(p,p+v-o+(m<f?0:1));p+=w.length;var g=n.reedSolomonComputeRemainder(w,E);m<f&&w.push(0),C.push(w.concat(g))}for(var M=[],P=function(R){C.forEach(function(N,_){(R!=v-o||_>=f)&&M.push(N[R])})},m=0;m<C[0].length;m++)P(m);return c(M.length==i),M},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var a=0;a<this.size;a++)for(var o=0;o<2;o++){var i=r-o,f=(r+1&2)==0,v=f?this.size-1-a:a;!this.isFunction[v][i]&&t<e.length*8&&(this.modules[v][i]=u(e[t>>>3],7-(t&7)),t++)}}c(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var a=void 0;switch(e){case 0:a=(r+t)%2==0;break;case 1:a=t%2==0;break;case 2:a=r%3==0;break;case 3:a=(r+t)%3==0;break;case 4:a=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:a=r*t%2+r*t%3==0;break;case 6:a=(r*t%2+r*t%3)%2==0;break;case 7:a=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&a&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,a=0,o=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(a++,a==5?e+=n.PENALTY_N1:a>5&&e++):(this.finderPenaltyAddHistory(a,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],a=1);e+=this.finderPenaltyTerminateAndCount(r,a,o)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,f=0,o=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(f++,f==5?e+=n.PENALTY_N1:f>5&&e++):(this.finderPenaltyAddHistory(f,o),r||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),r=this.modules[t][i],f=1);e+=this.finderPenaltyTerminateAndCount(r,f,o)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var v=this.modules[t][i];v==this.modules[t][i+1]&&v==this.modules[t+1][i]&&v==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var C=0,E=0,m=this.modules;E<m.length;E++){var p=m[E];C=p.reduce(function(M,P){return M+(P?1:0)},C)}var w=this.size*this.size,g=Math.ceil(Math.abs(C*20-w*10)/w)-1;return c(0<=g&&g<=9),e+=g*n.PENALTY_N4,c(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],a=this.size-7;r.length<e;a-=t)r.splice(1,0,a);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return c(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var a=1,r=0;r<e;r++){for(var o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],a),o+1<t.length&&(t[o]^=t[o+1]);a=n.reedSolomonMultiply(a,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(v){return 0}),a=function(v){var C=v^r.shift();r.push(0),t.forEach(function(E,m){return r[m]^=n.reedSolomonMultiply(E,C)})},o=0,i=e;o<i.length;o++){var f=i[o];a(f)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,a=7;a>=0;a--)r=r<<1^(r>>>7)*285,r^=(t>>>a&1)*e;return c(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];c(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();s.QrCode=h;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function u(n,e){return(n>>>e&1)!=0}function c(n){if(!n)throw new Error("Assertion error")}var d=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,a=e;r<a.length;r++){var o=a[r];l(o,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var a=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+a),10),a*3+1,t),r+=a}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var a=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;a+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(a,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,a=0,o=e;a<o.length;a++){var i=o[a],f=i.mode.numCharCountBits(t);if(i.numChars>=1<<f)return 1/0;r+=4+f+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();s.QrSegment=d})(I||(I={}));(function(s){(function(h){var l=function(){function u(c,d){this.ordinal=c,this.formatBits=d}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();h.Ecc=l})(s.QrCode||(s.QrCode={}))})(I||(I={}));(function(s){(function(h){var l=function(){function u(c,d){this.modeBits=c,this.numBitsCharCount=d}return u.prototype.numCharCountBits=function(c){return this.numBitsCharCount[Math.floor((c+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();h.Mode=l})(s.QrSegment||(s.QrSegment={}))})(I||(I={}));var A=I,Y="H",F={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},te=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function K(s){return s in F}function G(s,h){h===void 0&&(h=0);var l=[];return s.forEach(function(u,c){var d=null;u.forEach(function(n,e){if(!n&&d!==null){l.push("M".concat(d+h," ").concat(c+h,"h").concat(e-d,"v1H").concat(d+h,"z")),d=null;return}if(e===u.length-1){if(!n)return;d===null?l.push("M".concat(e+h,",").concat(c+h," h1v1H").concat(e+h,"z")):l.push("M".concat(d+h,",").concat(c+h," h").concat(e+1-d,"v1H").concat(d+h,"z"));return}n&&d===null&&(d=e)})}),l.join("")}var D={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:Y,validator:function(s){return K(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},re=y(y({},D),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),ne=O({name:"QRCodeSvg",props:D,setup:function(s){var h=T(0),l=T(""),u=function(){var c=s.value,d=s.level,n=s.margin,e=A.QrCode.encodeText(c,F[d]).getModules();h.value=e.length+n*2,l.value=G(e,n)};return u(),W(u),function(){return S("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h.value," ").concat(h.value)},[S("path",{fill:s.background,d:"M0,0 h".concat(h.value,"v").concat(h.value,"H0z")}),S("path",{fill:s.foreground,d:l.value})])}}}),ae=O({name:"QRCodeCanvas",props:D,setup:function(s){var h=T(null),l=function(){var u=s.value,c=s.level,d=s.size,n=s.margin,e=s.background,t=s.foreground,r=h.value;if(r){var a=r.getContext("2d");if(a){var o=A.QrCode.encodeText(u,F[c]).getModules(),i=o.length+n*2,f=window.devicePixelRatio||1,v=d/i*f;r.height=r.width=d*f,a.scale(v,v),a.fillStyle=e,a.fillRect(0,0,i,i),a.fillStyle=t,te?a.fill(new Path2D(G(o,n))):o.forEach(function(C,E){C.forEach(function(m,p){m&&a.fillRect(p+n,E+n,1,1)})})}}};return J(l),W(l),function(){return S("canvas",{ref:h,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),oe=O({name:"Qrcode",render:function(){var s=this.$props,h=s.renderAs,l=s.value,u=s.size,c=s.margin,d=s.level,n=s.background,e=s.foreground,t=u>>>0,r=c>>>0,a=K(d)?d:Y;return S(h==="svg"?ne:ae,{value:l,size:t,margin:r,level:a,background:n,foreground:e})},props:re});let q;q=oe;const ie=q,se={name:"PressQRCode",components:{PressQRCodeWeb:ie},props:{value:{type:String,default:"",required:!0},size:{type:Number,default:287,required:!1},margin:{type:Number,default:0},initH5Attr:{type:Boolean,default:!1},vue3Image:{type:Boolean,default:!1}},emits:["result"],data(){return{codeImg:"",wxCanvasId:"pressWxQRcode",canvasId:"pressQRcode"}},computed:{h5Attr(){return this.initH5Attr?{size:this.size,margin:this.margin}:{}},style(){return this.size===-1?"":`width: ${this.size}px; height: ${this.size}px;`}},watch:{value:{handler(){this.codeImg="",setTimeout(()=>{this.genQRCode()})}},size:{handler(){this.codeImg="",setTimeout(()=>{this.genQRCode()})}}},mounted(){this.genQRCode()},methods:{genQRCode(){this.vue3Image&&this.codeH5Vue3()},codeMpWx(){this.createSelectorQuery().select(`#${this.wxCanvasId}`).fields({node:!0,size:!0}).exec(h=>{const l=h[0].node;drawWxQRcode({canvas:l,canvasId:this.wxCanvasId,width:this.size,background:"#ffffff",foreground:"#000000",text:this.value}),wx.canvasToTempFilePath({canvasId:this.wxCanvasId,canvas:l,x:0,y:0,width:this.size,height:this.size,destWidth:this.size,destHeight:this.size,success:u=>{console.log("[二维码临时路径]",u.tempFilePath),this.codeImg=u.tempFilePath,this.$emit("result",this.codeImg)},fail:u=>{console.error(u)}})})},codeMpQQ(){const s=new UQRCode;s.data=this.value,s.size=this.size,s.margin=Math.round(this.size/20),s.make();const h=uni.createCanvasContext(this.canvasId,this);s.canvasContext=h,s.drawCanvas(),setTimeout(()=>{uni.canvasToTempFilePath({canvasId:this.canvasId,fileType:"png",width:this.size,height:this.size,success:l=>{console.log("[codeMpQQ]",l),this.codeImg=l.tempFilePath,this.$emit("result",this.codeImg)},fail:l=>{console.log(l)}},this)},300)},codeH5Vue3(){const h=document.getElementById(this.canvasId).toDataURL("image/png");this.codeImg=h},onLongPressImage(){this.$emit("longPressImage",this.codeImg)}}},ue={class:"press-q-r-code"},le=["src"];function he(s,h,l,u,c,d){const n=$("PressQRCodeWeb");return z(),L("div",ue,[l.value&&!l.vue3Image?(z(),H(n,x({key:0,value:l.value},d.h5Attr),null,16,["value"])):b("",!0),c.codeImg?b("",!0):(z(),L(j,{key:1},[l.value&&l.vue3Image?(z(),H(n,{key:0,id:c.canvasId,value:l.value},null,8,["id","value"])):b("",!0)],64)),c.codeImg?(z(),L("img",{key:2,src:c.codeImg,style:ee(d.style),"show-menu-by-longpress":!0,onLongpress:h[0]||(h[0]=(...e)=>d.onLongPressImage&&d.onLongPressImage(...e))},null,44,le)):b("",!0)])}const fe=Z(se,[["render",he],["__scopeId","data-v-28029ae8"]]);export{fe as P};
