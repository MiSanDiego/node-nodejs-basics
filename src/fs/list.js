import { constants } from 'fs';
import { promises as fs } from 'fs';
const origin = "./src/fs/files";
const errorMessage = 'FS operation failed';

const list = async () => {
    try {
        await fs.access(origin, constants.F_OK);
        fs
            .readdir(origin, { withFileTypes: true, recursive: true })
            .then((files) => {
                for (let file of files)
                {
                    console.log(file.name);
                }
            })
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await list();