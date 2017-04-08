// new Buffer(array)
// new Buffer(buffer)
// new Buffer(size)
// new Buffer(str[, encoding])

'use strict';
// 1 byte -> 8bit 00010001 -> 255 (最大)
// 4byte
// 内存池大小 8*1024
let buf1 = new Buffer([2,3,6, 255]); // 255 ff, 十六进制
let buf2 = new Buffer(buf1);
let buf3 = new Buffer(4); // 内存不一定没有内容，内存不一定自动清空
buf3.fill(0); // 清空
let buf4 = new Buffer('alicebaby'); // 9个字节， utf8
let buf5 = new Buffer('alicebaby', 'utf16le'); // 18个字节
console.log(buf4.length, buf5.length);
console.log(buf1[1]);
buf1[4] = 34; // Buffer对象的长度不能改变，内存空间大小不能改变，由初始化决定。
console.log(buf1);
console.log(buf1 === buf2);
console.log(buf1, buf2, buf3, buf4, buf5);