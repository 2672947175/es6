// callbakck 回调函数
/* function a() {
    setTimeout(() => {
        console.log('a执行')
    }, 600)
}
function b(an, an1) {
    setTimeout(() => {
        console.log('b执行')
        an(an1)
    }, 700)

}
b(c, a)
function c(fa) {
    setTimeout(() => {
        console.log('c执行')
        fa()
    }, 100)
}
 */
// 高阶函数 2个箭头以上的叫做高阶函数
// 函数里面返回函数
// let _toString = Object.prototype.toString
// function istype(str, type) {
//     let result = _toString.call(str).slice(8, -1)
//     return result === type
// }
// let aff = istype(1, 'String')
// aff
// let res = Object.prototype.toString.call("str")
// res
// console.log(typeof res)
// 改造
let _toString = Object.prototype.toString
istype = (type) => (str) => {
    let result = _toString.call(str).slice(8, -1)
    return result === type
}
let isSting = istype('String')
let isNumber = istype('Number')
// util 工具类 封装的函数
let utilarry = ["String", 'Number', 'Array', 'Object', 'Function', "Null"]
let util = {}
utilarry.map((time) => {
    util[`is${time}`] = istype(time)
})
console.log(util.isNull())


util.isString('1')
util.isNumber(1)


