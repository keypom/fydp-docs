"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[459],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53205:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_label:"Introduction to Keypom",sidebar_position:1},o="Introduction to Keypom",i={unversionedId:"Concepts/KeypomProtocol/overview",id:"version-2.0/Concepts/KeypomProtocol/overview",title:"Introduction to Keypom",description:"To view our debut talk at NEARCON 2022, click here.",source:"@site/versioned_docs/version-2.0/Concepts/KeypomProtocol/overview.md",sourceDirName:"Concepts/KeypomProtocol",slug:"/Concepts/KeypomProtocol/overview",permalink:"/docs/2.0/Concepts/KeypomProtocol/overview",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/KeypomProtocol/overview.md",tags:[],version:"2.0",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction to Keypom",sidebar_position:1},sidebar:"Concepts",previous:{title:"Linkdrop Basics",permalink:"/docs/2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics"},next:{title:"Overview",permalink:"/docs/2.0/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/introduction"}},p={},s=[{value:"Problem",id:"problem",level:2},{value:"Comparable Solutions",id:"comparable-solutions",level:2}],m={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-keypom"},"Introduction to Keypom"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To view our debut talk at NEARCON 2022, click ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=J-BOnfhHV50"},"here"),".")),(0,r.kt)("p",null,"Keypom is an access key factory created as a result of 3 common problems that arose in the ecosystem."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"People want a ",(0,r.kt)("em",{parentName:"li"},"cheap, customizable, and unique")," onboarding experience for users."),(0,r.kt)("li",{parentName:"ol"},"Companies don't want to expose ",(0,r.kt)("strong",{parentName:"li"},"full access keys")," in their backend servers."),(0,r.kt)("li",{parentName:"ol"},"dApps want a ",(0,r.kt)("em",{parentName:"li"},"smooth UX")," with zero barrier to entry onboarding.")),(0,r.kt)("p",null,"The contract was initially created as a way to handle the 1 $NEAR minimum deposit required for creating linkdrops using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near/near-linkdrop/blob/f24f2608e1558db773f2408a28849d330abb3881/src/lib.rs#L18"},"regular linkdrop contract"),". "),(0,r.kt)("p",null,"If users wanted to create linkdrops, they needed to attach a ",(0,r.kt)("strong",{parentName:"p"},"minimum")," of 1 $NEAR. This made it costly and unscalable for projects that wanted to mass onboard onto NEAR. Keypom, on the other hand, has been highly optimized to allow for the lowest possible costs."),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"Blockchain technology comes with many benefits such as sovereign ownership, digital rights, privacy, freedom,\npeer to peer coordination and much more. The problem with this technology, however, is that there is an extremely\nhigh barrier to entry for an everyday individual. None of it matters if nobody can onboard."),(0,r.kt)("p",null,"It\u2019s confusing to create and fund a crypto wallet. People are unfamiliar with the process, technical jargon,\nand the general flow. NEAR\u2019s account model is powerful, but extremely underutilized because it\u2019s complex for\ndevelopers to take full advantage of. Keypom wraps this up in a single API call."),(0,r.kt)("p",null,"With NEAR\u2019s goal of onboarding 1 billion users to Web3, there needs to be a solution to this high barrier to\nentry for developers building on NEAR and users onboarding to their apps and the NEAR ecosystem."),(0,r.kt)("p",null,"Below is a table outlining the minimum costs to onboard a new user onto NEAR with a named account."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"1 Account"),(0,r.kt)("th",{parentName:"tr",align:null},"1,000 Accounts"),(0,r.kt)("th",{parentName:"tr",align:null},"1,000,000 Accounts"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Traditional Linkdrop"),(0,r.kt)("td",{parentName:"tr",align:null},"~1 NEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"~1,003 NEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"~1,002,840 NEAR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keypom"),(0,r.kt)("td",{parentName:"tr",align:null},"~0.0035 NEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"~3.5 NEAR"),(0,r.kt)("td",{parentName:"tr",align:null},"~3,500 NEAR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"~99.65% Cheaper"),(0,r.kt)("td",{parentName:"tr",align:null},"~99.65% Cheaper"),(0,r.kt)("td",{parentName:"tr",align:null},"~99.65% Cheaper")))),(0,r.kt)("p",null,"Keypom allows anyone to create highly customizable onboarding experiences for their users. These experiences\ncan be both for new, or existing users. If someone already has a wallet, they can still use a Keypom link to\nexperience an app, and then transfer the assets later."),(0,r.kt)("h2",{id:"comparable-solutions"},"Comparable Solutions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Keypom")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"NEAR Drop")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Satori")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NEAR Drop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FT Drop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NFT Drop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Function Call Drop"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Embeddable in Dapps"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wallet Selector Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Fee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Maybe?"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No Backend / 3rd Party"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Campaigns"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Multi-Step e.g. Tickets click > scan > claim"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password Protected Drops"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timed Drops e.g. recurring payments"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Names e.g. user.myapp.near"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h1",{id:"our-solution"},"Our Solution"),(0,r.kt)("p",null,"Keypom allows for the creation of highly customizable access keys. These keys can be thought of as having their\nown ",(0,r.kt)("em",{parentName:"p"},"smart contracts"),". Each access key derives from what's known as a ",(0,r.kt)("em",{parentName:"p"},"drop"),". These drops outline the different\nfunctionalities and behaviors the key will have. A drop can be thought of as a bucket that access keys belong to.\nYou can create many different buckets and fill them each with their own keys. Each key will act in accordance to the\ndrop, or bucket, it belongs to."),(0,r.kt)("p",null,"A drop can be one of four different types:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Simple drop."),(0,r.kt)("li",{parentName:"ol"},"Non Fungible Token drop."),(0,r.kt)("li",{parentName:"ol"},"Fungible Token drop."),(0,r.kt)("li",{parentName:"ol"},"Function Call drop.")))}u.isMDXComponent=!0}}]);