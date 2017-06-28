/**
 * Created by Owner on 2017/4/21.
 */
var WebSocketServer = require('ws').Server;
wss = new WebSocketServer({port:8080});
wss.on('connection', function(ws){
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
})