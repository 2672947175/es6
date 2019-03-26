function move(ele, tance){
    return new Promise((resolve)=>{

    
    let m=0;
    let time = setInterval(() => {
        if (m >= tance){
            ele.style.left = tance+"px";
            clearInterval(time)
            resolve();
        }else{
            m+=2;
            ele.style.left = m + "px"
        }
    }, 13)
    })
}
// async function m(){
//     await move(qui1,200)
//     await move(qui2,300)
//     await move(qui3,400)
// }
// m()
// move(qui1,200).then(data=>{
//     move(qui2,300).then(data=>{
//         move(qui3,400).then(dd=>{
//             console.log('sdd')
//         })
//     })
// })

move(qui1,500).then(d=>{
    return move(qui2,300)
}).then(aa=>{
    return move(qui3,400)
}).then(aa=>{
    console.log('ashdjd')
})

document.write()