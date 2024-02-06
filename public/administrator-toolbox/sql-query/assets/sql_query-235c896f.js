import"./modulepreload-polyfill-3cfb730f.js";import{f as i}from"./config-87c9063f.js";class p{constructor(e){this.doc=document,this.element=e,this.element.controller=this,this.sql_data}render(e){this.sql_data=e;const t=document.createDocumentFragment();for(let n of e.params){const o=this.create_one_line_li_element(n);t.append(o)}this.element.replaceChildren(t)}create_one_line_li_element(e){const t=this.doc.createElement("li");t.dataset.dataType=e.type,t.elements={};const n=this.doc.createElement("span");n.textContent=e.key,t.append(n),t.elements.span_name=n;const o=this.doc.createElement("input");o.type="text",o.placeholder="value",t.append(o),t.elements.input=o;const a=this.doc.createElement("span");return a.textContent=e.note,t.append(a),t.elements.span_note=a,t}get_one_param_data_from_li(e){const t=e.elements.span_name.textContent;let n=e.elements.input.value;const o=e.dataset.dataType;let a;switch(o){case"string":a=n;break;case"int":a=parseInt(n);break}return{key:t,value:a}}get_query_name_and_params(){const e={name:this.sql_data.name,params:[]},t=this.element.querySelectorAll("li");for(const n of t){const o=this.get_one_param_data_from_li(n);e.params.push(o)}return e}}class u{constructor(e){this.doc=document,this.element=e,this.element.controller=this,this.total_sql_data_list,this.init()}async init(){this.total_sql_data_list=await this.get_sql_data_list(),this.render()}async get_sql_data_list(){return await(await i("../php/get_sql_data_list.php")).json()}render(){const e=document.createDocumentFragment();for(let t of this.total_sql_data_list){const n=this.create_one_line_li_element(t);e.append(n)}this.element.replaceChildren(e)}create_one_line_li_element(e){const t=this.doc.createElement("li"),n=this.doc.createElement("button");return n.textContent=e.name,n.dataset.name=e.name,n.sql_data=e,t.append(n),t}get_data(){return{key:this.element_name.value,type:this.element_type.value,note:this.element_description.value}}}function h(s){const e=document.createElement("table"),n=e.createTHead().insertRow(),o=s[0];if(!o)return 0;const a=Object.entries(o);for(const[c]of a){const r=n.insertCell();r.textContent=c}const l=e.createTBody();for(const c of s){const r=l.insertRow(),_=Object.entries(c);for(const[b,d]of _){const m=r.insertCell();m.textContent=d}}document.querySelector("table").replaceWith(e)}async function f(){const e=document.querySelector("#params").controller.get_query_name_and_params(),t=JSON.stringify(e,null,"	"),a=await i("../php/sql_execution.php",{method:"POST",body:t});if(!a.ok)return console.log("查询出错"),0;const l=await a.json();console.log("查询结果如下"),console.log(l),h(l)}function y(s,e,t){if(s.target.tagName!=="BUTTON")return 0;const n=s.target.sql_data;e.textContent=n.note,t.render(n)}function g(s){if(s.target.tagName!=="BUTTON")return 0;if(s.target.dataset.name==="执行查询")return f(),0}function q(){const s=new u(document.querySelector("#function_list")),e=document.querySelector("div#descript"),t=document.querySelector("#params"),n=new p(t);document.querySelector("#pannel").addEventListener("click",a=>g(a)),s.element.addEventListener("click",a=>y(a,e,n))}q();
