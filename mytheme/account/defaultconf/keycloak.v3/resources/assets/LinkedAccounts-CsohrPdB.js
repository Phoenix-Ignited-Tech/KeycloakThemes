import{jsx as e,jsxs as p}from"react/jsx-runtime";import{_ as U,f as F,c as O,u as P,K as _,Y as M,B as x,I as b,h as B,l as K,i as R,j as G,k as C,m as Y,n as q,a as I,P as H,T as S,o as D}from"./main-VxsXDFHF.js";import*as $ from"react";import{useState as u}from"react";import{D as J,E as w}from"./EmptyRow-C0G8P7Qh.js";import{u as Q}from"./useAccountAlerts-ChKJBvtE.js";import{a as V,b as W,D as E}from"./DataListItemRow-Jpdz-uSV.js";import{D as X,a as N}from"./DataListItemCells-BuaCbg88.js";import{S as y,a as v}from"./SplitItem-CjZ7qwfd.js";import{L as Z}from"./Label-DfTZiadY.js";import"react-dom";const L={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-v5-l-stack",stackItem:"pf-v5-l-stack__item"},j=i=>{var{hasGutter:m=!1,className:a="",children:t=null,component:r="div"}=i,f=U(i,["hasGutter","className","children","component"]);const n=r;return $.createElement(n,Object.assign({},f,{className:F(L.stack,m&&L.modifiers.gutter,a)}),t)};j.displayName="Stack";const A=i=>{var{isFilled:m=!1,className:a="",children:t=null}=i,r=U(i,["isFilled","className","children"]);return $.createElement("div",Object.assign({},r,{className:F(L.stackItem,m&&L.modifiers.fill,a)}),t)};A.displayName="StackItem";const ee={name:"LinkIcon",height:512,width:512,svgPath:"M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z",yOffset:0,xOffset:0},ie=O(ee),se={name:"UnlinkIcon",height:512,width:512,svgPath:"M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z",yOffset:0,xOffset:0},ne=O(se),z=({account:i,isLinked:m=!1,refresh:a})=>{const{t}=P(),r=_(),{addAlert:f,addError:n}=Q(),k=async o=>{try{await B(r,o),f(t("unLinkSuccess")),a()}catch(d){n("unLinkError",d)}},l=async o=>{try{const{accountLinkUri:d}=await K(r,o);location.href=d}catch(d){n("linkError",d)}};return e(V,{id:`${i.providerAlias}-idp`,"aria-label":t("linkedAccounts"),children:p(W,{"data-testid":`linked-accounts/${i.providerName}`,children:[e(X,{dataListCells:[e(N,{children:p(y,{children:[e(v,{className:"pf-v5-u-mr-sm",children:e(M,{icon:i.providerName})}),e(v,{className:"pf-v5-u-my-xs",isFilled:!0,children:e("span",{id:`${i.providerAlias}-idp-name`,children:i.displayName})})]})},"idp"),e(N,{children:e(y,{children:e(v,{className:"pf-v5-u-my-xs",isFilled:!0,children:e("span",{id:`${i.providerAlias}-idp-label`,children:e(Z,{color:i.social?"blue":"green",children:t(i.social?"socialLogin":"systemDefined")})})})})},"label"),e(N,{width:5,children:e(y,{children:e(v,{className:"pf-v5-u-my-xs",isFilled:!0,children:e("span",{id:`${i.providerAlias}-idp-username`,children:i.linkedUsername})})})},"username")]}),p(J,{"aria-labelledby":t("link"),"aria-label":t("unLink"),id:"setPasswordAction",children:[m&&p(x,{id:`${i.providerAlias}-idp-unlink`,variant:"link",onClick:()=>k(i),children:[e(b,{size:"sm",children:e(ne,{})})," ",t("unLink")]}),!m&&p(x,{id:`${i.providerAlias}-idp-link`,variant:"link",onClick:()=>l(i),children:[e(b,{size:"sm",children:e(ie,{})})," ",t("link")]})]})]},i.providerName)},i.providerName)},T=({count:i,first:m,max:a,onNextClick:t,onPreviousClick:r,onPerPageSelect:f,onFilter:n,hasNext:k})=>{const{t:l}=P(),[o,d]=u(""),g=Math.round(m/a)+1;return e(R,{children:p(G,{children:[e(C,{children:e(Y,{placeholder:l("filterByName"),"aria-label":l("filterByName"),value:o,onChange:(c,s)=>{d(s)},onSearch:()=>n(o),onKeyDown:c=>{c.key==="Enter"&&n(o)},onClear:()=>{d(""),n("")}})}),e(C,{variant:"pagination",children:e(q,{isCompact:!0,perPageOptions:[{title:"5",value:6},{title:"10",value:11},{title:"20",value:21}],toggleTemplate:({firstIndex:c,lastIndex:s})=>p("b",{children:[c&&c>1?c-1:c," -"," ",s&&s>1?s-1:s]}),itemCount:i+(g-1)*a+(k?1:0),page:g,perPage:a,onNextClick:(c,s)=>t((s-1)*a),onPreviousClick:(c,s)=>r((s-1)*a),onPerPageSelect:(c,s,h)=>f(h-1,s)})})]})})},ke=()=>{const{t:i}=P(),m=_(),[a,t]=u([]),[r,f]=u([]),[n,k]=u({first:0,max:6,linked:!1}),[l,o]=u({first:0,max:6,linked:!0}),[d,g]=u(1),c=()=>g(d+1);return I(s=>D({signal:s,context:m},n),f,[n,d]),I(s=>D({signal:s,context:m},l),t,[l,d]),e(H,{title:i("linkedAccounts"),description:i("linkedAccountsIntroMessage"),children:p(j,{hasGutter:!0,children:[p(A,{children:[e(S,{headingLevel:"h2",className:"pf-v5-u-mb-lg",size:"xl",children:i("linkedLoginProviders")}),e(T,{onFilter:s=>o({...l,first:0,search:s}),count:a.length,first:l.first,max:l.max,onNextClick:()=>{o({...l,first:l.first+l.max-1})},onPreviousClick:()=>o({...l,first:l.first-l.max+1}),onPerPageSelect:(s,h)=>o({...l,first:s,max:h}),hasNext:a.length>l.max-1}),e(E,{id:"linked-idps","aria-label":i("linkedLoginProviders"),children:a.length>0?a.map((s,h)=>h!==l.max-1&&e(z,{account:s,isLinked:!0,refresh:c},s.providerName)):e(w,{message:i("linkedEmpty")})})]}),p(A,{children:[e(S,{headingLevel:"h2",className:"pf-v5-u-mt-xl pf-v5-u-mb-lg",size:"xl",children:i("unlinkedLoginProviders")}),e(T,{onFilter:s=>k({...n,first:0,search:s}),count:r.length,first:n.first,max:n.max,onNextClick:()=>{k({...n,first:n.first+n.max-1})},onPreviousClick:()=>k({...n,first:n.first-n.max+1}),onPerPageSelect:(s,h)=>k({...n,first:s,max:h}),hasNext:r.length>n.max-1}),e(E,{id:"unlinked-idps","aria-label":i("unlinkedLoginProviders"),children:r.length>0?r.map((s,h)=>h!==n.max-1&&e(z,{account:s,refresh:c},s.providerName)):e(w,{message:i("unlinkedEmpty")})})]})]})})};export{ke as LinkedAccounts,ke as default};
//# sourceMappingURL=LinkedAccounts-CsohrPdB.js.map
