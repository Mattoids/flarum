(()=>{var t={n:n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},d:(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};(()=>{"use strict";t.r(n);const e=flarum.core.compat["admin/app"];var o=t.n(e);function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}function a(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,r(t,n)}const s=flarum.core.compat["common/Model"];var i=t.n(s),c=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).actorId=i().attribute("actorId"),n.client=i().attribute("client"),n.ipAddress=i().attribute("ipAddress"),n.action=i().attribute("action"),n.payload=i().attribute("payload"),n.createdAt=i().attribute("createdAt",i().transformDate),n.actor=i().hasOne("actor"),n.discussion=i().hasOne("discussion"),n.newDiscussion=i().hasOne("newDiscussion"),n.post=i().hasOne("post"),n.tag=i().hasOne("tag"),n.user=i().hasOne("user"),n}return a(n,t),n}(i());const l=flarum.core.compat["admin/components/ExtensionPage"];var u=t.n(l);const d=flarum.core.compat["common/helpers/icon"];var p=t.n(d);const f=flarum.core.compat["common/app"];var h=t.n(f);const g=flarum.core.compat["common/Component"];var _=t.n(g);const w=flarum.core.compat["common/components/Button"];var v=t.n(w);const y=flarum.core.compat["common/components/LoadingIndicator"];var b=t.n(y);const k=flarum.core.compat["common/components/Placeholder"];var A=t.n(k);const R=flarum.core.compat["common/components/Badge"];var O=t.n(R);const I=flarum.core.compat["common/components/Dropdown"];var B=t.n(I);const L=flarum.core.compat["common/components/GroupBadge"];var P=t.n(L);const S=flarum.core.compat["common/helpers/avatar"];var D=t.n(S);const N=flarum.core.compat["common/helpers/humanTime"];var q=t.n(N);const M=flarum.core.compat["common/helpers/username"];var j=t.n(M);const V=flarum.core.compat["common/models/Group"];var x=t.n(V);const T=flarum.core.compat["common/utils/extractText"];var U=t.n(T);const C=flarum.core.compat["common/utils/ItemList"];var G=t.n(C),E="kilowhat-audit.lib.browser.";function J(t,n){void 0===n&&(n=!1);var e=t?JSON.parse(JSON.stringify(t)):[];if(!e.length){if(!n)return m("em",h().translator.trans(E+"noValue"));e.push(x().ADMINISTRATOR_ID)}return e.map((function(t){if(t+""===x().GUEST_ID)return O().component({icon:"fas fa-globe",label:h().translator.trans(E+"permissionGroup.everyone")});if(t+""===x().MEMBER_ID)return O().component({icon:"fas fa-user",label:h().translator.trans(E+"permissionGroup.members")});var n=h().store.getById("groups",t);return n?P().component({group:n}):O().component({icon:"fas fa-question",label:U()(h().translator.trans(E+"deletedResource.group",{id:t}))})})).map((function(t,n){return[n>0?", ":null,t]}))}function Q(t){return(t||[]).map((function(t,n){return[n>0?", ":null,m("code",t)]}))}var F=function(){function t(){this.showRaw=!1}return t.prototype.view=function(t){var n,e,o,r=this,a=t.attrs,s=a.log,i=a.changeQuery,c=s.actor(),l=s.payload()||{},u=s.discussion(),d=s.newDiscussion(),f=s.post(),g=s.tag(),_=s.user(),w=[];s.ipAddress()&&w.push(m("a",{onclick:function(){i("ip:"+s.ipAddress())}},s.ipAddress())),"session"!==s.client()&&"cli"!==s.client()&&w.push(m("a",{onclick:function(){i("client:"+s.client())}},h().translator.trans(E+"client."+s.client()))),w.push(q()(s.createdAt())),n="cli"===s.client()?p()("fas fa-terminal"):null===s.actorId()?p()("fas fa-user-secret"):c?m("a",{href:c?h().route.user(c):"#"},D()(c)):D()(null),e="cli"===s.client()?m("a",{onclick:function(){i("client:cli")}},h().translator.trans(E+"client.cli")):null===s.actorId()?m("a",{onclick:function(){i("actor:guest")}},h().translator.trans(E+"withoutActor")):c?m("a",{onclick:function(){i("actor:"+c.username())}},j()(c)):j()(c);var y=E+s.action();if("setting_changed"===s.action()&&l.hasOwnProperty("new_value")&&(y=E+"setting_changed_with_values"),"string"==typeof h().translator.translations[y]){var b={username:m("a",{href:_?h().route.user(_):"#"},_?j()(_):h().translator.trans(E+"deletedResource.user",{id:l.user_id})),discussion:m("a",{href:u?h().route.discussion(u):"#"},u?u.title():h().translator.trans(E+"deletedResource.discussion",{id:l.discussion_id})),new_discussion:m("a",{href:d?h().route.discussion(d):"#"},d?d.title():h().translator.trans(E+"deletedResource.discussion",{id:l.new_discussion_id})),tag:m("a",{href:g?h().route.tag(g):"#"},g?g.name():h().translator.trans(E+"deletedResource.tag",{id:l.tag_id})),post:m("a",{href:f&&f.discussion()?h().route.post(f):"#"},f?h().translator.trans(E+"genericResource."+("comment"===f.contentType()?"comment":"post")):h().translator.trans(E+"deletedResource.post",{id:l.post_id})),postuser:m("a",{href:f&&f.user()?h().route.user(f.user()):"#"},j()(f?f.user():null)),until:l.until?dayjs(l.until).format("LLLL"):"?",old_title:m("em",l.old_title),new_title:l.new_title&&u?m("a",{href:h().route.discussion(u)},l.new_title):l.new_title,package:m("code",l.package),provider:m("code",l.provider),ip:m("code",l.ip),key:m("code",l.key),permission:m("code",l.permission),old_value:l.old_value?m("code",l.old_value):m("em",h().translator.trans(E+"noValue")),new_value:l.new_value?m("code",l.new_value):m("em",h().translator.trans(E+"noValue")),old_groups:J(l.old_group_ids,"permission_changed"===s.action()),new_groups:J(l.new_group_ids,"permission_changed"===s.action()),old_username:m("code",l.old_username),new_username:m("code",l.new_username),old_nickname:l.old_nickname?m("code",l.old_nickname):m("em",h().translator.trans(E+"noValue")),new_nickname:l.new_nickname?m("code",l.new_nickname):m("em",h().translator.trans(E+"noValue")),old_email:m("code",l.old_email),new_email:m("code",l.new_email),old_tags:Q(l.old_tags),new_tags:Q(l.new_tags),original_discussion_ids_count:Array.isArray(l.original_discussion_ids)?l.original_discussion_ids.length:m("em",h().translator.trans(E+"noValue")),post_count:l.post_count,old_user:l.old_user_id?h().translator.trans(E+"deletedResource.user",{id:l.old_user_id}):m("em",h().translator.trans(E+"noValue")),new_user:l.new_user_id?h().translator.trans(E+"deletedResource.user",{id:l.new_user_id}):m("em",h().translator.trans(E+"noValue")),old_date:l.old_date?dayjs(l.old_date).format("LLLL"):m("em",h().translator.trans(E+"noValue")),new_date:l.new_date?dayjs(l.new_date).format("LLLL"):m("em",h().translator.trans(E+"noValue")),reason:l.reason?m("code",l.reason):m("em",h().translator.trans(E+"noReason")),deleted_count:l.deleted_count};o=h().translator.trans(y,b),this.showRaw&&(o=[o,m("pre",JSON.stringify(l,null,2))])}else o=JSON.stringify(l);var k=new(G());return k.add("raw",v().component({onclick:function(){r.showRaw=!r.showRaw}},h().translator.trans(E+"controls."+(this.showRaw?"hideRaw":"showRaw")))),c&&k.add("actor",v().component({onclick:function(){i("actor:"+c.username())}},h().translator.trans(E+"controls.filterActor"))),s.ipAddress()&&k.add("ip",v().component({onclick:function(){i("ip:"+s.ipAddress())}},h().translator.trans(E+"controls.filterIp"))),k.add("client",v().component({onclick:function(){i("client:"+s.client())}},h().translator.trans(E+"controls.filterClient"))),k.add("action",v().component({onclick:function(){i("action:"+s.action())}},h().translator.trans(E+"controls.filterAction"))),_&&k.add("user",v().component({onclick:function(){i("user:"+_.username())}},h().translator.trans(E+"controls.filterUser"))),l.discussion_id&&k.add("discussion",v().component({onclick:function(){i("discussion:"+l.discussion_id)}},h().translator.trans(E+"controls.filterDiscussion"))),m(".AuditItem",[m(".AuditItemAvatar",n),m(".AuditItemData",[B().component({menuClassName:"Dropdown-menu--right",buttonClassName:"Button Button--icon Button--flat",label:h().translator.trans(E+"controls"),icon:"fas fa-ellipsis-v"},k.toArray()),m(".AuditItemRow",[e," - ",m("a",{onclick:function(){i("action:"+s.action())}},s.action())]),m(".AuditItemRow",o),m(".AuditItemRow",w.map((function(t,n){return[0===n?null:" - ",t]})))])])},t}(),z="kilowhat-audit.lib.browser.",W=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))||this).q="",n.loading=!0,n.moreResults=!1,n.logs=[],n}a(n,t);var e=n.prototype;return e.oninit=function(n){t.prototype.oninit.call(this,n),this.refresh()},e.view=function(){var t,n=this;return this.loading?t=b().component():this.moreResults&&(t=v().component({className:"Button Button--block",onclick:this.loadMore.bind(this)},h().translator.trans(z+"loadMore"))),m("div",[m(".AuditSearch",[m(".AuditSearchWrapper",[m("input.FormControl",{value:this.q,onchange:function(t){n.q=t.target.value},placeholder:h().translator.trans(z+"filterPlaceholder")}),this.q?v().component({className:"Search-clear Button Button--icon Button--link",onclick:function(){n.q="",n.refresh()},icon:"fas fa-times-circle"}):null]),v().component({className:"Button",onclick:function(){n.refresh()}},h().translator.trans(z+"filterApply"))]),0!==this.logs.length||this.loading?null:A().component({text:h().translator.trans(z+"empty")}),m(".AuditList",this.logs.map((function(t){return m(F,{log:t,changeQuery:function(t){n.q=t,n.refresh()}})}))),m(".AuditMore",t)])},e.requestParams=function(){var t={filter:{}},n=this.attrs.baseQ||"";return this.q&&(n+=" "+this.q),n&&(t.filter.q=n.trim()),t},e.refresh=function(t){var n=this;return void 0===t&&(t=!0),t&&(this.loading=!0,this.logs=[]),this.loadResults().then((function(t){n.logs=[],n.parseResults(t)}),(function(){n.loading=!1,m.redraw()}))},e.loadResults=function(t){void 0===t&&(t=void 0);var n=this.requestParams();return n.page={offset:t},h().store.find("kilowhat-audit/logs",n)},e.loadMore=function(){this.loading=!0,this.loadResults(this.logs.length).then(this.parseResults.bind(this))},e.parseResults=function(t){var n;return[].push.apply(this.logs,t),this.loading=!1,this.moreResults=!(null==(n=t.payload.links)||!n.next),m.redraw(),t},n}(_()),H="kilowhat-audit.admin.header.",K=function(t){function n(){return t.apply(this,arguments)||this}a(n,t);var e=n.prototype;return e.className=function(){return t.prototype.className.call(this)+" AuditPage"},e.header=function(){var n=t.prototype.header.call(this);if(Array.isArray(n)&&n.length&&Array.isArray(n[0].children)){n[0].children.push(p()("fas fa-book",{className:"AuditBanner"}));try{n[0].children[0].children[0].children[1].children=[m("h2",[o().translator.trans(H+"title"),m("span.badge",o().translator.trans(H+"free")),m("a.AuditUpgrade",{target:"_blank",href:"https://kilowhat.net/flarum/extensions/audit"},[p()("fas fa-rocket")," ",o().translator.trans(H+"upgrade")])])]}catch(t){console.warn("[audit-log] Unable to add Free badge to header")}}else console.warn("[audit-log] Unable to change header styling");return n},e.content=function(){return m(".AuditPageContainer",m(W))},n}(u());o().initializers.add("kilowhat-audit",(function(){o().store.models["kilowhat-audit"]=c,o().route.discussion||(o().route.discussion=function(t){return o().forum.attribute("baseUrl")+"/d/"+t.slug()}),o().route.post||(o().route.post=function(t){return o().route.discussion(t.discussion())+"/"+t.number()}),o().route.tag||(o().route.tag=function(t){return o().forum.attribute("baseUrl")+"/t/"+t.slug()}),o().route.user||(o().route.user=function(t){return o().forum.attribute("baseUrl")+"/u/"+t.slug()}),o().extensionData.for("kilowhat-audit-free").registerPage(K)}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map