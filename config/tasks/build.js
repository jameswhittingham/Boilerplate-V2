var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config')();
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');

require('@ngstarter/systemjs-extension')(config);

/* Main build task */
gulp.task('build', function (done) {
	runSequence('build-systemjs', 'build-assets', done);
});

/* Build production files into build folder */
gulp.task('build-assets', function (done) {
	runSequence('clean-build', ['sass'], function () {

		// Copy HTML
		gulp.src(config.src + '**/*.html', {
			base: config.src
		})
		.pipe(gulp.dest(config.build.path));

		// Copy and minify css
		gulp.src(config.src + '**/*.css', {
			base: config.src
		})
		//.pipe(cssnano())
		.pipe(gulp.dest(config.build.path));

		// Copy assets
		gulp.src(config.assets + '**/*.*', {
			base: config.assets
		})
		.pipe(gulp.dest(config.build.assetPath));

		// Copy fonts
		gulp.src(config.assetsPath.fonts + '**/*.*', {
			base: config.assetsPath.fonts
		})
		.pipe(gulp.dest(config.build.fonts));

		/* Concat JS and CSS - reference index.html */
		gulp.src(config.index)
			.pipe(useref())
			.pipe(gulpif('assets/lib.js', uglify()))
			.pipe(gulpif('*.css', cssnano()))
			.pipe(gulp.dest(config.build.path))
			.on('finish', done);

	});
});