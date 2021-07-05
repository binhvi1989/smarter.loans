<?php



//                ini_set("display_errors", "on");
//                error_reporting(63);

// Define Directory Constants 

define('CADEN_FRAME', TEMPLATEPATH . '/framework');

define('CADEN_ADMIN', CADEN_FRAME . '/admin');
define('CADEN_INCLUDES', TEMPLATEPATH . '/includes');
define('CADEN_FUNCTIONS', CADEN_FRAME . '/functions');
define('CADEN_FUNCTIONS', dev . '/dev');

define('CADEN_JS', get_template_directory_uri() . '/js');

require_once(CADEN_INCLUDES . '/wp-pagenavi/wp-pagenavi.php');




// Load Admin Options

require_once(CADEN_ADMIN . '/options.php');



// Load Admin Interface

require_once(CADEN_ADMIN . '/theme.php');




// Load Shortcodes 

require_once(CADEN_FUNCTIONS . '/sl_shortcodes.php');



// Loan
require_once(CADEN_ADMIN . '/types/loan.php');
// Slider homepage
require_once(CADEN_ADMIN . '/types/slider.php');
// Trusted Lenders
require_once(CADEN_ADMIN . '/types/trusted-lenders.php');
// Reviews
require_once(CADEN_ADMIN . '/types/reviews.php');
// Testimonials
require_once(CADEN_ADMIN . '/types/our-reviews.php');

// Company
require_once(CADEN_ADMIN . '/types/company-profile.php');

// Content Block
require_once(CADEN_ADMIN . '/types/content-block.php');


// Meta Boxes for all post types

//require_once(CADEN_ADMIN . '/types/meta_box.php');

//require_once(CADEN_ADMIN . '/types/images_meta_box.php');



// Load Header Javascript Files

//require_once(CADEN_FUNCTIONS . '/scripts.php');

// Load Theme/Content Helper function

require_once(CADEN_FUNCTIONS . '/misc.php');

// Load ACF related function

require_once(CADEN_FUNCTIONS . '/acf.php');

// Load Ajax hadlers/functions

require_once(CADEN_FUNCTIONS . '/ajax.php');



// Load Custom Widgets

require_once(CADEN_FUNCTIONS . '/widgets.php');
// Load Custom post type
//require_once(CADEN_ADMIN . '/types/pet-quotes.php');


// Links management

//require_once(CADEN_ADMIN . '/types/procedures.php');





// Add support for thumbnails and menus

add_theme_support( 'post-thumbnails' );

add_theme_support( 'menus' );



// Set content width

if ( ! isset( $content_width ) ) $content_width = 824;



/*************************** Register the nav menu in the header */

register_nav_menus( array(

		'menu' => __( 'Nav', 'menu' ),

		'menu' => __( 'Footer Navigation', 'menu' )

) );



/*************************** Exclude Portfolio/Sliders from search 

function excludePages($query) {

if ($query->is_search) {

	$query->set('post_type', 'post','posttype');

}

	return $query; 

} 

add_filter('pre_get_posts','excludePages'); 

*/


/*************************** Register sidebar */

if ( function_exists('register_sidebar') ) {

	register_sidebar(array('name' => 'Right Sidebar','before_widget' => '<div class="widget">','after_widget' => '</div>','before_title' => '<h3>','after_title' => '</h3><div class="sidebar_divider"></div>'));
	
		register_sidebar(array('name' => 'Footer 1','before_widget' => '<div class="widget"><div class="quick_links">','after_widget' => '</div></div>','before_title' => '<h3>','after_title' => '</h3><div class="sidebar_divider"></div>'));
	register_sidebar(array('name' => 'Footer 2','before_widget' => '<div class="widget">','after_widget' => '</div>','before_title' => '<h3>','after_title' => '</h3><div class="sidebar_divider"></div>'));
	register_sidebar(array('name' => 'Video Portal Sidebar','before_widget' => '<div class="widget single_video_sidebar_category">','after_widget' => '</div>','before_title' => '<h3 class="single_video_sidebar_border">','after_title' => '</h3><div class="sidebar_divider"></div>'));




}
function faqs() { 
    ob_start(); 
	wp_reset_query();
    if(get_field('faq_content')):
    $faq = '<ul>'; 
        while(has_sub_field('faq_content')):
			$faq .= '<li>';
            $faq .= '<h3>'.get_sub_field('question').'</h3>'; 
			$faq .= '<p>'.get_sub_field('answer').'</p>'; 
			$faq .= '</li>';
        endwhile; wp_reset_postdata(); 
    $faq .= '</ul>';
    
    
    endif;
    return $faq; 
 } 
