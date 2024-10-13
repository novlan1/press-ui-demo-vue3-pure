import{a as G}from"./press-datetime-picker-popup-C9WzJM_u.js";import{_ as $,az as K,o as z,c as H,a as V,f as p,l as I,r as f}from"./index-F6Gg9UHQ.js";import{P as X}from"./press-picker-CcK6WXHz.js";import{P as W}from"./press-cell-B51DLGhM.js";import{b as C,g as Z,c as v,t as b,d as S,e as j,B as R,a as d,P as Q,D as h,f as q,S as J,o as _,h as w,l as g,i as ee,j as N,F as te}from"./helper-Ba_VSuEi.js";import"./press-picker-plus-C5P--dQ1.js";import"./number-CU9l-NjU.js";import"./parent-map-7gZjKT_J.js";import"./scroll-view-UNHMkMyI.js";import"./rect-B27xLIPj.js";import"./link-CpGN79EY.js";import"./event-BwRIw3Q8.js";const oe=15*60*1e3,M=5;function E(t,e){return t==="year"?`${e}年`:t==="month"?`${e}月`:t==="day"?`${e}日`:t==="hour"?`${e}时`:t==="minute"?`${e}分`:e}function F({type:t,value:e,minDate:o,currentDate:c,otherOption:l="不启用"}){const n=new Date(o).getFullYear();if(t==="year"){if(e==n)return l}else if(new Date(c).getFullYear()===n)return"";return E(t,e)}const x=(t,e=M)=>t.filter(c=>c%e===0);function B(t,e,o,c=M){if(t==="minute"){const l=x(e,c);return!l.length&&(e!=null&&e[0])?[e[0]]:l}return e}function O({type:t,options:e,currentDate:o,delaySeconds:c=oe,distance:l=M}){const n=new Date().getFullYear(),a=new Date(o).getFullYear(),i=new Date(o).getMonth(),s=new Date(o).getDate(),u=new Date(o).getHours(),m=new Date(Date.now()+c).getMonth(),T=new Date(Date.now()+c).getDate(),D=new Date(Date.now()+c).getHours(),y=new Date(Date.now()+c).getMinutes();if(a===n&&t!=="year"){if(t==="month")return e.slice(m);if(t==="day"&&i===m)return e.slice(T-1);if(t==="hour"&&i===m&&s===T)return e.slice(D);if(t==="minute"&&i===m&&s===T&&u<=D)return x(e.slice(y),l)}return t==="minute"?x(e,l):e}const r={startBattleType:1,fixStartTime:parseInt(`${Date.now()/1e3}`,10),fixLatestReadyTime:0,boType:1,bpType:0},P=({context:t,type:e})=>{r.startBattleType=e,t.onGTip("设置成功")};function le(t){C({context:t,title:"开赛设置",closeIcon:!0,cellList:[{label:"开赛方式",value:Z(r.startBattleType,r.fixStartTime),click:({context:e})=>{e.closeDialog(),v({context:t,title:"开赛方式",closeIcon:!0,cellList:[{label:"人满开赛",description:"参赛双方满10人准备就绪即可比赛。",type:"checkbox",checked:r.startBattleType===1,click:({context:o})=>{o.closeDialog(),P({type:1,context:t})}},{label:"手动开赛",description:"管理员手动点击开赛，选手才能进行比赛。",type:"checkbox",checked:r.startBattleType===2,click:({context:o})=>{o.closeDialog(),P({type:2,context:t})}},{label:"定时开赛",description:[{content:"本轮「32进16」将于"},{content:b(r.fixStartTime,"M月d日 hh:mm"),light:!0,click:o=>{const{context:c}=o;console.log("err",o),c.closeDialog(),S({context:t,title:"定时开赛时间",button:"确认",closeIcon:!0,datetimePicker:{minDate:h.ON_TIME_START.MIN,maxDate:h.ON_TIME_START.MAX,value:r.fixStartTime*1e3,immediateCheck:!0,formatter:E,filter:B}}).then(({value:l,context:n})=>{n.closeDialog(),r.fixStartTime=parseInt(`${l/1e3}`,10),P({type:3,context:t});const a=b(l,"yyyy-MM-dd hh:mm:ss");console.log("[confirm] value",l,new Date(l)),t.onGTip(`设置成功 ${a}`,3e3)}).catch(l=>{const{context:n}=l;console.log("err",l),n.closeDialog()})}},{content:"定时开赛。"}],type:"checkbox",checked:r.startBattleType===3,click:({context:o})=>{o.closeDialog(),P({type:3,context:t})}}],tip:"创建比赛后，可按比赛轮次精确设置。"}).then(()=>{}).catch(o=>{console.log("err",o);const{context:c}=o;c.closeDialog()})}},{label:"选手截止上场时间",value:j(r.fixLatestReadyTime),click:({context:e})=>{e.closeDialog();const o=r.fixLatestReadyTime===0?new Date:new Date(r.fixLatestReadyTime*1e3),c=h.LATEST_READY.MIN,l=h.LATEST_READY.MAX;S({context:t,title:"自动弃权设置",button:"确认",closeIcon:!0,datetimePicker:{minDate:c,maxDate:l,value:o.getTime(),immediateCheck:!0,filter:(n,a,i)=>O({type:n,options:a,currentDate:i}),formatter:(n,a,i)=>F({type:n,value:a,currentDate:i,minDate:c}),input:()=>{}}}).then(({value:n,context:a})=>{a.closeDialog();const i=b(new Date(c).getTime(),"yyyy"),u=b(n,"yyyy")===i,m=b(n,"yyyy-MM-dd hh:mm:ss");r.fixLatestReadyTime=u?0:parseInt(`${new Date(n).getTime()/1e3}`,10),console.log("[confirm] value",n,new Date(n)),t.onGTip(`设置成功 ${m}`,3e3)}).catch(n=>{const{context:a}=n;console.log("[showDateTimePicker] err",n),a.closeDialog()})}}]}).then(()=>{}).catch(e=>{const{context:o={}}=e||{};console.log("[startMatchSet] err",e),o.closeDialog()})}function ne(t){C({context:t,title:"对局设置",closeIcon:!0,cellList:[{label:"决胜方式",value:R[r.boType],click:({context:e})=>{e.closeDialog(),d({context:t,title:"决胜方式",closeIcon:!0,list:q,current:{label:R[r.boType],value:r.boType}}).then(({item:o})=>{r.boType=o.value,t.onGTip("设置成功")}).catch(()=>{})}},{label:"Ban位",value:Q[r.bpType],click:({context:e})=>{e.closeDialog(),d({context:t,title:"Ban位设置",closeIcon:!0,list:J,current:{value:r.bpType}}).then(({item:o})=>{r.bpType=o.value,t.onGTip("设置成功")}).catch(()=>{})}}]}).then(e=>{const{context:o={}}=e||{};o.closeDialog()}).catch(e=>{const{context:o={}}=e||{};console.log("[battleSet] err",e),o.closeDialog()})}const k={fixStartTime:parseInt(`${Date.now()/1e3}`,10),fixLatestReadyTime:0,curRoundType:"winner"};function U(t){return t.map(e=>({label:e.round_name,value:e.round_id}))}function Y(t){return Array.from({length:10}).map((o,c)=>({round_id:c+1,round_name:`${t==="winner"?"胜者":"败者"}组第${c+1}轮`})).concat({round_id:11,round_name:"决赛"})}function A({valueList:t,pickerList:e,context:o,success:c,meta:l}){function n(i={}){A({valueList:t,pickerList:e,context:o,success:c,meta:l,...i||{}})}const a=[{label:"开始轮次",value:t[0].label,click:({context:i})=>{i.closeDialog(),d({context:o,title:"选择轮次",button:"确定",closeIcon:!0,list:e[0],current:t[0]}).then(({item:s})=>{n({valueList:[s,...t.slice(1)]})}).catch(()=>{})}},{label:l.timeLabel,value:t[1].label,click:({context:i})=>{i.closeDialog(),S({context:o,title:l.timePickerTitle,closeIcon:!0,button:"确认",datetimePicker:{minDate:l.minDate,maxDate:l.maxDate,value:t[1].value*1e3,formatter:l.timePickerFormatter,filter:l.timePickerFilter}}).then(({context:s,value:u})=>{s.closeDialog();const m=l.timerPickerParser(u);n({valueList:[t[0],{label:l.timeFormat(m),value:m},t[2]]})}).catch(({context:s})=>{s.closeDialog()})}}];if(l.showTab){const i=[{label:"胜者组",value:"winner"},{label:"败者组",value:"loser"}];a.unshift({type:"tab",label:"分组",active:k.curRoundType,tabList:i,click:s=>{const{tabItem:u,item:m}=s;if(!u||u.value===m.active)return;a[0].active=u.value,k.curRoundType=u.value;const T=Y(k.curRoundType),D=T[0]||{};if(e[0]=U(T),t[0].label=D.round_name,t[0].value=D.round_id,a[1].value=D.round_name,l.type===w.LAST_READY_TIME){const y=N();t[1].label=g(y),t[1].value=y,a[2].value=g(y)}else{const y=k.fixStartTime;t[1].label=_(y),t[1].value=y,a[2].value=_(y)}}})}t[1].value&&a.push({label:"后续轮次间隔时间",value:t[2].label,click:({context:i})=>{i.closeDialog(),d({context:o,title:"后续轮次间隔时间",button:"确定",closeIcon:!0,list:ee(),current:{value:t[2].value}}).then(({item:s})=>{n({valueList:[...t.slice(0,2),s]})}).catch(()=>{})}}),v({context:o,title:l.title,closeIcon:!0,button:"确定",cellList:a}).then(({context:i})=>{i.closeDialog(),typeof c=="function"&&c()}).catch(i=>{console.log("[showBatchSetInnerPopup] err",i);const{context:s}=i;s.closeDialog()})}function ie(t){const e=Y(k.curRoundType),o=U(e),c=e[0],l=()=>{t.onGTip("设置成功")};C({context:t,bottomButton:"取消",showTitle:!1,arrowIcon:!0,cellList:[{label:"批量设置定时开赛",type:"button",click:({context:n})=>{n.closeDialog();const a=k.fixStartTime;A({meta:{showTab:!0,title:"批量设置定时开赛",timeLabel:"开赛时间",timePickerTitle:"定时开赛时间",timeFormat:_,minDate:h.ON_TIME_START.MIN,maxDate:h.ON_TIME_START.MAX,timePickerFormatter:E,timePickerFilter:B,timerPickerParser:i=>parseInt(`${i/1e3}`,10),type:w.ON_TIME_START},success:l,valueList:[{label:c.round_name,value:c.round_id},{label:_(a),value:a},{label:"60分钟",value:60}],pickerList:[o],context:t})}},{label:"批量设置截止上场时间",type:"button",click:({context:n})=>{n.closeDialog();const a=N();A({meta:{showTab:!0,title:"批量设置截止上场时间",timeLabel:"选手截止上场时间",timePickerTitle:"自动弃权设置",timeFormat:g,minDate:h.LATEST_READY.MIN,maxDate:h.LATEST_READY.MAX,timePickerFormatter:(i,s,u)=>F({type:i,value:s,minDate:h.LATEST_READY.MIN,currentDate:u}),timePickerFilter:(i,s,u)=>O({type:i,options:s,currentDate:u}),timerPickerParser:i=>{const s=b(h.LATEST_READY.MIN,"yyyy");return b(i,"yyyy")===s?0:parseInt(`${new Date(i).getTime()/1e3}`,10)},type:w.LAST_READY_TIME},success:l,valueList:[{label:c.round_name,value:c.round_id},{label:g(a),value:a},{label:"60分钟",value:60}],pickerList:[o],context:t})}}]}).then(()=>{}).catch(({context:n})=>{n.closeDialog()})}const L={activeRoundType:"winner"},ce={i18n:{"zh-CN":{customType:"自定义类型",examples:"案例",checkboxType:"Checkbox",multipleCheckboxType:"Multiple Checkbox",tabType:"Tab",switchType:"Switch",buttonType:"Button",wayToWin:"决胜方式",SomeContent:"一些内容",controlledPopup:"受控组件",functional:"函数式调用",check:"查看",closeIcon:"关闭图标",cancelIcon:"取消图标",noCloseOrCancel:"没有关闭/取消",plainButtonConfirm:"线框按钮",horizontal:"横版",matchSetting:"开赛设置",startType:"开赛方式",manualStart:"手动开赛",lastReadyTime:"选手截止上场时间",closed:"不启用",asyncConfirm:"异步确认中...",asyncConfirmSuccess:"异步确认后禁止关闭",asyncConfirmFail:"异步确认后禁止关闭",peakDuel:"巅峰对决",peakDuelDesc:"最后一局英雄不限，双方阵容互不可见",popupCellTip:"创建比赛后，可按比赛轮次精确设置。"},"en-US":{customType:"Custom Type",examples:"Examples",checkboxType:"Checkbox",multipleCheckboxType:"Multiple Checkbox",tabType:"Tab",switchType:"Switch",buttonType:"Button",wayToWin:"Bo Number",SomeContent:"Some Content",controlledPopup:"Controlled Popup",functional:"Functional Mode",check:"Check",closeIcon:"Close Ion",cancelIcon:"Cancel Icon",noCloseOrCancel:"No Close Or Cancel",plainButtonConfirm:"Plain Button",horizontal:"Horizontal Version",matchSetting:"Match Setting",startType:"Start Type",manualStart:"Manual Start",lastReadyTime:"Last Ready Time",closed:"Closed",asyncConfirm:"Async Confirm ...",asyncConfirmSuccess:"Async Confirm Success",asyncConfirmFail:"Async Confirm Fail",peakDuel:"Peak Duel",peakDuelDesc:"No limit to heroes in the last round",popupCellTip:"This is some tips."}},components:{PressPopupCell:K,PressDatetimePickerPopup:G,PressPicker:X,PressCell:W},data(){const t=this;return{FUNCTIONAL_ID_MAP:te,startMatchSet:le,battleSet:ne,batchSet:ie,customType:{checkboxType:{title:"Checkbox",cellList:[{label:"人满开赛",description:"参赛双方满10人准备就绪即可比赛。",type:"checkbox",click:({context:e})=>{e.closeDialog(),t.onGTip("修改成功")}},{label:"手动开赛",description:"管理员手动点击开赛，选手才能进行比赛。",type:"checkbox",checked:!0,click:({context:e})=>{e.closeDialog(),t.onGTip("修改成功")}}]},multipleCheckboxType:{title:"Checkbox",button:"确定",asyncConfirm:({checkedIndexList:e})=>{if(console.log("[checkedIndexList]...",e),!(e!=null&&e.length))return this.onGTip("必须选择一路"),!1;const o=this.customType.multipleCheckboxType.cellList.filter((c,l)=>e.indexOf(l)>-1).map(c=>c.label).join("、");return this.onGTip(`修改成功，${o}`),!0},cellList:[{label:"对抗路",type:"checkbox",click:()=>{}},{label:"中路",type:"checkbox",checked:!0,click:()=>{}},{label:"发育路",type:"checkbox",checked:!0,click:()=>{}}]},tabType:{title:"Tab",cellList:[{type:"tab",label:"分组",active:L.activeRoundType,tabList:[{label:"胜者组",value:"winner"},{label:"败者组",value:"loser"}],click:({tabItem:e,item:o})=>{!e||e.value===o.active||(console.log("[tabItem, item]: ",e,o),L.activeRoundType=e.value,this.customType.tabType.cellList[0].active=e.value,t.onGTip(`已切换至${e.label}`))}}]},switchType:{title:"Switch",cellList:[{label:"巅峰对决",description:"最后一局英雄不限，双方阵容互不可见",type:"switch",click:({context:e})=>{e.closeDialog(),t.onGTip("修改成功")}}]},buttonType:{title:"Button",bottomButton:"取消",cellList:[{label:"批量设置定时开赛",type:"button",click:({context:e})=>{e.closeDialog(),t.onGTip("修改成功")}},{label:"批量设置截止上场时间",type:"button",click:({context:e})=>{e.closeDialog(),t.onGTip("修改成功")}}]}}}},methods:{onShowBasicPopupCell(){C({context:this,closeIcon:!0,title:"Popup Cell",cellList:[{label:"决胜方式",value:"一局胜负",click:({context:t})=>{t.closeDialog()}},{label:"Ban位",value:"各禁4英雄",click:({context:t})=>{t.closeDialog()}}]}).catch(t=>{const{context:e}=t;e.closeDialog()})},onShowCustomType(t){const e=this.customType[t]||{};C({context:this,closeIcon:!0,...e}).then(({context:o,checkedIndexList:c})=>{console.log("[checkedIndexList]",c),o.closeDialog()}).catch(({context:o})=>{o.closeDialog()})},onShowPopupCell(t){t(this)}}},ae={class:"demo-wrap"};function se(t,e,o,c,l,n){const a=f("press-cell"),i=f("demo-block"),s=f("PressPopupCell"),u=f("PressPicker"),m=f("PressDatetimePickerPopup");return z(),H("div",ae,[V("div",null,[p(i,{title:t.t("basicUsage")},{default:I(()=>[p(a,{title:t.t("check"),"is-link":"",onClick:n.onShowBasicPopupCell},null,8,["title","onClick"])]),_:1},8,["title"]),p(i,{title:t.t("customType")},{default:I(()=>[p(a,{title:t.t("checkboxType"),"is-link":"",onClick:e[0]||(e[0]=T=>n.onShowCustomType("checkboxType"))},null,8,["title"]),p(a,{title:t.t("multipleCheckboxType"),"is-link":"",onClick:e[1]||(e[1]=T=>n.onShowCustomType("multipleCheckboxType"))},null,8,["title"]),p(a,{title:t.t("tabType"),"is-link":"",onClick:e[2]||(e[2]=T=>n.onShowCustomType("tabType"))},null,8,["title"]),p(a,{title:t.t("switchType"),"is-link":"",onClick:e[3]||(e[3]=T=>n.onShowCustomType("switchType"))},null,8,["title"]),p(a,{title:t.t("buttonType"),"is-link":"",onClick:e[4]||(e[4]=T=>n.onShowCustomType("buttonType"))},null,8,["title"])]),_:1},8,["title"]),p(i,{title:t.t("examples")},{default:I(()=>[p(a,{title:"开赛设置","is-link":"",onClick:e[5]||(e[5]=T=>n.onShowPopupCell(l.startMatchSet))}),p(a,{title:"对局设置","is-link":"",onClick:e[6]||(e[6]=T=>n.onShowPopupCell(l.battleSet))}),p(a,{title:"批量设置","is-link":"",onClick:e[7]||(e[7]=T=>n.onShowPopupCell(l.batchSet))})]),_:1},8,["title"])]),p(s,{id:l.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:l.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"]),p(s,{id:l.FUNCTIONAL_ID_MAP.POPUP_CELL_2,ref:l.FUNCTIONAL_ID_MAP.POPUP_CELL_2,mode:"functional"},null,8,["id"]),p(u,{id:l.FUNCTIONAL_ID_MAP.PICKER,ref:l.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"},null,8,["id"]),p(m,{id:l.FUNCTIONAL_ID_MAP.DATE_TIME_PICKER,ref:l.FUNCTIONAL_ID_MAP.DATE_TIME_PICKER,mode:"functional"},null,8,["id"])])}const Pe=$(ce,[["render",se],["__scopeId","data-v-147373bb"]]);export{Pe as default};