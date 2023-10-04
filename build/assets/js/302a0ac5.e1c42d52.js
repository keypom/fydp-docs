"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[6230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(86010);const a={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(87462),o=r(67294),a=r(86010),s=r(12466),l=r(16550),i=r(91980),u=r(67392),c=r(50012);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:o}}=e;return{value:t,label:r,attributes:n,default:o}}))}function d(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=d(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[i,u]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,c.Nk)(r);return[n,(0,o.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),b=(()=>{const e=i??p;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var b=r(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==l&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",y.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},10790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905)),a=r(74866),s=r(85162);const l={sidebar_label:"Non Fungible Token Drops",sidebar_position:3},i="Non-Fungible Token Drops",u={unversionedId:"Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops",id:"version-2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops",title:"Non-Fungible Token Drops",description:'Non-Fungible Token drops are a special type that allows users to "preload" the drop with NFTs.',source:"@site/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops.md",sourceDirName:"Concepts/KeypomProtocol/GithubReadme/TypesOfDrops",slug:"/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/nft-drops.md",tags:[],version:"2.0",sidebarPosition:3,frontMatter:{sidebar_label:"Non Fungible Token Drops",sidebar_position:3},sidebar:"Concepts",previous:{title:"Simple Drops",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/simple-drops"},next:{title:"Fungible Token Drops",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/ft-drops"}},c={},p=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"NFT Config",id:"nft-config",level:2},{value:"Use Cases",id:"use-cases",level:2}],d={toc:p},m="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"non-fungible-token-drops"},"Non-Fungible Token Drops"),(0,o.kt)("p",null,'Non-Fungible Token drops are a special type that allows users to "preload" the drop with NFTs.\nThese tokens will then be ',(0,o.kt)("em",{parentName:"p"},"automatically")," sent to the ",(0,o.kt)("strong",{parentName:"p"},"claiming user"),". The claiming flow\nis fairly similar to simple drops in that users can either create an account or claim to an\nexisting one."),(0,o.kt)("p",null,"NFT drops are essentially a wrapper around simple drops. All the functionalities that simple\ndrops have are carried over but now, users can receive an NFT as well as $NEAR. This brings\nintroduces some customization and uniqueness to the use-cases."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Every drop has a field known as ",(0,o.kt)("inlineCode",{parentName:"p"},"registered_uses"),". This tells the contract how many uses the\ndrop has across all its keys. For simple drops, this field doesn't matter since all the uses\nare paid for up-front when the drop is created or when keys are added. With NFT drops, however,\nthere is a 2 step process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firstly, the drop is created and all the $NEAR required is pre-paid for. This is the same as\nsimple drops, however, the ",(0,o.kt)("inlineCode",{parentName:"li"},"registered_uses")," are set to 0."),(0,o.kt)("li",{parentName:"ul"},"Once the drop is created, the owner must send the contract the NFTs in order for keys to be\nusable. This process is done through the ",(0,o.kt)("inlineCode",{parentName:"li"},"nft_transfer_call")," workflow baked into the NFT standards.\nIt's up to the owner to facilitate this process.")),(0,o.kt)("p",null,"Whenever the contract receives tokens, it will push the ID to a vector. These IDs are ",(0,o.kt)("strong",{parentName:"p"},"popped")," off\nwhenever a key is used. A user will receive the most recent token sent to the contract as the\nvector is acting like a ",(0,o.kt)("em",{parentName:"p"},"stack"),"."),(0,o.kt)("h2",{id:"nft-config"},"NFT Config"),(0,o.kt)("p",null,"Along with the default global configurations for drops, if you'd like to create an NFT drop,\nyou must specify the following pieces of information when the drop is created."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"KPJS",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-js/blob/e8c43f4219a79afb3c367296cc90b8d5de977945/src/lib/types/nft.ts#L4-L15\n"))),(0,o.kt)(s.Z,{value:"KP",label:"\ud83d\udcda Protocol",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/keypom/keypom/blob/7a654aa847f2ce9dedf65755c6a08817eece4666/contract/src/models/json_types.rs#L78-L81\n")))),(0,o.kt)("p",null,"By specifying this information, the drop is locked into only accepting NFTs from the sender and contract."),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("p",null,"NFT drops work really well for when you want to send a ",(0,o.kt)("em",{parentName:"p"},"pre-existing")," NFT to a user along with\nsome $NEAR. Since NFT drops are a light wrapper around simple drops, most of the use-cases are\nthe same although people can now get NFTs as well. This means you can onboard a user with some\n$NEAR ",(0,o.kt)("strong",{parentName:"p"},"and")," they ",(0,o.kt)("em",{parentName:"p"},"get an NFT")," too."))}f.isMDXComponent=!0}}]);