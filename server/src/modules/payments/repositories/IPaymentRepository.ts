/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPayment {
    currentPlanningsRemain: number;
    payment_id: string;
    reason: string;
    status: string;
    createdAt?: Date;
    expireAt: Date;
    user: any;
}

export interface IPaymentRepository {
    create(data: IPayment): Promise<void>;
    findByPaymentId(id: string): Promise<IPayment | null>;
    findByUser(id: string): Promise<IPayment | null>;
}
