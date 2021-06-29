<?php 
/*Template Name: Province Level Pages*/
get_header(); 
global $post;
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
  <div class="container inner_wrapper loan_page">
    <h1 class="text-center pg_title">
      <?php the_title(); ?>
    </h1>
    <div class="row top_pos">
      <div class="col-md-12 col-sm-12 main_content_local">
        <div class="row">
          <?php if (get_field('left_content')){ ?>
          <div class="<?php if (get_field('right_content')){ echo 'col-md-6'; }else{ echo 'col-md-12';} ?>">
            <?php the_field('left_content'); ?>
          </div>
          <?php } ?>
          <?php if (get_field('right_content')){ ?>
          <div class="col-md-6">
            <?php the_field('right_content'); ?>
          </div>
          <?php } ?>
        </div>
        <div class="row local_cta text-center"><a href="<?php echo get_option('home'); ?>/pre-apply/" class="pink_big_btn">Pre-Apply for a Loan </a></div>
        <section class="home_section table_home">
    <div class="container">
         <?php if (get_field('lender_listing_province')){ ?>
                <?php echo do_shortcode(get_field('lender_listing_province')); ?>
        <?php } ?>
        <div class="text-center">
                <a href="<?php echo get_option('home'); ?>/pre-apply" class="blue_big_btn">Pre-Apply and we'll find a lender for you</a>
        </div>
    </div>
</section>
      </div>
    </div>
  </div>
	
<div class="">
    <div class="container">
      <div class="row">
		  <div class="col-md-12">
		  	
			  <?php the_content(); ?>
		  
		  </div>
	  </div>
	</div>
	</div>
	
  <div class="other_services_province">
    <div class="container">
      <div class="row">
      <h3 class="text-center">Loans By Province</h3>
        <ul>
          <li><a href="<?php echo get_option('home'); ?>/alberta/">Alberta Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/british-columbia/">British Columbia Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/manitoba/">Manitoba Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/newfoundland/">Newfoundland Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/new-brunswick/">New Brunswick Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/northwest-territories/">Northwest Territories Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/nova-scotia/">Nova Scotia Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/nunavut/">Nunavut Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/ontario/">Ontario Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/prince-edward-island/">PEI Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/quebec/">Quebec Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/saskatchewan/">Saskatchewan Loans</a></li>
          <li><a href="<?php echo get_option('home'); ?>/yukon/">Yukon Loans</a></li>
        </ul>
        <h3 class="text-center">Loan Types and Cities in <?php print (str_replace('-', ' ', strtolower($post->post_name))); ?></h3>
        <?php 

				
				$parent_id = wp_get_post_parent_id( $post->ID );
				$mypost = get_post($parent_id); 
				$slug = $mypost->post_name;
				$children = get_pages( 

				array(

					'sort_column' => 'title',

					//'sort_order' => 'ASC',

					//'hierarchical' => 0,
					'depth' => 0 ,

					'parent' => $post->ID,

					'post_type' => 'page',

				)); ?>
        

        <select class="SlectBox" placeholder="this is placeholder" required="required" onchange="javascript:location.href = this.value;">           
          <?php 
          foreach( $children as $post ) { 
                    setup_postdata( $post ); 
            $mypost_slug = $post->post_name; 
          ?>
            <option value="<?php the_permalink(); ?>"><?php print (str_replace('-', ' ', strtolower($mypost_slug))); ?></option>
          <?php } wp_reset_query(); ?>      
        </select>

          <!--<ul>
            
			<?php foreach( $children as $post ) { 
                        setup_postdata( $post ); 
						$mypost_slug = $post->post_name; 
						?>
                    <li><a href="<?php the_permalink(); ?>"><?php print (str_replace('-', ' ', strtolower($mypost_slug))); ?></a></li>
               <?php } wp_reset_query(); ?>   
                
                
            </ul>-->
        
      </div>
    </div>
  </div>

  <div class="trust_lender_loan local_lender">
    <div class="container">
      <div class="row">
        <h3>Elite Trusted Lenders</h3>
        <p>These companies are recognized for their excellent service, product offering and financial literacy education for all Canadians.</p>
        <p><?php  echo do_shortcode('[trusted-lenders]'); ?></p>
      </div>
    </div>
  </div>
</section>
<?php get_footer(); ?>
