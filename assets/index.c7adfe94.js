import{j as a,R as u,a as f}from"./vendor.48461fb6.js";const m=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(n){if(n.ep)return;n.ep=!0;const t=o(n);fetch(n.href,t)}};m();const p="_container_1tr2c_1";var v={container:p};function h({r:e,g:r,b:o}){return(e*299+r*587+o*114)/1e3}function g(e){if(!e||e===void 0||e==="")return;const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:void 0}function y(e,r=128){if(e===void 0)return"#000";if(e.length<7)return"#fff";const o=g(e);return o===void 0||h(o)>=r?"#000":"#fff"}function _(){return"#"+Math.floor(Math.random()*16777215).toString(16)}const w="_container_1c7n8_1";var l={container:w};const s=a.exports.jsx,C=a.exports.jsxs,N=({content:e,onAnswer:r})=>{const o=_(),c=y(o),n=(t,i)=>{t.preventDefault(),r(i)};return s("div",{className:l.container,style:{backgroundColor:o,color:c},onClick:t=>n(t,e),children:s("div",{className:l.content,children:e})})},b="_container_85kmk_1",k="_answers_85kmk_1";var d={container:b,answers:k};const x=({answers:e,onAnswer:r})=>s("div",{className:d.container,children:s("div",{className:d.answers,children:e.map(o=>s(N,{content:o,onAnswer:r},o))})}),$="_container_cyg3h_1";var j={container:$};const I=({text:e})=>s("div",{className:j.container,children:s("h1",{children:e})});var M={};const R=({question:e,answers:r,correct:o})=>{const c=n=>{alert(n===o?"Correct!":"Incorrect!")};return C("div",{className:M.container,children:[s(I,{text:e}),s(x,{answers:r,onAnswer:c})]})};function A(){return s("div",{className:v.container,children:s(R,{question:"Which animal give you milk ?",answers:["Cat","Mouse","Cow","Elephant"],correct:"Cow"})})}u.render(s(f.StrictMode,{children:s(A,{})}),document.getElementById("root"));
