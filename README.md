Duostack Socket.IO Demo
=======================

[http://github.com/tfe/duostack-socket.io-demo](http://github.com/tfe/duostack-socket.io-demo)

This is a super-simple demo app of basic [Socket.IO](http://socket.io/) usage on the [Duostack](http://duostack.com/) Node.js hosting platform.

It simply displays the time on the server, updated live every second. If you see the time appear and continuously update, then it's working properly.

The code is very short and self-explanatory, but essentially:

1. We create a server to serve the initial page and to which we can attach Socket.IO.
2. On every request we just send down the contents of `demo.html`, which is a little HTML document containing a little markup and the Socket.IO client-side script and configuration.
3. We also attach a Socket.IO listener to the server and set it up to send down the current time on new connections, and every one second thereafter.

This demo app is deployed on Duostack at [`http://socketiodemo.duostack.net/`](http://socketiodemo.duostack.net/), so you can see it running and try it out for yourself.

WebSocket-only Branch
---------------------

Check out the `websocket-only` branch for an example with both the client and the server set to use only the WebSocket transport. You wouldn't want to configure Socket.IO like this in a real app, but it's provided for demonstration purposes.

The WebSocket-only branch is deployed at [`http://websocketdemo.duostack.net:9980/`](http://websocketdemo.duostack.net:9980/).

----

© 2011 [Todd Eichel](http://toddeichel.com/)

Licensed under the [MIT license](http://www.opensource.org/licenses/mit-license.php)