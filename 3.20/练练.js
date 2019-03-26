let objv = {
    name: 'lili',
    key: {
        age: 3,
        scholl: ['x0', 'xx1', 'xxx2']
    }
}
let { name, key: { age, scholl: [, ss] } } = objv
console.log(name, age, ss)