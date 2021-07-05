<?php 
//required for acf rating form below
acf_form_head();
get_header(); 
global $post;
$lender_title = get_the_ID();
$myslug = $post->post_name;
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
<?php 
    $rating_data = sloan_get_lender_rating_data(get_the_ID());

	//print_r($rating_data);
	
    $total_reviews = $rating_data['total_reviews'];
    $avg_rating = $rating_data['average_rating'];
    $redirect_url = add_query_arg('redirect_to_lender', get_the_ID(), site_url('/'));
?>
<section>
  <div class="container inner_wrapper lender_profile">
    <div class="row">
      <div class="col-md-3 col-sm-12">
        <div class="detail_thumbanil"><img src="<?php echo the_field('logo'); ?>" class="center-block img-responsive "  title="<?php echo get_the_title(); ?>"/></div>
        <div class="cta_single">
			<?php if(get_field('link_target') == 'n'){
					$target = "_blank";
				}else{
					$target = "_self";
				} ?>
			
             <?php if( get_field('button_link') ): ?><a href="<?php echo $redirect_url; ?>" target="<?php echo $target; ?>" class="blue_big_btn" rel="nofollow noindex noreferrer noopener"><?php if(get_field('button_text')){ the_field('button_text');}else{?>Apply Now<?php } ?></a><?php endif; ?>
            <a href="#submitReview" class="button" data-lity data-lender="<?php echo get_the_ID(); ?>">Write Review</a>

        </div>
      </div>
      
      <div class="col-md-6 col-sm-12 profile_mid_info">
      		<?php if($_GET['updated'] == 'true'){ ?>
      		<div class="alert alert-success">
              <strong>Success!</strong> Thank you for your valued review. Our administrators will review it for approval. 
            </div>
            <?php } ?>
            
            <h1 class="detail_title"><?php the_title(); ?></h1>
            
            <div class="single_rating">
                <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                <span>
                <?php 
                if($total_reviews > 0){
                    echo 'Avg. Rating: <b>'.$avg_rating.'</b> (<b>'.$total_reviews.'</b> '.($total_reviews > 1 ? 'reviews':'review').')'; 
                }else{
                    echo 'No reviews yet'; 
                }
                ?>
                </span>
            </div>
            <script type='application/ld+json'>
				{
					"@context":"http://schema.org",
					"@type":"LocalBusiness",
					"address":{
						"@type":"PostalAddress",
						"addressCountry":"CANADA",
						"addressLocality":"<?php the_field('ho_address'); ?>",
						"streetAddress":"<?php the_field('ho_address'); ?>"
					},
                    
                    
					"aggregateRating":{
						"@type":"AggregateRating",
						"bestRating":5.0,
                        
                        
						"itemReviewed":{
							"@type":"Thing","name":"<?php the_title(); ?>"},
							"ratingValue":<?php echo $avg_rating; ?>,
							"reviewCount":<?php echo $total_reviews; ?>,
							"worstRating":1},
                            
                            
							"image":"<?php echo the_field('logo'); ?>",
							"name":"<?php the_title(); ?>",
							"telephone":"+<?php the_field('phone'); ?>",
							"priceRange": "<?php the_field('amount'); ?>",
							"url":"<?php the_permalink(); ?>"},
							"publisher":{"@type":"Organization",
							"name":"Smarter Loans",
							"sameAs":"https://smarter.loans"},
							"url":"<?php the_permalink(); ?>",
							
				}
