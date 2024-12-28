// const fs = require("fs/promises");

// (async () => {
//     console.time("read");
//     const readFile = await fs.open("text.txt", "r");
//     const writeFile = await fs.open("write.txt", "w");

//     const readStream = readFile.createReadStream();
//     const writeStream = writeFile.createWriteStream();

//     readStream.on("data", (chunk) => {
//         if(!writeStream.write(chunk)) {
//             readStream.pause();
//         }
//     });

//     writeStream.on("drain", () => {
//         readStream.resume();
//     });

//     readStream.on("end", () => {
//         console.timeEnd("read");
//     });

// })()


// implement above code with pipe method

const fs = require("fs/promises");

(async () => {
    console.time("read");
    const readFile = await fs.open("text.txt", "r");
    const writeFile = await fs.open("write.txt", "w");

    const readStream = readFile.createReadStream();
    const writeStream = writeFile.createWriteStream();

    readStream.pipe(writeStream);

    readStream.on("end", () => {
        console.timeEnd("read");
    });

})()