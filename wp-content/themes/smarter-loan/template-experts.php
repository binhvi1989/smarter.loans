<?php 
/*Template Name: Our Expert */

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
      <div class="col-md-9 col-md-offset-1">
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
  <div class="container inner_wrapper blog_listing">
    <div class="row">
      <div class="col-md-8 col-sm-12">
      
      	
       <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

           <?php the_content(); ?>

          <?php endwhile; endif; ?>
          
          <div class="clearfix"></div>
          <div class="row">
          <div class="userrow">
          <?php $args = array(
				
				'role'         => 'expert_viewer',
				//'role__in'     => array(),				
			 );
		  	
			$blogusers = get_users($args);
			// Array of WP_User objects.
			foreach ( $blogusers as $user ) { 
			
			//$author_avatar  = get_avatar_url( $user->ID );
			?>
            
            
            
				
				
		<div class="col-md-4">

                 	<div class="item_expert">

                    	<a href="<?php get_option('home'); ?>/author/<?php echo $user->user_nicename;?>">

                    	<?php

						// Must be inside a loop.

						

						//echo $user->user_email;

						

						//echo get_avatar( $user->user_email, 150 );

				

						

            



						

					$authorID = $user->ID;
				
				
            if (get_avatar_data($authorID)['found_avatar'] == 1) {
                echo get_avatar( $authorID );
            } else if ( function_exists ( 'mt_profile_img' ) ) {
                mt_profile_img( $authorID, 
                    array(
                        'size' => 'thumbnail',
                        'attr' => array( 'alt' => get_the_author_meta( 'display_name' ) ),
                        'echo' => true,
                    )
                );
            }else{
				echo '<img src="' . get_bloginfo( 'stylesheet_directory' ) 

								. '/images/default-image.jpg" class="img-responsive" />';

			}
         

						
?>
				
						
						

				

						 

						 


                    	

                        <div class="expert_title"><?php echo $user->first_name;?> <?php echo $user->last_name;?></div>

                        <?php if(get_field('designation')){ ?><div class="expert_designation"><?php the_field('designation');?></div> <?php } ?>

                        <?php 

                        $string = $user->description;

                        $explode = array_slice(explode(' ', $string), 0, 20);

                        $implode = implode(" ",$explode);   

                        

						?>

                        <div class="content_expert"><?php echo $string; ?></div> 

                        

                        <div class="social_icons">

                        

                        	

							</div>

                        

                          </a>                             		

                    </div>

                 </div>
                <?php 
			}
           
		  
			/*wp_reset_query();
			$args = array( 'post_type' => 'experts', 'posts_per_page' => -1 );
			$loop = new WP_Query( $args );
			while ( $loop->have_posts() ) : $loop->the_post();*/

			
				
				 ?>
                 <?php /*?><div class="col-md-4">
                 	<div class="item_expert">
                    	<a href="<?php the_permalink(); ?>">
                    	<?php
						// Must be inside a loop.
						 
						if ( has_post_thumbnail() ) { ?>
							<div class="img_expert"><?php the_post_thumbnail('thumbnail'); ?></div>
						<?php }
						else {
							echo '<img src="' . get_bloginfo( 'stylesheet_directory' ) 
								. '/images/default-image.jpg" class="img-responsive" />';
						}
						?>
                    	
                        <div class="expert_title"><?php the_title();?></div>
                        <?php if(get_field('designation')){ ?><div class="expert_designation"><?php the_field('designation');?></div> <?php } ?>
                        <div class="content_expert"><?php the_content(); ?></div> 
                        
                        <div class="social_icons">
                        
                        	
							</div>
                        
                          </a>                             		
                    </div>
                 </div><?php */?>
                 <?php //endwhile; wp_reset_query(); ?>
                 </div>
        </div>
        
      </div>
      <?php get_sidebar(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>