<?php



function slider() {

	register_post_type( 'slides',

		array(

			'labels' => array(

			'name' => __('Smarter Slides'),

			'singular_name' => __('Slide'),

			'add_new_item' => __('Add New Slide'),

            'edit_item' => __('Edit Slide'),

            'new_item' => __('Add New Slide'),

            'view_item' => __('View Slide'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes','thumbnail'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'slider');?>