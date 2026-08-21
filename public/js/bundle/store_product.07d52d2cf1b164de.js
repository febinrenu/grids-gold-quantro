(self["webpackChunk"] = self["webpackChunk"] || []).push([["store_product"],{

/***/ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js"
/*!********************************************************************!*\
  !*** ./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js ***!
  \********************************************************************/
(module) {

!function(A,t){ true?module.exports=t():0}(window,function(){return function(A){var t={};function e(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return A[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var i in A)e.d(n,i,function(t){return A[t]}.bind(null,i));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/dist/",e(e.s=6)}([function(A,t,e){var n=e(8);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("7ec05f6c",n,!1,{})},function(A,t,e){var n=e(10);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(4).default)("3453d19d",n,!1,{})},function(A,t,e){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map(function(t){var e=function(A,t){var e=A[1]||"",n=A[3];if(!n)return e;if(t&&"function"==typeof btoa){var i=(r=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),a=n.sources.map(function(A){return"/*# sourceURL="+n.sourceRoot+A+" */"});return[e].concat(a).concat([i]).join("\n")}var r;return[e].join("\n")}(t,A);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(A,e){"string"==typeof A&&(A=[[null,A,""]]);for(var n={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(n[a]=!0)}for(i=0;i<A.length;i++){var r=A[i];null!=r[0]&&n[r[0]]||(e&&!r[2]?r[2]=e:e&&(r[2]="("+r[2]+") and ("+e+")"),t.push(r))}},t}},function(A,t){A.exports="data:application/vnd.ms-fontobject;base64,aAUAAMQEAAABAAIAAAAAAAAAAAAAAAAAAAABAJABAAAAAExQAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAUdPJHwAAAAAAAAAAAAAAAAAAAAAAAA4AaQBjAG8AbQBvAG8AbgAAAA4AUgBlAGcAdQBsAGEAcgAAABYAVgBlAHIAcwBpAG8AbgAgADEALgAwAAAADgBpAGMAbwBtAG8AbwBuAAAAAAAAAQAAAAsAgAADADBPUy8yDxIFrAAAALwAAABgY21hcBdW0okAAAEcAAAAVGdhc3AAAAAQAAABcAAAAAhnbHlmpZ+jMAAAAXgAAAD8aGVhZA/FmAgAAAJ0AAAANmhoZWEHgAPIAAACrAAAACRobXR4EgABvgAAAtAAAAAcbG9jYQCSAOIAAALsAAAAEG1heHAACQAfAAAC/AAAACBuYW1lmUoJ+wAAAxwAAAGGcG9zdAADAAAAAASkAAAAIAADA4ABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAAAAAAAEAAAOkCA8D/wABAA8AAQAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAMAAAAcAAMAAQAAABwABAA4AAAACgAIAAIAAgABACDpAv/9//8AAAAAACDpAP/9//8AAf/jFwQAAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAVgEBA74CgQAcAAABMhceARcWFwcmJy4BJyYjIgYHFyERFzY3PgE3NgIWSkNDbykpF2QQIB9VMzQ5P3AtnP6AmB0iIkspKAJVFxhSODlCIDMrKz4REislmgGAmhkVFBwICAABANYAgQMqAtUACwAAAQcXBycHJzcnNxc3Ayru7jzu7jzu7jzu7gKZ7u487u487u487u4AAQCSAIEDgAK9AAUAACUBFwEnNwGAAcQ8/gDuPPkBxDz+AO48AAAAAAEAAAAAAAAfydNRXw889QALBAAAAAAA1nUqGwAAAADWdSobAAAAAAO+AtUAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA74AAQAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAAACAAAABAAAVgQAANYEAACSAAAAAAAKABQAHgBQAGoAfgABAAAABwAdAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEABwAAAAEAAAAAAAIABwBgAAEAAAAAAAMABwA2AAEAAAAAAAQABwB1AAEAAAAAAAUACwAVAAEAAAAAAAYABwBLAAEAAAAAAAoAGgCKAAMAAQQJAAEADgAHAAMAAQQJAAIADgBnAAMAAQQJAAMADgA9AAMAAQQJAAQADgB8AAMAAQQJAAUAFgAgAAMAAQQJAAYADgBSAAMAAQQJAAoANACkaWNvbW9vbgBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwaWNvbW9vbgBpAGMAbwBtAG8AbwBuaWNvbW9vbgBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByaWNvbW9vbgBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="},function(A,t,e){"use strict";function n(A,t){for(var e=[],n={},i=0;i<t.length;i++){var a=t[i],r=a[0],o={id:A+":"+i,css:a[1],media:a[2],sourceMap:a[3]};n[r]?n[r].parts.push(o):e.push(n[r]={id:r,parts:[o]})}return e}e.r(t),e.d(t,"default",function(){return g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,s=0,u=!1,c=function(){},d=null,l="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(A,t,e,i){u=e,d=i||{};var r=n(A,t);return f(r),function(t){for(var e=[],i=0;i<r.length;i++){var o=r[i];(s=a[o.id]).refs--,e.push(s)}t?f(r=n(A,t)):r=[];for(i=0;i<e.length;i++){var s;if(0===(s=e[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete a[s.id]}}}}function f(A){for(var t=0;t<A.length;t++){var e=A[t],n=a[e.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](e.parts[i]);for(;i<e.parts.length;i++)n.parts.push(v(e.parts[i]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var r=[];for(i=0;i<e.parts.length;i++)r.push(v(e.parts[i]));a[e.id]={id:e.id,refs:1,parts:r}}}}function B(){var A=document.createElement("style");return A.type="text/css",r.appendChild(A),A}function v(A){var t,e,n=document.querySelector("style["+l+'~="'+A.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n)}if(p){var i=s++;n=o||(o=B()),t=C.bind(null,n,i,!1),e=C.bind(null,n,i,!0)}else n=B(),t=function(A,t){var e=t.css,n=t.media,i=t.sourceMap;n&&A.setAttribute("media",n);d.ssrId&&A.setAttribute(l,t.id);i&&(e+="\n/*# sourceURL="+i.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");if(A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return t(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;t(A=n)}else e()}}var m,h=(m=[],function(A,t){return m[A]=t,m.filter(Boolean).join("\n")});function C(A,t,e,n){var i=e?"":n.css;if(A.styleSheet)A.styleSheet.cssText=h(t,i);else{var a=document.createTextNode(i),r=A.childNodes;r[t]&&A.removeChild(r[t]),r.length?A.insertBefore(a,r[t]):A.appendChild(a)}}},function(A,t,e){"use strict";var n=Array.isArray,i=Object.keys,a=Object.prototype.hasOwnProperty;A.exports=function A(t,e){if(t===e)return!0;if(t&&e&&"object"==typeof t&&"object"==typeof e){var r,o,s,u=n(t),c=n(e);if(u&&c){if((o=t.length)!=e.length)return!1;for(r=o;0!=r--;)if(!A(t[r],e[r]))return!1;return!0}if(u!=c)return!1;var d=t instanceof Date,l=e instanceof Date;if(d!=l)return!1;if(d&&l)return t.getTime()==e.getTime();var p=t instanceof RegExp,g=e instanceof RegExp;if(p!=g)return!1;if(p&&g)return t.toString()==e.toString();var f=i(t);if((o=f.length)!==i(e).length)return!1;for(r=o;0!=r--;)if(!a.call(e,f[r]))return!1;for(r=o;0!=r--;)if(!A(t[s=f[r]],e[s]))return!1;return!0}return t!=t&&e!=e}},function(A,t,e){A.exports=e(14)},function(A,t,e){"use strict";var n=e(0);e.n(n).a},function(A,t,e){(A.exports=e(2)(!0)).push([A.i,".ti-tag-input[data-v-108f4f13] {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit;\n}\n.ti-tag-input[data-v-108f4f13]::-ms-clear {\n  display: none;\n}\ninput[data-v-108f4f13]:focus {\n  outline: none;\n}\ninput[disabled][data-v-108f4f13] {\n  background-color: transparent;\n}\n","",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/tag-input.vue"],names:[],mappings:"AAAA;EACE,8BAA8B;EAC9B,eAAe;EACf,aAAa;EACb,aAAa;EACb,YAAY;EACZ,cAAc;EACd,SAAS;EACT,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;CAAE;AAEzB;EACE,cAAc;CAAE;AAElB;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE",file:"tag-input.vue?vue&type=style&index=0&id=108f4f13&lang=css&scoped=true&",sourcesContent:[".ti-tag-input {\n  background-color: transparent;\n  color: inherit;\n  border: none;\n  padding: 0px;\n  margin: 0px;\n  display: flex;\n  top: 0px;\n  position: absolute;\n  width: 100%;\n  line-height: inherit; }\n\n.ti-tag-input::-ms-clear {\n  display: none; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n"],sourceRoot:""}])},function(A,t,e){"use strict";var n=e(1);e.n(n).a},function(A,t,e){t=A.exports=e(2)(!0);var n=e(11),i=n(e(3)),a=n(e(3)+"#iefix"),r=n(e(12)),o=n(e(13));t.push([A.i,"@font-face {\n  font-family: 'icomoon';\n  src: url("+i+");\n  src: url("+a+') format("embedded-opentype"), url('+r+') format("truetype"), url('+o+') format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="ti-icon-"][data-v-61d92e31], [class*=" ti-icon-"][data-v-61d92e31] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.ti-icon-check[data-v-61d92e31]:before {\n  content: "\\e902";\n}\n.ti-icon-close[data-v-61d92e31]:before {\n  content: "\\e901";\n}\n.ti-icon-undo[data-v-61d92e31]:before {\n  content: "\\e900";\n}\nul[data-v-61d92e31] {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none;\n}\n*[data-v-61d92e31], *[data-v-61d92e31]:before, *[data-v-61d92e31]:after {\n  box-sizing: border-box;\n}\ninput[data-v-61d92e31]:focus {\n  outline: none;\n}\ninput[disabled][data-v-61d92e31] {\n  background-color: transparent;\n}\n.vue-tags-input[data-v-61d92e31] {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff;\n}\ndiv.vue-tags-input.disabled[data-v-61d92e31] {\n  opacity: 0.5;\n}\ndiv.vue-tags-input.disabled *[data-v-61d92e31] {\n    cursor: default;\n}\n.ti-input[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap;\n}\n.ti-tags[data-v-61d92e31] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em;\n}\n.ti-tag[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-tag[data-v-61d92e31]:focus {\n    outline: none;\n}\n.ti-tag .ti-content[data-v-61d92e31] {\n    display: flex;\n    align-items: center;\n}\n.ti-tag .ti-tag-center[data-v-61d92e31] {\n    position: relative;\n}\n.ti-tag span[data-v-61d92e31] {\n    line-height: .85em;\n}\n.ti-tag span.ti-hidden[data-v-61d92e31] {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre;\n}\n.ti-tag .ti-actions[data-v-61d92e31] {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em;\n}\n.ti-tag .ti-actions i[data-v-61d92e31] {\n      cursor: pointer;\n}\n.ti-tag[data-v-61d92e31]:last-child {\n    margin-right: 4px;\n}\n.ti-tag.ti-invalid[data-v-61d92e31], .ti-tag.ti-tag.ti-deletion-mark[data-v-61d92e31] {\n    background-color: #e54d42;\n}\n.ti-new-tag-input-wrapper[data-v-61d92e31] {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em;\n}\n.ti-new-tag-input-wrapper input[data-v-61d92e31] {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px;\n}\n.ti-new-tag-input[data-v-61d92e31] {\n  line-height: initial;\n}\n.ti-autocomplete[data-v-61d92e31] {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20;\n}\n.ti-item > div[data-v-61d92e31] {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%;\n}\n.ti-selected-item[data-v-61d92e31] {\n  background-color: #5C6BC0;\n  color: #fff;\n}\n',"",{version:3,sources:["C:/Users/johan/dev/vue-tags-input/vue-tags-input/C:/Users/johan/dev/vue-tags-input/vue-tags-input/vue-tags-input.scss"],names:[],mappings:"AAAA;EACE,uBAAuB;EACvB,mCAA8C;EAC9C,+JAAuM;EACvM,oBAAoB;EACpB,mBAAmB;CAAE;AAEvB;EACE,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,mCAAmC;CAAE;AAEvC;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;CAAE;AAE1B;EACE,uBAAuB;CAAE;AAE3B;EACE,cAAc;CAAE;AAElB;EACE,8BAA8B;CAAE;AAElC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;CAAE;AAE3B;EACE,aAAa;CAAE;AACf;IACE,gBAAgB;CAAE;AAEtB;EACE,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,gBAAgB;CAAE;AAEpB;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;CAAE;AAErB;EACE,0BAA0B;EAC1B,YAAY;EACZ,mBAAmB;EACnB,cAAc;EACd,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,cAAc;CAAE;AAClB;IACE,cAAc;IACd,oBAAoB;CAAE;AACxB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;CAAE;AACvB;IACE,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;CAAE;AACrB;IACE,iBAAiB;IACjB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;CAAE;AACpB;MACE,gBAAgB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,0BAA0B;CAAE;AAEhC;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAAE;AACnB;IACE,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,aAAa;IACb,YAAY;CAAE;AAElB;EACE,qBAAqB;CAAE;AAEzB;EACE,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;EACZ,uBAAuB;EACvB,YAAY;CAAE;AAEhB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;CAAE;AAEhB;EACE,0BAA0B;EAC1B,YAAY;CAAE",file:"vue-tags-input.scss?vue&type=style&index=0&id=61d92e31&lang=scss&scoped=true&",sourcesContent:['@font-face {\n  font-family: \'icomoon\';\n  src: url("./assets/fonts/icomoon.eot?7grlse");\n  src: url("./assets/fonts/icomoon.eot?7grlse#iefix") format("embedded-opentype"), url("./assets/fonts/icomoon.ttf?7grlse") format("truetype"), url("./assets/fonts/icomoon.woff?7grlse") format("woff");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^="ti-icon-"], [class*=" ti-icon-"] {\n  font-family: \'icomoon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.ti-icon-check:before {\n  content: "\\e902"; }\n\n.ti-icon-close:before {\n  content: "\\e901"; }\n\n.ti-icon-undo:before {\n  content: "\\e900"; }\n\nul {\n  margin: 0px;\n  padding: 0px;\n  list-style-type: none; }\n\n*, *:before, *:after {\n  box-sizing: border-box; }\n\ninput:focus {\n  outline: none; }\n\ninput[disabled] {\n  background-color: transparent; }\n\n.vue-tags-input {\n  max-width: 450px;\n  position: relative;\n  background-color: #fff; }\n\ndiv.vue-tags-input.disabled {\n  opacity: 0.5; }\n  div.vue-tags-input.disabled * {\n    cursor: default; }\n\n.ti-input {\n  border: 1px solid #ccc;\n  display: flex;\n  padding: 4px;\n  flex-wrap: wrap; }\n\n.ti-tags {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  line-height: 1em; }\n\n.ti-tag {\n  background-color: #5C6BC0;\n  color: #fff;\n  border-radius: 2px;\n  display: flex;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-tag:focus {\n    outline: none; }\n  .ti-tag .ti-content {\n    display: flex;\n    align-items: center; }\n  .ti-tag .ti-tag-center {\n    position: relative; }\n  .ti-tag span {\n    line-height: .85em; }\n  .ti-tag span.ti-hidden {\n    padding-left: 14px;\n    visibility: hidden;\n    height: 0px;\n    white-space: pre; }\n  .ti-tag .ti-actions {\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    font-size: 1.15em; }\n    .ti-tag .ti-actions i {\n      cursor: pointer; }\n  .ti-tag:last-child {\n    margin-right: 4px; }\n  .ti-tag.ti-invalid, .ti-tag.ti-tag.ti-deletion-mark {\n    background-color: #e54d42; }\n\n.ti-new-tag-input-wrapper {\n  display: flex;\n  flex: 1 0 auto;\n  padding: 3px 5px;\n  margin: 2px;\n  font-size: .85em; }\n  .ti-new-tag-input-wrapper input {\n    flex: 1 0 auto;\n    min-width: 100px;\n    border: none;\n    padding: 0px;\n    margin: 0px; }\n\n.ti-new-tag-input {\n  line-height: initial; }\n\n.ti-autocomplete {\n  border: 1px solid #ccc;\n  border-top: none;\n  position: absolute;\n  width: 100%;\n  background-color: #fff;\n  z-index: 20; }\n\n.ti-item > div {\n  cursor: pointer;\n  padding: 3px 6px;\n  width: 100%; }\n\n.ti-selected-item {\n  background-color: #5C6BC0;\n  color: #fff; }\n'],sourceRoot:""}])},function(A,t,e){"use strict";A.exports=function(A){return"string"!=typeof A?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),/["'() \t\n]/.test(A)?'"'+A.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':A)}},function(A,t){A.exports="data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBawAAAC8AAAAYGNtYXAXVtKJAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZqWfozAAAAF4AAAA/GhlYWQPxZgIAAACdAAAADZoaGVhB4ADyAAAAqwAAAAkaG10eBIAAb4AAALQAAAAHGxvY2EAkgDiAAAC7AAAABBtYXhwAAkAHwAAAvwAAAAgbmFtZZlKCfsAAAMcAAABhnBvc3QAAwAAAAAEpAAAACAAAwOAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6QL//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAFYBAQO+AoEAHAAAATIXHgEXFhcHJicuAScmIyIGBxchERc2Nz4BNzYCFkpDQ28pKRdkECAfVTM0OT9wLZz+gJgdIiJLKSgCVRcYUjg5QiAzKys+ERIrJZoBgJoZFRQcCAgAAQDWAIEDKgLVAAsAAAEHFwcnByc3JzcXNwMq7u487u487u487u4Cme7uPO7uPO7uPO7uAAEAkgCBA4ACvQAFAAAlARcBJzcBgAHEPP4A7jz5AcQ8/gDuPAAAAAABAAAAAAAAH8nTUV8PPPUACwQAAAAAANZ1KhsAAAAA1nUqGwAAAAADvgLVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAO+AAEAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAAAAgAAAAQAAFYEAADWBAAAkgAAAAAACgAUAB4AUABqAH4AAQAAAAcAHQABAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},function(A,t){A.exports="data:font/woff;base64,d09GRgABAAAAAAUQAAsAAAAABMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFrGNtYXAAAAFoAAAAVAAAAFQXVtKJZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAPwAAAD8pZ+jMGhlYWQAAALAAAAANgAAADYPxZgIaGhlYQAAAvgAAAAkAAAAJAeAA8hobXR4AAADHAAAABwAAAAcEgABvmxvY2EAAAM4AAAAEAAAABAAkgDibWF4cAAAA0gAAAAgAAAAIAAJAB9uYW1lAAADaAAAAYYAAAGGmUoJ+3Bvc3QAAATwAAAAIAAAACAAAwAAAAMDgAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QIDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkC//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQBWAQEDvgKBABwAAAEyFx4BFxYXByYnLgEnJiMiBgcXIREXNjc+ATc2AhZKQ0NvKSkXZBAgH1UzNDk/cC2c/oCYHSIiSykoAlUXGFI4OUIgMysrPhESKyWaAYCaGRUUHAgIAAEA1gCBAyoC1QALAAABBxcHJwcnNyc3FzcDKu7uPO7uPO7uPO7uApnu7jzu7jzu7jzu7gABAJIAgQOAAr0ABQAAJQEXASc3AYABxDz+AO48+QHEPP4A7jwAAAAAAQAAAAAAAB/J01FfDzz1AAsEAAAAAADWdSobAAAAANZ1KhsAAAAAA74C1QAAAAgAAgAAAAAAAAABAAADwP/AAAAEAAAAAAADvgABAAAAAAAAAAAAAAAAAAAABwQAAAAAAAAAAAAAAAIAAAAEAABWBAAA1gQAAJIAAAAAAAoAFAAeAFAAagB+AAEAAAAHAB0AAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(A,t,e){"use strict";e.r(t);var n=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"vue-tags-input",class:[{"ti-disabled":A.disabled},{"ti-focus":A.focused}]},[e("div",{staticClass:"ti-input"},[A.tagsCopy?e("ul",{staticClass:"ti-tags"},[A._l(A.tagsCopy,function(t,n){return e("li",{key:n,staticClass:"ti-tag",class:[{"ti-editing":A.tagsEditStatus[n]},t.tiClasses,t.classes,{"ti-deletion-mark":A.isMarked(n)}],style:t.style,attrs:{tabindex:"0"},on:{click:function(e){return A.$emit("tag-clicked",{tag:t,index:n})}}},[e("div",{staticClass:"ti-content"},[A.$scopedSlots["tag-left"]?e("div",{staticClass:"ti-tag-left"},[A._t("tag-left",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e(),A._v(" "),e("div",{ref:"tagCenter",refInFor:!0,staticClass:"ti-tag-center"},[A.$scopedSlots["tag-center"]?A._e():e("span",{class:{"ti-hidden":A.tagsEditStatus[n]},on:{click:function(t){return A.performEditTag(n)}}},[A._v(A._s(t.text))]),A._v(" "),A.$scopedSlots["tag-center"]?A._e():e("tag-input",{attrs:{scope:{edit:A.tagsEditStatus[n],maxlength:A.maxlength,tag:t,index:n,validateTag:A.createChangedTag,performCancelEdit:A.cancelEdit,performSaveEdit:A.performSaveTag}}}),A._v(" "),A._t("tag-center",null,{tag:t,index:n,maxlength:A.maxlength,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,validateTag:A.createChangedTag,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2),A._v(" "),A.$scopedSlots["tag-right"]?e("div",{staticClass:"ti-tag-right"},[A._t("tag-right",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)})],2):A._e()]),A._v(" "),e("div",{staticClass:"ti-actions"},[A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:A.tagsEditStatus[n],expression:"tagsEditStatus[index]"}],staticClass:"ti-icon-undo",on:{click:function(t){return A.cancelEdit(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._e():e("i",{directives:[{name:"show",rawName:"v-show",value:!A.tagsEditStatus[n],expression:"!tagsEditStatus[index]"}],staticClass:"ti-icon-close",on:{click:function(t){return A.performDeleteTag(n)}}}),A._v(" "),A.$scopedSlots["tag-actions"]?A._t("tag-actions",null,{tag:t,index:n,edit:A.tagsEditStatus[n],performSaveEdit:A.performSaveTag,performDelete:A.performDeleteTag,performCancelEdit:A.cancelEdit,performOpenEdit:A.performEditTag,deletionMark:A.isMarked(n)}):A._e()],2)])}),A._v(" "),e("li",{staticClass:"ti-new-tag-input-wrapper"},[e("input",A._b({ref:"newTagInput",staticClass:"ti-new-tag-input",class:[A.createClasses(A.newTag,A.tags,A.validation,A.isDuplicate)],attrs:{placeholder:A.placeholder,maxlength:A.maxlength,disabled:A.disabled,type:"text",size:"1"},domProps:{value:A.newTag},on:{keydown:[function(t){return A.performAddTags(A.filteredAutocompleteItems[A.selectedItem]||A.newTag,t)},function(t){return t.type.indexOf("key")||8===t.keyCode?A.invokeDelete(t):null},function(t){return t.type.indexOf("key")||9===t.keyCode?A.performBlur(t):null},function(t){return t.type.indexOf("key")||38===t.keyCode?A.selectItem(t,"before"):null},function(t){return t.type.indexOf("key")||40===t.keyCode?A.selectItem(t,"after"):null}],paste:A.addTagsFromPaste,input:A.updateNewTag,blur:function(t){return A.$emit("blur",t)},focus:function(t){A.focused=!0,A.$emit("focus",t)},click:function(t){!A.addOnlyFromAutocomplete&&(A.selectedItem=null)}}},"input",A.$attrs,!1))])],2):A._e()]),A._v(" "),A._t("between-elements"),A._v(" "),A.autocompleteOpen?e("div",{staticClass:"ti-autocomplete",on:{mouseout:function(t){A.selectedItem=null}}},[A._t("autocomplete-header"),A._v(" "),e("ul",A._l(A.filteredAutocompleteItems,function(t,n){return e("li",{key:n,staticClass:"ti-item",class:[t.tiClasses,t.classes,{"ti-selected-item":A.isSelected(n)}],style:t.style,on:{mouseover:function(t){!A.disabled&&(A.selectedItem=n)}}},[A.$scopedSlots["autocomplete-item"]?A._t("autocomplete-item",null,{item:t,index:n,performAdd:function(t){return A.performAddTags(t,void 0,"autocomplete")},selected:A.isSelected(n)}):e("div",{on:{click:function(e){return A.performAddTags(t,void 0,"autocomplete")}}},[A._v("\n          "+A._s(t.text)+"\n        ")])],2)}),0),A._v(" "),A._t("autocomplete-footer")],2):A._e()],2)};n._withStripped=!0;var i=e(5),a=e.n(i),r=function(A){return JSON.parse(JSON.stringify(A))},o=function(A,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0;void 0===A.text&&(A={text:A});var i=function(A,t){return t.filter(function(t){var e=A.text;return"string"==typeof t.rule?!new RegExp(t.rule).test(e):t.rule instanceof RegExp?!t.rule.test(e):"[object Function]"==={}.toString.call(t.rule)?t.rule(A):void 0}).map(function(A){return A.classes})}(A,e),a=function(A,t){for(var e=0;e<A.length;){if(t(A[e],e,A))return e;e++}return-1}(t,function(t){return t===A}),o=r(t),s=-1!==a?o.splice(a,1)[0]:r(A);return(n?n(o,s):-1!==o.map(function(A){return A.text}).indexOf(s.text))&&i.push("ti-duplicate"),0===i.length?i.push("ti-valid"):i.push("ti-invalid"),i},s=function(A){void 0===A.text&&(A={text:A});for(var t=r(A),e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.tiClasses=o.apply(void 0,[A].concat(n)),t},u=function(A){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return A.map(function(t){return s.apply(void 0,[t,A].concat(e))})},c=function(){var A=this,t=A.$createElement,e=A._self._c||t;return A.scope.edit?e("input",{directives:[{name:"model",rawName:"v-model",value:A.scope.tag.text,expression:"scope.tag.text"}],staticClass:"ti-tag-input",attrs:{maxlength:A.scope.maxlength,type:"text",size:"1"},domProps:{value:A.scope.tag.text},on:{input:[function(t){t.target.composing||A.$set(A.scope.tag,"text",t.target.value)},function(t){return A.scope.validateTag(A.scope.index,t)}],blur:function(t){return A.scope.performCancelEdit(A.scope.index)},keydown:function(t){return A.scope.performSaveEdit(A.scope.index,t)}}}):A._e()};c._withStripped=!0;var d={name:"TagInput",props:{scope:{type:Object}}};e(7);function l(A,t,e,n,i,a,r,o){var s,u="function"==typeof A?A.options:A;if(t&&(u.render=t,u.staticRenderFns=e,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),r?(s=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),i&&i.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(r)},u._ssrRegister=s):i&&(s=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(A,t){return s.call(t),c(A,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:A,options:u}}var p=l(d,c,[],!1,null,"108f4f13",null);p.options.__file="vue-tags-input/tag-input.vue";var g=p.exports,f=function(A){return!A.some(function(A){var t=!A.text;t&&console.warn('Missing property "text"',A);var e=!1;return A.classes&&(e="string"!=typeof A.classes),e&&console.warn('Property "classes" must be type of string',A),t||e})},B=function(A){return!A.some(function(A){if("number"==typeof A){var t=isFinite(A)&&Math.floor(A)===A;return t||console.warn("Only numerics are allowed for this prop. Found:",A),!t}if("string"==typeof A){var e=/\W|[a-z]|!\d/i.test(A);return e||console.warn("Only alpha strings are allowed for this prop. Found:",A),!e}return console.warn("Only numeric and string values are allowed. Found:",A),!1})},v={value:{type:String,default:"",required:!0},tags:{type:Array,default:function(){return[]},validator:f},autocompleteItems:{type:Array,default:function(){return[]},validator:f},allowEditTags:{type:Boolean,default:!1},autocompleteFilterDuplicates:{default:!0,type:Boolean},addOnlyFromAutocomplete:{type:Boolean,default:!1},autocompleteMinLength:{type:Number,default:1},autocompleteAlwaysOpen:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"Add Tag"},addOnKey:{type:Array,default:function(){return[13]},validator:B},saveOnKey:{type:Array,default:function(){return[13]},validator:B},maxTags:{type:Number},maxlength:{type:Number},validation:{type:Array,default:function(){return[]},validator:function(A){return!A.some(function(A){var t=!A.rule;t&&console.warn('Property "rule" is missing',A);var e=A.rule&&("string"==typeof A.rule||A.rule instanceof RegExp||"[object Function]"==={}.toString.call(A.rule));e||console.warn("A rule must be type of string, RegExp or function. Found:",JSON.stringify(A.rule));var n=!A.classes;n&&console.warn('Property "classes" is missing',A);var i=A.type&&"string"!=typeof A.type;return i&&console.warn('Property "type" must be type of string. Found:',A),!e||t||n||i})}},separators:{type:Array,default:function(){return[";"]},validator:function(A){return!A.some(function(A){var t="string"!=typeof A;return t&&console.warn("Separators must be type of string. Found:",A),t})}},avoidAddingDuplicates:{type:Boolean,default:!0},addOnBlur:{type:Boolean,default:!0},isDuplicate:{type:Function,default:null},addFromPaste:{type:Boolean,default:!0},deleteOnBackspace:{default:!0,type:Boolean}};function m(A){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A})(A)}var h={name:"VueTagsInput",components:{TagInput:g},props:v,data:function(){return{newTag:null,tagsCopy:null,tagsEditStatus:null,deletionMark:null,deletionMarkTime:null,selectedItem:null,focused:null}},computed:{autocompleteOpen:function(){return!!this.autocompleteAlwaysOpen||null!==this.newTag&&this.newTag.length>=this.autocompleteMinLength&&this.filteredAutocompleteItems.length>0&&this.focused},filteredAutocompleteItems:function(){var A=this,t=this.autocompleteItems.map(function(t){return s(t,A.tags,A.validation,A.isDuplicate)});return this.autocompleteFilterDuplicates?t.filter(this.duplicateFilter):t}},methods:{createClasses:o,getSelectedIndex:function(A){var t=this.filteredAutocompleteItems,e=this.selectedItem,n=t.length-1;if(0!==t.length)return null===e?0:"before"===A&&0===e?n:"after"===A&&e===n?0:"after"===A?e+1:e-1},selectDefaultItem:function(){this.addOnlyFromAutocomplete&&this.filteredAutocompleteItems.length>0?this.selectedItem=0:this.selectedItem=null},selectItem:function(A,t){A.preventDefault(),this.selectedItem=this.getSelectedIndex(t)},isSelected:function(A){return this.selectedItem===A},isMarked:function(A){return this.deletionMark===A},invokeDelete:function(){var A=this;if(this.deleteOnBackspace&&!(this.newTag.length>0)){var t=this.tagsCopy.length-1;null===this.deletionMark?(this.deletionMarkTime=setTimeout(function(){return A.deletionMark=null},1e3),this.deletionMark=t):this.performDeleteTag(t)}},addTagsFromPaste:function(){var A=this;this.addFromPaste&&setTimeout(function(){return A.performAddTags(A.newTag)},10)},performEditTag:function(A){var t=this;this.allowEditTags&&(this._events["before-editing-tag"]||this.editTag(A),this.$emit("before-editing-tag",{index:A,tag:this.tagsCopy[A],editTag:function(){return t.editTag(A)}}))},editTag:function(A){this.allowEditTags&&(this.toggleEditMode(A),this.focus(A))},toggleEditMode:function(A){this.allowEditTags&&!this.disabled&&this.$set(this.tagsEditStatus,A,!this.tagsEditStatus[A])},createChangedTag:function(A,t){var e=this.tagsCopy[A];e.text=t?t.target.value:this.tagsCopy[A].text,this.$set(this.tagsCopy,A,s(e,this.tagsCopy,this.validation,this.isDuplicate))},focus:function(A){var t=this;this.$nextTick(function(){var e=t.$refs.tagCenter[A].querySelector("input.ti-tag-input");e&&e.focus()})},quote:function(A){return A.replace(/([()[{*+.$^\\|?])/g,"\\$1")},cancelEdit:function(A){this.tags[A]&&(this.tagsCopy[A]=r(s(this.tags[A],this.tags,this.validation,this.isDuplicate)),this.$set(this.tagsEditStatus,A,!1))},hasForbiddingAddRule:function(A){var t=this;return A.some(function(A){var e=t.validation.find(function(t){return A===t.classes});return!!e&&e.disableAdd})},createTagTexts:function(A){var t=this,e=new RegExp(this.separators.map(function(A){return t.quote(A)}).join("|"));return A.split(e).map(function(A){return{text:A}})},performDeleteTag:function(A){var t=this;this._events["before-deleting-tag"]||this.deleteTag(A),this.$emit("before-deleting-tag",{index:A,tag:this.tagsCopy[A],deleteTag:function(){return t.deleteTag(A)}})},deleteTag:function(A){this.disabled||(this.deletionMark=null,clearTimeout(this.deletionMarkTime),this.tagsCopy.splice(A,1),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},noTriggerKey:function(A,t){var e=-1!==this[t].indexOf(A.keyCode)||-1!==this[t].indexOf(A.key);return e&&A.preventDefault(),!e},performAddTags:function(A,t,e){var n=this;if(!(this.disabled||t&&this.noTriggerKey(t,"addOnKey"))){var i=[];"object"===m(A)&&(i=[A]),"string"==typeof A&&(i=this.createTagTexts(A)),(i=i.filter(function(A){return A.text.trim().length>0})).forEach(function(A){A=s(A,n.tags,n.validation,n.isDuplicate),n._events["before-adding-tag"]||n.addTag(A,e),n.$emit("before-adding-tag",{tag:A,addTag:function(){return n.addTag(A,e)}})})}},duplicateFilter:function(A){return this.isDuplicate?!this.isDuplicate(this.tagsCopy,A):!this.tagsCopy.find(function(t){return t.text===A.text})},addTag:function(A){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"new-tag-input",n=this.filteredAutocompleteItems.map(function(A){return A.text});this.addOnlyFromAutocomplete&&-1===n.indexOf(A.text)||this.$nextTick(function(){return t.maxTags&&t.maxTags<=t.tagsCopy.length?t.$emit("max-tags-reached",A):t.avoidAddingDuplicates&&!t.duplicateFilter(A)?t.$emit("adding-duplicate",A):void(t.hasForbiddingAddRule(A.tiClasses)||(t.$emit("input",""),t.tagsCopy.push(A),t._events["update:tags"]&&t.$emit("update:tags",t.tagsCopy),"autocomplete"===e&&t.$refs.newTagInput.focus(),t.$emit("tags-changed",t.tagsCopy)))})},performSaveTag:function(A,t){var e=this,n=this.tagsCopy[A];this.disabled||t&&this.noTriggerKey(t,"addOnKey")||0!==n.text.trim().length&&(this._events["before-saving-tag"]||this.saveTag(A,n),this.$emit("before-saving-tag",{index:A,tag:n,saveTag:function(){return e.saveTag(A,n)}}))},saveTag:function(A,t){if(this.avoidAddingDuplicates){var e=r(this.tagsCopy),n=e.splice(A,1)[0];if(this.isDuplicate?this.isDuplicate(e,n):-1!==e.map(function(A){return A.text}).indexOf(n.text))return this.$emit("saving-duplicate",t)}this.hasForbiddingAddRule(t.tiClasses)||(this.$set(this.tagsCopy,A,t),this.toggleEditMode(A),this._events["update:tags"]&&this.$emit("update:tags",this.tagsCopy),this.$emit("tags-changed",this.tagsCopy))},tagsEqual:function(){var A=this;return!this.tagsCopy.some(function(t,e){return!a()(t,A.tags[e])})},updateNewTag:function(A){var t=A.target.value;this.newTag=t,this.$emit("input",t)},initTags:function(){this.tagsCopy=u(this.tags,this.validation,this.isDuplicate),this.tagsEditStatus=r(this.tags).map(function(){return!1}),this._events["update:tags"]&&!this.tagsEqual()&&this.$emit("update:tags",this.tagsCopy)},blurredOnClick:function(A){this.$el.contains(A.target)||this.$el.contains(document.activeElement)||this.performBlur(A)},performBlur:function(){this.addOnBlur&&this.focused&&this.performAddTags(this.newTag),this.focused=!1}},watch:{value:function(A){this.addOnlyFromAutocomplete||(this.selectedItem=null),this.newTag=A},tags:{handler:function(){this.initTags()},deep:!0},autocompleteOpen:"selectDefaultItem"},created:function(){this.newTag=this.value,this.initTags()},mounted:function(){this.selectDefaultItem(),document.addEventListener("click",this.blurredOnClick)},destroyed:function(){document.removeEventListener("click",this.blurredOnClick)}},C=(e(9),l(h,n,[],!1,null,"61d92e31",null));C.options.__file="vue-tags-input/vue-tags-input.vue";var E=C.exports;e.d(t,"VueTagsInput",function(){return E}),e.d(t,"createClasses",function(){return o}),e.d(t,"createTag",function(){return s}),e.d(t,"createTags",function(){return u}),e.d(t,"TagInput",function(){return g}),E.install=function(A){return A.component(E.name,E)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(E);t.default=E}])});
//# sourceMappingURL=vue-tags-input.js.map

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js"
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PricingPreview",
  props: {
    productId: {
      type: [Number, String],
      "default": null
    },
    productData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    warehouseId: {
      type: [Number, String],
      "default": null
    },
    overrides: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    currencySymbol: {
      type: String,
      "default": ""
    },
    priceDecimals: {
      type: Number,
      "default": 2
    },
    debounceMs: {
      type: Number,
      "default": 350
    }
  },
  data: function data() {
    return {
      loading: false,
      preview: null,
      errorMessage: "",
      previewTimer: null,
      requestSequence: 0
    };
  },
  computed: {
    normalizedProductId: function normalizedProductId() {
      var direct = this.toNullableInteger(this.productId);
      if (direct !== null) {
        return direct;
      }
      return this.toNullableInteger(this.productData && this.productData.id);
    },
    normalizedWarehouseId: function normalizedWarehouseId() {
      return this.toNullableInteger(this.warehouseId);
    },
    normalizedProductPayload: function normalizedProductPayload() {
      var product = this.productData || {};
      return {
        id: this.normalizedProductId,
        is_jewelry_item: !!product.is_jewelry_item,
        jewelry_item_type: product.jewelry_item_type || "",
        metal_type_id: this.toNullableInteger(product.metal_type_id),
        karat_id: this.toNullableInteger(product.karat_id),
        jewelry_gross_weight: this.toNullableNumber(product.jewelry_gross_weight),
        jewelry_net_weight: this.toNullableNumber(product.jewelry_net_weight),
        jewelry_metal_weight: this.toNullableNumber(product.jewelry_metal_weight),
        jewelry_weight_uom: product.jewelry_weight_uom || "g",
        making_charge_type: product.making_charge_type || "",
        making_charge_value: this.toNullableNumber(product.making_charge_value),
        wastage_type: product.wastage_type || "",
        wastage_value: this.toNullableNumber(product.wastage_value),
        TaxNet: this.toNullableNumber(product.TaxNet),
        tax_method: product.tax_method || null,
        discount: this.toNullableNumber(product.discount),
        discount_method: product.discount_method || null,
        item_stones: this.normalizeStoneRows(product.item_stones)
      };
    },
    hasDraftProductData: function hasDraftProductData() {
      var payload = this.normalizedProductPayload;
      return payload.is_jewelry_item || payload.metal_type_id !== null || payload.karat_id !== null || payload.jewelry_metal_weight !== null || payload.jewelry_gross_weight !== null || payload.item_stones.length > 0;
    },
    canFetchPreview: function canFetchPreview() {
      if (this.normalizedProductPayload.is_jewelry_item || this.hasDraftProductData) {
        return !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
      }
      return this.normalizedProductId !== null;
    },
    emptyStateMessage: function emptyStateMessage() {
      if (!this.hasDraftProductData && this.normalizedProductId !== null) {
        return "";
      }
      if (!this.hasDraftProductData && this.normalizedProductId === null) {
        return "Enable Jewelry Item to begin a live pricing preview.";
      }
      if (!this.normalizedProductPayload.metal_type_id) {
        return "Select a metal type to preview pricing.";
      }
      if (!this.normalizedProductPayload.karat_id) {
        return "Select a karat to preview pricing.";
      }
      return "";
    },
    requestPayload: function requestPayload() {
      var payload = {
        warehouse_id: this.normalizedWarehouseId,
        overrides: this.normalizeOverrides(this.overrides || {})
      };
      if (this.normalizedProductId !== null) {
        payload.product_id = this.normalizedProductId;
      }
      if (this.hasDraftProductData) {
        payload.product = this.normalizedProductPayload;
      }
      return payload;
    },
    requestSignature: function requestSignature() {
      return JSON.stringify(this.requestPayload);
    },
    rateMissingWarning: function rateMissingWarning() {
      if (!this.preview) {
        return false;
      }
      var rateId = this.preview.gold_rate_id;
      var rateValue = Number(this.preview.gold_rate || 0);
      return !rateId && rateValue <= 0 && !!this.normalizedProductPayload.metal_type_id && !!this.normalizedProductPayload.karat_id;
    },
    // The backend reports which metal it actually priced (metal_type_name),
    // so this always matches the selected metal — never hardcoded to gold.
    metalRateLabel: function metalRateLabel() {
      var name = this.preview && this.preview.metal_type_name;
      return name ? "".concat(name, " Rate") : "Metal Rate";
    }
  },
  watch: {
    requestSignature: {
      immediate: true,
      handler: function handler() {
        this.schedulePreview();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.previewTimer) {
      clearTimeout(this.previewTimer);
      this.previewTimer = null;
    }
  },
  methods: {
    schedulePreview: function schedulePreview() {
      var _this = this;
      if (this.previewTimer) {
        clearTimeout(this.previewTimer);
      }
      if (!this.canFetchPreview) {
        this.loading = false;
        this.errorMessage = "";
        this.preview = null;
        return;
      }
      this.previewTimer = setTimeout(function () {
        _this.fetchPreview();
      }, this.debounceMs);
    },
    fetchPreview: function fetchPreview() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var sequence, response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              sequence = ++_this2.requestSequence;
              _this2.loading = true;
              _this2.errorMessage = "";
              _context.p = 1;
              _context.n = 2;
              return axios.post("pricing/preview", _this2.requestPayload, {
                meta: {
                  skipErrorRedirect: true
                }
              });
            case 2:
              response = _context.v;
              if (!(sequence !== _this2.requestSequence)) {
                _context.n = 3;
                break;
              }
              return _context.a(2);
            case 3:
              _this2.preview = response && response.data && response.data.data ? response.data.data : null;
              _context.n = 6;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              if (!(sequence !== _this2.requestSequence)) {
                _context.n = 5;
                break;
              }
              return _context.a(2);
            case 5:
              _this2.preview = null;
              _this2.errorMessage = _this2.extractErrorMessage(_t);
            case 6:
              _context.p = 6;
              if (sequence === _this2.requestSequence) {
                _this2.loading = false;
              }
              return _context.f(6);
            case 7:
              return _context.a(2);
          }
        }, _callee, null, [[1, 4, 6, 7]]);
      }))();
    },
    normalizeOverrides: function normalizeOverrides() {
      var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cleaned = {};
      Object.keys(overrides).forEach(function (key) {
        var value = overrides[key];
        if (value === "" || value === null || typeof value === "undefined") {
          return;
        }
        cleaned[key] = value;
      });
      return cleaned;
    },
    normalizeStoneRows: function normalizeStoneRows(stones) {
      var _this3 = this;
      if (!Array.isArray(stones)) {
        return [];
      }
      return stones.map(function (stone) {
        return {
          stone_type_id: _this3.toNullableInteger(stone && stone.stone_type_id),
          quantity: _this3.toNullableNumber(stone && stone.quantity),
          unit_cost_amount: _this3.toNullableNumber(stone && stone.unit_cost_amount),
          total_cost_amount: _this3.toNullableNumber(stone && stone.total_cost_amount),
          carat_value: _this3.toNullableNumber(stone && stone.carat_value)
        };
      });
    },
    toNullableInteger: function toNullableInteger(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }
      var parsed = Number.parseInt(value, 10);
      return Number.isFinite(parsed) ? parsed : null;
    },
    toNullableNumber: function toNullableNumber(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }
      var parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    },
    formatMoney: function formatMoney(value) {
      var amount = this.toNullableNumber(value) || 0;
      var formatted = amount.toFixed(this.priceDecimals);
      return this.currencySymbol ? "".concat(this.currencySymbol, " ").concat(formatted) : formatted;
    },
    formatWeight: function formatWeight(value) {
      var amount = this.toNullableNumber(value) || 0;
      return "".concat(amount.toFixed(3), " ").concat(this.normalizedProductPayload.jewelry_weight_uom || "g");
    },
    makingChargeTypeLabel: function makingChargeTypeLabel(type) {
      var labels = {
        fixed: "Fixed",
        per_gram: "Per Gram",
        percentage: "Percentage",
        manual: "Manual",
        formula: "Formula"
      };
      return labels[type] || type;
    },
    formatDate: function formatDate(value) {
      if (!value) {
        return "—";
      }
      var parsed = new Date(value);
      if (Number.isNaN(parsed.getTime())) {
        return value;
      }
      return parsed.toLocaleString();
    },
    extractErrorMessage: function extractErrorMessage(error) {
      var payload = error && error.response && error.response.data ? error.response.data : error;
      if (payload && payload.errors && _typeof(payload.errors) === "object") {
        var firstErrorGroup = Object.values(payload.errors)[0];
        if (Array.isArray(firstErrorGroup) && firstErrorGroup.length) {
          return firstErrorGroup[0];
        }
        if (typeof firstErrorGroup === "string") {
          return firstErrorGroup;
        }
      }
      if (payload && payload.message) {
        return payload.message;
      }
      if (typeof payload === "string" && payload.trim() !== "") {
        return payload;
      }
      return "Unable to generate a pricing preview right now.";
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js"
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.umd.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_priceFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/priceFormat */ "./resources/src/utils/priceFormat.js");
/* harmony import */ var _components_PricingPreview_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PricingPreview.vue */ "./resources/src/views/app/components/PricingPreview.vue");
var _excluded = ["imageFile", "imagePreview"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  metaInfo: {
    title: "Create Product"
  },
  data: function data() {
    return {
      focused: false,
      timer: null,
      search_input: '',
      product_filter: [],
      warehouses: [],
      warehouse_locations: [],
      locationsByWarehouse: {},
      tag: "",
      len: 8,
      change: false,
      isLoading: true,
      SubmitProcessing: false,
      data: new FormData(),
      show_product_gtin: true,
      show_serial_tracking: false,
      enable_multi_pack_selling: false,
      packs: [],
      categories: [],
      quickCategory: {
        name: "",
        code: ""
      },
      quickCategorySubmitting: false,
      quickBrand: {
        name: "",
        description: ""
      },
      quickBrandSubmitting: false,
      quickUnit: {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      },
      quickUnitSubmitting: false,
      quickWarehouseLocation: {
        warehouse_id: "",
        code: "",
        name: "",
        is_active: true
      },
      quickWarehouseLocationWarehouseLocked: false,
      quickWarehouseLocationSubmitting: false,
      show_operator_quick: false,
      allSubcategories: [],
      units: [],
      units_base: [],
      units_sub: [],
      brands: [],
      metalTypes: [],
      karats: [],
      stoneTypes: [],
      jewelryModeEnabled: false,
      jewelryValidationVisible: false,
      jewelryStoneRowSeed: 0,
      jewelryDefaults: {
        making_charge_type: "",
        making_charge_value: "",
        wastage_type: "",
        wastage_value: "",
        weight_uom: "g"
      },
      jewelryItemTypeOptions: [{
        label: "Serialized",
        value: "serialized"
      }, {
        label: "Weighted",
        value: "weighted"
      }, {
        label: "Style",
        value: "style"
      }, {
        label: "Set",
        value: "set"
      }, {
        label: "Service",
        value: "service"
      }, {
        label: "Non-stock",
        value: "non_stock"
      }],
      makingChargeTypeOptions: [{
        label: "Fixed",
        value: "fixed"
      }, {
        label: "Per Gram",
        value: "per_gram"
      }, {
        label: "Percentage",
        value: "percentage"
      }, {
        label: "Manual",
        value: "manual"
      }, {
        label: "Formula",
        value: "formula"
      }],
      wastageTypeOptions: [{
        label: "Percentage of Weight",
        value: "percentage_of_weight"
      }, {
        label: "Percentage of Value",
        value: "percentage_of_value"
      }, {
        label: "Fixed Value",
        value: "fixed_value"
      }],
      jewelryWeightUnitOptions: [{
        label: "Gram (g)",
        value: "g"
      }, {
        label: "Milligram (mg)",
        value: "mg"
      }, {
        label: "Kilogram (kg)",
        value: "kg"
      }, {
        label: "Carat (ct)",
        value: "ct"
      }, {
        label: "Ounce (oz)",
        value: "oz"
      }],
      roles: {},
      variants: [],
      materiels: [],
      products_ing: [],
      product: {
        warehouses: {},
        type: "is_single",
        name: "",
        code: "",
        gtin: "",
        points: "",
        Type_barcode: "CODE128",
        cost: "",
        price: "",
        wholesale_price: "",
        min_price: "",
        brand_id: "",
        category_id: "",
        sub_category_id: "",
        assigned_category_ids: [],
        assigned_subcategory_ids: [],
        TaxNet: "0",
        tax_method: "1",
        discount_method: "1",
        discount: "0",
        unit_id: "",
        unit_sale_id: "",
        unit_purchase_id: "",
        stock_alert: "0",
        weight: "",
        length: "",
        width: "",
        height: "",
        image: "",
        note: "",
        is_variant: false,
        is_imei: false,
        not_selling: false,
        is_active: true,
        is_featured: false,
        hide_from_online_store: false,
        is_preorder: false,
        preorder_available_date: "",
        preorder_limit: "",
        preorder_note: "",
        is_batch_tracked: false,
        shelf_life_days: "",
        generic_name: "",
        strength: "",
        dosage_form: "",
        pack_size: "",
        manufacturer: "",
        prescription_required: false,
        drug_schedule: "",
        warranty_period: null,
        warranty_unit: 'months',
        warranty_terms: '',
        has_guarantee: false,
        guarantee_period: null,
        guarantee_unit: 'months',
        is_jewelry_item: false,
        ownership_type: "own",
        jewelry_item_type: "",
        metal_type_id: "",
        karat_id: "",
        jewelry_gross_weight: "",
        jewelry_net_weight: "",
        jewelry_metal_weight: "",
        jewelry_weight_uom: "g",
        hallmark_reference: "",
        certificate_number: "",
        making_charge_type: "",
        making_charge_value: "",
        making_charge_formula: "",
        wastage_type: "",
        wastage_value: "",
        item_stones: []
      },
      code_exist: "",
      productGalleryItems: [],
      galleryUidSeed: 0
    };
  },
  components: {
    VueTagsInput: (_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_0___default()),
    draggable: (vuedraggable__WEBPACK_IMPORTED_MODULE_3___default()),
    PricingPreview: _components_PricingPreview_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(["currentUserPermissions", "currentUser"])), {}, {
    isJewelryTenant: function isJewelryTenant() {
      if (typeof window === 'undefined' || !window.location) return false;
      var host = String(window.location.hostname || '').toLowerCase();
      return host.split('.')[0] === 'jewelry';
    },
    showPharmacySection: function showPharmacySection() {
      return !this.isJewelryTenant;
    },
    // Monetary precision (2 or 3) driven by the "Enable 3 Decimal Pricing" setting.
    priceDecimals: function priceDecimals() {
      return (0,_utils_priceFormat__WEBPACK_IMPORTED_MODULE_4__.getPriceDecimals)({
        store: this.$store
      });
    },
    totalCost: function totalCost() {
      return this.materiels.reduce(function (total, materiel) {
        return total + materiel.cost * materiel.quantity;
      }, 0);
    },
    subcategoryOptionsFiltered: function subcategoryOptionsFiltered() {
      var subs = this.allSubcategories || [];
      var cats = this.categories || [];
      var catName = function catName(id) {
        var c = cats.find(function (x) {
          return String(x.id) === String(id);
        });
        return c ? c.name : "";
      };
      var selectedCats = this.product.assigned_category_ids || [];
      var set = new Set(selectedCats.map(function (id) {
        return String(id);
      }));
      var filtered = !selectedCats.length ? [] : subs.filter(function (sc) {
        return set.has(String(sc.category_id));
      });
      return filtered.map(function (sc) {
        var cn = catName(sc.category_id);
        return {
          label: cn ? "".concat(sc.name, " (").concat(cn, ")") : sc.name,
          value: sc.id
        };
      });
    },
    canManageJewelryItems: function canManageJewelryItems() {
      return Array.isArray(this.currentUserPermissions) && this.currentUserPermissions.includes("jewelry_items_manage");
    },
    showJewelrySections: function showJewelrySections() {
      return this.jewelryModeEnabled && this.canManageJewelryItems && !!this.product.is_jewelry_item;
    },
    metalTypeOptions: function metalTypeOptions() {
      return (this.metalTypes || []).map(function (type) {
        return {
          label: type.name,
          value: type.id
        };
      });
    },
    filteredKaratOptions: function filteredKaratOptions() {
      var selectedMetalId = this.product.metal_type_id ? String(this.product.metal_type_id) : "";
      return (this.karats || []).filter(function (karat) {
        return !selectedMetalId || String(karat.metal_type_id) === selectedMetalId;
      }).map(function (karat) {
        return {
          label: karat.name,
          value: karat.id
        };
      });
    },
    stoneTypeOptions: function stoneTypeOptions() {
      return (this.stoneTypes || []).map(function (type) {
        return {
          label: type.name,
          value: type.id
        };
      });
    },
    selectedMetalName: function selectedMetalName() {
      var _this = this;
      var match = (this.metalTypes || []).find(function (type) {
        return String(type.id) === String(_this.product.metal_type_id || "");
      });
      return match ? match.name : "";
    },
    selectedKaratName: function selectedKaratName() {
      var _this2 = this;
      var match = (this.karats || []).find(function (karat) {
        return String(karat.id) === String(_this2.product.karat_id || "");
      });
      return match ? match.name : "";
    },
    jewelryItemTypeLabel: function jewelryItemTypeLabel() {
      var _this3 = this;
      var match = (this.jewelryItemTypeOptions || []).find(function (option) {
        return option.value === _this3.product.jewelry_item_type;
      });
      return match ? match.label : "";
    },
    preparedItemStoneCount: function preparedItemStoneCount() {
      return this.getPreparedItemStones().length;
    },
    jewelryErrors: function jewelryErrors() {
      var _this4 = this;
      var errors = {};
      if (!this.showJewelrySections) {
        return errors;
      }
      var grossWeight = this.toNullableNumber(this.product.jewelry_gross_weight);
      var netWeight = this.toNullableNumber(this.product.jewelry_net_weight);
      var metalWeight = this.toNullableNumber(this.product.jewelry_metal_weight);
      var makingChargeValue = this.toNullableNumber(this.product.making_charge_value);
      var wastageValue = this.toNullableNumber(this.product.wastage_value);
      var requiresWeight = !["service", "non_stock"].includes(this.product.jewelry_item_type);
      if (!this.product.jewelry_item_type) {
        errors.jewelry_item_type = "Jewelry item type is required.";
      }
      if (!this.product.metal_type_id) {
        errors.metal_type_id = "Metal type is required.";
      }
      if (this.product.metal_type_id && !this.product.karat_id && this.filteredKaratOptions.length) {
        errors.karat_id = "Karat is required for the selected metal.";
      }
      if (!this.product.jewelry_weight_uom) {
        errors.jewelry_weight_uom = "Weight unit is required.";
      }
      if (grossWeight !== null && grossWeight < 0) {
        errors.jewelry_gross_weight = "Gross weight cannot be negative.";
      }
      if (netWeight !== null && netWeight < 0) {
        errors.jewelry_net_weight = "Net weight cannot be negative.";
      }
      if (metalWeight !== null && metalWeight < 0) {
        errors.jewelry_metal_weight = "Metal weight cannot be negative.";
      }
      if (requiresWeight && (grossWeight === null || grossWeight <= 0)) {
        errors.jewelry_gross_weight = errors.jewelry_gross_weight || "Gross weight is required for this jewelry item.";
      }
      if (requiresWeight && (metalWeight === null || metalWeight <= 0)) {
        errors.jewelry_metal_weight = errors.jewelry_metal_weight || "Metal weight is required for this jewelry item.";
      }
      if (grossWeight !== null && netWeight !== null && netWeight > grossWeight) {
        errors.jewelry_net_weight = "Net weight cannot exceed gross weight.";
      }
      if (grossWeight !== null && metalWeight !== null && metalWeight > grossWeight) {
        errors.jewelry_metal_weight = "Metal weight cannot exceed gross weight.";
      }
      if (!this.product.making_charge_type) {
        errors.making_charge_type = "Making charge type is required.";
      }
      if (this.product.making_charge_type === "formula") {
        if (!this.product.making_charge_formula) {
          errors.making_charge_formula = "A making charge formula is required for the formula method.";
        }
      } else if (makingChargeValue === null || makingChargeValue < 0) {
        errors.making_charge_value = "Making charge value is required and must be zero or greater.";
      }
      if (!this.product.wastage_type) {
        errors.wastage_type = "Wastage type is required.";
      }
      if (wastageValue === null || wastageValue < 0) {
        errors.wastage_value = "Wastage value is required and must be zero or greater.";
      }
      if (this.product.hallmark_reference && String(this.product.hallmark_reference).length > 191) {
        errors.hallmark_reference = "Hallmark reference cannot exceed 191 characters.";
      }
      if (this.product.certificate_number && String(this.product.certificate_number).length > 191) {
        errors.certificate_number = "Certificate number cannot exceed 191 characters.";
      }
      var invalidStone = this.getPreparedItemStones(true).find(function (stone, index) {
        if (!_this4.stoneRowHasValue(stone)) {
          return false;
        }
        if (!stone.stone_type_id) {
          errors.item_stones = "Stone type is required for stone row ".concat(index + 1, ".");
          return true;
        }
        if (!stone.quantity || Number(stone.quantity) < 1) {
          errors.item_stones = "Quantity must be at least 1 for stone row ".concat(index + 1, ".");
          return true;
        }
        if (_this4.toNullableNumber(stone.carat_value) !== null && _this4.toNullableNumber(stone.carat_value) < 0) {
          errors.item_stones = "Carat value cannot be negative for stone row ".concat(index + 1, ".");
          return true;
        }
        if (_this4.toNullableNumber(stone.unit_cost_amount) !== null && _this4.toNullableNumber(stone.unit_cost_amount) < 0) {
          errors.item_stones = "Unit cost cannot be negative for stone row ".concat(index + 1, ".");
          return true;
        }
        if (stone.certificate_number && String(stone.certificate_number).length > 191) {
          errors.item_stones = "Certificate number cannot exceed 191 characters for stone row ".concat(index + 1, ".");
          return true;
        }
        return false;
      });
      if (invalidStone) {
        return errors;
      }
      return errors;
    }
  }),
  watch: {
    "product.assigned_category_ids": {
      handler: function handler() {
        this.pruneInvalidSubcategories();
        this.syncLegacyCategoryFields();
      },
      deep: true
    },
    "product.assigned_subcategory_ids": {
      handler: function handler() {
        this.syncLegacyCategoryFields();
      },
      deep: true
    }
  },
  methods: {
    //------------------------------Formetted Numbers -------------------------\\
    formatNumber: function formatNumber(number, dec) {
      var value = (typeof number === "string" ? number : number.toString()).split(".");
      if (dec <= 0) return value[0];
      var formated = value[1] || "";
      if (formated.length > dec) return "".concat(value[0], ".").concat(formated.substr(0, dec));
      while (formated.length < dec) formated += "0";
      return "".concat(value[0], ".").concat(formated);
    },
    toNullableNumber: function toNullableNumber(value) {
      if (value === "" || value === null || typeof value === "undefined") {
        return null;
      }
      var parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    },
    jewelryFieldMessage: function jewelryFieldMessage(field) {
      return this.jewelryValidationVisible ? this.jewelryErrors[field] || "" : "";
    },
    jewelryFieldState: function jewelryFieldState(field) {
      if (!this.jewelryValidationVisible) {
        return null;
      }
      return this.jewelryErrors[field] ? false : true;
    },
    createEmptyStone: function createEmptyStone() {
      this.jewelryStoneRowSeed += 1;
      return {
        _rowKey: "stone-".concat(this.jewelryStoneRowSeed),
        id: null,
        stone_type_id: "",
        stone_name: "",
        quantity: 1,
        carat_value: "",
        color: "",
        clarity: "",
        cut: "",
        shape: "",
        certificate_number: "",
        unit_cost_amount: "",
        total_cost_amount: "",
        notes: ""
      };
    },
    normalizeStoneRow: function normalizeStoneRow() {
      var stone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        _rowKey: stone._rowKey || null,
        id: stone.id || null,
        stone_type_id: stone.stone_type_id || "",
        stone_name: stone.stone_name || "",
        quantity: stone.quantity != null && stone.quantity !== "" ? Number(stone.quantity) : 1,
        carat_value: stone.carat_value != null && stone.carat_value !== "" ? Number(stone.carat_value) : "",
        color: stone.color || "",
        clarity: stone.clarity || "",
        cut: stone.cut || "",
        shape: stone.shape || "",
        certificate_number: stone.certificate_number || "",
        unit_cost_amount: stone.unit_cost_amount != null && stone.unit_cost_amount !== "" ? Number(stone.unit_cost_amount) : "",
        total_cost_amount: stone.total_cost_amount != null && stone.total_cost_amount !== "" ? Number(stone.total_cost_amount) : "",
        notes: stone.notes || ""
      };
    },
    stoneRowHasValue: function stoneRowHasValue() {
      var stone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var meaningfulFields = [stone.stone_type_id, stone.stone_name, stone.carat_value, stone.color, stone.clarity, stone.cut, stone.shape, stone.certificate_number, stone.unit_cost_amount, stone.notes];
      if (meaningfulFields.some(function (value) {
        return value !== "" && value !== null && typeof value !== "undefined";
      })) {
        return true;
      }
      var quantity = this.toNullableNumber(stone.quantity);
      return quantity !== null && quantity !== 1;
    },
    calculateStoneTotal: function calculateStoneTotal() {
      var stone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var quantity = this.toNullableNumber(stone.quantity) || 0;
      var unitCost = this.toNullableNumber(stone.unit_cost_amount) || 0;
      return Number((quantity * unitCost).toFixed(2));
    },
    getPreparedItemStones: function getPreparedItemStones() {
      var _this5 = this;
      var includeBlankRows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var stones = Array.isArray(this.product.item_stones) ? this.product.item_stones : [];
      return stones.map(function (stone) {
        var normalized = _this5.normalizeStoneRow(stone);
        var total = _this5.calculateStoneTotal(normalized);
        return _objectSpread(_objectSpread({}, normalized), {}, {
          total_cost_amount: total > 0 ? total : ""
        });
      }).filter(function (stone) {
        return includeBlankRows || _this5.stoneRowHasValue(stone);
      });
    },
    applyJewelryDefaults: function applyJewelryDefaults() {
      if (!this.product.jewelry_item_type) {
        this.$set(this.product, "jewelry_item_type", "serialized");
      }
      if (!this.product.jewelry_weight_uom) {
        this.$set(this.product, "jewelry_weight_uom", this.jewelryDefaults.weight_uom || "g");
      }
      if (!this.product.making_charge_type && this.jewelryDefaults.making_charge_type) {
        this.$set(this.product, "making_charge_type", this.jewelryDefaults.making_charge_type);
      }
      if ((this.product.making_charge_value === "" || this.product.making_charge_value === null) && this.jewelryDefaults.making_charge_value !== "" && this.jewelryDefaults.making_charge_value !== null) {
        this.$set(this.product, "making_charge_value", Number(this.jewelryDefaults.making_charge_value));
      }
      if (!this.product.wastage_type && this.jewelryDefaults.wastage_type) {
        this.$set(this.product, "wastage_type", this.jewelryDefaults.wastage_type);
      }
      if ((this.product.wastage_value === "" || this.product.wastage_value === null) && this.jewelryDefaults.wastage_value !== "" && this.jewelryDefaults.wastage_value !== null) {
        this.$set(this.product, "wastage_value", Number(this.jewelryDefaults.wastage_value));
      }
      if (!Array.isArray(this.product.item_stones)) {
        this.$set(this.product, "item_stones", []);
      }
    },
    handleJewelryToggle: function handleJewelryToggle() {
      if (this.product.is_jewelry_item) {
        this.applyJewelryDefaults();
      }
    },
    handleMetalTypeChange: function handleMetalTypeChange() {
      var validKaratIds = this.filteredKaratOptions.map(function (option) {
        return String(option.value);
      });
      if (!validKaratIds.includes(String(this.product.karat_id || ""))) {
        this.$set(this.product, "karat_id", "");
      }
    },
    addStoneRow: function addStoneRow() {
      if (!Array.isArray(this.product.item_stones)) {
        this.$set(this.product, "item_stones", []);
      }
      this.product.item_stones.push(this.createEmptyStone());
    },
    removeStoneRow: function removeStoneRow(index) {
      if (!Array.isArray(this.product.item_stones)) {
        return;
      }
      this.product.item_stones.splice(index, 1);
    },
    hydrateJewelryFields: function hydrateJewelryFields() {
      var _this6 = this;
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.product.is_jewelry_item = !!payload.is_jewelry_item;
      this.product.jewelry_item_type = payload.jewelry_item_type || "";
      this.product.metal_type_id = payload.metal_type_id || "";
      this.product.karat_id = payload.karat_id || "";
      this.product.jewelry_gross_weight = payload.jewelry_gross_weight !== null && payload.jewelry_gross_weight !== "" && typeof payload.jewelry_gross_weight !== "undefined" ? Number(payload.jewelry_gross_weight) : "";
      this.product.jewelry_net_weight = payload.jewelry_net_weight !== null && payload.jewelry_net_weight !== "" && typeof payload.jewelry_net_weight !== "undefined" ? Number(payload.jewelry_net_weight) : "";
      this.product.jewelry_metal_weight = payload.jewelry_metal_weight !== null && payload.jewelry_metal_weight !== "" && typeof payload.jewelry_metal_weight !== "undefined" ? Number(payload.jewelry_metal_weight) : "";
      this.product.jewelry_weight_uom = payload.jewelry_weight_uom || this.jewelryDefaults.weight_uom || "g";
      this.product.hallmark_reference = payload.hallmark_reference || "";
      this.product.certificate_number = payload.certificate_number || "";
      this.product.making_charge_type = payload.making_charge_type || "";
      this.product.making_charge_value = payload.making_charge_value !== null && payload.making_charge_value !== "" && typeof payload.making_charge_value !== "undefined" ? Number(payload.making_charge_value) : "";
      this.product.wastage_type = payload.wastage_type || "";
      this.product.wastage_value = payload.wastage_value !== null && payload.wastage_value !== "" && typeof payload.wastage_value !== "undefined" ? Number(payload.wastage_value) : "";
      this.product.item_stones = Array.isArray(payload.item_stones) ? payload.item_stones.map(function (stone) {
        var normalized = _this6.normalizeStoneRow(stone);
        if (!normalized._rowKey) {
          _this6.jewelryStoneRowSeed += 1;
          normalized._rowKey = "stone-".concat(_this6.jewelryStoneRowSeed);
        }
        return normalized;
      }) : [];
    },
    validateJewelryForm: function validateJewelryForm() {
      if (!this.showJewelrySections) {
        return true;
      }
      var errors = this.jewelryErrors;
      var firstKey = Object.keys(errors)[0];
      if (!firstKey) {
        return true;
      }
      this.makeToast("danger", errors[firstKey], this.$t("Failed"));
      return false;
    },
    //---------------------- Event Selected_product_type------------------------------\\
    Selected_Type_Product: function Selected_Type_Product(value) {
      this.products_ing = [];
      if (value == 'is_combo') {
        this.get_products_materiels();
      }
    },
    //---------------------- get_products_materiels------------------------------\\
    get_products_materiels: function get_products_materiels(value) {
      var _this7 = this;
      axios.get("get_products_materiels").then(function (_ref) {
        var data = _ref.data;
        return _this7.products_ing = data;
      });
    },
    // Search Products
    search: function search() {
      var _this8 = this;
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      if (this.search_input.length < 1) {
        return this.product_filter = [];
      }
      this.timer = setTimeout(function () {
        var product_filter = _this8.products_ing.filter(function (ingredient) {
          return ingredient.code === _this8.search_input;
        });
        if (product_filter.length === 1) {
          _this8.SearchProduct(product_filter[0]);
        } else {
          _this8.product_filter = _this8.products_ing.filter(function (ingredient) {
            return ingredient.name.toLowerCase().includes(_this8.search_input.toLowerCase()) || ingredient.code.toLowerCase().includes(_this8.search_input.toLowerCase());
          });
        }
      }, 800);
    },
    // get Result Value Search Products
    getResultValue: function getResultValue(result) {
      return result.code + " " + "(" + result.name + ")";
    },
    handleFocus: function handleFocus() {
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      this.focused = false;
    },
    //-------------------------- Quick Add Category (modal) --------------------------\\
    openQuickCategoryModal: function openQuickCategoryModal() {
      this.quickCategory = {
        name: "",
        code: ""
      };
      this.$bvModal.show("Quick_Add_Category");
    },
    submitQuickCategory: function submitQuickCategory() {
      var _this9 = this;
      this.$refs.QuickCategory.validate().then(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(success) {
          var payload, _yield$axios$post, data, newCategory, arr, nid, match, _arr, _t;
          return _regenerator().w(function (_context) {
            while (1) switch (_context.p = _context.n) {
              case 0:
                if (success) {
                  _context.n = 1;
                  break;
                }
                _this9.makeToast("danger", _this9.$t("Please_fill_the_form_correctly"), _this9.$t("Failed"));
                return _context.a(2);
              case 1:
                _this9.quickCategorySubmitting = true;
                _context.p = 2;
                payload = {
                  name: _this9.quickCategory.name,
                  code: _this9.quickCategory.code || _this9.quickCategory.name
                };
                _context.n = 3;
                return axios.post("categories", payload);
              case 3:
                _yield$axios$post = _context.v;
                data = _yield$axios$post.data;
                newCategory = data && data.category ? data.category : null;
                if (!newCategory) {
                  _context.n = 4;
                  break;
                }
                _this9.categories.push(newCategory);
                arr = Array.isArray(_this9.product.assigned_category_ids) ? _toConsumableArray(_this9.product.assigned_category_ids) : [];
                nid = newCategory.id;
                if (!arr.map(String).includes(String(nid))) {
                  arr.push(nid);
                }
                _this9.$set(_this9.product, "assigned_category_ids", arr);
                _this9.syncLegacyCategoryFields();
                _context.n = 6;
                break;
              case 4:
                _context.n = 5;
                return _this9.refreshCategories();
              case 5:
                match = _this9.categories.find(function (c) {
                  return c.name === payload.name && c.code === payload.code;
                });
                if (match) {
                  _arr = Array.isArray(_this9.product.assigned_category_ids) ? _toConsumableArray(_this9.product.assigned_category_ids) : [];
                  if (!_arr.map(String).includes(String(match.id))) {
                    _arr.push(match.id);
                  }
                  _this9.$set(_this9.product, "assigned_category_ids", _arr);
                  _this9.syncLegacyCategoryFields();
                }
              case 6:
                _this9.$bvModal.hide("Quick_Add_Category");
                _this9.quickCategory = {
                  name: "",
                  code: ""
                };
                _this9.makeToast("success", _this9.$t("Successfully_Created"), _this9.$t("Success"));
                _context.n = 8;
                break;
              case 7:
                _context.p = 7;
                _t = _context.v;
                _this9.makeToast("danger", _this9.$t("InvalidData"), _this9.$t("Failed"));
              case 8:
                _context.p = 8;
                _this9.quickCategorySubmitting = false;
                return _context.f(8);
              case 9:
                return _context.a(2);
            }
          }, _callee, null, [[2, 7, 8, 9]]);
        }));
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
    },
    refreshCategories: function refreshCategories() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios.get("categories?limit=-1");
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              if (data && data.categories) {
                _this0.categories = data.categories;
              }
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    //-------------------------- Quick Add Brand (modal) --------------------------\\
    openQuickBrandModal: function openQuickBrandModal() {
      this.quickBrand = {
        name: "",
        description: ""
      };
      this.$bvModal.show("Quick_Add_Brand");
    },
    submitQuickBrand: function submitQuickBrand() {
      var _this1 = this;
      this.$refs.QuickBrand.validate().then(/*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(success) {
          var payload, _yield$axios$post2, data, newBrand, match, _t3;
          return _regenerator().w(function (_context3) {
            while (1) switch (_context3.p = _context3.n) {
              case 0:
                if (success) {
                  _context3.n = 1;
                  break;
                }
                _this1.makeToast("danger", _this1.$t("Please_fill_the_form_correctly"), _this1.$t("Failed"));
                return _context3.a(2);
              case 1:
                _this1.quickBrandSubmitting = true;
                _context3.p = 2;
                payload = {
                  name: _this1.quickBrand.name,
                  description: _this1.quickBrand.description || ""
                };
                _context3.n = 3;
                return axios.post("brands", payload);
              case 3:
                _yield$axios$post2 = _context3.v;
                data = _yield$axios$post2.data;
                newBrand = data && data.brand ? data.brand : null;
                if (!newBrand) {
                  _context3.n = 4;
                  break;
                }
                _this1.brands.push(newBrand);
                _this1.product.brand_id = newBrand.id;
                _context3.n = 6;
                break;
              case 4:
                _context3.n = 5;
                return _this1.refreshBrands();
              case 5:
                match = _this1.brands.find(function (b) {
                  return b.name === payload.name;
                });
                if (match) {
                  _this1.product.brand_id = match.id;
                }
              case 6:
                _this1.$bvModal.hide("Quick_Add_Brand");
                _this1.quickBrand = {
                  name: "",
                  description: ""
                };
                _this1.makeToast("success", _this1.$t("Successfully_Created"), _this1.$t("Success"));
                _context3.n = 8;
                break;
              case 7:
                _context3.p = 7;
                _t3 = _context3.v;
                _this1.makeToast("danger", _this1.$t("InvalidData"), _this1.$t("Failed"));
              case 8:
                _context3.p = 8;
                _this1.quickBrandSubmitting = false;
                return _context3.f(8);
              case 9:
                return _context3.a(2);
            }
          }, _callee3, null, [[2, 7, 8, 9]]);
        }));
        return function (_x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    },
    refreshBrands: function refreshBrands() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios.get("brands?limit=-1");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              if (data && data.brands) {
                _this10.brands = data.brands;
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    //-------------------------- Quick Add Unit (modal) --------------------------\\
    openQuickUnitModal: function openQuickUnitModal() {
      this.quickUnit = {
        name: "",
        ShortName: "",
        base_unit: "",
        operator: "*",
        operator_value: 1
      };
      this.show_operator_quick = false;

      // Ensure units_base is loaded
      if (!this.units_base || this.units_base.length === 0) {
        this.loadBaseUnits();
      }
      this.$bvModal.show("Quick_Add_Unit");
    },
    // Load base units
    loadBaseUnits: function loadBaseUnits() {
      var _this11 = this;
      axios.get("units?page=1&SortField=id&SortType=desc&limit=-1").then(function (response) {
        if (response.data && response.data.Units_base) {
          _this11.units_base = response.data.Units_base;
        }
      })["catch"](function () {
        // silent failure
      });
    },
    Selected_Base_Unit_Quick: function Selected_Base_Unit_Quick(value) {
      if (value == null || value == "") {
        this.show_operator_quick = false;
      } else {
        this.show_operator_quick = true;
      }
    },
    submitQuickUnit: function submitQuickUnit() {
      var _this12 = this;
      this.$refs.QuickUnit.validate().then(/*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(success) {
          var base_unit, payload, match, _t5;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.p = _context5.n) {
              case 0:
                if (success) {
                  _context5.n = 1;
                  break;
                }
                _this12.makeToast("danger", _this12.$t("Please_fill_the_form_correctly"), _this12.$t("Failed"));
                return _context5.a(2);
              case 1:
                _this12.quickUnitSubmitting = true;
                _context5.p = 2;
                // Set base_unit to empty string if null
                base_unit = _this12.quickUnit.base_unit || "";
                payload = {
                  name: _this12.quickUnit.name,
                  ShortName: _this12.quickUnit.ShortName,
                  base_unit: base_unit,
                  operator: _this12.quickUnit.operator || "*",
                  operator_value: _this12.quickUnit.operator_value || 1
                };
                _context5.n = 3;
                return axios.post("units", payload);
              case 3:
                _context5.n = 4;
                return _this12.refreshUnits();
              case 4:
                _context5.n = 5;
                return _this12.$nextTick();
              case 5:
                // Try to find the newly created unit (with a small retry in case of timing issues)
                match = _this12.units.find(function (u) {
                  return u.name === payload.name && u.ShortName === payload.ShortName;
                }); // If not found immediately, wait a bit and try again
                if (match) {
                  _context5.n = 9;
                  break;
                }
                _context5.n = 6;
                return new Promise(function (resolve) {
                  return setTimeout(resolve, 300);
                });
              case 6:
                _context5.n = 7;
                return _this12.refreshUnits();
              case 7:
                _context5.n = 8;
                return _this12.$nextTick();
              case 8:
                match = _this12.units.find(function (u) {
                  return u.name === payload.name && u.ShortName === payload.ShortName;
                });
              case 9:
                if (match) {
                  _this12.product.unit_id = match.id;
                  // Trigger Selected_Unit to load sub-units
                  _this12.Selected_Unit(match.id);
                } else {
                  // If still not found, show a warning but don't fail
                  console.warn("Newly created unit not found in list");
                }
                _this12.$bvModal.hide("Quick_Add_Unit");
                _this12.quickUnit = {
                  name: "",
                  ShortName: "",
                  base_unit: "",
                  operator: "*",
                  operator_value: 1
                };
                _this12.show_operator_quick = false;
                _this12.makeToast("success", _this12.$t("Successfully_Created"), _this12.$t("Success"));
                _context5.n = 11;
                break;
              case 10:
                _context5.p = 10;
                _t5 = _context5.v;
                _this12.makeToast("danger", _this12.$t("InvalidData"), _this12.$t("Failed"));
              case 11:
                _context5.p = 11;
                _this12.quickUnitSubmitting = false;
                return _context5.f(11);
              case 12:
                return _context5.a(2);
            }
          }, _callee5, null, [[2, 10, 11, 12]]);
        }));
        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
    },
    refreshUnits: function refreshUnits() {
      var _this13 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get3, data, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios.get("products/create");
            case 1:
              _yield$axios$get3 = _context6.v;
              data = _yield$axios$get3.data;
              if (data && data.units) {
                _this13.units = data.units;
              }
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
            case 3:
              // Also refresh base units
              _this13.loadBaseUnits();
            case 4:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    //-------------------------- Quick Add Warehouse Location (modal) --------------------------\\
    openQuickWarehouseLocationModal: function openQuickWarehouseLocationModal(warehouseId) {
      this.quickWarehouseLocation = {
        warehouse_id: warehouseId || (this.warehouses[0] ? this.warehouses[0].id : ""),
        code: "",
        name: "",
        is_active: true
      };
      this.quickWarehouseLocationWarehouseLocked = true;
      this.$bvModal.show("Quick_Add_Warehouse_Location");
    },
    submitQuickWarehouseLocation: function submitQuickWarehouseLocation() {
      var _this14 = this;
      this.$refs.QuickWarehouseLocation.validate().then(/*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(success) {
          var payload, _yield$axios$post3, data, newLoc, wid, label, _t7;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.p = _context7.n) {
              case 0:
                if (success) {
                  _context7.n = 1;
                  break;
                }
                _this14.makeToast("danger", _this14.$t("Please_fill_the_form_correctly"), _this14.$t("Failed"));
                return _context7.a(2);
              case 1:
                _this14.quickWarehouseLocationSubmitting = true;
                _context7.p = 2;
                payload = {
                  warehouse_id: _this14.quickWarehouseLocation.warehouse_id,
                  code: _this14.quickWarehouseLocation.code,
                  name: _this14.quickWarehouseLocation.name || "",
                  is_active: true
                };
                _context7.n = 3;
                return axios.post("products/warehouse_locations", payload);
              case 3:
                _yield$axios$post3 = _context7.v;
                data = _yield$axios$post3.data;
                newLoc = data && data.location ? data.location : null;
                if (newLoc && newLoc.id) {
                  wid = newLoc.warehouse_id;
                  label = newLoc.name ? "".concat(newLoc.code, " - ").concat(newLoc.name) : newLoc.code; // keep raw list if needed elsewhere
                  _this14.warehouse_locations.push(newLoc);
                  if (!_this14.locationsByWarehouse[wid]) {
                    _this14.$set(_this14.locationsByWarehouse, wid, []);
                  }
                  _this14.locationsByWarehouse[wid].push({
                    id: newLoc.id,
                    label: label
                  });

                  // auto-select for that warehouse
                  if (_this14.product && _this14.product.warehouses && _this14.product.warehouses[wid]) {
                    _this14.product.warehouses[wid].warehouse_location_id = newLoc.id;
                  }
                }
                _this14.$bvModal.hide("Quick_Add_Warehouse_Location");
                _this14.makeToast("success", _this14.$t("Successfully_Created"), _this14.$t("Success"));
                _context7.n = 5;
                break;
              case 4:
                _context7.p = 4;
                _t7 = _context7.v;
                _this14.makeToast("danger", _this14.$t("InvalidData"), _this14.$t("Failed"));
              case 5:
                _context7.p = 5;
                _this14.quickWarehouseLocationSubmitting = false;
                return _context7.f(5);
              case 6:
                return _context7.a(2);
            }
          }, _callee7, null, [[2, 4, 5, 6]]);
        }));
        return function (_x4) {
          return _ref5.apply(this, arguments);
        };
      }());
    },
    touchProductGalleryOrder: function touchProductGalleryOrder() {
      (this.productGalleryItems || []).forEach(function (r, i) {
        r.sort_order = i;
      });
    },
    setProductGalleryMain: function setProductGalleryMain(row) {
      (this.productGalleryItems || []).forEach(function (r) {
        r.is_main = r === row;
      });
    },
    removeProductGalleryRow: function removeProductGalleryRow(index) {
      var row = this.productGalleryItems[index];
      if (row && row.url && row.url.indexOf("blob:") === 0) {
        try {
          URL.revokeObjectURL(row.url);
        } catch (e) {/* ignore */}
      }
      this.productGalleryItems.splice(index, 1);
      this.touchProductGalleryOrder();
      if (!this.productGalleryItems.some(function (r) {
        return r.is_main;
      }) && this.productGalleryItems.length) {
        this.$set(this.productGalleryItems[0], "is_main", true);
      }
    },
    onProductGalleryFilesSelected: function onProductGalleryFilesSelected(e) {
      var _this15 = this;
      var files = Array.from(e.target.files || []).filter(function (f) {
        return f.type && f.type.indexOf("image/") === 0;
      });
      files.forEach(function (f) {
        _this15.galleryUidSeed += 1;
        _this15.productGalleryItems.push({
          _uid: "n-" + _this15.galleryUidSeed,
          url: URL.createObjectURL(f),
          image_path: f.name,
          is_main: false,
          sort_order: _this15.productGalleryItems.length,
          _file: f
        });
      });
      this.touchProductGalleryOrder();
      if (!this.productGalleryItems.some(function (r) {
        return r.is_main;
      }) && this.productGalleryItems.length) {
        this.$set(this.productGalleryItems[0], "is_main", true);
      }
      e.target.value = "";
    },
    // Submit Search Products
    SearchProduct: function SearchProduct(result) {
      if (this.materiels.length > 0 && this.materiels.some(function (detail) {
        return detail.code === result.code;
      })) {
        toastr.error('Product_Already_added');
      } else {
        var materiel_tag = {
          product_id: result.product_id,
          name: result.name,
          code: result.code,
          unit_name: result.unit_name,
          cost: result.cost,
          quantity: 1
        };
        this.materiels.push(materiel_tag);
      }
      this.search_input = '';
      this.$refs.product_autocomplete.value = "";
      this.product_filter = [];
    },
    //-----------------------------------Delete variant------------------------------\\
    delete_materiel: function delete_materiel(product_id) {
      for (var i = 0; i < this.materiels.length; i++) {
        if (product_id === this.materiels[i].product_id) {
          this.materiels.splice(i, 1);
        }
      }
    },
    showModal: function showModal() {
      this.$bvModal.show('open_scan');
    },
    onScan: function onScan(decodedText, decodedResult) {
      var code = decodedText;
      this.product.code = code;
      this.$bvModal.hide('open_scan');
    },
    //------ Generate code
    generateNumber: function generateNumber() {
      this.code_exist = "";
      this.product.code = Math.floor(Math.pow(10, 7) + Math.random() * (Math.pow(10, 8) - Math.pow(10, 7) - 1));
    },
    syncLegacyCategoryFields: function syncLegacyCategoryFields() {
      var c = Array.isArray(this.product.assigned_category_ids) ? this.product.assigned_category_ids : [];
      var s = Array.isArray(this.product.assigned_subcategory_ids) ? this.product.assigned_subcategory_ids : [];
      var firstCat = c.length ? c[0] : "";
      var firstSub = s.length ? s[0] : "";
      this.$set(this.product, "category_id", firstCat === "" || firstCat == null ? "" : firstCat);
      this.$set(this.product, "sub_category_id", firstSub === "" || firstSub == null ? "" : firstSub);
    },
    pruneInvalidSubcategories: function pruneInvalidSubcategories() {
      var catSet = new Set((this.product.assigned_category_ids || []).map(function (id) {
        return String(id);
      }));
      var subs = this.product.assigned_subcategory_ids || [];
      var all = this.allSubcategories || [];
      var filtered = subs.filter(function (sid) {
        var sc = all.find(function (x) {
          return String(x.id) === String(sid);
        });
        return sc && catSet.has(String(sc.category_id));
      });
      if (filtered.length !== subs.length) {
        this.$set(this.product, "assigned_subcategory_ids", filtered);
      }
    },
    //------------- Submit Validation Create Product
    Submit_Product: function Submit_Product() {
      var _this16 = this;
      this.syncLegacyCategoryFields();
      this.jewelryValidationVisible = true;
      this.$refs.Create_Product.validate().then(function (success) {
        if (!success) {
          _this16.makeToast("danger", _this16.$t("Please_fill_the_form_correctly"), _this16.$t("Failed"));
        } else {
          if (!_this16.validateJewelryForm()) {
            return;
          }
          if (_this16.product.type == 'is_variant' && _this16.variants.length <= 0) {
            _this16.makeToast("danger", "The variants array is required.", _this16.$t("Failed"));
          } else if (!_this16.validatePacks()) {
            // validatePacks already shows a toast
          } else {
            _this16.Create_Product();
          }
        }
      });
    },
    add_variant: function add_variant(tag) {
      if (this.variants.length > 0 && this.variants.some(function (variant) {
        return variant.text === tag;
      })) {
        this.makeToast("warning", this.$t("VariantDuplicate"), this.$t("Warning"));
      } else {
        if (this.tag != '') {
          var variant_tag = {
            var_id: this.variants.length + 1,
            // generate unique ID
            text: tag
          };
          this.variants.push(variant_tag);
          this.tag = "";
        } else {
          this.makeToast("warning", "Please Enter the Variant", this.$t("Warning"));
        }
      }
    },
    //-----------------------------------Delete variant------------------------------\\
    delete_variant: function delete_variant(var_id) {
      for (var i = 0; i < this.variants.length; i++) {
        if (var_id === this.variants[i].var_id) {
          this.variants.splice(i, 1);
        }
      }
    },
    //----------------------------- Multi-Pack Selling -----------------------------\\
    // Guarantee exactly one default pack (multiplier 1) at the top of the list.
    ensureDefaultPack: function ensureDefaultPack() {
      var defaultPack = this.packs.find(function (p) {
        return p.is_default;
      });
      if (!defaultPack) {
        defaultPack = {
          id: null,
          name: this.$t('Default') || 'Default',
          multiplier: 1,
          price: this.product.price || 0,
          is_active: true,
          is_default: true
        };
        this.packs.unshift(defaultPack);
      }
      // The default pack is always multiplier 1 and always active.
      defaultPack.multiplier = 1;
      defaultPack.is_active = true;
    },
    add_pack: function add_pack() {
      this.ensureDefaultPack();
      this.packs.push({
        id: null,
        name: "",
        multiplier: 1,
        price: 0,
        is_active: true,
        is_default: false
      });
    },
    delete_pack: function delete_pack(index) {
      if (this.packs[index] && this.packs[index].is_default) {
        return;
      }
      this.packs.splice(index, 1);
    },
    // Validate packs before submit. Returns true when valid.
    validatePacks: function validatePacks() {
      if (!this.enable_multi_pack_selling || this.product.type != 'is_single') {
        return true;
      }
      var _iterator = _createForOfIteratorHelper(this.packs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var pack = _step.value;
          if (!pack.name || String(pack.name).trim() === "") {
            this.makeToast("danger", this.$t('Pack_Name_Required') || 'Each pack needs a name.', this.$t("Failed"));
            return false;
          }
          if (!(Number(pack.multiplier) > 0)) {
            this.makeToast("danger", this.$t('Pack_Multiplier_Invalid') || 'Pack multiplier must be greater than 0.', this.$t("Failed"));
            return false;
          }
          if (!(Number(pack.price) >= 0)) {
            this.makeToast("danger", this.$t('Pack_Price_Invalid') || 'Pack price must be 0 or more.', this.$t("Failed"));
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    },
    //------ Pick an image for a single variant
    onVariantImage: function onVariantImage(event, variant) {
      var file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type || file.type.indexOf("image/") !== 0) {
        this.makeToast("warning", this.$t("Please_select_image"), this.$t("Warning"));
        event.target.value = "";
        return;
      }
      this.$set(variant, "imageFile", file);
      this.$set(variant, "imagePreview", URL.createObjectURL(file));
    },
    //------ Toast
    makeToast: function makeToast(variant, msg, title) {
      this.$root.$bvToast.toast(msg, {
        title: title,
        variant: variant,
        solid: true
      });
    },
    //------ Validation State
    getValidationState: function getValidationState(_ref6) {
      var dirty = _ref6.dirty,
        validated = _ref6.validated,
        _ref6$valid = _ref6.valid,
        valid = _ref6$valid === void 0 ? null : _ref6$valid;
      return dirty || validated ? valid : null;
    },
    //-------------- Product Get Elements
    GetElements: function GetElements() {
      var _this17 = this;
      axios.get("products/create").then(function (response) {
        _this17.categories = response.data.categories;
        _this17.allSubcategories = response.data.subcategories || [];
        _this17.brands = response.data.brands;
        _this17.units = response.data.units;
        _this17.warehouses = response.data.warehouses;
        _this17.metalTypes = response.data.metal_types || [];
        _this17.karats = response.data.karats || [];
        _this17.stoneTypes = response.data.stone_types || [];
        _this17.jewelryModeEnabled = response.data.jewelry_mode === true;
        _this17.jewelryDefaults = _objectSpread(_objectSpread({}, _this17.jewelryDefaults), response.data.jewelry_defaults || {});
        // System Settings toggle: show/hide the Barcode (GTIN/UPC/EAN/ISBN) field
        _this17.show_product_gtin = response.data.show_product_gtin !== false;
        _this17.show_serial_tracking = response.data.show_serial_tracking === true;
        // System Settings toggle: master switch for Multi-Pack Selling
        _this17.enable_multi_pack_selling = response.data.enable_multi_pack_selling === true;
        if (_this17.enable_multi_pack_selling) {
          _this17.ensureDefaultPack();
        }
        _this17.warehouse_locations = response.data.warehouse_locations || [];
        var byWh = {};
        (_this17.warehouse_locations || []).forEach(function (loc) {
          var wid = loc.warehouse_id;
          if (!byWh[wid]) byWh[wid] = [];
          var label = loc.name ? "".concat(loc.code, " - ").concat(loc.name) : loc.code;
          byWh[wid].push({
            id: loc.id,
            label: label
          });
        });
        _this17.locationsByWarehouse = byWh;

        // 2) initialize product.warehouses so each key exists reactively
        response.data.warehouses.forEach(function (wh) {
          // each wh has { id, name, qte, manage_stock }
          _this17.$set(_this17.product.warehouses, wh.id, {
            qte: wh.qte,
            warehouse_location_id: null
          });
        });
        _this17.isLoading = false;
      })["catch"](function (response) {
        setTimeout(function () {
          _this17.isLoading = false;
        }, 500);
        _this17.makeToast("danger", _this17.$t("InvalidData"), _this17.$t("Failed"));
      });

      // Get base units for quick add unit modal
      this.loadBaseUnits();
    },
    //---------------------- Get Sub Units with Unit id ------------------------------\\
    Get_Units_SubBase: function Get_Units_SubBase(value) {
      var _this18 = this;
      axios.get("get_sub_units_by_base?id=" + value).then(function (_ref7) {
        var data = _ref7.data;
        return _this18.units_sub = data;
      });
    },
    //---------------------- Event Select Unit Product ------------------------------\\
    Selected_Unit: function Selected_Unit(value) {
      this.units_sub = [];
      this.product.unit_sale_id = "";
      this.product.unit_purchase_id = "";
      this.Get_Units_SubBase(value);
    },
    //------------------------------ Create new Product ------------------------------\\
    Create_Product: function Create_Product() {
      var _this19 = this;
      // Start the progress bar.
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().start();
      nprogress__WEBPACK_IMPORTED_MODULE_1___default().set(0.1);
      var self = this;
      self.SubmitProcessing = true;
      self.syncLegacyCategoryFields();
      self.data = new FormData();
      if (self.product.type == 'is_variant' && self.variants.length > 0) {
        self.product.is_variant = true;
      } else {
        self.product.is_variant = false;
      }

      // append array variants
      if (self.materiels.length && self.product.type == 'is_combo') {
        self.data.append("materiels", JSON.stringify(self.materiels));
      }
      var prodRest = _objectSpread({}, self.product);
      var assigned_category_ids = prodRest.assigned_category_ids || [];
      var assigned_subcategory_ids = prodRest.assigned_subcategory_ids || [];
      delete prodRest.assigned_category_ids;
      delete prodRest.assigned_subcategory_ids;
      delete prodRest.item_stones;
      Object.entries(prodRest).forEach(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 2),
          key = _ref9[0],
          value = _ref9[1];
        self.data.append(key, value);
      });
      self.data.append("multi_category_ids", JSON.stringify(assigned_category_ids || []));
      self.data.append("multi_subcategory_ids", JSON.stringify(assigned_subcategory_ids || []));
      self.data.append("item_stones", JSON.stringify(self.getPreparedItemStones()));

      // append array variants
      if (self.variants.length) {
        // Strip non-serializable fields (File / preview URL) from the JSON payload,
        // and send the picked image files separately, keyed by variant index.
        var variantsForJson = self.variants.map(function (v) {
          var imageFile = v.imageFile,
            imagePreview = v.imagePreview,
            rest = _objectWithoutProperties(v, _excluded);
          return rest;
        });
        self.data.append("variants", JSON.stringify(variantsForJson));
        self.variants.forEach(function (v, i) {
          if (v.imageFile) {
            self.data.append("variant_images[" + i + "]", v.imageFile);
          }
        });
      }

      // Multi-Pack Selling: send packs only for single products when enabled
      if (self.enable_multi_pack_selling && self.product.type == 'is_single') {
        self.ensureDefaultPack();
        self.data.append("packs", JSON.stringify(self.packs));
      }
      if (Object.keys(self.product.warehouses).length && self.product.type == 'is_single') {
        self.data.append("warehouses", JSON.stringify(self.product.warehouses));
      }
      (self.productGalleryItems || []).forEach(function (r) {
        if (r && r._file) {
          self.data.append("gallery_images[]", r._file);
        }
      });
      var gItems = self.productGalleryItems || [];
      if (gItems.length > 0) {
        var mainIndex = gItems.findIndex(function (r) {
          return r && r.is_main;
        });
        if (mainIndex < 0) {
          mainIndex = 0;
        }
        self.data.append("product_gallery_json", JSON.stringify({
          main_index: mainIndex
        }));
      }

      // Send Data with axios
      axios.post("products", self.data).then(function (response) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        self.SubmitProcessing = false;
        self.productGalleryItems.forEach(function (r) {
          if (r && r.url && r.url.indexOf("blob:") === 0) {
            try {
              URL.revokeObjectURL(r.url);
            } catch (e) {/* ignore */}
          }
        });
        self.productGalleryItems = [];
        self.galleryUidSeed = 0;
        _this19.$router.push({
          name: "index_products"
        });
        _this19.makeToast("success", _this19.$t("Successfully_Created"), _this19.$t("Success"));
      })["catch"](function (error) {
        // Complete the animation of theprogress bar.
        nprogress__WEBPACK_IMPORTED_MODULE_1___default().done();
        self.SubmitProcessing = false;
        if (error.errors.code && error.errors.code.length > 0) {
          self.code_exist = error.errors.code[0];
          _this19.makeToast("danger", error.errors.code[0], _this19.$t("Failed"));
        } else if (error.errors.variants && error.errors.variants.length > 0) {
          _this19.makeToast("danger", error.errors.variants[0], _this19.$t("Failed"));
        } else {
          _this19.makeToast("danger", _this19.$t("InvalidData"), _this19.$t("Failed"));
        }
      });
    },
    getProductTypeName: function getProductTypeName(type) {
      switch (type) {
        case 'is_single':
          return this.$t('StandardProduct');
        case 'is_variant':
          return this.$t('VariableProduct');
        case 'is_service':
          return this.$t('ServiceProduct');
        case 'is_combo':
          return this.$t('ComboProduct');
        default:
          return this.$t('Unknown');
      }
    }
  },
  //end Methods

  //-----------------------------Created function-------------------

  created: function created() {
    var _this20 = this;
    this.GetElements();

    // If navigating with ?duplicate=:id, preload product data for duplication
    var duplicateId = this.$route && this.$route.query ? this.$route.query.duplicate : null;
    if (duplicateId) {
      // Load product details using the edit payload to prefill fields without saving
      axios.get("products/".concat(duplicateId, "/edit")).then(function (response) {
        var p = response.data.product || {};

        // Prefill simple fields (avoid copying internal id)
        _this20.product.type = p.type || _this20.product.type;
        _this20.product.name = p.name || "";
        _this20.product.code = p.code || "";
        _this20.product.gtin = p.gtin || "";
        _this20.product.points = p.points || "";
        _this20.product.Type_barcode = p.Type_barcode || _this20.product.Type_barcode;
        _this20.product.cost = p.cost || "";
        _this20.product.price = p.price || "";
        _this20.product.wholesale_price = p.wholesale_price || "";
        _this20.product.min_price = p.min_price || "";
        _this20.product.brand_id = p.brand_id || "";
        _this20.product.category_id = p.category_id || "";
        _this20.product.assigned_category_ids = Array.isArray(p.assigned_category_ids) ? p.assigned_category_ids.slice() : [];
        _this20.product.assigned_subcategory_ids = Array.isArray(p.assigned_subcategory_ids) ? p.assigned_subcategory_ids.slice() : [];
        if ((!_this20.product.assigned_category_ids || !_this20.product.assigned_category_ids.length) && p.category_id) {
          _this20.$set(_this20.product, "assigned_category_ids", [p.category_id]);
        }
        if ((!_this20.product.assigned_subcategory_ids || !_this20.product.assigned_subcategory_ids.length) && p.sub_category_id) {
          _this20.$set(_this20.product, "assigned_subcategory_ids", [p.sub_category_id]);
        }
        _this20.syncLegacyCategoryFields();
        _this20.product.TaxNet = p.TaxNet != null ? p.TaxNet : _this20.product.TaxNet;
        _this20.product.tax_method = p.tax_method != null ? String(p.tax_method) : _this20.product.tax_method;
        _this20.product.discount_method = p.discount_method != null ? String(p.discount_method) : _this20.product.discount_method;
        _this20.product.discount = p.discount != null ? String(p.discount) : _this20.product.discount;
        _this20.product.unit_id = p.unit_id || "";
        _this20.product.unit_sale_id = p.unit_sale_id || "";
        _this20.product.unit_purchase_id = p.unit_purchase_id || "";
        _this20.product.stock_alert = p.stock_alert != null ? String(p.stock_alert) : _this20.product.stock_alert;
        _this20.product.weight = p.weight != null ? String(p.weight) : _this20.product.weight;
        _this20.product.length = p.length != null ? String(p.length) : _this20.product.length;
        _this20.product.width = p.width != null ? String(p.width) : _this20.product.width;
        _this20.product.height = p.height != null ? String(p.height) : _this20.product.height;
        _this20.product.note = p.note || "";
        _this20.product.is_imei = !!p.is_imei;
        _this20.product.not_selling = !!p.not_selling;
        _this20.product.is_featured = !!p.is_featured;
        _this20.product.hide_from_online_store = !!p.hide_from_online_store;

        // Pre-Order
        _this20.product.is_preorder = !!p.is_preorder;
        _this20.product.preorder_available_date = p.preorder_available_date || "";
        _this20.product.preorder_limit = p.preorder_limit != null ? p.preorder_limit : "";
        _this20.product.preorder_note = p.preorder_note || "";

        // Warranty / Guarantee
        _this20.product.warranty_period = p.warranty_period != null ? p.warranty_period : null;
        _this20.product.warranty_unit = p.warranty_unit || _this20.product.warranty_unit;
        _this20.product.warranty_terms = p.warranty_terms || '';
        _this20.product.has_guarantee = !!p.has_guarantee;
        _this20.product.guarantee_period = p.guarantee_period != null ? p.guarantee_period : null;
        _this20.product.guarantee_unit = p.guarantee_unit || _this20.product.guarantee_unit;

        // Pharmacy / Batch & Expiry
        _this20.product.is_batch_tracked = !!p.is_batch_tracked;
        _this20.product.shelf_life_days = p.shelf_life_days != null && p.shelf_life_days !== "" ? p.shelf_life_days : "";
        _this20.product.generic_name = p.generic_name || "";
        _this20.product.strength = p.strength || "";
        _this20.product.dosage_form = p.dosage_form || "";
        _this20.product.pack_size = p.pack_size || "";
        _this20.product.manufacturer = p.manufacturer || "";
        _this20.product.prescription_required = !!p.prescription_required;
        _this20.product.drug_schedule = p.drug_schedule || "";

        // Jewelry
        _this20.hydrateJewelryFields(p);

        // If base unit exists, load sub-units and then set sale/purchase units
        if (_this20.product.unit_id) {
          var targetSaleId = p.unit_sale_id || "";
          var targetPurchaseId = p.unit_purchase_id || "";
          axios.get("get_sub_units_by_base?id=" + _this20.product.unit_id).then(function (_ref0) {
            var data = _ref0.data;
            _this20.units_sub = data;
            _this20.product.unit_sale_id = targetSaleId || "";
            _this20.product.unit_purchase_id = targetPurchaseId || "";
          })["catch"](function () {});
        }

        // Prefill variants (if any)
        if (Array.isArray(p.ProductVariant) && p.ProductVariant.length) {
          _this20.variants = p.ProductVariant.map(function (v, idx) {
            return {
              var_id: v.var_id != null ? v.var_id : idx + 1,
              text: v.text,
              code: v.code,
              gtin: v.gtin != null ? v.gtin : '',
              cost: v.cost,
              price: v.price,
              wholesale: v.wholesale != null ? v.wholesale : '',
              min_price: v.min_price != null ? v.min_price : '',
              image: v.image || 'no-image.png',
              imagePreview: v.image && v.image !== 'no-image.png' ? _this20.$imgUrl('products', v.image) : ''
            };
          });
        } else {
          _this20.variants = [];
        }

        // Prefill combo materiels
        if (_this20.product.type === 'is_combo' && Array.isArray(response.data.materiels)) {
          _this20.materiels = response.data.materiels.slice();
        }
      })["catch"](function () {
        // Fail silently; user can still create product manually
      });
    }
  }
});

