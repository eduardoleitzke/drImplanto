import { Response, Request } from "express";
import { container } from "tsyringe";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

export class SendForgotPasswordMailController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;
        const sendForgotPasswordMailUseCase = container.resolve(
            SendForgotPasswordMailUseCase
        );
        const emailData = await sendForgotPasswordMailUseCase.execute(email);
        return res.json(emailData);
    }
}
