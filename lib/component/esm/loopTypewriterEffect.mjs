import{s as e,e as n}from"./typingInterval.mjs";import{t}from"./hideCursorOnAnimationEnd.mjs";const a=e=>e.childNodes.forEach((e=>e.remove())),i=async(n,t)=>{const a=n.innerHTML.replaceAll("&amp;","&");for(let i=a.length-1;i>=0;i--)">"===a[i]&&(i=a.lastIndexOf("<",i)),n.innerHTML=a.slice(0,i),await e(t.interval)},o=async({currentNode:a,text:o},r)=>{a.textContent="",a.classList.add("typing");for(let t=0;t<=o.length;t++){"<"===o[t]&&(t=o.indexOf(">",t)+1),a.innerHTML=o.slice(0,t);const l=o.replaceAll("&","&amp;");a.innerHTML===l&&(r.dispatch("done"),await n("number"==typeof r.loop?r.loop:1500),await i(a,r)),await e(r.interval)}t(a)};export{i as e,a as o,o as r};