add_shortcode('faq','faqs');

/*function recent_articles() { 
    ob_start(); 
	wp_reset_query();
    $data = '<ul id="content-slider" class="content-slider">'; 
        $query = new WP_Query('post_type=post&showposts=-1&orderby=ASC&cat=9'); 
            while( $query->have_posts() ):$query->the_post(); 
			$data .= '<li>';
            $data .= '<div class="arti_item">'; 
			$data .= '<a href="'.get_the_permalink().'">';
			$data .= the_post_thumbnail('common_thumb',array('class'=>'img-responsive center-block'));
            $data .= '<h3>'.get_the_title().'</h3>'; 
			$data .= '</a>';
            $data .= '</div>'; //arti_item Closed
			$data .= '</li>';
        endwhile; wp_reset_postdata(); 
    $data .= '</ul>'; 
    return $data; 
 } 
add_shortcode('latestarticles','recent_articles');
*/


// create shortcode to list all clothes which come in blue
add_shortcode( 'list-posts-basic', 'rmcc_post_listing_shortcode1' );
function rmcc_post_listing_shortcode1( $atts ) {
    ob_start();
    $query = new WP_Query( array(
        'post_type' => 'post',       
        'posts_per_page' => -1,
		'cat' => 194,
        'order' => 'ASC',        
    ) );
    if ( $query->have_posts() ) { ?>
        <ul id="content-slider" class="content-slider">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
            <li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <div class="arti_item">
                <a href="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('common_thumb',array('class'=>'img-responsive center-block')); ?>                    
                    <h3><?php the_title(); ?></h3>
                </a>
                </div>
                <span class="arti_author">By <a href="Javascript:;"><?php the_author(); ?></a></span>
                
            </li>
            <?php endwhile;
            wp_reset_postdata(); ?>
        </ul>
    <?php $myvariable = ob_get_clean();
    return $myvariable;
    }
}



add_shortcode( 'trusted-lenders', 'tursted_lenders_shortcode1' );
function tursted_lenders_shortcode1( $atts ) {
    ob_start();
	
	
    $query = new WP_Query( array(
        'post_type' => 'trusted-lenders',       
        'posts_per_page' => -1,		
        'order' => 'ASC',  
		
    ) );
    if ( $query->have_posts() ) { ?>
       <ul id="lender-slider" class="content-slider">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
            <li id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <?php 
            	$current_lender = get_the_ID();
				//$post_objects = get_field('related_posts', get_the_id());
				$post_objects = get_field('link', $current_lender);
		  	?>
              
                <a href="<?php echo get_permalink($post_objects->ID); ?>">
					<img src="<?php echo the_field('logo'); ?>" style="max-width:110px;height:auto;" class="center-block img-responsive" />                                
                </a>
			
             
            </li>
            <?php endwhile;
            wp_reset_postdata(); ?>
        </ul>
    <?php $myvariable = ob_get_clean();
    return $myvariable;
    }
	
}



function new_excerpt_more($more) {

	global $post;

	$show_readmore = get_option('show_readmore');

	$read_more = get_option('read_more');

	if(is_page_template('blog-left.php')) { $left = "-left"; }

	if($read_more == "") { $read_more = "Read More"; }

	if(!$show_readmore) {

		return '...<div class="read_more'.$left.'"><a href="'. get_permalink($post->ID) . '">'.$read_more.'</a></div>';

	} else {

		return '...';

	}

}

add_filter('excerpt_more', 'new_excerpt_more');





