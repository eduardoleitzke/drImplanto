import { hash, compareSync } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IExecuteDate {
    password: string;
    email: string;
}

@injectable()
export class ChangePasswordUseCase {
    constructor(
        @inject("UserRepository")
        private usersRepository: IUserRepository
    ) {}

    async execute({ password, email }: IExecuteDate) {
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Something dosen't works", "findUser", 400);
        }
        const passwordHash = await hash(password, 8);
        await this.usersRepository.changePassword(passwordHash, email);
    }
}
