import{f as P,s as C,h as $,U as L,i as D,j as R,t as E,k as O,l as N,_ as V,o as p,c as d,m as F,v as H,b as v,n as y,p as m,F as B,q as I,x as T,y as U,z as j}from"./app-4f7ad5aa.js";var S=P(C),z=$(()=>{const e=new Map;for(const t of S.value)e.set(t.path,t);return e});import.meta.webpackHot&&(__VUE_HMR_RUNTIME__[L]=e=>{S.value=e});function A(e){const t=P([]);let a=null;return D(e,()=>{a&&clearTimeout(a),a=setTimeout(o,100)}),t;function o(){const u=e.value.toLowerCase().trim();if(!u){t.value=[];return}const l=new Map,n=new Set;for(const s of S.value)for(const i of K(s,u)){n.add(i.parentPageTitle);let r=l.get(i.parentPageTitle);r||(r=[],l.set(i.parentPageTitle,r)),r.push(i)}const c=[...n].sort((s,i)=>{const r=l.get(s);return l.get(i).length-r.length});t.value=[...l].flatMap(([,s])=>s).sort((s,i)=>s.parentPagePriority-i.parentPagePriority||c.indexOf(s.parentPageTitle)-c.indexOf(i.parentPageTitle)||s.priority-i.priority)}}function*K(e,t){const a=M(e.title,t);if(a){yield{path:e.path,parentPageTitle:w(e),title:e.title,display:a,page:e,content:null,parentPagePriority:1,priority:1};return}for(const o of e.contents){const u=M(o.header,t);if(u){yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:w(e),title:e.title,display:u,page:e,content:null,parentPagePriority:10,priority:2};continue}const l=M(o.content,t);l&&(yield{path:e.path+(o.slug?`#${o.slug}`:""),parentPageTitle:w(e),title:e.title,display:[{type:"header",str:`${o.header}
`},...l],page:e,content:null,parentPagePriority:10,priority:10})}}function w(e){const t=e.path.split("/");let a="/";return t[1]&&(a=`/${t[1]}/`),(z.value.get(a)||e).title}function M(e,t){const a=[];let o=0;const u=e.toLowerCase().replace(/\s/gu," ");let l=0,n=u.indexOf(t,l);if(n<0)return null;for(;n>=0;){const s=n+t.length;if(c(e.slice(l,n),"normal"),c(e.slice(n,s),"highlight"),l=s,n=u.indexOf(t,l),o>100)break}return c(e.slice(l),"normal"),a.filter(s=>s.str);function c(s,i){let r=s;i==="normal"&&r.length>100&&o===0&&(r=`… ${r.slice(-10)}`);let g=!1;if(o+r.length>100){if(a.some(h=>h.type==="ellipsis"))return;r=r.slice(0,Math.max(100-o,1)),g=!0}a.push({type:i,str:r}),o+=r.length,g&&(a.push({type:"ellipsis",str:" …"}),o+=2)}}const q={"/":{placeholder:"搜索文档"}},x=R({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>q}},setup(e){const{locales:t}=E(e),a=P(""),o=P(!1),u=P(-1),l=A(a),n=$(()=>a.value&&o.value&&l.value.length),c=O(),s=N(),i=$(()=>t.value[s.value]??{});function r(){if(!n.value)return;let f=u.value-1;f<0&&(f=l.value.length-1),h(f)}function g(){if(!n.value)return;let f=u.value+1;f>=l.value.length&&(f=0),h(f)}function h(f){u.value=f}function _(){u.value=-1}function b(f){if(!n.value)return;const k=l.value[f];k&&c.push(k.path)}return{query:a,focused:o,focusIndex:u,suggestions:l,activeSuggestion:n,onUp:r,onDown:g,focus:h,unfocus:_,go:b,locale:i}}});const G={class:"search-box",role:"search"},J=["placeholder"],Q=["onMousedown","onMouseenter"],W=["href"],X={key:0,class:"parent-page-title"},Y={class:"suggestion-row"},Z={class:"page-title"},ee={class:"suggestion-content"};function te(e,t,a,o,u,l){return p(),d("div",G,[F(v("input",{ref:"input","onUpdate:modelValue":t[0]||(t[0]=n=>e.query=n),"aria-label":"Search",class:y({focused:e.focused}),placeholder:e.locale.placeholder??"Search",autocomplete:"off",spellcheck:"false",onFocus:t[1]||(t[1]=()=>e.focused=!0),onBlur:t[2]||(t[2]=()=>e.focused=!1),onKeyup:[t[3]||(t[3]=m(n=>e.go(e.focusIndex),["enter"])),t[4]||(t[4]=m((...n)=>e.onUp&&e.onUp(...n),["up"])),t[5]||(t[5]=m((...n)=>e.onDown&&e.onDown(...n),["down"]))]},null,42,J),[[H,e.query]]),e.activeSuggestion?(p(),d("ul",{key:0,class:"suggestions",onMouseleave:t[7]||(t[7]=(...n)=>e.unfocus&&e.unfocus(...n))},[(p(!0),d(B,null,I(e.suggestions,(n,c)=>(p(),d("li",{key:c,class:y(["suggestion",{focused:c===e.focusIndex}]),onMousedown:s=>e.go(c),onMouseenter:s=>e.focus(c)},[v("a",{href:n.path,onClick:t[6]||(t[6]=j(()=>{},["prevent"]))},[n.parentPageTitle&&(!e.suggestions[c-1]||e.suggestions[c-1].parentPageTitle!==n.parentPageTitle)?(p(),d("div",X,T(n.parentPageTitle),1)):U("v-if",!0),v("div",Y,[v("div",Z,T(n.title||n.path),1),v("div",ee,[(p(!0),d(B,null,I(n.display,(s,i)=>(p(),d("span",{key:i,class:y(s.type)},T(s.str),3))),128))])])],8,W)],42,Q))),128))],32)):U("v-if",!0)])}const se=V(x,[["render",te],["__scopeId","data-v-fd6cd4d5"],["__file","SearchBox.vue"]]);export{se as default};
