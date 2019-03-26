// map 函数封装

// 这里的形参就是传一个函数
Array.prototype.mymap = function (cd) {
    let mw = [];
    for (let i = 0; i < this.length; i++) {
        mw.push(cd(this[i], i))
    }
    return mw
}
let ary = [1, 2, 3]
let mam = ary.mymap((item, index) => {
    return item * 2
})
mam
// reduce
Array.prototype.myreduce = function (fn, prev) {
    for (let i = 0; i < this.length; i++) {
        if (!prev) {
            prev = fn(this[i], this[i + 1], i, this)
            i++
        } else {
            prev = fn(prev, this[i], this[i + 1], this)
        }
    }
    return prev
}

let maa = ary.myreduce((prev, next, a, b) => {
    return prev + next
})
maa

// someary

Array.prototype.mysome = function (fua) {
    let len = this.length;
    let thisp = arguments[1]
    for (let i = 0; i < len; i++) {
        if (i in this && fua.call(thisp, this[i], i, this))
            return true
    }
    return false

}
let someary = ary.mysome(item => item > 1)

console.log(someary)
// every 有一项 条件不成立就返回false 所有条件都满足就返回true
Array.prototype.myevery = function (fun) {
    let len = this.length;
    // thisp 在这是个展位符
    let thisp = arguments[1]
    for (let i = 0; i < len; i++) {
        if (i in this && !fun.call(thisp, this[i], i, this))
            return false
    }
    return true
};
let everyary = ary.myevery(item => item > 0)

console.log(everyary)
// void ()是运算符, 对任何值都返回undefined;
//  和typeof运算符号一样可以 void (0) = void 0;
console.log(void ary)