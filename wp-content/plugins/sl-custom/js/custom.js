jQuery(document).ready(function($){
	if($('.apply-now-popup.redirect-page').length){
		// if there is a ninja form on this page
		if(typeof Marionette !== 'undefined') {
				// Create a new object for custom validation of a custom field.
				var SLSubmitController = Marionette.Object.extend( {

				  initialize: function() {
					this.listenTo( Backbone.Radio.channel( 'forms' ), 'submit:response', this.actionSubmit );
				  },

				  actionSubmit: function( response ) {
					// Do stuff here.
					//console.log(response);
					if(response.errors && response.errors.length === 0){
						$('.sl-hide-after-submit').hide();
						//$('.apply-now-popup-body').addClass('is_subscribed'); //hide form & show splash
					}
				  },

				});
			// Instantiate our custom field's controller, defined above.
		   new SLSubmitController(); //uncomment to show splash after form submit
		}
		
		var sl_already_subscribed = 'no';
		var sl_redirect_wait = 200; //redirect after 4s same as animation dur
		//var sl_redirect_timeout;
		var sl_redirect_to_lender = function(has_subscribed, redirectURL){
			if(has_subscribed == "yes"){
				//$('.apply-now-popup-body').addClass('is_subscribed'); //hide form & show splash
				//redirect now
				//sl_redirect_timeout = setTimeout(function(){
					//alert('Redirecting...'+redirectURL);
				//}, sl_redirect_wait);
				// similar behavior as clicking on a link
				window.location.href = redirectURL;
			}
		};
		//check if user has already subscribed in current browser/session
		var lender_url = $('#sl_form_lender_url').val();
		var lender_name = $('#sl_form_lender_name').val();
		setInterval(function(){
			if($('.js_sl_subscribe_btn').length){
				$('.js_sl_subscribe_btn').val('Continue to '+lender_name);
			}
		}, 50);
		$.ajax({
			type: 'POST',
			url: SL_Custom.ajaxurl,
			data: {
				action: 'sl_mailchimp_subscribed',
				'security': SL_Custom.nonce,
			},
			dataType: "json",
			success: function(t) {
				sl_already_subscribed = t.data.subscribed;
				if(sl_already_subscribed == "yes"){
					sl_redirect_to_lender(sl_already_subscribed, lender_url);
				}else{
					setTimeout(function(){
						$('.apply-now-popup-body').removeClass('is_subscribed'); //show form & hide splash
					}, sl_redirect_wait);
				}
				//console.log(t);
			}
		});
	}
});