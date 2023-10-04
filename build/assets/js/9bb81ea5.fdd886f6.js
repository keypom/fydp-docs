"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Querying Information from Keypom",sidebar_position:7},a="Query Information From Keypom",p={unversionedId:"Concepts/KeypomProtocol/GithubReadme/querying",id:"version-2.0/Concepts/KeypomProtocol/GithubReadme/querying",title:"Query Information From Keypom",description:"Keypom allows users to query a suite of different information from the contract. This information can be broken down into two separate objects that are returned. JsonDrops and JsonKeys.",source:"@site/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/querying.md",sourceDirName:"Concepts/KeypomProtocol/GithubReadme",slug:"/Concepts/KeypomProtocol/GithubReadme/querying",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/querying",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/KeypomProtocol/GithubReadme/querying.md",tags:[],version:"2.0",sidebarPosition:7,frontMatter:{sidebar_label:"Querying Information from Keypom",sidebar_position:7},sidebar:"Concepts",previous:{title:"Costs",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/costs"},next:{title:"Keypom Tests",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/testing"}},s={},l=[{value:"Key Specific",id:"key-specific",level:2},{value:"Drop Specific",id:"drop-specific",level:2},{value:"Utility",id:"utility",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-information-from-keypom"},"Query Information From Keypom"),(0,r.kt)("p",null,"Keypom allows users to query a suite of different information from the contract. This information can be broken down into two separate objects that are returned. JsonDrops and JsonKeys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rs"},"pub struct JsonDrop {\n    // Drop ID for this drop\n    pub drop_id: DropId,\n    // owner of this specific drop\n    pub owner_id: AccountId,\n    // Balance for all keys of this drop. Can be 0 if specified.\n    pub deposit_per_use: U128,\n    // Every drop must have a type\n    pub drop_type: JsonDropType,\n    // The drop as a whole can have a config as well\n    pub config: Option<DropConfig>,\n    // Metadata for the drop\n    pub metadata: Option<DropMetadata>,\n    // How many claims\n    pub registered_uses: u64,\n    // Ensure this drop can only be used when the function has the required gas to attach\n    pub required_gas: Gas,\n    // Keep track of the next nonce to give out to a key\n    pub next_key_id: u64,\n}\n\npub struct JsonKeyInfo {\n    // Drop ID for the specific drop\n    pub drop_id: DropId,\n    pub pk: PublicKey,\n    // How many uses this key has left. Once 0 is reached, the key is deleted\n    pub remaining_uses: u64,\n    // When was the last time the key was used\n    pub last_used: u64,\n    // How much allowance does the key have left. When the key is deleted, this is refunded to the funder's balance.\n    pub allowance: u128,\n    // Nonce for the current key.\n    pub key_id: u64,\n}\n")),(0,r.kt)("h2",{id:"key-specific"},"Key Specific"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_key_balance(key: PublicKey)")),": Returns the $NEAR that will be sent to the claiming account when the key is used "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_key_total_supply()")),": Returns the total number of keys currently on the contract"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_keys(from_index: Option<U128>, limit: Option<u64>)")),": Paginate through all keys on the contract and return a vector of key info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_key_information(key: PublicKey)")),": Return the key info for a specific key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_key_information_batch(keys: Vec<PublicKey>)")),": Return a vector of key info for a set of public keys")),(0,r.kt)("h2",{id:"drop-specific"},"Drop Specific"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_drop_information(drop_id: Option<DropId>, key: Option<PublicKey>)")),": Return the drop info for a specific drop. This can be queried for by either passing in the drop ID or a public key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_key_supply_for_drop(drop_id: DropId)")),": Return the total number of keys for a specific drop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_keys_for_drop(drop_id: DropId, from_index: Option<U128>, limit: Option<u64>)")),": Paginate through all keys for a specific drop and return a vector of key info"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_drop_supply_for_owner(account_id: AccountId)")),": Return the total number of drops for a specific account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_drops_for_owner(account_id: AccountId, from_index: Option<U128>, limit: Option<u64>)")),": Paginate through all drops for a specific account and return a vector of drop info "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_nft_supply_for_drop(drop_id: DropId)")),": Get the total number of NFTs registered for a given drop."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_nft_token_ids_for_drop(drop_id: DropId, from_index: Option<U128>, limit: Option<u64>)")),": Paginate through token IDs for a given drop"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_next_drop_id()")),": Get the next drop ID that will be used for a new drop")),(0,r.kt)("h3",{id:"utility"},"Utility"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_root_account()")),": Get the global root account that all created accounts with be based off."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"get_user_balance()")),": Get the current user balance for a specific account.")))}d.isMDXComponent=!0}}]);