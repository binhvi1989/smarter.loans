<?php get_header(); 
include "get-youtube-comment-viewer.php";
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

          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <div class="single_video_image">

        <div class="single_video_text_space container">
          <?php $category = get_the_terms(get_the_ID(),'videos_category');
            foreach ($category as $cat) {
          ?>
            <h3 class="video_title"><?php echo $cat->name; ?></h3>
          <?php } ?>
            <h3><?php the_title(); ?></h3>
        </div>
        <div class="single_video">
        <iframe src="<?php echo get_field('video_link', get_the_ID()); ?>" style="width: 760px; height: 427px;"></iframe>
        </div>
      </div>
      <div class="single_social_link">
         <a class="video_portal_twitter" href="https://twitter.com/home?status=<?php the_permalink(); ?>" target="_blank"><i class="fa fa-twitter"></i> - Share on Twitter</a>
         <a class="video_portal_facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>"><i class="fa fa-facebook"></i> - Share on Facebook</a>
         <a class="video_portal_reddit" target="_blank" href="http://www.reddit.com/submit?url=<?php the_permalink(); ?>"><i class="fa fa-reddit-alien"></i> - Share on Reddit</a>
         <a class="video_portal_share_email" href="mailto:mailto:aumento.dev107@gmail.com?body=<?php the_permalink(); ?>"><i class="fa fa-envelope-o"></i> - Share on Email</a>
       </div>
      <?php endwhile; endif; wp_reset_query(); ?>
      




 <?php 
	$youtube_link_array1 = explode('/',get_field('video_link', get_the_ID()));
	$video_ID1 = end($youtube_link_array1);
	$data_youtube1 = get_comm_review($video_ID1);
//print_r($data_youtube1);
?>


<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "<?php echo $data_youtube1['title']; ?>",
  "description": "<?php echo $data_youtube1['description']; ?>",
  "thumbnailUrl": "https://i.ytimg.com/vi/<?php echo $video_ID1; ?>/sddefault.jpg",
  "uploadDate": "<?php echo $data_youtube1['publishedAt']; ?>",
  "duration": "<?php echo $data_youtube1['duration']; ?>",  
  "publisher": {
    "@type": "Organization",
    "name": "Smarter Loans",
    "logo": {
      "@type": "ImageObject",
      "url": "https://smarter.loans/wp-content/themes/smarter-loan/images/logo.png",
      "width": 287,
      "height": 40
    }
  },
  "contentUrl": "https://www.youtube.com/watch?v=<?php echo $video_ID1; ?>",
  "embedUrl": "https://www.youtube.com/embed/<?php echo $video_ID1; ?>"
}
</script>


<section>
  <div class="container inner_wrapper single_post">
    <div class="row single_video_padding">
      <div class="col-md-9 col-sm-12">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php if(has_tag()) {?>
        <div class="tags"><?php $posttags = get_the_tags(); if ($posttags) { foreach($posttags as $tag) {  echo $tag->name . ' &nbsp;';  }} ?></div>
        <?php } ?>
        
        <?php// echo do_shortcode('[DISPLAY_ULTIMATE_SOCIAL_ICONS]'); ?>
        
        <?php the_content(); ?>
        <?php endwhile; endif; wp_reset_query(); ?>
        
        <?php// echo do_shortcode('[DISPLAY_ULTIMATE_SOCIAL_ICONS]'); ?>
        
        <?php if (get_the_author_meta('description')) : ?>
      	<div class="author-box blog-author">
            <h3 class="author-name"><?php esc_html(the_author_meta('display_name')); // Displays the author name of the posts ?></h3>
            <div class="blog-flex">
              <div class="author-image">
                <?php
                     $author_id=$post->post_author;
                     $avatar = mt_profile_img($author_id, array('size' => array(96, 96), 'attr' => array('alt' => $alt, 'class' => "avatar avatar-{$size} photo"), 'echo' => false));
                  ?>  
              <?php if($avatar): 
                echo $avatar;
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
   <div class="col-md-3 col-sm-12">
    <?php dynamic_sidebar('Video Portal Sidebar'); ?>
  </div> 
  
  </div>
</div>
<?php
// $taxonomy = 'video_portal_category';
// $term_args = array(
//     'orderby' => 'name',
//     'order' => 'ASC'
// );
$category_get_id = get_the_terms(get_the_ID(),'videos_category');
// print_r($category_get_id[0]->term_id); exit;
// $terms = get_terms($taxonomy, $term_args);
// if (!empty($terms)) {
//     foreach ($terms as $term) {
        $args = array(
            'post_type' => 'videos',
            'tax_query' => array(
                array(
                    'taxonomy' => 'videos_category',
                    'field' => 'term_id',
                    'terms' => $category_get_id[0]->term_id,
                )
            ),
            'post_status' => 'publish',
            'posts_per_page' => 3,
            'post__not_in'=>array($post->ID)
        );
        $videos = new WP_Query($args);
        if(!empty($videos->have_posts())) {
        ?>
        <section>
            <div class="video_portal_about">
                <div class="container">   
                  <div class="row top_row">
                   <div class="col-md-5">
                        <h3 class="video_title">You Might also like</h3>    
                     </div>
                    </div>                 
                    <div class="row">        
                        <?php
                        while ($videos->have_posts()) : $videos->the_post();
                            ?>
                            <div class="col-md-4 col-sm-6">
                                <a href="<?php the_permalink(); ?>">
                                        <div class="video_item">    
                                            <!-- <iframe width="100%" height="195" src="<?php //echo get_field('video_link', get_the_ID()); ?>"></iframe>                     -->
                                            <?php
                                            $youtube_link_array = explode('/',get_field('video_link', get_the_ID()));
                                            $src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'full', false );
                                            if (!empty($src)) {
                                            ?>
                                            <img width="100%" height="195" class="vide_img" src="<?php echo $src[0]; ?>" />
                                            <?}else{?>
                                            <img width="100%" height="195" src="https://img.youtube.com/vi/<?php echo end($youtube_link_array); ?>/maxresdefault.jpg" />
                                            <?php }?>
                                            <div class="video_head_txt">
                                                <?php 
                                                $video_ID = end($youtube_link_array);
                                                $data_youtube = get_comm_review($video_ID);
                                                ?>
                                                <span class="wra_txt"><i class="fa fa-comments"></i><?php echo $data_youtube['commentCount']; ?></span>
                                                <span class="wra_txt_watch"><i class="fa fa-eye"></i><?php echo $data_youtube['viewCount']; ?></span>
                                            </div>
                                            <div class="video_youtube"></div>
                                        </div>
                                        <div class="video_text_space video_border">
                                            <h3><?php the_title(); ?></h3>
                                            <?php
                                            $expert = get_the_excerpt();
                                            if (!empty($expert)) { ?>
                                              <p class="video_expert"><?php echo $expert; ?></p>
                                            <?php }else{ ?>
                                              <p class="video_expert"></p>
                                            <?php } ?>
                                            <span class="video_date"><?php echo get_the_date('F j, Y'); ?></span>  
                                        </div>
                                </a>
                            </div>
                        <?php endwhile;
                        ?>
                        <?php wp_reset_query(); ?>
                    </div>
                </div>
            </div>
        </section>
        <?php
        }
//     }
// }
?>
</section>
<?php get_footer(); ?>
