import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-651d7991.js";const u=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let s;e.disabled=!0;let i;h(u,{enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0,defaultDate:new Date,minuteIncrement:1,enableSeconds:!1,onClose(t){s=t[0];const n=new Date;s>n?e.disabled=!1:(e.disabled=!0,y.show({title:"Error",message:"Please choose a date in the future",position:"topCenter",backgroundColor:"#ff4d4d",iconColor:"#ffffff"}))}});e.addEventListener("click",function(){e.disabled||(D(),e.disabled=!0,u.disabled=!0)});function D(){i=setInterval(q,1e3)}function q(){const t=new Date,n=s-t;if(n<=0){clearInterval(i);return}const{days:a,hours:c,minutes:d,seconds:r}=E(n);S.textContent=o(a),b.textContent=o(c),p.textContent=o(d),C.textContent=o(r)}function o(t){return String(t).padStart(2,"0")}function E(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}
//# sourceMappingURL=commonHelpers.js.map