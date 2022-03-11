jQuery(document).ready(function(){

    jQuery( ".mega-menu-logo" ).append( jQuery( ".logo" ) );

	jQuery(".mob-navbar-header button").click(function(){

		jQuery('.navbar').toggleClass('nav-open', 500);

		jQuery('.nav-open').css('left', 0);

		//jQuery("#mob_nav_menu").toggleClass("show");

		

		jQuery(".mob-navbar-header button").toggleClass("now");

	});

});


jQuery(document).ready(function(){
jQuery("table").parent().css("overflow-x", "auto");
    });



jQuery('.nav-tabs').scrollingTabs({
  enableSwiping: true,
  //disableScrollArrowsOnFullyScrolled: true
});

jQuery.fn.scrollingTabs.defaults.enableSwiping = true;




jQuery(document).ready(function() {

			jQuery("#content-slider").lightSlider({

				item:3,

				pager:false,

                loop:true,

                keyPress:true,

				responsive : [

            {

                breakpoint:800,

                settings: {

                    item:3,

                    slideMove:1,

                    slideMargin:6,

                  }

            },

            {

                breakpoint:710,

                settings: {

                    item:1,

                    slideMove:1

                  }

            }

        ]

            });



jQuery("#learning_center").lightSlider({

				item:3,

				pager:false,

                loop:true,

                keyPress:true,

				responsive : [

            {

                breakpoint:800,

                settings: {

                    item:3,

                    slideMove:1,

                    slideMargin:6,

                  }

            },

            {

                breakpoint:480,

                settings: {
					adaptiveHeight: true,
                    item:1,

                    slideMove:1

                  }

            }

        ]

            });


			

			jQuery("#testimonials-slider").lightSlider({
				
				adaptiveHeight: true,

				 item:1,

				 pager:true,

				 controls:true,

                loop:true,

                keyPress:true,

				responsive : [

            {

                breakpoint:800,

                settings: {

                    item:3,

                    slideMove:1,

                    slideMargin:6,

                  }

            },

            {

                breakpoint:710,

                settings: {

                    item:1,

                    slideMove:1

                  }

            }

        ]

            });

			
			jQuery("#homepage-slider").lightSlider({

				 item:1,

				 pager:true,

				 controls:true,

                loop:false,

                keyPress:true,

				
            });

			


			

			jQuery("#lender-slider").lightSlider({
				

				 item:6,

				 pager:true,

				 controls:true,

                loop:true,

                keyPress:true,

				responsive : [

            {

                breakpoint:800,

                settings: {

                    item:3,

                    slideMove:1,

                    slideMargin:6,

                  }

            },

            {

                breakpoint:480,

                settings: {

                    item:1,

                    slideMove:1

                  }

            }

        ]

            });

            

		});
		
		
jQuery(window).scroll(function() {  
		height = jQuery('.navigation').innerHeight()
		///alert(height);  
		var scroll = jQuery(window).scrollTop();
		
		if (scroll >= height) {
			jQuery(".navigation").addClass("affix");
		} else {
			jQuery(".navigation").removeClass("affix");
		}
	});

