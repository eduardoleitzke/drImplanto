/* eslint-disable no-underscore-dangle */
import { compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IPayload {
    id: string;
    email: string;
    haveAssignature: boolean;
}

interface IExecute {
    token: string;
    sub: IPayload;
}

@injectable()
export class AuthenticationUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}
    async execute({ email, password }: IRequest): Promise<IExecute> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError(
                "Email or pasword incorrect!",
                "loginServerError",
                401
            );
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError(
                "Email or pasword incorrect!",
                "loginServerError",
                401
            );
        }

        const token = sign(
            {
                id: user._id,
                email: user.email,
                haveAssignement: user.haveAssignement,
            },
            auth.secret,
            {
                subject: user._id.toString(),
                expiresIn: auth.expiresIn,
            }
        );
        const sub = verify(token, auth.secret) as IPayload;
        return { token, sub };
    }
}
