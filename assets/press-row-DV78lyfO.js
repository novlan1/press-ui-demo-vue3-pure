import{s as o}from"./style-CpIyAjCl.js";import{a as e}from"./add-unit-DeNeB5nf.js";import{d as i,a}from"./press-component-BmHMjgT0.js";import{P as n}from"./relation-Ce8eT7mn.js";import{d as u}from"./parent-map-CQhFZDpB.js";import{_ as m,o as c,c as d,i as l,n as p,m as f}from"./index-VLx2MJJu.js";function h(t){return t.gutter?o({"margin-right":e(-t.gutter/2),"margin-left":e(-t.gutter/2)}):""}const g={rootStyle:h},_={name:"PressRow",options:{...i,styleIsolation:"shared"},mixins:[n(u)],props:{gutter:{type:Number,default:0},...a},emits:[],data(){return{computed:g}},watch:{gutter:{handler(){this.setGutter()},immediate:!0}},created(){this.children=[]},mounted(){this.setGutter()},methods:{setGutter(){this.children&&this.children.forEach(t=>{t.gutter=this.gutter})}}};function y(t,P,r,w,s,R){return c(),d("div",{class:p(["press-row",t.customClass]),style:f(s.computed.rootStyle({gutter:r.gutter}))},[l(t.$slots,"default",{},void 0,!0)],6)}const v=m(_,[["render",y],["__scopeId","data-v-c6c357c1"]]);export{v as P};
