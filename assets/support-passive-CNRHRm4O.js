let t=!1;try{const e={};Object.defineProperty(e,"passive",{get(){return t=!0,!0}}),window.addEventListener("test-passive",()=>{},e)}catch{}const s=(e=!0)=>t?{passive:e}:!1,a=s();export{a as P,t as S,s as p};
