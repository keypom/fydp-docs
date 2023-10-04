"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(87462),o=n(67294),r=n(86010),l=n(12466),i=n(16550),s=n(91980),c=n(67392),p=n(50012);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,c]=h({queryString:n,groupId:a}),[u,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,p.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=s??u;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),k(e)}),[c,k,r]),tabValues:r}}var f=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},o.createElement(g,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},31483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(74866),l=n(85162);const i={sidebar_label:"Function Call Drop"},s="Function Call Drop",c={unversionedId:"Tutorials/Basics/fc-drops",id:"version-2.0/Tutorials/Basics/fc-drops",title:"Function Call Drop",description:"Introduction",source:"@site/versioned_docs/version-2.0/Tutorials/Basics/fc-drops.md",sourceDirName:"Tutorials/Basics",slug:"/Tutorials/Basics/fc-drops",permalink:"/docs/2.0/Tutorials/Basics/fc-drops",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Basics/fc-drops.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Function Call Drop"},sidebar:"Tutorials",previous:{title:"Fungible Token Drop",permalink:"/docs/2.0/Tutorials/Basics/ft-drops"},next:{title:"Introduction",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/introduction"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating your Project",id:"creating-your-project",level:3},{value:"Breaking Down the Problem",id:"breaking-down-the-problem",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Creating Drop with Function Call Data",id:"creating-drop-with-function-call-data",level:2},{value:"Creating Linkdrops",id:"creating-linkdrops",level:2},{value:"Complete Code",id:"complete-code",level:2},{value:"Testing",id:"testing",level:2},{value:"Running the Script",id:"running-the-script",level:3},{value:"Claiming and Explorer Transactions",id:"claiming-and-explorer-transactions",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},m="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-call-drop"},"Function Call Drop"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this tutorial, you are going to learn how to create a Function Call Drop from scratch. Similar to how the other drops can be claimed by both new and existing users, FC drops are a great onboarding tool. The difference, is that FC drops can invoke methods on external smart contracts when the link is claimed. This allows for a ton of flexibility and use-cases such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/daos/introduction"},"auto-registering users into a DAO")," as part of the onboarding process."),(0,o.kt)("p",null,"In this tutorial, the function call will be to Lazy Mint an NFT."),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:n(94725).default,alt:"NFT collectibles claim",width:"65%"})," "),(0,o.kt)("p",null,"To learn more about what the FC drop, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops"},"concepts page")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For the basic tutorials, you can choose to run the scripts on your own machine. To do so, you must have the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.near.org/tools/near-api-js/quick-reference#install"},"NEAR-API-JS"),"  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js#getting-started"},"Keypom JS SDK"))),(0,o.kt)("p",null,"With this tutorial, you can either create your own script by following along, or view the completed script available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-docs-examples"},"Keypom Documentation Examples")," repo."),(0,o.kt)("h3",{id:"creating-your-project"},"Creating your Project"),(0,o.kt)("p",null,"In this section, you're going to create your project and install the SDK to prepare for the tutorial. If you have a completed script and have installed the SDK, you can skip ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Basics/simple-drops#breaking-down-the-problem"},"forward"),"."),(0,o.kt)("p",null,"First, you need to give your project a home."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-keypom-project && cd my-keypom-project\n")),(0,o.kt)("p",null,"Next, you'll want to create a default ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file using the following command. You can accept all default values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm init\n")),(0,o.kt)("p",null,"At this point, your project structure should look like this. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/my-keypom-project\n\u251c\u2500\u2500 package.json\n")),(0,o.kt)("p",null,"If you open ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),", you should see this."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Default package.json"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "name": "my-keypom-project",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC"\n}\n')))),(0,o.kt)("p",null,"The next step is to create an empty JavaScript file."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Mac/Lnx",label:"Mac OS/Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch fc-keypom.js\n"))),(0,o.kt)(l.Z,{value:"WNDS",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fsutil file createnew fc-keypom.js 0\n")))),(0,o.kt)("p",null,"Finally, the last step is to install the Keypom JS SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @keypom/core\n")),(0,o.kt)("p",null,"After installing the SDK, your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file should now look slightly different."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"package.json after installing the SDK"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "name": "my-keypom-project",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC",\n  # highlight-start\n  "dependencies": {\n    "@keypom/core": "^1.0.0"\n  }\n  # highlight-end\n}\n')))),(0,o.kt)("p",null,"With these steps complete, your project folder should look like this. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/my-keypom-project\n\u251c\u2500\u2500 fc-keypom.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 keypom-js\n\u2502   \u2514\u2500\u2500 ...\n")),(0,o.kt)("p",null,"You are now ready to begin creating your drop!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"breaking-down-the-problem"},"Breaking Down the Problem"),(0,o.kt)("p",null,"A Function Call Drop is Keypom's most powerful drop type. A brief breakdown of how an FC drop works is as follows:"),(0,o.kt)("p",null,"For every key-use, a set of functions is called in the order that they are defined. For multi-use keys, this set can vary across different key uses."),(0,o.kt)("p",null,"An example scenario for a multi-use key can be seen below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key Use"),(0,o.kt)("th",{parentName:"tr",align:null},"Functions called during n",(0,o.kt)("sup",null,"th")," Key Use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key Use 1"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nft_mint"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key Use 2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sign_message"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"update_message"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Key Use 3"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mint_fungible_tokens"))))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In this tutorial, the key will be single use and only call ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint"),".")),(0,o.kt)("p",null,"The process of creating an FC drop is similar to the other drop types:"),(0,o.kt)("p",null,"1) Connect to the NEAR blockchain",(0,o.kt)("br",{parentName:"p"}),"\n","2) Create drop with function call data  "),(0,o.kt)("p",null,"The following skeleton code can be used as a starting point:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Each of the two methods to create this drop will have their own unique set of imports\n\n// Imports used in the Keypom SDK method:\nconst { initKeypom, createDrop, getEnv, formatLinkdropUrl } = require("@keypom/core"); \nconst { parseNearAmount } = require("@near-js/utils");\nconst { UnencryptedFileSystemKeyStore } = require("@near-js/keystores-node");\nconst { Near } = require("@near-js/wallet-account");\nconst { Account } = require("@near-js/accounts");\nconst path = require("path");\nconst homedir = require("os").homedir();\n\n// Imports used in the NEAR-API-JS method:\nconst { parseNearAmount } = require("@near-js/utils");\nconst { KeyPair } = require("@near-js/crypto")\nconst { UnencryptedFileSystemKeyStore } = require("@near-js/keystores-node");\nconst { Near } = require("@near-js/wallet-account");\nconst { Account } = require("@near-js/accounts");\nconst path = require("path");\nconst homedir = require("os").homedir();\n\n\nasync function fcDropKeypom(){\n// STEP 1: Initiate a NEAR connection.\n\n// STEP 2: Create the drop with function call data.\n}\n\nfcDropKeypom()\n\n')),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"In this section, you'll be addressing the first step: connecting to NEAR. "),(0,o.kt)("p",null,"This is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"NEAR-API-JS")," and consists of:"),(0,o.kt)("p",null,"1) Create a Keystore, which stores your access keys used to sign transactions   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"select a network, either ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"mainnet"),"  "),(0,o.kt)("li",{parentName:"ul"},"choose a location where the keypairs live, either a folder on your local machine, or in-memory      ")),(0,o.kt)("p",null,"2) Define a NEAR configuration using the Keystore",(0,o.kt)("br",{parentName:"p"}),"\n","3) Use the configuration to initialize a connection to NEAR  "),(0,o.kt)("p",null,"More information about this process can be found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-api-js/quick-reference#key-store"},"here"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For simplicity, this tutorial will choose a file-based keystore and point to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.near-credentials")," folder on your local machine since this is where most of your keys are stored. For more information about KeyStores, visit NEAR's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.near.org/tools/near-api-js/quick-reference#key-store"},"official docs"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-example.js#L10-L30\n")),(0,o.kt)("h2",{id:"creating-drop-with-function-call-data"},"Creating Drop with Function Call Data"),(0,o.kt)("p",null,"In this section, you'll learn about the process of creating an FC drop using the SDK. "),(0,o.kt)("p",null,"This process starts with calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," function and will always be the first function you call to interact with the Keypom SDK. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," initializes the SDK to allow for interactions with the Keypom smart contracts. Without it, none of the other SDK functions would work as expected. If a NEAR connection is not already present, it will initialize a new one for you. More info on the ",(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," function can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/modules#initkeypom"},"here"),"."),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," is called, the FC Drop can be created by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"createDrop")," and adding an ",(0,o.kt)("inlineCode",{parentName:"p"},"fcData")," parameter. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Recall that the private keys being generated using ",(0,o.kt)("inlineCode",{parentName:"p"},"createDrop")," are used to store the assets. These keys are then embedded within a link."),(0,o.kt)("p",{parentName:"admonition"},"In an FC Drop, the assets consist of a set of invokable methods and optional $NEAR.")),(0,o.kt)("p",null,"The primary task in creating the Function Call Drop is to define fcData. It is an object containing a methods field that outlines what methods should be called for a given key use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"fcData\n\u2514\u2500\u2500 methods\n")),(0,o.kt)("p",null,"For multi-use keys, each specific use can have a different set of methods that will be called. These methods are executed sequentially and not in parallel. As an example, a key with 3 uses can be seen:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"nft_mint")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"create_account_advanced"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"setup"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"nft_mint")," ")),(0,o.kt)("p",null,"The first time the key is used, an NFT will be minted. The second use will simply advance the key and nothing will be called. The third time the key is used, it will first call ",(0,o.kt)("inlineCode",{parentName:"p"},"create_account_advanced"),". Once that's finished it will call the ",(0,o.kt)("inlineCode",{parentName:"p"},"setup")," method and then finally ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint"),".  "),(0,o.kt)("p",null,"This is represented with a 2D array, where each inner is the set of methods per key use. The above example would be represented as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'methods: [\n  [\n    "nft_mint"\n  ], \n  null, \n  [\n    "create_account_advanced", \n    "setup", \n    "nft_mint"\n  ]\n]\n')),(0,o.kt)("p",null,"Every method listed represents a function call and requires the following parameters:   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"receiverId"),": The contract receiving the function call.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"methodName"),": The function to be called on the receiver contract.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"args"),": A stringified JSON object of all the arguments to be passed into ",(0,o.kt)("inlineCode",{parentName:"li"},"methodName"),".  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"attachedDeposit"),": The yoctoNear deposit attached to the function call when the key is used.  ")),(0,o.kt)("p",null,"In this tutorial only one function call will be made: ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint")," in order to lazy mint an NFT."),(0,o.kt)("p",null,"Including the ",(0,o.kt)("inlineCode",{parentName:"p"},"fcData")," parameter categorizes this as an FC drop. Without it, the Keypom Protocol would treat this drop as a Simple Drop. More information on the ",(0,o.kt)("inlineCode",{parentName:"p"},"fcData")," parameter can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/interfaces/FCData"},"here"),"."),(0,o.kt)("p",null,"To see what the SDK is doing behind the scenes, a ",(0,o.kt)("inlineCode",{parentName:"p"},"NEAR-API-JS")," equivalent NodeJS script has been provided."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"KPJS",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-example.js#L32-L71\n"))),(0,o.kt)(l.Z,{value:"NRJS",label:"\ud83d\udcbb NEAR-API-JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-near-example.js#L33-L82\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-linkdrops"},"Creating Linkdrops"),(0,o.kt)("p",null,"The last step in this process is to create the links themselves so that you can easily distribute the assets to people. This is done by embedding the private key, containing the $NEAR, into the link along with the Keypom contract ID.  "),(0,o.kt)("p",null,"With the Keypom SDK, this is all neatly wrapped up in the function ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/modules#formatlinkdropurl"},(0,o.kt)("inlineCode",{parentName:"a"},"formatLinkdropUrl")),". You just need to provide the base URL format and the private key you wish to embed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-example.js#L73-L79\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"complete-code"},"Complete Code"),(0,o.kt)("p",null,"Now that everything has been put together, the final code can be seen below."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"KPJS",label:"\ud83d\udd11 Keypom SDK",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-example.js#L1-L86\n"))),(0,o.kt)(l.Z,{value:"NRJS",label:"\ud83d\udcbb NEAR-API-JS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8202f0ef88205bfca644ccf5d4d3cfb460f88f15/basic-tutorials/function-call-drop/fc-near-example.js#L1-L95\n")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("h3",{id:"running-the-script"},"Running the Script"),(0,o.kt)("p",null,"Here, you'll learn how to run the code that was just covered, and what to expect."),(0,o.kt)("p",null,"To view the completed code, clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-docs-examples"},"Keypom Docs Examples")," repository and navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"basic-tutorials/fc-drop"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/keypom/keypom-docs-examples.git && cd keypom-docs-examples/basic-tutorials/fc-drop\n")),(0,o.kt)("p",null,"From there, you can and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"fc-example.js")," file."),(0,o.kt)("p",null,"To run the code you just cloned, return to the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypom-docs-examples")," directory and install all the necessary packages. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .. && cd .. && yarn\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Prior to running these scripts, ensure you replace all instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"keypom-docs-demo.testnet")," in the script with the credentials of your account found in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.near-credentials")," folder")),(0,o.kt)("p",null,"From there, you can run this FC Drop script that was made in this tutorial using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn basic:fc:keypom\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The SDK script is being tested here; use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn basic:fc:naj")," to test the ",(0,o.kt)("inlineCode",{parentName:"p"},"NEAR-API-JS")," script instead.")),(0,o.kt)("p",null,"This should return a successful drop creation and console log a Public Key and Linkdrop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Public Keys:  [ 'ed25519:55FkiRc4J3c1zLgzuTYxJMebVrpraXU3P7zPymDtbssN' ]\nLinkdrops:  [\n  'https://testnet.mynearwallet.com/linkdrop/v2.keypom.testnet/2BB8cx2xaKzY1ENBCoVz7bTFUgq8Gx6Ar27D5PbCv39NnZLfWxw3XqWr37HZ1xm3KdQ5uCt8hvt6ztF1eGBQC1Hi'\n]\nKeypom Contract Explorer Link: explorer.testnet.near.org/accounts/v2.keypom.testnet.com\n")),(0,o.kt)("p",null,"To see the full console log from this drop creation, see the expandable section below."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Console Log of Test"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Receipts: 4MTrVP1cvemzA1XhmX4hHErYvmcgMCgfrXydwNTeez3Y, 8LDCtYSsN5ccFY5udxbYqoVzmxyubqZBRLvMR33FUREN\n        Log [v2.keypom.testnet]: Current Block Timestamp: 1682352446955649219\n        Log [v2.keypom.testnet]: 21 calls with 105000000000000 attached GAS. Pow outcome: 1.8602935. Required Allowance: 20248156910387200000000\n        Log [v2.keypom.testnet]: Total required storage Yocto 14230000000000000000000\n        Log [v2.keypom.testnet]: Current balance: 9.3089748, \n            Required Deposit: 2.0354781, \n            total_required_storage: 0.01423,\n            Drop Fee: 0, \n            Key Fee: 0 Total Key Fee: 0,\n            allowance: 0.0202481 total allowance: 0.0202481,\n            access key storage: 0.001 total access key storage: 0.001,\n            deposits less none FCs: 1 total deposits: 1 lazy registration: false,\n            deposits for FCs: 1 total deposits for FCs: 1,\n            uses per key: 1\n            None FCs: 0,\n            length: 1\n            GAS to attach: 100000000000000\n        Log [v2.keypom.testnet]: New user balance 7.2734966\n        Log [v2.keypom.testnet]: Fees collected 0\nPublic Keys:  [ 'ed25519:55FkiRc4J3c1zLgzuTYxJMebVrpraXU3P7zPymDtbssN' ]\nLinkdrops:  [\n  'https://testnet.mynearwallet.com/linkdrop/v2.keypom.testnet/2BB8cx2xaKzY1ENBCoVz7bTFUgq8Gx6Ar27D5PbCv39NnZLfWxw3XqWr37HZ1xm3KdQ5uCt8hvt6ztF1eGBQC1Hi'\n]\nKeypom Contract Explorer Link: explorer.testnet.near.org/accounts/v2.keypom.testnet.com\n")))),(0,o.kt)("h3",{id:"claiming-and-explorer-transactions"},"Claiming and Explorer Transactions"),(0,o.kt)("p",null,"Once you click the link, it will take you to the following NEAR Wallet page, where you will have the choice to claim with an existing account or create a new one. "),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:n(40989).default,alt:"NEAR Wallet claim",width:"80%"})," "),(0,o.kt)("p",null,"To check the transactions, click the final link in the console log when you run the script."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Keypom Contract Explorer Link: https://explorer.testnet.near.org/accounts/v2.keypom.testnet \n")),(0,o.kt)("p",null,"From there, you should be able to see the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org/transactions/DF6awbmts4hhACBTA8oBSGdt1oJh7FNCBkv36wZboZXR"},(0,o.kt)("inlineCode",{parentName:"a"},"create_drop"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org/transactions/m2LJE2Xv1TMwpbEm5SVj2VGqZxBybkQphXouupJKMg8"},(0,o.kt)("inlineCode",{parentName:"a"},"claim"))," transactions. "),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:n(63140).default,alt:"explorer transactions",width:"80%"})," "),(0,o.kt)("p",null,"Within the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.testnet.near.org/transactions/Cgckyr9EEC3o9MDiL8E2mvs6JYPuCApYqWjpgZvy3z6U"},(0,o.kt)("inlineCode",{parentName:"a"},"claim"))," transaction, you can also see that ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_mint")," was called on the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft.examples.testnet")," contract. "),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:n(16676).default,alt:"explorer transactions",width:"80%"})," "),(0,o.kt)("p",null,'This can be confirmed by visiting the "Collectibles" tab in your NEAR wallet. You should see the newly minted NFT in your wallet.  '),(0,o.kt)("p",{align:"center"}," ",(0,o.kt)("img",{src:n(94725).default,alt:"NFT collectibles claim",width:"65%"})," "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this tutorial, you learned the how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Basics/fc-drops#creating-drop-with-function-call-data"},"create a function call drop")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"fcData")," parameter. Once the drop was created, you constructed a valid linkdrop using the private keys in order to claim the assets."),(0,o.kt)("p",null,"Now that you've had a good introduction to creating all 4 Keypom drop types, feel free to modify the scripts created or move on to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/ticketing/introduction"},"Advanced Tutorials")," for more challenging and practical examples."))}h.isMDXComponent=!0},63140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/explorer-c577a7df91e23ebb2734adcac86623f7.png"},16676:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/nft-mint-657ed2da419ffd095ecf44bef4929021.png"},40989:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/nw-claim-b09af3b2407575e3849c7270ce2cdcda.png"},94725:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/collectibles-claimed2-b1926b652e8327d362cbe2a1880d9c35.png"}}]);