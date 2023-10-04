"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=i,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={id:"UsageConfig",title:"Interface: UsageConfig",sidebar_label:"UsageConfig",sidebar_position:0,custom_edit_url:null},o=void 0,l={unversionedId:"keypom-sdk/Selector/interfaces/UsageConfig",id:"version-2.0/keypom-sdk/Selector/interfaces/UsageConfig",title:"Interface: UsageConfig",description:"Within the config, there are configurable options related to how keys can be used. What permissions they have, whether an empty drop should be automatically deleted etc.",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/UsageConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/UsageConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/UsageConfig",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"UsageConfig",title:"Interface: UsageConfig",sidebar_label:"UsageConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"TimeConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/TimeConfig"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"accountCreationFields",id:"accountcreationfields",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"autoDeleteDrop",id:"autodeletedrop",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"autoWithdraw",id:"autowithdraw",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"permissions",id:"permissions",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"refundDeposit",id:"refunddeposit",level:3},{value:"Defined in",id:"defined-in-4",level:4}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Within the config, there are configurable options related to how keys can be used. What permissions they have, whether an empty drop should be automatically deleted etc."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accountcreationfields"},"accountCreationFields"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"accountCreationFields"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account")," on the root account, which keypom args should be attached to the payload."),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accountIdField?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies what field Keypom should auto-inject the account that claimed the drop's ID into when calling the ",(0,i.kt)("inlineCode",{parentName:"td"},"create_account")," function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dropIdField?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies what field Keypom should auto-inject the drop's ID into when calling the ",(0,i.kt)("inlineCode",{parentName:"td"},"create_account")," function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"funderIdField?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies what field Keypom should auto-inject the drop funder's account ID into when calling the ",(0,i.kt)("inlineCode",{parentName:"td"},"create_account")," function.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyIdField?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies what field Keypom should auto-inject the key's ID into when calling the ",(0,i.kt)("inlineCode",{parentName:"td"},"create_account")," function.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L136"},"lib/types/drops.ts:136")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"autodeletedrop"},"autoDeleteDrop"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"autoDeleteDrop"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"When a key is used and deleted, if it results in the drop being empty, should the drop automatically be deleted? If this isn't specified, it defaults to false."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L130"},"lib/types/drops.ts:130")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"autowithdraw"},"autoWithdraw"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"autoWithdraw"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"When the last key in this drop is used, in the case where ",(0,i.kt)("inlineCode",{parentName:"p"},"autoDeleteDrop")," is set to true and the drop is the owner's last, should their balance be automatically withdrawn? If this isn't specified, it defaults to false."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L134"},"lib/types/drops.ts:134")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"permissions"},"permissions"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"permissions"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Specify which methods can be called by the access key (either ",(0,i.kt)("inlineCode",{parentName:"p"},"claim")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim"),"). If this isn't specified, both methods can be called."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L121"},"lib/types/drops.ts:121")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"refunddeposit"},"refundDeposit"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"refundDeposit"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"If the method ",(0,i.kt)("inlineCode",{parentName:"p"},"claim")," is called rather than ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim"),", should the ",(0,i.kt)("inlineCode",{parentName:"p"},"deposit_per_use")," be refunded to the owner's balance?\nIf this isn't specified, it defaults to false."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L126"},"lib/types/drops.ts:126")))}u.isMDXComponent=!0}}]);