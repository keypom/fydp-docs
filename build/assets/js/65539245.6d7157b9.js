"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[9133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_label:"App Design"},o="App Design",l={unversionedId:"Tutorials/Advanced/ticketing/react-outline",id:"Tutorials/Advanced/ticketing/react-outline",title:"App Design",description:"Introduction",source:"@site/docs/Tutorials/Advanced/ticketing/react-outline.md",sourceDirName:"Tutorials/Advanced/ticketing",slug:"/Tutorials/Advanced/ticketing/react-outline",permalink:"/docs/Tutorials/Advanced/ticketing/react-outline",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/docs/Tutorials/Advanced/ticketing/react-outline.md",tags:[],version:"current",frontMatter:{sidebar_label:"App Design"},sidebar:"Tutorials",previous:{title:"Testing the Drop",permalink:"/docs/Tutorials/Advanced/ticketing/drop-test"},next:{title:"Attendee Ticket Page Code",permalink:"/docs/Tutorials/Advanced/ticketing/user-code"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Attendee Ticket Page Flow",id:"attendee-ticket-page-flow",level:2},{value:"Host Scanner Page Flow",id:"host-scanner-page-flow",level:2},{value:"Keypom Information",id:"keypom-information",level:2},{value:"Claim Page",id:"claim-page",level:3},{value:"Scanner Page",id:"scanner-page",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-design"},"App Design"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the previous sections, you've created the foundation for the ticketing system by breaking it down to its functional requirements and designing a drop accordingly. Here, you'll be learning the flow and design of the React app, to create a seamless ticketing experience for ",(0,r.kt)("em",{parentName:"p"},"both")," the organizers and the attendees."),(0,r.kt)("p",null,"With this tutorial, a React app with separate scanner and claim pages will be created. Although the attendees can access the scanner, it will be useless to them unless they know the drop password. "),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"attendee-ticket-page-flow"},"Attendee Ticket Page Flow"),(0,r.kt)("p",null,"This page is for the attendees and will only consist of 3 stages."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(5170).default,width:"100%",height:"100%",alt:"ticketing",class:"rounded-corners"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 1, Pre-entry:")," Page showing a unique QR code, corresponding to the private key from their ticket.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 2, Post-entry:")," After the QR code has been scanned by the host, the user can choose to onboard to NEAR and receive a POAP.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 3, Post-gift:")," If the user chooses to claim their POAP, the third stage will show a page of ",(0,r.kt)("strong",{parentName:"li"},"your")," choice. You can choose to leave it empty or customize it with additional resources or a redirect to your own website.")),(0,r.kt)("p",null,"To trigger a transition from Pre-entry to Post-entry and Post-entry and Post-gift, the following events must occur:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Pre-entry ","\u2192"," Post-entry"),": The host must scan the QR code and call ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEntry")," with the event password and private key."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Post-entry ","\u2192"," Post-gift"),": The user chooses to ",(0,r.kt)("inlineCode",{parentName:"li"},"claim")," their POAP. Once that ",(0,r.kt)("inlineCode",{parentName:"li"},"claim")," is complete and the POAP is in their wallet, the page will transition to post-gift.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"host-scanner-page-flow"},"Host Scanner Page Flow"),(0,r.kt)("p",null,"The scanner page is for the host and consists of 3 stages that repeat in a loop."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:n(4983).default,width:"80%",height:"80%",alt:"ticketing",class:"rounded-corners"})),(0,r.kt)("p",null,"The event password will only be prompted once on app mount. If the host wishes to enter a different password once scanning starts, they can simply refresh the page and be prompted again. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 1, Pre-claim:")," A page with the camera viewport open, constantly scanning for QR codes.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 2, Claiming:")," Once a QR code is detected and information is scanned in, the app attempts to derive the private key from the QR code and calls ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEntry")," using the event password. During this time, the app will indicate it is in the process of claiming."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 3, Post-claim:")," After the claim is processed, the page will indicate whether or not to admit the attendee depending on the return value of ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEntry"),".")),(0,r.kt)("p",null,"After post-claim, the entire cycle will loop back to pre-claim after three seconds. This time interval was set so the host could read any error messages that may appear. You can modify this time by changing the values passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout()"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"keypom-information"},"Keypom Information"),(0,r.kt)("p",null,"There are a few key pieces of information needed from Keypom in order to allow the pages to perform as expected."),(0,r.kt)("h3",{id:"claim-page"},"Claim Page"),(0,r.kt)("p",null,"The major parameter that controls what React will render is ",(0,r.kt)("inlineCode",{parentName:"p"},"cur_key_use")," for the given private key. This value represents the key's current use number (1st use, 2nd use etc.) and will be stored in a React state variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"curUse"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pre-entry ","\u2192"," Post-entry:")," To change between these two stages, the key's current use must be changed from 1 to 2. This is done when the QR code is scanned by the host.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Post-entry ","\u2192"," Post-gift:")," To change between these two stages, the key must be deleted and fully claimed. This happens when they claim the post attendance gifts.  "),(0,r.kt)("p",null,"The following variables are needed to allow these state changes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"curUse"),", obtained from accessing the ",(0,r.kt)("inlineCode",{parentName:"li"},"cur_key_use")," from calling ",(0,r.kt)("a",{parentName:"li",href:"/docs/keypom-sdk/Core/modules#getkeyinformation"},(0,r.kt)("inlineCode",{parentName:"a"},"getKeyInformation"))," with ",(0,r.kt)("inlineCode",{parentName:"li"},"pubKey"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pubKey"),", derived from ",(0,r.kt)("inlineCode",{parentName:"li"},"privKey")," using the SDK's ",(0,r.kt)("a",{parentName:"li",href:"/docs/keypom-sdk/Core/modules#getpubfromsecret"},(0,r.kt)("inlineCode",{parentName:"a"},"getPubFromSecret"))," method."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privKey"),", stored in the user's app link.")),(0,r.kt)("h3",{id:"scanner-page"},"Scanner Page"),(0,r.kt)("p",null,"As the scanner page exclusively scans QR codes and admits people using the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowEntry")," utility function, the app itself does not store any Keypom parameters apart from the event password, which the host will manually enter on app mount."),(0,r.kt)("p",null,"The scanner app obtains the ",(0,r.kt)("inlineCode",{parentName:"p"},"privKey")," by scanning the QR code and parsing the obtained string. It then calls ",(0,r.kt)("inlineCode",{parentName:"p"},"allowEntry")," and passes in the event password and the ",(0,r.kt)("inlineCode",{parentName:"p"},"privKey"),"."),(0,r.kt)("p",null,"The following list of variables are used in the scanner app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"privKey"),", read in from the QR code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password"),", set by the host on app mount.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this section, you broke down the app's flow of logic for both the user claim page, and the scanner page. You then took that information and found Keypom information that can be used to facilitate that flow. "),(0,r.kt)("p",null,"In the following sections, you'll be applying what you just learned by going through the actual code for the claim and scanner pages."))}u.isMDXComponent=!0},4983:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/scanner-pink-5f294063724bdc7d26752125fa4510d7.png"},5170:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a=n.p+"assets/images/ticket-pink-e3ba4bcc0a17efe30fc6b6409c6da02b.png"}}]);