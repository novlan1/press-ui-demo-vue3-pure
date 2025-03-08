import{P as k}from"./press-card-U0s1_9nT.js";import{P as C}from"./press-cell-X7kLsl_B.js";import{_ as b,z as v,S as f,o as _,c as g,e,k as s,r as d,a as o,t as n}from"./index-DccXyPO9.js";import"./link-CZOkAvc-.js";import"./event-B_wIAy-T.js";const P={i18n:{"zh-CN":{content:"代码是写出来给人看的，附带能在机器上运行",subtitle:"副标题",description:"描述",noMargin:"没有外边距",cover:"封面图",customTitle:"自定义标题",actionBar:"操作栏",share:"分享",star:"点赞",comment:"评论"},"en-US":{content:"Content",subtitle:"SubTitle",description:"Description",noMargin:"No Margin",cover:"Cover",customTitle:"Custom Title",actionBar:"Action Bar",share:"Share",star:"Star",comment:"Comment"}},components:{PressCard:k,PressIconPlus:v,PressSwitch:f,PressCell:C},data(){return{cover:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/card-cover.jpeg",avatar:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"},checked:!0}},methods:{onClick(t){console.log(t)},actionsClick(t){this.onGTip(t)}}},y={class:"demo-wrap"},z={class:"press-body"},S={class:"press-body"},B={class:"press-body"},T={class:"press-body"},w={class:"press-body"},I={class:"press-body"},M={class:"card-actions"},N={class:"card-actions-item-text"},q={class:"card-actions-item-text"},D={class:"card-actions-item-text"},F={class:"press-body uni-mt-5"};function U(t,i,V,j,l,r){const a=d("PressCard"),c=d("demo-block"),p=d("PressIconPlus"),u=d("PressSwitch"),h=d("PressCell");return _(),g("div",y,[e(c,{title:t.t("basicUsage")},{default:s(()=>[e(a,null,{default:s(()=>[o("span",z,n(t.t("content")),1)]),_:1})]),_:1},8,["title"]),e(c,{title:t.t("title")},{default:s(()=>[e(a,{title:t.t("title"),extra:t.t("description")},{default:s(()=>[o("span",S,n(t.t("content")),1)]),_:1},8,["title","extra"])]),_:1},8,["title"]),e(c,{title:t.t("subtitle")},{default:s(()=>[e(a,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),thumbnail:l.avatar,onClick:r.onClick},{default:s(()=>[o("span",B,n(t.t("content")),1)]),_:1},8,["title","sub-title","extra","thumbnail","onClick"])]),_:1},8,["title"]),e(c,{title:t.t("noMargin")},{default:s(()=>[e(a,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),"is-full":!0,thumbnail:l.avatar},{default:s(()=>[o("span",T,n(t.t("content")),1)]),_:1},8,["title","sub-title","extra","thumbnail"])]),_:1},8,["title"]),e(c,{title:t.t("cover")},{default:s(()=>[e(a,{cover:l.cover,onClick:r.onClick},{default:s(()=>[o("span",w,n(t.t("content")),1)]),_:1},8,["cover","onClick"])]),_:1},8,["title"]),e(c,{title:t.t("actionBar")},{default:s(()=>[e(a,{onClick:r.onClick},{actions:s(()=>[o("div",M,[o("div",{class:"card-actions-item",onClick:i[0]||(i[0]=m=>r.actionsClick(t.t("share")))},[e(p,{name:"share-o",size:"18",color:"#999"}),o("span",N,n(t.t("share")),1)]),o("div",{class:"card-actions-item",onClick:i[1]||(i[1]=m=>r.actionsClick(t.t("star")))},[e(p,{name:"like-o",size:"18",color:"#999"}),o("span",q,n(t.t("star")),1)]),o("div",{class:"card-actions-item",onClick:i[2]||(i[2]=m=>r.actionsClick(t.t("comment")))},[e(p,{name:"chat-o",size:"18",color:"#999"}),o("span",D,n(t.t("comment")),1)])])]),default:s(()=>[o("span",I,n(t.t("content")),1)]),_:1},8,["onClick"])]),_:1},8,["title"]),e(c,{title:t.t("customTitle")},{default:s(()=>[e(a,{padding:"10px 0"},{title:s(()=>[e(h,{title:t.t("title"),clickable:"",onClick:i[4]||(i[4]=m=>l.checked=!l.checked)},{"right-icon":s(()=>[e(u,{size:"22px",checked:l.checked,onChange:i[3]||(i[3]=m=>l.checked=!l.checked)},null,8,["checked"])]),_:1},8,["title"])]),default:s(()=>[o("span",F,n(t.t("content")),1)]),_:1})]),_:1},8,["title"])])}const K=b(P,[["render",U],["__scopeId","data-v-43b4b4d3"]]);export{K as default};
