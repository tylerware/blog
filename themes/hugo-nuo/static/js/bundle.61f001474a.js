!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="tjUo")}({C331:function(t,e,n){"use strict";
/*! npm.im/object-fit-images 3.2.4 */var o="bfred-it:object-fit-images",r=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,i="undefined"==typeof Image?{style:{"object-position":1}}:new Image,c="object-fit"in i.style,a="object-position"in i.style,s="background-size"in i.style,u="string"==typeof i.currentSrc,l=i.getAttribute,d=i.setAttribute,m=!1;function f(t,e,n){var o="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(e||1)+"' height='"+(n||0)+"'%3E%3C/svg%3E";l.call(t,"src")!==o&&d.call(t,"src",o)}function g(t,e){t.naturalWidth?e(t):setTimeout(g,100,t,e)}function p(t){var e=function(t){for(var e,n=getComputedStyle(t).fontFamily,o={};null!==(e=r.exec(n));)o[e[1]]=e[2];return o}(t),n=t[o];if(e["object-fit"]=e["object-fit"]||"fill",!n.img){if("fill"===e["object-fit"])return;if(!n.skipTest&&c&&!e["object-position"])return}if(!n.img){n.img=new Image(t.width,t.height),n.img.srcset=l.call(t,"data-ofi-srcset")||t.srcset,n.img.src=l.call(t,"data-ofi-src")||t.src,d.call(t,"data-ofi-src",t.src),t.srcset&&d.call(t,"data-ofi-srcset",t.srcset),f(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{!function(t){var e={get:function(e){return t[o].img[e||"src"]},set:function(e,n){return t[o].img[n||"src"]=e,d.call(t,"data-ofi-"+n,e),p(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(t){if(t.srcset&&!u&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}(n.img),t.style.backgroundImage='url("'+(n.img.currentSrc||n.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=e["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(e["object-fit"])?g(n.img,function(){n.img.naturalWidth>t.width||n.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=e["object-fit"].replace("none","auto").replace("fill","100% 100%"),g(n.img,function(e){f(t,e.naturalWidth,e.naturalHeight)})}function h(t,e){var n=!m&&!t;if(e=e||{},t=t||"img",a&&!e.skipTest||!s)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][o]=t[r][o]||{skipTest:e.skipTest},p(t[r]);n&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&h(t.target,{skipTest:e.skipTest})},!0),m=!0,t="img"),e.watchMQ&&window.addEventListener("resize",h.bind(null,t,{skipTest:e.skipTest}))}h.supportsObjectFit=c,h.supportsObjectPosition=a,function(){function t(t,e){return t[o]&&t[o].img&&("src"===e||"srcset"===e)?t[o].img:t}a||(HTMLImageElement.prototype.getAttribute=function(e){return l.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,n){return d.call(t(this,e),e,String(n))})}(),t.exports=h},"SR+s":function(t,e,n){(function(n){var o,r;/*! smooth-scroll v14.2.1 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;--e>=0&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}if("function"==typeof window.CustomEvent)return!1;t.prototype=window.Event.prototype,window.CustomEvent=t}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-t)),i=window.setTimeout(function(){e(o+r)},r);return t=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){for(var t={},e=0;e<arguments.length;e++)!function(e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}(arguments[e]);return t},o=function(e){return parseInt(t.getComputedStyle(e).height,10)},r=function(t){var e;try{e=decodeURIComponent(t)}catch(n){e=t}return e},i=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,r=-1,i="",c=n.charCodeAt(0);++r<o;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=e>=1&&e<=31||127==e||0===r&&e>=48&&e<=57||1===r&&e>=48&&e<=57&&45===c?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(r):"\\"+n.charAt(r)}var a;try{a=decodeURIComponent("#"+i)}catch(t){a="#"+i}return a},c=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t){return t?o(t)+t.offsetTop:0},s=function(e,n,o,r){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(o,u){var l,d,m,f,g,p,h={cancelScroll:function(t){cancelAnimationFrame(p),p=null,t||s("scrollCancel",l)},animateScroll:function(o,r,i){var u=n(l||e,i||{}),d="[object Number]"===Object.prototype.toString.call(o),g=d||!o.tagName?null:o;if(d||g){var y=t.pageYOffset;u.header&&!m&&(m=document.querySelector(u.header)),f||(f=a(m));var v,w,b,S=d?o:function(e,n,o,r){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-n-o,0),r&&(i=Math.min(i,c()-t.innerHeight)),i}(g,f,parseInt("function"==typeof u.offset?u.offset(o,r):u.offset,10),u.clip),E=S-y,j=c(),A=0,O=function(e,n){var i=t.pageYOffset;if(e==n||i==n||(y<n&&t.innerHeight+i)>=j)return h.cancelScroll(!0),function(e,n,o){0===e&&document.body.focus(),o||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))}(o,n,d),s("scrollStop",u,o,r),v=null,p=null,!0},C=function(e){v||(v=e),w=(A+=e-v)/parseInt(u.speed,10),b=y+E*function(t,e){var n;return"easeInQuad"===t.easing&&(n=e*e),"easeOutQuad"===t.easing&&(n=e*(2-e)),"easeInOutQuad"===t.easing&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(n=e*e*e),"easeOutCubic"===t.easing&&(n=--e*e*e+1),"easeInOutCubic"===t.easing&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(n=e*e*e*e),"easeOutQuart"===t.easing&&(n=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(n=e*e*e*e*e),"easeOutQuint"===t.easing&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(n=t.customEasing(e)),n||e}(u,w=w>1?1:w),t.scrollTo(0,Math.floor(b)),O(b,S)||(p=t.requestAnimationFrame(C),v=e)};0===t.pageYOffset&&t.scrollTo(0,0),function(t,e,n){e||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id)}(o,d,u),s("scrollStart",u,o,r),h.cancelScroll(!0),t.requestAnimationFrame(C)}}},y=function(e){if(!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(d=e.target.closest(o))&&"a"===d.tagName.toLowerCase()&&!e.target.closest(l.ignore)&&d.hostname===t.location.hostname&&d.pathname===t.location.pathname&&/#/.test(d.href)){var n=i(r(d.hash)),c=l.topOnEmptyHash&&"#"===n?document.documentElement:document.querySelector(n);(c=c||"#top"!==n?c:document.documentElement)&&(e.preventDefault(),h.animateScroll(c,d))}},v=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)&&history.state.anchor){var e=document.querySelector(i(r(history.state.anchor)));e&&h.animateScroll(e,null,{updateURL:!1})}},w=function(t){g||(g=setTimeout(function(){g=null,f=a(m)},66))};return h.destroy=function(){l&&(document.removeEventListener("click",y,!1),t.removeEventListener("resize",w,!1),t.removeEventListener("popstate",v,!1),h.cancelScroll(),l=null,d=null,m=null,f=null,g=null,p=null)},h.init=function(o){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),l=n(e,o||{}),m=l.header?document.querySelector(l.header):null,f=a(m),document.addEventListener("click",y,!1),m&&t.addEventListener("resize",w,!1),l.updateURL&&l.popstate&&t.addEventListener("popstate",v,!1)},h.init(u),h}}(r)}.apply(e,[]))||(t.exports=o)}).call(this,n("yLpj"))},fnl6:function(t,e,n){},tjUo:function(t,e,n){"use strict";n.r(e);var o=n("C331"),r=n.n(o),i=n("SR+s"),c=n.n(i),a=(n("fnl6"),document.querySelector("html")),s=document.querySelector("body"),u=document.querySelector(".menu-toggle"),l=document.querySelector(".icon-menu"),d=document.querySelector(".site-menu"),m=document.querySelector(".social-menu"),f=document.querySelector(".to-top");u&&u.addEventListener("click",function(){d.classList.toggle("collapsed"),m.classList.toggle("collapsed"),l.classList.toggle("icon-menu"),l.classList.toggle("icon-close")});!function(){var t=document.getElementsByClassName("error-emoji")[0],e=["\\(o_o)/","(o^^)o","(˚Δ˚)b","(^-^*)","(≥o≤)","(^_^)b","(·_·)","(='X'=)","(>_<)","(;-;)","\\(^Д^)/"];if(t){var n=e[Math.floor(Math.random()*e.length)];t.appendChild(document.createTextNode(n))}}(),r()("img.post-cover");var g=0,p=!1;window.addEventListener("scroll",function(){g=0===s.scrollTop?a.scrollTop:s.scrollTop,p||window.requestAnimationFrame(function(){g>=600?f.classList.remove("is-hide"):f.classList.add("is-hide"),p=!1}),p=!0});var h=new c.a('a[href*="#"]');f.addEventListener("click",function(){h.animateScroll(0)})},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}});
//# sourceMappingURL=bundle.61f001474a.js.map