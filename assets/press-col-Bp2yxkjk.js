import{B as r,C as o,v as n,x as a,E as l,_ as i,o as u,c as f,h as d,n as c,l as m}from"./index-C8vugXWi.js";import{C as p}from"./relation-Ce8eT7mn.js";import{e as _}from"./parent-map-_1jD1UtF.js";function g(e){return e.gutter?r({"padding-right":o(e.gutter/2),"padding-left":o(e.gutter/2)}):""}const y={rootStyle:g},C={name:"PressCol",options:{...n,styleIsolation:"shared"},mixins:[p(_)],props:{span:{type:Number,default:0},offset:{type:Number,default:0},...a},emits:[],data(){return{utils:l,computed:y,gutter:0}}};function h(e,P,t,b,s,x){return u(),f("div",{class:c([e.customClass,s.utils.bem2("col",[t.span]),t.offset?`press-col--offset-${t.offset}`:""]),style:m(s.computed.rootStyle({gutter:s.gutter}))},[d(e.$slots,"default",{},void 0,!0)],6)}const E=i(C,[["render",h],["__scopeId","data-v-db5e7684"]]);export{E as P};