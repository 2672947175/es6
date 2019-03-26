// 回调函数 foreach 计数器
// 有一个西瓜 我吃2口 吃完 吃完西瓜才干活
function after(time, callback) {
    let resary = []
    return function (data) {
        resary.push(data)
        time
        if (--time == 0) {
            time
            console.log("吃完后了")
            callback(resary)
        }
    }
}
// return function (data) {} == eat()
// eat = after() 执行
let eat = after(2, function (res) {
    res
    if (res.length == 2) {
        console.log("去干活")
    }
})
eat('吃第一口')
setTimeout(() => {
    eat('吃第一口')
}, 10000);