function new_excerpt_length($length) {

	$excerpt_length = get_option('excerpt_length');

	if($excerpt_length == "") { $excerpt_length = "55"; }

	return $excerpt_length;

}

add_filter('excerpt_length', 'new_excerpt_length');

add_theme_support('automatic-feed-links');

add_image_size( 'common_thumb', 383, 195, true );

add_action('do_meta_boxes', 'customposttype_image_box');

function custom_add_google_fonts() {
 wp_enqueue_style( 'custom-google-fonts-roboto', 'https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700', false );
 wp_enqueue_style( 'custom-google-fonts-open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800', false );
  //wp_enqueue_style( 'fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.4.0/css/fontawesome.min.css', false );
 wp_register_style( 'font-awesome', trailingslashit( get_stylesheet_directory_uri() ) ."/css/fontawesome-all.css", array(), '' );
 wp_enqueue_style('font-awesome');
 }
 add_action( 'wp_enqueue_scripts', 'custom_add_google_fonts' );


function sloan_theme_scripts() {
    wp_register_style('litycss', trailingslashit( get_stylesheet_directory_uri() ) .'css/lity.min.css', array(), '');
    wp_enqueue_style('litycss');
        
    wp_enqueue_script('jquery');
    wp_enqueue_script('bootstrap-js', get_template_directory_uri()."/js/bootstrap.min.js", '', '', true);
    wp_enqueue_script('scrolling-tabs', get_template_directory_uri()."/js/jquery.scrolling-tabs.js", '', '', true);
    wp_enqueue_script('lightslider-scroll', get_template_directory_uri()."/js/lightslider.js", '', '', true);
    wp_register_script( 'lityjs', trailingslashit( get_stylesheet_directory_uri() ) .'js/lity.min.js', array( 'jquery' ), true, '' );
    wp_enqueue_script('lityjs');
    wp_register_script( 'bs-rating', trailingslashit( get_stylesheet_directory_uri() ) .'js/bootstrap-rating.min.js', array( 'jquery','bootstrap-js' ), true, '' );
    wp_enqueue_script('bs-rating');
    wp_enqueue_script('custom-js', get_template_directory_uri()."/js/custom.js", '', '', true);
    wp_localize_script( 'custom-js', 'SL_Ajax', array(
            'ajaxurl'   => admin_url( 'admin-ajax.php' ),
            'nextNonce' => wp_create_nonce( 'custom-js-nonce' )
        )
    );
}
add_action( 'wp_enqueue_scripts', 'sloan_theme_scripts' );
function sloan_theme_dequeue_scripts() {
    if(!is_admin()){
        wp_deregister_style('common');
    }
}
add_action( 'wp_enqueue_scripts', 'sloan_theme_dequeue_scripts' , 1);

