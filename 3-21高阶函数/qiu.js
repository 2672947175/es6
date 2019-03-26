function move(ele, tance, callback) {
    // 运动逻辑
    console.log(ele)
    let m = 0;
    let time = setInterval(() => {
        if (m >= tance) {
            ele.style.left = tance + 'px';
            // 目标用的结束以后执行
            clearInterval(time)
            callback()
        } else {
            m += 2
            ele.style.left = m + 'px'
        }
    }, 13);
}
move(qui1, 200, function () {
    move(qui2, 300, function () {
        move(qui3, 400, function () {
            return false
        })
    })
})
// 回调地狱