</script>
            
            
            
            
           
            
            
                            
                            
            <?php if(get_field('intro_video')){ ?>
            <div class="detail_intro_video"><?php the_field('intro_video'); ?></div>
            <?php } ?>
            <div class="detail_content">
				<?php the_content(); ?>
				
				
            	
                <div class="lender_other_info">  
                	<ul>
						<?php if(get_field('how_long_in_business')){ ?>            
                		<li><strong>TIME IN BUSINESS:</strong> <?php the_field('how_long_in_business'); ?></li>
                        <?php } ?>
                        <?php if(get_field('number_of_customers')){ ?> 
                    	<li><strong># OF CUSTOMERS:</strong> <?php the_field('number_of_customers'); ?></li>
                        <?php } ?>
                        <?php if(get_field('total_funded')){ ?> 
                    	<li><strong>TOTAL FUNDED:</strong> <?php the_field('total_funded'); ?></li>
                        <?php } ?>
                        <?php if(get_field('loan_offered_info')){ ?> 
                    	<li><strong>LOANS OFFERED:</strong> <?php the_field('loan_offered_info'); ?></li>
                        <?php } ?>
                    </ul>
                    <?php if(get_field('website')){ ?>
                    <span class="lender_web_url"><a href="<?php the_field('button_link'); ?>" target="_blank"><?php the_field('website'); ?></a></span> 
                    <?php } ?>              
                </div>    
            </div>
            
      </div>
      
      <div class="col-md-3 col-sm-12" id="contact_info_lender">
      	<div class="side_widget">
            <h3><?php the_field('phone'); ?></h3> 
            <strong><a href="mailto:<?php the_field('email'); ?>"><?php the_field('email'); ?></a></strong>
            <?php if(get_field('ho_address')){ ?>
            <strong><?php the_field('ho_address'); ?></strong>
            <?php } ?>
       	</div>
        <div class="side_widget">        
           <strong> Call Center:</strong>
            <?php the_field('call_center_timing_information'); ?>
        </div>
        <div class="side_widget">            
            <strong>Support Offered:</strong>
            <?php if( have_rows('support_offer') ): ?>
				<ul class="support_offer">
					<?php while( have_rows('support_offer') ): the_row();  ?>            
                    <li><?php the_sub_field('support_offered'); ?></li>     
                    <?php endwhile; ?>
				</ul>
			<?php endif; ?>
            
            <div class="lender_social">
            	<?php if(get_field('facebook')){ ?>
            	<a href="<?php the_field('facebook'); ?>" target="_blank"><i class="fa fa-facebook"></i></a>
                <?php } ?>
                <?php if(get_field('twitter')){ ?>
                <a href="<?php the_field('twitter'); ?>" target="_blank"><i class="fa fa-twitter"></i></a>
                <?php } ?>
                <?php if(get_field('pintrest')){ ?>
                <a href="<?php the_field('pintrest'); ?>" target="_blank"><i class="fa fa-pinterest"></i></a>
                <?php } ?>
                <?php if(get_field('linked_in')){ ?>
                <a href="<?php the_field('linked_in'); ?>" target="_blank"><i class="fa fa-linkedin"></i></a>
                <?php } ?>
                <?php if(get_field('youtube')){ ?>
                <a href="<?php the_field('youtube'); ?>" target="_blank"><i class="fa fa-youtube"></i></a>
                <?php } ?>
                <?php if(get_field('instagram')){ ?>
                <a href="<?php the_field('instagram'); ?>" target="_blank"><i class="fa fa-instagram"></i></a>
                <?php } ?>
            </div>
        </div>
        <div class="side_widget">            
            <strong>Availability:</strong>
            <?php the_field('availability'); ?>
        </div>
       
      </div>
      
    </div>
    
    
    
    <?php if( have_rows('loan_offered') ): ?>
    <div class="lender_offered">
    	<h3 class="text-center">Products Offered</h3>
        <h5 class="text-center">Below are all the products offered by this company.</h5>
        
        
        
        <div class="accordion_lender">
        	<?php while( have_rows('loan_offered') ): the_row();  
				$column_1 = get_sub_field('column_1');
				$column_2 = get_sub_field('column_2');
				$column_3 = get_sub_field('column_3');
			
			?>   
        	<button class="accordion active"><?php the_sub_field('item_title'); ?> 
				
				<?php if(get_sub_field('custom_link_target') == 'n'){
					$target2 = "_blank";
				}else{
					$target2 = "_self";
				} ?>
				
				
				<?php if(get_sub_field('custom_button_label') && get_sub_field('custom_button_link')){ ?>
	
					<a href="<?php the_sub_field('custom_button_link'); ?>" target="<?php echo $target2; ?>" class="" rel="nofollow noindex noreferrer noopener"><?php if(get_sub_field('custom_button_label')){ the_sub_field('custom_button_label');}else{?>Apply Now<?php } ?></a>
	
				<?php }else{ ?>
				
				
				<?php if( get_field('button_link') ): ?><a href="<?php the_field('button_link'); ?>" target="<?php echo $target; ?>" class="" rel="nofollow noindex noreferrer noopener"><?php if(get_field('button_text')){ the_field('button_text');}else{?>Apply Now<?php } ?></a><?php endif; ?>

				<?php } ?>
				
			
				 
				
				
			
			</button>
			
                <div class="panel panel_content" style="max-height:100%">
                  <div class="row">
                  <?php if ($column_1 != '') { ?>
                  
                  	<div class="<?php if (($column_2 == '') and ($column_3 == '')){ echo "col-md-12";}elseif ($column_3 == ''){echo "col-md-6";}else{echo "col-md-4";} ?>">
                    	<?php echo $column_1; ?>
                    </div>
                    
                   <?php } ?>
                    
                    
                    <?php if ($column_2 != '') { ?>
                  
                  	<div class="<?php if (($column_1 != '') and ($column_3 == '')){ echo "col-md-6";}else{echo "col-md-4";} ?>">
                    	<?php echo $column_2; ?>
                    </div>
                    
                   <?php } ?>
                   
                   <?php if ($column_3 != '') { ?>
                  
                  	<div class="col-md-4">
                    	<?php echo str_replace("Insurance","Issuance",$column_3); ; ?>
                    </div>
                    
                   <?php } ?>
                   
                  </div>             
                  
                  
                </div>
                
                
                <?php endwhile; ?>
                
        
        </div><!---Accordion Lender-->
        
        
        
        
    </div>
    <?php endif; ?>
    
    
    <?php
    videos_section();
    ?>
  
   
  </div>
  
     
 <?php

