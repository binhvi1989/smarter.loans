jQuery(document).ready(function($){if($('.apply-now-popup.redirect-page').length){if(typeof Marionette!=='undefined'){var SLSubmitController=Marionette.Object.extend({initialize:function(){this.listenTo(Backbone.Radio.channel('forms'),'submit:response',this.actionSubmit)},actionSubmit:function(response){if(response.errors&&response.errors.length===0){$('.sl-hide-after-submit').hide()}},});new SLSubmitController()}
var sl_already_subscribed='no';var sl_redirect_wait=200;var sl_redirect_to_lender=function(has_subscribed,redirectURL){if(has_subscribed=="yes"){window.location.href=redirectURL}};var lender_url=$('#sl_form_lender_url').val();var lender_name=$('#sl_form_lender_name').val();setInterval(function(){if($('.js_sl_subscribe_btn').length){$('.js_sl_subscribe_btn').val('Continue to '+lender_name)}},50);$.ajax({type:'POST',url:SL_Custom.ajaxurl,data:{action:'sl_mailchimp_subscribed','security':SL_Custom.nonce,},dataType:"json",success:function(t){sl_already_subscribed=t.data.subscribed;if(sl_already_subscribed=="yes"){sl_redirect_to_lender(sl_already_subscribed,lender_url)}else{setTimeout(function(){$('.apply-now-popup-body').removeClass('is_subscribed')},sl_redirect_wait)}}})}})