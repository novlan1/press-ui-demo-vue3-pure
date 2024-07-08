import{P as O}from"./press-popup-7HnpDVXn.js";import{P as E}from"./press-dialog-WEqOf-Ft.js";import{P as z}from"./press-button-DeHHH_6o.js";import{_ as y,z as H,o as i,c as n,F as x,i as D,w as m,a as t,A as R,d as _,t as p,x as T,p as G,e as b,r as h,b as P,n as C,f as w,u as v,B,C as U}from"./index-BZexHo5h.js";import{P as F}from"./press-cell-j69wMGN4.js";import{P as M}from"./press-popup-cell-BAyvtasA.js";import"./function-CHWTa32-.js";import"./validator-OjQp2SYe.js";import"./press-component-HD2axD72.js";import"./press-field-DyWd8cng.js";import"./press-icon-plus-5Xj-bw2h.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-BWsAQQHi.js";import"./event-Dm-SpHU4.js";import"./support-passive-CNRHRm4O.js";import"./index-DfrNFuIM.js";import"./dialog-mixin-Cag_Dto0.js";import"./component-handler-XiBNmEz2.js";import"./press-loading-plus-Df-tLDhD.js";import"./press-loading-wkUvB1Ib.js";import"./button-BaKXjqxg.js";import"./system-BAdrsxg_.js";import"./link-Ds6ljOst.js";import"./press-switch-BgOgGYGX.js";import"./computed-COUhjXwe.js";import"./functional-DDGVd29A.js";const V={name:"PressAwardPopupList",props:{propsCheckList:{type:Array,default:()=>[{goodscfg:{goodsicon:"https://dummyimage.com/200x200"},displayName:"道具名称",displayOverduetime:"2/2",propsPrice:"18.88",propsNum:"1",isShowCheck:!1,isChecked:!1},{goodscfg:{goodsicon:"https://dummyimage.com/200x200"},displayName:"道具名称",displayOverduetime:"2/2",propsPrice:"18.88",propsNum:"1",isShowCheck:!1,isChecked:!1}],required:!0}},options:{virtualHost:!0},emits:["onCheckClick","onItemClick"],data(){return{}},computed:{},methods:{onCheckClick(...s){this.$emit("onCheckClick",...s)},onItemClick(...s){this.$emit("onItemClick",...s)}}},q={class:"press-award"},K=["onClick"],W={class:"press-award__img"},j={key:0,size:"98"},J={class:"press-award__main"},Q={class:"press-award__info"},X={class:"press-award__name"},Y={key:0,class:"press-award__desc"},Z={key:1,class:"press-award__desc"},$={key:0,class:"press-award__price"},ss={key:1,class:"press-award__num"},es=["onClick"];function os(s,r,e,S,c,o){const l=H("lazy");return i(),n("div",q,[(i(!0),n(x,null,D(e.propsCheckList,(a,g)=>(i(),n("div",{key:g,class:"press-award__item",onClick:m(f=>o.onItemClick(a),["stop"])},[t("div",W,[a.goodscfg&&a.goodscfg.goodsicon?R((i(),n("img",j,null,512)),[[l,a.goodscfg.goodsicon]]):_("",!0)]),t("div",J,[t("div",Q,[t("p",X,p(a.displayName||""),1),a.propType?(i(),n("p",Y,p(a.propType),1)):a.displayOverduetime?(i(),n("p",Z," 兑换有效期至"+p(a.displayOverduetime||""),1)):_("",!0)]),a.isShowCheck?(i(),n("p",$," ¥"+p(a.propsPrice||""),1)):(i(),n("p",ss," 数量："+p(a.propsNum||1),1))]),a.isShowCheck?(i(),n("div",{key:0,class:T(["press-award__check",a.isChecked?"press-award__check--active":""]),onClick:m(f=>o.onCheckClick(a),["stop"])},null,10,es)):_("",!0)],8,K))),128))])}const ts=y(V,[["render",os],["__scopeId","data-v-1e206306"]]),is={name:"PressAwardPopupHor",options:{virtualHost:!0},components:{},props:{title:{type:String,default:"恭喜获得"},subTitle:{type:String,default:""},confirmText:{type:String,default:"立即兑换"},cancelText:{type:String,default:"关闭"},desc:{type:String,default:"本次仅发放游戏礼包（其他奖励请联系办赛方），已发放到「我的奖品」，请在有效期内兑换"},awardList:{type:Array,default:()=>[]}},emits:["close","exchange"],data(){return{}},mounted(){},methods:{close(...s){this.$emit("close",...s)},exchange(...s){this.$emit("exchange",...s)}}},as=s=>(G("data-v-30acfa63"),s=s(),b(),s),rs={class:"press-award"},ns=as(()=>t("div",{class:"press-award__mask"},null,-1)),cs={class:"press-award__main"},ls={class:"press-award__titles"},ds={class:"press-award__title"},ps={class:"press-award__sub-title"},hs={class:"press-award__awards"},_s={class:"press-award__image"},ms=["src"],us={class:"press-award__name"},ws={class:"press-award__buttons"},gs={class:"press-award__desc"};function fs(s,r,e,S,c,o){return i(),n("div",rs,[ns,t("div",cs,[t("div",ls,[t("div",ds,p(e.title),1),t("div",ps,p(e.subTitle),1)]),t("div",hs,[t("div",{class:T(["press-award__list",e.awardList.length>8?"press-award__list--more":""])},[(i(!0),n(x,null,D(e.awardList,(l,a)=>(i(),n("div",{key:a,class:"press-award__item"},[t("div",_s,[l.goodscfg&&l.goodscfg.goodsicon?(i(),n("img",{key:0,src:l.goodscfg.goodsicon},null,8,ms)):_("",!0)]),t("div",us,p(l.displayName),1)]))),128))],2)]),t("div",ws,[t("div",{class:"press-award__button--cancel",onClick:r[0]||(r[0]=m((...l)=>o.close&&o.close(...l),["stop"]))},p(e.cancelText),1),t("div",{class:"press-award__button--confirm",onClick:r[1]||(r[1]=m((...l)=>o.exchange&&o.exchange(...l),["stop"]))},p(e.confirmText),1)]),t("div",gs,p(e.desc),1)])])}const Ps=y(is,[["render",fs],["__scopeId","data-v-30acfa63"]]),L="恭喜获得游戏礼包",Cs={name:"PressAwardPopup",options:{virtualHost:!0,styleIsolation:"shared"},components:{PressPopup:O,PressDialog:E,PressAwardPopupList:ts,PressAwardPopupHor:Ps,PressButton:z},props:{title:{type:String,default:L},curRoleName:{type:String,default:"角色名"},awardList:{type:Array,default:()=>[],required:!1},isGamePrize:{type:Boolean,default:!0},tipTitle:{type:String,default:""},confirmText:{type:String,default:""},cancelText:{type:String,default:""},isHor:{type:Boolean,default:!1},horTitle:{type:String,default:"恭喜获得"},horSubTitle:{type:String,default:""},horConfirmText:{type:String,default:"立即兑换"},horCancelText:{type:String,default:"关闭"},horDesc:{type:String,default:"本次仅发放游戏礼包（其他奖励请联系办赛方），已发放到「我的奖品」，请在有效期内兑换"}},emits:["dimissDialog","onShowSwitchRoleDialog","onExchange","onConfirm","onCancel","onGoAward"],data(){return{isShowpopupClose:!0,isShowPopup:!1,isShowTipDialog:!1}},computed:{innerTitle(){const{title:s}=this;return console.log("title",s,this.isGamePrize),s===L&&!this.isGamePrize?"恭喜获得":s}},mounted(){setTimeout(()=>{this.awardList.length>0?(this.isShowTipDialog=!1,this.isShowPopup=!0):(this.isShowPopup=!1,this.isShowTipDialog=!0)},this.isHor?0:1200)},methods:{dimissDialog(){this.$emit("dimissDialog"),this.isShowPopup=!1},onShowSwitchRoleDialog(){this.$emit("onShowSwitchRoleDialog")},onExchange(){this.$emit("onExchange")},onConfirm(){this.isShowTipDialog=!1,this.$emit("onConfirm")},onCancel(){this.$emit("onCancel")},onGoAward(){this.$emit("onGoAward")}}},k=s=>(G("data-v-c62a2e25"),s=s(),b(),s),ys={key:0,class:"press-award-box"},ks={class:"press-award-box__inner"},Ss=k(()=>t("div",{class:"press-award-box__close"},null,-1)),vs=k(()=>t("div",{class:"press-award-box__open"},null,-1)),xs={class:"press-award-box__images"},Ds=["src"],Ts={key:0,class:"press-award__tip"},As={key:0,class:"press-award__bottom"},Ls={class:"press-award__roles"},Gs=k(()=>t("p",null,"发放到游戏邮箱：",-1)),bs=k(()=>t("div",{class:"iconfont icon-change"},null,-1)),Ns={key:1,class:"press-award__bottom"};function Is(s,r,e,S,c,o){const l=h("PressAwardPopupHor"),a=h("PressAwardPopupList"),g=h("scroll-view"),f=h("PressButton"),N=h("PressPopup"),I=h("PressDialog");return i(),n("div",null,[e.isHor?_("",!0):(i(),n("div",ys,[t("div",ks,[Ss,vs,t("div",xs,[(i(),n(x,null,D(5,(u,A)=>t("img",{key:u,src:`https://image-1251917893.file.myqcloud.com/box/${A+1}.png`,class:T(["press-award-box__img",`img-${A+1}`])},null,10,Ds)),64))])])])),c.isShowPopup&&e.isHor?(i(),P(l,{key:1,"award-list":e.awardList,"hor-title":e.horTitle,"hor-sub-title":e.horSubTitle,"hor-confirm-text":e.horConfirmText,"hor-cancel-text":e.horCancelText,"hor-desc":e.horDesc,onClose:o.dimissDialog,onExchange:o.onExchange},null,8,["award-list","hor-title","hor-sub-title","hor-confirm-text","hor-cancel-text","hor-desc","onClose","onExchange"])):c.isShowPopup&&!e.isHor?(i(),P(N,{key:2,"is-show":c.isShowPopup,"is-showpopup-close":c.isShowpopupClose,"popup-title":o.innerTitle,onOnCancel:o.dimissDialog},{default:C(()=>[w(g,{"scroll-y":"true",class:"press-award__wrap"},{default:C(()=>[e.isGamePrize?(i(),n("p",Ts,[v(" 仅展示游戏礼包，其他奖品已发放至"),t("span",{class:"press-award__tip__highlight",onClick:r[0]||(r[0]=m((...u)=>o.onGoAward&&o.onGoAward(...u),["stop"]))},"【我的奖品】"),v("，请自行兑换。 ")])):_("",!0),w(a,{"props-check-list":e.awardList},null,8,["props-check-list"])]),_:1}),e.isGamePrize?(i(),n("div",As,[t("div",Ls,[Gs,t("div",{class:"press-award__role",onClick:r[1]||(r[1]=m((...u)=>o.onShowSwitchRoleDialog&&o.onShowSwitchRoleDialog(...u),["stop"]))},[t("p",null,p(e.curRoleName),1),bs])]),t("div",{class:"press-award__button",onClick:r[2]||(r[2]=m((...u)=>o.onExchange&&o.onExchange(...u),["stop"]))}," 确认领取 ")])):(i(),n("div",Ns,[w(f,{type:"e-sport-primary-bg-xl",onClick:m(o.onGoAward,["stop"])},{default:C(()=>[v(" 查看奖励 ")]),_:1},8,["onClick"])]))]),_:1},8,["is-show","is-showpopup-close","popup-title","onOnCancel"])):_("",!0),e.tipTitle?(i(),P(I,{key:3,"can-touch-remove":!1,show:c.isShowTipDialog,title:e.tipTitle,"confirm-text":e.confirmText,"cancel-text":e.cancelText,onConfirm:o.onConfirm,onCancel:o.onCancel},null,8,["show","title","confirm-text","cancel-text","onConfirm","onCancel"])):_("",!0)])}const Os=y(Cs,[["render",Is],["__scopeId","data-v-c62a2e25"]]),d={empty:!1,isHor:!1,isGamePrize:!0};function Es({context:s,callback:r}){B({context:s,title:"自定义设置",closeIcon:!0,cellList:[{label:"是否为空",type:"switch",open:d.empty,click:({context:e})=>{e.closeDialog(),d.empty=!d.empty,s.onGTip("设置成功"),typeof r.changeParams=="function"&&r.changeParams.call(s,d)}},{label:"是否为横版",type:"switch",open:d.isHor,click:({context:e})=>{e.closeDialog(),d.isHor=!d.isHor,s.onGTip("设置成功"),typeof r.changeParams=="function"&&r.changeParams.call(s,d)}},{label:"是否为游戏礼包",type:"switch",open:d.isGamePrize,click:({context:e})=>{e.closeDialog(),d.isGamePrize=!d.isGamePrize,s.onGTip("设置成功"),typeof r.changeParams=="function"&&r.changeParams.call(s,d)}}]})}const zs=Array.from({length:10}).map(()=>({propsPic:"https://dummyimage.com/200x200",goodscfg:{goodsicon:"https://igame-10037599.cos.ap-shanghai.myqcloud.com/159920e4-c853-80ce-6ee3-0dee69c4e705.png"},displayName:"道具名称",displayOverduetime:"2099.9.1",propsLabel:"皮肤",propsPrice:"18.88",propsNum:"1",isChecked:!1,isShowCheck:!1})),Hs={i18n:{"zh-CN":{show:"展示",custom:"自定义"},"en-US":{show:"Show",custom:"Custom"}},components:{PressAwardPopup:Os,PressCell:F,PressPopupCell:M},data(){return{show:!1,awardList:[],tipTitle:"没有获得奖励哦～",customParams:{...d},FUNCTIONAL_ID_MAP:U}},mounted(){this.genDemoData()},methods:{onShowAwardPopup(){this.show=!0},onCloseAwardDialog(){this.show=!1},onCustom(){Es({context:this,callback:{changeParams:this.changeParams}})},changeParams(s){this.customParams=s,this.genDemoData()},onGoAward(){this.onGTip("[onGoAward]")},onShowSwitchRoleDialog(){this.onGTip("[onShowSwitchRoleDialog]")},onExchange(){this.onGTip("[onExchange]")},genDemoData(){const{empty:s}=this.customParams;s?this.awardList=[]:this.awardList=zs}}},Rs={class:"demo-wrap"};function Bs(s,r,e,S,c,o){const l=h("press-cell"),a=h("demo-block"),g=h("PressAwardPopup"),f=h("PressPopupCell");return i(),n("div",Rs,[w(a,{title:s.t("basicUsage")},{default:C(()=>[w(l,{title:s.t("show"),"is-link":"",onClick:o.onShowAwardPopup},null,8,["title","onClick"]),w(l,{title:s.t("custom"),"is-link":"",onClick:o.onCustom},null,8,["title","onClick"])]),_:1},8,["title"]),c.show?(i(),P(g,{key:0,"award-list":c.awardList,"tip-title":c.tipTitle,"is-hor":c.customParams.isHor,"is-game-prize":c.customParams.isGamePrize,"confirm-text":s.t("confirm"),onOnGoAward:o.onGoAward,onOnShowSwitchRoleDialog:o.onShowSwitchRoleDialog,onOnExchange:o.onExchange,onDimissDialog:o.onCloseAwardDialog,onOnConfirm:o.onCloseAwardDialog},null,8,["award-list","tip-title","is-hor","is-game-prize","confirm-text","onOnGoAward","onOnShowSwitchRoleDialog","onOnExchange","onDimissDialog","onOnConfirm"])):_("",!0),w(f,{id:c.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:c.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"])])}const _e=y(Hs,[["render",Bs]]);export{_e as default};
