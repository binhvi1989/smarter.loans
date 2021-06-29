<?php 
/*Template Name: Local Individual Sub-Pages*/
get_header(); 
	$catID = get_field('loan_category');	
	$termObject = get_term_by( 'id', absint($catID), 'loan_category' );
	$loanTermName = $termObject->name;
	
	
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
	<h1 class="text-center pg_title"><?php the_title(); ?></h1>
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
            
            <div class="row local_cta text-center">
            <?php if (get_field('button_link') and get_field('button_title') ) {?>
            <a href="<?php the_field('button_link'); ?>" class="pink_big_btn"><?php the_field('button_title');?> </a>
            <?php } ?>
            </div>

        <section class="home_section table_home">
    <div class="container">
         <?php if (get_field('shortcode')){ ?>
                <?php echo do_shortcode(get_field('shortcode')); ?>
        <?php } ?>
        <div class="text-center">
                <a href="<?php echo get_option('home'); ?>/pre-apply" class="blue_big_btn">Pre-Apply and we'll find a lender for you</a>
        </div>
        <?php if (get_field('auto_generated_seo_field')){ ?>
        	<div class="row seo-auto-generated">
            	<div class="col-md-12">
                	<?php the_field('auto_generated_seo_field'); ?>
                </div>
            </div>
        <?php } ?>
    </div>
</section>







          
      
       
          

        </div>

        

        

      </div>

    </div>

<?php if (get_field('page_type') == 'loan' || get_field('page_type') == ''){ ?>

<div class="other_services_province">

	<div class="container">
    	<div class="row">

        <?php 
		
		

				global $post;
				
				
					//Get parent template filename
				$parentTemplate = get_post_meta($post->post_parent,'_wp_page_template',true);
				
				 $parent_id = wp_get_post_parent_id( $post->ID );  
				$post_data = get_post($post->post_parent);
				$parent_slug = $post_data->post_name;

				//echo $parent_id;
				$children = get_pages( 

				array(

					'sort_column' => 'title',

					//'sort_order' => 'ASC',

					//'hierarchical' => 0,
					'exclude' => $post->ID,
					'parent' => $parent_id,

					'post_type' => 'page',

				)); ?>
        	 <h3 class="text-center">Loan Types and Cities in <?php echo $parent_slug; ?> <?php //echo $parentTemplate; ?></h3>
        	<?php //the_field('detail_about_other_province'); ?>
            
            
            <select class="SlectBox" placeholder="this is placeholder" required="required" onchange="javascript:location.href = this.value;">           
                <?php 
                foreach( $children as $post ) { 
                    setup_postdata( $post ); 
                    $mypost_slug = $post->post_name; 
                ?>
                    <option value="<?php the_permalink(); ?>"><?php print (str_replace('-', ' ', strtolower($mypost_slug))); ?></option>
                <?php } wp_reset_query(); ?>      
            </select>
            
        </div>
    </div>

</div>

<?php }elseif(get_field('page_type') == 'city'){ ?>

<div class="other_services_province">

	<div class="container">
    	<div class="row">
			<?php 

				global $post;
				$parent_id = wp_get_post_parent_id( $post->ID );
				$mypost = get_post($parent_id); 
				$slug = $mypost->post_name;
				$children = get_pages( 

				array(

					'sort_column' => 'title',

					//'sort_order' => 'ASC',

					//'hierarchical' => 0,

					'parent' => $post->ID,

					'post_type' => 'page',

				)); ?>
        	<h3 class="text-center">Different Types of Loans in <?php echo $post->post_name; ?>, <?php echo $slug; ?></h3>
            
            
			<ul>
            
			<?php foreach( $children as $post ) { 
                        setup_postdata( $post ); 
						$mypost_slug = $post->post_name; 
						?>
                    <li><a href="<?php the_permalink(); ?>"><?php print (str_replace('-', ' ', strtolower($mypost_slug))); ?></a></li>
               <?php } wp_reset_query(); ?>   
                
                
            </ul>
            
            
        </div>
    </div>

</div>

<?php } ?>


<?php if( have_rows('personal_loan_offered') ): ?>
<div class="offering">

	<div class="container">
    	<div class="row">
        	<h3>Types of personal loans offered:</h3>
        	<ul>
            	<?php while( have_rows('personal_loan_offered') ): the_row();  ?>
                <li><?php the_sub_field('offering'); ?></li>
                <?php endwhile; ?>
            </ul>
        </div>
    </div>
</div>
<?php endif; ?>

<div class="trust_lender_loan local_lender">

	<div class="container">
    	<div class="row">
        	<h3>Elite Trusted Lenders</h3>
            <p>These companies are recognized for their excellent service, product offering and financial literacy education for all Canadians.</p>
            <p><?php echo do_shortcode('[trusted-lenders]'); ?></p>
        </div>
    </div>
</div>


</section>

 

<?php get_footer(); ?>