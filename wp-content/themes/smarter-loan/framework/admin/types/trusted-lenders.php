<?php



function tlender() {

	register_post_type( 'trusted-lenders',

		array(

			'labels' => array(

			'name' => __('Trusted Lenders'),

			'singular_name' => __('Lender'),

			'add_new_item' => __('Add New Lender'),

            'edit_item' => __('Edit Lender'),

            'new_item' => __('Add New Lender'),

            'view_item' => __('View Lender'),

		),

		'public' => true,

		'supports' => array( 'title', 'page-attributes'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'tlender'); ?>