/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true"
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pricing-preview-card"
  }, [_c("div", {
    staticClass: "pricing-preview-card__header"
  }, [_vm._m(0), _vm._v(" "), _c("b-badge", {
    attrs: {
      variant: _vm.loading ? "warning" : "light",
      pill: ""
    }
  }, [_vm._v("\n      " + _vm._s(_vm.loading ? "Updating…" : "Auto refresh") + "\n    ")])], 1), _vm._v(" "), _vm.emptyStateMessage ? _c("b-alert", {
    staticClass: "mb-0 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "light"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.emptyStateMessage) + "\n  ")]) : [_vm.errorMessage ? _c("b-alert", {
    staticClass: "mb-3 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "danger"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.errorMessage) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.rateMissingWarning ? _c("b-alert", {
    staticClass: "mb-3 pricing-preview-card__alert",
    attrs: {
      show: "",
      variant: "warning"
    }
  }, [_vm._v("\n      No active " + _vm._s(_vm.metalRateLabel.toLowerCase()) + " was found for the selected metal and karat. The preview is using a 0.00 rate until one is configured.\n    ")]) : _vm._e(), _vm._v(" "), !_vm.preview && _vm.loading ? _c("div", {
    staticClass: "pricing-preview-card__loading text-center py-4"
  }, [_c("b-spinner", {
    staticClass: "mr-2",
    attrs: {
      small: ""
    }
  }), _vm._v(" "), _c("span", [_vm._v("Calculating pricing preview…")])], 1) : _vm.preview ? _c("div", {
    staticClass: "pricing-preview-card__body"
  }, [_c("div", {
    staticClass: "pricing-preview-grid"
  }, [_c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v(_vm._s(_vm.metalRateLabel))]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.gold_rate)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Effective Date")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatDate(_vm.preview.gold_rate_effective_at)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Metal Weight")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatWeight(_vm.preview.metal_weight)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Metal Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.metal_value)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("\n            Making Charge\n            "), _vm.preview.making_charge_type ? _c("small", {
    staticClass: "pricing-preview-row__method"
  }, [_vm._v("(" + _vm._s(_vm.makingChargeTypeLabel(_vm.preview.making_charge_type)) + ")")]) : _vm._e()]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.making_charge)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Wastage")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.wastage)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Stone Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.stone_value)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Labor")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.labor)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Markup")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.markup)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Discount")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.discount)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Tax")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.tax)))])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-row pricing-preview-row--base"
  }, [_c("span", {
    staticClass: "pricing-preview-row__label"
  }, [_vm._v("Base Jewelry Value")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-row__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.base_value)))])])]), _vm._v(" "), _c("div", {
    staticClass: "pricing-preview-total mt-3"
  }, [_c("span", {
    staticClass: "pricing-preview-total__label"
  }, [_vm._v("Final Price")]), _vm._v(" "), _c("span", {
    staticClass: "pricing-preview-total__value"
  }, [_vm._v(_vm._s(_vm.formatMoney(_vm.preview.selling_price)))])])]) : _vm._e()]], 2);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", {
    staticClass: "pricing-preview-card__title mb-1"
  }, [_vm._v("Live Pricing Preview")]), _vm._v(" "), _c("p", {
    staticClass: "pricing-preview-card__subtitle mb-0 text-muted"
  }, [_vm._v("\n        Uses the shared jewelry pricing endpoint so the form preview stays aligned with saved sales pricing.\n      ")])]);
}];
render._withStripped = true;


