"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,k=d["".concat(i,".").concat(y)]||d[y]||p[y]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(87462),o=n(67294),r=n(86010),s=n(12466),l=n(16550),i=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function y(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=k({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=i??d;return y({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!y({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var f=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),i(a))},y=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:y,onClick:p},s,{className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=m(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(h,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},38925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),s=n(85162);const l={sidebar_label:"Keys"},i="Keys",u={unversionedId:"Cookbook/keys",id:"Cookbook/keys",title:"Keys",description:"This part of the cookbook contains everything related to keys in a drop, including adding keys to a drop, checking key usage and getting the number of active keys in a drop.",source:"@site/docs/Cookbook/keys.md",sourceDirName:"Cookbook",slug:"/Cookbook/keys",permalink:"/docs/Cookbook/keys",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/docs/Cookbook/keys.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keys"},sidebar:"Cookbook",previous:{title:"Claiming Behavior",permalink:"/docs/Cookbook/drops/customizations/usageConfig"},next:{title:"Balances",permalink:"/docs/Cookbook/balances"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Adding Keys to a Drop",id:"adding-keys-to-a-drop",level:2},{value:"Adding Lots of Keys",id:"adding-lots-of-keys",level:2},{value:"Removing Keys from a Drop",id:"removing-keys-from-a-drop",level:2},{value:"Checking Key Usage",id:"checking-key-usage",level:2},{value:"Checking Key Balance",id:"checking-key-balance",level:2},{value:"Check Number of Keys Remaining in a Drop",id:"check-number-of-keys-remaining-in-a-drop",level:2}],p={toc:d},y="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keys"},"Keys"),(0,o.kt)("p",null,"This part of the cookbook contains everything related to keys in a drop, including adding keys to a drop, checking key usage and getting the number of active keys in a drop."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"For the cookbook, you will need the following installed. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js#getting-started"},"Keypom JS SDK"))),(0,o.kt)("admonition",{title:"note",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Ensure that you have initialized Keypom using the ",(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," function prior to running any of the SDK examples. For more info on this, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Cookbook/welcome#connection-to-near-and-initializing-the-sdk"},"introduction page"))),(0,o.kt)("h2",{id:"adding-keys-to-a-drop"},"Adding Keys to a Drop"),(0,o.kt)("p",null,"Additional keys may be added to a drop using the ",(0,o.kt)("inlineCode",{parentName:"p"},"addKeys")," function. This is particularly helpful when you want to ",(0,o.kt)("a",{parentName:"p",href:"/docs/Cookbook/drops/NEAR#creating-a-large-drop"},"create a large drop"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create an empty simple drop with no keys.\nconst {dropId} = await createDrop({\n    account: fundingAccount,\n    depositPerUseNEAR: 1,\n});\n\n// Add 10 completely random keys. The return value `keys` contains information about the generated keys\nconst {keys} = await addKeys({\n    account: fundingAccount,\n    dropId,\n    numKeys: 10\n})\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"addKeys")," is limited to adding 50 password protected keys or 100 non-protected keys at a time. To add more keys, see the ",(0,o.kt)("a",{parentName:"p",href:"#adding-lots-of-keys"},"example below"),". ")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"adding-lots-of-keys"},"Adding Lots of Keys"),(0,o.kt)("p",null,"Adding keys, either using ",(0,o.kt)("inlineCode",{parentName:"p"},"createDrop")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"addKeys")," is limited to 50 password protected or 100 non-protected keys. To bypass this, the drop can be created first and then the keys can be added by looping ",(0,o.kt)("inlineCode",{parentName:"p"},"addKeys"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Creating drop with 0 single use keys\nlet {dropId} = await createDrop({\n    account: fundingAccount,\n    depositPerUseNEAR: "0.001",\n});\n\n// Loop to add 200 keys\nlet numKeys = 200\nlet keysAdded = 0;\nlet allSecretKeys = [];\nwhile (keysAdded < numKeys) {\n    const keysToAdd = Math.min(50, numKeys - keysAdded);\n    const {secretKeys, publicKeys} = await generateKeys({\n        numKeys: keysToAdd,\n    });\n    await addKeys({\n        account: fundingAccount,\n        dropId,\n        publicKeys\n    });\n    keysAdded += keysToAdd;\n    allSecretKeys = allSecretKeys.concat(secretKeys);\n}\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"removing-keys-from-a-drop"},"Removing Keys from a Drop"),(0,o.kt)("p",null,"Just as keys can be added to a drop retroactively, they can also be removed. The following shows that process. "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Create drop with 5 keys\nconst {keys, dropId} = await createDrop({\n    account: fundingAccount,\n    numKeys: 5,\n    depositPerUseNEAR: 1,\n});\n\n// Delete first key from drop\nawait deleteKeys({\n    account: fundingAccount,\n    dropId,\n    publicKeys: keys.publicKeys[0] // Can be wrapped in an array as well\n})\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"checking-key-usage"},"Checking Key Usage"),(0,o.kt)("p",null,"A good use case for checking key usage is when you want to track the progress/retention of the keys in your drop. An excellent example is the ",(0,o.kt)("a",{parentName:"p",href:"/docs/Tutorials/Advanced/ticketing/architecture#keypom-solution"},"ticketing tutorial")," where each key use represented a different phase of the ticketing experience. To do this, you can get and parse the ",(0,o.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/KeyInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"keyInfo"))," object by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"getKeysForDrop"),". "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Query for the key supply for the drop that was created\nconst keyInfos = await getKeysForDrop({\n    dropId\n})\n\n// Check key usage of first key\nconst keyUsage = keyInfos[0].remaining_uses\n\nconsole.log(keyUsage)\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"checking-key-balance"},"Checking Key Balance"),(0,o.kt)("p",null,"Similar to how checking a key usage is done, you can parse the ",(0,o.kt)("a",{parentName:"p",href:"/docs/keypom-sdk/Core/interfaces/KeyInfo"},(0,o.kt)("inlineCode",{parentName:"a"},"keyInfo"))," object to see a key's remaining allowance. "),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Query for the key supply for the drop that was created\nconst keyInfos = await getKeysForDrop({\n    dropId\n})\n\n// Check key usage of first key\nconst keyBalance = keyInfos[0].allowance\n\nconsole.log(keyBalance)\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"check-number-of-keys-remaining-in-a-drop"},"Check Number of Keys Remaining in a Drop"),(0,o.kt)("p",null,"When a key is fully depleted, it is deleted from the drop. To check the number of remaining keys, and thus the amount of keys to still be claimed, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"getKeySupplyForDrop"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"SDK",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Query for the key supply for a drop\nconst keySupply = await getKeySupplyForDrop({\n    dropId\n})\n\nconsole.log(keySupply)\n")))),(0,o.kt)("hr",null))}k.isMDXComponent=!0}}]);