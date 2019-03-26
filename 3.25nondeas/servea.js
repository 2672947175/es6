// 命令的时候 注意 不要把文件/文件夹命名成node vue react 等
// node 单线程 无阻塞 异步i/o 服务端语言 
// 可以直接引入的都是node的自带模块
let http = require('http') // http模块  
//?id=1&&name=2  query 
let url = require('url') //地址解析
// 第三方导入
let arr = require('./arya')
//  创建自己的第一个服务器  
// createServer  回调 参数是req request 请求 res response 响应
//   .listen 指定端口 端口后面可以跟回调函数用来处理一些事情  
//端口号的范围 0 - 65535 
//nodejs改动后需要重启 
http.createServer((req,res)=>{
	console.log(arr)
	//我们需要根据路径不同 返回不同的数据  
	let obj = url.parse(req.url,true)
	console.log(obj)
   let {pathname,query} = url.parse(req.url,true) 
   //http://localhost:3000/?name=kangwen&age=190
    // pathname 访问的路径 query 查询字符串
   if(pathname ==='/'){
	   let {name,age}= query;
	   console.log(name,age)
	   res.end(JSON.stringify({
	   code:200,
	     data:[{name:'lilei'},{name:'lili'}]
      }))
	  return 
   }
   if(pathname ==='/abc'){
	   res.end(JSON.stringify({
	   code:200,
	     data:{age:3}
      }))
	  return
   }
	if (pathname ==="/arra"){
		res.end(JSON.stringify(arr))
   }
   res.end('404')
 }).listen(3000,function(){
	console.log('3000端口启动成功')
}) 
//  http://localhost:3000/ 
