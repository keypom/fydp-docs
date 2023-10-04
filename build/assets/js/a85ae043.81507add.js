"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[4708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),o=n(86010),l=n(12466),s=n(16550),i=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},95634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={sidebar_label:"Simple NEAR Drops"},i="Simple NEAR Drops",u={unversionedId:"Cookbook/drops/NEAR",id:"version-2.0/Cookbook/drops/NEAR",title:"Simple NEAR Drops",description:"This part of the cookbook contains a quick guide on the simple NEAR drop.",source:"@site/versioned_docs/version-2.0/Cookbook/drops/NEAR.md",sourceDirName:"Cookbook/drops",slug:"/Cookbook/drops/NEAR",permalink:"/docs/2.0/Cookbook/drops/NEAR",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Cookbook/drops/NEAR.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Simple NEAR Drops"},sidebar:"Cookbook",previous:{title:"Introduction",permalink:"/docs/2.0/Cookbook/welcome"},next:{title:"Non-Fungible Token Drops",permalink:"/docs/2.0/Cookbook/drops/nft"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Creating a Simple Drop",id:"creating-a-simple-drop",level:2},{value:"Creating a Large Drop",id:"creating-a-large-drop",level:2},{value:"Delete Drop",id:"delete-drop",level:2}],d={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-near-drops"},"Simple NEAR Drops"),(0,a.kt)("p",null,"This part of the cookbook contains a quick guide on the simple NEAR drop."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"For the cookbook, you will need the following installed. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js#getting-started"},"Keypom JS SDK"))),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"These scripts will not run without the proper setup shown in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.0/Cookbook/welcome#connection-to-near-and-initializing-the-sdk"},"introduction page"),".")),(0,a.kt)("h2",{id:"creating-a-simple-drop"},"Creating a Simple Drop"),(0,a.kt)("p",null,"A drop is the fundamental building block of Keypom. It is a collection of access keys that all share the same properties. A simple drop allows you to send $NEAR by sharing those access keys in the form of a linkdrop. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Creating drop with 2 single use keys\nconst {keys} = await createDrop({\n    account: fundingAccount,\n    numKeys: 2,\n    depositPerUseNEAR: "0.1",\n});\n\nconsole.log(keys)\n')))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"createDrop")," is limited to adding 50 password protected keys or 100 non-protected keys at a time. To add more keys, see the ",(0,a.kt)("a",{parentName:"p",href:"#creating-a-large-drop"},"large drops")," example below. ")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"creating-a-large-drop"},"Creating a Large Drop"),(0,a.kt)("p",null,"Adding keys, either using ",(0,a.kt)("inlineCode",{parentName:"p"},"createDrop")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"addKeys")," is limited to 50 password protected or 100 non-protected keys. To bypass this, the drop can be created first and then the keys can be added by looping ",(0,a.kt)("inlineCode",{parentName:"p"},"addKeys"),"."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Creating drop with 0 single use keys\nlet {dropId} = await createDrop({\n    account: fundingAccount,\n    depositPerUseNEAR: "0.001",\n});\n\nlet numKeys = 200\nlet keysAdded = 0;\nlet allSecretKeys = [];\nwhile (keysAdded < numKeys) {\n    const keysToAdd = Math.min(50, numKeys - keysAdded);\n    const {secretKeys, publicKeys} = await generateKeys({\n        numKeys: keysToAdd,\n    });\n    await addKeys({\n        account: fundingAccount,\n        dropId,\n        publicKeys\n    });\n    keysAdded += keysToAdd;\n    allSecretKeys = allSecretKeys.concat(secretKeys);\n}\n')))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"delete-drop"},"Delete Drop"),(0,a.kt)("p",null,"A drop can be deleted manually at any time using ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteDrops"),". This will refund all unclaimed key balances back to the drop funder's Keypom balance. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// Get all the drops for a given user\nlet drops = await getDrops({accountId: "minqi.testnet"});\n\n// Delete all the drops currently funded by `minqi.testnet`\nawait deleteDrops({\n    account: fundingAccount,\n    drops\n})\n\n// Delete 2 seperate drops given their IDs\nawait deleteDrops({\n    account: fundingAccount,\n    dropIds: ["123123123123123", "12391238012380123"]\n})\n')))),(0,a.kt)("hr",null))}b.isMDXComponent=!0}}]);