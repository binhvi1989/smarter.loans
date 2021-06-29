<?php

//if ( ! defined( 'ABSPATH' ) ) { exit; }

$card_page_id = get_field("card_page","option");
$card_page_id = $card_page_id[0];


get_header(); ?>
        <div class="custom-page-title">
                <h1>
                <?php
                    
                   $title = get_the_title($card_page_id)?get_the_title($card_page_id):"Credit Cards"; 
                    echo $title;
                ?>
                </h1>    
        </div>
		<?php //if ( presscore_is_content_visible() ): ?>
        	<div class="container">
        		<div class="row">
                	<div class="col-md-2">
						<div class="left-column">
                <div class="block-category">
                    <h3>Card Type</h3>                    
                    <?php                   
                       $page_link =  get_permalink($card_page_id)?get_permalink($card_page_id):get_bloginfo("wpurl").'/credit-cards/';                       
                       $subcategories = get_terms( 'card_type', array(
                            'hide_empty' => false,
                            'orderby'=> 'tax_position'
                        ) );
                    ?>
                    <?php if($subcategories){?>
                     <ul>
                        <?php
                            $more = $_GET["provider"]?"?provider=".$_GET["provider"]:"";
                         ?>    
                         <li <?php if(!isset($_GET["type"])||$_GET["type"]==""){ echo " class='active' ";}?>><a  href="<?php echo $page_link.$more; ?>">All Type</a></li>
                        <?php
        
                            foreach($subcategories as $category) { 
                                $ative = "";
                                $more = $_GET["provider"]?"&provider=".$_GET["provider"]:"";
                                if($category->term_id == $_GET["type"]){
                                    $ative = " active";	
                                }                                
                                echo '<li class="column-clear '.$ative.'"><a href="'.$page_link.'?type=' .$category->term_id . $more .'" >' . $category->name.'</a> </li> ';								
                            }
                        ?>
                    </ul>
                    <?php } ?>
                </div>
                
                 <div class="block-category">
                    <h3>Provider:</h3>                    
                    <?php                   
                       $page_link =  get_permalink($card_page_id)?get_permalink($card_page_id):get_bloginfo("wpurl").'/credit-cards/';                       
                       $subcategories = get_terms( 'card_provider', array(
                            'hide_empty' => false,
                            'orderby'=> 'tax_position'
                        ) );
                    ?>
                    <?php if($subcategories){?>
                     <ul>
                        <?php
                            $more = $_GET["type"]?"?type=".$_GET["type"]:"";
                         ?>    
                         <li <?php if(!isset($_GET["provider"])||$_GET["provider"]==""){ echo " class='active' ";}?>><a  href="<?php echo $page_link.$more; ?>">All</a></li>
                        <?php
        
                            foreach($subcategories as $category) { 
                                $ative = "";
                                $more = $_GET["type"]?"&type=".$_GET["type"]:"";
                                if($category->term_id == $_GET["provider"]){
                                    $ative = " active";	
                                }                                
                                echo '<li class="column-clear '.$ative.'"><a href="'.$page_link.'?provider=' .$category->term_id . $more .'" >' . $category->name.'</a> </li> ';								
                            }
                        ?>
                    </ul>
                    <?php } ?>
                </div>
            </div>
            		</div>
                	<div class="col-md-10">
						<div id="content" class="content" role="main">

			<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

					<?php //do_action('presscore_before_loop'); ?>
                    <h2 class="single-title-sub"><?php the_title()?></h2>
                    <div class="block-single block-1">
                        <div class="block-2column clearfix">
                            <div class="b-left">
                                <?php
                                    $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()),'full');
                                    if($large_image_url[0]):
                                ?>
                                <img src="<?php echo  $large_image_url[0] ?>" alt="">
                                <?php endif; ?>
                                <?php if(get_field("apply_now_link")){?>
                                <a href="<?php the_field("apply_now_link")?>" class="compare_go va-middle apply_btn even">Apply Now</a>
                                <?php } ?>
                            </div>
                            <div class="b-right">
                                <?php the_content(); ?>
                            </div>
                        </div>
                        <div class="card-info">                            
                            <div>Annual Fee: <?php the_field("annual_fee")?></div>
                            <div>Additional Card: <?php the_field("_additional_card")?></div>
                            <div>Purchase Rate: <?php the_field("purchase_rate")?></div>
                            <div>Cash Advance Rate: <?php the_field("cash_advance_rate")?></div>
                        </div>
                    </div>
                    <?php if(get_field("card_details")){?>
                       <div class="block-single b-content block-card_details">
                            <div class="block-2column clearfix">
                                <div class="b-left">
                                    <h3>Card Details</h3>
                                </div>
                                <div class="b-right">
                                    <?php the_field("card_details"); ?>
                                </div>
                            </div>
                        </div>
                    <?php } ?>    
                     <?php if(get_field("rewards")){?>
                       <div class="block-single b-content block-rewards">
                            <div class="block-2column clearfix">
                                <div class="b-left">
                                    <h3>Rewards</h3>
                                </div>
                                <div class="b-right">
                                    <?php the_field("rewards"); ?>
                                </div>
                            </div>
                        </div>
                    <?php } ?>    
                <?php if(get_field("additional_features")){?>
                       <div class="block-single b-content block-additional_features">
                            <div class="block-2column clearfix">
                                <div class="b-left">
                                    <h3>Additional Features</h3>
                                </div>
                                <div class="b-right">
                                    <?php the_field("additional_features"); ?>
                                </div>
                            </div>
                        </div>
                    <?php } ?>  
                    <?php if(get_field("apply_now_link")){?>
                        <div class="apply-card">
                                <a href="<?php the_field("apply_now_link")?>" class="compare_go va-middle apply_btn even">Apply Now</a>
                        </div>    
                     <?php } ?>
					

					

				<?php endwhile; ?>

			

			<?php endif; ?>

			</div><!-- #content -->
            		</div>
					
            
            	</div>
            </div>

		

<?php get_footer(); ?>