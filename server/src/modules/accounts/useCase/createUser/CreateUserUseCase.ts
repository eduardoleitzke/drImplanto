import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUser, IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        birthday,
        cpf,
        email,
        lastName,
        name,
        password,
        phone,
    }: IUser): Promise<void> {
        const emailAlreadyExists = await this.userRepository.findByEmail(email);
        if (emailAlreadyExists) {
            throw new AppError("Email Already Exists", "emailError", 409);
        }
        const cpfAlreadyExists = await this.userRepository.findByCpf(cpf);
        if (cpfAlreadyExists) {
            throw new AppError("Cpf Already Exists", "cpfError", 409);
        }
        const passwordHash = await hash(password, 8);
        await this.userRepository.create({
            name,
            birthday,
            cpf,
            email,
            lastName,
            password: passwordHash,
            phone,
        });
    }
}
