var gulp = require('gulp');
var config = require('../config')();
var bs = require("browser-sync");
var nodemon = require('gulp-nodemon');

function startBrowsersync (config)
{
  bsIns = bs.create();
  bsIns.init(config);
  bsIns.reload();
}

/* Default gulp task */
gulp.task('serve', ['sass', 'tsc-app', 'watch-ts', 'watch-sass'], function () {
  startBrowsersync(config.browserSync);
});


gulp.task('serve:watch', () => {
  nodemon({
    script : 'server.js',
    ext : 'js'
  });
});