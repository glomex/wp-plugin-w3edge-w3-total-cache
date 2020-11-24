/**
 * File: setup-guide.js
 *
 * JavaScript for the Setup Guide page.
 *
 * @since X.X.X
 *
 * @global W3TC-setup-guide Localized array variable.
 */

 /**
  * Wizard actions.
  *
  * @since X.X.X
  *
  * @param object $slide The div of the slide displayed.
  */
function w3tc_wizard_actions( $slide ) {
	var configSuccess = false,
		pgcacheSettings = {
			enaled: null,
			engine: null
		},
		dbcacheSettings = {
			enaled: null,
			engine: null
		},
		objcacheSettings = {
			enaled: null,
			engine: null
		},
		browsercacheSettings = {
			enaled: null
		},
		lazyloadSettings = {
			enaled: null
		},
		slideId = $slide.prop( 'id' ),
		$container = jQuery( '#w3tc-wizard-container' ),
		nonce = $container.find( '[name="_wpnonce"]' ).val(),
		$nextButton = $container.find( '#w3tc-wizard-next' ),
		$prevButton = $container.find( '#w3tc-wizard-previous' ),
		$skipButton = $container.find( '#w3tc-wizard-skip' ),
		$dashboardButton = $container.find( '#w3tc-wizard-dashboard' );

	/**
	 * Configure Page Cache.
	 *
	 * @since X.X.X
	 *
	 * @param int    enable Enable Page Cache.
	 * @param string engine Page Cache storage engine.
	 * @return jqXHR
	 */
	function configPgcache( enable, engine = '' ) {
		var $jqXHR = jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_config_pgcache',
				enable: enable,
				engine: engine
			}
		});

		configSuccess = null;

		$jqXHR.done(function( response ) {
			configSuccess = response.data.success;
		});

		return $jqXHR;
	}

	/**
	 * Get Page Cache settings.
	 *
	 * @since X.X.X
	 *
	 * @return jqXHR
	 */
	function getPgcacheSettings() {
		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_get_pgcache_settings'
			}
		})
		.done(function( response ) {
			pgcacheSettings = response.data;
		});
	}

	/**
	 * Configure Database Cache.
	 *
	 * @since X.X.X
	 *
	 * @param int    enable Enable database cache.
	 * @param string engine Database cache storage engine.
	 * @return jqXHR
	 */
	function configDbcache( enable, engine = '' ) {
		var $jqXHR = jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_config_dbcache',
				enable: enable,
				engine: engine
			}
		});

		configSuccess = null;

		$jqXHR.done(function( response ) {
			configSuccess = response.data.success;
		});

		return $jqXHR;
	}

	/**
	 * Get Database Cache settings.
	 *
	 * @since X.X.X
	 *
	 * @return jqXHR
	 */
	function getDbcacheSettings() {
		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_get_dbcache_settings'
			}
		})
		.done(function( response ) {
			dbcacheSettings = response.data;
		});
	}

	/**
	 * Configure Object Cache.
	 *
	 * @since X.X.X
	 *
	 * @param int    enable Enable cache.
	 * @param string engine Cache storage engine.
	 * @return jqXHR
	 */
	function configObjcache( enable, engine = '' ) {
		var $jqXHR = jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_config_objcache',
				enable: enable,
				engine: engine
			}
		});

		configSuccess = null;

		$jqXHR.done(function( response ) {
			configSuccess = response.data.success;
		});

		return $jqXHR;
	}

	/**
	 * Get Object Cache settings.
	 *
	 * @since X.X.X
	 *
	 * @return jqXHR
	 */
	function getObjcacheSettings() {
		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_get_objcache_settings'
			}
		})
		.done(function( response ) {
			objcacheSettings = response.data;
		});
	}

	/**
	 * Configure Browser Cache.
	 *
	 * @since X.X.X
	 *
	 * @param int enable Enable browser cache.
	 * @return jqXHR
	 */
	function configBrowsercache( enable ) {
		configSuccess = null;

		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_config_browsercache',
				enable: enable
			}
		})
		.done(function( response ) {
			configSuccess = response.data.success;
		});
	}

	/**
	 * Get Browser Cache settings.
	 *
	 * @since X.X.X
	 *
	 * @return jqXHR
	 */
	function getBrowsercacheSettings() {
		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_get_browsercache_settings'
			}
		})
		.done(function( response ) {
			browsercacheSettings = response.data;
		});
	}

	/**
	 * Configure Lazy Load.
	 *
	 * @since X.X.X
	 *
	 * @param int enable Enable lazyload.
	 * @return jqXHR
	 */
	function configLazyload( enable ) {
		configSuccess = null;

		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_config_lazyload',
				enable: enable
			}
		})
		.done(function( response ) {
			configSuccess = response.data.success;
		});
	}

	/**
	 * Get Lazt Load settings.
	 *
	 * @since X.X.X
	 *
	 * @return jqXHR
	 */
	function getLazyloadSettings() {
		return jQuery.ajax({
			method: 'POST',
			url: ajaxurl,
			data: {
				_wpnonce: nonce,
				action: 'w3tc_get_lazyload_settings'
			}
		})
		.done(function( response ) {
			lazyloadSettings = response.data;
		});
	}

	/**
	 * Configuration failed.
	 *
	 * @since X.X.X
	 */
	function configFailed() {
		$slide.append(
			'<p class="notice notice-error"><strong>' +
			W3TC_SetupGuide.config_error_msg +
			'</strong></p>'
		);
		$nextButton.closest( 'span' ).hide();
		$prevButton.closest( 'span' ).hide();
		$skipButton.closest( 'span' ).show();
	}

	/**
	 * Test failed.
	 *
	 * @since X.X.X
	 */
	function testFailed() {
		$slide.append(
			'<p class="notice notice-error"><strong>' +
			W3TC_SetupGuide.test_error_msg +
			'</strong></p>'
		);
		$nextButton.closest( 'span' ).hide();
		$prevButton.closest( 'span' ).hide();
		$skipButton.closest( 'span' ).show();
	}

	switch ( slideId ) {
		case 'w3tc-wizard-slide-welcome':
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );

			break;

		case 'w3tc-wizard-slide-pc1':
			// Test Page Cache.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-wizard-step-pgcache' ).addClass( 'is-active' );

			if ( ! $container.find( '#test-results' ).data( 'pgcache-none' ) ) {
				$nextButton.prop( 'disabled', 'disabled' );
			}

			$slide.find( '#w3tc-test-pgcache' ).unbind().on('click', function () {
				var $spinnerParent = $slide.find( '.spinner' ).addClass( 'is-active' ).parent(),
					$this = jQuery( this );

				$this.prop( 'disabled', 'disabled' );
				$slide.find( '.notice-error' ).remove();
				$container.find( '#w3tc-pgcache-table tbody' ).empty();
				$prevButton.prop( 'disabled', 'disabled' );
				$nextButton.prop( 'disabled', 'disabled' );

				$spinnerParent.show();

				/**
				 * Add a test result table row.
				 *
				 * @since X.X.X
				 *
				 * @param object testResponse Data.
				 * @param string engine       Cache storage engine.
				 * @param string label        Text label for the engine.
				 */
				function addResultRow( testResponse, engine, label ) {
					var baseline,
						results = '<tr',
						percentChange,
						changeLabelType,
						changeLabel,
						isCurrentSetting = ( ! pgcacheSettings.enabled && 'none' === engine ) ||
							( pgcacheSettings.enabled && pgcacheSettings.engine === engine );

					if ( ! configSuccess ) {
						results += ' class="w3tc-option-disabled"';
					}

					results += '><td><input type="radio" id="pgcache-engine-' +
						engine +
						'" name="pgcache_engine" value="' +
						engine +
						'"';

					if ( ! configSuccess ) {
						results += ' disabled="disabled"';
					}

					if ( isCurrentSetting ) {
						results += ' checked';
					}

					if ( configSuccess && 'file_generic' === engine ) {
						label += '<br /><span class="w3tc-option-recommended">(Recommended)</span>';
					}

					results += '></td><td><label for="pgcache-engine-' +
						engine +
						'">' +
						label +
						'</label></td><td>';

					if ( testResponse.success ) {
						results += ( testResponse.data.ttfb * 1000 ).toFixed( 2 );
						if ( 'none' !== engine ) {
							baseline = $container.find( '#test-results' ).data( 'pgcache-none' ).ttfb;
							percentChange = ( ( testResponse.data.ttfb - baseline ) / baseline * 100 ).toFixed( 2 );
							changeLabelType = percentChange < 0 ? 'w3tc-label-success' : 'w3tc-label-danger';
							changeLabel = '<span class="w3tc-label ' + changeLabelType + '">' + percentChange + '%</span>';

							$container.find( '#test-results' ).data( 'pgcacheDiffPercent-' + engine, percentChange );
							results += ' ' + changeLabel;
						}
					} else {
						results += W3TC_SetupGuide.unavailable_text;
					}

					results += '</td></tr>';

					$container.find( '#w3tc-pgcache-table tbody' ).append( results );
					$container.find( '#w3tc-pgcache-table' ).show();
				}

				/**
				 * Test Page Cache.
				 *
				 * @since X.X.X
				 *
				 * @param string engine Cache storage engine.
				 * @param string label  Text label for the engine.
				 * @return jqXHR
				 */
				function testPgcache( engine, label ) {
					if ( configSuccess ) {
						return jQuery.ajax({
							method: 'POST',
							url: ajaxurl,
							data: {
								_wpnonce: nonce,
								action: 'w3tc_test_pgcache'
							}
						})
						.done(function( testResponse ) {
							$container.find( '#test-results' ).data( 'pgcache-' + engine, testResponse.data );
							addResultRow( testResponse, engine, label );
						});
					} else {
						addResultRow( [ success => false ], engine, label );
					}
				}

				// Run config and tests.
				getPgcacheSettings()
					.then( function() {
						return configPgcache( 0 );
					}, configFailed )
					.then( function() {
						return testPgcache( 'none', W3TC_SetupGuide.none );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'file' );
					} , testFailed )
					.then( function() {
						return testPgcache( 'file', W3TC_SetupGuide.disk_basic );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'file_generic' );
					} , testFailed )
					.then( function() {
						return testPgcache( 'file_generic', W3TC_SetupGuide.disk_enhanced );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'redis' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'redis', 'Redis' );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'memcached' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'memcached', 'Memcached' );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'apc' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'apc', 'APC' );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'eaccelerator' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'eaccelerator', 'eAccelerator' );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'xcache' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'xcache', 'XCache' );
					}, configFailed )
					.then( function() {
						return configPgcache( 1, 'wincache' );
					}, testFailed )
					.then( function() {
						return testPgcache( 'wincache', 'WinCache' );
					}, configFailed )
					.then(function() {
						$spinnerParent.hide();
						$this.removeProp( 'disabled' );
						$prevButton.removeProp( 'disabled' );
						$nextButton.removeProp( 'disabled' );
						return true;
					}, testFailed )
					// Restore the original database cache settings.
					.then( function() {
						return configPgcache( ( pgcacheSettings.enabled ? 1 : 0 ), pgcacheSettings.engine );
					},
					function() {
						$spinnerParent.hide();
						return configFailed();
					});
			});

			break;

		case 'w3tc-wizard-slide-dbc1':
			// Save the page cache engine setting from the previous slide.
			var pgcacheEngine = $container.find( 'input:checked[name="pgcache_engine"]' ).val();

			configPgcache( ( 'none' === pgcacheEngine ? 0 : 1 ), 'none' === pgcacheEngine ? '' : pgcacheEngine )
				.fail( function() {
					$slide.append(
						'<p class="notice notice-error"><strong>' +
						W3TC_SetupGuide.config_error_msg +
						'</strong></p>'
					);
				});

			if ( ! jQuery( '#w3tc-wizard-step-pgcache .dashicons-yes' ).length ) {
				jQuery( '#w3tc-wizard-step-pgcache' ).append( '<span class="dashicons dashicons-yes"></span>' );
			}

			// Present the Database Cache slide.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-wizard-step-dbcache' ).addClass( 'is-active' );

			if ( ! $container.find( '#test-results' ).data( 'dbc-none' ) ) {
				$nextButton.prop( 'disabled', 'disabled' );
			}

			$slide.find( '#w3tc-test-dbcache' ).unbind().on('click', function () {
				var $spinnerParent = $slide.find( '.spinner' ).addClass( 'is-active' ).parent(),
					$this = jQuery( this );

				$this.prop( 'disabled', 'disabled' );
				$slide.find( '.notice-error' ).remove();
				$container.find( '#w3tc-dbc-table tbody' ).empty();
				$container.find( '#w3tc-dbcache-recommended' ).hide();
				$prevButton.prop( 'disabled', 'disabled' );
				$nextButton.prop( 'disabled', 'disabled' );

				$spinnerParent.show();

				/**
				 * Add a test result table row.
				 *
				 * @since X.X.X
				 *
				 * @param object testResponse Data.
				 * @param string engine       Cache storage engine.
				 * @param string label        Text label for the engine.
				 */
				function addResultRow( testResponse, engine, label ) {
					var baseline,
						results = '<tr',
						percentChange,
						changeLabelType,
						changeLabel;

					if ( ! configSuccess ) {
						results += ' class="w3tc-option-disabled"';
					}

					results += '><td><input type="radio" id="dbcache-engine-' +
						engine +
						'" name="dbcache_engine" value="' +
						engine +
						'"';

					if ( ! configSuccess ) {
						results += ' disabled="disabled"';
					}

					if ( ( ! dbcacheSettings.enabled && 'none' === engine ) ||
						( dbcacheSettings.enabled && dbcacheSettings.engine === engine ) ) {
							results += ' checked';
					}

					results += '></td><td><label for="dbcache-engine-' +
						engine +
						'">' +
						label +
						'</label></td><td>';

					if ( testResponse.success ) {
						results += ( testResponse.data.elapsed * 1000 ).toFixed( 2 );

						if ( 'none' !== engine ) {
							baseline = $container.find( '#test-results' ).data( 'dbc-none' ).elapsed;
							percentChange = ( ( testResponse.data.elapsed - baseline ) / baseline * 100 ).toFixed( 2 );
							changeLabelType = percentChange < 0 ? 'w3tc-label-success' : 'w3tc-label-danger';
							changeLabel = '<span class="w3tc-label ' + changeLabelType + '">'+ percentChange + '%</span>';

							results += ' ' + changeLabel;
						}
					} else {
						results += W3TC_SetupGuide.unavailable_text;
					}

					results += '</td></tr>';

					$container.find( '#w3tc-dbc-table tbody' ).append( results );
					$container.find( '#w3tc-dbc-table' ).show();
				}

				/**
				 * Test database cache.
				 *
				 * @since X.X.X
				 *
				 * @param string engine Cache storage engine.
				 * @param string label  Text label for the engine.
				 * @return jqXHR
				 */
				function testDbcache( engine, label ) {
					if ( configSuccess ) {
						return jQuery.ajax({
							method: 'POST',
							url: ajaxurl,
							data: {
								_wpnonce: nonce,
								action: 'w3tc_test_dbcache'
							}
						})
						.done(function( testResponse ) {
							$container.find( '#test-results' ).data( 'dbc-' + engine, testResponse.data );
							addResultRow( testResponse, engine, label );
						});
					} else {
						addResultRow( [ success => false ], engine, label );
					}
				}

				// Run config and tests.
				getDbcacheSettings()
					.then( function() {
						return configDbcache( 0 );
					}, configFailed )
					.then( function() {
						return testDbcache( 'none', W3TC_SetupGuide.none );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'file' );
					} , testFailed )
					.then( function() {
						return testDbcache( 'file', W3TC_SetupGuide.disk );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'redis' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'redis', 'Redis' );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'memcached' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'memcached', 'Memcached' );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'apc' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'apc', 'APC' );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'eaccelerator' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'eaccelerator', 'eAccelerator' );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'xcache' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'xcache', 'XCache' );
					}, configFailed )
					.then( function() {
						return configDbcache( 1, 'wincache' );
					}, testFailed )
					.then( function() {
						return testDbcache( 'wincache', 'WinCache' );
					}, configFailed )
					.then(function() {
						$spinnerParent.hide();
						$this.removeProp( 'disabled' );
						$prevButton.removeProp( 'disabled' );
						$nextButton.removeProp( 'disabled' );
						return true;
					}, testFailed )
					.then( function() {
						$container.find( '#w3tc-dbcache-recommended' ).show();
						// Restore the original database cache settings.
						return configDbcache( ( dbcacheSettings.enabled ? 1 : 0 ), dbcacheSettings.engine );
					},
					function() {
						$spinnerParent.hide();
						return configFailed();
					});
			});

			break;

		case 'w3tc-wizard-slide-oc1':
			// Save the database cache engine setting from the previous slide.
			var dbcEngine = $container.find( 'input:checked[name="dbcache_engine"]' ).val();

			configDbcache( ( 'none' === dbcEngine ? 0 : 1 ), 'none' === dbcEngine ? '' : dbcEngine )
				.fail( function() {
					$slide.append(
						'<p class="notice notice-error"><strong>' +
						W3TC_SetupGuide.config_error_msg +
						'</strong></p>'
					);
				});

			if ( ! jQuery( '#w3tc-wizard-step-dbcache .dashicons-yes' ).length ) {
				jQuery( '#w3tc-wizard-step-dbcache' ).append( '<span class="dashicons dashicons-yes"></span>' );
			}

			// Present the Object Cache slide.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-wizard-step-objectcache' ).addClass( 'is-active' );

			if ( ! $container.find( '#test-results' ).data( 'oc-none' ) ) {
				$nextButton.prop( 'disabled', 'disabled' );
			}

			$slide.find( '#w3tc-test-objcache' ).unbind().on('click', function () {
				var $spinnerParent = $slide.find( '.spinner' ).addClass( 'is-active' ).parent(),
					$this = jQuery( this );

				$this.prop( 'disabled', 'disabled' );
				$slide.find( '.notice-error' ).remove();
				$container.find( '#w3tc-objcache-table tbody' ).empty();
				$prevButton.prop( 'disabled', 'disabled' );
				$nextButton.prop( 'disabled', 'disabled' );

				$spinnerParent.show();

				/**
				 * Add a test result table row.
				 *
				 * @since X.X.X
				 *
				 * @param object testResponse Data.
				 * @param string engine       Cache storage engine.
				 * @param string label        Text label for the engine.
				 */
				function addResultRow( testResponse, engine, label ) {
					var baseline,
						results = '<tr',
						percentChange,
						changeLabelType,
						changeLabel;

					if ( ! configSuccess ) {
						results += ' class="w3tc-option-disabled"';
					}

					results += '><td><input type="radio" id="objcache-engine-' +
						engine +
						'" name="objcache_engine" value="' +
						engine +
						'"';

					if ( ! configSuccess ) {
						results += ' disabled="disabled"';
					}

					if ( ( ! objcacheSettings.enabled && 'none' === engine ) ||
						( objcacheSettings.enabled && objcacheSettings.engine === engine ) ) {
							results += ' checked';
					}

					results += '></td><td><label for="objcache-engine-' +
						engine +
						'">' +
						label +
						'</label></td><td>';

					if ( testResponse.success ) {
						results += ( testResponse.data.elapsed * 1000 ).toFixed( 2 );
						if ( 'none' !== engine ) {
							baseline = $container.find( '#test-results' ).data( 'oc-none' ).elapsed;
							percentChange = ( ( testResponse.data.elapsed - baseline ) / baseline * 100 ).toFixed( 2 );
							changeLabelType = percentChange < 0 ? 'w3tc-label-success' : 'w3tc-label-danger';
							changeLabel = '<span class="w3tc-label ' + changeLabelType + '">' + percentChange + '%</span>';

							results += ' ' + changeLabel;
						}
					} else {
						results += W3TC_SetupGuide.unavailable_text;
					}

					results += '</td></tr>';

					$container.find( '#w3tc-objcache-table tbody' ).append( results );
					$container.find( '#w3tc-objcache-table' ).show();
				}

				/**
				 * Test object cache cache.
				 *
				 * @since X.X.X
				 *
				 * @param string engine Cache storage engine.
				 * @param string label  Text label for the engine.
				 * @return jqXHR
				 */
				function testObjcache( engine, label ) {
					if ( configSuccess ) {
						return jQuery.ajax({
							method: 'POST',
							url: ajaxurl,
							data: {
								_wpnonce: nonce,
								action: 'w3tc_test_objcache'
							}
						})
						.done(function( testResponse ) {
							$container.find( '#test-results' ).data( 'oc-' + engine, testResponse.data );
							addResultRow( testResponse, engine, label );
						});
					} else {
						addResultRow( [ success => false ], engine, label );
					}
				}

				// Run config and tests.
				getObjcacheSettings()
					.then( function() {
						return configObjcache( 0 );
					}, configFailed )
					.then( function() {
						return testObjcache( 'none', W3TC_SetupGuide.none );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'file' );
					} , testFailed )
					.then( function() {
						return testObjcache( 'file', W3TC_SetupGuide.disk );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'redis' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'redis', 'Redis' );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'memcached' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'memcached', 'Memcached' );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'apc' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'apc', 'APC' );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'eaccelerator' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'eaccelerator', 'eAccelerator' );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'xcache' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'xcache', 'XCache' );
					}, configFailed )
					.then( function() {
						return configObjcache( 1, 'wincache' );
					}, testFailed )
					.then( function() {
						return testObjcache( 'wincache', 'WinCache' );
					}, configFailed )
					.then(function() {
						$spinnerParent.hide();
						$this.removeProp( 'disabled' );
						$prevButton.removeProp( 'disabled' );
						$nextButton.removeProp( 'disabled' );
						return true;
					}, testFailed )
					// Restore the original object cache settings.
					.then( function() {
						return configObjcache( ( objcacheSettings.enabled ? 1 : 0 ), objcacheSettings.engine );
					},
					function() {
						$spinnerParent.hide();
						return configFailed();
					});
			});

			break;

		case 'w3tc-wizard-slide-bc1':
			// Save the object cache engine setting from the previous slide.
			var objcacheEngine = $container.find( 'input:checked[name="objcache_engine"]' ).val();

			configObjcache( ( 'none' === objcacheEngine ? 0 : 1 ), 'none' === objcacheEngine ? '' : objcacheEngine )
				.fail( function() {
					$slide.append(
						'<p class="notice notice-error"><strong>' +
						W3TC_SetupGuide.config_error_msg +
						'</strong></p>'
					);
				});

			if ( ! jQuery( '#w3tc-wizard-step-objectcache .dashicons-yes' ).length ) {
				jQuery( '#w3tc-wizard-step-objectcache' ).append( '<span class="dashicons dashicons-yes"></span>' );
			}

			// Present the Browser Cache slide.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-wizard-step-browsercache' ).addClass( 'is-active' );

			if ( ! $container.find( '#test-results' ).data( 'bc-off' ) ) {
				$nextButton.prop( 'disabled', 'disabled' );
			}

			$slide.find( '#w3tc-test-browsercache' ).unbind().on('click', function () {
				var bcEnabled,
					$spinnerParent = $slide.find( '.spinner' ).addClass( 'is-active' ).parent(),
					$this = jQuery( this );

				$this.prop( 'disabled', 'disabled' );
				$slide.find( '.notice-error' ).remove();
				$container.find( '#w3tc-browsercache-table tbody' ).empty();
				$prevButton.prop( 'disabled', 'disabled' );
				$nextButton.prop( 'disabled', 'disabled' );

				$spinnerParent.show();

				/**
				 * Add a Browser Cache test result table row.
				 *
				 * @since X.X.X
				 *
				 * @param object testResponse An object (success, data) containing a data array of objects
				 * 	                          (url, filename, header, headers).
				 */
				function addResultRow( testResponse ) {
					var label = bcEnabled ? W3TC_SetupGuide.enabled : W3TC_SetupGuide.notEnabled,
						results = '<tr';

					if ( ! configSuccess ) {
						results += ' class="w3tc-option-disabled"';
					}

					results += '><td><input type="radio" id="browsercache-enable-' +
						label +
						'" name="browsercache_enable" value="' +
						bcEnabled +
						'"';

					if ( ! configSuccess ) {
						results += ' disabled="disabled"';
					}

					if ( bcEnabled == browsercacheSettings.enabled ) {
						results += ' checked';
					}

					results += '> <label for="browsercache-enable-' +
						label +
						'">' +
						label +
						'</label></td>';

					if ( testResponse.success ) {
						results += '<td>';

						testResponse.data.forEach( function( item, index ) {
							results += '<a href="' +
							item.url +
							'">' +
							item.filename +
							'</a></td><td>' +
							item.header +
							'</td></tr>';

							// If not the last entry, then start the next row.
							if ( index !== ( testResponse.data.length - 1 ) ) {
								results += '<tr><td></td><td>';
							}
						} );
					} else {
						results = '<td colspan="2">' +
							W3TC_SetupGuide.test_error_msg +
							'</td></tr>';
					}

					$container.find( '#w3tc-browsercache-table > tbody' ).append( results );
					$container.find( '#w3tc-browsercache-table' ).show();
				}

				/**
				 * Test browser cache.
				 *
				 * @since X.X.X
				 *
				 * @return jqXHR
				 */
				function testBrowsercache() {
					if ( configSuccess ) {
						return jQuery.ajax({
							method: 'POST',
							url: ajaxurl,
							data: {
								_wpnonce: nonce,
								action: 'w3tc_test_browsercache'
							}
						})
						.done(function( testResponse ) {
							var enabled = bcEnabled ? 'on' : 'off';

							$container.find( '#test-results' ).data( 'bc-' + enabled, testResponse.data );
							addResultRow( testResponse );
						});
					} else {
						addResultRow( [ success => false ] );
					}
				}

				// Run config and tests.
				getBrowsercacheSettings()
					.then( function() {
						bcEnabled = 0;
						return configBrowsercache( bcEnabled );
					}, configFailed )
					.then( testBrowsercache, configFailed )
					.then( function() {
						bcEnabled = 1;
						return configBrowsercache( bcEnabled );
					} , testFailed )
					.then( testBrowsercache, configFailed )
					.then(function() {
						$spinnerParent.hide();
						$this.removeProp( 'disabled' );
						$prevButton.removeProp( 'disabled' );
						$nextButton.removeProp( 'disabled' );
						return true;
					}, testFailed )
					// Restore the original browser cache settings.
					.then( function() {
						return configBrowsercache( ( browsercacheSettings.enabled ? 1 : 0 ) );
					},
					function() {
						$spinnerParent.hide();
						return configFailed();
					});
			});

			break;

		case 'w3tc-wizard-slide-ll1':
			// Save the browser cache setting from the previous slide.
			var browsercacheEnabled = $container.find( 'input:checked[name="browsercache_enable"]' ).val();

			configBrowsercache( ( '1' === browsercacheEnabled ? 1 : 0 ) )
				.fail( function() {
					$slide.append(
						'<p class="notice notice-error"><strong>' +
						W3TC_SetupGuide.config_error_msg +
						'</strong></p>'
					);
				});

			if ( ! jQuery( '#w3tc-wizard-step-browsercache .dashicons-yes' ).length ) {
				jQuery( '#w3tc-wizard-step-browsercache' ).append( '<span class="dashicons dashicons-yes"></span>' );
			}

			// Present the Lazy Load slide.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-wizard-step-lazyload' ).addClass( 'is-active' );
			$dashboardButton.closest( 'span' ).hide();
			$nextButton.closest( 'span' ).show();
			$nextButton.prop( 'disabled', 'disabled' );

			// Update the lazy load enable chackbox from saved config.
			getLazyloadSettings()
				.then( function() {
					$container.find( 'input#lazyload-enable' ).prop( 'checked', lazyloadSettings.enabled );
					$nextButton.removeProp( 'disabled' );
				}, configFailed );

			break;

		case 'w3tc-wizard-slide-complete':
			var html,
				pgcacheEngine = $container.find( 'input:checked[name="pgcache_engine"]' ).val();
				pgcacheDiffPercent = $container.find( '#test-results' ).data( 'pgcacheDiffPercent-' + pgcacheEngine ),
				dbcacheEngine = $container.find( 'input:checked[name="dbcache_engine"]' ).val(),
				dbcacheEngineLabel = $container.find( 'input:checked[name="dbcache_engine"]' )
					.closest('td').next('td').text(),
				objcacheEngine = $container.find( 'input:checked[name="objcache_engine"]' ).val(),
				objcacheEngineLabel = $container.find( 'input:checked[name="objcache_engine"]' )
					.closest('td').next('td').text(),
				browsercacheEnabled = $container.find( 'input:checked[name="browsercache_enable"]' ).val(),
				lazyloadEnabled = $container.find( 'input:checked#lazyload-enable' ).val();

			// Save the lazyload setting from the previous slide.
			configLazyload( ( '1' === lazyloadEnabled ? 1 : 0 ) )
			.fail( function() {
				$slide.append(
					'<p class="notice notice-error"><strong>' +
					W3TC_SetupGuide.config_error_msg +
					'</strong></p>'
				);
			});

			if ( ! jQuery( '#w3tc-wizard-step-lazyload .dashicons-yes' ).length ) {
				jQuery( '#w3tc-wizard-step-lazyload' ).append( '<span class="dashicons dashicons-yes"></span>' );
			}

			// Present the Setup Complete slide.
			$container.find( '#w3tc-options-menu li' ).removeClass( 'is-active' );
			$container.find( '#w3tc-options-menu li' ).last().addClass( 'is-active' );

			html = ( pgcacheDiffPercent > 0 ? '+' : '' ) +
				pgcacheDiffPercent +
				'%';

			$container.find( '#w3tc-ttfb-diff' ).html( html );

			$container.find( '#w3tc-dbcache-engine' ).html( dbcacheEngineLabel );

			$container.find( '#w3tc-objcache-engine' ).html( objcacheEngineLabel );

			$container.find( '#w3tc-browsercache-setting' ).html(
				browsercacheEnabled ? W3TC_SetupGuide.enabled : W3TC_SetupGuide.none
			);

			$container.find( '#w3tc-lazyload-setting' ).html(
				lazyloadEnabled ? W3TC_SetupGuide.enabled : W3TC_SetupGuide.none
			);

			if ( ! jQuery( '#test-results' ).data( 'completed' ) ) {
				jQuery.ajax({
					method: 'POST',
					url: ajaxurl,
					data: {
						_wpnonce: nonce,
						action: "w3tc_wizard_skip"
					}
				})
				.done(function () {
					$container.find( '#test-results' ).data( 'completed', true );
				});
			}

			$nextButton.closest( 'span' ).hide();
			$dashboardButton.closest( 'span' ).show();

			$container.find('#w3tc-wizard-dashboard').unbind().on('click', function () {
				document.location = W3TC_SetupGuide.dashboardUrl;
			});

			break;

		default:
			break;
	}
};
