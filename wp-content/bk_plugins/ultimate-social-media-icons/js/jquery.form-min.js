(function(e){function t(){var e="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(e)}else if(window.opera&&window.opera.postError){window.opera.postError(e)}}e.fn.ajaxSubmit=function(n){function b(i){function S(e){var t=e.contentWindow?e.contentWindow.document:e.contentDocument?e.contentDocument:e.document;return t}function x(){function u(){try{var e=S(p).readyState;t("state = "+e);if(e.toLowerCase()=="uninitialized")setTimeout(u,50)}catch(n){t("Server abort: ",n," (",n.name,")");L(E);y&&clearTimeout(y);y=undefined}}var n=o.attr("target"),i=o.attr("action");s.setAttribute("target",c);if(!r){s.setAttribute("method","POST")}if(i!=f.url){s.setAttribute("action",f.url)}if(!f.skipEncodingOverride&&(!r||/post/i.test(r))){o.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(f.timeout){y=setTimeout(function(){g=true;L(w)},f.timeout)}var a=[];try{if(f.extraData){for(var l in f.extraData){a.push(e('<input type="hidden" name="'+l+'" />').attr("value",f.extraData[l]).appendTo(s)[0])}}if(!f.iframeTarget){h.appendTo("body");p.attachEvent?p.attachEvent("onload",L):p.addEventListener("load",L,false)}setTimeout(u,15);s.submit()}finally{s.setAttribute("action",i);if(n){s.setAttribute("target",n)}else{o.removeAttr("target")}e(a).remove()}}function L(n){if(d.aborted||k){return}try{N=S(p)}catch(r){t("cannot access response document: ",r);n=E}if(n===w&&d){d.abort("timeout");return}else if(n==E&&d){d.abort("server abort");return}if(!N||N.location.href==f.iframeSrc){if(!g)return}p.detachEvent?p.detachEvent("onload",L):p.removeEventListener("load",L,false);var i="success",s;try{if(g){throw"timeout"}var o=f.dataType=="xml"||N.XMLDocument||e.isXMLDoc(N);t("isXml="+o);if(!o&&window.opera&&(N.body==null||N.body.innerHTML=="")){if(--C){t("requeing onLoad callback, DOM not available");setTimeout(L,250);return}}var u=N.body?N.body:N.documentElement;d.responseText=u?u.innerHTML:null;d.responseXML=N.XMLDocument?N.XMLDocument:N;if(o)f.dataType="xml";d.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e]};if(u){d.status=Number(u.getAttribute("status"))||d.status;d.statusText=u.getAttribute("statusText")||d.statusText}var a=f.dataType||"";var c=/(json|script|text)/.test(a.toLowerCase());if(c||f.textarea){var v=N.getElementsByTagName("textarea")[0];if(v){d.responseText=v.value;d.status=Number(v.getAttribute("status"))||d.status;d.statusText=v.getAttribute("statusText")||d.statusText}else if(c){var m=N.getElementsByTagName("pre")[0];var b=N.getElementsByTagName("body")[0];if(m){d.responseText=m.textContent?m.textContent:m.innerHTML}else if(b){d.responseText=b.innerHTML}}}else if(f.dataType=="xml"&&!d.responseXML&&d.responseText!=null){d.responseXML=A(d.responseText)}try{T=M(d,f.dataType,f)}catch(n){i="parsererror";d.error=s=n||i}}catch(n){t("error caught: ",n);i="error";d.error=s=n||i}if(d.aborted){t("upload aborted");i=null}if(d.status){i=d.status>=200&&d.status<300||d.status===304?"success":"error"}if(i==="success"){f.success&&f.success.call(f.context,T,"success",d);l&&e.event.trigger("ajaxSuccess",[d,f])}else if(i){if(s==undefined)s=d.statusText;f.error&&f.error.call(f.context,d,i,s);l&&e.event.trigger("ajaxError",[d,f,s])}l&&e.event.trigger("ajaxComplete",[d,f]);if(l&&!--e.active){e.event.trigger("ajaxStop")}f.complete&&f.complete.call(f.context,d,i);k=true;if(f.timeout)clearTimeout(y);setTimeout(function(){if(!f.iframeTarget)h.remove();d.responseXML=null},100)}var s=o[0],u,a,f,l,c,h,p,d,v,m,g,y;var b=!!e.fn.prop;if(i){for(a=0;a<i.length;a++){u=e(s[i[a].name]);u[b?"prop":"attr"]("disabled",false)}}if(e(":input[name=submit],:input[id=submit]",s).length){alert('Error: Form elements must not have name or id of "submit".');return}f=e.extend(true,{},e.ajaxSettings,n);f.context=f.context||f;c="jqFormIO"+(new Date).getTime();if(f.iframeTarget){h=e(f.iframeTarget);m=h.attr("name");if(m==null)h.attr("name",c);else c=m}else{h=e('<iframe name="'+c+'" src="'+f.iframeSrc+'" />');h.css({position:"absolute",top:"-1000px",left:"-1000px"})}p=h[0];d={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(n){var r=n==="timeout"?"timeout":"aborted";t("aborting upload... "+r);this.aborted=1;h.attr("src",f.iframeSrc);d.error=r;f.error&&f.error.call(f.context,d,r,n);l&&e.event.trigger("ajaxError",[d,f,r]);f.complete&&f.complete.call(f.context,d,r)}};l=f.global;if(l&&!(e.active++)){e.event.trigger("ajaxStart")}if(l){e.event.trigger("ajaxSend",[d,f])}if(f.beforeSend&&f.beforeSend.call(f.context,d,f)===false){if(f.global){e.active--}return}if(d.aborted){return}v=s.clk;if(v){m=v.name;if(m&&!v.disabled){f.extraData=f.extraData||{};f.extraData[m]=v.value;if(v.type=="image"){f.extraData[m+".x"]=s.clk_x;f.extraData[m+".y"]=s.clk_y}}}var w=1;var E=2;if(f.forceSync){x()}else{setTimeout(x,10)}var T,N,C=50,k;var A=e.parseXML||function(e,t){if(window.ActiveXObject){t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(e)}else{t=(new DOMParser).parseFromString(e,"text/xml")}return t&&t.documentElement&&t.documentElement.nodeName!="parsererror"?t:null};var O=e.parseJSON||function(e){return window["eval"]("("+e+")")};var M=function(t,n,r){var i=t.getResponseHeader("content-type")||"",s=n==="xml"||!n&&i.indexOf("xml")>=0,o=s?t.responseXML:t.responseText;if(s&&o.documentElement.nodeName==="parsererror"){e.error&&e.error("parsererror")}if(r&&r.dataFilter){o=r.dataFilter(o,n)}if(typeof o==="string"){if(n==="json"||!n&&i.indexOf("json")>=0){o=O(o)}else if(n==="script"||!n&&i.indexOf("javascript")>=0){e.globalEval(o)}}return o}}if(!this.length){t("ajaxSubmit: skipping submit process - no element selected");return this}var r,i,s,o=this;if(typeof n=="function"){n={success:n}}r=this.attr("method");i=this.attr("action");s=typeof i==="string"?e.trim(i):"";s=s||window.location.href||"";if(s){s=(s.match(/^([^#]+)/)||[])[1]}n=e.extend(true,{url:s,success:e.ajaxSettings.success,type:r||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},n);var u={};this.trigger("form-pre-serialize",[this,n,u]);if(u.veto){t("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(n.beforeSerialize&&n.beforeSerialize(this,n)===false){t("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var a,f,l=this.formToArray(n.semantic);if(n.data){n.extraData=n.data;for(a in n.data){if(e.isArray(n.data[a])){for(var c in n.data[a]){l.push({name:a,value:n.data[a][c]})}}else{f=n.data[a];f=e.isFunction(f)?f():f;l.push({name:a,value:f})}}}if(n.beforeSubmit&&n.beforeSubmit(l,this,n)===false){t("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[l,this,n,u]);if(u.veto){t("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var h=e.param(l);if(n.type.toUpperCase()=="GET"){n.url+=(n.url.indexOf("?")>=0?"&":"?")+h;n.data=null}else{n.data=h}var p=[];if(n.resetForm){p.push(function(){o.resetForm()})}if(n.clearForm){p.push(function(){o.clearForm()})}if(!n.dataType&&n.target){var d=n.success||function(){};p.push(function(t){var r=n.replaceTarget?"replaceWith":"html";e(n.target)[r](t).each(d,arguments)})}else if(n.success){p.push(n.success)}n.success=function(e,t,r){var i=n.context||n;for(var s=0,u=p.length;s<u;s++){p[s].apply(i,[e,t,r||o,o])}};var v=e("input:file",this).length>0;var m="multipart/form-data";var g=o.attr("enctype")==m||o.attr("encoding")==m;if(n.iframe!==false&&(v||n.iframe||g)){if(n.closeKeepAlive){e.get(n.closeKeepAlive,function(){b(l)})}else{b(l)}}else{if(e.browser.msie&&r=="get"){var y=o[0].getAttribute("method");if(typeof y==="string")n.type=y}e.ajax(n)}this.trigger("form-submit-notify",[this,n]);return this};e.fn.ajaxForm=function(n){if(this.length===0){var r={s:this.selector,c:this.context};if(!e.isReady&&r.s){t("DOM not ready, queuing ajaxForm");e(function(){e(r.s,r.c).ajaxForm(n)});return this}t("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)"));return this}return this.ajaxFormUnbind().bind("submit.form-plugin",function(t){if(!t.isDefaultPrevented()){t.preventDefault();e(this).ajaxSubmit(n)}}).bind("click.form-plugin",function(t){var n=t.target;var r=e(n);if(!r.is(":submit,input:image")){var i=r.closest(":submit");if(i.length==0){return}n=i[0]}var s=this;s.clk=n;if(n.type=="image"){if(t.offsetX!=undefined){s.clk_x=t.offsetX;s.clk_y=t.offsetY}else if(typeof e.fn.offset=="function"){var o=r.offset();s.clk_x=t.pageX-o.left;s.clk_y=t.pageY-o.top}else{s.clk_x=t.pageX-n.offsetLeft;s.clk_y=t.pageY-n.offsetTop}}setTimeout(function(){s.clk=s.clk_x=s.clk_y=null},100)})};e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};e.fn.formToArray=function(t){var n=[];if(this.length===0){return n}var r=this[0];var i=t?r.getElementsByTagName("*"):r.elements;if(!i){return n}var s,o,u,a,f,l,c;for(s=0,l=i.length;s<l;s++){f=i[s];u=f.name;if(!u){continue}if(t&&r.clk&&f.type=="image"){if(!f.disabled&&r.clk==f){n.push({name:u,value:e(f).val()});n.push({name:u+".x",value:r.clk_x},{name:u+".y",value:r.clk_y})}continue}a=e.fieldValue(f,true);if(a&&a.constructor==Array){for(o=0,c=a.length;o<c;o++){n.push({name:u,value:a[o]})}}else if(a!==null&&typeof a!="undefined"){n.push({name:u,value:a})}}if(!t&&r.clk){var h=e(r.clk),p=h[0];u=p.name;if(u&&!p.disabled&&p.type=="image"){n.push({name:u,value:h.val()});n.push({name:u+".x",value:r.clk_x},{name:u+".y",value:r.clk_y})}}return n};e.fn.formSerialize=function(t){return e.param(this.formToArray(t))};e.fn.fieldSerialize=function(t){var n=[];this.each(function(){var r=this.name;if(!r){return}var i=e.fieldValue(this,t);if(i&&i.constructor==Array){for(var s=0,o=i.length;s<o;s++){n.push({name:r,value:i[s]})}}else if(i!==null&&typeof i!="undefined"){n.push({name:this.name,value:i})}});return e.param(n)};e.fn.fieldValue=function(t){for(var n=[],r=0,i=this.length;r<i;r++){var s=this[r];var o=e.fieldValue(s,t);if(o===null||typeof o=="undefined"||o.constructor==Array&&!o.length){continue}o.constructor==Array?e.merge(n,o):n.push(o)}return n};e.fieldValue=function(t,n){var r=t.name,i=t.type,s=t.tagName.toLowerCase();if(n===undefined){n=true}if(n&&(!r||t.disabled||i=="reset"||i=="button"||(i=="checkbox"||i=="radio")&&!t.checked||(i=="submit"||i=="image")&&t.form&&t.form.clk!=t||s=="select"&&t.selectedIndex==-1)){return null}if(s=="select"){var o=t.selectedIndex;if(o<0){return null}var u=[],a=t.options;var f=i=="select-one";var l=f?o+1:a.length;for(var c=f?o:0;c<l;c++){var h=a[c];if(h.selected){var p=h.value;if(!p){p=h.attributes&&h.attributes["value"]&&!h.attributes["value"].specified?h.text:h.value}if(f){return p}u.push(p)}}return u}return e(t).val()};e.fn.clearForm=function(){return this.each(function(){e("input,select,textarea",this).clearFields()})};e.fn.clearFields=e.fn.clearInputs=function(){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var t=this.type,n=this.tagName.toLowerCase();if(e.test(t)||n=="textarea"){this.value=""}else if(t=="checkbox"||t=="radio"){this.checked=false}else if(n=="select"){this.selectedIndex=-1}})};e.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType){this.reset()}})};e.fn.enable=function(e){if(e===undefined){e=true}return this.each(function(){this.disabled=!e})};e.fn.selected=function(t){if(t===undefined){t=true}return this.each(function(){var n=this.type;if(n=="checkbox"||n=="radio"){this.checked=t}else if(this.tagName.toLowerCase()=="option"){var r=e(this).parent("select");if(t&&r[0]&&r[0].type=="select-one"){r.find("option").selected(false)}this.selected=t}})};})(jQuery)
