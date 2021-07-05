<?php 
/*Template Name: Home Page*/
get_header(); 
?>
<ul id="homepage-slider">
<?php 
    $args = array( 'post_type' => 'slides', 'posts_per_page' => -1, 'order' =>'ASC' );
    $loop = new WP_Query( $args );
    while ( $loop->have_posts() ) : $loop->the_post();
	$featured_img_url = get_the_post_thumbnail_url(get_the_ID(),'full'); 			
?>
	<li>
        <div class="banner" style="background-image:url(<?php echo $featured_img_url; ?>);">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-1">
                    	<?php if (get_field('main_heading')):?>
                        <h1><?php the_field('main_heading'); ?></h1>
                        <?php endif;?>
                        <?php if (get_field('sub_heading')):?>
                        <h5><?php the_field('sub_heading'); ?></h5>
                        <?php endif;?>
                        <div class="cta_banner">
                            <div class="ctas">
                         <?php if (get_field('left_button_text')):?><a href="<?php the_field('left_button_link'); ?>" class="pink_big_btn"><?php the_field('left_button_text'); ?></a><?php endif;?>
                         		<?php if (get_field('left_button_text')):?>
                                <span><?php the_field('left_button_sub_heading'); ?></span>
                                <?php endif;?>
                            </div>
                            <div class="ctas">
                            	<?php if (get_field('right_button_text')):?><a href="<?php the_field('right_button_link'); ?>" class="blue_big_btn"><?php the_field('right_button_text'); ?></a><?php endif;?>
                         		<?php if (get_field('right_button_text')):?>
                                <span><?php the_field('right_button_sub_heading'); ?></span>
                                <?php endif;?>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</li>
	<?php endwhile; wp_reset_postdata();  ?>    
</ul>
<!--Temp Banner-->


<div class="container">

	<?php 

				// check for rows (parent repeater)
				if( have_rows('menu_main') ): ?>
					<div id="home-mobile-menu">
					<?php 

					// loop through rows (parent repeater)
					while( have_rows('menu_main') ): the_row(); ?>
						
						<h2 class="text-center"><?php the_sub_field('menu_title_top'); ?></h2>
						
						<div class="mob_menu__container">
						
							<?php 

							// check for rows (sub repeater)
							if( have_rows('menu') ): ?>
								<ul>
								<?php 

								// loop through rows (sub repeater)
								while( have_rows('menu') ): the_row();

									// display each item as a list - with a class of completed ( if completed )
									?>
									<li><a href="<?php the_sub_field('menu_link'); ?>"><span class="menu__icon"><img src="<?php the_sub_field('menu_icon'); ?>" alt="<?php the_sub_field('menu_title'); ?>" /></span> <?php the_sub_field('menu_title'); ?></a></li>
								<?php endwhile; ?>
								</ul>
							<?php endif; //if( get_sub_field('items') ): ?>
						</div>	

					<?php endwhile; // while( has_sub_field('menu_main') ): ?>
					</div>
				<?php endif; // if( get_field('menu_main') ): ?>

</div>





<section id="findloan" class="home_section table_home tab__home">
<h1 class="text-center">Select a Loan Type</h1>
<div class="container">
<?php echo do_shortcode(get_field('lender_tabs_shortcode')); ?>
<?php //echo do_shortcode('[lenders orderby="term_order" include="186,187,183,181,182,184,185"]'); ?>

<div class="text-center">
	<a href="<?php echo get_option('home'); ?>/pre-apply" class="blue_big_btn">Pre-Apply and we'll find a lender for you</a>
</div>
</div>
</section>

<div class="clearfix"></div>


