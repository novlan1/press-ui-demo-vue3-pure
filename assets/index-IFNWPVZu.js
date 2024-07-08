import{_ as Z,g as ee,h as se,o as g,c as O,b as D,d as ce,F as M,i as U,j as A,r as C,k as ue,s as K,L as W,D as de,l as _e,m as ve,f as m,n as ge,q as me,a as d,t as H,p as pe,e as Ee}from"./index-BZexHo5h.js";import{c as Oe}from"./index-B17f7L1L.js";import{t as ne}from"./tslib.es6-bc7be52f-C33s8C00.js";import{l as Ce}from"./loader-DBQ4z0vx.js";import{t as fe}from"./time-BZ2JUv3Z.js";import"./little-loader-BcSYYlxs.js";const he="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__press_ui_helpe_config.json";function Le(){let e={vue2Uni:!1,vue2NotUni:!1,vue3Uni:!1};return e={vue2Uni:!0,vue2NotUni:!0,vue3Uni:!0},e.vue3Uni=!1,A()&&(e.vue2NotUni=!1),e}const Ne={i18n:{"zh-CN":{otherProject:"相关项目"},"en-US":{otherProject:"Other Project"}},name:"QuickListComp",components:{PressSection:ee},props:{helpDataUrl:{type:String,default:he},sectionStyle:{type:Object,default:()=>({header:"font-weight: 500;margin-bottom: 6px;",color:"#007aff"})}},data(){return{showOtherDemoMap:Le(),helpConfig:{}}},computed:{quickLinkList(){const{showOtherDemoMap:e,helpConfig:o={}}=this;let n=o.quickLinkList||[];return e.vue2Uni||(n=n.filter(t=>t.name!=="vue2-uni")),e.vue2NotUni||(n=n.filter(t=>t.name!=="vue2-not-uni")),e.vue3Uni||(n=n.filter(t=>t.name!=="vue3-uni")),n}},mounted(){this.getHelpData()},methods:{getHelpData(){se(this.helpDataUrl).then(e=>{this.helpConfig=e})},onJumpToOtherDemo(e){const{link:o,mpWeixin:n,mpQQ:t}=e;o&&(this.$toast.loading({message:"正在跳转...",forbidClick:!0,duration:300,loadingType:"spinner"}),this.$emit("onBeforeDestroy"),setTimeout(()=>{window.location.href=o},300))}}};function Se(e,o,n,t,i,l){const s=C("press-section"),c=C("PressCell");return g(),O("div",null,[l.quickLinkList.length?(g(),D(s,{key:"other-project-section",title:e.t("otherProject"),color:n.sectionStyle.color,type:"line","header-style":n.sectionStyle.header},null,8,["title","color","header-style"])):ce("",!0),(g(!0),O(M,null,U(l.quickLinkList,u=>(g(),D(c,{key:u.link,"is-link":"",title:u.label,onClick:S=>l.onJumpToOtherDemo(u)},null,8,["title","onClick"]))),128))])}const be=Z(Ne,[["render",Se]]);var h={},B={},I={};Object.defineProperty(I,"__esModule",{value:!0});function Pe(e){var o,n=e.id,t=e.content,i=document.getElementById(n);(o=i==null?void 0:i.parentNode)===null||o===void 0||o.removeChild(i);var l=document.createElement("style");l.id=n,l.type="text/css",l.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(l)}function Ve(e){var o,n=e.id,t=e.content,i=document.getElementById(n);(o=i==null?void 0:i.parentNode)===null||o===void 0||o.removeChild(i);var l=document.createElement("div");l.id=n,l.style.display="none",l.innerHTML=t,document.getElementsByTagName("body")[0].appendChild(l)}I.insertHtml=Ve;I.insertStyle=Pe;var r={};Object.defineProperty(r,"__esModule",{value:!0});var Ie={build:"_vConsoleBuildInfo",commit:"_vConsoleCommitInfo"},_={LINE:"line",WRAP:"v-console-custom-tab",URL_INPUT_ID:"vConsolePluginInput",URL_JUMP_BUTTON:"vConsolePluginUrlJumpButton",GO_BACK_BUTTON:"vConsolePluginGoBackButton",PLUGIN_NAME_PREFIX:"__vc_plug_",PLUGIN_VERSION_NAME:"version_performance",PLUGIN_SIMPLE_VERSION_NAME:"simple_version"},ye='<div class="'.concat(_.LINE,'"> </div>'),Te={KEY:"vConsole_no_delay",VALUE:"1"},ke="https://image-1251917893.file.myqcloud.com/igame/npm/vconsole%403.15.1/vconsole.min.js",De=`
.`.concat(_.WRAP,` {
  padding: 12px 16px 30px;
  user-select: auto;
}

.`).concat(_.WRAP," .").concat(_.LINE,` {
  line-height: 20px;
  padding: 5px 0;
  color: var(--VC-PURPLE, #6467f0);
  word-break: break-all;
  user-select: auto;
}

.`).concat(_.WRAP,` textarea {
  display: block;
  width: 100%;
  min-width: 0;
  padding: 0;
  color: #323233;
  line-height: inherit;
  text-align: left;
  background-color: transparent;
  resize: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 10px;
  height: 60px;
  padding: 4px;
  line-height: 16px;
  font-size: 13px;
  user-select: auto;
}

.`).concat(_.WRAP,` textarea:focus {
  outline: none;
}

.`).concat(_.WRAP,` button {
  height: 30px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  background-color: #07c160;
  border: 1px solid #07c160;
  font-size: 14px;
  padding: 0 12px;
  margin-right: 10px;
}

.vc-cmd,
.vc-cmd-input {
  user-select: auto !important;
}

#`).concat(_.URL_INPUT_ID,` {
  user-select: auto !important;
}
`),Me={KEY:"tip_debug_cgi_env",PROD:"prod",TEST:"test"},Ue=[{key:"time",label:"Build Time"},{key:"author",label:"Build Author"},{key:"branch",label:"Build Branch"},{key:"netEnv",label:"Build Net Env"}],we=[{key:"message",label:"Last Commit Message"},{key:"author",label:"Last Commit Author"},{key:"date",label:"Last Commit Time"},{key:"hash",label:"Last Commit Hash"}];r.BUILD_LIST=Ue;r.BUILD_NAME_MAP=Ie;r.COMMIT_LIST=we;r.DEBUG_CGI_ENV=Me;r.EMPTY_LINE=ye;r.V_CONSOLE_DOM=_;r.V_CONSOLE_NO_DELAY=Te;r.V_CONSOLE_STYLE_CONTENT=De;r.V_CONSOLE_URL=ke;var F={};Object.defineProperty(F,"__esModule",{value:!0});var V=ne,a=r,w;function J(e){var o;w=((o=e==null?void 0:e.target)===null||o===void 0?void 0:o.value)||""}function q(){w&&(location.href=w)}function z(){var e,o;history.go(-1),(o=(e=window.vConsole)===null||e===void 0?void 0:e.hide)===null||o===void 0||o.call(e)}function T(e){var o=function(i){return+(+i).toFixed(2)},n='<div class="'.concat(a.V_CONSOLE_DOM.WRAP,'">');n+=Be().map(function(t){var i=t.label,l=t.value;return'<div class="'.concat(a.V_CONSOLE_DOM.LINE,'">').concat(i,"：").concat(o(l),"ms </div>")}).concat(a.EMPTY_LINE).concat(Fe()).join(`
`),n+=`
<textarea id="`.concat(a.V_CONSOLE_DOM.URL_INPUT_ID,`" type="text" placeholder="请输入跳转路径"></textarea>
<button id="`).concat(a.V_CONSOLE_DOM.URL_JUMP_BUTTON,`">跳转</button>
<button id="`).concat(a.V_CONSOLE_DOM.GO_BACK_BUTTON,`">返回上一页</button>
  `),n+="</div>",e(n)}function Ae(){var e=new VConsole.VConsolePlugin(a.V_CONSOLE_DOM.PLUGIN_VERSION_NAME,"其他信息"),o=function(i){var l=document.getElementById("".concat(a.V_CONSOLE_DOM.PLUGIN_NAME_PREFIX).concat(a.V_CONSOLE_DOM.PLUGIN_VERSION_NAME));l&&(l.innerHTML=i)};e.on("renderTab",function(t){T(t)}),e.on("showConsole",function(){T(o)}),e.on("show",function(){T(o)});var n=[];return n.push({name:"隐藏vConsole",global:!1,onClick:function(){var i;(i=window.vConsole)===null||i===void 0||i.destroy()}}),e.on("addTool",function(t){t(n)}),e.on("show",function(){var t,i,l;(t=document.getElementById(a.V_CONSOLE_DOM.URL_INPUT_ID))===null||t===void 0||t.addEventListener("input",J),(i=document.getElementById(a.V_CONSOLE_DOM.URL_JUMP_BUTTON))===null||i===void 0||i.addEventListener("click",q),(l=document.getElementById(a.V_CONSOLE_DOM.GO_BACK_BUTTON))===null||l===void 0||l.addEventListener("click",z)}),e.on("hide",function(){var t,i,l;(t=document.getElementById(a.V_CONSOLE_DOM.URL_INPUT_ID))===null||t===void 0||t.removeEventListener("input",J),(i=document.getElementById(a.V_CONSOLE_DOM.URL_JUMP_BUTTON))===null||i===void 0||i.removeEventListener("click",q),(l=document.getElementById(a.V_CONSOLE_DOM.GO_BACK_BUTTON))===null||l===void 0||l.addEventListener("click",z)}),e}function Be(){var e,o,n=performance.timing||{},t=((o=(e=performance)===null||e===void 0?void 0:e.wx)===null||o===void 0?void 0:o.timeOrigin)||n.fetchStart,i=n.domainLookupEnd-n.domainLookupStart,l=n.connectEnd-n.connectStart,s=n.responseStart-n.requestStart,c=n.responseEnd-n.responseStart,u=n.domContentLoadedEventStart-n.responseEnd,S=n.domLoading-t,b=n.loadEventEnd-t,y=n.domComplete-n.domInteractive,P=[{value:i,label:"DNS连接耗时"},{value:l,label:"TCP连接耗时"},{value:s,label:"后端响应时间"},{value:c,label:"HTML页面下载时间"},{value:u,label:"DOM时间"},{value:y,label:"解析DOM树耗时"},{value:S,label:"首次加载耗时"},{value:b,label:"整页耗时"}];return P}function Fe(){var e=window[a.BUILD_NAME_MAP.build]||{},o=window[a.BUILD_NAME_MAP.commit]||{},n=a.BUILD_LIST.map(function(i){var l=i.key,s=i.label;return'<div class="'.concat(a.V_CONSOLE_DOM.LINE,'">').concat(s,": ").concat(e[l]||"","</div>")}),t=a.COMMIT_LIST.map(function(i){var l=i.key,s=i.label;return'<div class="'.concat(a.V_CONSOLE_DOM.LINE,'">').concat(s,": ").concat(o[l]||"","</div>")});return V.__spreadArray(V.__spreadArray(V.__spreadArray(V.__spreadArray([],n,!0),[a.EMPTY_LINE],!1),t,!0),[a.EMPTY_LINE,a.EMPTY_LINE],!1).join(`
`)}F.initVersionPlugin=Ae;var R={};Object.defineProperty(R,"__esModule",{value:!0});var Re=Oe,L=r;function xe(e){Re.clipboardWeb(e).then(function(){alert("已复制，开去粘贴吧～")}).catch(function(){alert("当前环境暂不支持复制，请长按选择复制～")})}function Ge(e){e===void 0&&(e="");var o=new VConsole.VConsolePlugin("feedback","反馈");o.on("init",function(){});var n=window.location.href,t=navigator.userAgent,i=document.cookie,l='<div class="'.concat(L.V_CONSOLE_DOM.WRAP,`">
<div class="`).concat(L.V_CONSOLE_DOM.LINE,'">url：').concat(n,`</div>
<div class="`).concat(L.V_CONSOLE_DOM.LINE,'">uid：').concat(e,`</div>
<div class="`).concat(L.V_CONSOLE_DOM.LINE,'">ua：').concat(t,`</div>
<div class="`).concat(L.V_CONSOLE_DOM.LINE,'">cookie：').concat(i,`</div>
  </div>
  `);o.on("renderTab",function(c){c(l)});var s=[];return s.push({name:"复制用户信息",global:!1,onClick:function(){var u={url:n,uid:e,UA:t,cookie:i};xe(JSON.stringify(u))}}),o.on("addTool",function(c){c(s)}),o}R.initFeedbackPlugin=Ge;var x={};Object.defineProperty(x,"__esModule",{value:!0});var v=r;function je(){var e=window.sessionStorage.getItem(v.DEBUG_CGI_ENV.KEY);return console.log("value",e),e===v.DEBUG_CGI_ENV.PROD?"正式":e===v.DEBUG_CGI_ENV.TEST?"测试":"默认"}function Ye(){var e=new VConsole.VConsolePlugin("switchEnv","切换环境"),o=je(),n='<div class="'.concat(v.V_CONSOLE_DOM.WRAP,`">
<div class="`).concat(v.V_CONSOLE_DOM.LINE,'">当前环境：').concat(o,`</div>
  </div>`);return e.on("renderTab",function(t){t(n)}),e.on("addTool",function(t){var i=[];i.push({name:"测试环境",global:!1,onClick:function(){console.log("已切换为测试CGI，即将刷新页面......"),window.sessionStorage.setItem(v.DEBUG_CGI_ENV.KEY,v.DEBUG_CGI_ENV.TEST),setTimeout(function(){location.reload()},1e3)}}),i.push({name:"现网环境",global:!1,onClick:function(){console.log("已切换为正式CGI，即将刷新页面......"),window.sessionStorage.setItem(v.DEBUG_CGI_ENV.KEY,v.DEBUG_CGI_ENV.PROD),setTimeout(function(){location.reload()},1e3)}}),t(i)}),e}x.initSwitchEnvPlugin=Ye;var G={};Object.defineProperty(G,"__esModule",{value:!0});var p=r;function Ke(){var e=window.sessionStorage.getItem(p.V_CONSOLE_NO_DELAY.KEY);return e===p.V_CONSOLE_NO_DELAY.VALUE?"已去掉延迟":"默认"}function We(){var e=new VConsole.VConsolePlugin("loadDelay","vConsole加载延迟"),o='<div class="'.concat(p.V_CONSOLE_DOM.WRAP,`">
  <div class="`).concat(p.V_CONSOLE_DOM.LINE,'">当前状态：').concat(Ke(),`</div>
    </div>`);e.on("renderTab",function(t){t(o)});var n=[];return n.push({name:"去除延迟",global:!1,onClick:function(){sessionStorage.setItem(p.V_CONSOLE_NO_DELAY.KEY,p.V_CONSOLE_NO_DELAY.VALUE),console.log("已设置去除延迟，即将刷新页面......"),setTimeout(function(){location.reload()},1e3)}}),n.push({name:"恢复延迟",global:!1,onClick:function(){sessionStorage.removeItem(p.V_CONSOLE_NO_DELAY.KEY),console.log("已设置恢复延迟，即将刷新页面......"),setTimeout(function(){location.reload()},1e3)}}),n.push({name:"刷新页面",global:!1,onClick:function(){window.location.reload()}}),e.on("addTool",function(t){t(n)}),e}G.initLoadDelayPlugin=We;var j={};Object.defineProperty(j,"__esModule",{value:!0});var Q=r;function He(){var e=new VConsole.VConsolePlugin("msdk","msdk工具"),o='<div class="'.concat(Q.V_CONSOLE_DOM.WRAP,`">
  <div class="`).concat(Q.V_CONSOLE_DOM.LINE,`">msdk工具</div>
  </div>`);e.on("renderTab",function(t){t(o)});var n=[];return n.push({name:"关闭页面",global:!1,onClick:function(){var i,l;(l=(i=window==null?void 0:window.app)===null||i===void 0?void 0:i.closeWebView)===null||l===void 0||l.call(i)}}),e.on("addTool",function(t){t(n)}),e}j.initMsdkPlugin=He;var Y={};Object.defineProperty(Y,"__esModule",{value:!0});var E=r,Je=fe;function k(e){var o=window.igameVersion,n="";if(o!=null&&o.version){var t="".concat(Je.dateFormat(new Date(+o.version),"yyyy-MM-dd hh:mm:ss"));n=`
  <div class="`.concat(E.V_CONSOLE_DOM.LINE,'">构建时间：').concat(t||"",`</div>
  <div class="`).concat(E.V_CONSOLE_DOM.LINE,'">构建作者：').concat(o.author||"",`</div>
  `)}else n=' <div class="'.concat(E.V_CONSOLE_DOM.LINE,'">无构建信息</div>');e('<div class="'.concat(E.V_CONSOLE_DOM.WRAP,'">').concat(n,"</div>"))}function qe(){var e=new VConsole.VConsolePlugin(E.V_CONSOLE_DOM.PLUGIN_SIMPLE_VERSION_NAME,"版本信息"),o=function(t){var i=document.getElementById("".concat(E.V_CONSOLE_DOM.PLUGIN_NAME_PREFIX).concat(E.V_CONSOLE_DOM.PLUGIN_SIMPLE_VERSION_NAME));i&&(i.innerHTML=t)};return e.on("renderTab",function(n){k(n)}),e.on("showConsole",function(){k(o)}),e.on("show",function(){k(o)}),e}Y.initVersionSimplePlugin=qe;Object.defineProperty(B,"__esModule",{value:!0});var ze=ne,Qe=Ce,$e=I,oe=r,Xe=F,Ze=R,en=x,nn=G,on=j,tn=Y;function ln(e,o){return e===void 0&&(e={}),o===void 0&&(o=[]),new Promise(function(n){typeof window.VConsole>"u"?Qe.loadJS(oe.V_CONSOLE_URL).then(function(){n($(e,o))}):n($(e,o))})}function $(e,o){var n=new VConsole(ze.__assign({},e||{}));return n.addPlugin(Xe.initVersionPlugin()),n.addPlugin(Ze.initFeedbackPlugin()),n.addPlugin(en.initSwitchEnvPlugin()),n.addPlugin(nn.initLoadDelayPlugin()),n.addPlugin(tn.initVersionSimplePlugin()),n.addPlugin(on.initMsdkPlugin()),o.forEach(function(t){n.addPlugin(t())}),$e.insertStyle({id:"vConsolePluginStyle",content:oe.V_CONSOLE_STYLE_CONTENT}),window&&!window.vConsole&&(window.vConsole=n),n}B.loadVConsole=ln;Object.defineProperty(h,"__esModule",{value:!0});var an=B,N={KEY:"SHOW_V_CONSOLE",VALUE:"1"},f={show:!1};function te(){an.loadVConsole().then(function(e){window.vConsole=e})}function ie(){f.show=!0,localStorage.setItem(N.KEY,N.VALUE),te()}function le(){var e;localStorage.removeItem(N.KEY),f.show=!1,(e=window.vConsole)===null||e===void 0||e.destroy()}function rn(){return f.show?le():ie(),f.show}function sn(){var e=localStorage.getItem(N.KEY)===N.VALUE;e&&(f.show=!0,te())}h.V_CONSOLE_STATE=f;h.checkAndShowVConsole=sn;h.closeVConsole=le;h.showVConsole=ie;var cn=h.toggleVConsole=rn;function un(e){if(ue())return;const o=K.get(W)||de,n=+!Number(o);K.set(W,n),e("正在切换语言"),window.location.reload()}const X="INDEX_SCROLL_TOP",dn=["hor-swiper-light"];function _n(){let e=me.pages.filter(n=>n.list&&n.list.length),o=[];return A()&&(o=dn),e=e.map(n=>({...n,list:n.list.filter(t=>{const i=t.url.split("/"),l=i[i.length-1];return o.indexOf(l)<0})})),e}const vn="Press UI 是一套易用的、灵活的、基于 uni-app 的组件库",gn={i18n:{"zh-CN":{share:"分享",name:"全端兼容 高性能",detail:vn,otherAbility:"其他功能",toggleLanguage:"切换语言",toggleVConsole:"切换VConsole",launchApp:"拉起APP",otherProject:"相关项目",checkNormal:"基础",checkPure:"非 Uni App",checkVue3:"Vue3"},"en-US":{share:"Share",name:"Fully Compatible",detail:"Press UI is an easy-to-use, uni-app-based component library",otherAbility:"Other Ability",toggleLanguage:"Toggle Language",toggleVConsole:"Toggle VConsole",launchApp:"Launch App",otherProject:"Other Project",checkNormal:"Vue2 Uni App Project",checkPure:"Vue2 Not Uni App Project",checkVue3:"Vue3 Uni App Project"}},components:{PressSection:ee,QuickListComp:be,PressCell:_e},mixins:[],data(){return{scrollTop:0,pages:_n(),isNotInUni:A(),sectionStyle:{header:"font-weight: 500;margin-bottom: 6px;",color:"#007aff"}}},mounted(){this.init()},beforeDestroy(){this.onBeforeDestroy()},beforeUnmount(){this.onBeforeDestroy()},methods:{init(){this.scrollTop=+localStorage.getItem(X)||0},onBeforeDestroy(){localStorage.setItem(X,this.scrollTop)},onScroll(e){this.scrollTop=e.target.scrollTop},getNavName(e){const o=e.url.split("/");return this.t(`titleMap.${o[o.length-1]}`)},getComponentTypeTitle(e){return this.t(`titleMap.${e.name}`)||e.name},onToggleLanguage(){console.log("[onToggleLanguage]"),un(this.onGTip)},getUniqueKey(e,o){return`${e}-${o}`},onOpenVConsole(){cn()},onJumpToSharePage(){ve.call(this,"/pages/share/share","/pages/press/share/share")}}},ae=e=>(pe("data-v-bf1748b5"),e=e(),Ee(),e),mn={class:"index-page"},pn={class:"index-page__header"},En=ae(()=>d("img",{class:"index-page__header-bg",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/uniui-header-bg.png",mode:"widthFix"},null,-1)),On=ae(()=>d("img",{class:"index-page__header-logo",src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-full-logo.png",mode:"aspectFit"},null,-1)),Cn={class:"index-page__header-content"},fn={class:"index-page__header-title"},hn={class:"index-page__header-info"},Ln={class:"index-page__header-subtitle"},Nn={class:"index-page__main"},Sn={class:"index-page__card"};function bn(e,o,n,t,i,l){const s=C("press-section"),c=C("PressCell"),u=C("QuickListComp"),S=C("scroll-view");return g(),O("div",mn,[m(S,{"scroll-y":"",class:"scroll-view","scroll-top":i.scrollTop,onScroll:l.onScroll},{default:ge(()=>[d("div",pn,[En,On,d("div",Cn,[d("div",fn,H(e.t("name")),1),d("div",hn,[d("span",Ln,H(e.t("detail")),1)])])]),d("div",Nn,[d("div",Sn,[(g(!0),O(M,null,U(i.pages,(b,y)=>(g(),O("div",{key:l.getUniqueKey("section",y)},[m(s,{title:l.getComponentTypeTitle(b),color:i.sectionStyle.color,type:"line","header-style":i.sectionStyle.header},null,8,["title","color","header-style"]),(g(!0),O(M,null,U(b.list,(P,re)=>(g(),D(c,{key:l.getUniqueKey("nav",re),"is-link":"",title:l.getNavName(P),"link-type":"navigateTo",url:`/pages${P.url}`},null,8,["title","url"]))),128))]))),128)),m(s,{key:"other-ability-section",title:e.t("otherAbility"),color:i.sectionStyle.color,type:"line","header-style":i.sectionStyle.header},null,8,["title","color","header-style"]),m(c,{"is-link":"",title:e.t("toggleLanguage"),onClick:l.onToggleLanguage},null,8,["title","onClick"]),m(c,{"is-link":"",title:e.t("toggleVConsole"),onClick:l.onOpenVConsole},null,8,["title","onClick"]),m(c,{"is-link":"",title:e.t("share"),onClick:l.onJumpToSharePage},null,8,["title","onClick"]),m(u,{onOnBeforeDestroy:l.onBeforeDestroy},null,8,["onOnBeforeDestroy"])])])]),_:1},8,["scroll-top","onScroll"])])}const Dn=Z(gn,[["render",bn],["__scopeId","data-v-bf1748b5"]]);export{Dn as default};
