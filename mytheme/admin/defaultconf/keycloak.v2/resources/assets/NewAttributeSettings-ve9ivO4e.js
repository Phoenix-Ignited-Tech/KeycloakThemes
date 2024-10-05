import{jsx as e,jsxs as u,Fragment as L}from"react/jsx-runtime";import{a as I,a_ as N,cv as ae,cw as B,u as ve,c as ye,b5 as _,aZ as z,C as U,aQ as we,F as te,a$ as x,b8 as ce,bc as Ie,bq as De,h as O,W as Re,bd as X,R as W,b0 as j,c4 as Y,c5 as ue,aG as ee,aR as xe,cT as me,b as ge,f as fe,M as Ee,q as Pe,r as Te,B as Le,bh as Oe,b_ as He,b$ as Ge,c0 as pe,c1 as J,c2 as Me,c3 as Z,aL as $e,aM as We,d as ze,$ as je,P as Be,bW as Ke,L as Ue,f7 as ke,f1 as _e,j as Fe,aE as Qe,ff as Je}from"./main-hZIJIVx9.js";import{useState as T,useEffect as Ne,useMemo as Ze}from"react";import{F as ne,a as Xe}from"./FormAccess-DIV7UK1Y.js";import{V as Ye}from"./ViewHeader-DxK8RzXz.js";import{u as ea}from"./useLocale-CfDAs_Xy.js";import{u as le}from"./useParams-tGf6FJmU.js";/* empty css                               */import{U as aa}from"./UserProfileContext-CdN6lacy.js";import{K as ta}from"./KeyValueInput-CYwzrckm.js";import{D as na}from"./SwitchControl-CuqH9Ng4.js";import{u as ie}from"./useToggle-K3Kx99tM.js";import{u as la}from"./ConfirmDialog-BClP8m2C.js";import{D as ia}from"./DynamicComponents-v6e2RtHb.js";import{A as ra,G as sa}from"./AddTranslationsDialog-BQlUW8FF.js";import{i as oa}from"./isEqual-BKyM3i3m.js";import"react-dom";import"./copy-icon-Cy7M-mD5.js";import"./KeySelect-BUhUx10e.js";import"./ClientSelect-9QE6UUYG.js";import"./FileUpload-DI2GSZLL.js";import"./CodeEditor-BZUGCa3z.js";import"./GroupPickerDialog-CppD_q_3.js";import"./DataListItemRow-B1CYYhSa.js";import"./MultiLineInput-DThNyrNa.js";import"./AddRoleMappingModal-C4wZesy5.js";import"./translationFormatter-QNso5xUZ.js";import"./useLocaleSort-Cjd-LyWL.js";import"./filter-icon-B5V3NoWK.js";const da=()=>{const{t}=I();return e(ne,{role:"manage-realm",isHorizontal:!0,children:e(N,{hasNoPaddingTop:!0,label:t("annotations"),fieldId:"kc-annotations",className:"kc-annotations-label",children:e(ae,{className:"kc-annotations",children:e(B,{children:e(ta,{name:"annotations",label:t("annotations"),defaultKeyValue:[{key:"inputType",label:t("inputType"),values:["text","textarea","select","select-radiobuttons","multiselect","multiselect-checkboxes","html5-email","html5-tel","html5-url","html5-number","html5-range","html5-datetime-local","html5-date","html5-month","html5-week","html5-time"]},{key:"inputHelperTextBefore",label:t("inputHelperTextBefore")},{key:"inputHelperTextAfter",label:t("inputHelperTextAfter")},{key:"inputOptionLabelsI18nPrefix",label:t("inputOptionLabelsI18nPrefix")},{key:"inputTypePlaceholder",label:t("inputTypePlaceholder")},{key:"inputTypeSize",label:t("inputTypeSize")},{key:"inputTypeCols",label:t("inputTypeCols")},{key:"inputTypeRows",label:t("inputTypeRows")},{key:"inputTypeStep",label:t("inputTypeStep")},{key:"kcNumberFormat",label:t("kcNumberFormat")},{key:"kcNumberUnFormat",label:t("kcNumberUnFormat")}]})})})})})},he=[{label:"requiredForLabel.both",value:["admin","user"]},{label:"requiredForLabel.users",value:["user"]},{label:"requiredForLabel.admins",value:["admin"]}],ca=({onHandlingTranslationData:t,onHandlingGeneratedDisplayName:p})=>{const{adminClient:c}=ve(),{t:a}=I(),{realmRepresentation:i}=ye(),l=_(),[h,f]=T(),[C,o]=T(),[v,H]=T(!1),[y,S]=T(!1),[E,G]=ie(),{attributeName:M}=le(),D=!!M,[$,g]=T(""),[b,r]=T(""),[w,A]=T(),[k,P]=T({key:"",translations:[]}),m=/\$\{([^}]+)\}/,d=(n,s)=>{g(s);const V=s!==""&&i?.internationalizationEnabled?`\${profile.attributes.${s}}`:"";r(V)},q=z({control:l.control,name:"hasSelector"}),F=z({control:l.control,name:"hasRequiredScopes"}),Ce=z({control:l.control,name:"isRequired",defaultValue:!1}),K=z({control:l.control,name:"displayName"}),qe=m.test(K);U(()=>c.clientScopes.find(),f,[]),U(()=>c.users.getProfile(),o,[]);const re=n=>{t(n)},se=n=>{p(n)};if(Ne(()=>{re(k),se(b)},[k,b]),!h)return e(we,{});function oe(n){l.setValue("hasSelector",n)}function de(n){l.setValue("hasRequiredScopes",n)}const Ve=n=>{P(n)},Se=()=>{G(),re(k),se(b)},Ae=K?.substring(2,K.length-1);return u(L,{children:[E&&e(ra,{translationKey:D?Ae:`profile.attributes.${$}`,translations:k,type:w??"displayName",onTranslationsAdded:Ve,toggleDialog:Se,onCancel:()=>{G()}}),e(ne,{role:"manage-realm",isHorizontal:!0,children:u(te,{...l,children:[u(N,{label:a("attributeName"),labelIcon:e(x,{helpText:a("upAttributeNameHelp"),fieldLabelId:"attributeName"}),fieldId:"kc-attribute-name",isRequired:!0,children:[e(ce,{isRequired:!0,id:"kc-attribute-name",defaultValue:"","data-testid":"attribute-name",isDisabled:D,validated:l.formState.errors.name?"error":"default",...l.register("name",{required:!0}),onChange:d}),l.formState.errors.name&&e(Ie,{message:a("validateAttributeName")})]}),e(N,{label:a("attributeDisplayName"),labelIcon:e(x,{helpText:a("attributeDisplayNameHelp"),fieldLabelId:"attributeDisplayName"}),fieldId:"kc-attribute-display-name",children:u(ae,{hasGutter:!0,children:[u(B,{span:i?.internationalizationEnabled?11:12,children:[e(ce,{id:"kc-attribute-display-name","data-testid":"attribute-display-name",isDisabled:i?.internationalizationEnabled&&$!==""||D&&qe,value:D?K:i?.internationalizationEnabled?b:void 0,...l.register("displayName")}),b&&e(De,{className:"pf-v5-u-mt-sm",variant:"info",isInline:!0,isPlain:!0,title:a("addAttributeTranslationInfo")})]}),i?.internationalizationEnabled&&e(B,{span:1,children:e(O,{variant:"link",className:"pf-m-plain kc-attribute-display-name-iconBtn","data-testid":"addAttributeTranslationBtn","aria-label":a("addAttributeTranslationBtn"),isDisabled:!$&&!D,onClick:()=>{A("displayName"),G()},icon:e(sa,{})})})]})}),e(na,{name:"multivalued",label:a("multivalued"),labelIcon:a("multivaluedHelp")}),e(Re,{name:"group",label:a("attributeGroup"),labelIcon:a("attributeGroupHelp"),controller:{defaultValue:""},options:[{key:"",value:a("none")},...C?.groups?.map(n=>({key:n.name,value:n.name}))||[]]}),!ba.includes(M)&&u(L,{children:[e(X,{}),u(N,{label:a("enabledWhen"),labelIcon:e(x,{helpText:a("enabledWhenTooltip"),fieldLabelId:"enabled-when"}),fieldId:"enabledWhen",hasNoPaddingTop:!0,children:[e(W,{id:"always","data-testid":"always",isChecked:!q,name:"enabledWhen",label:a("always"),onChange:()=>oe(!1),className:"pf-v5-u-mb-md"}),e(W,{id:"scopesAsRequested","data-testid":"scopesAsRequested",isChecked:q,name:"enabledWhen",label:a("scopesAsRequested"),onChange:()=>oe(!0),className:"pf-v5-u-mb-md"})]}),q&&e(N,{fieldId:"kc-scope-enabled-when",children:e(j,{name:"selector.scopes",control:l.control,defaultValue:[],render:({field:n})=>e(Y,{"data-testid":"enabled-when-scope-field",variant:ue.typeaheadMulti,typeAheadAriaLabel:"Select",chipGroupProps:{numChips:3,expandedText:a("hide"),collapsedText:a("showRemaining")},onToggle:s=>H(s),selections:n.value,onSelect:s=>{const V=s.toString();let R=[""];n.value?R=n.value.includes(V)?n.value.filter(Q=>Q!==V):[...n.value,V]:R=[V],n.onChange(R)},onClear:()=>{n.onChange([])},isOpen:v,"aria-labelledby":"scope",children:h.map(s=>e(ee,{value:s.name,children:s.name},s.name))})})})]}),M!=="username"&&u(L,{children:[e(X,{}),e(N,{label:a("required"),labelIcon:e(x,{helpText:a("requiredHelp"),fieldLabelId:"required"}),fieldId:"kc-required",hasNoPaddingTop:!0,children:e(j,{name:"isRequired","data-testid":"required",defaultValue:!1,control:l.control,render:({field:n})=>e(xe,{id:"kc-required",onChange:n.onChange,isChecked:n.value,label:a("on"),labelOff:a("off"),"aria-label":a("required")})})}),Ce&&u(L,{children:[e(N,{label:a("requiredFor"),fieldId:"requiredFor",hasNoPaddingTop:!0,children:e(j,{name:"required.roles","data-testid":"requiredFor",defaultValue:he[0].value,control:l.control,render:({field:n})=>e("div",{className:"kc-requiredFor",children:he.map(s=>e(W,{id:s.label,"data-testid":s.label,isChecked:oa(n.value,s.value),name:"roles",onChange:()=>{n.onChange(s.value)},label:a(s.label),className:"kc-requiredFor-option"},s.label))})})}),u(N,{label:a("requiredWhen"),labelIcon:e(x,{helpText:a("requiredWhenTooltip"),fieldLabelId:"required-when"}),fieldId:"requiredWhen",hasNoPaddingTop:!0,children:[e(W,{id:"requiredAlways","data-testid":"requiredAlways",isChecked:!F,name:"requiredWhen",label:a("always"),onChange:()=>de(!1),className:"pf-v5-u-mb-md"}),e(W,{id:"requiredScopesAsRequested","data-testid":"requiredScopesAsRequested",isChecked:F,name:"requiredWhen",label:a("scopesAsRequested"),onChange:()=>de(!0),className:"pf-v5-u-mb-md"})]}),F&&e(N,{fieldId:"kc-scope-required-when",children:e(j,{name:"required.scopes",control:l.control,defaultValue:[],render:({field:n})=>e(Y,{"data-testid":"required-when-scope-field",variant:ue.typeaheadMulti,typeAheadAriaLabel:"Select",chipGroupProps:{numChips:3,expandedText:a("hide"),collapsedText:a("showRemaining")},onToggle:s=>S(s),selections:n.value,onSelect:s=>{const V=s.toString();let R=[""];n.value?R=n.value.includes(V)?n.value.filter(Q=>Q!==V):[...n.value,V]:R=[V],n.onChange(R)},onClear:()=>{n.onChange([])},isOpen:y,"aria-labelledby":"scope",children:h.map(s=>e(ee,{value:s.name,children:s.name},s.name))})})})]})]})]})})]})},be=({name:t})=>{const{t:p}=I(),{control:c}=_();return e(ae,{children:e(j,{name:`permissions.${t}`,control:c,defaultValue:[],render:({field:a})=>u(L,{children:[e(B,{lg:4,sm:6,children:e(me,{id:`user-${t}`,label:p("user"),value:"user","data-testid":`user-${t}`,isChecked:a.value.includes("user"),onChange:()=>{const i="user",l=a.value.includes(i)?a.value.filter(h=>h!==i):[...a.value,i];a.onChange(l)}})}),e(B,{lg:8,sm:6,children:e(me,{id:`admin-${t}`,label:p("admin"),value:"admin","data-testid":`admin-${t}`,isChecked:a.value.includes("admin"),onChange:()=>{const i="admin",l=a.value.includes(i)?a.value.filter(h=>h!==i):[...a.value,i];a.onChange(l)}})})]})})})},ua=()=>{const{t}=I();return u(ne,{role:"manage-realm",isHorizontal:!0,children:[e(N,{hasNoPaddingTop:!0,label:t("whoCanEdit"),labelIcon:e(x,{helpText:t("whoCanEditHelp"),fieldLabelId:"whoCanEdit"}),fieldId:"kc-who-can-edit",children:e(be,{name:"edit"})}),e(N,{hasNoPaddingTop:!0,label:t("whoCanView"),labelIcon:e(x,{helpText:t("whoCanViewHelp"),fieldLabelId:"whoCanView"}),fieldId:"kc-who-can-view",children:e(be,{name:"view"})})]})},ma=({selectedValidators:t,onChange:p})=>{const{t:c}=I(),a=ge().componentTypes?.["org.keycloak.validate.Validator"]||[],i=Ze(()=>a.filter(({id:o})=>!t.includes(o)),[t]),[l,h]=ie(),[f,C]=T();return e(N,{label:c("validatorType"),fieldId:"validator",children:e(Y,{toggleId:"validator",onToggle:h,onSelect:o=>{const v=o;p(v),C(v),h()},selections:f?.id,variant:"single","aria-label":c("selectOne"),isOpen:l,placeholderText:c("choose"),menuAppendTo:"parent",maxHeight:300,children:i.map(o=>e(ee,{selected:f?.id===o.id,value:o,description:o.helpText,children:o.id},o.id))})})},pa=({selectedValidators:t,toggleDialog:p,onConfirm:c})=>{const{t:a}=I(),[i,l]=T(),h=ge().componentTypes?.["org.keycloak.validate.Validator"].length===t.length,f=fe(),{handleSubmit:C}=f,o=v=>{c({...v,id:i?.id}),p()};return e(Ee,{variant:Pe.small,title:a("addValidator"),isOpen:!0,onClose:p,actions:[e(O,{"data-testid":"save-validator-role-button",variant:"primary",type:"submit",form:"add-validator",children:a("save")},"save"),e(O,{"data-testid":"cancel-validator-role-button",variant:"link",onClick:p,children:a("cancel")},"cancel")],children:h?a("emptyValidators"):u(Te,{id:"add-validator",onSubmit:C(o),children:[e(ma,{selectedValidators:t.map(v=>v.key),onChange:l}),i&&e(te,{...f,children:e(ia,{properties:i.properties})})]})})},ha=()=>{const{t}=I(),[p,c]=ie(),[a,i]=T(),{setValue:l,control:h,register:f,getValues:C}=_(),o=z({name:"validations",control:h,defaultValue:[]});Ne(()=>{f("validations")},[f]);const[v,H]=la({titleKey:t("deleteValidatorConfirmTitle"),messageKey:t("deleteValidatorConfirmMsg",{validatorName:a}),continueButtonLabel:"delete",continueButtonVariant:Le.danger,onConfirm:async()=>{const y=o.filter(S=>S.key!==a);l("validations",[...y])}});return u(L,{children:[p&&e(pa,{selectedValidators:o,onConfirm:y=>{const S=C("annotations");y.id==="options"&&!S.find(E=>E.key==="inputType")&&l("annotations",[...S,{key:"inputType",value:"select"}]),l("validations",[...o,{key:y.id,value:y.config}])},toggleDialog:c}),e(H,{}),u("div",{className:"kc-attributes-validations",children:[e(O,{id:"addValidator",onClick:()=>c(),variant:"link","data-testid":"addValidator",className:"kc--attributes-validations--add-validation-button",icon:e(Oe,{}),children:t("addValidator")}),e(X,{}),o.length!==0?u(He,{children:[e(Ge,{children:u(pe,{children:[e(J,{children:t("validatorColNames.colName")}),e(J,{children:t("validatorColNames.colConfig")}),e(J,{"aria-hidden":"true"})]})}),e(Me,{children:o.map(y=>u(pe,{children:[e(Z,{dataLabel:t("validatorColNames.colName"),children:y.key}),e(Z,{dataLabel:t("validatorColNames.colConfig"),children:JSON.stringify(y.value)}),e(Z,{className:"kc--attributes-validations--action-cell",children:e(O,{variant:"link","data-testid":"deleteValidator",onClick:()=>{v(),i(y.key)},children:t("delete")},"validator")})]},y.key))})]}):e($e,{className:"kc-emptyValidators",component:We.p,children:t("emptyValidators")})]})]})},ba=["username","email"],va=({onHandlingTranslationsData:t,onHandlingGeneratedDisplayName:p,save:c})=>{const{t:a}=I(),i=_(),{realm:l,attributeName:h}=le(),f=!!h,C=v=>{t(v)},o=v=>{p(v)};return u(aa,{children:[e(Ke,{label:a("jumpToSection"),sections:[{title:a("generalSettings"),panel:e(ca,{onHandlingTranslationData:C,onHandlingGeneratedDisplayName:o})},{title:a("permission"),panel:e(ua,{})},{title:a("validations"),panel:e(ha,{})},{title:a("annotations"),panel:e(da,{})}]}),e(Te,{onSubmit:i.handleSubmit(c),children:u(Xe,{name:"attribute-settings",children:[e(O,{variant:"primary",type:"submit","data-testid":"attribute-create",children:a(f?"save":"create")}),e(Ue,{to:ke({realm:l,tab:"attributes"}),"data-testid":"attribute-cancel",className:"kc-attributeCancel",children:a("cancel")})]})})]})};function Ua(){const{adminClient:t}=ve(),{realm:p,attributeName:c}=le(),{realmRepresentation:a}=ye(),i=fe(),{t:l}=I(),h=ea(),f=ze(),{addAlert:C,addError:o}=je(),[v,H]=T(null),y=!!c,[S,E]=T({key:"",translations:[]}),[G,M]=T("");U(async()=>{const g=[];return await Promise.all(h.map(async b=>{try{const r=await t.realms.getRealmLocalizationTexts({realm:p,selectedLocale:b}),w=i.getValues(),A=w.displayName?.substring(2,w.displayName.length-1),k=[];Object.entries(r).map(([d,q])=>({key:d,value:q})).forEach(d=>{d.key===A&&k.push({locale:b,value:d.value})});const m={key:A,translations:k};g.push(m)}catch(r){console.error(`Error fetching translations for ${b}:`,r)}})),g},g=>{E(()=>({key:g[0].key,translations:g.flatMap(b=>b.translations)}))},[h]),U(()=>t.users.getProfile(),g=>{H(g);const{annotations:b,validations:r,permissions:w,selector:A,required:k,multivalued:P,...m}=g.attributes.find(d=>d.name===c)||{permissions:{edit:["admin"]}};Qe({...m,hasSelector:typeof A<"u",hasRequiredScopes:typeof k?.scopes<"u"},i.setValue),Object.entries(Je({permissions:w,selector:A,required:k},{safe:!0})).map(([d,q])=>i.setValue(d,q)),i.setValue("annotations",Object.entries(b||{}).map(([d,q])=>({key:d,value:q}))),i.setValue("validations",Object.entries(r||{}).map(([d,q])=>({key:d,value:q}))),i.setValue("isRequired",k!==void 0),i.setValue("multivalued",P===!0)},[]);const D=async()=>{try{const g=S.translations.map(async b=>{try{await t.realms.addLocalization({realm:p,selectedLocale:b.locale,key:S.key},b.value)}catch{console.error(`Error saving translation for ${b.locale}`)}});await Promise.all(g)}catch(g){console.error(`Error saving translations: ${g}`)}},$=async({hasSelector:g,hasRequiredScopes:b,...r})=>{g||delete r.selector,b||delete r.required?.scopes;const w=r.validations.reduce((m,d)=>(m[d.key]=d.value||{},m),{}),A=r.annotations.reduce((m,d)=>Object.assign(m,{[d.key]:d.value}),{}),k=()=>(v?.attributes||[]).map(m=>m.name!==c?m:(delete m.required,Object.assign({...m,name:c,displayName:r.displayName,selector:r.selector,permissions:r.permissions,multivalued:r.multivalued,annotations:A,validations:w},r.isRequired?{required:r.required}:void 0,r.group?{group:r.group}:{group:null}))),P=()=>(v?.attributes||[]).concat([Object.assign({name:r.name,displayName:r.displayName||G,required:r.isRequired?r.required:void 0,selector:r.selector,permissions:r.permissions,multivalued:r.multivalued,annotations:A,validations:w},r.isRequired?{required:r.required}:void 0,r.group?{group:r.group}:void 0)]);if(a?.internationalizationEnabled&&!S.translations.some(d=>d.value.trim()!=="")&&!r.displayName){o("createAttributeError",l("translationError"));return}try{const m=y?k():P();await t.users.updateProfile({...v,attributes:m,realm:p}),await D(),_e.reloadResources(),f(ke({realm:p,tab:"attributes"})),C(l("createAttributeSuccess"),Fe.success)}catch(m){o("createAttributeError",m)}};return u(te,{...i,children:[e(Ye,{titleKey:y?c:l("createAttribute"),subKey:y?"":l("createAttributeSubTitle")}),e(Be,{variant:"light",children:e(va,{save:()=>i.handleSubmit($)(),onHandlingTranslationsData:E,onHandlingGeneratedDisplayName:M})})]})}export{ba as USERNAME_EMAIL,Ua as default};
//# sourceMappingURL=NewAttributeSettings-ve9ivO4e.js.map
