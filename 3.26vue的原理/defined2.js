// tatget 目标对象
// Object.defineProperty(tatget,key,option)
let obj = {}
Object.defineProperty(obj,'name',{
    value:1, //设置默认是nudefined
    // enumerable:true,
        enumerable:false,
    writable:true,
    configurable:true
})
// enumerable 是否可枚举  不可枚举的属性无法通过for in 遍历
for(let key in obj){
    console.log(obj[key])
}