"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[526],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=o,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={id:"DropConfig",title:"Interface: DropConfig",sidebar_label:"DropConfig",sidebar_position:0,custom_edit_url:null},i=void 0,l={unversionedId:"keypom-sdk/Selector/interfaces/DropConfig",id:"keypom-sdk/Selector/interfaces/DropConfig",title:"Interface: DropConfig",description:"Configurable options for any drop regardless of type.",source:"@site/docs/keypom-sdk/Selector/interfaces/DropConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/DropConfig",permalink:"/docs/keypom-sdk/Selector/interfaces/DropConfig",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DropConfig",title:"Interface: DropConfig",sidebar_label:"DropConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"Drop",permalink:"/docs/keypom-sdk/Selector/interfaces/Drop"},next:{title:"EnvVars",permalink:"/docs/keypom-sdk/Selector/interfaces/EnvVars"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"dropRoot",id:"droproot",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"sale",id:"sale",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"time",id:"time",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"usage",id:"usage",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"usesPerKey",id:"usesperkey",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configurable options for any drop regardless of type."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"droproot"},"dropRoot"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"dropRoot"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Override the global root account that all created sub-accounts will have (currently ",(0,o.kt)("inlineCode",{parentName:"p"},"near")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet"),"). This allows users to drops that have a custom root.\nFor example, Fayyr could specify a root of ",(0,o.kt)("inlineCode",{parentName:"p"},"fayyr.near")," By which all sub-accounts will then be ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCOUNT.fayyr.near"),".\nIt's important to note that this root account ",(0,o.kt)("em",{parentName:"p"},"MUST")," have a smart contract deployed that has a method ",(0,o.kt)("inlineCode",{parentName:"p"},"create_account"),"."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L81"},"lib/types/drops.ts:81")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sale"},"sale"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"sale"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Selector/interfaces/PublicSaleConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"PublicSaleConfig"))),(0,o.kt)("p",null,"Any information related to primary market sales for access keys added to this drop."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L75"},"lib/types/drops.ts:75")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"time"},"time"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"time"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Selector/interfaces/TimeConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"TimeConfig"))),(0,o.kt)("p",null,"Any information related to time-based configurations such as a starting date for keys etc."),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L69"},"lib/types/drops.ts:69")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usage"},"usage"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"usage"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Selector/interfaces/UsageConfig"},(0,o.kt)("inlineCode",{parentName:"a"},"UsageConfig"))),(0,o.kt)("p",null,"Any information related to how access keys are used such as which methods they can call or whether an empty drop should be automatically deleted etc."),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L72"},"lib/types/drops.ts:72")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usesperkey"},"usesPerKey"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"usesPerKey"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"How many uses can each key have before it's deleted. If this isn't specified, it defaults to 1 use per key."),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L66"},"lib/types/drops.ts:66")))}u.isMDXComponent=!0}}]);