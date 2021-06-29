<?php 
/*Template Name: Loan Types*/
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

  <div class="container inner_wrapper loan_page">
	<h1 class="text-center pg_title"><?php the_title(); ?></h1>
      <div class="row top_pos">
      
        <div class="col-md-12 col-sm-12">

        	<div class="row">
            	<div class="<?php if(get_field('call_to_action')){echo 'col-md-8';}else{echo 'col-md-12';}  ?>">
                	<?php the_field('loan_type_detail'); ?>
                </div>
                <?php if(get_field('call_to_action')){ ?>
                <div class="col-md-4">
                	<?php the_field('call_to_action'); ?>
                </div>
                <?php } ?>
            </div>

        <h3 class="text-center lender_list_heading">Top <?php the_title(); ?> Providers in Canada</h3>

       <?php



$posts = get_field('select_lenders');



objectRSort($posts, 'menu_order');


if( $posts ): ?>

<div class="tab-pane">
      <div class="table_header">
      	<div class="row">
        	<div class="col-md-2">Company</div>
            <div class="col-md-2">Amount</div>
            <div class="col-md-2">Interest Rate</div>
            <div class="col-md-2">Reviews</div>
            <div class="col-md-2">Terms</div>
            <div class="col-md-2"></div>
        </div>
      </div>
     <?php foreach( $posts as $post): // variable must be called $post (IMPORTANT) ?>

        <?php setup_postdata($post); ?>
            <?php 
                $rating_data = sloan_get_lender_rating_data(get_the_ID());
                $total_reviews = $rating_data['total_reviews'];
                $avg_rating = $rating_data['average_rating'];
                $redirect_url = add_query_arg('redirect_to_lender', get_the_ID(), site_url('/'));
            ?>
            <div class="table_content">
              <div class="row">
                  <div class="col-md-2 col-xs-12 logo_container">
                      <a href="<?php the_permalink(); ?>">
                          <?php if( get_field('logo') ): ?>
                              <img src="<?php echo the_field('logo'); ?>" class="center-block img-responsive "  title="<?php echo get_the_title(); ?>"/>
                          <?php else: ?>
                              <?php echo get_the_title(); ?>
                          <?php endif; ?>
                      </a>
                  </div>
                  <div class="col-md-2 col-xs-12"><?php the_field('amount'); ?></div>
                  <div class="col-md-2 col-xs-12"><?php the_field('interest_rate'); ?></div>
                  <div class="col-md-2 col-xs-12" title="<?php echo 'Avg. Rating: '.$avg_rating.' ('.$total_reviews.' '.($total_reviews > 1 ? 'reviews':'review').')'; ?>">
                      <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                      <!--<img src="<?php bloginfo('template_url'); ?>/images/stars.png" class="center-block" />-->
                  </div>
                  <div class="col-md-2 col-xs-12"><?php the_field('terms'); ?></div>
                  <div class="col-md-2 col-xs-12 apply-now"><?php if( get_field('button_link') ): ?><a href="<?php echo $redirect_url; ?>" target="_blank" class="button" rel="nofollow noindex noreferrer noopener">Apply Now</a><?php endif; ?>
				  
				  <?php if( get_field('phone_2') ): ?>
                                <a href="tel:<?php the_field('phone_2') ?>" class="call hidden-xs hidden-sm">
                                  <img src="<?php echo get_template_directory_uri() ?>/images/call.svg"><?php the_field('phone_2') ?>
                                </a>  
                              <?php //else: ?>
							  
                                  <?php //if( get_field('phone') ): ?> 
                                  <!-- <a href="tel:<?php //the_field('phone') ?>" class="call hidden-xs hidden-sm">
                                    <img src="<?php //echo get_template_directory_uri() ?>/images/call.svg"><?php //the_field('phone') ?>
                                  </a>   -->
                                  <?php //endif; ?>  
                              <?php endif; ?>
				  
				  </div>
              </div>
            </div>
            <?php endforeach; ?>
            <?php 
          
        wp_reset_postdata(); //important ?>
</div>

   
<?php endif; wp_reset_query(); 
$content = apply_filters( 'the_content', get_the_content() );
echo $content;
?>







          
      
       
          

        </div>

        

        

      </div>

    </div>


<div class="other_services_province">

	<div class="container">
    	<div class="row">
        	<h3 class="text-center">Find a Lender in:</h3>
            
            <ul>
                <li><a href="<?php echo get_option('home'); ?>/ontario/"> Ontario</a></li>
                <li><a href="<?php echo get_option('home'); ?>/alberta/"> Alberta</a></li>
                <li><a href="<?php echo get_option('home'); ?>/british-columbia/">British Columbia</a></li>
                <li><a href="<?php echo get_option('home'); ?>/manitoba/">Manitoba</a></li>
                <li><a href="<?php echo get_option('home'); ?>/saskatchewan/">Saskatchewan</a></li>
                <li><a href="<?php echo get_option('home'); ?>/nova-scotia/">Nova Scotia</a></li>
                <li><a href="<?php echo get_option('home'); ?>/quebec">Quebec</a></li>
                <li><a href="<?php echo get_option('home'); ?>/new-brunswick/">New Brunswick</a></li>
                <li><a href="<?php echo get_option('home'); ?>/newfoundland/">Newfoundland</a></li>
                <li><a href="<?php echo get_option('home'); ?>/prince-edward-island/">PEI</a></li>
                <li><a href="<?php echo get_option('home'); ?>/yukon/"> Yukon</a></li>
                <li><a href="<?php echo get_option('home'); ?>/northwest-territories/">Northwest Territories</a></li>
                <li><a href="<?php echo get_option('home'); ?>/nunavut/">Nunavut</a></li>
            </ul>
            
        </div>
    </div>

</div>


<?php if( have_rows('personal_loan_offered') ): ?>
<div class="offering">

	<div class="container">
    	<div class="row">
        	<h3>Types of <?php the_title(); ?> offered:</h3>
        	<ul>
            	<?php while( have_rows('personal_loan_offered') ): the_row();  ?>
                <li><?php the_sub_field('offering'); ?></li>
                <?php endwhile; ?>
            </ul>
        </div>
    </div>
</div>
<?php endif; ?>

<div class="trust_lender_loan" style=" <?php if( have_rows('personal_loan_offered') ){ echo '';}else {echo 'margin-top:50px;';} ?>">

	<div class="container">
    	<div class="row">
        	<h3>Elite Trusted Lenders</h3>
            <p>These companies are recognized for their excellent service, product offering and financial literacy education for all Canadians.</p>
            <?php echo do_shortcode('[trusted-lenders]'); ?>
        </div>
    </div>
</div>


</section>

 

<?php get_footer(); ?>