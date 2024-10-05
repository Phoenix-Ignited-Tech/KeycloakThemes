import{jsxs as b,Fragment as N,jsx as e}from"react/jsx-runtime";import{a as M,b5 as A,aZ as K,bA as fe,bB as ge,b0 as D,aR as ie,a_ as w,a$ as P,b8 as oe,b9 as G,bc as re,W as Ne,u as Z,C as ee,c4 as te,c5 as ae,aG as J,r as be,ba as Le,f as Me,b as Ve,$ as ye,d as Ee,c as he,B as se,j as L,dH as Ke,dI as le,aQ as Ae,bd as Ce,F as Be,P as He,bW as Ue,aY as qe,s as Ge,dJ as de,aP as Je,h as $e,L as ve,bX as je,D as j,dK as ze}from"./main-hZIJIVx9.js";import{useState as I,useMemo as We}from"react";import{u as Y}from"./ConfirmDialog-BClP8m2C.js";import{D as _e}from"./DynamicComponents-v6e2RtHb.js";import{F as z,a as Ye}from"./FormAccess-DIV7UK1Y.js";import{P as Qe}from"./PermissionTab-CKSyLWea.js";import{R as Xe,u as Ze}from"./RoutableTabs-B1siEmtL.js";import{V as et}from"./ViewHeader-DxK8RzXz.js";import{u as ne}from"./useParams-tGf6FJmU.js";import{T as Q,S as p,F as X,O as tt,D as at,a as nt}from"./OIDCGeneralSettings-CZaDmNgJ.js";import{S as it,D as ot}from"./SamlGeneralSettings-DAKOCOpg.js";import{E as rt}from"./ExpandableSection-BHMIrvCp.js";import{G as st}from"./GeneralSettings-DgwBNREN.js";import{M as ce}from"./MultiLineInput-DThNyrNa.js";import{a as W,b as _}from"./Tabs-DXjNMDMz.js";import"react-dom";import"./ClientSelect-9QE6UUYG.js";import"./FileUpload-DI2GSZLL.js";import"./CodeEditor-BZUGCa3z.js";import"./copy-icon-Cy7M-mD5.js";import"./GroupPickerDialog-CppD_q_3.js";import"./DataListItemRow-B1CYYhSa.js";import"./KeySelect-BUhUx10e.js";import"./useToggle-K3Kx99tM.js";import"./AddRoleMappingModal-C4wZesy5.js";import"./translationFormatter-QNso5xUZ.js";import"./useLocaleSort-Cjd-LyWL.js";import"./filter-icon-B5V3NoWK.js";import"./Trans-CPgnEO0T.js";import"./PageHandler-B0KkvOoM.js";import"./PageList-DUHf6xan.js";import"./SwitchControl-CuqH9Ng4.js";/* empty css                           */import"./ClientIdSecret-KRPFh3sV.js";import"./RedirectUrl-DLJV9Xtv.js";const pe=({field:n,label:t,defaultValue:a,labelForEmpty:r="none"})=>{const{adminClient:d}=Z(),{t:i}=M(),{control:s}=A(),[l,g]=I(),[c,v]=I(!1);return ee(()=>d.authenticationManagement.getFlows(),y=>g(y.filter(u=>u.providerId==="basic-flow")),[]),e(w,{label:i(t),labelIcon:e(P,{helpText:i(`${t}Help`),fieldLabelId:t}),fieldId:t,children:e(D,{name:n,defaultValue:a,control:s,render:({field:y})=>e(te,{toggleId:t,onToggle:()=>v(!c),onSelect:u=>{y.onChange(u),v(!1)},selections:y.value||i(r),variant:ae.single,"aria-label":i(t),isOpen:c,children:[...a===""?[e(J,{value:"",children:i(r)},"empty")]:[],...l?.map(u=>e(J,{selected:u.alias===y.value,value:u.alias,children:u.alias},u.id))||[]]})})})},me=["IMPORT","LEGACY","FORCE"],lt=({isOIDC:n,isSAML:t})=>{const{t:a}=M(),{control:r,register:d,setValue:i,formState:{errors:s}}=A(),g=K({control:r,name:"config.filteredByClaim",defaultValue:"false"})==="true",v=fe()(ge.TransientUsers),u=K({control:r,name:"config.doNotStoreUsers",defaultValue:"false"})==="false";return b(N,{children:[!n&&!t&&e(Q,{field:"config.defaultScope",label:"scopes"}),e(p,{field:"storeToken",label:"storeTokens",fieldType:"boolean"}),(t||n)&&e(p,{field:"addReadTokenRoleOnCreate",label:"storedTokensReadable",fieldType:"boolean"}),!n&&!t&&b(N,{children:[e(p,{field:"config.acceptsPromptNoneForwardFromClient",label:"acceptsPromptNone"}),e(p,{field:"config.disableUserInfo",label:"disableUserInfo"})]}),n&&e(p,{field:"config.isAccessTokenJWT",label:"isAccessTokenJWT"}),e(p,{field:"trustEmail",label:"trustEmail",fieldType:"boolean"}),e(p,{field:"linkOnly",label:"accountLinkingOnly",fieldType:"boolean"}),e(p,{field:"hideOnLogin",label:"hideOnLoginPage",fieldType:"boolean"}),(!t||n)&&e(X,{label:"filteredByClaim",children:e(D,{name:"config.filteredByClaim",defaultValue:"false",control:r,render:({field:f})=>e(ie,{id:"filteredByClaim",label:a("on"),labelOff:a("off"),isChecked:f.value==="true",onChange:(T,h)=>{f.onChange(h.toString())}})})}),(!t||n)&&g&&b(N,{children:[b(w,{label:a("claimFilterName"),labelIcon:e(P,{helpText:a("claimFilterNameHelp"),fieldLabelId:"claimFilterName"}),fieldId:"kc-claim-filter-name",isRequired:!0,children:[e(oe,{isRequired:!0,id:"kc-claim-filter-name","data-testid":"claimFilterName",validated:s.config?.claimFilterName?G.error:G.default,...d("config.claimFilterName",{required:!0})}),s.config?.claimFilterName&&e(re,{message:a("required")})]}),b(w,{label:a("claimFilterValue"),labelIcon:e(P,{helpText:a("claimFilterValueHelp"),fieldLabelId:"claimFilterName"}),fieldId:"kc-claim-filter-value",isRequired:!0,children:[e(oe,{isRequired:!0,id:"kc-claim-filter-value","data-testid":"claimFilterValue",validated:s.config?.claimFilterValue?G.error:G.default,...d("config.claimFilterValue",{required:!0})}),s.config?.claimFilterValue&&e(re,{message:a("required")})]})]}),e(pe,{field:"firstBrokerLoginFlowAlias",label:"firstBrokerLoginFlowAliasOverride",defaultValue:"",labelForEmpty:""}),e(pe,{field:"postBrokerLoginFlowAlias",label:"postBrokerLoginFlowAlias",defaultValue:""}),v&&e(X,{label:"doNotStoreUsers",children:e(D,{name:"config.doNotStoreUsers",defaultValue:"false",control:r,render:({field:f})=>e(ie,{id:"doNotStoreUsers",label:a("on"),labelOff:a("off"),isChecked:f.value==="true",onChange:(T,h)=>{f.onChange(h.toString()),h&&i("config.syncMode","IMPORT")}})})}),u&&e(Ne,{name:"config.syncMode",label:a("syncMode"),labelIcon:a("syncModeHelp"),options:me.map(f=>({key:f,value:a(`syncModes.${f.toLocaleLowerCase()}`)})),controller:{defaultValue:me[0],rules:{required:a("required")}}}),e(p,{field:"config.caseSensitiveOriginalUsername",label:"caseSensitiveOriginalUsername"})]})},dt={unspecified:"",none:"none",consent:"consent",login:"login",select_account:"select_account"},ct=()=>{const{t:n}=M(),{control:t}=A(),[a,r]=I(!1),[d,i]=I(!1);return e(rt,{toggleText:n("advanced"),onToggle:()=>r(!a),isExpanded:a,children:b(be,{isHorizontal:!0,children:[e(p,{label:"passLoginHint",field:"config.loginHint"}),e(p,{label:"passMaxAge",field:"config.passMaxAge"}),e(p,{label:"passCurrentLocale",field:"config.uiLocales"}),e(p,{field:"config.backchannelSupported",label:"backchannelLogout"}),e(p,{field:"config.sendIdTokenOnLogout",label:"sendIdTokenOnLogout",defaultValue:"true"}),e(p,{field:"config.sendClientIdOnLogout",label:"sendClientIdOnLogout"}),e(p,{field:"config.disableUserInfo",label:"disableUserInfo"}),e(p,{field:"config.disableNonce",label:"disableNonce"}),e(Q,{field:"config.defaultScope",label:"scopes"}),e(X,{label:"prompt",children:e(D,{name:"config.prompt",defaultValue:"",control:t,render:({field:s})=>e(te,{toggleId:"prompt",onToggle:()=>i(!d),onSelect:l=>{s.onChange(l),i(!1)},selections:s.value||n("prompts.unspecified"),variant:ae.single,"aria-label":n("prompt"),isOpen:d,children:Object.entries(dt).map(([l,g])=>e(J,{selected:g===s.value,value:g,children:n(`prompts.${l}`)},l))})})}),e(p,{field:"config.acceptsPromptNoneForwardFromClient",label:"acceptsPromptNone"}),e(w,{label:n("allowedClockSkew"),labelIcon:e(P,{helpText:n("allowedClockSkewHelp"),fieldLabelId:"allowedClockSkew"}),fieldId:"allowedClockSkew",children:e(D,{name:"config.allowedClockSkew",defaultValue:0,control:t,render:({field:s})=>{const l=Number(s.value);return e(Le,{"data-testid":"allowedClockSkew",inputName:"allowedClockSkew",min:0,max:2147483,value:l,readOnly:!0,onPlus:()=>s.onChange(l+1),onMinus:()=>s.onChange(l-1),onChange:g=>{const c=Number(g.target.value);s.onChange(c<0?0:c)}})}})}),e(Q,{field:"config.forwardParameters",label:"forwardParameters"})]})})},ue=["exact","minimum","maximum","better"],pt=()=>{const{t:n}=M(),{control:t}=A(),[a,r]=I(!1);return b(N,{children:[e(w,{label:n("comparison"),labelIcon:e(P,{helpText:n("comparisonHelp"),fieldLabelId:"comparison"}),fieldId:"comparison",children:e(D,{name:"config.authnContextComparisonType",defaultValue:ue[0],control:t,render:({field:d})=>e(te,{toggleId:"comparison",direction:"up",onToggle:i=>r(i),onSelect:i=>{d.onChange(i.toString()),r(!1)},selections:d.value,variant:ae.single,"aria-label":n("comparison"),isOpen:a,children:ue.map(i=>e(J,{selected:i===d.value,value:i,children:n(i)},i))})})}),e(w,{label:n("authnContextClassRefs"),fieldId:"kc-authnContextClassRefs",labelIcon:e(P,{helpText:n("authnContextClassRefsHelp"),fieldLabelId:"authnContextClassRefs"}),children:e(ce,{name:"config.authnContextClassRefs","aria-label":n("identify-providers:authnContextClassRefs"),addButtonLabel:"addAuthnContextClassRef","data-testid":"classref-field"})}),e(w,{label:n("authnContextDeclRefs"),fieldId:"kc-authnContextDeclRefs",labelIcon:e(P,{helpText:n("authnContextDeclRefsHelp"),fieldLabelId:"authnContextDeclRefs"}),children:e(ce,{name:"config.authnContextDeclRefs","aria-label":n("identify-providers:authnContextDeclRefs"),addButtonLabel:"addAuthnContextDeclRef","data-testid":"declref-field"})})]})},mt=({onChange:n,value:t,save:a,toggleDeleteDialog:r})=>{const{adminClient:d}=Z(),{t:i}=M(),{alias:s}=ne(),[l,g]=I(),{addAlert:c,addError:v}=ye(),{setValue:y,formState:u,control:f}=A(),T=K({control:f,name:"config.validateSignature"}),h=K({control:f,name:"config.useMetadataDescriptorUrl"}),F=K({control:f,name:"config.metadataDescriptorUrl"});ee(()=>d.identityProviders.findOne({alias:s}),C=>{if(!C)throw new Error(i("notFound"));g(C)},[]);const[V,k]=Y({titleKey:"disableProvider",messageKey:i("disableConfirmIdentityProvider",{provider:s}),continueButtonLabel:"disable",onConfirm:()=>{n(!t),a()}}),B=async(C,R)=>{try{const S=await d.identityProviders.importFromUrl({providerId:C,fromUrl:R});S.signingCertificate?(y("config.signingCertificate",S.signingCertificate),c(i("importKeysSuccess"),L.success)):v("importKeysError",i("importKeysErrorNoSigningCertificate"))}catch(S){v("importKeysError",S)}},$=async C=>{try{await d.identityProviders.reloadKeys({alias:C})?c(i("reloadKeysSuccess"),L.success):c(i("reloadKeysSuccessButFalse"),L.warning)}catch(R){v("reloadKeysError",R)}};return b(N,{children:[e(k,{}),e(et,{titleKey:je(l?l.displayName?l.displayName:l.providerId:""),divider:!1,dropdownItems:[...l?.providerId?.includes("saml")&&T==="true"&&h==="true"&&F&&!u.isDirty&&t?[e(j,{onClick:()=>$(l.alias),children:i("reloadKeys")},"reloadKeys")]:l?.providerId?.includes("saml")&&T==="true"&&h!=="true"&&F&&!u.isDirty?[e(j,{onClick:()=>B(l.providerId,F),children:i("importKeys")},"importKeys")]:[],e(Ce,{},"separator"),e(j,{onClick:()=>r(),children:i("delete")},"delete")],isEnabled:t,onToggle:C=>{C?(n(C),a()):V()}})]})},ut=({name:n,mapperId:t,provider:a})=>{const{realm:r}=he(),{alias:d}=ne();return e(ve,{to:ze({realm:r,alias:d,providerId:a?.providerId,id:t}),children:n})};function Qt(){const{adminClient:n}=Z(),{t}=M(),{alias:a,providerId:r}=ne(),d=fe(),i=Me(),{handleSubmit:s,getValues:l,reset:g}=i,[c,v]=I(),[y,u]=I(),f=Ve(),T=We(()=>{const o=["org.keycloak.broker.social.SocialIdentityProvider","org.keycloak.broker.provider.IdentityProvider"];for(const m of o){const O=f.componentTypes?.[m]?.find(({id:x})=>x===r);if(O)return O}},[f,r]),{addAlert:h,addError:F}=ye(),V=Ee(),{realm:k}=he(),[B,$]=I(0),C=()=>$(B+1);ee(()=>n.identityProviders.findOne({alias:a}),o=>{if(!o)throw new Error(t("notFound"));g(o),v(o),o.config.authnContextClassRefs&&i.setValue("config.authnContextClassRefs",JSON.parse(o.config?.authnContextClassRefs)),o.config.authnContextDeclRefs&&i.setValue("config.authnContextDeclRefs",JSON.parse(o.config?.authnContextDeclRefs))},[]);const R=o=>le({realm:k,alias:a,providerId:r,tab:o}),S=o=>Ze(R(o)),Ie=S("settings"),Se=S("mappers"),xe=S("permissions"),H=async o=>{const m=o||l(),O=m.config?.authnContextClassRefs;m.config?.authnContextClassRefs&&(m.config.authnContextClassRefs=JSON.stringify(m.config.authnContextClassRefs));const x=m.config?.authnContextDeclRefs;m.config?.authnContextDeclRefs&&(m.config.authnContextDeclRefs=JSON.stringify(m.config.authnContextDeclRefs));try{await n.identityProviders.update({alias:a},{...m,config:{...c?.config,...m.config},alias:a,providerId:r}),O&&(m.config.authnContextClassRefs=O),x&&(m.config.authnContextDeclRefs=x),g(m),h(t("updateSuccessIdentityProvider"),L.success)}catch(q){F("updateErrorIdentityProvider",q)}},[Te,Fe]=Y({titleKey:"deleteProvider",messageKey:t("deleteConfirmIdentityProvider",{provider:a}),continueButtonLabel:"delete",continueButtonVariant:se.danger,onConfirm:async()=>{try{await n.identityProviders.del({alias:a}),h(t("deletedSuccessIdentityProvider"),L.success),V(Ke({realm:k}))}catch(o){F("deleteErrorIdentityProvider",o)}}}),[ke,Re]=Y({titleKey:"deleteProviderMapper",messageKey:t("deleteMapperConfirm",{mapper:y?.name}),continueButtonLabel:"delete",continueButtonVariant:se.danger,onConfirm:async()=>{try{await n.identityProviders.delMapper({alias:a,id:y?.mapperId}),h(t("deleteMapperSuccess"),L.success),C(),V(le({providerId:r,alias:a,tab:"mappers",realm:k}))}catch(o){F("deleteErrorIdentityProvider",o)}}});if(!c)return e(Ae,{});const U=c.providerId.includes("oidc"),E=c.providerId.includes("saml"),we=!U&&!E,Pe=async()=>{const[o,m]=await Promise.all([n.identityProviders.findMappers({alias:a}),n.identityProviders.findMapperTypes({alias:a})]);return o.map(x=>{const q=Object.values(m).find(Oe=>x.identityProviderMapper===Oe.id);return{...q,name:x.name,type:q?.name,mapperId:x.id}})},De=[{title:t("generalSettings"),panel:b(z,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:s(H),children:[we&&e(st,{create:!1,id:r}),U&&e(tt,{}),E&&e(it,{isAliasReadonly:!0}),T&&e(_e,{stringify:!0,properties:T.properties})]})},{title:t("oidcSettings"),isHidden:!U,panel:b(N,{children:[e(at,{readOnly:!1}),b(be,{isHorizontal:!0,className:"pf-v5-u-py-lg",children:[e(Ce,{}),e(nt,{create:!1})]}),e(ct,{})]})},{title:t("samlSettings"),isHidden:!E,panel:e(ot,{readOnly:!1})},{title:t("reqAuthnConstraints"),isHidden:!E,panel:e(z,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:s(H),children:e(pt,{})})},{title:t("advancedSettings"),panel:b(z,{role:"manage-identity-providers",isHorizontal:!0,onSubmit:s(H),children:[e(lt,{isOIDC:U,isSAML:E}),e(Ye,{name:"idp-details",isSubmit:!0,reset:g})]})}];return b(Be,{...i,children:[e(Fe,{}),e(Re,{}),e(D,{name:"enabled",control:i.control,defaultValue:!0,render:({field:o})=>e(mt,{value:o.value||!1,onChange:o.onChange,save:H,toggleDeleteDialog:Te})}),e(He,{variant:"light",className:"pf-v5-u-p-0",children:b(Xe,{isBox:!0,defaultLocation:R("settings"),children:[e(W,{id:"settings",title:e(_,{children:t("settings")}),...Ie,children:e(Ue,{label:t("jumpToSection"),className:"pf-v5-u-px-lg",sections:De})}),e(W,{id:"mappers","data-testid":"mappers-tab",title:e(_,{children:t("mappers")}),...Se,children:e(qe,{emptyState:e(Ge,{message:t("noMappers"),instructions:t("noMappersInstructions"),primaryActionText:t("addMapper"),onPrimaryAction:()=>V(de({realm:k,alias:a,providerId:c.providerId,tab:"mappers"}))}),loader:Pe,ariaLabelKey:"mappersList",searchPlaceholderKey:"searchForMapper",toolbarItem:e(Je,{children:e($e,{id:"add-mapper-button",component:o=>e(ve,{...o,to:de({realm:k,alias:a,providerId:c.providerId,tab:"mappers"})}),"data-testid":"addMapper",children:t("addMapper")})}),columns:[{name:"name",displayKey:"name",cellRenderer:o=>e(ut,{...o,provider:c})},{name:"category",displayKey:"category"},{name:"type",displayKey:"type"}],actions:[{title:t("delete"),onRowClick:o=>{u(o),ke()}}]},B)}),d(ge.AdminFineGrainedAuthz)&&e(W,{id:"permissions","data-testid":"permissionsTab",title:e(_,{children:t("permissions")}),...xe,children:e(Qe,{id:a,type:"identityProviders"})})]})})]})}export{Qt as default};
//# sourceMappingURL=DetailSettings-BNk2rd-g.js.map
