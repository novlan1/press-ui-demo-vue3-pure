import{u as d}from"./utils-D0lA7q9W.js";import{P as y}from"./press-icon-plus-zKCOzNHP.js";import{d as k,a as g}from"./press-component-BmHMjgT0.js";import{C as S}from"./relation-Ce8eT7mn.js";import{s as x}from"./style-CpIyAjCl.js";import{a as P}from"./add-unit-DeNeB5nf.js";import{b as o}from"./parent-map-CQhFZDpB.js";import{f as _}from"./parent-CQhE6Wqc.js";import{_ as V,r as v,o as r,c as u,n as c,w as m,i as b,d as f,a as B,b as D,m as C}from"./index-VLx2MJJu.js";function z(e,s,t,a,i){const l={"font-size":P(i),"line-height":"1.25em"};return e&&s&&!t&&!a&&(l["border-color"]=e,l["background-color"]=e),x(l)}const L={iconStyle:z};function h(e,s){e.$emit("input",s),e.$emit("change",s)}const I={name:"PressCheckbox",options:{...k},components:{PressIconPlus:y},mixins:[S(o)],field:!0,props:{name:{type:String,default:""},value:Boolean,disabled:Boolean,useIconSlot:Boolean,checkedColor:{type:String,default:""},labelPosition:{type:String,default:"right"},labelDisabled:Boolean,shape:{type:String,default:"round"},iconSize:{type:[Number],default:20},iconClass:{type:String,default:""},labelClass:{type:String,default:""},customStyle:{type:String,default:""},...g},emits:["input","change"],data(){return{parentDisabled:!1,direction:"vertical",dataValue:this.value}},computed:{innerLabelClass(){const{labelClass:e,labelPosition:s,disabled:t,parentDisabled:a}=this;return`${e} ${d.bem2("checkbox__label",[s,{disabled:t||a}])}`},checkboxClass(){const{direction:e,customClass:s}=this;return`${d.bem2("checkbox",[{horizontal:e==="horizontal"}])} ${s}`},iconStyle(){const{checkedColor:e,value:s,disabled:t,parentDisabled:a,iconSize:i}=this;return L.iconStyle(e,s,t,a,i)},innerIconClass(){const{shape:e,disabled:s,parentDisabled:t,dataValue:a}=this;return`${d.bem2("checkbox__icon",[e,{disabled:s||t,checked:a}])}`},iconCustomClass(){return this.iconClass},iconCustomStyle(){return"line-height: 1.25em;"}},watch:{value:{handler(e){this.dataValue=!!e}}},mounted(){this.update()},methods:{update(){this[o]&&this[o].updateChildren()},setData(e){Object.keys(e).forEach(s=>{this[s]=e[s]})},emitChange(e){this[o]?this.setParentValue(this[o],e):h(this,e),this.$nextTick(()=>{_(this,"change")})},toggle(){const{parentDisabled:e,disabled:s,dataValue:t}=this;!s&&!e&&this.emitChange(!t)},onClickLabel(){const{labelDisabled:e,parentDisabled:s,disabled:t,dataValue:a}=this;!t&&!e&&!s&&this.emitChange(!a)},setParentValue(e,s){const t=e.value.slice(),{name:a}=this,{max:i}=e;if(s){if(i&&t.length>=i)return;t.indexOf(a)===-1&&(t.push(a),h(e,t))}else{const l=t.indexOf(a);l!==-1&&(t.splice(l,1),h(e,t))}}}};function O(e,s,t,a,i,l){const p=v("press-icon-plus");return r(),u("div",{class:c(l.checkboxClass),style:C(t.customStyle)},[t.labelPosition==="left"?(r(),u("div",{key:0,class:c(l.innerLabelClass),onClick:s[0]||(s[0]=m((...n)=>l.onClickLabel&&l.onClickLabel(...n),["stop"]))},[b(e.$slots,"default",{},void 0,!0)],2)):f("",!0),B("div",{class:"press-checkbox__icon-wrap",onClick:s[1]||(s[1]=m((...n)=>l.toggle&&l.toggle(...n),["stop"]))},[t.useIconSlot?b(e.$slots,"icon",{key:0},void 0,!0):(r(),D(p,{key:1,name:"success",size:"0.8em",style:C(l.iconStyle),class:c(l.innerIconClass),"custom-class":l.iconCustomClass,"custom-style":l.iconCustomStyle},null,8,["style","class","custom-class","custom-style"]))]),t.labelPosition==="right"?(r(),u("div",{key:1,class:c(l.innerLabelClass),onClick:s[2]||(s[2]=m((...n)=>l.onClickLabel&&l.onClickLabel(...n),["stop"]))},[b(e.$slots,"default",{},void 0,!0)],2)):f("",!0)],6)}const G=V(I,[["render",O],["__scopeId","data-v-70b7b08f"]]);export{G as P};
