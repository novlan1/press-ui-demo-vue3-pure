import{P as v,p as b}from"./press-picker-plus-Dd740NJU.js";import{_ as d,y as k,z as _,A as L,r as h,o as m,b as g,n as w,B as A,c as P,l as c,f as r}from"./index-BDdv8HSf.js";import{c as T,g as S}from"./computed-DeuqgGfB.js";import{P as N}from"./press-popup-plus-CJ8zzkJc.js";import{P as V}from"./press-cell-CtWA6KMv.js";import"./number-CU9l-NjU.js";import"./parent-map-_1jD1UtF.js";import"./scroll-view-BOY_Gb3V.js";import"./toolbar-N4JCKc8j.js";import"./press-overlay-Dc8iNreK.js";import"./press-transition-CO_3M3TL.js";import"./link-DSy0TEsA.js";import"./event-DUfG_Jon.js";const f="000000",I={name:"PressArea",options:{...k,styleIsolation:"shared"},components:{PressPicker:v},props:{...b,showToolbar:{type:Boolean,default:!0},value:{type:String,default:""},areaList:{type:Object,default:()=>({})},columnsNum:{type:Number,default:3},columnsPlaceholder:{type:Array,default:()=>[]},..._,activeClass:{type:String,default:""},toolbarClass:{type:String,default:""},columnClass:{type:String,default:""},useMomentum:{type:Boolean,default:!1},swipeDuration:{type:[Number,String],default:1e3}},emits:["cancel","confirm","change"],data(){return{columns:[{values:[]},{values:[]},{values:[]}],typeToColumnsPlaceholder:{},code:this.value}},computed:{computedColumns(){const{columns:e,columnsNum:n}=this;return T.displayColumns(e,n)}},watch:{value:{handler(e){this.code=e,this.setValues()}},areaList:{handler(){this.setValues()}},columnsPlaceholder:{handler(e){this.typeToColumnsPlaceholder={province:e[0]||"",city:e[1]||"",county:e[2]||""}},immediate:!0}},mounted(){L(()=>{this.setValues()})},methods:{getPicker(){return this.picker==null&&(this.picker=this.$refs.pressPicker),this.picker},onCancel(e){return this.emit("cancel",e),e},onConfirm(e){const{index:n}=e;let{value:t}=e;t=this.parseValues(t);const a={value:t,index:n};return this.emit("confirm",a),a},emit(e,n){n.values=n.value,delete n.value,this.$emit(e,n)},parseValues(e){const{columnsPlaceholder:n}=this;return e.map((t,a)=>t&&(!t.code||t.name===n[a])?{...t,code:"",name:""}:t)},onChange(e){var o;const{index:n,value:t}=e;this.code=t[n].code;const a=this.getPicker();(o=this.setValues())==null||o.then(()=>{this.$emit("change",{values:this.parseValues(a.getValues()),index:n})})},getConfig(e){const{areaList:n}=this;return n&&n[`${e}_list`]||{}},getList(e,n){if(e!=="province"&&!n)return[];const{typeToColumnsPlaceholder:t}=this,a=this.getConfig(e);let o=Object.keys(a).map(s=>({code:s,name:a[s]}));if(n!=null&&(n[0]==="9"&&e==="city"&&(n="9"),o=o.filter(s=>s.code.indexOf(n)===0)),t[e]&&o.length){const s=e==="province"?"":e==="city"?f.slice(2,4):f.slice(4,6);o.unshift({code:`${n}${s}`,name:t[e]})}return o},getIndex(e,n){let t=e==="province"?2:e==="city"?4:6;const a=this.getList(e,n.slice(0,t-2));n[0]==="9"&&e==="province"&&(t=1),n=n.slice(0,t);for(let o=0;o<a.length;o++)if(a[o].code.slice(0,t)===n)return o;return 0},setValues(){const e=this.getPicker();if(!e)return;let n=this.code||this.getDefaultCode();const t=this.getList("province"),a=this.getList("city",n.slice(0,2)),o=[],s=[],{columnsNum:i}=this;return i>=1&&(o.push(e.setColumnValues(0,t,!1)),s.push(this.getIndex("province",n))),i>=2&&(o.push(e.setColumnValues(1,a,!1)),s.push(this.getIndex("city",n)),a.length&&n.slice(2,4)==="00"&&([{code:n}]=a)),i===3&&(o.push(e.setColumnValues(2,this.getList("county",n.slice(0,4)),!1)),s.push(this.getIndex("county",n))),Promise.all(o).catch(()=>{}).then(()=>e.setIndexes(s)).catch(()=>{})},getDefaultCode(){const{columnsPlaceholder:e}=this;if(e.length)return f;const n=Object.keys(this.getConfig("county"));if(n[0])return n[0];const t=Object.keys(this.getConfig("city"));return t[0]?t[0]:""},getValues(){const e=this.getPicker();return e?this.parseValues(e.getValues().filter(n=>!!n)):[]},getIndexes(){const e=this.getPicker();return e?(e==null?void 0:e.getIndexes())||[]:[]},getDetail(){const e=this.getValues(),n={code:"",country:"",province:"",city:"",county:""};if(!e.length)return n;const t=e.map(a=>a.name);return n.code=e[e.length-1].code,n.code[0]==="9"?(n.country=t[1]||"",n.province=t[2]||""):(n.province=t[0]||"",n.city=t[1]||"",n.county=t[2]||""),n},reset(e){return this.code=e||"",this.setValues()}}};function x(e,n,t,a,o,s){const i=h("press-picker");return m(),g(i,{ref:"pressPicker",class:w(["press-area__picker",e.customClass]),"active-class":t.activeClass,"toolbar-class":t.toolbarClass,"column-class":t.columnClass,"show-toolbar":t.showToolbar,"value-key":"name",title:e.title,loading:e.loading,columns:s.computedColumns,"item-height":e.itemHeight,"visible-item-count":e.visibleItemCount,"cancel-button-text":e.cancelButtonText,"confirm-button-text":e.confirmButtonText,"use-momentum":t.useMomentum,"swipe-duration":t.swipeDuration,onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["class","active-class","toolbar-class","column-class","show-toolbar","title","loading","columns","item-height","visible-item-count","cancel-button-text","confirm-button-text","use-momentum","swipe-duration","onChange","onConfirm","onCancel"])}const y=d(I,[["render",x]]),j={name:"PressAreaPopup",components:{PressPopup:A,PressPopupPlus:N,PressArea:y},props:{show:{type:Boolean,default:!1},areaList:{type:Object,default:()=>({})},value:{type:String,default:""},type:{type:String,default:""}},computed:{isESport(){return this.type==="e-sport"}},methods:{popupChanged(e){this.$emit("update:show",e)},confirm(){this.popupChanged(!1);const e=this.$refs.pressArea.getValues(),n=this.$refs.pressArea.getIndexes();this.$emit("confirm",e,n)}}};function D(e,n,t,a,o,s){const i=h("PressArea"),l=h("PressPopupPlus"),u=h("PressPopup");return m(),P("div",null,[s.isESport?(m(),g(u,{key:1,"is-show":t.show,button:"确定","close-icon":!0,title:"选择地区",onConfirm:s.confirm,onCancel:n[1]||(n[1]=p=>s.popupChanged(!1))},{default:c(()=>[r(i,{ref:"pressArea","area-list":t.areaList,value:t.value,"show-toolbar":!1},null,8,["area-list","value"])]),_:1},8,["is-show","onConfirm"])):(m(),g(l,{key:0,show:t.show,position:"bottom",onInput:s.popupChanged},{default:c(()=>[r(i,{ref:"pressArea",title:"选择地区","area-list":t.areaList,value:t.value,onCancel:n[0]||(n[0]=p=>s.popupChanged(!1)),onConfirm:s.confirm},null,8,["area-list","value","onConfirm"])]),_:1},8,["show","onInput"]))])}const O=d(j,[["render",D]]);function B(e){const{province_list:n={},city_list:t={}}=e||{},a={},o={ALL:{value:"07",label:"全部"},OFFLINE:{value:"08",label:"线下"},ONLINE:{value:"09",label:"线上"}},s=o.OFFLINE.value;return a.city_list=Object.keys(n).reduce((i,l)=>{const u=s+l.slice(0,4);return i[u]=n[l],i},{}),a.province_list=Object.keys(o).reduce((i,l)=>{const u=o[l];return i[`${u.value}0000`]=u.label,i},{}),a.county_list=Object.keys(t).reduce((i,l)=>{const u=s+l.slice(0,4);return i[u]=t[l],i},{}),a}const E={province_list:{11e4:"Beijing",33e4:"Zhejiang",81e4:"Hong Kong"},city_list:{110100:"Beijing City",330100:"Hangzhou",330200:"Ningbo",330300:"Wenzhou",330400:"Jiaxin",331100:"Lishui",810100:"Hong Kong Island",810200:"Kowloon",810300:"New Territories"},county_list:{110101:"Dongcheng",110102:"Xicheng",110105:"Chaoyang",110106:"Fengtai",110108:"Haidian",110111:"Fangshan",110112:"Tongzhou",110113:"Shunyi",110114:"Changping",110115:"Daxing",330105:"Gongshu",330106:"Xihu",330108:"Binjiang",330109:"Xiaoshan",330110:"Yuhang",330111:"Fuyang",330127:"Chunan",330182:"Jiande",330185:"Linan",330206:"Beilun",330211:"Zhenhai",330225:"Xiangshan",330226:"Ninghai",330281:"Yuyao",330282:"Cixi",330327:"Cangnan",330328:"Wencheng",330329:"Shuntai",330381:"Ruian",330382:"Yueqing",330402:"Nanhu",330421:"Jiashan",330424:"Haiyan",330481:"Haining",330482:"Pinghu",330483:"Tongxiang",331102:"Liandu District",331121:"Qingtian County",331125:"Yunhe County",331181:"Longquan County",810101:"Central",810102:"Wan Chai",810202:"Mong Kok",810203:"Sham Shui Po",810204:"Chuk Un",810205:"Kwun Tong",810303:"Sha Tin",810305:"Yuen Long",810306:"Tuen Mun",810307:"Tsuen Wan",810309:"Lantau Island"}},F={i18n:{"zh-CN":{title2:"选中省市区",title3:"配置显示列",title4:"配置列占位提示文字",columnsPlaceholder:["请选择","请选择","请选择"],withPopup:"结合Popup",popupTitle:"选择地区",parseData:"特殊处理数据",areaList:S},"en-US":{title2:"Initial Value",title3:"Columns Number",title4:"Columns Placeholder",columnsPlaceholder:["Choose","Choose","Choose"],withPopup:"With Popup",popupTitle:"Select Area",parseData:"Parse Data",areaList:()=>Promise.resolve(E)}},components:{PressArea:y,PressCell:V,PressAreaPopup:O},data(){return{areaList:{},showPopup:!1,selectArea:"",areaType:""}},mounted(){this.init()},methods:{parseData:B,onConfirm(...e){console.log("[onConfirm]: ",...e)},onCancel(...e){console.log("[onCancel]: ",...e)},init(){this.t("areaList").then(e=>[this.areaList=e])},onChange(e){console.log("[onChange] value: ",e);const{index:n,values:t}=e,a=t.map(o=>(o==null?void 0:o.name)||"").join("-");this.onGTip(`${a}, index: ${n}`)},onShowAreaPopup(e){this.showPopup=!0,console.log("type",e),this.areaType=e||""},onCancelPopup(){},onConfirmArea(e,n){var a;console.log("[onConfirmArea] values index",e,n),this.selectArea=(a=e[e.length-1])==null?void 0:a.code;const t=e.map(o=>(o==null?void 0:o.name)||"").join("-");this.onGTip(`${this.selectArea}: ${t}`)}}},H={class:"demo-wrap"};function M(e,n,t,a,o,s){const i=h("press-area"),l=h("demo-block"),u=h("press-cell"),p=h("PressAreaPopup");return m(),P("div",H,[r(l,{title:e.t("basicUsage")},{default:c(()=>[r(i,{"area-list":o.areaList,onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["area-list","onChange","onConfirm","onCancel"])]),_:1},8,["title"]),r(l,{title:e.t("title2")},{default:c(()=>[r(i,{"area-list":o.areaList,value:"440304",onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["area-list","onChange","onConfirm","onCancel"])]),_:1},8,["title"]),r(l,{title:e.t("title3")},{default:c(()=>[r(i,{"area-list":o.areaList,"columns-num":2,value:"440304",onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["area-list","onChange","onConfirm","onCancel"])]),_:1},8,["title"]),r(l,{title:e.t("title4")},{default:c(()=>[r(i,{"area-list":o.areaList,value:"440304","columns-placeholder":e.t("columnsPlaceholder"),onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["area-list","columns-placeholder","onChange","onConfirm","onCancel"])]),_:1},8,["title"]),r(l,{title:e.t("parseData")},{default:c(()=>[r(i,{"area-list":s.parseData(o.areaList),value:"070000",onChange:s.onChange,onConfirm:s.onConfirm,onCancel:s.onCancel},null,8,["area-list","onChange","onConfirm","onCancel"])]),_:1},8,["title"]),r(l,{title:e.t("withPopup")},{default:c(()=>[r(u,{title:"Normal","is-link":"",onClick:n[0]||(n[0]=C=>s.onShowAreaPopup(""))}),r(u,{title:"E-Sport","is-link":"",onClick:n[1]||(n[1]=C=>s.onShowAreaPopup("e-sport"))})]),_:1},8,["title"]),r(p,{show:o.showPopup,"area-list":o.areaList,value:o.selectArea,type:o.areaType,"onUpdate:show":n[2]||(n[2]=C=>o.showPopup=C),onConfirm:s.onConfirmArea,onCancel:s.onCancelPopup},null,8,["show","area-list","value","type","onConfirm","onCancel"])])}const ee=d(F,[["render",M]]);export{ee as default};
