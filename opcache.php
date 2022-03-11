<?php
if(function_exists("opcache_get_status") && is_array(opcache_get_status())) {
        if (opcache_reset()) { echo "OPCache has been cleared."; }
        else { echo "OPCache could not be cleared."; }
}
else { echo "OPCache is not available"; }
