let Promise1 = require('./promiseaa')

let p1 = new Promise1((resolve, reject) => {
    setTimeout(() => {
        resolve('111')
        reject('失败')
    }, 1000);



})
p1.then(data => {
    console.log(data)
}, err => {
    console.log(err)
})

// 执行器中 excutor 执行器里面有两个参数 resolve，reject
// 2.只能由pending状态转换到成功或者失败
// 3.then 里面2个参数(函数) 一个是成功回调一个是失败回调
// 4.如果是pending 状态