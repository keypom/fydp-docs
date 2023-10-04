"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[4578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?o.createElement(m,l(l({ref:t},d),{},{components:r})):o.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:"ProtocolReturnedFCData",title:"Interface: ProtocolReturnedFCData",sidebar_label:"ProtocolReturnedFCData",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"keypom-sdk/Selector/interfaces/ProtocolReturnedFCData",id:"keypom-sdk/Selector/interfaces/ProtocolReturnedFCData",title:"Interface: ProtocolReturnedFCData",description:"FC Data returned from the Protocol. This interface is exactly the same as the FCData, except all the fields are",source:"@site/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedFCData",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ProtocolReturnedFCData",title:"Interface: ProtocolReturnedFCData",sidebar_label:"ProtocolReturnedFCData",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"ProtocolReturnedDropConfig",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedDropConfig"},next:{title:"ProtocolReturnedFTData",permalink:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedFTData"}},c={},s=[{value:"Properties",id:"properties",level:2},{value:"methods",id:"methods",level:3},{value:"Defined in",id:"defined-in",level:4}],d={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"FC Data returned from the Protocol. This interface is exactly the same as the ",(0,n.kt)("inlineCode",{parentName:"p"},"FCData"),", except all the fields are\nsnake cased instead of camel cased due to what the Protocol returns."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"methods"},"methods"),(0,n.kt)("p",null," ",(0,n.kt)("strong",{parentName:"p"},"methods"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Selector/interfaces/ProtocolReturnedMethod"},(0,n.kt)("inlineCode",{parentName:"a"},"ProtocolReturnedMethod")),"[][]"),(0,n.kt)("p",null,'The top level array indicates a different set of methods that can be called for every key use. It is possible that for a given key use, no methods are called thus acting as a "free" key use whereby the use is reflected on-chain but no assets are transferred.\nIf a given key use does not have an undefined set of methods, when it is used, all the methods in the set will be called.'),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L300"},"lib/types/protocol.ts:300")))}u.isMDXComponent=!0}}]);