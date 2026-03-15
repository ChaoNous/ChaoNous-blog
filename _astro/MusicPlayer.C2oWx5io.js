import{o as ii,a as ri,s as y,b as V,e as Ye}from"./props.DATwxQxi.js";import{i as li}from"./lifecycle.DLlaUFCI.js";import{ao as ni,aj as si,aV as oi,aW as ci,aX as Ge,u as Ze,aY as ui,aZ as di,a2 as Je,a_ as St,a$ as Qe,b0 as ta,aa as me,b1 as fi,n as c,l as qe,t as Mt,g as t,a as ot,p as vi,b as mi,b2 as Ue,f as ct,s,m as F,d as u,b3 as Ft,c as n,r as l,w as pi}from"./utils.Dmqc6ltT.js";import{a as bi,s as X}from"./render.TB_Avoix.js";import{i as K}from"./if.G0mZn_-I.js";import{e as yi,i as hi}from"./each.BrTOSBkP.js";import{s as He}from"./event-modifiers.gvea_hMH.js";import{I as h}from"./IconSvg.C1fSR7jO.js";import{m as Yt}from"./config.BKqWrb0Z.js";import{I as d}from"./zh_TW.D0vFUsZu.js";import{i as f}from"./translation.BXYmQH39.js";/* empty css                        */const gi=()=>performance.now(),G={tick:r=>requestAnimationFrame(r),now:()=>gi(),tasks:new Set};function ea(){const r=G.now();G.tasks.forEach(i=>{i.c(r)||(G.tasks.delete(i),i.f())}),G.tasks.size!==0&&G.tick(ea)}function xi(r){let i;return G.tasks.size===0&&G.tick(ea),{promise:new Promise(g=>{G.tasks.add(i={c:r,f:g})}),abort(){G.tasks.delete(i)}}}function qt(r,i){Qe(()=>{r.dispatchEvent(new CustomEvent(i))})}function _i(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const i=r.split("-");return i.length===1?i[0]:i[0]+i.slice(1).map(g=>g[0].toUpperCase()+g.slice(1)).join("")}function Xe(r){const i={},g=r.split(";");for(const x of g){const[p,v]=x.split(":");if(!p||v===void 0)break;const m=_i(p.trim());i[m]=v.trim()}return i}const wi=r=>r;function ki(r,i,g,x){var p=(r&ui)!==0,v="both",m,S=i.inert,j=i.style.overflow,_,P;function T(){return Qe(()=>m??=g()(i,x?.()??{},{direction:v}))}var Y={is_global:p,in(){i.inert=S,_=ve(i,T(),P,1,()=>{qt(i,"introend"),_?.abort(),_=m=void 0,i.style.overflow=j})},out(C){i.inert=!0,P=ve(i,T(),_,0,()=>{qt(i,"outroend"),C?.()})},stop:()=>{_?.abort(),P?.abort()}},A=ni;if((A.nodes.t??=[]).push(Y),bi){var I=p;if(!I){for(var o=A.parent;o&&(o.f&si)!==0;)for(;(o=o.parent)&&(o.f&oi)===0;);I=!o||(o.f&ci)!==0}I&&Ge(()=>{Ze(()=>Y.in())})}}function ve(r,i,g,x,p){var v=x===1;if(di(i)){var m,S=!1;return Je(()=>{if(!S){var C=i({direction:v?"in":"out"});m=ve(r,C,g,x,p)}}),{abort:()=>{S=!0,m?.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(g?.deactivate(),!i?.duration&&!i?.delay)return qt(r,v?"introstart":"outrostart"),p(),{abort:St,deactivate:St,reset:St,t:()=>x};const{delay:j=0,css:_,tick:P,easing:T=wi}=i;var Y=[];if(v&&g===void 0&&(P&&P(0,1),_)){var A=Xe(_(0,1));Y.push(A,A)}var I=()=>1-x,o=r.animate(Y,{duration:j,fill:"forwards"});return o.onfinish=()=>{o.cancel(),qt(r,v?"introstart":"outrostart");var C=g?.t()??1-x;g?.abort();var b=x-C,tt=i.duration*Math.abs(b),et=[];if(tt>0){var D=!1;if(_)for(var E=Math.ceil(tt/16.666666666666668),M=0;M<=E;M+=1){var w=C+b*T(M/E),at=Xe(_(w,1-w));et.push(at),D||=at.overflow==="hidden"}D&&(r.style.overflow="hidden"),I=()=>{var L=o.currentTime;return C+b*T(L/tt)},P&&xi(()=>{if(o.playState!=="running")return!1;var L=I();return P(L,1-L),!0})}o=r.animate(et,{duration:tt,fill:"forwards"}),o.onfinish=()=>{I=()=>x,P?.(x,1-x),p()}},{abort:()=>{o&&(o.cancel(),o.effect=null,o.onfinish=St)},deactivate:()=>{p=St},reset:()=>{x===0&&P?.(1,0)},t:()=>I()}}function Pi(r,i,g=i){var x=()=>{g(r.volume)};i()==null&&x(),ta(r,["volumechange"],x,!1),me(()=>{var p=Number(i());p!==r.volume&&!isNaN(p)&&(r.volume=p)})}function Ei(r,i,g=i){var x=()=>{g(r.muted)};i()==null&&x(),ta(r,["volumechange"],x,!1),me(()=>{var p=!!i();r.muted!==p&&(r.muted=p)})}function Ke(r,i){return r===i||r?.[fi]===i}function fe(r={},i,g,x){return Ge(()=>{var p,v;return me(()=>{p=v,v=[],Ze(()=>{r!==g(...v)&&(i(r,...v),p&&Ke(g(...p),r)&&i(null,...p))})}),()=>{Je(()=>{v&&Ke(g(...v),r)&&i(null,...v)})}}),r}function Si(r){const i=r-1;return i*i*i+1}function Mi(r,{delay:i=0,duration:g=400,easing:x=Si,axis:p="y"}={}){const v=getComputedStyle(r),m=+v.opacity,S=p==="y"?"height":"width",j=parseFloat(v[S]),_=p==="y"?["top","bottom"]:["left","right"],P=_.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),T=parseFloat(v[`padding${P[0]}`]),Y=parseFloat(v[`padding${P[1]}`]),A=parseFloat(v[`margin${P[0]}`]),I=parseFloat(v[`margin${P[1]}`]),o=parseFloat(v[`border${P[0]}Width`]),C=parseFloat(v[`border${P[1]}Width`]);return{delay:i,duration:g,easing:x,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*m};${S}: ${b*j}px;padding-${_[0]}: ${b*T}px;padding-${_[1]}: ${b*Y}px;margin-${_[0]}: ${b*A}px;margin-${_[1]}: ${b*I}px;border-${_[0]}-width: ${b*o}px;border-${_[1]}-width: ${b*C}px;min-${S}: 0`}}var Fi=ct('<div class="fixed bottom-20 right-4 z-60 max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),Ti=ct('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),Ci=ct('<span class="text-sm text-(--content-meta)"></span>'),ji=ct('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-(--btn-regular-bg) shrink-0"><img loading="lazy" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),Ai=ct('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-(--line-divider)"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar"></div></div>'),Ii=ct(`<!> <div><div role="button" tabindex="0"><!></div> <div><div class="flex items-center gap-3"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden cursor-pointer" role="button" tabindex="0"><img/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden shrink-0"><img/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-(--primary) rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-(--btn-regular-bg) rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -0.125rem;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 3rem;
	height: 3rem;
}
.music-player {
    max-width: 20rem;
    user-select: none;
}
.mini-player {
    width: 17.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 20rem;
    position: absolute;
    bottom: 0;
    right: 0;
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
	}
    50% {
        opacity: 0.5;
	}
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px !important;
        /*left: 0.5rem !important;*/
        bottom: 0.5rem !important;
        right: 0.5rem !important;
	}
    .mini-player {
        width: 280px;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
	}
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 0.5rem !important;*/
        right: 0.5rem !important;
        max-width: none;
	}
    .controls {
        gap: 8px;
	}
    .controls button {
        width: 36px;
        height: 36px;
	}
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
	}
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
	}
    .song-title {
        font-size: 14px;
	}
    .song-artist {
        font-size: 12px;
	}
    .controls {
        gap: 6px;
        margin-bottom: 12px;
	}
    .controls button {
        width: 32px;
        height: 32px;
	}
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
	}
    .playlist-item {
        padding: 8px 12px;
	}
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
	}
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
	}
    to {
        transform: translateY(0);
        opacity: 1;
	}
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
	}
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
	}
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
	}
    to {
        transform: rotate(360deg);
	}
}

