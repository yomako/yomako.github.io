import{r as d,o as y,c as N,a,w as v,F as O,p as G,b as K,d as h,e as H,f as L,V as W}from"./vendor.394be076.js";const b=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=o(e);fetch(e.href,c)}};b();var k=(t,i)=>{const o=t.__vccOpts||t;for(const[n,e]of i)o[n]=e;return o};const B={data(){return{configKonva:{width:window.innerWidth,height:window.innerHeight},G:1e3,dt:1,circle1:{x:window.innerWidth/2+200,y:window.innerHeight/2-200,vx:1,vy:1,radius:70,fill:"red"},circle2:{x:window.innerWidth/2-200,y:window.innerHeight/2+200,vx:1,vy:-1,radius:70,fill:"white"}}},methods:{acceleration(t,i,o){return-this.G*(i-t)*Math.pow(o,-3)},velocity(t,i){return t+i*this.dt},distance(t){return t*this.dt},animation(){const t=Math.sqrt(Math.pow(this.circle1.x-this.circle2.x,2)+Math.pow(this.circle1.y-this.circle2.y,2)),i=this.acceleration(this.circle2.x,this.circle1.x,t),o=this.acceleration(this.circle2.y,this.circle1.y,t),n=-i,e=-o,c=this.velocity(this.circle1.vx,i),s=this.velocity(this.circle1.vy,o),r=this.velocity(this.circle2.vx,n),l=this.velocity(this.circle2.vy,e),f=this.distance(c),x=this.distance(s),g=this.distance(r),m=this.distance(l);this.circle1.vx=c,this.circle1.vy=s,this.circle2.vx=r,this.circle2.vy=l;const w=this.configKonva.width/2,I=this.configKonva.height/2,A=this.circle1.x+(this.circle2.x-this.circle1.x)/2,M=this.circle1.y+(this.circle2.y-this.circle1.y)/2,u=w-A,p=I-M;this.circle1.x+=f+u,this.circle1.y+=x+p,this.circle2.x+=g+u,this.circle2.y+=m+p}},created(){setInterval(this.animation,50)}},S=t=>(G("data-v-7069d94a"),t=t(),K(),t),V=S(()=>h("div",{class:"header"},[h("h1",null,"GOIMAGINARY"),h("p",null,"just GO into the IMAGINARY world")],-1));function F(t,i,o,n,e,c){const s=d("v-circle"),r=d("v-layer"),l=d("v-stage");return y(),N(O,null,[V,a(l,{class:"stage",config:e.configKonva},{default:v(()=>[a(r,null,{default:v(()=>[a(s,{config:e.circle1},null,8,["config"]),a(s,{config:e.circle2},null,8,["config"])]),_:1})]),_:1},8,["config"])],64)}var q=k(B,[["render",F],["__scopeId","data-v-7069d94a"]]);const C={setup(t){return(i,o)=>(y(),H(q))}},_=L(C);_.use(W);_.mount("#app");
