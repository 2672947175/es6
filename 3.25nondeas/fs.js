// fs 模块
// 自带模块文件处理
let fs = require('fs') 
// 第一中方发
// console.log(fs)
// fs.readFile 读取文件的方法 参数是三个 路径 编码 回调函数 异步的代码
// node.js 回调有一个特点 error  first

// fs.readFile('./car.json','utf8',function(err,data){
//     if(err) return console.log(err)
//     console.log(data)
// })

// function readFilea(url, cb) {
//     fs.readFile(url, 'utf8', function (err, data) {
//         if (err) cb([])
//         cb(data)
//     })
// }
// readFilea('./car.json', function (data) {
//     console.log(data)
// })
//  function readFileb(url) {
//     return new Promise((resolve,rejcet)=>{
//         fs.readFile(url, 'utf8', function (err, data) {
//             if (err) rejcet(err)
//             resolve(data)
//         })
//     })
  
// }
/*// readFileb('./car.json').then((data)=>{
//     console.log(data)
// })*/
 

// fs.writeFile 写文件 4个参数 路径 数据(data) 参数option 回调
// fs.writeFile('./car.json','./car1.json','utf8',function(err,data){
//     if(err) console.log(err)
//     console.log(data)
// })
// function writeFilea(url,data,cb){
//     fs.writeFile(url, data, 'utf8', function (err, data) {
//         if (err)return cb([])
//         cb(data)
//     })
// }
// function writeFilea(url, data) {
//     return new Promise((resolve,rejcet)=>{
//         fs.writeFile(url, data, 'utf8', function (err) {
//             if (err) rejcet(err)
//         })
//     })
   
// }
// async function m(url,data){
//     await writeFilea(url, data).then((err) => {
//         return console.log(err)
//     })
// }

// async function s() {
//     await readFileb('./car.json').then((data) => {
//         m('./car.json',data)
//     })
// }
// s()

// 第二中方发
// node  新版本里的api
// let fs = require('fs')
let fsPromises = fs.promises;
fsPromises.readFile('./car1.json', 'utf8').then(data => {
    console.log(data)
})
fsPromises.writeFile('./car.json','[]', 'utf8').then(data => {
    console.log(data)
})