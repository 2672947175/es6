
// let obj = {
    
// }
// inp.oninput = function(e){
//     obj.name=inp.value
// }
// Object.defineProperty(obj,'name',{
//     get(){
//         return value
//     },
//     set(val){
//         value = val
//         inp.value = val
//     }
// })


// 多个数据绑定
let obj = {
    age:[1,2,3,4],
    name:3,
    set:"女",
    potion:{
        name:'lili'
    }
}
function isObject(obj) {
    return obj != null&&typeof obj ==='object'
}
function Observe(obj){
    if(!isObject(obj)) return 
    for(let key in obj){
        // 使用这个函数监听说有的属性
        defineReactive(obj,key,obj[key])
    }
}
function defineReactive(obj,key,value){
    Observe(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            Observe(val)
            console.log("数据更新了" + val)
            value =val
        }
    })
}
Observe(obj)

// obj.age.push()
//vue 重写了 push pop shift unshift splice sort reverse 
// let oldpush = Array.prototype.push;
// Array.prototype.push = function(value){
//     console.log('数据更新' + value)
//     oldpush.call(this,value)
// }

let moth = ['push','pop','shift','unshift']
moth.forEach(motha=>{
    let oldmoth = Array.prototype[motha];
    Array.prototype[motha] = function (value){
        console.log('数据更新' + value)
        oldmoth.call(this,value)
    }
})