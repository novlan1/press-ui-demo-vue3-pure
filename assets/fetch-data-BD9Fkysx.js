import{m as i}from"./index-C8vugXWi.js";function a(n){return new Promise((e,r)=>{if(i()){fetch(n).then(t=>t.status===200?t.json():{}).then(t=>{e(t)}).catch(t=>{r(t)});return}uni.request({url:n,data:{},method:"GET",sslVerify:!0,success:({data:t})=>{e(t)},fail:t=>{r(t)}})})}export{a as f};