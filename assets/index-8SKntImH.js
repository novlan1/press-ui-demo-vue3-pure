import"./add-unit-CSy-4COV.js";const f={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",reply:"回复",calendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:(t,l)=>`${t}年${l}月`,rangePrompt:t=>`选择天数不能超过 ${t} 天`},picker:{confirm:"确定"},dialog:{title:"温馨提示"}};let i=f,u=function(){};const d=function(t="",...l){let e=u.apply(this);if(e!=null)return e;const n=t.split(".");let a=i;for(let r=0,o=n.length;r<o;r++){const c=n[r];if(e=a[c],r===o-1)return e?typeof e=="function"?e(...l):e:i[c]||"";if(!e)return i[n[n.length-1]]||"";a=e}return""};export{d as t};
