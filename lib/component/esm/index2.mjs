import"svelte/internal";export{t as createElement,n as getElements,e as hasSingleTextNode}from"./Typewriter.mjs";export{o as cleanChildNodes,n as unwriteEffect}from"./unwriteEffect.mjs";export{o as rng,e as sleep,s as typingInterval}from"./typingInterval.mjs";export{t as hideCursorOnAnimationEnd,o as writeEffect}from"./writeEffect.mjs";export{o as isInRange}from"./isInRange.mjs";export{t as onAnimationEnd}from"./onAnimationEnd.mjs";const r=(e,t)=>t.text.length-e.text.length,a=e=>e.sort(r)[0].currentNode;export{a as getLongestTextElement};
