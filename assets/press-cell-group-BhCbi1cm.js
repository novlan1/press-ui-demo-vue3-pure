import{_ as i,I as l,o as r,c as o,n,t as c,d as u,a as d,i as p}from"./index-F6Gg9UHQ.js";const m={name:"PressCellGroup",props:{title:{type:String,default:""},border:{type:Boolean,default:!0},inset:{type:Boolean,default:!1},customClass:{type:String,default:""}},computed:{titleClass(){const{inset:e}=this;return l.bem2("cell-group__title",{inset:e})},groupClass(){const{inset:e,border:s,customClass:t}=this;return`${t} ${l.bem2("cell-group",{inset:e})} ${s?"press-hairline--top-bottom":""}`}}},_={class:"press-cell-group-index"};function f(e,s,t,C,g,a){return r(),o("div",_,[t.title?(r(),o("div",{key:0,class:n(a.titleClass)},c(t.title),3)):u("",!0),d("div",{class:n(a.groupClass)},[p(e.$slots,"default",{},void 0,!0)],2)])}const b=i(m,[["render",f],["__scopeId","data-v-92304231"]]);export{b as P};
