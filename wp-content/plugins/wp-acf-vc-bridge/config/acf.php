<?php

if ( ! defined( 'ABSPATH' ) ) exit;

if ( function_exists( 'acf_add_local_field_group' ) ) :

acf_add_local_field_group(array (
  'key' => 'group_58d2fd37e3335',
  'title' => __( 'Google Maps Settings', 'wp-acf-vc-bridge' ),
  'fields' => array (
    array (
      'key' => 'field_58d2fd65284ef',
      'label' => __( 'Google API Key', 'wp-acf-vc-bridge' ),
      'name' => 'wp_acf_vc_bridge_google_api_key',
      'type' => 'text',
      'instructions' => __( 'Google API Key is required for Google Maps. You\'ll need to obtain your API Key here https://console.developers.google.com/apis/', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'default_value' => '',
      'placeholder' => '',
      'prepend' => '',
      'append' => '',
      'maxlength' => '',
    ),
    array (
      'key' => 'field_58d2fdc4284f0',
      'label' => __( 'Enqueue Google Maps API Script', 'wp-acf-vc-bridge' ),
      'name' => 'wp_acf_vc_bridge_enqueue_google_maps',
      'type' => 'radio',
      'instructions' => __( 'Google Maps API Script is required to render any Google Map on your website. Sometimes this script is loaded by your theme or another plugin. To avoid duplication, which may lead to unexpected results, you have an option to prevent loading this script by WP ACF-VC Bridge plugin.', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array (
        'yes' => __( 'Yes, enqueue Google Maps API scripts', 'wp-acf-vc-bridge' ),
        'no' => __( 'No, I have them loaded elsewhere', 'wp-acf-vc-bridge' ),
        'auto' => __( 'Detect automatically if needs to be loaded', 'wp-acf-vc-bridge' ),
      ),
      'allow_null' => 0,
      'other_choice' => 0,
      'save_other_choice' => 0,
      'default_value' => 'yes',
      'layout' => 'vertical',
      'return_format' => 'value',
    ),    
    array (
      'key' => 'field_5b1b9b25742e5',
      'label' => __( 'Enqueue ACF Google Maps Script', 'wp-acf-vc-bridge' ),
      'name' => 'wp_acf_vc_bridge_enqueue_acf_google_maps',
      'type' => 'radio',
      'instructions' => __( 'By default, Google Map ACF field is not rendered on frontend. This option allows you to automatically create Google Map from ACF field or you can also disable this behavior, if you are going to render Google Map ACF field manually with your custom code.', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array (
        'yes' => __( 'Yes, enqueue scripts to render ACF Google Map fields automatically', 'wp-acf-vc-bridge' ),
        'no' => __( 'No, I have a custom code', 'wp-acf-vc-bridge' ),
      ),
      'allow_null' => 0,
      'other_choice' => 0,
      'save_other_choice' => 0,
      'default_value' => 'yes',
      'layout' => 'vertical',
      'return_format' => 'value',
    ),
  ),
  'location' => array (
    array (
      array (
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'wp-acf-vc-bridge-settings',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => __( 'WP ACF-VC Bridge Settings', 'wp-acf-vc-bridge' ),
));

acf_add_local_field_group(array (
  'key' => 'group_58d2fc0f9cea9',
  'title' => __( 'Shortcodes settings', 'wp-acf-vc-bridge' ),
  'fields' => array (
    array (
      'key' => 'field_58d2fc7860a5c',
      'label' => __( 'Force Shortcodes Processing', 'wp-acf-vc-bridge' ),
      'name' => 'wp_acf_vc_bridge_force_shortcodes_processing',
      'type' => 'checkbox',
      'instructions' => __( 'In case if shortcodes are not rendered on post pages or in widgets, you can fix it here.', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array (
        'post' => __( 'Force shortcodes processing on posts and pages', 'wp-acf-vc-bridge' ),
        'widget' => __( 'Force shortcodes processing in widgets', 'wp-acf-vc-bridge' ),
        'category_description' => __( 'Force shortcodes processing in category descriptions', 'wp-acf-vc-bridge' ),
      ),
      'default_value' => array (
      ),
      'layout' => 'vertical',
      'toggle' => 0,
      'return_format' => 'value',
    ),
  ),
  'location' => array (
    array (
      array (
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'wp-acf-vc-bridge-settings',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => __( 'WP ACF-VC Bridge Settings', 'wp-acf-vc-bridge' ),
));

// Need to do wait untill all taxonomies will be registerd
// Usually they do on init at priority 10
add_action( 'init', 'wpacfvcbriidge_taxonomy_term_options', 20 );
function wpacfvcbriidge_taxonomy_term_options() {
  $taxonomies = get_taxonomies( array(
    'public' => true,
    'publicly_queryable' => true,
    'rewrite' => true,
  ), 'objects' );

  $taxonomies = array_map( function( $taxonomy_object ) {
    return $taxonomy_object->label;
  }, $taxonomies );

  acf_add_local_field_group(array (
    'key' => 'group_5dc93406d0708',
    'title' => __( 'Taxonomy Terms', 'wp-acf-vc-bridge' ),
    'fields' => array (
      array (
        'key' => 'field_5dc93406d0756',
        'label' => __( 'Replace term description field with Visual Composer', 'wp-acf-vc-bridge' ),
        'name' => 'wp_acf_vc_bridge_replace_standard_term_descriptions',
        'type' => 'checkbox',
        'instructions' => __( 'This will display WPBakery Page Builder editor (Visual Composer ACF field) instead of default description field.', 'wp-acf-vc-bridge' ),
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array (
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => $taxonomies,
        'default_value' => array (
        ),
        'layout' => 'vertical',
        'toggle' => 0,
        'return_format' => 'value',
      ),
      array (
        'key' => 'field_5dc9b0f230a83',
        'label' => __( 'Process shortcodes automatically for descriptions replaced with Visual Composer', 'wp-acf-vc-bridge' ),
        'name' => 'wp_acf_vc_bridge_do_shortcode_in_vc_term_descriptions',
        'type' => 'checkbox',
        'instructions' => __( 'It is recommended to avoid automatic replacements if possible and call do_shortcode function in template on frontend.', 'wp-acf-vc-bridge' ),
        'required' => 0,
        'conditional_logic' => 0,
        'wrapper' => array (
          'width' => '',
          'class' => '',
          'id' => '',
        ),
        'choices' => array(
          'do_automatically' => __( 'Yes, process shortcodes automatically.', 'wp-acf-vc-bridge' ),
        ),
        'default_value' => array (
        ),
        'layout' => 'vertical',
        'toggle' => 0,
        'return_format' => 'value',
      ),
    ),
    'location' => array (
      array (
        array (
          'param' => 'options_page',
          'operator' => '==',
          'value' => 'wp-acf-vc-bridge-settings',
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => 1,
    'description' => __( 'WP ACF-VC Bridge Settings', 'wp-acf-vc-bridge' ),
  ));
}

acf_add_local_field_group(array (
  'key' => 'group_59c64924c90c0',
  'title' => __( 'WPML compatibility', 'wp-acf-vc-bridge' ),
  'fields' => array (
    array (
      'key' => 'field_59c64e927616f',
      'label' => __( 'Multilingual VC Snippet IDs', 'wp-acf-vc-bridge' ),
      'name' => 'wp_acf_vc_bridge_wpml_vc_snippet_ids',
      'type' => 'checkbox',
      'instructions' => __( 'Globally define how multilingual VC Snippets should be processed.', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array (
        'adjust_ids' => __( 'Automatically adjust VC Snippet IDs to match the current language', 'wp-acf-vc-bridge' ),
        'return_original' => __( 'Return VC Snippet in default language if translation does not exist', 'wp-acf-vc-bridge' ),
      ),
      'default_value' => array (
      ),
      'layout' => 'vertical',
      'toggle' => 0,
      'return_format' => 'value',
    ),
    array (
      'key' => 'field_5a086723585db',
      'label' => __( 'Multilingual ACF Field Picker IDs', 'wp-acf-vc-bridge' ),
      'name' => 'vc_acf_field_picker_wpml_post_ids',
      'type' => 'checkbox',
      'instructions' => __( 'Globally define how if IDs in ACF Field Picker should be adjusted automatically.', 'wp-acf-vc-bridge' ),
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'choices' => array (
        'adjust_ids' => __( 'Automatically adjust ACF Field Picker IDs to match the current language', 'wp-acf-vc-bridge' ),
        'return_original' => __( 'Return ID in default language if translation does not exist', 'wp-acf-vc-bridge' ),
      ),
      'default_value' => array (
      ),
      'layout' => 'vertical',
      'toggle' => 0,
      'return_format' => 'value',
    ),
  ),
  'location' => array (
    array (
      array (
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'wp-acf-vc-bridge-settings',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => __( 'WP ACF-VC Bridge Settings', 'wp-acf-vc-bridge' ),
));


acf_add_local_field_group(array (
  'key' => 'group_59f911641671b',
  'title' => 'Custom Options Pages',
  'fields' => array (
    array (
      'key' => 'field_59f9117cb6164',
      'label' => 'Options Pages',
      'name' => 'wpacfvcbridge_options_pages',
      'type' => 'repeater',
      'instructions' => '',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => '',
        'id' => '',
      ),
      'dsv_formatting' => array (
        'format' => 'display',
        'disable' => '',
      ),
      'collapsed' => 'field_59f911b9b6165',
      'min' => 0,
      'max' => 0,
      'layout' => 'row',
      'button_label' => 'Add Options Page',
      'sub_fields' => array (
        array (
          'key' => 'field_59f911b9b6165',
          'label' => 'Page Title',
          'name' => 'page_title',
          'type' => 'text',
          'instructions' => '',
          'required' => 1,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'dsv_formatting' => array (
            'format' => 'display',
            'disable' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
        ),
        array (
          'key' => 'field_59f911dcb6166',
          'label' => 'Menu Title',
          'name' => 'menu_title',
          'type' => 'text',
          'instructions' => 'Optional. Same as Page Title by default.',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'dsv_formatting' => array (
            'format' => 'display',
            'disable' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
        ),
        array (
          'key' => 'field_59f91207b6167',
          'label' => 'Menu Slug',
          'name' => 'menu_slug',
          'type' => 'text',
          'instructions' => 'Optional. Derives from page title by default.',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'dsv_formatting' => array (
            'format' => 'display',
            'disable' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
        ),
        array (
          'key' => 'field_59f91217b6168',
          'label' => 'Capability',
          'name' => 'capability',
          'type' => 'text',
          'instructions' => 'Optional. Uses edit_posts by default.',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'dsv_formatting' => array (
            'format' => 'display',
            'disable' => '',
          ),
          'default_value' => '',
          'placeholder' => '',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
        ),
        array (
          'key' => 'field_59f91231b6169',
          'label' => 'Subpages',
          'name' => 'subpages',
          'type' => 'repeater',
          'instructions' => '',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => '',
            'id' => '',
          ),
          'dsv_formatting' => array (
            'format' => 'display',
            'disable' => '',
          ),
          'row_template' => 0,
          'collapsed' => 'field_59f91269b616a',
          'min' => 0,
          'max' => 0,
          'layout' => 'table',
          'button_label' => 'Add Subpage',
          'sub_fields' => array (
            array (
              'key' => 'field_59f91269b616a',
              'label' => 'Page Title',
              'name' => 'page_title',
              'type' => 'text',
              'instructions' => '',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'dsv_formatting' => array (
                'format' => 'display',
                'disable' => '',
              ),
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
            array (
              'key' => 'field_59f91271b616b',
              'label' => 'Menu Title',
              'name' => 'menu_title',
              'type' => 'text',
              'instructions' => 'Optional. Same as Page Title by default.',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array (
                'width' => '',
                'class' => '',
                'id' => '',
              ),
              'dsv_formatting' => array (
                'format' => 'display',
                'disable' => '',
              ),
              'default_value' => '',
              'placeholder' => '',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
            ),
          ),
        ),
      ),
    ),
  ),
  'location' => array (
    array (
      array (
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'wp-acf-vc-bridge-settings',
      ),
    ),
  ),
  'menu_order' => 1,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
));


endif;