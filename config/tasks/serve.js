var gulp = require('gulp');
var config = require('../config')();
var bs = require("browser-sync");

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