const { Transform } = require("node:stream");
const fs = require("node:fs/promises");

class Encryption extends Transform {
    _transform(chunk, encoding, callback) {
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] >= 65 && chunk[i] <= 90) {
                chunk[i] = 90 - (chunk[i] - 65);
            } else if (chunk[i] >= 97 && chunk[i] <= 122) {
                chunk[i] = 122 - (chunk[i] - 97);
            }
        }

        this.push(chunk);
    }
}


(async () => {
    console.time("read");
    const readFile = await fs.open("text.txt", "r");
    const writeFile = await fs.open("write.txt", "w");

    const readStream = readFile.createReadStream();
    const writeStream = writeFile.createWriteStream();

    const encryption = new Encryption();
    readStream.pipe(encryption).pipe(writeStream);

    readStream.on("end", () => {
        console.timeEnd("read");
    });

})()