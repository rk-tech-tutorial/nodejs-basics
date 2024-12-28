const { Writable } = require('node:stream');

class CustomWrite extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    }

    _final(callback) {
        console.log('Done');
        callback();
    }

    _destroy(err, callback) {
        console.log('Destroy');
        callback();
    }
}

// call the custom write stream
const customWrite = new CustomWrite();

customWrite.write('Hello');
customWrite.end();
