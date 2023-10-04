"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,m=c["".concat(p,".").concat(u)]||c[u]||k[u]||l;return n?a.createElement(m,r(r({ref:t},s),{},{components:n})):a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={id:"EnvVars",title:"Interface: EnvVars",sidebar_label:"EnvVars",sidebar_position:0,custom_edit_url:null},r=void 0,o={unversionedId:"keypom-sdk/Selector/interfaces/EnvVars",id:"keypom-sdk/Selector/interfaces/EnvVars",title:"Interface: EnvVars",description:"Important context that is used throughout the SDK. This is generated when initKeypom is called and can be retrieved by calling useKeypom.",source:"@site/docs/keypom-sdk/Selector/interfaces/EnvVars.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/EnvVars",permalink:"/docs/keypom-sdk/Selector/interfaces/EnvVars",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"EnvVars",title:"Interface: EnvVars",sidebar_label:"EnvVars",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"DropConfig",permalink:"/docs/keypom-sdk/Selector/interfaces/DropConfig"},next:{title:"FCData",permalink:"/docs/keypom-sdk/Selector/interfaces/FCData"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"attachedGas",id:"attachedgas",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"connection",id:"connection",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"contractAccount",id:"contractaccount",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"contractId",id:"contractid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"error",id:"error",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"execute",id:"execute",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"fundingAccount",id:"fundingaccount",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"fundingAccountDetails",id:"fundingaccountdetails",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"gas",id:"gas",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"gas300",id:"gas300",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"getAccount",id:"getaccount",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"keyStore",id:"keystore",level:3},{value:"Defined in",id:"defined-in-11",level:4},{value:"near",id:"near",level:3},{value:"Defined in",id:"defined-in-12",level:4},{value:"networkId",id:"networkid",level:3},{value:"Defined in",id:"defined-in-13",level:4},{value:"receiverId",id:"receiverid",level:3},{value:"Defined in",id:"defined-in-14",level:4},{value:"supportedKeypomContracts",id:"supportedkeypomcontracts",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"viewAccount",id:"viewaccount",level:3},{value:"Defined in",id:"defined-in-16",level:4},{value:"viewCall",id:"viewcall",level:3},{value:"Defined in",id:"defined-in-17",level:4}],s={toc:d},c="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Important context that is used throughout the SDK. This is generated when ",(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")," is called and can be retrieved by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"useKeypom"),".\nAll parameters will start off as undefined until the Keypom SDK is initialized."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"attachedgas"},"attachedGas"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"attachedGas"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The amount of Gas that will be attached to the ",(0,i.kt)("inlineCode",{parentName:"p"},"claim")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim")," functions for claiming linkdrops (100 TGas)."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L77"},"lib/types/general.ts:77")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"connection"},"connection"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"connection"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Connection")),(0,i.kt)("p",null,"The connection instance that is part of the NEAR object"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L59"},"lib/types/general.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contractaccount"},"contractAccount"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"contractAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")),(0,i.kt)("p",null,"The NEAR Account object for the Keypom contract being used. This lets you know the account ID for the contract and can be used to sign transactions for claiming linkdrops."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L69"},"lib/types/general.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contractid"},"contractId"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"contractId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The account ID where the Keypom contract is deployed to."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L79"},"lib/types/general.ts:79")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"error"},"error"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"error"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L83"},"lib/types/general.ts:83")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"execute"},"execute"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"execute"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L87"},"lib/types/general.ts:87")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fundingaccount"},"fundingAccount"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fundingAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")),(0,i.kt)("p",null,"The NEAR Account object for the Funder"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L65"},"lib/types/general.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fundingaccountdetails"},"fundingAccountDetails"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fundingAccountDetails"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Selector/interfaces/Funder"},(0,i.kt)("inlineCode",{parentName:"a"},"Funder"))),(0,i.kt)("p",null,"The details for the funder such as any ",(0,i.kt)("inlineCode",{parentName:"p"},"rootEntropy")," or their ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," etc."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L67"},"lib/types/general.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gas"},"gas"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gas"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The default amount of Gas that will be attached to transactions (200 TGas)."),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L73"},"lib/types/general.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gas300"},"gas300"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gas300"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The max amount of Gas that will be attached to transactions (300 TGas)."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L75"},"lib/types/general.ts:75")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getaccount"},"getAccount"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"getAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L85"},"lib/types/general.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"keystore"},"keyStore"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"keyStore"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyStore")),(0,i.kt)("p",null,"Which type of KeyStore is used when locating keys and signing transactions throughout the SDK (In Memory, Unencrypted FileStore etc.)"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L61"},"lib/types/general.ts:61")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"near"},"near"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"near"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Near")),(0,i.kt)("p",null,"The specific NEAR object that contains important information such as the KeyStore and connection. This is used to interact with the chain and can either be manually passed in or will be automatically created during ",(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L57"},"lib/types/general.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"networkid"},"networkId"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"networkId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"What network is the SDK using (",(0,i.kt)("inlineCode",{parentName:"p"},"testnet")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mainnet"),")"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L63"},"lib/types/general.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"receiverid"},"receiverId"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"receiverId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L81"},"lib/types/general.ts:81")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"supportedkeypomcontracts"},"supportedKeypomContracts"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"supportedKeypomContracts"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Object containing the supported Keypom contracts for both mainnet and testnet"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mainnet")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"testnet")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{}")))),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L89"},"lib/types/general.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"viewaccount"},"viewAccount"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"viewAccount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L71"},"lib/types/general.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"viewcall"},"viewCall"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"viewCall"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Function that allows you to invoke a view method. This takes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"receiverId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"methodName"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"."),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/general.ts#L91"},"lib/types/general.ts:91")))}k.isMDXComponent=!0}}]);