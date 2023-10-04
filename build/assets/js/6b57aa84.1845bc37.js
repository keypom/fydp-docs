"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[3858],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?r.createElement(m,s(s({ref:t},p),{},{components:o})):r.createElement(m,s({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1618:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_label:"Costs",sidebar_position:4},s="Costs",i={unversionedId:"Concepts/KeypomProtocol/GithubReadme/costs",id:"version-2.0/Concepts/KeypomProtocol/GithubReadme/costs",title:"Costs",description:"It is important to note that the Keypom contract is 100% FEE FREE and will remain that way for the foreseeable future. This contract is a public good and is meant to inspire change in the NEAR ecosystem.",source:"@site/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/costs.md",sourceDirName:"Concepts/KeypomProtocol/GithubReadme",slug:"/Concepts/KeypomProtocol/GithubReadme/costs",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/costs",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/costs.md",tags:[],version:"2.0",sidebarPosition:4,frontMatter:{sidebar_label:"Costs",sidebar_position:4},sidebar:"Concepts",previous:{title:"Password Protected Keys",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/password-protect"},next:{title:"Querying Information from Keypom",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/querying"}},l={},c=[{value:"Per Drop",id:"per-drop",level:2},{value:"Per Key",id:"per-key",level:2},{value:"Key Costs for Simple Drop",id:"key-costs-for-simple-drop",level:3},{value:"Additional Costs for NFT Drops",id:"additional-costs-for-nft-drops",level:3},{value:"Additional Costs for FT Drops",id:"additional-costs-for-ft-drops",level:3},{value:"Additional Costs for FC Drops",id:"additional-costs-for-fc-drops",level:3},{value:"Deleting Keys and Drops",id:"deleting-keys-and-drops",level:2},{value:"Automatic Refunds When Keys are Used",id:"automatic-refunds-when-keys-are-used",level:2},{value:"Account Balances for Smooth UX",id:"account-balances-for-smooth-ux",level:2},{value:"Built With",id:"built-with",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"costs"},"Costs"),(0,n.kt)("p",null,"It is important to note that the Keypom contract is 100% ",(0,n.kt)("strong",{parentName:"p"},"FEE FREE")," and will remain that way for the ",(0,n.kt)("em",{parentName:"p"},"foreseeable future"),". This contract is a public good and is meant to inspire change in the NEAR ecosystem."),(0,n.kt)("p",null,"With that being said, there are several mandatory costs that must be taken into account when using Keypom. These costs are broken down into two categories: per key and per drop."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," Creating an empty drop and then adding 100 keys in separate calls will incur the same cost as creating a drop with 100 keys in the same call.")),(0,n.kt)("h2",{id:"per-drop"},"Per Drop"),(0,n.kt)("p",null,"When creating an empty drop, there is only one cost to keep in mind regardless of the drop type:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Storage cost (",(0,n.kt)("strong",{parentName:"li"},"~0.006 $NEAR")," for simple drops)")),(0,n.kt)("h2",{id:"per-key"},"Per Key"),(0,n.kt)("p",null,"Whenever keys are added to a drop (either when the drop is first created or at a later date), the costs are outlined below."),(0,n.kt)("h3",{id:"key-costs-for-simple-drop"},"Key Costs for Simple Drop"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"$NEAR sent whenever the key is used (can be 0)."),(0,n.kt)("li",{parentName:"ul"},"Access key allowance (",(0,n.kt)("strong",{parentName:"li"},"~0.0187 $NEAR per use"),")."),(0,n.kt)("li",{parentName:"ul"},"Storage for creating access key (",(0,n.kt)("strong",{parentName:"li"},"0.001 $NEAR"),")."),(0,n.kt)("li",{parentName:"ul"},"Storage cost (",(0,n.kt)("strong",{parentName:"li"},"~0.006 $NEAR")," for simple drops)")),(0,n.kt)("h3",{id:"additional-costs-for-nft-drops"},"Additional Costs for NFT Drops"),(0,n.kt)("p",null,"Since keys aren't registered for use until ",(0,n.kt)("strong",{parentName:"p"},"after")," the contract has received the NFT, we don't know how much storage the token IDs will use on the contract. To combat this, the Keypom contract will automatically measure the storage used up for storing each token ID in the ",(0,n.kt)("inlineCode",{parentName:"p"},"nft_on_transfer")," function and that $NEAR will be taken from the funder's balance."),(0,n.kt)("h3",{id:"additional-costs-for-ft-drops"},"Additional Costs for FT Drops"),(0,n.kt)("p",null,"Since accounts claiming FTs may or may not be registered on the Fungible Token contract, Keypom will automatically try to register ",(0,n.kt)("strong",{parentName:"p"},"all")," accounts. This means that the drop creators must front the cost of registering users depending on the ",(0,n.kt)("inlineCode",{parentName:"p"},"storage_balance_bounds")," returned from the FT contract. This applies to every use for every key."),(0,n.kt)("p",null,"In addition, Keypom must be registered on the FT contract. If you create a FT drop and are the first person to ever do so for a specific FT contract on Keypom, Keypom will be automatically registered when the drop is created. This is a one time cost and once it is done, no other account will need to register Keypom for that specific FT contract."),(0,n.kt)("h3",{id:"additional-costs-for-fc-drops"},"Additional Costs for FC Drops"),(0,n.kt)("p",null,"Drop creators have a ton of customization available to them when creation Function Call drops. A cost that they might incur is the attached deposit being sent alongside the function call. Keypom will charge creators for all the attached deposits they specify."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE:")," The storage costs are dynamically calculated and will vary depending on the information you store on-chain.")),(0,n.kt)("h2",{id:"deleting-keys-and-drops"},"Deleting Keys and Drops"),(0,n.kt)("p",null,"Creators have the ability to delete drops and keys at any time. In this case, ",(0,n.kt)("strong",{parentName:"p"},"all")," the initial costs they incurred for the remaining keys will be refunded to them (minus Gas fees of course)."),(0,n.kt)("h2",{id:"automatic-refunds-when-keys-are-used"},"Automatic Refunds When Keys are Used"),(0,n.kt)("p",null,"One way that Keypom optimizes the fee structure is by performing automatic refunds for some of the initial costs that creators pay for when keys are used. All the storage that is freed along with any unused allowance is automatically sent back to the creator whenever a key is used. This model drastically reduces the overall costs of creating drops and creates incentives for the keys to be used. "),(0,n.kt)("h2",{id:"account-balances-for-smooth-ux"},"Account Balances for Smooth UX"),(0,n.kt)("p",null,"In order to make the UX of using Keypom seamless, the contract introduces a debiting account model. All costs and refunds go through your account's balance which is stored on the contract. This balance can be topped up or withdrawn at any moment using the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_to_balance()"),"  and ",(0,n.kt)("inlineCode",{parentName:"p"},"withdraw_from_balance()")," functions."),(0,n.kt)("p",null,"This account balance is not ",(0,n.kt)("em",{parentName:"p"},"required"),", however. You can create a drop by attaching a deposit to the call. Keep in mind that this will create an account balance for you behind the scenes, however."),(0,n.kt)("h2",{id:"built-with"},"Built With"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/near/near-sdk-rs"},"near-sdk-rs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/near/near-api-js"},"near-api-js"))))}u.isMDXComponent=!0}}]);