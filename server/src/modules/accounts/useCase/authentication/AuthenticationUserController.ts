import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticationUserUseCase } from "./AuthenticationUserUseCase";

export class AuthenticationUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { password, email } = req.body;

        const authenticationUserUseCase = container.resolve(
            AuthenticationUserUseCase
        );

        const token = await authenticationUserUseCase.execute({
            password,
            email,
        });
        return res.status(201).json(token);
    }
}
