<?php
/*
Plugin Name: Custom Plugin for Smarter.Loans
Plugin Slug: sl-custom
Plugin URI: https://smarter.loans
Description: Custom plugin to add functionality. Adds ability to subscribe users to mailchimp list before redirecting then to a lender website. Requires Mailchimp4Wordpress(https://kb.mc4wp.com/) plugin.
Version: 1.0.4
Author: smarter.loans
Author URI: https://smarter.loans
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

define('SL_CUSTOM_PATH',  plugin_dir_path( __FILE__ ));
define('SL_CUSTOM_URL',  plugin_dir_url( __FILE__ ));

include(SL_CUSTOM_PATH.'inc/customizer.php');

function SL_custom_plugin_enqueue_scripts() {
	$enqueue_lity = false;
	if($enqueue_lity){
		wp_enqueue_style('lity-css', 'https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.css', array(), '2.4.0');
		wp_enqueue_script( 'lity', 'https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.js', array('jquery'), '2.4.0', true);
	}
	wp_enqueue_style('sl-custom-css', SL_CUSTOM_URL.'css/custom.css', array(), '1.0.5');
	wp_enqueue_script( 'sl-custom', SL_CUSTOM_URL.'js/custom.js', array('jquery','backbone'), '1.0.3', true); //backbone for ninja integration
	
	wp_localize_script('sl-custom', 'SL_Custom', array(
		'ajaxurl' => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce("sl-ajax-nonce"),
	));
}
add_action( 'wp_enqueue_scripts', 'SL_custom_plugin_enqueue_scripts');

//////////
//Checks is current user session is already subscribed - added this ajax solution to make it work with cache
add_action( 'wp_ajax_sl_mailchimp_subscribed', 'smarterloans_sl_mailchimp_subscribed_cb');
add_action( 'wp_ajax_nopriv_sl_mailchimp_subscribed', 'smarterloans_sl_mailchimp_subscribed_cb');
function smarterloans_sl_mailchimp_subscribed_cb() {
	if ( wp_verify_nonce( $_REQUEST['security'], 'sl-ajax-nonce' ) ) { 
		$already_subscribed = ( isset( $_COOKIE['sl_mc_subscribed'] ) ) ? 'yes' : 'no';
		$result = array('subscribed' => $already_subscribed);
		wp_send_json_success($result);
		die();
	}
}

//redirect to custom page template with subscription form if the url has '?redirect_to_lender=123'
add_filter( 'page_template', 'sl_custom_redirect_page_template' );
function sl_custom_redirect_page_template( $page_template )
{
    if ( isset($_GET['redirect_to_lender']) && !empty($_GET['redirect_to_lender']) ) {
		//$lender_id = intval($_GET['redirect_to_lender']);
        $page_template = dirname( __FILE__ ) . '/template/lender-redirect.php';
		//hide header/footer
		add_action('wp_head', function(){
			echo '<style>
				header#masthead,footer{
					opacity: 0 !important;
					display: none !important;
				}
			</style>';
		}, 1);
    }
    return $page_template;
}



/*
 * Register the new merge tag class on the `ninja_forms_loaded` hook.
 */
add_action( 'ninja_forms_loaded', 'sl_custom_register_merge_tags' );
function sl_custom_register_merge_tags(){
  Ninja_Forms()->merge_tags[ 'sl_custom_merge_tags' ] = new SL_Lender_MergeTags();
}

class SL_Lender_MergeTags extends NF_Abstracts_MergeTags
{
  /*
   * The $id property should match the array key where the class is registered.
   */
  protected $id = 'sl_custom_merge_tags';
  
  public function __construct()
  {
    parent::__construct();
    
    /* Translatable display name for the group. */
    $this->title = __( 'Lender Related', 'ninja-forms' );
    
    /* Individual tag registration. */
    $this->merge_tags = array(
      
        'id' => array(
			'id' => 'id',
			'tag' => '{lender:id}', // The tag to be  used.
			'label' => __( 'Lender ID' ), // Translatable label for tag selection.
			'callback' => 'lender_id' // Class method for processing the tag. See below.
		),
        'name' => array(
			'id' => 'name',
			'tag' => '{lender:name}', // The tag to be  used.
			'label' => __( 'Lender Name' ), // Translatable label for tag selection.
			'callback' => 'lender_name' // Class method for processing the tag. See below.
		),
        'url' => array(
			'id' => 'url',
			'tag' => '{lender:url}', // The tag to be  used.
			'label' => __( 'Lender URL' ), // Translatable label for tag selection.
			'callback' => 'lender_url' // Class method for processing the tag. See below.
		),
    );
    
    /*
     * Use the `init` and `admin_init` hooks for any necessary data setup that relies on WordPress.
     * See: https://codex.wordpress.org/Plugin_API/Action_Reference
     */
    add_action( 'init', array( $this, 'init' ) );
    add_action( 'admin_init', array( $this, 'admin_init' ) );
  }
  
  public function init(){ /* This section intentionally left blank. */ }
  public function admin_init(){ /* This section intentionally left blank. */ }
  
  /**
   * The callback method for the merge tag.
   * @return string
   */
  public function lender_id()
  {
    $lender_id = isset($_GET['redirect_to_lender']) ? intval($_GET['redirect_to_lender']) : 0;
    return $lender_id;
  }
  
  public function lender_name()
  {
    $lender_id = isset($_GET['redirect_to_lender']) ? intval($_GET['redirect_to_lender']) : 0;
	$lender_name = $lender_id > 0 ? esc_attr(get_the_title($lender_id)) : '';
    return $lender_name;
  }
  
  public function lender_url()
  {
    $lender_id = isset($_GET['redirect_to_lender']) ? intval($_GET['redirect_to_lender']) : 0;
	$lender_url = $lender_id > 0 ? (trim(get_field('button_link', $lender_id))) : '';
    return $lender_url;
  }
}

add_action( 'ninja_forms_after_submission', 'sl_ninja_forms_after_submission', 99 );
function sl_ninja_forms_after_submission( $form_data ) {
	$form_id = intval($form_data[ 'form_id' ]);
	setcookie( 'sl_mc_subscribed', $form_id, time() + 3600 * 24 * 1, '/' ); 
}