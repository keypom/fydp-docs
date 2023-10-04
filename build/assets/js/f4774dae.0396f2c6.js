"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[6528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,k=d["".concat(p,".").concat(f)]||d[f]||u[f]||s;return r?n.createElement(k,a(a({ref:t},c),{},{components:r})):n.createElement(k,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const s={id:"PasswordPerUse",title:"Interface: PasswordPerUse",sidebar_label:"PasswordPerUse",sidebar_position:0,custom_edit_url:null},a=void 0,i={unversionedId:"keypom-sdk/Selector/interfaces/PasswordPerUse",id:"version-2.0/keypom-sdk/Selector/interfaces/PasswordPerUse",title:"Interface: PasswordPerUse",description:"Keeps track of the password for a given key use. This should be passed in as an array for each key that has passwords.",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/PasswordPerUse.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/PasswordPerUse",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/PasswordPerUse",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"PasswordPerUse",title:"Interface: PasswordPerUse",sidebar_label:"PasswordPerUse",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"NonFungibleTokenMetadata",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/NonFungibleTokenMetadata"},next:{title:"ProtocolReturnedDrop",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedDrop"}},p={},l=[{value:"Properties",id:"properties",level:2},{value:"key_use",id:"key_use",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"pw",id:"pw",level:3},{value:"Defined in",id:"defined-in-1",level:4}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Keeps track of the password for a given key use. This should be passed in as an array for each key that has passwords."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"key_use"},"key","_","use"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"key","_","use"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Which use does the password belong to? These uses are ",(0,o.kt)("em",{parentName:"p"},"NOT")," zero-indexed so the first use corresponds to ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," not ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L196"},"lib/types/drops.ts:196")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pw"},"pw"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"pw"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The password for this given use"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L194"},"lib/types/drops.ts:194")))}u.isMDXComponent=!0}}]);