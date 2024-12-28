const {Transform} = require("node:stream");
const fs = require("node:fs/promises");


class Decryption extends Transform {
    _transform(chunk, encoding, callback) {
        for (let i = 0; i < chunk.length; i++) {
            if (chunk[i] >= 65 && chunk[i] <= 90) {
                chunk[i] = 65 + (90 - chunk[i]);
            } else if (chunk[i] >= 97 && chunk[i] <= 122) {
                chunk[i] = 97 + (122 - chunk[i]);
            }
        }

        this.push(chunk);
    }
}


(async () => {
    console.time("read");
    const readFile = await fs.open("write.txt", "r");
    const writeFile = await fs.open("decrypted.txt", "w");

    const readStream = readFile.createReadStream();
    const writeStream = writeFile.createWriteStream();

    const decryption = new Decryption();
    readStream.pipe(decryption).pipe(writeStream);

    readStream.on("end", () => {
        console.timeEnd("read");
    });

})()