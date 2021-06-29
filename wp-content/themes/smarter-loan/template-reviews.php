<?php

/*Template Name: Reviews Layout*/

acf_form_head();

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
          <h1>
            <?php the_title(); ?>
          </h1>
          <?php if(get_field('title_sub-heading')){ ?>
            <p class="sub_heading_title">
              <?php the_field('title_sub-heading'); ?>
            </p>
          <?php } ?>
        </div>
      </div>
    </div>
  </div>
<?php } ?>

<section>
	<div class="container inner_wrapper reviews_wrapper">

		<div class="row">
			<div class="col-md-12 col-sm-12">
				<?php if($_GET['updated'] == 'true'){ ?>
				 <br>
				 <br>
				 <div class="alert alert-success">
				  <strong>Success!</strong> Thank you for your Intrest we recieved your valued reviews we will published your comments after approval.
				</div>
			  <?php } ?>

			  <h3 class="text-center">Reviews</h3>

			  <?php echo do_shortcode('[reviewslenders orderby="term_order" include="186,181,187,183,182,184,190,191,192,193,199,185,200"]'); ?>
			  <br><br>
			</div>
		</div>

	</div>


	<div id="submitReview" class="lity-hide" style="overflow: auto;padding: 15px 0 30px;">

	  <?php

	  $review_fg_id = get_option( 'field_group_reviews' );

	  if($review_fg_id){

		acf_form(array(

		  'post_id'		=> 'new_post',

							'field_groups'	=> explode(',', $review_fg_id), //local

			//                'field_groups'	=> array( 42008 ), //staging

							'submit_value'		=> 'Submit',

							'updated_message'		=> 'Review added'

						  ));

		} ?>

	</div>

	<div class="customer_reviews">

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h4>Latest Customer Reviews</h4>
				</div>
		   </div>
		</div>

		<div class="container customer_reviews_listing">

			<div class="row">
				<div id="testi_list_single">
				  <article>
				   <?php
				   wp_reset_query();
				   //$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
				   $query = array(
					 'post_type' => 'reviews',
					 'numberposts' => 10,
					 'order' =>'DESC',
				   );
				   query_posts($query);
				   if (have_posts()) : while (have_posts()) : the_post();
					 $user_rating = get_field('rating', get_the_ID());
					 ?>
					 <section>
					   <div class="review_list_item">
						<h5><?php the_field('review_title'); ?></h5>

						<div class="star_rating" title="<?php echo 'Rating: '.$user_rating; ?>">
						  <input type="hidden" class="rating" value="<?php echo $user_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
						</div>
						<p><?php the_field('review'); ?></p>
						<div class="review_author">
							<?php the_field('name'); ?>
						</div>
					   </div>
				   </section>
				  <?php endwhile; endif;?>
				  </article>
				</div>
			</div>
		</div>

    </div>

</section>

<?php get_footer();
