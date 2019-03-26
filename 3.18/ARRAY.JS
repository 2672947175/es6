// 数组 
// join slice push pop shift unshift
//  reverse sort splice concat
//  indexof find map filter includes 
// some every from reduce     
// find  找到条件为真的那一项 并返回  如果没有返回undfined
let ary = [1, 2, 3, 4]
let one = ary.find(item => item === 1)
console.log(one)
//map 映射 把一个数组映射成一个新数组 不会改变原数组
let mapary = ary.map(item => item * 2)
console.log(mapary)
// includes es7 找到条件为真的返回true 否则返回false 
let item = ary.includes(4)
console.log(item)
// some every 
// some 有一项条件成立就返回true 
let someary = ary.some(item => item > 3)
console.log(someary)
// every 有一项条件不成立就返回false 所有项都满足条件才返回true 
let eary = ary.every(item => item > 0)
console.log(eary)
// from 可以把类数组转换成数组
// 数组去重 new set 
let set = new Set([1, 2, 2, 2, 3, 4, 6])
console.log(set)
let d = Array.from(set)
let h = Array.from(new Set([1, 2, 2, 3, 3, 4, 4]))
console.log(h)
//  reduce 求和
let ary1 = [1, 2, 3, 4]
console.log(ary1)
// eval 把字符串转变成js表达式 不建议使用
// let sum = eval(ary1.join('+'))
let sum = ary.reduce((prev, next) => prev + next)
console.log(sum)




