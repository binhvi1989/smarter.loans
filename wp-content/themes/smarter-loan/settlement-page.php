<?php 

/*
Template Name: Settlement Page
*/
get_header(); ?>



<div class="breadcrumbs_wrapper">
	<div class="container">
    	<div class="row">
        	<div class="col-md-12">
            	<?php if(function_exists('bcn_display')){ bcn_display();} ?>
            </div>
        </div>
    </div>
</div>
<?php if(get_field('show_page_title_and_banner') == 'yes'){ ?>
<div class="title_banner" <?php if(get_field('title_banner')) { ?>style="background-image:url(<?php the_field('title_banner'); ?>)" <?php }else{?>style="background-image:url(<?php bloginfo('template_url'); ?>/images/default.jpg)"<?php } ?>>
	<div class="container">
    	<div class="row">
        	<div class="col-md-8 col-md-offset-1">
            	<h1><?php the_title(); ?></h1>
                <?php if(get_field('title_sub-heading')){ ?>
                <p class="sub_heading_title"><?php the_field('title_sub-heading'); ?></p>
                <?php } ?>
            </div>
        </div>
    </div>
</div>
<?php } ?>

<section>
	
	  <div class="container inner_wrapper salesforce_form">
		  
		  
		  
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

           <?php the_content(); ?>

          <?php endwhile; endif; ?>

  <div class="row">

    <div class="col-md-12">

      <p>Fields marked with an <span style="color:red;">*</span> are required</p>

      <h3>Personal Details</h3>

    </div>

  </div>

  <form id="comment-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

    <input type=hidden name="oid" value="00DE0000000b47J">

    <input type=hidden name="retURL" value="www.google.com">

    <input type=hidden name="recordType" id="recordType" value="0120L000000fPxe">

    <input type=hidden id="lead_source" name="lead_source" value="Smarter Loans">
	  
	  
	  	<?php if (is_page('settlement-loan-application-easy-legal')){?>
	  
	  	<input type="hidden" id="00N0L000006np1j" name="00N0L000006np1j" value="ELFI">
		
	  	<?php }elseif(is_page('settlement-loan-application-rhino-legal-finance')){?>

		<input type="hidden" id="00N0L000006np1j" name="00N0L000006np1j" value="Rhino">
		
		<?php }elseif(is_page('settlement-loan-application-seahold-legal-finance')){?>	
	  
		<input type="hidden" id="00N0L000006np1j" name="00N0L000006np1j" value="Seahold">
		<?php }elseif(is_page('settlement-loan-application-settlement-lenders-inc')){?>

		<input type="hidden" id="00N0L000006np1j" name="00N0L000006np1j" value="Settlement Lenders">
	  	<?php } ?>
	  
	  

   <!-- <input type=hidden id="00N0L000006np1j" name="00N0L000006np1j" value="ELFI">  You can modify business unit value by just passing different value of value attribute "ELFI", "Rhino", "Seahold", "Settlement Lenders" -->

    <div class="row">

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-6 margin">

              <input type="text" class="form-control validate" id="first_name" name="first_name" placeholder="First Name*" required="true">

              

            </div>

            <div class="col-md-6 margin">

              <input type="text" class="form-control validate" id="last_name" name="last_name" placeholder="Last Name*" required="true">

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-6 margin">

              <input type="Email" class="form-control validate" id="email" name="email" placeholder="Email*" required="true">

              

            </div>

            <div class="col-md-6 margin">

              <input type="text" class="form-control validate" id="phone" name="phone" placeholder="Phone*" id="phone" required="true" >

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-6 margin">

              <div class="form-group">

                  <label for="00NE0000005vuCt">Law Firm Name</label>

                  <input type="text" class="form-control" id="00NE0000005vuCt" name="00NE0000005vuCt">

              </div>

            </div>

            <div class="col-md-6 margin">

              <div class="form-group">

                  <label for="00NE0000004F44J">Lawyer Name</label>

                  <input type="text" class="form-control" id="00NE0000004F44J" name="00NE0000004F44J">

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-12 margin">

              <div class="form-group">

                  <label>Amount of funding requested? (<span id="fund">$0.00</span>) <span class="star">*</span></label>

                <input type="number" id="00NE0000004F457" name="00NE0000004F457" class="form-control validate" style="width: 100%;" required="true" onkeyup ="document.getElementById('fund').innerHTML = '$'+ (this.value == null || this.value == '' ? 0 : this.value) +'.00';">

              </div>

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-6 margin">

              <div class="form-group">

                  <label for="">Date of Accident / Incident <span class="star">*</span></label>

                  <input type="date" class="form-control validate" required="true" id="main_date" placeholder="Date" onchange ="DateFormate(document.getElementById('main_date').value);" onkeydown="DateFormate(document.getElementById('main_date').value);">

              </div>

            </div>
			  
			       <div class="col-md-6 margin">

                <div class="form-group">
					
					<label for="">In what province did the accident happen?</label>

                  <select class="form-control" id="state" name="state">

                     <option value="Alberta" selected="selected">Alberta</option>

                     <option value="British Columbia">British Columbia</option>

                     <option value="Manitoba">Manitoba</option>

                     <option value="New Brunswick">New Brunswick</option>

                     <option value="Newfoundland &amp; Labrador">Newfoundland &amp; Labrador</option>

                     <option value="Northwest Territories">Northwest Territories</option>

                     <option value="Nova Scotia">Nova Scotia</option>

                     <option value="Nunavut">Nunavut</option>

                     <option value="Ontario">Ontario</option>

                     <option value="Prince Edward Island">Prince Edward Island</option>

                     <option value="Quebec">Quebec</option>

                     <option value="Saskatchewan">Saskatchewan</option>

                     <option value="Yukon Territory">Yukon Territory</option>

                  </select>

                </div>

            </div>

          </div>

          <input type="hidden" class="date_value" id="00NE0000006P0ys" name="00NE0000006P0ys">

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-3">

                <div class="form-group">

                  <!-- <select class="form-control" id="00NE0000005vuCy" name="00NE0000005vuCy">

                     <option value="-- None --" selected="selected">-- None --</option>

                     <option value="Better Business Bureau Website">Better Business Bureau Website</option>

                     <option value="Lawyer">Lawyer</option>

                     <option value="Google/Bing Search">Google/Bing Search</option>

                     <option value="Advertisement">Advertisement</option>

                     <option value="Friend">Friend</option>

                     <option value="MoneySaver">MoneySaver</option>

                     <option value="Shoppers Source">Shoppers Source</option>

                     <option value="Other">Other</option>

                  </select> -->

                  <input type="hidden" id="00NE0000005vuCy" name="00NE0000005vuCy" value="Smarter Loans">

                </div>

            </div>

          </div>

        </div>

      </div>



      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-6 margin">

                <textarea  class="form-control makeborder" id="00NE0000004F44i" name="00NE0000004F44i" maxlength="500" placeholder="What happened? Content must not exceed 500 characters" aria-required="true" aria-invalid="false" rows="5" cols="50" spellcheck="false"></textarea>

            </div>

            <div class="col-md-6 margin">

                <textarea class="form-control makeborder" id="00NE0000004F44x" name="00NE0000004F44x" maxlength="500" placeholder="Describe your injuries? Content must not exceed characters" aria-required="true" aria-invalid="false" rows="5" cols="50" spellcheck="false"></textarea>

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" style="margin-top: 30px; margin-bottom: 10px;">

        <div class="container">

          <div class="row">
			  
			  <div class="g-recaptcha" data-sitekey="6LcPjZQUAAAAALjt7PKEhKczzY7QS3O5hZjH0bfA"></div>
			  <p class="errormessage" style="display:none !important;">Captcha Required</p>

            <div class="col-md-1" style=" width: 10px; padding-top:8px; padding-bottom: 19px;">

                <input type="checkbox" value=""  required="true">

            </div>

            <div class="col-md-7">

              <p>By checking this box you expressly consent to the collection, use and disclosure of the personal information you are providing us.</p>

            </div>

          </div>

        </div>

      </div>

      <div class="col-md-12" >

        <div class="container">

          <div class="row">

            <div class="col-md-12">
				

                 <input type="submit" name="" value="Get In touch!" class="btn btn-default" required="true">

            </div>

          </div>

        </div>

      </div>

    </div>

  </form>

</div>




</section>

 

<?php get_footer(); ?>

