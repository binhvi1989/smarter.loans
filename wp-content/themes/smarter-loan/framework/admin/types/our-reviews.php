<?php



function oreview() {

	register_post_type( 'testimonials',

		array(

			'labels' => array(

			'name' => __('Testimonials'),

			'singular_name' => __('Testimonials'),

			'add_new_item' => __('Add New Testimonial'),

            'edit_item' => __('Edit Testimonial'),

            'new_item' => __('Add New Testimonial'),

            'view_item' => __('View Testimonial'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'oreview');?>