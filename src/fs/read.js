import { promises as fs } from 'fs';
import {constants} from 'fs';

const errorMessage = 'FS operation failed';
const fileToRead = './src/fs/files/fileToRead.txt';

const read = async () => {
    try {
        await fs.access(fileToRead, constants.F_OK);
        try {
            fs.readFile(fileToRead, {encoding:"utf-8"}).then((result) => console.log(result));
        } catch (error) {
            throw Error (errorMessage);
        }
    } catch (error) {
        throw Error (errorMessage);
    }
};

await read();