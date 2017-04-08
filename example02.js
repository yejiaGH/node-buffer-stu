var buf = new Buffer('宝宝', 'utf8');
// 1b -> 8bit -> ascii abcd123232
// 1b2b -> 16bit -> utf8
// 1b2b3b4b -> utf16le

console.log(buf.length);
// 1b 2b 3b
var hexString = buf.toString('hex'); // hex
var buf2 = new Buffer(hexString, 'hex');
console.log(buf2.toString());