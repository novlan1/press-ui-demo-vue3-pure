import{P as m}from"./press-cell-BLTCMYRJ.js";import{P as k}from"./press-overlay-CxfxI6bt.js";import{_ as C,o as f,c as v,e as t,k as l,r as i,a as c}from"./index-C8vugXWi.js";import"./link-BzPJvqKH.js";import"./event-msrAv3cV.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";const u={i18n:{"zh-CN":{embeddedContent:"嵌入内容"},"en-US":{embeddedContent:"Embedded"}},components:{PressCell:m,PressOverlay:k},data(){return{options:{normal:!1,content:!1}}},methods:{onClickShow(o){this.options[o]=!0},onClickHide(o){this.options[o]=!1},noop(){}}},_={class:"demo-wrap"};function w(o,e,b,h,r,n){const d=i("press-cell"),a=i("demo-block"),p=i("press-overlay");return f(),v("div",_,[t(a,{title:o.t("basicUsage")},{default:l(()=>[t(d,{title:o.t("check"),"is-link":"",onClick:e[0]||(e[0]=s=>n.onClickShow("normal"))},null,8,["title"])]),_:1},8,["title"]),t(a,{title:o.t("embeddedContent")},{default:l(()=>[t(d,{title:o.t("check"),"is-link":"",onClick:e[1]||(e[1]=s=>n.onClickShow("content"))},null,8,["title"])]),_:1},8,["title"]),t(p,{show:r.options.normal,onClick:e[2]||(e[2]=s=>n.onClickHide("normal"))},null,8,["show"]),t(p,{show:r.options.content,onClick:e[3]||(e[3]=s=>n.onClickHide("content"))},{default:l(()=>e[4]||(e[4]=[c("div",{class:"wrapper"},[c("div",{class:"block","catch:tap":"noop"})],-1)])),_:1},8,["show"])])}const U=C(u,[["render",w],["__scopeId","data-v-f0875d9f"]]);export{U as default};