let ary = [1, 2, 3, 4]
console.log(ary)
// 求和
// reduce 收敛
// 每一次返回的结果就是下次的prev
//  每一次返回的结果会作为下次的prev  return 后面的值作为
// 第一次运行的时候 next 是数组的第二项
// 第二次运行的时候 next 是数组的第三项 以此类推
// prev可以作为参数传入
// prev 可以作为参数传入 
let reary = ary.reduce(function (prev, next, index, array) {
    return prev + next
    // 第一次的 prev 1 next 2 换回值1+2
    // 第二次的 prev 3 next 3 换回值3+3
}, 100)
console.log(reary)

// 求和

let carlist = [
    { name: '苹果', count: 3, price: 20 },
    { name: '橘子', count: 5, price: 80 },
    { name: '芒果', count: 6, price: 70 }
]
let reca = carlist.reduce((prev, next, ) => {
    let nexta = next.count * next.price
    return prev + nexta
}, 0)
console.log(reca)

// 对象

let a1 = ['name', 'age', "ssd"]
let a2 = ['第三代', '十度圣诞节', 'ss']

let as = a1.reduce((prev, next, index) => {
    prev[next] = a2[index]
    return prev
}, {})
as
let ar3 = [
    { path: '/', component: "Home" },
    { path: '/5', component: "dfff" }
]
let ara3 = ar3.reduce((prev, next) => {
    prev[next.path] = next.component
    return prev
}, {})
ara3
