import { Request, Response } from "express";
import { container } from "tsyringe";

import { SendForgtoPasswordMailUseCase } from "./SendForgtoPasswordMailUseCase";

export class SendForgtoPasswordMailUseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;
        const sendForgtoPasswordMailUseCase = container.resolve(
            SendForgtoPasswordMailUseCase
        );
        await sendForgtoPasswordMailUseCase.execute(email);
        return res.send();
    }
}