/***/ },

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render=function render(){var _vm=this,_c=_vm._self._c;return _c("div",{staticClass:"main-content product-create-page"},[_c("breadcumb",{attrs:{page:_vm.$t("AddProduct"),folder:_vm.$t("Products")}}),_vm._v(" "),_vm.isLoading?_c("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):_vm._e(),_vm._v(" "),!_vm.isLoading?_c("validation-observer",{ref:"Create_Product"},[_c("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function submit($event){$event.preventDefault();return _vm.Submit_Product.apply(null,arguments);}}},[_c("div",{staticClass:"page-hero"},[_c("div",{staticClass:"page-hero__main"},[_c("div",{staticClass:"page-hero__eyebrow"},[_c("lucide-icon",{attrs:{name:"package"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("Products")))])],1),_vm._v(" "),_c("h1",{staticClass:"page-hero__title"},[_vm._v(_vm._s(_vm.$t("AddProduct")))]),_vm._v(" "),_c("p",{staticClass:"page-hero__subtitle"},[_vm._v("\n            "+_vm._s(_vm.$t("FillProductDetailsHint")||"Define your product information, pricing and stock. Fields marked with * are required.")+"\n          ")])]),_vm._v(" "),_c("div",{staticClass:"page-hero__actions"},[_c("b-button",{staticClass:"hero-btn",attrs:{variant:"outline-secondary"},on:{click:function click($event){return _vm.$router.back();}}},[_c("lucide-icon",{attrs:{name:"arrow-left"}}),_vm._v(" "+_vm._s(_vm.$t("Cancel")||"Cancel")+"\n          ")],1),_vm._v(" "),_c("b-button",{staticClass:"hero-btn hero-btn--primary",attrs:{variant:"primary",type:"submit",disabled:_vm.SubmitProcessing}},[_c("lucide-icon",{attrs:{name:"check"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("Save_Product")||_vm.$t("submit")))])],1)],1)]),_vm._v(" "),_c("b-modal",{attrs:{"hide-footer":"",id:"open_scan",size:"md",title:_vm.$t("Barcode_Scanner")}},[_c("qrcode-scanner",{staticStyle:{width:"100%",height:"calc(100vh - 56px)"},attrs:{qrbox:250,fps:10},on:{result:_vm.onScan}})],1),_vm._v(" "),_c("validation-observer",{ref:"QuickCategory"},[_c("b-modal",{attrs:{id:"Quick_Add_Category","hide-footer":"",size:"md",title:_vm.$t("Add")+" "+_vm.$t("Categorie")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.submitQuickCategory.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Code category",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(v){return[_c("b-form-group",{attrs:{label:_vm.$t("Codecategorie")+" *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_Code_category"),state:_vm.getValidationState(v),"aria-describedby":"QuickCategoryCode-feedback"},model:{value:_vm.quickCategory.code,callback:function callback($$v){_vm.$set(_vm.quickCategory,"code",$$v);},expression:"quickCategory.code"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickCategoryCode-feedback"}},[_vm._v("\n                      "+_vm._s(v.errors[0])+"\n                    ")])],1)];}}],null,false,3353960220)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Name category",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(v){return[_c("b-form-group",{attrs:{label:_vm.$t("Namecategorie")+" *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_name_category"),state:_vm.getValidationState(v),"aria-describedby":"QuickCategoryName-feedback"},model:{value:_vm.quickCategory.name,callback:function callback($$v){_vm.$set(_vm.quickCategory,"name",$$v);},expression:"quickCategory.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickCategoryName-feedback"}},[_vm._v("\n                      "+_vm._s(v.errors[0])+"\n                    ")])],1)];}}],null,false,3726818038)})],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.quickCategorySubmitting}},[_c("lucide-icon",{staticClass:"me-2 font-weight-bold",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                ")],1),_vm._v(" "),_vm.quickCategorySubmitting?_c("div",{staticClass:"spinner-inline"},[_c("div",{staticClass:"spinner sm spinner-primary mt-2"})]):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c("validation-observer",{ref:"QuickBrand"},[_c("b-modal",{attrs:{id:"Quick_Add_Brand","hide-footer":"",size:"md",title:_vm.$t("Add")+" "+_vm.$t("Brand")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.submitQuickBrand.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Name brand",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(v){return[_c("b-form-group",{attrs:{label:_vm.$t("Name")+" *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_name_brand"),state:_vm.getValidationState(v),"aria-describedby":"QuickBrandName-feedback"},model:{value:_vm.quickBrand.name,callback:function callback($$v){_vm.$set(_vm.quickBrand,"name",$$v);},expression:"quickBrand.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickBrandName-feedback"}},[_vm._v("\n                      "+_vm._s(v.errors[0])+"\n                    ")])],1)];}}],null,false,140160435)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Description")}},[_c("b-form-textarea",{attrs:{placeholder:_vm.$t("Afewwords"),rows:"3"},model:{value:_vm.quickBrand.description,callback:function callback($$v){_vm.$set(_vm.quickBrand,"description",$$v);},expression:"quickBrand.description"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.quickBrandSubmitting}},[_c("lucide-icon",{staticClass:"me-2 font-weight-bold",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                ")],1),_vm._v(" "),_vm.quickBrandSubmitting?_c("div",{staticClass:"spinner-inline"},[_c("div",{staticClass:"spinner sm spinner-primary mt-2"})]):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c("validation-observer",{ref:"QuickUnit"},[_c("b-modal",{attrs:{id:"Quick_Add_Unit","hide-footer":"",size:"md",title:_vm.$t("Add")+" "+_vm.$t("UnitProduct")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.submitQuickUnit.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Name unit",rules:{required:true,max:15}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Name")+" "+"*"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_Name_Unit"),state:_vm.getValidationState(validationContext),"aria-describedby":"QuickUnitName-feedback"},model:{value:_vm.quickUnit.name,callback:function callback($$v){_vm.$set(_vm.quickUnit,"name",$$v);},expression:"quickUnit.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickUnitName-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2485003354)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"ShortName unit",rules:{required:true,max:15}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("ShortName")+" "+"*"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_ShortName_Unit"),state:_vm.getValidationState(validationContext),"aria-describedby":"QuickUnitShortName-feedback"},model:{value:_vm.quickUnit.ShortName,callback:function callback($$v){_vm.$set(_vm.quickUnit,"ShortName",$$v);},expression:"quickUnit.ShortName"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickUnitShortName-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3452517608)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("BaseUnit")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Base_Unit"),options:_vm.units_base&&_vm.units_base.length>0?_vm.units_base.map(function(units_base){return{label:units_base.name,value:units_base.id};}):[]},on:{input:_vm.Selected_Base_Unit_Quick},model:{value:_vm.quickUnit.base_unit,callback:function callback($$v){_vm.$set(_vm.quickUnit,"base_unit",$$v);},expression:"quickUnit.base_unit"}})],1)],1),_vm._v(" "),_c("b-col",{directives:[{name:"show",rawName:"v-show",value:_vm.show_operator_quick,expression:"show_operator_quick"}],attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Operator")}},[_c("v-select",{attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Operator"),options:[{label:"Multiply (*)",value:"*"},{label:"Divide (/)",value:"/"}]},model:{value:_vm.quickUnit.operator,callback:function callback($$v){_vm.$set(_vm.quickUnit,"operator",$$v);},expression:"quickUnit.operator"}})],1)],1),_vm._v(" "),_c("b-col",{directives:[{name:"show",rawName:"v-show",value:_vm.show_operator_quick,expression:"show_operator_quick"}],attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Operation Value",rules:_vm.show_operator_quick?{required:true,regex:/^\d*\.?\d*$/}:{}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("OperationValue")+" "+"*"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_Operation_Value"),state:_vm.getValidationState(validationContext),"aria-describedby":"QuickUnitOperation-feedback"},model:{value:_vm.quickUnit.operator_value,callback:function callback($$v){_vm.$set(_vm.quickUnit,"operator_value",$$v);},expression:"quickUnit.operator_value"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickUnitOperation-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3777150575)})],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.quickUnitSubmitting}},[_c("lucide-icon",{staticClass:"me-2 font-weight-bold",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                ")],1),_vm._v(" "),_vm.quickUnitSubmitting?_c("div",{staticClass:"spinner-inline"},[_c("div",{staticClass:"spinner sm spinner-primary mt-2"})]):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c("validation-observer",{ref:"QuickWarehouseLocation"},[_c("b-modal",{attrs:{id:"Quick_Add_Warehouse_Location","hide-footer":"",size:"md",title:_vm.$t("Add")+" "+_vm.$t("Warehouse_Location")}},[_c("b-form",{on:{submit:function submit($event){$event.preventDefault();return _vm.submitQuickWarehouseLocation.apply(null,arguments);}}},[_c("b-row",[_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Warehouse",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(v){return[_c("b-form-group",{attrs:{label:_vm.$t("Warehouse")+" *"}},[_c("b-form-select",{attrs:{options:_vm.warehouses.map(function(w){return{value:w.id,text:w.name};}),state:_vm.getValidationState(v),"aria-describedby":"QuickWarehouseLocationWarehouse-feedback",disabled:_vm.quickWarehouseLocationWarehouseLocked},model:{value:_vm.quickWarehouseLocation.warehouse_id,callback:function callback($$v){_vm.$set(_vm.quickWarehouseLocation,"warehouse_id",$$v);},expression:"quickWarehouseLocation.warehouse_id"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickWarehouseLocationWarehouse-feedback"}},[_vm._v("\n                      "+_vm._s(v.errors[0])+"\n                    ")])],1)];}}],null,false,2054981688)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("validation-provider",{attrs:{name:"Rack/Location code",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(v){return[_c("b-form-group",{attrs:{label:_vm.$t("Rack_Location_Code")+" *"}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_Rack_Location_Code"),state:_vm.getValidationState(v),"aria-describedby":"QuickWarehouseLocationCode-feedback"},model:{value:_vm.quickWarehouseLocation.code,callback:function callback($$v){_vm.$set(_vm.quickWarehouseLocation,"code",$$v);},expression:"quickWarehouseLocation.code"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"QuickWarehouseLocationCode-feedback"}},[_vm._v("\n                      "+_vm._s(v.errors[0])+"\n                    ")])],1)];}}],null,false,3935948254)})],1),_vm._v(" "),_c("b-col",{attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("Location_Name")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Enter_Location_Name")},model:{value:_vm.quickWarehouseLocation.name,callback:function callback($$v){_vm.$set(_vm.quickWarehouseLocation,"name",$$v);},expression:"quickWarehouseLocation.name"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.quickWarehouseLocationSubmitting}},[_c("lucide-icon",{staticClass:"me-2 font-weight-bold",attrs:{name:"check"}}),_vm._v(" "+_vm._s(_vm.$t("submit"))+"\n                ")],1),_vm._v(" "),_vm.quickWarehouseLocationSubmitting?_c("div",{staticClass:"spinner-inline"},[_c("div",{staticClass:"spinner sm spinner-primary mt-2"})]):_vm._e()],1)],1)],1)],1)],1),_vm._v(" "),_c("b-row",{staticClass:"product-create-grid"},[_c("b-col",{staticClass:"mb-4 product-create-main",attrs:{lg:"8"}},[_c("div",{staticClass:"form-section",attrs:{id:"section-basic"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"file"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("BasicInformation")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Name",rules:{required:true,min:3,max:55}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                          "+_vm._s(_vm.$t("Name_product"))+" *\n                          "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("ProductNameTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("ProductNameTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,true)},[_vm._v(" "),_c("b-form-input",{staticClass:"form-control-modern",attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Name-feedback",placeholder:_vm.$t("Enter_Name_Product")},model:{value:_vm.product.name,callback:function callback($$v){_vm.$set(_vm.product,"name",$$v);},expression:"product.name"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Name-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,326124555)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Barcode Symbology",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref){var valid=_ref.valid,errors=_ref.errors;return _c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                          "+_vm._s(_vm.$t("BarcodeSymbology"))+" *\n                          "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("BarcodeSymbologyTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("BarcodeSymbologyTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,912720732)},[_vm._v(" "),_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Symbology"),options:[{label:"Code 128",value:"CODE128"},{label:"Code 39",value:"CODE39"},{label:"EAN8",value:"EAN8"},{label:"EAN13",value:"EAN13"},{label:"UPC",value:"UPC"}]},model:{value:_vm.product.Type_barcode,callback:function callback($$v){_vm.$set(_vm.product,"Type_barcode",$$v);},expression:"product.Type_barcode"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1326234838)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Code Product",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref2){var valid=_ref2.valid,errors=_ref2.errors;return _c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                          "+_vm._s(_vm.$t("CodeProduct"))+" *\n                          "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("ProductCodeTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("ProductCodeTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,195086673)},[_vm._v(" "),_c("div",{staticClass:"input-group modern-input-group"},[_c("div",{staticClass:"input-group-prepend"},[_c("button",{staticClass:"btn-icon-scan",attrs:{type:"button",title:"Scan"},on:{click:_vm.showModal}},[_c("img",{staticClass:"scan-icon",attrs:{src:"/assets_setup/scan.png",alt:"Scan"}})])]),_vm._v(" "),_c("b-form-input",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,"aria-describedby":"CodeProduct-feedback",type:"text",placeholder:_vm.$t("Enter_Product_Code")},model:{value:_vm.product.code,callback:function callback($$v){_vm.$set(_vm.product,"code",$$v);},expression:"product.code"}}),_vm._v(" "),_c("div",{staticClass:"input-group-append"},[_c("button",{staticClass:"btn-icon-gen",attrs:{type:"button",title:"Generate"},on:{click:function click($event){return _vm.generateNumber();}}},[_c("lucide-icon",{attrs:{name:"barcode"}})],1)])],1),_vm._v(" "),_vm.code_exist!=""?_c("b-alert",{staticClass:"mt-2 mb-0",attrs:{show:"",variant:"danger"}},[_vm._v(_vm._s(_vm.code_exist))]):_vm._e(),_vm._v(" "),errors[0]?_c("b-form-invalid-feedback",{attrs:{id:"CodeProduct-feedback"}},[_vm._v(_vm._s(errors[0]))]):_vm._e()],1);}}],null,false,4042073556)})],1),_vm._v(" "),_vm.show_product_gtin?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                        "+_vm._s(_vm.$t("Barcode_GTIN"))+"\n                        "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("Barcode_GTIN_Tooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("Barcode_GTIN_Tooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,1837784810)},[_vm._v(" "),_c("b-form-input",{attrs:{type:"text",placeholder:_vm.$t("Barcode_GTIN_Placeholder")},model:{value:_vm.product.gtin,callback:function callback($$v){_vm.$set(_vm.product,"gtin",$$v);},expression:"product.gtin"}})],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"category",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref3){var valid=_ref3.valid,errors=_ref3.errors;return _c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                          "+_vm._s(_vm.$t("MultiCategoriesLabel"))+" *\n                          "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("CategoriesMultiTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("CategoriesMultiTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,4213774542)},[_vm._v(" "),_c("b-form-input",{staticClass:"sr-only",attrs:{tabindex:"-1","aria-hidden":"true"},model:{value:_vm.product.category_id,callback:function callback($$v){_vm.$set(_vm.product,"category_id",$$v);},expression:"product.category_id"}}),_vm._v(" "),_c("b-input-group",{staticClass:"category-input-group"},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{multiple:"","close-on-select":false,state:errors[0]?false:valid?true:null,reduce:function reduce(o){return o.value;},placeholder:_vm.$t("Choose_Category"),options:_vm.categories.map(function(c){return{label:c.name,value:c.id};})},model:{value:_vm.product.assigned_category_ids,callback:function callback($$v){_vm.$set(_vm.product,"assigned_category_ids",$$v);},expression:"product.assigned_category_ids"}}),_vm._v(" "),_vm.currentUserPermissions&&_vm.currentUserPermissions.includes("category")?_c("b-input-group-append",[_c("b-button",{staticClass:"category-add-btn",attrs:{variant:"primary",title:_vm.$t("Add")+" "+_vm.$t("Categorie")},on:{click:_vm.openQuickCategoryModal}},[_c("lucide-icon",{attrs:{name:"plus"}})],1)],1):_vm._e()],1),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,4002792572)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                        "+_vm._s(_vm.$t("MultiSubcategoriesLabel"))+"\n                        "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("SubcategoriesMultiTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("SubcategoriesMultiTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,2389845408)},[_vm._v(" "),_c("v-select",{attrs:{multiple:"","close-on-select":false,reduce:function reduce(o){return o.value;},options:_vm.subcategoryOptionsFiltered,placeholder:_vm.$t("Choose_Sub_Category"),disabled:!(_vm.product.assigned_category_ids&&_vm.product.assigned_category_ids.length)},model:{value:_vm.product.assigned_subcategory_ids,callback:function callback($$v){_vm.$set(_vm.product,"assigned_subcategory_ids",$$v);},expression:"product.assigned_subcategory_ids"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                        "+_vm._s(_vm.$t("Brand"))+"\n                        "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("BrandTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("BrandTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,1574445766)},[_vm._v(" "),_c("b-input-group",{staticClass:"brand-input-group"},[_c("v-select",{attrs:{placeholder:_vm.$t("Choose_Brand"),reduce:function reduce(label){return label.value;},options:_vm.brands.map(function(brands){return{label:brands.name,value:brands.id};})},model:{value:_vm.product.brand_id,callback:function callback($$v){_vm.$set(_vm.product,"brand_id",$$v);},expression:"product.brand_id"}}),_vm._v(" "),_vm.currentUserPermissions&&_vm.currentUserPermissions.includes("brand")?_c("b-input-group-append",[_c("b-button",{staticClass:"brand-add-btn",attrs:{variant:"primary",title:_vm.$t("Add")+" "+_vm.$t("Brand")},on:{click:_vm.openQuickBrandModal}},[_c("lucide-icon",{attrs:{name:"plus"}})],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("b-form-group",{scopedSlots:_vm._u([{key:"label",fn:function fn(){return[_c("span",{staticClass:"label-with-help"},[_vm._v("\n                        "+_vm._s(_vm.$t("Description"))+"\n                        "),_c("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:true,top:true}}],staticClass:"label-help-icon",attrs:{title:_vm.$t("DescriptionTooltip"),tabindex:"0",role:"button","aria-label":_vm.$t("DescriptionTooltip")}},[_c("lucide-icon",{attrs:{name:"info"}})],1)])];},proxy:true}],null,false,3030326299)},[_vm._v(" "),_c("textarea",{directives:[{name:"model",rawName:"v-model",value:_vm.product.note,expression:"product.note"}],staticClass:"form-control",attrs:{rows:"4",placeholder:_vm.$t("Afewwords")},domProps:{value:_vm.product.note},on:{input:function input($event){if($event.target.composing)return;_vm.$set(_vm.product,"note",$event.target.value);}}})])],1),_vm._v(" "),_vm.jewelryModeEnabled&&!_vm.canManageJewelryItems?_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"info"}},[_vm._v("\n                    Jewelry mode is enabled for this tenant, but you do not have permission to edit jewelry-specific product fields.\n                  ")])],1):_vm._e(),_vm._v(" "),_vm.jewelryModeEnabled&&_vm.canManageJewelryItems?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Jewelry Item"}},[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},on:{change:_vm.handleJewelryToggle},model:{value:_vm.product.is_jewelry_item,callback:function callback($$v){_vm.$set(_vm.product,"is_jewelry_item",$$v);},expression:"product.is_jewelry_item"}},[_vm._v("\n                      This product is a jewelry item\n                    ")]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block"},[_vm._v("Enable jewelry-specific metal, weight, stone, and making-charge fields for this product.")])],1)],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Jewelry Item Type *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("jewelry_item_type")===false},attrs:{options:_vm.jewelryItemTypeOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},model:{value:_vm.product.jewelry_item_type,callback:function callback($$v){_vm.$set(_vm.product,"jewelry_item_type",$$v);},expression:"product.jewelry_item_type"}}),_vm._v(" "),_vm.jewelryFieldMessage("jewelry_item_type")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("jewelry_item_type"))+"\n                    ")]):_vm._e()],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"form-section",attrs:{id:"section-jewelry-metal"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"tag"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v("Metal & Karat")])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Metal Type *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("metal_type_id")===false},attrs:{options:_vm.metalTypeOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},on:{input:_vm.handleMetalTypeChange},model:{value:_vm.product.metal_type_id,callback:function callback($$v){_vm.$set(_vm.product,"metal_type_id",$$v);},expression:"product.metal_type_id"}}),_vm._v(" "),_vm.jewelryFieldMessage("metal_type_id")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("metal_type_id"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Karat *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("karat_id")===false},attrs:{options:_vm.filteredKaratOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose"),disabled:!_vm.product.metal_type_id},model:{value:_vm.product.karat_id,callback:function callback($$v){_vm.$set(_vm.product,"karat_id",$$v);},expression:"product.karat_id"}}),_vm._v(" "),_c("small",{staticClass:"text-muted d-block"},[_vm._v("Karat options automatically filter to the selected metal.")]),_vm._v(" "),_vm.jewelryFieldMessage("karat_id")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("karat_id"))+"\n                    ")]):_vm._e()],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"form-section",attrs:{id:"section-jewelry-weight"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"package"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v("Weight Information")])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"3"}},[_c("b-form-group",{attrs:{label:"Gross Weight *"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",state:_vm.jewelryFieldState("jewelry_gross_weight"),placeholder:"0.000"},model:{value:_vm.product.jewelry_gross_weight,callback:function callback($$v){_vm.$set(_vm.product,"jewelry_gross_weight",_vm._n($$v));},expression:"product.jewelry_gross_weight"}}),_vm._v(" "),_vm.jewelryFieldMessage("jewelry_gross_weight")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("jewelry_gross_weight"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"3"}},[_c("b-form-group",{attrs:{label:"Net Weight"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",state:_vm.jewelryFieldState("jewelry_net_weight"),placeholder:"0.000"},model:{value:_vm.product.jewelry_net_weight,callback:function callback($$v){_vm.$set(_vm.product,"jewelry_net_weight",_vm._n($$v));},expression:"product.jewelry_net_weight"}}),_vm._v(" "),_vm.jewelryFieldMessage("jewelry_net_weight")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("jewelry_net_weight"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"3"}},[_c("b-form-group",{attrs:{label:"Metal Weight *"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",state:_vm.jewelryFieldState("jewelry_metal_weight"),placeholder:"0.000"},model:{value:_vm.product.jewelry_metal_weight,callback:function callback($$v){_vm.$set(_vm.product,"jewelry_metal_weight",_vm._n($$v));},expression:"product.jewelry_metal_weight"}}),_vm._v(" "),_vm.jewelryFieldMessage("jewelry_metal_weight")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("jewelry_metal_weight"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"3"}},[_c("b-form-group",{attrs:{label:"Weight Unit *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("jewelry_weight_uom")===false},attrs:{options:_vm.jewelryWeightUnitOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},model:{value:_vm.product.jewelry_weight_uom,callback:function callback($$v){_vm.$set(_vm.product,"jewelry_weight_uom",$$v);},expression:"product.jewelry_weight_uom"}}),_vm._v(" "),_vm.jewelryFieldMessage("jewelry_weight_uom")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("jewelry_weight_uom"))+"\n                    ")]):_vm._e()],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"form-section",attrs:{id:"section-jewelry-stones"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"file"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v("Stones & Certificates")])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Hallmark Reference"}},[_c("b-form-input",{attrs:{state:_vm.jewelryFieldState("hallmark_reference"),placeholder:"Enter hallmark reference"},model:{value:_vm.product.hallmark_reference,callback:function callback($$v){_vm.$set(_vm.product,"hallmark_reference",$$v);},expression:"product.hallmark_reference"}}),_vm._v(" "),_vm.jewelryFieldMessage("hallmark_reference")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("hallmark_reference"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Certificate Number"}},[_c("b-form-input",{attrs:{state:_vm.jewelryFieldState("certificate_number"),placeholder:"Enter certificate number"},model:{value:_vm.product.certificate_number,callback:function callback($$v){_vm.$set(_vm.product,"certificate_number",$$v);},expression:"product.certificate_number"}}),_vm._v(" "),_vm.jewelryFieldMessage("certificate_number")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("certificate_number"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Ownership"}},[_c("v-select",{attrs:{options:[{label:"Own",value:"own"},{label:"Memo",value:"memo"},{label:"Consignment",value:"consignment"}],reduce:function reduce(option){return option.value;},placeholder:"Choose ownership"},model:{value:_vm.product.ownership_type,callback:function callback($$v){_vm.$set(_vm.product,"ownership_type",$$v);},expression:"product.ownership_type"}})],1)],1)],1),_vm._v(" "),_c("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mb-3"},[_c("div",[_c("h5",{staticClass:"mb-1"},[_vm._v("Stone Details")]),_vm._v(" "),_c("p",{staticClass:"text-muted small mb-0"},[_vm._v("Add one row per stone specification or certificate attached to this jewelry item.")])]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-primary",size:"sm"},on:{click:function click($event){return _vm.addStoneRow();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"plus"}}),_vm._v("Add Stone\n                ")],1)],1),_vm._v(" "),_vm.jewelryFieldMessage("item_stones")?_c("b-alert",{attrs:{show:"",variant:"danger"}},[_vm._v("\n                "+_vm._s(_vm.jewelryFieldMessage("item_stones"))+"\n              ")]):_vm._e(),_vm._v(" "),!_vm.product.item_stones.length?_c("div",{staticClass:"alert alert-light border text-muted mb-0"},[_vm._v("\n                No stones added yet.\n              ")]):_vm._e(),_vm._v(" "),_vm._l(_vm.product.item_stones,function(stone,index){return _c("div",{key:stone._rowKey||stone.id||index,staticClass:"border rounded p-3 mb-3"},[_c("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center mb-3"},[_c("h6",{staticClass:"mb-0"},[_vm._v("Stone #"+_vm._s(index+1))]),_vm._v(" "),_c("b-button",{attrs:{variant:"outline-danger",size:"sm"},on:{click:function click($event){return _vm.removeStoneRow(index);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1),_vm._v(" "),_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Stone Type *"}},[_c("v-select",{attrs:{options:_vm.stoneTypeOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},model:{value:stone.stone_type_id,callback:function callback($$v){_vm.$set(stone,"stone_type_id",$$v);},expression:"stone.stone_type_id"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Stone Name"}},[_c("b-form-input",{attrs:{placeholder:"Enter stone name"},model:{value:stone.stone_name,callback:function callback($$v){_vm.$set(stone,"stone_name",$$v);},expression:"stone.stone_name"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Quantity"}},[_c("b-form-input",{attrs:{type:"number",min:"1",step:"1",placeholder:"1"},model:{value:stone.quantity,callback:function callback($$v){_vm.$set(stone,"quantity",_vm._n($$v));},expression:"stone.quantity"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Carat Value"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",placeholder:"0.000"},model:{value:stone.carat_value,callback:function callback($$v){_vm.$set(stone,"carat_value",_vm._n($$v));},expression:"stone.carat_value"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Color"}},[_c("b-form-input",{attrs:{placeholder:"Enter color"},model:{value:stone.color,callback:function callback($$v){_vm.$set(stone,"color",$$v);},expression:"stone.color"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Clarity"}},[_c("b-form-input",{attrs:{placeholder:"Enter clarity"},model:{value:stone.clarity,callback:function callback($$v){_vm.$set(stone,"clarity",$$v);},expression:"stone.clarity"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Cut"}},[_c("b-form-input",{attrs:{placeholder:"Enter cut"},model:{value:stone.cut,callback:function callback($$v){_vm.$set(stone,"cut",$$v);},expression:"stone.cut"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Shape"}},[_c("b-form-input",{attrs:{placeholder:"Enter shape"},model:{value:stone.shape,callback:function callback($$v){_vm.$set(stone,"shape",$$v);},expression:"stone.shape"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Stone Certificate Number"}},[_c("b-form-input",{attrs:{placeholder:"Enter certificate number"},model:{value:stone.certificate_number,callback:function callback($$v){_vm.$set(stone,"certificate_number",$$v);},expression:"stone.certificate_number"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Unit Cost"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.01",placeholder:"0.00"},model:{value:stone.unit_cost_amount,callback:function callback($$v){_vm.$set(stone,"unit_cost_amount",_vm._n($$v));},expression:"stone.unit_cost_amount"}})],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"6"}},[_c("b-form-group",{attrs:{label:"Total Cost"}},[_c("b-form-input",{attrs:{value:_vm.formatNumber(_vm.calculateStoneTotal(stone),_vm.priceDecimals),disabled:""}})],1)],1)],1)],1);})],2)],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"form-section",attrs:{id:"section-jewelry-charges"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"database-zap"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v("Cost & Making Charges")])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Making Charge Type *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("making_charge_type")===false},attrs:{options:_vm.makingChargeTypeOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},model:{value:_vm.product.making_charge_type,callback:function callback($$v){_vm.$set(_vm.product,"making_charge_type",$$v);},expression:"product.making_charge_type"}}),_vm._v(" "),_vm.jewelryFieldMessage("making_charge_type")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("making_charge_type"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_vm.product.making_charge_type!=="formula"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Making Charge Value *"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.01",state:_vm.jewelryFieldState("making_charge_value"),placeholder:"0.00"},model:{value:_vm.product.making_charge_value,callback:function callback($$v){_vm.$set(_vm.product,"making_charge_value",_vm._n($$v));},expression:"product.making_charge_value"}}),_vm._v(" "),_vm.jewelryFieldMessage("making_charge_value")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("making_charge_value"))+"\n                    ")]):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_vm.product.making_charge_type==="formula"?_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:"Making Charge Formula *",description:"Available variables: gross_weight, net_weight, metal_weight, metal_value, gold_rate. Example: metal_weight * 5 + 20"}},[_c("b-form-input",{attrs:{state:_vm.jewelryFieldState("making_charge_formula"),placeholder:"metal_weight * 5 + 20"},model:{value:_vm.product.making_charge_formula,callback:function callback($$v){_vm.$set(_vm.product,"making_charge_formula",$$v);},expression:"product.making_charge_formula"}}),_vm._v(" "),_vm.jewelryFieldMessage("making_charge_formula")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("making_charge_formula"))+"\n                    ")]):_vm._e()],1)],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Wastage Type *"}},[_c("v-select",{"class":{"is-invalid":_vm.jewelryFieldState("wastage_type")===false},attrs:{options:_vm.wastageTypeOptions,reduce:function reduce(option){return option.value;},placeholder:_vm.$t("Choose")},model:{value:_vm.product.wastage_type,callback:function callback($$v){_vm.$set(_vm.product,"wastage_type",$$v);},expression:"product.wastage_type"}}),_vm._v(" "),_vm.jewelryFieldMessage("wastage_type")?_c("div",{staticClass:"invalid-feedback d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("wastage_type"))+"\n                    ")]):_vm._e()],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:"Wastage Value *"}},[_c("b-form-input",{attrs:{type:"number",min:"0",step:"0.001",state:_vm.jewelryFieldState("wastage_value"),placeholder:"0.000"},model:{value:_vm.product.wastage_value,callback:function callback($$v){_vm.$set(_vm.product,"wastage_value",_vm._n($$v));},expression:"product.wastage_value"}}),_vm._v(" "),_vm.jewelryFieldMessage("wastage_value")?_c("b-form-invalid-feedback",{staticClass:"d-block"},[_vm._v("\n                      "+_vm._s(_vm.jewelryFieldMessage("wastage_value"))+"\n                    ")]):_vm._e()],1)],1)],1)],1)],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"form-section",attrs:{id:"section-jewelry-preview"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"eye"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v("Pricing Preview")])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("PricingPreview",{attrs:{"product-id":_vm.product.id||null,"product-data":_vm.product,"currency-symbol":_vm.currentUser&&_vm.currentUser.currency||"","price-decimals":_vm.priceDecimals}})],1)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-gallery"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"upload"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("ProductImagesGallery")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card product-gallery-section-card"},[_c("b-card-body",{staticClass:"product-gallery-card-body"},[_c("p",{staticClass:"product-gallery-intro text-muted small mb-3 mb-md-4"},[_vm._v(_vm._s(_vm.$t("ProductGalleryHint")))]),_vm._v(" "),_c("label",{staticClass:"product-gallery-dropzone mb-3 mb-md-4"},[_c("span",{staticClass:"product-gallery-dropzone-inner"},[_c("lucide-icon",{staticClass:"product-gallery-dropzone-icon",attrs:{name:"upload"}}),_vm._v(" "),_c("span",{staticClass:"product-gallery-dropzone-title"},[_vm._v(_vm._s(_vm.$t("AddProductImages")))]),_vm._v(" "),_c("span",{staticClass:"product-gallery-dropzone-sub small text-muted"},[_vm._v(_vm._s(_vm.$t("Supported_formats_JPG_PNG_GIF")))])],1),_vm._v(" "),_c("input",{staticClass:"product-gallery-file-native",attrs:{type:"file",accept:"image/*",multiple:""},on:{change:_vm.onProductGalleryFilesSelected}})]),_vm._v(" "),!_vm.productGalleryItems.length?_c("div",{staticClass:"product-gallery-empty text-center text-muted small py-4 px-2 rounded"},[_vm._v("\n                  "+_vm._s(_vm.$t("NoProductImagesYet"))+"\n                ")]):_c("draggable",{staticClass:"product-gallery-draggable",attrs:{handle:".gallery-drag-handle"},on:{end:_vm.touchProductGalleryOrder},model:{value:_vm.productGalleryItems,callback:function callback($$v){_vm.productGalleryItems=$$v;},expression:"productGalleryItems"}},_vm._l(_vm.productGalleryItems,function(row,idx){return _c("div",{key:row._uid,staticClass:"gallery-item-card d-flex align-items-center","class":{"gallery-item-card--main":row.is_main}},[_c("span",{staticClass:"gallery-drag-handle flex-shrink-0",attrs:{title:"Reorder"}},[_c("lucide-icon",{attrs:{name:"grip-vertical"}})],1),_vm._v(" "),_c("div",{staticClass:"position-relative flex-shrink-0 rounded overflow-hidden gallery-thumb-select","class":{"gallery-thumb-main":row.is_main},attrs:{title:_vm.$t("ClickImageToSetMain"),role:"button",tabindex:"0"},on:{click:function click($event){return _vm.setProductGalleryMain(row);},keyup:function keyup($event){if(!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return _vm.setProductGalleryMain(row);}}},[_c("img",{staticClass:"d-block gallery-item-thumb",attrs:{src:row.url,alt:""}})]),_vm._v(" "),_c("div",{staticClass:"flex-grow-1 gallery-item-meta ms-2 me-2"},[_c("div",{staticClass:"small text-truncate font-weight-medium text-dark"},[_vm._v(_vm._s(row.image_path))]),_vm._v(" "),row.is_main?_c("div",{staticClass:"mt-1"},[_c("b-badge",{staticClass:"gallery-main-badge",attrs:{variant:"success"}},[_vm._v(_vm._s(_vm.$t("MainImage")))])],1):_vm._e()]),_vm._v(" "),_c("b-button",{staticClass:"flex-shrink-0 gallery-remove-btn",attrs:{size:"sm",variant:"outline-danger"},on:{click:function click($event){return _vm.removeProductGalleryRow(idx);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1);}),0)],1)],1)],1),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-inventory"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"package"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Inventory")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Type",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref4){var valid=_ref4.valid,errors=_ref4.errors;return _c("b-form-group",{attrs:{label:_vm.$t("type")+" *"}},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,reduce:function reduce(label){return label.value;},placeholder:_vm.$t("type"),options:[{label:"Standard Product",value:"is_single"},{label:"Variable Product",value:"is_variant"},{label:"Service Product",value:"is_service"},{label:"Combo Product",value:"is_combo"}]},on:{input:_vm.Selected_Type_Product},model:{value:_vm.product.type,callback:function callback($$v){_vm.$set(_vm.product,"type",$$v);},expression:"product.type"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1189911946)})],1),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Unit Product",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref5){var valid=_ref5.valid,errors=_ref5.errors;return _c("b-form-group",{attrs:{label:_vm.$t("UnitProduct")+" *"}},[_c("b-input-group",{staticClass:"unit-input-group"},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,placeholder:_vm.$t("Choose_Unit_Product"),reduce:function reduce(label){return label.value;},options:_vm.units.map(function(units){return{label:units.name,value:units.id};})},on:{input:_vm.Selected_Unit},model:{value:_vm.product.unit_id,callback:function callback($$v){_vm.$set(_vm.product,"unit_id",$$v);},expression:"product.unit_id"}}),_vm._v(" "),_vm.currentUserPermissions&&_vm.currentUserPermissions.includes("unit")?_c("b-input-group-append",[_c("b-button",{staticClass:"unit-add-btn",attrs:{variant:"primary",title:_vm.$t("Add")+" "+_vm.$t("UnitProduct")},on:{click:_vm.openQuickUnitModal}},[_c("lucide-icon",{attrs:{name:"plus"}})],1)],1):_vm._e()],1),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1573878726)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Unit Sale",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref6){var valid=_ref6.valid,errors=_ref6.errors;return _c("b-form-group",{attrs:{label:_vm.$t("UnitSale")+" *"}},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,placeholder:_vm.$t("Choose_Unit_Sale"),reduce:function reduce(label){return label.value;},options:_vm.units_sub.map(function(units_sub){return{label:units_sub.name,value:units_sub.id};})},model:{value:_vm.product.unit_sale_id,callback:function callback($$v){_vm.$set(_vm.product,"unit_sale_id",$$v);},expression:"product.unit_sale_id"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,2513784532)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Unit Purchase",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref7){var valid=_ref7.valid,errors=_ref7.errors;return _c("b-form-group",{attrs:{label:_vm.$t("UnitPurchase")+" *"}},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,placeholder:_vm.$t("Choose_Unit_Purchase"),reduce:function reduce(label){return label.value;},options:_vm.units_sub.map(function(units_sub){return{label:units_sub.name,value:units_sub.id};})},model:{value:_vm.product.unit_purchase_id,callback:function callback($$v){_vm.$set(_vm.product,"unit_purchase_id",$$v);},expression:"product.unit_purchase_id"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,323803204)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Stock Alert",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("StockAlert")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"StockAlert-feedback",placeholder:"0"},model:{value:_vm.product.stock_alert,callback:function callback($$v){_vm.$set(_vm.product,"stock_alert",$$v);},expression:"product.stock_alert"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"StockAlert-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1158229199)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Weight",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Weight")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Weight-feedback",placeholder:"0.00"},model:{value:_vm.product.weight,callback:function callback($$v){_vm.$set(_vm.product,"weight",$$v);},expression:"product.weight"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Weight-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3985157566)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-2",attrs:{md:"12"}},[_c("h6",{staticClass:"mb-2"},[_vm._v(_vm._s(_vm.$t("Dimensions_in")))])]):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[_c("validation-provider",{attrs:{name:"Length",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Length")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Length-feedback",placeholder:"0.00"},model:{value:_vm.product.length,callback:function callback($$v){_vm.$set(_vm.product,"length",$$v);},expression:"product.length"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Length-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,2809633470)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[_c("validation-provider",{attrs:{name:"Width",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Width")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Width-feedback",placeholder:"0.00"},model:{value:_vm.product.width,callback:function callback($$v){_vm.$set(_vm.product,"width",$$v);},expression:"product.width"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Width-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,4254160414)})],1):_vm._e(),_vm._v(" "),_vm.product.type!="is_service"?_c("b-col",{staticClass:"mb-3",attrs:{md:"4"}},[_c("validation-provider",{attrs:{name:"Height",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Height")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Height-feedback",placeholder:"0.00"},model:{value:_vm.product.height,callback:function callback($$v){_vm.$set(_vm.product,"height",$$v);},expression:"product.height"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Height-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,184305598)})],1):_vm._e()],1)],1)],1),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-pricing"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"tag"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("PricingAndTax")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_vm.product.type=="is_single"||_vm.product.type=="is_combo"?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Product Cost",rules:{required:true,regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("ProductCost")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"ProductCost-feedback",type:"text",placeholder:"0.00"},model:{value:_vm.product.cost,callback:function callback($$v){_vm.$set(_vm.product,"cost",$$v);},expression:"product.cost"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"ProductCost-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1437637383)})],1):_vm._e(),_vm._v(" "),_vm.product.type=="is_single"||_vm.product.type=="is_service"||_vm.product.type=="is_combo"?_c("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Product Price",rules:{required:true,regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Retail Price")+" *"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"ProductPrice-feedback",label:"Price",placeholder:_vm.$t("Enter_Product_Price")},model:{value:_vm.product.price,callback:function callback($$v){_vm.$set(_vm.product,"price",$$v);},expression:"product.price"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"ProductPrice-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,1704638084)})],1):_vm._e(),_vm._v(" "),_vm.product.type=="is_single"||_vm.product.type=="is_service"||_vm.product.type=="is_combo"?_c("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Wholesale Price",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Wholesale_Price")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"WholesalePrice-feedback",placeholder:_vm.$t("Enter_Wholesale_Price")},model:{value:_vm.product.wholesale_price,callback:function callback($$v){_vm.$set(_vm.product,"wholesale_price",$$v);},expression:"product.wholesale_price"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"WholesalePrice-feedback"}},[_vm._v("\n                      "+_vm._s(validationContext.errors[0])+"\n                    ")])],1)];}}],null,false,3222788534)})],1):_vm._e(),_vm._v(" "),_vm.product.type=="is_single"||_vm.product.type=="is_service"||_vm.product.type=="is_combo"?_c("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Minimum Selling Price",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Minimum_Selling_Price")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"MinPrice-feedback",placeholder:_vm.$t("Enter_Minimum_Selling_Price")},model:{value:_vm.product.min_price,callback:function callback($$v){_vm.$set(_vm.product,"min_price",$$v);},expression:"product.min_price"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"MinPrice-feedback"}},[_vm._v("\n                      "+_vm._s(validationContext.errors[0])+"\n                    ")])],1)];}}],null,false,3852252670)})],1):_vm._e(),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("OrderTax")}},[_c("b-input-group",{attrs:{append:"%"}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"OrderTax-feedback",type:"text",placeholder:"0"},model:{value:_vm.product.TaxNet,callback:function callback($$v){_vm.$set(_vm.product,"TaxNet",_vm._n($$v));},expression:"product.TaxNet"}})],1),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,3116927460)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Tax Method",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref8){var valid=_ref8.valid,errors=_ref8.errors;return _c("b-form-group",{attrs:{label:_vm.$t("TaxMethod")+" *"}},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{state:errors[0]?false:valid?true:null,reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Method"),options:[{label:"Exclusive",value:"1"},{label:"Inclusive",value:"2"}]},model:{value:_vm.product.tax_method,callback:function callback($$v){_vm.$set(_vm.product,"tax_method",$$v);},expression:"product.tax_method"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,1784653758)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Discount Method",rules:{required:true}},scopedSlots:_vm._u([{key:"default",fn:function fn(_ref9){var valid=_ref9.valid,errors=_ref9.errors;return _c("b-form-group",{attrs:{label:_vm.$t("Discount_Method")+" *"}},[_c("v-select",{"class":{"is-invalid":!!errors.length},attrs:{reduce:function reduce(label){return label.value;},placeholder:_vm.$t("Choose_Method"),state:errors[0]?false:valid?true:null,options:[{label:"Percent %",value:"1"},{label:"Fixed",value:"2"}]},model:{value:_vm.product.discount_method,callback:function callback($$v){_vm.$set(_vm.product,"discount_method",$$v);},expression:"product.discount_method"}}),_vm._v(" "),_c("b-form-invalid-feedback",[_vm._v(_vm._s(errors[0]))])],1);}}],null,false,836634483)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Discount Rate",rules:{required:true,regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Discount")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Discount-feedback",placeholder:"0.00"},model:{value:_vm.product.discount,callback:function callback($$v){_vm.$set(_vm.product,"discount",_vm._n($$v));},expression:"product.discount"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,353204302)})],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("validation-provider",{attrs:{name:"Points",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:_vm._u([{key:"default",fn:function fn(validationContext){return[_c("b-form-group",{attrs:{label:_vm.$t("Points")}},[_c("b-form-input",{attrs:{state:_vm.getValidationState(validationContext),"aria-describedby":"Points-feedback",placeholder:"0"},model:{value:_vm.product.points,callback:function callback($$v){_vm.$set(_vm.product,"points",_vm._n($$v));},expression:"product.points"}}),_vm._v(" "),_c("b-form-invalid-feedback",{attrs:{id:"Points-feedback"}},[_vm._v(_vm._s(validationContext.errors[0]))])],1)];}}],null,false,350788512)})],1)],1)],1)],1),_vm._v(" "),_vm.product.type=="is_combo"?_c("div",{staticClass:"form-section",attrs:{id:"section-combo"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"shopping-bag"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("ComboProducts")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("div",{staticClass:"combo-search mb-3"},[_c("b-form-group",{attrs:{label:_vm.$t("SearchProduct")}},[_c("div",{staticClass:"autocomplete"},[_c("input",{ref:"product_autocomplete",staticClass:"autocomplete-input form-control",attrs:{placeholder:_vm.$t("Scan_Search_Product_by_Code_Name")},on:{input:function input(e){return _vm.search_input=e.target.value;},keyup:function keyup($event){return _vm.search(_vm.search_input);},focus:_vm.handleFocus,blur:_vm.handleBlur}}),_vm._v(" "),_c("ul",{directives:[{name:"show",rawName:"v-show",value:_vm.focused,expression:"focused"}],staticClass:"autocomplete-result-list"},_vm._l(_vm.product_filter,function(product_fil){return _c("li",{key:product_fil.id,staticClass:"autocomplete-result",on:{mousedown:function mousedown($event){return _vm.SearchProduct(product_fil);}}},[_vm._v(_vm._s(_vm.getResultValue(product_fil)))]);}),0)])])],1),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-hover table-modern"},[_c("thead",[_c("tr",[_c("th",[_vm._v(_vm._s(_vm.$t("ProductName")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Quantity")))]),_vm._v(" "),_c("th",{staticClass:"text-right"},[_vm._v(_vm._s(_vm.$t("Cost")))]),_vm._v(" "),_c("th",{staticClass:"text-right"},[_vm._v(_vm._s(_vm.$t("SubTotal")))]),_vm._v(" "),_c("th",{staticClass:"text-center",staticStyle:{width:"50px"}})])]),_vm._v(" "),_c("tbody",[_vm.materiels.length<=0?_c("tr",[_c("td",{staticClass:"text-center text-muted",attrs:{colspan:"5"}},[_vm._v(_vm._s(_vm.$t("NodataAvailable")))])]):_vm._e(),_vm._v(" "),_vm._l(_vm.materiels,function(materiel){return _c("tr",{key:materiel.product_id},[_c("td",[_c("div",{staticClass:"badge-wrapper"},[_c("span",{staticClass:"badge badge-primary-light"},[_vm._v(_vm._s(materiel.name))]),_vm._v(" "),_c("br"),_vm._v(" "),_c("small",{staticClass:"text-muted"},[_vm._v(_vm._s(materiel.code))])])]),_vm._v(" "),_c("td",[_c("b-input-group",{attrs:{append:materiel.unit_name}},[_c("b-form-input",{staticStyle:{width:"60px"},attrs:{min:"1",size:"sm"},model:{value:materiel.quantity,callback:function callback($$v){_vm.$set(materiel,"quantity",_vm._n($$v));},expression:"materiel.quantity"}})],1)],1),_vm._v(" "),_c("td",{staticClass:"text-right"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(materiel.cost))]),_vm._v(" "),_c("td",{staticClass:"text-right font-weight-bold"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(materiel.cost*materiel.quantity,_vm.priceDecimals)))]),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("b-button",{attrs:{variant:"danger",size:"sm",title:"Delete"},on:{click:function click($event){return _vm.delete_materiel(materiel.product_id);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1)]);})],2)])]),_vm._v(" "),_vm.materiels.length>0?_c("div",{staticClass:"combo-total mt-3"},[_c("div",{staticClass:"total-row"},[_c("span",{staticClass:"total-label"},[_vm._v(_vm._s(_vm.$t("TotalCost")))]),_vm._v(" "),_c("span",{staticClass:"total-value"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.formatNumber(_vm.totalCost,_vm.priceDecimals)))])])]):_vm._e()])],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-warranty"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"shield"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Warranty_Guarantee_Tracking")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",[_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Warranty_Period")}},[_c("b-input-group",[_c("b-form-input",{attrs:{placeholder:"0"},model:{value:_vm.product.warranty_period,callback:function callback($$v){_vm.$set(_vm.product,"warranty_period",$$v);},expression:"product.warranty_period"}}),_vm._v(" "),_c("b-form-select",{attrs:{options:[{value:"days",text:_vm.$t("Days")},{value:"months",text:_vm.$t("Months")},{value:"years",text:_vm.$t("Years")}]},model:{value:_vm.product.warranty_unit,callback:function callback($$v){_vm.$set(_vm.product,"warranty_unit",$$v);},expression:"product.warranty_unit"}})],1)],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.has_guarantee,callback:function callback($$v){_vm.$set(_vm.product,"has_guarantee",$$v);},expression:"product.has_guarantee"}},[_vm._v("\n                      "+_vm._s(_vm.$t("HasGuarantee"))+"\n                    ")])],1)],1),_vm._v(" "),_c("b-col",{staticClass:"mb-3",attrs:{md:"12"}},[_c("b-form-group",{attrs:{label:_vm.$t("WarrantyTerms")}},[_c("b-form-textarea",{attrs:{placeholder:_vm.$t("Enter_warranty_terms"),rows:"3"},model:{value:_vm.product.warranty_terms,callback:function callback($$v){_vm.$set(_vm.product,"warranty_terms",$$v);},expression:"product.warranty_terms"}})],1)],1),_vm._v(" "),_vm.product.has_guarantee?_c("b-col",{staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Guarantee_Period")}},[_c("b-input-group",[_c("b-form-input",{attrs:{placeholder:"0"},model:{value:_vm.product.guarantee_period,callback:function callback($$v){_vm.$set(_vm.product,"guarantee_period",$$v);},expression:"product.guarantee_period"}}),_vm._v(" "),_c("b-form-select",{attrs:{options:[{value:"days",text:_vm.$t("Days")},{value:"months",text:_vm.$t("Months")},{value:"years",text:_vm.$t("Years")}]},model:{value:_vm.product.guarantee_unit,callback:function callback($$v){_vm.$set(_vm.product,"guarantee_unit",$$v);},expression:"product.guarantee_unit"}})],1)],1)],1):_vm._e()],1)],1)],1),_vm._v(" "),_vm.product.type=="is_single"?_c("div",{staticClass:"form-section",attrs:{id:"section-opening-stock"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"shopping-bag"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("OpeningStock")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-row",_vm._l(_vm.warehouses,function(wh){return _c("b-col",{key:wh.id,staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:wh.name}},[_c("b-form-input",{attrs:{min:"0",placeholder:"0"},model:{value:_vm.product.warehouses[wh.id].qte,callback:function callback($$v){_vm.$set(_vm.product.warehouses[wh.id],"qte",_vm._n($$v));},expression:"product.warehouses[wh.id].qte"}})],1)],1);}),1)],1)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-location"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"map-pin"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Internal_Location_Rack_Shelf")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("p",{staticClass:"text-muted mb-3"},[_vm._v("\n                "+_vm._s(_vm.$t("Warehouse_Location_Optional_Hint"))+"\n              ")]),_vm._v(" "),_c("b-row",_vm._l(_vm.warehouses,function(wh){return _c("b-col",{key:wh.id,staticClass:"mb-3",attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:wh.name}},[_c("div",{staticClass:"d-flex align-items-center"},[_c("div",{staticClass:"flex-grow-1"},[_c("v-select",{attrs:{options:_vm.locationsByWarehouse[wh.id]||[],label:"label",reduce:function reduce(o){return o.id;},placeholder:_vm.$t("Choose")},model:{value:_vm.product.warehouses[wh.id].warehouse_location_id,callback:function callback($$v){_vm.$set(_vm.product.warehouses[wh.id],"warehouse_location_id",$$v);},expression:"product.warehouses[wh.id].warehouse_location_id"}})],1),_vm._v(" "),_c("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:true}}],staticClass:"ml-2",attrs:{variant:"outline-primary",size:"sm",title:_vm.$t("Add")+" "+_vm.$t("Warehouse_Location")},on:{click:function click($event){return _vm.openQuickWarehouseLocationModal(wh.id);}}},[_c("lucide-icon",{attrs:{name:"plus"}})],1)],1)])],1);}),1)],1)],1),_vm._v(" "),_c("div",{staticClass:"form-section",attrs:{id:"section-options"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"database-zap"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Options")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("div",{staticClass:"options-grid"},[_vm.show_serial_tracking?_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.is_imei,callback:function callback($$v){_vm.$set(_vm.product,"is_imei",$$v);},expression:"product.is_imei"}},[_vm._v("\n                    "+_vm._s(_vm.$t("Track_Serial_IMEI"))+"\n                  ")]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block"},[_vm._v(_vm._s(_vm.$t("Track_Serial_IMEI_Hint")))])],1):_vm._e(),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.not_selling,callback:function callback($$v){_vm.$set(_vm.product,"not_selling",$$v);},expression:"product.not_selling"}},[_vm._v("\n                    "+_vm._s(_vm.$t("This_Product_Not_For_Selling"))+"\n                  ")])],1),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.is_active,callback:function callback($$v){_vm.$set(_vm.product,"is_active",$$v);},expression:"product.is_active"}},[_vm._v("\n                "+_vm._s(_vm.$t("Active"))+"\n              ")])],1),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.is_featured,callback:function callback($$v){_vm.$set(_vm.product,"is_featured",$$v);},expression:"product.is_featured"}},[_vm._v("\n                    "+_vm._s(_vm.$t("Featured_Product"))+"\n                  ")])],1),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.hide_from_online_store,callback:function callback($$v){_vm.$set(_vm.product,"hide_from_online_store",$$v);},expression:"product.hide_from_online_store"}},[_vm._v("\n                    "+_vm._s(_vm.$t("Hide_From_Online_Store"))+"\n                  ")])],1),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.is_preorder,callback:function callback($$v){_vm.$set(_vm.product,"is_preorder",$$v);},expression:"product.is_preorder"}},[_vm._v("\n                    "+_vm._s(_vm.$t("Enable_Preorder"))+"\n                  ")])],1),_vm._v(" "),_vm.product.is_preorder?[_c("b-form-group",{attrs:{label:_vm.$t("Preorder_Available_Date")}},[_c("b-form-input",{attrs:{type:"date"},model:{value:_vm.product.preorder_available_date,callback:function callback($$v){_vm.$set(_vm.product,"preorder_available_date",$$v);},expression:"product.preorder_available_date"}})],1),_vm._v(" "),_c("b-form-group",{attrs:{label:_vm.$t("Preorder_Limit")}},[_c("b-form-input",{attrs:{type:"number",placeholder:_vm.$t("Preorder_Limit"),min:"0"},model:{value:_vm.product.preorder_limit,callback:function callback($$v){_vm.$set(_vm.product,"preorder_limit",$$v);},expression:"product.preorder_limit"}})],1),_vm._v(" "),_c("b-form-group",{attrs:{label:_vm.$t("Preorder_Note")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Preorder_Note")},model:{value:_vm.product.preorder_note,callback:function callback($$v){_vm.$set(_vm.product,"preorder_note",$$v);},expression:"product.preorder_note"}})],1)]:_vm._e()],2)])],1),_vm._v(" "),_vm.showPharmacySection?_c("div",{staticClass:"form-section",attrs:{id:"section-pharmacy"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"heart-pulse"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Pharmacy_Settings")||"Pharmacy"))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.is_batch_tracked,callback:function callback($$v){_vm.$set(_vm.product,"is_batch_tracked",$$v);},expression:"product.is_batch_tracked"}},[_vm._v("\n                  "+_vm._s(_vm.$t("Track_Batches_Expiry"))+"\n                ")]),_vm._v(" "),_c("small",{staticClass:"text-muted d-block"},[_vm._v(_vm._s(_vm.$t("Track_Batches_Expiry_Help")))])],1),_vm._v(" "),_vm.product.is_batch_tracked?[_c("b-form-group",{attrs:{label:_vm.$t("Shelf_Life_Days")}},[_c("b-form-input",{attrs:{type:"number",placeholder:_vm.$t("Shelf_Life_Days"),min:"0"},model:{value:_vm.product.shelf_life_days,callback:function callback($$v){_vm.$set(_vm.product,"shelf_life_days",$$v);},expression:"product.shelf_life_days"}})],1)]:_vm._e(),_vm._v(" "),_c("b-form-group",[_c("b-form-checkbox",{attrs:{"unchecked-value":false,"checked-value":true,"switch":""},model:{value:_vm.product.prescription_required,callback:function callback($$v){_vm.$set(_vm.product,"prescription_required",$$v);},expression:"product.prescription_required"}},[_vm._v("\n                  "+_vm._s(_vm.$t("Prescription_Required"))+"\n                ")])],1),_vm._v(" "),_c("b-row",[_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Generic_Name")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Generic_Name")},model:{value:_vm.product.generic_name,callback:function callback($$v){_vm.$set(_vm.product,"generic_name",$$v);},expression:"product.generic_name"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Strength")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Strength")},model:{value:_vm.product.strength,callback:function callback($$v){_vm.$set(_vm.product,"strength",$$v);},expression:"product.strength"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Dosage_Form")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Dosage_Form")},model:{value:_vm.product.dosage_form,callback:function callback($$v){_vm.$set(_vm.product,"dosage_form",$$v);},expression:"product.dosage_form"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Pack_Size")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Pack_Size")},model:{value:_vm.product.pack_size,callback:function callback($$v){_vm.$set(_vm.product,"pack_size",$$v);},expression:"product.pack_size"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Manufacturer")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Manufacturer")},model:{value:_vm.product.manufacturer,callback:function callback($$v){_vm.$set(_vm.product,"manufacturer",$$v);},expression:"product.manufacturer"}})],1)],1),_vm._v(" "),_c("b-col",{attrs:{md:"6"}},[_c("b-form-group",{attrs:{label:_vm.$t("Drug_Schedule")}},[_c("b-form-input",{attrs:{placeholder:_vm.$t("Drug_Schedule")},model:{value:_vm.product.drug_schedule,callback:function callback($$v){_vm.$set(_vm.product,"drug_schedule",$$v);},expression:"product.drug_schedule"}})],1)],1)],1)],2)],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-actions-spacer",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c("b-col",{staticClass:"product-create-aside d-none d-lg-block",attrs:{lg:"4"}},[_c("div",{staticClass:"sticky-sidebar"},[_c("nav",{staticClass:"side-card side-toc"},[_c("div",{staticClass:"side-card__title"},[_c("lucide-icon",{attrs:{name:"list"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("OnThisPage")||"On this page"))])],1),_vm._v(" "),_c("ul",{staticClass:"side-toc__list"},[_c("li",[_c("a",{attrs:{href:"#section-basic"}},[_c("lucide-icon",{attrs:{name:"file"}}),_c("span",[_vm._v(_vm._s(_vm.$t("BasicInformation")))])],1)]),_vm._v(" "),_vm.showJewelrySections?_c("li",[_c("a",{attrs:{href:"#section-jewelry-metal"}},[_c("lucide-icon",{attrs:{name:"tag"}}),_c("span",[_vm._v("Metal & Karat")])],1)]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("li",[_c("a",{attrs:{href:"#section-jewelry-weight"}},[_c("lucide-icon",{attrs:{name:"package"}}),_c("span",[_vm._v("Weight Information")])],1)]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("li",[_c("a",{attrs:{href:"#section-jewelry-stones"}},[_c("lucide-icon",{attrs:{name:"file"}}),_c("span",[_vm._v("Stones & Certificates")])],1)]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("li",[_c("a",{attrs:{href:"#section-jewelry-charges"}},[_c("lucide-icon",{attrs:{name:"database-zap"}}),_c("span",[_vm._v("Cost & Making Charges")])],1)]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("li",[_c("a",{attrs:{href:"#section-jewelry-preview"}},[_c("lucide-icon",{attrs:{name:"eye"}}),_c("span",[_vm._v("Pricing Preview")])],1)]):_vm._e(),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-gallery"}},[_c("lucide-icon",{attrs:{name:"upload"}}),_c("span",[_vm._v(_vm._s(_vm.$t("ProductImagesGallery")))])],1)]),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-inventory"}},[_c("lucide-icon",{attrs:{name:"package"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Inventory")))])],1)]),_vm._v(" "),_vm.product.type=="is_variant"?_c("li",[_c("a",{attrs:{href:"#section-variants"}},[_c("lucide-icon",{attrs:{name:"settings"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Variants")))])],1)]):_vm._e(),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-pricing"}},[_c("lucide-icon",{attrs:{name:"tag"}}),_c("span",[_vm._v(_vm._s(_vm.$t("PricingAndTax")))])],1)]),_vm._v(" "),_vm.product.type=="is_combo"?_c("li",[_c("a",{attrs:{href:"#section-combo"}},[_c("lucide-icon",{attrs:{name:"shopping-bag"}}),_c("span",[_vm._v(_vm._s(_vm.$t("ComboProducts")))])],1)]):_vm._e(),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-warranty"}},[_c("lucide-icon",{attrs:{name:"shield"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Warranty_Guarantee_Tracking")))])],1)]),_vm._v(" "),_vm.product.type=="is_single"?_c("li",[_c("a",{attrs:{href:"#section-opening-stock"}},[_c("lucide-icon",{attrs:{name:"shopping-bag"}}),_c("span",[_vm._v(_vm._s(_vm.$t("OpeningStock")))])],1)]):_vm._e(),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-location"}},[_c("lucide-icon",{attrs:{name:"map-pin"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Internal_Location_Rack_Shelf")))])],1)]),_vm._v(" "),_c("li",[_c("a",{attrs:{href:"#section-options"}},[_c("lucide-icon",{attrs:{name:"database-zap"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Options")))])],1)]),_vm._v(" "),_vm.showPharmacySection?_c("li",[_c("a",{attrs:{href:"#section-pharmacy"}},[_c("lucide-icon",{attrs:{name:"heart-pulse"}}),_c("span",[_vm._v(_vm._s(_vm.$t("Pharmacy_Settings")||"Pharmacy"))])],1)]):_vm._e()])]),_vm._v(" "),_c("div",{staticClass:"side-card side-summary"},[_c("div",{staticClass:"side-card__title"},[_c("lucide-icon",{attrs:{name:"eye"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("LiveSummary")||"Live summary"))])],1),_vm._v(" "),_c("div",{staticClass:"summary-pills"},[_c("span",{staticClass:"pill pill--type"},[_c("lucide-icon",{attrs:{name:"layers"}}),_vm._v("\n                  "+_vm._s(_vm.product.type==="is_variant"?_vm.$t("Variable")||"Variable":_vm.product.type==="is_service"?_vm.$t("Service")||"Service":_vm.product.type==="is_combo"?_vm.$t("Combo")||"Combo":_vm.$t("Standard")||"Standard")+"\n                ")],1),_vm._v(" "),_c("span",{staticClass:"pill","class":_vm.product.is_active?"pill--success":"pill--muted"},[_c("span",{staticClass:"pill-dot"}),_vm._v("\n                  "+_vm._s(_vm.product.is_active?_vm.$t("Active")||"Active":_vm.$t("Inactive")||"Inactive")+"\n                ")]),_vm._v(" "),_vm.product.is_featured?_c("span",{staticClass:"pill pill--accent"},[_c("lucide-icon",{attrs:{name:"star"}}),_vm._v(" "+_vm._s(_vm.$t("Featured_Product")||"Featured")+"\n                ")],1):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("span",{staticClass:"pill pill--accent"},[_c("lucide-icon",{attrs:{name:"tag"}}),_vm._v(" Jewelry\n                ")],1):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v(_vm._s(_vm.$t("Name")))]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.product.name||"—"))])]),_vm._v(" "),_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v(_vm._s(_vm.$t("Code")))]),_vm._v(" "),_c("span",{staticClass:"summary-row__value mono"},[_vm._v(_vm._s(_vm.product.code||"—"))])]),_vm._v(" "),_vm.product.type=="is_single"||_vm.product.type=="is_combo"?_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v(_vm._s(_vm.$t("Cost")))]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.product.cost||"0.00"))])]):_vm._e(),_vm._v(" "),_vm.product.type!="is_variant"?_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v(_vm._s(_vm.$t("Retail Price")))]),_vm._v(" "),_c("span",{staticClass:"summary-row__value summary-row__value--strong"},[_vm._v(_vm._s(_vm.currentUser.currency)+" "+_vm._s(_vm.product.price||"0.00"))])]):_vm._e(),_vm._v(" "),_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v(_vm._s(_vm.$t("OrderTax")))]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.product.TaxNet||0)+"%")])]),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v("Jewelry Type")]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.jewelryItemTypeLabel||"—"))])]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v("Metal / Karat")]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.selectedMetalName||"—")),_vm.selectedKaratName?_c("span",[_vm._v(" / "+_vm._s(_vm.selectedKaratName))]):_vm._e()])]):_vm._e(),_vm._v(" "),_vm.showJewelrySections?_c("div",{staticClass:"summary-row"},[_c("span",{staticClass:"summary-row__label"},[_vm._v("Metal Weight")]),_vm._v(" "),_c("span",{staticClass:"summary-row__value"},[_vm._v(_vm._s(_vm.product.jewelry_metal_weight||"0.000")+" "+_vm._s(_vm.product.jewelry_weight_uom||"g"))])]):_vm._e()]),_vm._v(" "),_c("div",{staticClass:"side-card side-help"},[_c("div",{staticClass:"side-card__title"},[_c("lucide-icon",{attrs:{name:"lightbulb"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("Tips")||"Tips"))])],1),_vm._v(" "),_c("p",{staticClass:"side-help__text"},[_vm._v("\n                "+_vm._s(_vm.$t("AddProductTipText")||"Use clear product names and unique codes. The first selected category is the primary one used in legacy reports.")+"\n              ")])])])])],1),_vm._v(" "),_vm.enable_multi_pack_selling&&_vm.product.type=="is_single"?_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_c("div",{staticClass:"form-section",attrs:{id:"section-packs"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"package"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Multi_Pack_Selling")||"Multi-Pack Selling"))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("p",{staticClass:"text-muted small mb-3"},[_vm._v("\n                "+_vm._s(_vm.$t("Multi_Pack_Help")||"Sell this product in multiple packs. The default pack (multiplier 1) sells in the base unit; each additional pack multiplies the base quantity for inventory.")+"\n              ")]),_vm._v(" "),_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-hover table-modern"},[_c("thead",[_c("tr",[_c("th",[_vm._v(_vm._s(_vm.$t("Pack_Name")||"Pack Name"))]),_vm._v(" "),_c("th",{staticStyle:{width:"150px"}},[_vm._v(_vm._s(_vm.$t("Quantity_Multiplier")||"Multiplier"))]),_vm._v(" "),_c("th",{staticStyle:{width:"170px"}},[_vm._v(_vm._s(_vm.$t("Selling_Price")||"Selling Price"))]),_vm._v(" "),_c("th",{staticClass:"text-center",staticStyle:{width:"90px"}},[_vm._v(_vm._s(_vm.$t("Active")))]),_vm._v(" "),_c("th",{staticClass:"text-center",staticStyle:{width:"50px"}})])]),_vm._v(" "),_c("tbody",_vm._l(_vm.packs,function(pack,index){return _c("tr",{key:"pack-"+index},[_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm",placeholder:_vm.$t("Pack_Name")||"Pack Name"},model:{value:pack.name,callback:function callback($$v){_vm.$set(pack,"name",$$v);},expression:"pack.name"}}),_vm._v(" "),pack.is_default?_c("span",{staticClass:"badge badge-primary mt-1"},[_vm._v(_vm._s(_vm.$t("Default")||"Default"))]):_vm._e()],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"number",min:"0",step:"any",size:"sm",disabled:pack.is_default},model:{value:pack.multiplier,callback:function callback($$v){_vm.$set(pack,"multiplier",_vm._n($$v));},expression:"pack.multiplier"}})],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"number",min:"0",step:"any",size:"sm"},model:{value:pack.price,callback:function callback($$v){_vm.$set(pack,"price",_vm._n($$v));},expression:"pack.price"}})],1),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("b-form-checkbox",{attrs:{disabled:pack.is_default,"switch":""},model:{value:pack.is_active,callback:function callback($$v){_vm.$set(pack,"is_active",$$v);},expression:"pack.is_active"}})],1),_vm._v(" "),_c("td",{staticClass:"text-center"},[!pack.is_default?_c("b-button",{attrs:{variant:"danger",size:"sm",title:_vm.$t("Delete")},on:{click:function click($event){return _vm.delete_pack(index);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1):_vm._e()],1)]);}),0)])]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary",size:"sm"},on:{click:function click($event){return _vm.add_pack();}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"plus"}}),_vm._v(_vm._s(_vm.$t("Add_Pack")||"Add Pack")+"\n              ")],1)],1)],1)])],1):_vm._e(),_vm._v(" "),_vm.product.type=="is_variant"?_c("b-row",[_c("b-col",{attrs:{cols:"12"}},[_c("div",{staticClass:"form-section",attrs:{id:"section-variants"}},[_c("div",{staticClass:"section-header"},[_c("lucide-icon",{staticClass:"section-icon",attrs:{name:"settings"}}),_vm._v(" "),_c("h4",{staticClass:"section-title"},[_vm._v(_vm._s(_vm.$t("Variants")))])],1),_vm._v(" "),_c("b-card",{staticClass:"section-card"},[_c("div",{staticClass:"variant-input-group mb-3"},[_c("b-form-group",[_c("b-input-group",[_c("b-form-input",{staticClass:"form-control-modern",attrs:{placeholder:_vm.$t("Enter_the_Variant")},model:{value:_vm.tag,callback:function callback($$v){_vm.tag=$$v;},expression:"tag"}}),_vm._v(" "),_c("b-input-group-append",[_c("b-button",{attrs:{variant:"primary"},on:{click:function click($event){return _vm.add_variant(_vm.tag);}}},[_c("lucide-icon",{staticClass:"me-2",attrs:{name:"plus"}}),_vm._v(_vm._s(_vm.$t("Add"))+"\n                      ")],1)],1)],1)],1)],1),_vm._v(" "),_vm.variants.length>0?_c("div",{staticClass:"table-responsive"},[_c("table",{staticClass:"table table-hover table-modern"},[_c("thead",[_c("tr",[_c("th",{staticClass:"text-center",staticStyle:{width:"70px"}},[_vm._v(_vm._s(_vm.$t("Image")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Code")))]),_vm._v(" "),_vm.show_product_gtin?_c("th",[_vm._v(_vm._s(_vm.$t("Barcode_GTIN")))]):_vm._e(),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Name")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Cost")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Retail Price")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Wholesale_Price")))]),_vm._v(" "),_c("th",[_vm._v(_vm._s(_vm.$t("Min_Selling_Price")))]),_vm._v(" "),_c("th",{staticClass:"text-center",staticStyle:{width:"50px"}})])]),_vm._v(" "),_c("tbody",_vm._l(_vm.variants,function(variant){return _c("tr",{key:variant.var_id},[_c("td",{staticClass:"text-center"},[_c("div",{staticClass:"variant-image-cell"},[_c("img",{staticClass:"variant-thumb",attrs:{src:variant.imagePreview||_vm.$imgUrl("products","no-image.png"),alt:"variant"}}),_vm._v(" "),_c("input",{staticClass:"variant-file-input",attrs:{type:"file",accept:"image/*",title:_vm.$t("Image")},on:{change:function change($event){return _vm.onVariantImage($event,variant);}}})])]),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.code,callback:function callback($$v){_vm.$set(variant,"code",$$v);},expression:"variant.code"}})],1),_vm._v(" "),_vm.show_product_gtin?_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.gtin,callback:function callback($$v){_vm.$set(variant,"gtin",$$v);},expression:"variant.gtin"}})],1):_vm._e(),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.text,callback:function callback($$v){_vm.$set(variant,"text",$$v);},expression:"variant.text"}})],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.cost,callback:function callback($$v){_vm.$set(variant,"cost",$$v);},expression:"variant.cost"}})],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.price,callback:function callback($$v){_vm.$set(variant,"price",$$v);},expression:"variant.price"}})],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.wholesale,callback:function callback($$v){_vm.$set(variant,"wholesale",$$v);},expression:"variant.wholesale"}})],1),_vm._v(" "),_c("td",[_c("b-form-input",{attrs:{type:"text",size:"sm"},model:{value:variant.min_price,callback:function callback($$v){_vm.$set(variant,"min_price",$$v);},expression:"variant.min_price"}})],1),_vm._v(" "),_c("td",{staticClass:"text-center"},[_c("b-button",{attrs:{variant:"danger",size:"sm",title:"Delete"},on:{click:function click($event){return _vm.delete_variant(variant.var_id);}}},[_c("lucide-icon",{attrs:{name:"x"}})],1)],1)]);}),0)])]):_c("div",{staticClass:"alert alert-info"},[_vm._v("\n                "+_vm._s(_vm.$t("NodataAvailable"))+"\n              ")])])],1)])],1):_vm._e(),_vm._v(" "),_c("div",{staticClass:"form-action-bar"},[_c("div",{staticClass:"form-action-bar__inner"},[_c("div",{staticClass:"form-action-bar__hint"},[_c("lucide-icon",{attrs:{name:"info"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.$t("UnsavedChangesHint")||"Review the form, then save your product."))])],1),_vm._v(" "),_c("div",{staticClass:"form-action-bar__buttons"},[_c("b-button",{attrs:{variant:"outline-secondary",type:"button"},on:{click:function click($event){return _vm.$router.back();}}},[_vm._v("\n              "+_vm._s(_vm.$t("Cancel")||"Cancel")+"\n            ")]),_vm._v(" "),_c("b-button",{attrs:{variant:"primary",type:"submit",disabled:_vm.SubmitProcessing}},[_c("lucide-icon",{attrs:{name:"check"}}),_vm._v(" "),_c("span",[_vm._v(_vm._s(_vm.SubmitProcessing?_vm.$t("Saving")||"Saving…":_vm.$t("Save_Product")||_vm.$t("submit")))])],1)],1)])])],1)],1):_vm._e()],1);};var staticRenderFns=[];render._withStripped=true;

