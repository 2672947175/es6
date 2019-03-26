Array.prototype.myreduce = function (obj, prvt) {
    undefined
    let pa = typeof prvt
    if (pa == "number") {
        let reca = obj.cd.reduce((prve, next) => {
            let nexta = next.count * next.price
            return prve + nexta
        }, prvt)
        return reca
    }
    else if (pa == "object" && obj.nexte != undefined) {

        let aa = obj.cd.reduce((prev, next, index) => {
            prev[next] = obj.nexte[index]
            return prev
        }, prvt)
        return aa
    }
    else if (pa == "object" && prvt.nexte == undefined && obj.paths != undefined && obj.comps != undefined) {
        let ara3 = obj.cd.reduce((prev, next) => {
            prev[next[obj.paths]] = next[obj.comps]
            return prev
        }, prvt)
        return ara3
    }
}
let a1 = ['name', 'age', "ssd"]
let a2 = ['第三代', '十度圣诞节', 'ss']

let carlist = [
    { name: '苹果', count: 3, price: 20 },
    { name: '橘子', count: 5, price: 80 },
    { name: '芒果', count: 6, price: 70 }
]
let ar3 = [
    { 'path': '/', 'componen': "Home" },
    { 'path': '/5', 'componen': "dfff" }
]
let obj = {
    cd: carlist,
    nexte: a2,
    paths: 'path',
    comps: 'componen'
}
console.log(Array.prototype.myreduce(obj, 0))

