import{P as p}from"./press-swipe-cell-CMZTKZDt.js";import{_ as d,o as C,c as m,f as n,n as o,a as s,t as l,r as c}from"./index-DU6LSpJC.js";import"./press-component-BYCAM0Tw.js";import"./validator-CMi1mmGD.js";import"./touch-Djes3Zvx.js";import"./number-CU9l-NjU.js";const _={i18n:{"zh-CN":{select:"选择",delete:"删除",collect:"收藏",title:"单元格",confirm:"确定删除吗？",cardTitle:"商品标题",beforeClose:"异步关闭",customContent:"自定义内容"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}},components:{PressSwipeCell:p},data(){return{asyncClose:!1}},methods:{onClick(e){console.log("onClick.val",e),this.onGTip(`click ${e}`)},onClose(...e){console.log("onClose.args",e),this.onGTip("close")},onOpen(...e){console.log("onOpen.args",e),this.onGTip("open")}}},f={class:"demo-wrap"},h={class:"left"},u={class:"content"},g={class:"right"};function k(e,w,b,y,i,t){const r=c("press-swipe-cell"),a=c("demo-block");return C(),m("div",f,[n(a,{title:e.t("basicUsage"),"section-style":"margin:0;"},{default:o(()=>[n(r,{"right-width":65,"left-width":65,"async-close":i.asyncClose,onClick:t.onClick,onClose:t.onClose,onOpen:t.onOpen},{left:o(()=>[s("div",h,l(e.t("select")),1)]),right:o(()=>[s("div",g,l(e.t("delete")),1)]),default:o(()=>[s("div",u,l(e.t("content")),1)]),_:1},8,["async-close","onClick","onClose","onOpen"])]),_:1},8,["title"])])}const N=d(_,[["render",k],["__scopeId","data-v-eb12ff4b"]]);export{N as default};