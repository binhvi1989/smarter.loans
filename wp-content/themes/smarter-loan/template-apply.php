<?php 
/*
Template Name: Select Apply
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

  <div class="container inner_wrapper">

      <div class="row">

        

        <div class="col-md-12 col-sm-12">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

           <?php the_content(); ?>

          <?php endwhile; endif; ?>
          
        </div>
        
        <div class="clearfix"></div>
        
        <div class="select_items">
       
            
            <ul>
            	<?php

					if( have_rows('loan_category') ):				
					while ( have_rows('loan_category') ) : the_row();
				?>
            	<li class="col-md-3">
                	<a href="<?php the_sub_field('link'); ?>"  style="background-image:url(<?php the_sub_field('normal_icon'); ?>);background-repeat:no-repeat;">
                    	<h4><?php the_sub_field('loan_title'); ?></h4>
                        
                        <div class="cat_hover" style="background-image:url(<?php the_sub_field('hover_icon'); ?>);"></div>
                    </a>
                </li>
                <?php endwhile; endif; ?>
                
            </ul>
        
        </div>

        

        

      </div>

    </div>



</section>

 

<?php get_footer(); ?>