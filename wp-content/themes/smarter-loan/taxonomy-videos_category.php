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
<?php
wp_reset_query();
$category = get_queried_object();
        ?>
        <section>
            <div class="video_portal_about">
                <div class="container">
                    <div class="row top_row video_portal_category_desc">
                        <div class="col-md-5">
                            <h3 class="video_title"><?php echo $category->name; ?></h3>
                            <div class="video_title_border"></div>                	
                        </div>
                    </div>            
                    <div class="row">        
                       <?php			
						//echo $category->term_id;
						$catID = $category->term_id;
						wp_reset_query();
						$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
			                $query = array(
			                    'post_type' => 'videos',
			                    'paged' => $paged,
								'order' =>'DESC', 
								'cat' => $catID					
			                );                
			                $categoryPost = get_posts($query);
			                if (have_posts()) : while (have_posts()) : the_post(); ?>
                            <div class="col-md-4 col-sm-6">
                                <a href="<?php the_permalink(); ?>">
                                        <div class="video_item">	  
                                            <!-- <iframe width="100%" height="195" src="<?php //echo get_field('video_link', get_the_ID()); ?>"></iframe>	                    -->
                                            <?php
                                            $youtube_link_array = explode('/',get_field('video_link', get_the_ID()));
                                            $src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'full', false );
                                            if (!empty($src)) {
                                            ?>
                                            <img class="vide_img" width="100%" height="195" src="<?php echo $src[0]; ?>" />
                                            <?}else{?>
                                            <img class="vide_img" width="100%" height="195" src="https://img.youtube.com/vi/<?php echo end($youtube_link_array); ?>/maxresdefault.jpg" />
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
                       	<?php $count++; endwhile; endif; ?>
                        <?php// wp_reset_query(); ?>
                    </div>
                </div>
            </div>
        </section>       

<?php get_footer(); ?>