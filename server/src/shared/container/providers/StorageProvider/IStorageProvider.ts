export interface IStorageProvider {
    save(file: string[], folder: string): Promise<string[] | void>;
}
