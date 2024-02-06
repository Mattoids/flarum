/*! For license information please see admin.js.LICENSE.txt */
(()=>{var t={648:(t,e,r)=>{var n=r(288).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),s=new E(n||[]);return i(a,"_invoke",{value:L(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var d={};function m(){}function v(){}function y(){}var g={};p(g,c,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&a.call(w,c)&&(g=w);var x=y.prototype=m.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){p(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,s,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,p=l.value;return p&&"object"==n(p)&&a.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(p).then((function(t){l.value=t,s(l)}),(function(t){return r("throw",t,s,c)}))}c(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=p(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,p(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},_(k.prototype),p(k.prototype,u,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),p(x,l,"Generator"),p(x,c,(function(){return this})),p(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},288:t=>{function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},357:(t,e,r)=>{var n=r(648)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n);const t=flarum.core.compat["admin/app"];var e=r.n(t);function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,a(t,e)}const s=flarum.core.compat["admin/components/ExtensionPage"];var c=r.n(s);function u(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,s,"next",t)}function s(t){u(a,n,o,i,s,"throw",t)}i(void 0)}))}}var p=r(357),f=r.n(p);const h=flarum.core.compat["common/Component"];var d=r.n(h);const v=flarum.core.compat["common/app"];var y=r.n(v),g=function(){function t(t,e,r){void 0===r&&(r=null),this.settings=t,this.callback=e,this.errorCallback=r||function(t){y().alerts.show(t)},this.widgetId=null,this.type=this.settings["fof-recaptcha.type"]}var e=t.prototype;return e.render=function(t){var e=this;this.widgetId=grecaptcha.render(t,{sitekey:this.settings["fof-recaptcha.credentials.site"],theme:Number(this.settings.theme_dark_mode)?"dark":"light",type:this.type,size:"invisible"===this.settings["fof-recaptcha.type"]?"invisible":"normal",callback:this.callback,"error-callback":function(){var t={type:"error",content:y().translator.trans("fof-recaptcha.forum.error")};e.errorCallback(t)}})},e.getResponse=function(){return grecaptcha.getResponse(this.widgetId)},e.execute=function(){return grecaptcha.execute(this.widgetId)},e.reset=function(){return grecaptcha.reset(this.widgetId)},e.isInvisible=function(){return"invisible"===this.type},t}();const b=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=e,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}();var w=function(){var t=l(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!y().recaptchaLoaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,b.js("https://www.recaptcha.net/recaptcha/api.js?hl="+y().translator.getLocale()+"&render=explicit");case 4:y().recaptchaLoaded=!0;case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e)},r.view=function(){return m("div",{className:"Form-group"},m("div",{className:"g-recaptcha"}))},r.oncreate=function(e){var r=this;if(t.prototype.oncreate.call(this,e),w().then((function(){var t=setInterval((function(){window.recaptcha&&(clearInterval(t),r.attrs.state.render(e.dom.querySelector(".g-recaptcha")))}),250)})),"invisible"===this.attrs.state.type){var n=e.dom.querySelector("iframe");n&&(n.tabIndex=-1)}},e}(d());const _=flarum.core.compat["common/components/Button"];var k=r.n(_);const L=flarum.core.compat["common/components/Alert"];var O=r.n(L);const S=flarum.core.compat["common/utils/classList"];var j=r.n(S),E=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).loading=!1,e.alertAttrs=void 0,e}i(r,t);var n=r.prototype;return n.view=function(t){var r;return m("div",{className:"RecaptchaPage-recaptcha"},m("div",{class:"ExtensionPage-permissions-header"},m("div",{class:"container"},m("h2",{className:"ExtensionTitle"},e().translator.trans("fof-recaptcha.admin.test.title")))),m("div",{class:"container"},m("form",{onsubmit:this.onsubmit.bind(this),className:j()("FoFReCaptchaTestForm",(null==(r=this.state)?void 0:r.isInvisible())&&"isInvisible")},m("div",{class:"Form-group Form-group--recaptcha"},m("p",{class:"helpText"},e().translator.trans("fof-recaptcha.admin.test.help_text")),this.alertAttrs&&m(O(),Object.assign({},this.alertAttrs,{dismissible:!1})),this.state&&m(x,{state:this.state})),m("div",{class:"Form-group"},m("div",{class:"ButtonGroup"},m(k(),{className:"Button Button--primary",type:"submit",loading:this.loading},e().translator.trans("fof-recaptcha.admin.test."+(this.state?"submit":"load_test")+"_button")),this.state&&m(k(),{className:"Button",onclick:this.initialize.bind(this)},e().translator.trans("fof-recaptcha.admin.test.reload_button")))),m("div",{class:"Form-group"}))))},n.destroy=function(){this.state=null,this.alertAttrs=null,this.loading=!1,m.redraw.sync()},n.initialize=function(){var t=this;this.destroy();var r=this.attrs.settings||e().data.settings;this.state=new g(r,(function(){if(t.state.isInvisible()){var e=new Event("submit");e.isRecaptchaSecondStep=!0,t.onsubmit(e)}}),this.onerror)},n.onsubmit=function(){var t=l(f().mark((function t(r){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),this.state){t.next=3;break}return t.abrupt("return",this.initialize());case 3:if(this.alertAttrs=null,this.loading=!0,m.redraw(),!this.state.isInvisible()||r.isRecaptchaSecondStep){t.next=10;break}return r.preventDefault(),this.state.execute(),t.abrupt("return");case 10:return n={"g-recaptcha-response":this.state.getResponse()},t.prev=11,t.next=14,e().request({method:"POST",url:e().forum.attribute("apiUrl")+"/fof/recaptcha/test",body:n,errorHandler:function(){}});case 14:t.next=19;break;case 16:return t.prev=16,t.t0=t.catch(11),t.abrupt("return",this.onerror(t.t0));case 19:this.loading=!1,this.alertAttrs={type:"success",content:e().translator.trans("fof-recaptcha.admin.test.success_message")},this.state.reset(),m.redraw();case 23:case"end":return t.stop()}}),t,this,[[11,16]])})));return function(e){return t.apply(this,arguments)}}(),n.onerror=function(t){var e,r=t.alert||t;this.loading=!1,this.alertAttrs=r,null==(e=this.state)||e.reset(),m.redraw()},r}(d()),P=function(t){function e(){return t.apply(this,arguments)||this}return i(e,t),e.prototype.sections=function(e){var r=t.prototype.sections.call(this,e),n=o({},this.settings);for(var a in n)n[a]instanceof Function&&(n[a]=n[a].call(this));return r.add("recaptcha",m(E,{settings:n})),r.setPriority("permissions",-1),r},e}(c());e().initializers.add("fof/recaptcha",(function(){e().extensionData.for("fof-recaptcha").registerPage(P).registerSetting({setting:"fof-recaptcha.type",label:e().translator.trans("fof-recaptcha.admin.settings.type_label"),help:e().translator.trans("fof-recaptcha.admin.settings.type_help"),options:{checkbox:"Checkbox",invisible:"Invisible"},required:!0,default:"checkbox",type:"select"}).registerSetting({setting:"fof-recaptcha.credentials.site",label:e().translator.trans("fof-recaptcha.admin.settings.site_key_label"),type:"text",required:!0,help:e().translator.trans("fof-recaptcha.admin.settings.help_text",{a:m("a",{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener"})})}).registerSetting({setting:"fof-recaptcha.credentials.secret",label:e().translator.trans("fof-recaptcha.admin.settings.secret_key_label"),type:"password",required:!0}).registerSetting({setting:"fof-recaptcha.signup",type:"bool",label:e().translator.trans("fof-recaptcha.admin.settings.signup")}).registerSetting({setting:"fof-recaptcha.signin",type:"bool",label:e().translator.trans("fof-recaptcha.admin.settings.signin")}).registerSetting({setting:"fof-recaptcha.forgot",type:"bool",label:e().translator.trans("fof-recaptcha.admin.settings.forgot")}).registerPermission({permission:"fof-recaptcha.postWithoutCaptcha",label:e().translator.trans("fof-recaptcha.admin.permissions.post_without_captcha"),icon:"fas fa-robot"},"reply")}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map