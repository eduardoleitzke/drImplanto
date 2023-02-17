import { Response, Request } from "express";
import { container } from "tsyringe";

import { FindPaymentUseCase } from "./FindPaymentUseCase";

export class FindPaymentController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { userId } = req.body;
        console.log(userId);
        const findPaymentController = container.resolve(FindPaymentUseCase);
        const userAssignment = await findPaymentController.execute({
            user: userId,
        });
        return res.status(201).json(userAssignment);
    }
}
