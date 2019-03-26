// 封装一个promise 函数 传一个回调函数
function Promise1(excutor) {
    let thin = this
    //自己定义一个默认状态
    thin.status = "pending"
    function resolve(resolves) {
        if (thin.status === 'pending') {
            thin.resolves = resolves
            thin.status = "resolve"
        }
    }
    function recject(rejects) {
        if (thin.status === 'pending') {
            thin.rejects = rejects
            thin.status = "resolve"
        }
    }
    excutor(resolve, recject)
}
module.exports = Promise1