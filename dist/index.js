(()=>{"use strict";var t={402:(t,n,e)=>{e.d(n,{Z:()=>c});var r=e(81),o=e.n(r),i=e(645),a=e.n(i)()(o());a.push([t.id,"* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Permanent Marker';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/permanentmarker/v16/Fh4uPib9Iyv2ucM6pGQMWimMp004La2Cfw.woff2) format('woff2');\r\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\r\n}\r\n\r\n.main {\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tpadding: 20px 35px;\r\n}\r\n\r\n.header {\r\n\tfont-size: 26px;\r\n\twidth: 100%;\r\n}\r\n\r\n.form {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tmargin: 10px 0px;\r\n}\r\n\r\n#toDoInput {\r\n\theight: 50px;\r\n\twidth: 80%;\r\n\tmargin-right: 5px;\r\n\toutline: none;\r\n\tpadding: 0px 5px;\r\n\tfont-size: 16px;\r\n\tborder: 1px solid lightgray;\r\n\tborder-top: none;\r\n}\r\n\r\n.addBtn {\r\n\theight: 50px;\r\n\twidth: 20%;\r\n\tbackground: rgb(61, 119, 255);\r\n\tborder: none;\r\n\tcolor: white;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.mainUl {\r\n\tlist-style: none;\r\n\tmargin-top: 20px;\r\n}\r\n\r\nli {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tborder-bottom: 1px solid lightgray;\r\n\tpadding: 10px 0px;\r\n}\r\n\r\n.left-side {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n}\r\n\r\n.left-side p {\r\n\tfont-size: 16px;\r\n}\r\n\r\n.checkedMark {\r\n\tmargin-right: 5px;\r\n\theight: 20px;\r\n\twidth: 20px;\r\n}\r\n\r\n.close {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 20px;\r\n\twidth: 20px;\r\n\tbackground: none;\r\n\tborder: none;\r\n\tfont-family: 'Permanent Marker';\r\n\tfont-size: 26px;\r\n\tcolor:rgb(48, 93, 197);\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n}\r\n\r\n.done {\r\n\ttext-decoration: line-through;\r\n}",""]);const c=a},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=r(t,o),d=0;d<i.length;d++){var l=e(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),a=e.n(i),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(402),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let g;const y=new Uint8Array(16);function v(){if(!g&&(g="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(y)}const x=[];for(let t=0;t<256;++t)x.push((t+256).toString(16).slice(1));const b=function(t,n,e){if(m.randomUUID&&!n&&!t)return m.randomUUID();const r=(t=t||{}).random||(t.rng||v)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){e=e||0;for(let t=0;t<16;++t)n[e+t]=r[t];return n}return function(t,n=0){return(x[t[n+0]]+x[t[n+1]]+x[t[n+2]]+x[t[n+3]]+"-"+x[t[n+4]]+x[t[n+5]]+"-"+x[t[n+6]]+x[t[n+7]]+"-"+x[t[n+8]]+x[t[n+9]]+"-"+x[t[n+10]]+x[t[n+11]]+x[t[n+12]]+x[t[n+13]]+x[t[n+14]]+x[t[n+15]]).toLowerCase()}(r)},w=document.querySelector(".mainUl"),U=document.querySelector("#toDoInput"),k=document.querySelector(".addBtn");let M=[{body:"Take a bath",date:Date.now(),id:b()},{body:"Render new video",date:Date.now(),id:b()},{body:"Walk with Joe",date:Date.now(),id:b()}];const S=t=>{t.forEach((t=>{const n=`\n\t\t\t<li id="${t.id}">\n\t\t\t\t<div class="left-side">\n\t\t\t\t\t<input type="checkbox" class="checkedMark">\n\t\t\t\t\t<p>${t.body}</p>\n\t\t\t\t</div>\n\t\t\t\t<button class="close" id="${t.id}">X</button>\n\t\t\t</li>\n\t\t`;w.insertAdjacentHTML("beforeend",n)})),C()},D=()=>{w.innerHTML="",U.value=""},E=()=>{const t={body:`${U.value.length>0?U.value:"Nothing"}`,date:Date.now(),id:b()};M.push(t),D(),S(M),L()},I=t=>{t.preventDefault();const n=t.target.id,e=M.find((t=>t.id===n)),r=M.indexOf(e);M.splice(r,1),D(),S(M),L()},C=()=>{document.querySelectorAll(".close").forEach((t=>t.addEventListener("click",I)))},L=()=>{localStorage.setItem("tasks",JSON.stringify(M))};M=JSON.parse(localStorage.getItem("tasks")),w.addEventListener("click",(t=>{t.target.classList.contains("checkedMark")&&t.target.parentElement.querySelector("p").classList.toggle("done")})),k.addEventListener("click",E),window.addEventListener("keypress",(t=>{"Enter"===t.key&&E()})),S(M)})()})();