(()=>{var e={n:o=>{var i=o&&o.__esModule?()=>o.default:()=>o;return e.d(i,{a:i}),i},d:(o,i)=>{for(var r in i)e.o(i,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:i[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};(()=>{"use strict";e.r(o);const i=flarum.core.compat["admin/app"];var r=e.n(i);r().initializers.add("fof-socialprfile",(function(){r().extensionData.for("fof-socialprofile").registerSetting({setting:"fof-socialprofile.allow_external_favicons",type:"switch",label:r().translator.trans("fof-socialprofile.admin.settings.allow_external_favicons_label")}).registerPermission({icon:"fas fa-globe",label:r().translator.trans("fof-socialprofile.admin.permissions.view"),permission:"fof-socialprofile.view",allowGuest:!0},"view").registerPermission({icon:"fas fa-globe",label:r().translator.trans("fof-socialprofile.admin.permissions.editOwn"),permission:"fof-socialprofile.editOwn"},"start").registerPermission({icon:"fas fa-globe",label:r().translator.trans("fof-socialprofile.admin.permissions.editAny"),permission:"fof-socialprofile.editAny"},"moderate")}))})(),module.exports=o})();
//# sourceMappingURL=admin.js.map