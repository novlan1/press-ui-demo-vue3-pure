import{o as f,b as s}from"./event-Dm-SpHU4.js";let a=0;function d(i){const n=`binded_${a}`;a+=1;function e(){const t=this;t[n]||(i.call(t,f,!0),t[n]=!0)}function o(){const t=this;t[n]&&(i.call(t,s,!1),t[n]=!1)}return{mounted:e,activated:e,deactivated:o,beforeDestroy:o}}export{d as B};
