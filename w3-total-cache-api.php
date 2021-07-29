<?php

if ( !defined( 'ABSPATH' ) ) {
	die();
}

define( 'W3TC', true );
define( 'W3TC_VERSION', '2.1.5' );
define( 'W3TC_POWERED_BY', 'W3 Total Cache' );
define( 'W3TC_EMAIL', 'w3tc@w3-edge.com' );
define( 'W3TC_TEXT_DOMAIN', 'w3-total-cache' );
define( 'W3TC_LINK_URL', 'https://api.w3-edge.com/v1/redirects/product-index' );
define( 'W3TC_LINK_NAME', 'W3 EDGE, Optimization Products for WordPress' );
define( 'W3TC_FEED_URL', 'https://api.w3-edge.com/v1/redirects/product-rss' );
define( 'W3TC_NEWS_FEED_URL', 'https://api.w3-edge.com/v1/redirects/company-rss' );
define( 'W3TC_README_URL', 'https://api.w3-edge.com/v1/redirects/product-readme' );
define( 'W3TC_SUPPORT_US_PRODUCT_URL', 'https://api.w3-edge.com/v1/redirects/product-directory' );
define( 'W3TC_SUPPORT_US_RATE_URL', 'https://api.w3-edge.com/v1/redirects/support-ratings' );
define( 'W3TC_SUPPORT_US_TWEET', 'YES! I optimized the user experience of my website with the W3 Total Cache #WordPress #plugin by @w3edge! http://bit.ly/TeSBL3' );
define( 'W3TC_EDGE_TIMEOUT', 7 * 24 * 60 * 60 );
define( 'W3TC_SUPPORT_REQUEST_URL', 'https://api.w3-edge.com/v1/support-request' );
define( 'W3TC_SUPPORT_SERVICES_URL', 'https://api.w3-edge.com/v1/support-serviceinventory' );
define( 'W3TC_FAQ_URL', 'https://api.w3-edge.com/v1/redirects/faq' );
define( 'W3TC_TERMS_URL', 'https://api.w3-edge.com/v1/redirects/policies-terms' );
define( 'W3TC_TERMS_ACCEPT_URL', 'https://api.w3-edge.com/v1/redirects/policies-accept' );
define( 'W3TC_MAILLINGLIST_SIGNUP_URL', 'https://api.w3-edge.com/v1/signup-newsletter' );
define( 'W3TC_NEWRELIC_SIGNUP_URL', 'https://api.w3-edge.com/v1/redirects/newrelic/signup' );
define( 'W3TC_MAXCDN_SIGNUP_URL', 'https://api.w3-edge.com/v1/redirects/maxcdn/signup' );
define( 'W3TC_MAXCDN_AUTHORIZE_URL', 'https://api.w3-edge.com/v1/redirects/maxcdn/authorize' );
define( 'W3TC_STACKPATH_SIGNUP_URL', 'https://api.w3-edge.com/v1/redirects/stackpath/signup' );
define( 'W3TC_STACKPATH_AUTHORIZE_URL', 'https://api.w3-edge.com/v1/redirects/stackpath/authorize' );
define( 'W3TC_STACKPATH2_AUTHORIZE_URL', 'https://api.w3-edge.com/v1/redirects/stackpath2/authorize' );
define( 'W3TC_GOOGLE_DRIVE_AUTHORIZE_URL', 'https://api.w3-edge.com/v1/googledrive/authorize' );

// this is the URL our updater / license checker pings. This should be the URL of the site with EDD installed
if ( !defined( 'W3TC_LICENSE_API_URL' ) ) {
	define( 'W3TC_LICENSE_API_URL', 'https://www.w3-edge.com/' );
}
if ( !defined( 'W3TC_PURCHASE_URL' ) ) {
	define( 'W3TC_PURCHASE_URL', 'https://www.w3-edge.com/checkout/' );
}

// the name of your product. This should match the download name in EDD exactly
define( 'W3TC_PURCHASE_PRODUCT_NAME', 'W3 Total Cache Pro: Annual Subscription' );

define( 'W3TC_WIN', ( strtoupper( substr( PHP_OS, 0, 3 ) ) === 'WIN' ) );

if ( !defined( 'W3TC_DIR' ) )
	define( 'W3TC_DIR', realpath( dirname( __FILE__ ) ) );

