import{b as dt,d as H,t as g,a as o,e as Y}from"../chunks/C87Zcp0E.js";import{i as O}from"../chunks/D8UxYN2D.js";import{h as C,P as et,g as U,b as _t,E as ft,d as ut,aE as nt,ab as mt,a7 as gt,V as at,T as rt,u as ht,X as bt,W as pt,e as kt,f as T,c as v,l as j,r as a,t as B,p as W,s as b,a as I,aD as Q,_ as X,aF as xt}from"../chunks/CgcDBB04.js";import{p as yt,i as z}from"../chunks/DU7W0h_-.js";import{h as st,a as F}from"../chunks/GTd2Gimg.js";import{c as wt,s as N}from"../chunks/DCP59GiZ.js";import{e as R,a as vt,c as qt,i as Z,b as jt,I as $,s as K,_ as G}from"../chunks/Cj9BdqEF.js";import{s as Et}from"../chunks/D3bUsD92.js";import{d as Pt,e as zt}from"../chunks/CDXcGz5C.js";import{o as Tt}from"../chunks/zS-J9Qjs.js";function Dt(k,t,f,u,h,y){let m=C;C&&et();var i,p,x=null;C&&U.nodeType===1&&(x=U,et());var E=C?U:k,n;_t(()=>{const c=t()||null;var s=c==="svg"?nt:null;c!==i&&(n&&(c===null?bt(n,()=>{n=null,p=null}):c===p?pt(n):kt(n)),c&&c!==p&&(n=ut(()=>{if(x=C?x:s?document.createElementNS(s,c):document.createElement(c),dt(x,x),u){C&&wt(c)&&x.append(document.createComment(""));var d=C?mt(x):x.appendChild(gt());C&&(d===null?at(!1):rt(d)),u(x,d)}ht.nodes_end=x,E.before(x)})),i=c,i&&(p=i))},ft),m&&(at(!0),rt(E))}var Nt=g("<p><!></p>");function it(k,t){const f=yt(t,"className",3,"");var u=H(),h=T(u);R(h,17,()=>t.text,Z,(y,m)=>{var i=Nt(),p=v(i);st(p,()=>j(m),!1,!1),a(i),B(()=>vt(i,qt(f()))),o(y,i)}),o(k,u)}var Bt=g("<!> ",1);function L(k,t){W(t,!0);const f=t.date.month&&t.date.month>0&&t.date.month<=12,u=new Intl.DateTimeFormat("en",{month:"short"}),h=new Date(t.date.year,t.date.month&&f?t.date.month-1:1),y=h.getFullYear(),m=u.format(h);var i=Bt(),p=T(i);{var x=n=>{var c=Y();c.nodeValue=`${m??""} `,o(n,c)};z(p,n=>{f&&n(x)})}var E=b(p,1,!0);E.nodeValue=y,o(k,i),I()}function lt(k,t){var f=H(),u=T(f);Dt(u,()=>t.of,!1,(h,y)=>{let m;B(()=>m=jt(h,m,{class:`${t.class} ${t.type}`},"svelte-1dioj0q",h.namespaceURI===nt,h.nodeName.includes("-")));var i=H(),p=T(i);Et(p,()=>t.children),o(y,i)}),o(k,f)}var Rt=g('<h4 class="mb-0 svelte-mq5666"><!> – <!></h4>'),St=g("<li> </li>"),At=g('<ul class="hanging"></ul>'),Ct=g("<div><!></div>"),Ft=g("<!> <!> <!>",1);function Ht(k,t){var E;W(t,!0);const f=((E=F.config("history"))==null?void 0:E.bullets)??!1;let u=t.position.description.length<1;var h=Ft(),y=T(h);lt(y,{of:"h3",class:"mb-0",children:(n,c)=>{Q();var s=Y();B(()=>N(s,t.position.title)),o(n,s)}});var m=b(y,2);{var i=n=>{var c=Rt(),s=v(c);L(s,{get date(){return t.position.from}});var d=b(s,2);{var w=e=>{L(e,{get date(){return t.position.to}})},r=e=>{var l=Y("present");o(e,l)};z(d,e=>{t.position.to?e(w):e(r,!1)})}a(c),o(n,c)};z(m,n=>{t.position.from&&n(i)})}var p=b(m,2);{var x=n=>{var c=H(),s=T(c);{var d=r=>{var e=At();R(e,21,()=>t.position.description,Z,(l,_)=>{var q=St(),P=v(q,!0);a(q),B(()=>N(P,j(_))),o(l,q)}),a(e),o(r,e)},w=r=>{var e=Ct(),l=v(e);it(l,{get text(){return t.position.description}}),a(e),o(r,e)};z(s,r=>{f?r(d):r(w,!1)})}o(n,c)};z(p,n=>{u||n(x)})}o(k,h),I()}var Wt=g('<h4 class="svelte-fkkgr8"> <span class="svelte-fkkgr8"> </span></h4> <p class="svelte-fkkgr8"> </p>',1);function It(k,t){W(t,!0);var f=Wt(),u=T(f),h=v(u),y=b(h),m=v(y,!0);a(y),a(u);var i=b(u,2),p=v(i,!0);a(i),B(()=>{N(h,`${t.patent.type??""} ${t.patent.number??""} - `),N(m,t.patent.title),N(p,t.patent.description)}),o(k,f),I()}var Mt=g('<span class="remote svelte-baarc4">(Remote)</span>'),Vt=g('<a class="icon svelte-baarc4" target="_blank"><span class="sr-only" hidden> </span><!></a>'),Gt=g('<dd class="svelte-baarc4"><!></dd>'),Xt=g("<li><!></li>"),Yt=g('<dd class="patents svelte-baarc4"><!> <ul class="hanging"></ul></dd>'),Jt=g('<dt class="svelte-baarc4"><span class="company svelte-baarc4"> </span><!><!></dt> <!> <!>',1);function ot(k,t){W(t,!0);var f=Jt(),u=T(f),h=v(u),y=v(h);a(h);var m=b(h);{var i=s=>{var d=Mt();o(s,d)};z(m,s=>{t.job.remote&&s(i)})}var p=b(m);{var x=s=>{var d=Vt(),w=v(d),r=v(w);a(w);var e=b(w);$(e,{name:"link",get title(){return t.job.company}}),a(d),B(()=>{K(d,"href",t.job.url),K(d,"title",t.job.company),N(r,`${t.job.company??""} website`)}),o(s,d)};z(p,s=>{t.job.url&&s(x)})}a(u);var E=b(u,2);R(E,17,()=>t.job.positions,s=>s.title,(s,d)=>{var w=H(),r=T(w);{var e=l=>{var _=Gt(),q=v(_);Ht(q,{get position(){return j(d)}}),a(_),o(l,_)};z(r,l=>{j(d).from&&l(e)})}o(s,w)});var n=b(E,2);{var c=s=>{var d=Yt(),w=v(d);lt(w,{of:"h3",class:"mb-0",children:(e,l)=>{Q();var _=Y();B(q=>N(_,q),[()=>G("title.patents","Patents")]),o(e,_)}});var r=b(w,2);R(r,21,()=>t.job.patents,e=>e.number,(e,l)=>{var _=Xt(),q=v(_);It(q,{get patent(){return j(l)}}),a(_),o(e,_)}),a(r),a(d),o(s,d)};z(n,s=>{t.job.patents&&s(c)})}B(()=>N(y,`${t.job.company??""}, ${t.job.location??""}`)),o(k,f),I()}var Ut=k=>{k.preventDefault(),k.stopPropagation(),window.scrollTo(0,0)},Kt=g('<p><a class="back-to-top svelte-cq6qtj" href="#top"><!>Back to top</a></p>');function Lt(k){var t=Kt(),f=v(t);f.__click=[Ut];var u=v(f);$(u,{name:"returnArrow",width:18,height:18}),Q(),a(f),a(t),o(k,t)}Pt(["click"]);var Ot=g('<section class="me svelte-8iktv4"><div><!></div></section>'),Qt=g('<section class="current svelte-8iktv4"><h2> </h2> <dl></dl></section>'),Zt=g('<hr> <section class="history svelte-8iktv4"><h2> </h2> <dl></dl></section>',1),$t=g('<li class="svelte-8iktv4"><b class="svelte-8iktv4"> </b>, <!><br> <i> </i></li>'),te=g('<hr> <section class="education svelte-8iktv4"><h2> </h2> <ul class="hanging svelte-8iktv4"></ul></section>',1),ee=g("<!> <!> <!> <!> <!>",1);function ae(k,t){W(t,!1);const f=F.get("objective"),u=F.get("currentWork"),h=F.get("workHistory"),y=F.get("education");O();var m=ee(),i=T(m);{var p=r=>{var e=Ot(),l=v(e),_=v(l);it(_,{text:f}),a(l),a(e),o(r,e)};z(i,r=>{f&&r(p)})}var x=b(i,2);{var E=r=>{var e=Qt(),l=v(e),_=v(l,!0);a(l);var q=b(l,2);R(q,5,()=>u,P=>P.company,(P,D)=>{ot(P,{get job(){return j(D)}})}),a(q),a(e),B(P=>N(_,P),[()=>G("title.current-work","Current Work")],X),o(r,e)};z(x,r=>{u&&r(E)})}var n=b(x,2);{var c=r=>{var e=Zt(),l=b(T(e),2),_=v(l),q=v(_,!0);a(_);var P=b(_,2);R(P,5,()=>h,D=>D.company,(D,S)=>{var A=H(),V=T(A);{var J=M=>{ot(M,{get job(){return j(S)}})};z(V,M=>{j(S).hidden||M(J)})}o(D,A)}),a(P),a(l),B(D=>N(q,D),[()=>G("title.work-history","Work History")],X),o(r,e)};z(n,r=>{h&&r(c)})}var s=b(n,2);{var d=r=>{var e=te(),l=b(T(e),2),_=v(l),q=v(_,!0);a(_);var P=b(_,2);R(P,5,()=>y,D=>D.description,(D,S)=>{var A=$t(),V=v(A),J=v(V,!0);a(V);var M=b(V,2);L(M,{get date(){return j(S).date}});var tt=b(M,3),ct=v(tt,!0);a(tt),a(A),B(()=>{N(J,j(S).description),N(ct,j(S).institution)}),o(D,A)}),a(P),a(l),B(D=>N(q,D),[()=>G("title.education","Education")],X),o(r,e)};z(s,r=>{y&&r(d)})}var w=b(s,2);Lt(w),o(k,m),I()}var re=g('<li class="bubblewrap svelte-pqc9qk"> <span class="bubble f-bi svelte-pqc9qk"><!></span></li>'),oe=g('<ul class="bubbles svelte-pqc9qk"></ul>'),ne=g("<h2> </h2> <!>",1),se=g('<li class="svelte-pqc9qk"><span><!></span> <a rel="noopener noreferrer" target="_blank"> </a></li>'),ve=g('<ul class="links svelte-pqc9qk"></ul>'),ie=g("<!> <!>",1);function le(k,t){W(t,!1);const f=F.get("buzzwords"),u=F.get("links");let h;Tt(()=>{h=document.documentElement});const y=n=>{h.style.setProperty("--mouse-x",n.clientX.toString()),h.style.setProperty("--mouse-y",n.clientY.toString())};O();var m=ie();zt("mousemove",xt.body,y);var i=T(m);{var p=n=>{var c=ne(),s=T(c),d=v(s,!0);a(s);var w=b(s,2);R(w,1,()=>f,Z,(r,e)=>{var l=oe();R(l,5,()=>j(e),_=>_.name,(_,q)=>{var P=re(),D=v(P),S=b(D),A=v(S);st(A,()=>j(q).text,!1,!1),a(S),a(P),B(()=>N(D,`${j(q).name??""} `)),o(_,P)}),a(l),o(r,l)}),B(r=>N(d,r),[()=>G("title.buzzwords","Buzzwords")],X),o(n,c)};z(i,n=>{f&&n(p)})}var x=b(i,2);{var E=n=>{var c=ve();R(c,5,()=>u,s=>s.href,(s,d)=>{var w=se(),r=v(w),e=v(r);$(e,{get name(){return j(d).icon}}),a(r);var l=b(r,2),_=v(l,!0);a(l),a(w),B(()=>{vt(r,`icon ${j(d).icon??""} svelte-pqc9qk`),K(l,"href",j(d).href),N(_,j(d).text)}),o(s,w)}),a(c),o(n,c)};z(x,n=>{u&&n(E)})}o(k,m),I()}var ce=g('<section id="content" class="content"><!></section> <aside><!></aside>',1),de=g("<p>Error loading Resume Data!!!</p>");function ye(k,t){W(t,!1),O();var f=H(),u=T(f);{var h=m=>{var i=ce(),p=T(i),x=v(p);ae(x,{}),a(p);var E=b(p,2),n=v(E);le(n,{}),a(E),o(m,i)},y=m=>{var i=de();o(m,i)};z(u,m=>{F.data?m(h):m(y,!1)})}o(k,f),I()}export{ye as component};
//# sourceMappingURL=3.RKwhIOOr.js.map
