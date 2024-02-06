(()=>{var e=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={};(()=>{"use strict";e(t),flarum.core.compat.extend,app.initializers.add("ziven-checkin",(function(){app.extensionData.for("ziiven-daily-check-in").registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("ziven-checkin.admin.settings.reward-money")),m("div",{class:"helpText"},app.translator.trans("ziven-checkin.admin.settings.reward-money-requirement")),m("input",{type:"number",className:"FormControl",step:"any",bidi:this.setting("ziven-forum-checkin.checkinRewardMoney")}))})).registerSetting({setting:"ziven-forum-checkin.checkinTimeZone",label:app.translator.trans("ziven-checkin.admin.settings.timezone"),type:"number"}).registerSetting({setting:"ziven-forum-checkin.autoCheckIn",label:app.translator.trans("ziven-checkin.admin.settings.auto-check-in"),type:"switch"}).registerSetting({setting:"ziven-forum-checkin.autoCheckInDelay",label:app.translator.trans("ziven-checkin.admin.settings.auto-check-in-delay"),type:"number"}).registerSetting({setting:"ziven-forum-checkin.checkinSuccessPromptType",label:app.translator.trans("ziven-checkin.admin.settings.check-in-success-prompt-type"),type:"select",options:{0:app.translator.trans("ziven-checkin.admin.settings.None"),1:app.translator.trans("ziven-checkin.admin.settings.Alert"),2:app.translator.trans("ziven-checkin.admin.settings.Modal")}}).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("ziven-checkin.admin.settings.check-in-success-prompt-text")),m("div",{class:"helpText"},app.translator.trans("ziven-checkin.admin.settings.check-in-success-prompt-example-text")),m("input",{type:"string",className:"FormControl",step:"any",bidi:this.setting("ziven-forum-checkin.checkinSuccessPromptText")}))})).registerSetting((function(){return m("div",{className:"Form-group"},m("label",null,app.translator.trans("ziven-checkin.admin.settings.check-in-success-prompt-reward-text")),m("div",{class:"helpText"},app.translator.trans("ziven-checkin.admin.settings.reward-money-requirement")),m("div",{class:"helpText"},app.translator.trans("ziven-checkin.admin.settings.check-in-success-prompt-example-reward-text")),m("input",{type:"string",className:"FormControl",step:"any",bidi:this.setting("ziven-forum-checkin.checkinSuccessPromptRewardText")}))})).registerPermission({icon:"fas fa-id-card",label:app.translator.trans("ziven-checkin.admin.settings.allow-check-in"),permission:"checkin.allowCheckIn"},"moderate",90)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map