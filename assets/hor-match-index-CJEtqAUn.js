import{_ as B,r as _,z as A,A as T,o as r,c as i,f as S,n as b,F as M,i as P,b as v,a as o,w as C,x as w,t as p,u as O,p as G,e as j,d as I,v as U,y as D,a2 as x}from"./index-BZexHo5h.js";import{M as W}from"./press-hor-match-header-PHS3Tspd.js";import{a as Y,P as J}from"./press-tab-Dp7ApOrM.js";import{P as K}from"./press-list-CktKjk9k.js";import{P as Q}from"./press-empty-CgONxIVn.js";import"./press-info-BWsAQQHi.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-sticky-D4FnAbAT.js";import"./rect-ZZRvyvMD.js";import"./scroll-DZ_Dh06R.js";import"./system-BAdrsxg_.js";import"./validator-OjQp2SYe.js";import"./bind-event-DndjT7K3.js";import"./event-Dm-SpHU4.js";import"./support-passive-CNRHRm4O.js";import"./press-component-HD2axD72.js";import"./touch-Djes3Zvx.js";import"./relation-Cl7c7lz0.js";import"./parent-map-CSroF5oj.js";import"./press-loading-plus-Df-tLDhD.js";import"./press-icon-D8DJajcL.js";const X={props:{bannerList:{type:Array,default:()=>[],required:!1},bannerReportData:{type:Object,default:()=>({})}},emits:["clickBanner"],data(){return{}},methods:{clickBanner(e,t){this.$emit("clickBanner",e,t)}}},Z={class:"press-banner"},ee=["src","onClick"];function te(e,t,s,g,c,a){const h=_("swiper-item"),n=_("swiper"),l=A("treport");return T((r(),i("div",Z,[S(n,{class:"press-banner__swiper",autoplay:!0,circular:!0,"indicator-dots":!0},{default:b(()=>[(r(!0),i(M,null,P(s.bannerList,(d,k)=>(r(),v(h,{key:k},{default:b(()=>[o("img",{src:d,class:"press-banner__swiper__img",onClick:C(L=>a.clickBanner(d,k),["stop"])},null,8,ee)]),_:2},1024))),128))]),_:1})])),[[l,s.bannerReportData]])}const ae=B(X,[["render",te],["__scopeId","data-v-e7552953"]]),se={props:{isBrandSwiper:{type:Boolean,default:!1},brandList:{type:Array,default:()=>[],required:!1}},emits:["clickBrand"],data(){return{}},methods:{clickBrand(e,t){this.$emit("clickBrand",e,t)}}},re={class:"press-brand__list"},oe={class:"press-brand__item__box"},ie=["src"],ne={class:"press-brand__name"},ce=["onClick"],le=["src"],de={class:"press-brand__name"};function he(e,t,s,g,c,a){const h=_("swiper-item"),n=_("swiper"),l=A("treport");return r(),i("div",{class:w(["press-brand",{"press-brand--task":s.isBrandSwiper}])},[o("div",{class:w(["press-brand__title",{"press-brand__title--task":s.isBrandSwiper}])},null,2),o("div",re,[s.isBrandSwiper?(r(),v(n,{key:0,class:"press-brand__swiper",autoplay:!0,circular:!0,"display-multiple-items":"4"},{default:b(()=>[(r(!0),i(M,null,P(s.brandList,(d,k)=>(r(),v(h,{key:k,class:"press-brand__swiper-item"},{default:b(()=>[o("div",oe,[o("img",{src:d.img,class:"press-brand__img"},null,8,ie),o("div",ne,p(d.name),1)])]),_:2},1024))),128))]),_:1})):(r(!0),i(M,{key:1},P(s.brandList,(d,k)=>T((r(),i("div",{key:k,class:"press-brand__item",onClick:L=>a.clickBrand(d,k)},[o("img",{src:d.img,class:"press-brand__img"},null,8,le),o("div",de,p(d.name),1)],8,ce)),[[l,d.reportData]])),128))])],2)}const me=B(se,[["render",he],["__scopeId","data-v-ff970292"]]),pe={props:{reportList:{type:Array,default:()=>[],required:!1}},emits:["clickReport"],data(){return{}},methods:{clickReport(e,t){this.$emit("clickReport",e,t)}}},_e=e=>(G("data-v-99b9369c"),e=e(),j(),e),ue={class:"press-report"},fe=_e(()=>o("div",{class:"press-report__icon"},null,-1)),ke=["onClick"],be={class:"press-report__name"},ve={class:"press-report__award"};function ge(e,t,s,g,c,a){const h=_("swiper-item"),n=_("swiper");return r(),i("div",ue,[fe,S(n,{class:"press-report__swiper",autoplay:!0,circular:!0,vertical:!0},{default:b(()=>[(r(!0),i(M,null,P(s.reportList,(l,d)=>(r(),v(h,{key:d},{default:b(()=>[o("div",{class:"press-report__item",onClick:C(k=>a.clickReport(l,d),["stop"])},[o("div",be,p(l.name),1),O(" 已获得 "),o("div",ve,p(l.award),1)],8,ke)]),_:2},1024))),128))]),_:1})])}const ye=B(pe,[["render",ge],["__scopeId","data-v-99b9369c"]]);function E(){return{props:{matchInfo:{type:Object,default:()=>({}),required:!1},popoverAwardIndex:{type:Array,default:()=>[-1,-1,-1]},popoverTitle:{type:String,default:""},popoverContent:{type:String,default:""},showPopover:{type:Boolean,default:!1},popoverRotate:{type:Boolean,default:!1}},data(){return{}},computed:{awardIndex(){const e=this.popoverAwardIndex[2];return e??-1}},methods:{clickPrize(){this.$emit("clickPrize")},onShowPopover(e,t){this.$emit("onShowPopover",e,t)},closePopover(){this.$emit("closePopover")},clickMatchButton(){this.$emit("clickMatchButton",this.matchInfo)},clickMatch(){this.$emit("clickMatch",this.matchInfo)}}}}const we={mixins:[E()]},Ie={class:"press-match__left"},Me={class:"press-match__name"},Pe={class:"press-match__name__desc"},Ce={key:0,class:"press-match__award__tag"},Se={class:"press-match__awards"},Be={class:"press-match__award__type"},Le={class:"press-match__award__type__name"},Te=["src","onClick"],ze={class:"press-match__award__name"},Ae=["src"],Re={class:"press-match__right"},Ne=["src"],De={class:"press-match__time"};function Fe(e,t,s,g,c,a){const h=A("treport");return T((r(),i("div",{class:"press-match",onClick:t[2]||(t[2]=C((...n)=>e.clickMatch&&e.clickMatch(...n),["stop"]))},[o("div",Ie,[o("div",Me,[o("p",Pe,p(e.matchInfo.matchName),1),e.matchInfo.tag?(r(),i("div",Ce,[o("p",null,p(e.matchInfo.tag),1)])):I("",!0)]),o("div",Se,[e.matchInfo.awardList&&e.matchInfo.awardList.length?(r(!0),i(M,{key:0},P(e.matchInfo.awardList,(n,l)=>(r(),i("div",{key:l,class:"press-match__award"},[o("div",Be,[o("p",Le,p(n.type),1)]),o("img",{src:n.img,alt:"award-img",class:"press-match__award__img",onClick:C(d=>e.clickPrize(n,l),["stop"])},null,8,Te),o("p",ze,p(n.name),1)]))),128)):(r(),i("img",{key:1,src:e.matchInfo.defaultAwardImg||"https://image-1251917893.file.myqcloud.com/Esports/hor/home/default-reward.png",class:"default-award",onClick:t[0]||(t[0]=C((...n)=>e.clickPrize&&e.clickPrize(...n),["stop"]))},null,8,Ae))])]),o("div",Re,[o("img",{src:e.matchInfo.brandImg,alt:"brandImg",class:"press-match__right__img"},null,8,Ne),o("div",De,p(e.matchInfo.matchDesc),1),T((r(),i("div",{class:w(["press-match__btn",{"press-match__btn--sign":e.matchInfo.isNotStart||e.matchInfo.btnPrimary,"press-match__btn--end":e.matchInfo.isEnd||e.matchInfo.btnSecondary||e.matchInfo.isIng}]),onClick:t[1]||(t[1]=C((...n)=>e.clickMatchButton&&e.clickMatchButton(...n),["stop"]))},[O(p(e.matchInfo.btnTxt),1)],2)),[[h,e.matchInfo.buttonReportData]])]),e.matchInfo.labelText?(r(),i("div",{key:0,class:w({"press-match__signed__tag":e.matchInfo.labelPrimary,"press-match__tag":e.matchInfo.labelSecondary})},p(e.matchInfo.labelText),3)):I("",!0)])),[[h,e.matchInfo.reportData]])}const Oe=B(we,[["render",Fe],["__scopeId","data-v-6aaf638f"]]),Ee={mixins:[E()]},qe={key:0,class:"press-match__brand",alt:"brandImg"},Ve={class:"press-match__main"},He={class:"press-match__left"},$e={class:"press-match__name"},Ge={class:"press-match__name__desc"},je={key:0,class:"press-match__award__tag"},Ue={class:"press-match__award__type"},xe=["src","onClick"],We={class:"press-match__award__name"},Ye=["src"],Je={class:"press-match__right"},Ke={class:"press-match__time"},Qe={key:1,class:"press-match__loc"};function Xe(e,t,s,g,c,a){const h=A("lazy"),n=A("treport");return T((r(),i("div",{class:"press-match",onClick:t[2]||(t[2]=C((...l)=>e.clickMatch&&e.clickMatch(...l),["stop"]))},[e.matchInfo.banner?T((r(),i("img",qe,null,512)),[[h,e.matchInfo.banner]]):I("",!0),o("div",Ve,[o("div",He,[o("div",$e,[o("p",Ge,p(e.matchInfo.matchName),1),e.matchInfo.tag?(r(),i("div",je,[o("p",null,p(e.matchInfo.tag),1)])):I("",!0)]),o("div",{class:w(["press-match__awards",{"press-match__awards--empty":!e.matchInfo.awardList.length}])},[e.matchInfo.awardList&&e.matchInfo.awardList.length?(r(!0),i(M,{key:0},P(e.matchInfo.awardList,(l,d)=>(r(),i("div",{key:d,class:"press-match__award"},[o("div",Ue,[o("p",null,p(l.type),1)]),o("img",{src:l.img,alt:"award-img",onClick:C(k=>e.clickPrize(l,d),["stop"])},null,8,xe),o("p",We,p(l.name),1)]))),128)):(r(),i("img",{key:1,src:e.matchInfo.defaultAwardImg||"https://image-1251917893.file.myqcloud.com/Esports/hor/home/default-reward.png",class:"default-award",onClick:t[0]||(t[0]=C((...l)=>e.clickPrize&&e.clickPrize(...l),["stop"]))},null,8,Ye))],2)]),o("div",Je,[o("div",Ke,p(e.matchInfo.matchDesc),1),T((r(),i("div",{class:w(["press-match__btn",{"press-match__btn--sign":e.matchInfo.isNotStart||e.matchInfo.btnPrimary,"press-match__btn--end":e.matchInfo.isEnd||e.matchInfo.btnSecondary||e.matchInfo.isIng}]),onClick:t[1]||(t[1]=C((...l)=>e.clickMatchButton&&e.clickMatchButton(...l),["stop"]))},[O(p(e.matchInfo.btnTxt),1)],2)),[[n,e.matchInfo.buttonReportData]])])]),e.matchInfo.matchLoc?(r(),i("div",Qe," 距离"+p(e.matchInfo.matchLoc),1)):I("",!0),e.matchInfo.labelText?(r(),i("div",{key:2,class:w({"press-match__signed__tag":e.matchInfo.labelPrimary,"press-match__tag":e.matchInfo.labelSecondary})},p(e.matchInfo.labelText),3)):I("",!0)])),[[n,e.matchInfo.reportData]])}const Ze=B(Ee,[["render",Xe],["__scopeId","data-v-5c8432d1"]]),et={props:{list:{type:Array,default:()=>[]},current:{type:[Number,String],default:"-1"}},emits:["change"],data(){return{}},methods:{sidebarSwitch(e,t){this.$emit("change",e,t)}}},tt={class:"press-index__sidebar"},at=["onClick"];function st(e,t,s,g,c,a){return r(),i("div",tt,[(r(!0),i(M,null,P(s.list,(h,n)=>(r(),i("div",{key:n,class:w(["press-index__sidebar__item",s.current==n?"sidebar-on":""]),onClick:l=>a.sidebarSwitch(h,n)},p(h.label),11,at))),128)),o("div",{class:"press-index__sidebar__active",style:U({transform:`translateY(${s.current*.88}rem)`})},null,4)])}const rt=B(et,[["render",st],["__scopeId","data-v-48eeebf3"]]),ot={name:"PressHorMatchIndex",components:{Banner:ae,Brand:me,Report:ye,MatchItem:Oe,Sidebar:rt,OfflineMatchItem:Ze,MatchHeader:W,PressTab:Y,PressTabs:J,PressList:K},props:{title:{type:String,default:"商户赛"},showFeedback:{type:Boolean,default:!1},showFeedBackDot:{type:Boolean,default:!1},showMessageDot:{type:Boolean,default:!1},showPersonDot:{type:Boolean,default:!1},bannerList:{type:Array,default:()=>[],required:!1},brandList:{type:Array,default:()=>[],required:!1},sidebarList:{type:Array,default:()=>[]},immediateCheck:{type:Boolean,default:!1},finishedText:{type:String,default:"没有更多了"},finishedStyle:{type:String,default:""},loadingStyle:{type:String,default:""},loadingSize:{type:String,default:"20px"},bannerReportData:{type:Object,default:()=>({})},reportList:{type:Array,default:()=>[]},isBrandSwiper:{type:Boolean,default:!1}},options:{virtualHost:!0},emits:["changeTab","clickMessage","clickPerson","clickSidebar","back","clickBanner","clickBrand","clickMatchButton","clickMatch","clickPrize","loadMore"],data(){return{sidebarIndex:0,curTabIndexMap:{0:0,1:0,2:0,3:0},popoverAwardIndex:[-1,-1,-1],popoverTitle:"",popoverContent:""}},computed:{curSidebar(){return this.sidebarList[this.sidebarIndex]||{}},curTabIndex(){return this.curTabIndexMap[this.sidebarIndex]||0},curMatchInfo(){const{matchMap:e={}}=this.curSidebar;return e[this.curTabIndex]||{}},curMatchList(){return this.curMatchInfo.list||[]},curLoading:{get(){return this.curMatchInfo.loading},set(e){this.curMatchInfo.loading=e}},curFinished(){return this.curMatchInfo.finished},curTabList(){return this.curSidebar.tabs||[]}},watch:{},mounted(){this.$nextTick(()=>{this.sidebarIndex==1&&setTimeout(()=>{this.$refs.tabs.resize()},100)})},methods:{changeTab(e){this.curTabIndexMap[this.sidebarIndex]=e.index,this.closePopover(),this.$emit("changeTab",e)},clickMessage(){this.closePopover(),this.$emit("clickMessage")},clickFeedback(){this.closePopover(),this.$emit("clickFeedback")},clickPerson(){this.closePopover(),this.$emit("clickPerson")},sidebarSwitch(e,t){this.$emit("clickSidebar",e,t,this.curTabIndex),e.mode!=="link"&&(this.closePopover(),this.sidebarIndex=t)},back(){this.closePopover(),this.$emit("back")},clickBanner(e,t){this.closePopover(),this.$emit("clickBanner",e,t)},clickBrand(e,t){this.closePopover(),this.$emit("clickBrand",e,t)},clickMatchButton(e,t){this.closePopover(),this.$emit("clickMatchButton",e,t)},clickMatch(e,t){this.closePopover(),this.$emit("clickMatch",e,t)},clickPrize(e,t){this.$emit("clickPrize",e,t)},onLoadMore(){this.$emit("loadMore",this.sidebarIndex,this.curTabIndex)},onShowPopover(e,t,s){var g,c;this.popoverAwardIndex=[this.curSidebar.mode,s,t],this.popoverTitle=((g=e.popover)==null?void 0:g.title)||e.name,this.popoverContent=((c=e.popover)==null?void 0:c.content)||e.name},closePopover(){this.popoverAwardIndex=[-1,-1,-1]},getShowPopover(e,t){const{popoverAwardIndex:s}=this;return s[0]===e&&s[1]===t},clickReport(e,t){this.$emit("clickReport",e,t)}}},it={class:"press-index"},nt={class:"press-index__header__middle"},ct={class:"press-index__header__right"},lt={class:"press-index__content"},dt={class:"press-index__recommend__list"},ht={key:1,class:"press-index__online"},mt={class:"press-index__online__list"},pt={key:2,class:"press-index__offline"},_t={class:"press-index__offline__list"};function ut(e,t,s,g,c,a){const h=_("MatchHeader"),n=_("Sidebar"),l=_("Report"),d=_("Banner"),k=_("Brand"),L=_("MatchItem"),N=_("PressList"),q=_("press-tab"),V=_("press-tabs"),H=_("OfflineMatchItem");return r(),i("div",it,[S(h,{onBack:a.back},{middle:b(()=>[o("div",nt,p(s.title),1)]),right:b(()=>[o("div",ct,[s.showFeedback?(r(),i("div",{key:0,class:w(["press-index__header__feedback",s.showFeedBackDot?"press-red-dot":""]),onClick:t[0]||(t[0]=(...m)=>a.clickFeedback&&a.clickFeedback(...m))},null,2)):I("",!0),o("div",{class:w(["press-index__header__message",s.showMessageDot?"press-red-dot":""]),onClick:t[1]||(t[1]=(...m)=>a.clickMessage&&a.clickMessage(...m))},null,2),o("div",{class:w(["press-index__header__home",s.showPersonDot?"press-red-dot":""]),onClick:t[2]||(t[2]=(...m)=>a.clickPerson&&a.clickPerson(...m))},null,2)])]),_:1},8,["onBack"]),o("div",lt,[S(n,{list:s.sidebarList,current:c.sidebarIndex,onChange:a.sidebarSwitch},null,8,["list","current","onChange"]),a.curSidebar.mode==="recommend"?(r(),i("div",{key:0,class:w(["press-index__recommend",{"press-index__recommend--top":!s.reportList||!s.reportList.length}])},[s.reportList&&s.reportList.length?(r(),v(l,{key:0,"report-list":s.reportList,onClickReport:a.clickReport},null,8,["report-list","onClickReport"])):I("",!0),S(N,{modelValue:a.curLoading,"onUpdate:modelValue":t[3]||(t[3]=m=>a.curLoading=m),finished:a.curFinished,"finished-text":a.curMatchList.length?s.finishedText:"","immediate-check":s.immediateCheck,"loading-style":s.loadingStyle,"loading-size":s.loadingSize,"finished-style":s.finishedStyle,onLoad:a.onLoadMore},{default:b(()=>[o("div",dt,[S(d,{"banner-list":s.bannerList,"banner-report-data":s.bannerReportData,onClickBanner:a.clickBanner},null,8,["banner-list","banner-report-data","onClickBanner"]),s.brandList&&s.brandList.length?(r(),v(k,{key:0,"brand-list":s.brandList,"is-brand-swiper":s.isBrandSwiper,onClickBrand:a.clickBrand},null,8,["brand-list","is-brand-swiper","onClickBrand"])):I("",!0),a.curMatchList.length?(r(!0),i(M,{key:1},P(a.curMatchList,(m,u)=>(r(),v(L,{key:u,"match-info":m,"popover-award-index":c.popoverAwardIndex,"popover-title":c.popoverTitle,"popover-content":c.popoverContent,"show-popover":a.getShowPopover("recommend",u),"match-index":u,onOnShowPopover:(f,y)=>a.onShowPopover(f,y,u),onClosePopover:a.closePopover,onClickMatchButton:f=>a.clickMatchButton(m,u,"recommend"),onClickMatch:f=>a.clickMatch(m,u,"recommend"),onClickPrize:f=>a.clickPrize(m,u,"recommend")},null,8,["match-info","popover-award-index","popover-title","popover-content","show-popover","match-index","onOnShowPopover","onClosePopover","onClickMatchButton","onClickMatch","onClickPrize"]))),128)):I("",!0)])]),_:1},8,["modelValue","finished","finished-text","immediate-check","loading-style","loading-size","finished-style","onLoad"])],2)):a.curSidebar.mode==="online"?(r(),i("div",ht,[a.curTabList.length?(r(),v(V,{key:0,ref:"tabs",active:a.curTabIndex,animated:"",swipeable:"",mode:"hor","line-width":79,onChange:a.changeTab},{default:b(()=>[(r(!0),i(M,null,P(a.curTabList,(m,u)=>(r(),v(q,{key:u,title:m.label},{default:b(()=>[a.curMatchList.length?(r(),v(N,{key:0,modelValue:a.curLoading,"onUpdate:modelValue":t[4]||(t[4]=f=>a.curLoading=f),finished:a.curFinished,"finished-text":s.finishedText,"immediate-check":s.immediateCheck,"loading-style":s.loadingStyle,"loading-size":s.loadingSize,"finished-style":s.finishedStyle,onLoad:a.onLoadMore},{default:b(()=>[o("div",mt,[(r(!0),i(M,null,P(a.curMatchList,(f,y)=>(r(),v(L,{key:y,"match-info":f,"match-index":y,"popover-award-index":c.popoverAwardIndex,"popover-title":c.popoverTitle,"popover-content":c.popoverContent,"show-popover":a.getShowPopover("online",y),"popover-rotate":y<2,onOnShowPopover:(R,$)=>a.onShowPopover(R,$,y),onClosePopover:a.closePopover,onClickMatchButton:R=>a.clickMatchButton(f,y,"online"),onClickMatch:R=>a.clickMatch(f,y,"online"),onClickPrize:R=>a.clickPrize(f,y,"online")},null,8,["match-info","match-index","popover-award-index","popover-title","popover-content","show-popover","popover-rotate","onOnShowPopover","onClosePopover","onClickMatchButton","onClickMatch","onClickPrize"]))),128))])]),_:1},8,["modelValue","finished","finished-text","immediate-check","loading-style","loading-size","finished-style","onLoad"])):D(e.$slots,"empty",{key:1},void 0,!0)]),_:2},1032,["title"]))),128))]),_:3},8,["active","onChange"])):D(e.$slots,"empty",{key:1},void 0,!0)])):a.curSidebar.mode==="offline"?(r(),i("div",pt,[a.curMatchList.length?(r(),v(N,{key:0,modelValue:a.curLoading,"onUpdate:modelValue":t[5]||(t[5]=m=>a.curLoading=m),finished:a.curFinished,"immediate-check":s.immediateCheck,"finished-text":s.finishedText,"finished-style":s.finishedStyle,"loading-style":s.loadingStyle,"loading-size":s.loadingSize,onLoad:a.onLoadMore},{default:b(()=>[o("div",_t,[(r(!0),i(M,null,P(a.curMatchList,(m,u)=>(r(),v(H,{key:u,"match-info":m,"popover-award-index":c.popoverAwardIndex,"popover-title":c.popoverTitle,"popover-content":c.popoverContent,"show-popover":a.getShowPopover("offline",u),onOnShowPopover:(f,y)=>a.onShowPopover(f,y,u),onClosePopover:a.closePopover,onClickMatchButton:f=>a.clickMatchButton(m,u,"offline"),onClickMatch:f=>a.clickMatch(m,u,"offline"),onClickPrize:f=>a.clickPrize(m,u,"offline")},null,8,["match-info","popover-award-index","popover-title","popover-content","show-popover","onOnShowPopover","onClosePopover","onClickMatchButton","onClickMatch","onClickPrize"]))),128))])]),_:1},8,["modelValue","finished","immediate-check","finished-text","finished-style","loading-style","loading-size","onLoad"])):D(e.$slots,"empty",{key:1},void 0,!0)])):I("",!0)])])}const ft=B(ot,[["render",ut],["__scopeId","data-v-72630e6e"]]),kt=Array.from({length:3}).map((e,t)=>({img:"https://image-1251917893.file.myqcloud.com/Esports/admin/img/prize-1.png",name:`小乔-${t}`,type:"冠军奖"})),F=Array.from({length:6}).map((e,t)=>{const s=t%3===0,g=t%3===1,c=t%3===2;let a="",h="",n=!1,l=!1,d="",k=!1,L=!1;return s?(h="已结束",l=!0,a="报名有奖",d="已报名",k=!0):g?(h="进行中",l=!0,a="参赛有奖",d="已截止",L=!0):c&&(h="去报名",n=!0),{banner:"https://image-1251917893.file.myqcloud.com/Esports/hor/default-bg.png",brandImg:"https://image-1251917893.file.myqcloud.com/Esports/new/admin/icon-wzry.jpg",matchName:"奈雪新茶饮总决赛",awardList:t%2===0?kt:[],matchDesc:"09.01 15:00 / 线上赛",matchType:"线上赛",btnTxt:h,btnPrimary:n,btnSecondary:l,tag:a,labelText:d,labelPrimary:k,labelSecondary:L,matchLoc:t%2===0?"":"350m"}}),z={0:F.map(e=>({...e,matchName:`0-${e.matchName}`})),1:F.map(e=>({...e,matchName:`1-${e.matchName}`})),2:F.map(e=>({...e,matchName:`2-${e.matchName}`}))},bt=Array.from({length:7}).map(()=>({img:"https://igame-10037599.cos.ap-shanghai.myqcloud.com/18eaca68-1e8a-14db-e4d4-d792c0e55113.jpeg",name:"一行最多五个汉子超过五个隐藏"})),vt=["https://igame-10037599.cos.ap-shanghai.myqcloud.com/1a9a3313-e59b-dd49-dc93-5de0e020b085","https://igame-10037599.cos.ap-shanghai.myqcloud.com/1a9a3313-e59b-dd49-dc93-5de0e020b085","https://igame-10037599.cos.ap-shanghai.myqcloud.com/1a9a3313-e59b-dd49-dc93-5de0e020b085"],gt=[{name:"玩家名字",award:"奖励名字"},{name:"玩家名字",award:"奖励名字"},{name:"玩家名字",award:"奖励名字"},{name:"玩家名字",award:"奖励名字"}],yt=[{label:"精选赛事",value:0},{label:"报名有奖",value:1},{label:"参赛有奖",value:2},{label:"空状态",value:3}],wt={components:{PressHorMatchIndex:ft,PressEmpty:Q},data(){return{BANNER_LIST:vt,BRAND_LIST:bt,showFeedback:!0,REPORT_LIST:gt,isBrandSwiper:!1,sidebarList:[{label:"推荐",value:"",mode:"recommend",matchMap:{0:{list:z[0],finished:!1,loading:!1}}},{label:"线上赛",value:"",mode:"online",tabs:yt,matchMap:{...Object.keys(z).map(e=>({list:z[e],finished:!1,loading:!1})),3:{list:[],finished:!1,loading:!1}}},{label:"线下赛",value:"",mode:"offline",matchMap:{0:{list:z[0],finished:!1,loading:!1}}},{label:"链接",value:"",mode:"link",link:"https://baidu.com"}]}},methods:{onBack(){x.call(this)},clickMessage(){this.onGTip("message")},clickFeedback(){this.onGTip("clickFeedback")},clickPerson(){this.onGTip("home")},onClickSidebar(e){e.link&&(window.location.href=e.link)},clickReport(e,t){this.onGTip(`[clickReport] ${t}`),console.log("[clickReport]",e,t)},loadMore(e,t){const s=this.sidebarList[e].matchMap[t];setTimeout(()=>{s.list=s.list.concat(z[0]),s.loading=!1,s.finished=s.list.length>30},2e3)},clickPrize(e,t){console.log("[clickPrize]",e,t),this.onGTip(`[clickPrize] ${t}`)},clickMatchButton(e,t){console.log("[clickMatchButton]",e,t),this.onGTip(`[clickMatchButton] ${t}`)},clickMatch(e,t){console.log("[clickMatch]",e,t),this.onGTip(`[clickMatch] ${t}`)}}},It={class:"demo-wrap"};function Mt(e,t,s,g,c,a){const h=_("press-empty"),n=_("PressHorMatchIndex");return r(),i("div",It,[S(n,{"sidebar-list":c.sidebarList,"banner-list":c.BANNER_LIST,"brand-list":c.BRAND_LIST,"report-list":c.REPORT_LIST,"show-person-dot":!0,"show-message-dot":!0,"show-feedback":c.showFeedback,"is-brand-swiper":c.isBrandSwiper,"finished-style":"font-size: 12px;","loading-size":"16px",onBack:a.onBack,onClickSidebar:a.onClickSidebar,onLoadMore:a.loadMore,onClickMessage:a.clickMessage,onClickFeedback:a.clickFeedback,onClickPerson:a.clickPerson,onClickPrize:a.clickPrize,onClickMatch:a.clickMatch,onClickMatchButton:a.clickMatchButton,onClickReport:a.clickReport},{empty:b(()=>[S(h,{description:"暂无数据"})]),_:1},8,["sidebar-list","banner-list","brand-list","report-list","show-feedback","is-brand-swiper","onBack","onClickSidebar","onLoadMore","onClickMessage","onClickFeedback","onClickPerson","onClickPrize","onClickMatch","onClickMatchButton","onClickReport"])])}const Wt=B(wt,[["render",Mt],["__scopeId","data-v-cde166af"]]);export{Wt as default};