/* creat jobs postype */
function themes_taxonomy_cards() {  
    register_taxonomy(  
        'card_type',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'card',        //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'card type',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'card_type', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
    register_taxonomy(  
        'card_provider',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'card',        //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'card provider',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'card_provider', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
}  
add_action( 'init', 'themes_taxonomy_cards');

add_action( 'init', 'register_themepost_cards', 20 );
function register_themepost_cards() {
    $labels = array(
        'name' => _x( 'cards', 'my_custom_post','custom' ),
        'singular_name' => _x( 'cards', 'my_custom_post', 'custom' ),
        'add_new' => _x( 'Add New', 'my_custom_post', 'custom' ),
        'add_new_item' => _x( 'Add New cards', 'my_custom_post', 'custom' ),
        'edit_item' => _x( 'Edit cards', 'my_custom_post', 'custom' ),
        'new_item' => _x( 'New cards', 'my_custom_post', 'custom' ),
        'view_item' => _x( 'View cards', 'my_custom_post', 'custom' ),
        'search_items' => _x( 'Search cards', 'my_custom_post', 'custom' ),
        'not_found' => _x( 'No stories found', 'my_custom_post', 'custom' ),
        'not_found_in_trash' => _x( 'No cards found in Trash', 'my_custom_post', 'custom' ),
        'parent_item_colon' => _x( 'Parent stories:', 'my_custom_post', 'custom' ),
        'menu_name' => _x( 'cards', 'my_custom_post', 'custom' ),
    );
    $args = array(
        'labels' => $labels,
        'hierarchical' => false,
        'description' => 'Custom cards',
        'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'post-formats', 'custom-fields' ),
        'taxonomies' => array( 'card_type','card_provider'),
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => array('slug' => 'card','with_front' => FALSE),
        'public' => true,
        'has_archive' => 'cards',
        'capability_type' => 'post'
    );  
    register_post_type( 'card', $args );//max 20 charachter cannot contain capital letters and spaces
} 
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );
function objectRSort(&$object, $key) 
    { 
        for ($i = count($object) - 1; $i >= 0; $i--) 
        { 
          	$swapped = false; 
          	for ($j = 0; $j < $i; $j++) 
          	{ 
		  		if(is_numeric($object[$j]->$key))
				{
               		if ($object[$j]->$key > $object[$j + 1]->$key) 
               		{ 
                    	$tmp = $object[$j]; 
                    	$object[$j] = $object[$j + 1];       
                    	$object[$j + 1] = $tmp; 
                    	$swapped = true; 
               		} 
			 	} 
				else
				{
					if (strtolower($object[$j]->$key) > strtolower($object[$j + 1]->$key)) 
               		{ 
                    	$tmp = $object[$j]; 
                    	$object[$j] = $object[$j + 1];       
                    	$object[$j + 1] = $tmp; 
                    	$swapped = true; 
               		} 
				}
			} 
			
          	if (!$swapped) return; 
        } 
    }
	
	
add_filter( 'acf/fields/post_object/query', 'change_posts_order' );
function change_posts_order( $args ) {
	$args['orderby'] = 'date';
	//$args['order'] = 'DESC';
	return $args;
}
function bybe_remove_yoast_json($data){
  $data = array();
  return $data;
}
add_filter('wpseo_json_ld_output', 'bybe_remove_yoast_json', 10, 1);
function buildMenuHtml($menu){
    if(isset($menu->wpse_children) && count($menu->wpse_children) > 0){
      $menuHtml .= "<li><span>".$menu->title."</span><ul>";
      foreach ($menu->wpse_children as $menuChild) {
        $menuHtml .= buildMenuHtml($menuChild);
      }
      $menuHtml .= "</ul></li>";
    }else{
      $menuHtml .= "\t\t\t\t\t". '<li id="mega-menu-item-'.$menu->ID.'"><a class="'.$menu->classes[0].'" href="'. $menu->url .'">'. $menu->title .'</a>' ."\n"; 
    }
    return $menuHtml;
  }
  function buildTree( array &$elements, $parentId = 0 )
  {
      $branch = array();
      foreach ( $elements as &$element )
      {
          if ( $element->menu_item_parent == $parentId )
          {
              $children = buildTree( $elements, $element->ID );
              if ( $children )
                  $element->wpse_children = $children;
              $branch[$element->ID] = $element;
              unset( $element );
          }
      }
      return $branch;
  }
add_action( 'init', 'company_review_init' );
/**
 * Register a company review type.
 *
 */
function company_review_init() {
    $labels = array(
        'name'               => _x( 'Company Reviews', 'post type general name', 'your-plugin-textdomain' ),
        'singular_name'      => _x( 'Company Review', 'post type singular name', 'your-plugin-textdomain' ),
        'menu_name'          => _x( 'Company Reviews', 'admin menu', 'your-plugin-textdomain' ),
        'name_admin_bar'     => _x( 'Company Review', 'add new on admin bar', 'your-plugin-textdomain' ),
        'add_new'            => _x( 'Add New', 'Company Review', 'your-plugin-textdomain' ),
        'add_new_item'       => __( 'Add New Company Review', 'your-plugin-textdomain' ),
        'new_item'           => __( 'New Company Review', 'your-plugin-textdomain' ),
        'edit_item'          => __( 'Edit Company Review', 'your-plugin-textdomain' ),
        'view_item'          => __( 'View Company Review', 'your-plugin-textdomain' ),
        'all_items'          => __( 'All Company Reviews', 'your-plugin-textdomain' ),
        'search_items'       => __( 'Search Company Reviews', 'your-plugin-textdomain' ),
        'parent_item_colon'  => __( 'Parent Company Reviews:', 'your-plugin-textdomain' ),
        'not_found'          => __( 'No books found.', 'your-plugin-textdomain' ),
        'not_found_in_trash' => __( 'No books found in Trash.', 'your-plugin-textdomain' )
    );
    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Description.', 'your-plugin-textdomain' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'company_review' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
    );
    register_post_type( 'company_review', $args );
}
function rocket_lazyload_exclude_class( $attributes ) {
	$attributes[] = 'class="banner"';
	return $attributes;
}
add_filter( 'rocket_lazyload_excluded_attributes', 'rocket_lazyload_exclude_class' );


