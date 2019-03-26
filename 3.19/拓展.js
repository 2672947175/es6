
// 拓展 ...
// 对象
let obj1 = { name: 'lili' }
let obj2 = { name: 11 }
let cobj = { ...obj1, ...obj2 }
cobj
let obj10 = { name: 'lili', age: "basdd" }
let obj20 = { age: 11 }
let codj2 = { ...obj10, ...obj20 }
codj2
// 数组
let a = [1, 2, 3, 4], b = [1, 2, 3]
let c = [...a, ...b]
console.log(c.sort())
// 当做拷贝 浅拷贝 深拷贝就是拷贝出来的对象（数组）是一个新的不会被原来对象影响
// 浅拷贝为什么会被影响 因为拷贝出来的值包含应用值的时候会被影响
let obc = { a: 1, c: { l: 3 } }
obc.c.l = 4
let c1 = { ...obc }
c1
// 浅拷贝
let obcv = { a: 1, c: { l: 3 } }
let c2 = { ...obcv, c: { ...obcv.c } }
obcv.c.l = 4
c2
// 深拷贝 的方法1 缺点undfined 函数data 不能拷贝过去
let tobj = { a: 1, c: { name: 'zhengsan' } }
let con = JSON.parse(JSON.stringify(tobj))
tobj.c.name = 'lisi'
con
// 深拷贝的方法2 递归(函数调用函数自身)


// 判断数据类型
// typeof  instanseof  
// constructor Object.prototype.toSting.call
// 对象的便利要用for in 
// new RegExp()
// new Date()
let targrt = { name: 'lili', a: { gae: 3 }, b: [1, 2], c: function () { }, d: /\d/ }

// function coda(target) {
//     // target==null 就是一个对象
//     if (target == null) return null
//     if (target instanceof RegExp) return new RegExp(target)
//     if (target instanceof Date) return new Date(target)
//     if (typeof target != "object") return target
//     // 如果是数组就会指向数组的构造函数  如果是对象就会指向对象的构造函数 
//     let cloneObj = new target.constructor()
//     for (let key in target) {
//         // 写法一
//         // cloneObj[key] = typeof target[key] == "Object" ? a(target[key]) : target[key]
//         // 写法二
//         cloneObj[key] = coda(target[key])
//     }
//     return cloneObj
// }

// let cob = coda(targrt)
// cob

function codaa(targrta) {
    if (targrta==null) return null
    if (targrta instanceof RegExp) return new RegExp(targrta)
    if (targrta instanceof Date) return new Date(targrta)
    if (typeof targrta != "object") return targrta
    let cloneObeje = new targrta.constructor()
    for (let key in targrta){
        cloneObeje[key] = codaa(targrta[key])
    }
    return cloneObeje 
}
console.log(codaa(targrt))
// 简单深拷贝
let obj22 = { name: 1 }
let obj3 = {}
for (let key in obj22) {
    obj3[key] = obj22[key]
}
obj3
let obja2 = {name:2,age:20,fa:function(a){
    console.log("a")
}}

let obja3 ={}
for (let key in obja2){
    obja3[key]=obja2[key]
}
obja3

