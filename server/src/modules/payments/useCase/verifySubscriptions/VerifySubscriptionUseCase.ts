import axios from "axios";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import {
    IPayment,
    IPaymentRepository,
} from "../../repositories/IPaymentRepository";

@injectable()
export class VerifySubscriptionUseCase {
    constructor(
        @inject("PaymentRepository")
        private verifysubscriptionUseCase: IPaymentRepository
    ) {}
    async execute(id: string): Promise<IPayment> {
        const subscriptionData =
            await this.verifysubscriptionUseCase.findByUser(id);
        if (!subscriptionData) {
            throw new AppError("Dont have subscription", "paymentError", 400);
        }
        await axios({
            method: "get",
            url: `https://api.mercadopago.com/preapproval/${subscriptionData.payment_id}`,
            withCredentials: false,
            params: {
                access_token: auth.payment_token,
            },
        });
        return subscriptionData;
    }
}
