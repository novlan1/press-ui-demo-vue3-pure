var E={};Object.defineProperty(E,"__esModule",{value:!0});var m=function(o){var r,a=document.getElementsByTagName("script")[0];(r=a==null?void 0:a.parentNode)===null||r===void 0||r.insertBefore(o,a)},B=function(o,r,a,n){a===void 0&&(a="utf-8"),n===void 0&&(n=null);var t;r&&typeof r!="function"&&(n=r.context||n,t=r.setup,r=r.callback);var v=!1,i,d,l=function(){v||(v=!0,d==null||d(),r&&r.call(n,i))},f=function(){i=new Error(o||"EMPTY"),l()},y=document.querySelector('script[src="'.concat(o,'"]'));if(y)var h=setInterval(function(){y.isready&&(l(),clearInterval(h))},20);else{var e=document.createElement("script");if(e.isready=!1,e.readyState&&!("async"in e)){var C={loaded:!0,complete:!0},S=!1;d=function(){e.onreadystatechange=null,e.onerror=null},e.onreadystatechange=function(){var u=e.readyState;if(!i){if(!S&&C[u]&&(S=!0,m(e)),u==="loaded"&&(e.children,e.readyState==="loading"))return f();e.readyState==="complete"&&(e.isready=!0,l())}},e.onerror=f,t&&t.call(n,e),e.src=o}else d=function(){e.onload=null,e.onerror=null},e.onerror=f,e.onload=function(){e.isready=!0,l()},e.async=!0,e.charset=a||"utf-8",t&&t.call(n,e),e.src=o,m(e)}};E.loader=B;export{E as l};