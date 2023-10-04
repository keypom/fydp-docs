"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[4419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_label:"Create Your First Drop"},i="Introduction",c={unversionedId:"TrialAccounts/Creation/drop-creation",id:"version-2.0/TrialAccounts/Creation/drop-creation",title:"Introduction",description:"Up until this point, you should have installed the Keypom SDK and its dependencies and should have a basic understanding of how trial accounts work and what is needed to create one. In this tutorial, you'll go through the process of creating the trial account drop that will be used to onboard users into the guest-book app.",source:"@site/versioned_docs/version-2.0/TrialAccounts/Creation/drop-creation.md",sourceDirName:"TrialAccounts/Creation",slug:"/TrialAccounts/Creation/drop-creation",permalink:"/docs/2.0/TrialAccounts/Creation/drop-creation",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/TrialAccounts/Creation/drop-creation.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Create Your First Drop"},sidebar:"TrialAccounts",previous:{title:"Understanding Trial Accounts",permalink:"/docs/2.0/TrialAccounts/Creation/understanding-trial-accounts"},next:{title:"Integrating Into Your Apps",permalink:"/docs/2.0/TrialAccounts/Creation/integration"}},l={},s=[{value:"Creating the Script",id:"creating-the-script",level:2},{value:"Connecting to NEAR",id:"connecting-to-near",level:2},{value:"Initializing the SDK",id:"initializing-the-sdk",level:2},{value:"Creating the Trial Drop",id:"creating-the-trial-drop",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Up until this point, you should have installed the Keypom SDK and its dependencies and should have a basic understanding of how trial accounts work and what is needed to create one. In this tutorial, you'll go through the process of creating the trial account drop that will be used to onboard users into the guest-book app."),(0,o.kt)("h2",{id:"creating-the-script"},"Creating the Script"),(0,o.kt)("p",null,"Starting at the ",(0,o.kt)("inlineCode",{parentName:"p"},"keypom-docs-example")," directory, navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"advanced-tutorials/trial-accounts")," folder and open the ",(0,o.kt)("inlineCode",{parentName:"p"},"create-trial-drop.js")," file. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd advanced-tutorials/trial-accounts\n")),(0,o.kt)("p",null,"There, you will see the code that is used to create the trial account drop. "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"connecting-to-near"},"Connecting to NEAR"),(0,o.kt)("p",null,"The first step to creating the drop is connecting to the NEAR network. "),(0,o.kt)("p",null,"This is done with ",(0,o.kt)("inlineCode",{parentName:"p"},"NEAR-API-JS")," and consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Selecting which network to connect to (testnet or mainnet).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specifying the location where the keys are stored for the drop funder's account. This location is commonly in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.near-credentials")," folder on your local machine."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/trial-accounts/create-trial-drop.js#L11-L29\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,o.kt)("p",null,"The process for creating a drop always starts with calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," function."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initKeypom")," initializes the SDK to allow for interactions with the Keypom smart contracts. Without it, none of the other SDK functions would work as expected."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// Change this to your account ID\nconst FUNDER_ACCOUNT_ID = "minqi.testnet";\nconst NETWORK_ID = "testnet"\nasync function createTrialAccount() {\n  // Initiate connection to the NEAR blockchain.\n  const CREDENTIALS_DIR = ".near-credentials";\n  const credentialsPath =  path.join(homedir, CREDENTIALS_DIR);\n  ...\n  ...\n  let near = await connect(nearConfig);\n\n  // Initialize the SDK and point it to the custom NEAR object that was created.\n  await initKeypom({\n        near,\n        network: NETWORK_ID\n    });\n}\n')),(0,o.kt)("h2",{id:"creating-the-trial-drop"},"Creating the Trial Drop"),(0,o.kt)("p",null,"Now that both the SDK and NEAR connections have been established, it's time to create the drop itself. This is done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"createTrialAccountDrop")," function. You'll start by defining the restrictions that the trial account will have. You'll want the trial account to only call methods on the guest book contract and attach up to 1 $NEAR per method. In this case, the guest book contract is deployed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"guest-book.examples.keypom.testnet")," account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/trial-accounts/create-trial-drop.js#L37-L51\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Note that a ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," was passed in for the callable methods. This means that the trial account can call any method as long as it's on the guest book contract.")),(0,o.kt)("p",null,"Once this is finished, you can create the drop itself. The account will start with ",(0,o.kt)("inlineCode",{parentName:"p"},"2.5 $NEAR")," and will reach the floor once ",(0,o.kt)("inlineCode",{parentName:"p"},"1.25 $NEAR")," has been spent on attached deposits and burnt gas. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/trial-accounts/create-trial-drop.js#L53-L67\n")),(0,o.kt)("p",null,"In the above example, you only created 1 drop but you can create as many as you want for your users. It's super simple and the Keypom SDK has abstracted all the complexities away from you. In the next tutorial, you'll run the script and instantly sign into the guest-book app."))}u.isMDXComponent=!0}}]);