<?php

/* Template Name: Videos */

get_header(); 
include "get-youtube-comment-viewer.php";
?>
<style>
    ul{
        list-style: none outside none;
        padding-left: 0;
        margin: 0;
    }
    .demo .item{
        margin-bottom: 60px;
    }
    /*.demo{
            width: 800px;
    }*/
    .playbutton {
   background: url(<?php echo get_stylesheet_directory_uri()."/images/"?>play-button-white-bg1.png) center center no-repeat;
  position: absolute;
  top: 47%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -37px 0 0 -63px;
  background-size: cover;
  z-index: 10;
}
    .ytvideo {
  position: relative;
  margin: 0;
  padding: 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  /* pour anciens Chrome et Safari */
  background-size: cover;
  /* version standardisée */
  cursor: pointer;
}

.ytvideo iframe {
  border-style: none;
  height: 100%;
  width: 100%;
}

.ytvideo .seo {
  display: none;
}
</style>
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
// $taxonomyto = 'video_portal_category';
// $term_argsto = array(
//     'orderby' => 'name',
//     'order' => 'ASC'
// );
// $termsto = get_terms($taxonomyto, $term_argsto);
    $featuredVideos = get_posts(array(
    	'post_type' => 'videos',
    	'posts_per_page' => 3,
    	'order' => 'DESC',
    	'meta_key' => 'is_featured',
    	'meta_value' => 'Yes'
    )); 
    // echo '<pre>';
    // // echo $featuredVideos[0]->ID;post_excerpt
    // print_r($featuredVideos);
    // exit();
if( $featuredVideos ):   
?>


