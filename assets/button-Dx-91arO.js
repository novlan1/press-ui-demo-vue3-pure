import{P as z}from"./press-button-D_1IeF99.js";import{i as I}from"./utils-Do31p4kb.js";import{l as F}from"./little-loader-BcSYYlxs.js";import{_ as D,o as C,c as P,f as i,n as o,a as y,u as n,t as r,F as H,i as X,r as A,b as Q,d as x}from"./index-BXJiSO9X.js";import"./press-icon-plus-BVVeYod4.js";import"./add-unit-Df5pRFBE.js";import"./press-info-CaSyg39j.js";import"./press-component-DoZYj-_b.js";import"./press-loading-plus-DAf2CFYh.js";import"./press-loading-CjS78Ikv.js";import"./button-BaKXjqxg.js";import"./system-BAdrsxg_.js";var O={},p={},N={exports:{}};(function(e){function s(u){"@babel/helpers - typeof";return e.exports=s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},e.exports.__esModule=!0,e.exports.default=e.exports,s(u)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports})(N);var K=N.exports,k={};Object.defineProperty(k,"__esModule",{value:!0});function V(){return(navigator.userAgent||"").toLowerCase()}function L(){var e=V();return/iphone|ipod|ipad|Mac OS X/i.test(e)||!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}function B(){var e=V(),s=e.indexOf("micromessenger")!==-1,u=e.indexOf("wxwork")!==-1,c=e.indexOf(" qq/")!==-1,l=e.indexOf(" igameapp/")!==-1,m=e.indexOf(" gamelife/")!==-1,t=e.indexOf("android")!==-1,d=L(),v=d,a=e.indexOf(" msdk/")!==-1,g=e.indexOf(" webviewx msdk/")!==-1,w=e.indexOf(" msdk/5")!==-1,S=e.indexOf("ingame")!==-1,f=a||S,h=e.indexOf("gamehelper")!==-1,M=e.indexOf("gamehelper_20004")!==-1,T=e.indexOf("miniprogram")!==-1||typeof window<"u"&&window.__wxjs_environment==="miniprogram",U=e.indexOf("lolapp")!==-1,W=/(?:Windows Phone)/.test(e),q=/(?:SymbianOS)/.test(e)||W,j=!e.match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i);return{isWeixin:s,isWorkWeixin:u,isQQ:c,isPvpApp:l,isTipApp:m,isAndroid:t,isIos:d,isIOS:v,isMsdk:a,isMsdkX:g,isMsdkV5:w,isSlugSdk:S,isInGame:f,isGHelper:h,isGHelper20004:M,isMiniProgram:T,isLolApp:U,isWindowsPhone:W,isSymbian:q,isPc:j}}function Y(){return B()}var Z=function(){return!(typeof window<"u"&&window.navigator)};k.checkNodeEnv=Z;k.checkUAIsIOS=L;k.getEnvUAType=B;k.initEnv=Y;Object.defineProperty(p,"__esModule",{value:!0});var $=K,b=k,_=F;function ee(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var ie=ee($);function te(e){e===void 0&&(e="");var s=b.initEnv();s.isMsdk&&!s.isMsdkV5?typeof window.msdkCallNative=="function"?window.msdkCallNative(e):typeof window.msdkCall=="function"&&window.msdkCall("WGSendMessageToNative",'{"MsdkMethod":"WGSendMessageToNative","MsgData":"'.concat(e,'"}')):s.isAndroid?confirm(e):s.isIOS&&(window.location.href=encodeURIComponent(e))}function oe(e){var s=b.initEnv();s.isMsdk&&!s.isMsdkV5&&(typeof window.setMsdkCallback=="function"?window.setMsdkCallback(e):typeof window.msdkAddNativeCallbackObserver=="function"&&window.msdkAddNativeCallbackObserver(e))}function se(e){var s=b.initEnv();s.isMsdk&&!s.isMsdkV5&&typeof window.msdkRemoveNativeCallbackObserver=="function"&&window.msdkRemoveNativeCallbackObserver(e)}function E(e){if(e||(e=b.initEnv()),console.info("[closeMsdkWebview] env",e),e.isMsdkV5&&typeof window.msdkCall=="function"){var s='{"MsdkMethod":"closeWebView"}';window.msdkCall(s)}else e.isMsdk?typeof window.msdkCloseWebview=="function"?(!e.isIOS||e.isIOS&&window.msdkiOSHandler)&&window.msdkCloseWebview():typeof window.msdkCallNative=="function"&&window.msdkCallNative('{"MsdkMethod":"CloseWebview"}'):e.isSlugSdk&&window.customBrowserInterface&&window.customBrowserInterface.closeWebview()}function le(){console.log("[closeWebView] call close webview");var e=b.initEnv();e.isMsdk?E():e.isSlugSdk?window.customBrowserInterface&&window.customBrowserInterface.closeWebview():(window.location.href="about:blank",console.log("[closeWebView] call close webview failed"))}function ne(){return new Promise(function(e){var s=b.initEnv();s.isMsdkV5?_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV5.js",function(){e(!0)}):s.isMsdk?s.isMsdkX?_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3_embedded.js",function(){e(!0)}):_.loader("https://image-1251917893.file.myqcloud.com/igame/common/js/msdkJsAdapterV3.js",function(){e(!0)}):s.isSlugSdk&&_.loader("https://tiem-cdn.qq.com/slugteam/sdk/browser_adapt.js",function(){e(!0)})})}var re=function(){R(!1)},R=function(s){var u,c;s===void 0&&(s=!0);var l=b.getEnvUAType(),m=l.isSlugSdk,t=l.isMsdkV5,d=l.isMsdk,v=l.isMsdkX,a=l.isAndroid;if(m){if(ie.default(window.customBrowserInterface)==="object"){var g=s?"hideUi":"showUi";window.customBrowserInterface[g]()}}else if(t){var w=JSON.stringify({MsdkMethod:"setFullScreen",isFullScreen:!!s});setTimeout(function(){var f,h;a?(f=window.msdkCall)===null||f===void 0||f.call(window,w):window.WebViewJavascriptBridge?(h=window.msdkCall)===null||h===void 0||h.call(window,w):document.addEventListener("WebViewJavascriptBridgeReady",function(){var M;(M=window.msdkCall)===null||M===void 0||M.call(window,w)},!1)},100)}else if(d&&!v){var S=JSON.stringify({MsdkMethod:"WGSetFullScreen",isFullScreen:!!s});a?(u=window.msdkCall)===null||u===void 0||u.call(window,"WGSetFullScreen",S):window.WebViewJavascriptBridge?(c=window.msdkCall)===null||c===void 0||c.call(window,"WGSetFullScreen",S):document.addEventListener("WebViewJavascriptBridgeReady",function(){var f;(f=window.msdkCall)===null||f===void 0||f.call(window,"WGSetFullScreen",S)},!1)}};p.addMsdkNativeCallbackListener=oe;p.callJsBrowserAdapter=ne;p.callJsReSetFullScreen=re;p.callJsSetFullScreen=R;p.closeMsdkWebview=E;p.closeWebView=le;p.removeMsdkNativeCallbackListener=se;p.sendToMsdkNative=te;Object.defineProperty(O,"__esModule",{value:!0});var G=p,ae=k;function J(e,s){typeof window.customBrowserInterface>"u"?G.callJsBrowserAdapter().then(function(){var u;(u=window.customBrowserInterface)===null||u===void 0||u.openMiniProgram(e,s)}):window.customBrowserInterface.openMiniProgram(e,s)}function de(e){var s=e.appId,u=s===void 0?"":s,c=e.path,l=c===void 0?"":c,m=e.type,t=m===void 0?0:m,d=e.isWxMp,v=d===void 0?!0:d,a=ae.initEnv();if(a.isSlugSdk)return J(u,l);var g={};v?g={MsdkMethod:"WGLaunchMiniApp",userName:u,path:l,type:t}:g={MsdkMethod:"WGLaunchQQMiniApp",miniProgramAppid:u,miniProgramPath:l,type:t};var w=JSON.stringify(g);typeof window.msdkShare>"u"?G.callJsBrowserAdapter().then(function(){window.msdkShare(w)}):window.msdkShare(w)}var ue=O.launchMiniProgramInGame=de;O.launchMiniProgramInSlugSdk=J;const ce={i18n:{"zh-CN":{type:"按钮类型",size:"按钮尺寸",icon:"图标按钮",loading:"加载状态",disabled:"禁用状态",shape:"按钮形状",default:"默认按钮",primary:"主要按钮",info:"信息按钮",danger:"危险按钮",warning:"警告按钮",large:"大号按钮",normal:"普通按钮",small:"小型按钮",mini:"迷你按钮",plain:"朴素按钮",square:"方形按钮",round:"圆形按钮",hairline:"细边框",hairlineButton:"细边框按钮",loadingText:"加载中...",router:"页面导航",urlRoute:"URL 跳转",vueRoute:"路由跳转",customColor:"自定义颜色",pure:"单色按钮",gradient:"渐变色按钮",blockElement:"块级元素"},"en-US":{type:"Type",size:"Size",icon:"Icon",loading:"Loading",disabled:"Disabled",shape:"Shape",default:"Default",primary:"Primary",info:"Info",danger:"Danger",warning:"Warning",large:"Large",normal:"Normal",small:"Small",mini:"Mini",plain:"Plain",square:"Square",round:"Round",hairline:"Hairline",hairlineButton:"Hairline",loadingText:"Loading...",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",customColor:"Custom Color",pure:"Pure",gradient:"Gradient",blockElement:"Block Element"}},components:{PressButton:z},data(){return{customStyle:"margin-right: 16px;"}},onReady(){},methods:{onLaunchMp(e){console.log("[launchMiniProgramInGame]"),ue({appId:"wx99c1c10a389e7433",isWxMp:!e})},onClick(e){console.log(e)},onVibrateLong(){I()||uni.vibrateLong({success(){console.log("success")},fail(){console.log("fail")}})},onVibrateShort(){navigator.vibrate(1e3),!I()&&uni.vibrateLong({success(){console.log("success")},fail(){console.log("fail")}})}}},me={class:"demo-wrap"},pe={class:"demo-button-row"},fe={class:"demo-button-row"},ye={class:"demo-button-row"},we={class:"demo-button-row"},ve={class:"demo-button-row"},ge={class:"demo-button-row"},ke={class:"demo-button-row"},be={class:"demo-button-row"},Se={class:"demo-button-row"};function he(e,s,u,c,l,m){const t=A("press-button"),d=A("demo-block");return C(),P("div",me,[i(d,{title:e.t("type")},{default:o(()=>[y("div",pe,[i(t,{type:"default","custom-style":l.customStyle,onClick:m.onClick},{default:o(()=>[n(r(e.t("default")),1)]),_:1},8,["custom-style","onClick"]),i(t,{type:"primary","custom-style":`${l.customStyle}`,onClick:m.onVibrateShort},{default:o(()=>[n(r(e.t("primary")),1)]),_:1},8,["custom-style","onClick"]),i(t,{type:"info",onClick:m.onVibrateLong},{default:o(()=>[n(r(e.t("info")),1)]),_:1},8,["onClick"])]),y("div",fe,[i(t,{type:"warning","custom-style":l.customStyle,onClick:m.onLaunchMp},{default:o(()=>[n(r(e.t("warning")),1)]),_:1},8,["custom-style","onClick"]),i(t,{type:"danger",onClick:s[0]||(s[0]=v=>m.onLaunchMp(1))},{default:o(()=>[n(r(e.t("danger")),1)]),_:1})])]),_:1},8,["title"]),i(d,{title:e.t("plain")},{default:o(()=>[y("div",ye,[i(t,{plain:"",type:"default","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("plain")),1)]),_:1},8,["custom-style"]),i(t,{plain:"",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("plain")),1)]),_:1},8,["custom-style"])]),i(t,{plain:"",type:"info"},{default:o(()=>[n(r(e.t("plain")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("hairline")},{default:o(()=>[i(t,{plain:"",hairline:"",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("hairlineButton")),1)]),_:1},8,["custom-style"]),i(t,{plain:"",hairline:"",type:"info"},{default:o(()=>[n(r(e.t("hairlineButton")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("disabled")},{default:o(()=>[y("div",we,[i(t,{disabled:"",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("disabled")),1)]),_:1},8,["custom-style"]),i(t,{disabled:"",type:"info","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("disabled")),1)]),_:1},8,["custom-style"])]),i(t,{disabled:"",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("disabled")),1)]),_:1},8,["custom-style"])]),_:1},8,["title"]),i(d,{title:e.t("loading")},{default:o(()=>[i(t,{loading:"",type:"primary","custom-style":l.customStyle},null,8,["custom-style"]),i(t,{loading:"",type:"primary","loading-type":"spinner","custom-style":l.customStyle},null,8,["custom-style"]),i(t,{loading:"",type:"info","loading-text":e.t("loadingText")},null,8,["loading-text"])]),_:1},8,["title"]),i(d,{title:e.t("shape")},{default:o(()=>[i(t,{square:"",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("square")),1)]),_:1},8,["custom-style"]),i(t,{round:"",type:"info"},{default:o(()=>[n(r(e.t("round")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("icon")},{default:o(()=>[i(t,{icon:"star-o",type:"primary","custom-style":l.customStyle},null,8,["custom-style"]),i(t,{icon:"star-o",type:"primary","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("button")),1)]),_:1},8,["custom-style"]),i(t,{icon:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent-2.png"},{default:o(()=>[n(r(e.t("button")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("size")},{default:o(()=>[y("div",ve,[i(t,{type:"primary",size:"large"},{default:o(()=>[n(r(e.t("large")),1)]),_:1})]),i(t,{type:"primary",size:"normal","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("normal")),1)]),_:1},8,["custom-style"]),i(t,{type:"primary",size:"small","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("small")),1)]),_:1},8,["custom-style"]),i(t,{type:"primary",size:"mini"},{default:o(()=>[n(r(e.t("mini")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("blockElement")},{default:o(()=>[i(t,{type:"primary",block:""},{default:o(()=>[n(r(e.t("blockElement")),1)]),_:1})]),_:1},8,["title"]),i(d,{title:e.t("customColor")},{default:o(()=>[i(t,{color:"#7232dd","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("pure")),1)]),_:1},8,["custom-style"]),i(t,{color:"#7232dd",plain:"","custom-style":l.customStyle},{default:o(()=>[n(r(e.t("pure")),1)]),_:1},8,["custom-style"]),i(t,{color:"linear-gradient(to right, #4bb0ff, #6149f6)"},{default:o(()=>[n(r(e.t("gradient")),1)]),_:1})]),_:1},8,["title"]),(C(),P(H,null,X([0,1,2],(v,a)=>i(d,{key:a,title:a===1?"E-SPORT-DISABLE":a===2?"E-SPORT-LOADING":"E-SPORT"},{default:o(()=>[y("div",ge,[i(t,{type:"e-sport-primary",disabled:a===1,loading:a===2,"custom-style":l.customStyle},{default:o(()=>[n(" primary ")]),_:2},1032,["disabled","loading","custom-style"]),i(t,{type:"e-sport-primary-bg",disabled:a===1,loading:a===2,"custom-style":l.customStyle},{default:o(()=>[n(" primary-bg ")]),_:2},1032,["disabled","loading","custom-style"])]),y("div",ke,[i(t,{type:"e-sport-primary-bg-lg",disabled:a===1,loading:a===2,"custom-style":l.customStyle},{default:o(()=>[n(" primary-bg-lg ")]),_:2},1032,["disabled","loading","custom-style"])]),y("div",be,[i(t,{type:"e-sport-primary-bg-xl",disabled:a===1,loading:a===2,"custom-style":l.customStyle},{default:o(()=>[n(" primary-bg-xl ")]),_:2},1032,["disabled","loading","custom-style"])]),y("div",Se,[i(t,{type:"e-sport-secondary",disabled:a===1,loading:a===2,"custom-style":l.customStyle,size:{width:"136px",height:"36px"}},{default:o(()=>[n(" secondary ")]),_:2},1032,["disabled","loading","custom-style"]),a!==2?(C(),Q(t,{key:0,type:"e-sport-border",disabled:a===1,loading:a===2,"custom-style":l.customStyle,size:{width:"136px",height:"36px"}},{default:o(()=>[n(" border ")]),_:2},1032,["disabled","loading","custom-style"])):x("",!0)])]),_:2},1032,["title"])),64))])}const Ee=D(ce,[["render",he],["__scopeId","data-v-90e89349"]]);export{Ee as default};
