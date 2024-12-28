
/**
 * CPU uses is 4%, one of the core of my machine
 * Memory is about 35MB used
 * Time taken is about 0.138 approx
 * But this will wirte my data in random manner
 * It is not in sequence
*/
const fs = require("fs");
(async () => {
    console.time("write");
    // Open a file in write mode
    const file = fs.open("text.txt", "w", (err, fd) => {
        for (let i = 0; i < 1000000; i++) {
            fs.writeSync(fd, `${i}\n`, (err) => {
                if (err) {
                    console.error(err);
                }
            });   
        }
    });
    console.timeEnd("write");
})();