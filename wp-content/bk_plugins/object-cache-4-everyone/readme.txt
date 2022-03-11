=== Object Cache 4 everyone ===
Contributors: fpuenteonline
Tags: Memcached, cache, object cache, WPO
Requires at least: 5.0
Tested up to: 5.4.1
Stable tag: 1.1
Requires PHP: 7.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Memcached or disk backend support for the WP Object Cache. Memcached server running and PHP Memcached class needed for better performance. No configuration needed, runs automatically

== Description ==

Improve your server performance using Memcached for object caching or improve your server performance using disk support for object caching.

Less resources needed and better pagespeed.

Less database queries needed.

Detects automatically any Memcached server running and adds an object-cache.php file to your WordPress site.

Default memcached servers tested:
- 127.0.0.1:11211
- 127.0.0.1:11212
- 127.0.0.1:11213
- 127.0.0.1:20000
- 127.0.0.1:20001
- Any SiteGround Memcached setup

This plugin includes a modified template from this project:
https://github.com/humanmade/wordpress-pecl-memcached-object-cache
A WordPress object cache that uses the memcached (not memcache) PECL extension.
Thanks to Zack Tollman & 10up

== Changelog ==

= 1.1 - 2020-05-20 =
Improvements, more default servers added.
Added SiteGround Memcached server automatically.

= 1.0 - 2020-05-16 =
Initial release.

== Frequently Asked Questions ==