define( 'W3TC_FILE', 'w3-total-cache/w3-total-cache.php' );
define( 'W3TC_INC_DIR', W3TC_DIR . '/inc' );
define( 'W3TC_INC_WIDGET_DIR', W3TC_INC_DIR. '/widget' );
define( 'W3TC_INC_OPTIONS_DIR', W3TC_INC_DIR . '/options' );
define( 'W3TC_INC_LIGHTBOX_DIR', W3TC_INC_DIR . '/lightbox' );
define( 'W3TC_INC_POPUP_DIR', W3TC_INC_DIR . '/popup' );
define( 'W3TC_LIB_DIR', W3TC_DIR . '/lib' );
define( 'W3TC_LIB_NETDNA_DIR', W3TC_LIB_DIR . '/NetDNA' );
define( 'W3TC_LIB_NEWRELIC_DIR', W3TC_LIB_DIR . '/NewRelic' );
define( 'W3TC_INSTALL_DIR', W3TC_DIR . '/wp-content' );
define( 'W3TC_INSTALL_MINIFY_DIR', W3TC_INSTALL_DIR . '/w3tc/min' );
define( 'W3TC_LANGUAGES_DIR', W3TC_DIR . '/languages' );

if ( !defined( 'WP_CONTENT_DIR' ) )
	define( 'WP_CONTENT_DIR', realpath( W3TC_DIR . '/../..' ) );

if ( !defined( 'W3TC_CACHE_DIR' ) )
	define( 'W3TC_CACHE_DIR', WP_CONTENT_DIR . '/cache' );
if ( !defined( 'W3TC_CONFIG_DIR' ) )
	define( 'W3TC_CONFIG_DIR', WP_CONTENT_DIR . '/w3tc-config' );
if ( !defined( 'W3TC_CACHE_MINIFY_DIR' ) )
	define( 'W3TC_CACHE_MINIFY_DIR', W3TC_CACHE_DIR  . '/minify' );
if ( !defined( 'W3TC_CACHE_PAGE_ENHANCED_DIR' ) )
	define( 'W3TC_CACHE_PAGE_ENHANCED_DIR', W3TC_CACHE_DIR  . '/page_enhanced' );
if ( !defined( 'W3TC_CACHE_TMP_DIR' ) )
	define( 'W3TC_CACHE_TMP_DIR', W3TC_CACHE_DIR . '/tmp' );
if ( !defined( 'W3TC_CACHE_BLOGMAP_FILENAME' ) )
	define( 'W3TC_CACHE_BLOGMAP_FILENAME', W3TC_CACHE_DIR . '/blogs.php' );
if ( !defined( 'W3TC_CACHE_FILE_EXPIRE_MAX' ) )
	define( 'W3TC_CACHE_FILE_EXPIRE_MAX', 2592000 );

define( 'W3TC_CDN_COMMAND_UPLOAD', 1 );
define( 'W3TC_CDN_COMMAND_DELETE', 2 );
define( 'W3TC_CDN_COMMAND_PURGE', 3 );
define( 'W3TC_CDN_TABLE_QUEUE', 'w3tc_cdn_queue' );
define( 'W3TC_CDN_TABLE_PATHMAP', 'w3tc_cdn_pathmap' );

define( 'W3TC_INSTALL_FILE_ADVANCED_CACHE', W3TC_INSTALL_DIR . '/advanced-cache.php' );
define( 'W3TC_INSTALL_FILE_DB', W3TC_INSTALL_DIR . '/db.php' );
define( 'W3TC_INSTALL_FILE_OBJECT_CACHE', W3TC_INSTALL_DIR . '/object-cache.php' );

define( 'W3TC_ADDIN_FILE_ADVANCED_CACHE', WP_CONTENT_DIR . '/advanced-cache.php' );
define( 'W3TC_ADDIN_FILE_DB', WP_CONTENT_DIR . '/db.php' );
define( 'W3TC_FILE_DB_CLUSTER_CONFIG', WP_CONTENT_DIR . '/db-cluster-config.php' );
define( 'W3TC_ADDIN_FILE_OBJECT_CACHE', WP_CONTENT_DIR . '/object-cache.php' );

