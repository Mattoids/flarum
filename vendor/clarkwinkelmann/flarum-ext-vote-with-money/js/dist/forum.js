(()=>{var t={n:o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return t.d(e,{a:e}),e},d:(o,e)=>{for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const e=flarum.core.compat["common/extend"],n=flarum.core.compat["forum/app"];var r=t.n(n);const a=flarum.core.compat["common/components/Switch"];var i=t.n(a);const l=flarum.core.compat["common/Model"];var s=t.n(l);const u=flarum.core.compat["common/utils/withAttr"];var c=t.n(u);function p(t,o){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},p(t,o)}function y(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,p(t,o)}const h=flarum.core.compat["common/Component"];var d=function(t){function o(){return t.apply(this,arguments)||this}return y(o,t),o.prototype.view=function(){var t=r().forum.attribute("antoinefr-money.moneyname")||"[money]";return m("span",t.replace("[money]",this.attrs.money+""))},o}(t.n(h)());const f=flarum.core.compat["common/components/Modal"];var v=t.n(f);const M=flarum.core.compat["common/components/Button"];var b=t.n(M),w=function(t){function o(){for(var o,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(o=t.call.apply(t,[this].concat(n))||this).preselectAmount=0,o.customAmount=!1,o.customAmountValue="",o}y(o,t);var e=o.prototype;return e.oninit=function(o){t.prototype.oninit.call(this,o),0===(r().forum.attribute("moneyVotePreselection")||[]).length&&(this.customAmount=!0)},e.className=function(){return"MoneyPollVoteModal Modal--small"},e.title=function(){return r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.title")},e.content=function(){var t=this,o=r().forum.attribute("moneyVotePreselection")||[];return m(".Modal-body",[m(".Form-group",[r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.target",{answer:this.attrs.option.attribute("answer")})]),o.length>0?m(".Form-group",[o.map((function(o,e){return m("label",[m("input",{type:"radio",name:"vote-with-money-preselection",checked:t.preselectAmount===e&&!t.customAmount,onchange:function(){t.preselectAmount=e,t.customAmount=!1}})," ",d.component({money:o})])})),m("label",[m("input",{type:"radio",name:"vote-with-money-preselection",checked:this.customAmount,onchange:function(){t.customAmount=!0}})," ",r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.optionCustom")])]):null,this.customAmount?m(".Form-group",[m("label",r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.label.custom")),m("input.FormControl",{type:"number",value:this.customAmountValue,onchange:function(o){t.customAmountValue=o.target.value},min:this.attrs.poll.attribute("moneyVoteMin"),max:this.attrs.poll.attribute("moneyVoteMax")||void 0,step:1})]):"",m(".Form-group",[r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.balance",{amount:d.component({money:r().session.user.attribute("money")})})]),m(".Form-group",b().component({type:"submit",className:"Button Button--primary",loading:this.loading},r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.submit")))])},e.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,r().request({method:"PATCH",url:r().forum.attribute("apiUrl")+"/fof/polls/"+this.attrs.poll.id()+"/vote",errorHandler:this.onerror.bind(this),body:{data:{optionId:this.attrs.option.id(),amountPledged:this.customAmount?this.customAmountValue:r().forum.attribute("moneyVotePreselection")[this.preselectAmount]}}}).then((function(t){r().store.pushPayload(t),o.hide(),o.attrs.onsubmit()})).catch((function(){o.loading=!1,m.redraw()}))},o}(v());r().initializers.add("clarkwinkelmann-vote-with-money",(function(){var t=flarum.extensions["fof-polls"].components;function o(t){null!==t&&(t.voteWithMoney=this.voteWithMoney,t.moneyVoteMin=""===this.moneyVoteMin?null:this.moneyVoteMin,t.moneyVoteMax=""===this.moneyVoteMax?null:this.moneyVoteMax)}(0,e.override)(t.DiscussionPoll.prototype,"changeVote",(function(t,o,e){var n=this;if(!r().session.user||!this.poll.attribute("voteWithMoney"))return t(o,e);r().modal.show(w,{poll:this.poll,option:o,onsubmit:function(){n.updateData(),m.redraw(),r().alerts.show({type:"success"},r().translator.trans("clarkwinkelmann-vote-with-money.forum.vote.success"))}}),e.target.checked=!1})),(0,e.extend)(t.CreatePollModal.prototype,"oninit",(function(t){var o=this.attrs.poll;o&&(o instanceof s()?(this.voteWithMoney=o.attribute("voteWithMoney"),this.moneyVoteMin=o.attribute("moneyVoteMin")+"",this.moneyVoteMax=o.attribute("moneyVoteMax")+""):(this.voteWithMoney=o.voteWithMoney,this.moneyVoteMin=o.moneyVoteMin+"",this.moneyVoteMax=o.moneyVoteMax+"")),this.moneyVoteMin||"0"===this.moneyVoteMin||(this.moneyVoteMin=""),this.moneyVoteMax||"0"===this.moneyVoteMax||(this.moneyVoteMax="")})),(0,e.extend)(t.CreatePollModal.prototype,"fields",(function(t){var o=this;t.add("vote-with-money",m(".Form-group",i().component({state:!!this.voteWithMoney,onchange:function(t){o.voteWithMoney=t}},r().translator.trans("clarkwinkelmann-vote-with-money.forum.poll.voteWithMoney")))),this.voteWithMoney&&(t.add("vote-with-money-min",m(".Form-group",[m("label.label",r().translator.trans("clarkwinkelmann-vote-with-money.forum.poll.min")),m("input.FormControl",{type:"number",min:0,step:1,value:this.moneyVoteMin,onchange:c()("value",(function(t){o.moneyVoteMin=t}))})])),t.add("vote-with-money-max",m(".Form-group",[m("label.label",r().translator.trans("clarkwinkelmann-vote-with-money.forum.poll.max")),m("input.FormControl",{type:"number",min:0,step:1,value:this.moneyVoteMax,onchange:c()("value",(function(t){o.moneyVoteMax=t}))})])))})),(0,e.extend)(t.CreatePollModal.prototype,"data",o),(0,e.extend)(t.EditPollModal.prototype,"data",o),(0,e.override)(t.ListVotersModal.prototype,"className",(function(t){var o=t();return this.attrs.poll.attribute("voteWithMoney")&&(o+=" VotesModal--withMoneyPledges"),o})),(0,e.extend)(t.ListVotersModal.prototype,"voteContent",(function(t,o){this.attrs.poll.attribute("voteWithMoney")&&t.children.push(m("span.moneyPledged",d.component({money:o.attribute("moneyPledged")||0})))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map