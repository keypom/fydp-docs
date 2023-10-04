"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5139],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},25411:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={sidebar_label:"Solution Architecture"},i="Solution Architecture",l={unversionedId:"Tutorials/Advanced/daos/architecture",id:"version-2.0/Tutorials/Advanced/daos/architecture",title:"Solution Architecture",description:"In this section, you'll break down the requirements for the onboarding experience in order to create a solution architecture. This means translating the features from the introduction into tangible goals for the specific Keypom drop and its configurations.",source:"@site/versioned_docs/version-2.0/Tutorials/Advanced/daos/architecture.md",sourceDirName:"Tutorials/Advanced/daos",slug:"/Tutorials/Advanced/daos/architecture",permalink:"/docs/2.0/Tutorials/Advanced/daos/architecture",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Advanced/daos/architecture.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Solution Architecture"},sidebar:"Tutorials",previous:{title:"Introduction",permalink:"/docs/2.0/Tutorials/Advanced/daos/introduction"},next:{title:"Creating the Drop",permalink:"/docs/2.0/Tutorials/Advanced/daos/drop"}},s={},p=[{value:"Seamless Wallet Creation",id:"seamless-wallet-creation",level:2},{value:"Single Step Registration",id:"single-step-registration",level:2},{value:"Optimizing the Approach",id:"optimizing-the-approach",level:3},{value:"Middleman Solution",id:"middleman-solution",level:3},{value:"Full Solution Architecture",id:"full-solution-architecture",level:2},{value:"Keypom Solution",id:"keypom-solution",level:3},{value:"DAO Bot Solution",id:"dao-bot-solution",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"solution-architecture"},"Solution Architecture"),(0,n.kt)("p",null,"In this section, you'll break down the requirements for the onboarding experience in order to create a solution architecture. This means translating the features from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.0/Tutorials/Advanced/daos/introduction"},"introduction")," into tangible goals for the specific Keypom drop and its configurations."),(0,n.kt)("p",null,"The two major requirements for the auto-registration experience are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Members don't need an existing wallet to join the DAO. "),(0,n.kt)("li",{parentName:"ul"},"The invitations do not require a 2 step process where a council votes and reaches a quorum for every registration.")),(0,n.kt)("h2",{id:"seamless-wallet-creation"},"Seamless Wallet Creation"),(0,n.kt)("p",null,"Since each user will be given a Keypom linkdrop, the wallet creation is handled by whatever claim platform they choose (MyNEARWallet, Meteor, FastAuth etc.). This means that there is no funding required from the user's perspective, eliminating KYC, credit cards, exchanges and other barriers."),(0,n.kt)("p",null,"The end user experience is to simply enter an account name and secure the wallet with whatever method they choose (iOS app, seedphrase, biometrics etc.)."),(0,n.kt)("h2",{id:"single-step-registration"},"Single Step Registration"),(0,n.kt)("p",null,"DAOs require a 2 step process for members to join. The first step is to create a proposal for adding them to the DAO and the second is to vote on that proposal and reach a quorum. This means that the DAO must constantly monitor for incoming proposals, leading to long wait times for new users."),(0,n.kt)("p",null,"If DAOs want to mass register members, this process is very inefficient. From a technical stand-point, what happens is:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"An ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/near-daos/sputnik-dao-contract#proposal-types"},(0,n.kt)("inlineCode",{parentName:"a"},"AddMemberToRole"))," proposal is created."),(0,n.kt)("li",{parentName:"ol"},"A quorum of voting members, such as the DAO's council, must be reached to approve this proposal.")),(0,n.kt)("h3",{id:"optimizing-the-approach"},"Optimizing the Approach"),(0,n.kt)("p",null,"In order for this process to be streamlined and completed automatically, Keypom must be able to first add a proposal and then ",(0,n.kt)("strong",{parentName:"p"},"also")," approve it as ",(0,n.kt)("strong",{parentName:"p"},"part of the linkdrop claiming process"),"."),(0,n.kt)("p",null,"First, Keypom must be given a role that is capable of creating and approving proposals for adding new members."),(0,n.kt)("p",null,"Second, Keypom must be given a role that automatically reaches quorum whenever it votes. For this tutorial, that role will only have 1 member so that whenever Keypom votes to accept the ",(0,n.kt)("inlineCode",{parentName:"p"},"AddMemberToRole")," proposal, 100% of the members will have voted and it will be automatically accepted."),(0,n.kt)("p",null,"To combine both these features into one step, a FunctionCall drop can be created that first calls ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#add-proposal"},(0,n.kt)("inlineCode",{parentName:"a"},"add_proposal"))," and then ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract#approve-proposal"},(0,n.kt)("inlineCode",{parentName:"a"},"act_proposal"))," to vote on and approve the new member joining the DAO."),(0,n.kt)("p",null,"While this works in theory, unfortunately, the ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," function requires a ",(0,n.kt)("inlineCode",{parentName:"p"},"proposal_id")," that is returned from the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," function. This is an issue for the following reasons: "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"With Keypom FC drops, there is no way to get a return value and use it to call another function."),(0,n.kt)("li",{parentName:"ol"},"SputnikV2 does not support custom ",(0,n.kt)("inlineCode",{parentName:"li"},"proposal_id"),"'s, meaning there is no way to hard code the ",(0,n.kt)("inlineCode",{parentName:"li"},"proposal_id")," or inject the Keypom ",(0,n.kt)("inlineCode",{parentName:"li"},"drop_id")," as the ",(0,n.kt)("inlineCode",{parentName:"li"},"proposal_id")," ahead of time. ")),(0,n.kt)("h3",{id:"middleman-solution"},"Middleman Solution"),(0,n.kt)("p",null,"Up until this point, the general flow for auto registering users is clear. An FC drop must be made that somehow invokes the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," functions one after another. The problem with relying entirely on Keypom is that the return value for ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," must be known and used."),(0,n.kt)("p",null,"This can be fixed by introducing a middleman contract. Rather than calling ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," directly through the FC drop, you can instead call ",(0,n.kt)("strong",{parentName:"p"},"a single function on the middleman contract"),". Once invoked, this middleman contract will then call ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal"),", parse the return value and call ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," in succession."),(0,n.kt)("p",null,"While Keypom is extremely versatile, there are cases where custom behavior will be needed. By introducing a middleman, you can customize exactly what will happen when a key is used."),(0,n.kt)("p",null,"In summary, rather than having the FC drop look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"add_proposal\n    -> DAO Contract\n    -> Returns proposal ID\nact_proposal (I need proposal ID somehow)\n    -> DAO Contract\n")),(0,n.kt)("p",null,"The FC drop will instead do the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Call middleman contract\n    add_proposal\n        -> DAO Contract\n        -> Returns proposal ID\n    Parse return value and get proposal ID\n    act_proposal\n        -> DAO Contract\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"full-solution-architecture"},"Full Solution Architecture"),(0,n.kt)("p",null,"From above, here are the key features that need to be implemented. "),(0,n.kt)("h3",{id:"keypom-solution"},"Keypom Solution"),(0,n.kt)("p",null,"On the Keypom side, an FC drop will be used to call the middleman. This FC drop must:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only call the DAO bot once, to prevent double registration or multiple people registering with the same key."),(0,n.kt)("li",{parentName:"ul"},"Send the DAO bot the ",(0,n.kt)("inlineCode",{parentName:"li"},"AddMemberToRole")," proposal object ",(0,n.kt)("em",{parentName:"li"},"and")," the desired DAO. "),(0,n.kt)("li",{parentName:"ul"},"Attach the wallet address for the account that will be onboarded to the middleman contract when auto-registering them into the DAO. ")),(0,n.kt)("h3",{id:"dao-bot-solution"},"DAO Bot Solution"),(0,n.kt)("p",null,"The middleman contract that relays the add and act proposal functions can be referred to as the DAO bot."),(0,n.kt)("p",null,"Recall that Keypom would need to be in its own special role. This was because Keypom was the ",(0,n.kt)("inlineCode",{parentName:"p"},"predecessor")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"act_proposal")," calls to the DAO contract. Now that the middleman is introduced, Keypom is no longer the predecessor. For this reason, the middleman DAO bot must have the special role instead."),(0,n.kt)("p",null,"The middleman must:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ensure all incoming calls are made by Keypom and have a sufficient attached deposit. "),(0,n.kt)("li",{parentName:"ul"},"Take in a proposal object for adding a new member to a DAO (which includes the account ID of the new member)."),(0,n.kt)("li",{parentName:"ul"},"Take in a desired DAO contract and call ",(0,n.kt)("inlineCode",{parentName:"li"},"add_proposal")," with the proposal object."),(0,n.kt)("li",{parentName:"ul"},"Parse the return value which should be the proposal ID and then call ",(0,n.kt)("inlineCode",{parentName:"li"},"act_proposal")," to automatically register the new member into the DAO.")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this section, you explored and expanded on all the requirements for the auto-registration process. This started with using a Keypom linkdrop to facilitate ",(0,n.kt)("a",{parentName:"p",href:"#seamless-wallet-creation"},"seamless wallet creation"),". Then, the onboarding process was automated and streamlined by introducing a ",(0,n.kt)("a",{parentName:"p",href:"#optimizing-the-approach"},"single-step registration"),". This was done using a FunctionCall drop that would create and approve ",(0,n.kt)("inlineCode",{parentName:"p"},"AddMemberToRole")," proposals as part of the linkdrop claiming process. "),(0,n.kt)("p",null,"However, you also saw the limitations of relying entirely on Keypom; that the ",(0,n.kt)("inlineCode",{parentName:"p"},"add_proposal")," return value must be known and used. You solved this by introducing a ",(0,n.kt)("a",{parentName:"p",href:"#middleman-solution"},"middleman contract")," which would receive function calls from Keypom and execute the auto-registration. "),(0,n.kt)("p",null,"From this analysis, you set ",(0,n.kt)("a",{parentName:"p",href:"#full-solution-architecture"},"concrete goals")," for the Keypom FunctionCall drop and the middleman DAO bot contract. With these goals in mind, you can start to build out this solution!"))}u.isMDXComponent=!0}}]);