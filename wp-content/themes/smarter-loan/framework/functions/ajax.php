<?php
add_action( 'wp_ajax_ajax-lendercompare', 'sloan_wp_ajax_lendercompare_handler' );
add_action( 'wp_ajax_nopriv_ajax-lendercompare', 'sloan_wp_ajax_lendercompare_handler' );
function sloan_wp_ajax_lendercompare_handler() {
	// check nonce
	$nonce = $_POST['nextNonce'];
	//if ( ! wp_verify_nonce( $nonce, 'custom-js-nonce' ) ) {
		//die ( 'Busted!' );
	//}
	// generate the response
	ob_start();
        $compare_item_1 = !empty($_REQUEST['compare_item_1']) ? absint($_REQUEST['compare_item_1']) : false;
        $compare_item_2 = !empty($_REQUEST['compare_item_2']) ? absint($_REQUEST['compare_item_2']) : false;
        $lender1 = null;
        $lender2 = null;
        if($compare_item_1 !== false && $compare_item_2 !== false){
            $ids = $compare_item_1.','.$compare_item_2;
            $lenders = sloan_getLender($ids);
            foreach ($lenders as $lender) {
                if($lender->ID == $compare_item_1){
                    $lender1 = $lender;
                }elseif($lender->ID == $compare_item_2){
                    $lender2 = $lender;
                }
            }
            $loan_fg_id = get_option( 'field_group_lenders' ); // Loan/Lender ACF field group ID - set in theme setting
            if(empty($loan_fg_id)){
                die();
            }
            $acf_fields = array();
            $acf_fields = apply_filters('acf/field_group/get_fields', $acf_fields, absint($loan_fg_id));
            foreach ($acf_fields as $key => $acf_field) {
                $newKey = $acf_field['name'];
                $acf_fields[$newKey] = $acf_field;
                unset($acf_fields[$key]);
            }
            $fields1 = get_fields($lender1->ID);
            $fields2 = get_fields($lender2->ID);
            $compare_sections = array(
                    array(
                        'title' => 'Overview',
                        'fields' => array(
                            'how_long_in_business',
                            'number_of_customers',
                            'total_funded',
                            'availability',
                            'physical_locations',
                            'website',
                            'phone',
                            'email',
                            'ho_address',
                            'facebook',
                            'twitter',
                            'google_plus',
                            'pintrest',
                            'linked_in',
                            'youtube',
                            'instagram'
                            )
                    ),
                    array(
                        'title' => 'Reputation',
                        'fields' => array('reviews')
                    ),
                    array(
                        'title' => 'Support',
                        'fields' => array('call_center_timing_information','support_offer')
                    ),
                    array(
                        'title' => 'Loans Offered',
                        'fields' => array('loan_offered')
                    ),
                );
            ?>
            <div class="row logos_row">
                <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center" id="comp-name-1">
                    <a href="<?php echo get_permalink($lender1); ?>">
                        <?php if( get_field('logo', $lender1->ID) ): ?>
                        <img src="<?php echo the_field('logo', $lender1->ID); ?>" class="center-block img-responsive "  title="<?php echo get_the_title($lender1); ?>" />
                        <?php else: ?>
                            <?php echo get_the_title($lender1); ?>
                        <?php endif; ?>
                    </a>
                </div>
                <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center" id="comp-name-2">
                    <a href="<?php echo get_permalink($lender2); ?>">
                        <?php if( get_field('logo', $lender2->ID) ): ?>
                            <img src="<?php echo the_field('logo', $lender2->ID); ?>" class="center-block img-responsive "  title="<?php echo get_the_title($lender2); ?>"/>
                        <?php else: ?>
                            <?php echo get_the_title($lender2); ?>
                        <?php endif; ?>
                    </a>
                </div>
            </div>
            
            <?php if( $acf_fields ): ?>
                <?php foreach( $compare_sections as $compare_section  ): ?>
                    <div class="blue_row text-center"><?php echo $compare_section['title']; ?></div>
                    <?php if(strtolower($compare_section['title']) == 'overview'): ?>
                        <div class="row">
                            <div class="col-md-6 col-xs-6 col-sm-6 lft cols"><?php echo wpautop($lender1->post_content); ?></div>
                            <div class="col-md-6 col-xs-6 col-sm-6 rigt cols"><?php echo wpautop($lender2->post_content); ?></div>
                        </div>
                    <?php endif; ?>
                    <?php foreach( $compare_section['fields'] as $field_name  ): ?>
                        <?php                                            
                        switch ($field_name) { //special field output/formatting
                            case 'reviews': 
                                $rating_data1 = sloan_get_lender_rating_data($lender1->ID);
                                $rating_data2 = sloan_get_lender_rating_data($lender2->ID);
                                $total_reviews1 = $rating_data1['total_reviews'];
                                $avg_rating1 = $rating_data1['average_rating'];
                                $total_reviews2 = $rating_data2['total_reviews'];
                                $avg_rating2 = $rating_data2['average_rating'];
                                ?>
                                <div class="grey_row">Total Reviews</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center"><?php echo ($total_reviews1 > 0)? $total_reviews1 : '0'; ?></div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center"><?php echo ($total_reviews2 > 0)? $total_reviews2 : '0'; ?></div>
                                </div>
                                <div class="grey_row">Overall Review Rating</div>
                                <script>
                                    jQuery(document).ready(function($){
                                        $('input.rating').rating();
                                    });
                                </script>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center" title="<?php echo 'Rating: '.$avg_rating1; ?>"> <input type="hidden" class="rating" value="<?php echo $avg_rating1; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly /></div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center" title="<?php echo 'Rating: '.$avg_rating2; ?>"> <input type="hidden" class="rating" value="<?php echo $avg_rating2; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly /></div>
                                </div>
                                <?php
                                break;
                            case 'support_offer': 
                                $support_data1 = $fields1[$field_name];
                                $support_data2 = $fields2[$field_name];
                                ?>
                                <div class="grey_row">Support Offered</div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center">
                                        <?php if(is_array($support_data1) && count($support_data1)>0): ?>
                                            <ul style="list-style: none; display: inline-block; text-align: left;">
                                            <?php foreach($support_data1 as $support): ?>
                                                <li style="padding: 5px 0;"><i class="fa fa-check-circle" style="color: #119d1b;"></i> <?php echo $support['support_offered']; ?></li>
                                            <?php endforeach; ?>
                                            </ul>
                                        <?php endif; ?>
                                    </div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center">
                                        <?php if(is_array($support_data2) && count($support_data2)>0): ?>
                                            <ul style="list-style: none; display: inline-block; text-align: left;">
                                            <?php foreach($support_data2 as $support): ?>
                                                <li style="padding: 5px 0;"><i class="fa fa-check-circle" style="color: #119d1b;"></i> <?php echo $support['support_offered']; ?></li>
                                            <?php endforeach; ?>
                                            </ul>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <?php
                                break;
                            case 'loan_offered': 
                                $loan_data1 = $fields1[$field_name];
                                $loan_data2 = $fields2[$field_name];
                                $loans_data = array(); //store data by loan type
                                foreach($loan_data1 as $loan_offer){
                                    $item_title = trim($loan_offer['item_title']);
                                    $loans_data[$item_title]['offerby1'] = $loan_offer;
                                }
                                foreach($loan_data2 as $loan_offer){
                                    $item_title = trim($loan_offer['item_title']);
                                    $loans_data[$item_title]['offerby2'] = $loan_offer;
                                }
                                //print_r($loans_data);
                                if(count($loans_data) > 0):
                                    foreach($loans_data as $loan_title => $loan_data):
                                    ?>
                                    <div class="grey_row"><?php echo $loan_title; ?></div>
                                    <div class="row">
                                        <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center">
                                            <?php if(isset($loan_data['offerby1'])): ?>
                                                <ul class="panel_content loan_offer_cmp">
                                                    <li><?php echo $loan_data['offerby1']['column_1']; ?></li>
                                                    <li><?php echo $loan_data['offerby1']['column_2']; ?></li>
                                                    <li><?php echo $loan_data['offerby1']['column_3']; ?></li>
                                                    <li class="text-left"><?php if (get_field('button_link',$lender1)){ ?><a href="<?php the_field('button_link',$lender1); ?>" target="_blank" class="pbutton" style="float:none;margin: 10px auto;">Apply Now</a><?php } ?></li>
                                                </ul>
                                            <?php endif; ?>
                                        </div>
                                        <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center">
                                            <?php if(isset($loan_data['offerby2'])): ?>
                                                <ul class="panel_content loan_offer_cmp">
                                                    <li><?php echo $loan_data['offerby2']['column_1']; ?></li>
                                                    <li><?php echo $loan_data['offerby2']['column_2']; ?></li>
                                                    <li><?php echo $loan_data['offerby2']['column_3']; ?></li>
                                                    <li class="text-left"><?php if (get_field('button_link',$lender2)){ ?><a href="<?php the_field('button_link',$lender2); ?>" target="_blank" class="pbutton" style="float:none;margin: 10px auto;">Apply Now</a><?php } ?></li>
                                                </ul>
                                            <?php endif; ?>
                                        </div>
                                    </div>
                                    <?php
                                    endforeach;
                                endif;
                                break;
                            case 'facebook': //social media
                            case 'twitter': 
                            case 'google_plus': 
                            case 'pintrest': 
                            case 'linked_in': 
                            case 'youtube': 
                            case 'instagram': 
                                $icon_class = '';
                                if($field_name == 'facebook'){
                                    $icon_class = 'fa-facebook-f';
                                }elseif ($field_name == 'twitter') {
                                    $icon_class = 'fa-twitter';                               
                                }elseif ($field_name == 'youtube') {
                                    $icon_class = 'fa-youtube';                               
                                }elseif ($field_name == 'linked_in') {
                                    $icon_class = 'fa-linkedin-in';                               
                                }elseif ($field_name == 'instagram') {
                                    $icon_class = 'fa-instagram';                               
                                }elseif ($field_name == 'google_plus') {
                                    $icon_class = 'fa-google-plus-g';                               
                                }elseif ($field_name == 'pintrest') {
                                    $icon_class = 'fa-pinterest-p';                               
                                }
                                ?>
                                
                                <?php
                                break;
                            case 'email': 
                                ?>
                                <?php if(isset($acf_fields[$field_name]) && (!empty($fields1[$field_name]) || !empty($fields2[$field_name]))): ?>
                                <div class="grey_row"><?php echo $acf_fields[$field_name]['label']; ?></div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields1[$field_name])): ?>
                                        <a href="mailto:<?php echo esc_attr($fields1[$field_name]); ?>" title="Email <?php echo esc_attr($fields1[$field_name]); ?>" style="margin-bottom: 5px;"><i class="fa fa-envelope"></i></a><br><?php echo ($fields1[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields2[$field_name])): ?>
                                        <a href="mailto:<?php echo esc_attr($fields2[$field_name]); ?>" title="Email <?php echo esc_attr($fields2[$field_name]); ?>" style="margin-bottom: 5px;"><i class="fa fa-envelope"></i></a><br><?php echo ($fields2[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <?php endif; ?>
                                <?php
                                break;
                            case 'website': 
                                ?>
                                <?php if(isset($acf_fields[$field_name]) && (!empty($fields1[$field_name]) || !empty($fields2[$field_name]))): ?>
                                <div class="grey_row"><?php echo $acf_fields[$field_name]['label']; ?></div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields1[$field_name])): ?>
                                        <a href="<?php echo esc_url($fields1[$field_name]); ?>" title="Open <?php echo esc_attr($fields1[$field_name]); ?>" target="_blank" style="margin-bottom: 5px;"><i class="fa fa-globe"></i></a><br><?php echo ($fields1[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields2[$field_name])): ?>
                                        <a href="<?php echo esc_url($fields2[$field_name]); ?>" title="Open <?php echo esc_attr($fields2[$field_name]); ?>" target="_blank" style="margin-bottom: 5px;"><i class="fa fa-globe"></i></a><br><?php echo ($fields2[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <?php endif; ?>
                                <?php
                                break;
                            case 'phone': 
                                ?>
                                <?php if(isset($acf_fields[$field_name]) && (!empty($fields1[$field_name]) || !empty($fields2[$field_name]))): ?>
                                <div class="grey_row"><?php echo $acf_fields[$field_name]['label']; ?></div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields1[$field_name])): ?>
                                        <a href="tel:<?php echo esc_attr($fields1[$field_name]); ?>" title="Call <?php echo esc_attr($fields1[$field_name]); ?>" style="margin-bottom: 5px;"><i class="fa fa-mobile"></i></a><br><?php echo ($fields1[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center social_footer" style="margin: 0;">
                                        <?php if(!empty($fields2[$field_name])): ?>
                                        <a href="tel:<?php echo esc_attr($fields2[$field_name]); ?>" title="Call <?php echo esc_attr($fields2[$field_name]); ?>" style="margin-bottom: 5px;"><i class="fa fa-mobile"></i></a><br><?php echo ($fields2[$field_name]); ?>
                                        <?php endif; ?>
                                    </div>
                                </div>
                                <?php endif; ?>
                                <?php
                                break;
                            default: //acf fields
                                ?>
                                <?php if(isset($acf_fields[$field_name])): ?>
                                <div class="grey_row"><?php echo $acf_fields[$field_name]['label']; ?></div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-6 col-sm-6 lft cols text-center"><?php echo isset($fields1[$field_name]) ? $fields1[$field_name] : ''; ?></div>
                                    <div class="col-md-6 col-xs-6 col-sm-6 rigt cols text-center"><?php echo isset($fields2[$field_name]) ? $fields2[$field_name] : ''; ?></div>
                                </div>
                                <?php endif; ?>
                                <?php
                                break;
                        } ?>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            <?php endif; ?>
            <?php
        }else { ?>
            <div class="blue_row text-center">Please select a lender from both select lists to compare!</div>
            <?php
        }
        $response = ob_get_contents();
        ob_end_clean();
	// response output
	//header( "Content-Type: application/json" );
	echo $response;
	// IMPORTANT: don't forget to "exit"
	exit;
}
add_action( 'wp_ajax_ajax-loanfinder', 'sloan_wp_ajax_loanfinder_handler' );
add_action( 'wp_ajax_nopriv_ajax-loanfinder', 'sloan_wp_ajax_loanfinder_handler' );
function sloan_wp_ajax_loanfinder_handler() {
	// check nonce
	$nonce = $_POST['nextNonce'];
	//if ( ! wp_verify_nonce( $nonce, 'custom-js-nonce' ) ) {
		//die ( 'Busted!' );
	//}
	// generate the response
	ob_start();
        $loantype = !empty($_REQUEST['loantype']) ? absint($_REQUEST['loantype']) : false;
        $producttype = !empty($_REQUEST['producttype']) ? $_REQUEST['producttype'] : 'all';
        $provinces = !empty($_REQUEST['provinces']) ? $_REQUEST['provinces'] : 'all';
        $amount = !empty($_REQUEST['amount']) ? $_REQUEST['amount'] : false;
        
        $the_args =  array( 'post_type' => 'lenders',
		                     'posts_per_page' => -1,
                            'post_status' => 'publish',
							'orderby' => 'menu_order',
                    		'order' => 'ASC',
                            'tax_query' => array(
                                array(
                                        'taxonomy' => 'loan_category',
                                        'field'    => 'term_id',
                                        'terms'    => array($loantype),
                                ),
                            ),
                            'ignore_sticky_posts'   => true 
                    );
        $meta_query = false;
        if($producttype!='all' && $provinces!='all'){
            $meta_query = array(
                'relation' => 'AND',
                array(
                        'key'     => 'product_type',
                        'value'   => '"'.$producttype.'"',
                        'compare' => 'Like',
                ),
                array(
                        'key'     => 'canadian_states',
                        'value'   => '"'.$provinces.'"',
                        'compare' => 'Like',
                ),
            );
        }elseif ($producttype!='all') {
            $meta_query = array(
                array(
                        'key'     => 'product_type',
                        'value'   => '"'.$producttype.'"',
                        'compare' => 'Like',
                ),
            );
        }elseif ($provinces!='all') {
            $meta_query = array(
                array(
                        'key'     => 'canadian_states',
                        'value'   => '"'.$provinces.'"',
                        'compare' => 'Like',
                ),
            );
        }
        if($meta_query !== false){
            $the_args['meta_query'] = $meta_query;
        }
        //print_r($the_args);
        // the query
        $the_query = new WP_Query( $the_args ); ?>
        <?php if ( $the_query->have_posts() ) : ?>
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
            <?php 
                if($amount!==false && get_field('amount') && !in_array(strtolower(get_field('amount')), array('varies','any amount'))){
                    $amount = sloan_currency_to_int($amount);
                    $amount_acf = get_field('amount');
                    $upto_range = false;
                    $unlimit_range = false;
                    if(strpos(strtolower($amount_acf), 'upto') !== false){
                        $upto_range = true;
                    }elseif(strpos(strtolower($amount_acf), 'unlimited') !== false){
                        $unlimit_range = true;
                    }
                    if(strpos($amount_acf, ' - ') !== false){
                        $loan_range = explode('-', get_field('amount'));
                    }
                    $loan_range = array_map('trim', $loan_range);
                    $loan_range = array_map('sloan_currency_to_int', $loan_range);
                    if($unlimit_range){
                        $loan_range = array_filter($loan_range);
                    }
                    if(count($loan_range)==1 && ( ($loan_range[0] != $amount && !$upto_range && !$unlimit_range) || ($upto_range && $amount >= $loan_range[0]) || ($unlimit_range && $amount < $loan_range[0]) )){
                        continue;
                    }elseif(count($loan_range)==2){
                        if( ( $unlimit_range===false && !($amount >= $loan_range[0] && $amount <= $loan_range[1]) )   ){
                            continue;
                        }
                    }
                    
                }
                $rating_data = sloan_get_lender_rating_data(get_the_ID());
                $total_reviews = $rating_data['total_reviews'];
                $avg_rating = $rating_data['average_rating'];
            ?>
                <div class="table_content">
                    <div class="row">
                        <div class="col-md-2">
                            <a href="<?php the_permalink(); ?>">
                                <?php if( get_field('logo') ): ?>
                                    <img src="<?php echo the_field('logo'); ?>" class="center-block img-responsive "  title="<?php echo get_the_title(); ?>"/>
                                <?php else: ?>
                                    <?php echo get_the_title(); ?>
                                <?php endif; ?>
                            </a>
                        </div>
                        <div class="col-md-2"><span class="visible-xs visible-sm hidden-lbl">Amount</span><?php the_field('amount'); ?></div>
                        <div class="col-md-2"><span class="visible-xs visible-sm hidden-lbl">Interest Rate</span><?php the_field('interest_rate'); ?></div>
                        <div class="col-md-2" title="<?php echo 'Avg. Rating: '.$avg_rating.' ('.$total_reviews.' '.($total_reviews > 1 ? 'reviews':'review').')'; ?>">
                            <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                            <!--<img src="<?php bloginfo('template_url'); ?>/images/stars.png" class="center-block" />-->
                        </div>
                        <div class="col-md-2"><span class="visible-xs visible-sm hidden-lbl">Terms</span><?php the_field('terms'); ?></div>
                        <div class="col-md-2"><?php if( get_field('button_link') ): ?><a href="<?php the_field('button_link'); ?>" target="_blank" class="button">Apply Now</a><?php endif; ?></div>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php endif; ?>
        <?php
        $response = ob_get_contents();
        ob_end_clean();
	// response output
	//header( "Content-Type: application/json" );
        $response = trim($response);
	echo !empty($response) ? $response : '<div class="table_content"><div class="row"><div class="col-xs-12">Sorry nothing was found for current criteria!</div></div></div>';
	// IMPORTANT: don't forget to "exit"
	exit;
}

