import"svelte/internal";import{c as e,l as t,r as o,h as r}from"./Typewriter.mjs";let n=[];const a=e=>{for(;;){const t=o(0,e.length),a="number"==typeof n&&t!==n;if(Array.isArray(n)&&!n.includes(t)||a){a&&(n=[]),n.push(t);return e[t]}n.length===e.length&&(n=r?[]:n.pop())}};export default async({node:o,elements:r},n)=>{for(;n.loopRandom;){const{currentNode:s,text:l}=a(r);e(o);const c=s.tagName.toLowerCase(),d=document.createElement(c);d.textContent=l.join(""),o.appendChild(d),await t({currentNode:d,text:l},n),o.childNodes.forEach((e=>e.remove())),e(o)}};