define( 'W3TC_MARKER_BEGIN_WORDPRESS', '# BEGIN WordPress' );
define( 'W3TC_MARKER_BEGIN_PGCACHE_CORE', '# BEGIN W3TC Page Cache core' );
define( 'W3TC_MARKER_BEGIN_PGCACHE_CACHE', '# BEGIN W3TC Page Cache cache' );
define( 'W3TC_MARKER_BEGIN_PGCACHE_WPSC', '# BEGIN WPSuperCache' );
define( 'W3TC_MARKER_BEGIN_BROWSERCACHE_CACHE', '# BEGIN W3TC Browser Cache' );
define( 'W3TC_MARKER_BEGIN_BROWSERCACHE_NO404WP', '# BEGIN W3TC Skip 404 error handling by WordPress for static files' );
define( 'W3TC_MARKER_BEGIN_MINIFY_CORE', '# BEGIN W3TC Minify core' );
define( 'W3TC_MARKER_BEGIN_MINIFY_CACHE', '# BEGIN W3TC Minify cache' );
define( 'W3TC_MARKER_BEGIN_MINIFY_LEGACY', '# BEGIN W3TC Minify' );
define( 'W3TC_MARKER_BEGIN_CDN', '# BEGIN W3TC CDN' );
define( 'W3TC_MARKER_BEGIN_WEBP', '# BEGIN W3TC WEBP' );


define( 'W3TC_MARKER_END_WORDPRESS', '# END WordPress' );
define( 'W3TC_MARKER_END_PGCACHE_CORE', '# END W3TC Page Cache core' );
define( 'W3TC_MARKER_END_PGCACHE_CACHE', '# END W3TC Page Cache cache' );
define( 'W3TC_MARKER_END_PGCACHE_LEGACY', '# END W3TC Page Cache' );
define( 'W3TC_MARKER_END_PGCACHE_WPSC', '# END WPSuperCache' );
define( 'W3TC_MARKER_END_BROWSERCACHE_CACHE', '# END W3TC Browser Cache' );
define( 'W3TC_MARKER_END_BROWSERCACHE_NO404WP', '# END W3TC Skip 404 error handling by WordPress for static files' );
define( 'W3TC_MARKER_END_MINIFY_CORE', '# END W3TC Minify core' );
define( 'W3TC_MARKER_END_MINIFY_CACHE', '# END W3TC Minify cache' );
define( 'W3TC_MARKER_END_MINIFY_LEGACY', '# END W3TC Minify' );
define( 'W3TC_MARKER_END_CDN', '# END W3TC CDN' );
define( 'W3TC_MARKER_END_NEW_RELIC_CORE', '# END W3TC New Relic core' );
define( 'W3TC_MARKER_END_WEBP', '# END W3TC WEBP' );


if ( !defined( 'W3TC_EXTENSION_DIR' ) ) {
	define( 'W3TC_EXTENSION_DIR', ( defined( 'WP_PLUGIN_DIR' ) ? WP_PLUGIN_DIR : WP_CONTENT_DIR . '/plugins' ) );
}

if ( !defined( 'W3TC_WP_JSON_URI' ) ) {
	define( 'W3TC_WP_JSON_URI', '/wp-json/' );
}
if ( !defined( 'W3TC_FEED_REGEXP' ) ) {
	define( 'W3TC_FEED_REGEXP', '~/feed(/|$)~' );
}


@ini_set( 'pcre.backtrack_limit', 4194304 );
@ini_set( 'pcre.recursion_limit', 4194304 );

global $w3_late_init;
$w3_late_init = false;

/**
 * Class autoloader
 *
 * @param string  $class Classname
 */
function w3tc_class_autoload( $class ) {
	// some php pass classes with slash
	if ( substr( $class, 0, 1 ) == "\\" ) {
		$class = substr( $class, 1 );
	}

	// try core w3tc classes first
	if ( substr( $class, 0, 5 ) == 'W3TC\\' ) {
		$filename = W3TC_DIR . DIRECTORY_SEPARATOR . substr( $class, 5 ) . '.php';

		if ( file_exists( $filename ) ) {
			require $filename;
			return;
		} else {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				echo 'Attempt to create object of class ' .
					$class . ' has been made, but file ' .
					$filename . ' doesnt exists';
				debug_print_backtrace();
			}
		}
	}

	if ( substr( $class, 0, 13 ) == 'W3TCG_Google_' &&
		( !defined( 'W3TC_GOOGLE_LIBRARY' ) || W3TC_GOOGLE_LIBRARY ) ) {
		// Google library
		$classPath = explode( '_', substr( $class, 6 ) );
		if ( count( $classPath ) > 3 ) {
			// Maximum class file path depth in this project is 3.
			$classPath = array_slice( $classPath, 0, 3 );
		}

		$filePath = W3TC_LIB_DIR . DIRECTORY_SEPARATOR .
			implode( '/', $classPath ) . '.php';

		if ( file_exists( $filePath ) )
			require $filePath;
		return;
	}

	if ( substr( $class, 0, 6 ) == 'W3TCL\\' ) {
		$base = W3TC_LIB_DIR . DIRECTORY_SEPARATOR;
		$class = substr( $class, 6 );

		// psr loader
		$file = $base . strtr( $class, "\\_",
			DIRECTORY_SEPARATOR . DIRECTORY_SEPARATOR ) . '.php';
		if ( file_exists( $file ) )
			require_once $file;
	}
}

