const fs = require("fs")
fs.writeFile('x/test/writeFile.txt', "HolleWorld", 'utf8', function(err){
	if(err){
        console.log('文件写入失败！' + err.message)
        return
    }
	console.log('文件写入成功')
})
