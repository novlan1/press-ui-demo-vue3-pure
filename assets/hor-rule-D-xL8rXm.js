import{P as H}from"./press-hor-dialog-BXN5S0Xx.js";import{_,r as e,o as l,b as d,n as p,a as i,c as g,f as c,d as k}from"./index-BZexHo5h.js";import"./act-bem-hi9TDZSH.js";const C={name:"PressHorRule",components:{PressHorDialog:H},props:{rule:{type:String,desc:"比赛规则",default:"比赛规则"}},options:{virtualHost:!0},emits:["close"],data(){return{}},computed:{},mounted(){},methods:{close(...o){this.$emit("close",...o)}}},P={class:"press-rule"},$=["innerHTML"];function v(o,s,a,u,t,n){const r=e("PressHorDialog");return l(),d(r,{title:"比赛规则","popup-with":"9.6",onClose:n.close},{default:p(()=>[i("div",P,[i("div",{innerHTML:a.rule},null,8,$)])]),_:1},8,["onClose"])}const w=_(C,[["render",v],["__scopeId","data-v-c99bd183"]]),b={components:{PressHorRule:w},data(){return{show:!1}},methods:{close(){this.show=!1}}},R={class:"demo-wrap"};function x(o,s,a,u,t,n){const r=e("press-cell"),m=e("ToggleHeader"),f=e("demo-block"),h=e("PressHorRule");return l(),g("div",R,[c(f,{title:o.t("basicUsage")},{default:p(()=>[c(r,{title:"展示","is-link":"",onClick:s[0]||(s[0]=B=>t.show=!0)}),c(m)]),_:1},8,["title"]),t.show?(l(),d(h,{key:0,onClose:n.close},null,8,["onClose"])):k("",!0)])}const V=_(b,[["render",x]]);export{V as default};
