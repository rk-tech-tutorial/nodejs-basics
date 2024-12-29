const net = require('net');
const server = net.createServer();

const port = 8080;
const host = "192.168.31.246";

const clients = [];
server.on("connection", (socket) => {
    console.log("A New Client Connected!!");
    clients.push(socket);
    socket.on("data", (data) => {
        const message =`${socket.remoteAddress}: ${data.toString("utf-8")}`;
        
        // Check if the message is a typing notification
        if (message.includes("typing...")) {
            clients.forEach(client => {
                if (client !== socket) {
                    client.write(`${socket.remoteAddress} is typing...`);
                }
            });
        } else {
            clients.forEach(client => {
                client.write(message);
            });
        }
    });
});


server.on("end", () => {
    console.log("Client Disconnected!!");
});

server.listen(port, host, () => {
    console.log(`Server is running on port http://${host}:${port}`);
});

