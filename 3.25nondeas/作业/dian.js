// 获取ul
let ul = document.querySelector(".ul");
let btn = document.querySelector(".btn");

let ary = [
    { name: '展示' },
    { name: '速度快' },
    { name: '熬枯受淡' },
    { name: '啥都没' },
    { name: '大叔大妈' },
    { name: '时代大厦' },
    { name: '所得税' },
    { name: '鞍山市' },
    { name: '阿萨德' },
    { name: '杜莎夫' },
    { name: '豆腐坊' },
    { name: '电动阀' },
    { name: '电饭锅' },
    { name: '低分段' },
    { name: '斗破' },
    { name: '玛丽' },
    { name: '导光板' },
    { name: '苦力怕' },
    { name: '哦啊及' },
    { name: '读法' },
    { name: '同人本' },
    { name: '让他' },
    { name: '润体 乳' }
]
ul.innerHTML = ary.map((item) => `<li><p></p>${item.name}</li>`).join("")
let li = ul.children
let ara = []
var nowTime = 0;
function fna() {
    // 判断他是否在执行
    if (new Date() - nowTime > 4000) {
        nowTime = new Date();
        let adn = 1000;
        let tmes = setInterval(() => {
            let jis = []
            ary.map((item, index) => {
                let cidx = li[index].children[0]
                cidx.classList.remove("on");
                jis = Math.floor(Math.random() * (index + 1))
            })
            let cida = li[jis].children[0]
            cida.classList.add("on");
            if (adn <= 0) {
                let aac = Array.from(new Set(ara))
                aac.sort((a, b) => {
                    return a - b
                })
                clearInterval(tmes)
                if (aac.length != ary.length - 1) {
                    for (let i = 0; i < aac.length; i++) {
                        let aa = aac[i]
                        if (aa == jis) {
                            clearInterval(tmes)
                            fna()
                        }
                    }
                }
                ara.push(jis)
            }
            adn -= 50
        }, 150);
    }
}
btn.onclick = function () {
    fna()
}



