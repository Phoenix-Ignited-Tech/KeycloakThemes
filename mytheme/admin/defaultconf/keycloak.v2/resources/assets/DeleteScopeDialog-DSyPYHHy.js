import{jsxs as p,jsx as s}from"react/jsx-runtime";import{u,a as d,$ as f,j as g,bq as h}from"./main-hZIJIVx9.js";import{C}from"./ConfirmDialog-BClP8m2C.js";const D=({clientId:a,selectedScope:r,refresh:e,open:o,toggleDialog:t})=>{const{adminClient:l}=u(),{t:n}=d(),{addAlert:c,addError:m}=f();return p(C,{open:o,toggleDialog:t,titleKey:"deleteScope",continueButtonLabel:"confirm",onConfirm:async()=>{try{await l.clients.delAuthorizationScope({id:a,scopeId:r?.id}),c(n("resourceScopeSuccess"),g.success),e()}catch(i){m("resourceScopeError",i)}},children:[n("deleteScopeConfirm"),r&&"permissions"in r&&r.permissions&&r.permissions.length>0&&s(h,{variant:"warning",isInline:!0,isPlain:!0,title:n("deleteScopeWarning"),className:"pf-v5-u-pt-lg",children:s("p",{className:"pf-v5-u-pt-xs",children:r.permissions.map(i=>s("strong",{className:"pf-v5-u-pr-md",children:i.name},i.id))})})]})};export{D};
//# sourceMappingURL=DeleteScopeDialog-DSyPYHHy.js.map