<section>
    <div class="video-portal-banner">
        <div class="container">
            <div class="slide-body">
                <?php if($featuredVideos[0]){ ?>
            	<article class="post-item">
            		<div class="post-item-wrap">
            			<div class="blog-pic">
            			    <?php
                                $youtube_link_array = explode('/', get_field('video_link', $featuredVideos[0]->ID));
                                $src = wp_get_attachment_image_src(get_post_thumbnail_id($featuredVideos[0]->ID), 'full', false);
                                $video_ID = end($youtube_link_array);
                                $data_youtube = get_comm_review($video_ID);
                                if (!empty($src)) {
                            ?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[0]->guid; ?>" title="<?php echo $featuredVideos[0]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="<?php echo $src[0]; ?>">
            				    <span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?} else {?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[0]->guid; ?>" title="<?php echo $featuredVideos[0]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="https://img.youtube.com/vi/<?php echo end($youtube_link_array); ?>/maxresdefault.jpg">
            				    <span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?php } ?>
            			</div>
            			<div class="absolute-gradient"></div>
            			<div class="listing-content dark-background overlay-background">
            				<a href="<?php echo $featuredVideos[0]->guid; ?>"><h3 class="entry-title h2 h5-mobile post-title"><?php echo $featuredVideos[0]->post_title; ?></h3>            					
                				<div class="entry-meta post-meta meta-font">
                					<div class="post-meta-wrap">
                						<div class="comment-count"><i class="fa fa-comments"></i><span><?php echo $data_youtube['commentCount']; ?></span>
                						</div>
                						<div class="view-count"><i class="fa fa-eye" aria-hidden="true"></i><span><?php echo $data_youtube['viewCount']; ?></span>
                						</div>
                					</div>
                				</div>
            				</a>
            			</div>
            		</div>
            	</article>
            	<? } if($featuredVideos[1]){?>
            	<article class="post-item">
            		<div class="post-item-wrap">
            			<div class="blog-pic">
            			    <?php
                                $youtube_link_array = explode('/', get_field('video_link', $featuredVideos[1]->ID));
                                $src = wp_get_attachment_image_src(get_post_thumbnail_id($featuredVideos[1]->ID), 'full', false);
                                $video_ID = end($youtube_link_array);
                                $data_youtube = get_comm_review($video_ID);
                                if (!empty($src)) {
                            ?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[1]->guid; ?>" title="<?php echo $featuredVideos[1]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="<?php echo $src[0]; ?>">
            					<span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?} else {?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[1]->guid; ?>" title="<?php echo $featuredVideos[1]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="https://img.youtube.com/vi/<?php echo end($youtube_link_array); ?>/maxresdefault.jpg">
            					<span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?php } ?>
            			</div>
            			<div class="absolute-gradient"></div>
            			<div class="listing-content dark-background overlay-background">
            				<a href="<?php echo $featuredVideos[1]->guid; ?>"><h3 class="entry-title h3 h5-mobile post-title"><?php echo $featuredVideos[1]->post_title; ?></h3>
                			    <div class="entry-meta post-meta meta-font">
                					<div class="post-meta-wrap">
                						<div class="comment-count"><i class="fa fa-comments"></i><span><?php echo $data_youtube['commentCount']; ?></span>
                						</div>
                						<div class="view-count"><i class="fa fa-eye" aria-hidden="true"></i><span><?php echo $data_youtube['viewCount']; ?></span>
                						</div>
                					</div>
                				</div>
            				</a>
            			</div>
            		</div>
            	</article>
            	<?php } if($featuredVideos[2]){ ?>
            	<article class="post-item">
            		<div class="post-item-wrap">
            			<div class="blog-pic">
            			    <?php
                                $youtube_link_array = explode('/', get_field('video_link', $featuredVideos[2]->ID));
                                $src = wp_get_attachment_image_src(get_post_thumbnail_id($featuredVideos[2]->ID), 'full', false);
                                $video_ID = end($youtube_link_array);
                                $data_youtube = get_comm_review($video_ID);
                                if (!empty($src)) {
                            ?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[2]->guid; ?>" title="<?php echo $featuredVideos[2]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="<?php echo $src[0]; ?>" >
            					<span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?} else { ?>
            				<div class="blog-pic-wrap">
            					<a href="<?php echo $featuredVideos[2]->guid; ?>" title="<?php echo $featuredVideos[2]->post_title; ?>" class="blog-img">
            						<img class="blog-picture" src="https://img.youtube.com/vi/<?php echo end($youtube_link_array); ?>/maxresdefault.jpg" >
            					<span class="video-icon video-popup-control"></span></a>
            				</div>
            				<?php } ?>
            			</div>
            			<div class="absolute-gradient"></div>
            			<div class="listing-content dark-background overlay-background">
            				<a href="<?php echo $featuredVideos[2]->guid; ?>" ><h3 class="entry-title h5 post-title"> <?php echo $featuredVideos[2]->post_title; ?></h3>
                			    <div class="entry-meta post-meta meta-font">
                					<div class="post-meta-wrap">
                						<div class="comment-count"><i class="fa fa-comments"></i><span><?php echo $data_youtube['commentCount']; ?></span>
                						</div>
                						<div class="view-count"><i class="fa fa-eye" aria-hidden="true"></i><span><?php echo $data_youtube['viewCount']; ?></span>
                						</div>
                					</div>
                				</div>
            				</a>
            			</div>
            		</div>
            	</article>
            	
            	<?php } ?>
            </div>
        </div>
    </div>
</section>

<?php endif; ?>

