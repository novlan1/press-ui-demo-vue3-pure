import{I as L,E as T,_ as V,C as K,U as A,r as C,o as u,c as y,i as D,t as O,b as p,d as m,f as c,l as h,F as w,v as F,a as _,n as P,m as E}from"./index-F6Gg9UHQ.js";import{P as B,a as I}from"./press-tabs-qklAkZQb.js";import{P as M}from"./press-field-DLCUW6ra.js";import{P as j}from"./press-popup-plus-BykNx8tI.js";import{h as z,d as H}from"./hide-keyboard-JGMyLwZi.js";import{g as U}from"./computed-C5kpqUFl.js";import"./relation-Ce8eT7mn.js";import"./parent-map-7gZjKT_J.js";import"./press-sticky-oDO40LGy.js";import"./rect-B27xLIPj.js";import"./bind-event-YYYkzvzT.js";import"./event-BwRIw3Q8.js";import"./touch-Djes3Zvx.js";import"./scroll-view-UNHMkMyI.js";import"./press-cell-B51DLGhM.js";import"./link-CpGN79EY.js";import"./parent-CQhE6Wqc.js";import"./press-overlay-C5JL8Y2J.js";import"./press-transition-MQnSZ_jj.js";function k(e,t,a){return e.selected&&e.selected[t]===a[t]}function X(e,t,a){return L.bem2("cascader__option",{selected:k(e,t,a),disabled:a.disabled})}function J(e){const t=e.option.color||(k(e.tab,e.valueKey,e.option)?e.activeColor:void 0);return T({color:t})}const g={isSelected:k,optionClass:X,optionStyle:J};let f;(function(e){e.TEXT="text",e.VALUE="value",e.CHILDREN="children"})(f||(f={}));const N={text:f.TEXT,value:f.VALUE,children:f.CHILDREN},R={name:"PressCascader",options:{styleIsolation:"shared"},components:{PressIcon:K,PressTab:B,PressTabs:I},props:{title:{type:String,default:""},value:{type:String,default:""},placeholder:{type:String,default:"请选择"},activeColor:{type:String,default:"#1989fa"},options:{type:Array,default:()=>[]},swipeable:{type:Boolean,default:!1},closeable:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},closeIcon:{type:String,default:"cross"},fieldNames:{type:Object,default:()=>N},useTitleSlot:Boolean},emits:["change","finish","close","click-tab"],data(){return{tabs:[],activeTab:0,textKey:f.TEXT,valueKey:f.VALUE,childrenKey:f.CHILDREN,innerValue:"",utils:g}},watch:{options:{handler(){this.updateTabs()},deep:!0},value:{handler(e){this.updateValue(e)},deep:!0,immediate:!0},fieldNames:{handler(){this.updateFieldNames()},deep:!0,immediate:!0}},created(){this.updateTabs()},mounted(){},methods:{updateValue(e){e!==void 0&&this.tabs.map(a=>a.selected&&a.selected[this.valueKey]).indexOf(e)>-1||(this.innerValue=e,this.updateTabs())},updateFieldNames(){const{text:e="text",value:t="value",children:a="children"}=this.fieldNames||N;this.textKey=e,this.valueKey=t,this.childrenKey=a},getSelectedOptionsByValue(e,t){for(let a=0;a<e.length;a++){const n=e[a];if(n[this.valueKey]===t)return[n];if(n[this.childrenKey]){const l=this.getSelectedOptionsByValue(n[this.childrenKey],t);if(l)return[n,...l]}}},updateTabs(){const{options:e}=this,{innerValue:t}=this;if(e.length){if(t!==void 0){const a=this.getSelectedOptionsByValue(e,t);if(a){let n=e;const l=a.map(s=>{const i={options:n,selected:s},o=n.find(r=>r[this.valueKey]===s[this.valueKey]);return o&&(n=o[this.childrenKey]),i});n&&l.push({options:n,selected:null}),this.tabs=l,A(()=>{this.activeTab=l.length-1});return}}this.tabs=[{options:e,selected:null}],this.activeTab=0}},onClose(){this.$emit("close")},onClickTab(e){const{index:t,title:a}=e;this.$emit("click-tab",{title:a,tabIndex:t}),this.activeTab=t},onSelect(e,t){if(t&&t.disabled)return;const{valueKey:a,childrenKey:n}=this;let{tabs:l}=this;if(l[e].selected=t,l.length>e+1&&(l=l.slice(0,e+1)),t[n]){const r={options:t[n],selected:null};l[e+1]?l[e+1]=r:l.push(r),A(()=>{this.activeTab=e+1})}this.tabs=l;const s=l.map(r=>r.selected).filter(Boolean),i=t[a],o={value:i,tabIndex:e,selectedOptions:s};this.innerValue=i,this.$emit("change",o),t[n]||this.$emit("finish",o)},getOptionsClass(e,t){return`${e.className||""} ${g.optionClass(t,this.valueKey,e)}`},getOptionsStyle(e,t){const{valueKey:a,activeColor:n}=this;return`${g.optionStyle({tab:t,valueKey:a,option:e,activeColor:n})}`},getUniqueKey(e,t){return`${e}-${t}`}}},q={class:"press-cascader-index"},W={key:0,class:"press-cascader__header"},Z={key:1,class:"press-cascader__title"},G={class:"press-cascader__options"},Q=["onClick"];function Y(e,t,a,n,l,s){const i=C("press-icon"),o=C("press-tab"),r=C("press-tabs");return u(),y("div",q,[a.showHeader?(u(),y("div",W,[a.useTitleSlot?D(e.$slots,"title",{key:0},void 0,!0):(u(),y("span",Z,O(a.title),1)),a.closeable?(u(),p(i,{key:2,name:a.closeIcon,class:"press-cascader__close-icon",onClick:s.onClose},null,8,["name","onClick"])):m("",!0)])):m("",!0),c(r,{ref:"tabs",active:l.activeTab,"custom-class":"press-cascader__tabs","wrap-class":"press-cascader__tabs-wrap","tab-class":"press-cascader__tab",color:a.activeColor,border:!1,swipeable:a.swipeable,onClick:s.onClickTab},{default:h(()=>[(u(!0),y(w,null,F(l.tabs,(d,v)=>(u(),p(o,{key:d.tabIndex,title:d.selected?d.selected[l.textKey]:a.placeholder,style:{width:"100%"},"title-style":d.selected?"":"color: #969799;font-weight:normal;"},{default:h(()=>[_("div",G,[(u(!0),y(w,null,F(d.options,(b,S)=>(u(),y("div",{key:""+s.getUniqueKey(S,"option"),class:P([`${s.getOptionsClass(b,d)}`]),style:E(""+s.getOptionsStyle(b,d)),onClick:()=>s.onSelect(v,b)},[_("span",null,O(b[l.textKey]),1),l.utils.isSelected(d,l.valueKey,b)?(u(),p(i,{key:0,name:"success",size:"18"})):m("",!0)],14,Q))),128))])]),_:2},1032,["title","title-style"]))),128))]),_:1},8,["active","color","swipeable","onClick"])])}const $=V(R,[["render",Y],["__scopeId","data-v-f49c8ff5"]]),ee=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}],te=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100",children:[{text:"上城区",value:"330102"},{text:"下城区",value:"330103"},{text:"江干区",value:"330104"}]},{text:"宁波市",value:"330200",children:[{text:"海曙区",value:"330203"},{text:"江北区",value:"330205"},{text:"北仑区",value:"330206"}]},{text:"温州市",value:"330300",children:[{text:"鹿城区",value:"330302"},{text:"龙湾区",value:"330303"},{text:"瓯海区",value:"330304"}]}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100",children:[{text:"玄武区",value:"320102"},{text:"秦淮区",value:"320104"},{text:"建邺区",value:"320105"}]},{text:"无锡市",value:"320200",children:[{text:"锡山区",value:"320205"},{text:"惠山区",value:"320206"},{text:"滨湖区",value:"320211"}]},{text:"徐州市",value:"320300",children:[{text:"鼓楼区",value:"320302"},{text:"云龙区",value:"320303"},{text:"贾汪区",value:"320305"}]}]}],x=(e,t,a)=>({text:e,value:t,children:a});function le(){return new Promise((e,t)=>{U().then(a=>{const n=se(a);e(n)}).catch(a=>{t(a)})})}function se(e){const{city_list:t,county_list:a,province_list:n}=e,l=new Map;Object.keys(n).forEach(i=>{l.set(i.slice(0,2),x(n[i],i,[]))});const s=new Map;return Object.keys(t).forEach(i=>{const o=x(t[i],i,[]);s.set(i.slice(0,4),o);const r=l.get(i.slice(0,2));r&&r.children.push(o)}),Object.keys(a).forEach(i=>{const o=s.get(i.slice(0,4));o&&o.children.push(x(a[i],i))}),Array.from(l.values())}const ae=[{text:"浙江省",value:"330000",children:[{text:"杭州市",value:"330100"}]},{text:"江苏省",value:"320000",children:[{text:"南京市",value:"320100"}]}];function ne(e){const t=H(e),a=n=>{"text"in n&&(n.name=n.text,delete n.text),"value"in n&&(n.code=n.value,delete n.value),"children"in n&&(n.items=n.children,delete n.children,n.items.forEach(a))};return t.forEach(a),t}const ie={i18n:{"zh-CN":{area:"地区",options:te,selectArea:"请选择地区",customColor:"自定义颜色",asyncOptions:"异步加载选项",asyncOptions1:[{text:"浙江省",value:"330000",children:[]}],asyncOptions2:[{text:"杭州市",value:"330100"},{text:"宁波市",value:"330200"}],currentLevel:e=>`当前为第 ${e} 级`,chinaAreaData:"中国省市区数据",customContent:"自定义选项上方内容",customFieldNames:"自定义字段名"},"en-US":{area:"Area",options:ee,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],currentLevel:e=>`Current level is ${e}`,chinaAreaData:"China Area Data",customContent:"Custom Content",customFieldNames:"Custom Field Names"}},components:{PressCascader:$,PressField:M,PressPopupPlus:j},data(){return{show:{basic:!1,customColor:!1,asyncOptions:!1,customFieldNames:!1,chinaArea:!1},leaving:{basic:!1,customColor:!1,asyncOptions:!1,customFieldNames:!1,chinaArea:!1},options:ae,fieldValue:{basic:"",customColor:"",asyncOptions:"",customFieldNames:"",chinaArea:""},cascaderValue:{basic:"",customColor:"",asyncOptions:"",customFieldNames:"",chinaArea:""},curDemo:"",asyncStateOptions:this.t("asyncOptions1"),fieldNames:{text:"name",value:"code",children:"items"},chinaArea:[]}},computed:{isMp(){return!1},customFieldOptions(){return ne(this.t("options"))}},mounted(){this.getChinaArea()},methods:{onClick(e){z(),this.curDemo=e,this.show[e]=!0,this.leaving[this.curDemo]=!0},onClose(){this.show[this.curDemo]=!1},onFinish(e){console.log("[onFinish] detail: ",e);const{selectedOptions:t,value:a}=e,n=t.map(l=>l.text||l.name).join("/");this.fieldValue[this.curDemo]=n,this.cascaderValue[this.curDemo]=a,this.onClose()},loadDynamicOptions(e){const{value:t}=e;t==="330000"&&setTimeout(()=>{this.asyncStateOptions[0].children=this.t("asyncOptions2")},500)},afterLeave(){this.leaving[this.curDemo]=!1},getChinaArea(){le().then(e=>{this.chinaArea=e})}}},oe={class:"demo-wrap"};function re(e,t,a,n,l,s){const i=C("press-field"),o=C("press-cascader"),r=C("press-popup-plus"),d=C("demo-block");return u(),y("div",oe,[c(d,{title:e.t("basicUsage")},{default:h(()=>[c(i,{value:l.fieldValue.basic,"model-value":l.fieldValue.basic,"is-link":"",readonly:s.isMp,label:e.t("area"),placeholder:e.t("selectArea"),onClick:t[0]||(t[0]=v=>s.onClick("basic")),onClickInput:t[1]||(t[1]=v=>s.onClick("basic"))},null,8,["value","model-value","readonly","label","placeholder"]),c(r,{show:l.show.basic,round:"",position:"bottom",onAfterLeave:s.afterLeave},{default:h(()=>[l.show.basic||l.leaving.basic?(u(),p(o,{key:0,value:l.cascaderValue.basic,title:e.t("selectArea"),options:e.t("options"),onClose:s.onClose,onFinish:s.onFinish},null,8,["value","title","options","onClose","onFinish"])):m("",!0)]),_:1},8,["show","onAfterLeave"])]),_:1},8,["title"]),c(d,{title:e.t("chinaAreaData")},{default:h(()=>[c(i,{value:l.fieldValue.chinaArea,"model-value":l.fieldValue.chinaArea,"is-link":"",readonly:s.isMp,label:e.t("area"),placeholder:e.t("selectArea"),onClick:t[2]||(t[2]=v=>s.onClick("chinaArea")),onClickInput:t[3]||(t[3]=v=>s.onClick("chinaArea"))},null,8,["value","model-value","readonly","label","placeholder"]),c(r,{show:l.show.chinaArea,round:"",position:"bottom",onAfterLeave:s.afterLeave},{default:h(()=>[l.show.chinaArea||l.leaving.chinaArea?(u(),p(o,{key:0,value:l.cascaderValue.chinaArea,title:e.t("selectArea"),options:l.chinaArea,onClose:s.onClose,onFinish:s.onFinish},null,8,["value","title","options","onClose","onFinish"])):m("",!0)]),_:1},8,["show","onAfterLeave"])]),_:1},8,["title"]),c(d,{title:e.t("customColor")},{default:h(()=>[c(i,{value:l.fieldValue.customColor,"model-value":l.fieldValue.customColor,"is-link":"",readonly:s.isMp,label:e.t("area"),placeholder:e.t("selectArea"),onClick:t[4]||(t[4]=v=>s.onClick("customColor")),onClickInput:t[5]||(t[5]=v=>s.onClick("customColor"))},null,8,["value","model-value","readonly","label","placeholder"]),c(r,{show:l.show.customColor,round:"",position:"bottom",onAfterLeave:s.afterLeave},{default:h(()=>[l.show.customColor||l.leaving.customColor?(u(),p(o,{key:0,value:l.cascaderValue.customColor,title:e.t("selectArea"),options:e.t("options"),"active-color":"#ee0a24",onClose:s.onClose,onFinish:s.onFinish},null,8,["value","title","options","onClose","onFinish"])):m("",!0)]),_:1},8,["show","onAfterLeave"])]),_:1},8,["title"]),c(d,{title:e.t("asyncOptions")},{default:h(()=>[c(i,{value:l.fieldValue.asyncOptions,"model-value":l.fieldValue.asyncOptions,"is-link":"",readonly:s.isMp,label:e.t("area"),placeholder:e.t("selectArea"),onClick:t[6]||(t[6]=v=>s.onClick("asyncOptions")),onClickInput:t[7]||(t[7]=v=>s.onClick("asyncOptions"))},null,8,["value","model-value","readonly","label","placeholder"]),c(r,{show:l.show.asyncOptions,round:"",position:"bottom",onAfterLeave:s.afterLeave},{default:h(()=>[l.show.asyncOptions||l.leaving.asyncOptions?(u(),p(o,{key:0,value:l.cascaderValue.asyncOptions,title:e.t("selectArea"),options:l.asyncStateOptions,onClose:s.onClose,onFinish:s.onFinish,onChange:s.loadDynamicOptions},null,8,["value","title","options","onClose","onFinish","onChange"])):m("",!0)]),_:1},8,["show","onAfterLeave"])]),_:1},8,["title"]),c(d,{title:e.t("customFieldNames")},{default:h(()=>[c(i,{value:l.fieldValue.customFieldNames,"model-value":l.fieldValue.customFieldNames,"is-link":"",readonly:s.isMp,label:e.t("area"),placeholder:e.t("selectArea"),onClick:t[8]||(t[8]=v=>s.onClick("customFieldNames")),onClickInput:t[9]||(t[9]=v=>s.onClick("customFieldNames"))},null,8,["value","model-value","readonly","label","placeholder"]),c(r,{show:l.show.customFieldNames,round:"",position:"bottom",onAfterLeave:s.afterLeave},{default:h(()=>[l.show.customFieldNames||l.leaving.customFieldNames?(u(),p(o,{key:0,value:l.cascaderValue.customFieldNames,title:e.t("selectArea"),"field-names":l.fieldNames,options:s.customFieldOptions,onClose:s.onClose,onFinish:s.onFinish,onChange:s.loadDynamicOptions},null,8,["value","title","field-names","options","onClose","onFinish","onChange"])):m("",!0)]),_:1},8,["show","onAfterLeave"])]),_:1},8,["title"])])}const Ne=V(ie,[["render",re]]);export{Ne as default};