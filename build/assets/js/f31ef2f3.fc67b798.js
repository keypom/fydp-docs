"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[3639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),k=i,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={id:"CreateOrAddReturn",title:"Interface: CreateOrAddReturn",sidebar_label:"CreateOrAddReturn",sidebar_position:0,custom_edit_url:null},o=void 0,s={unversionedId:"keypom-sdk/Selector/interfaces/CreateOrAddReturn",id:"version-2.0/keypom-sdk/Selector/interfaces/CreateOrAddReturn",title:"Interface: CreateOrAddReturn",description:"Information returned when creating a drop or adding keys via createDrop and addKeys respectively.",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/CreateOrAddReturn.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/CreateOrAddReturn",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/CreateOrAddReturn",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"CreateOrAddReturn",title:"Interface: CreateOrAddReturn",sidebar_label:"CreateOrAddReturn",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"CreateDropProtocolArgs",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/CreateDropProtocolArgs"},next:{title:"Drop",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/Drop"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"dropId",id:"dropid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"keys",id:"keys",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"requiredDeposit",id:"requireddeposit",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"responses",id:"responses",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"transactions",id:"transactions",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Information returned when creating a drop or adding keys via ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addKeys")," respectively."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"dropid"},"dropId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"dropId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The drop ID for the drop that is being interacted with."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/params.ts#L34"},"lib/types/params.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keys"},"keys"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"keys"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Selector/interfaces/GeneratedKeyPairs"},(0,i.kt)("inlineCode",{parentName:"a"},"GeneratedKeyPairs"))),(0,i.kt)("p",null,"Any keys that were automatically generated."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/params.ts#L32"},"lib/types/params.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"requireddeposit"},"requiredDeposit"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"requiredDeposit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The required deposit that should be attached to the transaction."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/params.ts#L30"},"lib/types/params.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"responses"},"responses"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"responses"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"The responses to any transactions that were signed and sent to the network."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/params.ts#L26"},"lib/types/params.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transactions"},"transactions"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"transactions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Transaction"),"[]"),(0,i.kt)("p",null,"Information about the transactions if ",(0,i.kt)("inlineCode",{parentName:"p"},"returnTransactions")," is specified in the arguments. This will result in the information being returned instead of signed and sent."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/params.ts#L28"},"lib/types/params.ts:28")))}u.isMDXComponent=!0}}]);