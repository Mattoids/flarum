(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["forum/app"];var o=e.n(r);const a=flarum.core.compat.extend,n=flarum.core.compat["common/components/CommentPost"];var u=e.n(n);o().initializers.add("post-number",(function(){(0,a.extend)(u().prototype,"headerItems",(function(e){var t=o().translator.trans("post-number.forum.number-prefix",{number:this.attrs.post.data.attributes.number});e.add("post-number",m("span",{className:"postNumber"},t))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map