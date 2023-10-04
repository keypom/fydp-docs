"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[7994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),o=n(7294),a=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[s,u]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),k=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var k=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,a.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=b(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",h.tabList)},o.createElement(g,(0,r.Z)({},e,t)),o.createElement(y,(0,r.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return o.createElement(v,(0,r.Z)({key:String(t)},e))}},8455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(4866),l=n(5162);const i={sidebar_label:"Non-Fungible Token Drops"},s="Non-Fungible Token Drops",u={unversionedId:"Cookbook/drops/nft",id:"version-2.0/Cookbook/drops/nft",title:"Non-Fungible Token Drops",description:"This part of the cookbook contains a quick overview on how to create an NFT drop.",source:"@site/versioned_docs/version-2.0/Cookbook/drops/nft.md",sourceDirName:"Cookbook/drops",slug:"/Cookbook/drops/nft",permalink:"/docs/2.0/Cookbook/drops/nft",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Cookbook/drops/nft.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Non-Fungible Token Drops"},sidebar:"Cookbook",previous:{title:"Simple NEAR Drops",permalink:"/docs/2.0/Cookbook/drops/NEAR"},next:{title:"Fungible Token Drops",permalink:"/docs/2.0/Cookbook/drops/ft"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Creating a Non-Fungible Token Drop",id:"creating-a-non-fungible-token-drop",level:2},{value:"Delete Drop",id:"delete-drop",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"non-fungible-token-drops"},"Non-Fungible Token Drops"),(0,o.kt)("p",null,"This part of the cookbook contains a quick overview on how to create an NFT drop."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"For the cookbook, you will need the following installed. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js#getting-started"},"Keypom JS SDK"))),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These scripts will not run without the proper setup shown in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Cookbook/welcome#connection-to-near-and-initializing-the-sdk"},"introduction page"),".")),(0,o.kt)("h2",{id:"creating-a-non-fungible-token-drop"},"Creating a Non-Fungible Token Drop"),(0,o.kt)("p",null,"An NFT drop is created by first minting the NFTs to be sent, and then including the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_ids")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nftData")," argument. This examples shows a single NFT, with a one single-use key. For a larger distribution, consider using an ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Cookbook/drops/fc#attaching-nfts-to-your-fc-drop"},"FC to lazy mint NFTs"),"."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// The funding account `minqi.testnet` has the token `token_123` on the contract `nft.examples.testnet`\nconst NFT_CONTRACT = `nft.examples.testnet`;\nconst NFT_TOKEN_ID = `token_123`;\nconst SENDING_ACCOUNT = `minqi.testnet`;\n\nconst { keys } = await createDrop({\n    account: fundingAccount,\n    numKeys: 1,\n    depositPerUseNEAR: "1",\n    nftData: {\n        // NFT Contract Id that the tokens will come from\n        contractId: NFT_CONTRACT,\n        // Who will be sending the NFTs to the Keypom contract\n        senderId: SENDING_ACCOUNT,\n        // List of tokenIDs\n        tokenIds: [NFT_TOKEN_ID]\n    }\n});\n\nconsole.log(keys)\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"delete-drop"},"Delete Drop"),(0,o.kt)("p",null,"A drop can be deleted manually at any time using ",(0,o.kt)("inlineCode",{parentName:"p"},"deleteDrops"),". This will refund all unclaimed key balances back to the drop funder's Keypom balance. "),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Get all the drops for a given user\nlet drops = await getDrops({accountId: "minqi.testnet"});\n\n// Delete all the drops currently funded by `minqi.testnet`\nawait deleteDrops({\n    account: fundingAccount,\n    drops\n})\n\n// Delete 2 seperate drops given their IDs\nawait deleteDrops({\n    account: fundingAccount,\n    dropIds: ["123123123123123", "12391238012380123"]\n})\n')))),(0,o.kt)("hr",null))}f.isMDXComponent=!0}}]);