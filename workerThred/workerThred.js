const { Worker } = require("worker_threads");

// Function to create a worker thread
function runWorkerTask() {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js'); // Worker script
        worker.on('message', resolve); // Receive result
        worker.on('error', reject); // Handle error
        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}

// Use the worker thread
runWorkerTask().then((result) => {
    console.log('Result from worker:', result);
}).catch((err) => {
    console.error('Worker error:', err);
});

runWorkerTask().then((result) => {
    console.log('Result from worker:', result);
}).catch((err) => {
    console.error('Worker error:', err);
});

runWorkerTask().then((result) => {
    console.log('Result from worker:', result);
}).catch((err) => {
    console.error('Worker error:', err);
});

console.log('Main thread is not blocked!');