(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0a2f":function(e,t,n){"use strict";var a=n("d9c6"),i=n.n(a);i.a},"4d47":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"text-area"},[t("v-uni-text",{staticClass:"title"},[this._v(this._s(this.title)+",欢迎进入Live Chat")])],1)],1)},i=[]},7986:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("b85c"));n("14d9"),n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),function(e,t,n,a,i,o,r){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].t=1*new Date,o=t.createElement(n),o.async=1,o.src="https://livechat.infobip.com/widget.js",r=t.getElementsByTagName(n)[0],r.parentNode.insertBefore(o,r)}(window,document,"script",0,"liveChat"),liveChat("init","56203a71-4d57-4541-ad43-a737733dc1e2");var o,r=document.querySelector("body");o=new MutationObserver((function(e,t){var n,a=(0,i.default)(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;if("childList"===o.type&&o.addedNodes.length>0&&"ib-button-messaging"===o.addedNodes[0].id){console.log("id 为 ib-button-messaging 的节点被创建！");o.addedNodes[0];document.getElementById("ib-button-messaging-icon").click(),t.disconnect()}}}catch(r){a.e(r)}finally{a.f()}}));o.observe(r,{childList:!0});var c={data:function(){return{title:"Hello",showWeb:!1}},onLoad:function(){var e=window.location.search,t=new URLSearchParams(e),n=t.get("phone");console.log(n),n&&(this.title=n)},methods:{getPhoneNumber:function(e){console.log(e.detail.code),this.showWeb=!0}}};t.default=c},"7ee4":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".content[data-v-a0f58be6]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-a0f58be6]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-a0f58be6]{display:flex;justify-content:center}.title[data-v-a0f58be6]{font-size:%?36?%;color:#8f8f94}",""]),e.exports=t},b85c:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=(0,a.default)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,r=e},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(d)throw r}}}},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("d401");var a=function(e){return e&&e.__esModule?e:{default:e}}(n("06c5"))},d9c6:function(e,t,n){var a=n("7ee4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("5cf13ef1",a,!0,{sourceMap:!1,shadowMode:!1})},ebc2:function(e,t,n){"use strict";n.r(t);var a=n("7986"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},f4e2:function(e,t,n){"use strict";n.r(t);var a=n("4d47"),i=n("ebc2");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("0a2f");var r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"a0f58be6",null,!1,a["a"],void 0);t["default"]=c.exports}}]);