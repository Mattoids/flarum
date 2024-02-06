(()=>{var t={n:r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},d:(r,e)=>{for(var o in e)t.o(e,o)&&!t.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:e[o]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};(()=>{"use strict";t.r(r),t.d(r,{CheckableButton:()=>W,SortMap:()=>Q,UserDirectoryList:()=>J,UserDirectoryListItem:()=>H,UserDirectoryPage:()=>lt,UserDirectoryState:()=>V,components:()=>dt,searchTypes:()=>ht});const e=flarum.core.compat["common/extend"],o=flarum.core.compat["forum/app"];var s=t.n(o);const n=flarum.core.compat["common/components/UsersSearchSource"];var a=t.n(n);const i=flarum.core.compat["common/components/LinkButton"];var u=t.n(i);const c=flarum.core.compat["common/components/IndexPage"];var l=t.n(c);function p(){return p=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},p.apply(this,arguments)}function f(t,r){return f=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},f(t,r)}function d(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,f(t,r)}const h=flarum.core.compat["common/components/Page"];var y=t.n(h);const v=flarum.core.compat["common/utils/ItemList"];var g=t.n(v);const b=flarum.core.compat["common/helpers/listItems"];var F=t.n(b);const S=flarum.core.compat["forum/components/IndexPage"];var P=t.n(S);const w=flarum.core.compat["common/components/Select"];var q=t.n(w);const I=flarum.core.compat["common/components/Button"];var x=t.n(I);const N=flarum.core.compat["common/components/SelectDropdown"];var _=t.n(N);const D=flarum.core.compat["common/components/Dropdown"];var C=t.n(D);const U=flarum.core.compat["common/Component"];var k=t.n(U);const L=flarum.core.compat["common/components/LoadingIndicator"];var B=t.n(L);const G=flarum.core.compat["common/components/Placeholder"];var R=t.n(G);const j=flarum.core.compat["forum/components/UserCard"];var O=t.n(j);const A=flarum.core.compat["common/utils/humanTime"];var T=t.n(A),M=function(t){function r(){return t.apply(this,arguments)||this}return d(r,t),r.prototype.infoItems=function(){var t=new(g()),r=this.attrs.user;return t.add("joined",app.translator.trans("core.forum.user.joined_date_text",{ago:T()(r.joinTime())})),t},r}(O());const z=flarum.core.compat["common/helpers/icon"];var E=t.n(z),K=function(t){function r(){return t.apply(this,arguments)||this}return d(r,t),r.prototype.infoItems=function(){var r=t.prototype.infoItems.call(this),e=this.attrs.user;return r.has("lastSeen")&&r.setPriority("lastSeen",100),r.has("joined")&&r.setPriority("joined",95),r.has("points")&&r.setPriority("points",60),r.has("best-answer-count")&&r.setPriority("best-answer-count",68),r.has("masquerade-bio")&&r.setPriority("masquerade-bio",50),r.add("discussion-count",m("div",{className:"userStat"},E()("fas fa-comment"),s().translator.trans("fof-user-directory.forum.page.usercard.discussion-count",{count:e.discussionCount()})),70),r.add("comment-count",m("div",{className:"userStat"},E()("fas fa-comments"),s().translator.trans("fof-user-directory.forum.page.usercard.post-count",{count:e.commentCount()})),69),r},r}(O()),H=function(t){function r(){return t.apply(this,arguments)||this}return d(r,t),r.prototype.view=function(t){var r=this.attrs,e=r.user,o=r.useSmallCards,s={user:e,className:"UserCard--directory"+(o?" UserCard--small":""),controlsButtonClassName:"Button Button--icon Button--flat"};return m("div",{className:"User"},o?M.component(s):K.component(s))},r}(k()),J=function(t){function r(){return t.apply(this,arguments)||this}return d(r,t),r.prototype.view=function(){var t,r=this.attrs.state,e=r.getParams(),o=s().forum.attribute("userDirectorySmallCards");if(r.isLoading()?t=B().component():r.moreResults&&(t=x().component({className:"Button",onclick:r.loadMore.bind(r)},s().translator.trans("fof-user-directory.forum.page.load_more_button"))),r.empty()){var n=s().translator.trans("fof-user-directory.forum.page.empty_text");return m("div",{className:"DiscussionList"},R().component({text:n}))}return m("div",{className:"UserDirectoryList"+(r.isSearchResults()?" UserDirectoryList--searchResults":"")+(o?" UserDirectoryList--small-cards":"")},m("ul",{className:"UserDirectoryList-users"},r.users.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},H.component({user:t,params:e,useSmallCards:o}))}))),m("div",{className:"UserDirectoryList-loadMore"},t))},r}(k()),Q=function(){function t(){}return t.prototype.sortMap=function(){return{username_az:"username",username_za:"-username",newest:"-joinedAt",oldest:"joinedAt",most_discussions:"-discussionCount",least_discussions:"discussionCount"}},t}(),V=function(){function t(t,r){void 0===t&&(t={}),void 0===r&&(r=window.app),this.params=t,this.app=r,this.users=[],this.moreResults=!1,this.loading=!1,this.qBuilder={}}var r=t.prototype;return r.requestParams=function(){var t={include:[],filter:{}},r=this.params.sort||app.forum.attribute("userDirectoryDefaultSort");return t.sort=this.sortMap()[r],this.params.q&&(t.filter.q=this.params.q),t},r.sortMap=function(){return p({default:""},(new Q).sortMap())},r.getParams=function(){return this.params},r.clear=function(){this.users=[],m.redraw()},r.refreshParams=function(t){var r=this;this.hasUsers()&&!Object.keys(t).some((function(e){return r.getParams()[e]!==t[e]}))||(this.params=t,t.qBuilder&&(Object.assign(this.qBuilder,t.qBuilder||{}),this.params.q=Object.values(this.qBuilder).join(" ").trim()),this.params.q,this.refresh())},r.refresh=function(){var t=this;return this.loading=!0,this.clear(),this.loadResults().then((function(r){t.users=[],t.parseResults(r)}),(function(){t.loading=!1,m.redraw()}))},r.loadResults=function(t){var r=this.app.preloadedApiDocument();if(r)return Promise.resolve(r);var e=this.requestParams();return e.page={offset:t},e.include=e.include.join(","),this.app.store.find("users",e)},r.loadMore=function(){this.loading=!0,this.loadResults(this.users.length).then(this.parseResults.bind(this))},r.parseResults=function(t){var r;return(r=this.users).push.apply(r,t),this.loading=!1,this.moreResults=!!t.payload.links&&!!t.payload.links.next,m.redraw(),t},r.hasUsers=function(){return this.users.length>0},r.isLoading=function(){return this.loading},r.isSearchResults=function(){return!!this.params.q},r.empty=function(){return!this.hasUsers()&&!this.isLoading()},t}(),W=function(t){function r(){return t.apply(this,arguments)||this}return d(r,t),r.prototype.getButtonContent=function(r){var e=t.prototype.getButtonContent.call(this,r);return this.attrs.checked&&e.push(E()("fas fa-check",{className:"Button-icon ButtonCheck"})),e},r}(x());const X=flarum.core.compat["common/utils/withAttr"];var Y=t.n(X);const Z=flarum.core.compat["common/utils/KeyboardNavigatable"];var $=t.n(Z);const tt=flarum.core.compat["utils/ItemList"];var rt=t.n(tt),et=function(){function t(){this.suggestions=[],this.loading=!1}var r=t.prototype;return r.resourceType=function(){},r.search=function(t){},r.renderKind=function(t){},r.renderLabel=function(t){},r.applyFilter=function(t,r){},r.initializeFromParams=function(t){},t}(),ot=function(t){function r(){return t.apply(this,arguments)||this}d(r,t);var e=r.prototype;return e.resourceType=function(){return"fof-user-directory-text"},e.search=function(t){this.suggestions=t?[s().store.createRecord("fof-user-directory-text",{attributes:{text:t}})]:[]},e.renderKind=function(){return s().translator.trans("fof-user-directory.forum.search.kinds.text")},e.renderLabel=function(t){return m(".UserDirectorySearchLabel",t.text())},e.applyFilter=function(t,r){t.q=t.q?t.q+" ":"",t.q+=r.text()},e.initializeFromParams=function(t){return t.q?Promise.resolve(t.q.split(" ").filter((function(t){return-1===t.indexOf(":")})).map((function(t){return s().store.createRecord("fof-user-directory-text",{attributes:{text:t}})}))):Promise.resolve([])},r}(et);const st=flarum.core.compat["common/models/Group"];var nt=t.n(st),at=function(t){function r(){return t.apply(this,arguments)||this}d(r,t);var e=r.prototype;return e.resourceType=function(){return"groups"},e.search=function(t){var r=this;this.suggestions=[],t&&(t=t.toLowerCase(),s().store.all("groups").forEach((function(e){e.id()!==nt().GUEST_ID&&(-1===e.nameSingular().toLowerCase().indexOf(t)&&-1===e.namePlural().toLowerCase().indexOf(t)||r.suggestions.push(e))})))},e.renderKind=function(){return s().translator.trans("fof-user-directory.forum.search.kinds.group")},e.renderLabel=function(t){return m(".UserDirectorySearchLabel",t.color()?{className:"colored",style:{backgroundColor:t.color()}}:{},[t.icon()?[E()(t.icon())," "]:null,t.namePlural()])},e.applyFilter=function(t,r){t.q=t.q?t.q+" ":"",t.q+="group:"+r.id()},e.initializeFromParams=function(t){if(!t.q)return Promise.resolve([]);var r=" "+t.q+" ",e=[];return s().store.all("groups").forEach((function(t){-1!==r.indexOf("group:"+t.id())&&e.push(t)})),Promise.resolve(e)},r}(et),it=function(t){function r(){return t.apply(this,arguments)||this}d(r,t);var e=r.prototype;return e.oninit=function(r){var e=this;t.prototype.oninit.call(this,r),this.searchIndex=0,this.navigator=new($()),this.navigator.when((function(t){return"Tab"!==t.key||!!e.filter})).onUp((function(){e.searchIndex>0&&(e.searchIndex--,m.redraw())})).onDown((function(){e.searchIndex<e.allSuggestions().length-1&&(e.searchIndex++,m.redraw())})).onSelect((function(){e.filter?(e.selectResult(e.allSuggestions()[e.searchIndex]),m.redraw()):e.applyFiltering()})).onRemove((function(){e.appliedFilters.pop()})),this.availableFilters=this.filterTypes().toArray(),this.appliedFilters=[],this.filter="",this.focused=!1,this.availableFilters.forEach((function(t){t.initializeFromParams({sort:m.route.param("sort"),q:m.route.param("q")}).then((function(t){var r;(r=e.appliedFilters).push.apply(r,t),m.redraw()}))}))},e.view=function(){var t=this,r=this.allSuggestions(),e=this.availableFilters.some((function(t){return t.loading}));return m("div",{className:"Form-group Usersearchbox"},m("div",{className:"UserDirectorySearchInput FormControl "+(this.focused?"focus":"")},m("span",{className:"UserDirectorySearchInput-selected"},this.appliedFilters.map((function(r,e){return m("span",{className:"UserDirectorySearchInput-filter",onclick:function(){t.appliedFilters.splice(e,1),t.applyFiltering()},title:t.searchResultKind(r)},t.recipientLabel(r))}))),m("input",{className:"FormControl",placeholder:s().translator.trans("fof-user-directory.forum.search.field.placeholder"),value:this.filter,oninput:Y()("value",(function(r){t.filter=r,t.performNewSearch()})),onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){t.focused=!0},onblur:function(){t.focused=!1}}),e&&m(B(),null),!!r.length&&m("ul",{className:"Dropdown-menu"},r.map((function(r,e){return m("li",{className:t.searchIndex===e?"active":"",onclick:function(){t.selectResult(r),t.applyFiltering()}},m("button",{type:"button"},m("span",{className:"UserDirectorySearchKind"},t.searchResultKind(r)),t.recipientLabel(r)))})))))},e.filterTypes=function(){var t=new(rt());return t.add("text",new ot,10),t.add("group",new at,20),t},e.filterForResource=function(t){return this.availableFilters.find((function(r){return r.resourceType()===t.data.type}))},e.recipientLabel=function(t){var r=this.filterForResource(t);return r?r.renderLabel(t):"[unknown]"},e.searchResultKind=function(t){var r=this.filterForResource(t);return r?r.renderKind(t):"[unknown]"},e.selectResult=function(t){t&&(this.appliedFilters.push(t),this.clearSuggestions())},e.clearSuggestions=function(){this.filter="",this.availableFilters.forEach((function(t){t.search("")}))},e.allSuggestions=function(){var t;return(t=[]).concat.apply(t,this.availableFilters.map((function(t){return t.suggestions})))},e.performNewSearch=function(){var t=this;this.searchIndex=0,this.availableFilters.forEach((function(r){r.search(t.filter)})),this.attrs.state.refreshParams(p({},this.attrs.state.getParams(),{qBuilder:this.qBuilder()}))},e.qBuilder=function(t){var r=this;return void 0===t&&(t={}),this.appliedFilters.forEach((function(e){var o=r.filterForResource(e);o?o.applyFilter(t,e):console.warn("Cannot find filter class for resource",e)})),{filter:this.filter+" "+(t.q||"")}},e.applyFiltering=function(){var t={sort:m.route.param("sort")};this.qBuilder(t),m.route.set(s().route("fof_user_directory",t))},r}(k());const ut=flarum.core.compat["common/components/Separator"];var ct=t.n(ut),lt=function(t){function r(){return t.apply(this,arguments)||this}d(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.state=new V({}),this.state.refreshParams(s().search.params()),this.bodyClass="User--directory";var e,o,n=[];this.params().q&&Array.from(this.params().q.matchAll(/group:([\d,]+)/g)).forEach((function(t){n.push(t[1])})),this.enabledGroupFilters=n.join(",").split(",").filter((function(t){return t})),this.enabledSpecialGroupFilters=[],s().initializers.has("flarum-suspend")&&s().forum.attribute("hasSuspendPermission")&&null!=(e=this.params())&&null!=(o=e.q)&&o.includes("is:suspended")&&(this.enabledSpecialGroupFilters["flarum-suspend"]="is:suspended"),s().history.push("users",s().translator.trans("fof-user-directory.forum.header.back_to_user_directory_tooltip"))},e.view=function(){return m("div",{className:"IndexPage"},P().prototype.hero(),m("div",{className:"container"},m("div",{className:"sideNavContainer"},m("nav",{className:"IndexPage-nav sideNav"},m("ul",null,F()(this.sidebarItems().toArray()))),m("div",{className:"IndexPage-results sideNavOffset"},m("div",{className:"IndexPage-toolbar"},m("ul",{className:"IndexPage-toolbar-view"},F()(this.viewItems().toArray())),m("ul",{className:"IndexPage-toolbar-action"},F()(this.actionItems().toArray()))),m(J,{state:this.state})))))},e.sidebarItems=function(){var t=P().prototype.sidebarItems();return t.setContent("nav",_().component({buttonClassName:"Button",className:"App-titleControl"},this.navItems().toArray())),t},e.navItems=function(){var t=P().prototype.navItems(),r=this.stickyParams();return t.add("fof-user-directory",u().component({href:s().route("fof_user_directory",r),icon:"far fa-address-book"},s().translator.trans("fof-user-directory.forum.page.nav")),85),t},e.viewItems=function(){var t=new(g()),r=this.state.sortMap(),e={};for(var o in r)e[o]=s().translator.trans("fof-user-directory.lib.sort."+o);return t.add("sort",q().component({options:e,value:this.state.getParams().sort||s().forum.attribute("userDirectoryDefaultSort"),onchange:this.changeParams.bind(this)}),100),t.add("filterGroups",C().component({caretIcon:"fas fa-filter",label:s().translator.trans("fof-user-directory.forum.page.filter_button"),buttonClassName:"FormControl",className:"GroupFilterDropdown"},this.groupItems().toArray()),80),t.add("search",it.component({state:this.state}),60),t},e.groupItems=function(){var t=this,r=new(g());return s().store.all("groups").filter((function(t){return"2"!==t.id()&&"3"!==t.id()})).forEach((function(e){r.add(e.namePlural(),W.component({className:"GroupFilterButton",icon:e.icon(),checked:t.enabledGroupFilters.includes(e.id()),onclick:function(){var r=e.id();t.enabledGroupFilters.includes(r)?t.enabledGroupFilters=t.enabledGroupFilters.filter((function(t){return t!=r})):(t.enabledGroupFilters.push(r),t.enabledSpecialGroupFilters=[]),t.changeParams(t.params().sort)}},e.namePlural()))})),s().initializers.has("flarum-suspend")&&s().forum.attribute("hasSuspendPermission")&&(r.add("suspend",W.component({className:"GroupFilterButton",icon:"fas fa-ban",checked:"is:suspended"===this.enabledSpecialGroupFilters["flarum-suspend"],onclick:function(){var r="flarum-suspend";"is:suspended"===t.enabledSpecialGroupFilters[r]?t.enabledSpecialGroupFilters[r]="":(t.enabledSpecialGroupFilters[r]="is:suspended",t.enabledGroupFilters=[]),t.changeParams(t.params().sort)}},s().translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")),90),r.add("seperator",ct().component(),50)),r},e.actionItems=function(){var t=this,r=new(g());return r.add("refresh",x().component({title:s().translator.trans("fof-user-directory.forum.page.refresh_tooltip"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){t.state.refresh(),s().session.user&&(s().store.find("users",s().session.user.id()),m.redraw())}})),r},e.changeParams=function(t){var r=this.params();t===s().forum.attribute("userDirectoryDefaultSort")?delete r.sort:r.sort=t;var e="";for(var o in this.enabledSpecialGroupFilters)e+=this.enabledSpecialGroupFilters[o]+" ";if(this.enabledGroupFilters.length>0){var n=this.enabledGroupFilters.reduce((function(t,r){return t+(t?" ":"")+"group:"+r}),"");r.qBuilder={groups:n}}else r.qBuilder={groups:"",q:e.trim()};this.state.refreshParams(r);var a=p({},r);delete a.qBuilder,m.route.set(s().route("fof_user_directory",a))},e.stickyParams=function(){return{sort:m.route.param("sort"),q:m.route.param("q")}},e.params=function(){return this.stickyParams()},r}(y());const mt=flarum.core.compat["common/Model"];var pt=t.n(mt),ft=function(t){function r(){for(var r,e=arguments.length,o=new Array(e),s=0;s<e;s++)o[s]=arguments[s];return(r=t.call.apply(t,[this].concat(o))||this).text=pt().attribute("text"),r}return d(r,t),r}(pt()),dt={CheckableButton:W,SearchField:it,SmallUserCard:M,UserDirectoryList:J,UserDirectoryListItem:H,UserDirectoryPage:lt,UserDirectoryUserCard:K},ht={AbstractType:et,GroupFilter:at,TextFilter:ot};s().initializers.add("fof-user-directory",(function(t){t.routes.fof_user_directory={path:"/users",component:lt},t.store.models["fof-user-directory-text"]=ft,(0,e.extend)(a().prototype,"view",(function(r,e){r&&!t.forum.attribute("userDirectoryDisableGlobalSearchSource")&&(e=e.toLowerCase(),r.splice(1,0,m("li",u().component({href:t.route("fof_user_directory",{q:e}),icon:"fas fa-search"},t.translator.trans("fof-user-directory.forum.search.users_heading",{query:e})))))})),(0,e.extend)(l().prototype,"navItems",(function(r){t.forum.attribute("canSeeUserDirectoryLink")&&r.add("fof-user-directory",u().component({href:t.route("fof_user_directory"),icon:"far fa-address-book"},t.translator.trans("fof-user-directory.forum.page.nav")),85)}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map