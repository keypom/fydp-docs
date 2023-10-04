"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[7094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_label:"Introduction"},i="Introduction",l={unversionedId:"Tutorials/Advanced/daos/introduction",id:"Tutorials/Advanced/daos/introduction",title:"Introduction",description:"In this tutorial, you'll learn how to create a seamless DAO registration experience that allows you to onboard anyone directly into your DAO with the click of a link!",source:"@site/docs/Tutorials/Advanced/daos/introduction.md",sourceDirName:"Tutorials/Advanced/daos",slug:"/Tutorials/Advanced/daos/introduction",permalink:"/docs/Tutorials/Advanced/daos/introduction",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/docs/Tutorials/Advanced/daos/introduction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction"},sidebar:"Tutorials",previous:{title:"\ud83d\ude80 BOS Version",permalink:"/docs/Tutorials/Advanced/ticketing/bos-tool"},next:{title:"Solution Architecture",permalink:"/docs/Tutorials/Advanced/daos/architecture"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Success Criteria",id:"success-criteria",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating your Project",id:"creating-your-project",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, you'll learn how to create a seamless DAO registration experience that allows you to onboard anyone directly into your DAO with the click of a link!"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"DAOs are a popular topic in crypto and offer powerful on-chain governance features. They work very well in most cases but there are 2 key issues that Keypom will solve."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There is a ",(0,r.kt)("strong",{parentName:"li"},"high barrier to entry")," for an everyday user who might not have a crypto wallet."),(0,r.kt)("li",{parentName:"ol"},"Being enrolled into the DAO is a ",(0,r.kt)("strong",{parentName:"li"},"2 step process"),". First, a proposal must be made and then it needs to be approved by an existing quorum of voting members.")),(0,r.kt)("p",null,"Both of these act as bottlenecks in attracting and onboarding new members."),(0,r.kt)("p",null,"This is where Keypom can help. Using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/Concepts/KeypomProtocol/GithubReadme/TypesOfDrops/fc-drops"},"function call drop"),", Keypom can automatically register users into your DAO ",(0,r.kt)("strong",{parentName:"p"},"as part of the wallet creation process"),". Not only does this eliminate the need for a wallet, but it also bypasses the 2 step approval process."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")," If someone has a wallet already, they can skip account creation and register their existing wallet into the DAO.")),(0,r.kt)("h2",{id:"success-criteria"},"Success Criteria"),(0,r.kt)("p",null,"This tutorial will cover the following requirements to achieve a seamless onboarding experience for new users."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Members don't need an existing wallet to join the DAO. "),(0,r.kt)("li",{parentName:"ul"},"The invitations do not require a 2 step process where a council votes and reaches a quorum for every single registration."),(0,r.kt)("li",{parentName:"ul"},"The drop cannot be used for malicious purposes.")),(0,r.kt)("p",null,"With these requirements met, you will be able to seamlessly and automatically register new members into your DAO while maintaining the integrity of your DAO's members."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial will have members registered into the MoonDAO, a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/near-daos/sputnik-dao-contract"},"Sputnik V2")," compatible DAO. "),(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:n(3493).default,width:"80%",height:"80%",alt:"ticketing",class:"rounded-corners"}))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For the this tutorial series, you can choose to follow along on your own machine. To do so, you must have the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js/tree/main/packages/core#installation"},"Keypom Core SDK"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NOTE")," If you want to reference the finished tutorial code, it can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-docs-examples/tree/main/advanced-tutorials/dao-onboarding"},"here"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-your-project"},"Creating your Project"),(0,r.kt)("p",null,"In this section, you'll install the skeleton project and get familiar with the codebase."),(0,r.kt)("p",null,"First, you'll want to clone the repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/keypom/keypom-docs-examples.git && cd advanced-tutorials\n")),(0,r.kt)("p",null,"Second, install all the dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn install && cd advanced-tutorials/dao-onboarding-skeleton && yarn\n")),(0,r.kt)("p",null,"At this point, all the dependencies should be installed and you should be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"advanced-tutorials/dao-onboarding-skeleton")," folder. Here you'll find the following files required to build out your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/dao-onboarding-skeleton\n\u2514\u2500\u2500 configurations.js\n\u2514\u2500\u2500 createDaoOnboarding.js\n\u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 view-roles.js\n")),(0,r.kt)("p",null,"With this setup complete, you are ready to begin building the onboarding experience, starting by expanding upon the success criteria and breaking down the problem further."))}d.isMDXComponent=!0},3493:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=n.p+"assets/images/moondaohomepage-325b8e2b4ec80bb0da34a5d6ed029054.png"}}]);