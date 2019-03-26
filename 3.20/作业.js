let res = {
    code: 200,
    data: [{
        name: '丽丽', info: {
            age: 3,
            face: 'white',
            eat: ['banana', 'origin']
        }
    }, {
        name: '李雷', info: {
            age: 4,
            face: 'banana',
            eat: ['pig', 'dog', 'banana', 'origin']
        }
    }]
}
let { data: [{ name, info: { face } }, { name: lename, info: { age, eat: [, , , or] } }] } = res
console.log(name + "的肤色" + face + ',' + lename +
    "的年龄" + age + ',' + lename + '最喜欢吃的' + or)



function a() {
    setTimeout(() => {
        console.log('a执行')
    }, 600)
}
function b(an, an1) {
    setTimeout(() => {
        console.log('b执行')
        an(an1)
    }, 700)

}
b(c, a)
function c(fa) {
    setTimeout(() => {
        console.log('c执行')
        fa()
    }, 100)
}

// b执行完 c 执行 c执行完后a 执行  不在允许出来任何定时器
// 'b执行 c执行 a执行' 