jQuery(document).ready(function($) {
	try{
		$('#acf-field-rating').rating({
			fractions: 2,
			start: 0,
			stop: 5
		});
		$('#acf-field-rating').each(function () {
			$('<span class="label label-primary"></span>')
			  .text($(this).val() || '0')
			  .insertAfter(this);
		});
		$('#acf-field-rating').on('change', function () {
		  $(this).next('.label').text($(this).val());
		});
		$('.acf-field[data-name="rating"] input').each(function () {
                    var $self = $(this);
			$self.rating({
                            fractions: 2,
                            start: 0,
                            stop: 5
                        });
                        $('<span class="label label-primary"></span>')
			  .text($(this).val() || '0')
			  .insertAfter(this);
                        $self.on('change', function () {
                            $(this).next('.label').text($(this).val());
                        });
		});
	}catch(e){
		
	}
    $(document).on('lity:open', function(event, instance) {
        var opener = instance.opener(),
            lender = $(opener).attr('data-lender') || false;
        //console.log('Lightbox opened',$(opener).attr('data-lender'));
        if(lender){
            $(event.target).addClass("sl_add_review_popup");
            var lender = parseInt(lender);
            var $lender = $('#submitReview .acf-field[data-name="lender"]'),
                lender_field_key = $lender.data('key'),
                $rating = $('#submitReview .acf-field[data-name="rating"]'),
                rating_field_key = $rating.data('key');
            var select = document.getElementById("acf-"+lender_field_key);
            select.options[select.options.length] = new Option(lender, lender);
            $('#submitReview #acf-'+lender_field_key).val(lender).trigger('change');
            $('#submitReview #acf-'+rating_field_key).val(0).trigger('change');
        }
    });
    
    $("#compare-button").on("click", function(){
        if($(this).attr("disabled") == "disabled")
            return;
        compareFunction();
    });
    if($("body").hasClass("page-template-template-loanfinder")){
        $("#loanfinder").on("submit", function(){
            $("#compare-loader").show();
            $.post(
                SL_Ajax.ajaxurl,
                {
                    // wp ajax action
                    action: 'ajax-loanfinder',

                    // vars
                    loantype: $('select[name="loan_type"]').val(),
                    producttype: $('select[name="producttype"]').val(),
                    provinces: $('select[name="provinces"]').val(),
                    amount: $('select[name="amount"]').val(),

                    // send the nonce along with the request
                    nextNonce: SL_Ajax.nextNonce
                },
                function (response) {
                    $("#loanfinder-wrap").show();
                    $("#compare-loader").hide();
                    //console.log(response);
                    $('#loanfinder-result').html(response);
                    $('#loanfinder-result input.rating').rating();
                }
            );
            return false;
        });
    }
    
    if($("body").hasClass("page-template-template-compare")){
        $(".company-select").on("change", function(){

            var id_1 = $("#company_1").val(),
                id_2 = $("#company_2").val();
            if(id_2 == id_1 || id_1 == 0 || id_2 == 0){
                $("#compare-button").attr("disabled", "disabled");
                return;
            }
            $("#compare-button").removeAttr("disabled");
        });
    }
    if(window.allLenders){
        var $selField1 = $("#company_1"),
            $selField2 = $("#company_2");
        if($selField1.length || $selField2.length){
            for(var i=0;i<window.allLenders.length;i++){
                if($('input#lender_1').length && $('input#lender_1').val()==window.allLenders[i].id){}
                else{
                    if(window.autoCompareData && (window.autoCompareData.lender_1 == window.allLenders[i].id || window.autoCompareData.lender_2 == window.allLenders[i].id) ){
                        if(window.autoCompareData.lender_1 == window.allLenders[i].id)
                            $selField1.append("<option value=" + window.allLenders[i].id + " selected>" + window.allLenders[i].name + "</option>");
                        if(window.autoCompareData.lender_2 == window.allLenders[i].id)
                            $selField2.append("<option value=" + window.allLenders[i].id + " selected>" + window.allLenders[i].name + "</option>");
                    }else{
                        $selField1.append("<option value=" + window.allLenders[i].id + ">" + window.allLenders[i].name + "</option>");
                        $selField2.append("<option value=" + window.allLenders[i].id + ">" + window.allLenders[i].name + "</option>");
                    }
                }
            }
            if(window.autoCompareData){ $("#compare-button").removeAttr("disabled").trigger('click'); }
        }
    }
});


