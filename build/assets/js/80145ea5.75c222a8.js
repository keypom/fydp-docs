"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=l(n),u=i,f=k["".concat(s,".").concat(u)]||k[u]||c[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[k]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"Drop",title:"Interface: Drop",sidebar_label:"Drop",sidebar_position:0,custom_edit_url:null},o=void 0,p={unversionedId:"keypom-sdk/Core/interfaces/Drop",id:"keypom-sdk/Core/interfaces/Drop",title:"Interface: Drop",description:"Information related to a specific drop.",source:"@site/docs/keypom-sdk/Core/interfaces/Drop.md",sourceDirName:"keypom-sdk/Core/interfaces",slug:"/keypom-sdk/Core/interfaces/Drop",permalink:"/docs/keypom-sdk/Core/interfaces/Drop",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Drop",title:"Interface: Drop",sidebar_label:"Drop",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"CreateOrAddReturn",permalink:"/docs/keypom-sdk/Core/interfaces/CreateOrAddReturn"},next:{title:"DropConfig",permalink:"/docs/keypom-sdk/Core/interfaces/DropConfig"}},s={},l=[{value:"Properties",id:"properties",level:2},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"depositPerUse",id:"depositperuse",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"dropId",id:"dropid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"fc",id:"fc",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"ft",id:"ft",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"metadata",id:"metadata",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"nextKeyId",id:"nextkeyid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"nft",id:"nft",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"ownerId",id:"ownerid",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"registeredUses",id:"registereduses",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"requiredGas",id:"requiredgas",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"simple",id:"simple",level:3},{value:"Defined in",id:"defined-in-11",level:4}],d={toc:l},k="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Information related to a specific drop."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/DropConfig"},(0,i.kt)("inlineCode",{parentName:"a"},"DropConfig"))),(0,i.kt)("p",null,"All drops regardless of their type can have a suite of configurations such as how many uses each key has or how often a key can be used."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L50"},"lib/types/drops.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"depositperuse"},"depositPerUse"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"depositPerUse"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"How much $yoctoNEAR will be transferred anytime a key is used that is part of this drop."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L40"},"lib/types/drops.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dropid"},"dropId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"dropId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Drop ID for this specific drop."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L36"},"lib/types/drops.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fc"},"fc"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fc"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/FCData"},(0,i.kt)("inlineCode",{parentName:"a"},"FCData"))),(0,i.kt)("p",null,"For Function-Call drops, important information needs to be stored such as which methods, the attached deposit, args etc."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L48"},"lib/types/drops.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ft"},"ft"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ft"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/FTData"},(0,i.kt)("inlineCode",{parentName:"a"},"FTData"))),(0,i.kt)("p",null,"For Fungible Token drops, important information such as the amount of tokens to transfer, or contract need to be stored."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L46"},"lib/types/drops.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"metadata"},"metadata"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"metadata"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Any extra information about the drop can be stored as metadata. This is up to the drop creator and can be stringified JSON, or any other string."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L52"},"lib/types/drops.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nextkeyid"},"nextKeyId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"nextKeyId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"What is the next unique ID that will be given to the next access key added to this drop."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L58"},"lib/types/drops.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nft"},"nft"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nft"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/NFTData"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTData"))),(0,i.kt)("p",null,"For NFT drops, important information such as the token IDs, or contract need to be stored."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L44"},"lib/types/drops.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ownerid"},"ownerId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"ownerId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Which account created this drop."),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L38"},"lib/types/drops.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"registereduses"},"registeredUses"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"registeredUses"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"How many key uses are registered for this drop? This is only applicable to simple drops with lazy registrations, FT drops, and NFT drops."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L54"},"lib/types/drops.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requiredgas"},"requiredGas"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"requiredGas"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"In order to use an access key that's part of this drop, how much Gas ",(0,i.kt)("em",{parentName:"p"},"needs")," to be attached to the call?"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L56"},"lib/types/drops.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"simple"},"simple"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"simple"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/SimpleData"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleData"))),(0,i.kt)("p",null,"For simple drops, there are specific, optional configurations."),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/drops.ts#L42"},"lib/types/drops.ts:42")))}c.isMDXComponent=!0}}]);