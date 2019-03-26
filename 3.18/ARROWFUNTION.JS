// 箭头函数 
function a(x) {
  return x + 1
}
// 省略function 关键字 变成箭头 如果只有一个参数可以省略小括号 
// 省略大括号的时候可以省略return 
// 箭头函数没有this this会指向上级作用域 有2个箭头以上的叫做高阶函数
// a =(x)=>{return x+1}
// a =x=>{return x+1}
a = x => x + 1
// 对象不是作用域 这里的this是window 
obj = {
  fn: () => {
    console.log(this)
  }
}
obj.fn()