/*
*  Loop through post objects (assuming this is a multi-select field) ( setup postdata )
*  Using this method, you can use all the normal WP functions as the $post object is temporarily initialized within the loop
*  Read more: http://codex.wordpress.org/Template_Tags/get_posts#Reset_after_Postlists_with_offset
*/

$post_objects = get_field('select_article');

if( $post_objects ): ?>
    
   <div class="articles_about_lender">
    	<div class="container">
        	<div class="row top_row">
            	<div class="col-md-5"><h3 class="sec_title">Articles About <?php the_title(); ?></h3>
                	
                </div>
                <div class="col-md-4"></div>
                <!--<div class="col-md-3"><a href="<?php //echo get_option('home'); ?>/category/<?php echo $myslug; ?>" class="pbutton" style="margin-top:25px;">See All Articles</a></div>-->
            </div>
            
            <div class="row">
        
         <?php foreach( $post_objects as $post): // variable must be called $post (IMPORTANT) ?>
        <?php setup_postdata($post); ?>
        
        <div class="col-md-4">         
            <div class="arti_item">
                <a href="<?php the_permalink(); ?>">
                    <?php if ( has_post_thumbnail() ) {?>
                    <?php the_post_thumbnail('common_thumb',array('class'=>'img-responsive center-block')); ?>  
                    <?php } else { ?>
                        <img width="383" height="195" src="<?php bloginfo('template_directory'); ?>/images/default-thumbnail.jpg" style="height:183px;" class="img-responsive center-block wp-post-image" />
                    <?php } ?>                  
                    <h3><?php the_title(); ?></h3>
                </a>
            </div>
            <span class="arti_author">By <a href="Javascript:;"><?php the_author(); ?></a></span>            
            <p class="authorinfo"><?php esc_textarea(the_author_meta('description'));  ?></p>
        </div>
      
                <?php endforeach; ?>
               
                	
               
            <?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>
