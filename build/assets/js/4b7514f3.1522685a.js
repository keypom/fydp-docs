"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[2187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},86575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Linkdrop Basics",sidebar_position:5},o="How Linkdrops Work",l={unversionedId:"Concepts/LinkdropsAndAccessKeys/linkdrop-basics",id:"version-2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics",title:"How Linkdrops Work",description:"For some background as to how linkdrops works on NEAR:",source:"@site/versioned_docs/version-2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics.md",sourceDirName:"Concepts/LinkdropsAndAccessKeys",slug:"/Concepts/LinkdropsAndAccessKeys/linkdrop-basics",permalink:"/docs/2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics.md",tags:[],version:"2.0",sidebarPosition:5,frontMatter:{sidebar_label:"Linkdrop Basics",sidebar_position:5},sidebar:"Concepts",previous:{title:"NEAR Access Key Model",permalink:"/docs/2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys"},next:{title:"Introduction to Keypom",permalink:"/docs/2.0/Concepts/KeypomProtocol/overview"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-linkdrops-work"},"How Linkdrops Work"),(0,a.kt)("p",null,"For some background as to how linkdrops works on NEAR: "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The funder that has an account and some $NEAR:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"creates a keypair locally ",(0,a.kt)("inlineCode",{parentName:"li"},"(pubKey1, privKey1)"),". The blockchain doesn't know of this key's existence yet since it's all local for now."),(0,a.kt)("li",{parentName:"ul"},"calls ",(0,a.kt)("inlineCode",{parentName:"li"},"send")," on the contract and passes in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pubKey1")," as an argument as well as the desired ",(0,a.kt)("inlineCode",{parentName:"li"},"balance")," for the linkdrop.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The contract will map the ",(0,a.kt)("inlineCode",{parentName:"li"},"pubKey1")," to the desired ",(0,a.kt)("inlineCode",{parentName:"li"},"balance")," for the linkdrop."),(0,a.kt)("li",{parentName:"ul"},"The contract will then add the ",(0,a.kt)("inlineCode",{parentName:"li"},"pubKey1")," as a ",(0,a.kt)("strong",{parentName:"li"},"function call access key")," with the ability to call ",(0,a.kt)("inlineCode",{parentName:"li"},"claim")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"create_account_and_claim"),". This means that anyone with the ",(0,a.kt)("inlineCode",{parentName:"li"},"privKey1")," that was created locally, can claim this linkdrop. "))),(0,a.kt)("li",{parentName:"ul"},"Funder will then create a link to send to someone that contains this ",(0,a.kt)("inlineCode",{parentName:"li"},"privKey1"),". The link follows the following format: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    wallet.testnet.near.org/linkdrop/{fundingContractAccountId}/{linkdropKeyPairSecretKey}?redirectUrl={redirectUrl}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fundingContractAccountId"),": The contract accountId that was used to send the funds."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkdropKeyPairSecretKey"),": The corresponding secret key to the public key sent to the contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirectUrl"),": The url that wallet will redirect to after funds are successfully claimed to an existing account. The URL is sent the accountId used to claim the funds as a query param.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The receiver of the link that is claiming the linkdrop:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Receives the link which includes ",(0,a.kt)("inlineCode",{parentName:"li"},"privKey1")," and sends them to the NEAR wallet."),(0,a.kt)("li",{parentName:"ul"},"Wallet creates a new keypair ",(0,a.kt)("inlineCode",{parentName:"li"},"(pubKey2, privKey2)")," locally. The blockchain doesn't know of this key's existence yet since it's all local for now."),(0,a.kt)("li",{parentName:"ul"},"Receiver will then choose an account ID such as ",(0,a.kt)("inlineCode",{parentName:"li"},"new_account.near"),". "),(0,a.kt)("li",{parentName:"ul"},"Wallet will then use the ",(0,a.kt)("inlineCode",{parentName:"li"},"privKey1")," which has access to call ",(0,a.kt)("inlineCode",{parentName:"li"},"claim")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," in order to call ",(0,a.kt)("inlineCode",{parentName:"li"},"create_account_and_claim")," on the contract.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It will pass in ",(0,a.kt)("inlineCode",{parentName:"li"},"pubKey2")," which will be used to create a full access key for the new account."))),(0,a.kt)("li",{parentName:"ul"},"The contract will create the new account and transfer the funds to it alongside any NFT or fungible tokens pre-loaded.")))}u.isMDXComponent=!0}}]);