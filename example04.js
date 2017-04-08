'use strict';

let buf = new Buffer(6);
buf.writeInt16LE(5); // 小端
buf.writeInt16LE(8,2); // 小端
console.log(buf); // 05 00
buf.writeInt16BE(5); // 大端
buf.writeInt16BE(8,2); // 大端
console.log(buf); // 00 05

var buf2 = new Buffer(4);
buf2.fill(0);
buf2.writeInt8(6); // writeInt8，1个字节表示，没有LE/BE
console.log(buf2);
console.log(buf2.readInt16LE(0), buf2.readInt16BE(0)); 
console.log(buf2.readInt32LE(0), buf2.readInt32BE(0)); 