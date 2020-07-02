var express = require('express');
var app = express();

    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    ent = require('ent') 
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendfile('index.html');
});

app.get('/chat2', function (req, res) {
    res.sendfile(__dirname + '/Chat2.html');
  });

io.sockets.on('connection', function (socket, pseudo) {
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    });
});

server.listen(8080);