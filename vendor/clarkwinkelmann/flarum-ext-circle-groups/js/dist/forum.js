(()=>{var r={n:t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},d:(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:(r,t)=>Object.prototype.hasOwnProperty.call(r,t),r:r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}},t={};(()=>{"use strict";r.r(t);const e=flarum.core.compat["forum/app"];var n=r.n(e);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/AvatarEditor"];var i=r.n(a);const c=flarum.core.compat["forum/components/PostUser"];var s=r.n(c);const d=flarum.core.compat["forum/components/UserCard"];var l=r.n(d);const u=flarum.core.compat["common/components/Link"];var f=r.n(u);function m(r){return function(t){return!(!t||!t.tag||t.tag!==r)}}function p(r){return function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.trim()===r}}function v(r,t){var e=t.groups();if(Array.isArray(e)){var n=e.find((function(r){return r&&r.color()}));n&&(r.attrs=r.attrs||{},r.attrs.style=r.attrs.style||{},r.attrs.style.borderColor=n.color())}}n().initializers.add("clarkwinkelmann-circle-groups",(function(){(0,o.extend)(s().prototype,"view",(function(r){var t=this.attrs.post.user();t&&v(r.children.find(m("h3")).children.find(m(f())).children.find(p("Avatar PostUser-avatar")),t)})),(0,o.extend)(l().prototype,"view",(function(r){var t=r.children.find(p("darkenBackground")).children.find(p("container")).children.find(p("UserCard-profile")).children.find(p("UserCard-identity"));t.children[0].tag===f()&&v(t.children[0].children.find(p("UserCard-avatar")).children.find(p("Avatar")),this.attrs.user)})),(0,o.extend)(i().prototype,"view",(function(r){v(r.children.find(p("Avatar")),this.attrs.user)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map