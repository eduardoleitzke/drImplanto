import fs from "fs";
import { resolve } from "path";

import upload from "../../../../../config/upload";
import { IStorageProvider } from "../IStorageProvider";

export class LocalStorageProvider implements IStorageProvider {
    async save(file: string[], folder: string): Promise<string[]> {
        console.log(file);
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < file.length; i++) {
            // eslint-disable-next-line no-await-in-loop
            await fs.promises.rename(
                resolve(upload.tmpFolder, file[i]),
                resolve(`${upload.tmpFolder}/${folder}`, file[i])
            );
        }
        return file;
    }
}
