const net = require('net');
const readline = require('readline/promises');

const port = 8080;
const host = "192.168.31.246";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const clearLine = () => {
    return new Promise((resolve, reject) => {
        try {
            process.stdout.clearLine(0, () => {
                // process.stdout.cursorTo(0);
                resolve();
            })
        } catch (error) {
            reject(error);
        }
    });
}

const askQuestion = async (socket) => {
    const message = await rl.question("Enter your message > ");
    
    if (message.toLowerCase() === 'exit') {
        rl.close();
        socket.end();
        return;
    }
    
    socket.write(message);
    console.log(`You: ${message}`);
}

// New function to notify typing
const notifyTyping = (socket) => {
    socket.write("typing...");
}

// Add event listener for keypress to notify typing
rl.on('line', () => {
    notifyTyping(socket);
});

const socket = net.createConnection({
    host: host,
    port: port
}, async () => {
    console.log("Client Connected!!");
    
    await askQuestion(socket);
    
    socket.on("end", () => {
        console.log("Client Disconnected!!");
    });
    socket.on("data", async (data) => {
        await clearLine();
        console.log(`\n                        ${data.toString("utf-8")}`);
    
        await askQuestion(socket);
    
        if (rl.closed) {
            socket.end();
            rl.close();
            process.exit(0);
        }
    });
});


socket.on("error", (error) => {
    console.log(`Error: ${error.message}`);
});

rl.on('close', () => {
    console.log('\nChat ended. Goodbye!');
    process.exit(0);
});