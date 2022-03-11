<?php
/**
* Plugin Name: Object Cache 4 everyone
* Description: Memcached or disk backend support for the WP Object Cache. Memcached server running and PHP Memcache class needed for better performance. No configuration needed, runs automatically
* Plugin URI: https://wordpress.org/plugins/object-cache-4-everyone
* Author: fpuenteonline
* Version: 1.1
* Author URI: https://twitter.com/fpuenteonline
* License:     GPLv2 or later
* License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*
* This program is free software; you can redistribute it and/or modify it under the terms of the GNU
* General Public License version 2, as published by the Free Software Foundation. You may NOT assume
* that you can use any other version of the GPL.
*
*/

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

//First install
if (!function_exists('oc4everyone_plugins_loaded_activation')) {
    function oc4everyone_admin_notices_no_class_exists()
    {
        echo '<div class="notice notice-warning is-dismissible"><p><strong>Object Cache 4 everyone</strong> ' . esc_html__('needs PHP Memcache class installed for better performance. Running disk support instead.') . '</p></div>';
    }
    function oc4everyone_admin_notices_no_server_running()
    {
        echo '<div class="notice notice-warning is-dismissible"><p><strong>Object Cache 4 everyone</strong> ' . esc_html__('needs a Memcached server running for better performance. No server detected. Running disk support instead.') . '</p></div>';
    }
    function oc4everyone_admin_notices_object()
    {
        echo '<div class="notice notice-error is-dismissible"><p><strong>Object Cache 4 everyone</strong> ' . esc_html__('has detected another WP Object Cache instance running. Plugin is deactivated now.') . '<br/><code>' . WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php' . '</code></p></div>';
        if (isset($_GET['activate'])) {
            unset($_GET['activate']);
        }
    }
    function oc4everyone_admin_notices_ok()
    {
        echo '<div class="notice notice-success is-dismissible"><p><strong>Object Cache 4 everyone</strong> ' . esc_html__('running. Thanks for using.') . '</p></div>';
        if (isset($_GET['activate'])) {
            unset($_GET['activate']);
        }
    }
    function oc4everyone_admin_init_deactivate_itself()
    {
        deactivate_plugins(plugin_basename(__FILE__), true);
    }

    function oc4everyone_plugins_loaded_activation()
    {
        if (defined('OC4EVERYONE_PREDEFINED_SERVER')) {
            return; //Nothing needed, everything works
        }

        if (!current_user_can('activate_plugins') || !is_admin()) {
            return; //Only for admin users and dashboard access
        }

        //Check object-cache.php exists
        if (file_exists(WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php')) {
            add_action('admin_notices', 'oc4everyone_admin_notices_object', PHP_INT_MAX);
            add_action('admin_init', 'oc4everyone_admin_init_deactivate_itself', PHP_INT_MAX);
            return;
        }

        //Check Memcache class
        if (class_exists('Memcached')) {


            //Detecting first Memcached server running
            $memcached_servers =  array(
                '127.0.0.1:11211',
                '127.0.0.1:11212',
                '127.0.0.1:11213',
                '127.0.0.1:20000',
                '127.0.0.1:20001'
            );

            //Try SG Memcached server first
            // Get the account name.
            $account_name = get_current_user();

            // Generate the port file path.
            $port_file_path = "/home/{$account_name}/.SGCache/cache_status";
            if (file_exists($port_file_path) && is_readable($port_file_path)) {
                $string = file_get_contents($port_file_path);

                preg_match('#memcache\|\|([0-9]+)#', $string, $matches);

                // Return empty string if there is no match.
                if (!empty($matches[1])) {
                    //Override current list
                    $memcached_servers =  array(
                            '127.0.0.1:' . $matches[1]);
                }
            }

            $found_server = '';
            foreach ($memcached_servers as $server) {
                $temp_Memcached = new Memcached();
                list($node, $port) = explode(':', $server);
                $temp_Memcached->addServer($node, $port);

                //Checks server
                $temp_Memcached->getVersion();
                if ($temp_Memcached->getResultCode() === 0) {
                    $found_server =  $server;
                    break;
                }
            }
            if ($found_server !== '') {

        //Memcached + Memcached Server running

                //Copy object-cache.php + define('OC4EVERYONE_PREDEFINED_SERVER', $server); line
                $template = file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'object-cache-memcached-template.php');

                $template .= '//Detected memcached server - ' . date('d/m/Y G:i:s', current_time('timestamp', 0)) . PHP_EOL;
                $template .= "define('OC4EVERYONE_PREDEFINED_SERVER', '$found_server');". PHP_EOL;

                $template .= "if (! defined('WP_CACHE_KEY_SALT')) {" . PHP_EOL;
                $template .= "define('WP_CACHE_KEY_SALT', '" . filemtime(__FILE__) . "');" . PHP_EOL;
                $template .= "}" . PHP_EOL;

                file_put_contents(WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php', $template);

                add_action('admin_notices', 'oc4everyone_admin_notices_ok', PHP_INT_MAX);
                return;
            } else {
                //Memcached - Memcached Server not running
                add_action('admin_notices', 'oc4everyone_admin_notices_no_server_running', PHP_INT_MAX);
            }
        } else {
            add_action('admin_notices', 'oc4everyone_admin_notices_no_class_exists', PHP_INT_MAX);
        }

        //Copy object-cache.php + define('OC4EVERYONE_PREDEFINED_SERVER', ''); line
        $template = file_get_contents(__DIR__ . DIRECTORY_SEPARATOR . 'object-cache-disk-template.php');

        $template .= '//No detected memcached server - ' . date('d/m/Y G:i:s', current_time('timestamp', 0)) . PHP_EOL;
        $template .= "define('OC4EVERYONE_PREDEFINED_SERVER', '');". PHP_EOL;

        $template .= "if (! defined('WP_CACHE_KEY_SALT')) {" . PHP_EOL;
        $template .= "define('WP_CACHE_KEY_SALT', '" . filemtime(__FILE__) . "');" . PHP_EOL;
        $template .= "}" . PHP_EOL;

        file_put_contents(WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php', $template);

        add_action('admin_notices', 'oc4everyone_admin_notices_ok', PHP_INT_MAX);
    }
}
add_action('plugins_loaded', 'oc4everyone_plugins_loaded_activation');

//Delete object-cache.php
include_once('oc4-deactivation.php');
register_deactivation_hook(__FILE__, 'oc4everyone_deactivation');


//New plugin links
if (!function_exists('oc4everyone_plugin_action_links_deactivate')) {
    function oc4everyone_plugin_action_links_deactivate(array $actions)
    {
        $plugin = str_replace('\/', '%2F', plugin_basename(__FILE__));
        $url = sprintf(admin_url('plugins.php?action=deactivate&plugin=%s&plugin_status=all&paged=1&s'), $plugin);
        $url = wp_nonce_url($url, 'deactivate-plugin_' . $plugin);

        return array(
        'deactivate' => '<a href="' . $url . '" aria-label="Deactivate Object Cache 4 everyone">' . esc_html__('Deactivate & remove external object cache drop-in') . '</a>'
    );
    }
    if (defined('OC4EVERYONE_PREDEFINED_SERVER')) {
        add_filter('network_admin_plugin_action_links_' . plugin_basename(__FILE__), 'oc4everyone_plugin_action_links_deactivate');
        add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'oc4everyone_plugin_action_links_deactivate');
    }
}

if (!function_exists('oc4everyone_after_plugin_row_message_running')) {
    function oc4everyone_after_plugin_row_message_running()
    {
        if (! current_user_can('activate_plugins')) {
            return;
        }
        if (OC4EVERYONE_PREDEFINED_SERVER === '') {
            echo '<div class="alignleft actions"><p>Disk external object cache running</p></div>';
        } else {
            echo '<div class="alignleft actions"><p>Memcached Server running: <strong><code>' . OC4EVERYONE_PREDEFINED_SERVER . '</code></strong></p></div>';
        }
    }
}
if (defined('OC4EVERYONE_PREDEFINED_SERVER')) {
    //Plugin
    add_action('after_plugin_row_' . plugin_basename(__FILE__), 'oc4everyone_after_plugin_row_message_running', PHP_INT_MIN);
}
