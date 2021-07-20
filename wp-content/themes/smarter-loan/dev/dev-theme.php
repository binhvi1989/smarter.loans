<?php
function dev_enqueue_style_js(){
     wp_enqueue_style( 'dev_style', get_bloginfo("template_url").'/dev/css/dev.css',true,true );
     wp_enqueue_script('dev_script', get_bloginfo("template_url"). '/dev/js/dev.js', array(), false, true,9999999);
}
add_action( 'wp_enqueue_scripts', 'dev_enqueue_style_js',99999999 );
function _remove_query_strings_3( $src, $handle ){
	   $rqs = explode( '?ver', $src );
        if($handle=='dev_script'||$handle=='dev_style'){
            switch ($handle) {
                case 'dev_script':
                   $ver = '?ver='.filemtime(get_template_directory(). '/dev/js/dev.js');
                    break;
                case 'dev_style':
                    $ver = '?ver='.filemtime(get_template_directory(). '/dev/css/dev.css');
                    break;
            }
            return $rqs[0].$ver;
        }else{
            return $src;
        }

}
if ( is_admin() ) {
// Remove query strings from static resources disabled in admin
}else {
    add_filter( 'script_loader_src', '_remove_query_strings_3', 16, 2 );
    add_filter( 'style_loader_src', '_remove_query_strings_3', 16, 2 );
}

add_filter( 'manage_videos_posts_columns', 'smashing_filter_videos_columns' );
function smashing_filter_videos_columns( $columns ) {
  $columns['featured'] = __( 'Is Featured' );  
  return $columns;
}
add_action( 'manage_videos_posts_custom_column', 'smashing_videos_column', 10, 2);
function smashing_videos_column( $column, $post_id ) {
  if ( $column == 'featured' ) {
    echo get_field("is_featured",$post_id);
  }
}
function ct_get_comm_review($video_ID)
{
$video_url_json = wp_remote_get("https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet,contentDetails&id=" . $video_ID . "&key=AIzaSyDdzIBhHMUrBu4y5aaoo4clJfACIO8aJcY");
$video_url_json_data = json_decode($video_url_json['body'],true);
$videoViewsCount = $video_url_json_data['items'][0]['statistics']['viewCount'];
$videoCommentsCount = $video_url_json_data['items'][0]['statistics']['commentCount'];
$videoTitle = $video_url_json_data['items'][0]['snippet']['title'];
$PublishDate = $video_url_json_data['items'][0]['snippet']['publishedAt'];
$videoDuration = $video_url_json_data['items'][0]['contentDetails']['duration'];
$videoDescription = $video_url_json_data['items'][0]['snippet']['description'];
// $videoLike = $video_url_json_data['items'][0]['statistics']['likeCount'];
// $videoUnlike = $video_url_json_data['items'][0]['statistics']['dislikeCount'];
// $videoAuthorName = $video_url_json_data['items'][0]['snippet']['channelTitle'];
// $videoDate = $video_url_json_data['items'][0]['snippet']['publishedAt'];

// $interval = new DateInterval($videoDuration['duration']);
// $videoDuration['duration_sec'] = $interval->h * 3600 + $interval->i * 60 + $interval->s;

return array('viewCount' => ct_restyle_text($videoViewsCount) , 'commentCount' => ct_restyle_text($videoCommentsCount), 'description' => $videoDescription, 'title' => $videoTitle, 'duration' => $videoDuration,'publishedAt' => $PublishDate);
}
function ct_restyle_text($input){
    $input = number_format($input);
    $input_count = substr_count($input, ',');
    if($input_count != '0'){
        if($input_count == '1'){
            return substr($input, 0, -4).'k';
        } else if($input_count == '2'){
            return substr($input, 0, -8).'M';
        } else if($input_count == '3'){
            return substr($input, 0,  -12).'bil';
        } else {
            return;
        }
    } else {
        return $input;
    }
}
function our_videos_fun ( $atts, $content = null) {
	extract(shortcode_atts(array(
		'items'		=> 3,
        'cats' => array()
		), $atts));
        $cat = explode(",",$cats);
		$out ='';
		$args = array(
            'posts_per_page'	=> $items,
            'post_type'		=> 'videos',
            'meta_key'		=> 'is_featured',
            'meta_value'	=> 'Yes',            
        );
        if(sizeof($cat)>0){
            $args['tax_query'] = array(
                array (
                    'taxonomy' => 'videos_category',
                    'field' => 'slug',
                    'terms' => $cat
                )
            );
        };
        $the_query = new WP_Query( $args );
        if( $the_query->have_posts() ){
            $out .='<div class="shortcode-video video_portal_about video-slider-warp"><div class="container"><div class="row">';
            while( $the_query->have_posts() ) : $the_query->the_post();
                $link = get_the_permalink();
                $title = get_the_title();
                $des = get_the_excerpt();
                $youtube_link_array = explode('/',get_field('video_link', get_the_ID()));
                $youtube_link = "https://img.youtube.com/vi/".end($youtube_link_array)."/maxresdefault.jpg";
                $src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'full', false );
                $src = $src[0]?$src[0]:$youtube_link;
                $video_ID = end($youtube_link_array);
                $data_youtube = ct_get_comm_review($video_ID);
                $expert = get_the_excerpt()?'<p class="video_expert">'.get_the_excerpt().'</p>':"";
                $image = $src?"<img width='100%' height='195' class='vide_img' src='$src' />":"";
                $terms = wp_get_object_terms( get_the_ID(), 'videos_category',array("hide_empty"=>true) );
                $coun =  $terms[0]->count;
                $term_link = get_term_link( $terms[0] );
                $out .="<div class='col-md-4 col-sm-6'> <div class='video_des_link'>
                    <a href='$link' style='text-decoration: none;'>
                             <div class='video_item'>
                             $image
                             <div class='video_head_txt'>
                                <span class='wra_txt'><i class='fa fa-comments'></i>".$data_youtube['commentCount']."</span>
                                <span class='wra_txt_watch'><i class='fa fa-eye'></i>".$data_youtube['viewCount']."</span>
                             </div>
                             <div class='video_youtube'></div>
                          </div>
                          <div class='video_text_space video_border'>
                            <h3>$title</h3>
                            $expert
                            <span class='video_date'>".get_the_date('F j, Y')."</span>  
                        </div>
                    </a>
                    <div class='category-list'>
                        <a href='$term_link'><h4>".$terms[0]->name."</h4><div><span>$coun</span> Videos</div></a>
                    </div>
                    </div>
                </div>";
            endwhile;
            $out .='</div></div></div>';
        }
		wp_reset_query();	
		return $out;
}
add_shortcode('our_videos', 'our_videos_fun');

