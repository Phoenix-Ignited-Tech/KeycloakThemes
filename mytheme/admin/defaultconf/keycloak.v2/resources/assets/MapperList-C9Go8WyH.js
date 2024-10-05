import{jsxs as h,jsx as t,Fragment as j}from"react/jsx-runtime";import{useState as s,useMemo as k,useEffect as $}from"react";import{a as B,b as R,M as q,q as E,aX as N,aL as I,aM as W,h as T,B as X,aY as F,s as O,aA as Y,aB as _,aC as z,D as x,L as G}from"./main-hZIJIVx9.js";import{u as H,m as P}from"./useLocaleSort-Cjd-LyWL.js";import{d as J,D as w,a as K,b as v,c as A}from"./DataListItemRow-B1CYYhSa.js";const Q=a=>{const{t:n}=B(),c=R(),M=a.protocol,o=c.protocolMapperTypes[M],y=c.builtinProtocolMappers[M],[f,d]=s([]),[u,D]=s([]),C=H(),p=k(()=>C(y,P("name")).map(e=>{const r=o.find(l=>l.id===e.protocolMapper);return{item:e,id:e.name,description:r.helpText}}),[y,o]),[g,S]=s(p);if(a.filter&&a.filter.length!==f.length){d(a.filter);const e=a.filter.map(r=>r.name);S([...p.filter(r=>!e.includes(r.item.name))])}const L=k(()=>C(o,P("name")),[o]),i=!!a.filter,b=[n("name"),n("description")];return h(q,{"aria-label":n(i?"addPredefinedMappers":"emptySecondaryAction"),variant:E.medium,header:h(N,{role:"dialog","aria-label":n(i?"addPredefinedMappers":"emptySecondaryAction"),children:[t(I,{component:W.h1,children:n(i?"addPredefinedMappers":"emptySecondaryAction")}),t(I,{children:n(i?"predefinedMappingDescription":"configureMappingDescription")})]}),isOpen:a.open,onClose:a.toggleDialog,actions:i?[t(T,{id:"modal-confirm","data-testid":"confirm",isDisabled:g.length===0||u.length===0,onClick:()=>{a.onConfirm(u.map(({item:e})=>e)),a.toggleDialog()},children:n("add")},"confirm"),t(T,{id:"modal-cancel","data-testid":"cancel",variant:X.link,onClick:()=>{a.toggleDialog()},children:n("cancel")},"cancel")]:[],children:[!i&&h(J,{onSelectDataListItem:(e,r)=>{const l=o.find(m=>m.id===r);a.onConfirm(l),a.toggleDialog()},"aria-label":n("addPredefinedMappers"),isCompact:!0,children:[t(w,{"aria-label":n("headerName"),id:"header",children:t(K,{children:t(v,{dataListCells:b.map(e=>t(A,{style:{fontWeight:700},children:e},e))})})}),L.map(e=>t(w,{"aria-label":e.name,id:e.id,children:t(K,{children:t(v,{dataListCells:[t(A,{children:e.name},`name-${e.id}`),t(A,{children:e.helpText},`helpText-${e.id}`)]})})},e.id))]}),i&&t(F,{loader:g,onSelect:D,canSelectAll:!0,ariaLabelKey:"addPredefinedMappers",searchPlaceholderKey:"searchForMapper",columns:[{name:"id",displayKey:"name"},{name:"description",displayKey:"description"}],emptyState:t(O,{message:n("emptyMappers"),instructions:n("emptyBuiltInMappersInstructions")})})]})},U=({id:a,name:n,detailLink:c})=>t(G,{to:c(a),children:n}),oe=({model:a,onAdd:n,onDelete:c,detailLink:M})=>{const{t:o}=B(),[y,f]=s(!1),d=a.protocolMappers,u=R().protocolMapperTypes[a.protocol],[D,C]=s(0);$(()=>C(D+1),[d]);const[p,g]=s(!1),[S,L]=s(a.protocolMappers),i=e=>{L(e?d||[]:void 0),g(!p)},b=async()=>d?d.reduce((r,l)=>{const m=u.find(({id:V})=>V===l.protocolMapper);return m?r.concat({...l,category:m.category,type:m.name,priority:m.priority}):r},[]).sort((r,l)=>r.priority-l.priority):[];return h(j,{children:[t(Q,{protocol:a.protocol,filter:S,onConfirm:n,open:p,toggleDialog:()=>g(!p)}),t(F,{loader:b,ariaLabelKey:"clientScopeList",searchPlaceholderKey:"searchForMapper",toolbarItem:t(Y,{onSelect:()=>f(!1),onOpenChange:e=>f(e),toggle:e=>t(_,{ref:e,variant:"primary",id:"mapperAction",onClick:()=>f(!y),children:o("addMapper")}),isOpen:y,children:h(z,{children:[t(x,{onClick:()=>i(!0),children:o("fromPredefinedMapper")}),t(x,{onClick:()=>i(!1),children:o("byConfiguration")})]})}),actions:[{title:o("delete"),onRowClick:c}],columns:[{name:"name",cellRenderer:e=>t(U,{...e,detailLink:M})},{name:"category"},{name:"type"},{name:"priority"}],emptyState:t(O,{message:o("emptyMappers"),instructions:o("emptyMappersInstructions"),secondaryActions:[{text:o("emptyPrimaryAction"),onClick:()=>i(!0)},{text:o("emptySecondaryAction"),onClick:()=>i(!1)}]})},D)]})};export{oe as M};
//# sourceMappingURL=MapperList-C9Go8WyH.js.map