/***/ },

/***/ "./resources/src/utils/priceFormat.js"
/*!********************************************!*\
  !*** ./resources/src/utils/priceFormat.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PRICE_FORMATS: () => (/* binding */ PRICE_FORMATS),
/* harmony export */   cachePriceDecimals: () => (/* binding */ cachePriceDecimals),
/* harmony export */   cachePriceFormat: () => (/* binding */ cachePriceFormat),
/* harmony export */   formatPriceDisplay: () => (/* binding */ formatPriceDisplay),
/* harmony export */   getPriceDecimals: () => (/* binding */ getPriceDecimals),
/* harmony export */   getPriceFormatSetting: () => (/* binding */ getPriceFormatSetting),
/* harmony export */   normalizePriceFormatKey: () => (/* binding */ normalizePriceFormatKey)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Price formatting helper for frontend display (e.g., POS)
// This helper is purely presentational and does NOT affect calculations or stored values.

// Internal map of supported formats:
// - 'comma_dot'   => 1,234.56 (thousand ',', decimal '.')
// - 'dot_comma'   => 1.234,56 (thousand '.', decimal ',')
// - 'space_comma' => 1 234,56 (thousand ' ', decimal ',')
var PRICE_FORMATS = {
  comma_dot: {
    thousands: ',',
    decimal: '.'
  },
  dot_comma: {
    thousands: '.',
    decimal: ','
  },
  space_comma: {
    thousands: ' ',
    decimal: ','
  }
};

