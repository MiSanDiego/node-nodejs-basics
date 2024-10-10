import { constants } from 'fs';
import { promises as fs } from 'fs';
import { join } from 'path';
const origin = "./src/fs/files";
const detination = "./src/fs/files_copy";
const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        await fs.access(origin, constants.F_OK);
        try {
            await fs.access(detination, constants.F_OK);
            throw new Error(errorMessage);

        } catch (error) {
            try {
                await fs.mkdir(detination, { recursive: true })
                    .then(() => {
                        fs
                            .readdir(origin, { withFileTypes: true, recursive: true })
                            .then((files) => {
                                for (let file of files)
                                {
                                    const srcPath = join(origin, file.name);
                                    const destPath = join(detination, file.name);
                                    file.isDirectory()
                                        ? copy()
                                        : fs.copyFile(srcPath, destPath);
                                }
                            })
                    } ); 
            } catch (error) {
                console.log('COPY ERROR', error)
            }
        }
    } catch (error) {
        throw new Error(errorMessage);
    }

};

await copy();
