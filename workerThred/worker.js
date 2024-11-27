const { parentPort } = require('worker_threads');

console.log("Worker Thread")
// Simulate a heavy computation
let sum = 0;
for (let i = 0; i < 11e9; i++) {
    sum += i;
}

// Send the result back to the main thread
parentPort.postMessage(sum);