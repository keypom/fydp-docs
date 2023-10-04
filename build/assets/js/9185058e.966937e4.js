"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[7676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Solution Architecture"},r="Solution Architecture",s={unversionedId:"Tutorials/Advanced/ticketing/architecture",id:"version-2.0/Tutorials/Advanced/ticketing/architecture",title:"Solution Architecture",description:"In this section, you'll break down the requirements of the ticketing system in order to better understand how to create a solution architecture. This means translating the features from the ticketing introduction into tangible goals for the specific Keypom drop and its configurations.",source:"@site/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/architecture.md",sourceDirName:"Tutorials/Advanced/ticketing",slug:"/Tutorials/Advanced/ticketing/architecture",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/architecture",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/architecture.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Solution Architecture"},sidebar:"Tutorials",previous:{title:"Introduction",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/introduction"},next:{title:"Creating the Drop",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/drop"}},l={},c=[{value:"Breaking Down the Problem",id:"breaking-down-the-problem",level:2},{value:"No wallet is needed to enter",id:"no-wallet-is-needed-to-enter",level:3},{value:"Each ticket is unique and cannot be passed-back",id:"each-ticket-is-unique-and-cannot-be-passed-back",level:3},{value:"Attendees are not required to have wifi at the door.",id:"attendees-are-not-required-to-have-wifi-at-the-door",level:3},{value:"Attendees can setup a new NEAR wallet",id:"attendees-can-setup-a-new-near-wallet",level:3},{value:"NFT POAP available for attendees",id:"nft-poap-available-for-attendees",level:3},{value:"Attendance required for POAP",id:"attendance-required-for-poap",level:3},{value:"Keypom Solution",id:"keypom-solution",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"solution-architecture"},"Solution Architecture"),(0,a.kt)("p",null,"In this section, you'll break down the requirements of the ticketing system in order to better understand how to create a solution architecture. This means translating the features from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/ticketing/introduction"},"ticketing introduction")," into tangible goals for the specific Keypom drop and its configurations."),(0,a.kt)("h2",{id:"breaking-down-the-problem"},"Breaking Down the Problem"),(0,a.kt)("p",null,"Recall from earlier, the following features are needed:"),(0,a.kt)("h3",{id:"no-wallet-is-needed-to-enter"},"No wallet is needed to enter"),(0,a.kt)("p",null,"With traditional events, you would need to burn an NFT in order to gain entry to the event. This model requires the attendee to have a valid wallet with enough $NEAR to cover transaction costs."),(0,a.kt)("p",null,"With a Keypom access key, all you need is the private key to gain entrance. This can be turned into a simple QR code that is scanned at the door to gain entrance."),(0,a.kt)("h3",{id:"each-ticket-is-unique-and-cannot-be-passed-back"},"Each ticket is unique and cannot be passed-back"),(0,a.kt)("p",null,"In order to satisfy the requirement that each ticket must be unique and can only be scanned once, the key should be used to sign a simple transaction when it's scanned. This will prevent ticket pass-backs since the host can check the on-chain status of each key. If it's been used already, the host can deny entry."),(0,a.kt)("p",null,"When the host scans the QR code and signs the transaction using the key, it should simply modify some state on the contract reflecting that the key has been used. It shouldn't transfer $NEAR to anyone or create any accounts and should be a lightweight transaction on-chain."),(0,a.kt)("p",null,"By default, every key has a counter of how many uses it has left before being deleted. In the above scenario, you could create a key with 1 use and once it has been scanned, it will be deleted. If the same QR code would be given to multiple people, the host would realize that the key no longer exists and deny entry."),(0,a.kt)("p",null,"To make this transaction extremely lightweight, Keypom allows keys to have ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," function calls whose entire purpose is to decrement the key use counter to prove that the key has been used. These special types of function calls use up a very small amount of gas and are extremely cheap to execute."),(0,a.kt)("h3",{id:"attendees-are-not-required-to-have-wifi-at-the-door"},"Attendees are not required to have wifi at the door."),(0,a.kt)("p",null,"If the ticket is just a private key in the form of a QR code, the attendee only needs to keep a screenshot or the webpage open on their phone to gain entry to the event. In addition, Apple users can add it to their Apple Wallets as well. This eliminates the need for everyone to have wifi as only the hosts that are scanning and making transactions need wifi to admit attendees."),(0,a.kt)("h3",{id:"attendees-can-setup-a-new-near-wallet"},"Attendees can setup a new NEAR wallet"),(0,a.kt)("p",null,"Up until this point, tickets are single-use function calls that execute a ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," method on Keypom. In order for attendees to receive a NEAR wallet after the event for free, the key can be set with 2 uses instead of 1. The first is the ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," method and the second is pre-loaded with a small amount of $NEAR. This $NEAR will cover costs for account creation and sponsor their first couple transactions."),(0,a.kt)("h3",{id:"nft-poap-available-for-attendees"},"NFT POAP available for attendees"),(0,a.kt)("p",null,"In order to send the attendees a POAP, the second key use will need to not only contain a small amount of $NEAR but also mint an NFT to their new or existing NEAR wallet. This can be done by call a minting function on an existing NFT contract that will create an NFT and send it to the account."),(0,a.kt)("h3",{id:"attendance-required-for-poap"},"Attendance required for POAP"),(0,a.kt)("p",null,"Currently, anyone with a ticket could manually claim the key (sign transactions) using the Keypom SDK. This means that people could first claim the ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," case and then claim the key again to receive the NFT without physically showing up."),(0,a.kt)("p",null,"To solve this, the first key use can be protected with a ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/password-protect"},"password")," that only the host knows. This password will be provided when the QR code is scanned. By password protected the uses, the only way to receive the NFT even if you have the ticket, is to be physically scanned by the host."),(0,a.kt)("h2",{id:"keypom-solution"},"Keypom Solution"),(0,a.kt)("p",null,"From above, the drop must have the following properties to function as intended:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops"},"Function Call drop")," must be used and configured so that each key has 2 uses."),(0,a.kt)("li",{parentName:"ul"},"The first key use is password protected and ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," (for when the host scans attendees into the event). "),(0,a.kt)("li",{parentName:"ul"},"The second key use will have a small amount of $NEAR to cover account creation costs and sponsor the first few transactions."),(0,a.kt)("li",{parentName:"ul"},"The second key use will also call ",(0,a.kt)("inlineCode",{parentName:"li"},"nft_mint")," on an NFT contract which will send the new or existing account a POAP.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The first key use being ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," will allow for a lightweight transaction on-chain to reflect the key use decrement without needing to transfer any $NEAR to anyone or create any accounts.")),(0,a.kt)("p",null,"A flow chart of this process can be seen below."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:n(4337).default,width:"65%",height:"65%",alt:"ticketing"})),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this section, you learned the solutions that would help meet the required features outlined in the introduction. These included using an access key as a ticket to remove the need for attendees to have both a wallet and an internet connection at the door. You also saw how using a multi-use function call drop could allow you to add a Proof-of-Attendance NFT to gift attendees who show up to your event."),(0,a.kt)("p",null,"In the next section, you'll be taking the Keypom drop architecture you just created and using it to create the drop."))}h.isMDXComponent=!0},4337:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/ticketing-bac98521da76bcd95b8b36ae2479de9c.png"}}]);