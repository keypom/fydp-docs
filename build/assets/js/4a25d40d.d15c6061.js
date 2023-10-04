"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[3305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={id:"TimeConfig",title:"Interface: TimeConfig",sidebar_label:"TimeConfig",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"keypom-sdk/Selector/interfaces/TimeConfig",id:"version-2.0/keypom-sdk/Selector/interfaces/TimeConfig",title:"Interface: TimeConfig",description:"Within the config, there are configurable options related to timing such as how often a key can be used.",source:"@site/versioned_docs/version-2.0/keypom-sdk/Selector/interfaces/TimeConfig.md",sourceDirName:"keypom-sdk/Selector/interfaces",slug:"/keypom-sdk/Selector/interfaces/TimeConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/TimeConfig",draft:!1,editUrl:null,tags:[],version:"2.0",sidebarPosition:0,frontMatter:{id:"TimeConfig",title:"Interface: TimeConfig",sidebar_label:"TimeConfig",sidebar_position:0,custom_edit_url:null},sidebar:"TypeDocSDK",previous:{title:"SimpleData",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/SimpleData"},next:{title:"UsageConfig",permalink:"/docs/2.0/keypom-sdk/Selector/interfaces/UsageConfig"}},l={},p=[{value:"Properties",id:"properties",level:2},{value:"end",id:"end",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"interval",id:"interval",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"start",id:"start",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"throttle",id:"throttle",level:3},{value:"Defined in",id:"defined-in-3",level:4}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Within the config, there are configurable options related to timing such as how often a key can be used."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"end"},"end"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"end"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Block timestamp that keys must be used before. If this isn't specified, keys can be used indefinitely.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L98"},"lib/types/drops.ts:98")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interval"},"interval"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"interval"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Interval of time after the ",(0,r.kt)("inlineCode",{parentName:"p"},"start_timestamp")," that must pass before a key can be used. If multiple intervals pass, the key can be used multiple times.\nThis has nothing to do With the throttle timestamp. It only pertains to the start timestamp and the current timestamp. The last_used timestamp is not taken into account.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L111"},"lib/types/drops.ts:111")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"start"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Minimum block timestamp before keys can be used. If this isn't specified, keys can be used immediately.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L92"},"lib/types/drops.ts:92")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"throttle"},"throttle"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("strong",{parentName:"p"},"throttle"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Amount of time that ",(0,r.kt)("em",{parentName:"p"},"must")," pass in between each key use. If this isn't specified, there is no delay between key uses.\nMeasured in number of non-leap-nanoseconds since January 1, 1970 0:00:00 UTC."),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/blob/68bf90396/packages/core/src/lib/types/drops.ts#L104"},"lib/types/drops.ts:104")))}u.isMDXComponent=!0}}]);