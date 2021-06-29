<?php



function company() {

	register_post_type( 'company',

		array(

			'labels' => array(

			'name' => __('Company'),

			'singular_name' => __('Company'),

			'add_new_item' => __('Add New Company'),

            'edit_item' => __('Edit Company'),

            'new_item' => __('Add New Company'),

            'view_item' => __('View Company'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes','editor'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'company');



register_taxonomy('company_category','company',array(

	'hierarchical' => true,

	'labels' => array(

		'name' => _x( 'Company Categories', 'taxonomy general name' ),

		'singular_name' => _x( 'Company Category', 'taxonomy singular name' ),

		'search_items' =>  __( 'Search Company' ),

		'popular_items' => __( 'Popular Company' ),

		'all_items' => __( 'All Companies' ),

		'parent_item' => null,

		'parent_item_colon' => null,

		'edit_item' => __( 'Edit Company' ), 

		'update_item' => __( 'Update Company' ),

		'add_new_item' => __( 'Add New Company' ),

		'new_item_name' => __( 'New Company Name' ),

		'separate_items_with_commas' => __( 'Separate Company with commas' ),

		'add_or_remove_items' => __( 'Add or remove Company' ),

		'choose_from_most_used' => __( 'Choose from the most used Company' )

	),

	'show_ui' => true,

	'query_var' => true,

	'rewrite' => array( 'slug' => 'companies', 'with_front' => false ),

));





?>