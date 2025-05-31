import{j as s}from"./jsx-runtime.iaPOwJt4.js";import{r as o}from"./index.BBYsf7vu.js";import f from"./NavLink.CRzWR9HM.js";import"./transitionState.BHf_yTPt.js";import"./proxy.B4c6LewF.js";import"./use-presence.CRZ4TjpO.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,n)=>n?n.toUpperCase():a.toLowerCase()),b=r=>{const t=w(r);return t.charAt(0).toUpperCase()+t.slice(1)},y=(...r)=>r.filter((t,a,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===a).join(" ").trim(),v=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=o.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:c="",children:l,iconNode:d,...h},x)=>o.createElement("svg",{ref:x,...k,width:t,height:t,stroke:r,strokeWidth:n?Number(a)*24/Number(t):a,className:y("lucide",c),...!l&&!v(h)&&{"aria-hidden":"true"},...h},[...d.map(([m,e])=>o.createElement(m,e)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(r,t)=>{const a=o.forwardRef(({className:n,...c},l)=>o.createElement(j,{ref:l,iconNode:t,className:y(`lucide-${g(b(r))}`,`lucide-${r}`,n),...c}));return a.displayName=b(r),a};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],C=u("chevron-right",N);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],$=u("globe",M);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],A=u("menu",_);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],L=u("x",E);function B({navigation:r,currentPath:t}){const[a,n]=o.useState(!1),[c,l]=o.useState("de"),[d,h]=o.useState([]);o.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[a]);const x=e=>{h(i=>i.includes(e)?i.filter(p=>p!==e):[...i,e])},m=(e,i=0)=>s.jsxs("div",{className:i>0?"ml-4":"",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(f,{href:e.href,isMobile:!0,highlight:e.highlight,isActive:t===e.href,onClick:()=>!e.children&&n(!1),className:`flex-1 ${e.children?"pr-8":""}`,children:s.jsx("div",{className:"font-medium text-swiss-navy",children:e.name})}),e.children&&s.jsx("button",{onClick:()=>x(e.name),className:"p-2 text-gray-400 hover:text-swiss-navy","aria-label":`${e.name} Untermenü ${d.includes(e.name)?"schließen":"öffnen"}`,children:s.jsx(C,{className:`h-4 w-4 transition-transform ${d.includes(e.name)?"rotate-90":""}`})})]}),e.children&&d.includes(e.name)&&s.jsx("div",{className:"mt-1 space-y-1 border-l border-gray-200 ml-4",children:e.children.map(p=>m(p,i+1))})]},e.name);return s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>n(!0),className:"md:hidden p-2 text-swiss-navy hover:text-swiss-navy/70","aria-label":"Menü öffnen",children:s.jsx(A,{className:"h-6 w-6"})}),a&&s.jsx("div",{className:"fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden",onClick:()=>n(!1)}),s.jsxs("div",{className:`
        fixed top-0 right-0 bottom-0 w-[300px] bg-gray-200/95 backdrop-blur-md shadow-lg z-50
        transform transition-transform duration-300 ease-out md:hidden
        ${a?"translate-x-0":"translate-x-full"}
        will-change-transform
      `,children:[s.jsxs("div",{className:"flex items-center justify-between p-5 border-b border-gray-300 bg-gray-300/95 backdrop-blur-md text-swiss-navy",children:[s.jsxs("button",{onClick:()=>l(c==="de"?"en":"de"),className:"flex items-center space-x-1 text-base font-medium text-swiss-navy hover:text-swiss-navy/70",children:[s.jsx($,{className:"h-4 w-4"}),s.jsx("span",{children:c.toUpperCase()})]}),s.jsx("button",{onClick:()=>{n(!1),h([])},className:"p-2 text-swiss-navy hover:text-swiss-navy/70","aria-label":"Menü schließen",children:s.jsx(L,{className:"h-5 w-5"})})]}),s.jsx("nav",{className:"p-5 space-y-3 overflow-y-auto max-h-[calc(100vh-8rem)]",children:r.map(e=>m(e))}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-5 border-t border-gray-300 bg-gray-300/95 backdrop-blur-md",children:s.jsx(f,{href:"/contact",highlight:!0,isMobile:!0,onClick:()=>n(!1),className:"block w-full py-3 text-center bg-swiss-red text-white hover:bg-swiss-red/90 rounded-md font-medium transition-colors",children:"Kontakt"})})]})]})}export{B as default};
