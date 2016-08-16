/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */

 (function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    // map tells the System loader where to look for things
    var map = {
    	'app': 'src/tmp/app',
    	'test': 'src/tmp/test',
    	'moment': 'node_modules/moment/moment.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
    	'app': {
    		defaultExtension: 'js'
    	},
    	'test': {
    		defaultExtension: 'js'
    	},
    	'rxjs': {
    		defaultExtension: 'js'
    	},
    	"node_modules/ng2-bootstrap": {
    		defaultExtension: "js"
    	}
    };

    var paths = {
	 		"ng2-bootstrap/ng2-bootstrap":   "node_modules/ng2-bootstrap/ng2-bootstrap"
	 	}

    // List npm packages here
    var npmPackages = [
    '@angular',
    'rxjs',
    'lodash',
    'angular-ui-bootstrap'
    ];

    // Add package entries for packages that expose barrels using index.js
    var packageNames = [
        // App barrels
        'app/shared',
        'tmp/app',
        'tmp/app/shared',

        // 3rd party barrels
        '@angular/router',
        'lodash'
        ];

    // Add package entries for angular packages
    var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
    ];

    npmPackages.forEach(function (pkgName) {
    	map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function(pkgName) {
    	packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    ngPackageNames.forEach(function(pkgName) {
    	var main = global.ENV === 'testing' ? 'index.js' : 'bundles/' + pkgName + '.umd.js';

    	packages['@angular/'+pkgName] = { main: main, defaultExtension: 'js' };
    });

    var config = {
    	map: map,
    	packages: packages,
    	paths: paths
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

  })(this);
