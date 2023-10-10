const fs = require('fs/promises');
const fsSync = require('fs')
const path = require('path')

const base = path.join(__dirname, 'temp') // путь к темпу

// fs.mkdir(base).then(() => {
//     console.log('Folder created');
// }).catch((err) => {
//     console.log('err', err)
// })

const getContent = () => ` \n\r${process.argv[2]}`

async function start() {
    try {
        if(fsSync.existsSync(base)) {
            // fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '') // создаёт новый
            // fs.appendFile(path.join(base, 'logs.txt'), process.argv[2] ?? '') // добавляет контент в существующий файл
            await fs.appendFile(path.join(base, 'logs.txt'), getContent());
            const data = await fs.readFile(path.join(base, 'logs.txt'), {encoding: 'utf-8'});
            console.log(data)
        } else {
            await fs.mkdir(base)
            fs.writeFile(path.join(base, 'logs.txt'), process.argv[2] ?? '')
        }

        console.log('Folder created', process.argv[2]);
    } catch (err) {
        console.log('err', err);
    }
}

start()