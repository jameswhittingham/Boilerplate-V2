console.log('********************');
console.log('** Boilerplate V2 **');
console.log('********************');

var gulp = require('gulp'),
  requireDir = require('require-dir'),
  tasks = requireDir('./config/tasks');

/* Default task */
gulp.task('default', ['serve']);


gulp.task('serve-express', ['sass', 'tsc-app', 'watch-ts', 'watch-sass'], function(){


	var express = require('express');
	var path = require('path');
	var logger = require('morgan');
	var cookieParser = require('cookie-parser');
	var bodyParser = require('body-parser');
	var index = require('./routes/index');
	var todos = require('./routes/todos');
	var fallback = require('express-history-api-fallback');
	var app = express();

	// view engine setup
	app.set('views', path.join(__dirname, 'src'));
	app.set('view engine', 'ejs');
	app.engine('html', require('ejs').renderFile);
	app.use(logger('dev'));
	app.use(bodyParser.json());

	app.use(bodyParser.urlencoded({
		extended: false
	}));

	app.use(cookieParser());
	var root = path.join(__dirname, 'src');
	app.use(express.static(root));
	app.use('/', index);
	app.use('/api/v1/', todos);
	app.use(fallback('index.html', { root: root }));
	
	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
	});

	var server = app.listen(3004, function() {
		var host = 'localhost';
		var port = server.address().port;
		console.log('App listening at http://%s:%s', host, port);
	});

	module.exports = app;


})