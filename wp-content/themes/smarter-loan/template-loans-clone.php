<?php 
/*Template Name: New Loan Template*/
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

        <h3 class="text-center lender_list_heading"><?php the_field('custom_title_above_the_table'); ?></h3>

       <?php



$posts = get_field('select_lenders');



objectRSort($posts, 'menu_order');


if( $posts ): ?>

<div class="tab-pane">
      <div class="table_header">
      	<div class="row">
        	<div class="col-md-2">Company</div>
            <div class="col-md-2"><?php the_field('cf1'); ?></div>
            <div class="col-md-2"><?php the_field('cf2'); ?></div>
            <div class="col-md-2">Reviews</div>
            <div class="col-md-2"><?php the_field('cf3'); ?></div>
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
                  <div class="col-md-2 col-xs-12"><?php the_field('cf_1_value'); ?></div>
                  <div class="col-md-2 col-xs-12"><?php the_field('cf_2_value'); ?></div>
                  <div class="col-md-2 col-xs-12" title="<?php echo 'Avg. Rating: '.$avg_rating.' ('.$total_reviews.' '.($total_reviews > 1 ? 'reviews':'review').')'; ?>">
                      <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                      <!--<img src="<?php bloginfo('template_url'); ?>/images/stars.png" class="center-block" />-->
                  </div>
                  <div class="col-md-2 col-xs-12"><?php the_field('cf_3_value'); ?></div>
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









</section>

 

<?php get_footer(); ?>