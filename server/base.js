// ```
// base.js
// (c) 2015 David Newman
// david.r.niciforovic@gmail.com
// base.js may be freely distributed under the MIT license
// ```

// *base.js*

// This file contains the most basic functionality for server Socket.io
// functionality.

// Load Express
var express = require('express');
// Load Socket.io
var socketio = require('socket.io');
// Load Node http module
var http = require('http');

let app = express();
// Create a Node server for our Express app
let server = http.createServer(app);
// Integrate Socket.io
let io = socketio.listen(server);


//export default (io) => {

  io.sockets.on('connect', (socket) => {

    console.log('a user connected');

    socket.on('disconnect', () => {

      console.log('a user disconnected');
    });
  });

//};
