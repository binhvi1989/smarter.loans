<?php

add_action( 'customize_register', 'SL_custom_customizer_settings' );
function SL_custom_customizer_settings( $wp_customize ) {

	$wp_customize->add_section( 'sl_redirect_to_lender' , array(
		'title'      => 'Redirect to Lender Options',
		'priority'   => 30,
	) );
	
	$wp_customize->add_setting( 'sl_redirect_ninja_form' , array(
		'default'     => '',
		'transport'   => 'refresh',
	) );
	
	$wp_customize->add_control( 'sl_redirect_ninja_form', array(
		'label' => __('Ninja Form ID'),
		'description' => __('Enter the id of the ninja form you will be using to subscribe users before redirecting to lender url.'),
		'section' => 'sl_redirect_to_lender',
		'settings' => 'sl_redirect_ninja_form',
		'type' => 'text',
	) );
}