// Normalize a stored value/label into one of our internal keys
function normalizePriceFormatKey(input) {
  if (!input) return null;
  var raw = String(input).trim();

  // Direct key
  if (PRICE_FORMATS[raw]) {
    return raw;
  }

  // Allow matching by exact label text (for safety if something stored the label)
  var labelMap = {
    "1,234.56 (thousand , decimal .)": "comma_dot",
    "1.234,56 (thousand . decimal ,)": "dot_comma",
    "1 234,56 (thousand space, decimal ,)": "space_comma"
  };
  if (labelMap[raw]) {
    return labelMap[raw];
  }
  return null;
}

// Format a numeric value according to the selected price format.
// - value: number or numeric-like
// - decimals: integer number of decimal places
// - formatKey: one of PRICE_FORMATS keys or label text; if falsy/unknown, falls back to legacy formatting
function formatPriceDisplay(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var formatKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var d = Number.isInteger(decimals) ? decimals : 0;
  var n = Number(value);
  var safe = Number.isFinite(n) ? n : 0;
  var key = normalizePriceFormatKey(formatKey);

  // Fallback: keep current/default behavior (en-US locale style)
  if (!key) {
    try {
      return safe.toLocaleString('en-US', {
        minimumFractionDigits: d,
        maximumFractionDigits: d
      });
    } catch (e) {
      var _fixed = safe.toFixed(d);
      var parts = _fixed.split('.');
      var _intPart = parts[0];
      var _fracPart = parts[1] || '';
      var withCommas = _intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return d > 0 ? "".concat(withCommas, ".").concat(_fracPart) : withCommas;
    }
  }
  var cfg = PRICE_FORMATS[key];
  var fixed = safe.toFixed(d);
  var _fixed$split = fixed.split('.'),
    _fixed$split2 = _slicedToArray(_fixed$split, 2),
    intPart = _fixed$split2[0],
    _fixed$split2$ = _fixed$split2[1],
    fracPart = _fixed$split2$ === void 0 ? '' : _fixed$split2$;

  // Thousands grouping
  var re = /\B(?=(\d{3})+(?!\d))/g;
  intPart = intPart.replace(re, cfg.thousands);
  if (d <= 0) {
    return intPart;
  }
  if (fracPart.length < d) {
    fracPart = fracPart.padEnd(d, '0');
  }
  return "".concat(intPart).concat(cfg.decimal).concat(fracPart);
}

