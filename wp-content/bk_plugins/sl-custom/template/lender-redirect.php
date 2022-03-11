<?php 
/*Template Name: Lender Redirect Page*/

get_header(); 

$lender_id = intval($_GET['redirect_to_lender']);
if(empty($lender_id)){
	die(__('Invalid Request! Lender ID missing or is invalid.'));
}
$ninja_form_id = get_theme_mod( 'sl_redirect_ninja_form', 0); // the ninja form ID...set via Customizer
$ninja_form_id = intval($ninja_form_id);
$logo = get_field('logo', $lender_id) ? get_field('logo', $lender_id) : '';
$instruction = is_user_logged_in() ? __('Please enter the ID of the ninja form you want to display here via Appearance > Customize > Redirect to Lender Options') : 'Form Missing!';
?>

<section id="findloan" >
	<div class="apply-now-popup redirect-page" id="sl-apply-now">
		<div class="apply-now-popup-body has_form is_subscribed">
			<h1 class="apply-now-popup-title sl-hide-after-submit"><span class="glyphicon glyphicon-ok" style="margin-right: 0.25em;font-size: 0.85em;color: #45ea45;"> </span><?php _e('Success!'); ?></h1>
			<p class="sl-hide-after-submit"><?php _e('We\'ve connected you to'); echo ' '.get_the_title($lender_id).'.<br/>'; _e('To continue with your application, please enter your name and email.'); ?></p>
			<form class="sl_subscribe_and_redirect_form">
				<input type="hidden"  id="sl_form_lender_name" value="<?php echo esc_attr(get_the_title($lender_id)); ?>" />
				<input type="hidden"  id="sl_form_lender_url" value="<?php echo esc_url(get_field('button_link', $lender_id)); ?>" />
			</form>
			<?php echo $ninja_form_id > 0 ? do_shortcode('[ninja_forms id='.$ninja_form_id.']') : $instruction;?>
		</div>
		<div class="apply-now-popup-body has_splash is_subscribed">
			<h2 class="apply-now-popup-title"><?php _e('Connecting you to'); ?> <span class="js-lender_name1"><?php echo get_the_title($lender_id); ?></span>!</h2>
			<div class="sl_redirect_splash">
				<div><img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="Smarter.Loan Logo" class="img-responsive"></div>
				<div class="sl-loading-dots">
					<span class="dot one"></span>
					<span class="dot two"></span>
					<span class="dot three"></span>
					<span class="dot four"></span>
				</div>
				<div><img src="<?php echo esc_url($logo); ?>" alt="<?php echo esc_attr(get_the_title($lender_id)); ?> Logo" class="img-responsive js-lender_logo1"></div>
			</div>
		</div>
	</div>
</section>
<?php get_footer();