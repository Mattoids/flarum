(()=>{var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const a=flarum.core.compat["common/extend"],n=flarum.core.compat["admin/components/BasicsPage"];var s=t.n(n);const o=flarum.core.compat["admin/components/PermissionGrid"];var l=t.n(o);function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}const d=flarum.core.compat["admin/app"];var g=t.n(d);const c=flarum.core.compat["admin/components/ExtensionPage"];var u=t.n(c);const p=flarum.core.compat["admin/utils/saveSettings"];var b=t.n(p);const h=flarum.core.compat["common/components/Alert"];var v=t.n(h);const _=flarum.core.compat["common/components/Button"];var f=t.n(_);const y=flarum.core.compat["common/components/FieldSet"];var x=t.n(y);const C=flarum.core.compat["common/components/Switch"];var w=t.n(C);const N=flarum.core.compat["common/components/Modal"];var P=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.blogCategoriesOriginal=app.data.settings.blog_tags?app.data.settings.blog_tags.split("|"):[],this.blogCategories=app.data.settings.blog_tags?app.data.settings.blog_tags.split("|"):[],this.isSaving=!1,this.hasChanges=!1},a.title=function(){return"Select blog categories"},a.className=function(){return"Modal modal-dialog FlarumBlog-TagsModal"},a.content=function(){var t=this;return m("div",null,m("div",{className:"Modal-body"},m("p",null,"Please select one or more tags that are considered blog tags."," ",m("a",{href:app.forum.attribute("baseUrl")+"/blog",target:"_blank"},"Visit your blog.")),m("table",{className:"FlarumBlog-TagsTable"},m("thead",null,m("th",{width:"35"}),m("th",null,"Tag name"),m("th",{width:"50"})),m("tbody",null,0===app.store.all("tags").length&&m("tr",null,m("td",{colspan:"3"},"You currently have no tags.")),app.store.all("tags").map((function(e){if(!e.parent()){var a=function(){var a=t.blogCategories.indexOf(e.id());t.hasChanges=!0,a>=0?t.blogCategories.splice(a,1):t.blogCategories.push(e.id())};return m("tr",null,m("td",null,m("i",{className:e.icon()})),m("td",{onclick:a},e.name()),m("td",null,m(w(),{state:t.blogCategories.indexOf(e.id())>=0,onchange:a})))}}))))),m("div",{style:"padding: 25px 30px; text-align: center;"},m(f(),{type:"submit",className:"Button Button--primary",loading:this.loading},this.hasChanges?"Save changes":"Close")))},a.onsubmit=function(t){var e=this;if(t.preventDefault(),this.hasChanges){this.isSaving=!0;var a=[];this.blogCategories.map((function(t){app.store.getById("tags",t)&&a.push(t)})),b()({blog_tags:a.join("|")}).then((function(){app.alerts.show(v(),{type:"success"},app.translator.trans("core.admin.settings.saved_message")),e.hide()})).catch((function(){app.alerts.show(v(),{type:"error"},app.translator.trans("core.lib.error.generic_message"))})).then((function(){e.isSaving=!1}))}else this.hide()},e}(t.n(N)());const E=flarum.core.compat["admin/components/UploadImageButton"];var S=t.n(E),O=function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var a=e.prototype;return a.oninit=function(e){var a,n,s,o,l,r,i,d,m;t.prototype.oninit.call(this,e),this.hasChanges=!1,this.isSaving=!1,this.redirectsEnabled=null!=(a=g().data.settings.blog_redirects_enabled)?a:"both",this.hideTagsInList=null==(n=g().data.settings.blog_hide_tags)||n,this.allowComments=null==(s=g().data.settings.blog_allow_comments)||s,this.hideOnDiscussionList=null!=(o=g().data.settings.blog_filter_discussion_list)&&o,this.requiresReviewOnPost=null!=(l=g().data.settings.blog_requires_review)&&l,this.addCategoryHierarchy=null==(r=g().data.settings.blog_category_hierarchy)||r,this.addSidebarNav=null==(i=g().data.settings.blog_add_sidebar_nav)||i,this.featuredCount=null!=(d=g().data.settings.blog_featured_count)?d:3,this.blogAddHero=null==(m=g().data.settings.blog_add_hero)||m,g().forum.data.attributes.blog_default_imageUrl=g().forum.attribute("baseUrl")+"/assets/"+g().data.settings.blog_default_image_path},a.content=function(){var t=this,e=g().data.settings.blog_tags?g().data.settings.blog_tags.split("|").length:0;return m("div",{className:"BasicsPage FlarumBlog"},m("div",{className:"container"},m("div",{className:"FlarumBlog-SelectCategories"},0===e?g().translator.trans("v17development-flarum-blog.admin.settings.no_categories_selected"):g().translator.trans("v17development-flarum-blog.admin.settings.selected_category_count",{count:e}),m(f(),{className:"Button",onclick:function(){return g().modal.show(P)}},g().translator.trans("v17development-flarum-blog.admin.settings.select_categories_button"))),x().component({label:g().translator.trans("v17development-flarum-blog.admin.settings.blog_heading")},[w().component({state:1==this.allowComments,onchange:function(e){t.allowComments=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.allow_comments_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.allow_comments_text"))]),w().component({state:1==this.requiresReviewOnPost,onchange:function(e){t.requiresReviewOnPost=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.require_review_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.require_review_text"))]),w().component({state:1==this.hideOnDiscussionList,onchange:function(e){t.hideOnDiscussionList=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.hide_on_discussion_list_text"))]),w().component({state:1==this.addSidebarNav,onchange:function(e){t.addSidebarNav=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.add_sidebar_nav_text"))]),w().component({state:1==this.blogAddHero,onchange:function(e){t.blogAddHero=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.add_hero_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.add_hero_text"))]),m("div",{className:"Form-group"},m("label",null,g().translator.trans("v17development-flarum-blog.admin.settings.featured_count_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.featured_count_text")),m("input",{class:"FormControl",value:this.featuredCount,oninput:function(e){t.featuredCount=e.target.value,t.hasChanges=!0},placeholder:"3",type:"number"}))]),x().component({label:g().translator.trans("v17development-flarum-blog.admin.settings.categories_heading")},[w().component({state:1==this.hideTagsInList,onchange:function(e){t.hideTagsInList=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.hide_tags_in_taglist_text"))]),w().component({state:1==this.addCategoryHierarchy,onchange:function(e){t.addCategoryHierarchy=e,t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.show_tag_hierarchy_text"))])]),x().component({label:g().translator.trans("v17development-flarum-blog.admin.settings.redirects_heading")},[w().component({state:"both"===this.redirectsEnabled||"discussions_only"===this.redirectsEnabled,onchange:function(e){e?"tags_only"===t.redirectsEnabled?t.redirectsEnabled="both":"none"===t.redirectsEnabled&&(t.redirectsEnabled="discussions_only"):"discussions_only"===t.redirectsEnabled?t.redirectsEnabled="none":t.redirectsEnabled="tags_only",t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.redirect_articles_text"))]),w().component({state:"both"===this.redirectsEnabled||"tags_only"===this.redirectsEnabled,onchange:function(e){e?"discussions_only"===t.redirectsEnabled?t.redirectsEnabled="both":"none"===t.redirectsEnabled&&(t.redirectsEnabled="tags_only"):"tags_only"===t.redirectsEnabled?t.redirectsEnabled="none":t.redirectsEnabled="discussions_only",t.hasChanges=!0}},[m("b",null,g().translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_label")),m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.redirect_tags_text"))])]),x().component({label:g().translator.trans("v17development-flarum-blog.admin.settings.default_article_image_label")},[m("div",{className:"helpText"},g().translator.trans("v17development-flarum-blog.admin.settings.default_article_image_text")),S().component({name:"blog_default_image"})]),m(f(),{loading:this.isSaving,className:"Button Button--primary",onclick:function(){return t.save()},disabled:!this.hasChanges},g().translator.trans("core.admin.settings.submit_button"))))},a.save=function(){var t=this;this.isSaving=!0,b()({blog_add_sidebar_nav:this.addSidebarNav,blog_redirects_enabled:this.redirectsEnabled,blog_hide_tags:this.hideTagsInList,blog_requires_review:this.requiresReviewOnPost,blog_allow_comments:this.allowComments,blog_category_hierarchy:this.addCategoryHierarchy,blog_filter_discussion_list:this.hideOnDiscussionList,blog_featured_count:this.featuredCount,blog_add_hero:this.blogAddHero}).then((function(){t.hasChanges=!1,g().alerts.show(v(),{type:"success"},g().translator.trans("core.admin.settings.saved_message"))})).catch((function(){})).then((function(){t.isSaving=!1,m.redraw()}))},e}(u());app.initializers.add("v17development-flarum-blog",(function(){app.extensionData.for("v17development-blog").registerPage(O),app.extensionData.for("v17development-blog").registerPermission({icon:"fas fa-pencil-alt",label:app.translator.trans("v17development-flarum-blog.admin.permissions.write_articles"),permission:"blog.writeArticles"},"blog",90).registerPermission({icon:"far fa-star",label:app.translator.trans("v17development-flarum-blog.admin.permissions.auto_approve_posts"),permission:"blog.autoApprovePosts"},"blog",90).registerPermission({icon:"far fa-thumbs-up",label:app.translator.trans("v17development-flarum-blog.admin.permissions.approve_posts"),permission:"blog.canApprovePosts"},"blog",90),(0,a.extend)(l().prototype,"permissionItems",(function(t){t.add("blog",{label:app.translator.trans("v17development-flarum-blog.admin.blog"),children:this.attrs.extensionId?app.extensionData.getExtensionPermissions(this.extensionId,"blog").toArray():app.extensionData.getAllExtensionPermissions("blog").toArray()},80)})),(0,a.extend)(s().prototype,"homePageItems",(function(t){t.add("blog",{path:"/blog",label:app.translator.trans("v17development-flarum-blog.admin.blog")})}))}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map