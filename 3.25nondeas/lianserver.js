// http 模板
let http = require('http');
// 解析地址
let url = require('url');

// 创建自己的服务器
http.createServer((req,res)=>{
    let {pathname,query} = url.parse(req.url,true)
    if(pathname==='/'){
        // let { name, age } = query;
        res.end(JSON.stringify({
            code: 300,
            data: [{ name: "lli" }, { age: 30 }]
        }))
        return 
    }
    if (pathname === '/abc') {
        res.end(JSON.stringify({
            code: 350,
            data: [{ name: "falet" }, { age: 350 }]
        }))
        return
    }
    res.end('404')
}).listen(3001,function(){
    console.log("3001端口启动成功")
})
