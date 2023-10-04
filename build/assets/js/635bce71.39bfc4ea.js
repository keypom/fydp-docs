"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[9269],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},9649:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=o(87462),n=(o(67294),o(3905));const r={sidebar_label:"Designing the DAO Bot"},i="The DAO Bot",l={unversionedId:"Tutorials/Advanced/daos/daobot",id:"version-2.0/Tutorials/Advanced/daos/daobot",title:"The DAO Bot",description:"Introduction",source:"@site/versioned_docs/version-2.0/Tutorials/Advanced/daos/daobot.md",sourceDirName:"Tutorials/Advanced/daos",slug:"/Tutorials/Advanced/daos/daobot",permalink:"/docs/2.0/Tutorials/Advanced/daos/daobot",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Advanced/daos/daobot.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Designing the DAO Bot"},sidebar:"Tutorials",previous:{title:"Creating the Drop",permalink:"/docs/2.0/Tutorials/Advanced/daos/drop"},next:{title:"DAO Bot Security Concerns",permalink:"/docs/2.0/Tutorials/Advanced/daos/security"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Designing the DAO Bot",id:"designing-the-dao-bot",level:2},{value:"Accessing the Code",id:"accessing-the-code",level:3},{value:"Adding the Proposal",id:"adding-the-proposal",level:2},{value:"Approving the Proposal",id:"approving-the-proposal",level:2},{value:"Final Code",id:"final-code",level:2},{value:"Security Concerns",id:"security-concerns",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-dao-bot"},"The DAO Bot"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"In this section you'll be creating the middleman DAO bot contract in order to securely facilitate auto-registration into your DAO. This bot will be tailored according to the functionality and specifications found in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/daos/architecture#keypom-solution"},"Solution Architecture"),"."),(0,n.kt)("h2",{id:"designing-the-dao-bot"},"Designing the DAO Bot"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/daos/architecture#dao-bot-solution"},"Recall")," that the DAO bot needs accomplish the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure all incoming calls are made by Keypom and have a sufficient attached deposit. "),(0,n.kt)("li",{parentName:"ol"},"Take in a proposal object for adding a new member to a DAO (which includes the account ID of the new member)."),(0,n.kt)("li",{parentName:"ol"},"Take in a desired DAO contract and call ",(0,n.kt)("inlineCode",{parentName:"li"},"add_proposal")," with the proposal object."),(0,n.kt)("li",{parentName:"ol"},"Parse the return value which should be the proposal ID and then call ",(0,n.kt)("inlineCode",{parentName:"li"},"act_proposal")," to automatically register the new member into the DAO.")),(0,n.kt)("p",null,"With this in mind, the aim of this tutorial will be to write a Rust smart contract that will match the above properties. This process can be broken down into two stages:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Adding the proposal"),(0,n.kt)("li",{parentName:"ol"},"Approving the proposal")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you wish to simply use the DAO bot without modifying it, you can move ahead to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/daos/final"},"Final Product")," page.")),(0,n.kt)("h3",{id:"accessing-the-code"},"Accessing the Code"),(0,n.kt)("p",null,"For this section of the tutorial, you will need to clone a separate ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/keypom/dao-bot/tree/main"},"DAO bot repository"),". From there you can navigate to the skeleton code folder found below. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/keypom/dao-bot.git && cd src-skeleton\n")),(0,n.kt)("p",null,"This is the skeleton code and will allow you to follow along as the DAO bot is built out. If you wish to examine the completed version, that can be found in the ",(0,n.kt)("inlineCode",{parentName:"p"},"src")," folder."),(0,n.kt)("p",null,"In the expandable section below, you can see the skeleton code from the file ",(0,n.kt)("inlineCode",{parentName:"p"},"lib.rs"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"DAO Bot Skeleton Code"),(0,n.kt)("p",null,(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/keypom/dao-bot/blob/2c3a7bac8b18e1134483f0736e2ca9e2152f8509/src-skeleton/lib.rs#L1-L123\n")))),(0,n.kt)("p",null,"You may notice a few structs and enums predefined; these are simply present to match the structures from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract/tree/main/sputnikdao2/src"},"SputnikV2 contract")," and allow the contract to work with proposal inputs. "),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"adding-the-proposal"},"Adding the Proposal"),(0,n.kt)("p",null,"Since the middleman contracts needs to call ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," on the DAO contract, this requires the use of cross-contract calls. For a refresher on making cross contract calls, see ",(0,n.kt)("a",{parentName:"p",href:"https://docs.near.org/develop/contracts/crosscontract#snippet-sending-information"},"NEAR docs"),"."),(0,n.kt)("p",null,"The first thing that needs to be checked is that the attached deposit is enough to cover the add proposal cost and Keypom is the predecessor to the call. Once that's done, the DAO bot can make a cross contract call to the dao contract and call ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal"),", passing in the proposal object."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/keypom/dao-bot/blob/0d8abdb2151d224763aa7808cda88d58eb31e495/src-v1/lib.rs#L103-L120\n")),(0,n.kt)("p",null,"When the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," function finishes executing, the DAO bot can then invoke a callback method to parse the returned proposal ID and call ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal"),"."),(0,n.kt)("h2",{id:"approving-the-proposal"},"Approving the Proposal"),(0,n.kt)("p",null,"In the callback after the proposal has been added, the DAO bot will first check the success of the call and then parse the return value for the proposal ID."),(0,n.kt)("p",null,"Using the proposal ID, the DAO bot can then make another cross contract call to the DAO contract and call ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," to approve the proposal."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/keypom/dao-bot/blob/0d8abdb2151d224763aa7808cda88d58eb31e495/src-v1/lib.rs#L123-L143\n")),(0,n.kt)("admonition",{title:"Recall",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The DAO bot has been added to the DAO in its own role. This means that when the DAO bot votes to approve, it automatically reaches a quorum and passes the proposal")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"final-code"},"Final Code"),(0,n.kt)("p",null,"Putting everything together, the final code for the DAO bot smart contract should be:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/keypom/dao-bot/blob/0d8abdb2151d224763aa7808cda88d58eb31e495/src-v1/lib.rs#L1-L153\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"security-concerns"},"Security Concerns"),(0,n.kt)("p",null,"So far, you've seen both the FunctionCall drop and middleman DAO bot contract be created. You've seen how they communicate with each other and how the DAO bot can verify that only Keypom can interact with it. However there is a glaring security vulnerability."),(0,n.kt)("p",null,"What happens if somebody else creates an identical FunctionCall drop to manipulate your DAO through the DAO bot against your wishes? How can the DAO bot be upgraded further to put control of your DAO back into your hands?"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this tutorial, you've created the all new DAO bot on function call at a time. This started with verifying the calls were coming from Keypom with a sufficient attached deposit. Then, this was followed up by ",(0,n.kt)("a",{parentName:"p",href:"#adding-the-proposal"},"calling ",(0,n.kt)("inlineCode",{parentName:"a"},"add_proposal"))," using the received proposal and DAO contract. Finally, you parsed the return value and ",(0,n.kt)("a",{parentName:"p",href:"#approving-the-proposal"},"called ",(0,n.kt)("inlineCode",{parentName:"a"},"act_proposal")," using the ",(0,n.kt)("inlineCode",{parentName:"a"},"proposal_id")),"."),(0,n.kt)("p",null,"As hinted in the final ",(0,n.kt)("a",{parentName:"p",href:"#security-concerns"},"security section"),", the next tutorial will involve finding the DAO bot's vulnerabilities and further improving it."))}h.isMDXComponent=!0}}]);