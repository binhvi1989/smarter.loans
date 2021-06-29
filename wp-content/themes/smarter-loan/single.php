<?php 


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
  <div class="container inner_wrapper single_post">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h1 class="entry_title"><?php the_title(); ?></h1>
        <div class="post-meta"><?php the_date('M d, Y') ?> by <?php the_author(); ?></div>
        <?php if(has_tag()) {?>
        <div class="tags"><?php $posttags = get_the_tags(); if ($posttags) { foreach($posttags as $tag) {  echo $tag->name . ' &nbsp;';  }} ?></div>
        <?php } ?>
        
        <?php echo do_shortcode('[DISPLAY_ULTIMATE_SOCIAL_ICONS]'); ?>
        
        <div class="single_image"><?php the_post_thumbnail('full',array('class'=>'img-responsive center-block')); ?></div>
        <?php the_content(); ?>
        <?php endwhile; endif; wp_reset_query(); ?>
        
        <?php echo do_shortcode('[DISPLAY_ULTIMATE_SOCIAL_ICONS]'); ?>
        
        <?php if (get_the_author_meta('description')) : ?>
      	<div class="author-box blog-author">
            <h3 class="author-name"><?php esc_html(the_author_meta('display_name')); // Displays the author name of the posts ?></h3>
            <div class="blog-flex">
              <div class="author-image">
              <?php if($avatar = get_avatar(get_the_author_meta('ID')) !== FALSE): 
                echo get_avatar( get_the_author_meta( 'ID' ) , 96 );
              else: ?>
              <img src="<?php echo get_template_directory_uri();?>/images/client-1.png" alt="Author">
              <?php endif; ?>
              </div>
            <p class="author-description"><?php esc_textarea(the_author_meta('description')); // Displays the author description added in Biographical Info ?></p>
          </div>
        </div>
<?php endif; ?>
        
        <div class="row">
        
        <?php
			//for use in the loop, list 5 post titles related to first tag on current post
			$tags = wp_get_post_tags($post->ID);
			if ($tags) {
			echo '<h3 class="related_heading">Related Posts</h3>';
			$first_tag = $tags[0]->term_id;
			$args=array(
			'tag__in' => array($first_tag),
			'post__not_in' => array($post->ID),
			'posts_per_page'=>6,
			'caller_get_posts'=>1
			);
			$my_query = new WP_Query($args);
			if( $my_query->have_posts() ) {
			while ($my_query->have_posts()) : $my_query->the_post(); ?>
            
            
            <div class="col-md-6">
            	<div class="related_item">
                <div class="rel_image"><a href="<?php the_permalink() ?>"><?php the_post_thumbnail('medium', array('class'=>'img-responsive')); ?></a></div>
                <div class="rel_content">
                    	<h4><a href="<?php the_permalink() ?>"><?php the_title(); ?></a></h4>
                        <h6><?php the_time('F j, Y'); ?></h6>
                    </div>
                </div>
            </div>
			
            
			 
			<?php
			endwhile;
			}
			wp_reset_query();
			}
		?>
		</div>
      </div>
      <?php get_sidebar(); ?>
    </div>
  </div>
</section>
<?php get_footer(); ?>
