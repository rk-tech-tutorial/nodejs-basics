
/**
 * CPU uses is 100%, one of the core of my machine
 * Memory is about 35MB used
 * Time taken is about 10s approx
*/
const fs = require("fs/promises");
(async () => {
    console.time("write");
    // Open a file in write mode
    const file = await fs.open("text.txt", "w");

    // Write 1 million times
    for (let i = 0; i < 1000000; i++) {
        await file.write(`${i}\n`);
    }

    // Close the file
    await file.close();

    console.timeEnd("write");
})();

/**
 * Write 1 million lines in a file using streams
 * Memory used - 210MB
 * CPU used 
 * time taken - 200ms
 */

(async () => {
    console.time("write");
    const file = await fs.open("text.txt", "w");
    const writeStream = file.createWriteStream();
    for (let i = 0; i < 1000000; i++) {
        writeStream.write(`${i}\n`);
    }
    writeStream.end();
    console.timeEnd("write");
})()