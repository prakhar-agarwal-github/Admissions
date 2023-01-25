var platform;(()=>{"use strict";var e,r,t,n,a,o,i,f,u,l,d,s,c,h,p,v,m,b={64:(e,r,t)=>{var n={"./ParentOrganisations":()=>t.e(572).then((()=>()=>t(5572))),"./ParentOrganisationDetails":()=>t.e(873).then((()=>()=>t(5873)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},g={};function y(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return b[e].call(t.exports,t,t.exports,y),t.loaded=!0,t.exports}y.m=b,y.c=g,y.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return y.d(r,{a:r}),r},y.d=(e,r)=>{for(var t in r)y.o(r,t)&&!y.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},y.f={},y.e=e=>Promise.all(Object.keys(y.f).reduce(((r,t)=>(y.f[t](e,r),r)),[])),y.u=e=>e+"."+{42:"23f72a35d393474c6c61",185:"7df882dbda5292153bb9",294:"4f6f19ece5f72aa50d69",381:"c22b443161017d247a66",572:"72488aa4513c9eab2424",734:"c143154ecdde0c8b8130",807:"63cd72830434f33c7c12",834:"a2357b144ca9d77333eb",873:"863c7cd4c1b6e454e124",935:"1b3e138d4d4279dcf733",956:"be55b1b5cfdbccbb05a2"}[e]+".js",y.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),y.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="osttra-fr-platform:",y.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,y.nc&&i.setAttribute("nonce",y.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},y.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},y.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{y.S={};var e={},r={};y.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];y.o(y.S,t)||(y.S[t]={});var o=y.S[t],i="osttra-fr-platform",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},f=a[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(a[r]={get:t,from:i,eager:!!n})},u=[];return"default"===t&&(f("axios","1.2.3",(()=>y.e(956).then((()=>()=>y(4956))))),f("moment","2.29.4",(()=>y.e(381).then((()=>()=>y(381))))),f("react-dom","17.0.2",(()=>y.e(935).then((()=>()=>y(3935))))),f("react-router-dom","5.3.4",(()=>y.e(807).then((()=>()=>y(5807))))),f("react-toastify","9.1.1",(()=>y.e(42).then((()=>()=>y(6042))))),f("react","17.0.2",(()=>y.e(294).then((()=>()=>y(7294)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),y.p="/platform/latest/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,f);return t}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+u()+")":1===f?"("+u()+" || "+u()+")":2===f?i.pop()+" "+i.pop():a(f))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,f=1,u=!0;;f++,i++){var l,d,s=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(d=(typeof(l=r[i]))[0]))return!u||("u"==s?f>n&&!a:""==s!=a);if("u"==d){if(!u||"u"!=s)return!1}else if(u)if(s==d)if(f<=n){if(l!=e[f])return!1}else{if(a?l>e[f]:l<e[f])return!1;l!=e[f]&&(u=!1)}else if("s"!=s&&"n"!=s){if(a||f<=n)return!1;u=!1,f--}else{if(f<=n||d<s!=a)return!1;u=!1}else"s"!=s&&"n"!=s&&(u=!1,f--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},f=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",u=(e,r,t,n)=>{var a=i(e,t);return o(n,a)||"undefined"!=typeof console&&console.warn&&console.warn(f(e,t,a,n)),d(e[t][a])},l=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},d=e=>(e.loaded=1,e.get()),c=(s=e=>function(r,t,n,a){var o=y.I(r);return o&&o.then?o.then(e.bind(e,r,y.S[r],t,n,a)):e(r,y.S[r],t,n,a)})(((e,r,t,n,a)=>r&&y.o(r,t)?u(r,0,t,n):a())),h=s(((e,r,t,n,a)=>{var o=r&&y.o(r,t)&&l(r,t,n);return o?d(o):a()})),p={},v={2950:()=>c("default","react",[1,17,0,2],(()=>y.e(294).then((()=>()=>y(7294))))),2181:()=>c("default","react-dom",[1,17,0,2],(()=>y.e(834).then((()=>()=>y(3935))))),5449:()=>h("default","react-router-dom",[1,5,3,3],(()=>y.e(734).then((()=>()=>y(5807))))),7610:()=>h("default","react-toastify",[1,9,1,1],(()=>y.e(185).then((()=>()=>y(6042))))),8698:()=>h("default","axios",[1,1,2,1],(()=>y.e(956).then((()=>()=>y(4956))))),9801:()=>h("default","moment",[1,2,29,4],(()=>y.e(381).then((()=>()=>y(381)))))},m={42:[2950],572:[2181,2950,5449,7610,8698,9801],807:[2950],873:[2181,2950,5449,7610,8698],935:[2950]},y.f.consumes=(e,r)=>{y.o(m,e)&&m[e].forEach((e=>{if(y.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,y.m[e]=t=>{delete y.c[e],t.exports=r()}},n=r=>{delete p[e],y.m[e]=t=>{throw delete y.c[e],r}};try{var a=v[e]();a.then?r.push(p[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={745:0};y.f.j=(r,t)=>{var n=y.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=y.p+y.u(r),i=new Error;y.l(o,(t=>{if(y.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,f]=t,u=0;if(o.some((r=>0!==e[r]))){for(n in i)y.o(i,n)&&(y.m[n]=i[n]);f&&f(y)}for(r&&r(t);u<o.length;u++)a=o[u],y.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkosttra_fr_platform=self.webpackChunkosttra_fr_platform||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),y.nc=void 0;var w=y(64);platform=w})();