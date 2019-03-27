// // es5
// let obj= {
//     name:0
// }

// Object.defineProperty(obj,'name',{
//     // get(){
//     //     //获取
//     //     return 2
//     // },
//     enmuberble:true,
//     writeable:false,
//     configurable:true
// })
// // enmuberble //是否可枚举

// // for(let key in obj){
// //     console.log(obj[key])
// // }
// // console.log(obj)
// // writeable // 是否可以写入
// // console.log(obj.name)

// // es5 
// let obj = {

// }
// Object.defineProperty(obj, 'name', {
//     value: 1,
//     enmuberable: true,
//     writable: true,
//     configurable: true
// })
// //writable 是否可以写入 
// // obj.name= 4
// //configurable:true 是否可配置
// // delete obj.name
// // enmuberable 是否可枚举
// for (let key in obj) {
//     console.log(obj[key])
// }
