// Promise 承诺 es6规范类
// 1.作用 处理异步的一种手段(解决回调地狱的问题)
// 有一个立即执行函数的执行器叫做excutor
// 执行器有2个参数 resolve 和reject 都是函数
// 调用resolve 传一个值表示成功 resolev ('值') 值可以任意传
// reject 可以传一个值表示失败 reject('值') 值可以任意传
// Promise 有三种状态 等待pending 成功resolve 失败 reject 初始状态是pending
// promise 状态只能是有pending 变成的 成功或者失败一旦成功就不能失败旦失败就不能成功
// promise.then() 执行之后会返回的是一个新的promise 重点
// then 方法里面有两个参数 都是函数 一个是成功的回调 一个是失败的回调 
// 可以链式调用
// 如果有报错会直接走失败
// axios 基于promise 封装的
// 路程化更清晰
// 如果返回的是普通值会直接成功
// catch 统一处理失败
// 1.new promise
// 2.使用promise
let p1 = new Promise((resolve, reject) => {

    resolve("成功")
    // reject('失败')
    // throw new Error('失败')

})
// p1.then(data => {
//     console.log(data)
//     return 1
// }, err => {//
//     console.log(err)
// }).then(data => {//
//     console.log(data)
// })
// // 可以直接设置成功或者直接失败
// Promise.resolve('a').then(data => {
//     console.log(data)
// })
// // Promise.all()  Promise.race() 
// // 后面都跟的是Promise数组 all表示都成功之后才会执行成功的回调
// //  race 谁跑的快执行谁 不管成功还是失败都执行
// let p2 = new Promise((resolve, reject) => {
//     resolve("成功")

// })
// es7 规范 async await 成对出现的
// async 表示函数里面有异步操作
// async 和await 必须同时出现使用
async function a(){
    await p1.then(data=>{
        console.log(data)
    })
}
a()