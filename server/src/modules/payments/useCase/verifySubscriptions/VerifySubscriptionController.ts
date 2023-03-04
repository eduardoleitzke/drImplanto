import { Response, Request } from "express";
import { container } from "tsyringe";

import { VerifySubscriptionUseCase } from "./VerifySubscriptionUseCase";

export class VerifySubscriptionController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        const verifysubscriptionController = container.resolve(
            VerifySubscriptionUseCase
        );
        await verifysubscriptionController.execute(id);
        return res.status(201).json();
    }
}
