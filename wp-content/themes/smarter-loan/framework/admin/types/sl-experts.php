<?php



function slexperts() {

	register_post_type( 'experts',

		array(

			'labels' => array(

			'name' => __('Our Experts'),

			'singular_name' => __('Expert'),

			'add_new_item' => __('Add New Expert'),

            'edit_item' => __('Edit Expert'),

            'new_item' => __('Add New Expert'),

            'view_item' => __('View Expert'),

		),

		'public' => true,

		'supports' => array( 'title', 'page-attributes','editor','thumbnail'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'slexperts'); ?>