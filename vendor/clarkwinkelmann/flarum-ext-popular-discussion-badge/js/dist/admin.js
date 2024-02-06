(()=>{var t={n:n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};(()=>{"use strict";t.r(n);const e=flarum.core.compat["admin/app"];var r=t.n(e);const o=flarum.core.compat["common/components/Button"];var s=t.n(o);const a=flarum.core.compat["common/components/Select"];var l=t.n(a),i="clarkwinkelmann-popular-discussion-badge.",u="clarkwinkelmann-popular-discussion-badge.admin.settings.";r().initializers.add("clarkwinkelmann-popular-discussion-badge",(function(){r().extensionData.for("clarkwinkelmann-popular-discussion-badge").registerSetting((function(){var t,n=this;try{t=JSON.parse(this.setting(i+"conditions")())}catch(t){}return Array.isArray(t)||(t=[{comments:null,views:null}]),[m(".Form-group",[m("label",r().translator.trans(u+"mode")),l().component({options:{frontend:r().translator.trans(u+"mode_options.frontend"),scheduler:r().translator.trans(u+"mode_options.scheduler")},value:this.setting(i+"mode")()||"frontend",onchange:this.setting(i+"mode")}),m("p.helpText",r().translator.trans(u+"mode_help"))]),m(".Form-group",[m("label",r().translator.trans(u+"scheduler_frequency")),l().component({options:{everyFiveMinutes:r().translator.trans(u+"scheduler_frequency_options.everyFiveMinutes"),everyTenMinutes:r().translator.trans(u+"scheduler_frequency_options.everyTenMinutes"),everyFifteenMinutes:r().translator.trans(u+"scheduler_frequency_options.everyFifteenMinutes"),everyThirtyMinutes:r().translator.trans(u+"scheduler_frequency_options.everyThirtyMinutes"),hourly:r().translator.trans(u+"scheduler_frequency_options.hourly")},value:this.setting(i+"scheduler_frequency")()||"hourly",onchange:this.setting(i+"scheduler_frequency"),disabled:"scheduler"!==this.setting(i+"mode")()}),m("p.helpText",r().translator.trans(u+"scheduler_frequency_help"))]),m(".Form-group",[m("label",r().translator.trans(u+"conditions")),m("table",[m("tbody",[t.map((function(e,o){return m("tr",[m("td",0===o?null:m("strong",r().translator.trans(u+"or"))),m("td",[m("label",[r().translator.trans(u+"comments")," >= "]),m("input.FormControl",{type:"number",step:1,min:0,value:e.comments||"",onchange:function(r){e.comments=r.target.value?parseInt(r.target.value):null,n.setting(i+"conditions")(JSON.stringify(t))},placeholder:r().translator.trans(u+"comments_placeholder")}),m("label",[" ",r().translator.trans(u+"within")," "]),m("input.FormControl",{type:"number",step:1,min:0,value:e.comments_within_hours||"",onchange:function(r){e.comments_within_hours=r.target.value?parseInt(r.target.value):null,n.setting(i+"conditions")(JSON.stringify(t))},placeholder:r().translator.trans(u+"within_placeholder"),disabled:"scheduler"!==n.setting(i+"mode")()}),m("label",[" ",r().translator.trans(u+"hours")])]),m("td",m("strong",r().translator.trans(u+"and"))),m("td",[m("label",[r().translator.trans(u+"views")," >= "]),m("input.FormControl",{type:"number",step:1,min:0,value:e.views||"",onchange:function(r){e.views=r.target.value?parseInt(r.target.value):null,n.setting(i+"conditions")(JSON.stringify(t))},placeholder:r().translator.trans(u+"views_placeholder")}),m("label",[" ",r().translator.trans(u+"within")," "]),m("input.FormControl",{type:"number",step:1,min:0,value:e.views_within_hours||"",onchange:function(r){e.views_within_hours=r.target.value?parseInt(r.target.value):null,n.setting(i+"conditions")(JSON.stringify(t))},placeholder:r().translator.trans(u+"within_placeholder"),disabled:"scheduler"!==n.setting(i+"mode")()}),m("label",[" ",r().translator.trans(u+"hours")])]),m("td",t.length>1?s().component({className:"Button Button--icon",icon:"fas fa-times",onclick:function(){t.splice(o,1),n.setting(i+"conditions")(JSON.stringify(t))}}):null)])})),m("tr",m("td",{colspan:5},s().component({className:"Button Button--block",onclick:function(){t.push({comments:null,views:null}),n.setting(i+"conditions")(JSON.stringify(t))}},r().translator.trans(u+"add"))))])]),m("p.helpText",r().translator.trans(u+"conditions_help"))])]}))}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map