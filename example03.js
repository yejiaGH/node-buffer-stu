var buf = new Buffer('宝宝的qq 74082', 'utf8');
var base64Str = buf.toString('base64');
console.log(base64Str);

var buf2 = new Buffer(base64Str, 'base64');
console.log(buf2.toString());
console.log(buf, buf2);

// nodejs的Buffer转码不支持gbk，gb2312