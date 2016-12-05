var buf = new Buffer(26);
for (var i = 0; i < 26; i++) {
    buf[i] = i + 97;
}
console.log(buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5));   // 输出: abcde
console.log(buf.toString('utf8', 0, 5));    // 输出: abcde
console.log(buf.toString(undefined, 0, 5)); // 使用 'utf8' 编码, 并输出: abcde

buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);
console.log(json);

var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString());

var buf1 = new Buffer('ABCD');
var buf2 = new Buffer('ABC');
var result = buf1.compare(buf2);
if (result < 1) {
    console.log('buf1在buf2之前');
} else if (result == 0) {
    console.log('buf1和buf2相同');
} else {
    console.log('bu1在buf2之后');
}

var buf3 = new Buffer(3);
buf1.copy(buf3);
console.log('buf3 content:' + buf3);

//缓冲区裁剪
var buf4 = buf1.slice(0, 2);
console.log('buf4 content:' + buf4);
console.log(buf4.length);