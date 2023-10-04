"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[3306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,k=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34011:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_label:"Scanner Code"},l="Scanner Code",s={unversionedId:"Tutorials/Advanced/ticketing/scanner-code",id:"Tutorials/Advanced/ticketing/scanner-code",title:"Scanner Code",description:"Introduction",source:"@site/docs/Tutorials/Advanced/ticketing/scanner-code.md",sourceDirName:"Tutorials/Advanced/ticketing",slug:"/Tutorials/Advanced/ticketing/scanner-code",permalink:"/docs/Tutorials/Advanced/ticketing/scanner-code",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/docs/Tutorials/Advanced/ticketing/scanner-code.md",tags:[],version:"current",frontMatter:{sidebar_label:"Scanner Code"},sidebar:"Tutorials",previous:{title:"Attendee Ticket Page Code",permalink:"/docs/Tutorials/Advanced/ticketing/user-code"},next:{title:"Final Product",permalink:"/docs/Tutorials/Advanced/ticketing/final"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Scanner App - <code>Scanner.js</code>",id:"scanner-app---scannerjs",level:2},{value:"Breaking Down the Problem",id:"breaking-down-the-problem",level:3},{value:"<code>masterStatus</code> State Variable",id:"masterstatus-state-variable",level:3},{value:"Initialization and Scanning",id:"initialization-and-scanning",level:3},{value:"Claiming",id:"claiming",level:3},{value:"Rendering",id:"rendering",level:3},{value:"Full Code",id:"full-code",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d},p="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scanner-code"},"Scanner Code"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In the previous sections, you designed the structure and components needed to meet the requirements of the ticket app and saw the code to create the user claim page. Building on that, this tutorial will guide you through the code to create the scanner app for your seamless ticketing system."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The focus of this section will be on the Keypom aspects of each script, such as getting key information and using it. "),(0,r.kt)("p",{parentName:"admonition"},"The full code for each script will be shown, with highlights. For React resources, see ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hello-world.html"},"here")," as a starting point.")),(0,r.kt)("p",null,"Recall, from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorials/Advanced/ticketing/introduction"},"introduction")," that your code had the following outline."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/ticket-app-skeleton\n\u2514\u2500\u2500 components\n\u2502    \u2514\u2500\u2500 scanner.js\n\u2502    \u2514\u2500\u2500 qrcode.js\n\u2514\u2500\u2500 state\n\u2502    \u2514\u2500\u2500 App.js\n\u2502    \u2514\u2500\u2500 keyInfo.js\n\u2514\u2500\u2500 utils\n\u2502    \u2514\u2500\u2500 allowEntry.js\n\u2502    \u2514\u2500\u2500 createTickDrop.js\n\u2502    \u2514\u2500\u2500 testTickDrop.js\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"This tutorial will be covering the code in ",(0,r.kt)("inlineCode",{parentName:"p"},"scanner.js"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"scanner-app---scannerjs"},"Scanner App - ",(0,r.kt)("inlineCode",{parentName:"h2"},"Scanner.js")),(0,r.kt)("h3",{id:"breaking-down-the-problem"},"Breaking Down the Problem"),(0,r.kt)("p",null,"As a brief reminder, the host scanner page will have the following stages, best outlined with the diagram below."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:a(75347).default,width:"80%",height:"80%",alt:"ticketing",class:"rounded-corners"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 1, Pre-claim:")," A page with the camera viewport open, constantly scanning for QR codes.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 2, Claiming:")," Once a QR code is detected and information is scanned in, the app attempts to derive the private key from the QR code and calls ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEntry")," using the event password. During this time, the app will indicate it is in the process of claiming."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stage 3, Post-claim:")," After the claim is processed, the page will indicate whether or not to admit the attendee depending on the return value of ",(0,r.kt)("inlineCode",{parentName:"li"},"allowEntry"),".")),(0,r.kt)("p",null,"After post-claim, the entire cycle will loop back to pre-claim after three seconds. This time interval was set so the host could read any error messages that may appear. You can modify this time by changing the values passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout()"),"."),(0,r.kt)("p",null,"In post-claim, a ",(0,r.kt)("inlineCode",{parentName:"p"},"allowEntry")," might have returned false for a few reasons. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Incorrect password/key"),(0,r.kt)("li",{parentName:"ul"},"A ticket may already be fully claimed and not exist when the host attempts to claim it."),(0,r.kt)("li",{parentName:"ul"},"The ticket has already been scanned by the host. This means the key's current use is 2.")),(0,r.kt)("h3",{id:"masterstatus-state-variable"},(0,r.kt)("inlineCode",{parentName:"h3"},"masterStatus")," State Variable"),(0,r.kt)("p",null,"In order to track all these stages and possible outcomes, a set of enums will be defined."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app/components/scanner.js#L10-L22\n")),(0,r.kt)("p",null,"All these stages will be stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"masterStatus")," state variable object."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("inlineCode",{parentName:"strong"},"masterStatus.stage"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stages.preClaim")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Pre-claim:")," Host scanner page is scanning, waiting to read in data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stages.claiming")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Claiming:")," Data has been read, scanner is trying to claim")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stages.sucessClaim")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Post-claim:")," Successful claim (",(0,r.kt)("inlineCode",{parentName:"td"},"true")," returned from ",(0,r.kt)("inlineCode",{parentName:"td"},"allowEntry"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stages.failClaim")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Post-claim:")," Failed to claim (",(0,r.kt)("inlineCode",{parentName:"td"},"false")," returned from ",(0,r.kt)("inlineCode",{parentName:"td"},"allowEntry"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Unknow State:")," Display error message")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},(0,r.kt)("inlineCode",{parentName:"strong"},"masterStatus.data"))),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Data.empty")),(0,r.kt)("td",{parentName:"tr",align:null},"No data has been read, cannot call ",(0,r.kt)("inlineCode",{parentName:"td"},"claim"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Data.captured")),(0,r.kt)("td",{parentName:"tr",align:null},"Data has been read, scanner can now try to claim")))),(0,r.kt)("h3",{id:"initialization-and-scanning"},"Initialization and Scanning"),(0,r.kt)("p",null,"Upon app mount, the host scanner page will immediately do the following.  "),(0,r.kt)("p",null,"1) Prompt the host for the base password.",(0,r.kt)("br",{parentName:"p"}),"\n","2) Begin scanning."),(0,r.kt)("p",null,"These features can be seen in the code snippet below. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app/components/scanner.js#L9-L53\n")),(0,r.kt)("h3",{id:"claiming"},"Claiming"),(0,r.kt)("p",null,"The claiming process can be controlled using a React ",(0,r.kt)("inlineCode",{parentName:"p"},"useEffect")," hook, that runs every time the data status, ",(0,r.kt)("inlineCode",{parentName:"p"},"masterStatus.data"),", is updated, indicating that data was read by the scanner. "),(0,r.kt)("p",null,"The primary task of the claim process is to determine if a claim is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Successful - ",(0,r.kt)("inlineCode",{parentName:"li"},"masterStatus.stage == Stages.successClaim")," "),(0,r.kt)("li",{parentName:"ul"},"Unsuccessful - ",(0,r.kt)("inlineCode",{parentName:"li"},"masterStatus.stage == Stages.failClaim")," ")),(0,r.kt)("p",null,"This is accomplished using the ",(0,r.kt)("inlineCode",{parentName:"p"},"allowEntry")," function that you created earlier. If it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the master status stage should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Stages.successClaim"),". Otherwise, it should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Stages.failClaim"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app/components/scanner.js#L55-L92\n")),(0,r.kt)("h3",{id:"rendering"},"Rendering"),(0,r.kt)("p",null,"The rendering part of the scanner app is relatively simple, as all the logic for states was taken care of during the claim process. The following table outlines what the page should render based on the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"masterStatus.stage"),", as outlined ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorials/Advanced/ticketing/scanner-code#masterstatus-state-variable"},"above"),". "),(0,r.kt)("p",null,"The focus of the renders is on the scanner frame (coloured square) and the text below it. The QR code visible is a code on a phone screen held up to the camera."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Condition and Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Render")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"masterStatus.stage")," == ",(0,r.kt)("inlineCode",{parentName:"td"},"Stages.preClaim"),", ",(0,r.kt)("em",{parentName:"td"},"Pre-claim:")," Host scanner page is scanning, waiting to read in data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:a(209).default,width:"60%",height:"60%",alt:"ticketing",class:"rounded-corners"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"masterStatus.stage")," == ",(0,r.kt)("inlineCode",{parentName:"td"},"Stages.claiming"),", ",(0,r.kt)("em",{parentName:"td"},"Claiming:")," Data has been read, scanner is trying to claim"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:a(35961).default,width:"60%",height:"60%",alt:"ticketing",class:"rounded-corners"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"masterStatus.stage")," == ",(0,r.kt)("inlineCode",{parentName:"td"},"Stages.successClaim"),", ",(0,r.kt)("em",{parentName:"td"},"Post-claim:")," Successful ",(0,r.kt)("inlineCode",{parentName:"td"},"claim")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:a(75058).default,width:"60%",height:"60%",alt:"ticketing",class:"rounded-corners"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"masterStatus.stage")," == ",(0,r.kt)("inlineCode",{parentName:"td"},"Stages.failClaim"),", ",(0,r.kt)("em",{parentName:"td"},"Post-claim:")," Invalid password, key invalid/scanned already etc."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:a(23319).default,width:"60%",height:"60%",alt:"ticketing",class:"rounded-corners"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default"),", ",(0,r.kt)("em",{parentName:"td"},"Unknown State:")," Display error message"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",{align:"center"}," ",(0,r.kt)("img",{src:a(32641).default,width:"60%",height:"60%",alt:"ticketing",class:"rounded-corners"})))))),(0,r.kt)("p",null,"The following expandable section contains code for rendering. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Full scanner.js rendering code"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app/components/scanner.js#L94-L147\n")))),(0,r.kt)("h3",{id:"full-code"},"Full Code"),(0,r.kt)("p",null,"The full code, including the set up, claiming, and the rendering, can be seen below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"reference",reference:!0},"https://github.com/keypom/keypom-docs-examples/blob/4c8f86dab842c16e9c2bc6ad6f22e1eee2dced9e/advanced-tutorials/ticket-app/components/scanner.js#L1-L148\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this section, you learned about the ",(0,r.kt)("inlineCode",{parentName:"p"},"scanner.js")," component. Its primary role is to handle the data read in from the QR code reader, and ",(0,r.kt)("inlineCode",{parentName:"p"},"claim")," the private key embedded within the QR code. It is also designed to handle different kinds of errors, such as deleted keys, and tickets that have already been scanned.  "),(0,r.kt)("p",null,"In the next section, you'll be seeing the final product of what you just built!"))}m.isMDXComponent=!0},32641:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/error-2468a87e47089bcf4c44ff6cfee4e8f6.png"},23319:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/scan-claim-bad-fec14fef519240c1156452382e8b0204.png"},75058:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/scan-claim-good-343c14d4361070f85b148025f3c9d816.png"},35961:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/scan-claiming-6ac4dd60769d7610060e1697b6820e37.png"},209:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/scan-unread-c0ef758abecffdc06ebf0c4b17dc2d69.png"},75347:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});const n=a.p+"assets/images/scanner-pink-rounded-cefc7bf4fcc859abbb330ff1f17753a3.png"}}]);