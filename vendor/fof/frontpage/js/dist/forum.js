(()=>{var o={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return o.d(r,{a:r}),r},d:(t,r)=>{for(var e in r)o.o(r,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const r=flarum.core.compat["forum/app"];var e=o.n(r);const n=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/states/DiscussionListState"];var f=o.n(a);const p=flarum.core.compat["forum/utils/DiscussionControls"];var c=o.n(p);const s=flarum.core.compat["common/components/Button"];var m=o.n(s);const u=flarum.core.compat["common/Model"];var i=o.n(u);const l=flarum.core.compat["common/models/Discussion"];var d=o.n(l);d().prototype.frontpage=i().attribute("frontpage"),d().prototype.front=i().attribute("front");const g=flarum.core.compat["common/components/Badge"];var b=o.n(g);d().prototype.frontpage=i().attribute("frontpage"),e().initializers.add("fof/frontpage",(function(){(0,n.extend)(f().prototype,"requestParams",(function(o){"front"===this.params.sort&&(o.filter.q?o.filter.q=(o.filter.q||"")+"is:frontpage":o.filter.frontpage=!0)})),(0,n.extend)(f().prototype,"sortMap",(function(o){o.front="-frontdate"})),(0,n.extend)(c(),"moderationControls",(function(o,t){var r=t.frontpage();t.front()&&o.add("frontpage",m().component({icon:"fas fa-home",onclick:function(){r=!r,t.save({frontpage:r})}},e().translator.trans(t.frontpage()?"core.forum.post_controls.pull_from_front_button":"core.forum.post_controls.push_to_front_button")))})),(0,n.extend)(d().prototype,"badges",(function(o){this.frontpage()&&o.add("frontpage",b().component({type:"frontpage",label:e().translator.trans("core.forum.badge.frontpage_tooltip"),icon:"fas fa-home"}),10)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map