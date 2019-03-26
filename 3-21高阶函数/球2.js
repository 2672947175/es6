function move(ele, tance) {
    return new Promise((resolve, reject) => {
        // 运动逻辑
        let m = 0;
        let time = setInterval(() => {
            if (m >= tance) {
                ele.style.left = tance + 'px';
                // 目标用的结束以后执行
                clearInterval(time)
                resolve('1')
            } else {
                m += 2
                ele.style.left = m + 'px'
            }
        }, 13);
    })
}
async function m() {
    await move(qui1, 200)
    await move(qui2, 300)
    await move(qui3, 400)

}
m().then(data => {
    // alert('asdd')
})
// promise 的使用
// move(qui1, 200).then(data => {
//     move(qui2, 300).then(data => {
//         move(qui3, 400)
//     })
// })
// 清晰写法
// move(qui1, 200).then(data => {
//     return move(qui2, 300)
// }).then(data => {
//     move(qui3, 400)
// })