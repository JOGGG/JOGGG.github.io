(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"28ae":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content[data-v-42827ba4]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-42827ba4]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-42827ba4]{display:flex;justify-content:center}.title[data-v-42827ba4]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=e},7152:function(t,e,n){"use strict";var a=n("e48b"),i=n.n(a);i.a},7914:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"text-area"},[e("v-uni-text",{staticClass:"title"},[this._v(this._s(this.title)+",欢迎进入Live Chat")])],1)],1)},i=[]},7986:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("b85c"));n("14d9"),n("ac1f"),n("841c"),n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),function(t,e,n,a,i,o,r){t[i]=t[i]||function(){(t[i].q=t[i].q||[]).push(arguments)},t[i].t=1*new Date,o=e.createElement(n),o.async=1,o.src="https://www.digitlinkor.com/widget.js",r=e.getElementsByTagName(n)[0],r.parentNode.insertBefore(o,r)}(window,document,"script",0,"liveChat"),liveChat("init","56203a71-4d57-4541-ad43-a737733dc1e2");var o,r=document.querySelector("body");o=new MutationObserver((function(t,e){var n,a=(0,i.default)(t);try{for(a.s();!(n=a.n()).done;){var o=n.value;if("childList"===o.type&&o.addedNodes.length>0&&"ib-button-messaging"===o.addedNodes[0].id){console.log("id 为 ib-button-messaging 的节点被创建！");o.addedNodes[0];document.getElementById("ib-button-messaging-icon").click(),e.disconnect()}}}catch(r){a.e(r)}finally{a.f()}}));o.observe(r,{childList:!0});var c={data:function(){return{title:"Hello",showWeb:!1}},onLoad:function(){var t=window.location.search,e=new URLSearchParams(t),n=e.get("phone");console.log(n),n&&(this.title=n)},methods:{getPhoneNumber:function(t){console.log(t.detail.code),this.showWeb=!0}}};e.default=c},b85c:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=(0,a.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(d)throw r}}}},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("d401");var a=function(t){return t&&t.__esModule?t:{default:t}}(n("06c5"))},e48b:function(t,e,n){var a=n("28ae");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("df89cfe4",a,!0,{sourceMap:!1,shadowMode:!1})},ebc2:function(t,e,n){"use strict";n.r(e);var a=n("7986"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},f4e2:function(t,e,n){"use strict";n.r(e);var a=n("7914"),i=n("ebc2");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("7152");var r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"42827ba4",null,!1,a["a"],void 0);e["default"]=c.exports}}]);