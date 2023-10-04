"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[8566],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return o?r.createElement(m,i(i({ref:t},c),{},{components:o})):r.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3401:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const a={id:"ProtocolReturnedDropConfig",title:"Interface: ProtocolReturnedDropConfig",sidebar_label:"ProtocolReturnedDropConfig",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig",id:"version-2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig",title:"Interface: ProtocolReturnedDropConfig",description:"Drop config returned from the Protocol. This interface is exactly the same as the DropConfig, except all the fields are",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"ProtocolReturnedDropConfig",title:"Interface: ProtocolReturnedDropConfig",sidebar_label:"ProtocolReturnedDropConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"ProtocolReturnedDrop",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDrop"},next:{title:"ProtocolReturnedFCData",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"root_account_id",id:"root_account_id",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"sale",id:"sale",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"usage",id:"usage",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"uses_per_key",id:"uses_per_key",level:3},{value:"Defined in",id:"defined-in-4",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Drop config returned from the Protocol. This interface is exactly the same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"DropConfig"),", except all the fields are\nsnake cased instead of camel cased due to what the Protocol returns."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"root_account_id"},"root","_","account","_","id"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"root","_","account","_","id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Override the global root account that all created sub-accounts will have (currently ",(0,n.kt)("inlineCode",{parentName:"p"},"near")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"testnet"),"). This allows users to drops that have a custom root.\nFor example, Fayyr could specify a root of ",(0,n.kt)("inlineCode",{parentName:"p"},"fayyr.near")," By which all sub-accounts will then be ",(0,n.kt)("inlineCode",{parentName:"p"},"ACCOUNT.fayyr.near"),".\nIt's important to note that this root account ",(0,n.kt)("em",{parentName:"p"},"MUST")," have a smart contract deployed that has a method ",(0,n.kt)("inlineCode",{parentName:"p"},"create_account"),"."),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L83"},"lib/types/protocol.ts:83")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"sale"},"sale"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"sale"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedPublicSaleConfig"},(0,n.kt)("inlineCode",{parentName:"a"},"ProtocolReturnedPublicSaleConfig"))),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L76"},"lib/types/protocol.ts:76")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"time"},"time"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"time"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig"},(0,n.kt)("inlineCode",{parentName:"a"},"ProtocolReturnedTimeConfig"))),(0,n.kt)("p",null,"Any information related to time-based configurations such as a starting date for keys etc."),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L71"},"lib/types/protocol.ts:71")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"usage"},"usage"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"usage"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedUsageConfig"},(0,n.kt)("inlineCode",{parentName:"a"},"ProtocolReturnedUsageConfig"))),(0,n.kt)("p",null,"Any information related to how access keys are used such as which methods they can call or whether an empty drop should be automatically deleted etc."),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L74"},"lib/types/protocol.ts:74")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"uses_per_key"},"uses","_","per","_","key"),(0,n.kt)("p",null," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"uses","_","per","_","key"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"How many uses can each key have before it's deleted. If this isn't specified, it defaults to 1 use per key."),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L68"},"lib/types/protocol.ts:68")))}u.isMDXComponent=!0}}]);