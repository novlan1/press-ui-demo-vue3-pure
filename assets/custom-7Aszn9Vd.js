import{B as A,aa as l}from"./index-BZexHo5h.js";const c=64,_=15,I={DEFAULT_AVATAR:"https://image-1251917893.file.myqcloud.com/Esports/user/img/default-avatar.png",DEFAULT_NAME:"队伍名称很长很长很长"},s={PREVIEW:"PREVIEW",PREVIEW_CUSTOM_SCHE:"PREVIEW_CUSTOM_SCHE",NOT_START:"NOT_START",PLAYING:"PLAYING",PLAYING_WITH_CHANNELS:"PLAYING_WITH_CHANNELS",ENDED:"ENDED"},n={[s.PREVIEW]:"报名中，未定义赛程",[s.PREVIEW_CUSTOM_SCHE]:"报名中，已定义赛程",[s.NOT_START]:"未开赛",[s.PLAYING]:"进行中，无视频号",[s.PLAYING_WITH_CHANNELS]:"进行中，有视频号",[s.ENDED]:"已结束"},h={[s.PREVIEW]:{isPreview:1,realStatus:0},[s.PREVIEW_CUSTOM_SCHE]:{isPreview:2,realStatus:0},[s.NOT_START]:{realStatus:50},[s.PLAYING]:{realStatus:100,curBo:1,boType:3},[s.PLAYING_WITH_CHANNELS]:{realStatus:100,isWeChatLiving:!0,curBo:1,boType:3},[s.ENDED]:{realStatus:200}},p=Object.keys(n).map(e=>({label:n[e],value:e})),T=Array.from({length:_}).map((e,t)=>({label:`${2**(t+1)} 队`,value:2**(t+1)})),S=T.reduce((e,t)=>(e[t.value]=t.label,e),{}),u={KNOCK_OUT:{name:"KNOCK_OUT",title:"淘汰赛"},CYCLE:{name:"CYCLE",title:"循环赛"},DOUBLE_FAIL_LOSER:{name:"DOUBLE_FAIL_LOSER",title:"双败赛败者组"}},E=Object.keys(u).map(e=>({label:u[e].title,value:u[e].name})),a={teamNumber:c,status:s.NOT_START,isAdmin:!1,groupType:E[0].value,showError:!1};function N({local:e,context:t,callback:o}){return{label:"是否为管理员",type:"switch",open:e.isAdmin,click:({context:r})=>{r.closeDialog(),e.isAdmin=!e.isAdmin,t.onGTip("设置成功"),typeof o.changeAdmin=="function"&&o.changeAdmin.call(t,e.isAdmin)}}}function P({local:e,context:t,callback:o}){return{label:"当前状态",value:n[e.status],click:({context:r})=>{r.closeDialog(),l({context:t,title:"当前状态",closeIcon:!0,list:p,current:{value:e.status}}).then(({item:i})=>{e.status=i.value,t.onGTip("设置成功"),typeof o.changeStatus=="function"&&o.changeStatus.call(t,i.value)}).catch(()=>{})}}}function L({context:e,callback:t}){A({context:e,title:"自定义设置",closeIcon:!0,cellList:[{label:"队伍个数",value:S[a.teamNumber],click:({context:o})=>{o.closeDialog(),l({context:e,title:"队伍个数",closeIcon:!0,list:T,current:{value:a.teamNumber}}).then(({item:r})=>{a.teamNumber=r.value,e.onGTip("设置成功"),typeof t.changeTeamNumber=="function"&&t.changeTeamNumber.call(e,r.value)}).catch(()=>{})}},P({local:a,context:e,callback:t}),{label:"赛制",value:u[a.groupType].title,click:({context:o})=>{o.closeDialog(),l({context:e,title:"当前状态",closeIcon:!0,list:E,current:{value:a.groupType}}).then(({item:r})=>{a.groupType=r.value,e.onGTip("设置成功"),typeof t.changeGroupType=="function"&&t.changeGroupType.call(e,r.value)}).catch(()=>{})}},N({local:a,context:e,callback:t}),{label:"是否显示顶号异常",description:"需设置管理员",type:"switch",open:a.showError,click:({context:o})=>{o.closeDialog(),a.showError=!a.showError,e.onGTip("设置成功"),typeof t.changeErrorTip=="function"&&t.changeErrorTip.call(e,a.showError)}}]})}export{u as G,I as M,s as S,N as a,h as b,P as c,a as l,L as s};
