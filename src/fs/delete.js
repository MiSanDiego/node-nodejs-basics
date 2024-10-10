import { promises as fs } from 'fs';
import {constants} from 'fs';

const errorMessage = 'FS operation failed';
const fileToDelete = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    try {
        await fs.access(fileToDelete, constants.F_OK)
        throw Error (errorMessage);
    } catch (error) {
        try {
            fs.rm(fileToDelete);
        } catch (error) {
            console.log('deletion error')
        }
    }
};

await remove();