// Get the selected price format from:
// - explicit settings object (preferred)
// - Vuex store getter (getPriceFormat) - from get_user_auth API
// This helper never throws; it returns null if no valid format is found.
function getPriceFormatSetting() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$settings = _ref.settings,
    settings = _ref$settings === void 0 ? null : _ref$settings,
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store;
  // 1) Explicit settings object (e.g., System Settings API payload)
  if (settings && settings.price_format) {
    var key = normalizePriceFormatKey(settings.price_format);
    if (key) {
      return key;
    }
  }

  // 2) Vuex store getter (from get_user_auth API)
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceFormat) {
    try {
      var priceFormat = store.getters.getPriceFormat;
      var _key = normalizePriceFormatKey(priceFormat);
      if (_key) {
        return _key;
      }
    } catch (e) {
      // ignore
    }
  }

  // No valid setting => use default behavior (caller should treat null as "legacy" formatting)
  return null;
}

// Resolve the configured monetary precision (2 or 3) from:
// - explicit settings object (System Settings API payload: enable_3_decimal_pricing)
// - Vuex store getter (getPriceDecimals) - from get_user_auth API
// - localStorage cache (set at login) as an offline-friendly fallback
// Always returns 2 or 3; defaults to 2.
function getPriceDecimals() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$settings = _ref2.settings,
    settings = _ref2$settings === void 0 ? null : _ref2$settings,
    _ref2$store = _ref2.store,
    store = _ref2$store === void 0 ? null : _ref2$store;
  // 1) Explicit settings object
  if (settings && typeof settings.enable_3_decimal_pricing !== 'undefined') {
    var enabled = settings.enable_3_decimal_pricing === true || settings.enable_3_decimal_pricing === 1 || settings.enable_3_decimal_pricing === '1';
    return enabled ? 3 : 2;
  }

  // 2) Vuex store getter
  if (store && _typeof(store.getters) === 'object' && store.getters.getPriceDecimals) {
    try {
      var n = parseInt(store.getters.getPriceDecimals, 10);
      if (n === 3) return 3;
      if (n === 2) return 2;
    } catch (e) {
      // ignore
    }
  }

  // 3) localStorage cache
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      var cached = parseInt(window.localStorage.getItem('app_price_decimals'), 10);
      if (cached === 3) return 3;
    } catch (e) {
      // ignore
    }
  }
  return 2;
}

