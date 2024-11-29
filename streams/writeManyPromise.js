
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