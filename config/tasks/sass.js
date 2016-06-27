var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();

/* Compile SASS files into single main.css file */
gulp.task('sass', function () {
  return gulp.src(config.assetsPath.styles + 'main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.assetsPath.styles));
});

/* Watch SASS files for changes */
gulp.task('watch-sass', function () {
  gulp.watch(config.assetsPath.styles + '**/*.scss', ['sass']);
});
