import{P as k}from"./press-card-DwaSHtEF.js";import{P as C}from"./press-cell-B51DLGhM.js";import{_,C as f,V as b,o as v,c as g,f as e,l as s,r as d,a as o,t as n}from"./index-F6Gg9UHQ.js";import"./link-CpGN79EY.js";import"./event-BwRIw3Q8.js";const y={i18n:{"zh-CN":{content:"代码是写出来给人看的，附带能在机器上运行",subtitle:"副标题",description:"描述",noMargin:"没有外边距",cover:"封面图",customTitle:"自定义标题",actionBar:"操作栏",share:"分享",star:"点赞",comment:"评论"},"en-US":{content:"Content",subtitle:"SubTitle",description:"Description",noMargin:"No Margin",cover:"Cover",customTitle:"Custom Title",actionBar:"Action Bar",share:"Share",star:"Star",comment:"Comment"}},components:{PressCard:k,PressIconPlus:f,PressSwitch:b,PressCell:C},data(){return{cover:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/card-cover.jpeg",avatar:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"},checked:!0}},methods:{onClick(t){console.log(t)},actionsClick(t){this.onGTip(t)}}},z={class:"demo-wrap"},B={class:"press-body"},P={class:"press-body"},S={class:"press-body"},T={class:"press-body"},w={class:"press-body"},M={class:"press-body"},N={class:"card-actions"},I={class:"card-actions-item-text"},V={class:"card-actions-item-text"},q={class:"card-actions-item-text"},D={class:"press-body uni-mt-5"};function F(t,i,U,j,l,r){const a=d("press-card"),c=d("demo-block"),m=d("press-icon-plus"),u=d("press-switch"),h=d("press-cell");return v(),g("div",z,[e(c,{title:t.t("basicUsage")},{default:s(()=>[e(a,null,{default:s(()=>[o("span",B,n(t.t("content")),1)]),_:1})]),_:1},8,["title"]),e(c,{title:t.t("title")},{default:s(()=>[e(a,{title:t.t("title"),extra:t.t("description")},{default:s(()=>[o("span",P,n(t.t("content")),1)]),_:1},8,["title","extra"])]),_:1},8,["title"]),e(c,{title:t.t("subtitle")},{default:s(()=>[e(a,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),thumbnail:l.avatar,onClick:r.onClick},{default:s(()=>[o("span",S,n(t.t("content")),1)]),_:1},8,["title","sub-title","extra","thumbnail","onClick"])]),_:1},8,["title"]),e(c,{title:t.t("noMargin")},{default:s(()=>[e(a,{title:t.t("title"),"sub-title":t.t("subtitle"),extra:t.t("description"),"is-full":!0,thumbnail:l.avatar},{default:s(()=>[o("span",T,n(t.t("content")),1)]),_:1},8,["title","sub-title","extra","thumbnail"])]),_:1},8,["title"]),e(c,{title:t.t("cover")},{default:s(()=>[e(a,{cover:l.cover,onClick:r.onClick},{default:s(()=>[o("span",w,n(t.t("content")),1)]),_:1},8,["cover","onClick"])]),_:1},8,["title"]),e(c,{title:t.t("actionBar")},{default:s(()=>[e(a,{onClick:r.onClick},{actions:s(()=>[o("div",N,[o("div",{class:"card-actions-item",onClick:i[0]||(i[0]=p=>r.actionsClick(t.t("share")))},[e(m,{name:"share-o",size:"18",color:"#999"}),o("span",I,n(t.t("share")),1)]),o("div",{class:"card-actions-item",onClick:i[1]||(i[1]=p=>r.actionsClick(t.t("star")))},[e(m,{name:"like-o",size:"18",color:"#999"}),o("span",V,n(t.t("star")),1)]),o("div",{class:"card-actions-item",onClick:i[2]||(i[2]=p=>r.actionsClick(t.t("comment")))},[e(m,{name:"chat-o",size:"18",color:"#999"}),o("span",q,n(t.t("comment")),1)])])]),default:s(()=>[o("span",M,n(t.t("content")),1)]),_:1},8,["onClick"])]),_:1},8,["title"]),e(c,{title:t.t("customTitle")},{default:s(()=>[e(a,{padding:"10px 0"},{title:s(()=>[e(h,{title:t.t("title"),clickable:"",onClick:i[4]||(i[4]=p=>l.checked=!l.checked)},{"right-icon":s(()=>[e(u,{size:"22px",checked:l.checked,onChange:i[3]||(i[3]=p=>l.checked=!l.checked)},null,8,["checked"])]),_:1},8,["title"])]),default:s(()=>[o("span",D,n(t.t("content")),1)]),_:1})]),_:1},8,["title"])])}const K=_(y,[["render",F],["__scopeId","data-v-00693af2"]]);export{K as default};