// 1．导入fs模块，来操作文件
const fs = require("fs")
// 2.调用fs.readFile()方法读取文件
fs.readFile('./test/readFile.txt', 'utf8', function(err, result){
    if (err){
        console.log('文件读取失败~' + err.message)
        return 
    }
	console.log('文件读取成功，内容是：' + result)
})
