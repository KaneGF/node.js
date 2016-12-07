var fs = require("fs");
var data = '';

//Read stream
var readStream = fs.createReadStream('README.md');
readStream.setEncoding('UTF8');

readStream.on('data', function(chunk) {
    data += chunk;
});

readStream.on('end', function() {
    console.log(data)
});

readStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('Read Stream finished');

//Write stream
var writeStream = fs.createWriteStream('input.txt');

data = 'hello stream';
writeStream.write(data, 'UTF8');

writeStream.end();

writeStream.on('finished', function() {
    console.log('write finished');
});

writeStream.on('error', function(err) {
    console.log(err.stack);
})

console.log('Write Stream finished');

//copy stream
var rStream = fs.createReadStream('input.txt');
var wStream = fs.createWriteStream('output.txt');
rStream.pipe(wStream);
console.log("do pipe finish");