// 1 LET 和 CONSTS
// Identifier 'a' has already been declared
// 不存在变量提升  不能重复定义 let 定义的属性不会被挂载在window上 
let a = 1
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        //console.log(i)
    }, 1000)
}
let b = 1
// console.log(window.b)
// 在es6里面 {} 就是一个作用域  暂时性死区 在let定义的时候 let会掌管当前作用域 不能提前使用未声明的变量 
{
    //  console.log(c)
    let c = 1;
}
// const 没有变量提升 不能重复定义 
// 常量 只读 一旦定义不能修改(引用地址)
const PI = 3.14
const obj = { name: 'lilei' }
obj.name = 'lili'
console.log(obj.name)
// 定义变量 全用let  常量用const
// es6 -> es5  babel es6转换成es5的工具 https://babeljs.io/