//Load more videos handler
add_action( 'wp_ajax_loadvideos', 'sloan_wp_ajax_loadvideos_handler' );
add_action( 'wp_ajax_nopriv_loadvideos', 'sloan_wp_ajax_loadvideos_handler' );
function sloan_wp_ajax_loadvideos_handler() {
    // check nonce
    //$nonce = $_POST['nextNonce'];
    //if ( ! wp_verify_nonce( $nonce, 'custom-js-nonce' ) ) {
            //die ( 'Busted!' );
    //}
    // generate the response
    $term_id = !empty($_REQUEST['term_id']) ? absint($_REQUEST['term_id']) : false;
    $page = !empty($_REQUEST['page']) ? absint($_REQUEST['page']) : 1;
    $videos = sloan_video_query(array('term_id' => $term_id, 'page' => $page));
    ob_start();
    include get_stylesheet_directory(). "/get-youtube-comment-viewer.php"; //used by template-parts/content-videos.php
    if($videos->have_posts()) {
        while ($videos->have_posts()) : $videos->the_post();
            get_template_part( 'template-parts/content', 'videos' );
        endwhile;
        // don't display the button if there are not enough posts
        if (  $videos->max_num_pages > 1 && $page < $videos->max_num_pages ){
            $params = array(
                'page' => ($page + 1),
                'term_id' => $term_id,
            );
            echo '<div class="sl_videos_loadmore  text-center"><a href="#" class="js-videos-loadmore blue_big_btn" style="margin: 1em 0 0 0;font-size:1em;" data-params="'. htmlspecialchars(json_encode($params)).'">Load More</a></div>'; // you can use <a> as well
        }
    }
    $response = ob_get_contents();
    ob_end_clean();
    wp_send_json_success($response);
}