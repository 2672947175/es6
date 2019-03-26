let fs = require('fs')
const fsPromises = fs.promises;
fsPromises.writeFile('./car.json', '[]', 'utf8').then(data => {
    console.log(data)
})