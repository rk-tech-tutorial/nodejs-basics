const {Readable} = require('node:stream');

class CustomRead extends Readable {
    constructor(options) {
        super(options);
        this.data = ['Node', 'JS', 'Stream', 'Example'];
    }

    _read() {
        if (this.data.length === 0) {
            this.push(null);
        } else {
            this.push(this.data.shift());
        }
    }
}

// call the custom read stream
const customRead = new CustomRead();

customRead.on('data', (chunk) => {
    console.log(chunk.toString());
})

customRead.on('end', () => {
    console.log('Done');
})

customRead.on('close', () => {
    console.log('Close');
})