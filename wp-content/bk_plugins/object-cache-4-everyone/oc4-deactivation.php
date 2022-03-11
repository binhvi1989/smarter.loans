<?php
if (!function_exists('oc4everyone_deactivation')) {
    function oc4everyone_deactivation()
    {
        if (defined('OC4EVERYONE_PREDEFINED_SERVER') || file_exists(WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php')) {
            //Remove cache folder
            if (OC4EVERYONE_PREDEFINED_SERVER === '') {
                if (class_exists('ObjectCacheDisk')) {
                    $diskcached = new ObjectCacheDisk();
                    $diskcached->flush();
                }
            }
            //Delete object-cache.php
            unlink(WP_CONTENT_DIR . DIRECTORY_SEPARATOR . 'object-cache.php');
        }
    }
}
