module.exports = function () {

	var	src = 'src/',
		app = src + 'app/',
		tmp = src + 'tmp/',
	  tmpApp = tmp + 'app/',
		assets = src + 'assets/',
		assetsPath = {
			styles: src + 'styles/',
			images: assets + 'images/',
			fonts: src + 'fonts/'
		},
		tsFiles = [
			app + '**/!(*.spec)+(.ts)'
		],
		index = src + 'index.html',
		build = {
			path: 'build/',
			app: 'build/app/',
			fonts: 'build/fonts/',
			assetPath: 'build/assets/',
			assets: {
        lib: {
          js: 'lib.js',
          css: 'lib.css'
        }
      }
		};

	var systemJs = {
    builder: {
      normalize: true,
      minify: true,
      mangle: true,
      runtime: false,
      globalDefs: { DEBUG: false, ENV: 'production' }
    }	
  };

  var historyApiFallback = require('connect-history-api-fallback');

  var favicons = {
		appName: "Boilerplate V2",
		background: "#fff",
		path: "src/assets/images/favicons/",
		url: "src/assets/images/favicons/",
		display: "standalone",
		orientation: "portrait",
		version: 1.0,
		logging: false,
		online: false,
		html: "favicons.html",
		pipeHTML: true,
		replace: true
	}

	var config = {
		app: app,
		src: src,
		tmp: tmp,
		tmpApp: tmpApp,
		assets: assets,
		assetsPath: assetsPath,
		tsFiles: tsFiles,
		build: build,
		systemJs: systemJs,
		index: index,
		favicons: favicons,
		browserSync: {
			dev: {
				port: 3000,
				server: {
					baseDir: './src/',
					middleware: [historyApiFallback()],
					routes: {
						"/node_modules": "node_modules",
						"/src": "src"
					}
				},
				files: [
					src + "index.html",
					src + "systemjs.conf.js",
					assetsPath.styles + "main.css",
					tmpApp + "**/*.js",
					app + "**/*.css",
					app + "**/*.html"
				]
			},
			prod: {
				port: 3001,
				server: {
					baseDir: './' + build.path,
					middleware: [historyApiFallback()]
				}
			}
		}
	};

	return config;
};
