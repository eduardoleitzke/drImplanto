import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IMailProvider } from "../../../../shared/container/providers/MailProvider/IMailProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class SendForgotPasswordMailUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository,
        @inject("MailTrapProvider")
        private mailTrapProvider: IMailProvider
    ) {}

    // eslint-disable-next-line consistent-return
    async execute(email: string) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError(
                "Something doe's wrong!",
                "planUpdateError",
                400
            );
        }
        const token = sign(
            {
                email: user.email,
            },
            auth.recoveryPasswordSecret,
            {
                expiresIn: "3h",
            }
        );
        const filtredToken = token.replace(/\./gi, "-");
        const message = await this.mailTrapProvider.sendMailToRecoveryPassword({
            to: email,
            subject: "Recuperação de senha",
            body: `<h1>Troca de senha</h1>
                            <h2>Olá ${user.name}</h2>
                            <p>Esse é o seu link para trocar de senha: </p>
                            <a href=http:/127.0.0.1:5173/trocar-senha/${filtredToken}>recuperar senha</a>
                            </div>`,
        });
        return message;
    }
}