function compareFunction(){
    var $compare_table = jQuery("#compare_table"),
        id_1 = jQuery("#company_1").val(),
        id_2 = jQuery("#company_2").val();
        
        jQuery("#compare-loader").show();
        
        jQuery.post(
            SL_Ajax.ajaxurl,
            {
                // wp ajax action
                action: 'ajax-lendercompare',

                // vars
                compare_item_1: id_1,
                compare_item_2: id_2,

                // send the nonce along with the request
                nextNonce: SL_Ajax.nextNonce
            },
            function (response) {
                jQuery(".compare_result_wrapper").show();
                jQuery("#compare-loader").hide();
                //console.log(response);
                $compare_table.html(response);
            }
        );
        return false;

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*jQuery( document ).ready(function() {
	var maxHeight = 0;
	
	jQuery(".sameheight").each(function(){
	   if (jQuery(this).height() > maxHeight) { maxHeight = jQuery(this).height(); }
	});
	
	jQuery(".sameheight").height(maxHeight);
});*/
jQuery(document).ready(function($){
    jQuery("body").hover(function(){
        jQuery("#findloan .table_content a.button").attr("target","_blank")
    })
   
    jQuery(document).on('click', '#findloan .table_content a.button,#loanfinder-result .table_content a.button', function () {
       var name = jQuery(this).parent().parent(".row").find(".img-responsive").attr("title");
        
        if (typeof name !== typeof undefined && name !== false) {
            if (typeof ga !== 'undefined') {
                 ga('gtag_UA_80985941_1.send', 'event', 'Apply button', 'click',name);
                
                //console.log("fire new 3");
             }
        }
       
       
    });
    
     jQuery(document).on('click', '.lenders-template-default .cta_single .blue_big_btn,.lenders-template-default .accordion_lender .accordion a', function () {
       var name = jQuery(".detail_title").text();
        
        if (typeof name !== typeof undefined && name !== false) {
            if (typeof ga !== 'undefined') {
                   ga('gtag_UA_80985941_1.send', 'event', 'Apply button', 'click',name);
                  
                 
             }
        }
        
       
    });
    
    
  // Add smooth scrolling to all links
  jQuery(".cta_banner .blue_big_btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

var maxheight = 0;

jQuery('div.userrow div.item_expert').each(function () {
    maxheight = (jQuery(this).height() > maxheight ? jQuery(this).height() : maxheight);
});

jQuery('div.userrow div.item_expert').height(maxheight);


jQuery(document).on( 'nfFormReady', function( e, layoutView ) {

// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  };
}(jQuery));

jQuery(".income_field .ninja-forms-field").inputFilter(function(value) {
  return /^-?\d*$/.test(value); });
  
});


jQuery( document ).ready(function($) {
    $("body").on("click",".search__icon, a.mega-search__icon, .mega-search__icon a",function(e){
        e.preventDefault();
        $(".search__container").slideToggle("slow");		
    });
     // Enables popover
    $('[data-toggle="popover"]').each(function(){
        var $self = $(this),
            content_id = $self.data('popover-content');
        $self.popover({
            html : true, 
            content: function() {
              return '<button type="button" class="close" data-dismiss="popover">&times;</button>' + $(content_id).html();
            },
        }).on('shown.bs.popover', function () {
                var $popup = $(this);
                // Unbind any pre-existing event handlers to prevent duplicate clicks
                $popup.next('.popover').find('[data-dismiss="popover"]').off('click');
                $popup.next('.popover').find('[data-dismiss="popover"]').click(function (e) {
                    $popup.trigger('click');
            });
        });
    });
    $(document).on('click', function (e) {
        $('[data-toggle="popover"],[data-original-title]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
                (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
            }

        });
    });
    var $root = $('html, body');
    $('.smooth_scroll > a[href^="#"],a.smooth_scroll').click(function(e) {
        var href = $.attr(this, 'href');
        var $header = $('#masthead'),
            headerHeight = $header.outerHeight();
        e.preventDefault();
        $root.animate({
            scrollTop: $(href).offset().top - headerHeight - 20
        }, 500, function () {
            window.location.hash = href;
        });

        return false;
    });
    
    $('.js-videos-loadmore').click(function(e){
        e.preventDefault();
        var $button = $(this),
            btn_txt = $button.text(),
            params = $button.data('params'), // object
            data = {
                'action': 'loadvideos',
                'term_id': params.term_id, 
                'page' : params.page
            };
        if($button.prop('disabled')){ return; }
        $.ajax({ // you can also use $.post here
            url : SL_Ajax.ajaxurl, // AJAX handler
            data : data,
            type : 'POST',
            beforeSend : function ( xhr ) {
                $button.text('Loading...').prop('disabled', true); // change the button text, you can also add a preloader image
            },
            success : function( response ){
                if( response.data ) { 
                    $button.parent().replaceWith(response.data); // insert new posts
                    // you can also fire the "post-load" event here if you use a plugin that requires it
                    // $( document.body ).trigger( 'video-posts-loaded' );
                }
                $button.text(btn_txt).prop('disabled', false);
            },
            error : function( ){
                $button.text(btn_txt).prop('disabled', false);
            }
        });
    });
});
