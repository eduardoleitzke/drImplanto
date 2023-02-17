import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
    IPayment,
    IPaymentRepository,
} from "../../repositories/IPaymentRepository";

@injectable()
export class FindPaymentUseCase {
    constructor(
        @inject("PaymentRepository")
        private paymentRepository: IPaymentRepository
    ) {}

    async execute({ user }): Promise<IPayment> {
        const userAlreadyHaveAPlan = await this.paymentRepository.findByUser(
            user
        );
        if (!userAlreadyHaveAPlan) {
            throw new AppError("Dont have Assignment", "paymentError", 400);
        }
        return userAlreadyHaveAPlan;
    }
}
