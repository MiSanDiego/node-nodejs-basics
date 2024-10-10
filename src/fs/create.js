// const fs = require('fs');
import {promises as fs} from 'fs';
import {constants} from 'fs';
const content = 'I am fresh and young';
const errorMessage = 'FS operation failed';
const filePath = './src/fs/files/message.txt';
const fileName = 'message.txt';

// const create = async () => {
//     await fs.appendFile('message.txt', content, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// };
const create = async () => {
    try {
        await fs.access(filePath, constants.F_OK)
        throw Error (errorMessage);
    } catch (err) {
        if (err.message === errorMessage) { console.error(errorMessage);  return false};
        await fs.appendFile(filePath, content);
    }
};

await create();