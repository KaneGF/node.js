var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('README.md.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('decompress finish');