add_action( 'init' , 'glue_login_redirect',1 );
function glue_login_redirect() {
    if (isset($_GET['redirect_to']) && $_GET["password-protected"]=="login") {
        $redirect_to=$_GET['redirect_to'];
        if(substr($redirect_to, 0,21)=="https://smarter.loans")
        {
            $redirect_to=substr($redirect_to,22);
        }
        
        wp_redirect($redirect_to);
        die("redirecting....");
    }
}
add_filter( 'wpseo_exclude_from_sitemap_by_post_ids', function () {
  return array(149,150,151,35942,36201,41569,71592,71593,71594,71596,71597,71598,71599,71600,71614,71615,71616,109390,71589,94964,94963,94967,71591,71595,71590,133645,133636,131581,131594,136934,138151,136936,131565,136935);
} );

add_action( 'init', 'videos_init' );
/**
 * Register a company review type.
 *
 */
function videos_init() {
    $labels = array(
        'name'               => _x( 'Videos', 'post type general name'),
        'singular_name'      => _x( 'Videos', 'post type singular name'),
        'menu_name'          => _x( 'Videos', 'admin menu'),
        'name_admin_bar'     => _x( 'Videos', 'add new on admin bar'),
        'add_new'            => _x( 'Add New Videos', 'Videos'),
        'add_new_item'       => __( 'Add New Videos'),
        'new_item'           => __( 'New Videos'),
        'edit_item'          => __( 'Edit Videos'),
        'view_item'          => __( 'View Videos'),
        'all_items'          => __( 'All Videos'),
        'search_items'       => __( 'Search Videos'),
        'parent_item_colon'  => __( 'Parent Videos'),
        'not_found'          => __( 'No Videos found.'),
        'not_found_in_trash' => __( 'No Videos found in Trash.')
    );
    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Description.', 'your-plugin-textdomain' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'videos' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
    );
    register_post_type( 'videos', $args );
    /* IMPORTANT: Only use once if you have too, see important note at the top of the page for details.  */
    flush_rewrite_rules( false );
}

function videos_taxonomy() {  
    register_taxonomy(  
        'videos_category',  //The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces). 
        'videos',        //post type name
        array(  
            'hierarchical' => true,  
            'label' => 'Category',  //Display name
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'videos_category', // This controls the base slug that will display before each term
                'with_front' => false // Don't display the category base before 
            )
        )  
    );  
    /* IMPORTANT: Only use once if you have too, see important note at the top of the page for details.  */
    flush_rewrite_rules( false );
}  
add_action( 'init', 'videos_taxonomy');

/***
 * @params $option Array(posts_per_page, page, term_id)
 * **/
function sloan_video_query($options = array()){
    $posts_per_page = isset($options['posts_per_page']) ? $options['posts_per_page'] : 6; //default per page
    $paged= isset($options['page']) ? absint($options['page']) : 1; //page no
    $args = array(
        'post_type' => 'videos',
        'post_status' => 'publish',
        'posts_per_page' => $posts_per_page,
        'paged' => $paged
    );
    if(isset($options['term_id']) && !empty($options['term_id'])){
        $args['tax_query'] = array(
            array(
                'taxonomy' => 'videos_category',
                'field' => 'term_id',
                'terms' => absint($options['term_id']),
            )
        );
    }
    return new WP_Query($args);
}

