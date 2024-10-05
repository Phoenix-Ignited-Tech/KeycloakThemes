import{jsx as t,jsxs as d,Fragment as g}from"react/jsx-runtime";import{useState as v}from"react";import{u as x,K as D,a as C,S as b,P as N,s as L,T as h,B as o,D as w,M as $,E as S,v as I,w as k}from"./main-VxsXDFHF.js";import{E as A,D as M}from"./EmptyRow-C0G8P7Qh.js";import{f as T}from"./formatDate-CES5abZl.js";import{T as E}from"./Trans-BgoI7Vgw.js";import{S as P,a as u}from"./SplitItem-CjZ7qwfd.js";import{D as K,a as O,b as R}from"./DataListItemRow-Jpdz-uSV.js";import{D as U,a as f}from"./DataListItemCells-BuaCbg88.js";import"react-dom";const W=({title:a,onClick:n,testid:r})=>{const[s,c]=v(!1);return d(g,{children:[t(w,{popperProps:{position:"right"},onOpenChange:p=>c(p),toggle:p=>t($,{className:"pf-v5-u-display-none-on-lg",ref:p,variant:"plain",onClick:()=>c(!s),isExpanded:s,children:t(S,{})}),isOpen:s,children:t(I,{onClick:n,children:a},"1")}),t(o,{variant:"link",onClick:n,className:"pf-v5-u-display-none pf-v5-u-display-inline-flex-on-lg","data-testid":r,children:a})]})},Q=()=>{const{t:a}=x(),n=D(),{login:r}=n.keycloak,[s,c]=v();C(i=>k({signal:i,context:n}),c,[]);const p=i=>{const e=i.credential,m=[t(f,{"data-testrole":"label",className:"pf-v5-u-max-width",style:{"--pf-v5-u-max-width--MaxWidth":"300px"},children:a(e.userLabel)||a(e.type)},"title")];return e.createdDate&&m.push(t(f,{"data-testrole":"created-at",children:d(E,{i18nKey:"credentialCreatedAt",children:[t("strong",{className:"pf-v5-u-mr-md"}),{date:T(new Date(e.createdDate))}]})},"created"+e.id)),m};if(!s)return t(b,{});const y=[...new Set(s.map(i=>i.category))];return t(N,{title:a("signingIn"),description:a("signingInDescription"),children:y.map(i=>d(L,{variant:"light",className:"pf-v5-u-px-0",children:[t(h,{headingLevel:"h2",size:"xl",id:`${i}-categ-title`,children:a(i)}),s.filter(e=>e.category==i).map(e=>d(g,{children:[d(P,{className:"pf-v5-u-mt-lg pf-v5-u-mb-lg",children:[d(u,{children:[t(h,{headingLevel:"h3",size:"md",className:"pf-v5-u-mb-md","data-testid":`${e.type}/help`,children:t("span",{className:"cred-title pf-v5-u-display-block","data-testid":`${e.type}/title`,children:a(e.displayName)})}),t("span",{"data-testid":`${e.type}/help-text`,children:a(e.helptext)})]}),e.createAction&&t(u,{isFilled:!0,children:t("div",{className:"pf-v5-u-float-right",children:t(W,{onClick:()=>r({action:e.createAction}),title:a("setUpNew",{name:a(`${e.type}-display-name`)}),testid:`${e.type}/create`})})})]}),d(K,{"aria-label":"credential list",className:"pf-v5-u-mb-xl","data-testid":`${e.type}/credential-list`,children:[e.userCredentialMetadatas.length===0&&t(A,{message:a("notSetUp",{name:a(e.displayName)}),"data-testid":`${e.type}/not-set-up`}),e.userCredentialMetadatas.map(l=>t(O,{children:t(R,{id:`cred-${l.credential.id}`,children:t(U,{className:"pf-v5-u-py-0",dataListCells:[...p(l),t(M,{id:`action-${l.credential.id}`,"aria-label":a("updateCredAriaLabel"),"aria-labelledby":`cred-${l.credential.id}`,children:e.removeable?t(o,{variant:"danger","data-testrole":"remove",onClick:()=>{r({action:"delete_credential:"+l.credential.id})},children:a("delete")}):t(o,{variant:"secondary",onClick:()=>{e.updateAction&&r({action:e.updateAction})},"data-testrole":"update",children:a("update")})},"action")]})})},l.credential.id))]})]}))]},i))})};export{Q as SigningIn,Q as default};
//# sourceMappingURL=SigningIn-D_vgGsM3.js.map
