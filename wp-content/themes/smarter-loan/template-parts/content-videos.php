<?php
/**
 * Template part for displaying a video item
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

?>

<div class="col-md-4 col-sm-6">
    <div class="video_des_link">
        <a href="<?php the_permalink(); ?>" style="text-decoration: none;">
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
