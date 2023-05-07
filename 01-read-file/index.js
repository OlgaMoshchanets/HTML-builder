import { createReadStream } from 'node:fs';
import * as path from 'path';


const currDir = path.resolve()
const textFilePath = path.resolve('01-read-file','text.txt')
console.log(textFilePath)
// Создаем поток из некоторого символьного устройства.

const stream = createReadStream(textFilePath);

stream.on('data', (chunk) => {
    console.log(`${chunk}`);
})

