import{r as u,o as g,c as N,a as h,w as _,F as O,p as G,b as K,d as f,e as L,f as T,V as b}from"./vendor.394be076.js";const k=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=c(e);fetch(e.href,i)}};k();var B=(t,n)=>{const c=t.__vccOpts||t;for(const[s,e]of n)c[s]=e;return c};const S={data(){return{configKonva:{width:window.innerWidth,height:window.innerHeight},G:1e3,dt:7,radius:window.innerWidth>window.innerHeight?window.innerHeight/14:window.innerWidth/14,delta:window.innerHeight/2,conf1:{x:window.innerWidth/2+200,y:window.innerHeight/2-200,radius:window.innerWidth>window.innerHeight?window.innerHeight/14:window.innerWidth/14,fill:"red"},conf2:{x:window.innerWidth/2-200,y:window.innerHeight/2+200,radius:window.innerWidth>window.innerHeight?window.innerHeight/14:window.innerWidth/14,fill:"white"},circle1:{x:window.innerWidth/2+200,y:window.innerHeight/2-200,vx:1,vy:1},circle2:{x:window.innerWidth/2-200,y:window.innerHeight/2+200,vx:1,vy:-1}}},methods:{acceleration(t,n,c){return-this.G*(n-t)*Math.pow(c,-3)},velocity(t,n){return t+n*this.dt},distance(t){return t*this.dt},transform(t){return t<this.delta?t:2*this.delta-Math.pow(this.delta,2)/t},retransform(t){return t<this.delta?t:Math.pow(this.delta,2)/(2*this.delta-t)},radiusTransform(t){return t<this.delta?this.radius:this.radius*this.delta/t},animation(){const t=Math.sqrt(Math.pow(this.circle1.x-this.circle2.x,2)+Math.pow(this.circle1.y-this.circle2.y,2)),n=this.acceleration(this.circle2.x,this.circle1.x,t),c=this.acceleration(this.circle2.y,this.circle1.y,t),s=-n,e=-c,i=this.velocity(this.circle1.vx,n),r=this.velocity(this.circle1.vy,c),o=this.velocity(this.circle2.vx,s),a=this.velocity(this.circle2.vy,e),m=this.distance(i),H=this.distance(r),I=this.distance(o),W=this.distance(a);this.circle1.vx=i,this.circle1.vy=r,this.circle2.vx=o,this.circle2.vy=a;const l=this.configKonva.width/2,d=this.configKonva.height/2,M=this.circle1.x+(this.circle2.x-this.circle1.x)/2,A=this.circle1.y+(this.circle2.y-this.circle1.y)/2,w=l-M,p=d-A;this.circle1.x+=m+w,this.circle1.y+=H+p,this.circle2.x+=I+w,this.circle2.y+=W+p;const y=(this.circle1.x-this.circle2.x)*this.transform(t)/t,v=(this.circle1.y-this.circle2.y)*this.transform(t)/t;this.conf1.x=l-y/2,this.conf1.y=d-v/2,this.conf2.x=l+y/2,this.conf2.y=d+v/2,this.conf1.radius=this.radiusTransform(t),this.conf2.radius=this.radiusTransform(t)}},created(){setInterval(this.animation,50)}},V=t=>(G("data-v-75afc583"),t=t(),K(),t),F=V(()=>f("div",{class:"header"},[f("h1",null,"GOIMAGINARY"),f("p",null,"just GO into the IMAGINARY world")],-1));function q(t,n,c,s,e,i){const r=u("v-circle"),o=u("v-layer"),a=u("v-stage");return g(),N(O,null,[F,h(a,{class:"stage",config:e.configKonva},{default:_(()=>[h(o,null,{default:_(()=>[h(r,{config:e.conf1},null,8,["config"]),h(r,{config:e.conf2},null,8,["config"])]),_:1})]),_:1},8,["config"])],64)}var C=B(S,[["render",q],["__scopeId","data-v-75afc583"]]);const E={setup(t){return(n,c)=>(g(),L(C))}},x=T(E);x.use(b);x.mount("#app");