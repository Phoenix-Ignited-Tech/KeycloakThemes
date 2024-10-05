import{jsxs as j,jsx as r}from"react/jsx-runtime";import{a as F,b6 as G,b7 as x,b8 as L,c4 as V,c5 as k,aG as w}from"./main-hZIJIVx9.js";import{useState as m,useMemo as I,useEffect as E}from"react";const a=[{unit:"second",label:"times.seconds",multiplier:1},{unit:"minute",label:"times.minutes",multiplier:60},{unit:"hour",label:"times.hours",multiplier:3600},{unit:"day",label:"times.days",multiplier:86400}],D=(t,n=0)=>t.reduce((s,i)=>n%i.multiplier===0&&s.multiplier<i.multiplier?i:s,t[0]),z=(t,n)=>{const s=D(a,t);return new Intl.NumberFormat(n,{style:"unit",unit:s.unit,unitDisplay:"long"}).format(t/s.multiplier)},A=({value:t,units:n=["second","minute","hour","day"],onChange:s,className:i,min:O,menuAppendTo:U,...d})=>{const{t:f}=F(),[b,h]=m(),u=I(()=>a.find(e=>e.unit===n[0])?.multiplier,[n]),[T,p]=m(""),[o,c]=m(u),[y,S]=m(!1),g=I(()=>{const e=n.map(l=>a.find($=>$.unit===l));return!e.every(l=>l.multiplier===o)&&e[0]!==a[0]&&e.unshift(a[0]),e},[n,o]);E(()=>{const e=D(g,t).multiplier;t?(c(e),p(t/e),h(e)):(p(t||""),c(b??u),h(b??u))},[t,u]);const M=(e,l=o)=>{e!==""?(s?.(e*(l||1)),p(e)):s?.("")};return j(G,{hasGutter:!0,className:i,children:[r(x,{children:r(L,{...d,type:"number","aria-label":"kc-time",min:O||0,value:T,className:`${i}-input`,onChange:(e,l)=>{M(l===""?l:parseInt(l))}})}),r(x,{id:`${i}-select-menu`,children:r(V,{variant:k.single,"aria-label":f("unitLabel"),className:`${i}-select`,onSelect:e=>{c(e),M(T,e),S(!1)},menuAppendTo:U,selections:o,onToggle:()=>{S(!y)},isOpen:y,isDisabled:d.isDisabled,children:g.map(e=>r(w,{id:e.label,value:e.multiplier,children:f(e.label)},e.label))})})]})};export{A as T,z as t};
//# sourceMappingURL=TimeSelector-BQoPDF1p.js.map
