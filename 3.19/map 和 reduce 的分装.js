let ary = [1, 2, 3]
let mam = ary.mymap((item, index) => {
    return item * 2
})
mam
// 把函数当成参数传进来使用
Array.prototype.mymap = function (cd) {
    let nw = [];
    for (let i = 0; i < this.length; i++) {

        nw.push(cd(this[i], i))
    }
    return nw
}
