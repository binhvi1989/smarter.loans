<?php
/*
Template Name: Crads list
*/

// File Security Check
if ( ! defined( 'ABSPATH' ) ) { exit; }
$card_page_id = get_field("card_page","option");
$card_page_id = $card_page_id[0];

get_header(); ?>

<div class="breadcrumbs_wrapper">
	<div class="container">
    	<div class="row">
        	<div class="col-md-12">
            	<?php if(function_exists('bcn_display')){ bcn_display();} ?>
            </div>
        </div>
    </div>
</div>
        <div class="custom-page-title">
                <h1>
                <?php
                   if(isset($_GET["compare"])){ echo "COMPARE ";}    
                   $title = get_the_title()?get_the_title():"Credit Cards"; 
                    echo $title;
                    if(isset($_GET["type"])){
                      $t = $term = get_term( $_GET["type"], 'card_type' );  
                      echo " | ".$t->name;    
                    }
                    
                ?>
                </h1>    
        </div>
		<?php //if ( presscore_is_content_visible() ): ?>
		<div class="container">
        	<div class="row">
                <div class="col-md-2 col-sm-12">
                    <div class="left-column">
                    <div class="block-category">
                        <h3>Card Type</h3>                    
                        <?php                   
                           $page_link =  get_permalink($card_page_id)?get_permalink($card_page_id):get_bloginfo("wpurl").'/credit-cards/';                       
                           $subcategories = get_terms( 'card_type', array(
                                'hide_empty' => true,
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
                                'hide_empty' => true,
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
                <div class="col-md-10 col-sm-12">
                    <div class="row">
    
                <?php
                 if(!isset($_GET["compare"])||$_GET["compare"]==""){
                        $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;	
                        $archive_args = array(
                          'post_type' => 'card',
                          'posts_per_page'=> -1,    
                          'paged'=>$paged,		
                          'orderby'=>'DATE',
                          'order'=>'DESC',
                          'post_status'=> 'publish'
                        );
                        $query_cat;
                        if($_GET["type"]!=""){
                            $query_cat = array(
                                    'taxonomy' => 'card_type',
                                    'field'    => 'id',
                                    'terms'    => $_GET["type"],
                                );
                               $archive_args["tax_query"] =  array(
                                   $query_cat
                                ) ;  
                        }
                        $query_type;
                        if($_GET["provider"]!=""){
                            $query_type = array(
                                    'taxonomy' => 'card_provider',
                                    'field'    => 'id',
                                    'terms'    => $_GET["provider"],
                                );
                             $archive_args["tax_query"] =  array(
                                   $query_type
                            );      
                        }
    
                        if($query_cat!=""&&$query_type!=""){
                            $archive_args["tax_query"] =  array(
                                   'relation' => 'AND',        
                                   $query_cat,
                                   $query_type
                            );  
                        }
    
                        $wp_query = new WP_Query( $archive_args );
                        ?>
                    
                            <div class="card-loop clearfix">
                                     <ul>
    
                                    <?php
                                        if ( have_posts()): 
                                        while (have_posts() ) : the_post();
                                    ?>
    
                                        <li <?php if(get_field("recommended/featured") && get_field("recommended/featured") == "Yes"){ echo 'class = "container_list"';}?>>
                                            <h4> <a href="<?php the_permalink()  ?>"><?php the_title() ?></a></h4>
                                            <?php
                                              if(get_field("recommended/featured") && get_field("recommended/featured") == "Yes"){
                                              echo "<div class='container_badge'><i data-toggle='tooltip' data-placement='top' title='Recommended / Featured' class='fa fa-certificate' aria-hidden='true'></i></div>";
                                              } 
                                            ?>
                                            <?php
                                                $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()),'full');
                                                if($large_image_url[0]){
                                            ?>
    
                                           <a href="<?php the_permalink()  ?>"><img src="<?php echo  $large_image_url[0] ?>" alt="" <?php if(get_field("recommended/featured") && get_field("recommended/featured") == "Yes"){ echo 'class = "card_img"';}?>></a>
    
                                            <?php } ?>
                                            <div class="compare-link" data-card-id="<?php the_ID()?>">
                                                <a href="" data-compare="">compare</a>
                                            </div>
                                            <div class="erp"><?php the_excerpt()  ?></div>
                                            <a class="link" href="<?php the_permalink()  ?>">Card Details ></a>
                                             <?php if(get_field("apply_now_link")){?>
                                            <a href="<?php the_field("apply_now_link")?>" class="compare_go va-middle apply_btn even">Apply Now</a>
                                            <?php } ?>
                                        </li>
    
                                    <?php
                                        endwhile;
                                       
                                        endif;
                                    ?>
                                    </ul>     
                                </div>
                 <?php    
                 }else{
                     $ids = explode(",",$_GET["compare"]);                
                     $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;	
                        $archive_args = array(
                          'post_type' => 'card',  
                          'posts_per_page'=> -1,    
                          'paged'=>$paged,		
                          'orderby'=>'DATE',
                          'order'=>'DESC',
                          'post_status'=> 'publish',
                          'post__in' => $ids        
                        );
                    
                        $wp_query = new WP_Query( $archive_args );
                        ?>
                    
                            <div class="card-loop clearfix">
                                     <ul>
    
                                    <?php
                                        if ( have_posts()): 
                                        while (have_posts() ) : the_post();
                                    ?>
    
                                        <li>
                                            <h4><a href="<?php the_permalink()  ?>"><?php the_title() ?></a></h4>
                                            <?php
                                                $large_image_url = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()),'full');
                                                if($large_image_url[0]){
                                            ?>
    
                                            <a href="<?php the_permalink()  ?>"><img src="<?php echo  $large_image_url[0] ?>" alt=""></a>
    
                                            <?php } ?>
                                            <div class="card-info">                            
                                                <div>Annual Fee: <?php the_field("annual_fee")?></div>
                                                <div>Additional Card: <?php the_field("_additional_card")?></div>
                                                <div>Purchase Rate: <?php the_field("purchase_rate")?></div>
                                                <div>Cash Advance Rate: <?php the_field("cash_advance_rate")?></div>
                                            </div>
                                            <a class="link" href="<?php the_permalink()  ?>">Card Details ></a>
                                             <?php if(get_field("apply_now_link")){?>
                                            <a href="<?php the_field("apply_now_link")?>" class="compare_go va-middle apply_btn even">Apply Now</a>
                                            <?php } ?>
                                        </li>
    
                                    <?php
                                        endwhile;
                                        else:
                                            get_template_part( 'no-results', 'page' );
                                        endif;
                                    ?>
                                    </ul>     
                                </div>
                     <?php    
                     }  
                    ?>
    
                  
    
                </div><!-- #content -->
                </div>
			</div>
        </div>

		<?php //endif; // if content visible ?>
<script type="text/javascript">
jQuery(function($){
    var id ="";
    var url = "<?php echo $page_link;?>";
    n=0;
    jQuery(".compare-link a").live("click",function(){
        if(!$(this).hasClass("active")){
            n++;
            $(this).addClass("active");
            var str = $(this).parent(".compare-link").attr("data-card-id");
            if(id!=""){
                 id += ","+str;
            }else{
                id += str;
            }
           $(this).text("compare");   
           jQuery(".compare-link a").each(function(){
               $(this).attr("href",url+"?compare="+id);
           })        
           return false;
        } else{
           
            if(n<2){
                alert("Please select two or over two cards for compare!");
                return false;
            }
        }     
       
    })
})
</script>
<?php get_footer(); ?>