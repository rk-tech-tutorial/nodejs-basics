const net = require('net');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log(data.toString());
    });

    socket.write('Hello, client!');
});

server.listen(8080, () => {
    console.log('Server is running on port 8080', server.address());
});