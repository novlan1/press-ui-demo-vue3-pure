import{P as f,f as P}from"./sche-item-BYjlO7Hp.js";import{P as S}from"./press-popup-cell-BAyvtasA.js";import{P as C}from"./press-picker-39gRzZ_X.js";import{P as I}from"./press-cell-j69wMGN4.js";import{B as g,_ as A,C as b,o as w,c as L,f as o,n as y,a as D,r as i}from"./index-BZexHo5h.js";import{S as B,c as E,a as v,b as c}from"./custom-7Aszn9Vd.js";import"./status-helper-D2zksTPb.js";import"./time-DadpJyRx.js";import"./index-DfrNFuIM.js";import"./validator-OjQp2SYe.js";import"./press-popup-7HnpDVXn.js";import"./press-button-DeHHH_6o.js";import"./press-icon-plus-5Xj-bw2h.js";import"./utils-Do31p4kb.js";import"./add-unit-Df5pRFBE.js";import"./press-info-BWsAQQHi.js";import"./press-component-HD2axD72.js";import"./press-loading-plus-Df-tLDhD.js";import"./press-loading-wkUvB1Ib.js";import"./button-BaKXjqxg.js";import"./system-BAdrsxg_.js";import"./function-CHWTa32-.js";import"./press-switch-BgOgGYGX.js";import"./computed-COUhjXwe.js";import"./functional-DDGVd29A.js";import"./rect-ZZRvyvMD.js";import"./scroll-DZ_Dh06R.js";import"./link-Ds6ljOst.js";import"./event-Dm-SpHU4.js";import"./support-passive-CNRHRm4O.js";const a={status:B.PREVIEW_CUSTOM_SCHE,isAdmin:!1};function T({context:e,callback:s}){g({context:e,title:"自定义设置",closeIcon:!0,cellList:[E({local:a,context:e,callback:s}),v({local:a,context:e,callback:s})]})}const l={battleList:[{teamList:[{teamid:"TEAM_ID_A",teamname:"3813_team",teamavatar:"https://image-1251917893.file.myqcloud.com/Esports/user/img/default-avatar.png",capuid:"3d3d2081-dc23-4ff3-9805-1fd2781072a6",score:1,isWinner:1},{teamid:"TEAM_ID_B",teamname:"3304_team",teamavatar:"https://image-1251917893.file.myqcloud.com/Esports/user/img/default-avatar.png",capuid:"0dcef6aa-60d9-4019-a828-33978fa560c8",score:0}],battleid:"10004456_101_winner_1_1_1_1686461401_1",gameName:"杨的比赛",roundName:"胜者组第1轮",boType:1,curBo:1,roomType:1,battleStatus:"准备中",redSide:"85A53B755B55380CF0FBD480BDE71D96",schid:"10004456_101_winner_1_1_1_1686461401",status:"未开始",realStatus:50,isWeChatLiving:!1,liveInfo:{},nodeItem:{schid:"10004456_101_winner_1_1_1_1686461401",gid:331,sch_type:2,sch_rule:{round_stage:101,round_type:"winner",round_id:1,partition_id:1,group_id:1,tree_node_uni_id:"10004456_101_winner_1_1_1",pre_tree_node:"null",bracket_id:1},sch_score:{teama_id:"85A53B755B55380CF0FBD480BDE71D96",teamb_id:"017564FA650E8982010A5706EC78F7B3",bo_type:1,cur_bo:1,room_type:1,ref_room:2,auto_fail:1,show_red:1},sch_dantao:{both_team_set:3},state:50,ctime:1686461402,utime:1686461402,version:2,childid:10004456,battle_list:[{schid:"10004456_101_winner_1_1_1_1686461401",battleid:"10004456_101_winner_1_1_1_1686461401_1",gid:331,childid:10004456,bonum:1,battle_state:100,ctime:1686461402,stime:1686461402,red_side:"85A53B755B55380CF0FBD480BDE71D96"}],rawState:50,status:"未开始"},bracketIdDesc:"U1"}],roundInfo:{child_id:10004456,gid:331,round_stage:101,round_type:"winner",round_id:1,round_name:"胜者组第1轮",bo_type:1,grp_num:1,grp_source_num:128,source_num:128,promote_num:64,start_battle_type:1,ready_time_utime:1686461400,latest_ready_time:1686461400},partitionId:1,isChamp:!1,finals:!0};function k({info:e}){return{...l,battleList:[{...l.battleList[0]||{},...e||{}}]}}const N={i18n:{"zh-CN":{custom:"自定义"},"en-US":{custom:"Custom"}},components:{ScheduleItem:f,PressPopupCell:S,PressPicker:C,PressCell:I},data(){var s;const e={...a,isPreview:((s=c[a.status])==null?void 0:s.isPreview)||0,isAdmin:!1,myTeamId:"TEAM_ID_A",canShowOrderButton:!0,scheSubStatusMap:{}};return{sectionStyle:"margin: 0;background: #f7f8fa;",headerStyle:"background: #f7f8fa;",FUNCTIONAL_ID_MAP:b,scheLocal:e,scheInfo:{}}},mounted(){this.generateData()},methods:{onShowBasicPopupCell(){T({context:this,callback:{changeStatus:this.changeStatus,changeAdmin:this.changeAdmin}})},changeAdmin(e){this.scheLocal={...this.scheLocal,isAdmin:e},this.generateData()},changeStatus(e){this.scheLocal={...this.scheLocal,status:e,isPreview:c[e].isPreview||0},this.generateData()},generateData(){const{isPreview:e,isAdmin:s,status:m,myTeamId:_,canShowOrderButton:t,scheSubStatusMap:r}=this.scheLocal,n=k({info:c[m]});this.scheInfo=P({scheInfo:n,isPreview:e,isAdmin:s,myTeamId:_,canShowOrderButton:t,scheSubStatusMap:r})}}},M={class:"demo-wrap demo-wrap--gray"},F={class:"demo-container"};function U(e,s,m,_,t,r){const n=i("press-cell"),d=i("demo-block"),u=i("ScheduleItem"),p=i("PressPopupCell"),h=i("PressPicker");return w(),L("div",M,[o(d,{title:e.t("basicUsage"),"section-style":t.sectionStyle,"header-style":t.headerStyle},{default:y(()=>[o(n,{title:e.t("custom"),"is-link":"",onClick:r.onShowBasicPopupCell},null,8,["title","onClick"])]),_:1},8,["title","section-style","header-style"]),D("div",F,[o(u,{"sche-info":t.scheInfo,"is-preview":t.scheLocal.isPreview,"is-admin":t.scheLocal.isAdmin,"my-team-id":t.scheLocal.myTeamId,"can-show-order-button":t.scheLocal.canShowOrderButton,"sche-sub-status-map":t.scheLocal.scheSubStatusMap},null,8,["sche-info","is-preview","is-admin","my-team-id","can-show-order-button","sche-sub-status-map"])]),o(p,{id:t.FUNCTIONAL_ID_MAP.POPUP_CELL,ref:t.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"},null,8,["id"]),o(h,{id:t.FUNCTIONAL_ID_MAP.PICKER,ref:t.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"},null,8,["id"])])}const ue=A(N,[["render",U],["__scopeId","data-v-2850fd86"]]);export{ue as default};
