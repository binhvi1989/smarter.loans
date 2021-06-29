<?php 
/*
Template Name: calculator
*/
get_header(); ?>

<?php
  $pageId = get_the_ID();
  if(get_page_template_slug($pageId) == "template-calculator.php")
  {
    if($pageId == 58054)
    {
?>
		<main id=main data-section=main data-region=main role=main> </main> 
<?php
    }
    else
	  {
	  	?>
	  		<section role="document">
			  <main class="main"> <i id=""></i>
			    <div class="container-fluid fadeInBlock white ">
			      <div class="blurred-background tb-padding60">
			        <div class="container">
			          <div class="row nomargin">
			            <div class="col-xs-12 text-left">
			              <div id='loan-payment-2-app'   init-calc-name="Personal Loan Payment Calculator"  init-calc-parent="Personal Loans"  ></div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </main>
			</section>
	  	<?php
	  }
  }
?>

<?php get_footer(); ?>
