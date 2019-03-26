// 遵循promise A+规范 
function Promise(excutor) {
    let _self = this;
    _self.value = undefined;//成功的原因
    _self.reason = undefined;//失败的原因
    _self.status = 'pending' //默认状态
    _self.onResolvedCb = []//用来存放成功的回调
    _self.onRejectedCb = [] //用来存放失败的回调
    function resolve(value) {
        // 判断是不是pending状态 只有pending状态才能转化
        if (_self.status === 'pending') {
            _self.value = value;
            // 我们自己规定成功的状态叫做 'resovled'
            _self.status = 'resolved';
            // 把存在成功回调数组里面的函数依次执行
            _self.onResolvedCb.forEach(fn => fn());
            //定义resolved为成功态
        }
    }
    function reject(reason) {
        if (_self.status === 'pending') {

            _self.reason = reason;
            _self.status = 'rejected' //rejected为失败态 
            // 我们自己规定失败的状态叫做 'rejected'00.
            // 把失败回调数组里面的函数拿出来依次执行
            _self.onRejectedCb.forEach(fn => fn())
        }
    }
    excutor(resolve, reject)
}
// then方法是挂在原型上的
Promise.prototype.then = function (onfufilled, onrejected) {
    let _self = this;
    //  如果状态是成功态 调用then里面成功的回调函数
    if (_self.status === 'resolved') {
        onfufilled(_self.value)
    }

    if (_self.status === 'rejected') {
        //  如果状态是失败态 调用then里面失败的回调函数
        onrejected(_self.reason)
    }
    //pending状态的时候需要把成功或者失败的状态存起来  在resolve 或者reject执行的时候依次调用
    if (_self.status === 'pending') {
        // 把成功回调存在onResolvedCb数组里面
        _self.onResolvedCb.push(() => {
            onfufilled(_self.value)
        })
        // 把失败回调存在onRejectedCb数组里面
        _self.onRejectedCb.push(() => {
            onrejected(_self.reason)
        })

    }
}
module.exports = Promise