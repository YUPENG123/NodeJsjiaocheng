// 1．导入fs文件系统模块
const fs = require("fs")
// 2.调用fs.writeFile()方法，写入文件内容
// 	参数1:读取文件的存放路径
// 	参数2:data：表示要写入的内容。
// 	参数3:表示以什么格式写入文件内容，默认值是utf8。
// 	参数4:文件写入完成后的回调函数。
fs.writeFile('./test/writeFile.txt', "HolleWorld", 'utf8', function(err){
	// 打印失败的结果
	console.log(err)
})
