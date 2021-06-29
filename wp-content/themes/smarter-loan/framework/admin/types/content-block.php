<?php



function content() {

	register_post_type( 'block',

		array(

			'labels' => array(

			'name' => __('Custom Menus'),

			'singular_name' => __('Menu'),

			'add_new_item' => __('Add New Menu'),

            'edit_item' => __('Edit Menu'),

            'new_item' => __('Add New Menu'),

            'view_item' => __('View Menu'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'content');?>