define("../../require-css/normalize",[],function(){function n(n,r,i){if(n.match(a)||n.match(s))return n;n=o(n);var u=i.match(s),l=r.match(s);return!l||u&&u[1]==l[1]&&u[2]==l[2]?e(t(n,r),i):t(n,r)}function t(n,t){if("./"==n.substr(0,2)&&(n=n.substr(2)),n.match(a)||n.match(s))return n;var e=t.split("/"),r=n.split("/");for(e.pop();curPart=r.shift();)".."==curPart?e.pop():e.push(curPart);return e.join("/")}function e(n,t){var e=t.split("/");for(e.pop(),t=e.join("/")+"/",i=0;t.substr(i,1)==n.substr(i,1);)i++;for(;"/"!=t.substr(i,1);)i--;t=t.substr(i+1),n=n.substr(i+1),e=t.split("/");var r=n.split("/");for(out="";e.shift();)out+="../";for(;curPart=r.shift();)out+=curPart+"/";return out.substr(0,out.length-1)}var r=/([^:])\/+/g,o=function(n){return n.replace(r,"$1/")},s=/[^\:\/]*:\/\/([^\/])*/,a=/^(\/|data:)/,u=function(t,e,r){e=o(e),r=o(r);for(var s,i,t,a=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi;s=a.exec(t);){i=s[3]||s[2]||s[5]||s[6]||s[4];var u;u=n(i,e,r);var l=s[5]||s[6]?1:0;t=t.substr(0,a.lastIndex-i.length-l-1)+u+t.substr(a.lastIndex-l-1),a.lastIndex=a.lastIndex+(u.length-i.length)}return t};return u.convertURIBase=n,u.absoluteURI=t,u.relativeURI=e,u}),define("../../require-css/css",[],function(){if("undefined"==typeof window)return{load:function(n,t,e){e()}};var n=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,e=!1,r=!0;t[1]||t[7]?e=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?r=!1:t[4]&&(e=parseInt(t[4])<18);var o={};o.pluginBuilder="./css-builder";var s,i,a,u=function(){s=document.createElement("style"),n.appendChild(s),i=s.styleSheet||s.sheet},l=0,c=[],d=function(n){i.addImport(n),s.onload=function(){p()},l++,31==l&&(u(),l=0)},p=function(){a();var n=c.shift();return n?(a=n[1],void d(n[0])):void(a=null)},f=function(n,t){if(i&&i.addImport||u(),i&&i.addImport)a?c.push([n,t]):(d(n),a=t);else{s.textContent='@import "'+n+'";';var e=setInterval(function(){try{s.sheet.cssRules,clearInterval(e),t()}catch(n){}},10)}},h=function(t,e){var o=document.createElement("link");if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},setTimeout(e,7)};else var s=setInterval(function(){for(var n=0;n<document.styleSheets.length;n++){var t=document.styleSheets[n];if(t.href==o.href)return clearInterval(s),e()}},10);o.href=t,n.appendChild(o)};return o.normalize=function(n,t){return".css"==n.substr(n.length-4,4)&&(n=n.substr(0,n.length-4)),t(n)},o.load=function(n,t,r,o){(e?f:h)(t.toUrl(n+".css"),r)},o}),define("app/../../require-css/normalize",[],function(){function n(n,r,i){if(n.match(a)||n.match(s))return n;n=o(n);var u=i.match(s),l=r.match(s);return!l||u&&u[1]==l[1]&&u[2]==l[2]?e(t(n,r),i):t(n,r)}function t(n,t){if("./"==n.substr(0,2)&&(n=n.substr(2)),n.match(a)||n.match(s))return n;var e=t.split("/"),r=n.split("/");for(e.pop();curPart=r.shift();)".."==curPart?e.pop():e.push(curPart);return e.join("/")}function e(n,t){var e=t.split("/");for(e.pop(),t=e.join("/")+"/",i=0;t.substr(i,1)==n.substr(i,1);)i++;for(;"/"!=t.substr(i,1);)i--;t=t.substr(i+1),n=n.substr(i+1),e=t.split("/");var r=n.split("/");for(out="";e.shift();)out+="../";for(;curPart=r.shift();)out+=curPart+"/";return out.substr(0,out.length-1)}var r=/([^:])\/+/g,o=function(n){return n.replace(r,"$1/")},s=/[^\:\/]*:\/\/([^\/])*/,a=/^(\/|data:)/,u=function(t,e,r){e=o(e),r=o(r);for(var s,i,t,a=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi;s=a.exec(t);){i=s[3]||s[2]||s[5]||s[6]||s[4];var u;u=n(i,e,r);var l=s[5]||s[6]?1:0;t=t.substr(0,a.lastIndex-i.length-l-1)+u+t.substr(a.lastIndex-l-1),a.lastIndex=a.lastIndex+(u.length-i.length)}return t};return u.convertURIBase=n,u.absoluteURI=t,u.relativeURI=e,u}),define("app/../../require-css/css",[],function(){if("undefined"==typeof window)return{load:function(n,t,e){e()}};var n=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,e=!1,r=!0;t[1]||t[7]?e=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?r=!1:t[4]&&(e=parseInt(t[4])<18);var o={};o.pluginBuilder="./css-builder";var s,i,a,u=function(){s=document.createElement("style"),n.appendChild(s),i=s.styleSheet||s.sheet},l=0,c=[],d=function(n){i.addImport(n),s.onload=function(){p()},l++,31==l&&(u(),l=0)},p=function(){a();var n=c.shift();return n?(a=n[1],void d(n[0])):void(a=null)},f=function(n,t){if(i&&i.addImport||u(),i&&i.addImport)a?c.push([n,t]):(d(n),a=t);else{s.textContent='@import "'+n+'";';var e=setInterval(function(){try{s.sheet.cssRules,clearInterval(e),t()}catch(n){}},10)}},h=function(t,e){var o=document.createElement("link");if(o.type="text/css",o.rel="stylesheet",r)o.onload=function(){o.onload=function(){},setTimeout(e,7)};else var s=setInterval(function(){for(var n=0;n<document.styleSheets.length;n++){var t=document.styleSheets[n];if(t.href==o.href)return clearInterval(s),e()}},10);o.href=t,n.appendChild(o)};return o.normalize=function(n,t){return".css"==n.substr(n.length-4,4)&&(n=n.substr(0,n.length-4)),t(n)},o.load=function(n,t,r,o){(e?f:h)(t.toUrl(n+".css"),r)},o}),define("app/../../require-css/css!style/normalize",[],function(){}),define("../../require-css/css!style/style",[],function(){}),define("../../require-css/css!style/page1",[],function(){}),define("app/page1",["css!style/normalize","css!style/style","css!style/page1"],function(n){}),function(n){var t=document,e="appendChild",r="styleSheet",o=t.createElement("style");o.type="text/css",t.getElementsByTagName("head")[0][e](o),o[r]?o[r].cssText=n:o[e](t.createTextNode(n))}('\nhtml {\n  font-family: sans-serif; \n  -ms-text-size-adjust: 100%; \n  -webkit-text-size-adjust: 100%; \n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; \n  vertical-align: baseline; \n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; \n  font: inherit; \n  margin: 0; \n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type="button"], \ninput[type="reset"],\ninput[type="submit"] {\n  -webkit-appearance: button; \n  cursor: pointer; \n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type="checkbox"],\ninput[type="radio"] {\n  box-sizing: border-box; \n  padding: 0; \n}\ninput[type="number"]::-webkit-inner-spin-button,\ninput[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type="search"] {\n  -webkit-appearance: textfield; \n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; \n  box-sizing: content-box;\n}\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0; \n  padding: 0; \n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}'),function(n){var t=document,e="appendChild",r="styleSheet",o=t.createElement("style");o.type="text/css",t.getElementsByTagName("head")[0][e](o),o[r]?o[r].cssText=n:o[e](t.createTextNode(n))}("body {\n	background-color: yellow;\n}span {\n	font-style: red;\n}");