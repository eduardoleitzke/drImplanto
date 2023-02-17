import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
    IPayment,
    IPaymentRepository,
} from "../../repositories/IPaymentRepository";

@injectable()
export class CreatePaymentOrderUseCase {
    constructor(
        @inject("PaymentRepository")
        private paymentRepository: IPaymentRepository
    ) {}

    async execute({
        payment_id,
        reason,
        expireAt,
        status,
        user,
        currentPlanningsRemain,
    }: IPayment): Promise<void> {
        const paymentOrderAlreadyExists =
            await this.paymentRepository.findByPaymentId(payment_id);
        if (paymentOrderAlreadyExists) {
            throw new AppError("Payment already exists", "paymentError", 400);
        }
        const userAlreadyHaveAPlan = await this.paymentRepository.findByUser(
            user
        );
        if (userAlreadyHaveAPlan) {
            throw new AppError("User already have a plan", "paymentError", 400);
        }
        await this.paymentRepository.create({
            payment_id,
            reason,
            status,
            user,
            expireAt,
            currentPlanningsRemain,
        });
    }
}
