<?php



function sloan_get_lender_rating_data($post_id) {
    if(empty($post_id)){
        return array('total_reviews' => '0', 'average_rating' => '0');
    }
    // Check for transient. If none, then execute WP_Query
    if ( false === ( $transient_data = get_transient( 'sloan_review_data_'.$post_id ) ) ) {

        $review_args =  array( 'post_type' => 'reviews',
                    'post_status' => 'publish',
                    'numberposts' => -1,
                    'meta_key' => 'lender',
                    'meta_value' => $post_id
            );
        $reviews = get_posts( $review_args );
        $rating_data = array();
        $sum_weighted_reviews = 0;
        $total_reviews = count($reviews);
        if($total_reviews > 0){
            foreach ($reviews as $review) {
                $r_rating = get_field('rating', $review->ID);
                $rating_data[$r_rating]= $rating_data[$r_rating] ? $rating_data[$r_rating] + 1 : 1;
            }
            foreach ($rating_data as $rating_val => $rating_count) {
                $sum_weighted_reviews += $rating_val * $rating_count;
            }
            $average_rating = $sum_weighted_reviews / $total_reviews;
        }else{
            $average_rating = 0;
        }
        $transient_data = array('total_reviews' => $total_reviews, 'average_rating' => number_format((float)$average_rating, 1, '.', ''));

        // Put the results in a transient. Expire after 24 hours.
        set_transient( 'sloan_review_data_'.$post_id , $transient_data, 24 * HOUR_IN_SECONDS );
    } 
    
    return $transient_data;
}

/**
 *
 * Get Featured Image Url
 * @param int $post_ID Return featured image if avilable
 **/
function sloan_get_featured_image($post_ID,$size='full') {
    $post_thumbnail_id = get_post_thumbnail_id($post_ID);
    return sloan_get_image($post_thumbnail_id,$size);
}
/**
 *
 * Get Image Url
 * @param int $post_ID Return  image if avilable
 **/
function sloan_get_image($post_ID,$size='full') {
    $attachment_id = $post_ID;
    if ($attachment_id) {
        $post_thumbnail_img = wp_get_attachment_image_src($attachment_id, $size);
        return $post_thumbnail_img[0];
    }
    return false;
}

function sloan_getLoansType($order_by = 'term_order',$order = 'ASC'){
    $loan_types =  get_terms( array(
            'taxonomy' => 'loan_category',
            'hide_empty' => false,
            'orderby' => $order_by,
            'order' => $order,
        ) );

    $result = [];
    foreach ($loan_types as  $loan_type) {
        if(empty($loan_type->name))
            continue;
        $result[] = [
            'id' => $loan_type->term_id,
            'name' => $loan_type->name
        ];
    }
    return $result;
}
function sloan_getLenders(){
    $the_args =  array( 'post_type' => 'lenders',
            'post_status' => 'publish',
			'orderby' => 'title',
    		'order'   => 'ASC',
            'posts_per_page' => -1,
            'ignore_sticky_posts'   => true 
    );
    $lenders = get_posts($the_args);

    $result = [];
    foreach ($lenders as  $lender) {
        if(empty($lender->post_title))
            continue;
        $result[] = [
            'id' => $lender->ID,
            'name' => $lender->post_title
        ];
    }
    return $result;
}
function sloan_getLender($ids){
    $the_args =  array( 'post_type' => 'lenders',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'include' => explode(',', $ids),
            'ignore_sticky_posts'   => true 
    );
    $lenders = get_posts($the_args);
    return $lenders;
}

function sloan_currency_to_int($str)
{
    return (int)preg_replace("/([^0-9\\.])/i", "", $str);
}