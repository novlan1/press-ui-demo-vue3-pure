import{C as o,D as e,_ as n,v as a,x as i,o as u,c,h as l,n as d,l as m}from"./index-BIszYdsF.js";import{P as p}from"./relation-Ce8eT7mn.js";import{e as f}from"./parent-map-_1jD1UtF.js";function h(t){return t.gutter?o({"margin-right":e(-t.gutter/2),"margin-left":e(-t.gutter/2)}):""}const g={rootStyle:h},_={name:"PressRow",options:{...a,styleIsolation:"shared"},mixins:[p(f)],props:{gutter:{type:Number,default:0},...i},emits:[],data(){return{computed:g}},watch:{gutter:{handler(){this.setGutter()},immediate:!0}},created(){this.children=[]},mounted(){this.setGutter()},methods:{setGutter(){this.children&&this.children.forEach(t=>{t.gutter=this.gutter})}}};function y(t,P,r,w,s,x){return u(),c("div",{class:d(["press-row",t.customClass]),style:m(s.computed.rootStyle({gutter:r.gutter}))},[l(t.$slots,"default",{},void 0,!0)],6)}const C=n(_,[["render",y],["__scopeId","data-v-c6c357c1"]]);export{C as P};
