<?php
function my_enqueue() {      
      wp_localize_script( 'ajax-script', 'my_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
 }
add_action( 'wp_enqueue_scripts', 'my_enqueue' );
function get_data(){
	?>
	<script>
		jQuery.ajax({
			type: "post",
			dataType: "json",
			url: my_ajax_object.ajax_url,
			data: {action: "get_data"},
			success: function(msg){
				console.log(msg);
			}
		});
	</script>
	<?php
}
add_shortcode( 'lenders', 'lenders_shortcode_cb' );
function lenders_shortcode_cb( $attr ) {
	
	
    // We're trusting author input, so let's at least make sure it looks like a valid orderby statement
    if ( isset( $attr['orderby'] ) ) {
        $attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
        if ( !$attr['orderby'] )
            unset( $attr['orderby'] );
    }
     extract(shortcode_atts(array(
        'order'      => 'ASC',
        'orderby'    => 'term_order',
        'include'    => 'all',
        'exclude'    => 'all',
        'hide_empty' => false,
        'parent'     => 0,
         //for lender post type
        'posts_per_page'     => 10, //posts/lenders per cat
        'canadian_state'     => '', //filter by state
        'city'     => '', //filter by City
    ), $attr));
    ob_start();
 ?>
<script type="text/html" id="mytablehtml">
       <div class="row">
       	<div class="text-center swipe_icon"><img src="<?php bloginfo('template_url'); ?>/images/swipe.png" class="center-block" /></div>
            <div class="wrapper">
              <div class="tabbable-panel">
                <div class="tabbable-line">
                  <ul class="nav nav-tabs list" id="myTab">
                  <?php 
                  $cat_args = array(
                      'taxonomy' => 'loan_category',
                      'hide_empty' => $hide_empty,
                      'orderby' => $orderby,
                      'order' => $order,
                  );
                  $custom_sort=false;
                  if(!empty($include) && $include != 'all'){
                      $cat_args['include'] = $include;
                      $cat_args['orderby'] = ''; //order by same as values in include attr
                      $cat_args['order'] = '';
                      $custom_sort=true;
                  }
                  elseif(!empty($exclude) && $exclude != 'all'){
                      $cat_args['exclude'] = $exclude;
                  }
                  else{
                      $cat_args['parent'] = $parent;
                  }
                  $cat_terms = get_terms( $cat_args );
                  if($custom_sort)
                  {
                      $display_terms=array();
                      $display_temp=array();
                      foreach($cat_terms as $term ) {
                          $display_temp[$term->term_id]=$term;
                      }
                      $include_array=explode(",",$include);
                      foreach($include_array as $include_id)
                      {
                          $display_terms[]=$display_temp[$include_id];
                      }
                  }
                  else
                  {
                      $display_terms=$cat_terms;
                  }
                  if( count($display_terms) > 0 ) {
                      $counter = 1; 
                      foreach( $display_terms as $term ) { ?>
                          <li class="<?php if($counter == 1){echo 'active';} ?>"><a href="#tab_<?php echo $term->slug; ?>" data-toggle="tab"><?php echo $term->name; ?></a></li>
                      <?php $counter++; 
                      }
                  }
                  ?>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-content">

            <?php
          if( count($display_terms) > 0  ) :
              $count = 1;
              foreach( $display_terms as $term ) : ?>
              <div class="tab-pane <?php if($count == 1){echo 'active';} ?>" id="tab_<?php echo $term->slug; ?>">
                <div class="table_header">
                  <div class="row">
                          <div class="col-md-2">Company</div>
                      <div class="col-md-2">Amount</div>
                      <div class="col-md-2">Interest Rate</div>
                      <div class="col-md-2">Reviews</div>
                      <div class="col-md-2">Terms</div>
                      <div class="col-md-2"></div>
                  </div>
                </div>
              <?php 
                $args = array(
                    'post_type'             => 'lenders',
                    //'posts_per_page'        => $posts_per_page,
                    'posts_per_page'        => -1,
                    'post_status'           => 'publish',
					
					'orderby' => 'date',
                    'order' => 'ASC',
                    'ignore_sticky_posts'   => true //caller_get_posts is deprecated since 3.1
                );
                $args['tax_query'] = array(
                    array(
                            'taxonomy' => 'loan_category',
                            'field'    => 'term_id',
                            'terms'    => array($term->term_id),
                    ),
                  );
                if(trim($canadian_state) != ''){
                    $args['meta_query'] = array(  );
                    $canadian_states = array_map('trim', explode(',', $canadian_state));
                    if(count($canadian_states) > 1)
                        $args['meta_query']['relation'] = 'OR';
                    foreach ($canadian_states as $cstate) {
                        $args['meta_query'][] = array(
                                'key' => 'canadian_states',
                                'value'    => $cstate,
                                'compare'    => 'LIKE',
                        );
                    }
                }
				
                if(trim($city) != ''){
                    $args['meta_query'] = array(  );
                    $canadian_cities = array_map('trim', explode(',', $city));
                    if(count($canadian_cities) > 1)
                        $args['meta_query']['relation'] = 'OR';
                    foreach ($canadian_cities as $ccity) {
                        $args['meta_query'][] = array(
                                'key' => 'cites',
                                'value'    => $ccity,
                                'compare'    => 'LIKE',
                        );
                    }
                }
                $args['meta_query'][] = array(
                        'key' => 'show_in_tabs',
                        'value'    => "y",
                        'compare'    => '=',
                );
				
		//print_r($args);		
                $_posts = new WP_Query( $args );
                if( $_posts->have_posts() ) :
                      while( $_posts->have_posts() ) : $_posts->the_post(); ?>
                      <?php 
                          $rating_data = sloan_get_lender_rating_data(get_the_ID());
                          $total_reviews = $rating_data['total_reviews'];
                          $avg_rating = $rating_data['average_rating'];
						  $logo = get_field('logo') ? get_field('logo') : '';
						  $redirect_url = add_query_arg('redirect_to_lender', get_the_ID(), site_url('/'));
                      ?>
                      <div class="table_content">
                        <div class="row">
                            <div class="col-md-2 col-xs-12 logo_container">
                                <a href="<?php the_permalink(); ?>">
                                    <?php if( !empty($logo) ): ?>
                                        <img src="<?php echo $logo; ?>" class="center-block img-responsive "  title="<?php echo get_the_title(); ?>"/>
                                    <?php else: ?>
                                        <?php echo get_the_title(); ?>
                                    <?php endif; ?>
                                </a>
                            </div>
                            <div class="col-md-2 col-xs-12"><?php the_field('amount'); ?></div>
                            <div class="col-md-2 col-xs-12"><?php the_field('interest_rate'); ?></div>
                            <div class="col-md-2 col-xs-12" title="<?php echo 'Avg. Rating: '.$avg_rating.' ('.$total_reviews.' '.($total_reviews > 1 ? 'reviews':'review').')'; ?>">
                                <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                                <!--<img src="<?php bloginfo('template_url'); ?>/images/stars.png" class="center-block" />-->
                            </div>
                            <div class="col-md-2 col-xs-12"><?php the_field('terms'); ?></div>
                            <div class="col-md-2 col-xs-12 apply-now"><?php if( get_field('button_link') ): ?><a href="<?php echo $redirect_url; ?>" class="button" target="_blank" rel="nofollow noindex noreferrer noopener">Apply Now</a><?php endif; ?>
                            <?php if( get_field('phone_2') ): ?>
                                <a href="tel:<?php the_field('phone_2') ?>" class="call hidden-xs hidden-sm">
                                  <img src="<?php echo get_template_directory_uri() ?>/images/call.svg"><?php the_field('phone_2') ?>
                                </a>  
                              <?php //else: ?>
                                  <?php //if( get_field('phone') ): ?> 
                                  <!-- <a href="tel:<?php //the_field('phone') ?>" class="call hidden-xs hidden-sm">
                                    <img src="<?php //echo get_template_directory_uri() ?>/images/call.svg"><?php //the_field('phone') ?>
                                  </a>   -->
                                  <?php //endif; ?>  
                              <?php endif; ?>
                          </div>
                          <?php if( get_field('phone_2') ): ?> 
                            <div class="col-md-2 col-xs-12 apply-now hidden-md hidden-lg">
                                <a href="tel:<?php the_field('phone_2') ?>" class="call"><img src="<?php echo get_template_directory_uri() ?>/images/call.svg"><?php the_field('phone_2') ?></a>  
                             </div>
                          <?php //else: ?>
                            <?php //if( get_field('phone') ): ?> 
                          <!-- <div class="col-md-2 col-xs-12 apply-now hidden-md hidden-lg">
                                <a href="tel:<?php // the_field('phone') ?>" class="call"><img src="<?php // echo get_template_directory_uri() ?>/images/call.svg"><?php // the_field('phone') ?></a>  
                             </div>-->
                          <?php //endif; ?>
                          <?php endif; ?>    
                          
                        </div>
                      </div>
                      <?php 
                     endwhile;
                  else: ?>
                        <div class="table_content">
                        <div class="row">
                            <div class="col-xs-12 text-center">
                                No Lender found for <?php echo($term->name); ?>
                            </div>
                        </div>
                        </div>
                  <?php
                  endif;
                  wp_reset_postdata(); //important ?>
          </div>
          <?php $count++; 
              endforeach;

          endif; ?>
            </div>

          </div>
</script>
<script type="">
	document.getElementById('mytablehtml').outerHTML = document.getElementById('mytablehtml').innerHTML;
	jQuery('.nav-tabs').scrollingTabs();
	jQuery("input.rating").rating();
</script>
    <?php
    $sc_content = ob_get_contents();
    ob_end_clean();

    return $sc_content;
}


////// Reviews Page Shortcode

add_shortcode( 'reviewslenders', 'reviewslenders_shortcode_cb' );
function reviewslenders_shortcode_cb( $attr ) {
    // We're trusting author input, so let's at least make sure it looks like a valid orderby statement
    if ( isset( $attr['orderby'] ) ) {
        $attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );
        if ( !$attr['orderby'] )
            unset( $attr['orderby'] );
    }
     extract(shortcode_atts(array(
        'order'      => 'ASC',
        'orderby'    => 'term_order',
        'include'    => 'all',
        'exclude'    => 'all',
        'hide_empty' => false,
        'parent'     => 0,
         
    ), $attr));
    ob_start();
 ?>

       <div class="row">
            <div class="wrapper">
              <div class="tabbable-panel">
                <div class="tabbable-line">
                  <ul class="nav nav-tabs list" id="myTab">
                  <?php 
                  $cat_args = array(
                      'taxonomy' => 'loan_category',
                      'hide_empty' => $hide_empty,
                      'orderby' => $orderby,
                      'order' => $order,
                  );
                  $custom_sort=false;
                  if(!empty($include) && $include != 'all'){
                      $cat_args['include'] = $include;
                      $cat_args['orderby'] = ''; //order by same as values in include attr
                      $cat_args['order'] = '';
                      $custom_sort=true;
                  }
                  elseif(!empty($exclude) && $exclude != 'all'){
                      $cat_args['exclude'] = $exclude;
                  }
                  else{
                      $cat_args['parent'] = $parent;
                  }
                  $cat_terms = get_terms( $cat_args );
                  if($custom_sort)
                  {
                      $display_terms=array();
                      $display_temp=array();
                      foreach($cat_terms as $term ) {
                          $display_temp[$term->term_id]=$term;
                      }
                      $include_array=explode(",",$include);
                      foreach($include_array as $include_id)
                      {
                          $display_terms[]=$display_temp[$include_id];
                      }
                  }
                  else
                  {
                      $display_terms=$cat_terms;
                  }
                  if( count($display_terms) > 0 ) {
                      $counter = 1; 
                      foreach( $display_terms as $term ) { ?>
                          <li class="<?php if($counter == 1){echo 'active';} ?>"><a href="#tab_<?php echo $term->slug; ?>" data-toggle="tab"><?php echo $term->name; ?></a></li>
                      <?php $counter++; 
                      }
                  }
                  ?>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tab-content">

            <?php
          if( count($display_terms) > 0  ) :
              $count = 1;
              foreach( $display_terms as $term ) : ?>
              <div class="tab-pane <?php if($count == 1){echo 'active';} ?>" id="tab_<?php echo $term->slug; ?>">
                <div class="table_header">

                                <div class="row">

                                    <div class="col-md-2">Company</div>

                                    <div class="col-md-3">Customer Reviews</div>

                                    <div class="col-md-2">Customer Rating</div>

                                    <div class="col-md-1"></div>

                                    <div class="col-md-2"></div>

                                </div>

                            </div>
              <?php 
                $args = array(
                    'post_type'             => 'lenders',
                    'posts_per_page'        => $posts_per_page,
                    'post_status'           => 'publish',
					
					'orderby' => 'date',
                    'order' => 'ASC',
                    'ignore_sticky_posts'   => true //caller_get_posts is deprecated since 3.1
                );
                $args['tax_query'] = array(
                    array(
                            'taxonomy' => 'loan_category',
                            'field'    => 'term_id',
                            'terms'    => array($term->term_id),
                    ),
                  );
                if(trim($canadian_state) != ''){
                    $args['meta_query'] = array(  );
                    $canadian_states = array_map('trim', explode(',', $canadian_state));
                    if(count($canadian_states) > 1)
                        $args['meta_query']['relation'] = 'OR';
                    foreach ($canadian_states as $cstate) {
                        $args['meta_query'][] = array(
                                'key' => 'canadian_states',
                                'value'    => $cstate,
                                'compare'    => 'LIKE',
                        );
                    }
                }
				
                if(trim($city) != ''){
                    $args['meta_query'] = array(  );
                    $canadian_cities = array_map('trim', explode(',', $city));
                    if(count($canadian_cities) > 1)
                        $args['meta_query']['relation'] = 'OR';
                    foreach ($canadian_cities as $ccity) {
                        $args['meta_query'][] = array(
                                'key' => 'cites',
                                'value'    => $ccity,
                                'compare'    => 'LIKE',
                        );
                    }
                }
                $args['meta_query'][] = array(
                        'key' => 'show_in_tabs',
                        'value'    => "y",
                        'compare'    => '=',
                );
				
				
                $_posts = new WP_Query( $args );
                if( $_posts->have_posts() ) :
                      while( $_posts->have_posts() ) : $_posts->the_post(); ?>
                      <?php 
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

                                                        <div class="col-md-3"><?php echo $total_reviews; ?></div>            

                                                        <div class="col-md-2" title="<?php echo 'Avg. Rating: '.$avg_rating; ?>">

                                                            <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />

<!--                                                            <img src="<?php bloginfo('template_url'); ?>/images/stars.png" class="center-block" title="<?php echo 'Avg. Rating: '.$avg_rating; ?>"/>-->

                                                        </div>

                                                        <div class="col-md-3"><a href="#submitReview" class="button" data-lity data-lender="<?php echo get_the_ID(); ?>">Write a Review</a></div>

                                                        <div class="col-md-2"><a href="<?php the_permalink(); ?>#reviews" class="button">Read Reviews</a></div>

                                                    </div>

                                                </div>
                      <?php 
                     endwhile;
                  else: ?>
                        <div class="table_content">
                        <div class="row">
                            <div class="col-xs-12 text-center">
                                No Lender found for <?php echo($term->name); ?>
                            </div>
                        </div>
                        </div>
                  <?php
                  endif;
                  wp_reset_postdata(); //important ?>
          </div>
          <?php $count++; 
              endforeach;

          endif; ?>
            </div>

          </div>

    <?php
    $sc_content = ob_get_contents();
    ob_end_clean();

    return $sc_content;
}