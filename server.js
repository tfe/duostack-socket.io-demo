var http = require('http'),
    fs = require('fs'),
    io = require('socket.io');

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

// set some config options for Duostack: no flash policy server, no websocket or flashsocket transports
var socket = io.listen(server, {
  flashPolicyServer: false,
  transports: ['htmlfile', 'xhr-multipart', 'xhr-polling', 'jsonp-polling']
});

// fires on every new client connection
socket.on('connection', function (client) {
  // the following sets up an interval to send the current time to the client every 1000ms
  setInterval(function () {
    client.send(new Date());
  }, 1000)
});
