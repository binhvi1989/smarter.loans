<?php



function loan() {

	register_post_type( 'lenders',

		array(

			'labels' => array(

			'name' => __('Our Lenders'),

			'singular_name' => __('Lender'),

			'add_new_item' => __('Add New Lender'),

            'edit_item' => __('Edit Lender'),

            'new_item' => __('Add New Lender'),

            'view_item' => __('View Lender'),

		),

		'public' => true,

		'supports' => array( 'title','page-attributes','editor'),

		'capability_type' => 'post',

		)

	);

}

add_action('init', 'loan');



register_taxonomy('loan_category','lenders',array(

	'hierarchical' => true,

	'labels' => array(

		'name' => _x( 'Loan Categories', 'taxonomy general name' ),

		'singular_name' => _x( 'Loan Category', 'taxonomy singular name' ),

		'search_items' =>  __( 'Search Loan' ),

		'popular_items' => __( 'Popular Loan' ),

		'all_items' => __( 'All Loans' ),

		'parent_item' => null,

		'parent_item_colon' => null,

		'edit_item' => __( 'Edit Loan' ), 

		'update_item' => __( 'Update Loan' ),

		'add_new_item' => __( 'Add New Loan' ),

		'new_item_name' => __( 'New Loan Name' ),

		'separate_items_with_commas' => __( 'Separate Loan with commas' ),

		'add_or_remove_items' => __( 'Add or remove Loan' ),

		'choose_from_most_used' => __( 'Choose from the most used Loan' )

	),

	'show_ui' => true,

	'query_var' => true,

	'rewrite' => false,

));





?>