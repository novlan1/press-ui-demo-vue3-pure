import{P as z}from"./press-notify-CQOdbfSN.js";import{_ as w,o as d,c as m,t as g,d as P,h as v,z as B,e,k as t,r as p,F as b,q as k,b as y,a as h}from"./index-C8vugXWi.js";import{a as D,P as q}from"./press-tabs-BHQDGARQ.js";import{P as N}from"./press-col-Bp2yxkjk.js";import{R as S}from"./color-DciZLlTH.js";import{C as R}from"./clipboard-mixin-DC8Ur67K.js";import"./press-transition-paiHDwmk.js";import"./system-Dv-dV8xN.js";import"./rect-Djv_hxPF.js";import"./event-msrAv3cV.js";import"./dialog-mixin-BkC47Jc3.js";import"./component-handler-BsZamlOU.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./press-sticky-nJRnhHg9.js";import"./bind-event-CGPWhxld.js";import"./touch-Djes3Zvx.js";import"./scroll-view-6X1FI7lO.js";import"./clipboard-web-DmyPAhWt.js";const T={name:"PressDemoBlockPlus",props:{card:{type:Boolean,default:!1},title:{type:String,default:""}}},E={class:"press-doc-demo-block"},F={key:0,class:"press-doc-demo-block__title"},L={key:1,class:"press-doc-demo-block__card"};function V(a,o,s,I,n,i){return d(),m("div",E,[s.title?(d(),m("h2",F,g(s.title),1)):P("",!0),s.card?(d(),m("div",L,[v(a.$slots,"default",{},void 0,!0)])):v(a.$slots,"default",{key:2},void 0,!0)])}const j=w(T,[["render",V],["__scopeId","data-v-7ce27ba0"]]),O={name:"press-icon-plus",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","alipay","wechat","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]},U={i18n:{"zh-CN":{copied:"复制成功",title:"图标列表",badge:"徽标提示",basic:"基础图标",outline:"线框风格",filled:"实底风格",demo:"用法示例",color:"图标颜色",size:"图标大小"},"en-US":{copied:"Copied",title:"Icon List",badge:"Show Badge",basic:"Basic",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}},components:{PressTabs:D,PressTab:q,PressCol:N,PressIconPlus:B,PressNotify:z,DemoBlockPlus:j},mixins:[R],options:{styleIsolation:"shared"},data(){return{RED:S,demoIcon:"chat-o",demoImage:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ce77489af93cb34c4b.png",icons:{basic:[],outline:[],filled:[]}}},mounted(){setTimeout(()=>{this.icons={...this.icons,...O||{}}},1e3)},methods:{copy(a,o={}){let s=`<press-icon-plus name="${a}"`;"dot"in o&&(s=`${s} ${o.dot?"dot":""}`),"badge"in o&&(s=`${s} badge="${o.badge}"`),"color"in o&&(s=`${s} color="${o.color}"`),"size"in o&&(s=`${s} size="${o.size}"`),s=`${s} />`,console.log("[tag] ",s),this.copyIconTag(s)}}},A={class:"demo-wrap demo-wrap--gray"};function M(a,o,s,I,n,i){const r=p("press-icon-plus"),c=p("press-col"),u=p("demo-block-plus"),f=p("press-tab"),C=p("press-tabs");return d(),m("div",A,[e(C,{"offset-top":a.offsetTop,sticky:"",swipeable:""},{default:t(()=>[e(f,{title:a.t("demo")},{default:t(()=>[e(u,{title:a.t("basicUsage")},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,onClick:o[0]||(o[0]=l=>i.copy(n.demoIcon))},null,8,["name"])]),_:1}),e(c,{span:6},{default:t(()=>[e(r,{name:n.demoImage,onClick:o[1]||(o[1]=l=>i.copy(n.demoImage))},null,8,["name"])]),_:1})]),_:1},8,["title"]),e(u,{title:a.t("badge")},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,dot:"",onClick:o[2]||(o[2]=l=>i.copy(n.demoIcon,{dot:!0}))},null,8,["name"])]),_:1}),e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,info:"9",onClick:o[3]||(o[3]=l=>i.copy(n.demoIcon,{badge:"9"}))},null,8,["name"])]),_:1}),e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,info:"99+",onClick:o[4]||(o[4]=l=>i.copy(n.demoIcon,{badge:"99+"}))},null,8,["name"])]),_:1})]),_:1},8,["title"]),e(u,{title:a.t("color")},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(r,{name:"cart-o",color:"#1989fa",onClick:o[5]||(o[5]=l=>i.copy("cart-o",{color:"#1989fa"}))})]),_:1}),e(c,{span:6},{default:t(()=>[e(r,{name:"fire-o",color:n.RED,onClick:o[6]||(o[6]=l=>i.copy("fire-o",{color:n.RED}))},null,8,["color"])]),_:1})]),_:1},8,["title"]),e(u,{title:a.t("size")},{default:t(()=>[e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,size:"40",onClick:o[7]||(o[7]=l=>i.copy(n.demoIcon,{size:"40"}))},null,8,["name"])]),_:1}),e(c,{span:6},{default:t(()=>[e(r,{name:n.demoIcon,size:"1rem",onClick:o[8]||(o[8]=l=>i.copy(n.demoIcon,{size:"3rem"}))},null,8,["name"])]),_:1})]),_:1},8,["title"])]),_:1},8,["title"]),e(f,{title:a.t("basic")},{default:t(()=>[(d(!0),m(b,null,k(n.icons.basic,l=>(d(),y(c,{key:l,span:6},{default:t(()=>[e(r,{name:l,onClick:_=>i.copy(l)},null,8,["name","onClick"]),h("span",null,g(l),1)]),_:2},1024))),128))]),_:1},8,["title"]),e(f,{title:a.t("outline")},{default:t(()=>[(d(!0),m(b,null,k(n.icons.outline,l=>(d(),y(c,{key:l,span:6},{default:t(()=>[e(r,{name:l,onClick:_=>i.copy(l)},null,8,["name","onClick"]),h("span",null,g(l),1)]),_:2},1024))),128))]),_:1},8,["title"]),e(f,{title:a.t("filled")},{default:t(()=>[(d(!0),m(b,null,k(n.icons.filled,l=>(d(),y(c,{key:l,span:6},{default:t(()=>[e(r,{name:l,onClick:_=>i.copy(l)},null,8,["name","onClick"]),h("span",null,g(l),1)]),_:2},1024))),128))]),_:1},8,["title"])]),_:1},8,["offset-top"])])}const re=w(U,[["render",M],["__scopeId","data-v-79f246db"]]);export{re as default};