.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}

.cover-container img.spinning {
    animation-play-state: running;
}

/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
	border: none;
}</style>`,1),Di=ct('<audio preload="auto"></audio> <!>',1);function Hi(r,i){mi(i,!1);let g=Yt.meting_api,x=Yt.id,p=Yt.server,v=Yt.type,m=F(!1),S=F(!1),j=F(!1),_=F(!1),P=F(0),T=F(0);const Y="music-player-volume";let A=F(.7),I=F(!1),o=F(!1),C=F(!1),b=F(0),tt=F(""),et=F(!1),D=F({title:"Sample Song",artist:"Sample Artist",cover:"/favicon/favicon.ico",url:"",duration:0}),E=F([]),M=F(0),w=F(),at=F(),L=F();function aa(){try{if(typeof localStorage<"u"){const a=localStorage.getItem(Y);a!==null&&!isNaN(parseFloat(a))&&s(A,parseFloat(a))}}catch(a){console.warn("Failed to load volume settings from localStorage:",a)}}function ia(){try{typeof localStorage<"u"&&localStorage.setItem(Y,t(A).toString())}catch(a){console.warn("Failed to save volume settings to localStorage:",a)}}async function ra(){s(o,!0);const a=g.replace(":server",p).replace(":type",v).replace(":id",x).replace(":auth","").replace(":r",Date.now().toString());try{const k=await fetch(a);if(!k.ok)throw new Error("meting api error");const U=await k.json();s(E,U.map(z=>{let yt=z.name??z.title??f(d.unknownSong),Nt=z.artist??z.author??f(d.unknownArtist),N=z.duration??0;return N>1e4&&(N=Math.floor(N/1e3)),(!Number.isFinite(N)||N<=0)&&(N=0),{id:z.id,title:yt,artist:Nt,cover:z.pic??"",url:z.url??"",duration:N}})),t(E).length>0&&be(t(E)[0]),s(o,!1)}catch{Gt(f(d.musicPlayerErrorPlaylist)),s(o,!1)}}function Ut(){!t(w)||!t(D).url||(t(m)?t(w).pause():t(w).play().catch(()=>{}))}function Tt(){s(S,!t(S)),t(S)&&(s(_,!1),s(j,!1))}function Ct(){s(j,!t(j)),t(j)&&(s(S,!1),s(_,!1))}function pe(){s(_,!t(_))}function la(){s(C,!t(C)),t(C)&&s(b,0)}function na(){s(b,(t(b)+1)%3),t(b)!==0&&s(C,!1)}function sa(){if(t(E).length<=1)return;const a=t(M)>0?t(M)-1:t(E).length-1;jt(a)}function Ht(a=!0){if(t(E).length<=1)return;let k;if(t(C))do k=Math.floor(Math.random()*t(E).length);while(k===t(M)&&t(E).length>1);else k=t(M)<t(E).length-1?t(M)+1:0;jt(k,a)}let Xt=!1;function jt(a,k=!0){a<0||a>=t(E).length||(Xt=k,s(M,a),be(t(E)[t(M)]))}function At(a){return a.startsWith("http://")||a.startsWith("https://")||a.startsWith("/")?a:`/${a}`}function be(a){a&&a.url!==t(D).url&&(s(D,{...a}),a.url?s(o,!0):s(o,!1))}let Kt=!1;function oa(){if(s(o,!1),t(w)?.duration&&t(w).duration>1&&(s(T,Math.floor(t(w).duration)),t(E)[t(M)]&&Ft(E,t(E)[t(M)].duration=t(T)),Ft(D,t(D).duration=t(T))),Xt||t(m)){const a=t(w).play();a!==void 0&&a.catch(k=>{console.warn("自动播放被拦截，等待用户交互:",k),Kt=!0,s(m,!1)})}}function ye(){if(Kt&&t(w)){const a=t(w).play();a!==void 0&&a.then(()=>{Kt=!1}).catch(()=>{})}}function ca(a){if(!t(D).url)return;s(o,!1),Gt(f(d.musicPlayerErrorSong));const k=t(m)||Xt;t(E).length>1?setTimeout(()=>Ht(k),1e3):Gt(f(d.musicPlayerErrorEmpty))}function ua(){}function da(){t(b)===1?(Ft(w,t(w).currentTime=0),t(w).play().catch(()=>{})):t(b)===2||t(C)?Ht(!0):s(m,!1)}function Gt(a){s(tt,a),s(et,!0),setTimeout(()=>{s(et,!1)},3e3)}function fa(){s(et,!1)}function va(a){if(!t(w)||!t(at))return;const k=t(at).getBoundingClientRect(),z=Math.max(0,Math.min(1,(a.clientX-k.left)/k.width))*t(T);Ft(w,t(w).currentTime=z),s(P,z)}let It=F(!1),Dt=!1,Zt=null,ut=null;function ma(a){t(L)&&(a.preventDefault(),Dt=!0,t(L).setPointerCapture(a.pointerId),Zt=t(L).getBoundingClientRect(),he(a.clientX))}function pa(a){Dt&&(a.preventDefault(),s(It,!0),!ut&&(ut=requestAnimationFrame(()=>{he(a.clientX),ut=null})))}function ba(a){Dt&&(Dt=!1,s(It,!1),Zt=null,t(L)&&t(L).releasePointerCapture(a.pointerId),ut&&(cancelAnimationFrame(ut),ut=null),ia())}function he(a){if(!t(w)||!t(L))return;const k=Zt||t(L).getBoundingClientRect(),U=Math.max(0,Math.min(1,(a-k.left)/k.width));s(A,U)}function ge(){s(I,!t(I))}function xe(a){if(!Number.isFinite(a)||a<0)return"0:00";const k=Math.floor(a/60),U=Math.floor(a%60);return`${k}:${U.toString().padStart(2,"0")}`}const _e=["click","keydown","touchstart"];ii(()=>{aa(),_e.forEach(a=>{document.addEventListener(a,ye,{capture:!0})}),ra()}),ri(()=>{typeof document<"u"&&_e.forEach(a=>{document.removeEventListener(a,ye,{capture:!0})})}),li();var we=Di();c("pointermove",Ue,pa),c("pointerup",Ue,ba);var B=qe(we);fe(B,a=>s(w,a),()=>t(w));var ya=u(B,2);{var ha=a=>{var k=Ii(),U=qe(k);{var z=e=>{var $=Fi(),W=n($),J=n(W);h(J,{icon:"material-symbols:error",class:"text-xl shrink-0"});var nt=u(J,2),Q=n(nt,!0);l(nt);var st=u(nt,2),pt=n(st);h(pt,{icon:"material-symbols:close",class:"text-lg"}),l(st),l(W),l($),Mt(()=>X(Q,t(tt))),c("click",st,fa),ot(e,$)};K(U,e=>{t(et)&&e(z)})}var yt=u(U,2);let Nt;var N=n(yt);let ke;var ga=n(N);{var xa=e=>{h(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},_a=e=>{var $=Ti();ot(e,$)},wa=e=>{h(e,{icon:"material-symbols:music-note",class:"text-white text-lg"})};K(ga,e=>{t(o)?e(xa):t(m)?e(_a,1):e(wa,!1)})}l(N);var Rt=u(N,2);let Pe;var Ee=n(Rt),dt=n(Ee),Lt=n(dt);let Se;var Me=u(Lt,2),ka=n(Me);{var Pa=e=>{h(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Ea=e=>{h(e,{icon:"material-symbols:pause",class:"text-white text-xl"})},Sa=e=>{h(e,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};K(ka,e=>{t(o)?e(Pa):t(m)?e(Ea,1):e(Sa,!1)})}l(Me),l(dt);var ft=u(dt,2),Jt=n(ft),Ma=n(Jt,!0);l(Jt);var Fe=u(Jt,2),Fa=n(Fe,!0);l(Fe),l(ft);var Te=u(ft,2),ht=n(Te),Ta=n(ht);h(Ta,{icon:"material-symbols:visibility-off",class:"text-lg"}),l(ht);var Vt=u(ht,2),Ca=n(Vt);h(Ca,{icon:"material-symbols:expand-less",class:"text-lg"}),l(Vt),l(Te),l(Ee),l(Rt);var zt=u(Rt,2);let Ce;var Qt=n(zt),te=n(Qt),ee=n(te);let je;l(te);var ae=u(te,2),ie=n(ae),ja=n(ie,!0);l(ie);var re=u(ie,2),Aa=n(re,!0);l(re);var Ae=u(re,2),Ia=n(Ae);l(Ae),l(ae);var Ie=u(ae,2),gt=n(Ie),Da=n(gt);h(Da,{icon:"material-symbols:visibility-off",class:"text-lg"}),l(gt);var xt=u(gt,2);let De;var Na=n(xt);h(Na,{icon:"material-symbols:queue-music",class:"text-lg"}),l(xt),l(Ie),l(Qt);var le=u(Qt,2),it=n(le),Ra=n(it);l(it),fe(it,e=>s(at,e),()=>t(at)),l(le);var ne=u(le,2),rt=n(ne);let Ne;var La=n(rt);h(La,{icon:"material-symbols:shuffle",class:"text-lg"}),l(rt);var vt=u(rt,2),Va=n(vt);h(Va,{icon:"material-symbols:skip-previous",class:"text-xl"}),l(vt);var lt=u(vt,2);let Re;var za=n(lt);{var $a=e=>{h(e,{icon:"eos-icons:loading",class:"text-xl"})},Ba=e=>{h(e,{icon:"material-symbols:pause",class:"text-xl"})},Oa=e=>{h(e,{icon:"material-symbols:play-arrow",class:"text-xl"})};K(za,e=>{t(o)?e($a):t(m)?e(Ba,1):e(Oa,!1)})}l(lt);var mt=u(lt,2),Wa=n(mt);h(Wa,{icon:"material-symbols:skip-next",class:"text-xl"}),l(mt);var _t=u(mt,2);let Le;var Ya=n(_t);{var qa=e=>{h(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Ua=e=>{h(e,{icon:"material-symbols:repeat",class:"text-lg"})},Ha=e=>{h(e,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};K(Ya,e=>{t(b)===1?e(qa):t(b)===2?e(Ua,1):e(Ha,!1)})}l(_t),l(ne);var Ve=u(ne,2),wt=n(Ve),Xa=n(wt);{var Ka=e=>{h(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ga=e=>{h(e,{icon:"material-symbols:volume-down",class:"text-lg"})},Za=e=>{h(e,{icon:"material-symbols:volume-up",class:"text-lg"})};K(Xa,e=>{t(I)||t(A)===0?e(Ka):t(A)<.5?e(Ga,1):e(Za,!1)})}l(wt);var Z=u(wt,2),ze=n(Z);let $e;l(Z),fe(Z,e=>s(L,e),()=>t(L));var $t=u(Z,2),Ja=n($t);h(Ja,{icon:"material-symbols:expand-more",class:"text-lg"}),l($t),l(Ve),l(zt);var Qa=u(zt,2);{var ti=e=>{var $=Ai(),W=n($),J=n(W),nt=n(J,!0);l(J);var Q=u(J,2),st=n(Q);h(st,{icon:"material-symbols:close",class:"text-lg"}),l(Q),l(W);var pt=u(W,2);yi(pt,5,()=>t(E),hi,(kt,q,O)=>{var H=ji();let Bt;var Pt=n(H),se=n(Pt);{var oe=R=>{h(R,{icon:"material-symbols:graphic-eq",class:"text-(--primary) animate-pulse"})},ce=R=>{h(R,{icon:"material-symbols:pause",class:"text-(--primary)"})},ue=R=>{var We=Ci();We.textContent=O+1,ot(R,We)};K(se,R=>{O===t(M)&&t(m)?R(oe):O===t(M)?R(ce,1):R(ue,!1)})}l(Pt);var Et=u(Pt,2),Ot=n(Et);l(Et);var Wt=u(Et,2),bt=n(Wt);let Be;var ei=n(bt,!0);l(bt);var de=u(bt,2);let Oe;var ai=n(de,!0);l(de),l(Wt),l(H),Mt(R=>{Bt=V(H,1,"playlist-item flex items-center gap-3 p-3 hover:bg-(--btn-plain-bg-hover) cursor-pointer transition-colors",null,Bt,{"bg-[var(--btn-plain-bg)]":O===t(M),"text-[var(--primary)]":O===t(M)}),y(H,"aria-label",`播放 ${t(q).title??""} - ${t(q).artist??""}`),y(Ot,"src",R),y(Ot,"alt",t(q).title),Be=V(bt,1,"font-medium truncate",null,Be,{"text-[var(--primary)]":O===t(M),"text-90":O!==t(M)}),X(ei,t(q).title),Oe=V(de,1,"text-sm text-(--content-meta) truncate",null,Oe,{"text-[var(--primary)]":O===t(M)}),X(ai,t(q).artist)},[()=>At(t(q).cover)]),c("click",H,()=>jt(O)),c("keydown",H,R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),jt(O))}),ot(kt,H)}),l(pt),l($),Mt((kt,q)=>{X(nt,kt),y(Q,"aria-label",q)},[()=>f(d.musicPlayerPlaylist),()=>f(d.musicPlayerPlaylist)]),c("click",Q,pe),ki(3,$,()=>Mi,()=>({duration:300,axis:"y"})),ot(e,$)};K(Qa,e=>{t(_)&&e(ti)})}l(yt),pi(2),Mt((e,$,W,J,nt,Q,st,pt,kt,q,O,H,Bt,Pt,se,oe,ce,ue,Et,Ot,Wt,bt)=>{Nt=V(yt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Nt,{expanded:t(S),"hidden-mode":t(j)}),ke=V(N,1,"orb-player w-12 h-12 bg-(--primary) rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ke,{"opacity-0":!t(j),"scale-0":!t(j),"pointer-events-none":!t(j)}),y(N,"aria-label",e),Pe=V(Rt,1,"mini-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,Pe,{"opacity-0":t(S)||t(j),"scale-95":t(S)||t(j),"pointer-events-none":t(S)||t(j)}),y(dt,"aria-label",$),y(Lt,"src",W),y(Lt,"alt",J),Se=V(Lt,1,"w-full h-full object-cover transition-transform duration-300",null,Se,{spinning:t(m)&&!t(o),"animate-pulse":t(o)}),y(ft,"aria-label",nt),X(Ma,t(D).title),X(Fa,t(D).artist),y(ht,"title",Q),y(Vt,"aria-label",st),Ce=V(zt,1,"expanded-player card-base bg-(--float-panel-bg) shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,Ce,{"opacity-0":!t(S),"scale-95":!t(S),"pointer-events-none":!t(S)}),y(ee,"src",pt),y(ee,"alt",kt),je=V(ee,1,"w-full h-full object-cover transition-transform duration-300",null,je,{spinning:t(m)&&!t(o),"animate-pulse":t(o)}),X(ja,t(D).title),X(Aa,t(D).artist),X(Ia,`${q??""} / ${O??""}`),y(gt,"title",H),De=V(xt,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,De,{"text-[var(--primary)]":t(_)}),y(xt,"title",Bt),y(it,"aria-label",Pt),y(it,"aria-valuenow",t(T)>0?t(P)/t(T)*100:0),Ye(Ra,`width: ${t(T)>0?t(P)/t(T)*100:0}%`),Ne=V(rt,1,"w-10 h-10 rounded-lg",null,Ne,{"btn-regular":t(C),"btn-plain":!t(C)}),rt.disabled=t(E).length<=1,y(rt,"aria-label",se),vt.disabled=t(E).length<=1,y(vt,"aria-label",oe),Re=V(lt,1,"btn-regular w-12 h-12 rounded-full",null,Re,{"opacity-50":t(o)}),lt.disabled=t(o),y(lt,"aria-label",ce),mt.disabled=t(E).length<=1,y(mt,"aria-label",ue),Le=V(_t,1,"w-10 h-10 rounded-lg",null,Le,{"btn-regular":t(b)>0,"btn-plain":t(b)===0}),y(_t,"aria-label",Et),y(wt,"aria-label",Ot),y(Z,"aria-label",Wt),y(Z,"aria-valuenow",t(A)*100),$e=V(ze,1,"h-full bg-(--primary) rounded-full transition-all",null,$e,{"duration-100":!t(It),"duration-0":t(It)}),Ye(ze,`width: ${t(A)*100}%`),y($t,"title",bt)},[()=>f(d.musicPlayerShow),()=>t(m)?f(d.musicPlayerPause):f(d.musicPlayerPlay),()=>At(t(D).cover),()=>f(d.musicPlayerCover),()=>f(d.musicPlayerExpand),()=>f(d.musicPlayerHide),()=>f(d.musicPlayerExpand),()=>At(t(D).cover),()=>f(d.musicPlayerCover),()=>xe(t(P)),()=>xe(t(T)),()=>f(d.musicPlayerHide),()=>f(d.musicPlayerPlaylist),()=>f(d.musicPlayerProgress),()=>f(d.musicPlayerShuffle),()=>f(d.musicPlayerPrevious),()=>t(m)?f(d.musicPlayerPause):f(d.musicPlayerPlay),()=>f(d.musicPlayerNext),()=>t(b)===1?f(d.musicPlayerRepeatOne):f(d.musicPlayerRepeat),()=>t(I)?f(d.musicPlayerPlay):f(d.musicPlayerVolume),()=>f(d.musicPlayerVolume),()=>f(d.musicPlayerCollapse)]),c("click",N,Ct),c("keydown",N,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Ct())}),c("click",dt,Ut),c("keydown",dt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Ut())}),c("click",ft,Tt),c("keydown",ft,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),Tt())}),c("click",ht,He(Ct)),c("click",Vt,He(Tt)),c("click",gt,Ct),c("click",xt,pe),c("click",it,va),c("keydown",it,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const W=.5*t(T);t(w)&&(Ft(w,t(w).currentTime=W),s(P,W))}}),c("click",rt,la),c("click",vt,sa),c("click",lt,Ut),c("click",mt,()=>Ht()),c("click",_t,na),c("click",wt,ge),c("pointerdown",Z,ma),c("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ge())}),c("click",$t,Tt),ot(a,k)};K(ya,a=>{a(ha)})}Mt(a=>y(B,"src",a),[()=>At(t(D).url)]),Pi(B,()=>t(A),a=>s(A,a)),Ei(B,()=>t(I),a=>s(I,a)),c("play",B,()=>s(m,!0)),c("pause",B,()=>s(m,!1)),c("timeupdate",B,()=>s(P,t(w).currentTime)),c("ended",B,da),c("error",B,ca),c("loadeddata",B,oa),c("loadstart",B,ua),ot(r,we),vi()}export{Hi as default};
