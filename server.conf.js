//  This is the file where we will:
//  - Configure our application
//  - Connect to our database
//  - Create our Mongoose models
//  - Define routes for our RESTful API
//  - Define routes for our frontend Angular application
//  - Set the app to listen on a port so we can view it in our browser

// # Node Env Variables

// Load Node environment variable configuration file
var validateEnvVariables = require('./config/env.conf.js');

// Set up appropriate environment variables if necessary
//validateEnvVariables();

// # Modules

// Load Express
var express = require('express');
// Load Socket.io
//var socketio = require('socket.io');
// Load Node http module
//var http = require('http');
// Create our app with Express
let app = express();
// Create a Node server for our Express app
//let server = http.createServer(app);
// Integrate Socket.io
//let io = socketio.listen(server);

// Load Mongoose for MongoDB interactions
//var mongoose = require('mongoose');
// Log requests to the console (Express 4)
var morgan = require('morgan');
// Pull information from HTML POST (express 4)
var bodyParser = require('body-parser');
// Simulate DELETE and PUT (Express 4)
var methodOverride = require('method-override');
// PassportJS
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// # Configuration

// Load Socket.io server functionality
var base = require('./server/base');
//base(io);

/*io.sockets.on('connect', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
	  console.log('a user disconnected');
	});
});*/

// Set the port for this app
let port = process.env.PORT || 8080;

// Load Mongoose config file for connecting to MongoDB instance
var mongooseConf = require('./server/mongoose.conf.js');

// Pass Mongoose configuration Mongoose instance
//mongooseConf(mongoose);

// Import PassportJS configuration
//var passportConf = require('./server/passport.conf.js');

// Pass Passport configuration our PassportJS instance
//passportConf(passport);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
  // Log every request to the console
  app.use(morgan('dev'));

// Read cookies (needed for authentication)
app.use(cookieParser());

// ## Get all data/stuff of the body (POST) parameters

// Parse application/json
app.use(bodyParser.json());
// Parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/dist'));

// ## Passport JS

// Session secret
app.use(session({
  secret : process.env.SESSION_SECRET,
  resave : true,
  saveUninitialized : true
}));

app.use(passport.initialize());

// Persistent login sessions
app.use(passport.session());

// ## Routes

// Get an instance of the express Router
let router = express.Router();

// Load our application API routes
// Pass in our express and express router instances
var routes = require('./app/routes');

// Pass in instances of the express app, router, and passport
routes(app, router, passport);

// ### Ignition Phase
server.listen(port);

// Expose app
app();
