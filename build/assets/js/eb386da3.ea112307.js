"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[1617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={id:"ProtocolReturnedTimeConfig",title:"Interface: ProtocolReturnedTimeConfig",sidebar_label:"ProtocolReturnedTimeConfig",sidebar_position:0,custom_edit_url:null},a=void 0,l={unversionedId:"keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig",id:"version-2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig",title:"Interface: ProtocolReturnedTimeConfig",description:"Time Config information returned from the Protocol. This interface is exactly the same as the TimeConfig, except all the fields are",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedTimeConfig",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"ProtocolReturnedTimeConfig",title:"Interface: ProtocolReturnedTimeConfig",sidebar_label:"ProtocolReturnedTimeConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"ProtocolReturnedSimpleData",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedSimpleData"},next:{title:"ProtocolReturnedUsageConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/ProtocolReturnedUsageConfig"}},s={},p=[{value:"Properties",id:"properties",level:2},{value:"end",id:"end",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"interval",id:"interval",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"throttle",id:"throttle",level:3},{value:"Defined in",id:"defined-in-3",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Time Config information returned from the Protocol. This interface is exactly the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeConfig"),", except all the fields are\nsnake cased instead of camel cased due to what the Protocol returns."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"end"},"end"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"end"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Block timestamp that keys must be used before. If this isn't specified, keys can be used indefinitely.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L101"},"lib/types/protocol.ts:101")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"interval"},"interval"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"interval"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Interval of time after the ",(0,o.kt)("inlineCode",{parentName:"p"},"start_timestamp")," that must pass before a key can be used. If multiple intervals pass, the key can be used multiple times.\nThis has nothing to do With the throttle timestamp. It only pertains to the start timestamp and the current timestamp. The last_used timestamp is not taken into account.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L114"},"lib/types/protocol.ts:114")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"start"},"start"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"start"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Minimum block timestamp before keys can be used. If this isn't specified, keys can be used immediately.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L95"},"lib/types/protocol.ts:95")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"throttle"},"throttle"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"throttle"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Amount of time that ",(0,o.kt)("em",{parentName:"p"},"must")," pass in between each key use. If this isn't specified, there is no delay between key uses.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/protocol.ts#L107"},"lib/types/protocol.ts:107")))}u.isMDXComponent=!0}}]);