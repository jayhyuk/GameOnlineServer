
var net = require('net');

var client = new net.Socket();
client.connect(5000, '127.0.0.1', function() {
	client.write('Initialize');
});
