// 命令的时候注意 不要把文件 命名成 node vue react 等

// 创建自己的第一个服务器
let http = require('http')
let url = require('url')
// createServer 回调 参数是req request 请求res response 响应 
// .listen 指定的端口 里面可以传回调 
// 端口好的范围0-65553
// node 改动后需要重启
http.createServer((req,res)=>{
    // 我们需要根据路径的不同 返回不同的数据
    // let obj = url.parse(req.url,true)
    let { pathname, query } = url.parse(req.url, true)

    // console.log(obj)
    // pathname 访问
    if(pathname === '/'){
        let {name,age} = query;
        console.log(name,age)
        res.end(JSON.stringify({
            conde: 200,
            data: [{ name: 'aaaaa' }, { name: 'bbbb' }]
        }))
        return 
    }
    if (pathname === '/abc') {
        res.end(JSON.stringify({
            conde: 200,
            data: {a:3}
        }))
        return
    }
    res.end('404')
}).listen(3010,function(){
    console.log("端口启动成功")
})


