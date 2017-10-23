server = require('net');
serverManager = require('./serverManager.js')
playerCreator = require('../Player/player.js')

server.createServer(function (socket) {
    console.log("client connected :" + socket);
    player = playerCreator.Player(socket.name, socket)
    serverManager.addClient(player);
    socket.on('data', function (data) {
        console.log(data);
      });
}).listen(5000);
