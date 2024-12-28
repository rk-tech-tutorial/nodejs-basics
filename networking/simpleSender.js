const net = require('net');

const socket = net.createConnection({
    host: 'localhost',
    port: 8080
});

socket.write('Hello, server!');

socket.on('data', (data) => {
    console.log(data.toString());
});