<?php
$taxonomy = 'videos_category';
$term_args = array(
    'orderby' => 'name',
    'order' => 'ASC'
);
$terms = get_terms($taxonomy, $term_args);
if (!empty($terms)) {
    foreach ($terms as $term) {
        $args = array(
            'post_type' => 'videos',
            'tax_query' => array(
                array(
                    'taxonomy' => 'videos_category',
                    'field' => 'term_id',
                    'terms' => $term->term_id,
                )
            ),
            'post_status' => 'publish',
            'posts_per_page' => 6
        );
        $videos = new WP_Query($args);
        //if(count($videos->have_posts()) > 0) {
        ?>
        <section>
            <div class="video_portal_about video-slider-warp">
                <div class="container">
                    <div class="row top_row">
                        <div class="col-md-5">
                            <h3 class="video_title"><?php echo $term->name; ?></h3>
                            <div class="video_title_border"></div>                	
                        </div>
                    </div>            
                    <div class="row">        
                        <?php
                        while ($videos->have_posts()) : $videos->the_post();
                            ?>
                            <div class="col-md-4 col-sm-6">
                                <div class="video_des_link">
                                <a href="<?php the_permalink(); ?>">
                                        <div class="video_item">	  
                                            <!-- <iframe width="100%" height="195" src="<?php //echo get_field('video_link', get_the_ID()); ?>"></iframe>	                    -->
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
                                            	// echo $expert;
                                             if (!empty($expert)) { ?>
                                             <p class="video_expert"><?php echo $expert; ?></p>
                                             <?php }else{ ?>
                                            	<p class="video_expert"></p>
                                             <?php } ?>
                                            <span class="video_date"><?php echo get_the_date('F j, Y'); ?></span>  
                                        </div>
                                </a>
                            </div>
                             </div>
                        <?php endwhile;
                        ?>
                        <?php wp_reset_query(); ?>
                    </div>

                </div>
            </div>
        </section>
        <?php
        //}
    }
}
?>
<script>
    // jQuery(document).ready(function () {
    //     jQuery('#image-gallery').lightSlider({
    //         gallery: false,
    //         item: 1,
    //         thumbItem: 9,
    //         slideMargin: 0,
    //         speed: 500,
    //         auto: false,
    //         loop: false,
    //         onSliderLoad: function () {
    //             jQuery('#image-gallery').removeClass('cS-hidden');
    //         }
    //     });
    // });
</script>
<script src="https://www.youtube.com/iframe_api"></script>
<script>
    // jQuery('.ytvideo[data-video]').one('click', function() {
    //     var $this = jQuery(this);
    //     $this.html('<iframe allow="autoplay" class="youtube-video-demo" allowscriptaccess="always"  src="' + $this.data("video") + '?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1"></iframe>');
    // });
//     jQuery(document).ready(function () {
//         var player;
//         jQuery('.lSNext').on('click', function () {
//         player.pauseVideo();
        
//     });
// });

   
// jQuery(document).ready(function () {
// jQuery('.lSNext').on('click', function () {
   
//     jQuery('.lslide.active').prev().addClass("prev_of_active");
//     jQuery('.prev_of_active .ytvideo .youtube-video-demo').addClass("active_iframe");
//     jQuery('.prev_of_active .ytvideo .youtube-video-demo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
//      jQuery('.lslide.active').prev().removeClass("prev_of_active");
//        jQuery('.prev_of_active .ytvideo .youtube-video-demo').removeClass("active_iframe");
// });
// jQuery('.lSPrev').on('click', function () {
//     jQuery('.lslide.active').next().addClass("prev_of_active");
//     jQuery('.prev_of_active .ytvideo .youtube-video-demo').addClass("active_iframe");
//     jQuery('.prev_of_active .ytvideo .youtube-video-demo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
//     jQuery('.lslide.active').prev().removeClass("prev_of_active");
//        jQuery('.prev_of_active .ytvideo .youtube-video-demo').removeClass("active_iframe");
// });

// jQuery(".lSNext").on("click", function(){
//     if (jQuery(this).hasClass("goToStart")) {
//         jQuery(this).parents(".lSSlideWrapper").next().children().first().trigger("click");
//         jQuery(this).removeClass("goToStart")
//     }

//     if (jQuery(this).prev().hasClass("goToEnd")) {
//         jQuery(this).prev().removeClass("goToEnd")
//     }
// });

// jQuery(".lSPrev").on("click", function(){
//     if (jQuery(this).hasClass("goToEnd")) {
//         jQuery(this).parents(".lSSlideWrapper").next().children().last().trigger("click");
//         jQuery(this).removeClass("goToEnd")
//     }

//     if (jQuery(this).next().hasClass("goToStart")) {
//         jQuery(this).next().removeClass("goToStart")
//     }
// });
// });
</script>




<script>
 // function updateContainer1() {

// var highestBox = 0;
//  jQuery('.video-slider-warp .row .video_border ').each(function(){  
//           if(jQuery(this).height() > highestBox){  
//           highestBox = jQuery(this).height();  
//    }
// });    
// jQuery('.video-slider-warp .row .video_border ').height(highestBox);
//  }
// jQuery(document).ready(function(){
//  updateContainer1();
 //   jQuery(window).resize(function() {
//        updateContainer1();
//    });
// }); //
</script>

<?php get_footer(); ?>