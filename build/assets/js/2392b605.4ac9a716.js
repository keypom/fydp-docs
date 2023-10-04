"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,k=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Creating the Drop"},r="Creating the Drop",l={unversionedId:"Tutorials/Advanced/ticketing/drop",id:"version-2.0/Tutorials/Advanced/ticketing/drop",title:"Creating the Drop",description:"Introduction",source:"@site/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/drop.md",sourceDirName:"Tutorials/Advanced/ticketing",slug:"/Tutorials/Advanced/ticketing/drop",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/drop",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/drop.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Creating the Drop"},sidebar:"Tutorials",previous:{title:"Solution Architecture",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/architecture"},next:{title:"Testing the Drop",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/drop-test"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Connecting to NEAR",id:"connecting-to-near",level:2},{value:"Creating the Drop",id:"creating-the-drop-1",level:2},{value:"Function Call Drop Basics",id:"function-call-drop-basics",level:3},{value:"Initializing the SDK",id:"initializing-the-sdk",level:4},{value:"Defining the Function Call Data",id:"defining-the-function-call-data",level:4},{value:"POAP",id:"poap",level:4},{value:"Password Protected Keys",id:"password-protected-keys",level:4},{value:"Final Drop Structure",id:"final-drop-structure",level:3},{value:"Making NFT Series",id:"making-nft-series",level:2},{value:"Adding More Than 50 Tickets",id:"adding-more-than-50-tickets",level:2},{value:"Creating Ticket Links",id:"creating-ticket-links",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-the-drop"},"Creating the Drop"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this section you'll take the first step to creating the ticketing experience by designing the drop. This drop will be tailored according to the functionality and specifications found in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/ticketing/architecture#keypom-solution"},"Solution Architecture"),"."),(0,i.kt)("p",null,"Recall that the drop needs the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops"},"Function Call drop")," must be used and configured so that each key has 2 uses."),(0,i.kt)("li",{parentName:"ul"},"The first key use is password protected and ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," (for when the host scans attendees into the event). "),(0,i.kt)("li",{parentName:"ul"},"The second key use will have a small amount of $NEAR to cover account creation costs and sponsor the first few transactions."),(0,i.kt)("li",{parentName:"ul"},"The second key use will also call ",(0,i.kt)("inlineCode",{parentName:"li"},"nft_mint")," on an NFT contract which will send the new or existing account a POAP.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The first key use being ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," will allow for a lightweight transaction on-chain to reflect the key use decrement without needing to transfer any $NEAR to anyone or create any accounts.")),(0,i.kt)("p",null,"With this in mind, the aim of this tutorial will be to write a node script that will create the drop matching the above properties. This process can be broken down into three stages:"),(0,i.kt)("p",null,"1) Connect to the NEAR blockchain.",(0,i.kt)("br",{parentName:"p"}),"\n","2) Create the drop with function call data.",(0,i.kt)("br",{parentName:"p"}),"\n","3) Create the NFT collection for the post attendance gift."),(0,i.kt)("p",null,"Starting at the ",(0,i.kt)("inlineCode",{parentName:"p"},"keypom-docs-examples")," directory, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ticket-app-skeleton/utils")," folder and open the ",(0,i.kt)("inlineCode",{parentName:"p"},"createTickDrop.js")," file. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd advanced-tutorials/ticket-app-skeleton/utils\n")),(0,i.kt)("p",null,"There, you can see the following skeleton code in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"createTickDrop.js"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app-skeleton/utils/createTickDrop.js#L1-L33\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connecting-to-near"},"Connecting to NEAR"),(0,i.kt)("p",null,"In this section, you'll be addressing the first step which is connecting to the NEAR network. "),(0,i.kt)("p",null,"This is done with ",(0,i.kt)("inlineCode",{parentName:"p"},"NEAR-API-JS")," and consists of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Selecting which network to connect to (testnet or mainnet).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specifying the location where the keys are stored for the drop funder's account. This location is commonly in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.near-credentials")," folder on your local machine."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8b8e8bbf5fd89d8447e1b6b4533da3bb8673690c/advanced-tutorials/ticket-app/utils/createTickDrop.js#L22-L38\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-the-drop-1"},"Creating the Drop"),(0,i.kt)("p",null,"In this section, you'll create the function call drop to meet the functional requirements defined earlier."),(0,i.kt)("h3",{id:"function-call-drop-basics"},"Function Call Drop Basics"),(0,i.kt)("h4",{id:"initializing-the-sdk"},"Initializing the SDK"),(0,i.kt)("p",null,"This process starts with calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")," function and will always be the first function you call to interact with the Keypom SDK. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")," initializes the SDK to allow for interactions with the Keypom smart contracts. Without it, none of the other SDK functions would work as expected."),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"initKeypom")," is called, the FC Drop can be created by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop")," and adding an ",(0,i.kt)("inlineCode",{parentName:"p"},"fcData")," parameter."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Change this to your account ID\nconst FUNDER_ACCOUNT_ID = "minqi.testnet";\nconst NETWORK_ID = "testnet"\nasync function createTickDrop() {\n  // Initiate connection to the NEAR blockchain.\n  const CREDENTIALS_DIR = ".near-credentials";\n  const credentialsPath =  path.join(homedir, CREDENTIALS_DIR);\n  ...\n  ...\n  let near = new Near(nearConfig);\n  const fundingAccount = new Account(near.connection, FUNDER_ACCOUNT_ID)\n\n  await initKeypom({\n      near,\n      network: NETWORK_ID\n  });\n}\n')),(0,i.kt)("h4",{id:"defining-the-function-call-data"},"Defining the Function Call Data"),(0,i.kt)("p",null,"One the SDK has been initialized and the NEAR connection established, it's time to create the function call drop. This is done by passing in ",(0,i.kt)("inlineCode",{parentName:"p"},"fcData")," into create drop. It is an object that defines the methods that will be called for any given key use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"fcData\n\u2514\u2500\u2500 methods\n")),(0,i.kt)("p",null,"For multi-use keys, each specific use can have a different set of methods that will be called. These methods are executed one by one. As an example, a key with 3 uses can be seen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"nft_mint")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"create_account_advanced")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"setup")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"nft_mint")," ")),(0,i.kt)("p",null,"The first time the key is used, an NFT will be minted. The second use will simply advance the key with nothing called. The third time the key is used, it will first call ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_advanced")," followed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," method and then finally ",(0,i.kt)("inlineCode",{parentName:"p"},"nft_mint")," all in the same transaction."),(0,i.kt)("p",null,"This is represented with a 2D array, where the inner array is the set of methods per key use. The above example would be represented as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'methods: [\n  [\n    "nft_mint"\n  ], \n  null, \n  [\n    "create_account_advanced", \n    "setup", \n    "nft_mint"\n  ]\n]\n')),(0,i.kt)("p",null,"In reality, each method is not simply a string as shown above. The methods require the following parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receiverId"),": The contract receiving the function call.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"methodName"),": The function to be called on the receiver contract.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"args"),": A stringified JSON object of all the arguments to be passed into ",(0,i.kt)("inlineCode",{parentName:"li"},"methodName"),".  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attachedDeposit"),": The yoctoNear deposit attached to the function call when the key is used.  ")),(0,i.kt)("p",null,"For more information on the ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," parameter, please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/interfaces/Method"},"TypeDocs")),(0,i.kt)("p",null,"In summary, the ",(0,i.kt)("inlineCode",{parentName:"p"},"fcData")," should look something like this, with a generic method for the POAP which you'll explore in the next section:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'fcData: {\n    methods: [\n        null,\n        [\n            {\n                receiverId: SOME_NFT_CONTRACT,\n                methodName: "nft_mint",\n                args: SOME_ARGS,\n                attachedDeposit: SOME_DEPOSIT\n            }\n        ],\n    ]   \n}  \n')),(0,i.kt)("h4",{id:"poap"},"POAP"),(0,i.kt)("p",null,"Now that the basics for creating an FC drop have been covered, it's time to define what the second key use method data should look like."),(0,i.kt)("p",null,"Each NFT that is given out to participants will share the same artwork, title, description etc. They will be part of the same series and the only thing that differs between them is their unique ID. For a full tutorial about the series contract, see NEAR's ",(0,i.kt)("a",{parentName:"p",href:"https://docs.near.org/tutorials/nfts/series#nft-collections-and-series"},"NFT tutorial.")),(0,i.kt)("p",null,"To mint these NFTs, there is a contract deployed to ",(0,i.kt)("inlineCode",{parentName:"p"},"nft-v2.keypom.testnet"),". When creating an FC drop, it is important to understand the interface of the receiver contract. In this case, the mint function has the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn nft_mint(\n  &mut self, \n  mint_id: U64, \n  receiver_id: AccountId\n)\n")),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_id")," is needed to identify and tell the NFT contract which series an NFT should belong to. The ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id")," field is needed to identify which account should receive the minted NFT."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_id")," field should be set as the drop's ",(0,i.kt)("inlineCode",{parentName:"p"},"dropId")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id")," should be the attendee's NEAR ",(0,i.kt)("inlineCode",{parentName:"p"},"accountId"),". At first glance, this might seem impossible because you don't know the attendee's accounts ahead of time. To solve this, you can use what's known as Keypom Arguments which are important pieces of information that can be passed into specified fields when a key is used."),(0,i.kt)("p",null,"The following optional Keypom arguments are exposed for each individual method in the ",(0,i.kt)("inlineCode",{parentName:"p"},"fcData")," alongside the required receiverId, methodName, attachedDeposit etc. "),(0,i.kt)("p",null,"They tell Keypom where to inject certain parameters for each function call."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/Method#accountidfield"},(0,i.kt)("inlineCode",{parentName:"a"},"accountIdField")),": The name of the account that is claiming the linkdrop."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/Method#dropidfield"},(0,i.kt)("inlineCode",{parentName:"a"},"dropIdField")),": The ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/Drop#dropid"},(0,i.kt)("inlineCode",{parentName:"a"},"dropId"))," of the drop that the claim is being called on. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/Method#keyidfield"},(0,i.kt)("inlineCode",{parentName:"a"},"keyIdField"))," The unique identifier, ",(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/KeyInfo#keyid"},(0,i.kt)("inlineCode",{parentName:"a"},"keyId")),", of the key that is being used to claim."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/2.0/keypom-sdk/Core/interfaces/Method#funderidfield"},(0,i.kt)("inlineCode",{parentName:"a"},"funderIdField"))," the ",(0,i.kt)("inlineCode",{parentName:"li"},"accountId")," of the person funding the drop.")),(0,i.kt)("p",null,"In this case, the ",(0,i.kt)("inlineCode",{parentName:"p"},"dropIdField")," should be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_id"),"  and ",(0,i.kt)("inlineCode",{parentName:"p"},"accountIdField")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id"),". This will result in the drop's ID being passed into the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"mint_id")," and attendee's NEAR account passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"receiver_id")," field."),(0,i.kt)("p",null,"In summary, the final ",(0,i.kt)("inlineCode",{parentName:"p"},"fcData")," should look as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'fcData: {\n    methods: [\n        null,\n        [\n            {\n                receiverId: `nft-v2.keypom.testnet`,\n                methodName: "nft_mint",\n                args: "",\n                dropIdField: "mint_id",\n                accountIdField: "receiver_id",\n                attachedDeposit: parseNearAmount("0.1")\n            }\n        ],\n    ]   \n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you wish to use a different NFT contract for your POAP, ensure you know the contract's interface and tailor the ",(0,i.kt)("inlineCode",{parentName:"p"},"methods")," arguments accordingly.")),(0,i.kt)("h4",{id:"password-protected-keys"},"Password Protected Keys"),(0,i.kt)("p",null,"To ensure each key has two uses with a password protected first use, the following ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"basePassword")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordProtectedUses")," can be added to ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'await createDrop(\n  // 2 Uses per key\n  config: {\n      usesPerKey: 2\n  },\n  // Create base password and ensure only first key use is password protected\n  basePassword: "event-password",\n  passwordProtectedUses: [1],\n  fcData: {\n    ...\n  }\n)\n')),(0,i.kt)("p",null,"As the drop creator, you have the option of creating a password and applying it to the keys in your drop. This password is unique for each key use and comprises of a master password, the drop ID and the use (1st, 2nd, 3rd etc.)"),(0,i.kt)("p",null,"This behavior can be applied by providing the core component, a ",(0,i.kt)("inlineCode",{parentName:"p"},"basePassword"),", into the ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop")," arguments. In the ticketing case, only the first use should be protected which can be achieved by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"[1]")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"passwordProtectedUses")," parameter."),(0,i.kt)("p",null,"Once a key has been password protected, you must pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"hash(basePassword + publicKey + current_key_use)")," in order to successfully claim it."),(0,i.kt)("p",null,"With this model, if the host were to simply know the ",(0,i.kt)("inlineCode",{parentName:"p"},"basePassword"),", it could deterministically generate this hash for any given ticket link. Furthermore, if the host was the only person who knew the password, nobody could claim the key without going through them first."),(0,i.kt)("p",null,"For an in-depth explanation around password protected keys, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/modules#createdrop"},"Typedocs"),"."),(0,i.kt)("h3",{id:"final-drop-structure"},"Final Drop Structure"),(0,i.kt)("p",null,"Putting it all together, the final drop structure should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8b8e8bbf5fd89d8447e1b6b4533da3bb8673690c/advanced-tutorials/ticket-app/utils/createTickDrop.js#L42-L73\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"making-nft-series"},"Making NFT Series"),(0,i.kt)("p",null,"Up until now, the drop is pointing to an NFT series that doesn't exist yet. If a key were to be claimed, the function call would throw an error. In this section, you'll be creating the series of NFTs to be used as POAPs."),(0,i.kt)("p",null,"The Keypom SDK provides a function to create an NFT series specifically for function call drops, called ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/keypom-sdk/Core/modules#createnftseries"},(0,i.kt)("inlineCode",{parentName:"a"},"createNFTSeries")),". It requires the following parameters: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dropId"),": The drop ID for the drop that should have the NFT series associated with it.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata"),": The metadata that all minted NFTs will have. ")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," is an object with these properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title for the NFTs in the series."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": Description for all NFTs in the series."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"media"),": link to the artwork in the form of an IPFS CID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copies"),": Number of NFTs in the series.")),(0,i.kt)("p",null,"The code for creating the series is shown below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8b8e8bbf5fd89d8447e1b6b4533da3bb8673690c/advanced-tutorials/ticket-app/utils/createTickDrop.js#L75-L84\n")),(0,i.kt)("p",null,"Once both the series and drop are created, the key can be used to mint on-demand POAPs to wallets."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"adding-more-than-50-tickets"},"Adding More Than 50 Tickets"),(0,i.kt)("p",null,"Due to gas restriction, ",(0,i.kt)("inlineCode",{parentName:"p"},"createDrop")," is limited to 50 password protected keys (tickets). Rather than create multiple drops for the same event, you can simply add more keys to a single drop. This allows you to track your event metrics using a single ",(0,i.kt)("inlineCode",{parentName:"p"},"dropId"),"."),(0,i.kt)("p",null,"To do this, you can use the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Loop to add 200 keys\nlet numKeys = 200\nlet keysAdded = 0;\nlet allSecretKeys = [];\nwhile (keysAdded < numKeys) {\n    const keysToAdd = Math.min(50, numKeys - keysAdded);\n    const {secretKeys, publicKeys} = await generateKeys({\n        numKeys: keysToAdd,\n    });\n    await addKeys({\n        account: fundingAccount,\n        dropId,\n        publicKeys\n    });\n    keysAdded += keysToAdd;\n    allSecretKeys = allSecretKeys.concat(secretKeys);\n}\n")),(0,i.kt)("p",null,"For more, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.0/Cookbook/drops/NEAR#creating-a-large-drop"},"this example")," or "),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"creating-ticket-links"},"Creating Ticket Links"),(0,i.kt)("p",null,"The last step in this process is to create the links themselves so that you can easily distribute the tickets to people. You can control the format of the URL, for now ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:1234")," will be used."),(0,i.kt)("p",null,"You can utilize the ",(0,i.kt)("inlineCode",{parentName:"p"},"formatLinkdropUrl")," function for convenience. It can take a custom URL that contains ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTRACT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SECRET_KEY")," and it will replace them with the contract ID and secret keys passed in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8b8e8bbf5fd89d8447e1b6b4533da3bb8673690c/advanced-tutorials/ticket-app/utils/createTickDrop.js#L86-L91\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"final-code"},"Final Code"),(0,i.kt)("p",null,"Putting everything together, the final code for the drop should be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/8b8e8bbf5fd89d8447e1b6b4533da3bb8673690c/advanced-tutorials/ticket-app/utils/createTickDrop.js#L1-L107\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"So far, you've broken down the ticketing system into functional requirements and used them to write a script to create the drop."),(0,i.kt)("p",null,"In the next tutorial, you'll be testing the drop you just created, starting with creating a script to emulate the host scanning a ticket."))}h.isMDXComponent=!0}}]);