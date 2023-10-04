"use strict";(self.webpackChunktest_site=self.webpackChunktest_site||[]).push([[5746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),y=s,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||c;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var c=t.length,o=new Array(c);o[0]=y;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a[d]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<c;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=t(7462),s=(t(7294),t(3905));const c={sidebar_label:"NEAR Access Key Model",sidebar_position:1},o="NEAR Access Key Model",a={unversionedId:"Concepts/LinkdropsAndAccessKeys/near-access-keys",id:"version-2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys",title:"NEAR Access Key Model",description:"A Keypair is generated locally and the pubkey is add to your account.",source:"@site/versioned_docs/version-2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys.md",sourceDirName:"Concepts/LinkdropsAndAccessKeys",slug:"/Concepts/LinkdropsAndAccessKeys/near-access-keys",permalink:"/docs/2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys",draft:!1,editUrl:"https://github.com/keypom/keypom-docs/tree/main/versioned_docs/version-2.0/Concepts/LinkdropsAndAccessKeys/near-access-keys.md",tags:[],version:"2.0",sidebarPosition:1,frontMatter:{sidebar_label:"NEAR Access Key Model",sidebar_position:1},sidebar:"Concepts",previous:{title:"Keypom Executive Summary",permalink:"/docs/2.0/exec-summary"},next:{title:"Linkdrop Basics",permalink:"/docs/2.0/Concepts/LinkdropsAndAccessKeys/linkdrop-basics"}},i={},l=[],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"near-access-key-model"},"NEAR Access Key Model"),(0,s.kt)("p",null,"A Keypair is generated locally and the pubkey is add to your account. "),(0,s.kt)("p",null,"Access keys with numerous types are unique to NEAR. There are Full Access (similar to traditional keypairs) and Function Call Access Keys.  These Function Call Access Keys can only call specified accounts and methods. It cannot be used to send any NEAR, deploy a contract, create an account etc.  "),(0,s.kt)("p",null,"This means the Function Call Access key can be used as a throwaway key."),(0,s.kt)("p",null,"Your account can have any number of Access Keys, including ZERO. If there are zero, the account cannot deploy or withdraw funds (rugging). This is done as a form of trust for users."))}u.isMDXComponent=!0}}]);