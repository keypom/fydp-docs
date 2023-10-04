"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[1385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),k=r,f=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},42420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const l={id:"ProtocolReturnedPublicSaleConfig",title:"Interface: ProtocolReturnedPublicSaleConfig",sidebar_label:"ProtocolReturnedPublicSaleConfig",sidebar_position:0,custom_edit_url:null},i=void 0,a={unversionedId:"keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig",id:"keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig",title:"Interface: ProtocolReturnedPublicSaleConfig",description:"Within the config, there are configurable options related to how keys can be sold and a funder can potentially make a profit.",source:"@site/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ProtocolReturnedPublicSaleConfig",title:"Interface: ProtocolReturnedPublicSaleConfig",sidebar_label:"ProtocolReturnedPublicSaleConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"ProtocolReturnedNonFungibleTokenObject",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedNonFungibleTokenObject"},next:{title:"ProtocolReturnedSimpleData",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedSimpleData"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"allowlist",id:"allowlist",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"auto_withdraw_funds",id:"auto_withdraw_funds",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"blocklist",id:"blocklist",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"end",id:"end",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"max_num_keys",id:"max_num_keys",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"price_per_key",id:"price_per_key",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-6",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Within the config, there are configurable options related to how keys can be sold and a funder can potentially make a profit."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"allowlist"},"allowlist"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"allowlist"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"Which accounts are allowed to add keys? If the allowlist is empty, anyone that is not in the blocklist can add keys."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L173"},"lib/types/protocol.ts:173")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"auto_withdraw_funds"},"auto","_","withdraw","_","funds"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"auto","_","withdraw","_","funds"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Should the revenue generated be sent to the funder's account balance or\nautomatically withdrawn and sent to their NEAR wallet?"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L180"},"lib/types/protocol.ts:180")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocklist"},"blocklist"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"blocklist"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,r.kt)("p",null,"Which accounts are NOT allowed to add keys?"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L175"},"lib/types/protocol.ts:175")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"end"},"end"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"end"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Block timestamp dictating the end of the public sale. If None, keys can be added indefinitely\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L190"},"lib/types/protocol.ts:190")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"max_num_keys"},"max","_","num","_","keys"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"max","_","num","_","keys"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Maximum number of keys that can be added to this drop. If None, there is no max."),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L166"},"lib/types/protocol.ts:166")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"price_per_key"},"price","_","per","_","key"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"price","_","per","_","key"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Amount of $NEAR that the user needs to attach (if they are not the funder) on top of costs. This amount will be\nAutomatically sent to the funder's balance. If None, the keys are free to the public."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L171"},"lib/types/protocol.ts:171")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"start"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Minimum block timestamp before the public sale starts. If None, keys can be added immediately\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L185"},"lib/types/protocol.ts:185")))}u.isMDXComponent=!0}}]);