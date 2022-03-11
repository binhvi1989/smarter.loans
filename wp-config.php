<?php
define( 'WP_CACHE', true /* Modified by NitroPack */ ); // Added by WP Rocket

if (PHP_MAJOR_VERSION >= 7) {
    set_error_handler(function ($errno, $errstr) {
       return strpos($errstr, 'Declaration of') === 0;
    }, E_WARNING);
}
// // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
 //Added by WP-Cache Manager
define('DB_NAME', 'smarter_scan2');

/** MySQL database username */
define('DB_USER', 'smarter_scan');

/** MySQL database password */
define('DB_PASSWORD', 'Admin987!!1');

//define('DB_NAME', 'smarter_staging3');

/** MySQL database username */
//define('DB_USER', 'smarter_staging1');

/** MySQL database password */
//define('DB_PASSWORD', 'Admin987!123');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

define('WP_HOME','http://scan.smarter.loans');
define('WP_SITEURL','http://scan.smarter.loans');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Lp+v1LWb6LTjW1d)c,,*e;}->$0}K>hcs&+`/4}f3Y>^cZ}7On+7S2,rs{EXCS22');
define('SECURE_AUTH_KEY',  '@B{AAkk6v}w-p-bR@Ii~`S9):b+k&163-Xd|71$qkTu[zCM&~h}xW3a!YyK/DA[:');
define('LOGGED_IN_KEY',    't,>lh9>|~(-f:E2JZ6aq>rVjE?+@?slwC%ds4n#p(g5@@J|lF=sW+0XE,u.#69~t');
define('NONCE_KEY',        'T$_?Zu+&a6.G+TE.dUaBW-B_?`+b4a<Cd+IfU>v7~)~7#45a`]1L+@5b&w4/RDOL');
define('AUTH_SALT',        '~g_%47fNtFGH}NDHbUk!G3S#o!xO]|X<*jBQpc^ZoLbUxom{M%+&{=+A~X*~Q+CG');
define('SECURE_AUTH_SALT', 'zqx,JL,:3$9F@^|-<EUk@.0TUK^ZHMw0VkgatAXi7 t_x[vF(kdCCa;|h=h@ju+C');
define('LOGGED_IN_SALT',   'h;1vVc@JY_0NNAc#A]]3a0A#gSHH2).4>~n$1mj4 3|E:]8=_ l9FJn>`WEI*)L[');
define('NONCE_SALT',       '#^#YlPU-ft77H$VaPXaQqZc9tdt|#:6VYZYD;n&-0y-]t~~%jr49nAuRouczE7XQ');
/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'uxdod_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);
define('WP_MEMORY_LIMIT', '2048M');
define('WP_MAX_MEMORY_LIMIT', '2048M');
define( 'FS_METHOD', 'direct' );
define('AUTOSAVE_INTERVAL', 86400);
define('WP_CACHE_KEY_SALT', 'string');


//Disable File Edits
//define('DISALLOW_FILE_EDIT', false);

//define('WP_HOME','https://smarter.loans');
//define('WP_SITEURL','https://smarter.loans');

define('RELOCATE',true);

/* That's all, stop editing! Happy blogging. */

define('FORCE_SSL_ADMIN', true);

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

