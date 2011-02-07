var http = require('http'),     // needed to create the server
    fs = require('fs'),         // needed to read the template html file that gets returned upon requests
    io = require('socket.io');  // socket.io for demonstration

// simple http server that just returns the contents of demo.html on every connection
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('demo.html', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8124, '127.0.0.1');
console.log('Server started');


// socket.io stuff
/////////////////////////////////////////////////////////////////////////////

// set up socket.io on our existing server object.
// this will listen for requests under the /socket.io path and handle them.
var socket = io.listen(server);

// fires on every new client connection
socket.on('connection', function (client) {
  // the following sets up an interval to send the current time to the client every 1000ms
  setInterval(function () {
    client.send(new Date());
  }, 1000)
});
