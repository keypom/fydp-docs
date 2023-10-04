"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Introduction"},i="Introduction",l={unversionedId:"Tutorials/Advanced/ticketing/introduction",id:"version-2.0/Tutorials/Advanced/ticketing/introduction",title:"Introduction",description:"In this tutorial, you'll learn how to create a seamless ticketing experience that is cheaper than alternative methods and can also handle very large audiences.",source:"@site/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/introduction.md",sourceDirName:"Tutorials/Advanced/ticketing",slug:"/Tutorials/Advanced/ticketing/introduction",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/introduction",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Tutorials/Advanced/ticketing/introduction.md",tags:[],version:"2.0",frontMatter:{sidebar_label:"Introduction"},sidebar:"Tutorials",previous:{title:"Function Call Drop",permalink:"/docs/2.0/Tutorials/Basics/fc-drops"},next:{title:"Solution Architecture",permalink:"/docs/2.0/Tutorials/Advanced/ticketing/architecture"}},s={},c=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating your Project",id:"creating-your-project",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this tutorial, you'll learn how to create a seamless ticketing experience that is cheaper than alternative methods and can also handle very large audiences."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The most popular ticketing solutions in Web3 utilize NFT technologies. This approach, however, requires attendees to own a crypto wallet and sign transactions. This is a massive barrier to entry, particularly for users that are new to Web3. "),(0,r.kt)("p",null,"Keypom aims to solve these problems by empowering you to create a seamless ticketing system that has the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Users are not required to have a wallet to enter the event."),(0,r.kt)("li",{parentName:"ul"},"Each ticket is unique and can only be used by one person."),(0,r.kt)("li",{parentName:"ul"},"Attendees are not required to have wifi to gain entry to the event."),(0,r.kt)("li",{parentName:"ul"},"Attendees that did not have a NEAR wallet can get one for free."),(0,r.kt)("li",{parentName:"ul"},"Attendees can choose to receive an NFT proving their attendance at the event. This is commonly known as a ",(0,r.kt)("a",{parentName:"li",href:"https://academy.binance.com/en/glossary/proof-of-attendance-protocol-poap"},"POAP"),". "),(0,r.kt)("li",{parentName:"ul"},"The post-attendance gifts can ",(0,r.kt)("strong",{parentName:"li"},"only")," be given to people that physically showed up to the event. You can't receive the NFT if you didn't show up.")),(0,r.kt)("p",null,"These features open the door to an entirely new class of non-technical attendees and create a smoother experience compared to existing NFT ticketing solutions."),(0,r.kt)("p",null,"In this tutorial, you'll be creating a ticketing system with those features, and incorporating a POAP to further reward your community members that come out to your events. "),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The NFT POAP is optional to include as the event organizer. You can choose to keep it, or replace it with a different attendance gift such as Fungible Tokens.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For the this tutorial, you can choose to run the scripts on your own machine. To do so, you must have the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm"},"Node JS"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.near.org/tools/near-api-js/quick-reference#install"},"NEAR-API-JS"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/keypom/keypom-js#getting-started"},"Keypom JS SDK"))),(0,r.kt)("p",null,"If you want to reference the finished code, that can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-js/tree/min/ticketing-tutorial/docs-advanced-tutorials/ticket-app"},"here"),". To follow along and build out this ticketing app, see the steps below. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"creating-your-project"},"Creating your Project"),(0,r.kt)("p",null,"In this section, you'll prepare to create the ticketing app using the skeleton code made available to you at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/keypom/keypom-docs-examples"},"Keypom Docs Examples")," repo. "),(0,r.kt)("p",null,"First, you'll want to clone the repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/keypom/keypom-docs-examples.git && cd keypom-docs-examples\n")),(0,r.kt)("p",null,"Second, install all dependencies for the ticketing app skeleton code using the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"yarn ticketing:init-skeleton && cd advanced-tutorials/ticket-app-skeleton\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To install all dependencies for the completed ticketing app, run the following:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"yarn ticketing:init-complete && cd advanced-tutorials/ticket-app\n"))),(0,r.kt)("p",null,"At this point, all the dependencies should be installed and you should be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"advanced-tutorials/ticket-app-skeleton")," folder. Here you'll find the following files required to build out your app."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/ticket-app-skeleton\n\u2514\u2500\u2500 components\n\u2502    \u2514\u2500\u2500 scanner.js\n\u2502    \u2514\u2500\u2500 qrcode.js\n\u2514\u2500\u2500 state\n\u2502    \u2514\u2500\u2500 App.js\n\u2502    \u2514\u2500\u2500 keyInfo.js\n\u2514\u2500\u2500 utils\n\u2502    \u2514\u2500\u2500 allowEntry.js\n\u2502    \u2514\u2500\u2500 createTickDrop.js\n\u2502    \u2514\u2500\u2500 testTickDrop.js\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"With this setup complete, you are ready to begin building out the ticket app, starting by breaking down the problem into its functional requirements."))}d.isMDXComponent=!0}}]);