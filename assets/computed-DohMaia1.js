import{N as e}from"./index-88cP1sOH.js";function s(n){return new Promise((a,o)=>{if(e()){fetch(n).then(t=>t.status===200?t.json():{}).then(t=>{a(t)}).catch(t=>{o(t)});return}uni.request({url:n,data:{},method:"GET",sslVerify:!0,success:({data:t})=>{a(t)},fail:t=>{o(t)}})})}const c="https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__area_data.json";function r(n,a){return n.slice(0,+a)}const i={displayColumns:r};function f(){return s(c)}export{i as c,f as g};