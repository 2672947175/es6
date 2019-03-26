
// 1. theFirstName 转换 the-first-name
let reg = /([A-Z])/g
let srt = ' theFirstName' 
let a = srt.replace(reg, function ($, $1) {
    return '-' + $1.toLowerCase()
})
console.log(a)

// 2. 成驼峰命名the-first-name 转换   theFirstName
let regt = /-(\w)/g
let srtt = "the-first-name"
let c = srtt.replace(regt,($,$1)=>{
    return $1.toUpperCase()
})
c

// 3. 100000000000 转换为 100.000.000
let str = "100000000000";
// 把数子上每三个数字一组加一个空格 从后面开始 让他正向预览 去掉非数字之间的空格
let regd = /(?=(\B)(\d{3})+$)/g
// 把空格转换为点
let b = str.replace(regd,'.')
console.log(b)

// 4. 缓冲的分类有哪些
// localStorage sessionStorage  cookie
// 5.那些操作会造成内存泄漏
// setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
// 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环
// 6.IE 和 和 DOM 
//   执行顺序不一样
//   参数不一样
//   事件加不加 on
//   this 指向问题
// 7. 将字符串 ” <tr><td>{$id}</td><td>{$name}</td></tr> ” 中的 { $id } 替换成{ $name } 替换成 Tony 
let stre =' < tr > <td>{$id}</td> <td>{$name}</td></tr >'
let regs = /{\$name}/g;
let f = stre.replace(regs,'Tony')
f
// 8.用  js  实现随机选取  10 –0 100  之间的 0 10 
var iArray = [];
function getRandom(istart, iend){
    var iChoice = istart-iend+1;
    return Math.floor(Math.random() * iChoice + iend);
}
for (var i = 0; i < 10; i++) {
    var result = getRandom(10,100);
    iArray.push(result);
}
let ac =iArray.sort();
ac
