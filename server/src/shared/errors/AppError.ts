export class AppError {
    public readonly message: string;

    public readonly type: string;

    public readonly statusCode: number;

    constructor(message: string, type: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
        this.type = type;
    }
}
