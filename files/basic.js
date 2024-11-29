const fs = require('fs');

const content = fs.readFileSync('text.txt');

// convert buffer to string but encoding must be Hindi
console.log(content.toString('utf8'));