<?php endif; ?>
        	
            
        </div>
        </div>
    </div>




 
 <?php
  $lendertitle = get_the_title();
	//echo $lendertitle;
 	$the_user = get_user_by('login',  $lendertitle);
	$the_user_id = $the_user->ID;
	 
	
	$get_user_by_id = get_user_by('id',  $the_user_id);
	$get_user_name = $get_user_by_id->user_login;
	
    if ($get_user_name == $lendertitle){
					//$counter = 0;
					
					
					//echo $the_user_id;
					
					
					//echo $lenderID;
					
					$args2 = array( 'post_type' => 'post', 'author' => $the_user_id, 'posts_per_page' => 3, 'order' =>'DESC');
					
					
					$loop2 = new WP_Query( $args2 );
					
					if( $loop2->have_posts() ){
						
						
						
						
						
	?>
    
   <div class="articles_about_lender from_lender">
   
   
    	<div class="container">
        	<div class="row top_row">
            	<div class="col-md-5"><h3 class="sec_title">Articles by <span><?php the_title(); ?></span></h3>
                	
                </div>
                <div class="col-md-4"></div>
                <div class="col-md-3"></div>
            </div>
            
            <div class="row from_listing">
        
        <?php 
		
					while ( $loop2->have_posts() ) : $loop2->the_post();	
					
					$aid = get_field('select_author');
					
					$display_name = $aid['display_name'];
					
					//print_r ($aid);	
					
					//$display_name = get_display_name($aid);	
					
					//echo $display_name;
					
					//if ($display_name == $lendertitle){		
				?>
        
        <div class="col-md-4">         
            <div class="arti_item">
                <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('common_thumb',array('class'=>'img-responsive center-block')); ?>                    
                    <h3><?php the_title(); ?></h3>
                </a>
            </div>
            <span class="arti_author">By <a href="Javascript:;"><?php the_author(); ?></a></span>            
            <p class="authorinfo"><?php the_excerpt();  ?></p>
        </div>
      
                <?php  endwhile; ?>
               
                	
               
                <?php wp_reset_query(); ?>
        	
            
        </div>
        </div>
    </div>
 <?php } }?>
 
 <?php if(get_field('add_faq_to_the_page') == 'yes'){ ?>
    <div class="faq__row">
        <h2 class="text-center">Frequently Asked Questions About <?php the_title(); ?></h2>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                      <?php if( have_rows('faq_content', $f) ): ?>
                    
                       	<?php while( have_rows('faq_content', $f) ): the_row(); ?>
		                <?php $q = get_sub_field('question'); $a = get_sub_field('answer'); ?>
                    
                        <div class="faq__item">
                            <h3><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> <?php echo $q; ?></h3>
                            <div class="answer__block"><?php echo $a; ?></div>
                        </div>
                    
                        <?php endwhile; ?>
                         
                    <?php endif; ?>
                </div>
            </div>
        
        </div>
    
    </div>
 <?php } ?>
    
    <div class="container customer_reviews_listing detail_lender" id="reviews">
    
    <div class="row top_row">
            	<div class="col-md-5"><h3 class="sec_title"><?php the_title(); ?> <span>Reviews</span></h3>
                	<div class="single_rating">
                <input type="hidden" class="rating" value="<?php echo $avg_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                <span>
                <?php 
                if($total_reviews > 0){
                    echo 'Avg. Rating: <b>'.$avg_rating.'</b> (<b>'.$total_reviews.'</b> '.($total_reviews > 1 ? 'reviews':'review').')'; 
                }else{
                    echo 'No reviews yet'; 
                }
                ?>
                </span>
            </div>
                </div>
                <div class="col-md-1"></div>
                <div class="col-md-6 text-right"><!--<a href="<?php //echo get_option('home'); ?>/reviews/" class="pbutton" style="margin-top:25px;">SEE ALL REVIEWS</a>--> <a href="#submitReview" class="pbutton" style="margin-top:25px;" data-lity data-lender="<?php echo get_the_ID(); ?>">WRITE A REVIEW</a></div>
            </div>

     	<div class="row">
        <div id="testi_list_single">
       		<article>
        		<?php 
					
					
					$args = array( 'post_type' => 'reviews', 'posts_per_page' => -1, 'order' =>'ASC', 'meta_query' => array(
			array(
				'key' => 'lender',
				'value' =>  $lender_title    
			))   );
					$loop = new WP_Query( $args );
					while ( $loop->have_posts() ) : $loop->the_post();
					
					$user_rating = get_field('rating', get_the_ID());
				?>
        
	
    
        	<section>

            	<div class="review_list_item">

                	<h5><?php the_field('review_title'); ?></h5>

                    <div class="star_rating" title="<?php echo 'Rating: '.$user_rating; ?>">
                        <input type="hidden" class="rating" value="<?php echo $user_rating; ?>" data-start="0" data-stop="5" data-fractions="10" data-readonly />
                    </div>

                    <p><?php the_field('review'); ?></p>

                    <div class="review_author">

                    	<?php the_field('name'); ?>

                    </div>

                </div>

            </section>

            
		<?php endwhile; ?>
		<?php wp_reset_query(); ?>
        	</article>
        </div>

        </div>

     </div>
     
   <!--  <div class="detail_comparison_module">
     	<div class="container">
            <h3 class="text-center">Compare <?php //the_title(); ?> with another Company:</h3>
            <form action="<?php //echo site_url('/compare'); ?>" method="post" class="row">
                <input type="hidden" name="lender_1" id="lender_1" value="<?php //echo get_the_ID();?>"/>
                <div class="col-xs-12 text-center">
                    <label class="support-select-label" style="margin-right: 10px;">
                        <select name="lender_2" id="company_2" class="filter">
                        </select>
                    </label>
                    <input type="submit" id="compareBtn" value="Compare" style="display: inline-block;" />
                </div>
            </form>
        </div>
     </div>-->
</section>
<?php endwhile; endif; ?>
<!--Write a Review modal-->
<div id="submitReview" class="lity-hide" style="overflow: auto;padding: 15px 0 30px;">
	<h2 style="margin: 0; padding: 0 10px 10px;">Write a Review</h2>
<?php 
    $review_fg_id = get_option( 'field_group_reviews' );
    if($review_fg_id){
        acf_form(array(
			'post_id'		=> 'new_post',
			'new_post'      => array(
				'post_type'     => 'reviews',
				//'post_title'	=> 'Review about'.get_the_title(),
				'post_status'   => 'pending'
			),
			'field_groups'	=> explode(',', $review_fg_id),
			'submit_value'		=> 'Submit',
			'updated_message'		=> 'Review added',
			'honeypot' => true,
			'recaptcha' =>true
        )); 
    } ?>
</div>
<script type="text/javascript">
        window.allLenders = <?php echo json_encode(sloan_getLenders());?>;
</script>
<?php get_footer(); ?>
