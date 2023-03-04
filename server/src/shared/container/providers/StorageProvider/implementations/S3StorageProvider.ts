import { S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";
import { resolve } from "path";

import upload from "../../../../../config/upload";
import { IStorageProvider } from "../IStorageProvider";

export class S3StorageProvider implements IStorageProvider {
    private client: S3;

    constructor() {
        this.client = new S3({
            region: "sa-east-1",
        });
    }
    async save(file: string[], folder: string): Promise<string[] | void> {
        try {
            for (let i = 0; i < file.length; i += 1) {
                const originalName = resolve(upload.tmpFolder, file[i]);
                // eslint-disable-next-line no-await-in-loop
                const fileContent = await fs.promises.readFile(originalName);
                const ContentType = mime.getType(originalName);
                // eslint-disable-next-line no-await-in-loop
                await this.client
                    .putObject({
                        Bucket: `${process.env.AWS_BUCKET}/${folder}`,
                        Key: file[i],
                        ACL: "public-read",
                        Body: fileContent,
                        ContentType,
                    })
                    .promise();
                // eslint-disable-next-line no-await-in-loop
                await fs.promises.unlink(originalName);
            }

            return file;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}
