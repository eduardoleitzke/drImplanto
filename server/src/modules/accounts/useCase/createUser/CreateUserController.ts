import { Response, Request } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { password, name, email, birthday, cpf, lastName, phone } =
            req.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({
            name,
            password,
            email,
            birthday: new Date(birthday),
            cpf,
            lastName,
            phone,
        });
        return res.status(201).send();
    }
}
