import{P as f}from"./press-count-down-CozrkYhm.js";import{P as y,a as h}from"./press-grid-item-CZ5_edVC.js";import{s as a,a as u}from"./index-BfMPRRRT.js";import{_ as C,o as S,c as D,e,k as o,r as c,a as p,t as d}from"./index-88cP1sOH.js";import"./relation-Ce8eT7mn.js";import"./parent-map-_1jD1UtF.js";import"./link-JqS4mJdw.js";const w={i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:f,PressGrid:y,PressGridItem:h},data(){return{time:30*60*60*1e3,sectionStyle:"margin: 0 12px 20px;"}},methods:{onChange(){},start(){const t=a(this,"#controlCountDown");u(t,null,"start")},pause(){const t=a(this,"#controlCountDown");u(t,null,"pause")},reset(){const t=a(this,"#controlCountDown");u(t,null,"reset")},finished(){}}},k={class:"demo-wrap"},g={class:"item"},F={class:"item"},b={class:"item"};function H(t,P,v,x,s,n){const i=c("press-count-down"),l=c("demo-block"),r=c("press-grid-item"),_=c("press-grid");return S(),D("div",k,[e(l,{title:t.t("basicUsage"),"section-style":s.sectionStyle},{default:o(()=>[e(i,{time:s.time},null,8,["time"])]),_:1},8,["title","section-style"]),e(l,{title:t.t("customFormat"),"section-style":s.sectionStyle},{default:o(()=>[e(i,{time:s.time,format:t.t("formatWithDay")},null,8,["time","format"])]),_:1},8,["title","section-style"]),e(l,{title:t.t("millisecond"),"section-style":s.sectionStyle},{default:o(()=>[e(i,{time:s.time,millisecond:"",format:"HH:mm:ss:SSS"},null,8,["time"])]),_:1},8,["title","section-style"]),e(l,{title:t.t("customStyle"),"section-style":s.sectionStyle},{default:o(()=>[e(i,{"use-slot":"",time:s.time,onChange:n.onChange},{default:o(({timeData:m})=>[p("span",g,d(m.hours),1),p("span",F,d(m.minutes),1),p("span",b,d(m.seconds),1)]),_:1},8,["time","onChange"])]),_:1},8,["title","section-style"]),e(l,{title:t.t("manualControl"),"section-style":s.sectionStyle},{default:o(()=>[e(i,{id:"controlCountDown",ref:"controlCountDown",millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:n.finished},null,8,["onFinish"])]),_:1},8,["title","section-style"]),e(_,{clickable:"","column-num":3},{default:o(()=>[e(r,{text:t.t("start"),icon:"play-circle-o",onClick:n.start},null,8,["text","onClick"]),e(r,{text:t.t("pause"),icon:"pause-circle-o",onClick:n.pause},null,8,["text","onClick"]),e(r,{text:t.t("reset"),icon:"replay",onClick:n.reset},null,8,["text","onClick"])]),_:1})])}const V=C(w,[["render",H],["__scopeId","data-v-4b25c55b"]]);export{V as default};