spl_autoload_register( 'w3tc_class_autoload' );

/**
 * W3 Total Cache plugins API
 */

/**
 * Returns config.
 *
 * !!! NOTICE !!!
 * 3rd party developers, please do not modify the plugin's configuration without
 * notifying the user beforehand. As an alternative, throw a notification to the
 * user like: "Configure W3 Total Cache for me" and allow the user to dismiss
 * the notification.
 * !!! NOTICE !!!
 */
function w3tc_config() {
	/*
	 * Some plugins make incorrect decisions based on configuration
	 * and force to disable modules working otherwise or
	 * adds notices on each wp-admin page without ability to remove it.
	 * By defining W3TC_CONFIG_HIDE you may still use w3tc configuration you like.
	 */
	if ( defined( 'W3TC_CONFIG_HIDE' ) && W3TC_CONFIG_HIDE )
		return new W3_Config();

	$config = \W3TC\Dispatcher::config();
	return $config;
}

/**
 * Purges/Flushes everything
 */
function w3tc_flush_all( $extras = null ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->flush_all( $extras );
}

/**
 * Purges/Flushes post page
 */
function w3tc_flush_post( $post_id, $extras = null ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->flush_post( $post_id, $extras );
}

/**
 * Purges/Flushes all posts
 */
function w3tc_flush_posts( $extras = null ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->flush_posts( $extras );
}

/**
 * Purges/Flushes url
 */
function w3tc_flush_url( $url, $extras = null ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->flush_url( $url, $extras );
}

/**
 * Purges/Flushes separate cache group
 */
function w3tc_flush_group( $group, $extras = null ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->flush_group( $group, $extras );
}



/**
 * deprecated
 * Shortcut for page cache flush
 *
 * @return boolean
 */
function w3tc_pgcache_flush() {
	return w3tc_flush_posts();
}

/**
 * deprecated
 * Shortcut for page post cache flush
 *
 * @param integer $post_id
 * @return boolean
 */
function w3tc_pgcache_flush_post( $post_id ) {
	return w3tc_flush_post( $post_id );
}

/**
 * deprecated
 * Shortcut for page post cache flush by url
 *
 * @param integer $url
 * @return boolean
 */
function w3tc_pgcache_flush_url( $url ) {
	return w3tc_flush_url( $url );
}

/**
 * deprecated
 * Shortcut for refreshing the media query string.
 */
function w3tc_browsercache_flush() {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	return $o->browsercache_flush();
}

/**
 * deprecated
 * Shortcut for database cache flush
 *
 */
function w3tc_dbcache_flush() {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->dbcache_flush();
}

/**
 * deprecated
 * Shortcut for minify cache flush
 *
 */
function w3tc_minify_flush() {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->minifycache_flush();

}

/**
 * deprecated
 * Shortcut for objectcache cache flush
 *
 */
function w3tc_objectcache_flush() {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	$o->objectcache_flush();
}

/**
 * deprecated
 * Shortcut for CDN purge files
 *
 * @param array   $files Array consisting of uri paths (i.e wp-content/uploads/image.pnp)
 * @return mixed
 */
function w3tc_cdn_purge_files( $files ) {
	$o = \W3TC\Dispatcher::component( 'CacheFlush' );
	return $o->cdn_purge_files( $files );
}

/**
 * deprecated
 * Prints script tag for scripts group
 *
 * @param string  $location
 * @retun void
 */
function w3tc_minify_script_group( $location ) {
	$o = \W3TC\Dispatcher::component( 'Minify_Plugin' );
	$o->printed_scripts[] = $location;

	$r = $o->get_script_group( $location );
	echo $r['body'];
}