// Cache the monetary precision (2 or 3) into localStorage for quick frontend access
function cachePriceDecimals(decimals) {
  var n = parseInt(decimals, 10) === 3 ? 3 : 2;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_decimals', String(n));
  } catch (e) {
    // ignore quota or storage errors
  }
}

// Cache a selected price format key into localStorage for quick frontend access
function cachePriceFormat(formatKey) {
  var key = normalizePriceFormatKey(formatKey);
  if (!key) return;
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem('app_price_format', key);
  } catch (e) {
    // ignore quota or storage errors
  }
}

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.pricing-preview-card[data-v-72967f59] {\r\n  border: 1px solid #e5e7eb;\r\n  border-radius: 14px;\r\n  background: #fff;\r\n  padding: 1rem;\n}\n.pricing-preview-card__header[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  margin-bottom: 1rem;\n}\n.pricing-preview-card__title[data-v-72967f59] {\r\n  font-size: 1rem;\r\n  font-weight: 700;\r\n  color: #0f172a;\n}\n.pricing-preview-card__subtitle[data-v-72967f59] {\r\n  font-size: 0.875rem;\r\n  line-height: 1.5;\n}\n.pricing-preview-card__alert[data-v-72967f59] {\r\n  border-radius: 12px;\n}\n.pricing-preview-grid[data-v-72967f59] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(0, 1fr));\r\n  gap: 0.75rem;\n}\n.pricing-preview-row[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 0.75rem 0.9rem;\r\n  border: 1px solid #eef2f7;\r\n  border-radius: 12px;\r\n  background: #f8fafc;\n}\n.pricing-preview-row--base[data-v-72967f59] {\r\n  grid-column: 1 / -1;\n}\n.pricing-preview-row__label[data-v-72967f59] {\r\n  color: #475569;\r\n  font-size: 0.9rem;\n}\n.pricing-preview-row__value[data-v-72967f59] {\r\n  color: #0f172a;\r\n  font-weight: 600;\r\n  text-align: right;\n}\n.pricing-preview-total[data-v-72967f59] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 1rem;\r\n  padding: 1rem 1.1rem;\r\n  border-radius: 14px;\r\n  background: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%);\r\n  border: 1px solid rgba(99, 102, 241, 0.15);\n}\n.pricing-preview-total__label[data-v-72967f59] {\r\n  color: #4338ca;\r\n  font-weight: 700;\n}\n.pricing-preview-total__value[data-v-72967f59] {\r\n  color: #312e81;\r\n  font-size: 1.1rem;\r\n  font-weight: 800;\n}\nbody.dark-theme .pricing-preview-card[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card[data-v-72967f59] {\r\n  border-color: rgba(214, 177, 122, 0.16);\r\n  background:\r\n    radial-gradient(circle at top right, rgba(214, 177, 122, 0.08), transparent 38%),\r\n    linear-gradient(180deg, rgba(27, 23, 19, 0.96) 0%, rgba(18, 15, 13, 0.98) 100%);\r\n  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.22);\n}\nbody.dark-theme .pricing-preview-card__title[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__title[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\nbody.dark-theme .pricing-preview-card__subtitle[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__subtitle[data-v-72967f59] {\r\n  color: #bcae9a !important;\n}\nbody.dark-theme .pricing-preview-card .badge-light[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card .badge-light[data-v-72967f59] {\r\n  background: rgba(214, 177, 122, 0.14) !important;\r\n  color: #f0d5a4 !important;\r\n  border: 1px solid rgba(214, 177, 122, 0.18);\n}\nbody.dark-theme .pricing-preview-card .badge-warning[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card .badge-warning[data-v-72967f59] {\r\n  background: rgba(245, 158, 11, 0.16) !important;\r\n  color: #f7d18d !important;\r\n  border: 1px solid rgba(245, 158, 11, 0.18);\n}\nbody.dark-theme .pricing-preview-card__alert[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert[data-v-72967f59] {\r\n  border-color: rgba(214, 177, 122, 0.14);\n}\nbody.dark-theme .pricing-preview-card__alert.alert-light[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-light[data-v-72967f59] {\r\n  background: rgba(34, 28, 24, 0.92) !important;\r\n  color: #e8dfd0 !important;\n}\nbody.dark-theme .pricing-preview-card__alert.alert-warning[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-warning[data-v-72967f59] {\r\n  background: rgba(82, 56, 25, 0.35) !important;\r\n  color: #f4deaf !important;\r\n  border-color: rgba(214, 177, 122, 0.22) !important;\n}\nbody.dark-theme .pricing-preview-card__alert.alert-danger[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-card__alert.alert-danger[data-v-72967f59] {\r\n  background: rgba(98, 41, 35, 0.34) !important;\r\n  color: #f2c0b8 !important;\r\n  border-color: rgba(209, 123, 112, 0.22) !important;\n}\nbody.dark-theme .pricing-preview-row[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row[data-v-72967f59] {\r\n  background: rgba(36, 30, 24, 0.88);\r\n  border-color: rgba(214, 177, 122, 0.12);\n}\nbody.dark-theme .pricing-preview-row__label[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__label[data-v-72967f59] {\r\n  color: #cdbfa9;\n}\nbody.dark-theme .pricing-preview-row__method[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__method[data-v-72967f59] {\r\n  color: #a8957b;\n}\nbody.dark-theme .pricing-preview-row__value[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row__value[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\nbody.dark-theme .pricing-preview-row--base[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-row--base[data-v-72967f59] {\r\n  background: rgba(43, 35, 28, 0.94);\n}\nbody.dark-theme .pricing-preview-total[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total[data-v-72967f59] {\r\n  background: linear-gradient(135deg, rgba(214, 177, 122, 0.16) 0%, rgba(69, 51, 31, 0.68) 100%);\r\n  border-color: rgba(214, 177, 122, 0.2);\n}\nbody.dark-theme .pricing-preview-total__label[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total__label[data-v-72967f59] {\r\n  color: #f0d5a4;\n}\nbody.dark-theme .pricing-preview-total__value[data-v-72967f59],\r\nbody.theme-luxury.dark-theme .pricing-preview-total__value[data-v-72967f59] {\r\n  color: #fbf5ea;\n}\n@media (max-width: 767.98px) {\n.pricing-preview-card__header[data-v-72967f59],\r\n  .pricing-preview-row[data-v-72967f59],\r\n  .pricing-preview-total[data-v-72967f59] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\n}\n.pricing-preview-grid[data-v-72967f59] {\r\n    grid-template-columns: 1fr;\n}\n.pricing-preview-row__value[data-v-72967f59],\r\n  .pricing-preview-total__value[data-v-72967f59] {\r\n    text-align: left;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n/* ===========================================================\n   Modern Add Product page\n   ----------------------------------------------------------- */\n.product-create-page {\n  --pc-primary: #6366f1;\n  --pc-primary-strong: #4f46e5;\n  --pc-primary-soft: #eef2ff;\n  --pc-accent: #8b5cf6;\n  --pc-success: #10b981;\n  --pc-warn: #f59e0b;\n  --pc-danger: #ef4444;\n  --pc-text: #0f172a;\n  --pc-text-soft: #475569;\n  --pc-text-muted: #64748b;\n  --pc-border: #e5e7eb;\n  --pc-border-soft: #eef0f4;\n  --pc-bg: #f8fafc;\n  --pc-bg-soft: #fafbff;\n  --pc-card: #ffffff;\n  --pc-radius: 14px;\n  --pc-radius-lg: 18px;\n  --pc-shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);\n  --pc-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 6px 20px rgba(15, 23, 42, 0.04);\n  --pc-shadow-lg: 0 10px 30px rgba(15, 23, 42, 0.08);\n}\n\n/* ===== Page hero ===== */\n.product-create-page .page-hero {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  padding: 1.5rem 1.75rem;\n  margin-bottom: 1.75rem;\n  border-radius: var(--pc-radius-lg);\n  background:\n    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.10), transparent 55%),\n    radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.12), transparent 55%),\n    linear-gradient(135deg, #ffffff 0%, #f8faff 100%);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n  box-shadow: var(--pc-shadow);\n  overflow: hidden;\n}\n.product-create-page .page-hero::after {\n  content: \"\";\n  position: absolute;\n  inset: auto -40px -60px auto;\n  width: 240px;\n  height: 240px;\n  background: radial-gradient(circle, rgba(99, 102, 241, 0.18), transparent 70%);\n  pointer-events: none;\n}\n.product-create-page .page-hero__main {\n  flex: 1 1 320px;\n  min-width: 0;\n  position: relative;\n  z-index: 1;\n}\n.product-create-page .page-hero__eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--pc-primary-strong);\n  background: var(--pc-primary-soft);\n  padding: 0.32rem 0.7rem;\n  border-radius: 999px;\n  margin-bottom: 0.65rem;\n}\n.product-create-page .page-hero__eyebrow svg {\n  width: 14px;\n  height: 14px;\n}\n.product-create-page .page-hero__title {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--pc-text);\n  line-height: 1.15;\n}\n.product-create-page .page-hero__subtitle {\n  margin: 0;\n  font-size: 0.95rem;\n  color: var(--pc-text-soft);\n  max-width: 56ch;\n  line-height: 1.5;\n}\n.product-create-page .page-hero__actions {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.6rem;\n  position: relative;\n  z-index: 1;\n}\n.product-create-page .hero-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.6rem 1.05rem;\n  border-radius: 10px;\n  font-weight: 600;\n  letter-spacing: -0.005em;\n}\n.product-create-page .hero-btn--primary {\n  background: linear-gradient(135deg, var(--pc-primary) 0%, var(--pc-primary-strong) 100%);\n  border-color: transparent;\n  box-shadow: 0 6px 18px rgba(99, 102, 241, 0.28);\n}\n.product-create-page .hero-btn--primary:hover,\n.product-create-page .hero-btn--primary:focus {\n  background: linear-gradient(135deg, var(--pc-primary-strong) 0%, #4338ca 100%);\n  box-shadow: 0 8px 22px rgba(99, 102, 241, 0.36);\n}\n.product-create-page .hero-btn svg {\n  width: 16px;\n  height: 16px;\n}\n\n/* ===== Two-column layout ===== */\n.product-create-page .product-create-grid {\n  align-items: flex-start;\n}\n.product-create-page .product-create-aside {\n  align-self: stretch;\n}\n\n/* ===== Sticky sidebar / TOC ===== */\n.product-create-page .sticky-sidebar {\n  position: sticky;\n  top: 88px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.product-create-page .side-card {\n  background: var(--pc-card);\n  border: 1px solid var(--pc-border-soft);\n  border-radius: var(--pc-radius);\n  padding: 1.1rem 1.15rem;\n  box-shadow: var(--pc-shadow-sm);\n}\n.product-create-page .side-card__title {\n  display: flex;\n  align-items: center;\n  gap: 0.55rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--pc-text-muted);\n  margin-bottom: 0.85rem;\n  padding-bottom: 0.7rem;\n  border-bottom: 1px dashed var(--pc-border);\n}\n.product-create-page .side-card__title svg {\n  width: 15px;\n  height: 15px;\n  color: var(--pc-primary);\n}\n\n/* TOC list */\n.product-create-page .side-toc__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.product-create-page .side-toc__list a {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.5rem 0.65rem;\n  border-radius: 9px;\n  font-size: 0.875rem;\n  color: var(--pc-text-soft);\n  text-decoration: none;\n  transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;\n}\n.product-create-page .side-toc__list a svg {\n  width: 15px;\n  height: 15px;\n  color: var(--pc-text-muted);\n  flex-shrink: 0;\n}\n.product-create-page .side-toc__list a:hover {\n  background: var(--pc-primary-soft);\n  color: var(--pc-primary-strong);\n  transform: translateX(2px);\n}\n.product-create-page .side-toc__list a:hover svg {\n  color: var(--pc-primary);\n}\n\n/* Summary card */\n.product-create-page .summary-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  margin-bottom: 0.9rem;\n}\n.product-create-page .pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.28rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  background: #f1f5f9;\n  color: var(--pc-text-soft);\n  border: 1px solid var(--pc-border);\n}\n.product-create-page .pill svg {\n  width: 12px;\n  height: 12px;\n}\n.product-create-page .pill--type {\n  background: var(--pc-primary-soft);\n  color: var(--pc-primary-strong);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n.product-create-page .pill--success {\n  background: #ecfdf5;\n  color: #047857;\n  border-color: #a7f3d0;\n}\n.product-create-page .pill--success .pill-dot {\n  background: var(--pc-success);\n  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.18);\n}\n.product-create-page .pill--muted .pill-dot {\n  background: #94a3b8;\n}\n.product-create-page .pill-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.product-create-page .pill--accent {\n  background: linear-gradient(135deg, #fef3c7, #fde68a);\n  color: #92400e;\n  border-color: #fcd34d;\n}\n.product-create-page .summary-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  padding: 0.6rem 0;\n  border-bottom: 1px dashed var(--pc-border-soft);\n}\n.product-create-page .summary-row:last-child {\n  border-bottom: none;\n}\n.product-create-page .summary-row__label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--pc-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  flex-shrink: 0;\n}\n.product-create-page .summary-row__value {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--pc-text);\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 60%;\n}\n.product-create-page .summary-row__value.mono {\n  font-family: ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace;\n  font-size: 0.82rem;\n  color: var(--pc-text-soft);\n  background: #f1f5f9;\n  padding: 0.18rem 0.5rem;\n  border-radius: 6px;\n}\n.product-create-page .summary-row__value--strong {\n  color: var(--pc-primary-strong);\n  font-weight: 700;\n}\n\n/* Help card */\n.product-create-page .side-help__text {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--pc-text-soft);\n  line-height: 1.55;\n}\n\n/* ===== Floating action bar ===== */\n.product-create-page .form-actions-spacer {\n  height: 82px;\n}\n.product-create-page .form-action-bar {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 30;\n  margin: 0 -1px 0;\n  padding: 0.85rem 0 1rem;\n  background: linear-gradient(180deg, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.85) 35%, #f8fafc 70%);\n  pointer-events: none;\n}\n.product-create-page .form-action-bar__inner {\n  pointer-events: auto;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--pc-card);\n  border: 1px solid var(--pc-border);\n  border-radius: var(--pc-radius);\n  box-shadow: var(--pc-shadow-lg);\n}\n.product-create-page .form-action-bar__hint {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--pc-text-muted);\n  font-size: 0.85rem;\n  min-width: 0;\n}\n.product-create-page .form-action-bar__hint svg {\n  width: 16px;\n  height: 16px;\n  color: var(--pc-primary);\n  flex-shrink: 0;\n}\n.product-create-page .form-action-bar__hint span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.product-create-page .form-action-bar__buttons {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.55rem;\n  flex-shrink: 0;\n}\n.product-create-page .form-action-bar__buttons .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1.1rem;\n  border-radius: 10px;\n  font-weight: 600;\n}\n.product-create-page .form-action-bar__buttons .btn-primary {\n  background: linear-gradient(135deg, var(--pc-primary) 0%, var(--pc-primary-strong) 100%);\n  border-color: transparent;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.28);\n}\n.product-create-page .form-action-bar__buttons .btn-primary:hover,\n.product-create-page .form-action-bar__buttons .btn-primary:focus {\n  background: linear-gradient(135deg, var(--pc-primary-strong) 0%, #4338ca 100%);\n}\n.product-create-page .form-action-bar__buttons .btn-primary svg {\n  width: 15px;\n  height: 15px;\n}\n\n/* ===== Smooth scroll anchors ===== */\n.product-create-page .form-section[id] {\n  scroll-margin-top: 96px;\n}\n\n/* ===== Existing element refinements ===== */\n.scan-icon {\n  width: auto;\n  height: 18px;\n  margin: 0;\n  cursor: pointer;\n  display: block;\n}\n.gallery-thumb-select {\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.gallery-thumb-main {\n  border-color: #667eea !important;\n  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.35);\n}\n.product-gallery-section-card .card-body {\n  padding: 1.35rem 1.5rem;\n}\n.product-gallery-intro {\n  line-height: 1.55;\n  max-width: 52rem;\n}\n.product-gallery-dropzone {\n  position: relative;\n  display: block;\n  margin-bottom: 0;\n  cursor: pointer;\n  border-radius: 10px;\n  border: 2px dashed #dde1ea;\n  background: linear-gradient(180deg, #fafbff 0%, #f4f6fb 100%);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n}\n.product-gallery-dropzone:hover {\n  border-color: #667eea;\n  background: #f5f7ff;\n  box-shadow: 0 2px 12px rgba(102, 126, 234, 0.12);\n}\n.product-gallery-dropzone-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 1.35rem 1rem;\n  text-align: center;\n}\n.product-gallery-dropzone-icon {\n  font-size: 1.85rem;\n  color: #667eea;\n  margin-bottom: 0.5rem;\n  opacity: 0.95;\n}\n.product-gallery-dropzone-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #1a1a1a;\n  letter-spacing: -0.02em;\n}\n.product-gallery-dropzone-sub {\n  margin-top: 0.35rem;\n  max-width: 22rem;\n  line-height: 1.4;\n}\n.product-gallery-file-native {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n.product-gallery-empty {\n  background: #f9fafc;\n  border: 1px solid #eef0f4;\n}\n.product-gallery-draggable {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n.gallery-item-card {\n  position: relative;\n  padding: 0.75rem 1rem 0.75rem 12px;\n  gap: 0.65rem;\n  background: linear-gradient(145deg, #ffffff 0%, #fafbfd 100%);\n  border: 1px solid rgba(232, 234, 239, 0.95);\n  border-radius: 14px;\n  box-shadow:\n    0 1px 2px rgba(15, 23, 42, 0.04),\n    0 4px 12px rgba(15, 23, 42, 0.035);\n  transition:\n    transform 0.22s ease,\n    box-shadow 0.22s ease,\n    border-color 0.22s ease,\n    background 0.22s ease;\n  overflow: hidden;\n}\n.gallery-item-card::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 4px;\n  border-radius: 14px 0 0 14px;\n  background: linear-gradient(180deg, #e2e6ef 0%, #d4d9e4 100%);\n  opacity: 0.85;\n  transition: opacity 0.22s ease, background 0.22s ease;\n}\n.gallery-item-card--main {\n  background: linear-gradient(145deg, #f8f9ff 0%, #f0f3ff 55%, #fafbff 100%);\n  border-color: rgba(102, 126, 234, 0.35);\n  box-shadow:\n    0 1px 2px rgba(102, 126, 234, 0.08),\n    0 6px 20px rgba(102, 126, 234, 0.12);\n}\n.gallery-item-card--main::before {\n  background: linear-gradient(180deg, #7c8ef0 0%, #667eea 50%, #5a6fd6 100%);\n  opacity: 1;\n  box-shadow: 0 0 12px rgba(102, 126, 234, 0.35);\n}\n.gallery-item-card:hover {\n  border-color: rgba(200, 206, 220, 0.95);\n  box-shadow:\n    0 2px 6px rgba(15, 23, 42, 0.06),\n    0 10px 28px rgba(15, 23, 42, 0.07);\n  transform: translateY(-1px);\n}\n.gallery-item-card--main:hover {\n  border-color: rgba(102, 126, 234, 0.45);\n  box-shadow:\n    0 2px 8px rgba(102, 126, 234, 0.12),\n    0 12px 32px rgba(102, 126, 234, 0.16);\n}\n.gallery-drag-handle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  min-height: 3.25rem;\n  margin-right: 0.15rem;\n  margin-left: 0;\n  color: #9aa3b5;\n  cursor: grab;\n  border-radius: 10px;\n  background: rgba(241, 243, 247, 0.9);\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.gallery-drag-handle:active {\n  cursor: grabbing;\n  color: #667eea;\n  background: rgba(102, 126, 234, 0.12);\n}\n.gallery-item-card:hover .gallery-drag-handle {\n  color: #7a8499;\n  background: rgba(235, 238, 245, 0.95);\n}\n.gallery-item-thumb {\n  width: 80px;\n  height: 80px;\n  padding: 7px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 12px;\n  background: linear-gradient(180deg, rgba(255, 250, 244, 0.98) 0%, rgba(245, 235, 220, 0.92) 100%);\n  box-shadow:\n    0 2px 8px rgba(15, 23, 42, 0.08),\n    inset 0 1px 0 rgba(255, 255, 255, 0.6);\n}\n.gallery-item-card .gallery-thumb-select {\n  border-radius: 12px;\n  background: linear-gradient(180deg, rgba(255, 251, 245, 0.96) 0%, rgba(244, 233, 214, 0.9) 100%);\n  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.07);\n}\n.gallery-item-meta {\n  min-width: 0;\n}\n.gallery-item-meta .text-truncate {\n  color: #1e293b;\n  letter-spacing: -0.01em;\n  font-size: 0.875rem;\n}\n.gallery-main-badge {\n  font-weight: 600;\n  font-size: 0.65rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  padding: 0.28em 0.55em;\n  border-radius: 6px;\n  box-shadow: 0 1px 3px rgba(34, 197, 94, 0.25);\n}\n.gallery-remove-btn {\n  border-radius: 10px;\n  width: 2.25rem;\n  height: 2.25rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-width: 1.5px;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.gallery-remove-btn:hover {\n  transform: scale(1.05);\n  box-shadow: 0 2px 8px rgba(220, 53, 69, 0.2);\n}\n\n/* ===== Form Sections ===== */\n.product-create-page .form-section {\n  margin-bottom: 1.75rem;\n}\n.product-create-page .section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n  padding: 0;\n  border-bottom: none;\n}\n.product-create-page .section-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  color: var(--pc-primary);\n  background: var(--pc-primary-soft);\n  border-radius: 10px;\n  margin-right: 0;\n  font-size: 1rem;\n}\n.product-create-page .section-icon svg {\n  width: 18px;\n  height: 18px;\n}\n.product-create-page .section-title {\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--pc-text);\n  letter-spacing: -0.01em;\n}\n.product-create-page .section-card {\n  position: relative;\n  border: 1px solid var(--pc-border-soft);\n  border-radius: var(--pc-radius);\n  box-shadow: var(--pc-shadow-sm);\n  background: var(--pc-card);\n  transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;\n  overflow: hidden;\n}\n.product-create-page .section-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 3px;\n  background: linear-gradient(90deg, var(--pc-primary), var(--pc-accent));\n  opacity: 0;\n  transition: opacity 0.25s ease;\n}\n.product-create-page .section-card:hover {\n  box-shadow: var(--pc-shadow);\n  border-color: rgba(99, 102, 241, 0.18);\n}\n.product-create-page .section-card:hover::before,\n.product-create-page .section-card:focus-within::before {\n  opacity: 1;\n}\n.product-create-page .section-card .card-body {\n  padding: 1.4rem 1.5rem;\n}\n\n/* ===== Form Controls ===== */\n.product-create-page .form-control,\n.product-create-page .custom-select,\n.product-create-page textarea.form-control {\n  border-radius: 9px;\n  border: 1.5px solid var(--pc-border);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;\n}\n.product-create-page .form-control:focus,\n.product-create-page .custom-select:focus,\n.product-create-page textarea.form-control:focus {\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n.product-create-page .form-control-modern {\n  border-radius: 9px;\n  border: 1.5px solid var(--pc-border);\n  padding: 0.55rem 0.85rem;\n  font-size: 0.92rem;\n  transition: all 0.2s ease;\n}\n.product-create-page .form-control-modern:focus {\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n.product-create-page .form-group label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--pc-text-soft);\n  margin-bottom: 0.35rem;\n  letter-spacing: 0.005em;\n}\n\n/* Inline help-icon next to a field label */\n.product-create-page .label-with-help {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.product-create-page .label-help-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  color: var(--pc-text-muted);\n  background: #f1f5f9;\n  border: 1px solid var(--pc-border);\n  cursor: help;\n  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease, transform 0.15s ease;\n}\n.product-create-page .label-help-icon svg {\n  width: 11px;\n  height: 11px;\n}\n.product-create-page .label-help-icon:hover,\n.product-create-page .label-help-icon:focus {\n  color: var(--pc-primary-strong);\n  background: var(--pc-primary-soft);\n  border-color: rgba(99, 102, 241, 0.35);\n  outline: none;\n  transform: translateY(-1px);\n}\n\n/* v-select polish */\n.product-create-page .v-select .vs__dropdown-toggle {\n  border-radius: 9px;\n  border: 1.5px solid var(--pc-border);\n  padding: 1px 4px 3px;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.product-create-page .v-select.vs--open .vs__dropdown-toggle,\n.product-create-page .v-select:focus-within .vs__dropdown-toggle {\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n.form-control-file {\n  display: block;\n  padding: 0.5rem 0;\n  border-radius: 8px;\n  cursor: pointer;\n}\n.image-upload-wrapper {\n  background: #fafafa;\n  padding: 1rem;\n  border-radius: 8px;\n  border: 2px dashed #d0d0d0;\n  transition: all 0.2s ease;\n}\n.image-upload-wrapper:hover {\n  border-color: #667eea;\n  background: #f5f7ff;\n}\n\n/* ===== Input Groups ===== */\n/* Match the v-select height (calc(1.5em + 0.75rem + 3px)) so the\n   Code Product field aligns with the Categories / Brand v-selects beside it. */\n.modern-input-group {\n  display: flex;\n  align-items: stretch;\n  border-radius: 9px;\n  overflow: hidden;\n  border: 1.5px solid var(--pc-border);\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n  min-height: calc(1.5em + 0.75rem + 3px);\n}\n.modern-input-group:focus-within {\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n.modern-input-group .input-group-prepend,\n.modern-input-group .input-group-append {\n  display: flex;\n  align-items: stretch;\n}\n.modern-input-group .form-control {\n  border: none !important;\n  box-shadow: none !important;\n  height: auto;\n  align-self: stretch;\n}\n.modern-input-group .btn-icon-scan,\n.modern-input-group .btn-icon-gen {\n  background: #f5f7ff;\n  border: none;\n  padding: 0 0.75rem;\n  color: var(--pc-primary);\n  cursor: pointer;\n  transition: all 0.2s ease;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  align-self: stretch;\n  min-width: 38px;\n  line-height: 1;\n}\n.modern-input-group .btn-icon-scan:hover,\n.modern-input-group .btn-icon-gen:hover {\n  background: var(--pc-primary);\n  color: white;\n}\n.modern-input-group .btn-icon-scan svg,\n.modern-input-group .btn-icon-gen svg {\n  width: 18px;\n  height: 18px;\n}\n\n/* ===== Tables ===== */\n.product-create-page .table-modern {\n  margin-bottom: 0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.product-create-page .table-modern thead {\n  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);\n  border-bottom: 1px solid var(--pc-border);\n}\n.product-create-page .table-modern thead th {\n  font-weight: 600;\n  color: var(--pc-text-soft);\n  padding: 0.85rem 0.875rem;\n  text-transform: uppercase;\n  font-size: 0.72rem;\n  letter-spacing: 0.06em;\n  border: none;\n}\n.product-create-page .table-modern tbody tr {\n  border-bottom: 1px solid var(--pc-border-soft);\n  transition: background-color 0.18s ease;\n}\n.product-create-page .table-modern tbody tr:hover {\n  background-color: var(--pc-bg-soft);\n}\n.product-create-page .table-modern tbody tr:last-child {\n  border-bottom: none;\n}\n.product-create-page .table-modern td {\n  padding: 0.85rem 0.875rem;\n  vertical-align: middle;\n  color: var(--pc-text);\n}\n\n/* ===== Variant image cell ===== */\n.variant-image-cell {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  margin: 0 auto;\n  border-radius: 8px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n  cursor: pointer;\n}\n.variant-image-cell .variant-thumb {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n}\n.variant-image-cell .variant-file-input {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n}\n\n/* ===== Variant Input ===== */\n.product-create-page .variant-input-group {\n  background: linear-gradient(135deg, #f5f7ff 0%, #eef2ff 100%);\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid rgba(99, 102, 241, 0.15);\n}\n\n/* ===== Combo Section ===== */\n.product-create-page .combo-search {\n  background: var(--pc-bg-soft);\n  padding: 1rem;\n  border-radius: 12px;\n  border: 1px solid var(--pc-border-soft);\n}\n.autocomplete {\n  position: relative;\n}\n.product-create-page .autocomplete-input {\n  width: 100%;\n  padding: 0.55rem 1rem;\n  border-radius: 9px;\n  border: 1.5px solid var(--pc-border);\n  font-size: 0.92rem;\n  transition: border-color 0.18s ease, box-shadow 0.18s ease;\n}\n.product-create-page .autocomplete-input:focus {\n  outline: none;\n  border-color: var(--pc-primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n.autocomplete-result-list {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 250px;\n  overflow-y: auto;\n  z-index: 10;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.autocomplete-result {\n  padding: 0.75rem 3rem;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n.autocomplete-result:hover {\n  background-color: #f5f7ff;\n  color: #667eea;\n}\n.badge-wrapper {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.product-create-page .badge-primary-light {\n  background-color: var(--pc-primary-soft);\n  color: var(--pc-primary-strong);\n  padding: 0.32rem 0.7rem;\n  border-radius: 999px;\n  font-weight: 600;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.78rem;\n}\n.product-create-page .combo-total {\n  background: linear-gradient(135deg, #f5f7ff 0%, #eef2ff 100%);\n  padding: 1rem 1.25rem;\n  border-radius: 12px;\n  border: 1px solid rgba(99, 102, 241, 0.15);\n  border-left: 4px solid var(--pc-primary);\n}\n.product-create-page .total-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-create-page .total-label {\n  font-weight: 600;\n  color: var(--pc-text-soft);\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.product-create-page .total-value {\n  font-size: 1.4rem;\n  font-weight: 700;\n  color: var(--pc-primary-strong);\n  letter-spacing: -0.02em;\n}\n\n/* ===== Options Grid ===== */\n.product-create-page .options-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 0.85rem 1.25rem;\n}\n.product-create-page .options-grid .form-group {\n  background: var(--pc-bg-soft);\n  border: 1px solid var(--pc-border-soft);\n  border-radius: 10px;\n  padding: 0.7rem 0.85rem;\n  margin-bottom: 0;\n  transition: border-color 0.18s ease, background 0.18s ease;\n}\n.product-create-page .options-grid .form-group:hover {\n  border-color: rgba(99, 102, 241, 0.3);\n  background: #f5f7ff;\n}\n.product-create-page .options-grid .custom-control-label {\n  font-weight: 500;\n  color: var(--pc-text);\n  font-size: 0.88rem;\n}\n\n/* ===== Form Actions ===== */\n.product-create-page .form-actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.product-create-page .spinner-inline {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n/* ===== Generic input-group border / radius fix =====\n   The 1.5px border + 9px radius I put on .form-control/.custom-select\n   above doesn't match Bootstrap's default 1px / 0.25rem on\n   .input-group-text and .btn inside append/prepend, which produces a\n   mismatched seam where they meet. Unify border thickness, color and\n   corner-rounding here. */\n.product-create-page .input-group {\n  border-radius: 9px;\n}\n.product-create-page .input-group > .form-control,\n.product-create-page .input-group > .custom-select,\n.product-create-page .input-group > .input-group-prepend > .input-group-text,\n.product-create-page .input-group > .input-group-append > .input-group-text,\n.product-create-page .input-group > .input-group-prepend > .btn,\n.product-create-page .input-group > .input-group-append > .btn {\n  border: 1.5px solid var(--pc-border);\n}\n\n/* Inner edges flat – outer edges keep the 9px radius. The\n   :not(.modern-input-group) guard avoids fighting the prepend+append\n   barcode group which has its own wrapper border. */\n.product-create-page .input-group:not(.modern-input-group) > .form-control:not(:first-child),\n.product-create-page .input-group:not(.modern-input-group) > .custom-select:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.product-create-page .input-group:not(.modern-input-group) > .form-control:not(:last-child),\n.product-create-page .input-group:not(.modern-input-group) > .custom-select:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.product-create-page .input-group:not(.modern-input-group) > .input-group-prepend > .input-group-text,\n.product-create-page .input-group:not(.modern-input-group) > .input-group-prepend > .btn {\n  border-top-left-radius: 9px;\n  border-bottom-left-radius: 9px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n.product-create-page .input-group:not(.modern-input-group) > .input-group-append > .input-group-text,\n.product-create-page .input-group:not(.modern-input-group) > .input-group-append > .btn {\n  border-top-right-radius: 9px;\n  border-bottom-right-radius: 9px;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n\n/* Append/prepend appearance */\n.product-create-page .input-group > .input-group-append > .input-group-text,\n.product-create-page .input-group > .input-group-prepend > .input-group-text {\n  background: #f8fafc;\n  color: var(--pc-text-soft);\n  font-weight: 600;\n}\n\n/* Unified focus ring across the whole group */\n.product-create-page .input-group:focus-within > .form-control,\n.product-create-page .input-group:focus-within > .custom-select,\n.product-create-page .input-group:focus-within > .input-group-prepend > .input-group-text,\n.product-create-page .input-group:focus-within > .input-group-append > .input-group-text,\n.product-create-page .input-group:focus-within > .input-group-prepend > .btn,\n.product-create-page .input-group:focus-within > .input-group-append > .btn {\n  border-color: var(--pc-primary);\n}\n.product-create-page .input-group:focus-within {\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14);\n}\n\n/* The form-control inside an input-group already shares the group focus\n   ring – kill its individual one to avoid a doubled glow on the inner\n   side of the seam. */\n.product-create-page .input-group > .form-control:focus,\n.product-create-page .input-group > .custom-select:focus {\n  box-shadow: none;\n}\n\n/* ===== v-select in input-group =====\n   A global rule (specificity 0,4,0) sets\n     .input-group:not(.input-group-sm):not(.input-group-lg) .btn { height: 42px }\n   which makes the quick-add buttons 42px and — via align-items: stretch —\n   drags the whole input-group taller than the standalone selects beside\n   them. Override only the button height (with !important to beat that\n   0,4,0 global selector) so the wrapped selects line up with their\n   standalone neighbors. */\n.input-group.category-input-group,\n.input-group.brand-input-group,\n.input-group.unit-input-group {\n  display: flex;\n  align-items: stretch;\n  flex-wrap: nowrap;\n}\n.input-group.category-input-group .v-select,\n.input-group.brand-input-group .v-select,\n.input-group.unit-input-group .v-select {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.input-group.category-input-group .v-select .vs__dropdown-toggle,\n.input-group.brand-input-group .v-select .vs__dropdown-toggle,\n.input-group.unit-input-group .v-select .vs__dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group.category-input-group .input-group-append,\n.input-group.brand-input-group .input-group-append,\n.input-group.unit-input-group .input-group-append {\n  align-items: stretch;\n}\n.input-group.category-input-group .category-add-btn,\n.input-group.brand-input-group .brand-add-btn,\n.input-group.unit-input-group .unit-add-btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  white-space: nowrap;\n  height: calc(1.5em + 0.7rem + 0px) !important;\n}\n\n/* ===== Responsive ===== */\n@media (max-width: 991.98px) {\n.product-create-page .sticky-sidebar {\n    position: relative;\n    top: 0;\n}\n}\n@media (max-width: 768px) {\n.product-create-page .page-hero {\n    padding: 1.25rem 1.25rem;\n}\n.product-create-page .page-hero__title {\n    font-size: 1.4rem;\n}\n.product-create-page .page-hero__actions {\n    width: 100%;\n    justify-content: flex-end;\n}\n.product-create-page .options-grid {\n    grid-template-columns: 1fr;\n}\n.product-create-page .form-action-bar__inner {\n    flex-direction: column-reverse;\n    align-items: stretch;\n    gap: 0.6rem;\n    padding: 0.75rem;\n}\n.product-create-page .form-action-bar__buttons {\n    width: 100%;\n    justify-content: space-between;\n}\n.product-create-page .form-action-bar__buttons .btn {\n    flex: 1 1 0;\n    justify-content: center;\n}\n.product-create-page .form-action-bar__hint {\n    font-size: 0.78rem;\n}\n.product-create-page .form-actions-spacer {\n    height: 130px;\n}\n.product-create-page .section-card .card-body {\n    padding: 1.1rem 1.15rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css"
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody.dark-theme .product-create-page {\n  --pc-text: #d8d8d8;\n  --pc-text-soft: rgba(216, 216, 216, 0.78);\n  --pc-text-muted: rgba(216, 216, 216, 0.55);\n  --pc-border: #2a2a2a;\n  --pc-border-soft: #2a2a2a;\n  --pc-bg: #1a1a1a;\n  --pc-bg-soft: #232323;\n  --pc-card: #202020;\n  --pc-primary-soft: rgba(99, 102, 241, 0.18);\n  --pc-primary-strong: #a78bfa;\n  --pc-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);\n  --pc-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(0, 0, 0, 0.3);\n  --pc-shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.5);\n}\nbody.dark-theme .product-create-page .page-hero {\n  background:\n    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.18), transparent 55%),\n    radial-gradient(circle at 100% 100%, rgba(99, 102, 241, 0.18), transparent 55%),\n    linear-gradient(135deg, #202020 0%, #1a1a1a 100%);\n  border-color: rgba(99, 102, 241, 0.25);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n}\nbody.dark-theme .product-create-page .page-hero__title {\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .pill {\n  background: #232323;\n}\nbody.dark-theme .product-create-page .pill--success {\n  background: rgba(16, 185, 129, 0.15);\n  color: #6ee7b7;\n  border-color: rgba(16, 185, 129, 0.35);\n}\nbody.dark-theme .product-create-page .pill--accent {\n  background: linear-gradient(135deg, rgba(245, 158, 11, 0.18), rgba(245, 158, 11, 0.28));\n  color: #fcd34d;\n  border-color: rgba(252, 211, 77, 0.35);\n}\nbody.dark-theme .product-create-page .summary-row {\n  border-bottom-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .summary-row__value.mono {\n  background: #232323;\n}\nbody.dark-theme .product-create-page .side-card__title {\n  border-bottom-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .label-help-icon {\n  background: #232323;\n}\nbody.dark-theme .product-create-page .form-control,\nbody.dark-theme .product-create-page .custom-select,\nbody.dark-theme .product-create-page textarea.form-control,\nbody.dark-theme .product-create-page .form-control-modern,\nbody.dark-theme .product-create-page .autocomplete-input {\n  background: #1a1a1a !important;\n  color: #d8d8d8 !important;\n}\nbody.dark-theme .product-create-page .form-control::-moz-placeholder, body.dark-theme .product-create-page textarea.form-control::-moz-placeholder, body.dark-theme .product-create-page .autocomplete-input::-moz-placeholder, body.dark-theme .product-create-page .form-control-modern::-moz-placeholder {\n  color: rgba(216, 216, 216, 0.4);\n}\nbody.dark-theme .product-create-page .form-control::placeholder,\nbody.dark-theme .product-create-page textarea.form-control::placeholder,\nbody.dark-theme .product-create-page .autocomplete-input::placeholder,\nbody.dark-theme .product-create-page .form-control-modern::placeholder {\n  color: rgba(216, 216, 216, 0.4);\n}\nbody.dark-theme .product-create-page .form-group label {\n  color: rgba(216, 216, 216, 0.78);\n}\nbody.dark-theme .product-create-page .form-action-bar {\n  background: linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, rgba(26, 26, 26, 0.85) 35%, #1a1a1a 70%);\n}\nbody.dark-theme .product-create-page .image-upload-wrapper {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .image-upload-wrapper:hover {\n  border-color: #8b5cf6;\n  background: rgba(139, 92, 246, 0.08);\n}\nbody.dark-theme .product-create-page .product-gallery-dropzone {\n  border-color: #2a2a2a;\n  background: linear-gradient(180deg, #1a1a1a 0%, #202020 100%);\n}\nbody.dark-theme .product-create-page .product-gallery-dropzone:hover {\n  border-color: #8b5cf6;\n  background: rgba(139, 92, 246, 0.08);\n  box-shadow: 0 2px 12px rgba(139, 92, 246, 0.18);\n}\nbody.dark-theme .product-create-page .product-gallery-dropzone-title {\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .product-gallery-empty {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .gallery-item-card {\n  background: linear-gradient(145deg, #202020 0%, #1c1c1c 100%);\n  border-color: #2a2a2a;\n  box-shadow:\n    0 1px 2px rgba(0, 0, 0, 0.4),\n    0 4px 12px rgba(0, 0, 0, 0.25);\n}\nbody.dark-theme .product-create-page .gallery-item-card::before {\n  background: linear-gradient(180deg, #2f2f2f 0%, #2a2a2a 100%);\n}\nbody.dark-theme .product-create-page .gallery-item-card:hover {\n  border-color: #2f2f2f;\n  box-shadow:\n    0 2px 6px rgba(0, 0, 0, 0.5),\n    0 10px 28px rgba(0, 0, 0, 0.35);\n}\nbody.dark-theme .product-create-page .gallery-item-card--main {\n  background: linear-gradient(145deg, rgba(99, 102, 241, 0.14) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border-color: rgba(102, 126, 234, 0.45);\n}\nbody.dark-theme .product-create-page .gallery-item-card--main::before {\n  background: linear-gradient(180deg, #7c8ef0 0%, #667eea 50%, #5a6fd6 100%);\n}\nbody.dark-theme .product-create-page .gallery-item-meta .text-truncate {\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .gallery-drag-handle {\n  background: rgba(255, 255, 255, 0.04);\n  color: rgba(216, 216, 216, 0.55);\n}\nbody.dark-theme .product-create-page .gallery-item-card:hover .gallery-drag-handle {\n  background: rgba(255, 255, 255, 0.08);\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .gallery-item-thumb {\n  background: linear-gradient(180deg, rgba(41, 33, 27, 0.98) 0%, rgba(25, 20, 16, 0.96) 100%);\n  box-shadow:\n    0 4px 12px rgba(0, 0, 0, 0.28),\n    inset 0 1px 0 rgba(255, 255, 255, 0.04);\n}\nbody.dark-theme .product-create-page .gallery-thumb-select {\n  background: linear-gradient(180deg, rgba(38, 31, 25, 0.98) 0%, rgba(24, 19, 15, 0.94) 100%);\n}\nbody.dark-theme .product-create-page .table-modern thead {\n  background: linear-gradient(180deg, #232323 0%, #1d1d1d 100%);\n  border-bottom-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .table-modern thead th {\n  color: rgba(216, 216, 216, 0.78);\n}\nbody.dark-theme .product-create-page .table-modern tbody tr {\n  border-bottom-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .table-modern tbody tr:hover {\n  background-color: rgba(139, 92, 246, 0.08);\n}\nbody.dark-theme .product-create-page .table-modern td {\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .variant-input-group,\nbody.dark-theme .product-create-page .combo-total {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.10) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border-color: rgba(99, 102, 241, 0.22);\n}\nbody.dark-theme .product-create-page .combo-search {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .options-grid .form-group {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .options-grid .form-group:hover {\n  background: rgba(139, 92, 246, 0.08);\n  border-color: rgba(139, 92, 246, 0.35);\n}\nbody.dark-theme .product-create-page .autocomplete-result-list {\n  background: #202020;\n  border-color: #2a2a2a;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);\n}\nbody.dark-theme .product-create-page .autocomplete-result {\n  background: #202020;\n  color: #d8d8d8;\n}\nbody.dark-theme .product-create-page .autocomplete-result:hover {\n  background-color: rgba(139, 92, 246, 0.18);\n  color: #a78bfa;\n}\nbody.dark-theme .product-create-page .modern-input-group .btn-icon-scan,\nbody.dark-theme .product-create-page .modern-input-group .btn-icon-gen {\n  background: rgba(139, 92, 246, 0.12);\n  color: #a78bfa;\n}\nbody.dark-theme .product-create-page .modern-input-group .btn-icon-scan:hover,\nbody.dark-theme .product-create-page .modern-input-group .btn-icon-gen:hover {\n  background: #6366f1;\n  color: #fff;\n}\nbody.dark-theme .product-create-page .input-group > .input-group-append > .input-group-text,\nbody.dark-theme .product-create-page .input-group > .input-group-prepend > .input-group-text {\n  background: #232323;\n  color: rgba(216, 216, 216, 0.78);\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .v-select .vs__dropdown-toggle {\n  background: #1a1a1a;\n  border-color: #2a2a2a;\n}\nbody.dark-theme .product-create-page .v-select .vs__search::-moz-placeholder {\n  color: #d8d8d8;\n  fill: #d8d8d8;\n}\nbody.dark-theme .product-create-page .v-select .vs__selected,\nbody.dark-theme .product-create-page .v-select .vs__search,\nbody.dark-theme .product-create-page .v-select .vs__search::placeholder,\nbody.dark-theme .product-create-page .v-select .vs__open-indicator,\nbody.dark-theme .product-create-page .v-select .vs__deselect {\n  color: #d8d8d8;\n  fill: #d8d8d8;\n}\nbody.dark-theme .product-create-page .v-select.vs--multiple .vs__selected {\n  background: rgba(214, 177, 122, 0.14);\n  border: 1px solid rgba(214, 177, 122, 0.24);\n  color: #f0d5a4;\n  border-radius: 10px;\n  padding: 0 0.45rem;\n}\nbody.dark-theme .product-create-page .v-select.vs--multiple .vs__selected .vs__deselect {\n  fill: currentColor;\n  opacity: 0.78;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ },

/***/ "./node_modules/sortablejs/modular/sortable.esm.js"
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiDrag: () => (/* binding */ MultiDragPlugin),
/* harmony export */   Sortable: () => (/* binding */ Sortable),
/* harmony export */   Swap: () => (/* binding */ SwapPlugin),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);



/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_0_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_0_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_0_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css"
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_1_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_1_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_1_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue"
/*!***************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=template&id=72967f59&scoped=true */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true");
/* harmony import */ var _PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=script&lang=js */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js");
/* harmony import */ var _PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render,
  _PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "72967f59",
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/components/PricingPreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/pages/products/Add_product.vue"
/*!****************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add_product.vue?vue&type=template&id=45a5ea63 */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63");
/* harmony import */ var _Add_product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add_product.vue?vue&type=script&lang=js */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js");
/* harmony import */ var _Add_product_vue_vue_type_style_index_0_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css");
/* harmony import */ var _Add_product_vue_vue_type_style_index_1_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css */ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Add_product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/src/views/app/pages/products/Add_product.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js"
/*!***************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js"
/*!****************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true"
/*!*********************************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true ***!
  \*********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_template_id_72967f59_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=template&id=72967f59&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=template&id=72967f59&scoped=true");


/***/ },

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63"
/*!**********************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63 ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_template_id_45a5ea63__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=template&id=45a5ea63 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=template&id=45a5ea63");


/***/ },

