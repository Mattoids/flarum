(()=>{var t={n:e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const o=flarum.core.compat["admin/app"];var r=t.n(o);r().initializers.add("fof-custom-footer",(function(){r().extensionData.for("fof-custom-footer").registerSetting({label:r().translator.trans("fof-custom-footer.admin.settings.text"),setting:"fof-custom-footer.text",type:"text"}).registerSetting({label:r().translator.trans("fof-custom-footer.admin.settings.height"),setting:"fof-custom-footer.height",placeholder:"50",type:"number",simple:"simple"}).registerSetting({label:r().translator.trans("fof-custom-footer.admin.settings.js"),setting:"fof-custom-footer.js",type:"text"})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map