/**
 * deprecated
 * Prints style tag for styles group
 *
 * @param string  $location
 * @retun void
 */
function w3tc_minify_style_group( $location ) {
	$o = \W3TC\Dispatcher::component( 'Minify_Plugin' );
	$o->printed_styles[] = $location;

	$r = $o->get_style_group( $location );
	echo $r['body'];
}

/**
 * deprecated
 * Prints script tag for custom scripts
 *
 * @param string|array $files
 * @param boolean $blocking
 * @return void
 */
function w3tc_minify_script_custom( $files, $blocking = true ) {
	$o = \W3TC\Dispatcher::component( 'Minify_Plugin' );
	echo $o->get_script_custom( $files, $blocking );
}

/**
 * deprecated
 * Prints style tag for custom styles
 *
 * @param string|array $files
 * @return void
 */
function w3tc_minify_style_custom( $files ) {
	$o = \W3TC\Dispatcher::component( 'Minify_Plugin' );
	$r = $o->get_style_custom( $files );
	echo $r['body'];
}

/**
 * deprecated
 * Use Util_Theme::get_themes() to get a list themenames to use with user agent groups
 *
 * @param unknown $group_name
 * @param string  $theme      the themename default is default theme. For childtheme it should be parentthemename/childthemename
 * @param string  $redirect
 * @param array   $agents     Remember to escape special characters like spaces, dots or dashes with a backslash. Regular expressions are also supported.
 * @param bool    $enabled
 */
function w3tc_save_user_agent_group( $group_name, $theme = 'default', $redirect = '', $agents = array(), $enabled = false ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_UserAgent' );
	$o->save_group( $group_name, $theme, $redirect, $agents, $enabled );
}

/**
 * deprecated
 *
 * @param unknown $group
 */
function w3tc_delete_user_agent_group( $group ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_UserAgent' );
	$o->delete_group( $group );

}

/**
 * deprecated
 *
 * @param unknown $group
 * @return mixed
 */
function w3tc_get_user_agent_group( $group ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_UserAgent' );
	return $o->get_group_values( $group );
}

/**
 * deprecated
 * Use Util_Theme::get_themes() to get a list themenames to use with referrer groups
 *
 * @param unknown $group_name
 * @param string  $theme      the themename default is default theme. For childtheme it should be parentthemename/childthemename
 * @param string  $redirect
 * @param array   $referrers  Remember to escape special characters like spaces, dots or dashes with a backslash. Regular expressions are also supported.
 * @param bool    $enabled
 */
function w3tc_save_referrer_group( $group_name, $theme = 'default', $redirect = '', $referrers = array(), $enabled = false ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_Referrer' );
	$o->save_group( $group_name, $theme, $redirect, $referrers, $enabled );
}

/**
 * deprecated
 *
 * @param unknown $group
 */
function w3tc_delete_referrer_group( $group ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_Referrer' );
	$o->delete_group( $group );
}

/**
 * deprecated
 *
 * @param unknown $group
 * @return mixed
 */
function w3tc_get_referrer_group( $group ) {
	$o = \W3TC\Dispatcher::component( 'Mobile_Referrer' );
	return $o->get_group_values( $group );
}


/**
 * deprecated
 * Flushes files from opcache.
 *
 * @param bool    $http if delete request should be made over http to current site. Default false.
 * @return mixed
 */
function w3tc_opcache_flush( $http = false ) {
	if ( !$http ) {
		$o = \W3TC\Dispatcher::component( 'CacheFlush' );
		return $o->opcache_flush();
	} else {
		$url = WP_PLUGIN_URL . '/' . dirname( W3TC_FILE ) . '/pub/opcache.php';
		$path = parse_url( $url, PHP_URL_PATH );
		$post = array(
			'method' => 'POST',
			'timeout' => 45,
			'redirection' => 5,
			'httpversion' => '1.0',
			'blocking' => true,
			'body' => array(
				'nonce' => wp_hash( $path ),
				'command' => 'flush' ),
		);
		$result = wp_remote_post( $url, $post );
		if ( is_wp_error( $result ) ) {
			return $result;
		} elseif ( $result['response']['code'] != '200' ) {
			return $result['response']['code'];
		}

		return true;
	}
}

