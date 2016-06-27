var gulp = require('gulp');
var config = require('../config')();
var del = require('del');

/* Remove all unneeded files */
gulp.task('clean', ['clean-build', 'clean-ts', 'clean-sass']);

/* Remove build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Remove compiled sass files (.css files) */
gulp.task('clean-sass', function () {
    return del([config.assetsPath.styles + '**/*.css']);
});

/* Remove compiled js and .map files */
gulp.task('clean-ts', function () {
    return del([config.tmp]);
});