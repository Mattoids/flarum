(()=>{var t={313:t=>{"use strict";t.exports=flarum.extensions["ziiven-decoration-store"]}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var i=o[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n),flarum.core.compat.extend;const t=flarum.core.compat["forum/app"];var o=e.n(t);const r=flarum.core.compat["common/extend"],i=flarum.core.compat["forum/components/HeaderSecondary"];var s=e.n(i);function a(t,o){return a=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},a(t,o)}function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,a(t,o)}const u=flarum.core.compat["common/components/NotificationsDropdown"];var l=e.n(u);const p=flarum.core.compat["common/Component"];var f=e.n(p);const v=flarum.core.compat["common/components/LoadingIndicator"];var d=e.n(v);const h=flarum.core.compat["common/components/Button"];var y=e.n(h);flarum.core.compat["common/components/Tooltip"];const w=flarum.core.compat["common/helpers/humanTime"];var g=e.n(w);const H=flarum.core.compat["common/helpers/username"];var b=e.n(H);const N=flarum.core.compat["common/helpers/avatar"];var x=e.n(N);const A=flarum.core.compat["common/components/Link"];var L=e.n(A);const C=flarum.core.compat["common/helpers/icon"];var O=e.n(C),_=function(t){function n(){return t.apply(this,arguments)||this}c(n,t);var r=n.prototype;return r.oncreate=function(o){t.prototype.oninit.call(this,o),this.state=this.attrs.state},r.deleteAll=function(t){confirm(o().translator.trans("ziven-view-history.forum.view-history-delete-all-confirmation"))&&o().store.all("viewHistory").length>0&&o().request({method:"DELETE",url:o().forum.attribute("apiUrl")+"/viewHistory/deleteAll"}).then((function(){o().store.data.viewHistory=[],m.redraw()}))},r.view=function(){if(this.state){var t,n,r=o().store.all("viewHistory");if(r.sort((function(t,o){return new Date(o.assignedAt())-new Date(t.assignedAt())})),"ziiven-decoration-store"in flarum.extensions){var i=e(313).components;t=i.avatarWithFrame,n=i.usernameWithColor}return m("div",{className:"NotificationList"},m("div",{className:"NotificationList-header"},m("h4",{className:"App-titleControl App-titleControl--text"},o().translator.trans("ziven-view-history.forum.view-history")),m("div",{class:"App-primaryControl"},m(y(),{"data-container":"body",icon:"fas fa-trash-alt",className:"Button Button--link Button--icon Alert-dismiss",onclick:this.deleteAll.bind(this)}))),m("div",{className:"NotificationList-content"},m("ul",{className:"NotificationGroup-content"},r.length?r.map((function(e){var r=e.post(),i=r.user();return m("li",null,m(L(),{href:o().route.post(r),className:"Notification",onclick:function(t){t.redraw=!1}},t?t(i):x()(i),O()("fas",{className:"Notification-icon"}),m("span",{className:"Notification-content"},o().translator.trans("flarum-flags.forum.flagged_posts.item_text",{username:n?n(r.user()):b()(r.user()),em:m("em",null),discussion:r.discussion().title()})),g()(e.assignedAt()),m("div",{className:"Notification-excerpt"},r.contentPlain())))})):this.state.loading?d().component({className:"LoadingIndicator--block"}):m("div",{className:"NotificationList-empty"},o().translator.trans("ziven-view-history.forum.view-history-empty")))))}},n}(f()),z=function(t){function o(){return t.apply(this,arguments)||this}c(o,t),o.initAttrs=function(o){o.label=app.translator.trans("ziven-view-history.forum.view-history"),o.icon="fas fa-history",t.initAttrs.call(this,o)};var e=o.prototype;return e.getMenu=function(){return m("div",{className:"Dropdown-menu "+this.attrs.menuClassName,onclick:this.menuClick.bind(this)},this.showing?_.component({state:this.attrs.state}):"")},e.goToRoute=function(){m.route.set(app.route("viewHistory"))},e.getUnreadCount=function(){return 0},e.getNewCount=function(){return this.getUnreadCount()},o}(l());const P=flarum.core.compat["common/components/FieldSet"];var S=e.n(P);const E=flarum.core.compat["common/components/SettingsPage"];var k=e.n(E);const j=flarum.core.compat["common/components/Switch"];var I=e.n(j);const T=flarum.core.compat["common/utils/ItemList"];var D=e.n(T),M=function(){function t(t){this.app=t,this.loading=!1}return t.prototype.load=function(){var t=this;this.loading=!0,m.redraw(),this.app.store.find("viewHistory").then((function(o){t.loading=!1,m.redraw()})).catch((function(){}))},t}();const B=flarum.core.compat["common/Model"];var U=e.n(B),F=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var e=o.prototype;return e.assignedAt=function(){return U().attribute("assigned_at").call(this)},e.discussion=function(){return U().hasOne("discussion").call(this)},e.post=function(){return U().hasOne("post").call(this)},e.user=function(){return U().hasOne("user").call(this)},o}(U());const W=flarum.core.compat["common/components/Page"];var q=function(t){function o(){return t.apply(this,arguments)||this}c(o,t);var e=o.prototype;return e.oninit=function(o){t.prototype.oninit.call(this,o),app.history.push("viewHistory"),app.viewHistory.load(),this.bodyClass="App--viewHistory"},e.view=function(){return m("div",{className:"ViewHistoryPage"},m(_,{state:app.viewHistory}))},o}(e.n(W)());o().initializers.add("ziven-view-history",(function(){o().store.models.viewHistory=F,o().routes.viewHistory={path:"/viewHistory",component:q},o().viewHistory=new M(o()),(0,r.extend)(s().prototype,"items",(function(t){o().session.user&&o().session.user.preferences().viewHistoryEnable&&t.add("viewHistory",m(z,{state:o().viewHistory}),20)})),(0,r.extend)(k().prototype,"settingsItems",(function(t){t.add("viewHistory",S().component({label:app.translator.trans("ziven-view-history.forum.view-history"),className:"Settings-viewHistory"},this.viewHistoryItems().toArray()))})),k().prototype.viewHistoryItems=function(){var t=this,o=new(D());return o.add("viewHistory-enable",I().component({state:this.user.preferences().viewHistoryEnable,onchange:function(o){t.viewHistoryEnableLoading=!0,t.user.savePreferences({viewHistoryEnable:o}).then((function(){t.viewHistoryEnableLoading=!1,m.redraw()}))},loading:this.viewHistoryEnableLoading},app.translator.trans("ziven-view-history.forum.view-history-enable"))),o}}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map