/**
 * Deprecated. Retained for 3rd parties that used it. see w3tc_config()
 *
 * Some plugins make incorrect decisions based on configuration
 * and force to disable modules working otherwise or
 * adds notices on each wp-admin page without ability to remove it.
 * By defining W3TC_CONFIG_HIDE you may still use w3tc configuration you like.
 */
if ( defined( 'W3TC_CONFIG_HIDE' ) && W3TC_CONFIG_HIDE ) {
	class W3_Config {
		public function __construct( $master = false, $blog_id = null ) {
		}

		public function get_string( $key, $default = '', $trim = true ) {
			return '';
		}

		public function get_integer( $key, $default = 0 ) {
			return 0;
		}

		public function get_boolean( $key, $default = false ) {
			return false;
		}
	}
} else {
	class W3_Config extends \W3TC\Config {
		public function __construct( $master = false, $blog_id = null ) {
			if ( $master )
				$blog_id = 0;

			return parent::__construct($blog_id);
		}
	}
}

/**
 * Deprecated. Retained for 3rd parties that use it. see w3tc_config()
 */
class W3_ConfigWriter {
	public function __construct( $p1 = 0, $p2 = 0 ) {
	}
	public function set( $p1 = 0, $p2 = 0 ) {
	}
	public function save( $p1 = 0, $p2 = 0 ) {
	}
	public function refresh_w3tc() {
	}
}

/**
Deprecated. Retained for 3rd parties that use it. see w3tc_config()
*/
function w3_instance( $class ) {
	$legacy_class_name = null;

	if ( $class == 'W3_Config' ) {
		if ( defined( 'W3TC_CONFIG_HIDE' ) && W3TC_CONFIG_HIDE )
			return new W3_Config();

		   $legacy_class_name = 'Config';
	}
	elseif ( $class == 'W3_ObjectCacheBridge' )
		$legacy_class_name = 'ObjectCache_WpObjectCache';
	elseif ( $class == 'W3_PgCache' )
		$legacy_class_name = 'PgCache_ContentGrabber';
	elseif ( $class == 'W3_Redirect' )
		$legacy_class_name = 'Mobile_Redirect';
	else
		return null;

	return \W3TC\Dispatcher::component( $legacy_class_name );
}



function w3tc_e( $key, $default_value ) {
	echo w3tc_er( $key, $default_value);
}



function w3tc_er( $key, $default_value ) {
	$default_value = __( $default_value , 'w3-total-cache' );
	$v = get_site_option( 'w3tc_generic_widgetservices' );
	try {
		$v = json_decode( $v, true );
		if ( !isset( $v['content'] ) ) {
			return $default_value;
		}

		$v = $v['content'];
	} catch ( \Exception $e ) {
		return $default_value;
	}

	global $w3tc_locale;
	if ( null === $w3tc_locale ) {
		if ( function_exists( 'get_user_locale' ) ) {
			$w3tc_locale = get_user_locale();
		} else {
			$w3tc_locale = '';
		}
	}

	if ( isset( $v["ui_strings.$w3tc_locale"][$key] ) ) {
		return $v["ui_strings.$w3tc_locale"][$key];
	}
	if ( isset( $v["ui_strings"][$key] ) ) {
		return $v["ui_strings"][$key];
	}

	return $default_value;
}



$w3tc_actions = array();



/**
 * add_action alternative used by W3TC when WP core is not available
 */
function w3tc_add_action( $hook, $callback ) {
	global $w3tc_actions;
	if ( !isset( $w3tc_actions[$hook] ) ) {
		$w3tc_actions[$hook] = array();
	}

	$w3tc_actions[$hook][] = $callback;
}



/**
 * do_action alternative used by W3TC when WP core is not available
 */
function w3tc_do_action( $hook ) {
	global $w3tc_actions;
	if (!empty($w3tc_actions[$hook])) {
		foreach ( $w3tc_actions[$hook] as $callback ) {
			call_user_func_array( $callback, array() );
		}
	}
}



/**
 * do_action alternative used by W3TC when WP core is not available
 */
function w3tc_apply_filters( $hook, $value ) {
	$args = func_get_args();
	array_shift( $args );

	global $w3tc_actions;
	if (!empty($w3tc_actions[$hook])) {
		foreach ( $w3tc_actions[$hook] as $callback ) {
			$value = call_user_func_array( $callback, $args );
			$args[0] = $value;
		}
	}

	return $value;
}
