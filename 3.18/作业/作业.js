// 作业
let arr = ['苹果', '橘子', '花生']
let maparr = arr.map(item => `<li>${item}</li>`).join('')

console.log(maparr)

// 数组去重
let arra = [1, 2, 2, 3, 5, 3, 5, 4, 2, 4, 6];

function aaa(arr) {
    arr.sort()
    let arr1 = arr.join('')
    let reg = /(\d)\1*/g
    let arra1 = arr1.replace(reg, '$1')
    arr1 = arra1.split('')
    return arr1
}

console.log(aaa(arra))
let asa = Array.from(new Set(arra))
console.log(asa)
function a(arr) {
    var arra3 = [];
    console.log(arra3.indexOf())
    // arrra3 空数组的数据类型是-1
    for (var i = 0; i < arr.length; i++) {
        // arrra3里面的第i项里面是否是-1
        if (arra3.indexOf(arr[i]) == -1) {
            arra3.push(arr[i]);
        }
    }
    return arra3
}
let aa = [1, 2, 2, 2, 3, 5, 2, 4, 3, 5, 4]
console.log(a(aa))

// 使用 find 方法
// [{ id: 1, name: 'lili' }, { id: 2, name: 'lilei' }] 找到id为1的项并返回
let farr = [{ id: 1, name: 'lili' }, { id: 2, name: '三季度开始' }]
let arrfind = farr.find(item => {
    if (item.id == 1) {
        return item.id
    }
})
let arrfind = farr.find(item => item.id === 1)

console.log(arrfind)


