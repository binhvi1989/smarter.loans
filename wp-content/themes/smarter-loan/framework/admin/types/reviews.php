<?php



function review() {

	register_post_type( 'reviews',

		array(

			'labels' => array(

			'name' => __('Customer Reviews'),

			'singular_name' => __('Review'),

			'add_new_item' => __('Add New Review'),

            'edit_item' => __('Edit Review'),

            'new_item' => __('Add New Review'),

            'view_item' => __('View Review'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'review');?>