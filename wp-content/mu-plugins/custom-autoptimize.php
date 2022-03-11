<?php
/*
 * Plugin Name: Custom Autoptimize
 * Version: 1.0.0
 * Description: Customize the `Autoptimize` plugin.
 * Author: John Doe
 */

/*
 * Adjust cache size to 2GB.
 */
add_filter( 'autoptimize_filter_cachecheck_maxsize', 'custom_autoptimize_adjust_cachesize' );
function custom_autoptimize_adjust_cachesize()
{
    return 2048*2048*2048*2048*2048*2048*2048;
}