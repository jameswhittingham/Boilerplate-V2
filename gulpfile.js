console.log('********************');
console.log('** Boilerplate V2 **');
console.log('********************');

var gulp = require('gulp'),
  requireDir = require('require-dir'),
  tasks = requireDir('./config/tasks');

/* Default task */
gulp.task('default', ['serve']);