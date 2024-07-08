import{s as S,u as _}from"./utils-Do31p4kb.js";import{a as C}from"./add-unit-Df5pRFBE.js";import{d as y,a as v}from"./press-component-HD2axD72.js";import{_ as f,o as p,c as m,a as x,y as b,x as z,v as P,f as e,n as o,u as i,t as s,r as u}from"./index-BZexHo5h.js";import"./validator-OjQp2SYe.js";function $(t){return S([{"border-color":t.borderColor,color:t.textColor,"font-size":C(t.fontSize)},t.customStyle])}const g={rootStyle:$},T={name:"PressDivider",options:{...y},props:{dashed:Boolean,hairline:Boolean,contentPosition:{type:String,default:""},fontSize:{type:String,default:""},borderColor:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:String,default:""},...v},computed:{dividerClass(){const{dashed:t,hairline:l,contentPosition:d,customClass:a}=this;return`${a} ${_.bem2("divider",[{dashed:t,hairline:l},d])}`},dividerStyle(){const{borderColor:t,textColor:l,fontSize:d,customStyle:a}=this;return g.rootStyle({borderColor:t,textColor:l,fontSize:d,customStyle:a})}}},B={class:"press-divider-index"};function k(t,l,d,a,h,c){return p(),m("div",B,[x("div",{class:z(c.dividerClass),style:P(c.dividerStyle)},[b(t.$slots,"default",{},void 0,!0)],6)])}const w=f(T,[["render",k],["__scopeId","data-v-f58c8d5a"]]),D={i18n:{"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式",customProps:"自定义属性",hairline:"使用 hairline",textColor:"文本颜色",borderColor:"border 颜色",textSize:"字体大小"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style",customProps:"Custom Props",hairline:"Hairline",textColor:"Text Color",borderColor:"Border Color",textSize:"Text Size"}},components:{PressDivider:w},data(){return{}},methods:{}},N={class:"demo-wrap"};function U(t,l,d,a,h,c){const r=u("press-divider"),n=u("demo-block");return p(),m("div",N,[e(n,{title:t.t("basicUsage")},{default:o(()=>[e(r)]),_:1},8,["title"]),e(n,{title:t.t("hairline")},{default:o(()=>[e(r,{hairline:""})]),_:1},8,["title"]),e(n,{title:t.t("dashed")},{default:o(()=>[e(r,{dashed:""})]),_:1},8,["title"]),e(n,{title:t.t("contentPosition")},{default:o(()=>[e(r,{"content-position":"center"},{default:o(()=>[i(s(t.t("text")),1)]),_:1}),e(r,{"content-position":"left"},{default:o(()=>[i(s(t.t("text")),1)]),_:1}),e(r,{"content-position":"right"},{default:o(()=>[i(s(t.t("text")),1)]),_:1})]),_:1},8,["title"]),e(n,{title:t.t("customProps")},{default:o(()=>[e(r,{"content-position":"center","text-color":"#1989fa"},{default:o(()=>[i(s(t.t("textColor")),1)]),_:1}),e(r,{"content-position":"center","border-color":"#1989fa"},{default:o(()=>[i(s(t.t("borderColor")),1)]),_:1}),e(r,{"content-position":"center","font-size":"18"},{default:o(()=>[i(s(t.t("textSize")),1)]),_:1})]),_:1},8,["title"]),e(n,{title:t.t("customStyle")},{default:o(()=>[e(r,{"content-position":"center","custom-style":"color: #1989fa; border-color: #1989fa; font-size: 18px;"},{default:o(()=>[i(s(t.t("text")),1)]),_:1})]),_:1},8,["title"])])}const W=f(D,[["render",U]]);export{W as default};
