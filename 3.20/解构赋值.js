// 解构赋值
// 1.数组的解构赋值 左右结构类似 右边必须是数组或者类数组
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)
// 在数组中省略的时候逗号作为占位符
let [, d] = [1, 2, 3]
console.log(d)
// 1[2,3] 的写法
let [aa, ...bb] = [1, 2, 3]
console.log(aa, bb)
let [ap] = [1]
console.log(ap)
// 对象的解构赋值 按照key(属性来赋值) key 必须相同
let obj = { name: 'leli', ol: '33' }
let { name, ol } = obj
console.log(name, ol)
// 在要解构的变量后面用:冒号可以改名
let { name: nickname } = obj
console.log(nickname)
// 如果右边不是对象，会转换为对象进行解构，
// 有两个例外（undfined，null）
// 不会被转换成对象，如果是会直接报错

// 拿数组的长度
let { length } = [1, 2, 3, 4]
console.log(length)

let { __proto__ } = 1
console.log(__proto__)
// 数组和对象解构赋值的时候可以给默认值 只有对应值是undfined(===)时候才会走默认值
let [n, m = 1] = [1] //[1,null] [1,undfined]
console.log(n, m)
let { v = 1 } = { a: 'a' } //{v:undfined}
console.log(v)

let objv = { name: 'lili', at: { age: 3, scholl: ['x', 'xx', 'xxx', 'xxxx'] } }
// age scholl 第一项 
let { at: { age, scholl: [, s2] } } = objv
let { at: b13 } = objv;
console.log(b13)






// 作业
let res = {
    code: 200,
    data: [
        {
            name: "lili",
            info: {
                age: 3,
                face: 'white',
                eat: ['bannana', 'oregin']
            }
        }, {
            name: 'lilei', info: {
                age: 4,
                face: 'banana',
                eat: ['pig', 'dog', 'bannana', 'oregin']
            }
        }
    ]
}