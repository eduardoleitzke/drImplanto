interface IPayload {
    id: string;
    email: string;
    plan: string;
}

declare namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
        user: {
            id: string;
        };
        userDetails: IPayload;
    }
}
