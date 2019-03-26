// filter
let ary = [1, 2, 3, 4]

Array.prototype.myfilter = function (cd) {
    let nwearr = []
    for (let i = 0; i < this.length; i++) {
        // 只有回调函数成立之后才回返回新的数组
        if (cd(this[i], i)) {
            i
            nwearr.push(this[i])
        }
    }
    return nwearr
}
let res = ary.myfilter(item => item > 2)
res