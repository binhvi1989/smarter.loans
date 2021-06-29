<?php 
/*Template Name: Local Full List*/
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
      
        <div class="col-md-12 col-sm-12 main_content_local">

        	<div class="row">
            	<?php if (get_field('left_detail')){ ?>
            	<div class="<?php if (get_field('right_detail')){ echo 'col-md-6'; }else{ echo 'col-md-12';} ?>">
                	<?php the_field('left_detail'); ?>
                </div>
                <?php } ?>
                <?php if (get_field('right_detail')){ ?>
                <div class="col-md-6">
                	<?php the_field('right_detail'); ?>
                </div>
                <?php } ?>
            </div>
            
            <div class="row local_cta text-center"><a href="<?php echo get_option('home'); ?>/pre-apply/" class="pink_big_btn">Pre Apply for Loan </a></div>

        <section class="home_section table_home">
    <div class="container">
         <?php if (get_field('lenders_listing')){ ?>
                <?php echo do_shortcode(get_field('lenders_listing')); ?>
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

<?php if( have_rows('loan_providers_list') ): ?>
<div class="other_services_province">

	<div class="container">
    	<div class="row">
        	<?php the_field('detail_about_other_province'); ?>
            
            <ul>
            	<?php while( have_rows('loan_providers_list') ): the_row();  ?>
                <li><a href="<?php the_sub_field('plink'); ?>"><?php the_sub_field('ptitle'); ?></a></li>
                <?php endwhile; ?>
            </ul>
            
        </div>
    </div>

</div>
<?php endif; ?>

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
        <p><?php  echo do_shortcode('[trusted-lenders]'); ?></p>
        </div>
    </div>
</div>


</section>

 

<?php get_footer(); ?>