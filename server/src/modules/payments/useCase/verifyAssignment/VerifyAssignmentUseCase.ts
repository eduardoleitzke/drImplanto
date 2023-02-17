import axios from "axios";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import {
    IPayment,
    IPaymentRepository,
} from "../../repositories/IPaymentRepository";

@injectable()
export class VerifyAssignmentUseCase {
    constructor(
        @inject("PaymentRepository")
        private verifyAssignmentUseCase: IPaymentRepository
    ) {}
    async execute(id: string): Promise<IPayment> {
        const assignmentData = await this.verifyAssignmentUseCase.findByUser(
            id
        );
        if (!assignmentData) {
            throw new AppError("Dont have Assignment", "paymentError", 400);
        }
        const resolve = await axios({
            method: "get",
            url: `https://api.mercadopago.com/preapproval/${assignmentData.payment_id}`,
            withCredentials: false,
            params: {
                access_token: auth.payment_token,
            },
        });
        try {
            console.log(resolve.data.status);
        } catch (error) {
            console.log("error");
        }
        return assignmentData;
    }
}
