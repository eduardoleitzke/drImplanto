import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class VerifyIfEmailExistsUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(email: string): Promise<void> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);
        if (emailAlreadyExists) {
            throw new AppError("Email Already Exists", "emailError", 409);
        }
    }
}