<section class="container">

	<?php 

				// check for rows (parent repeater)
				if( have_rows('menu_main') ): ?>
					<div id="home-desktop-menu">
						
						
					<?php 
						
						
					// loop through rows (parent repeater)
					while( have_rows('menu_main') ): the_row(); 
						$condition = get_sub_field('show_on_desktop'); 
						
						//the_sub_field('show_on_desktop');
						?>
						
						<?php  if( $condition == 'yes' ) : ?>
						
						<h2 class="text-center"><?php the_sub_field('menu_title_top'); ?></h2>
						
						<div class="">
						
							<?php 

							// check for rows (sub repeater)
							if( have_rows('menu') ): ?>
								<ul class="new_blocks">
								<?php 

								// loop through rows (sub repeater)
								while( have_rows('menu') ): the_row();

									// display each item as a list - with a class of completed ( if completed )
									?>
									<li>
										<a href="<?php the_sub_field('menu_link'); ?>">
											<span class="menu__icon__"><img src="<?php the_sub_field('menu_icon'); ?>" alt="<?php the_sub_field('menu_title'); ?>" /></span> 
											<h4><?php the_sub_field('menu_title'); ?></h4>
										</a>
									</li>
								<?php endwhile; ?>
								</ul>
							<?php endif; //if( get_sub_field('items') ): ?>
						</div>	
						
						<?php endif; ?>

					<?php endwhile; // while( has_sub_field('menu_main') ): ?>
					</div>
				<?php endif; // if( get_field('menu_main') ): ?>

</section>




<section id="page-content" class="home_content">
<?php echo the_content();  ?>
</section>

<section class="home_section grey">
	<h1 class="text-center mix-heading">Why <span>Smarter.loans</span> ?</h1>
    <div class="container">
    	<div class="row">
    	<div class="col-md-4 col-xs-12">
        	<?php if( have_rows('left_list') ): ?>
                <ul class="left_text">            	
                    <?php $count1 = 1; while( have_rows('left_list') ): the_row(); ?>            
                    <li class="lft_<?php echo $count1; ?>"><a href="<?php the_sub_field('link'); ?>"><?php the_sub_field('list_content'); ?></a></li>     
                    <?php $count1++; endwhile; ?>                       
                </ul>
            <?php endif; ?>

        </div>
        <div class="col-md-4 hidden-xs hidden-sm"><img src="<?php the_field('mobile_graphic'); ?>" class="center-block img-responsive" /></div>
        <div class="col-md-4 col-xs-12">
        <?php if( have_rows('right_list') ): ?>
                <ul class="right_text">            	
                    <?php $count1 = 1; while( have_rows('right_list') ): the_row(); ?>            
                    <li class="rgt_<?php echo $count1; ?>"><a href="<?php the_sub_field('link'); ?>"><?php the_sub_field('list_content'); ?></a></li>     
                    <?php $count1++; endwhile; ?>                       
                </ul>
            <?php endif; ?>
        	
        </div>
    </div>
    </div>
    <div class="text-center"><a href="<?php echo get_option('home'); ?>/pre-apply" class="pink_big_btn">Pre-Apply</a></div>
</section>






<section class="home_section grey tesimonials_home">
	<h1 class="text-center mix-heading">The word on the street...</h1>
    <h4 class="text-center">Since 2016, Smarter Loans has helped thousands of Canadians obtain<br> different loans and financing with ease</h4>
	
    <div class="container">
    	<div class="row">
        	<div class="col-md-12">    
                <ul id="testimonials-slider" class="content-slider">
                
                <?php 
					$args = array( 'post_type' => 'testimonials', 'posts_per_page' => -1, 'order' =>'ASC',  
						'meta_query' => array(
							array(
								'key' => 'display_on_homepage',
								'value' => 'yes'        
							))    
				
					);
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post();                                        
                   // $lender_id=get_post_meta(get_the_ID(),"lender");
                                        
				?>
                
                
                    <li class="text-center">
                        
                        <div class="testi_content">
                            <?php the_field('review'); ?>
                        </div>
                        <div class="text-center info_testi">
                        	<span class="testi_author"><?php the_field('name'); ?></span>
                            <span class="testi_designation"><?php the_field('review_title'); ?></span>
                            <?php if (get_field('logo')){ ?>
                            	<img src="<?php the_field('logo'); ?>" class="center-block testi_logo" />
                            <?php } ?>
                        </div>
                    </li>
                    
                    <?php endwhile; ?>
                    
                    
                    
                    
                </ul>
            </div>
    	</div>
    </div>
    
    
    
    
    
    

</section>

<section class="home_section article_sec trust_lender_loan">
	<h1 class="text-center">Our Trusted Lenders</h1>
	<div class="container">
    	<div class="row">
        	 
            <?php echo do_shortcode('[trusted-lenders]');?>
        	
            
        </div>
    </div>
</section>



 
<?php get_footer(); ?>