function a([, b]) {
    return b + 5
}
let res = a([1, 2, 3])
res
function a1({ name = "lili" }) {
    return name
}
let res1 = a1({ name: "hahah" })
console.log(res1)
function c(...arg) {
    console.log(...arg)
}
c(1, 2, [3, 4])

class parent {
    constructor() {// 构造函数
        this.name = 1
    }
    c = 5 //es7 中的赋值方式
    static drink() { // 类上的方法
        console.log("hahahh")
    }
    eat(a) { //挂在原型上的方法
        console.log(a)
    }
}
let p = new parent;
console.log(p.c)

class children extends parent {

}