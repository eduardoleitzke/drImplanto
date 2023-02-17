import axios from "axios";
import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreatePaymentOrderUseCase } from "./CreatePaymentOrderUseCase";

export class CreatePaymentOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { paymentId, userId } = req.body;
        let currentPlanningsRemain = 0;
        const {
            data: { id, status, reason, next_payment_date },
        } = await axios({
            method: "get",
            url: `https://api.mercadopago.com/preapproval/${paymentId}`,
            withCredentials: false,
            params: {
                access_token:
                    "APP_USR-481016861441430-021311-1a50e42a1366b0dd758c413fe28ac2aa-1217720662",
            },
        });
        try {
            if (status === "authorized") {
                if (reason === "Free") {
                    currentPlanningsRemain = 1;
                }
                if (reason === "Básico") {
                    currentPlanningsRemain = 2;
                }
                if (reason === "Premium") {
                    currentPlanningsRemain = 5;
                }
            }
        } catch (error) {
            res.status(500).send(error);
        }
        const createPaymentOrderUseCase = container.resolve(
            CreatePaymentOrderUseCase
        );
        await createPaymentOrderUseCase.execute({
            payment_id: id,
            expireAt: next_payment_date,
            reason,
            status,
            user: userId,
            currentPlanningsRemain,
        });
        return res.status(201).send();
    }
}
