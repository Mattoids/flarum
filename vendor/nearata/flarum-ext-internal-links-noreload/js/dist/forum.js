(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["forum/app"];var a=e.n(r);a().initializers.add("nearata-internal-links-noreload",(function(){document.addEventListener("click",(function(e){if(void 0===e.redraw){var t=e.target.closest("a");if(t){var r=a().forum.attribute("baseUrl");if(t.href.startsWith(r)&&!t.target){var o=t.pathname.split("/");o[o.length-1].match(/(.*)\.(.*)/i)||(e.preventDefault(),m.route.set(t.pathname))}}}}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map