// register shortcode bus loan
function bus_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/bus-loan-calculator.php';
}
add_shortcode('bus_loan_calculator', 'bus_loan_calculator_shortcode');

// register shortcode auto loan
function auto_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/auto-loan-calculator.php';
}
add_shortcode('auto_loan_calculator', 'auto_loan_calculator_shortcode');

// register shortcode equipment loan
function equipment_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/equipment-loan-calculator.php';
}
add_shortcode('equipment_loan_calculator', 'equipment_loan_calculator_shortcode');

// register shortcode truck loan
function truck_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/truck-loan-calculator.php';
}
add_shortcode('truck_loan_calculator', 'truck_loan_calculator_shortcode');

// register shortcode boat loan
function boat_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/boat-loan-calculator.php';
}
add_shortcode('boat_loan_calculator', 'boat_loan_calculator_shortcode');

// register shortcode personal loan
function personal_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/personal-loan-calculator.php';
}
add_shortcode('personal_loan_calculator', 'personal_loan_calculator_shortcode');

// register shortcode business loan
function business_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/business-loan-calculator.php';
}
add_shortcode('business_loan_calculator', 'business_loan_calculator_shortcode');

// register agriculture farming loan
function agriculture_farming_loan_calculator_shortcode() { 
    ob_start();
    include 'calculator/agriculture_farming-loan-calculator.php';
}
add_shortcode('agriculture_farming_loan_calculator', 'agriculture_farming_loan_calculator_shortcode');

 add_action('wp_head','add_googlecode_inhead');
function add_googlecode_inhead(){
?>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-80985941-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-80985941-1');
</script>
<?php
}


function my_acf_update_value( $value, $post_id, $field  )
{
    $time = date('d/m/Y');
	$value = $time ;
    return $value;
}
add_filter('acf/update_value/name=item_id', 'my_acf_update_value', 10, 3);



add_filter('acf/load_field/name=item_id', 'sampleFunction');

function sampleFunction( $field ){ $field['disabled']='1'; return $field; }


add_action('acf/save_post', 'update_name_provider_field');



add_filter('acf/load_field/name=item_id', function($field) {
	global $post;
	
	$field['default_value'] = $_GET['post'];
	return $field;
});


add_shortcode( 'block', 'rmcc_team_listing_shortcode1' );

function rmcc_team_listing_shortcode1( $atts ) {

	extract( shortcode_atts( array(
        'id' => ''
    ), $atts ) );

    ob_start();
	
	global $post;
	

		$query = new WP_Query( array(
        'post_type' => 'block',
        'posts_per_page' => 1,
		'page_id' => $id, 
		
    ) );
	
	


    if ( $query->have_posts() ) { 
            while ( $query->have_posts() ) : $query->the_post(); ?>
		
			<h2 class="text-center"><?php the_title();?></h2>			
<?php
			
			if( get_field('menu_items', $id) ) {
				echo '<ul class="new_blocks">';
				while( the_repeater_field('menu_items', $id) ) {
					
					echo '<li><a href="'.get_sub_field('menu_link_1').'"> 
					
							<span class="custom_menu_icon"><img src="'.get_sub_field('menu_icon_1').'" alt="'.get_sub_field('menu_title_1').'"/></span>
					
							<span class="menu__title__new">'.get_sub_field('menu_title_1').'</span></a></li>';
					
				}
				echo '</ul>';
			}
		 ?>	
	<?php 	endwhile;
	}
	
	}


function replace_jquery() {
        wp_deregister_script( 'jquery-core' );
        wp_enqueue_script( 'jquery-core', 'https://code.jquery.com/jquery-1.12.4.min.js',array(), '1.12.4' );
        wp_deregister_script( 'jquery-migrate' );
        wp_enqueue_script( 'jquery-migrate', 'https://code.jquery.com/jquery-migrate-1.4.1.min.js',array(), '1.12.4' );	   
}
add_action( 'wp_enqueue_scripts', 'replace_jquery' );
require_once(dev . '/dev-theme.php');