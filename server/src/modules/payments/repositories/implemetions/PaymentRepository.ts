import { Payment } from "../../../../models/Payment";
import { IPayment, IPaymentRepository } from "../IPaymentRepository";

export class PaymentRepository implements IPaymentRepository {
    async findByPaymentId(id: string): Promise<IPayment | null> {
        const paymentOrder = await Payment.findOne({ payment_id: id });
        return paymentOrder;
    }
    async findByUser(id: string): Promise<IPayment | null> {
        const paymentOrder = await Payment.findOne({ user: id });
        return paymentOrder;
    }
    async create({
        payment_id,
        reason,
        status,
        user,
        expireAt,
        currentPlanningsRemain,
    }: IPayment): Promise<void> {
        const newPayment = new Payment({
            payment_id,
            reason,
            status,
            user,
            expireAt,
            currentPlanningsRemain,
        });

        await newPayment.save();
    }
}
