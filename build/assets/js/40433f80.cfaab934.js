"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),y=a,k=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},80831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"GeneratedKeyPairs",title:"Interface: GeneratedKeyPairs",sidebar_label:"GeneratedKeyPairs",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"keypom-sdk/Selector/interfaces/GeneratedKeyPairs",id:"keypom-sdk/Selector/interfaces/GeneratedKeyPairs",title:"Interface: GeneratedKeyPairs",description:"For each generated KeyPair (either through createDrop, addKeys or generateKeys), the public and private keys are returned.",source:"@site/docs/keypom-sdk/Selector/interfaces/GeneratedKeyPairs.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/GeneratedKeyPairs",permalink:"/docs/keypom-sdk/Selector/interfaces/GeneratedKeyPairs",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"GeneratedKeyPairs",title:"Interface: GeneratedKeyPairs",sidebar_label:"GeneratedKeyPairs",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"FungibleTokenMetadata",permalink:"/docs/keypom-sdk/Selector/interfaces/FungibleTokenMetadata"},next:{title:"KeyInfo",permalink:"/docs/keypom-sdk/Selector/interfaces/KeyInfo"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"keyPairs",id:"keypairs",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"publicKeys",id:"publickeys",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"secretKeys",id:"secretkeys",level:3},{value:"Defined in",id:"defined-in-2",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For each generated KeyPair (either through ",(0,a.kt)("inlineCode",{parentName:"p"},"createDrop"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"addKeys")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"generateKeys"),"), the public and private keys are returned.\nIn addition, the actual KeyPair objects are returned as well."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"keypairs"},"keyPairs"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"keyPairs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyPair"),"[]"),(0,a.kt)("p",null,"Actual KeyPair objects that can be used to sign messages, verify signatures, and get the public and private keys"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L20"},"lib/types/general.ts:20")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publickeys"},"publicKeys"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"publicKeys"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Set of public keys that were generated"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L22"},"lib/types/general.ts:22")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"secretkeys"},"secretKeys"),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"secretKeys"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("p",null,"Set of private keys that were generated"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L24"},"lib/types/general.ts:24")))}u.isMDXComponent=!0}}]);