import { Request, Response } from "express";
import { container } from "tsyringe";

import { ChangePasswordUseCase } from "./ChangePasswordUseCase";

export class ChangePasswordController {
    async handle(req: Request, res: Response) {
        const { password, email } = req.body;
        const changePasswordUseCase = container.resolve(ChangePasswordUseCase);
        await changePasswordUseCase.execute({ password, email });
        res.send();
    }
}
