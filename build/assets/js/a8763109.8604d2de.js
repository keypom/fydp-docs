"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[6898],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>k});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(t),f=o,k=c["".concat(p,".").concat(f)]||c[f]||u[f]||s;return t?n.createElement(k,a(a({ref:r},d),{},{components:t})):n.createElement(k,a({ref:r},d))}));function k(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},43727:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const s={id:"PasswordPerUse",title:"Interface: PasswordPerUse",sidebar_label:"PasswordPerUse",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"keypom-sdk/Core/interfaces/PasswordPerUse",id:"version-2.0/keypom-sdk/Core/interfaces/PasswordPerUse",title:"Interface: PasswordPerUse",description:"Keeps track of the password for a given key use. This should be passed in as an array for each key that has passwords.",source:"@site/versioned_docs/version-2.0/keypom-sdk/Core/interfaces/PasswordPerUse.md",sourceDirName:"keypom-sdk/Core/interfaces",slug:"/keypom-sdk/Core/interfaces/PasswordPerUse",permalink:"/docs/2.0/keypom-sdk/Core/interfaces/PasswordPerUse",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"PasswordPerUse",title:"Interface: PasswordPerUse",sidebar_label:"PasswordPerUse",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"NonFungibleTokenMetadata",permalink:"/docs/2.0/keypom-sdk/Core/interfaces/NonFungibleTokenMetadata"},next:{title:"ProtocolReturnedDrop",permalink:"/docs/2.0/keypom-sdk/Core/interfaces/ProtocolReturnedDrop"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"key_use",id:"key_use",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"pw",id:"pw",level:3},{value:"Defined in",id:"defined-in-1",level:4}],d={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(c,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Keeps track of the password for a given key use. This should be passed in as an array for each key that has passwords."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"key_use"},"key","_","use"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"key","_","use"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Which use does the password belong to? These uses are ",(0,o.kt)("em",{parentName:"p"},"NOT")," zero-indexed so the first use corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," not ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L196"},"lib/types/drops.ts:196")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pw"},"pw"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"pw"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The password for this given use"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L194"},"lib/types/drops.ts:194")))}u.isMDXComponent=!0}}]);