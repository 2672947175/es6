window.onload = function () {
    let ary = [
        { img: './img/1.jpg', idx: 0, text: '恭喜你中一等奖' },
        { img: './img/2.jpg', idx: 1, text: '谢谢惠顾' },
        { img: './img/3.jpg', idx: 2, text: '恭喜你中三等奖' },
        { img: './img/4.jpg', idx: 5, text: '谢谢惠顾' },
        { img: './img/bg.png', idx: 9, text: '谢谢惠顾' },
        { img: './img/5.jpg', idx: 8, text: '恭喜你中了一个铅笔' },
        { img: './img/4.jpg', idx: 7, text: '恭喜你中了一个毛笔' },
        { img: './img/5.jpg', idx: 6, text: '谢谢惠顾' },
        { img: './img/1.jpg', idx: 3, text: '恭喜你中了一个刚笔' }
    ]
    // 获取大盒子
    var div = document.querySelector('#containe')
    // 创建 小盒子
    let ul = document.createElement('ul')
    div.appendChild(ul)
    ul.innerHTML = ary.map((item, index) => `<li>
        <p></p><img class="imga" src=${item.img} />
    </li>`).join('')
    var p = document.querySelector('p')
    let li = ul.children
    // 每一条数据遮罩在页面里面所对应的自定义下标
    let idx = ary.map(item => item.idx)
    // 弹框内容
    let texta = ary.map(item => item.text)
    var nowTime = 0;
    // 点击事件
    li[4].onclick = function () {
        // 起始值
        let shu = 0
        // 判断他是否在执行
        if (new Date() - nowTime > 4000) {
            nowTime = new Date();
            // 大盒子遮罩
            p.classList.add("pon");
            // 创建随机时间
            var jis = Math.floor(3000 + Math.random() * 1000)
            var itaa = setInterval(() => {
                // 判断shu是 9 的时候把 shu 回归到0起始值
                if (shu >= 9) {
                    shu = 0;
                }
                let idn
                // 走得下标值
                if (idx[shu] != 9) {
                    // 清空每一项
                    for (let i = 0; i < idx.length; i++) {
                        let cidx = li[i].children[0]
                        cidx.classList.remove("on");
                    }
                    idn = idx[shu]
                    let p = li[idn].children[0]
                    p.classList.add("on");
                }
                // 判断停止时间
                if (jis <= 50) {
                    // 清除遮罩
                    p.classList.remove("pon");
                    // 清除计时器
                    clearInterval(itaa)
                    // 创建弹框
                    let text = document.createElement('div')
                    div.appendChild(text)
                    text.className = "cond";

                    let teaa = texta[idn]
                    text.innerHTML = teaa
                    // 弹框点击事件
                    text.onclick = function () {
                        text.style.display = "none";
                    }
                }
                // 下标++
                shu++
                // 计时器--
                jis -= 50
            }, 50)
        }
    }
}

