let obj = {
    name:"玩游戏"
}
inp.oninput = function (e) {
    // 把输入框的值 赋值被obj.name
    obj.name = e.target.value
}

Object.defineProperty(obj,'name',{
    get (){//获取值
      
        return value
    },
    set(val){//设置值 改变值得时候会触发set方法
        console.log(val)
        value = val
          // 给对象改变的时候，把值也更新到input上
        inp.value = val
    }
})

var a="3king"
alert(a)