/***/ "./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css"
/*!***********************************************************************************************************************!*\
  !*** ./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingPreview_vue_vue_type_style_index_0_id_72967f59_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/components/PricingPreview.vue?vue&type=style&index=0&id=72967f59&scoped=true&lang=css");


/***/ },

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css"
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_0_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=0&id=45a5ea63&lang=css");


/***/ },

/***/ "./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css"
/*!************************************************************************************************************!*\
  !*** ./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css ***!
  \************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_product_vue_vue_type_style_index_1_id_45a5ea63_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/src/views/app/pages/products/Add_product.vue?vue&type=style&index=1&id=45a5ea63&lang=css");


/***/ },

/***/ "./node_modules/vuedraggable/dist/vuedraggable.umd.js"
/*!************************************************************!*\
  !*** ./node_modules/vuedraggable/dist/vuedraggable.umd.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js"));
	else // removed by dead control flow
{}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_688__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_688__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_688__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_688__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_688__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_688__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_688__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__nested_webpack_require_688__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_688__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_688__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_688__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_688__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_688__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_688__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_688__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_688__(__nested_webpack_require_688__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __nested_webpack_require_4164__) {

"use strict";

var LIBRARY = __nested_webpack_require_4164__("2d00");
var $export = __nested_webpack_require_4164__("5ca1");
var redefine = __nested_webpack_require_4164__("2aba");
var hide = __nested_webpack_require_4164__("32e9");
var Iterators = __nested_webpack_require_4164__("84f2");
var $iterCreate = __nested_webpack_require_4164__("41a0");
var setToStringTag = __nested_webpack_require_4164__("7f20");
var getPrototypeOf = __nested_webpack_require_4164__("38fd");
var ITERATOR = __nested_webpack_require_4164__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __nested_webpack_require_7070__) {

var toInteger = __nested_webpack_require_7070__("4588");
var defined = __nested_webpack_require_7070__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __nested_webpack_require_7783__) {

"use strict";

var at = __nested_webpack_require_7783__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __nested_webpack_require_8134__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __nested_webpack_require_8134__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __nested_webpack_require_8593__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __nested_webpack_require_8593__("ce10");
var enumBugKeys = __nested_webpack_require_8593__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __nested_webpack_require_8892__) {

var dP = __nested_webpack_require_8892__("86cc");
var anObject = __nested_webpack_require_8892__("cb7c");
var getKeys = __nested_webpack_require_8892__("0d58");

module.exports = __nested_webpack_require_8892__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __nested_webpack_require_9392__) {

"use strict";

__nested_webpack_require_9392__("b0c5");
var redefine = __nested_webpack_require_9392__("2aba");
var hide = __nested_webpack_require_9392__("32e9");
var fails = __nested_webpack_require_9392__("79e5");
var defined = __nested_webpack_require_9392__("be13");
var wks = __nested_webpack_require_9392__("2b4c");
var regexpExec = __nested_webpack_require_9392__("520a");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __nested_webpack_require_12849__) {

var isObject = __nested_webpack_require_12849__("d3f4");
var document = __nested_webpack_require_12849__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __nested_webpack_require_13233__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __nested_webpack_require_13233__("2d95");
var TAG = __nested_webpack_require_13233__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __nested_webpack_require_14160__) {

var global = __nested_webpack_require_14160__("7726");
var hide = __nested_webpack_require_14160__("32e9");
var has = __nested_webpack_require_14160__("69a8");
var SRC = __nested_webpack_require_14160__("ca5a")('src');
var $toString = __nested_webpack_require_14160__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__nested_webpack_require_14160__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __nested_webpack_require_15334__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __nested_webpack_require_15334__("cb7c");
var dPs = __nested_webpack_require_15334__("1495");
var enumBugKeys = __nested_webpack_require_15334__("e11e");
var IE_PROTO = __nested_webpack_require_15334__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __nested_webpack_require_15334__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __nested_webpack_require_15334__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __nested_webpack_require_16945__) {

var store = __nested_webpack_require_16945__("5537")('wks');
var uid = __nested_webpack_require_16945__("ca5a");
var Symbol = __nested_webpack_require_16945__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __nested_webpack_require_17667__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __nested_webpack_require_17667__("5ca1");
var context = __nested_webpack_require_17667__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __nested_webpack_require_17667__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __nested_webpack_require_18235__) {

var dP = __nested_webpack_require_18235__("86cc");
var createDesc = __nested_webpack_require_18235__("4630");
module.exports = __nested_webpack_require_18235__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __nested_webpack_require_18611__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __nested_webpack_require_18611__("69a8");
var toObject = __nested_webpack_require_18611__("4bf8");
var IE_PROTO = __nested_webpack_require_18611__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __nested_webpack_require_19205__) {

"use strict";

var create = __nested_webpack_require_19205__("2aeb");
var descriptor = __nested_webpack_require_19205__("4630");
var setToStringTag = __nested_webpack_require_19205__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__nested_webpack_require_19205__("32e9")(IteratorPrototype, __nested_webpack_require_19205__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __nested_webpack_require_19831__) {

// 19.1.2.14 Object.keys(O)
var toObject = __nested_webpack_require_19831__("4bf8");
var $keys = __nested_webpack_require_19831__("0d58");

__nested_webpack_require_19831__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __nested_webpack_require_20609__) {

// 7.1.13 ToObject(argument)
var defined = __nested_webpack_require_20609__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __nested_webpack_require_20831__) {

var MATCH = __nested_webpack_require_20831__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __nested_webpack_require_21176__) {

"use strict";


var regexpFlags = __nested_webpack_require_21176__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __nested_webpack_require_23109__) {

var core = __nested_webpack_require_23109__("8378");
var global = __nested_webpack_require_23109__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __nested_webpack_require_23109__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __nested_webpack_require_23642__) {

var global = __nested_webpack_require_23642__("7726");
var core = __nested_webpack_require_23642__("8378");
var hide = __nested_webpack_require_23642__("32e9");
var redefine = __nested_webpack_require_23642__("2aba");
var ctx = __nested_webpack_require_23642__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __nested_webpack_require_25367__) {

// most Object methods by ES6 should accept primitives
var $export = __nested_webpack_require_25367__("5ca1");
var core = __nested_webpack_require_25367__("8378");
var fails = __nested_webpack_require_25367__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __nested_webpack_require_25845__) {

"use strict";


var classof = __nested_webpack_require_25845__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __nested_webpack_require_26551__) {

var shared = __nested_webpack_require_26551__("5537")('keys');
var uid = __nested_webpack_require_26551__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __nested_webpack_require_26811__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __nested_webpack_require_26811__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __nested_webpack_require_27194__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __nested_webpack_require_27194__("5ca1");
var $includes = __nested_webpack_require_27194__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__nested_webpack_require_27194__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __nested_webpack_require_27659__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __nested_webpack_require_27659__("626a");
var defined = __nested_webpack_require_27659__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __nested_webpack_require_28155__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __nested_webpack_require_28155__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __nested_webpack_require_28898__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __nested_webpack_require_28898__("0d58");
var gOPS = __nested_webpack_require_28898__("2621");
var pIE = __nested_webpack_require_28898__("52a7");
var toObject = __nested_webpack_require_28898__("4bf8");
var IObject = __nested_webpack_require_28898__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __nested_webpack_require_28898__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __nested_webpack_require_30635__) {

var toInteger = __nested_webpack_require_30635__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __nested_webpack_require_31112__) {

var def = __nested_webpack_require_31112__("86cc").f;
var has = __nested_webpack_require_31112__("69a8");
var TAG = __nested_webpack_require_31112__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __nested_webpack_require_31751__) {

var anObject = __nested_webpack_require_31751__("cb7c");
var IE8_DOM_DEFINE = __nested_webpack_require_31751__("c69a");
var toPrimitive = __nested_webpack_require_31751__("6a99");
var dP = Object.defineProperty;

exports.f = __nested_webpack_require_31751__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __nested_webpack_require_32441__) {

// optional / simple context binding
var aFunction = __nested_webpack_require_32441__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __nested_webpack_require_33048__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __nested_webpack_require_33048__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __nested_webpack_require_33048__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __nested_webpack_require_33448__) {

// 7.1.15 ToLength
var toInteger = __nested_webpack_require_33448__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __nested_webpack_require_33750__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__nested_webpack_require_33750__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __nested_webpack_require_34139__) {

"use strict";


var anObject = __nested_webpack_require_34139__("cb7c");
var toObject = __nested_webpack_require_34139__("4bf8");
var toLength = __nested_webpack_require_34139__("9def");
var toInteger = __nested_webpack_require_34139__("4588");
var advanceStringIndex = __nested_webpack_require_34139__("0390");
var regExpExec = __nested_webpack_require_34139__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__nested_webpack_require_34139__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __nested_webpack_require_38885__) {

// 7.2.8 IsRegExp(argument)
var isObject = __nested_webpack_require_38885__("d3f4");
var cof = __nested_webpack_require_38885__("2d95");
var MATCH = __nested_webpack_require_38885__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __nested_webpack_require_39282__) {

var $iterators = __nested_webpack_require_39282__("cadf");
var getKeys = __nested_webpack_require_39282__("0d58");
var redefine = __nested_webpack_require_39282__("2aba");
var global = __nested_webpack_require_39282__("7726");
var hide = __nested_webpack_require_39282__("32e9");
var Iterators = __nested_webpack_require_39282__("84f2");
var wks = __nested_webpack_require_39282__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __nested_webpack_require_41209__) {

"use strict";

var regexpExec = __nested_webpack_require_41209__("520a");
__nested_webpack_require_41209__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __nested_webpack_require_41706__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __nested_webpack_require_41706__("6821");
var toLength = __nested_webpack_require_41706__("9def");
var toAbsoluteIndex = __nested_webpack_require_41706__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_42729__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __nested_webpack_require_42729__.d(__nested_webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_42729__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_42729__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __nested_webpack_require_42729__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __nested_webpack_require_44512__) {

module.exports = !__nested_webpack_require_44512__("9e1e") && !__nested_webpack_require_44512__("79e5")(function () {
  return Object.defineProperty(__nested_webpack_require_44512__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __nested_webpack_require_45568__) {

"use strict";

var addToUnscopables = __nested_webpack_require_45568__("9c6c");
var step = __nested_webpack_require_45568__("d53b");
var Iterators = __nested_webpack_require_45568__("84f2");
var toIObject = __nested_webpack_require_45568__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __nested_webpack_require_45568__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __nested_webpack_require_46777__) {

var isObject = __nested_webpack_require_46777__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __nested_webpack_require_47019__) {

var has = __nested_webpack_require_47019__("69a8");
var toIObject = __nested_webpack_require_47019__("6821");
var arrayIndexOf = __nested_webpack_require_47019__("c366")(false);
var IE_PROTO = __nested_webpack_require_47019__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __nested_webpack_require_47655__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __nested_webpack_require_47655__("aae3");
var defined = __nested_webpack_require_47655__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __nested_webpack_require_48796__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __nested_webpack_require_48796__("5ca1");
var toLength = __nested_webpack_require_48796__("9def");
var context = __nested_webpack_require_48796__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __nested_webpack_require_48796__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __nested_webpack_require_50913__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __nested_webpack_require_50913__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __nested_webpack_require_50913__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __nested_webpack_require_51166__) {

module.exports = __nested_webpack_require_51166__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __nested_webpack_require_51344__) {

var document = __nested_webpack_require_51344__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __nested_webpack_exports__, __nested_webpack_require_51548__) {

"use strict";
// ESM COMPAT FLAG
__nested_webpack_require_51548__.r(__nested_webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __nested_webpack_require_51548__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __nested_webpack_require_51548__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __nested_webpack_require_51548__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __nested_webpack_require_51548__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __nested_webpack_require_51548__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __nested_webpack_require_51548__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __nested_webpack_require_51548__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __nested_webpack_require_51548__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __nested_webpack_require_51548__("2fdb");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __nested_webpack_require_51548__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__nested_webpack_require_51548__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __nested_webpack_require_51548__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __nested_webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=vuedraggable.umd.js.map

/***/ }

}]);