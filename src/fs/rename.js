import { promises as fs } from 'fs';
import {constants} from 'fs';

const errorMessage = 'FS operation failed';
const fileToRename = './src/fs/files/wrongFilename.txt';
const renamedFile = './src/fs/files/properFilename.md';

const rename = async () => {
    try {
        await fs.access(renamedFile, constants.F_OK);
        throw Error (errorMessage);
    } catch (error) {
        try {
            await fs.access(fileToRename, constants.F_OK);
            await fs.rename(fileToRename, renamedFile);
        } catch (error) {
            throw Error (errorMessage);
        }
    }
};

await rename();