import{v as u,a5 as p,a6 as c,a7 as h,a8 as E,L as l,m as f,o as s,p as g,t as T}from"./Cauk6RRm.js";function m(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=l;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function N(r,t){var e=(t&h)!==0,_=(t&E)!==0,n,d=!r.startsWith("<!>");return()=>{if(f)return a(s,null),s;n===void 0&&(n=m(d?r:"<!>"+r),e||(n=u(n)));var o=_||p?document.importNode(n,!0):n.cloneNode(!0);if(e){var v=u(o),i=o.lastChild;a(v,i)}else a(o,o);return o}}function x(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,d;return()=>{if(f)return a(s,null),s;if(!d){var o=m(n),v=u(o);d=u(v)}var i=d.cloneNode(!0);return a(i,i),i}}function L(r=""){if(!f){var t=c(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=c()),T(e)),a(e,e),e}function M(){if(f)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=c();return r.append(t,e),a(t,e),r}function P(r,t){if(f){l.nodes_end=s,g();return}r!==null&&r.before(t)}const w="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(w);export{P as a,a as b,m as c,M as d,L as e,x as n,N as t};
//# sourceMappingURL=BDGkCbsV.js.map
