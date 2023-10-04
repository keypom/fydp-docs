"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[6489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=i,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},68306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"Funder",title:"Interface: Funder",sidebar_label:"Funder",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"keypom-sdk/Core/interfaces/Funder",id:"keypom-sdk/Core/interfaces/Funder",title:"Interface: Funder",description:"Outlines how the structure of the funder object should be passed into initKeypom or updateFunder. This contains important information such as the",source:"@site/docs/keypom-sdk/Core/interfaces/Funder.md",sourceDirName:"keypom-sdk/Core/interfaces",slug:"/keypom-sdk/Core/interfaces/Funder",permalink:"/docs/keypom-sdk/Core/interfaces/Funder",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Funder",title:"Interface: Funder",sidebar_label:"Funder",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"FTData",permalink:"/docs/keypom-sdk/Core/interfaces/FTData"},next:{title:"FungibleTokenMetadata",permalink:"/docs/keypom-sdk/Core/interfaces/FungibleTokenMetadata"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"accountId",id:"accountid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fundingKeyPair",id:"fundingkeypair",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"rootEntropy",id:"rootentropy",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"secretKey",id:"secretkey",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"seedPhrase",id:"seedphrase",level:3},{value:"Defined in",id:"defined-in-4",level:4}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Outlines how the structure of the ",(0,i.kt)("em",{parentName:"p"},"funder")," object should be passed into ",(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"updateFunder"),". This contains important information such as the\nsecret key, account ID and any root entropy associated with the account."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,i.kt)("p",null,"if neither ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"seedPhrase")," are provided. One of these need to be passed in."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accountid"},"accountId"),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"accountId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The account ID of the funder that will be used to sign transactions."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/general.ts#L35"},"lib/types/general.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fundingkeypair"},"fundingKeyPair"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fundingKeyPair"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyPair")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/general.ts#L48"},"lib/types/general.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rootentropy"},"rootEntropy"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"rootEntropy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"When interacting with the SDK, there are several places where KeyPairs can be generated automatically rather than you having to pass them in.\nFor example, during ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addKeys"),", if ",(0,i.kt)("inlineCode",{parentName:"p"},"publicKeys")," isn't passed in, the SDK will generate ",(0,i.kt)("inlineCode",{parentName:"p"},"numKeys")," number of keys automatically.\nThese generated keys can either be completely random or deterministically generated based off some entropy. If ",(0,i.kt)("inlineCode",{parentName:"p"},"rootEntropy")," is provided, all the\nkeys that are auto-generated will be based off this entropy."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/general.ts#L46"},"lib/types/general.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secretkey"},"secretKey"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"secretKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A valid private key associated with the funder's account. This can be function-call or full access (depending on what limitations and security measures are in place)."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/general.ts#L37"},"lib/types/general.ts:37")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"seedphrase"},"seedPhrase"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"seedPhrase"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"12 word seedphrase that can be used to derive the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey"),". If this is present, it will override the passed in ",(0,i.kt)("inlineCode",{parentName:"p"},"secretKey"),"."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/9a866ee41/packages/core/src/lib/types/general.ts#L39"},"lib/types/general.ts:39")))}u.isMDXComponent=!0}}]);