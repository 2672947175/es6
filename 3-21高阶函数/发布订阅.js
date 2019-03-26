// 发布订阅
let dep = {
    cbs: [],//存放on里面的回调函数
    dataeimt: [],
    on(cb) {//订阅
        this.cbs.push(cb)
        console.log(cb)

        // on执行的时候存放on里面的回调函数
    },
    emit(ca) {//发布
        // 把onl里面的回调拿出来-一次执行
        console.log(ca)
        this.dataeimt.push(ca)
        this.cbs.forEach(fn => fn(this.dataeimt))
        this.cbs.forEach(fn => {
            console.log(fn)

        })

    }
}
// 吃包子 吃鸡蛋 去上学
setTimeout(() => {
    dep.emit('吃包子')
    setTimeout(() => {
        dep.emit('吃鸡蛋')
    }, 1500);
}, 500);

dep.on(function (aa) {
    console.log(aa)
    if (aa.length == 2) {
        console.log('去上学')
    }
})
// 页面上有3个小球
// 要求 第一个球运动完成之后
// 第二个动  第二个运动完成之后第三个动