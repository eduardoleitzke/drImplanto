import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IMailProvider } from "../../../../shared/container/providers/MailProvider/IMailProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class SendForgtoPasswordMailUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository,
        @inject("EtherealMailProvider")
        private mailProvider: IMailProvider
    ) {}
    async execute(email: string) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User does't not exists", "emailNotFound");
        }

        const token = sign({ email }, auth.secret, { expiresIn: "3h" });

        await this.mailProvider.sendMail(
            email,
            "Recuperação de senha",
            `O nlik para o reset é ${token}`
        );
    }
}
