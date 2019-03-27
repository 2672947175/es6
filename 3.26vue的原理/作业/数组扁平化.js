let arr = [1,2,5,3,6,[2,3,[5,[1,3],6],5],6]

function fnr(arr) {
   return arr.reduce((item,tex)=>{
    //    遍历数组每一项，若值为数组则递归遍历，否则concat。
       return item.concat(Array.isArray(tex) ? fnr(tex) :tex )
   },[])
}
let aa = fnr(arr)
console.log(aa)

function fns (arr){
    return arr.toString().split(',').map(item=>Number(item))
}
let ab=fns(arr)
console.log(ab)
function fnw(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}
let aff=fnw(arr)
console.log(aff)

function fnm(arr) {
    let res =[];
    arr.map(item=>{
        if (Array.isArray(item)){
            res = res.concat(fnm(item))
        }
        else{
            res.push(item)
        }
    })
    return res
}
let mp =fnm(arr)
console.log(mp)
function fnj(arr) {
    return arr.join(',').split(',').map(function (item) {
        return parseInt(item);
    })
}
let aj =fnj(arr)
console.log(aj)
function fnap(arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat.apply([], arr);
    }
    return arr;
}
let fap = fnap(arr)
console.log(fap)