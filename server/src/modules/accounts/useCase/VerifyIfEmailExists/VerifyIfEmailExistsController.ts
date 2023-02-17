import { Response, Request } from "express";
import { container } from "tsyringe";

import { VerifyIfEmailExistsUseCase } from "./VerifyIfEmailExistsUseCase";

export class VerifyIfEmailExistsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;
        const verifyIfEmailExistsUseCase = container.resolve(
            VerifyIfEmailExistsUseCase
        );
        await verifyIfEmailExistsUseCase.execute(email);
        return res.status(201).send();
    }
}
