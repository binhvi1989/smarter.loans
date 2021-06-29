<?php



add_filter('acf/submit_form' , 'sloan_acf_submit_form', 10, 2 );
function sloan_acf_submit_form( $form, $post_id ) {
	if(get_post_type($post_id) == 'reviews'){
		$rtitle = get_field( "review_title", $post_id );
		$title = !empty($rtitle) ? sanitize_text_field($rtitle) : 'New Review'; //live: field_5aa2c84606007
		$rating = get_field( "rating", $post_id );
		//review for:
		$lender = get_field( "lender", $post_id ); //live: field_5aa2c8a10600a
		$lender_title = $lender && get_the_title($lender) ? get_the_title($lender).' | ' : '';
		$title = $lender_title.$rating.' | '.$title;
		// update post title	
		$data = array(
				'ID'         => $post_id,
				'post_title' => $title,
				'post_name'  => sanitize_title( $title ),
			);
		//remove_action('save_post', array($this, 'save_client_post'), 10); //to prevent loop
		wp_update_post( $data );
		//add_action('save_post', array($this, 'save_client_post'), 10, 3); 
	}
}

//add_filter('acf/pre_save_post' , 'sloan_pre_save_post' );
function sloan_pre_save_post( $post_id ) {
	
	// bail early if not a new post
	if( $post_id !== 'new_post'  ) {
            return $post_id;
	}
//	print_r($_POST);die();
	// review data
	//$title = !empty($_POST['fields']['field_5aa29e9451bde']) ? $_POST['fields']['field_5aa29e9451bde'] : 'New Review'; //local
	$title = !empty($_POST['fields']['field_5aa2c84606007']) ? sanitize_title($_POST['fields']['field_5aa2c84606007']) : 'New Review'; //staging
//	$name = $_POST['fields']['field_5aa28b301036f']; //local
//	$name = $_POST['fields']['field_5aa2c81906005'];
//	$email = $_POST['fields']['field_5aa28b6c10370']; //local
//	$email = $_POST['fields']['field_5aa2c83006006'];
//	$review_txt = $_POST['fields']['field_5aa28a881036e']; //local
//	$review_txt = $_POST['fields']['field_5aa2c86106008'];
	//$rating = $_POST['fields']['field_5aa28b9010371']; //local
	$rating = $_POST['fields']['field_5aa2c87e06009'];
        //review for:
	//$lender = absint($_POST['fields']['field_5aa28c707bbe6']); //local
	$lender = absint($_POST['fields']['field_5aa2c8a10600a']);
        
	$lender_title = get_the_title($lender) ? get_the_title($lender).' | ' : '';
	$title = $lender_title.$rating.' | '.$title;
	if($lender){
		// Create a new post
		$post = array(
			'post_status'	=> 'pending',
			'post_type'	=> 'reviews',
			'post_title'	=> $title,
		);	
		// insert the post
		$post_id = wp_insert_post( $post ); 
	}
	// return the new ID
	return $post_id;
}

add_action( 'save_post', 'sloan_save_post_before_cb', 1 );
add_action( 'save_post', 'sloan_save_post_before_cb', 100 );
function sloan_save_post_before_cb( $post_id ) {
    if ($_POST['post_type'] != 'reviews'){
        return $post_id;
    }
    
    // Check the user's permissions.
    if ( ! current_user_can( 'edit_post', $post_id ) ){
            return $post_id;
    }
    
    // do not save if this is an auto save routine
    if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE ){
            return $post_id;
    }
    
    // only save once! WordPress save's a revision as well.
    if( wp_is_post_revision($post_id) ){
        return $post_id;
    } 
    
    $lender = get_field('lender', $post_id);
    if($lender)
        delete_transient( 'sloan_review_data_'.$lender->ID );
}
add_action( 'delete_post', 'sloan_reset_rating_transient_cb', 100);
add_action( 'wp_trash_post', 'sloan_reset_rating_transient_cb', 100);
add_action( 'untrash_post', 'sloan_reset_rating_transient_cb', 100);
function sloan_reset_rating_transient_cb( $post_id ) {
    global $post;
    if (isset($_REQUEST['post']) && is_array($_REQUEST['post'])){
        foreach ($_REQUEST['post'] as $post_id) {
            $lender = get_field('lender', $post_id);
            if($lender)
                delete_transient( 'sloan_review_data_'.$lender->ID );
        }
    }
    if (isset($post->post_type) && $post->post_type == 'reviews'){
        $lender = get_field('lender', $post->ID);
        if($lender)
            delete_transient( 'sloan_review_data_'.$lender->ID );
    }
}
add_action( 'transition_post_status', 'sloan_cp_sync', 100, 3 );
function sloan_cp_sync( $new_status, $old_status, $post ) {
    if (isset($_REQUEST['post']) && is_array($_REQUEST['post'])){
        foreach ($_REQUEST['post'] as $post_id) {
            $lender = get_field('lender', $post_id);
            if($lender)
                delete_transient( 'sloan_review_data_'.$lender->ID );
        }
    }
    if (isset($post->post_type) && $post->post_type == 'reviews'){
        $lender = get_field('lender', $post->ID);
        if($lender)
            delete_transient( 'sloan_review_data_'.$lender->ID );
    }

}