function latest_posts_function ( $atts, $content = null) {
	extract(shortcode_atts(array(
		'items'		=> 10,		
        'cats' => array('learning-center')
		), $atts));
        $cat = explode(",",$cats);
		$out ='';
      
		$args = array(
            'posts_per_page'	=> $items,
            'post_type'		=> 'post', 
            'orderby' => 'date',
            'order' => 'DESC',
            'tax_query' => array(
                array (
                    'taxonomy' => 'category',
                    'field' => 'slug',
                    'terms' => $cat
                ),
            ),
        );
        $cat_link = get_term_link( $cat[0], 'category' )?get_term_link( $cat[0], 'category' ):"http://localhost/projects/smarter-source/category/learning-center/" ;
        //http://localhost/projects/smarter-source/category/learning-center/
        $the_query = new WP_Query( $args );
        if( $the_query->have_posts() ){
            $out .='<div class="shortcode-latest-post"><div class="shortcode-latest-post-inner">';
            $n=0;
            while( $the_query->have_posts() ) : $the_query->the_post();$n++;
                $link = get_the_permalink();
                $title = get_the_title();
                $des = get_the_excerpt();
               
                $src = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'full', false );
                $src = $src[0]?$src[0]:$youtube_link;
                
                $expert = get_the_excerpt()?'<p class="video_expert">'.get_the_excerpt().'</p>':"";
                $image = $src?"<img class='' src='$src' />":"";
                $terms = wp_get_object_terms( get_the_ID(), 'category',array("hide_empty"=>true) );
                $coun =  $terms[0]->count;
                $term_link = get_term_link( $terms[0] );
                if($n==1){
                    $out .="<div class='top-news'>
                        <div class='-cat-name'><h4><a href='$term_link'>".$terms[0]->name."</a><span>".get_the_date('F j, Y')."</span></h4></div>
                        <div class='-title'><h3><a href='$link'>$title</a></h3></div>
                        <div class='-image'><a href='$link'>$image</a></div>
                    </div>";
                }else{
                    if($n==2){
                        $out .="<div class='other-news'><div class='c-left'>";
                    }                    
                    if($n==5){
                         $out .="</div><div class='c-right'>";
                    }
                    $out .="<div class='item'>
                        <div class='-cat-name'><h4><a href='$term_link'>".$terms[0]->name."</a><span>".get_the_date('F j, Y')."</span><h4></div>
                         
                        <div class='-title'><h3><a href='$link'>$title</a></h3></div>
                        <div class='-image right-image'><a href='$link'>$image</a></div>
                        <div class='-des'><a href='$link'>$expert</a></div>
                        <div class='-image left-image'><a href='$link'>$image</a></div>
                    </div>";
                    if($n==10){
                        $out .="</div></div>";
                    }
                }
                
            endwhile;
            $out .='</div><div class="read-more"><a href="'.$cat_link.'" class="pink_big_btn">See More Articles</a></div></div>';
        }
		wp_reset_query();	
		return $out;
}
add_shortcode('latest_posts', 'latest_posts_function');


function videos_section() {
 if( have_rows('videos') ){
        ?>
        <div class="articles_video"><div class="lender_offered"><h3 class="text-center">Videos</h3></div><div class="container"><div class="v-row">
            <?php while( have_rows('videos') ): the_row(); ?>
                <div class="video-embed">
                    <?php the_sub_field("video_embed")?>
                </div>
            <?php endwhile; ?>    
        </div></div></div>
        <?php
    }  
}
?>