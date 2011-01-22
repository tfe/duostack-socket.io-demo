var http = require('http'),
    fs = require('fs');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('demo.html', function (err, data) {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(8124, '127.0.0.1');
console.log('Server started');
