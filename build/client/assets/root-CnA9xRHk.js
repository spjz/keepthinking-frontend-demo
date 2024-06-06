import{r as i,j as e}from"./jsx-runtime-56DGgGmo.js";import{u as y,w as p,x as f,y as x,_ as w,O as S,M as j,L as g,S as k}from"./components-BAmE7OwT.js";/**
 * @remix-run/react v2.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let l="positions";function M({getKey:t,...a}){let{isSpaMode:c}=y(),o=p(),u=f();x({getKey:t,storageKey:l});let d=i.useMemo(()=>{if(!t)return null;let s=t(o,u);return s!==o.key?s:null},[]);if(c)return null;let h=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",w({},a,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(l)}, ${JSON.stringify(d)})`}}))}const L="/assets/tailwind-BX4dwlXg.css";function R({children:t}){return e.jsxs("html",{lang:"en",className:"h-full",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(j,{}),e.jsx(g,{})]}),e.jsxs("body",{className:"h-full w-full",children:[t,e.jsx(M,{}),e.jsx(k,{})]})]})}const _=()=>[{rel:"stylesheet",href:L}];function v(){return e.jsx(S,{})}export{R as Layout,v as default,_ as links};
