import"svelte/internal";import{s as t}from"./Typewriter.mjs";let e=[];const n=(t,e)=>{const n=t.textContent.split("").map((t,n)=>{const o=e.includes(n)||" "===t,r=String.fromCharCode(65+Math.round(50*Math.random()));return o?t:r}).join("");return t.textContent=n,n},o=(t,n)=>n.forEach((n,o)=>!e.includes(o)&&n===t[o]&&e.push(o));export default async({elements:r},a)=>{r.forEach(async({currentNode:r,text:s})=>{e=[];const i="number"==typeof a.scramble?a.scramble:3e3,c=(new Date).getTime();for(;;){const m=n(r,e);o(m,s),await t(a.interval);const l=r.textContent!=s.join(""),d=(new Date).getTime()-c<i;if(!l||!d)break}a.dispatch("done"),r.textContent=s.join("")})};
