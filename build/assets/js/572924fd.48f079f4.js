"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[4305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,k=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_label:"Offboarding Trial Accounts"},r="Introduction",l={unversionedId:"TrialAccounts/offboarding",id:"version-2.0/TrialAccounts/offboarding",title:"Introduction",description:"In this tutorial, you'll learn how to support trial accounts exiting into your wallet.",source:"@site/versioned_docs/version-2.0/TrialAccounts/offboarding.md",sourceDirName:"TrialAccounts",slug:"/TrialAccounts/offboarding",permalink:"/docs/2.0/TrialAccounts/offboarding",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/TrialAccounts/offboarding.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Offboarding Trial Accounts"},sidebar:"TrialAccounts",previous:{title:"Integrating Into Your Apps",permalink:"/docs/2.0/TrialAccounts/Creation/integration"}},c={},s=[{value:"Utilizing Linkdrops",id:"utilizing-linkdrops",level:2},{value:"Claiming",id:"claiming",level:3},{value:"Trial Account Linkdrops",id:"trial-account-linkdrops",level:3},{value:"Rendering Linkdrops",id:"rendering-linkdrops",level:3},{value:"Supporting Trial Account Offboarding",id:"supporting-trial-account-offboarding",level:2},{value:"Rendering Trial Account Linkdrops",id:"rendering-trial-account-linkdrops",level:3},{value:"In Summary",id:"in-summary",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this tutorial, you'll learn how to support trial accounts exiting into your wallet."),(0,i.kt)("p",null,"Trial Accounts are a great way to onboard new users to applications with the click of a link. The in-app experience is seamless but at some point, the trial must end. This process should remove all restrictions from the user's account and allow them to interact with the any app on NEAR. This process is known as offboarding and is a critical part of the user's journey."),(0,i.kt)("p",null,"As part of the offboarding process, a full access key will be added to the account and this should be stored somewhere safe. For this reason, we wanted to make sure trial accounts could be exited into any wallet or app that supports the official linkdrop standard (e.g MyNEARWallet / FastAuth)."),(0,i.kt)("p",null,"The desired user experience is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click a link or scan a QR code."),(0,i.kt)("li",{parentName:"ol"},"Enter a username."),(0,i.kt)("li",{parentName:"ol"},"Immediately get signed into the app and start using it."),(0,i.kt)("li",{parentName:"ol"},"Once your trial is over, a modal pops up with options for onboarding."),(0,i.kt)("li",{parentName:"ol"},"Click the desired option (such as MyNEARWallet) and get redirected."),(0,i.kt)("li",{parentName:"ol"},"Offboard with the app and get a new private key based on the option you chose (seedphrase, biometrics etc.)"),(0,i.kt)("li",{parentName:"ol"},"The trial account has now been converted into a full, unrestricted NEAR account that can interact with the rest of the ecosystem.")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(73220).default,width:"60%",height:"15%",alt:"ticketing"})),(0,i.kt)("h2",{id:"utilizing-linkdrops"},"Utilizing Linkdrops"),(0,i.kt)("p",null,"Most wallets support linkdrop claiming since it leads to more opportunities for them to gain new users. This can be used to our advantage if the trial account offboarding process is treated as a regular linkdrop, then the account can be offboarded into almost every wallet. Before learning how this is accomplished, you should first understand the basics of claiming linkdrops."),(0,i.kt)("h3",{id:"claiming"},"Claiming"),(0,i.kt)("p",null,"As per the official linkdrop standard, there are 3 methods that are important for claiming linkdrops:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/// Returns the KeyInfo associated with a given public key\n/// Panics if the key does not exist\nfunction get_key_information(key: string) -> KeyInfo\n\n/// Transfer assets linked to a given public key to an `account_id`.\n///\n/// Arguments:\n/// * `account_id` the account that should receive the linkdrop assets.\n///\n/// Returns `true` if the claim was successful meaning all assets were sent to \n/// the `account_id`.\nfunction claim(account_id: string) -> Promise<boolean>\n\n/// Creates a new NEAR account and transfers all assets linked to a given public \n/// key to the *newly created account*.\n/// \n/// Arguments:\n/// * `new_account_id`: the valid NEAR account which is being created and should \n///   receive the linkdrop assets\n/// * `new_public_key`: the valid public key that should be used for the access \n//    key added to the newly created account.     \n///\n/// Returns `true` if the claim was successful meaning the `new_account_id` was \n/// created and all assets were sent to it.\nfunction create_account_and_claim(new_account_id: string, new_public_key: string) -> Promise<boolean>\n")),(0,i.kt)("p",null,"For an arbitrary linkdrop (a URL containing the contract and secret key), the flow is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The user clicks a link or scans a QR code representing the linkdrop."),(0,i.kt)("li",{parentName:"ol"},"The app calls ",(0,i.kt)("inlineCode",{parentName:"li"},"get_key_information")," to check what's in the linkdrop.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the linkdrop was already claimed (or doesn't exist), the call will panic and the frontend should indicate that the drop is invalid."))),(0,i.kt)("li",{parentName:"ol"},"Depending on what is returned from the call, the app should display what assets the user is about to claim (e.g NFTs, FTs, $NEAR etc.)"),(0,i.kt)("li",{parentName:"ol"},"The frontend exposes a form field and the user either inputs a new account or an existing one."),(0,i.kt)("li",{parentName:"ol"},"If a new account is created, the frontend will call ",(0,i.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," and pass in the new account ID and an access key that will have full access permission over the account.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This key is generated based on what the app allows. For example, MyNEARWallet generates the key using a seedphrase while FastAuth generates it using biometrics."))),(0,i.kt)("li",{parentName:"ol"},"The linkdrop is claimed and the assets are sent to the user's account.")),(0,i.kt)("h3",{id:"trial-account-linkdrops"},"Trial Account Linkdrops"),(0,i.kt)("p",null,"Now that the basics of linkdrop claiming have been covered, you'll look at how trial accounts can be treated as a linkdrop. From above, there are a few requirements that need to be met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The URL should contain a contract and secret key"),(0,i.kt)("li",{parentName:"ul"},"The trial contract should implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"get_key_information")," method so that frontends know when a drop is valid."),(0,i.kt)("li",{parentName:"ul"},"The trial contract should implement the ",(0,i.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," method for claiming.")),(0,i.kt)("p",null,"Recall that for claiming assets to a new account, linkdrop contracts will create the account and add the public key as a full access key to the account. This access key is generated on a per-app basis. For example, MyNEARWallet generates the key using a seedphrase while FastAuth generates it using biometrics. "),(0,i.kt)("p",null,"In the case of the trial account contract, the exact same flow can happen except the account creation is ",(0,i.kt)("em",{parentName:"p"},"already done"),". When calling ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim"),", the contract should accept the new public key and do the following (assuming the account can exit):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Delete the existing limited access key used during the trial."),(0,i.kt)("li",{parentName:"ol"},"Create a new access key with the ",(0,i.kt)("inlineCode",{parentName:"li"},"new_public_key")," and give it full access to the account."),(0,i.kt)("li",{parentName:"ol"},"Repay the funder for any required $NEAR."),(0,i.kt)("li",{parentName:"ol"},"Delete any state that is being used by the contract."),(0,i.kt)("li",{parentName:"ol"},"Delete the trial contract and free up all the storage.")),(0,i.kt)("p",null,"Notice that the only parameter that was ",(0,i.kt)("em",{parentName:"p"},"actually")," used was ",(0,i.kt)("inlineCode",{parentName:"p"},"new_public_key")," but in the official linkdrop standard, the ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim")," function takes two parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function create_account_and_claim(new_account_id: string, new_public_key: string)\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"new_account_id")," field is disregarded by the trial account contract since the account already exists. You can pass in any value for this field and it will be ignored."),(0,i.kt)("p",null,"For example, the following code could be used to completely offboard a trial account using ",(0,i.kt)("inlineCode",{parentName:"p"},"near-api-js"),". The pseudo code is:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Initialize the NEAR connection."),(0,i.kt)("li",{parentName:"ol"},"Set the trial account key in the keystore."),(0,i.kt)("li",{parentName:"ol"},"Get the key information and check if the account can exit the trial."),(0,i.kt)("li",{parentName:"ol"},"Generate a random keypair that will be used as the account's new full access key."),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," with the new public key and the required gas coming from the call to get key information.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const NETWORK_ID = 'testnet';\n// Generate a new keystore and connect to the NEAR network\nlet keyStore = new keyStores.InMemoryKeyStore();  \n\nlet nearConfig = {\n    networkId: NETWORK_ID,\n    keyStore: keyStore,\n    nodeUrl: `https://rpc.${NETWORK_ID}.near.org`,\n    walletUrl: `https://wallet.${NETWORK_ID}.near.org`,\n    helperUrl: `https://helper.${NETWORK_ID}.near.org`,\n    explorerUrl: `https://explorer.${NETWORK_ID}.near.org`,\n};  \n\nlet near = await connect(nearConfig);\n\n// Account ID of the trial account\nconst trialAccountId = \"benji-demo-12345.testnet\";\n\n// Trial Account Secret Key\nconst trialAccountSecretKey = \"5XorwuVXhTpscqddyyrRB9QVZDTn3mut9Zeu7drtdxexurhgf2V4WHJ8RyLoJppmHagMg6gcdAQrG8gJf9JA2XB\"\nconst keyPair = KeyPair.fromString(trialAccountSecretKey);\nawait keyStore.setKey(NETWORK_ID, trialAccountId, keyPair);\n\n// Create the account object for the trial\nconst trialAccountObj = new Account(near.connection, trialAccountId);\n\n// Check if the trial account is able to exit\nconst keyInfo = await trialAccountObj.viewFunction(trialAccountId, 'get_key_information', {key: keyPair.getPublicKey().toString()});\nif (keyInfo.trial_data?.exit == true) {\n    // This will be the full access key for the new account\n    const newKeyPair = KeyPair.fromRandom('ed25519');\n    \n    // How much gas should be attached to the create account call\n    const requiredGas = keyInfo.required_gas;\n\n    // If the account can exit, generate a new random access key which will be used for the full access key\n    await trialAccountObj.functionCall({\n        contractId: trialAccountId, \n        methodName: 'create_account_and_claim', \n        args: {\n            new_account_id: \"\",\n            new_public_key: newKeyPair.getPublicKey().toString()\n        }, \n        attachedDeposit: 0, \n        gas: requiredGas\n    });\n}\n")),(0,i.kt)("h3",{id:"rendering-linkdrops"},"Rendering Linkdrops"),(0,i.kt)("p",null,"Wallets and apps that support the claiming of linkdrops should render their claim pages differently depending on what assets are contained in the linkdrop. For example, if the linkdrop contains $NEAR, the page could look like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(89543).default,width:"60%",height:"15%",alt:"ticketing"})),(0,i.kt)("p",null,"If the linkdrop contains NFTs, the page could look like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:n(45779).default,width:"30%",height:"15%",alt:"ticketing"})),(0,i.kt)("p",null,"This is done using the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_key_information")," method and rendering the page depending on the result. In the official linkdrop standard, the return value is an object ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyInfo")," that looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/// Information about a specific public key.\ntype KeyInfo = {\n   /// How much Gas should be attached when the key is used to call `claim` or `create_account_and_claim`.\n   /// It is up to the smart contract developer to calculate the required gas (which can be done either automatically on the contract or on the client-side).\n   required_gas: string,\n\n   /// yoctoNEAR$ amount that will be sent to the account that claims the linkdrop (either new or existing)\n   /// when the key is successfully used.\n   yoctoNEAR: string,\n\n   /// If using the NFT standard extension, a set of NFTData can be linked to the public key      \n   /// indicating that all those assets will be sent to the account that claims the linkdrop (either new or   \n   /// existing) when the key is successfully used.\n   nft_data: NFTData[] | null,\n  \n   /// If using the FT standard extension, a set of FTData can be linked to the public key      \n   /// indicating that all those assets will be sent to the account that claims the linkdrop (either new or   \n   /// existing) when the key is successfully used.\n   ft_data: FTData[] | null\n\n   /// ... other types can be introduced and the standard is easily extendable.\n}\n")),(0,i.kt)("p",null,"The frontend can check what's contained and render the page accordingly."),(0,i.kt)("h2",{id:"supporting-trial-account-offboarding"},"Supporting Trial Account Offboarding"),(0,i.kt)("p",null,"This idea of conditional rendering is the key to supporting trial account offboarding. In general, when a frontend renders the page for users that will call ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim"),", the flow is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show the user what assets they've received"),(0,i.kt)("li",{parentName:"ol"},"Prompt the user for a new username"),(0,i.kt)("li",{parentName:"ol"},"Give the user their private key (biometrics, seedphrase, etc.)"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," with the new username and the generated public key")),(0,i.kt)("p",null,"While this approach ",(0,i.kt)("em",{parentName:"p"},"could")," work with trial accounts, it is not ideal as there's no need to ask for a username since the account already exists."),(0,i.kt)("h3",{id:"rendering-trial-account-linkdrops"},"Rendering Trial Account Linkdrops"),(0,i.kt)("p",null,"A better flow for offboarding trial accounts would be to skip the new username prompt mentioned above. This means that the user's journey would look like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Show the user a screen indicating that they're about to exit the trial account"),(0,i.kt)("li",{parentName:"ol"},"Give the user their private key (biometrics, seedphrase, etc.)"),(0,i.kt)("li",{parentName:"ol"},"Call ",(0,i.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," with an empty username and the generated public key")),(0,i.kt)("p",null,"In order to support this flow, the frontend should check if the linkdrop contains a trial account. This can be done by checking the information returned from ",(0,i.kt)("inlineCode",{parentName:"p"},"get_key_information"),". The trial accounts will return the following object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"/// Information about a specific public key.\ntype KeyInfo = {\n  /// How much Gas should be attached when calling `create_account_and_claim` in order to exit the account\n  required_gas: string,\n\n  /// This will always be zero for trial accounts since the linkdrop doesn't contain $NEAR and instead contains the actual account\n  yoctoNEAR: '0',\n\n  /// Specific data that is used to determine whether or not a linkdrop is a trial account\n  trial_data: {\n    /// If the trial account can exit, this will be true.\n    exit: boolean\n  }\n}\n")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"trial_data")," field is present, the frontend can assume that the linkdrop is a trial account and render the page accordingly."),(0,i.kt)("h3",{id:"in-summary"},"In Summary"),(0,i.kt)("p",null,"Frontends that support the official linkdrop standard should be able to ingest an arbitrary linkdrop and render their claim page based on the assets contained in the drop. While the standard officially supports only 3 types of drops: $NEAR, NFTs, and FTs, it is easily extendable to support other types of assets. "),(0,i.kt)("p",null,"In the case of trial accounts, the key information will return a new field ",(0,i.kt)("inlineCode",{parentName:"p"},"trial_data")," that will indicate whether or not the account can exit. If the exit boolean is set to true, the frontend should skip the prompt for a new username and directly call ",(0,i.kt)("inlineCode",{parentName:"p"},"create_account_and_claim")," while passing in an empty username and the corresponding public key that should be added as full access."))}p.isMDXComponent=!0},89543:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/keypom-claim-near-8c7e0d4ad67ee641f4250b6218d2a22c.png"},45779:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/keypom-claim-nft-b7a4cc7fa52f559f0e016c7ac77a2d57.png"},73220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/trial-over-guestbook-4fdfd9e45ed9c3f5bf459d458cc032e4.png"}}]);