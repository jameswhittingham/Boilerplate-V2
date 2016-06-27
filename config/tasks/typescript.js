var gulp = require('gulp');
var config = require('../config')();
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

/* Initialize TS Project */
var typingFiles = ['typings/index.d.ts', config.src + 'manual_typings/**/*.d.ts'];

/* Watch TS file files for changes */
gulp.task('watch-ts', function () {
	return gulp.watch(config.tsFiles, function (file) {
		console.log('Compiling ' + file.path + '...');
		return compileTs(file.path, true);
	});
});

gulp.task('tsc-app', function () {
	return compileTs(config.tsFiles);
});

function compileTs(files, watchMode) {
	watchMode = watchMode || false;

	var tsProject = ts.createProject('tsconfig.json');
	var allFiles = [].concat(files, typingFiles);
	var res = gulp.src(allFiles, {
		base: config.src,
		outDir: config.tmp
	})
	.pipe(sourcemaps.init())
	.pipe(ts(tsProject))
	.on('error', function () {
		if (watchMode) {
			return;
		}
		process.exit(1);
	});
	return res.js
	.pipe(sourcemaps.write('.', {
		includeContent: true
	}))
	.pipe(gulp.dest(config.tmp));
}