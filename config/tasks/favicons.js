var gulp = require('gulp');
var favicons = require("gulp-favicons");
var gutil = require("gulp-util");

var config = require('../config')();

gulp.task("favicons", function () {
	return gulp.src("src/assets/images/favicon.png").pipe(favicons( config.favicons ))
	.on("error", gutil.log)
	.pipe(gulp.dest("src/assets/images/favicons/"));
});