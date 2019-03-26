
Array.prototype.ma = function (fn, prev) {
    for (let i = 0; i < this.length; i++) {
        // 判断prev参数是否存在 prev只会走一次
        if (!prev) {
            prev = fn(this[i], this[i + 1], i, this);
            i++
        }
        else {
            prev = fn(prev, this[i], this[i + 1], this);
        }
    }
    return prev
}
let ara = [1, 2, 3]
let aa1 = ara.ma((prev, next) => {
    return prev + next
}, 10)
console.log(aa1)
