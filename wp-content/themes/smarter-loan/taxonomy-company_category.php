<?php 

get_header();

$term = get_queried_object();
?>



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
	<h1 class="text-center pg_title"><?php $current_term = single_term_title( "", false ); echo $current_term; ?></h1>
      <div class="row top_pos">
      
        <div class="col-md-12 col-sm-12" style="margin-bottom: 25px;">

        	
            	<?php //echo single_term_slug( "", false ); ?>
                	<?php echo term_description(); ?>
               
                
            </div>

        <h3 class="text-center lender_list_heading" style="margin-top: 25px;"><?php the_field('heading_above_the_table', $term); ?></h3>


		  
		 
        <?php if( have_rows('ccfaqs', $term) ): ?>
	<?php $ccrowCount = count( get_field('ccfaqs', $term) ); //GET THE COUNT ?>
	<?php $cci = 1; ?>
       <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
	<?php while( have_rows('ccfaqs', $term) ): the_row(); ?>
		<?php $ccquestion = get_sub_field('ccquestion', $term); $ccanswer = get_sub_field('ccanswer', $term); ?>
		{
            "@type": "Question",
            "name": "<?php echo $ccquestion; ?>",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "<?php echo $ccanswer; ?>"
            }
          } <?php if($cci != $ccrowCount): ?>,<?php endif; ?> <?php $cci++; ?><?php endwhile; ?>]}</script>
<?php endif;  ?>
		  
		  
		  
		  

		  <div class="clearfix"></div>


<div class="tab-pane">
      <div class="table_header">
      	<div class="row">
        	<div class="col-md-2">Company</div>
            <div class="col-md-2"><?php the_field('cf1_title', $term); ?></div>
            <div class="col-md-2"><?php the_field('cf2_title', $term); ?></div>
            <div class="col-md-2">Reviews</div>
            <div class="col-md-2"><?php the_field('cf3_title', $term); ?></div>
            <div class="col-md-2"></div>
        </div>
      </div>
	
	
	
     <?php 
	
	// set up a new query for each category, pulling in related posts.
    $services = new WP_Query(
        array(
            'post_type' => 'company',
            'showposts' => -1,
            'tax_query' => array(
                array(
                    'taxonomy'  => 'company_category',
                    'terms'     => $current_term,
                    'field'     => 'slug'
                )
            )
        )
    );
	
	
	?>

        <?php //setup_postdata($post); ?>
	
	
	<?php while ($services->have_posts()) : $services->the_post(); ?>
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
                  <div class="col-md-2 col-xs-12 apply-now">
					  
					   <?php if( get_field('button_link') ): ?><a href="<?php echo $redirect_url; ?>" target="_blank" class="button" rel="nofollow noindex noreferrer noopener"><?php if(get_field('button_text')){ the_field('button_text');}else{?>Apply Now<?php } ?></a><?php endif; ?>
					  
					  
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
           <?php endwhile; ?>
            <?php 
          
        wp_reset_postdata(); //important ?>
</div>





<?php
$queried_object = get_queried_object(); 
echo get_field( 'content_after_table', $queried_object->taxonomy.'_'.$queried_object->term_id );
?>



          
      
       
          

        </div>

        

        

      </div>

    </div>


<?php /*?><div class="other_services_province">

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

</div><?php */?>


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




</section>

 

<?php get_footer(); ?>