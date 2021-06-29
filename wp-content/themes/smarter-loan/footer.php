<footer>



	<div class="footer-top">



    	<div class="container">



        	<div class="row">

                <div class="col-md-8">

					<?php dynamic_sidebar('Footer 1'); ?>

                </div>



                <div class="col-md-4">



					<?php dynamic_sidebar('Footer 2'); ?>

                </div>



            </div>



        </div>



    </div>



    <div class="footer-bottom">



    	<div class="container">



        	<div class="row">



                <div class="col-md-4">
                    <div class="row">
                        
                         <div class="col-md-12">



               <a href="<?php echo get_option('home'); ?>"><img src="<?php bloginfo('template_url'); ?>/images/footer-logo-transparent.png" class="img-responsive" /></a>



                    <span class="social_footer">



                    <a href="<?php echo get_option('fb'); ?>" target="_blank"><i class="fa fa-facebook"></i></a><a href="<?php echo get_option('tw'); ?>" target="_blank"><i class="fa fa-twitter"></i></a><a href="<?php echo get_option('yt'); ?>" target="_blank"><i class="fa fa-youtube"></i></a><a href="<?php echo get_option('li'); ?>" target="_blank"><i class="fa fa-linkedin"></i></a><a href="<?php echo get_option('ig'); ?>" target="_blank"><i class="fa fa-instagram"></i></a>



                    </span>


                    <span id="siteseal">
                        <!-- <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=GooKyPS9HVTPYxOk8GSoY8MQAT4wD7X341ut2ROpt76nwinzmlHyYfPGRJw6"></script> -->
                        <img src="<?php bloginfo('template_url'); ?>/images/seal_transparent.png" class="img-responsive" alt="SSL site seal - click to verify" />
                    </span>





                </div>

                    </div>
                        
                    <?php wp_nav_menu(array('menu_class' => '','menu'=>'footer menu')); ?>

                	
                </div>



                <div class="col-md-8">



                	<p class="copy_notice"><?php echo get_option('notice'); ?></p>



                </div>                



            </div>



        </div>



    </div>



</footer>
<?php wp_footer(); ?>


<script src="<?php bloginfo('template_url'); ?>/js/jquery-ui.min.js"></script>
<!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/7.0.0/jquery.mmenu.all.css">
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/7.0.0/jquery.mmenu.all.js"></script>-->



<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() ?>/css/jquery.mmenu.all.css">
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/jquery.mmenu.all.js"></script>

<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() ?>/css/jquery.mhead.css">
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/jquery.mhead.js"></script>

<script src="<?php bloginfo('template_url'); ?>/js/jquery.inputmask.bundle.js"></script>


<script type="text/javascript">
    jQuery(document).ready(function () {
        window.asd = jQuery('.SlectBox').SumoSelect({ csvDispCount: 3, selectAll:true, captionFormatAllSelected: "Yeah, OK, so everything.",search: true, searchText: 'Search Loan Types And Cities...' });
    });
</script>
<script type="text/javascript">
    jQuery(document).ready( function() {
        jQuery(document)
        .on('submit', '#post', function(event) {
            console.log(jQuery(".error").length);
            if(jQuery(".error").length >= 0){
                var response = grecaptcha.getResponse();
                if(response.length > 0)
                {
                   jQuery(".errormessage").css("display","none");
                }
                else
                {
                   jQuery(".errormessage").css("display","block");
                   event.preventDefault();
                   console.log("error block");  
                }
                
            }else{                
                console.log("error");
            }
        });
    });
    jQuery(document).ready(function(){
         window.asd = jQuery('.SlectBox').SumoSelect({ csvDispCount: 3, selectAll:true, captionFormatAllSelected: "Yeah, OK, so everything.",search: true, searchText: 'Search Loan Types And Cities...' });
        setTimeout(function(){
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.src = "https://www.google.com/recaptcha/api.js";
            jQuery("head").append(s);
            jQuery('<div class="g-recaptcha" data-sitekey="6LcPjZQUAAAAALjt7PKEhKczzY7QS3O5hZjH0bfA"></div>').insertAfter("#acf-lender");
            jQuery('<div class="g-recaptcha" data-sitekey="6LcPjZQUAAAAALjt7PKEhKczzY7QS3O5hZjH0bfA"></div>').insertAfter("#acf-credit_cards"); 
            jQuery('<p class="errormessage" style="display:none !important;">Captcha Required</p>').insertAfter(".g-recaptcha");  
            //jQuery('#acf-rating').css("margin-bottom: 25px;");
        }, 1000);
        jQuery(function() {
            jQuery('#menu').removeClass('hide');
            //  create a menu
            jQuery('#menu').mmenu({
                "extensions": [
                    "position-front",
                    "position-bottom"
                ],
                "navbar": {
                    "title" : "",
                }
            });

            //  fire the plugin
            jQuery('.mh-head').mhead();

            //  for demo only
            jQuery('a[href^="#/"]').click(function() {
                alert( 'Thank you for clicking, but that\'s a demo link.' );
                return;
            })
        });
		
		
		 jQuery("#phone").inputmask({"mask": "(999) 999-9999"});

       let counter = 0;

      jQuery(".validate").focusout(function() {

          if(this.value == "" || this.value == null){

              if(jQuery( this ).prop( 'required' ) && jQuery(this).next().length == 0){

                jQuery(this).after( "<i style='color:red;'>This field is required</i>" );

              }

          } else {

            jQuery(this).next().remove();

          }

      });		
		
    });
	
	
	  function DateFormate(date ) {

			console.log(date);

			  let d = new Date(date);

			  let day = d.getDate();

			  let month = d.getMonth() + 1;

			  let year = d.getFullYear();

			  console.log([month, day, year].join('-'));

			  jQuery(".date_value").val([day, month, year].join('/'));

		  }

	
	
</script>
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/css/sumoselect.css" type="text/css" />
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() ?>/js/jquery.sumoselect.js"></script>
<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/css/font-awesome.css" type="text/css" />

</body>



</html>