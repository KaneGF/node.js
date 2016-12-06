var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('README.md')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('README.md.gz'));

console.log('compress file finsh');